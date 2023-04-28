import * as AST from './ast';
import { SymbolTable } from './util/symbol-table';
export type TyConstructor<D extends Data<any> | Impl<any>> = new (...args: any[]) => Type<D>;
export type OperatorKey<O extends AST.Op> = `#operator${O}`;
export type OperatorFn<LHS extends Type, RHS extends Type, RET extends Type> = (lhs: Value<LHS>, rhs: Value<RHS>) => Value<RET>;
export type Data<X = any> = {
    data: X;
};
export type Impl<Y extends Value = any> = {
    impl: Y;
};
export type ValueOf<T> = T extends Type<infer D> ? D extends Data<infer X> ? Value<T, X> : D extends Impl<infer Y> ? Y : never : never;
export type GetV<T extends Type, D extends Data | Impl> = D extends Data<infer X> ? Value<T, X> : D extends Impl<infer Y> ? Y : never;
export declare class Failure {
    error: Value<CWSString | ErrorMsg>;
    constructor(error: Value<CWSString | ErrorMsg>);
}
export declare class Return {
    value: Value;
    constructor(value: Value);
}
export declare class Type<D extends Data | Impl = Data | Impl> extends SymbolTable {
    name: string;
    constructor(name: string);
    defineMethod<S extends Value>(name: string, params: Array<[string, Type, Value] | [string, Type]>, ret: Type, call: (self: S, ...args: any[]) => any): void;
    inheritMethodsFrom(other: Type): void;
    tryFromVal(val: Value): GetV<this, D> | Failure;
    fromVal(val: Value): GetV<this, D>;
    defaultValue(): GetV<this, D>;
    /**
     * Checks if this <: other, i.e. if this can be converted to
     * other without losing information.
     */
    isSubOf(other: Type): boolean;
    isSuperOf(other: Type): boolean;
    isEq(other: Type): other is this;
    isCompatibleWith(other: Type): boolean;
    value(data: any): GetV<this, D>;
    callOperator<RHS extends Type, RET extends Type>(op: AST.Op, lhs: Value<this>, rhs: Value<RHS>): Value<RET>;
    /**
     * Creates a new type with the given name, which should only be used for "unit" types,
     * which exist as root types. Then, in classes of subtypes you can define "isSubOf" to first
     * check if the other type is the unit type in question, and if so, return true.
     * E.g.: "ExecMsgT" will exist as the unit type, and "ExecMsg" will defined "isSubOf" to
     * check if the other type is "ExecMsgT" first, and if so, return true.
     * @param name
     */
    static makeUnitT(name: string): Type<Data<null>>;
    static unitT<Dx = any>(name: string): new () => Type<Data<null>>;
}
export declare class Value<T extends Type = Type, D extends any = any> extends SymbolTable {
    ty: T;
    data: D;
    constructor(ty: T, data: D);
    toString(): string;
    getSymbol<T = any>(name: string): T;
    isOfType<T1 extends Type>(ty: T1): boolean;
    isInstanceOf<T1 extends Type>(ty: T1): boolean;
    isOfTypeClass<D1 extends Data | Impl, C extends TyConstructor<D1>>(tyc: C): this is Value<InstanceType<C>>;
    equals(other: Value): boolean;
}
export declare class Param extends SymbolTable {
    name: string;
    ty?: Type<Data<any> | Impl<any>> | undefined;
    default_?: any;
    constructor(name: string, ty?: Type<Data<any> | Impl<any>> | undefined, default_?: any);
}
export declare class OptionT<T extends Type = any> extends Type<Impl<Value<CWSNone>> | Impl<Value<T>>> {
    inner: T;
    constructor(inner: T);
    isSubOf(other: Type): boolean;
    isEq(other: Type): other is this;
    defaultValue(): GetV<this, Impl<Value<CWSNone>> | Impl<Value<T>>>;
    value(data: any): GetV<this, Impl<Value<CWSNone>> | Impl<Value<T>>>;
    fromVal(val: Value): GetV<this, Impl<Value<CWSNone>> | Impl<Value<T>>>;
}
export declare class TupleT extends Type<Impl<TupleInstance>> {
    tys: Type[];
    constructor(tys: Type[]);
    isEq(other: Type): other is this;
    isSubOf(other: Type): boolean;
    value(data: Value[]): TupleInstance;
    defaultValue(): GetV<this, Impl<TupleInstance>>;
}
export declare class ListT<T extends Type = Type> extends Type<Impl<ListInstance<T>>> {
    inner: T;
    constructor(inner: T);
    value(data: Value<T>[]): ListInstance<T>;
    defaultValue(): ListInstance<T>;
    isEq(other: Type): other is this;
    isSubOf(other: Type): boolean;
}
export interface Indexable<T extends Type = Type> {
    getIndex(args: Arg[]): Value<T>;
    setIndex(args: Arg[], val: Value<T>): void;
    removeIndex?(args: Arg[]): void;
}
export interface Sized {
    getSize(): number;
}
export declare class SizedIndexableIter<T extends Type = Type> implements CWSIter<T> {
    parent: Indexable<T> & Sized;
    ix: number;
    constructor(parent: Indexable<T> & Sized);
    next(): Value<T> | undefined;
}
export interface CWSIter<T extends Type = Type> {
    next(): Value<T> | undefined;
}
export interface CWSIterable<T extends Type = Type> {
    getIter(): CWSIter<T>;
}
export declare class SizedIndexableValue<T extends Type = Type, V extends Type = Type> extends Value<T> implements Indexable<V>, CWSIterable<V>, Sized {
    ty: T;
    items: Value<V>[];
    constructor(ty: T, items: Value<V>[]);
    getSize(): number;
    getIndex(args: Arg[]): Value<V>;
    setIndex(args: Arg[], val: Value<V>): void;
    getIter(): CWSIter<V>;
    operatorIn(val: Value): boolean;
    equals(other: Value): boolean;
}
export declare class ListInstance<T extends Type = Type> extends SizedIndexableValue<ListT<T>, T> {
    constructor(ty: ListT<T>, items: Value<T>[]);
}
export declare class TupleInstance extends SizedIndexableValue<TupleT> {
}
export declare class CWSAny extends Type<Data<any>> {
    static TYPE: CWSAny;
    constructor();
    value(data: any): Value<this, any>;
    isSubOf<T extends Type>(other: T): boolean;
    isSuperOf(other: Type): boolean;
    fromVal(val: Value): Value<this, any>;
}
export declare const AnyT: CWSAny;
export declare class CWSNone extends Type<Data<null>> {
    static TYPE: CWSNone;
    static NONE: Value<CWSNone, null>;
    constructor();
    value(data: any): Value<this, null>;
    defaultValue(): Value<this, null>;
    isSubOf<T extends Type>(other: T): boolean;
}
export declare class CWSBool extends Type<Data<boolean>> {
    static TYPE: CWSBool;
    static TRUE: Value<CWSBool, boolean>;
    static FALSE: Value<CWSBool, boolean>;
    constructor();
    static isTrue(val: any): boolean;
    static isFalse(val: any): boolean;
    value(data: boolean): Value<this, boolean>;
    defaultValue(): Value<this, boolean>;
}
export declare const BoolT: CWSBool;
export declare class ContractDefn extends Type<Impl<ContractReference>> {
    name: string;
    constructor(name: string);
    instantiate(args: Arg[]): Value<InstantiateMsg>;
    exec(fnName: string, args: Arg[]): Value<ExecMsg>;
    query(fnName: any, args: Arg[]): Value<QueryMsg>;
    value(data: Value): ContractReference<this>;
    defaultValue(): ContractReference<this>;
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
    default_: Value;
    constructor(key: string, ty: Type, default_: Value);
}
export declare class StateMap extends SymbolTable {
    prefix: string;
    mapKeys: MapKey[];
    ty: Type;
    default_: Value;
    constructor(prefix: string, mapKeys: MapKey[], ty: Type, default_: Value);
}
export interface Function<T extends Type = Type> {
    call(args: Arg[]): Value<T>;
}
export declare class FnDefn<T extends Type = Type> extends SymbolTable {
    name: string;
    fallible: boolean;
    params: Param[];
    retTy: T | undefined;
    body: AST.Block;
    constructor(name: string, fallible: boolean, params: Param[], retTy: T | undefined, body?: AST.Block);
    validateArgs(args: Arg[]): void;
    setArgsInScope(scope: SymbolTable, args: Arg[]): void;
}
/**
 * A method is a function that is bound to a specific instance of a type.
 * In order to call it, you need to call `bind` with the instance to use
 * as the `self` parameter.
 */
