"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForStmt = exports.IfStmt = exports.MemberVal = exports.StructExpr = exports.TupleExpr = exports.IndexLHS = exports.DotLHS = exports.IdentLHS = exports.AssignStmt = exports.AssignOp = exports.Annotation = exports.ConstStmt = exports.StructBinding = exports.TupleBinding = exports.IdentBinding = exports.BindingType = exports.LetStmt = exports.FnDefn = exports.ReplyDefn = exports.QueryDecl = exports.QueryDefn = exports.ExecDecl = exports.ExecDefn = exports.InstantiateDecl = exports.InstantiateDefn = exports.MapKeyDefn = exports.StateDefnMap = exports.StateDefnItem = exports.StateDefnBlock = exports.EventDefnBlock = exports.EventDefn = exports.ErrorDefnBlock = exports.ErrorDefn = exports.ImportItemsStmt = exports.ImportAllStmt = exports.ContractBlock = exports.Param = exports.TypeAliasDefn = exports.EnumDefn = exports.EnumVariantUnit = exports.EnumVariantStruct = exports.StructDefn = exports.TypeVariant = exports.TypePath = exports.InterfaceDefn = exports.ContractDefn = exports.SourceFile = exports.Ident = exports.List = exports.AST = void 0;
exports.CWSASTVisitor = exports.VisitorError = exports.Block = exports.FailStmt = exports.ReturnStmt = exports.EmitStmt = exports.InstantiateStmt = exports.DelegateExecStmt = exports.ExecStmt = exports.DebugStmt = exports.NoneLit = exports.BoolLit = exports.DecLit = exports.IntLit = exports.StringLit = exports.Literal = exports.Closure = exports.Arg = exports.TupleT = exports.ListT = exports.OptionT = exports.TypeLens = exports.Scope = exports.Grouped2Expr = exports.IdentExpr = exports.UnitVariantExpr = exports.FailExpr = exports.QueryNowExpr = exports.QueryExpr = exports.NotExpr = exports.CatchClause = exports.TryCatchElseExpr = exports.ShortTryExpr = exports.NoneCheckExpr = exports.InExpr = exports.IsExpr = exports.OrExpr = exports.AndExpr = exports.BinOpExpr = exports.Op = exports.FnCallExpr = exports.DColonExpr = exports.IndexExpr = exports.AsExpr = exports.DotExpr = exports.UnwrapOp = exports.GroupedExpr = void 0;
class AST {
    constructor($parent = null) {
        this.$parent = $parent;
        this.$ctx = null;
    }
    static isNode(x) {
        return x instanceof AST;
    }
    setParent(parent) {
        this.$parent = parent;
    }
    $(ctx) {
        this.$ctx = ctx;
        this.setParentForChildren();
        return this;
    }
    get children() {
        return Object.entries(this)
            .filter(([key, value]) => AST.isNode(value) && key !== '$parent' && key !== '$ctx')
            .map(([_, value]) => value);
    }
    get ancestors() {
        const result = [];
        for (const ancestor of this.walkAncestors()) {
            result.push(ancestor);
        }
        return result;
    }
    get ancestorsAndSelf() {
        const result = [];
        for (const ancestor of this.walkAncestors(true)) {
            result.push(ancestor);
        }
        return result;
    }
    *walkAncestors(includeSelf = false) {
        let parent = this.$parent;
        while (parent !== null) {
            yield parent;
            parent = parent.$parent;
        }
    }
    get nearestNodeCtx() {
        for (const ancestor of this.ancestorsAndSelf) {
            if (ancestor.$ctx !== null) {
                return ancestor.$ctx;
            }
        }
        // not possible
        throw new Error('No ancestor has a context');
    }
    nearestAncestorWhere(predicate) {
        for (const ancestor of this.walkAncestors()) {
            if (predicate(ancestor)) {
                return ancestor;
            }
        }
        return undefined;
    }
    nearestAncestorOfType(astType) {
        return this.nearestAncestorWhere((x) => x.constructor.name === astType.name);
    }
    /// Breadth-first traversal of descendant nodes.
    *walkDescendantsBFS() {
        yield* this.children;
        for (const child of this.children) {
            yield* child.walkDescendantsBFS();
        }
    }
    /// Depth-first traversal of descendant nodes.
    *walkDescendants() {
        for (const child of this.children) {
            yield child;
            yield* child.walkDescendants();
        }
    }
    // Leaves-first traversal of descendant nodes.
    *walkDescendantsLF() {
        for (const child of this.children) {
            yield* child.walkDescendantsLF();
        }
        yield* this.children;
    }
    get descendants() {
        return Array.from(this.walkDescendants());
    }
    descendantsOfType(astType) {
        return this.descendants
            .filter((x) => x.constructor.name === astType.name)
            .map((x) => x);
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
    isVirtual() {
        return this.$ctx === null;
    }
    toJSON() {
        let res = { $children: [] };
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
            }
            else {
                // @ts-ignore
                res[key] = this[key];
            }
        }
        res['$type'] = this.constructor.name;
        return res;
    }
    setParentForChildren() {
        for (const key in this) {
            if (AST.isNode(this[key])) {
                // @ts-ignore
                this[key].setParent(this);
            }
        }
    }
}
exports.AST = AST;
class List extends AST {
    constructor($children) {
        super();
        this.$children = $children;
    }
    static empty() {
        return new List([]);
    }
    // Use this to create a "virtual" list, i.e. a list that does not
    // correspond to a node in the AST.
    static virtual(children) {
        let list = new List(children);
        list.setParentForChildren();
        return list;
    }
    get children() {
        return this.$children;
    }
    toJSON() {
        return {
            $type: this.constructor.name,
            $children: this.$children.map((x, key) => ({ key, value: x.toJSON() })),
        };
    }
    setParentForChildren() {
        this.$children.forEach((x) => x.setParent(this));
    }
    map(f) {
        return this.$children.map(f);
    }
    filter(f) {
        return this.$children.filter(f);
    }
    find(f) {
        return this.$children.find(f);
    }
    toArray() {
        return this.$children;
    }
    at(index) {
        return this.$children[index];
    }
    forEach(f) {
        this.$children.forEach(f);
    }
    get length() {
        return this.$children.length;
    }
}
exports.List = List;
class Ident extends AST {
    constructor(value) {
        super();
        this.value = value;
    }
}
exports.Ident = Ident;
class SourceFile extends List {
}
exports.SourceFile = SourceFile;
class ContractDefn extends AST {
    constructor(name, body, base, interfaces) {
        super();
        this.name = name;
        this.body = body;
        this.base = base;
        this.interfaces = interfaces;
    }
}
exports.ContractDefn = ContractDefn;
class InterfaceDefn extends AST {
    constructor(name, body, base) {
        super();
        this.name = name;
        this.body = body;
        this.base = base;
    }
}
exports.InterfaceDefn = InterfaceDefn;
class TypePath extends AST {
    constructor(segments) {
        super();
        this.segments = segments;
    }
}
exports.TypePath = TypePath;
class TypeVariant extends AST {
    constructor(name, expr, variant) {
        super();
        this.name = name;
        this.expr = expr;
        this.variant = variant;
    }
}
exports.TypeVariant = TypeVariant;
class StructDefn extends AST {
    constructor(name, params) {
        super();
        this.name = name;
        this.params = params;
    }
}
exports.StructDefn = StructDefn;
class EnumVariantStruct extends AST {
    constructor(name, params) {
        super();
        this.name = name;
        this.params = params;
    }
}
exports.EnumVariantStruct = EnumVariantStruct;
class EnumVariantUnit extends AST {
    constructor(name) {
        super();
        this.name = name;
    }
}
exports.EnumVariantUnit = EnumVariantUnit;
// enumDefn: ENUM (name = ident) LBRACE variants+=variant_ ((variants+=variant_) COMMA?)* RBRACE;
class EnumDefn extends AST {
    constructor(name, variants) {
        super();
        this.name = name;
        this.variants = variants;
    }
}
exports.EnumDefn = EnumDefn;
// typeAliasDefn: TYPE (name = ident) EQ (value = typeExpr);
class TypeAliasDefn extends AST {
    constructor(name, value) {
        super();
        this.name = name;
        this.value = value;
    }
}
exports.TypeAliasDefn = TypeAliasDefn;
class Param extends AST {
    constructor(name, ty, optional, default_) {
        super();
        this.name = name;
        this.ty = ty;
        this.optional = optional;
        this.default_ = default_;
    }
}
exports.Param = Param;
class ContractBlock extends List {
}
exports.ContractBlock = ContractBlock;
class ImportAllStmt extends AST {
    constructor(src) {
        super();
        this.src = src;
    }
}
exports.ImportAllStmt = ImportAllStmt;
class ImportItemsStmt extends AST {
    constructor(items, src) {
        super();
        this.items = items;
        this.src = src;
    }
}
exports.ImportItemsStmt = ImportItemsStmt;
class ErrorDefn extends StructDefn {
}
exports.ErrorDefn = ErrorDefn;
class ErrorDefnBlock extends List {
}
exports.ErrorDefnBlock = ErrorDefnBlock;
class EventDefn extends StructDefn {
}
exports.EventDefn = EventDefn;
class EventDefnBlock extends List {
}
exports.EventDefnBlock = EventDefnBlock;
class StateDefnBlock extends List {
}
exports.StateDefnBlock = StateDefnBlock;
class StateDefnItem extends AST {
    constructor(name, ty, default_) {
        super();
        this.name = name;
        this.ty = ty;
        this.default_ = default_;
    }
}
exports.StateDefnItem = StateDefnItem;
class StateDefnMap extends AST {
    constructor(name, mapKeys, ty, default_) {
        super();
        this.name = name;
        this.mapKeys = mapKeys;
        this.ty = ty;
        this.default_ = default_;
    }
}
exports.StateDefnMap = StateDefnMap;
class MapKeyDefn extends AST {
    constructor(name, ty) {
        super();
        this.name = name;
        this.ty = ty;
    }
}
exports.MapKeyDefn = MapKeyDefn;
class InstantiateDefn extends AST {
    constructor(params, body) {
        super();
        this.params = params;
        this.body = body;
    }
}
exports.InstantiateDefn = InstantiateDefn;
class InstantiateDecl extends AST {
    constructor(params) {
        super();
        this.params = params;
    }
}
exports.InstantiateDecl = InstantiateDecl;
class ExecDefn extends AST {
    constructor(name, params, body, tup) {
        super();
        this.name = name;
        this.params = params;
        this.body = body;
        this.tup = tup;
    }
}
exports.ExecDefn = ExecDefn;
class ExecDecl extends AST {
    constructor(name, params, tup) {
        super();
        this.name = name;
        this.params = params;
        this.tup = tup;
    }
}
exports.ExecDecl = ExecDecl;
class QueryDefn extends AST {
    constructor(name, params, retTy, body) {
        super();
        this.name = name;
        this.params = params;
        this.retTy = retTy;
        this.body = body;
    }
}
exports.QueryDefn = QueryDefn;
class QueryDecl extends AST {
    constructor(name, params, retTy) {
        super();
        this.name = name;
        this.params = params;
        this.retTy = retTy;
    }
}
exports.QueryDecl = QueryDecl;
class ReplyDefn extends AST {
    constructor(name, params, body, on) {
        super();
        this.name = name;
        this.params = params;
        this.body = body;
        this.on = on;
    }
}
exports.ReplyDefn = ReplyDefn;
class FnDefn extends AST {
    constructor(name, fallible, params, retTy, body) {
        super();
        this.name = name;
        this.fallible = fallible;
        this.params = params;
        this.retTy = retTy;
        this.body = body;
    }
}
exports.FnDefn = FnDefn;
class LetStmt extends AST {
    constructor(binding, expr) {
        super();
        this.binding = binding;
        this.expr = expr;
    }
}
exports.LetStmt = LetStmt;
var BindingType;
(function (BindingType) {
    BindingType["IDENT"] = "ident";
    BindingType["STRUCT"] = "struct";
    BindingType["TUPLE"] = "tuple";
})(BindingType = exports.BindingType || (exports.BindingType = {}));
class IdentBinding extends AST {
    constructor(name, ty) {
        super();
        this.name = name;
        this.ty = ty;
    }
}
exports.IdentBinding = IdentBinding;
class TupleBinding extends AST {
    constructor(bindings) {
        super();
        this.bindings = bindings;
    }
}
exports.TupleBinding = TupleBinding;
class StructBinding extends AST {
    constructor(bindings) {
        super();
        this.bindings = bindings;
    }
}
exports.StructBinding = StructBinding;
class ConstStmt extends AST {
    constructor(name, expr) {
        super();
        this.name = name;
        this.expr = expr;
    }
}
exports.ConstStmt = ConstStmt;
class Annotation extends AST {
    constructor(path, args) {
        super();
        this.path = path;
        this.args = args;
    }
}
exports.Annotation = Annotation;
var AssignOp;
(function (AssignOp) {
    AssignOp["EQ"] = "=";
    AssignOp["PLUS_EQ"] = "+=";
    AssignOp["MINUS_EQ"] = "-=";
    AssignOp["MUL_EQ"] = "*=";
    AssignOp["DIV_EQ"] = "/=";
    AssignOp["MOD_EQ"] = "%=";
})(AssignOp = exports.AssignOp || (exports.AssignOp = {}));
class AssignStmt extends AST {
    constructor(lhs, op, rhs) {
        super();
        this.lhs = lhs;
        this.op = op;
        this.rhs = rhs;
    }
}
exports.AssignStmt = AssignStmt;
class IdentLHS extends AST {
    constructor(symbol) {
        super();
        this.symbol = symbol;
    }
}
exports.IdentLHS = IdentLHS;
class DotLHS extends AST {
    constructor(obj, member) {
        super();
        this.obj = obj;
        this.member = member;
    }
}
exports.DotLHS = DotLHS;
class IndexLHS extends AST {
    constructor(obj, args) {
        super();
        this.obj = obj;
        this.args = args;
    }
}
exports.IndexLHS = IndexLHS;
class TupleExpr extends AST {
    constructor(exprs) {
        super();
        this.exprs = exprs;
    }
}
exports.TupleExpr = TupleExpr;
class StructExpr extends AST {
    constructor(ty, args) {
        super();
        this.ty = ty;
        this.args = args;
    }
}
exports.StructExpr = StructExpr;
class MemberVal extends AST {
    constructor(name, value) {
        super();
        this.name = name;
        this.value = value;
    }
}
exports.MemberVal = MemberVal;
class IfStmt extends AST {
    constructor(pred, then, else_) {
        super();
        this.pred = pred;
        this.then = then;
        this.else_ = else_;
    }
}
exports.IfStmt = IfStmt;
class ForStmt extends AST {
    constructor(binding, iter, body) {
        super();
        this.binding = binding;
        this.iter = iter;
        this.body = body;
    }
}
exports.ForStmt = ForStmt;
class GroupedExpr extends AST {
    constructor(expr) {
        super();
        this.expr = expr;
    }
}
exports.GroupedExpr = GroupedExpr;
var UnwrapOp;
(function (UnwrapOp) {
    UnwrapOp["OR_FAIL"] = "!";
    UnwrapOp["OR_NONE"] = "?";
})(UnwrapOp = exports.UnwrapOp || (exports.UnwrapOp = {}));
class DotExpr extends AST {
    constructor(obj, unwrap, member) {
        super();
        this.obj = obj;
        this.unwrap = unwrap;
        this.member = member;
    }
}
exports.DotExpr = DotExpr;
class AsExpr extends AST {
    constructor(expr, ty) {
        super();
        this.expr = expr;
        this.ty = ty;
    }
}
exports.AsExpr = AsExpr;
class IndexExpr extends AST {
    constructor(obj, args) {
        super();
        this.obj = obj;
        this.args = args;
    }
}
exports.IndexExpr = IndexExpr;
class DColonExpr extends AST {
    constructor(obj, member) {
        super();
        this.obj = obj;
        this.member = member;
    }
}
exports.DColonExpr = DColonExpr;
class FnCallExpr extends AST {
    constructor(func, fallible, args) {
        super();
        this.func = func;
        this.fallible = fallible;
        this.args = args;
    }
}
exports.FnCallExpr = FnCallExpr;
var Op;
(function (Op) {
    Op["EQ"] = "==";
    Op["NEQ"] = "!=";
    Op["LT"] = "<";
    Op["LTE"] = "<=";
    Op["GT"] = ">";
    Op["GTE"] = ">=";
    Op["PLUS"] = "+";
    Op["MINUS"] = "-";
    Op["MUL"] = "*";
    Op["DIV"] = "/";
    Op["MOD"] = "%";
})(Op = exports.Op || (exports.Op = {}));
class BinOpExpr extends AST {
    constructor(lhs, op, rhs) {
        super();
        this.lhs = lhs;
        this.op = op;
        this.rhs = rhs;
    }
}
exports.BinOpExpr = BinOpExpr;
class AndExpr extends AST {
    constructor(lhs, rhs) {
        super();
        this.lhs = lhs;
        this.rhs = rhs;
    }
}
exports.AndExpr = AndExpr;
class OrExpr extends AST {
    constructor(lhs, rhs) {
        super();
        this.lhs = lhs;
        this.rhs = rhs;
    }
}
exports.OrExpr = OrExpr;
class IsExpr extends AST {
    constructor(negative, lhs, rhs) {
        super();
        this.negative = negative;
        this.lhs = lhs;
        this.rhs = rhs;
    }
}
exports.IsExpr = IsExpr;
class InExpr extends AST {
    constructor(lhs, rhs) {
        super();
        this.lhs = lhs;
        this.rhs = rhs;
    }
}
exports.InExpr = InExpr;
class NoneCheckExpr extends AST {
    constructor(expr) {
        super();
        this.expr = expr;
    }
}
exports.NoneCheckExpr = NoneCheckExpr;
class ShortTryExpr extends AST {
    constructor(expr) {
        super();
        this.expr = expr;
    }
}
exports.ShortTryExpr = ShortTryExpr;
class TryCatchElseExpr extends AST {
    constructor(body, catch_, else_) {
        super();
        this.body = body;
        this.catch_ = catch_;
        this.else_ = else_;
    }
}
exports.TryCatchElseExpr = TryCatchElseExpr;
class CatchClause extends AST {
    constructor(name, ty, body) {
        super();
        this.name = name;
        this.ty = ty;
        this.body = body;
    }
}
exports.CatchClause = CatchClause;
class NotExpr extends AST {
    constructor(expr) {
        super();
        this.expr = expr;
    }
}
exports.NotExpr = NotExpr;
class QueryExpr extends AST {
    constructor(expr) {
        super();
        this.expr = expr;
    }
}
exports.QueryExpr = QueryExpr;
class QueryNowExpr extends AST {
    constructor(expr) {
        super();
        this.expr = expr;
    }
}
exports.QueryNowExpr = QueryNowExpr;
class FailExpr extends AST {
    constructor(expr) {
        super();
        this.expr = expr;
    }
}
exports.FailExpr = FailExpr;
class UnitVariantExpr extends AST {
    constructor(ty) {
        super();
        this.ty = ty;
    }
}
exports.UnitVariantExpr = UnitVariantExpr;
class IdentExpr extends AST {
    constructor(symbol) {
        super();
        this.symbol = symbol;
    }
}
exports.IdentExpr = IdentExpr;
class Grouped2Expr extends AST {
    constructor(expr) {
        super();
        this.expr = expr;
    }
}
exports.Grouped2Expr = Grouped2Expr;
var Scope;
(function (Scope) {
    Scope["INSTANTIATE"] = "instantiate";
    Scope["EXEC"] = "exec";
    Scope["QUERY"] = "query";
    Scope["MUT"] = "mut";
})(Scope = exports.Scope || (exports.Scope = {}));
class TypeLens extends AST {
    constructor(scope, ty) {
        super();
        this.scope = scope;
        this.ty = ty;
    }
}
exports.TypeLens = TypeLens;
class OptionT extends AST {
    constructor(ty) {
        super();
        this.ty = ty;
    }
}
exports.OptionT = OptionT;
class ListT extends AST {
    constructor(ty, len) {
        super();
        this.ty = ty;
        this.len = len;
    }
}
exports.ListT = ListT;
class TupleT extends AST {
    constructor(tys) {
        super();
        this.tys = tys;
    }
}
exports.TupleT = TupleT;
class Arg extends AST {
    constructor(name, expr) {
        super();
        this.name = name;
        this.expr = expr;
    }
}
exports.Arg = Arg;
class Closure extends AST {
    constructor(fallible, params, retTy, body) {
        super();
        this.fallible = fallible;
        this.params = params;
        this.retTy = retTy;
        this.body = body;
    }
}
exports.Closure = Closure;
class Literal extends AST {
    constructor(value) {
        super();
        this.value = value;
    }
}
exports.Literal = Literal;
class StringLit extends Literal {
}
exports.StringLit = StringLit;
class IntLit extends Literal {
}
exports.IntLit = IntLit;
class DecLit extends Literal {
}
exports.DecLit = DecLit;
class BoolLit extends Literal {
}
exports.BoolLit = BoolLit;
class NoneLit extends Literal {
    constructor() {
        super('none');
    }
}
exports.NoneLit = NoneLit;
class DebugStmt extends AST {
    constructor(stmts) {
        super();
        this.stmts = stmts;
    }
}
exports.DebugStmt = DebugStmt;
class ExecStmt extends AST {
    constructor(expr, options) {
        super();
        this.expr = expr;
        this.options = options;
    }
}
exports.ExecStmt = ExecStmt;
class DelegateExecStmt extends AST {
    constructor(expr) {
        super();
        this.expr = expr;
    }
}
exports.DelegateExecStmt = DelegateExecStmt;
class InstantiateStmt extends AST {
    constructor(expr, new_, options) {
        super();
        this.expr = expr;
        this.new_ = new_;
        this.options = options;
    }
}
exports.InstantiateStmt = InstantiateStmt;
class EmitStmt extends AST {
    constructor(expr) {
        super();
        this.expr = expr;
    }
}
exports.EmitStmt = EmitStmt;
class ReturnStmt extends AST {
    constructor(expr) {
        super();
        this.expr = expr;
    }
}
exports.ReturnStmt = ReturnStmt;
class FailStmt extends AST {
    constructor(expr) {
        super();
        this.expr = expr;
    }
}
exports.FailStmt = FailStmt;
class Block extends List {
}
exports.Block = Block;
class VisitorError extends Error {
    constructor(message, data) {
        super(message + '\n\n' + JSON.stringify(data, null, 2));
        this.data = data;
    }
}
exports.VisitorError = VisitorError;
class CWSASTVisitor {
    visit(node) {
        // @ts-ignore
        let visitFn = this[`visit${node.constructor.name}`];
        if (visitFn) {
            return visitFn.call(this, node);
        }
        else {
            throw new Error(`Method 'visit${node.constructor.name}()' not implemented.`);
        }
    }
}
exports.CWSASTVisitor = CWSASTVisitor;
//# sourceMappingURL=ast.js.map