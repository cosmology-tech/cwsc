import * as AST from './ast';
import { SymbolTable } from './util/symbol-table';
declare type Data<X = any> = {
    data: X;
};
declare type Impl<Y extends Value = any> = {
    impl: Y;
};
declare type ValueOf<T> = T extends Type<infer D> ? D extends Data<infer X> ? Value<T, X> : D extends Impl<infer Y> ? Y : never : never;
declare type GetV<T extends Type, D extends Data | Impl> = D extends Data<infer X> ? Value<T, X> : D extends Impl<infer Y> ? Y : never;
export declare class Type<D extends Data | Impl = Data | Impl> extends SymbolTable {
    name: string;
    constructor(name: string);
    /**
     * Checks if this <: other, i.e. if this can be converted to
     * other without losing information.
     */
    isSubOf(other: Type): boolean;
    isSuperOf(other: Type): boolean;
    isEq(other: Type): boolean;
    isCompatibleWith(other: Type): boolean;
    value(data: any): GetV<this, D>;
    convertFrom<F extends Type>(val: ValueOf<F>): GetV<this, D>;
    convertInto<T extends Type>(into: T, val: Value<this>): ValueOf<T>;
    getConvertFromTypes?(): Type[];
    canConvertFrom(other: Type): boolean;
    canConvertInto(other: Type): boolean;
    callOperator<RHS extends Type, RET extends Type>(op: AST.Op, lhs: Value<this>, rhs: ValueOf<RHS>): ValueOf<RET>;
}
export declare class Value<T extends Type = Type, D extends any = any> extends SymbolTable {
    ty: T;
    data: D;
    constructor(ty: T, data: D);
}
export declare class Param extends SymbolTable {
    name: string;
    ty?: Type<Data<any> | Impl<any>> | undefined;
    default_?: any;
    constructor(name: string, ty?: Type<Data<any> | Impl<any>> | undefined, default_?: any);
}
export declare class OptionT<T extends Type = any> extends Type<Data<any>> {
    inner: T;
    constructor(inner: T);
    isSubOf(other: Type): boolean;
    convertFrom<F extends Type>(val: ValueOf<F>): GetV<this, Data<any>>;
    value(data: any): GetV<this, Data<any>>;
    canConvertFrom(other: Type): boolean;
}
export declare class TupleT extends Type<Impl<TupleInstance>> {
    tys: Type[];
    constructor(tys: Type[]);
    convertFrom<F extends Type>(val: ValueOf<F>): TupleInstance;
    value(data: Value[]): TupleInstance;
}
export declare class ListT<T extends Type = Type> extends Type<Impl<ListInstance<T>>> {
    inner: T;
    size?: number | undefined;
    constructor(inner: T, size?: number | undefined);
    convertFrom<F extends Type>(val: ValueOf<F>): ListInstance<T>;
    isSubOf(other: Type): boolean;
}
export interface Indexable<T extends Type = Type> {
    getIndex(args: Arg[]): Value<T>;
    setIndex(args: Arg[], val: Value<T>): void;
    getSize(): number;
}
export declare class IndexableIter<T extends Type = Type> implements Iter<T> {
    parent: Indexable<T>;
    ix: number;
    constructor(parent: Indexable<T>);
    next(): Value<T> | undefined;
}
export interface Iter<T extends Type = Type> {
    next(): Value<T> | undefined;
}
export interface Iterable<T extends Type = Type> {
    getIter(): Iter<T>;
}
export declare class IndexableValue<T extends Type = Type, V extends Type = Type> extends Value<T> implements Indexable<V>, Iterable<V> {
    ty: T;
    items: Value<V>[];
    constructor(ty: T, items: Value<V>[]);
    getSize(): number;
    getIndex(args: Arg[]): Value<V>;
    setIndex(args: Arg[], val: Value<V>): void;
    getIter(): Iter<V>;
}
export declare class ListInstance<T extends Type = Type> extends IndexableValue<ListT<T>, T> {
    push(val: Value<T>): void;
}
export declare class TupleInstance extends IndexableValue<TupleT> {
}
export declare class CWSNone extends Type<Data<null>> {
    static TYPE: CWSNone;
    ty: CWSNone;
    constructor();
    value(data?: any): Value<this, null>;
    convertFrom<O extends Type>(other: Value<O>): GetV<this, Data<null>>;
    getConvertFromTypes(): Type[];
    isSubOf<T extends Type>(other: T): boolean;
}
export declare class Bool extends Type<Data<boolean>> {
    static TYPE: Bool;
    static TRUE: Value<Bool, boolean>;
    static FALSE: Value<Bool, boolean>;
    constructor();
    static isTrue(val: any): boolean;
    static isFalse(val: any): boolean;
    convertFrom<O extends Type>(other: ValueOf<O>): GetV<this, Data<boolean>>;
}
export declare class ContractDefn extends Type<Impl<ContractInstance>> {
    name: string;
    constructor(name: string);
    convertFrom<F extends Type>(other: ValueOf<F>): ContractInstance<this>;
    instantiate(args: any[]): void;
    exec(fnName: string, args: any[]): void;
    query(fnName: any, args: any[]): any;
    value(address: any): ContractInstance<this>;
}
export declare class InterfaceDefn extends SymbolTable {
    name: string;
    constructor(name: string);
}
export declare class MapKey extends SymbolTable {
    ty: Type;
    name?: string | undefined;
    constructor(ty: Type, name?: string | undefined);
}
export declare class StateItem extends SymbolTable {
    key: string;
    ty: Type;
    constructor(key: string, ty: Type);
}
export declare class StateMap extends SymbolTable {
    prefix: string;
    mapKeys: MapKey[];
    ty: Type;
    constructor(prefix: string, mapKeys: MapKey[], ty: Type);
}
export interface Function<T extends Type = Type> {
    call(args: Arg[]): Value<T>;
}
export declare class FnDefn<T extends Type = Type> extends Type {
    name: string;
    fallible: boolean;
    params: Param[];
    retTy: T | undefined;
    body: AST.Block;
    constructor(name: string, fallible: boolean, params: Param[], retTy: T | undefined, body: AST.Block);
    convertFrom<F extends Type>(val: ValueOf<F>): GetV<this, Data | Impl>;
    setArgsInScope(scope: SymbolTable, args: Arg[]): void;
}
export declare class StructDefn extends Type<Impl<StructInstance>> implements Function<StructDefn> {
    name: string;
    params: Param[];
    constructor(name: string, params: Param[]);
    convertFrom<F extends Type>(val: ValueOf<F>): StructInstance<this>;
    call(args: Arg[]): StructInstance<this>;
    make(args: {
        [k: string]: any;
    }): StructInstance<this>;
}
export declare class EnumDefn extends Type<Impl<Value>> {
    name: string;
    constructor(name: string);
    convertFrom<F extends Type>(val: ValueOf<F>): any;
    isSuperOf<T extends Type>(other: T): boolean;
    structVariant(name: string, params: Param[]): EnumVariantStructDefn;
    unitVariant(name: string): EnumVariantUnitDefn;
}
export declare const InstantiateMsgType: Type<Data<any> | Impl<any>>;
export declare const ExecMsgType: Type<Data<any> | Impl<any>>;
export declare const QueryMsgType: Type<Data<any> | Impl<any>>;
export declare const ErrorType: Type<Data<any> | Impl<any>>;
export declare const EventType: Type<Data<any> | Impl<any>>;
export declare class InstantiateMsg extends StructDefn {
    isSubOf(other: Type): boolean;
}
export declare class ExecMsg extends EnumDefn {
    isSubOf(other: Type): boolean;
}
export declare class QueryMsg extends EnumDefn {
    isSubOf(other: Type): boolean;
}
export declare class ErrorMsg extends EnumDefn {
    isSubOf(other: Type): boolean;
}
export declare class EventMsg extends EnumDefn {
    isSubOf(other: Type): boolean;
}
export declare class EnumVariantStructDefn extends StructDefn {
    ty: EnumDefn;
    variantName: string;
    params: Param[];
    constructor(ty: EnumDefn, variantName: string, params: Param[]);
    isSubOf(other: Type): boolean;
}
export declare class EnumVariantUnitDefn extends Type {
    ty: EnumDefn;
    variantName: string;
    constructor(ty: EnumDefn, variantName: string);
    isSubOf(other: Type): boolean;
}
export declare class Arg extends SymbolTable {
    value: Value;
    name?: string | undefined;
    constructor(value: Value, name?: string | undefined);
}
export declare class ContractInstance<C extends ContractDefn = ContractDefn> extends Value<ContractDefn, null> {
    ty: ContractDefn;
    address: ValueOf<CWSString>;
    constructor(ty: ContractDefn, address: ValueOf<CWSString>);
}
export declare class StructInstance<T extends StructDefn = StructDefn> extends Value<T> {
}
export declare const None: CWSNone;
declare enum IntSize {
    SIZE_8 = 8,
    SIZE_16 = 16,
    SIZE_32 = 32,
    SIZE_64 = 64,
    SIZE_128 = 128
}
declare class UnsignedInt extends Type<Data<bigint>> {
    constructor(size: IntSize);
    isSubOf(other: Type): boolean;
    convertFrom<F extends Type>(val: ValueOf<F>): GetV<this, Data<bigint>>;
}
export declare const U8: UnsignedInt;
export declare const U16: UnsignedInt;
export declare const U32: UnsignedInt;
export declare const U64: UnsignedInt;
export declare const U128: UnsignedInt;
export declare type OperatorFn<LHS extends Type, RHS extends Type, RET extends Type> = (lhs: ValueOf<LHS>, rhs: ValueOf<RHS>) => ValueOf<RET>;
declare class Int extends Type<Data<bigint>> {
    static TYPE: Int;
    constructor();
    convertFrom<O extends Type>(other: ValueOf<O>): GetV<this, Data<bigint>>;
    getConvertFromTypes(): Type[];
    canConvertFrom(other: Type): boolean;
}
export declare class CWSString extends Type<Data<string>> {
    static TYPE: CWSString;
    constructor();
    convertFrom<F extends Type>(val: ValueOf<F>): GetV<this, Data<string>>;
}
export declare class Address extends Type<Data<string>> {
    static TYPE: Address;
    constructor();
    isSubOf(other: Type): boolean;
}
declare class Dec extends Type<Data<string>> {
    static TYPE: Dec;
    constructor();
}
declare class Binary extends Type<Data<string>> {
    static TYPE: Binary;
    constructor();
}
export declare const UnwrapNone: EnumVariantUnitDefn;
export declare const Generic: EnumVariantStructDefn;
export declare const STDLIB: {
    Address: Address;
    Int: Int;
    String: CWSString;
    U8: UnsignedInt;
    U64: UnsignedInt;
    U128: UnsignedInt;
    Binary: Binary;
    Error: ErrorMsg;
};
export interface CWScriptInterpreterContext {
    files: {
        [filename: string]: AST.SourceFile;
    };
    env?: {
        [globalName: string]: any;
    };
}
export declare class CWScriptInterpreter extends SymbolTable {
    ctx: CWScriptInterpreterContext;
    constructor(ctx: CWScriptInterpreterContext);
}
export declare class Failure {
    error: Value<CWSString | ErrorMsg>;
    constructor(error: Value<CWSString | ErrorMsg>);
}
export declare class Return {
    value: Value;
    constructor(value: Value);
}
export declare class CWScriptInterpreterVisitor extends AST.CWScriptASTVisitor {
    interpreter: CWScriptInterpreter;
    ctx: any;
    scope: SymbolTable;
    constructor(interpreter: CWScriptInterpreter);
    visitSourceFile(node: AST.SourceFile): void;
    visitParam(node: AST.Param): Param;
    visitInterfaceDefn(node: AST.InterfaceDefn): void;
    visitContractDefn(node: AST.ContractDefn): void;
    visitTypePath(node: AST.TypePath): Type;
    visitOptionT(node: AST.OptionT): OptionT;
    visitStructDefn(node: AST.ErrorDefn | AST.EventDefn | AST.StructDefn | AST.InstantiateDefn | AST.InstantiateDecl | AST.ExecDefn | AST.ExecDecl | AST.QueryDefn | AST.QueryDecl): StructDefn;
    visitEnumDefn(node: AST.EnumDefn): EnumDefn;
    visitListT(node: AST.ListT): ListT<any>;
    visitErrorDefn: (node: AST.ErrorDefn) => StructDefn;
    visitEventDefn: (node: AST.EventDefn) => StructDefn;
    visitMapKeyDefn(node: AST.MapKeyDefn): MapKey;
    visitFnDefn(node: AST.FnDefn): FnDefn<any>;
    /**
     * This visits the function definition for the instantiate message.
     * @param node
     */
    visitInstantiateDefn(node: AST.InstantiateDefn): FnDefn<Type<Data<any> | Impl<any>>>;
    visitExecDefn(node: AST.ExecDefn): {};
    visitQueryDefn(node: AST.QueryDefn): {};
    visitBlock(node: AST.Block): any[];
    visitLetStmt(node: AST.LetStmt): void;
    visitAssignStmt(node: AST.AssignStmt): void;
    visitIfStmt(node: AST.IfStmt): any;
    visitForStmt(node: AST.ForStmt): void;
    visitExecStmt(node: AST.ExecStmt): void;
    visitDelegateExecStmt(node: AST.DelegateExecStmt): any;
    visitInstantiateStmt(node: AST.InstantiateStmt): void;
    visitReturnStmt(node: AST.ReturnStmt): Return;
    visitFailStmt(node: AST.FailStmt): Failure;
    visitArg(node: AST.Arg): Arg;
    visitDotExpr(node: AST.DotExpr): any;
    visitAsExpr(node: AST.AsExpr): void;
    visitIndexExpr(node: AST.IndexExpr): Value<Type<Data<any> | Impl<any>>, any>;
    visitDColonExpr(node: AST.DColonExpr): any;
    callFn(fn: FnDefn, args: Arg[]): any;
    visitFnCallExpr(node: AST.FnCallExpr): any;
    executeBinOp(op: AST.Op, lhs: Value, rhs: Value): any;
    visitBinOpExpr(node: AST.BinOpExpr): any;
    visitIsExpr(node: AST.IsExpr): Value<Bool, boolean>;
    visitNotExpr(node: AST.NotExpr): Value<Bool, boolean>;
    visitNoneCheckExpr(node: AST.NoneCheckExpr): Value<Bool, boolean>;
    visitTryCatchElseExpr(node: AST.TryCatchElseExpr): any;
    visitFailExpr(node: AST.FailExpr): Failure;
    visitClosure(node: AST.Closure): FnDefn<Type<Data<any> | Impl<any>>>;
    visitTupleExpr(node: AST.TupleExpr): TupleInstance;
    visitStructExpr(node: AST.StructExpr): StructInstance<StructDefn>;
    visitUnitVariantExpr(node: AST.UnitVariantExpr): any;
    visitIdent(node: AST.Ident): any;
    visitGroupedExpr(node: AST.GroupedExpr): any;
    visitGrouped2Expr(node: AST.Grouped2Expr): any;
    visitStringLit(node: AST.StringLit): Value<CWSString, string>;
    visitIntLit(node: AST.IntLit): Value<Int, bigint>;
    visitDecLit(node: AST.DecLit): Value<Dec, string>;
    visitBoolLit(node: AST.BoolLit): Value<Bool, boolean>;
    visitNoneLit(node: AST.NoneLit): CWSNone;
}
export {};
