"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CWScriptParseTreeValidator = exports.CheckSymbolsDeclaredBeforeUse = exports.ValidationStage = void 0;
const symbol_table_1 = require("../util/symbol-table");
const vscode_languageserver_1 = require("vscode-languageserver");
const position_1 = require("../util/position");
const ParseTreeWalker_1 = require("antlr4ts/tree/ParseTreeWalker");
class ValidationStage {
    constructor(validator) {
        this.validator = validator;
        this.scopes = [];
        this.depth = {};
    }
    enterEveryRule(ctx) { }
    exitEveryRule(ctx) { }
    isInside(ruleName) {
        return this.validator.isInside(ruleName);
    }
    get scope() {
        return this.validator.scope;
    }
    pushScope(scope) {
        this.validator.pushScope(scope);
    }
    popScope() {
        return this.validator.popScope();
    }
}
exports.ValidationStage = ValidationStage;
class CheckSymbolsDeclaredBeforeUse extends ValidationStage {
    enterIdentExpr(ctx) {
        if (!this.scope.hasSymbol(ctx.ident().text)) {
            this.validator.addError(ctx, 'Symbol `' + ctx.text + '` used before definition.');
        }
    }
    // definitions below
    enterIdentBinding_(ctx) {
        this.scope.setSymbol(ctx._name.text, '');
    }
    enterImportItemsStmt(ctx) {
        ctx._items.forEach((sym) => {
            this.scope.setSymbol(sym.text, '');
        });
    }
    enterParam(ctx) {
        this.scope.setSymbol(ctx._name.text, '');
    }
    enterInstantiateDefn(ctx) {
        this.scope.setSymbol('#instantiate', '');
    }
    enterFnDefn(ctx) {
        if (ctx._name) {
            this.scope.setSymbol(ctx._name.text, '');
        }
    }
    enterStructDefn(ctx) {
        if (ctx._name) {
            this.scope.setSymbol(ctx._name.text, '');
        }
    }
    enterEnumDefn(ctx) {
        this.scope.setSymbol(ctx._name.text, '');
    }
}
exports.CheckSymbolsDeclaredBeforeUse = CheckSymbolsDeclaredBeforeUse;
class CWScriptParseTreeValidator {
    isInside(ruleName) {
        return this.depth[ruleName] > 0;
    }
    get scope() {
        return this.scopes[this.scopes.length - 1];
    }
    pushScope(scope) {
        if (scope) {
            this.scopes.push(scope);
        }
        else {
            this.scopes.push(new symbol_table_1.SymbolTable());
        }
    }
    popScope() {
        return this.scopes.pop();
    }
    constructor(tree, sourceText, stages = []) {
        this.tree = tree;
        this.sourceText = sourceText;
        this.started = false;
        this.completed = false;
        this.diagnostics = [];
        this.stages = [];
        this.scopes = [];
        this.depth = {};
        this.scopes.push(new symbol_table_1.SymbolTable());
        for (let stage of stages) {
            this.stages.push(new stage(this));
        }
    }
    hasErrors() {
        return this.diagnostics.some((d) => d.severity === vscode_languageserver_1.DiagnosticSeverity.Error);
    }
    validate() {
        this.started = true;
        ParseTreeWalker_1.ParseTreeWalker.DEFAULT.walk(this, this.tree);
        this.completed = true;
    }
    enterEveryRule(ctx) {
        let ruleName = ctx.constructor.name.slice(0, -1 * 'Context'.length);
        if (this.depth[ruleName] === undefined) {
            this.depth[ruleName] = 0;
        }
        else {
            this.depth[ruleName]++;
        }
        for (let stage of this.stages) {
            stage.enterEveryRule(ctx);
            let fnName = `enter${ruleName}`;
            if (fnName in stage) {
                stage[fnName](ctx);
            }
        }
    }
    exitEveryRule(ctx) {
        let ruleName = ctx.constructor.name.slice(0, -1 * 'Context'.length);
        for (let stage of this.stages) {
            stage.exitEveryRule(ctx);
            let fnName = `exit${ruleName}`;
            if (fnName in stage) {
                stage[fnName](ctx);
            }
        }
        this.depth[ruleName]--;
    }
    addError(ctx, message) {
        this.addDiagnostic(ctx, vscode_languageserver_1.DiagnosticSeverity.Error, message);
    }
    addWarning(ctx, message) {
        this.addDiagnostic(ctx, vscode_languageserver_1.DiagnosticSeverity.Warning, message);
    }
    addInfo(ctx, message) {
        this.addDiagnostic(ctx, vscode_languageserver_1.DiagnosticSeverity.Information, message);
    }
    addHint(ctx, message) {
        this.addDiagnostic(ctx, vscode_languageserver_1.DiagnosticSeverity.Hint, message);
    }
    addDiagnostic(ctx, severity, message) {
        let pos = (0, position_1.getPosition)(ctx);
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
exports.CWScriptParseTreeValidator = CWScriptParseTreeValidator;
//# sourceMappingURL=listener.js.map