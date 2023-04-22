import { SourceFileContext } from '../grammar/CWScriptParser';
import * as AST from '../ast';
import { Diagnostic } from 'vscode-languageserver';
export interface ParseResult {
    ast: AST.SourceFile | null;
    diagnostics: Diagnostic[];
}
export declare class CWScriptParser {
    static parse(sourceInput: string): ParseResult;
    static antlrParse(sourceInput: string): SourceFileContext;
}
