import * as AST from './ast';
import { SymbolTable } from './util/symbol-table';

export type TyConstructor<D extends Data<any> | Impl<any>> = new (
  ...args: any[]
) => Type<D>;

export type OperatorKey<O extends AST.Op> = `#operator${O}`;

export type OperatorFn<LHS extends Type, RHS extends Type, RET extends Type> = (
  lhs: Value<LHS>,
  rhs: Value<RHS>
) => Value<RET>;

// Type<Data<X>> <=> Value<Type> := Value<Type, X>
export type Data<X = any> = { data: X };

// Type<Impl<Y>> <=> Value<Type> := Y
export type Impl<Y extends Value = any> = { impl: Y };

// This is for external access
export type ValueOf<T> = T extends Type<infer D>
  ? D extends Data<infer X>
    ? Value<T, X>
    : D extends Impl<infer Y>
    ? Y
    : never
  : never;

// This is for internal access (avoiding recursion)
export type GetV<T extends Type, D extends Data | Impl> = D extends Data<
  infer X
>
  ? Value<T, X>
  : D extends Impl<infer Y>
  ? Y
  : never;

export class Type<D extends Data | Impl = Data | Impl> extends SymbolTable {
  constructor(public name: string) {
    super();
  }
  defineMethod<S extends Value>(
    name: string,
    params: Array<[string, Type, Value] | [string, Type]>,
    ret: Type,
    call: (self: S, ...args: any[]) => any
  ) {
    let fallible = false;
    let symbolName = name;
    if (name.endsWith('!')) {
      name = name.slice(0, -1);
      symbolName = name + '#!';
      fallible = true;
    }

    let ps: Param[] = [];
    for (let p of params) {
      if (p.length === 2) {
        ps.push(new Param(p[0], p[1]));
      } else {
        ps.push(new Param(p[0], p[1], p[2]));
      }
    }

    this.setSymbol(symbolName, new TypeMethod(name, fallible, ps, ret, call));
  }

  /**
   * Checks if this <: other, i.e. if this can be converted to
   * other without losing information.
   */

  isSubOf(other: Type): boolean {
    return this.isEq(other);
  }

  isSuperOf(other: Type): boolean {
    return this.isEq(other) || other.isSubOf(this);
  }

  isEq(other: Type): other is this {
    // make sure all properties match
    return this === other;
  }

  isCompatibleWith(other: Type): boolean {
    return this.isSubOf(other) || other.isSubOf(this);
  }

  value(data: any): GetV<this, D> {
    return new Value(this, data) as any;
  }

  convertFrom<F extends Type>(val: Value<F>): GetV<this, D> {
    throw new Error(`Method not implemented.`);
  }

  convertInto<T extends Type>(into: T, val: Value<this>): Value<T> {
    if (!this.canConvertInto(into)) {
      throw new Error(`cannot convert ${this.name} into ${into.name}`);
    }
    return into.convertFrom(val as Value<this>) as Value<T>;
  }

  convertibleFromTypes?(): Type[];

  canConvertFrom(other: Type): boolean {
    if (this.convertibleFromTypes) {
      return this.convertibleFromTypes().includes(other);
    } else {
      return other.canConvertInto(this);
    }
  }

  canConvertInto(other: Type): boolean {
    return other.canConvertFrom(this);
  }

  [operator(AST.Op.EQ)](lhs: Value<this>, rhs: Value<Type>): Value<CWSBool> {
    // check if types are equal
    console.warn("default implementation of operator '==' used");
    if (lhs.ty.isEq(rhs.ty)) {
      return CWSBool.TRUE;
    } else {
      return CWSBool.FALSE;
    }
  }

  [operator(AST.Op.NEQ)](lhs: Value<this>, rhs: Value<Type>): Value<CWSBool> {
    // check if types are equal
    if (lhs.ty.isEq(rhs.ty)) {
      return CWSBool.FALSE;
    } else {
      return CWSBool.TRUE;
    }
  }

