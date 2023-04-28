import { ANTLRErrorListener } from 'antlr4ts';
import { SourceFileContext } from '../grammar/CWScriptParser';
import * as AST from '../ast';
import { Diagnostic } from 'vscode-languageserver';
import * as P from '../grammar/CWScriptParser';
import { CWScriptParserListener } from '../grammar/CWScriptParserListener';
import { RecognitionException } from 'antlr4ts/RecognitionException';
export declare abstract class CWSDiagnosticsCollector {
    diagnostics: Diagnostic[];
    get errors(): Diagnostic[];
    get warnings(): Diagnostic[];
    get infos(): Diagnostic[];
    get hints(): Diagnostic[];
}
export declare class CWSSyntaxErrorListener implements ANTLRErrorListener<any> {
    parser: CWSParser;
    constructor(parser: CWSParser);
    syntaxError(recognizer: any, offendingSymbol: any, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void;
}
export declare class CheckSymbolsDeclaredBeforeUse implements CWScriptParserListener {
    parser: CWSParser;
    scopes: any;
    get scope(): any;
    constructor(parser: CWSParser);
    enterIdentExpr(ctx: P.IdentExprContext): void;
    enterIdentBinding_(ctx: P.IdentBinding_Context): void;
    enterImportItemsStmt(ctx: P.ImportItemsStmtContext): void;
    enterParam(ctx: P.ParamContext): void;
    enterInstantiateDefn(ctx: P.InstantiateDefnContext): void;
    enterFnDefn(ctx: P.FnDefnContext): void;
    enterStructDefn(ctx: P.StructDefnContext): void;
    enterEnumDefn(ctx: P.EnumDefnContext): void;
}
export declare class CWSParser extends CWSDiagnosticsCollector {
    sourceInput: string;
    constructor(sourceInput: string, sourceFile?: string | null);
    /**
     * This is the public-facing interface for parsing a source file.
     */
    parse(): AST.SourceFile;
    protected antlrParse(): SourceFileContext;
}
