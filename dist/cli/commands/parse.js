"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const BaseCommand_1 = require("../BaseCommand");
class ParseCommand extends BaseCommand_1.BaseCommand {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.init();
            for (const [flag, value] of Object.entries(this.flags)) {
                this.log(`${flag}: ${value}`);
            }
            return this.flags;
        });
    }
}
exports.default = ParseCommand;
ParseCommand.description = 'Parse a CWScript source file into AST.';
ParseCommand.examples = [
    `<%= config.bin %> <%= command.id %> FILE`,
    `<%= config.bin %> <%= command.id %> FILE --format sexp`,
];
ParseCommand.flags = {
    format: core_1.Flags.string({
        description: 'Desired format of the parsed AST output',
        required: true,
        options: ['json', 'sexp'],
        default: 'json',
    }),
    out: core_1.Flags.string({
        char: 'o',
        description: 'Output file to write the parsed AST to',
        required: false,
    }),
};
ParseCommand.args = {
    file: core_1.Args.file({
        description: 'File to parse into AST; if not provided, can read from <STDIN>.',
        required: true,
    }),
};
//# sourceMappingURL=parse.js.map