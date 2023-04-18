import * as AST from './ast';
import { SymbolTable } from './util/symbol-table';

//region <INODES:META>

export class Type<D = any> extends SymbolTable {
  constructor(public name: string) {
    super();
  }

  cast(value: Val): Val<this> {
    throw new Error(`cannot convert ${value.ty.name} to ${this.name}`);
  }

  isSuperOf<T extends Type>(other: T): boolean {
    // TODO: implement this for all types
    return this.isEq(other) || other.isSubOf(this);
  }

  /**
   * Checks if this <: other, i.e. if this can be converted to
   * other without losing information.
   */
  isSubOf<T extends Type>(other: T): boolean {
    // TODO: implement this for all types
    return this.isEq(other) || other.isSuperOf(this);
  }

  isEq<T extends Type>(other: T): boolean {
    // make sure all properties match
    if (!(other instanceof this.constructor)) {
      return false;
    } else {
      for (let key in this) {
        if (this[key] !== (other as any)[key]) {
          return false;
        }
      }
      return true;
    }
  }

  isCompatibleWith(other: Type): boolean {
    return this.isSubOf(other) || other.isSubOf(this);
  }

  value(val?: any): Value<this, D> {
    return new Value(this, val);
  }

  [operator(AST.Op.EQ)](lhs: Val<Type>, rhs: Val<Type>): Val<Bool> {
    // check if types are equal
    console.warn("default implementation of operator '==' used");
    if (lhs.ty.isEq(rhs.ty)) {
      return Bool.TRUE;
    } else {
      return Bool.FALSE;
    }
  }

  [operator(AST.Op.NEQ)](lhs: Val<Type>, rhs: Val<Type>): Val<Bool> {
    // check if types are equal
    if (lhs.ty.isEq(rhs.ty)) {
      return Bool.FALSE;
    } else {
      return Bool.TRUE;
    }
  }

  callOperator<LHS extends Type, RHS extends Type, RET extends Type>(
    op: AST.Op,
    lhs: Val<LHS>,
    rhs: Val<RHS>
  ): Val<RET> {
    // check if types are equal
    if (operator(op) in this) {
      let opFn = (this as any)[operator(op)] as OperatorFn<LHS, RHS, RET>;
      return opFn(lhs, rhs);
    } else {
      throw new Error(`operator ${op} not defined for type ${this.name}`);
    }
  }
}

export interface Val<T extends Type = Type> {
  ty: T;
}

export class Value<T extends Type = Type, D = any>
  extends SymbolTable
  implements Val<T>
{
  constructor(public ty: T, public data: D = undefined as any) {
    super();
  }
}

//endregion <INODES:META>

//region <INODES:TYPES>

export class Param extends SymbolTable {
  constructor(public name: string, public ty?: Type, public default_?: any) {
    super();
  }
}

export class OptionalType extends Type {
  constructor(public inner: Type) {
    super(`${inner.name}?`);
  }

  isSubOf<T extends Type>(other: T): boolean {
    return (
      (other instanceof OptionalType && this.inner.isSubOf(other.inner)) ||
      super.isSubOf(other)
    );
  }
}

export class TupleType extends Type {
  constructor(public tys: Type[]) {
    super(`[${tys.map((x) => x.name).join(', ')}]`);
  }
}

export class ListType<T extends Type = Type> extends Type {
  constructor(public inner: T, public size?: number) {
    super(`${inner.name}${size ? `[${size}]` : '[]'}`);
  }

  isSubOf(other: Type): boolean {
    if (other instanceof ListType) {
      if (this.size !== undefined) {
        return this.size === other.size && this.inner.isSubOf(other.inner);
      } else {
        return this.inner.isSubOf(other.inner);
      }
    } else if (other instanceof TupleType) {
      if (this.size !== undefined) {
        return (
          this.size === other.tys.length &&
          other.tys.every((x) => this.inner.isSubOf(x))
        );
      } else {
        return super.isSubOf(other);
      }
    } else {
      return super.isSubOf(other);
    }
  }
}

export interface Indexable<T extends Type = Type> {
  getIndex(args: Arg[]): Val<T>;
  setIndex(args: Arg[], val: Val<T>): void;
  getSize(): number;
}

export class IndexableIter<T extends Type = Type> implements Iter<T> {
  public ix: number = 0;
  constructor(public parent: Indexable<T>) {}

  next(): Val<T> | undefined {
    if (this.ix >= this.parent.getSize()) {
      return undefined;
    }
    return this.parent.getIndex([new Arg(IntType.value(this.ix++))]);
  }
}

export interface Iter<T extends Type = Type> {
  next(): Val<T> | undefined;
}

export interface Iterable<T extends Type = Type> {
  getIter(): Iter<T>;
}

