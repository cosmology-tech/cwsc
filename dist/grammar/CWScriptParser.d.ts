import { ATN } from "antlr4ts/atn/ATN";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { CWScriptParserListener } from "./CWScriptParserListener";
import { CWScriptParserVisitor } from "./CWScriptParserVisitor";
export declare class CWScriptParser extends Parser {
    static readonly CONTRACT = 1;
    static readonly INTERFACE = 2;
    static readonly IMPORT = 3;
    static readonly IMPLEMENTS = 4;
    static readonly EXTENDS = 5;
    static readonly ERROR = 6;
    static readonly EVENT = 7;
    static readonly INSTANTIATE_NOW = 8;
    static readonly EXEC_NOW = 9;
    static readonly QUERY_NOW = 10;
    static readonly DELEGATE_EXEC = 11;
    static readonly INSTANTIATE = 12;
    static readonly EXEC = 13;
    static readonly QUERY = 14;
    static readonly REPLY = 15;
    static readonly FOR = 16;
    static readonly IN = 17;
    static readonly FROM = 18;
    static readonly STATE = 19;
    static readonly IF = 20;
    static readonly IS = 21;
    static readonly TRY = 22;
    static readonly CATCH = 23;
    static readonly ELSE = 24;
    static readonly NOT = 25;
    static readonly NONE = 26;
    static readonly MUT = 27;
    static readonly AND = 28;
    static readonly OR = 29;
    static readonly TRUE = 30;
    static readonly FALSE = 31;
    static readonly FN = 32;
    static readonly LET = 33;
    static readonly CONST = 34;
    static readonly FAIL = 35;
    static readonly RETURN = 36;
    static readonly STRUCT = 37;
    static readonly ENUM = 38;
    static readonly TYPE = 39;
    static readonly EMIT = 40;
    static readonly AS = 41;
    static readonly TILDE = 42;
    static readonly LPAREN = 43;
    static readonly RPAREN = 44;
    static readonly LBRACK = 45;
    static readonly RBRACK = 46;
    static readonly LBRACE = 47;
    static readonly RBRACE = 48;
    static readonly DOT = 49;
    static readonly COMMA = 50;
    static readonly D_QUEST = 51;
    static readonly QUEST = 52;
    static readonly BANG = 53;
    static readonly SEMI = 54;
    static readonly COLON = 55;
    static readonly D_COLON = 56;
    static readonly HASH = 57;
    static readonly AT = 58;
    static readonly AMP = 59;
    static readonly ARROW = 60;
    static readonly FAT_ARROW = 61;
    static readonly BAR = 62;
    static readonly S_QUOTE = 63;
    static readonly D_QUOTE = 64;
    static readonly EQ = 65;
    static readonly EQ_EQ = 66;
    static readonly NEQ = 67;
    static readonly PLUS = 68;
    static readonly PLUS_EQ = 69;
    static readonly MINUS = 70;
    static readonly MINUS_EQ = 71;
    static readonly MUL = 72;
    static readonly MUL_EQ = 73;
    static readonly DIV = 74;
    static readonly DIV_EQ = 75;
    static readonly MOD = 76;
    static readonly MOD_EQ = 77;
    static readonly LT = 78;
    static readonly LT_EQ = 79;
    static readonly GT = 80;
    static readonly GT_EQ = 81;
    static readonly POW = 82;
    static readonly Ident = 83;
    static readonly StringLiteral = 84;
    static readonly IntLiteral = 85;
    static readonly DecLiteral = 86;
    static readonly BoolLiteral = 87;
    static readonly CWSPEC_LINE_COMMENT = 88;
    static readonly CWSPEC_BLOCK_COMMENT = 89;
    static readonly LINE_COMMENT = 90;
    static readonly BLOCK_COMMENT = 91;
    static readonly WS = 92;
    static readonly RULE_sourceFile = 0;
    static readonly RULE_topLevelStmt = 1;
    static readonly RULE_contractDefn = 2;
    static readonly RULE_interfaceDefn = 3;
    static readonly RULE_contractBlock = 4;
    static readonly RULE_importStmt = 5;
    static readonly RULE_contractItem = 6;
    static readonly RULE_param = 7;
    static readonly RULE_paramList = 8;
    static readonly RULE_fnParams = 9;
    static readonly RULE_structDefn_fn = 10;
    static readonly RULE_errorDefn = 11;
    static readonly RULE_errorDefnBlock = 12;
    static readonly RULE_eventDefn = 13;
    static readonly RULE_eventDefnBlock = 14;
    static readonly RULE_stateDefnBlock = 15;
    static readonly RULE_stateDefn = 16;
    static readonly RULE_mapKeyDefn = 17;
    static readonly RULE_instantiateDefn = 18;
    static readonly RULE_instantiateDecl = 19;
    static readonly RULE_execDefn = 20;
    static readonly RULE_execDecl = 21;
    static readonly RULE_queryDefn = 22;
    static readonly RULE_queryDecl = 23;
    static readonly RULE_replyDefn = 24;
    static readonly RULE_enumDefn = 25;
    static readonly RULE_variant_ = 26;
    static readonly RULE_variant_struct = 27;
    static readonly RULE_variant_unit = 28;
    static readonly RULE_typeExpr = 29;
    static readonly RULE_typeLens = 30;
    static readonly RULE_typePath = 31;
    static readonly RULE_typeVariant = 32;
    static readonly RULE_typeDefn = 33;
    static readonly RULE_structDefn = 34;
    static readonly RULE_typeAliasDefn = 35;
    static readonly RULE_fnDefn = 36;
    static readonly RULE_annot = 37;
    static readonly RULE_callOptions = 38;
    static readonly RULE_stmt = 39;
    static readonly RULE_letStmt_ = 40;
    static readonly RULE_constStmt_ = 41;
    static readonly RULE_identBinding_ = 42;
    static readonly RULE_let_binding = 43;
    static readonly RULE_assignStmt_ = 44;
    static readonly RULE_assignLHS = 45;
    static readonly RULE_expr = 46;
    static readonly RULE_closureParams = 47;
    static readonly RULE_closure = 48;
    static readonly RULE_block = 49;
    static readonly RULE_tryCatchElseExpr_ = 50;
    static readonly RULE_catchClause = 51;
    static readonly RULE_arg = 52;
    static readonly RULE_memberVal = 53;
    static readonly RULE_literal = 54;
    static readonly RULE_ifStmt_ = 55;
    static readonly RULE_elseClause = 56;
    static readonly RULE_forStmt_ = 57;
    static readonly RULE_ident = 58;
    static readonly RULE_reservedKeyword = 59;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    sourceFile(): SourceFileContext;
    topLevelStmt(): TopLevelStmtContext;
    contractDefn(): ContractDefnContext;
    interfaceDefn(): InterfaceDefnContext;
    contractBlock(): ContractBlockContext;
    importStmt(): ImportStmtContext;
    contractItem(): ContractItemContext;
    param(): ParamContext;
    paramList(): ParamListContext;
    fnParams(): FnParamsContext;
    structDefn_fn(): StructDefn_fnContext;
    errorDefn(): ErrorDefnContext;
    errorDefnBlock(): ErrorDefnBlockContext;
    eventDefn(): EventDefnContext;
    eventDefnBlock(): EventDefnBlockContext;
    stateDefnBlock(): StateDefnBlockContext;
    stateDefn(): StateDefnContext;
    mapKeyDefn(): MapKeyDefnContext;
    instantiateDefn(): InstantiateDefnContext;
    instantiateDecl(): InstantiateDeclContext;
    execDefn(): ExecDefnContext;
    execDecl(): ExecDeclContext;
    queryDefn(): QueryDefnContext;
    queryDecl(): QueryDeclContext;
    replyDefn(): ReplyDefnContext;
    enumDefn(): EnumDefnContext;
    variant_(): Variant_Context;
    variant_struct(): Variant_structContext;
    variant_unit(): Variant_unitContext;
    typeExpr(): TypeExprContext;
    typeExpr(_p: number): TypeExprContext;
    typeLens(): TypeLensContext;
    typePath(): TypePathContext;
    typeVariant(): TypeVariantContext;
    typeDefn(): TypeDefnContext;
    structDefn(): StructDefnContext;
    typeAliasDefn(): TypeAliasDefnContext;
    fnDefn(): FnDefnContext;
    annot(): AnnotContext;
    callOptions(): CallOptionsContext;
    stmt(): StmtContext;
    letStmt_(): LetStmt_Context;
    constStmt_(): ConstStmt_Context;
    identBinding_(): IdentBinding_Context;
    let_binding(): Let_bindingContext;
    assignStmt_(): AssignStmt_Context;
    assignLHS(): AssignLHSContext;
    expr(): ExprContext;
    expr(_p: number): ExprContext;
    closureParams(): ClosureParamsContext;
    closure(): ClosureContext;
    block(): BlockContext;
    tryCatchElseExpr_(): TryCatchElseExpr_Context;
    catchClause(): CatchClauseContext;
    arg(): ArgContext;
    memberVal(): MemberValContext;
    literal(): LiteralContext;
    ifStmt_(): IfStmt_Context;
    elseClause(): ElseClauseContext;
    forStmt_(): ForStmt_Context;
    ident(): IdentContext;
    reservedKeyword(): ReservedKeywordContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private typeExpr_sempred;
    private expr_sempred;
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class SourceFileContext extends ParserRuleContext {
    EOF(): TerminalNode;
    topLevelStmt(): TopLevelStmtContext[];
    topLevelStmt(i: number): TopLevelStmtContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TopLevelStmtContext extends ParserRuleContext {
    importStmt(): ImportStmtContext | undefined;
    contractDefn(): ContractDefnContext | undefined;
    interfaceDefn(): InterfaceDefnContext | undefined;
    constStmt_(): ConstStmt_Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ContractDefnContext extends ParserRuleContext {
    _name: IdentContext;
    _base: TypePathContext;
    _typePath: TypePathContext;
    _interfaces: TypePathContext[];
    _body: ContractBlockContext;
    CONTRACT(): TerminalNode;
    ident(): IdentContext | undefined;
    EXTENDS(): TerminalNode | undefined;
    IMPLEMENTS(): TerminalNode | undefined;
    contractBlock(): ContractBlockContext | undefined;
    typePath(): TypePathContext[];
    typePath(i: number): TypePathContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class InterfaceDefnContext extends ParserRuleContext {
    _name: IdentContext;
    _base: TypePathContext;
    _body: ContractBlockContext;
    INTERFACE(): TerminalNode;
    ident(): IdentContext | undefined;
    EXTENDS(): TerminalNode | undefined;
    contractBlock(): ContractBlockContext | undefined;
    typePath(): TypePathContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ContractBlockContext extends ParserRuleContext {
    _contractItem: ContractItemContext;
    _body: ContractItemContext[];
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    contractItem(): ContractItemContext[];
    contractItem(i: number): ContractItemContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ImportStmtContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ImportStmtContext): void;
}
export declare class ImportAllStmtContext extends ImportStmtContext {
    _src: Token;
    IMPORT(): TerminalNode;
    MUL(): TerminalNode;
    FROM(): TerminalNode;
    StringLiteral(): TerminalNode | undefined;
    constructor(ctx: ImportStmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ImportItemsStmtContext extends ImportStmtContext {
    _ident: IdentContext;
    _items: IdentContext[];
    _src: Token;
    IMPORT(): TerminalNode;
    FROM(): TerminalNode;
    StringLiteral(): TerminalNode | undefined;
    LBRACE(): TerminalNode | undefined;
    RBRACE(): TerminalNode | undefined;
    ident(): IdentContext[];
    ident(i: number): IdentContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: ImportStmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ContractItemContext extends ParserRuleContext {
    typeDefn(): TypeDefnContext | undefined;
    constStmt_(): ConstStmt_Context | undefined;
    fnDefn(): FnDefnContext | undefined;
    errorDefn(): ErrorDefnContext | undefined;
    errorDefnBlock(): ErrorDefnBlockContext | undefined;
    eventDefn(): EventDefnContext | undefined;
    eventDefnBlock(): EventDefnBlockContext | undefined;
    stateDefnBlock(): StateDefnBlockContext | undefined;
    instantiateDefn(): InstantiateDefnContext | undefined;
    instantiateDecl(): InstantiateDeclContext | undefined;
    execDefn(): ExecDefnContext | undefined;
    execDecl(): ExecDeclContext | undefined;
    queryDefn(): QueryDefnContext | undefined;
    queryDecl(): QueryDeclContext | undefined;
    replyDefn(): ReplyDefnContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ParamContext extends ParserRuleContext {
    _name: IdentContext;
    _optional: Token;
    _ty: TypeExprContext;
    _default: ExprContext;
    ident(): IdentContext | undefined;
    COLON(): TerminalNode | undefined;
    QUEST(): TerminalNode | undefined;
    typeExpr(): TypeExprContext | undefined;
    EQ(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ParamListContext extends ParserRuleContext {
    param(): ParamContext[];
    param(i: number): ParamContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class FnParamsContext extends ParserRuleContext {
    _param: ParamContext;
    _params: ParamContext[];
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    param(): ParamContext[];
    param(i: number): ParamContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StructDefn_fnContext extends ParserRuleContext {
    _name: IdentContext;
    _params: FnParamsContext;
    ident(): IdentContext | undefined;
    fnParams(): FnParamsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ErrorDefnContext extends ParserRuleContext {
    _defn: StructDefn_fnContext;
    ERROR(): TerminalNode;
    structDefn_fn(): StructDefn_fnContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ErrorDefnBlockContext extends ParserRuleContext {
    _structDefn_fn: StructDefn_fnContext;
    _defns: StructDefn_fnContext[];
    ERROR(): TerminalNode;
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    structDefn_fn(): StructDefn_fnContext[];
    structDefn_fn(i: number): StructDefn_fnContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class EventDefnContext extends ParserRuleContext {
    EVENT(): TerminalNode;
    structDefn_fn(): StructDefn_fnContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class EventDefnBlockContext extends ParserRuleContext {
    _structDefn_fn: StructDefn_fnContext;
    _defns: StructDefn_fnContext[];
    EVENT(): TerminalNode;
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    structDefn_fn(): StructDefn_fnContext[];
    structDefn_fn(i: number): StructDefn_fnContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StateDefnBlockContext extends ParserRuleContext {
    _stateDefn: StateDefnContext;
    _defns: StateDefnContext[];
    STATE(): TerminalNode;
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    stateDefn(): StateDefnContext[];
    stateDefn(i: number): StateDefnContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StateDefnContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: StateDefnContext): void;
}
export declare class StateDefn_ItemContext extends StateDefnContext {
    _name: IdentContext;
    _ty: TypeExprContext;
    _default: ExprContext;
    COLON(): TerminalNode;
    ident(): IdentContext | undefined;
    typeExpr(): TypeExprContext | undefined;
    EQ(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    constructor(ctx: StateDefnContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StateDefn_MapContext extends StateDefnContext {
    _name: IdentContext;
    _mapKeyDefn: MapKeyDefnContext;
    _mapKeys: MapKeyDefnContext[];
    _ty: TypeExprContext;
    _default: ExprContext;
    LBRACK(): TerminalNode;
    RBRACK(): TerminalNode;
    COLON(): TerminalNode;
    ident(): IdentContext | undefined;
    mapKeyDefn(): MapKeyDefnContext[];
    mapKeyDefn(i: number): MapKeyDefnContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    typeExpr(): TypeExprContext | undefined;
    EQ(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    constructor(ctx: StateDefnContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class MapKeyDefnContext extends ParserRuleContext {
    _name: IdentContext;
    _ty: TypeExprContext;
    COLON(): TerminalNode | undefined;
    typeExpr(): TypeExprContext | undefined;
    ident(): IdentContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class InstantiateDefnContext extends ParserRuleContext {
    _params: FnParamsContext;
    _body: BlockContext;
    HASH(): TerminalNode;
    INSTANTIATE(): TerminalNode;
    fnParams(): FnParamsContext;
    block(): BlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class InstantiateDeclContext extends ParserRuleContext {
    _params: FnParamsContext;
    HASH(): TerminalNode;
    INSTANTIATE(): TerminalNode;
    fnParams(): FnParamsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExecDefnContext extends ParserRuleContext {
    _tup: Token;
    _name: IdentContext;
    _params: FnParamsContext;
    _body: BlockContext;
    EXEC(): TerminalNode;
    HASH(): TerminalNode;
    ident(): IdentContext;
    fnParams(): FnParamsContext;
    block(): BlockContext;
    MUL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExecDeclContext extends ParserRuleContext {
    _tup: Token;
    _name: IdentContext;
    _params: FnParamsContext;
    EXEC(): TerminalNode;
    HASH(): TerminalNode;
    ident(): IdentContext;
    fnParams(): FnParamsContext;
    MUL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class QueryDefnContext extends ParserRuleContext {
    _name: IdentContext;
    _params: FnParamsContext;
    _retTy: TypeExprContext;
    _body: BlockContext;
    QUERY(): TerminalNode;
    HASH(): TerminalNode;
    ident(): IdentContext;
    fnParams(): FnParamsContext;
    block(): BlockContext;
    ARROW(): TerminalNode | undefined;
    typeExpr(): TypeExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class QueryDeclContext extends ParserRuleContext {
    _name: IdentContext;
    _params: FnParamsContext;
    _retTy: TypeExprContext;
    QUERY(): TerminalNode;
    HASH(): TerminalNode;
    ident(): IdentContext;
    fnParams(): FnParamsContext;
    ARROW(): TerminalNode | undefined;
    typeExpr(): TypeExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ReplyDefnContext extends ParserRuleContext {
    _on: IdentContext;
    _name: IdentContext;
    _params: FnParamsContext;
    _body: BlockContext;
    REPLY(): TerminalNode;
    ident(): IdentContext[];
    ident(i: number): IdentContext;
    fnParams(): FnParamsContext;
    block(): BlockContext;
    DOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class EnumDefnContext extends ParserRuleContext {
    _name: IdentContext;
    _variant_: Variant_Context;
    _variants: Variant_Context[];
    ENUM(): TerminalNode;
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    variant_(): Variant_Context[];
    variant_(i: number): Variant_Context;
    ident(): IdentContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class Variant_Context extends ParserRuleContext {
    variant_struct(): Variant_structContext | undefined;
    variant_unit(): Variant_unitContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class Variant_structContext extends ParserRuleContext {
    _name: IdentContext;
    _members: ParamListContext;
    HASH(): TerminalNode;
    LPAREN(): TerminalNode | undefined;
    RPAREN(): TerminalNode | undefined;
    ident(): IdentContext | undefined;
    paramList(): ParamListContext | undefined;
    LBRACE(): TerminalNode | undefined;
    RBRACE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class Variant_unitContext extends ParserRuleContext {
    _name: IdentContext;
    HASH(): TerminalNode;
    ident(): IdentContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TypeExprContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: TypeExprContext): void;
}
export declare class PathTContext extends TypeExprContext {
    typePath(): TypePathContext;
    constructor(ctx: TypeExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class VariantTContext extends TypeExprContext {
    typeVariant(): TypeVariantContext;
    constructor(ctx: TypeExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class LensTContext extends TypeExprContext {
    typeLens(): TypeLensContext;
    constructor(ctx: TypeExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class OptionTContext extends TypeExprContext {
    typeExpr(): TypeExprContext;
    QUEST(): TerminalNode;
    constructor(ctx: TypeExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ListTContext extends TypeExprContext {
    _len: Token;
    typeExpr(): TypeExprContext;
    LBRACK(): TerminalNode;
    RBRACK(): TerminalNode;
    IntLiteral(): TerminalNode | undefined;
    constructor(ctx: TypeExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TupleTContext extends TypeExprContext {
    _typeExpr: TypeExprContext;
    _items: TypeExprContext[];
    LBRACK(): TerminalNode;
    RBRACK(): TerminalNode;
    typeExpr(): TypeExprContext[];
    typeExpr(i: number): TypeExprContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: TypeExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class DefnTContext extends TypeExprContext {
    typeDefn(): TypeDefnContext;
    constructor(ctx: TypeExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TypeLensContext extends ParserRuleContext {
    _scope: Token;
    typePath(): TypePathContext;
    INSTANTIATE(): TerminalNode | undefined;
    EXEC(): TerminalNode | undefined;
    QUERY(): TerminalNode | undefined;
    MUT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TypePathContext extends ParserRuleContext {
    _ident: IdentContext;
    _segments: IdentContext[];
    ident(): IdentContext[];
    ident(i: number): IdentContext;
    DOT(): TerminalNode[];
    DOT(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TypeVariantContext extends ParserRuleContext {
    _variant: IdentContext;
    typePath(): TypePathContext;
    DOT(): TerminalNode | undefined;
    HASH(): TerminalNode | undefined;
    LPAREN(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    RPAREN(): TerminalNode | undefined;
    ident(): IdentContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TypeDefnContext extends ParserRuleContext {
    structDefn(): StructDefnContext | undefined;
    enumDefn(): EnumDefnContext | undefined;
    typeAliasDefn(): TypeAliasDefnContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StructDefnContext extends ParserRuleContext {
    _name: IdentContext;
    _param: ParamContext;
    _members: ParamContext[];
    STRUCT(): TerminalNode;
    LPAREN(): TerminalNode | undefined;
    RPAREN(): TerminalNode | undefined;
    ident(): IdentContext | undefined;
    param(): ParamContext[];
    param(i: number): ParamContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    LBRACE(): TerminalNode | undefined;
    RBRACE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TypeAliasDefnContext extends ParserRuleContext {
    _name: IdentContext;
    _value: TypeExprContext;
    TYPE(): TerminalNode;
    EQ(): TerminalNode;
    ident(): IdentContext | undefined;
    typeExpr(): TypeExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class FnDefnContext extends ParserRuleContext {
    _name: IdentContext;
    _fallible: Token;
    _params: FnParamsContext;
    _retTy: TypeExprContext;
    _body: BlockContext;
    FN(): TerminalNode;
    fnParams(): FnParamsContext;
    block(): BlockContext;
    ident(): IdentContext | undefined;
    ARROW(): TerminalNode | undefined;
    BANG(): TerminalNode | undefined;
    typeExpr(): TypeExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class AnnotContext extends ParserRuleContext {
    _path: TypePathContext;
    _arg: ArgContext;
    _args: ArgContext[];
    AT(): TerminalNode;
    typePath(): TypePathContext | undefined;
    LPAREN(): TerminalNode | undefined;
    RPAREN(): TerminalNode | undefined;
    arg(): ArgContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class CallOptionsContext extends ParserRuleContext {
    LBRACE(): TerminalNode | undefined;
    RBRACE(): TerminalNode | undefined;
    memberVal(): MemberValContext[];
    memberVal(i: number): MemberValContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StmtContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: StmtContext): void;
}
export declare class LetStmtContext extends StmtContext {
    _annot: AnnotContext;
    _ann: AnnotContext[];
    letStmt_(): LetStmt_Context;
    SEMI(): TerminalNode | undefined;
    annot(): AnnotContext[];
    annot(i: number): AnnotContext;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ConstStmtContext extends StmtContext {
    _annot: AnnotContext;
    _ann: AnnotContext[];
    constStmt_(): ConstStmt_Context;
    SEMI(): TerminalNode | undefined;
    annot(): AnnotContext[];
    annot(i: number): AnnotContext;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class AssignStmtContext extends StmtContext {
    _annot: AnnotContext;
    _ann: AnnotContext[];
    assignStmt_(): AssignStmt_Context;
    SEMI(): TerminalNode | undefined;
    annot(): AnnotContext[];
    annot(i: number): AnnotContext;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IfStmtContext extends StmtContext {
    _annot: AnnotContext;
    _ann: AnnotContext[];
    ifStmt_(): IfStmt_Context;
    SEMI(): TerminalNode | undefined;
    annot(): AnnotContext[];
    annot(i: number): AnnotContext;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ForStmtContext extends StmtContext {
    _annot: AnnotContext;
    _ann: AnnotContext[];
    forStmt_(): ForStmt_Context;
    SEMI(): TerminalNode | undefined;
    annot(): AnnotContext[];
    annot(i: number): AnnotContext;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExecStmtContext extends StmtContext {
    _annot: AnnotContext;
    _ann: AnnotContext[];
    _options: CallOptionsContext;
    EXEC_NOW(): TerminalNode;
    expr(): ExprContext;
    SEMI(): TerminalNode | undefined;
    annot(): AnnotContext[];
    annot(i: number): AnnotContext;
    callOptions(): CallOptionsContext | undefined;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class DelegateExecStmtContext extends StmtContext {
    _annot: AnnotContext;
    _ann: AnnotContext[];
    DELEGATE_EXEC(): TerminalNode;
    HASH(): TerminalNode;
    expr(): ExprContext;
    SEMI(): TerminalNode | undefined;
    annot(): AnnotContext[];
    annot(i: number): AnnotContext;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class InstantiateStmtContext extends StmtContext {
    _annot: AnnotContext;
    _ann: AnnotContext[];
    _new: Token;
    _options: CallOptionsContext;
    INSTANTIATE_NOW(): TerminalNode;
    expr(): ExprContext;
    SEMI(): TerminalNode | undefined;
    annot(): AnnotContext[];
    annot(i: number): AnnotContext;
    HASH(): TerminalNode | undefined;
    callOptions(): CallOptionsContext | undefined;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class EmitStmtContext extends StmtContext {
    _annot: AnnotContext;
    _ann: AnnotContext[];
    EMIT(): TerminalNode;
    expr(): ExprContext;
    SEMI(): TerminalNode | undefined;
    annot(): AnnotContext[];
    annot(i: number): AnnotContext;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ReturnStmtContext extends StmtContext {
    _annot: AnnotContext;
    _ann: AnnotContext[];
    RETURN(): TerminalNode;
    expr(): ExprContext;
    SEMI(): TerminalNode;
    annot(): AnnotContext[];
    annot(i: number): AnnotContext;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class FailStmtContext extends StmtContext {
    _annot: AnnotContext;
    _ann: AnnotContext[];
    FAIL(): TerminalNode;
    expr(): ExprContext;
    SEMI(): TerminalNode;
    annot(): AnnotContext[];
    annot(i: number): AnnotContext;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExprStmtContext extends StmtContext {
    _annot: AnnotContext;
    _ann: AnnotContext[];
    expr(): ExprContext;
    SEMI(): TerminalNode | undefined;
    annot(): AnnotContext[];
    annot(i: number): AnnotContext;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class LetStmt_Context extends ParserRuleContext {
    LET(): TerminalNode;
    let_binding(): Let_bindingContext;
    EQ(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ConstStmt_Context extends ParserRuleContext {
    CONST(): TerminalNode;
    ident(): IdentContext;
    EQ(): TerminalNode;
    expr(): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IdentBinding_Context extends ParserRuleContext {
    _name: IdentContext;
    _ty: TypeExprContext;
    ident(): IdentContext | undefined;
    COLON(): TerminalNode | undefined;
    typeExpr(): TypeExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class Let_bindingContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: Let_bindingContext): void;
}
export declare class IdentBindingContext extends Let_bindingContext {
    identBinding_(): IdentBinding_Context;
    constructor(ctx: Let_bindingContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StructBindingContext extends Let_bindingContext {
    _identBinding_: IdentBinding_Context;
    _bindings: IdentBinding_Context[];
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    identBinding_(): IdentBinding_Context | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: Let_bindingContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TupleBindingContext extends Let_bindingContext {
    _identBinding_: IdentBinding_Context;
    _bindings: IdentBinding_Context[];
    LBRACK(): TerminalNode;
    RBRACK(): TerminalNode;
    identBinding_(): IdentBinding_Context[];
    identBinding_(i: number): IdentBinding_Context;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: Let_bindingContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class AssignStmt_Context extends ParserRuleContext {
    _lhs: AssignLHSContext;
    _assignOp: Token;
    _rhs: ExprContext;
    assignLHS(): AssignLHSContext | undefined;
    expr(): ExprContext | undefined;
    EQ(): TerminalNode | undefined;
    PLUS_EQ(): TerminalNode | undefined;
    MINUS_EQ(): TerminalNode | undefined;
    MUL_EQ(): TerminalNode | undefined;
    DIV_EQ(): TerminalNode | undefined;
    MOD_EQ(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class AssignLHSContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AssignLHSContext): void;
}
export declare class IdentLHSContext extends AssignLHSContext {
    _symbol: IdentContext;
    ident(): IdentContext;
    constructor(ctx: AssignLHSContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class DotLHSContext extends AssignLHSContext {
    _obj: ExprContext;
    _member: IdentContext;
    DOT(): TerminalNode;
    expr(): ExprContext | undefined;
    ident(): IdentContext | undefined;
    constructor(ctx: AssignLHSContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IndexLHSContext extends AssignLHSContext {
    _obj: ExprContext;
    _expr: ExprContext;
    _args: ExprContext[];
    LBRACK(): TerminalNode;
    RBRACK(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: AssignLHSContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExprContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExprContext): void;
}
export declare class GroupedExprContext extends ExprContext {
    LPAREN(): TerminalNode;
    expr(): ExprContext;
    RPAREN(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class DotExprContext extends ExprContext {
    _unwrap: Token;
    _member: IdentContext;
    expr(): ExprContext;
    DOT(): TerminalNode;
    ident(): IdentContext | undefined;
    BANG(): TerminalNode | undefined;
    QUEST(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class AsExprContext extends ExprContext {
    _ty: TypeExprContext;
    expr(): ExprContext;
    AS(): TerminalNode;
    typeExpr(): TypeExprContext;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IndexExprContext extends ExprContext {
    _arg: ArgContext;
    _args: ArgContext[];
    expr(): ExprContext;
    LBRACK(): TerminalNode;
    RBRACK(): TerminalNode;
    arg(): ArgContext[];
    arg(i: number): ArgContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class DColonExprContext extends ExprContext {
    _member: IdentContext;
    expr(): ExprContext;
    D_COLON(): TerminalNode;
    ident(): IdentContext | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TypeDColonExprContext extends ExprContext {
    _member: IdentContext;
    typeExpr(): TypeExprContext;
    D_COLON(): TerminalNode;
    ident(): IdentContext | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class FnCallExprContext extends ExprContext {
    _fallible: Token;
    _arg: ArgContext;
    _args: ArgContext[];
    expr(): ExprContext;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    BANG(): TerminalNode | undefined;
    arg(): ArgContext[];
    arg(i: number): ArgContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TypeFnCallExprContext extends ExprContext {
    _fallible: Token;
    _arg: ArgContext;
    _args: ArgContext[];
    typeExpr(): TypeExprContext;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    BANG(): TerminalNode | undefined;
    arg(): ArgContext[];
    arg(i: number): ArgContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class MulExprContext extends ExprContext {
    _op: Token;
    _rhs: ExprContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    MUL(): TerminalNode | undefined;
    DIV(): TerminalNode | undefined;
    MOD(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class AddExprContext extends ExprContext {
    _op: Token;
    _rhs: ExprContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    PLUS(): TerminalNode | undefined;
    MINUS(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class CompExprContext extends ExprContext {
    _op: Token;
    _rhs: ExprContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    LT(): TerminalNode | undefined;
    GT(): TerminalNode | undefined;
    LT_EQ(): TerminalNode | undefined;
    GT_EQ(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class EqExprContext extends ExprContext {
    _op: Token;
    _rhs: ExprContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    EQ_EQ(): TerminalNode | undefined;
    NEQ(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class NoneCheckExprContext extends ExprContext {
    expr(): ExprContext;
    QUEST(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IsExprContext extends ExprContext {
    _negative: Token;
    _rhs: TypeExprContext;
    expr(): ExprContext;
    IS(): TerminalNode;
    typeExpr(): TypeExprContext | undefined;
    NOT(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class InExprContext extends ExprContext {
    _rhs: ExprContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    IN(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ShortTryExprContext extends ExprContext {
    _rhs: ExprContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    D_QUEST(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TryCatchElseExprContext extends ExprContext {
    tryCatchElseExpr_(): TryCatchElseExpr_Context;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class NotExprContext extends ExprContext {
    NOT(): TerminalNode;
    expr(): ExprContext;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class AndExprContext extends ExprContext {
    _rhs: ExprContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    AND(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class OrExprContext extends ExprContext {
    _rhs: ExprContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    OR(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IfExprContext extends ExprContext {
    ifStmt_(): IfStmt_Context;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class QueryNowExprContext extends ExprContext {
    QUERY_NOW(): TerminalNode;
    expr(): ExprContext;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class FailExprContext extends ExprContext {
    FAIL(): TerminalNode;
    expr(): ExprContext;
    SEMI(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ClosureExprContext extends ExprContext {
    closure(): ClosureContext;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TupleExprContext extends ExprContext {
    _expr: ExprContext;
    _items: ExprContext[];
    LBRACK(): TerminalNode;
    RBRACK(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StructExprContext extends ExprContext {
    _memberVal: MemberValContext;
    _members: MemberValContext[];
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    typeExpr(): TypeExprContext | undefined;
    memberVal(): MemberValContext[];
    memberVal(i: number): MemberValContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class UnitVariantExprContext extends ExprContext {
    typeVariant(): TypeVariantContext;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class LiteralExprContext extends ExprContext {
    literal(): LiteralContext;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IdentExprContext extends ExprContext {
    ident(): IdentContext;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class Grouped2ExprContext extends ExprContext {
    expr(): ExprContext;
    TILDE(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ClosureParamsContext extends ParserRuleContext {
    _param: ParamContext;
    _params: ParamContext[];
    BAR(): TerminalNode[];
    BAR(i: number): TerminalNode;
    param(): ParamContext[];
    param(i: number): ParamContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ClosureContext extends ParserRuleContext {
    _fallible: Token;
    _params: ClosureParamsContext;
    _retTy: TypeExprContext;
    stmt(): StmtContext | undefined;
    closureParams(): ClosureParamsContext | undefined;
    BANG(): TerminalNode | undefined;
    block(): BlockContext | undefined;
    ARROW(): TerminalNode | undefined;
    typeExpr(): TypeExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class BlockContext extends ParserRuleContext {
    _stmt: StmtContext;
    _body: StmtContext[];
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    stmt(): StmtContext[];
    stmt(i: number): StmtContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TryCatchElseExpr_Context extends ParserRuleContext {
    _body: BlockContext;
    _catchClause: CatchClauseContext;
    _catches: CatchClauseContext[];
    _else_: ElseClauseContext;
    TRY(): TerminalNode;
    block(): BlockContext | undefined;
    catchClause(): CatchClauseContext[];
    catchClause(i: number): CatchClauseContext;
    elseClause(): ElseClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class CatchClauseContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: CatchClauseContext): void;
}
export declare class CatchContext extends CatchClauseContext {
    _ty: TypeExprContext;
    _body: BlockContext;
    CATCH(): TerminalNode;
    typeExpr(): TypeExprContext | undefined;
    block(): BlockContext | undefined;
    constructor(ctx: CatchClauseContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class CatchBindContext extends CatchClauseContext {
    _name: IdentContext;
    _ty: TypeExprContext;
    _body: BlockContext;
    CATCH(): TerminalNode;
    COLON(): TerminalNode | undefined;
    ident(): IdentContext | undefined;
    block(): BlockContext | undefined;
    typeExpr(): TypeExprContext | undefined;
    constructor(ctx: CatchClauseContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ArgContext extends ParserRuleContext {
    _name: IdentContext;
    _value: ExprContext;
    EQ(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    ident(): IdentContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class MemberValContext extends ParserRuleContext {
    _name: IdentContext;
    _value: ExprContext;
    ident(): IdentContext | undefined;
    COLON(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class LiteralContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: LiteralContext): void;
}
export declare class StringLitContext extends LiteralContext {
    StringLiteral(): TerminalNode;
    constructor(ctx: LiteralContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IntLitContext extends LiteralContext {
    IntLiteral(): TerminalNode;
    constructor(ctx: LiteralContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class DecLitContext extends LiteralContext {
    DecLiteral(): TerminalNode;
    constructor(ctx: LiteralContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class BoolLitContext extends LiteralContext {
    BoolLiteral(): TerminalNode;
    constructor(ctx: LiteralContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class NoneLitContext extends LiteralContext {
    NONE(): TerminalNode;
    constructor(ctx: LiteralContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IfStmt_Context extends ParserRuleContext {
    _pred: ExprContext;
    _body: BlockContext;
    _else_: ElseClauseContext;
    IF(): TerminalNode;
    expr(): ExprContext | undefined;
    block(): BlockContext | undefined;
    elseClause(): ElseClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ElseClauseContext extends ParserRuleContext {
    ELSE(): TerminalNode;
    block(): BlockContext | undefined;
    stmt(): StmtContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ForStmt_Context extends ParserRuleContext {
    _binding: Let_bindingContext;
    _iter: ExprContext;
    _body: BlockContext;
    FOR(): TerminalNode;
    IN(): TerminalNode;
    block(): BlockContext;
    let_binding(): Let_bindingContext | undefined;
    expr(): ExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IdentContext extends ParserRuleContext {
    Ident(): TerminalNode | undefined;
    reservedKeyword(): ReservedKeywordContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ReservedKeywordContext extends ParserRuleContext {
    CONTRACT(): TerminalNode | undefined;
    INTERFACE(): TerminalNode | undefined;
    IMPORT(): TerminalNode | undefined;
    IMPLEMENTS(): TerminalNode | undefined;
    EXTENDS(): TerminalNode | undefined;
    ERROR(): TerminalNode | undefined;
    EVENT(): TerminalNode | undefined;
    INSTANTIATE(): TerminalNode | undefined;
    EXEC(): TerminalNode | undefined;
    QUERY(): TerminalNode | undefined;
    REPLY(): TerminalNode | undefined;
    FOR(): TerminalNode | undefined;
    IN(): TerminalNode | undefined;
    FROM(): TerminalNode | undefined;
    STATE(): TerminalNode | undefined;
    IF(): TerminalNode | undefined;
    FN(): TerminalNode | undefined;
    ELSE(): TerminalNode | undefined;
    AND(): TerminalNode | undefined;
    OR(): TerminalNode | undefined;
    TRUE(): TerminalNode | undefined;
    FALSE(): TerminalNode | undefined;
    LET(): TerminalNode | undefined;
    RETURN(): TerminalNode | undefined;
    STRUCT(): TerminalNode | undefined;
    ENUM(): TerminalNode | undefined;
    TYPE(): TerminalNode | undefined;
    EMIT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