  callOperator<RHS extends Type, RET extends Type>(
    op: AST.Op,
    lhs: Value<this>,
    rhs: Value<RHS>
  ): Value<RET> {
    // check if types are equal
    if (operator(op) in this) {
      let opFn = (this as any)[operator(op)] as OperatorFn<this, RHS, RET>;
      return opFn(lhs as Value<this>, rhs);
    } else {
      throw new Error(`operator '${op}' not defined for type ${this.name}`);
    }
  }

  /**
   * Creates a new type with the given name, which should only be used for "unit" types,
   * which exist as root types. Then, in classes of subtypes you can define "isSubOf" to first
   * check if the other type is the unit type in question, and if so, return true.
   * E.g.: "ExecMsgT" will exist as the unit type, and "ExecMsg" will defined "isSubOf" to
   * check if the other type is "ExecMsgT" first, and if so, return true.
   * @param name
   */
  static makeUnitT(name: string): Type<Data<null>> {
    return new (Type.unitT(name))();
  }

  static unitT<Dx = any>(name: string): new () => Type<Data<null>> {
    return class extends Type<Data<null>> {
      constructor() {
        super(name);
      }
    };
  }
}

export class Value<
  T extends Type = Type,
  D extends any = any
> extends SymbolTable {
  constructor(public ty: T, public data: D) {
    super({});
  }

  getSymbol<T = any>(name: string): T {
    if (!this.hasOwnSymbol(name)) {
      if (this.ty.hasOwnSymbol(name)) {
        let x = this.ty.getSymbol(name);
        if (x instanceof TypeMethod) {
          return x.bind(this) as any;
        }
        return x;
      }
    }
    return super.getSymbol(name);
  }

  isOfType<T1 extends Type>(ty: T1): ty is T1 {
    return this.ty.isEq(ty);
  }

  isOfTypeClass<D1 extends Data | Impl, C extends TyConstructor<D1>>(
    tyc: C
  ): this is Value<InstanceType<C>> {
    return this.ty instanceof tyc;
  }

  equals(other: Value): boolean {
    return this.ty.isCompatibleWith(other.ty) && this.data === other.data;
  }
}

//endregion <INODES:META>

//region <INODES:TYPES>

export class Param extends SymbolTable {
  constructor(public name: string, public ty?: Type, public default_?: any) {
    super();
  }
}

export class OptionT<T extends Type = any> extends Type<Data<any>> {
  constructor(public inner: T) {
    super(`${inner.name}?`);
  }

  isSubOf(other: Type): boolean {
    return (
      (other instanceof OptionT && this.inner.isSubOf(other.inner)) ||
      super.isSubOf(other)
    );
  }

  isEq(other: Type): other is this {
    return other instanceof OptionT && this.inner.isEq(other.inner);
  }

  convertFrom<F extends Type>(val: Value<F>): Value<this> {
    throw new Error('Method not implemented.');
    if (val.isOfTypeClass(OptionT)) {
      return this.value(val.data);
    } else if (val.isOfType(NoneT)) {
      return this.value(null);
    } else {
      throw new Error(`cannot convert ${val.ty.name} into ${this.name}`);
    }
  }

  value(data: any): Value<this> {
    // TODO: replace null with CWSNone
    if (data === null) {
      return new Value(this, null);
    } else {
      return new Value(this, this.inner.value(data));
    }
  }

  canConvertFrom(other: Type): boolean {
    if (other instanceof OptionT) {
      return this.inner.canConvertFrom(other.inner);
    } else if (other.isEq(NoneT)) {
      return true;
    } else {
      return super.canConvertFrom(other);
    }
  }
}

export class TupleT extends Type<Impl<TupleInstance>> {
  constructor(public tys: Type[]) {
    super(`[${tys.map((x) => x.name).join(', ')}]`);
  }

  isEq(other: Type): other is this {
    return (
      other instanceof TupleT &&
      this.tys.length === other.tys.length &&
      this.tys.every((x, i) => x.isEq(other.tys[i]))
    );
  }

