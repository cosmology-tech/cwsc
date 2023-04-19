import { ParserRuleContext } from 'antlr4ts';
export declare class AST {
    $parent: AST | null;
    $ctx: ParserRuleContext | null;
    constructor($parent?: AST | null);
    static isNode(x: any): x is AST;
    setParent(parent: AST | null): void;
    $(ctx: ParserRuleContext): this;
    get children(): AST[];
    walkAncestors(includeSelf?: boolean): IterableIterator<AST>;
    get ancestors(): AST[];
    nearestAncestorWhere(predicate: (x: AST) => boolean): AST | null;
    nearestAncestorOfType<X extends AST>(astType: new (...args: any) => X): X | null;
    walkDescendantsBFS(): IterableIterator<AST>;
    walkDescendants(): IterableIterator<AST>;
    walkDescendantsLF(): IterableIterator<AST>;
    get descendants(): AST[];
    descendantsOfType<X extends AST>(astType: new (...args: any) => X): X[];
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
    isVirtual(): boolean;
    toJSON(): any;
    protected setParentForChildren(): void;
}
export declare class List<T extends AST = AST> extends AST {
    $children: T[];
    constructor($children: T[]);
    static empty<T extends AST = AST>(): List<T>;
    static virtual<T extends AST = AST>(children: T[]): List<T>;
    get children(): T[];
    toJSON(): any;
    protected setParentForChildren(): void;
    map<U>(f: (x: T, i: number, o: T[]) => U): U[];
    filter(f: (x: T, i: number, o: T[]) => boolean): T[];
    find(f: (x: T, i: number, o: T[]) => boolean): T | undefined;
    toArray(): T[];
    at(index: number): T | undefined;
    forEach(f: (x: T, i: number, o: T[]) => void): void;
    get length(): number;
}
export declare class Ident extends AST {
    value: string;
    constructor(value: string);
}
export declare type TopLevelStmt = ContractDefn | InterfaceDefn | TypeDefn | ConstStmt;
export declare class SourceFile extends List<TopLevelStmt> {
}
export declare class ContractDefn extends AST {
    name: Ident;
    body: ContractBlock;
    base: TypePath | null;
    interfaces: List<TypePath>;
    constructor(name: Ident, body: ContractBlock, base: TypePath | null, interfaces: List<TypePath>);
}
export declare class InterfaceDefn extends AST {
    name: Ident;
    body: ContractBlock;
    base: TypePath | null;
    constructor(name: Ident, body: ContractBlock, base: TypePath | null);
}
export declare class TypePath extends AST {
    segments: List<Ident>;
    constructor(segments: List<Ident>);
}
export declare class TypeVariant extends AST {
    name: TypePath;
    expr: Expr | null;
    variant: Ident | null;
    constructor(name: TypePath, expr: Expr | null, variant: Ident | null);
}
export declare class StructDefn extends AST {
    name: Ident | null;
    params: List<Param>;
    constructor(name: Ident | null, params: List<Param>);
}
export declare class EnumVariantStruct extends AST {
    name: Ident;
    params: List<Param>;
    constructor(name: Ident, params: List<Param>);
}
export declare class EnumVariantUnit extends AST {
    name: Ident;
    constructor(name: Ident);
}
export declare class EnumDefn extends AST {
    name: Ident;
    variants: List<EnumVariantStruct | EnumVariantUnit>;
    constructor(name: Ident, variants: List<EnumVariantStruct | EnumVariantUnit>);
}
export declare class TypeAliasDefn extends AST {
    name: Ident;
    value: TypeExpr;
    constructor(name: Ident, value: TypeExpr);
}
export declare type TypeDefn = StructDefn | EnumDefn | TypeAliasDefn;
export declare class Param extends AST {
    name: Ident;
    ty: TypeExpr | null;
    optional: boolean;
    default_: Expr | null;
    constructor(name: Ident, ty: TypeExpr | null, optional: boolean, default_: Expr | null);
}
export declare type ContractItem = any;
export declare class ContractBlock extends List<ContractItem> {
}
export declare class ImportAllStmt extends AST {
    src: string;
    constructor(src: string);
}
export declare class ImportItemsStmt extends AST {
    items: Ident[];
    src: string;
    constructor(items: Ident[], src: string);
}
export declare class ErrorDefn extends StructDefn {
}
export declare class ErrorDefnBlock extends List<ErrorDefn> {
}
export declare class EventDefn extends StructDefn {
}
export declare class EventDefnBlock extends List<EventDefn> {
}
export declare class StateDefnBlock extends List<StateDefnItem | StateDefnMap> {
}
export declare class StateDefnItem extends AST {
    name: Ident;
    ty: TypeExpr;
    default_: Expr | null;
    constructor(name: Ident, ty: TypeExpr, default_: Expr | null);
}
export declare class StateDefnMap extends AST {
    name: Ident;
    mapKeys: List<MapKeyDefn>;
    ty: TypeExpr;
    default_: Expr | null;
    constructor(name: Ident, mapKeys: List<MapKeyDefn>, ty: TypeExpr, default_: Expr | null);
}
export declare class MapKeyDefn extends AST {
    name: Ident | null;
    ty: TypeExpr;
    constructor(name: Ident | null, ty: TypeExpr);
}
export declare class InstantiateDefn extends AST {
    params: List<Param>;
    body: Block;
    constructor(params: List<Param>, body: Block);
}
export declare class InstantiateDecl extends AST {
    params: List<Param>;
    constructor(params: List<Param>);
}
export declare class ExecDefn extends AST {
    name: Ident;
    params: List<Param>;
    body: Block;
    tup: boolean;
    constructor(name: Ident, params: List<Param>, body: Block, tup: boolean);
}
export declare class ExecDecl extends AST {
    name: Ident;
    params: List<Param>;
    tup: boolean;
    constructor(name: Ident, params: List<Param>, tup: boolean);
}
export declare class QueryDefn extends AST {
    name: Ident;
    params: List<Param>;
    retTy: TypeExpr | null;
    body: Block;
    constructor(name: Ident, params: List<Param>, retTy: TypeExpr | null, body: Block);
}
export declare class QueryDecl extends AST {
    name: Ident;
    params: List<Param>;
    retTy: TypeExpr | null;
    constructor(name: Ident, params: List<Param>, retTy: TypeExpr | null);
}
export declare class ReplyDefn extends AST {
    name: Ident;
    params: List<Param>;
    body: Block;
    on?: Ident | undefined;
    constructor(name: Ident, params: List<Param>, body: Block, on?: Ident | undefined);
}
export declare class FnDefn extends AST {
    name: Ident;
    fallible: boolean;
    params: List<Param>;
    retTy: TypeExpr | null;
    body: Block;
    constructor(name: Ident, fallible: boolean, params: List<Param>, retTy: TypeExpr | null, body: Block);
}
export declare class LetStmt extends AST {
    binding: LetBinding;
    expr: Expr | null;
    constructor(binding: LetBinding, expr: Expr | null);
}
export declare enum BindingType {
    IDENT = "ident",
    STRUCT = "struct",
    TUPLE = "tuple"
}
export declare class IdentBinding extends AST {
    name: Ident;
    ty: TypeExpr | null;
    constructor(name: Ident, ty: TypeExpr | null);
}
export declare class TupleBinding extends AST {
    bindings: List<IdentBinding>;
    constructor(bindings: List<IdentBinding>);
}
export declare class StructBinding extends AST {
    bindings: List<IdentBinding>;
    constructor(bindings: List<IdentBinding>);
}
export declare type LetBinding = IdentBinding | TupleBinding | StructBinding;
export declare class ConstStmt extends AST {
    name: Ident;
    expr: Expr;
    constructor(name: Ident, expr: Expr);
}
export declare class Annotation extends AST {
    path: TypePath;
    args: List<Arg>;
    constructor(path: TypePath, args: List<Arg>);
}
export declare enum AssignOp {
    EQ = "=",
    PLUS_EQ = "+=",
    MINUS_EQ = "-=",
    MUL_EQ = "*=",
    DIV_EQ = "/=",
    MOD_EQ = "%="
}
export declare class AssignStmt extends AST {
    lhs: AssignLHS;
    op: AssignOp;
    rhs: Expr;
    constructor(lhs: AssignLHS, op: AssignOp, rhs: Expr);
}
export declare class IdentLHS extends AST {
    symbol: Ident;
    constructor(symbol: Ident);
}
export declare class DotLHS extends AST {
    obj: Expr;
    member: Ident;
    constructor(obj: Expr, member: Ident);
}
export declare class IndexLHS extends AST {
    obj: Expr;
    args: List<Expr>;
    constructor(obj: Expr, args: List<Expr>);
}
export declare type AssignLHS = IdentLHS | DotLHS | IndexLHS;
export declare class TupleExpr extends AST {
    exprs: List<Expr>;
    constructor(exprs: List<Expr>);
}
export declare class StructExpr extends AST {
    ty: TypeExpr | null;
    args: List<MemberVal>;
    constructor(ty: TypeExpr | null, args: List<MemberVal>);
}
export declare class MemberVal extends AST {
    name: Ident;
    value: Expr;
    constructor(name: Ident, value: Expr);
}
export declare class IfStmt extends AST {
    pred: Expr;
    then: Block;
    else_: Block | null;
    constructor(pred: Expr, then: Block, else_: Block | null);
}
export declare class ForStmt extends AST {
    binding: LetBinding;
    iter: Expr;
    body: Block;
    constructor(binding: LetBinding, iter: Expr, body: Block);
}
export declare class GroupedExpr extends AST {
    expr: Expr;
    constructor(expr: Expr);
}
export declare enum UnwrapOp {
    OR_FAIL = "!",
    OR_NONE = "?"
}
export declare class DotExpr extends AST {
    obj: Expr;
    unwrap: UnwrapOp | null;
    member: Ident;
    constructor(obj: Expr, unwrap: UnwrapOp | null, member: Ident);
}
export declare class AsExpr extends AST {
    expr: Expr;
    ty: TypeExpr;
    constructor(expr: Expr, ty: TypeExpr);
}
export declare class IndexExpr extends AST {
    obj: Expr;
    args: List<Arg>;
    constructor(obj: Expr, args: List<Arg>);
}
export declare class DColonExpr extends AST {
    obj: Expr | TypeExpr;
    member: Ident;
    constructor(obj: Expr | TypeExpr, member: Ident);
}
export declare class FnCallExpr extends AST {
    func: Expr | TypeExpr;
    fallible: boolean;
    args: List<Arg>;
    constructor(func: Expr | TypeExpr, fallible: boolean, args: List<Arg>);
}
export declare enum Op {
    EQ = "==",
    NEQ = "!=",
    LT = "<",
    LTE = "<=",
    GT = ">",
    GTE = ">=",
    PLUS = "+",
    MINUS = "-",
    MUL = "*",
    DIV = "/",
    MOD = "%",
    IN = "in",
    IS = "is",
    AND = "and",
    OR = "or"
}
export declare class BinOpExpr extends AST {
    lhs: Expr;
    op: Op;
    rhs: Expr;
    constructor(lhs: Expr, op: Op, rhs: Expr);
}
export declare class IsExpr extends AST {
    negative: boolean;
    lhs: Expr;
    rhs: TypeExpr;
    constructor(negative: boolean, lhs: Expr, rhs: TypeExpr);
}
export declare class NoneCheckExpr extends AST {
    expr: Expr;
    constructor(expr: Expr);
}
export declare class ShortTryExpr extends AST {
    expr: Expr;
    constructor(expr: Expr);
}
export declare class TryCatchElseExpr extends AST {
    body: Block;
    catch_: List<CatchClause>;
    else_: Block | null;
    constructor(body: Block, catch_: List<CatchClause>, else_: Block | null);
}
export declare class CatchClause extends AST {
    name: Ident | null;
    ty: TypeExpr;
    body: Block;
    constructor(name: Ident | null, ty: TypeExpr, body: Block);
}
export declare class NotExpr extends AST {
    expr: Expr;
    constructor(expr: Expr);
}
export declare class QueryExpr extends AST {
    expr: Expr;
    constructor(expr: Expr);
}
export declare class QueryNowExpr extends AST {
    expr: Expr;
    constructor(expr: Expr);
}
export declare class FailExpr extends AST {
    expr: Expr;
    constructor(expr: Expr);
}
export declare class UnitVariantExpr extends AST {
    ty: TypeVariant;
    constructor(ty: TypeVariant);
}
export declare class IdentExpr extends AST {
    symbol: Ident;
    constructor(symbol: Ident);
}
export declare class Grouped2Expr extends AST {
    expr: Expr;
    constructor(expr: Expr);
}
export declare type Expr = GroupedExpr | Grouped2Expr | DotExpr | AsExpr | IndexExpr | DColonExpr | FnCallExpr | NoneCheckExpr | ShortTryExpr | TryCatchElseExpr | NotExpr | QueryExpr | QueryNowExpr | FailExpr | UnitVariantExpr | IdentExpr | TupleExpr | StructExpr | Literal | Closure;
export declare type TypeExpr = TypePath | TypeVariant | TypeLens | OptionT | ListT | TupleT | TypeDefn;
export declare enum Scope {
    INSTANTIATE = "instantiate",
    EXEC = "exec",
    QUERY = "query",
    MUT = "mut"
}
export declare class TypeLens extends AST {
    scope: Scope;
    ty: TypePath;
    constructor(scope: Scope, ty: TypePath);
}
export declare class OptionT extends AST {
    ty: TypeExpr;
    constructor(ty: TypeExpr);
}
export declare class ListT extends AST {
    ty: TypeExpr;
    size: number | null;
    constructor(ty: TypeExpr, size: number | null);
}
export declare class TupleT extends AST {
    tys: List<TypeExpr>;
    constructor(tys: List<TypeExpr>);
}
export declare class Arg extends AST {
    name: Ident | null;
    expr: Expr;
    constructor(name: Ident | null, expr: Expr);
}
export declare class Closure extends AST {
    fallible: boolean;
    params: List<Param>;
    retTy: TypeExpr | null;
    body: Block;
    constructor(fallible: boolean, params: List<Param>, retTy: TypeExpr | null, body: Block);
}
export declare class Literal extends AST {
    value: string;
    constructor(value: string);
}
export declare class StringLit extends Literal {
}
export declare class IntLit extends Literal {
}
export declare class DecLit extends Literal {
}
export declare class BoolLit extends Literal {
}
export declare class NoneLit extends Literal {
    constructor();
}
export declare type Stmt = LetStmt | ConstStmt | AssignStmt | IfStmt | ForStmt | ExecStmt | DelegateExecStmt | InstantiateStmt | EmitStmt | ReturnStmt | FailStmt | Expr;
export declare class ExecStmt extends AST {
    expr: Expr;
    options: List<MemberVal> | null;
    constructor(expr: Expr, options: List<MemberVal> | null);
}
export declare class DelegateExecStmt extends AST {
    expr: Expr;
    constructor(expr: Expr);
}
export declare class InstantiateStmt extends AST {
    expr: Expr;
    new_: boolean;
    options: List<MemberVal> | null;
    constructor(expr: Expr, new_: boolean, options: List<MemberVal> | null);
}
export declare class EmitStmt extends AST {
    expr: Expr;
    constructor(expr: Expr);
}
export declare class ReturnStmt extends AST {
    expr: Expr;
    constructor(expr: Expr);
}
export declare class FailStmt extends AST {
    expr: Expr;
    constructor(expr: Expr);
}
export declare class Block extends List<Stmt> {
}
export declare class CWScriptASTVisitor {
    visit<T = any>(node: AST): T;
}