export class IndexableValue<T extends Type = Type, V extends Type = Type>
  extends SymbolTable
  implements Val<T>, Indexable<V>, Iterable<V>
{
  constructor(public ty: T, public items: Val<V>[]) {
    super();
  }

  getSize(): number {
    return this.items.length;
  }

  getIndex(args: Arg[]): Val<V> {
    if (args.length !== 1) {
      throw new Error(`list index requires 1 argument, got ${args.length}`);
    }

    let arg = args[0];
    if (!checkValue(Int.TYPE, arg.value)) {
      throw new Error(
        `list index must be an integer, got ${arg.value.ty.name}`
      );
    }

    // TODO: this is iffy, fix Value vs Val or make an int type
    let ix = arg.value.data;
    if (ix < 0 || ix >= this.getSize()) {
      throw new Error(`index out of range: ${ix}`);
    }

    return this.items[Number(ix)];
  }

  setIndex(args: Arg[], val: Val<V>): void {
    if (args.length !== 1) {
      throw new Error(`list index requires 1 argument, got ${args.length}`);
    }

    let arg = args[0];
    if (!checkValue(Int.TYPE, arg.value)) {
      throw new Error(
        `list index must be an integer, got ${arg.value.ty.name}`
      );
    }

    let ix = arg.value.data;
    if (ix < 0 || ix >= this.getSize()) {
      throw new Error(`index out of range: ${ix}`);
    }

    this.items[Number(ix)] = val;
  }

  getIter(): Iter<V> {
    return new IndexableIter(this);
  }
}

export class ListInstance<T extends Type = Type> extends IndexableValue<
  ListType<T>,
  T
> {
  push(val: Val<T>) {
    this.items.push(val);
  }
}

export class TupleInstance extends IndexableValue<TupleType> {}

export class CWSNone extends Type implements Val<CWSNone> {
  public static TYPE: CWSNone = new CWSNone();
  public ty: CWSNone = CWSNone.TYPE;

  constructor() {
    super('None');
  }

  isSubOf<T extends Type>(other: T): boolean {
    return super.isSubOf(other) || other instanceof OptionalType;
  }
}

export class Bool extends Type<boolean> {
  public static TYPE: Bool = new Bool();
  public static TRUE: Value<Bool> = new Value(Bool.TYPE, true);
  public static FALSE: Value<Bool> = new Value(Bool.TYPE, false);

  constructor() {
    super('Bool');
  }

  public static isTrue(val: any): boolean {
    if (checkValue(Bool.TYPE, val)) {
      return val.ty.isEq(Bool.TYPE) && val.data;
    } else {
      return false;
    }
  }
}

//endregion <INODES:TYPES>

//region <INODES:DEFINITIONS>
export class ContractDefn extends Type {
  constructor(public name: string) {
    super(name);
  }

  instantiate(args: any[]) {
    this.getSymbol('#instantiate').call(args);
  }

  exec(fnName: string, args: any[]) {
    this.getSymbol('exec#' + fnName).call(args);
  }

  query(fnName: any, args: any[]) {
    return this.getSymbol('query#' + fnName).call(args);
  }
}
export class InterfaceDefn extends SymbolTable {
  constructor(public name: string) {
    super();
  }
}
export class StateMap extends SymbolTable {
  constructor(public prefix: string, public mapKeys: Type[], public ty: Type) {
    super();
  }
}

export class StateItem extends SymbolTable {
  constructor(public key: string, public ty: Type) {
    super();
  }
}

export interface Function<T extends Type = Type> {
  call(args: Arg[]): Val<T>;
}

export class FnDefn<T extends Type | undefined = Type> extends Type {
  // if name is %anonymous%, then this is a lambda defn
  constructor(
    public name: string,
    public fallible: boolean,
    public params: Param[],
    public retTy: T,
    public body: AST.Block
  ) {
    super(name);
  }

  setArgsInScope(scope: SymbolTable, args: Arg[]) {
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
    if (
      args.length < this.params.filter((x) => x.default_ !== undefined).length
    ) {
      throw new Error(`${this.name}: too few arguments`);
    }

    // see if there are any arguments that are not in the function signature
    let unknownArgs = args.filter((x) => {
      return !this.params.some((y) => y.name === x.name);
    });

    if (unknownArgs.length > 0) {
      throw new Error(
        `${this.name}: ${
          this.name
        }: called with unknown named arguments ${unknownArgs
          .map((x) => x.name)
          .join(', ')}`
      );
    }

    for (let p of this.params) {
      let arg = args.find((a) => p.name === a.name);
      if (arg === undefined) {
        if (p.default_ === undefined) {
          throw new Error(
            `${this.name}: missing argument for required param ${p.name}`
          );
        }
        scope.setSymbol(p.name, p.default_);
      } else {
        if (p.ty ? check(p.ty, arg.value) : false) {
          throw new Error(
            `${this.name}: invalid argument type for ${p.name} - expected ${
              p.ty!.name
            }, got ${arg.value.ty.name}`
          );
        }
        scope.setSymbol(p.name, arg.value);
      }
    }
  }
}

export class StructDefn extends Type implements Function<StructDefn> {
  constructor(public name: string, public params: Param[]) {
    super(name);
  }

  call(args: Arg[]): StructInstance<this> {
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

    // see if there are enough arguments
    if (
      args.length < this.params.filter((x) => x.default_ !== undefined).length
    ) {
      throw new Error(`${this.name}: too few arguments`);
    }

    let params: { [k: string]: any } = {};

    args.forEach((arg, i) => {
      if (arg.name === undefined) {
        if (i >= this.params.length) {
          throw new Error(`${this.name}: too many positional arguments`);
        }
        params[this.params[i].name] = arg.value;
      } else {
        params[arg.name] = arg.value;
      }
    });
    return this.make(params);
  }