  isSubOf(other: Type): boolean {
    if (other instanceof TupleT) {
      return (
        this.tys.length === other.tys.length &&
        this.tys.every((x, i) => x.isSubOf(other.tys[i]))
      );
    } else if (other instanceof ListT) {
      return this.tys.every((x, i) => {
        return x.isSubOf(other.inner);
      });
    } else {
      return super.isSubOf(other);
    }
  }

  convertFrom<F extends Type>(val: Value<F>): TupleInstance {
    throw new Error('Method not implemented.');
  }

  value(data: Value[]): TupleInstance {
    return new TupleInstance(this, data);
  }
}

export class ListT<T extends Type = Type> extends Type<Impl<ListInstance<T>>> {
  constructor(public inner: T) {
    super(`${inner.name}[]`);
    this.defineMethod<ListInstance<T>>(
      'push',
      [['val', this.inner]],
      NoneT,
      (self, val) => {
        self.items.push(val);
        return None;
      }
    );
    this.defineMethod<ListInstance<T>>(
      'pop',
      [],
      new OptionT(this.inner),
      (self) => {
        if (self.items.length > 0) {
          return self.items.pop();
        } else {
          return None;
        }
      }
    );
  }

  convertFrom<F extends Type>(val: Value<F>): ListInstance<T> {
    throw new Error('Method not implemented.');
  }

  value(data: Value<T>[]): ListInstance<T> {
    return new ListInstance(this, data);
  }

  isEq(other: Type): other is this {
    return other instanceof ListT && this.inner.isEq(other.inner);
  }

  isSubOf(other: Type): boolean {
    if (other instanceof ListT) {
      return this.inner.isSubOf(other.inner);
    }
    return super.isSubOf(other);
  }
}

export interface Indexable<T extends Type = Type> {
  getIndex(args: Arg[]): Value<T>;
  setIndex(args: Arg[], val: Value<T>): void;
  getSize(): number;
}

export class IndexableIter<T extends Type = Type> implements CWSIter<T> {
  public ix: number = 0;
  constructor(public parent: Indexable<T>) {}

  next(): Value<T> | undefined {
    if (this.ix >= this.parent.getSize()) {
      return undefined;
    }
    return this.parent.getIndex(idx(this.ix++));
  }
}

export interface CWSIter<T extends Type = Type> {
  next(): Value<T> | undefined;
}

export interface CWSIterable<T extends Type = Type> {
  getIter(): CWSIter<T>;
}

export class IndexableValue<T extends Type = Type, V extends Type = Type>
  extends Value<T>
  implements Indexable<V>, CWSIterable<V>
{
  constructor(public ty: T, public items: Value<V>[]) {
    super(ty, undefined);
  }

  getSize(): number {
    return this.items.length;
  }

  getIndex(args: Arg[]): Value<V> {
    if (args.length !== 1) {
      throw new Error(`list index requires 1 argument, got ${args.length}`);
    }

    let arg = args[0];
    if (!arg.value.isOfType(IntT)) {
      throw new Error(
        // @ts-ignore
        `list index must be Int, got ${arg.value.ty.name}`
      );
    }

    // TODO: this is iffy, fix Value vs Val or make an int type
    let ix = arg.value.data;
    if (ix < 0 || ix >= this.getSize()) {
      throw new Error(`index out of range: ${ix}`);
    }

    return this.items[Number(ix)];
  }

  setIndex(args: Arg[], val: Value<V>): void {
    if (args.length !== 1) {
      throw new Error(`list index requires 1 argument, got ${args.length}`);
    }

    let arg = args[0];
    if (!arg.value.isOfType(IntT)) {
      throw new Error(
        // @ts-ignore
        `list index must be an integer, got ${arg.value.ty.name}`
      );
    }

    let ix = arg.value.data;
    if (ix < 0 || ix >= this.getSize()) {
      throw new Error(`index out of range: ${ix}`);
    }

    this.items[Number(ix)] = val;
  }

  getIter(): CWSIter<V> {
    return new IndexableIter(this);
  }

  operatorIn(val: Value): boolean {
    return this.items.some((x) => x.equals(val));
  }

  equals(other: Value): boolean {
    return (
      other instanceof IndexableValue &&
      this.items.every((x, i) => x.equals(other.items[i]))
    );
  }
}

