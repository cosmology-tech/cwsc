export class AST {
  constructor(public $parent: AST | null = null) {}

  protected setParentForChildren(): void {
    for (const key in this) {
      if (AST.isNode(this[key])) {
        // @ts-ignore
        this[key].setParent(this);
      }
    }
  }

  public setParent(parent: AST | null): void {
    this.$parent = parent;
  }

  public $(): this {
    this.setParentForChildren();
    return this;
  }

  static isNode(x: any): x is AST {
    return x instanceof AST;
  }

	public toJSON(): any {
		let res: any = {};
		for (const key of Object.keys(this)) {
			console.log(key);
			//@ts-ignore
			if (key === '$parent') {
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
}

export class List<T extends AST = AST> extends AST {
  constructor(public $children: T[]) {
    super();
  }

  protected setParentForChildren(): void {
    this.$children.forEach((x) => x.setParent(this));
  }

	static empty<T extends AST = AST>(): List<T> {
		return new List<T>([]);
	}

	public toJSON(): any {
		return {
			$type: this.constructor.name,
			$children: this.$children.map((x) => x.toJSON())
		}
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
    public members: Param[] = [],
    public isTuple = false
  ) {
    super();
  }
}

export class EnumVariantStruct extends AST {
  constructor(public name: Ident, public members: Param[] = []) {
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
    public variants: (EnumVariantStruct | EnumVariantUnit)[]
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

export class ErrorDefn extends AST {
  constructor(public defn: StructDefn) {
    super();
  }
}

export class ErrorDefnBlock extends List<StructDefn> {}
export class EventDefn extends AST {
  constructor(public defn: StructDefn) {
    super();
  }
}
export class EventDefnBlock extends List<StructDefn> {}

export class StateDefnBlock extends List<StateItemDefn | StateMapDefn> {}

export class StateItemDefn extends AST {
  constructor(
    public name: Ident,
    public ty: TypeExpr,
    public default_: Expr | null = null
  ) {
    super();
  }
}

export class StateMapDefn extends AST {
  constructor(
    public name: Ident,
    public mapKeys: MapKeyDefn[],
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
  constructor(public params: List<Param> = List.empty(), public body: ContractBlock) {
    super();
  }
}

export class InstantiateDecl extends AST {
  constructor(public params: Param[]) {
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
    public params: Param[],
    public retTy: TypeExpr | null = null,
    public tup: boolean = false
  ) {
    super();
  }
}

export class ReplyDefn extends AST {
  constructor(
    public name: Ident,
    public params: Param[],
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

export class LetBinding extends AST {
  constructor(
    public symbols: List<Ident>,
    public isStruct: boolean = false,
    public ty: TypeExpr | null = null
  ) {
    super();
  }
}

export class ConstStmt extends AST {
  constructor(public name: Ident, public expr: Expr) {
    super();
  }
}

export class Annotation extends AST {
  constructor(public path: TypePath, public args: Arg[] = []) {
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
  constructor(public obj: Expr, public args: Expr[]) {
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
  constructor(public obj: Expr, public args: Expr[]) {
    super();
  }
}

export class DColonExpr extends AST {
  constructor(public obj: Expr | TypeExpr, public member: Ident) {
    super();
  }
}

export class FnCallExpr extends AST {
  constructor(public func: Expr | TypeExpr, public args: Arg[]) {
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

export class GroupExpr extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

export type Expr =
  | GroupedExpr
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
  | GroupExpr
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
    public params: Param[],
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
  constructor(public expr: Expr, public options: MemberVal[] = []) {
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
