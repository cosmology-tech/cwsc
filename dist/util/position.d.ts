import { ParserRuleContext } from 'antlr4ts';
import { LinesAndColumns } from 'lines-and-columns';
export declare class TextView {
    text: string;
    lc: LinesAndColumns;
    textLines: string[];
    constructor(text: string);
    /**
     * Returns the character at the given line and character.
     * If char is undefined, returns the entire line.
     * If oneIndexed is true, line and char are 1-indexed.
     * @param line
     * @param char
     * @param oneIndexed
     */
    at(line: number, char?: number, oneIndexed?: boolean): string;
    /**
     * Returns the text in the given range.
     * If oneIndexed is true, line and char in the Range are 1-indexed.
     * @param range
     * @param oneIndexed
     */
    textInRange(range: Range, oneIndexed?: boolean): string | null;
    /**
     * Returns the lines in the given range.
     * If oneIndexed is true, `startLine` and `endLine` are 1-indexed.
     * By default, it expects 0-indexed line numbers.
     * @param startLine
     * @param endLine
     * @param oneIndexed
     */
    lines(startLine: number, endLine: number, oneIndexed?: boolean): string[];
    /**
     * Returns the lines surrounding the given line.
     * If oneIndexed is true, `line` is 1-indexed.
     * By default, it expects 0-indexed line numbers.
     *
     * @param line Line number to get surrounding lines for.
     * @param numLines Number of lines to return on either side of the given line.
     * @param oneIndexed Whether the given line number is 1-indexed or 0-indexed.
     */
    surroundingLines(line: number, numLines: number, oneIndexed?: boolean): {
        text: string;
        line: number;
    }[];
    /**
     * Returns the lines surrounding the given range.
     * If oneIndexed is true, `startLine` and `endLine` are 1-indexed.
     * By default, it expects 0-indexed line numbers.
     * @param range
     * @param numLines
     * @param oneIndexed
     */
    surroundingLinesOfRange(range: Range, numLines: number, oneIndexed?: boolean): {
        text: string;
        line: number;
    }[];
    /**
     * Returns the text surrounding the given line.
     * If oneIndexed is true, `line` is 1-indexed.
     * By default, it expects 0-indexed line numbers.
     * @param line
     * @param numLines
     * @param oneIndexed
     */
    surroundingText(line: number, numLines: number, oneIndexed?: boolean): string;
    /**
     * Returns the line and character for the given index.
     * By default, the line and character returned are 0-indexed unless specified
     * by the `makeOneIndexed` parameter.
     *
     * @param ix
     * @param makeOneIndexed Whether the returned line and character should be 1-indexed or 0-indexed.
     */
    lcAtIndex(ix: number, makeOneIndexed?: boolean): [number, number] | null;
    /**
     * Returns the Range object for the given indices of start and
     * end. Note that the end index is inclusive.
     *
     * @param start The start index
     * @param end The end index
     * @param makeOneIndexed Whether the returned Range should be 1-indexed or 0-indexed.
     * @returns The Range object, or null if the indices are invalid.
     */
    range(start: number, end: number, makeOneIndexed?: boolean): Range | null;
}
export declare function getPosition(ctx: ParserRuleContext): NodePosition;
export interface NodePosition {
    start: number;
    end: number;
}
export interface Range {
    start: {
        line: number;
        character: number;
    };
    end: {
        line: number;
        character: number;
    };
}