export class ListInstance<T extends Type = Type> extends IndexableValue<
  ListT<T>,
  T
> {
  constructor(ty: ListT<T>, items: Value<T>[]) {
    super(ty, items);
  }

  push(val: Value<T>) {
    this.items.push(val);
  }
}

export class TupleInstance extends IndexableValue<TupleT> {}

export class CWSAny extends Type<Data<any>> {
  public static TYPE: CWSAny = new CWSAny();

  constructor() {
    super('Any');
  }

  value(data: any): Value<this, any> {
    return data;
  }

  convertFrom<O extends Type>(other: Value<O>): Value<this, any> {
    throw new Error('Method not implemented.');
  }

  isSubOf<T extends Type>(other: T): boolean {
    return true;
  }

  isSuperOf(other: Type): boolean {
    return true;
  }
}

export const AnyT = CWSAny.TYPE;

export class CWSNone extends Type<Data<null>> {
  public static TYPE: CWSNone = new CWSNone();
  public static NONE: Value<CWSNone, null> = new Value(CWSNone.TYPE, null);

  constructor() {
    super('None');
  }

  value(data?: any): Value<this, null> {
    return new Value(this, null);
  }

  convertFrom<O extends Type>(other: Value<O>): Value<this, null> {
    if (!other.isOfType(NoneT)) {
      // @ts-ignore
      throw new Error(`Cannot convert ${other.ty.name} to None`);
    } else {
      return new Value(this, null);
    }
  }

  convertibleFromTypes(): Type[] {
    return [CWSNone.TYPE];
  }

  isSubOf<T extends Type>(other: T): boolean {
    return super.isSubOf(other) || other instanceof OptionT;
  }
}

export class CWSBool extends Type<Data<boolean>> {
  public static TYPE: CWSBool = new CWSBool();

  public static TRUE: Value<CWSBool, boolean> = new Value(CWSBool.TYPE, true);
  public static FALSE: Value<CWSBool, boolean> = new Value(CWSBool.TYPE, false);

  constructor() {
    super('Bool');
  }

  public static isTrue(val: any): boolean {
    if (val.isOfType(CWSBool.TYPE)) {
      return val.data;
    } else {
      throw new Error(`Cannot convert ${val.ty.name} to Bool`);
    }
  }

  public static isFalse(val: any): boolean {
    return !CWSBool.isTrue(val);
  }

  convertFrom<O extends Type>(other: Value<O>): Value<this, boolean> {
    throw new Error('Method not implemented.');
    if (other.isOfType(IntT)) {
      return new Value(this, other.data !== BigInt(0));
    } else if (other.isOfType(CWSBool.TYPE)) {
      return new Value(this, other.data);
    } else {
      throw new Error(`Cannot convert ${other.ty.name} to Bool`);
    }
  }
}

export const BoolT = CWSBool.TYPE;

//endregion <INODES:TYPES>

//region <INODES:DEFINITIONS>
export class ContractDefn extends Type<Impl<ContractInstance>> {
  constructor(public name: string) {
    super(name);
  }

  convertFrom<F extends Type>(other: Value<F>): ContractInstance<this> {
    throw new Error('Method not implemented.');
  }

  instantiate(args: Arg[]): Value<InstantiateMsg> {
    return this.getSymbol<InstantiateMsg>('#instantiate').value(args);
  }

  exec(fnName: string, args: Arg[]): Value<ExecMsg> {
    return this.getSymbol<ExecMsg>('exec#' + fnName).value(args);
  }

  query(fnName: any, args: Arg[]): Value<QueryMsg> {
    return this.getSymbol<QueryMsg>('query#' + fnName).value(args);
  }

  value(data: Value): ContractInstance<this> {
    if (data.isOfType(AddressT)) {
      return new ContractInstance(this, data.data);
    } else {
      throw new Error(`Cannot convert ${data.ty.name} to ContractInstance`);
    }
  }
}
export class InterfaceDefn extends SymbolTable {
  constructor(public name: string) {
    super();
  }
}

