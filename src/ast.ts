import { ParserRuleContext } from 'antlr4ts';

export class AST {
  public $ctx: ParserRuleContext | null = null;

  constructor(public $parent: AST | null = null) {}

  static isNode(x: any): x is AST {
    return x instanceof AST;
  }

  public setParent(parent: AST | null): void {
    this.$parent = parent;
  }

  public $(ctx: ParserRuleContext): this {
    this.$ctx = ctx;
    this.setParentForChildren();
    return this;
  }

  /**
   * Returns true if this node is a "virtual" node, i.e. a node that does not
   * correspond to a node in the AST. This is because we go over the AST in
   * multiple passes of simplification and transformation. The final AST prior
   * to code generation passes will be the semantically richest representation of the
   * original source code.
   *
   * We only drop context after it is no longer needed for further passes,
   * i.e. after all of the validation passes have been run. The context is mainly
   * used to provide diagnostics and error messages -- The AST is traversible
   * without the context.
   *
   * @returns {boolean}
   */
  public isVirtual(): boolean {
    return this.$ctx === null;
  }

  public toJSON(): any {
    let res: any = {};
    for (const key of Object.keys(this)) {
      console.log(key);
      //@ts-ignore
      if (key === '$parent' || key === '$ctx') {
        continue;
      }

      // @ts-ignore
      if (AST.isNode(this[key])) {
        // @ts-ignore
        res[key] = this[key].toJSON();
        // @ts-ignore
      } else if (Array.isArray(this[key])) {
        // @ts-ignore
        res[key] = this[key].map((x) => x.toJSON());
      } else {
        // @ts-ignore
        res[key] = this[key];
      }
    }
    res['$type'] = this.constructor.name;
    return res;
  }

  protected setParentForChildren(): void {
    for (const key in this) {
      if (AST.isNode(this[key])) {
        // @ts-ignore
        this[key].setParent(this);
      }
    }
  }
}

export class List<T extends AST = AST> extends AST {
  constructor(public $children: T[]) {
    super();
  }

  static empty<T extends AST = AST>(): List<T> {
    return new List<T>([]);
  }

  // Use this to create a "virtual" list, i.e. a list that does not
  // correspond to a node in the AST.
  static virtual<T extends AST = AST>(children: T[]): List<T> {
    let list = new List<T>(children);
    list.setParentForChildren();
    return list;
  }

  public toJSON(): any {
    return {
      $type: this.constructor.name,
      $children: this.$children.map((x) => x.toJSON()),
    };
  }

  protected setParentForChildren(): void {
    this.$children.forEach((x) => x.setParent(this));
  }
}

export class Ident extends AST {
  constructor(public value: string) {
    super();
  }
}

export class SourceFile extends List {}

export class ContractDefn extends AST {
  constructor(
    public name: Ident,
    public body: ContractBlock,
    public base: TypePath | null = null,
    public interfaces: List<TypePath> = List.empty()
  ) {
    super();
  }
}

export class InterfaceDefn extends AST {
  constructor(
    public name: Ident,
    public body: ContractBlock,
    public base: TypePath | null = null
  ) {
    super();
  }
}

export class TypePath extends List<Ident> {}

export class TypeVariant extends AST {
  constructor(
    public name: TypePath,
    public expr: Expr | null = null,
    public variant: Ident | null = null
  ) {
    super();
  }
}

export class StructDefn extends AST {
  constructor(
    public name: Ident | null = null,
    public members: List<Param> = List.empty(),
    public isTuple = false
  ) {
    super();
  }
}

export class EnumVariantStruct extends AST {
  constructor(public name: Ident, public members: List<Param> = List.empty()) {
    super();
  }
}

export class EnumVariantUnit extends AST {
  constructor(public name: Ident) {
    super();
  }
}

// enumDefn: ENUM (name = ident) LBRACE variants+=variant_ ((variants+=variant_) COMMA?)* RBRACE;
export class EnumDefn extends AST {
  constructor(
    public name: Ident,
    public variants: List<EnumVariantStruct | EnumVariantUnit>
  ) {
    super();
  }
}

// typeAliasDefn: TYPE (name = ident) EQ (value = typeExpr);
export class TypeAliasDefn extends AST {
  constructor(public name: Ident, public value: TypeExpr) {
    super();
  }
}

// typeDefn: structDefn | enumDefn | typeAliasDefn;
export type TypeDefn = StructDefn | EnumDefn | TypeAliasDefn;

export class Param extends AST {
  constructor(
    public name: Ident,
    public ty: TypeExpr,
    public optional: boolean = false,
    public default_: Expr | null = null
  ) {
    super();
  }
}

export type ContractItem = any;

export class ContractBlock extends List<ContractItem> {}

export class ImportAllStmt extends AST {
  constructor(public src: string) {
    super();
  }
}

export class ImportItemsStmt extends AST {
  constructor(public items: Ident[], public src: string) {
    super();
  }
}

export class ErrorDefn extends StructDefn {}

export class ErrorDefnBlock extends List<ErrorDefn> {}

