"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CWSParser = exports.CheckSymbolsDeclaredBeforeUse = exports.CWSSyntaxErrorListener = exports.CWSDiagnosticsCollector = void 0;
// @ts-nocheck
const antlr4ts_1 = require("antlr4ts");
const CWScriptLexer_1 = require("../grammar/CWScriptLexer");
const CWScriptParser_1 = require("../grammar/CWScriptParser");
const visitor_1 = require("./visitor");
const position_1 = require("../util/position");
const vscode_languageserver_1 = require("vscode-languageserver");
const path_1 = __importDefault(require("path"));
class CWSDiagnosticsCollector {
    constructor() {
        this.diagnostics = [];
    }
    get errors() {
        return this.diagnostics.filter((d) => d.severity === vscode_languageserver_1.DiagnosticSeverity.Error);
    }
    get warnings() {
        return this.diagnostics.filter((d) => d.severity === vscode_languageserver_1.DiagnosticSeverity.Warning);
    }
    get infos() {
        return this.diagnostics.filter((d) => d.severity === vscode_languageserver_1.DiagnosticSeverity.Information);
    }
    get hints() {
        return this.diagnostics.filter((d) => d.severity === vscode_languageserver_1.DiagnosticSeverity.Hint);
    }
}
exports.CWSDiagnosticsCollector = CWSDiagnosticsCollector;
class CWSSyntaxErrorListener {
    constructor(parser) {
        this.parser = parser;
    }
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        this.parser.diagnostics.push({
            severity: vscode_languageserver_1.DiagnosticSeverity.Error,
            message: 'SyntaxError: ' + msg,
            range: {
                start: { line: line - 1, character: charPositionInLine },
                end: { line: line - 1, character: charPositionInLine + 1 },
            },
        });
    }
}
exports.CWSSyntaxErrorListener = CWSSyntaxErrorListener;
class CheckSymbolsDeclaredBeforeUse {
    get scope() {
        return this.scopes[this.scopes.length - 1];
    }
    constructor(parser) {
        this.parser = parser;
        this.scopes = [{}];
    }
    enterIdentExpr(ctx) {
        if (!this.scope[ctx.ident().text]) {
            this.parser.diagnostics.push({
                message: `Symbol '${ctx.ident().text}' is not declared`,
                range: this.env.sourceText.rangeFromNodeCtx(ctx),
                severity: vscode_languageserver_1.DiagnosticSeverity.Error,
            });
        }
    }
    // definitions below
    enterIdentBinding_(ctx) {
        this.scope[ctx._name.text] = '';
    }
    enterImportItemsStmt(ctx) {
        ctx._items.forEach((sym) => {
            this.scope[sym.text] = '';
        });
    }
    enterParam(ctx) {
        this.scope[ctx._name.text] = '';
    }
    enterInstantiateDefn(ctx) {
        this.scope[ctx._name.text] = '';
    }
    enterFnDefn(ctx) {
        if (ctx._name) {
            this.scope[ctx._name.text] = '';
        }
    }
    enterStructDefn(ctx) {
        if (ctx._name) {
            this.scope[ctx._name.text] = '';
        }
    }
    enterEnumDefn(ctx) {
        if (ctx._name) {
            this.scope[ctx._name.text] = '';
        }
    }
}
exports.CheckSymbolsDeclaredBeforeUse = CheckSymbolsDeclaredBeforeUse;
class CWSParser extends CWSDiagnosticsCollector {
    constructor(sourceInput, sourceFile = null) {
        super();
        this.sourceInput = sourceInput;
        this.sourceText = new position_1.TextView(sourceInput);
        this.sourceFile = sourceFile ? path_1.default.resolve(sourceFile) : null;
    }
    /**
     * This is the public-facing interface for parsing a source file.
     */
    parse() {
        let parseTree = this.antlrParse();
        if (this.errors.length > 0) {
            throw new Error('Syntax error occurred while parsing.');
        }
        // build AST
        let visitor = new visitor_1.CWSASTBuilderVisitor();
        return visitor.visitSourceFile(parseTree);
    }
    antlrParse() {
        let syntaxErrorListener = new CWSSyntaxErrorListener(this);
        let antlrLexer = new CWScriptLexer_1.CWScriptLexer(antlr4ts_1.CharStreams.fromString(this.sourceInput));
        antlrLexer.removeErrorListeners();
        antlrLexer.addErrorListener(syntaxErrorListener);
        let antlrParser = new CWScriptParser_1.CWScriptParser(new antlr4ts_1.CommonTokenStream(antlrLexer));
        antlrParser.removeErrorListeners();
        antlrParser.addErrorListener(syntaxErrorListener);
        let tree = antlrParser.sourceFile();
        return tree;
    }
}
exports.CWSParser = CWSParser;
//# sourceMappingURL=index.js.map