export class MapKey extends SymbolTable {
  constructor(public ty: Type, public name?: string) {
    super();
  }
}

export class StateItem extends SymbolTable {
  constructor(public key: string, public ty: Type) {
    super();
  }
}
export class StateMap extends SymbolTable {
  constructor(
    public prefix: string,
    public mapKeys: MapKey[],
    public ty: Type,
    public default_?: Value
  ) {
    super();
  }
}

export interface Function<T extends Type = Type> {
  call(args: Arg[]): Value<T>;
}

export class FnDefn<T extends Type = Type> extends SymbolTable {
  // if name is %anonymous%, then this is a lambda defn
  constructor(
    public name: string,
    public fallible: boolean,
    public params: Param[],
    public retTy: T | undefined,
    public body: AST.Block
  ) {
    super();
  }

  validateArgs(args: Arg[]) {
    // ensure positional arguments come before named arguments
    let firstNamedArgIx = args.findIndex((x) => x.name !== undefined);
    // check if any args after first named arg are positional
    let nextPosArg = args.findIndex(
      (x, i) => x.name === undefined && i > firstNamedArgIx
    );
    if (firstNamedArgIx !== -1 && nextPosArg !== -1) {
      throw new Error(
        `${this.name}: positional arguments must come before named arguments`
      );
    }

    // see if there are too many arguments
    if (args.length > this.params.length) {
      throw new Error(`${this.name}: too many arguments`);
    }

    // see if there are enough arguments
    let requiredParams = this.params.filter((p) => p.default_ === undefined);
    if (args.length < requiredParams.length) {
      throw new Error(
        `${this.name}: too few arguments, got ${args.length} but expected ${
          requiredParams.length
        } (${requiredParams.map((x) => x.name).join(', ')})`
      );
    }

    // see if there are any arguments that are not in the function signature
    let unknownArgs = args.filter((x) => {
      return (
        x.name !== undefined && !this.params.some((p) => p.name === x.name)
      );
    });

    if (unknownArgs.length > 0) {
      throw new Error(
        `${this.name}: called with unknown named arguments ${unknownArgs
          .map((x) => x.name)
          .join(', ')}`
      );
    }

    // check each provided argument type matches corresponding param
    for (let i = 0; i < args.length; i++) {
      let arg = args[i];
      // if it is a named param
      let p: Param;
      if (arg.name !== undefined) {
        // find the corresponding param
        p = this.params.find((x) => x.name === arg.name)!;
      } else {
        p = this.params[i];
      }
      if (p.ty && !arg.value.isOfType(p.ty) && p.ty !== AnyT) {
        throw new Error(
          // @ts-ignore
          `${this.name}: invalid argument type for ${p.name} - expected ${p.ty.name}, got ${arg.value.ty.name}`
        );
      }
    }
  }

  setArgsInScope(scope: SymbolTable, args: Arg[]) {
    this.validateArgs(args);
    // at this point, we know:
    // 1. all named args come after positional args
    // 2. there are no unknown named args
    // 3. there are not any missing required args (the ones that don't have a default)
    // 4. all provided args are of the correct type
    for (let i = 0; i < args.length; i++) {
      let arg = args[i];
      let p: Param;
      if (arg.name !== undefined) {
        p = this.params.find((x) => x.name === arg.name)!;
      } else {
        p = this.params[i];
      }
      scope.setSymbol(p.name, arg.value);
    }
  }
}

/**
 * A method is a function that is bound to a specific instance of a type.
 * In order to call it, you need to call `bind` with the instance to use
 * as the `self` parameter.
 */
export class TypeMethod<S extends Value = Value, R extends Type = Type> {
  constructor(
    public name: string,
    public fallible: boolean,
    public params: Param[],
    public retTy: Type,
    public call: (self: S, ...args: Value[]) => Value<R>
  ) {}

  bind(self: S): MethodDefn {
    return new MethodDefn(
      this.name,
      this.fallible,
      this.params,
      this.retTy,
      (...args: Value[]) => this.call(self, ...args)
    );
  }
}

