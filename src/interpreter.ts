import * as AST from './ast';
import { SymbolTable } from './util/symbol-table';

//region <INODES:META>

export class Type extends SymbolTable {
  constructor(public name: string) {
    super();
  }

  check(value: Val): value is Val<this> {
    return value.ty.isSuperOf(this);
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
        if (this[key] != (other as any)[key]) {
          return false;
        }
      }
      return true;
    }
  }

  isCompatibleWith(other: Type): boolean {
    return this.isSuperOf(other) || other.isSuperOf(this);
  }

  value(val?: any): Value<this> {
    return new Value(this, val ?? undefined);
  }

  static newType(name: string) {
    return new (class extends Type {
      constructor() {
        super(name);
      }
    })();
  }
}
export interface Val<T extends Type = Type> {
  ty: T;
}

export class Value<T extends Type = Type>
  extends SymbolTable
  implements Val<T>
{
  constructor(public ty: T, public data?: any) {
    super();
  }
}

//endregion <INODES:META>

//region <INODES:TYPES>

export class Param extends SymbolTable {
  constructor(public name: string, public ty: Type, public default_?: any) {
    super();
  }
}

export class OptionalType extends Type {
  constructor(public inner: Type) {
    super(`${inner.name}?`);
  }

  check(value: Val): boolean {
    return None.isSubOf(value.ty) || this.inner.check(value);
  }
}

export class TupleType extends Type {
  constructor(public tys: Type[]) {
    super(`[${tys.map((x) => x.name).join(', ')}]`);
  }
}

export class TupleInstance extends Value<TupleType> {
  constructor(public ty: TupleType, public items: Val[]) {
    super(ty);
  }
}

export class ListType<T extends Type = Type> extends Type {
  constructor(public inner: T, public size?: number) {
    super(`${inner.name}${size ? `[${size}]` : '[]'}`);
  }

  check(value: Value): boolean {
    if (value.ty instanceof ListType) {
      // check inner types match
      if (this.size !== undefined) {
        return this.inner == value.ty.inner && this.size === value.ty.size;
      } else {
        return this.inner == value.ty.inner;
      }
    } else if (value.ty instanceof TupleType) {
      // check for each item of the Tuple that it matches the inner type
      if (this.size !== undefined) {
        return (
          value.ty.tys.length === this.size &&
          value.ty.tys.every((x) => x.isSubOf(this.inner))
        );
      } else {
        return value.ty.tys.every((x) => x.isSubOf(this.inner));
      }
    } else {
      return false;
    }
  }
}

export interface Indexable<T extends Type = Type> {
  index(args: Arg[]): Val<T>;
}

export class ListInstance<T extends Type = Type>
  extends Value<ListType<T>>
  implements Indexable<T>
{
  constructor(public ty: ListType<T>, public items: Val<T>[]) {
    super(ty);
  }

  index(args: Arg[]): Val<T> {
    if (args.length !== 1) {
      throw new Error(`list index requires 1 argument, got ${args.length}`);
    }

    let ix = args[0].value.data;
    if (ix < 0 || ix >= this.items.length) {
      throw new Error(`index out of range: ${ix}`);
    }

    return this.items[ix];
  }
}

export class NoneType extends Type implements Val<NoneType> {
  public static TYPE: NoneType = new NoneType();
  public ty: NoneType = NoneType.TYPE;

  constructor() {
    super('None');
  }
}

export class BoolType extends Type {
  public static TYPE: BoolType = new BoolType();

  constructor() {
    super('Bool');
  }

