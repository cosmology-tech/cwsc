import { CWScriptParserListener } from '../grammar/CWScriptParserListener';
import * as P from '../grammar/CWScriptParser';
import { SymbolTable } from '../util/symbol-table';
import { ParserRuleContext } from 'antlr4ts';
import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { TextView } from '../util/position';
import { SourceFileContext } from '../grammar/CWScriptParser';
export declare class ValidationStage implements CWScriptParserListener {
    validator: CWScriptParseTreeValidator;
    protected scopes: SymbolTable[];
    protected depth: {
        [key: string]: number;
    };
    constructor(validator: CWScriptParseTreeValidator);
    enterEveryRule(ctx: ParserRuleContext): void;
    exitEveryRule(ctx: ParserRuleContext): void;
    isInside(ruleName: string): boolean;
    get scope(): SymbolTable;
    pushScope(scope?: SymbolTable): void;
    popScope(): SymbolTable | undefined;
}
export declare class CheckSymbolsDeclaredBeforeUse extends ValidationStage {
    enterIdentExpr(ctx: P.IdentExprContext): void;
    enterIdentBinding_(ctx: P.IdentBinding_Context): void;
    enterImportItemsStmt(ctx: P.ImportItemsStmtContext): void;
    enterParam(ctx: P.ParamContext): void;
    enterInstantiateDefn(ctx: P.InstantiateDefnContext): void;
    enterFnDefn(ctx: P.FnDefnContext): void;
    enterStructDefn(ctx: P.StructDefnContext): void;
    enterEnumDefn(ctx: P.EnumDefnContext): void;
}
export declare class CWScriptParseTreeValidator implements CWScriptParserListener {
    tree: SourceFileContext;
    sourceText: TextView;
    started: boolean;
    completed: boolean;
    diagnostics: Diagnostic[];
    stages: ValidationStage[];
    protected scopes: SymbolTable[];
    protected depth: {
        [key: string]: number;
    };
    isInside(ruleName: string): boolean;
    get scope(): SymbolTable;
    pushScope(scope?: SymbolTable): void;
    popScope(): SymbolTable | undefined;
    constructor(tree: SourceFileContext, sourceText: TextView, stages?: (new (...a: any[]) => ValidationStage)[]);
    hasErrors(): boolean;
    validate(): void;
    enterEveryRule(ctx: ParserRuleContext): void;
    exitEveryRule(ctx: ParserRuleContext): void;
    addError(ctx: ParserRuleContext, message: string): void;
    addWarning(ctx: ParserRuleContext, message: string): void;
    addInfo(ctx: ParserRuleContext, message: string): void;
    addHint(ctx: ParserRuleContext, message: string): void;
    addDiagnostic(ctx: ParserRuleContext, severity: DiagnosticSeverity, message: string): void;
}