export class MethodDefn<
  S extends Value = Value,
  R extends Type = Type
> extends FnDefn {
  constructor(
    public name: string,
    public fallible: boolean,
    public params: Param[],
    public retTy: Type,
    public call: (self: S, ...args: Value[]) => Value<R>
  ) {
    super(name, fallible, params, retTy, AST.List.empty());
  }
}

export class StructDefn extends Type<Impl<StructInstance>> {
  public structFn: FnDefn;

  constructor(public name: string, public params: Param[]) {
    super(name);
    this.structFn = new FnDefn(name, false, params, this, new AST.Block([]));
  }

  isEq(other: Type): other is this {
    return (
      other instanceof StructDefn &&
      this.name === other.name &&
      this.params.length === other.params.length &&
      this.params.every((p, i) =>
        p.name === other.params[i].name && p.ty
          ? other.params[i].ty
            ? p.ty.isEq(other.params[i].ty!)
            : false
          : p.ty === other.params[i].ty
      )
    );
  }

  convertFrom<F extends Type>(val: Value<F>): StructInstance<this> {
    throw new Error('Method not implemented.');
  }

  value(args: Arg[]): StructInstance<this> {
    this.structFn.validateArgs(args);
    let instance = new StructInstance(this, undefined);
    this.structFn.setArgsInScope(instance, args);
    return instance;
  }
}

export class EnumDefn extends Type<Impl<Value>> {
  constructor(
    public name: string,
    public variants: {
      [k: string]: EnumVariantStructDefn | EnumVariantUnitDefn;
    } = {}
  ) {
    super(name);
    for (let v in variants) {
      this.setSymbol('#' + variants[v].name, variants[v]);
    }
  }

  isEq(other: Type): other is this {
    return (
      other instanceof EnumDefn &&
      this.name === other.name &&
      Object.keys(this.variants).length ===
        Object.keys(other.variants).length &&
      Object.keys(this.variants).every((k) => {
        return other.variants[k] && this.variants[k].isEq(other.variants[k]);
      })
    );
  }
  convertFrom<F extends Type>(val: Value<F>): any {
    throw new Error('Method not implemented.');
  }

  isSuperOf<T extends Type>(other: T): boolean {
    if (
      other instanceof EnumVariantStructDefn ||
      other instanceof EnumVariantUnitDefn
    ) {
      return this.isEq(other.ty);
    } else {
      return super.isSuperOf(other);
    }
  }

  structVariant(name: string, params: Param[]) {
    const defn = new EnumVariantStructDefn(this, name, params);
    this.variants[name] = defn;
    this.setSymbol('#' + name, defn);
    return defn;
  }

  unitVariant(name: string) {
    const defn = new EnumVariantUnitDefn(this, name);
    this.variants[name] = defn;
    this.setSymbol('#' + name, defn);
    return defn;
  }
}

export const InstantiateMsgT = Type.makeUnitT('InstantiateMsg');
export const ExecMsgT = Type.makeUnitT('ExecMsg');
export const QueryMsgT = Type.makeUnitT('QueryMsg');

export const ErrorT = Type.makeUnitT('Error');
export const EventT = Type.makeUnitT('Event');

export class InstantiateMsg extends StructDefn {
  isSubOf(other: Type): boolean {
    return other.isEq(InstantiateMsgT) || super.isSubOf(other);
  }

  isEq(other: Type): other is this {
    return other instanceof InstantiateMsg && super.isEq(other);
  }
}

export class ExecMsg extends StructDefn {
  isSubOf(other: Type): boolean {
    return other.isEq(ExecMsgT) || super.isSubOf(other);
  }

  isEq(other: Type): other is this {
    return other instanceof ExecMsg && super.isEq(other);
  }
}

export class QueryMsg extends StructDefn {
  isSubOf(other: Type): boolean {
    return other.isEq(QueryMsgT) || super.isSubOf(other);
  }