  make(args: { [k: string]: any }): StructInstance<this> {
    let instance = new StructInstance(this);

    for (let m of this.params) {
      let arg = args[m.name];
      if (arg === undefined) {
        if (m.default_ === undefined) {
          throw new Error(`${this.name}: missing required member ${m.name}`);
        }
        instance.setSymbol(m.name, m.default_);
      } else {
        if (m.ty !== undefined && !check(m.ty, arg)) {
          throw new Error(
            `${this.name}: invalid type for member ${m.name} - expected ${
              m.ty!.name
            }, got ${arg.ty.name}`
          );
        }
        instance.setSymbol(m.name, arg);
      }
    }
    return instance;
  }
}

export class EnumDefn extends Type {
  constructor(public name: string) {
    super(name);
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
    this.setSymbol(name, defn);
    return defn;
  }

  unitVariant(name: string) {
    const defn = new EnumVariantUnitDefn(this, name);
    this.setSymbol(name, defn);
    return defn;
  }
}

export const InstantiateMsgType = new Type('InstantiateMsg');
export const ExecMsgType = new Type('ExecMsg');
export const QueryMsgType = new Type('QueryMsg');

export const ErrorType = new Type('Error');
export const EventType = new Type('Event');

export class InstantiateMsg extends StructDefn {
  isSubOf(other: Type): boolean {
    return other.isEq(InstantiateMsgType) || super.isSubOf(other);
  }
}

export class ExecMsg extends EnumDefn {
  isSubOf(other: Type): boolean {
    return other.isEq(ExecMsgType) || super.isSubOf(other);
  }
}

export class QueryMsg extends EnumDefn {
  isSubOf(other: Type): boolean {
    return other.isEq(QueryMsgType) || super.isSubOf(other);
  }
}

export class ErrorMsg extends EnumDefn {
  isSubOf(other: Type): boolean {
    return other.isEq(ErrorType) || super.isSubOf(other);
  }
}

export class EventMsg extends EnumDefn {
  isSubOf(other: Type): boolean {
    return other.isEq(EventType) || super.isSubOf(other);
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
}

export class EnumVariantUnitDefn extends Type {
  constructor(public ty: EnumDefn, public variantName: string) {
    super(`${ty.name}.#${variantName}`);
  }

  isSubOf(other: Type): boolean {
    return this.ty.isSubOf(other) || super.isSubOf(other);
  }
}

//endregion <INODES:DEFNS>

//region <INODES:VALUES>

export class Arg extends SymbolTable {
  constructor(public value: Val, public name?: string) {
    super();
  }
}

export class ContractInstance extends Value<ContractDefn> {
  constructor(public ty: ContractDefn, public address: string) {
    super(ty);
  }
}
export class StructInstance<
  T extends StructDefn = StructDefn
> extends Value<T> {}

//endregion <INODES:VALUES>
// region <STDLIB>

export const None = new CWSNone();

enum IntSize {
  SIZE_8 = 8,
  SIZE_16 = 16,
  SIZE_32 = 32,
  SIZE_64 = 64,
  SIZE_128 = 128,
}
class UnsignedInt<S extends IntSize> extends Type<bigint> {
  constructor(size: S) {
    super('U' + size.toString());
  }

  isSubOf(other: Type): boolean {
    return other.isEq(Int.TYPE) || super.isSubOf(other);
  }
}

export const U8 = new UnsignedInt(IntSize.SIZE_8);
export const U16 = new UnsignedInt(IntSize.SIZE_16);
export const U32 = new UnsignedInt(IntSize.SIZE_32);
export const U64 = new UnsignedInt(IntSize.SIZE_64);
export const U128 = new UnsignedInt(IntSize.SIZE_128);

export type OperatorFn<LHS extends Type, RHS extends Type, RET extends Type> = (
  lhs: Val<LHS>,
  rhs: Val<RHS>
) => Val<RET>;

class Int extends Type<bigint> {
  static TYPE = new Int();
  constructor() {
    super('Int');
  }
  cast(other: Val): Value<this, bigint> {
    if (checkValue(Int.TYPE, other)) {
      return this.value(other.data);
    } else {
      throw new Error(
        'Cannot convert from ' + other.ty.name + ' to ' + this.name
      );
    }
  }

  [operator(AST.Op.PLUS)](lhs_: Val<Int>, rhs_: Val) {
    let lhs = this.cast(lhs_);
    let rhs = this.cast(rhs_);
    return this.value(lhs.data + rhs.data);
  }

  [operator(AST.Op.MINUS)](lhs_: Val<Int>, rhs_: Val) {
    let lhs = this.cast(lhs_);
    let rhs = this.cast(rhs_);
    return this.value(lhs.data - rhs.data);
  }

  [operator(AST.Op.MUL)](lhs_: Val<Int>, rhs_: Val) {
    let lhs = this.cast(lhs_);
    let rhs = this.cast(rhs_);
    return this.value(lhs.data * rhs.data);
  }

  [operator(AST.Op.DIV)](lhs_: Val<Int>, rhs_: Val) {
    let lhs = this.cast(lhs_);
    let rhs = this.cast(rhs_);
    try {
      this.value(BigInt(lhs.data / rhs.data));
    } catch (e) {
      throw new Error('Cannot divide by zero');
    }
  }

