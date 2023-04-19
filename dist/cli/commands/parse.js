"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const commander_1 = require("commander");
const fs_1 = require("fs");
const parser_1 = require("../../parser");
exports.command = new commander_1.Command('parse');
exports.command.argument('<filename>', 'The filename to parse');
// short form
exports.command.alias('p');
exports.command.description('Parse <filename> to <STDOUT>');
exports.command.action((filename) => {
    const fileSourceText = (0, fs_1.readFileSync)(filename, 'utf8');
    (0, fs_1.writeFileSync)('/dev/stdout', JSON.stringify(parser_1.CWScriptParser.parse(fileSourceText).toJSON()));
});
exports.default = exports.command;
//# sourceMappingURL=parse.js.map