  isEq(other: Type): other is this {
    return other instanceof QueryMsg && super.isEq(other);
  }
}

export class ErrorMsg extends StructDefn {
  isSubOf(other: Type): boolean {
    return other.isEq(ErrorT) || super.isSubOf(other);
  }

  isEq(other: Type): other is this {
    return other instanceof ErrorMsg && super.isEq(other);
  }
}

export class EventMsg extends StructDefn {
  isSubOf(other: Type): boolean {
    return other.isEq(EventT) || super.isSubOf(other);
  }

  isEq(other: Type): other is this {
    return other instanceof EventMsg && super.isEq(other);
  }
}

export class EnumVariantStructDefn extends StructDefn {
  constructor(
    public ty: EnumDefn,
    public variantName: string,
    public params: Param[]
  ) {
    super(`${ty.name}.#${variantName}`, params);
  }

  isSubOf(other: Type): boolean {
    return this.ty.isSubOf(other) || super.isSubOf(other);
  }

  isEq(other: Type): other is this {
    return (
      other instanceof EnumVariantStructDefn &&
      this.ty.isEq(other.ty) &&
      super.isEq(other)
    );
  }
}

export class EnumVariantUnitDefn extends Type {
  constructor(public ty: EnumDefn, public variantName: string) {
    super(`${ty.name}.#${variantName}`);
  }

  isSubOf(other: Type): boolean {
    return this.ty.isSubOf(other) || super.isSubOf(other);
  }

  isEq(other: Type): other is this {
    return (
      other instanceof EnumVariantUnitDefn &&
      this.ty.isEq(other.ty) &&
      this.name === other.name
    );
  }
}

//endregion <INODES:DEFNS>

//region <INODES:VALUES>

export class Arg extends SymbolTable {
  constructor(public value: Value, public name?: string) {
    super();
  }
}

export class ContractInstance<
  C extends ContractDefn = ContractDefn
> extends Value<ContractDefn, null> {
  constructor(public ty: ContractDefn, public address: Value<CWSAddress>) {
    super(ty, null);
  }
}
export class StructInstance<
  T extends StructDefn = StructDefn
> extends Value<T> {}

//endregion <INODES:VALUES>
//region <STDLIB>

//region <HELPER FUNCTIONS>

export function arg(val: Value, name?: string) {
  return new Arg(val, name);
}

export function args(
  a_pos: Value[] = [],
  a_named: { [name: string]: Value } = {}
): Arg[] {
  return a_pos
    .map((v) => arg(v))
    .concat(Object.keys(a_named).map((name) => arg(a_named[name], name)));
}

export function idx(ix: number) {
  return args([IntT.value(BigInt(ix))]);
}

export function operator<O extends AST.Op>(op: O): OperatorKey<O> {
  return ('#operator' + op) as OperatorKey<O>;
}

export class CWSString extends Type<Data<string>> {
  static TYPE = new CWSString();
  constructor() {
    super('String');
  }

  convertFrom<F extends Type>(val: Value<F>): Value<this, string> {
    if (val.isOfType(IntT) || val.isOfTypeClass(CWSUnsignedInt)) {
      return this.value(val.data.toString());
    }
    throw new Error('Cannot convert from ' + val.ty.name);
  }
}

export const StringT = CWSString.TYPE;
export class CWSAddress extends Type<Data<string>> {
  static TYPE = new CWSAddress();
  constructor() {
    super('Address');
  }
  isSubOf(other: Type): boolean {
    return other.isEq(StringT) || super.isSubOf(other);
  }
}

export const AddressT = CWSAddress.TYPE;

export class CWSDec extends Type<Data<string>> {
  static TYPE = new CWSDec();
  constructor() {
    super('Dec');
  }
}

export const DecT = CWSDec.TYPE;

export class CWSBinary extends Type<Data<string>> {
  static TYPE = new CWSBinary();
  constructor() {
    super('Binary');
  }
}

export const BinaryT = CWSBinary.TYPE;

export enum IntSize {
  SIZE_8 = 8,
  SIZE_16 = 16,
  SIZE_32 = 32,
  SIZE_64 = 64,
  SIZE_128 = 128,
}