  [operator(AST.Op.MOD)](lhs_: Val<Int>, rhs_: Val) {
    let lhs = this.cast(lhs_);
    let rhs = this.cast(rhs_);
    try {
      this.value(BigInt(lhs.data % rhs.data));
    } catch (e) {
      throw new Error('Cannot divide by zero');
    }
  }

  [operator(AST.Op.EQ)](lhs_: Val<Int>, rhs_: Val) {
    let lhs = this.cast(lhs_);
    let rhs = this.cast(rhs_);
    return Bool.TYPE.value(lhs.data === rhs.data);
  }
}

class CWSString extends Type<string> {
  static TYPE = new CWSString();
  constructor() {
    super('String');
  }
}

class Address extends Type<string> {
  static TYPE = new Address();

  constructor() {
    super('Address');
  }

  isSubOf(other: Type): boolean {
    return other.isEq(CWSString.TYPE) || super.isSubOf(other);
  }
}

class Dec extends Type<string> {
  static TYPE = new Dec();
  constructor() {
    super('Dec');
  }
}

class Binary extends Type<string> {
  static TYPE = new Binary();
  constructor() {
    super('Binary');
  }
}

const CWSError = new ErrorMsg('Error');
export const UnwrapNone = CWSError.unitVariant('UnwrapNone');
export const Generic = CWSError.structVariant('Generic', [
  new Param('message', CWSString.TYPE),
]);

export const STDLIB = {
  Address: Address.TYPE,
  Int: Int.TYPE,
  String: CWSString.TYPE,
  U8,
  U64,
  U128,
  Binary: Binary.TYPE,
  Error: CWSError,
};

//endregion <STDLIB>

//region <HELPER FUNCTIONS>

function check<T extends Type>(ty: T, val: any): val is Val<T> {
  return 'ty' in val && val.ty.isSubOf(ty);
}

type ValueOf<T extends Type> = T extends Type<infer D> ? Value<T, D> : never;

function checkValue<T extends Type>(ty: T, val: any): val is ValueOf<T> {
  return val instanceof Value && val.ty.isSubOf(ty);
}

function arg(val: Val, name?: string) {
  return new Arg(val, name);
}
function index(ix: number) {
  return [new Arg(Int.TYPE.value(BigInt(ix)))];
}

type OperatorKey<O extends AST.Op> = `#operator${O}`;
function operator<O extends AST.Op>(op: O): OperatorKey<O> {
  return ('#operator' + op) as OperatorKey<O>;
}

//endregion <HELPER FUNCTIONS>

//region <INTERPRETER>

export interface CWScriptInterpreterContext {
  files: {
    [filename: string]: AST.SourceFile;
  };

  env?: {
    [globalName: string]: any;
  };
}

export class CWScriptInterpreter extends SymbolTable {
  constructor(public ctx: CWScriptInterpreterContext) {
    super({}, new SymbolTable(ctx.env));
    let visitor = new CWScriptInterpreterVisitor(this);
    Object.keys(this.ctx.files).forEach((filename) => {
      visitor.visit(this.ctx.files[filename]);
    });
  }
}

//endregion <INTERPRETER>

//region <VISITOR>

export class Failure {
  constructor(public error: Val<CWSString | ErrorMsg>) {}
}

export class Return {
  constructor(public value: Val) {}
}

export class CWScriptInterpreterVisitor extends AST.CWScriptASTVisitor {
  public ctx: any;
  scope: SymbolTable;

  constructor(public interpreter: CWScriptInterpreter) {
    super();
    this.scope = interpreter;
  }

  //region <PERVASIVES>

  visitSourceFile(node: AST.SourceFile) {
    node.forEach((x) => this.visit(x));
  }

  visitParam(node: AST.Param) {
    return new Param(
      node.name.value,
      node.ty !== null ? this.visit<Type>(node.ty!) : undefined,
      node.default_ !== null ? this.visit(node.default_!) : undefined
    );
  }

  //endregion <PERVASIVES>

  //region <TOP-LEVEL STATEMENTS>
  visitInterfaceDefn(node: AST.InterfaceDefn) {
    let prevScope = this.scope;
    let name = node.name.value;
    let interfaceDefn = this.scope.subscope(new InterfaceDefn(name));
    this.scope = interfaceDefn;

    node.body.children.forEach((x) => {
      if (x instanceof AST.StructDefn) {
        interfaceDefn.setSymbol(x.name!.value, this.visitStructDefn(x));
      }

      if (x instanceof AST.EnumDefn) {
        interfaceDefn.setSymbol(x.name.value, this.visitEnumDefn(x));
      }

      if (x instanceof AST.ErrorDefn) {
        interfaceDefn.setSymbol(
          'error#' + x.name!.value,
          this.visitErrorDefn(x)
        );
      }

      if (x instanceof AST.EventDefn) {
        interfaceDefn.setSymbol(
          'event#' + x.name!.value,
          this.visitEventDefn(x)
        );
      }
    });

    this.interpreter.setSymbol(name, interfaceDefn);
    this.scope = prevScope;
  }

