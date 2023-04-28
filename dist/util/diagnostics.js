"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorReportWithCodeSnippet = void 0;
const chalk_1 = __importDefault(require("chalk"));
function errorReportWithCodeSnippet(filename, sourceText, diagnostic) {
    let res = '';
    let { range, message } = diagnostic;
    let filenameWithRange = `${filename}:${range.start.line + 1}:${range.start.character + 1}-${range.end.line + 1}:${range.end.character + 1}`;
    res += `[ERROR] ${filenameWithRange}\n`;
    res += `${message}\n\n...\n`;
    let lineNoWidth = 5;
    let gutterWidth = lineNoWidth + 2;
    let makeLine = (line, text) => {
        return chalk_1.default.dim(`${line.toString().padStart(lineNoWidth, ' ')}| ${text}\n`);
    };
    let makeErrorLine = (line, text) => {
        return `${chalk_1.default.redBright(chalk_1.default.bold(line.toString().padStart(lineNoWidth, ' ')) + '|')} ${text}\n`;
    };
    sourceText.surroundingLinesOfRange(range, 5).forEach((x) => {
        // if this is the starting line, make a pointer
        // if range.start.line <= x.line <= range.end.line, highlight the line
        if (x.line >= range.start.line && x.line <= range.end.line) {
            // only highlight the part of the line that is in the range
            let start = x.line === range.start.line ? range.start.character : 0;
            let end = x.line === range.end.line ? range.end.character : x.text.length;
            res += makeErrorLine(x.line, chalk_1.default.dim(x.text.slice(0, start)) +
                chalk_1.default.bold(chalk_1.default.redBright(x.text.slice(start, end))) +
                chalk_1.default.dim(x.text.slice(end)));
            if (x.line === range.end.line) {
                res += chalk_1.default.bold(chalk_1.default.yellow(' '.repeat(gutterWidth + range.end.character) +
                    '^ ' +
                    message +
                    '\n'));
            }
        }
        else {
            res += makeLine(x.line, x.text);
        }
    });
    res += `...\n\n`;
    return res;
}
exports.errorReportWithCodeSnippet = errorReportWithCodeSnippet;
//# sourceMappingURL=diagnostics.js.map