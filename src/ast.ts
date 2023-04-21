import { ParserRuleContext } from 'antlr4ts';
import { getPosition } from '@/util/position';

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

  public get children(): AST[] {
    let { $parent, $ctx, ...rest } = this;
    return Object.values(rest)
      .filter((x) => x instanceof AST)
      .map((x) => x as AST);
  }

  public *walkAncestors(includeSelf: boolean = false): IterableIterator<AST> {
    let parent = this.$parent;
    while (parent !== null) {
      yield parent;
      parent = parent.$parent;
    }
  }

  public get ancestors(): AST[] {
    return Array.from(this.walkAncestors());
  }

  public get ancestorsAndSelf(): AST[] {
    return Array.from(this.walkAncestors(true));
  }

  public nearestAncestorWhere(predicate: (x: AST) => boolean): AST | undefined {
    for (const ancestor of this.walkAncestors()) {
      if (predicate(ancestor)) {
        return ancestor;
      }
    }
    return undefined;
  }

  public nearestAncestorOfType<X extends AST>(
    astType: new (...args: any) => X
  ): X | undefined {
    return this.nearestAncestorWhere(
      (x) => x.constructor.name === astType.name
    ) as X | undefined;
  }

  /// Breadth-first traversal of descendant nodes.
  public *walkDescendantsBFS(): IterableIterator<AST> {
    yield* this.children;
    for (const child of this.children) {
      yield* child.walkDescendantsBFS();
    }
  }

  /// Depth-first traversal of descendant nodes.
  public *walkDescendants(): IterableIterator<AST> {
    for (const child of this.children) {
      yield child;
      yield* child.walkDescendants();
    }
  }

  // Leaves-first traversal of descendant nodes.
  public *walkDescendantsLF(): IterableIterator<AST> {
    for (const child of this.children) {
      yield* child.walkDescendantsLF();
    }
    yield* this.children;
  }

  public get descendants(): AST[] {
    return Array.from(this.walkDescendants());
  }

  public descendantsOfType<X extends AST>(
    astType: new (...args: any) => X
  ): X[] {
    return this.descendants
      .filter((x) => x.constructor.name === astType.name)
      .map((x) => x as X);
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
    let res: any = { $children: [] };
    for (const key of Object.keys(this)) {
      //@ts-ignore
      if (key === '$parent' || key === '$ctx') {
        continue;
      }

      // @ts-ignore
      if (AST.isNode(this[key])) {
        // @ts-ignore
        res.$children.push({ key, value: this[key].toJSON() });
        // @ts-ignore
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

  public get children(): T[] {
    return this.$children;
  }

  public toJSON(): any {
    return {
      $type: this.constructor.name,
      $children: this.$children.map((x, key) => ({ key, value: x.toJSON() })),
    };
  }

  protected setParentForChildren(): void {
    this.$children.forEach((x) => x.setParent(this));
  }

  public map<U>(f: (x: T, i: number, o: T[]) => U): U[] {
    return this.$children.map(f);
  }

  public filter(f: (x: T, i: number, o: T[]) => boolean): T[] {
    return this.$children.filter(f);
  }

  public find(f: (x: T, i: number, o: T[]) => boolean): T | undefined {
    return this.$children.find(f);
  }

  public toArray(): T[] {
    return this.$children;
  }

  public at(index: number): T | undefined {
    return this.$children[index];
  }

  public forEach(f: (x: T, i: number, o: T[]) => void): void {
    this.$children.forEach(f);
  }

  public get length(): number {
    return this.$children.length;
  }
}

export class Ident extends AST {
  constructor(public value: string) {
    super();
  }
}

export type TopLevelStmt = ContractDefn | InterfaceDefn | TypeDefn | ConstStmt;

export class SourceFile extends List<TopLevelStmt> {}

export class ContractDefn extends AST {
  constructor(
    public name: Ident,
    public body: ContractBlock,
    public base: TypePath | null,
    public interfaces: List<TypePath>
  ) {
    super();
  }
}

export class InterfaceDefn extends AST {
  constructor(
    public name: Ident,
    public body: ContractBlock,
    public base: TypePath | null
  ) {
    super();
  }
}

export class TypePath extends AST {
  constructor(public segments: List<Ident>) {
    super();
  }
}

export class TypeVariant extends AST {
  constructor(
    public name: TypePath,
    public expr: Expr | null,
    public variant: Ident | null
  ) {
    super();
  }
}

export class StructDefn extends AST {
  constructor(public name: Ident | null, public params: List<Param>) {
    super();
  }
}

export class EnumVariantStruct extends AST {
  constructor(public name: Ident, public params: List<Param>) {
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
    public ty: TypeExpr | null,
    public optional: boolean,
    public default_: Expr | null
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
    public default_: Expr | null
  ) {
    super();
  }
}

export class StateDefnMap extends AST {
  constructor(
    public name: Ident,
    public mapKeys: List<MapKeyDefn>,
    public ty: TypeExpr,
    public default_: Expr | null
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
  constructor(public params: List<Param>, public body: Block) {
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
    public params: List<Param>,
    public body: Block,
    public tup: boolean
  ) {
    super();
  }
}

export class ExecDecl extends AST {
  constructor(
    public name: Ident,
    public params: List<Param>,
    public tup: boolean
  ) {
    super();
  }
}

export class QueryDefn extends AST {
  constructor(
    public name: Ident,
    public params: List<Param>,
    public retTy: TypeExpr | null,
    public body: Block
  ) {
    super();
  }
}

export class QueryDecl extends AST {
  constructor(
    public name: Ident,
    public params: List<Param>,
    public retTy: TypeExpr | null
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
    public fallible: boolean,
    public params: List<Param>,
    public retTy: TypeExpr | null,
    public body: Block
  ) {
    super();
  }
}

export class LetStmt extends AST {
  constructor(public binding: LetBinding, public expr: Expr | null) {
    super();
  }
}

export enum BindingType {
  IDENT = 'ident',
  STRUCT = 'struct',
  TUPLE = 'tuple',
}

export class IdentBinding extends AST {
  constructor(public name: Ident, public ty: TypeExpr | null) {
    super();
  }
}

export class TupleBinding extends AST {
  constructor(public bindings: List<IdentBinding>) {
    super();
  }
}

export class StructBinding extends AST {
  constructor(public bindings: List<IdentBinding>) {
    super();
  }
}

export type LetBinding = IdentBinding | TupleBinding | StructBinding;

export class ConstStmt extends AST {
  constructor(public name: Ident, public expr: Expr) {
    super();
  }
}

export class Annotation extends AST {
  constructor(public path: TypePath, public args: List<Arg>) {
    super();
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

export class TupleExpr extends AST {
  constructor(public exprs: List<Expr>) {
    super();
  }
}

export class StructExpr extends AST {
  constructor(public ty: TypeExpr | null, public args: List<MemberVal>) {
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
    public else_: Block | null
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

export enum UnwrapOp {
  OR_FAIL = '!',
  OR_NONE = '?',
}

export class DotExpr extends AST {
  constructor(
    public obj: Expr,
    public unwrap: UnwrapOp | null,
    public member: Ident
  ) {
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
    public fallible: boolean,
    public args: List<Arg>
  ) {
    super();
  }
}

export enum Op {
  EQ = '==',
  NEQ = '!=',
  LT = '<',
  LTE = '<=',
  GT = '>',
  GTE = '>=',
  PLUS = '+',
  MINUS = '-',
  MUL = '*',
  DIV = '/',
  MOD = '%',
}

export class BinOpExpr extends AST {
  constructor(public lhs: Expr, public op: Op, public rhs: Expr) {
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

export class IsExpr extends AST {
  constructor(
    public negative: boolean,
    public lhs: Expr,
    public rhs: TypeExpr
  ) {
    super();
  }
}

export class InExpr extends AST {
  constructor(public lhs: Expr, public rhs: Expr) {
    super();
  }
}

export class NoneCheckExpr extends AST {
  constructor(public expr: Expr) {
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
    public catch_: List<CatchClause>,
    public else_: Block | null
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
  constructor(public expr: Expr) {
    super();
  }
}

export class UnitVariantExpr extends AST {
  constructor(public ty: TypeVariant) {
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
  | NoneCheckExpr
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
  | TypePath
  | TypeVariant
  | TypeLens
  | OptionT
  | ListT
  | TupleT
  | TypeDefn;

export enum Scope {
  INSTANTIATE = 'instantiate',
  EXEC = 'exec',
  QUERY = 'query',
  MUT = 'mut',
}

export class TypeLens extends AST {
  constructor(public scope: Scope, public ty: TypePath) {
    super();
  }
}

export class OptionT extends AST {
  constructor(public ty: TypeExpr) {
    super();
  }
}

export class ListT extends AST {
  constructor(public ty: TypeExpr, public len: number | null) {
    super();
  }
}

export class TupleT extends AST {
  constructor(public tys: List<TypeExpr>) {
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
    public fallible: boolean,
    public params: List<Param>,
    public retTy: TypeExpr | null,
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

export class NoneLit extends Literal {
  constructor() {
    super('none');
  }
}

export type Stmt =
  | DebugStmt
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

export class DebugStmt extends AST {
  constructor(public stmts: Stmt[]) {
    super();
  }
}

export class ExecStmt extends AST {
  constructor(public expr: Expr, public options: List<MemberVal> | null) {
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
    public new_: boolean,
    public options: List<MemberVal> | null
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
  constructor(public expr: Expr) {
    super();
  }
}

export class FailStmt extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

export class Block extends List<Stmt> {}

export class VisitorError extends Error {
  constructor(message: string, public data: any) {
    super(message + '\n\n' + JSON.stringify(data, null, 2));
  }
}

export class CWScriptASTVisitor {
  visit<T = any>(node: AST): T {
    // @ts-ignore
    let visitFn = this[`visit${node.constructor.name}`];
    if (visitFn) {
      return visitFn.call(this, node) as T;
    } else {
      throw new Error(
        `Method 'visit${node.constructor.name}()' not implemented.`
      );
    }
  }
}