export declare class TypeMethod<S extends Value = Value, R extends Type = Type> {
    name: string;
    fallible: boolean;
    params: Param[];
    retTy: Type;
    call: (self: S, ...args: Value[]) => Value<R>;
    constructor(name: string, fallible: boolean, params: Param[], retTy: Type, call: (self: S, ...args: Value[]) => Value<R>);
    bind(self: S): MethodDefn;
}
export declare class MethodDefn<S extends Value = Value, R extends Type = Type> extends FnDefn {
    name: string;
    fallible: boolean;
    params: Param[];
    retTy: Type;
    call: (self: S, ...args: Value[]) => Value<R>;
    constructor(name: string, fallible: boolean, params: Param[], retTy: Type, call: (self: S, ...args: Value[]) => Value<R>);
}
export declare class StructDefn extends Type<Impl<StructInstance>> {
    name: string;
    params: Param[];
    structFn: FnDefn;
    constructor(name: string, params: Param[]);
    isEq(other: Type): other is this;
    value(args: Arg[]): StructInstance<this>;
    make(args: {
        [k: string]: Value;
    }): StructInstance<this>;
    defaultValue(): GetV<this, Impl<StructInstance>>;
}
export declare class EnumDefn extends Type<Impl<Value>> {
    name: string;
    variants: {
        [k: string]: EnumVariantStructDefn | EnumVariantUnitDefn;
    };
    constructor(name: string, variants?: {
        [k: string]: EnumVariantStructDefn | EnumVariantUnitDefn;
    });
    isEq(other: Type): other is this;
    isSuperOf<T extends Type>(other: T): boolean;
    structVariant(name: string, params: Param[]): EnumVariantStructDefn;
    unitVariant(name: string): EnumVariantUnitDefn;
    defaultValue(): GetV<this, Impl<Value>>;
}
export declare const InstantiateMsgT: Type<Data<null>>;
export declare const ExecMsgT: Type<Data<null>>;
export declare const QueryMsgT: Type<Data<null>>;
export declare const ErrorT: Type<Data<null>>;
export declare const EventT: Type<Data<null>>;
export declare class InstantiateMsg extends StructDefn {
    isSubOf(other: Type): boolean;
    isEq(other: Type): other is this;
}
export declare class ExecMsg extends StructDefn {
    isSubOf(other: Type): boolean;
    isEq(other: Type): other is this;
}
export declare class QueryMsg extends StructDefn {
    isSubOf(other: Type): boolean;
    isEq(other: Type): other is this;
}
export declare class ErrorMsg extends StructDefn {
    isSubOf(other: Type): boolean;
    isEq(other: Type): other is this;
}
export declare class EventMsg extends StructDefn {
    isSubOf(other: Type): boolean;
    isEq(other: Type): other is this;
}
export declare class EnumVariantStructDefn extends StructDefn {
    ty: EnumDefn;
    variantName: string;
    params: Param[];
    constructor(ty: EnumDefn, variantName: string, params: Param[]);
    isSubOf(other: Type): boolean;
    isEq(other: Type): other is this;
}
export declare class EnumVariantUnitDefn extends Type {
    ty: EnumDefn;
    variantName: string;
    constructor(ty: EnumDefn, variantName: string);
    isSubOf(other: Type): boolean;
    isEq(other: Type): other is this;
}
export declare class Arg extends SymbolTable {
    value: Value;
    name?: string | undefined;
    constructor(value: Value, name?: string | undefined);
}
export declare class ContractReference<C extends ContractDefn = ContractDefn> extends Value<ContractDefn, null> {
    ty: ContractDefn;
    address: Value<CWSAddress>;
    constructor(ty: ContractDefn, address: Value<CWSAddress>);
}
export declare class StructInstance<T extends StructDefn = StructDefn> extends Value<T> {
}
export declare function arg(val: Value, name?: string): Arg;
export declare function args(a_pos?: Value[], a_named?: {
    [name: string]: Value;
}): Arg[];
export declare function idx(ix: number): Arg[];
export declare function operator<O extends AST.Op>(op: O): OperatorKey<O>;
export declare class CWSString extends Type<Data<string>> {
    static TYPE: CWSString;
    constructor();
    defaultValue(): GetV<this, Data<string>>;
}
export declare const StringT: CWSString;
export declare class CWSAddress extends Type<Data<string>> {
    static TYPE: CWSAddress;
    constructor();
    isSubOf(other: Type): boolean;
    defaultValue(): GetV<this, Data<string>>;
    fromVal(val: Value): Value<this, string>;
}
export declare const AddressT: CWSAddress;
export declare class CWSDec extends Type<Data<string>> {
    static TYPE: CWSDec;
    constructor();
}
export declare const DecT: CWSDec;
export declare class CWSBinary extends Type<Data<string>> {
    static TYPE: CWSBinary;
    constructor();
}
export declare const BinaryT: CWSBinary;
export declare enum IntSize {
    SIZE_8 = 8,
    SIZE_16 = 16,
    SIZE_32 = 32,
    SIZE_64 = 64,
    SIZE_128 = 128
}
export declare class CWSInt extends Type<Data<bigint>> {
    static TYPE: CWSInt;
    constructor();
    defaultValue(): GetV<this, Data<bigint>>;
    fromVal(val: Value): GetV<this, Data<bigint>>;
}
export declare const IntT: CWSInt;
export declare const UINT_MAX: {
    [k: string]: bigint;
};
export declare const MAX_64: bigint;
export declare const MAX_32: bigint;
export declare const MAX_16: bigint;
export declare const MAX_8: bigint;
export declare class CWSUnsignedInt extends Type<Data<bigint>> {
    size: IntSize;
    MAX: ValueOf<CWSInt>;
    constructor(size: IntSize);
    defaultValue(): GetV<this, Data<bigint>>;
    isSubOf(other: Type): boolean;
    tryFromVal(val: Value): GetV<this, Data<bigint>> | Failure;
    fromVal(val: Value): GetV<this, Data<bigint>>;
    value(data: any): Value<this, bigint>;
}
export declare const U8_T: CWSUnsignedInt;
export declare const U16_T: CWSUnsignedInt;
export declare const U32_T: CWSUnsignedInt;
export declare const U64_T: CWSUnsignedInt;
export declare const U128_T: CWSUnsignedInt;
export declare const Err_UnwrapNone: ErrorMsg;
export declare const Err_Generic: ErrorMsg;
export declare const Err_TypeError: ErrorMsg;
export declare const NoneT: CWSNone;
export declare const None: Value<CWSNone, null>;
export declare const CoinT: StructDefn;
export declare const CoinList: ListT<StructDefn>;
export declare const CtxEnvBlockInfoT: StructDefn;
export declare const CtxEnvContractInfoT: StructDefn;
export declare const CtxEnvT: StructDefn;
export declare const CtxInfoT: StructDefn;
export declare const CtxResT: StructDefn;
export declare const STDLIB: {
    None: Value<CWSNone, null>;
    Int: CWSInt;
    String: CWSString;
    Address: CWSAddress;
    Bool: CWSBool;
    U8: CWSUnsignedInt;
    U16: CWSUnsignedInt;
    U32: CWSUnsignedInt;
    U64: CWSUnsignedInt;
    U128: CWSUnsignedInt;
    Binary: CWSBinary;
    Error: Type<Data<null>>;
};
