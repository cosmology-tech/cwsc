"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CWScriptParser = void 0;
const antlr4ts_1 = require("antlr4ts");
const CWScriptLexer_1 = require("../grammar/CWScriptLexer");
const CWScriptParser_1 = require("../grammar/CWScriptParser");
const visitor_1 = require("../parser/visitor");
const listener_1 = require("../parser/listener");
const position_1 = require("../util/position");
class CWScriptParser {
    static parse(sourceInput) {
        let sourceText = new position_1.TextView(sourceInput);
        let tree = CWScriptParser.antlrParse(sourceInput);
        let validator = new listener_1.CWScriptParseTreeValidator(tree, sourceText, [
            listener_1.CheckSymbolsDeclaredBeforeUse,
        ]);
        validator.validate();
        if (!validator.hasErrors()) {
            return {
                ast: new visitor_1.CWScriptASTBuilderVisitor().visitSourceFile(tree),
                diagnostics: validator.diagnostics,
            };
        }
        else {
            return {
                ast: null,
                diagnostics: validator.diagnostics,
            };
        }
    }
    static antlrParse(sourceInput) {
        let antlrLexer = new CWScriptLexer_1.CWScriptLexer(antlr4ts_1.CharStreams.fromString(sourceInput));
        let antlrParser = new CWScriptParser_1.CWScriptParser(new antlr4ts_1.CommonTokenStream(antlrLexer));
        let tree = antlrParser.sourceFile();
        return tree;
    }
}
exports.CWScriptParser = CWScriptParser;
//# sourceMappingURL=index.js.map