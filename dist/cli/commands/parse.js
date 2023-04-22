"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const commander_1 = require("commander");
const fs_1 = require("fs");
const parser_1 = require("../../parser");
exports.command = new commander_1.Command('parse');
exports.command.option('<filename>', 'File to parse (default <STDIN>)');
exports.command.option('-o,--output <outfile>', 'File to write AST to, (default <STDOUT>)');
exports.command.option('-v,--verbose', 'Show verbose logs');
exports.command.option('-x,--format <format>', 'Format to write AST in (json|sexpr)', /^(json|sexpr)$/i, 'json');
exports.command.description('Parse a source file <filename> to AST and write to <outfile>');
exports.command.action((filename) => {
    const fileSourceText = (0, fs_1.readFileSync)(filename, 'utf8');
    (0, fs_1.writeFileSync)('/dev/stdout', JSON.stringify(parser_1.CWScriptParser.parse(fileSourceText)));
});
exports.default = exports.command;
//# sourceMappingURL=parse.js.map