  visitContractDefn(node: AST.ContractDefn) {
    let prevScope = this.scope;
    let name = node.name.value;
    let contractDefn = this.scope.subscope(new ContractDefn(name));
    this.scope = contractDefn;

    node.body.children.forEach((x) => {
      if (x instanceof AST.StructDefn) {
        contractDefn.setSymbol(x.name!.value, this.visitStructDefn(x));
      }

      if (x instanceof AST.EnumDefn) {
        contractDefn.setSymbol(x.name.value, this.visitEnumDefn(x));
      }

      if (x instanceof AST.StateDefnBlock) {
        x.descendantsOfType(AST.StateDefnItem).forEach((itemDefn) => {
          contractDefn.setSymbol(
            'state#' + itemDefn.name.value,
            new StateItem(itemDefn.name.value, this.visit(itemDefn.ty))
          );
        });
        x.descendantsOfType(AST.StateDefnMap).forEach((mapDefn) => {
          contractDefn.setSymbol(
            'state#' + mapDefn.name.value,
            new StateMap(
              mapDefn.name.value,
              mapDefn.mapKeys.map((k) => this.visit(k)),
              this.visit(mapDefn.ty)
            )
          );
        });
      }

      if (x instanceof AST.ErrorDefn) {
        contractDefn.setSymbol(
          'error#' + x.name!.value,
          this.visitErrorDefn(x)
        );
      }

      if (x instanceof AST.EventDefn) {
        contractDefn.setSymbol(
          'event#' + x.name!.value,
          this.visitEventDefn(x)
        );
      }

      if (x instanceof AST.InstantiateDefn) {
        let instantiateMsg = this.visitStructDefn(x);
        instantiateMsg.name = name + '.#instantiate';

        contractDefn.setSymbol('#instantiate', instantiateMsg);
        contractDefn.setSymbol(
          '#instantiate#impl',
          this.visitInstantiateDefn(x)
        );
      }

      if (x instanceof AST.ExecDefn) {
        let execMsg = this.visitStructDefn(x);
        execMsg.name = `exec ${name}.#${x.name.value}`;
        contractDefn.setSymbol('exec#' + x.name.value, execMsg);
        contractDefn.setSymbol(
          'exec#' + x.name.value + '#impl',
          this.visitExecDefn(x)
        );
      }

      if (x instanceof AST.QueryDefn) {
        let queryMsg = this.visitStructDefn(x);
        queryMsg.name = `query ${name}.#${x.name.value}`;
        contractDefn.setSymbol('query#' + x.name.value, queryMsg);
        contractDefn.setSymbol(
          'query#' + x.name.value + '#impl',
          this.visitQueryDefn(x)
        );
      }
    });

    this.scope = prevScope;
    this.interpreter.setSymbol(name, contractDefn);
  }

  //endregion <TOP-LEVEL STATEMENTS>

  //region <TYPE EXPRESSIONS>

  visitTypePath(node: AST.TypePath): Type {
    let segments = node.segments.map((x) => x.value);
    // start at the first segment, and keep going until we resolve the final segment
    let curr = this.scope.getSymbol(segments[0]);
    for (let i = 1; i < segments.length; i++) {
      let next = curr.getSymbol(segments[i]);
      if (!(next instanceof Type)) {
        throw new Error(`${segments[i]} is not a type`);
      }
      curr = next;
    }
    return curr;
  }

  visitStructDefn(
    node:
      | AST.ErrorDefn
      | AST.EventDefn
      | AST.StructDefn
      | AST.InstantiateDefn
      | AST.InstantiateDecl
      | AST.ExecDefn
      | AST.ExecDecl
      | AST.QueryDefn
      | AST.QueryDecl
  ): StructDefn {
    let name: string;
    if (
      node instanceof AST.InstantiateDefn ||
      node instanceof AST.InstantiateDecl
    ) {
      name = `#instantiate`;
    } else {
      name = node.name?.value ?? '%anonymous';
    }
    let params = node.params.map((p, i) => {
      if (!p.name) {
        throw new Error(`${name}: missing name for struct ${i}`);
      }
      if (!p.ty) {
        throw new Error(`${name}: missing type for member ${p.name!.value}`);
      }
      let ty = this.visit(p.ty!);
      let default_ = p.default_ ? this.visit(p.default_) : undefined;
      if (p.optional) {
        ty = new OptionalType(ty);
        default_ = p.default_ ?? None;
      }
      return new Param(p.name.value, ty, default_);
    });

    return new StructDefn(name, params);
  }

  visitEnumDefn(node: AST.EnumDefn): EnumDefn {
    let name = node.name.value;
    let enumDefn = new EnumDefn(name);
    node.variants.forEach((v, i) => {
      if (v instanceof AST.EnumVariantStruct) {
        let structDefn = this.visitStructDefn(v);
        enumDefn.structVariant(name, structDefn.params);
      }

      if (v instanceof AST.EnumVariantUnit) {
        enumDefn.unitVariant(name);
      }
    });
    return enumDefn;
  }

  visitListT(node: AST.ListT) {
    return new ListType(this.visit(node.ty), node.size ? node.size : undefined);
  }

  //endregion <TYPE EXPRESSIONS>

  //region <CONTRACT ITEMS>

  visitErrorDefn = (node: AST.ErrorDefn) => this.visitStructDefn(node);
  visitEventDefn = (node: AST.EventDefn) => this.visitStructDefn(node);

  visitFnDefn(node: AST.FnDefn) {
    let name = node.name.value;
    let params = node.params.map((p) => this.visitParam(p));
    let fallible = node.fallible;
    let retTy = node.retTy !== null ? this.visit(node.retTy) : undefined;
    return new FnDefn(name, fallible, params, retTy, node.body);
  }

