import { TextView } from '../util/position';
import { Diagnostic } from 'vscode-languageserver';
export declare function errorReportWithCodeSnippet(filename: string, sourceText: TextView, diagnostic: Diagnostic): string;
