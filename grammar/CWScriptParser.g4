parser grammar CWScriptParser;

options {
    tokenVocab = CWScriptLexer;
}

// Files contain 1 or more topLevelStatement
sourceFile: topLevelStmt* EOF;

topLevelStmt:
	importStmt | contractDefn | interfaceDefn | constStmt_;

// Contract Block
contractDefn:
    CONTRACT (name = ident) (
        EXTENDS (base=typePath)
    )? (IMPLEMENTS (interfaces+=typePath))? (body=contractBlock);

// Interface
interfaceDefn:
    INTERFACE (name = ident) (
        EXTENDS (base=typePath)
    )? (body=contractBlock);

// Tests


contractBlock: LBRACE (body+=contractItem)* RBRACE;

// Import Statement
importStmt:
	// import * from "..."
    IMPORT MUL FROM (src = StringLiteral) # ImportAllStmt
    // import { a } from "..."
    | IMPORT (
        (LBRACE (items += ident) (COMMA items += ident)* RBRACE)
    ) FROM (src = StringLiteral) # ImportItemsStmt;

contractItem:
    typeDefn
    | constStmt_
    | fnDefn
    | errorDefn
    | errorDefnBlock
    | eventDefn
    | eventDefnBlock
    | stateDefnBlock
    | instantiateDefn
    | instantiateDecl
    | execDefn
    | execDecl
    | queryDefn
    | queryDefn
    | queryDecl
    | replyDefn;

// a[?] : b [= c]
param: (name = ident) (optional=QUEST)? (COLON (ty = typeExpr) (EQ default=expr)?)?;
paramList: param (COMMA param)*;
fnParams:
	LPAREN ((params+=param) (COMMA params+=param)*)? RPAREN;

structDefn_fn: (name = ident) (params=fnParams);

// Errors
// error Item( ... )
errorDefn: ERROR defn=structDefn_fn;
errorDefnBlock:
    ERROR LBRACE (
    	(defns+=structDefn_fn) (COMMA defns+=structDefn_fn)* COMMA?
    )? RBRACE;

// Events
eventDefn: EVENT structDefn_fn;
eventDefnBlock:
    EVENT LBRACE (
        (defns+=structDefn_fn) (COMMA defns+=structDefn_fn)* COMMA?
    )? RBRACE;

// State
stateDefnBlock:
    STATE LBRACE (
    	defns += stateDefn
    )* RBRACE;
stateDefn:
	(name=ident) COLON (ty=typeExpr) (EQ (default=expr))? # StateDefn_Item
	| (name=ident) LBRACK (mapKeys+=mapKeyDefn) (COMMA (mapKeys+=mapKeyDefn))* RBRACK COLON (ty=typeExpr) (EQ (default=expr))? # StateDefn_Map;

mapKeyDefn: ((name=ident) COLON)? (ty=typeExpr);

// Instantiate
instantiateDefn: HASH INSTANTIATE params=fnParams body=block;
instantiateDecl: HASH INSTANTIATE params=fnParams;

// Exec Defn
execDefn:
	EXEC (tup=MUL)? HASH name=ident params=fnParams body=block;

execDecl: EXEC (tup=MUL)? HASH name=ident params=fnParams;

// Query Defn
queryDefn: QUERY HASH name=ident params=fnParams (ARROW retTy=typeExpr)? body=block;
queryDecl: QUERY HASH name=ident params=fnParams (ARROW retTy=typeExpr)?;

// Reply Defn
replyDefn: REPLY (DOT on=ident)? name=ident params=fnParams body=block;

// Enum
enumDefn: ENUM (name = ident) LBRACE variants+=variant_ ((variants+=variant_) COMMA?)* RBRACE;
variant_: variant_struct | variant_unit;
variant_struct: HASH (name = ident) LPAREN (members=paramList)? RPAREN
	| HASH (name = ident) LBRACE (members=paramList)? RBRACE;

variant_unit: HASH (name = ident);

// Type Expressions
typeExpr:
    typePath # PathT
    | typeVariant # VariantT
	| typeLens # LensT
    | typeExpr QUEST                                                    # OptionT
    | typeExpr LBRACK (len=IntLiteral)? RBRACK                          # ListT
    | LBRACK (items+=typeExpr (COMMA items+=typeExpr)*)? RBRACK 		# TupleT
    | typeDefn                                                          # DefnT;

typeLens: scope=(INSTANTIATE | EXEC | QUERY | MUT) typePath;
typePath: (segments+=ident) (DOT segments+=ident)*;
typeVariant: typePath (LPAREN expr RPAREN)? (DOT HASH variant=ident);
typeDefn: structDefn | enumDefn | typeAliasDefn;

structDefn:
	STRUCT (name=ident)? LPAREN ((members+=param) (COMMA (members+=param))*)? RPAREN
	| STRUCT (name=ident)? LBRACE ((members+=param) (COMMA (members+=param))* COMMA?) RBRACE;
typeAliasDefn: TYPE (name = ident) EQ (value = typeExpr);

// Functions
fnDefn: FN (name = ident) (fallible=BANG)? params=fnParams (ARROW retTy=typeExpr)? body=block;

annot: AT (path = typePath) (LPAREN (args+=arg)? RPAREN)?;

callOptions: (LBRACE ((memberVal) (COMMA memberVal)* COMMA?)? RBRACE);

