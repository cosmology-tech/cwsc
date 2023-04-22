import * as AST from './ast';
import { SymbolTable } from './util/symbol-table';
import { Type, Value, OptionT, Param, FnDefn, Arg, CWSString, ErrorMsg, ContractDefn, StructDefn, EnumDefn, ListT, StateMap, StateItem, CWSBool, Indexable, TupleT, MapKey, StructInstance, ListInstance, TupleInstance, EventMsg } from './stdlib';
import { TextView } from './util/position';
export declare function arg(val: Value, name?: string): Arg;
export declare function args(a_pos?: Value[], a_named?: {
    [name: string]: Value;
}): Arg[];
export declare function idx(ix: number): Arg[];
export interface CWScriptInterpreterContext {
    sources: {
        [filename: string]: string;
    };
    env?: {
        [globalName: string]: any;
    };
}
export declare enum ContextType {
    INSTANTIATE = 0,
    EXEC = 1,
    QUERY = 2
}
export interface Env {
    block: {
        height: number;
        time: number;
        chain_id: string;
    };
    contract: {
        address: string;
    };
}
export interface MessageInfo {
    sender: string;
    funds: Array<{
        denom: string;
        amount: string;
    }>;
}
export declare function buildCtxEnv(env: Env): StructInstance<StructDefn>;
export declare const CoinListT: ListT<StructDefn>;
export declare function buildCtxInfo(info: MessageInfo): StructInstance<StructDefn>;
export declare function buildCtxRes(): StructInstance<StructDefn>;
export declare function buildMutState(contract: ContractDefn): void;
export declare function buildMutCtx(contract: ContractDefn, state: any, env: Env, info: MessageInfo): SymbolTable;
export declare function buildQueryCtx(contract: ContractDefn, state: any, env: Env): SymbolTable;
export declare class StateMapAccessor extends Value implements Indexable {
    state: ContractState;
    mapDefn: StateMap;
    prefix: string;
    mapKeys: MapKey[];
    ty: Type;
    default_: Value;
    constructor(state: ContractState, mapDefn: StateMap);
    getIndex(args: Arg[]): Value;
    setIndex(args: Arg[], val: Value): void;
    removeIndex(args: Arg[]): void;
    buildKey(args: Arg[]): string;
}
export declare const ContractStateT: Type<import("./stdlib").Data<null>>;
export declare class ContractState extends Value {
    interpreter: CWScriptInterpreter;
    contract: ContractDefn;
    stateInfo: {
        [key: string]: StateItem | StateMap;
    };
    constructor(interpreter: CWScriptInterpreter, contract: ContractDefn);
    getSymbol<T = any>(name: string): T;
    getOwnSymbol<T = any>(name: string): T;
    firstTableWithSymbol(name: string): SymbolTable | undefined;
}
export declare class ContractInstance<C extends ContractDefn = ContractDefn> extends Value<C, null> {
    interpreter: CWScriptInterpreter;
    ty: C;
    state: ContractState;
    constructor(interpreter: CWScriptInterpreter, ty: C);
    instantiate(env: Env, info: MessageInfo, args: Arg[]): any;
    exec(env: Env, info: MessageInfo, name: string, args: Arg[]): any;
    query(env: Env, name: string, args: Arg[]): Value<Type<import("./stdlib").Data<any> | import("./stdlib").Impl<any>>, any>;
}
export declare class CWScriptInterpreter extends SymbolTable {
    ctx: CWScriptInterpreterContext;
    visitor?: CWScriptInterpreterVisitor;
    constructor(ctx: CWScriptInterpreterContext);
    runCode(sourceText: string, file?: string): void;
    callFn(fn: FnDefn, args: Arg[], scope?: SymbolTable): Value<Type<import("./stdlib").Data<any> | import("./stdlib").Impl<any>>, any>;
}
export declare class Failure {
    error: Value<CWSString | ErrorMsg>;
    constructor(error: Value<CWSString | ErrorMsg>);
}
export declare class Return {
    value: Value;
    constructor(value: Value);
}
export declare class DebugCall extends FnDefn {
    constructor();
    call(interpreter: CWScriptInterpreter, node?: AST.AST): void;
}
export declare class InterpreterError extends Error {
    constructor(message: string);
}
export declare class CWScriptInterpreterVisitor extends AST.CWScriptASTVisitor {
    interpreter: CWScriptInterpreter;
    sourceText: string;
    ctx: any;
    tv: TextView;
    scopes: SymbolTable[];
    get scope(): SymbolTable;
    pushScope(scope: SymbolTable): void;
    popScope(): void;
    file: string;
    constructor(interpreter: CWScriptInterpreter, sourceText: string, file: string);
    makeError(message: string, node: AST.AST): InterpreterError;
    visit<T = any>(node: AST.AST): T;
    visitSourceFile(node: AST.SourceFile): void;
    visitParam(node: AST.Param): Param;
    visitType(node: AST.AST): Type;
    visitInterfaceDefn(node: AST.InterfaceDefn): void;
    visitContractDefn(node: AST.ContractDefn): void;
    visitTypePath(node: AST.TypePath): Type;
    visitOptionT(node: AST.OptionT): OptionT;
    visitStructDefn(node: AST.ErrorDefn | AST.EventDefn | AST.StructDefn | AST.InstantiateDefn | AST.InstantiateDecl | AST.ExecDefn | AST.ExecDecl | AST.QueryDefn | AST.QueryDecl): StructDefn;
    visitEnumDefn(node: AST.EnumDefn): EnumDefn;
    visitListT(node: AST.ListT): ListT<any> | TupleT;
    visitErrorDefn: (node: AST.ErrorDefn) => ErrorMsg;
    visitEventDefn: (node: AST.EventDefn) => EventMsg;
    visitMapKeyDefn(node: AST.MapKeyDefn): MapKey;
    visitFnDefn(node: AST.FnDefn): FnDefn<any>;
    /**
     * This visits the function definition for the instantiate message.
     * @param node
     */
    visitInstantiateDefn(node: AST.InstantiateDefn): void;
    visitExecDefn(node: AST.ExecDefn): void;
    visitQueryDefn(node: AST.QueryDefn): void;
    visitBlock(node: AST.Block): Value<Type<import("./stdlib").Data<any> | import("./stdlib").Impl<any>>, any>;
    visitDebugStmt(node: AST.DebugStmt): void;
    visitLetStmt(node: AST.LetStmt): void;
    visitAssignStmt(node: AST.AssignStmt): void;
    visitIfStmt(node: AST.IfStmt): any;
    visitForStmt(node: AST.ForStmt): void;
    visitEmitStmt(node: AST.EmitStmt): void;
    visitExecStmt(node: AST.ExecStmt): void;
    visitDelegateExecStmt(node: AST.DelegateExecStmt): Value<Type<import("./stdlib").Data<any> | import("./stdlib").Impl<any>>, any>;
    visitInstantiateStmt(node: AST.InstantiateStmt): void;
    visitReturnStmt(node: AST.ReturnStmt): Return;
    visitFailStmt(node: AST.FailStmt): Failure;
    visitArg(node: AST.Arg): Arg;
    visitDotExpr(node: AST.DotExpr): any;
    visitAsExpr(node: AST.AsExpr): void;
    visitIndexExpr(node: AST.IndexExpr): Value<Type<import("./stdlib").Data<any> | import("./stdlib").Impl<any>>, any>;
    visitDColonExpr(node: AST.DColonExpr): any;
    callMethod(obj: Value, method: string, argVals: Value[]): Value<Type<import("./stdlib").Data<any> | import("./stdlib").Impl<any>>, any>;
    callFn(fn: FnDefn, args: Arg[], scope?: SymbolTable): Value<Type<import("./stdlib").Data<any> | import("./stdlib").Impl<any>>, any>;
    visitFnCallExpr(node: AST.FnCallExpr): void | Value<Type<import("./stdlib").Data<any> | import("./stdlib").Impl<any>>, any> | import("./stdlib").Failure;
    executeBinOp(op: AST.Op, lhs: Value, rhs: Value): Value<Type<import("./stdlib").Data<any> | import("./stdlib").Impl<any>>, any>;
    visitBinOpExpr(node: AST.BinOpExpr): Value<Type<import("./stdlib").Data<any> | import("./stdlib").Impl<any>>, any>;
    visitAndExpr(node: AST.AndExpr): any;
    visitOrExpr(node: AST.OrExpr): any;
    visitIsExpr(node: AST.IsExpr): Value<CWSBool, boolean>;
    visitInExpr(node: AST.InExpr): Value<CWSBool, boolean>;
    visitNotExpr(node: AST.NotExpr): Value<CWSBool, boolean>;
    visitNoneCheckExpr(node: AST.NoneCheckExpr): Value<CWSBool, boolean>;
    visitTryCatchElseExpr(node: AST.TryCatchElseExpr): any;
    visitFailExpr(node: AST.FailExpr): Failure;
    visitClosure(node: AST.Closure): FnDefn<Type<import("./stdlib").Data<any> | import("./stdlib").Impl<any>>>;
    visitTupleExpr(node: AST.TupleExpr): TupleInstance | ListInstance<Type<import("./stdlib").Data<any> | import("./stdlib").Impl<any>>>;
    visitStructExpr(node: AST.StructExpr): StructInstance<StructDefn>;
    visitUnitVariantExpr(node: AST.UnitVariantExpr): any;
    visitIdent(node: AST.Ident): any;
    visitGroupedExpr(node: AST.GroupedExpr): any;
    visitGrouped2Expr(node: AST.Grouped2Expr): any;
    visitStringLit(node: AST.StringLit): Value<CWSString, string>;
    visitIntLit(node: AST.IntLit): Value<import("./stdlib").CWSInt, bigint>;
    visitDecLit(node: AST.DecLit): Value<import("./stdlib").CWSDec, string>;
    visitBoolLit(node: AST.BoolLit): Value<CWSBool, boolean>;
    visitNoneLit(node: AST.NoneLit): Value<import("./stdlib").CWSNone, null>;
}
