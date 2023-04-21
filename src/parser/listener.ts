import { CWScriptParserListener } from '@/grammar/CWScriptParserListener';
import * as P from '@/grammar/CWScriptParser';

import { SymbolTable } from '@/util/symbol-table';
import { ParserRuleContext } from 'antlr4ts';
import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';

export class CWScriptScopeListener implements CWScriptParserListener {
  protected scopes: SymbolTable[] = [];
  protected depth: {
    [key: string]: number;
  } = {};

  enterEveryRule(ctx: ParserRuleContext) {
    let name = ctx.constructor.name;
    if (this.depth[name] === undefined) {
      this.depth[name] = 0;
    } else {
      this.depth[name]++;
    }
  }

  exitEveryRule(ctx: ParserRuleContext) {
    let name = ctx.constructor.name;
    this.depth[name]--;
  }

  public isInside(ctxC: new (...args: any[]) => ParserRuleContext): boolean {
    return this.depth[ctxC.constructor.name] > 0;
  }

  public get currentScope(): SymbolTable {
    return this.scopes[this.scopes.length - 1];
  }

  public pushScope(scope?: SymbolTable) {
    if (scope) {
      this.scopes.push(scope);
    } else {
      this.scopes.push(new SymbolTable());
    }
  }

  public popScope() {
    return this.scopes.pop();
  }
}

export abstract class CWScriptParseTreeValidation {
  abstract NAME: string;

  public started: boolean = false;
  public completed: boolean = false;
  public diagnostics: Diagnostic[] = [];

  constructor(public sourceText: string) {}

  public validate(tree: P.SourceFileContext) {
    this.started = true;
    this.run(tree);
    this.completed = true;
  }

  abstract run(tree: P.SourceFileContext): void;

  protected addError(ctx: ParserRuleContext, message: string) {
    this.addDiagnostic(ctx, DiagnosticSeverity.Error, message);
  }

  protected addWarning(ctx: ParserRuleContext, message: string) {
    this.addDiagnostic(ctx, DiagnosticSeverity.Warning, message);
  }

  protected addInfo(ctx: ParserRuleContext, message: string) {
    this.addDiagnostic(ctx, DiagnosticSeverity.Information, message);
  }

  protected addHint(ctx: ParserRuleContext, message: string) {
    this.addDiagnostic(ctx, DiagnosticSeverity.Hint, message);
  }

  protected addDiagnostic(
    ctx: ParserRuleContext,
    severity: DiagnosticSeverity,
    message: string
  ) {
    if (ctx.stop) {
      this.diagnostics.push({
        severity: severity,
        message: message,
        range: {
          start: {
            line: ctx.start.line - 1,
            character: ctx.start.charPositionInLine,
          },
          end: {
            line: ctx.stop.line - 1,
            character: ctx.stop.charPositionInLine + ctx.stop.text!.length,
          },
        },
      });
    }
  }
}