  public static isTrue(val: Value<BoolType>): boolean {
    return val.ty.isEq(BoolType.TYPE) && val.data;
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
        if (!p.ty.check(arg.value)) {
          throw new Error(
            `${this.name}: invalid argument type for ${p.name} - expected ${p.ty.name}, got ${arg.value.ty.name}`
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
        if (!m.ty.check(arg)) {
          throw new Error(
            `${this.name}: invalid type for member ${m.name} - expected ${m.ty.name}, got ${arg.ty.name}`
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

  check(value: Val): value is Val<this> {
    // TODO: need to change this to be more strict,
    //  which involves making StructVariant and UnitVariant types
    if (
      !(value.ty instanceof EnumVariantStructDefn) &&
      !(value.ty instanceof EnumVariantUnitDefn)
    ) {
      return false;
    }
    return value.ty.isEq(this);
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

export class ErrorType extends EnumDefn {
  static isError(ty: Type): boolean {
    return ty instanceof ErrorType;
  }

  static checkError(value: Val): boolean {
    return value.ty instanceof ErrorType;
  }
}

export class EventType extends EnumDefn {
  static isEvent(ty: Type): boolean {
    return ty instanceof EventType;
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
}

export class EnumVariantUnitDefn extends Type {
  constructor(public ty: EnumDefn, public variantName: string) {
    super(`${ty.name}.#${variantName}`);
  }
}

//endregion <INODES:DEFNS>

//region <INODES:VALUES>

export class Arg extends SymbolTable {
  constructor(public value: Value, public name?: string) {
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

export const None = new NoneType();
export const Bool = BoolType.TYPE;
export const True = Bool.value(true);
export const False = Bool.value(false);

const AddressType = Type.newType('Address');
const IntType = Type.newType('Int');
const DecType = Type.newType('Dec');
const StringType = Type.newType('String');
const U8Type = Type.newType('U8');
const U64Type = Type.newType('U64');
const U128Type = Type.newType('U128');
const BinaryType = Type.newType('Binary');

const CWSError = new ErrorType('Error');
export const UnwrapNone = CWSError.unitVariant('UnwrapNone');
export const Generic = CWSError.structVariant('Generic', [
  new Param('message', StringType),
]);

export const STDLIB = {
  Address: AddressType,
  Int: IntType,
  String: StringType,
  U8: U8Type,
  U64: U64Type,
  U128: U64Type,
  Binary: BinaryType,
  Error: CWSError,
};

//endregion <STDLIB>

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
  constructor(public error: Val<StringType | ErrorType>) {}
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
      node.ty !== null ? this.visit(node.ty!) : undefined,
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

  visitIfStmt(node: AST.IfStmt) {
    let pred = this.visit(node.pred) as Val;
    if (Bool.check(pred)) {
      if (BoolType.isTrue(pred as Value<BoolType>)) {
        return this.visit(node.then);
      } else {
        return node.else_ !== null ? this.visit(node.else_) : None;
      }
    } else {
      throw new Error(`predicate must be a Bool, got ${pred.ty}`);
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
      if (None.check(obj)) {
        return None;
      } else {
        return (obj as SymbolTable).getSymbol(node.member.value);
      }
    } else {
      if (None.check(obj)) {
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
      return (obj as unknown as Indexable).index(args);
    } else {
      throw new Error(`tried to index non-tuple/list: ${obj.ty}`);
    }
  }

  visitDColonExpr(node: AST.DColonExpr) {
    const obj = this.visit(node.obj) as SymbolTable;
    return obj.getSymbol(node.member.value);
  }

  visitFnCallExpr(node: AST.FnCallExpr) {
    const func = this.visit(node.func) as FnDefn;
    // evaluate the arguments in the present scope
    const args = node.args.map((x) => this.visitArg(x));
    // create a new scope for the function call
    const prevScope = this.scope;
    this.scope = this.scope.subscope(new SymbolTable());
    func.setArgsInScope(this.scope, args);
    // evaluate the function body in the new scope
    const result = this.visit(func.body);
    // reset scope
    this.scope = prevScope;
    return result;
  }

  visitBinOpExpr(node: AST.BinOpExpr) {
    const lhs = this.visit(node.lhs);
    const rhs = this.visit(node.rhs);
    return this.executeBinOp(node.op, lhs, rhs);
  }

  visitIsExpr(node: AST.IsExpr) {
    const lhs = this.visit(node.lhs);
    const rhs = this.visit(node.rhs) as Type;
    let result = rhs.check(lhs);
    return node.negative ? !result : result;
  }

  visitNotExpr(node: AST.NotExpr) {
    const expr = this.visit(node.expr) as Val;

    if (Bool.check(expr)) {
      return BoolType.isTrue(expr as Value<BoolType>) ? False : True;
    } else if (None.check(expr)) {
      return True;
    } else {
      throw new Error(
        `tried to negate on expression other than Bool or None: ${expr}`
      );
    }
  }

  visitNoneCheckExpr(node: AST.NoneCheckExpr) {
    const expr = this.visit(node.expr) as Val;
    return None.check(expr) ? True : False;
  }

  visitTryCatchElseExpr(node: AST.TryCatchElseExpr) {
    let prevScope = this.scope;
    this.scope = prevScope.subscope(new SymbolTable());
    const result = this.visit(node.body); // Val, ErrorInstance
    if (ErrorType.checkError(result)) {
      for (let c of node.catch_.toArray()) {
        let ty = this.visit<Type>(c.ty);
        if (ty.check(result)) {
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
    } else if (None.check(result)) {
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
    let result = this.visit(node.expr);
    if (!ErrorType.checkError(result) && !StringType.check(result)) {
      throw new Error(
        `tried to fail with value other than Error or String: ${result}`
      );
    } else {
      if (StringType.check(result)) {
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
    return StringType.value(node.value);
  }

  visitIntLit(node: AST.IntLit) {
    return IntType.value(node.value);
  }

  visitDecLit(node: AST.DecLit) {
    return DecType.value(node.value);
  }

  visitBoolLit(node: AST.BoolLit) {
    if (node.value === 'true') {
      return True;
    } else {
      return False;
    }
  }

  visitNoneLit(node: AST.NoneLit) {
    return None;
  }
  //endregion <LITERALS>
}

//endregion <VISITOR>
