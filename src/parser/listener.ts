import { CWScriptParserListener } from '../grammar/CWScriptParserListener';
import * as P from '../grammar/CWScriptParser';

import { SymbolTable } from '../util/symbol-table';
import { ParserRuleContext } from 'antlr4ts';
import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { getPosition, TextView } from '../util/position';
import { SourceFileContext } from '../grammar/CWScriptParser';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';

export class ValidationStage implements CWScriptParserListener {
  protected scopes: SymbolTable[] = [];
  protected depth: {
    [key: string]: number;
  } = {};

  constructor(public validator: CWScriptParseTreeValidator) {}

  enterEveryRule(ctx: ParserRuleContext) {}

  exitEveryRule(ctx: ParserRuleContext) {}

  public isInside(ruleName: string): boolean {
    return this.validator.isInside(ruleName);
  }

  public get scope(): SymbolTable {
    return this.validator.scope;
  }

  public pushScope(scope?: SymbolTable) {
    this.validator.pushScope(scope);
  }

  public popScope() {
    return this.validator.popScope();
  }
}

export class CheckSymbolsDeclaredBeforeUse extends ValidationStage {
  enterIdentExpr(ctx: P.IdentExprContext) {
    if (!this.scope.hasSymbol(ctx.ident().text)) {
      this.validator.addError(
        ctx,
        'Symbol `' + ctx.text + '` used before definition.'
      );
    }
  }

  // definitions below
  enterIdentBinding_(ctx: P.IdentBinding_Context) {
    this.scope.setSymbol(ctx._name.text, '');
  }

  enterImportItemsStmt(ctx: P.ImportItemsStmtContext) {
    ctx._items.forEach((sym) => {
      this.scope.setSymbol(sym.text, '');
    });
  }

  enterParam(ctx: P.ParamContext) {
    this.scope.setSymbol(ctx._name.text, '');
  }

  enterInstantiateDefn(ctx: P.InstantiateDefnContext) {
    this.scope.setSymbol('#instantiate', '');
  }

  enterFnDefn(ctx: P.FnDefnContext) {
    if (ctx._name) {
      this.scope.setSymbol(ctx._name.text, '');
    }
  }

  enterStructDefn(ctx: P.StructDefnContext) {
    if (ctx._name) {
      this.scope.setSymbol(ctx._name.text, '');
    }
  }

  enterEnumDefn(ctx: P.EnumDefnContext) {
    this.scope.setSymbol(ctx._name.text, '');
  }
}

export class CWScriptParseTreeValidator implements CWScriptParserListener {
  public started: boolean = false;
  public completed: boolean = false;
  public diagnostics: Diagnostic[] = [];
  public stages: ValidationStage[] = [];
  protected scopes: SymbolTable[] = [];
  protected depth: {
    [key: string]: number;
  } = {};

  public isInside(ruleName: string): boolean {
    return this.depth[ruleName] > 0;
  }

  public get scope(): SymbolTable {
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

  constructor(
    public tree: SourceFileContext,
    public sourceText: TextView,
    stages: (new (...a: any[]) => ValidationStage)[] = []
  ) {
    this.scopes.push(new SymbolTable());
    for (let stage of stages) {
      this.stages.push(new stage(this));
    }
  }

  public hasErrors(): boolean {
    return this.diagnostics.some(
      (d) => d.severity === DiagnosticSeverity.Error
    );
  }

  public validate() {
    this.started = true;
    ParseTreeWalker.DEFAULT.walk(this, this.tree);
    this.completed = true;
  }

  enterEveryRule(ctx: ParserRuleContext) {
    let ruleName = ctx.constructor.name.slice(0, -1 * 'Context'.length);
    if (this.depth[ruleName] === undefined) {
      this.depth[ruleName] = 0;
    } else {
      this.depth[ruleName]++;
    }
    for (let stage of this.stages) {
      stage.enterEveryRule(ctx);
      let fnName = `enter${ruleName}`;
      if (fnName in stage) {
        (stage as any)[fnName](ctx);
      }
    }
  }

  exitEveryRule(ctx: ParserRuleContext) {
    let ruleName = ctx.constructor.name.slice(0, -1 * 'Context'.length);
    for (let stage of this.stages) {
      stage.exitEveryRule(ctx);
      let fnName = `exit${ruleName}`;
      if (fnName in stage) {
        (stage as any)[fnName](ctx);
      }
    }
    this.depth[ruleName]--;
  }

  public addError(ctx: ParserRuleContext, message: string) {
    this.addDiagnostic(ctx, DiagnosticSeverity.Error, message);
  }

  public addWarning(ctx: ParserRuleContext, message: string) {
    this.addDiagnostic(ctx, DiagnosticSeverity.Warning, message);
  }

  public addInfo(ctx: ParserRuleContext, message: string) {
    this.addDiagnostic(ctx, DiagnosticSeverity.Information, message);
  }

  public addHint(ctx: ParserRuleContext, message: string) {
    this.addDiagnostic(ctx, DiagnosticSeverity.Hint, message);
  }

  public addDiagnostic(
    ctx: ParserRuleContext,
    severity: DiagnosticSeverity,
    message: string
  ) {
    let pos = getPosition(ctx);
    let range = this.sourceText.range(pos.start, pos.end);
    if (!range) {
      throw new Error('Unable to get range for diagnostic.');
    }
    this.diagnostics.push({
      severity,
      message,
      range,
    });
  }
}
