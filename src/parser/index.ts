// @ts-nocheck
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CWScriptLexer as ANTLRCWScriptLexer } from '../grammar/CWScriptLexer';
import {
  CWScriptParser as ANTLRCWScriptParser,
  SourceFileContext,
} from '../grammar/CWScriptParser';
import { CWSASTBuilderVisitor } from '../parser/visitor';
import {
  CheckSymbolsDeclaredBeforeUse,
  CWSDiagnosticsCollector,
  CWSParseTreeValidator,
  CWSSyntaxErrorListener,
} from './validation';
import * as AST from '../ast';
import { TextView } from '../util/position';
import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { DgnsOk, DgnsResult, DgnsErr } from '../util/result';
import path from 'path';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import * as P from '../grammar/CWScriptParser';
import { CWScriptParserListener } from '../grammar/CWScriptParserListener';

export interface ParserEnv {
  get sourceFile(): string | null;

  get sourceText(): TextView;

  get diagnostics(): Diagnostic[];
}

export class Env<T = any> implements ParserEnv {
  get sourceFile(): string | null {
    return this.previous.sourceFile;
  }

  get sourceText(): TextView {
    return this.previous.sourceText;
  }

  get diagnostics(): Diagnostic[] {
    return this.previous._diagnostics;
  }

  private _diagnostics: Diagnostic[] = [];

  constructor(public previous: Env | ParserEnv, public data: T) {
    super(previous, data);
  }

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
  constructor(public env: Env<T>) {}

  abstract performChecks<U>(): DgnsResult<U>;
}

export class BuildAST extends CWSValidator<SourceFileContext> {
  public performChecks(): DgnsResult<Checked2AST> {
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
    let validator = new CWSParseTreeValidator(this.sourceText);
    ParseTreeWalker.walk(this, this.env.data);
    return DgnsResult.Ok(
      new ParseTree2Checked(this, this.env.data),
      this.diagnostics
    );
  }

  enterIdentExpr(ctx: P.IdentExprContext) {
    if (!this.scope[ctx.ident().text]) {
      this.diagnostics.push({
        message: `Symbol '${ctx.ident().text}' is not declared`,
        range: this.env.sourceText.rangeFromCtx(ctx),
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
  constructor(public sourceInput: string, sourceFile: string | null = null) {
    super();
    this.sourceText = new TextView(sourceInput);
    this.sourceFile = sourceFile ? path.resolve(sourceFile) : null;
  }

  public parse(): DgnsResult<Checked2AST> {
    return this.antlrParse()
      .andThen((env) =>
        env.run<ParseTree2Checked>(CheckSymbolsDeclaredBeforeUse)
      )
      .andThen((env) => env.run<Checked2AST>(BuildAST));
  }

  protected antlrParse(): DgnsOk<Source2ParseTree> {
    let syntaxErrorListener = new CWSSyntaxErrorListener();
    let antlrLexer = new ANTLRCWScriptLexer(
      CharStreams.fromString(sourceInput)
    );
    antlrLexer.removeErrorListeners();
    antlrLexer.addErrorListener(syntaxErrorListener);
    let antlrParser = new ANTLRCWScriptParser(
      new CommonTokenStream(antlrLexer)
    );
    antlrParser.removeErrorListeners();
    antlrParser.addErrorListener(syntaxErrorListener);

    let tree = antlrParser.sourceFile();
    // special case
    return DgnsResult.Ok(
      new Source2ParseTree(this, tree),
      syntaxErrorListener.diagnostics
    );
  }
}
