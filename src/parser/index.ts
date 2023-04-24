// @ts-nocheck
import { ANTLRErrorListener, CharStreams, CommonTokenStream } from 'antlr4ts';
import { CWScriptLexer as ANTLRCWScriptLexer } from '../grammar/CWScriptLexer';
import {
  CWScriptParser as ANTLRCWScriptParser,
  SourceFileContext,
} from '../grammar/CWScriptParser';
import { CWSASTBuilderVisitor } from './visitor';
import * as AST from '../ast';
import { TextView } from '../util/position';
import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { DgnsOk, DgnsResult, DgnsErr } from '../util/result';
import path from 'path';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import * as P from '../grammar/CWScriptParser';
import { CWScriptParserListener } from '../grammar/CWScriptParserListener';
import { RecognitionException } from 'antlr4ts/RecognitionException';

export abstract class CWSDiagnosticsCollector {
  public diagnostics: Diagnostic[] = [];

  public get errors(): Diagnostic[] {
    return this.diagnostics.filter(
      (d) => d.severity === DiagnosticSeverity.Error
    );
  }

  public get warnings(): Diagnostic[] {
    return this.diagnostics.filter(
      (d) => d.severity === DiagnosticSeverity.Warning
    );
  }

  public get infos(): Diagnostic[] {
    return this.diagnostics.filter(
      (d) => d.severity === DiagnosticSeverity.Information
    );
  }

  public get hints(): Diagnostic[] {
    return this.diagnostics.filter(
      (d) => d.severity === DiagnosticSeverity.Hint
    );
  }
}

export class CWSSyntaxErrorListener implements ANTLRErrorListener<any> {
  constructor(public parser: CWSParser) {}

  syntaxError(
    recognizer: any,
    offendingSymbol: any,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ) {
    this.parser.diagnostics.push({
      severity: DiagnosticSeverity.Error,
      message: 'SyntaxError: ' + msg,
      range: {
        start: { line: line - 1, character: charPositionInLine },
        end: { line: line - 1, character: charPositionInLine + 1 },
      },
    });
  }
}

export class CheckSymbolsDeclaredBeforeUse implements CWScriptParserListener {
  public scopes: any = [{}];

  get scope() {
    return this.scopes[this.scopes.length - 1];
  }

  constructor(public parser: CWSParser) {}

  enterIdentExpr(ctx: P.IdentExprContext) {
    if (!this.scope[ctx.ident().text]) {
      this.parser.diagnostics.push({
        message: `Symbol '${ctx.ident().text}' is not declared`,
        range: this.env.sourceText.rangeFromNodeCtx(ctx),
        severity: DiagnosticSeverity.Error,
      });
    }
  }

  // definitions below
  enterIdentBinding_(ctx: P.IdentBinding_Context) {
    this.scope[ctx._name.text] = '';
  }

  enterImportItemsStmt(ctx: P.ImportItemsStmtContext) {
    ctx._items.forEach((sym) => {
      this.scope[sym.text] = '';
    });
  }

  enterParam(ctx: P.ParamContext) {
    this.scope[ctx._name.text] = '';
  }

  enterInstantiateDefn(ctx: P.InstantiateDefnContext) {
    this.scope[ctx._name.text] = '';
  }

  enterFnDefn(ctx: P.FnDefnContext) {
    if (ctx._name) {
      this.scope[ctx._name.text] = '';
    }
  }

  enterStructDefn(ctx: P.StructDefnContext) {
    if (ctx._name) {
      this.scope[ctx._name.text] = '';
    }
  }

  enterEnumDefn(ctx: P.EnumDefnContext) {
    if (ctx._name) {
      this.scope[ctx._name.text] = '';
    }
  }
}

export class CWSParser extends CWSDiagnosticsCollector {
  constructor(public sourceInput: string, sourceFile: string | null = null) {
    super();
    this.sourceText = new TextView(sourceInput);
    this.sourceFile = sourceFile ? path.resolve(sourceFile) : null;
  }

  /**
   * This is the public-facing interface for parsing a source file.
   */
  public parse(): AST.SourceFile {
    let parseTree = this.antlrParse();
    if (this.errors.length > 0) {
      throw new Error('Syntax error occurred while parsing.');
    }

    // build AST
    let visitor = new CWSASTBuilderVisitor();
    return visitor.visitSourceFile(parseTree);
  }

  protected antlrParse(): SourceFileContext {
    let syntaxErrorListener = new CWSSyntaxErrorListener(this);
    let antlrLexer = new ANTLRCWScriptLexer(
      CharStreams.fromString(this.sourceInput)
    );
    antlrLexer.removeErrorListeners();
    antlrLexer.addErrorListener(syntaxErrorListener);
    let antlrParser = new ANTLRCWScriptParser(
      new CommonTokenStream(antlrLexer)
    );
    antlrParser.removeErrorListeners();
    antlrParser.addErrorListener(syntaxErrorListener);

    let tree = antlrParser.sourceFile();
    return tree;
  }
}