export class CWSInt extends Type<Data<bigint>> {
  static TYPE = new CWSInt();
  constructor() {
    super('Int');
  }
  // [operator(AST.Op.PLUS)](lhs_: Data<Int>, rhs_: Data) {
  //   let lhs = cast(this, lhs_);
  //   let rhs = this.cast(rhs_);
  //   return this.value(lhs.data + rhs.data);
  // }
  //
  // [operator(AST.Op.MINUS)](lhs_: Data<Int>, rhs_: Data) {
  //   let lhs = this.cast(lhs_);
  //   let rhs = this.cast(rhs_);
  //   return this.value(lhs.data - rhs.data);
  // }
  //
  // [operator(AST.Op.MUL)](lhs_: Data<Int>, rhs_: Data) {
  //   let lhs = this.cast(lhs_);
  //   let rhs = this.cast(rhs_);
  //   return this.value(lhs.data * rhs.data);
  // }
  //
  // [operator(AST.Op.DIV)](lhs_: Data<Int>, rhs_: Data) {
  //   let lhs = this.cast(lhs_);
  //   let rhs = this.cast(rhs_);
  //   try {
  //     this.value(BigInt(lhs.data / rhs.data));
  //   } catch (e) {
  //     throw new Error('Cannot divide by zero');
  //   }
  // }
  //
  // [operator(AST.Op.MOD)](lhs_: Data<Int>, rhs_: Data) {
  //   let lhs = this.cast(lhs_);
  //   let rhs = this.cast(rhs_);
  //   try {
  //     this.value(BigInt(lhs.data % rhs.data));
  //   } catch (e) {
  //     throw new Error('Cannot divide by zero');
  //   }
  // }
  //
  // [operator(AST.Op.EQ)](lhs_: Data<Int>, rhs_: Data) {
  //   let lhs = this.cast(lhs_);
  //   let rhs = this.cast(rhs_);
  //   return Bool.TYPE.value(lhs.data === rhs.data);
  // }

  convertFrom<O extends Type>(other: Value<O>): Value<this, bigint> {
    throw new Error('Method not implemented.');
  }
}

export const IntT = CWSInt.TYPE;

export class CWSUnsignedInt extends Type<Data<bigint>> {
  constructor(size: IntSize) {
    super('U' + size.toString());
  }

  isSubOf(other: Type): boolean {
    return other.isEq(IntT) || super.isSubOf(other);
  }

  value(data: any): Value<this, bigint> {
    if (typeof data === 'bigint') {
      return new Value(this, data);
    } else if (typeof data === 'number') {
      return new Value(this, BigInt(data));
    } else {
      throw new Error(`Cannot convert ${typeof data} to ${this.name}!`);
    }
  }

  convertFrom<F extends Type>(val: Value<F>): Value<this, bigint> {
    if (val.isOfType(StringT)) {
      return this.value(BigInt(val.data));
    }
    throw new Error(`Cannot convert ${(val as any).ty.name} to ${this.name}!`);
  }
}

export const U8_T = new CWSUnsignedInt(IntSize.SIZE_8);
export const U16_T = new CWSUnsignedInt(IntSize.SIZE_16);
export const U32_T = new CWSUnsignedInt(IntSize.SIZE_32);
export const U64_T = new CWSUnsignedInt(IntSize.SIZE_64);
export const U128_T = new CWSUnsignedInt(IntSize.SIZE_128);
export const Err_UnwrapNone = new ErrorMsg('UnwrapNone', []);
export const Err_Generic = new ErrorMsg('StringError', [
  new Param('message', StringT),
]);

export const NoneT = CWSNone.TYPE;
export const None = CWSNone.NONE;

export const STDLIB = {
  None,
  Int: IntT,
  String: StringT,
  Address: AddressT,
  Bool: BoolT,
  U8: U8_T,
  U16: U16_T,
  U32: U32_T,
  U64: U64_T,
  U128: U128_T,
  Binary: BinaryT,
  Error: ErrorT,
};
