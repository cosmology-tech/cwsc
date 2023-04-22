"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosition = exports.TextView = void 0;
const lines_and_columns_1 = require("lines-and-columns");
class TextView {
    constructor(text) {
        this.text = text;
        this.lc = new lines_and_columns_1.LinesAndColumns(text);
        this.textLines = this.text.split('\n');
    }
    /**
     * Returns the character at the given line and character.
     * If char is undefined, returns the entire line.
     * If oneIndexed is true, line and char are 1-indexed.
     * @param line
     * @param char
     * @param oneIndexed
     */
    at(line, char, oneIndexed = false) {
        if (oneIndexed) {
            line--;
            if (char !== undefined) {
                char--;
            }
        }
        if (char === undefined) {
            return this.textLines[line];
        }
        else {
            return this.textLines[line][char];
        }
    }
    /**
     * Returns the text in the given range.
     * If oneIndexed is true, line and char in the Range are 1-indexed.
     * @param range
     * @param oneIndexed
     */
    textInRange(range, oneIndexed = false) {
        // the LineAndColumns library expects a 0-indexed { line, column } object
        if (oneIndexed) {
            range = {
                start: {
                    line: range.start.line - 1,
                    character: range.start.character - 1,
                },
                end: {
                    line: range.end.line - 1,
                    character: range.end.character - 1,
                },
            };
        }
        let startLineCol = {
            line: range.start.line,
            column: range.start.character,
        };
        let endLineCol = {
            line: range.end.line,
            column: range.end.character,
        };
        let start = this.lc.indexForLocation(startLineCol);
        let end = this.lc.indexForLocation(endLineCol);
        if (start === null || end === null) {
            return null;
        }
        return this.text.slice(start, end + 1);
    }
    /**
     * Returns the lines in the given range.
     * If oneIndexed is true, `startLine` and `endLine` are 1-indexed.
     * By default, it expects 0-indexed line numbers.
     * @param startLine
     * @param endLine
     * @param oneIndexed
     */
    lines(startLine, endLine, oneIndexed = false) {
        if (oneIndexed) {
            startLine -= 1;
            endLine -= 1;
        }
        return this.textLines.slice(startLine, endLine + 1);
    }
    /**
     * Returns the lines surrounding the given line.
     * If oneIndexed is true, `line` is 1-indexed.
     * By default, it expects 0-indexed line numbers.
     *
     * @param line Line number to get surrounding lines for.
     * @param numLines Number of lines to return on either side of the given line.
     * @param oneIndexed Whether the given line number is 1-indexed or 0-indexed.
     */
    surroundingLines(line, numLines, oneIndexed = false) {
        if (oneIndexed) {
            line -= 1;
        }
        let start = Math.max(0, line - numLines);
        let end = Math.min(this.textLines.length - 1, line + numLines);
        return this.lines(start, end).map((x) => ({
            text: x,
            line: start++ + (oneIndexed ? 1 : 0),
        }));
    }
    /**
     * Returns the lines surrounding the given range.
     * If oneIndexed is true, `startLine` and `endLine` are 1-indexed.
     * By default, it expects 0-indexed line numbers.
     * @param range
     * @param numLines
     * @param oneIndexed
     */
    surroundingLinesOfRange(range, numLines, oneIndexed = false) {
        if (oneIndexed) {
            range = {
                start: {
                    line: range.start.line - 1,
                    character: range.start.character - 1,
                },
                end: {
                    line: range.end.line - 1,
                    character: range.end.character - 1,
                },
            };
        }
        let start = Math.max(0, range.start.line - numLines);
        let end = Math.min(this.textLines.length - 1, range.end.line + numLines);
        return this.lines(start, end).map((x) => ({
            text: x,
            line: start++ + (oneIndexed ? 1 : 0),
        }));
    }
    /**
     * Returns the text surrounding the given line.
     * If oneIndexed is true, `line` is 1-indexed.
     * By default, it expects 0-indexed line numbers.
     * @param line
     * @param numLines
     * @param oneIndexed
     */
    surroundingText(line, numLines, oneIndexed = false) {
        return this.surroundingLines(line, numLines, oneIndexed).join('\n');
    }
    /**
     * Returns the line and character for the given index.
     * By default, the line and character returned are 0-indexed unless specified
     * by the `makeOneIndexed` parameter.
     *
     * @param ix
     * @param makeOneIndexed Whether the returned line and character should be 1-indexed or 0-indexed.
     */
    lcAtIndex(ix, makeOneIndexed = false) {
        let loc = this.lc.locationForIndex(ix);
        if (loc === null) {
            return null;
        }
        if (makeOneIndexed) {
            loc.line += 1;
            loc.column += 1;
        }
        return [loc.line, loc.column];
    }
    /**
     * Returns the Range object for the given indices of start and
     * end. Note that the end index is inclusive.
     *
     * @param start The start index
     * @param end The end index
     * @param makeOneIndexed Whether the returned Range should be 1-indexed or 0-indexed.
     * @returns The Range object, or null if the indices are invalid.
     */
    range(start, end, makeOneIndexed = false) {
        let lcStart = this.lcAtIndex(start, makeOneIndexed);
        let lcEnd = this.lcAtIndex(end, makeOneIndexed);
        if (lcStart === null || lcEnd === null) {
            return null;
        }
        return {
            start: {
                line: lcStart[0],
                character: lcStart[1],
            },
            end: {
                line: lcEnd[0],
                character: lcEnd[1],
            },
        };
    }
}
exports.TextView = TextView;
function getPosition(ctx) {
    var _a;
    let start = ctx.start.startIndex;
    let end = ((_a = ctx.stop) === null || _a === void 0 ? void 0 : _a.stopIndex) || ctx.start.stopIndex;
    let length = end - start + 1;
    return {
        start,
        end: start + length,
    };
}
exports.getPosition = getPosition;
//# sourceMappingURL=position.js.map