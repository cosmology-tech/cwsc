"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorReportWithCodeSnippet = void 0;
let chalk;
(async () => {
    chalk = await Promise.resolve().then(() => __importStar(require('chalk')));
})();
function errorReportWithCodeSnippet(filename, sourceText, diagnostic) {
    let res = '';
    let { range, message } = diagnostic;
    let filenameWithRange = `${filename}:${range.start.line + 1}:${range.start.character + 1}-${range.end.line + 1}:${range.end.character + 1}`;
    res += `[ERROR] ${filenameWithRange}\n`;
    res += `${message}\n\n...`;
    let lineNoWidth = 5;
    let gutterWidth = lineNoWidth + 2;
    let makeLine = (line, text) => {
        return chalk.dim(`${line.toString().padStart(lineNoWidth, ' ')}| ${text}\n`);
    };
    let makeErrorLine = (line, text) => {
        return `${chalk.redBright(chalk.bold(line.toString().padStart(lineNoWidth, ' ')) + '|')} ${text}\n`;
    };
    sourceText.surroundingLinesOfRange(range, 5, true).forEach((x) => {
        // if this is the starting line, make a pointer
        // if range.start.line <= x.line <= range.end.line, highlight the line
        if (x.line >= range.start.line && x.line <= range.end.line) {
            // only highlight the part of the line that is in the range
            let start = x.line === range.start.line ? range.start.character - 1 : 0;
            let end = x.line === range.end.line ? range.end.character - 1 : x.text.length;
            res += makeErrorLine(x.line, chalk.dim(x.text.slice(0, start)) +
                chalk.bold(chalk.redBright(x.text.slice(start, end))) +
                chalk.dim(x.text.slice(end)));
            if (x.line === range.end.line) {
                res += chalk.bold(chalk.yellow(' '.repeat(gutterWidth + range.end.character - 2) +
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