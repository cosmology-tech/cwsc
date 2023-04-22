"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
const BaseCommand_1 = require("../BaseCommand");
const parser_1 = require("../../parser");
const fs_1 = __importDefault(require("fs"));
const vscode_languageserver_1 = require("vscode-languageserver");
const position_1 = require("../../util/position");
const diagnostics_1 = require("../../util/diagnostics");
class ParseCommand extends BaseCommand_1.BaseCommand {
    async run() {
        const { args, flags } = await this.parse(ParseCommand);
        if (!args.file) {
            this.error('No file provided to parse.');
        }
        this.debug(`Parsing ${args.file} into ${flags.format}...`);
        let sourceInput = fs_1.default.readFileSync(args.file, 'utf8');
        let sourceText = new position_1.TextView(sourceInput);
        let res = parser_1.CWScriptParser.parse(sourceInput);
        if (!res.ast) {
            for (let err of res.diagnostics.filter((x) => x.severity === vscode_languageserver_1.DiagnosticSeverity.Error)) {
                this.log((0, diagnostics_1.errorReportWithCodeSnippet)(args.file, sourceText, err));
            }
            this.error('No AST produced by parser.');
        }
        if (flags.out) {
            fs_1.default.writeFileSync(flags.out, JSON.stringify(res.ast.toJSON()));
        }
        else {
            console.log(res.ast.toJSON());
        }
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
        description: 'File to parse into AST.',
        required: true,
        ignoreStdin: true,
        exists: true,
    }),
};
//# sourceMappingURL=parse.js.map