  visitInstantiateDefn(node: AST.InstantiateDefn) {
    let params = node.params.map((p) => this.visitParam(p));
    let body = this.visitBlock(node.body);
    return {};
  }

  visitExecDefn(node: AST.ExecDefn) {
    return {};
  }

  visitQueryDefn(node: AST.QueryDefn) {
    return {};
  }

  //endregion <CONTRACT ITEMS>

  //region <STATEMENTS>
  visitBlock(node: AST.Block) {
    return node.map((x) => this.visit(x));
  }

  visitLetStmt(node: AST.LetStmt) {
    if (node.expr !== null) {
      let val = this.visit(node.expr);
      if (node.binding instanceof AST.IdentBinding) {
        this.scope.setSymbol(node.binding.name.value, val);
      } else if (node.binding instanceof AST.TupleBinding) {
        if (!(val.ty instanceof TupleType) && !(val.ty instanceof ListType)) {
          throw new Error(
            `tried to unpack ${val} as tuple of ${node.binding.bindings.length} elements`
          );
        }
        node.binding.bindings.forEach((symbol, i) => {
          let name = symbol.name.value;
          this.scope.setSymbol(name, val.index(i));
        });
      } else {
        // struct binding
        if (!(val.ty instanceof StructDefn)) {
          throw new Error(`tried to unpack ${val} as struct`);
        }
        node.binding.bindings.forEach((symbol, i) => {
          let name = symbol.name.value;
          this.scope.setSymbol(name, val.getSymbol(name));
        });
      }
    } else {
      throw new Error(`let statement without expression not yet implemented`);
    }
  }

  visitAssignStmt(node: AST.AssignStmt) {
    let rhs = this.visit<Val>(node.rhs);
    if (node.lhs instanceof AST.IdentLHS) {
      this.scope.setSymbol(node.lhs.symbol.value, rhs);
    } else if (node.lhs instanceof AST.DotLHS) {
      let obj = this.visit<SymbolTable>(node.lhs.obj);
      let member = node.lhs.member.value;
      let tbl = obj.firstTableWithSymbol(member);
      if (tbl === undefined) {
        throw new Error(
          `tried to assign to non-existent member ${member} of ${obj}`
        );
      } else {
        tbl.setSymbol(member, rhs);
      }
    } else {
      // index assignment
      let obj = this.visit(node.lhs.obj);
      if (!(obj.ty instanceof ListType) && !(obj.ty instanceof TupleType)) {
        throw new Error(`tried to index into non-indexable type ${obj.ty}`);
      } else {
        let args = node.lhs.args.map((x) => new Arg(this.visit(x)));
        obj.setIndex(args, rhs);
      }
    }
  }

  visitIfStmt(node: AST.IfStmt) {
    let pred = this.visit(node.pred) as Val;
    if (check(Bool.TYPE, pred)) {
      if (Bool.isTrue(pred)) {
        return this.visit(node.then);
      } else {
        return node.else_ !== null ? this.visit(node.else_) : None;
      }
    } else {
      throw new Error(`predicate must be a Bool, got ${pred.ty}`);
    }
  }

  visitForStmt(node: AST.ForStmt) {
    let expr = this.visit(node.iter);
    // make sure it is iterable
    if (!(expr.ty instanceof ListType) && !(expr.ty instanceof TupleType)) {
      throw new Error(`tried to iterate over non-iterable type ${expr.ty}`);
    }

    // get iterator
    let iter = (expr as Iterable).getIter();

    // make new scope
    let prevScope = this.scope;
    this.scope = prevScope.subscope();

    // bindings
    if (node.binding instanceof AST.IdentBinding) {
      let name = node.binding.name.value;
      for (let val = iter.next(); val !== undefined; val = iter.next()) {
        this.scope.setSymbol(name, val);
        this.visit(node.body);
      }
    } else if (node.binding instanceof AST.TupleBinding) {
      for (let val = iter.next(); val !== undefined; val = iter.next()) {
        // make sure val is iterable
        if (!(val.ty instanceof TupleType) && !(val.ty instanceof ListType)) {
          throw new Error(
            `tried to unpack ${val} as tuple of ${node.binding.bindings.length} elements`
          );
        }

        node.binding.bindings.forEach((symbol, i) => {
          this.scope.setSymbol(
            symbol.name.value,
            (val as unknown as Indexable).getIndex(index(i))
          );
        });
        this.visit(node.body);
      }
    } else {
      for (let val = iter.next(); val !== undefined; val = iter.next()) {
        if (!(val.ty instanceof StructDefn)) {
          throw new Error(`tried to unpack ${val} as struct`);
        }
        node.binding.bindings.forEach((symbol, i) => {
          let name = symbol.name.value;
          this.scope.setSymbol(
            name,
            (val as unknown as StructInstance).getSymbol(name)
          );
        });
        this.visit(node.body);
      }
    }
    this.scope = prevScope;
  }

  visitExecStmt(node: AST.ExecStmt) {
    let val = this.visit<Val>(node.expr);

    // check that val is an ExecMsg
    if (!val.ty.isSubOf(ExecMsgType)) {
      throw new Error(`tried to execute non-executable type ${val.ty.name}`);
    } else {
      let res = this.scope.getSymbol<StructInstance>('$res');
      let msgs = res.getSymbol<ListInstance<typeof ExecMsgType>>('msgs');
      return msgs.push(val);
    }
  }