// Statements
stmt:
	(ann+=annot)* letStmt_           # LetStmt
    | (ann+=annot)* constStmt_ 	   # ConstStmt
    | (ann+=annot)* assignStmt_      # AssignStmt
    | (ann+=annot)* ifStmt_          # IfStmt
    | (ann+=annot)* forStmt_         # ForStmt
    | (ann+=annot)* EXEC_NOW expr (options=callOptions)? # ExecStmt
    | (ann+=annot)* DELEGATE_EXEC HASH expr # DelegateExecStmt
    | (ann+=annot)* INSTANTIATE_NOW (new=HASH)? expr (options=callOptions)? # InstantiateStmt
    | (ann+=annot)* EMIT expr        # EmitStmt
    | (ann+=annot)* RETURN expr      # ReturnStmt
    | (ann+=annot)* FAIL expr        # FailStmt
    | (ann+=annot)* expr             # ExprStmt;

letStmt_: LET let_binding (EQ expr)?;
constStmt_: CONST ident EQ expr;

identBinding_: (name=ident) (COLON ty = typeExpr)?;
let_binding:
    identBinding_    # IdentBinding
    | LBRACE (bindings+=identBinding_) (COMMA )* RBRACE            # StructBinding
    | LBRACK (bindings+=identBinding_) (COMMA bindings+=identBinding_)* RBRACK            # TupleBinding;


assignStmt_:
    (lhs = assignLHS) (assignOp = (
        EQ
        | PLUS_EQ
        | MINUS_EQ
        | MUL_EQ
        | DIV_EQ
        | MOD_EQ
    )) (rhs = expr);

assignLHS:
    symbol=ident # IdentLHS
    | (obj = expr) DOT (member = ident) # DotLHS
    | (obj = expr) LBRACK (args+=expr) (COMMA args+=expr)* RBRACK  # IndexLHS;

// Expressions
expr:
    LPAREN expr RPAREN        # GroupedExpr
    | expr (unwrap=(BANG | QUEST))? DOT (member=ident) # DotExpr
    | expr AS ty=typeExpr	 # AsExpr
    | expr LBRACK (args+=arg) (COMMA args+=arg)* RBRACK # IndexExpr
    | expr D_COLON (member=ident) # DColonExpr
    | typeExpr D_COLON (member=ident) # TypeDColonExpr
    | expr fallible=BANG? LPAREN ((args+=arg) (COMMA args+=arg)*)? RPAREN # FnCallExpr
    | typeExpr fallible=BANG? LPAREN ((args+=arg) (COMMA args+=arg)*)? RPAREN # TypeFnCallExpr
    | expr (op = (MUL | DIV | MOD)) (rhs=expr)          # MulExpr
    | expr (op = (PLUS | MINUS)) (rhs=expr)             # AddExpr
    | expr (op = (LT | GT | LT_EQ | GT_EQ)) (rhs=expr)  # CompExpr
    | expr (op = (EQ_EQ | NEQ)) (rhs=expr)  # EqExpr
    | expr QUEST # NoneCheckExpr
    | expr IS (rhs=typeExpr) # IsExpr
    | expr IN (rhs=expr)                  # InExpr
    | expr D_QUEST (rhs=expr) # ShortTryExpr
    | tryCatchElseExpr_ # TryCatchElseExpr
    | NOT expr # NotExpr
    | expr AND (rhs=expr)                 # AndExpr
    | expr OR (rhs=expr)                  # OrExpr
    | ifStmt_ # IfExpr
    | QUERY_NOW expr # QueryNowExpr
    | FAIL expr? # FailExpr // TODO: might need a semicolon here
    | closure # ClosureExpr
    | LBRACK ((items+=expr) (COMMA (items+=expr))*)? RBRACK # TupleExpr
    | typeExpr? LBRACE ((members+=memberVal) (COMMA members+=memberVal)* COMMA?)? RBRACE # StructExpr
    | typeVariant # UnitVariantExpr
	| literal # LiteralExpr
    | ident # IdentExpr
    | expr TILDE # Grouped2Expr;

closureParams: BAR ((params+=param) (COMMA (params+=param))*)? BAR;

closure:
	(params=closureParams) (((ARROW retTy=typeExpr)? block) | stmt);

block: LBRACE (body+=stmt)* RBRACE;
tryCatchElseExpr_: TRY (body=block) (catches+=catchClause)* (else_=elseClause)?;
catchClause:
	CATCH (ty=typeExpr) (body=block) # Catch
	| CATCH (name=ident) (COLON (ty=typeExpr)) (body=block) # CatchBind;

arg: ((name=ident) EQ)? (value=expr);
memberVal:
	(name = ident) (COLON (value = expr))?;

// Literal Expressions
literal:
    StringLiteral                               # StringLit
    | IntLiteral                                # IntLit
    | DecLiteral                                # DecLit
    | BoolLiteral                               # BoolLit
    | NONE                               # NoneLit;

ifStmt_: IF (pred = expr) (body=block) (else_=elseClause)?;
elseClause: ELSE block | ELSE stmt;

// For Loops
forStmt_:
    FOR (binding=let_binding) IN (iter=expr) body=block;

ident: Ident | reservedKeyword;

reservedKeyword:
    CONTRACT
    | INTERFACE
    | IMPORT
    | IMPLEMENTS
    | EXTENDS
    | ERROR
    | EVENT
    | INSTANTIATE
    | EXEC
    | QUERY
    | REPLY
    | FOR
    | IN
    | FROM
    | STATE
    | IF
    | FN
    | ELSE
    | AND
    | OR
    | TRUE
    | FALSE
    | LET
    | RETURN
    | STRUCT
    | ENUM
    | TYPE
    | EMIT;