export class EventDefn extends StructDefn {}

export class EventDefnBlock extends List<EventDefn> {}

export class StateDefnBlock extends List<StateDefnItem | StateDefnMap> {}

export class StateDefnItem extends AST {
  constructor(
    public name: Ident,
    public ty: TypeExpr,
    public default_: Expr | null = null
  ) {
    super();
  }
}

export class StateDefnMap extends AST {
  constructor(
    public name: Ident,
    public mapKeys: List<MapKeyDefn>,
    public ty: TypeExpr,
    public default_: Expr | null = null
  ) {
    super();
  }
}

export class MapKeyDefn extends AST {
  constructor(public name: Ident | null, public ty: TypeExpr) {
    super();
  }
}

export class InstantiateDefn extends AST {
  constructor(public params: List<Param> = List.empty(), public body: Block) {
    super();
  }
}

export class InstantiateDecl extends AST {
  constructor(public params: List<Param>) {
    super();
  }
}

export class ExecDefn extends AST {
  constructor(
    public name: Ident,
    public params: List<Param> = List.empty(),
    public body: Block,
    public tup: boolean = false
  ) {
    super();
  }
}

export class ExecDecl extends AST {
  constructor(
    public name: Ident,
    public params: List<Param>,
    public tup: boolean = false
  ) {
    super();
  }
}

export class QueryDefn extends AST {
  constructor(
    public name: Ident,
    public params: List<Param> = List.empty(),
    public retTy: TypeExpr | null,
    public body: Block,
    public tup: boolean = false
  ) {
    super();
  }
}

export class QueryDecl extends AST {
  constructor(
    public name: Ident,
    public params: List<Param>,
    public retTy: TypeExpr | null = null,
    public tup: boolean = false
  ) {
    super();
  }
}

export class ReplyDefn extends AST {
  constructor(
    public name: Ident,
    public params: List<Param>,
    public body: Block,
    public on?: Ident
  ) {
    super();
  }
}

export class FnDefn extends AST {
  constructor(
    public name: Ident,
    public params: List<Param>,
    public retTy: TypeExpr | null,
    public body: Block,
    public fallible: boolean = false
  ) {
    super();
  }
}

export class LetStmt extends AST {
  constructor(public binding: LetBinding, public expr: Expr | null = null) {
    super();
  }
}

export enum BindingType {
  IDENT = 'ident',
  STRUCT = 'struct',
  TUPLE = 'tuple',
}

export class IdentBinding extends AST {
  constructor(public name: Ident, public ty: TypeExpr | null = null) {
    super();
  }
}

export class TupleBinding extends List<IdentBinding> {}
export class StructBinding extends List<IdentBinding> {}

export type LetBinding = IdentBinding | TupleBinding | StructBinding;
export class ConstStmt extends AST {
  constructor(public name: Ident, public expr: Expr) {
    super();
  }
}

export class Annotation extends AST {
  constructor(public path: TypePath, public args: List<Arg> = List.empty()) {
    super();
  }
}

export class Annotated extends List<Annotation> {
  constructor(public $children: Annotation[], public expr: Expr) {
    super($children);
  }
}

export enum AssignOp {
  EQ = '=',
  PLUS_EQ = '+=',
  MINUS_EQ = '-=',
  MUL_EQ = '*=',
  DIV_EQ = '/=',
  MOD_EQ = '%=',
}

export class AssignStmt extends AST {
  constructor(public lhs: AssignLHS, public op: AssignOp, public rhs: Expr) {
    super();
  }
}

export class IdentLHS extends AST {
  constructor(public symbol: Ident) {
    super();
  }
}

export class DotLHS extends AST {
  constructor(public obj: Expr, public member: Ident) {
    super();
  }
}

export class IndexLHS extends AST {
  constructor(public obj: Expr, public args: List<Expr>) {
    super();
  }
}

export type AssignLHS = IdentLHS | DotLHS | IndexLHS;

export class TupleExpr extends List<Expr> {}

export class StructExpr extends AST {
  constructor(public members: MemberVal[], public ty: TypeExpr | null = null) {
    super();
  }
}

export class MemberVal extends AST {
  constructor(public name: Ident, public value: Expr) {
    super();
  }
}

export class IfStmt extends AST {
  constructor(
    public pred: Expr,
    public then: Block,
    public else_: Block | null = null
  ) {
    super();
  }
}

export class ForStmt extends AST {
  constructor(
    public binding: LetBinding,
    public iter: Expr,
    public body: Block
  ) {
    super();
  }
}

export class GroupedExpr extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

export class DotExpr extends AST {
  constructor(public obj: Expr, public member: Ident) {
    super();
  }
}

export class AsExpr extends AST {
  constructor(public expr: Expr, public ty: TypeExpr) {
    super();
  }
}

export class IndexExpr extends AST {
  constructor(public obj: Expr, public args: List<Arg>) {
    super();
  }
}

export class DColonExpr extends AST {
  constructor(public obj: Expr | TypeExpr, public member: Ident) {
    super();
  }
}