  visitDelegateExecStmt(node: AST.DelegateExecStmt) {
    if (!(node.expr instanceof AST.FnCallExpr)) {
      throw new Error(`delegate_exec! statement must be function call`);
    } else if (!(node.expr.func instanceof AST.Ident)) {
      throw new Error(
        `delegate_exec! statement must directly call an exec #fn`
      );
    } else {
      let fn = this.scope.getSymbol<FnDefn>(
        'exec#' + node.expr.func.value + '#impl'
      );
      let args = node.expr.args.map((x) => new Arg(this.visit(x)));
      return this.callFn(fn, args);
    }
  }

  visitInstantiateStmt(node: AST.InstantiateStmt) {
    if (node.new_) {
      if (!(node.expr instanceof AST.FnCallExpr)) {
        throw new Error(`instantiate!# statement must be function call`);
      } else if (
        !(
          node.expr.func instanceof AST.TypePath ||
          node.expr.func instanceof AST.Ident
        )
      ) {
        throw new Error(
          `instantiate!# statement must directly use a contract name`
        );
      } else {
        let ty: Type;
        if (node.expr.func instanceof AST.TypePath) {
          ty = this.visit<Type>(node.expr.func);
        } else {
          ty = this.scope.getSymbol<Type>(node.expr.func.value);
        }
        if (!(ty instanceof ContractDefn)) {
          throw new Error(`tried to instantiate non-contract type ${ty}`);
        } else {
          let fn = ty.getSymbol<FnDefn>('#instantiate');
          let args = node.expr.args.map((x) => new Arg(this.visit(x)));
          let val = this.callFn(fn, args);
          if (val.ty.isSubOf(InstantiateMsgType)) {
            let res = this.scope.getSymbol<StructInstance>('$res');
            let msgs = res.getSymbol<ListInstance>('msgs');
            msgs.push(val);
          } else {
            throw new Error(
              `tried to instantiate non-InstantiateMsg type ${val.ty.name}`
            );
          }
        }
      }
    } else {
      // not #new
      let val = this.visit<Val>(node.expr);
      if (val.ty.isSubOf(InstantiateMsgType)) {
        let res = this.scope.getSymbol<StructInstance>('$res');
        let msgs =
          res.getSymbol<ListInstance<typeof InstantiateMsgType>>('msgs');
        msgs.push(val);
      } else {
        throw new Error(
          `tried to instantiate non-InstantiateMsg type ${val.ty.name}`
        );
      }
    }
  }

  visitReturnStmt(node: AST.ReturnStmt) {
    let val = this.visit<Val>(node.expr);
    return new Return(val);
  }

  visitFailStmt(node: AST.FailStmt) {
    let result = this.visit<Val>(node.expr);
    if (!check(ErrorType, result) && !check(CWSString.TYPE, result)) {
      throw new Error(
        `tried to fail with value other than Error or String: ${result}`
      );
    } else {
      if (check(CWSString.TYPE, result)) {
        result = Generic.make({ message: result });
      }
      return new Failure(result);
    }
  }

  //endregion <STATEMENTS>

  //region <EXPRESSIONS>

  visitArg(node: AST.Arg) {
    const val = this.visit(node.expr);
    return new Arg(val, node.name !== null ? node.name.value : undefined);
  }

  visitDotExpr(node: AST.DotExpr) {
    const obj: any = this.visit(node.obj);
    if (node.unwrap !== null) {
      (obj as SymbolTable).getSymbol(node.member.value);
    } else if (node.unwrap === AST.UnwrapOp.OR_NONE) {
      if (check(None, obj)) {
        return None;
      } else {
        return (obj as SymbolTable).getSymbol(node.member.value);
      }
    } else {
      if (check(None, obj)) {
        // TODO: result types
        throw new Error(`tried to access member ${node.member.value} of None`);
      } else {
        return (obj as SymbolTable).getSymbol(node.member.value);
      }
    }
  }

  visitAsExpr(node: AST.AsExpr) {
    throw new Error(`not implemented: visitAsExpr`);
  }

  visitIndexExpr(node: AST.IndexExpr) {
    const obj = this.visit(node.obj) as Val;
    if (obj.ty instanceof ListType || obj.ty instanceof TupleType) {
      const args = node.args.map((x) => this.visitArg(x));
      return (obj as unknown as Indexable).getIndex(args);
    } else {
      throw new Error(`tried to index non-tuple/list: ${obj.ty}`);
    }
  }

  visitDColonExpr(node: AST.DColonExpr) {
    const obj = this.visit(node.obj) as SymbolTable;
    return obj.getSymbol(node.member.value);
  }

  callFn(fn: FnDefn, args: Arg[]) {
    // create a new scope for the function call
    const prevScope = this.scope;
    this.scope = this.scope.subscope(new SymbolTable());
    fn.setArgsInScope(this.scope, args);
    // evaluate the function body in the new scope
    const result = this.visit(fn.body);
    // reset scope
    this.scope = prevScope;
    return result;
  }

  visitFnCallExpr(node: AST.FnCallExpr) {
    const func = this.visit(node.func);
    if (!(func instanceof FnDefn)) {
      throw new Error(`tried to call non-function ${func}`);
    }

    // evaluate the arguments in the present scope
    const args = node.args.map((x) => this.visitArg(x));
    return this.callFn(func, args);
  }

