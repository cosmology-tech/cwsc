// @ts-nocheck
import { ANTLRErrorListener, CharStreams, CommonTokenStream } from 'antlr4ts';
import { CWScriptLexer as ANTLRCWScriptLexer } from '../grammar/CWScriptLexer';
import {
  CWScriptParser as ANTLRCWScriptParser,
  SourceFileContext,
} from '../grammar/CWScriptParser';
import { CWSASTBuilderVisitor } from '../parser/visitor';
import * as AST from '../ast';
import { TextView } from '../util/position';
import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { DgnsOk, DgnsResult, DgnsErr } from '../util/result';
import path from 'path';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import * as P from '../grammar/CWScriptParser';
import { CWScriptParserListener } from '../grammar/CWScriptParserListener';
import { RecognitionException } from 'antlr4ts/RecognitionException';

export interface ParserEnv {
  getSourceFile(): string | null;

  getSourceText(): TextView;

  getDiagnostics(): Diagnostic[];
}

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

export class CWSSyntaxErrorListener
  extends CWSDiagnosticsCollector
  implements ANTLRErrorListener<any>
{
  public diagnostics: Diagnostic[] = [];

  syntaxError(
    recognizer: any,
    offendingSymbol: any,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ) {
    this.diagnostics.push({
      severity: DiagnosticSeverity.Error,
      message: 'SyntaxError: ' + msg,
      range: {
        start: { line: line - 1, character: charPositionInLine },
        end: { line: line - 1, character: charPositionInLine },
      },
    });
  }
}

export class Env<T = any> implements ParserEnv {
  getSourceFile(): string | null {
    return this.previous.sourceFile;
  }

  getSourceText(): TextView {
    return this.previous.sourceText;
  }

  getDiagnostics(): Diagnostic[] {
    return this.previous.diagnostics;
  }

  private _diagnostics: Diagnostic[] = [];

  constructor(public previous: Env | ParserEnv, public data: T) {}

  public run<N>(
    validator: new (...a: any[]) => CWSValidator<T>
  ): DgnsResult<N> {
    return new validator(this).performChecks();
  }
}

export class Source2ParseTree extends Env<SourceFileContext> {}

export class ParseTree2Checked extends Env<SourceFileContext> {}

export class Checked2AST extends Env<AST.SourceFile> {}

export abstract class CWSValidator<T> extends CWSDiagnosticsCollector {
  constructor(public env: Env<T>) {
    super();
  }

  abstract performChecks<U>(): DgnsResult<U>;
}

export class BuildAST extends CWSValidator<SourceFileContext> {
  public performChecks(): DgnsResult<Checked2AST> {
    if (this.env.getDiagnostics().errors > 0) {
      return DgnsResult.Err(
        'Cannot not build AST, syntax errors exist.',
        this.env.getDiagnostics()
      );
    }
    let visitor = new CWSASTBuilderVisitor(this.sourceText);
    let ast = visitor.visitSourceFile(this.env.data);
    return DgnsResult.Ok(new Checked2AST(this, ast), this.diagnostics);
  }
}

export class CheckSymbolsDeclaredBeforeUse
  extends CWSValidator<SourceFileContext>
  implements CWScriptParserListener
{
  public scopes: any = [{}];

  get scope() {
    return this.scopes[this.scopes.length - 1];
  }

  constructor(public env: Env<SourceFileContext>) {
    super();
  }

  public performChecks(): DgnsResult<ParseTree2Checked> {
    ParseTreeWalker.DEFAULT.walk(this, this.env.data);
    return DgnsResult.Ok(
      new ParseTree2Checked(this, this.env.data),
      this.diagnostics
    );
  }

  enterIdentExpr(ctx: P.IdentExprContext) {
    if (!this.scope[ctx.ident().text]) {
      this.diagnostics.push({
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

export class CWSParser extends CWSDiagnosticsCollector implements ParserEnv {
  public getSourceText(): TextView {
    return this.sourceText;
  }

  public getSourceFile(): string | null {
    return this.sourceFile;
  }

  public getDiagnostics(): Diagnostic[] {
    return this.diagnostics;
  }

  constructor(public sourceInput: string, sourceFile: string | null = null) {
    super();
    this.sourceText = new TextView(sourceInput);
    this.sourceFile = sourceFile ? path.resolve(sourceFile) : null;
  }

  public parse(): DgnsResult<Checked2AST> {
    return (
      this.antlrParse()
        // .andThen((env) =>
        //   env.run<ParseTree2Checked>(CheckSymbolsDeclaredBeforeUse)
        // )
        .andThen((parseTree, d) => {
          if (
            d.filter((d) => d.severity === DiagnosticSeverity.Error).length > 0
          )
            return DgnsResult.Err('Syntax error occurred while parsing..', d);
        })
    );
  }

  protected antlrParse(): DgnsOk<SourceFileContext> {
    let syntaxErrorListener = new CWSSyntaxErrorListener();
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
    let diagnostics = syntaxErrorListener.diagnostics;

    return DgnsResult.Ok(new Source2ParseTree(this, tree), diagnostics);
  }
}