export class FnCallExpr extends AST {
  constructor(
    public func: Expr | TypeExpr,
    public tries: boolean = false,
    public args: List<Arg>
  ) {
    super();
  }
}

export enum MathOp {
  PLUS = '+',
  MINUS = '-',
  MUL = '*',
  DIV = '/',
  MOD = '%',
}

export class MathExpr extends AST {
  constructor(public lhs: Expr, public op: MathOp, public rhs: Expr) {
    super();
  }
}

export enum CompOp {
  EQ = '==',
  NEQ = '!=',
  LT = '<',
  LTE = '<=',
  GT = '>',
  GTE = '>=',
}

export class CompExpr extends AST {
  constructor(public lhs: Expr, public op: CompOp, public rhs: Expr) {
    super();
  }
}

export class NoneCheckExpr extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

export class IsExpr extends AST {
  constructor(public expr: Expr, public ty: TypeExpr) {
    super();
  }
}

export class AndExpr extends AST {
  constructor(public lhs: Expr, public rhs: Expr) {
    super();
  }
}

export class OrExpr extends AST {
  constructor(public lhs: Expr, public rhs: Expr) {
    super();
  }
}

export class ShortTryExpr extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

export class TryCatchElseExpr extends AST {
  constructor(
    public body: Block,
    public catch_: CatchClause[] = [],
    public else_: Block | null = null
  ) {
    super();
  }
}

export class CatchClause extends AST {
  constructor(
    public name: Ident | null,
    public ty: TypeExpr,
    public body: Block
  ) {
    super();
  }
}

export class NotExpr extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

export class QueryExpr extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

export class QueryNowExpr extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

export class FailExpr extends AST {
  constructor(public expr: Expr | null = null) {
    super();
  }
}

export class UnitVariantExpr extends AST {
  constructor(public path: TypePath) {
    super();
  }
}

export class IdentExpr extends AST {
  constructor(public symbol: Ident) {
    super();
  }
}

export class Grouped2Expr extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

export type Expr =
  | GroupedExpr
  | Grouped2Expr
  | DotExpr
  | AsExpr
  | IndexExpr
  | DColonExpr
  | FnCallExpr
  | MathExpr
  | CompExpr
  | NoneCheckExpr
  | IsExpr
  | AndExpr
  | OrExpr
  | ShortTryExpr
  | TryCatchElseExpr
  | NotExpr
  | QueryExpr
  | QueryNowExpr
  | FailExpr
  | UnitVariantExpr
  | IdentExpr
  | TupleExpr
  | StructExpr
  | Literal
  | Closure;

export type TypeExpr =
  | PathT
  | VariantT
  | InstantiateT
  | ExecT
  | QueryT
  | MutT
  | OptionT
  | ListT
  | TupleT
  | TypeDefn;

export type PathT = TypePath;
export type VariantT = TypeVariant;

export class InstantiateT extends AST {
  constructor(public path: TypeExpr) {
    super();
  }
}

export class ExecT extends AST {
  constructor(public variant: VariantT) {
    super();
  }
}

export class QueryT extends AST {
  constructor(public variant: VariantT) {
    super();
  }
}

export class MutT extends AST {
  constructor(public ty: TypeExpr) {
    super();
  }
}

export class OptionT extends AST {
  constructor(public ty: TypeExpr) {
    super();
  }
}

export class ListT extends AST {
  constructor(public ty: TypeExpr, public size: IntLit | null = null) {
    super();
  }
}

export class TupleT extends AST {
  constructor(public tys: TypeExpr[]) {
    super();
  }
}

export class Arg extends AST {
  constructor(public name: Ident | null, public expr: Expr) {
    super();
  }
}

export class Closure extends AST {
  constructor(
    public params: List<Param>,
    public retTy: TypeExpr | null = null,
    public body: Block
  ) {
    super();
  }
}

export class Literal extends AST {
  constructor(public value: string) {
    super();
  }
}

export class StringLit extends Literal {}

export class IntLit extends Literal {}

export class DecLit extends Literal {}

export class BoolLit extends Literal {}

export class NoneLit extends Literal {}

export type Stmt =
  | LetStmt
  | ConstStmt
  | AssignStmt
  | IfStmt
  | ForStmt
  | ExecStmt
  | DelegateExecStmt
  | InstantiateStmt
  | EmitStmt
  | ReturnStmt
  | FailStmt
  | Expr;

export class ExecStmt extends AST {
  constructor(public expr: Expr, public options: MemberVal[] = []) {
    super();
  }
}

export class DelegateExecStmt extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

export class InstantiateStmt extends AST {
  constructor(
    public expr: Expr,
    public new_: boolean = false,
    public options: List<MemberVal> = List.empty()
  ) {
    super();
  }
}

export class EmitStmt extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

export class ReturnStmt extends AST {
  constructor(public expr: Expr | null = null) {
    super();
  }
}

export class FailStmt extends AST {
  constructor(public expr: Expr | null = null) {
    super();
  }
}

export class Block extends List<Stmt> {}

// Statement