  executeBinOp(op: AST.Op, lhs: Val, rhs: Val) {
    return lhs.ty.callOperator(op, lhs, rhs);
  }

  visitBinOpExpr(node: AST.BinOpExpr) {
    const lhs = this.visit(node.lhs);
    const rhs = this.visit(node.rhs);
    return this.executeBinOp(node.op, lhs, rhs);
  }

  visitIsExpr(node: AST.IsExpr) {
    const lhs = this.visit(node.lhs);
    const rhs = this.visit<Type>(node.rhs);
    let result = check(rhs, lhs);
    return node.negative ? Bool.FALSE : Bool.TRUE;
  }

  visitNotExpr(node: AST.NotExpr) {
    const expr = this.visit(node.expr) as Val;

    if (check(Bool.TYPE, expr)) {
      return Bool.isTrue(expr) ? Bool.FALSE : Bool.TRUE;
    } else if (check(None, expr)) {
      return Bool.TRUE;
    } else {
      throw new Error(
        `tried to negate on expression other than Bool or None: ${expr.ty}`
      );
    }
  }

  visitNoneCheckExpr(node: AST.NoneCheckExpr) {
    const expr = this.visit(node.expr) as Val;
    return check(None, expr) ? Bool.TRUE : Bool.FALSE;
  }

  visitTryCatchElseExpr(node: AST.TryCatchElseExpr) {
    let prevScope = this.scope;
    this.scope = prevScope.subscope(new SymbolTable());
    const result = this.visit(node.body); // Val, ErrorInstance
    if (check(ErrorType, result)) {
      for (let c of node.catch_.toArray()) {
        let ty = this.visit<Type>(c.ty);
        if (check(ty, result)) {
          if (c.name !== null) {
            this.scope.setSymbol(c.name.value, result);
          }
          return this.visit(c.body);
        }
      }
      if (node.else_ !== null) {
        return this.visit(node.else_);
      } else {
        return new Failure(result);
      }
    } else if (check(None, result)) {
      if (node.else_ !== null) {
        return this.visit(node.else_);
      } else {
        return new Failure(UnwrapNone.value());
      }
    } else {
      return result;
    }
  }

  visitFailExpr(node: AST.FailExpr) {
    let result = this.visit<Val>(node.expr);
    if (!check(ErrorType, result) && !check(CWSString.TYPE, result)) {
      throw new Error(
        `tried to fail with value other than Error or String: ${result}`
      );
    } else {
      if (check(CWSString.TYPE, result)) {
        result = Generic.make({ message: result });
      }
      return new Failure(result);
    }
  }

  visitClosure(node: AST.Closure) {
    let params = node.params.map((x) => this.visitParam(x));
    let retTy = node.retTy !== null ? this.visit<Type>(node.retTy) : undefined;
    return new FnDefn('%anonymous', node.fallible, params, retTy, node.body);
  }

  visitTupleExpr(node: AST.TupleExpr) {
    let exprs = node.exprs.map((x) => this.visit(x));
    let tupType = new TupleType(exprs.map((x) => x.ty));
    return new TupleInstance(tupType, exprs);
  }

  visitStructExpr(node: AST.StructExpr) {
    if (node.ty === null) {
      let args: any = {};
      let ty = new StructDefn(
        '%anonymous',
        node.args.map((m) => {
          let value: any;
          if (m.value === null) {
            value = this.visit(m.name);
          } else {
            value = this.visit(m.value);
          }
          args[m.name.value] = value;
          return new Param(m.name.value, value.ty);
        })
      );
      return ty.make(args);
    } else {
      let ty = this.visit<Type>(node.ty);
      if (ty instanceof StructDefn) {
        throw new Error(`tried to instantiate non-struct type: ${ty}`);
      }
      let args: any = {};
      for (let m of node.args.toArray()) {
        let value: any;
        if (m.value === null) {
          value = this.visit(m.name);
        } else {
          value = this.visit(m.value);
        }
        args[m.name.value] = value;
      }
      return (ty as unknown as StructDefn).make(args);
    }
  }

  visitUnitVariantExpr(node: AST.UnitVariantExpr) {
    let ty = this.visit<EnumVariantUnitDefn>(node.ty);
    return (ty as unknown as EnumVariantUnitDefn).value();
  }

  visitIdent(node: AST.Ident) {
    return this.scope.getSymbol(node.value);
  }

  visitGroupedExpr(node: AST.GroupedExpr) {
    return this.visit(node.expr);
  }

  visitGrouped2Expr(node: AST.Grouped2Expr) {
    return this.visit(node.expr);
  }

  //endregion <EXPRESSIONS>

  //region <LITERALS>
  visitStringLit(node: AST.StringLit) {
    return CWSString.TYPE.value(node.value);
  }

  visitIntLit(node: AST.IntLit) {
    return Int.TYPE.value(BigInt(node.value));
  }

  visitDecLit(node: AST.DecLit) {
    return Dec.TYPE.value(node.value);
  }

  visitBoolLit(node: AST.BoolLit) {
    if (node.value === 'true') {
      return Bool.TRUE;
    } else {
      return Bool.FALSE;
    }
  }

  visitNoneLit(node: AST.NoneLit) {
    return None;
  }
  //endregion <LITERALS>
}

//endregion <VISITOR>
