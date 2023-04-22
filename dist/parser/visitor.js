"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CWScriptASTBuilderVisitor = void 0;
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const AST = __importStar(require("../ast"));
class CWScriptASTBuilderVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    // Stmts
    visitSourceFile(ctx) {
        let body = ctx.topLevelStmt().map((x) => this.visit(x));
        return new AST.SourceFile(body).$(ctx);
    }
    visitContractDefn(ctx) {
        let name = this.visitIdent(ctx._name);
        let body = this.visitContractBlock(ctx._body);
        let base = ctx._base ? this.visitTypePath(ctx._base) : null;
        let interfaces = ctx._interfaces.map((x) => this.visitTypePath(x));
        return new AST.ContractDefn(name, body, base, new AST.List(interfaces)).$(ctx);
    }
    visitTypePath(ctx) {
        return new AST.TypePath(this.vlist(ctx._segments)).$(ctx);
    }
    visitTypeVariant(ctx) {
        let path = this.visitTypePath(ctx.typePath());
        let expr = ctx.expr() ? this.visit(ctx.expr()) : null;
        let variant = this.visitIdent(ctx._variant);
        return new AST.TypeVariant(path, expr, variant).$(ctx);
    }
    visitTypeLens(ctx) {
        let scope = ctx._scope.text;
        let ty = this.visitTypePath(ctx.typePath());
        return new AST.TypeLens(scope, ty).$(ctx);
    }
    visitOptionT(ctx) {
        let ty = this.visit(ctx.typeExpr());
        return new AST.OptionT(ty).$(ctx);
    }
    visitListT(ctx) {
        let ty = this.visit(ctx.typeExpr());
        let len = ctx._len ? Number.parseInt(ctx._len.text) : null;
        return new AST.ListT(ty, len).$(ctx);
    }
    visitTupleT(ctx) {
        return new AST.TupleT(this.vlist(ctx._items)).$(ctx);
    }
    visitStructDefn(ctx) {
        let name = ctx._name ? this.visitIdent(ctx._name) : null;
        let members = this.vlist(ctx._members);
        return new AST.StructDefn(name, members).$(ctx);
    }
    visitTypeAliasDefn(ctx) {
        let name = this.visitIdent(ctx._name);
        let value = this.visit(ctx._value);
        return new AST.TypeAliasDefn(name, value).$(ctx);
    }
    visitInterfaceDefn(ctx) {
        let name = this.visitIdent(ctx._name);
        let body = this.visitContractBlock(ctx._body);
        let base = ctx._base ? this.visitTypePath(ctx._base) : null;
        return new AST.InterfaceDefn(name, body, base).$(ctx);
    }
    visitImportAllStmt(ctx) {
        let src = ctx._src.text;
        return new AST.ImportAllStmt(src).$(ctx);
    }
    visitImportItemsStmt(ctx) {
        let items = ctx._items.map((x) => this.visitIdent(x));
        let src = ctx._src.text;
        return new AST.ImportItemsStmt(items, src).$(ctx);
    }
    visitParam(ctx) {
        let name = this.visitIdent(ctx._name);
        let ty = ctx._ty ? this.visit(ctx._ty) : null;
        let optional = !!ctx._optional;
        let default_ = ctx._default ? this.visit(ctx._default) : null;
        return new AST.Param(name, ty, optional, default_).$(ctx);
    }
    visitStringLit(ctx) {
        return new AST.StringLit(ctx.text).$(ctx);
    }
    visitContractBlock(ctx) {
        return this.vlist(ctx._body).$(ctx);
    }
    visitStateDefnBlock(ctx) {
        // @ts-ignore
        return new AST.StateDefnBlock(ctx._defns.map((x) => this.visit(x))).$(ctx);
    }
    visitStateDefn_Item(ctx) {
        let name = this.visitIdent(ctx._name);
        let ty = this.visit(ctx._ty);
        let default_ = ctx._default ? this.visit(ctx._default) : null;
        return new AST.StateDefnItem(name, ty, default_).$(ctx);
    }
    visitStateDefn_Map(ctx) {
        let name = this.visitIdent(ctx._name);
        let mapKeys = this.vlist(ctx._mapKeys);
        let ty = this.visit(ctx._ty);
        let default_ = ctx._default ? this.visit(ctx._default) : null;
        return new AST.StateDefnMap(name, mapKeys, ty, default_).$(ctx);
    }
    visitFnDefn(ctx) {
        let name = this.visitIdent(ctx._name);
        let params = this.visitFnParams(ctx._params);
        let retTy = ctx._retTy ? this.visit(ctx._retTy) : null;
        let body = this.visitBlock(ctx._body);
        let fallible = !!ctx._fallible;
        return new AST.FnDefn(name, fallible, params, retTy, body).$(ctx);
    }
    visitFnParams(ctx) {
        return this.vlist(ctx._params).$(ctx);
    }
    visitMapKeyDefn(ctx) {
        let name = ctx._name ? this.visitIdent(ctx._name) : null;
        let ty = this.visit(ctx._ty);
        return new AST.MapKeyDefn(name, ty).$(ctx);
    }
    visitInstantiateDefn(ctx) {
        let params = this.visitFnParams(ctx._params);
        let body = this.visit(ctx._body);
        return new AST.InstantiateDefn(params, body).$(ctx);
    }
    visitInstantiateDecl(ctx) {
        let params = this.visitFnParams(ctx._params);
        return new AST.InstantiateDecl(params).$(ctx);
    }
    visitExecDefn(ctx) {
        let name = this.visitIdent(ctx._name);
        let params = this.visitFnParams(ctx._params);
        let body = this.visit(ctx._body);
        let tup = !!ctx._tup;
        return new AST.ExecDefn(name, params, body, tup).$(ctx);
    }
    visitExecDecl(ctx) {
        let name = this.visitIdent(ctx._name);
        let params = this.visitFnParams(ctx._params);
        let tup = !!ctx._tup;
        return new AST.ExecDecl(name, params, tup).$(ctx);
    }
    visitQueryDefn(ctx) {
        let name = this.visitIdent(ctx._name);
        let params = this.visitFnParams(ctx._params);
        let retTy = ctx._retTy ? this.visit(ctx._retTy) : null;
        let body = this.visit(ctx._body);
        return new AST.QueryDefn(name, params, retTy, body).$(ctx);
    }
    visitQueryDecl(ctx) {
        let name = this.visitIdent(ctx._name);
        let params = this.visitFnParams(ctx._params);
        let retTy = ctx._retTy ? this.visit(ctx._retTy) : null;
        return new AST.QueryDecl(name, params, retTy).$(ctx);
    }
    visitErrorDefn(ctx) {
        let name = this.visitIdent(ctx._defn._name);
        let params = this.visitFnParams(ctx._defn._params);
        return new AST.ErrorDefn(name, params).$(ctx);
    }
    visitStructDefn_fn(ctx) {
        let name = this.visitIdent(ctx._name);
        let params = this.visitFnParams(ctx._params);
        return new AST.StructDefn(name, params).$(ctx);
    }
    visitErrorDefnBlock(ctx) {
        return new AST.ErrorDefnBlock(ctx._defns.map((x) => {
            return this.visitStructDefn_fn(x);
        })).$(ctx);
    }
    visitEventDefn(ctx) {
        let defn = ctx.structDefn_fn();
        let name = this.visitIdent(defn._name);
        let params = this.visitFnParams(defn._params);
        return new AST.EventDefn(name, params).$(ctx);
    }
    visitEventDefnBlock(ctx) {
        return new AST.EventDefnBlock(ctx._defns.map((x) => {
            return this.visitStructDefn_fn(x);
        })).$(ctx);
    }
    visitReplyDefn(ctx) {
        let name = this.visitIdent(ctx._name);
        let params = this.visitFnParams(ctx._params);
        let body = this.visit(ctx._body);
        return new AST.ReplyDefn(name, params, body).$(ctx);
    }
    visitEnumDefn(ctx) {
        let name = this.visitIdent(ctx._name);
        let variants = this.vlist(ctx._variants);
        return new AST.EnumDefn(name, variants).$(ctx);
    }
    visitVariant_struct(ctx) {
        let name = this.visitIdent(ctx._name);
        let members = this.visitParamList(ctx._members);
        return new AST.EnumVariantStruct(name, members).$(ctx);
    }
    visitParamList(ctx) {
        return this.vlist(ctx.param()).$(ctx);
    }
    visitVariant_unit(ctx) {
        let name = this.visitIdent(ctx._name);
        return new AST.EnumVariantUnit(name).$(ctx);
    }
    visitDebugStmt_(ctx) {
        let stmts = [];
        let block = ctx.block();
        let stmt = ctx.stmt();
        if (stmt) {
            stmts = [this.visit(stmt)];
        }
        if (block) {
            stmts = this.visitBlock(block).children;
        }
        return new AST.DebugStmt(stmts).$(ctx);
    }
    visitDebugStmt(ctx) {
        return this.visitDebugStmt_(ctx.debugStmt_());
    }
    visitLetStmt_(ctx) {
        let binding = this.visit(ctx.let_binding());
        let expr_ = ctx.expr();
        let expr = expr_ ? this.visit(expr_) : null;
        return new AST.LetStmt(binding, expr).$(ctx);
    }
    visitLetStmt(ctx) {
        return this.visitLetStmt_(ctx.letStmt_());
    }
    visitConstStmt_(ctx) {
        let ident = this.visitIdent(ctx.ident());
        let expr = this.visit(ctx.expr());
        return new AST.ConstStmt(ident, expr).$(ctx);
    }
    visitConstStmt(ctx) {
        return this.visitConstStmt_(ctx.constStmt_());
    }
    visitAssignStmt_(ctx) {
        let lhs = this.visit(ctx._lhs);
        let op = ctx._assignOp.text;
        let rhs = this.visit(ctx._rhs);
        return new AST.AssignStmt(lhs, op, rhs).$(ctx);
    }
    visitAssignStmt(ctx) {
        return this.visitAssignStmt_(ctx.assignStmt_());
    }
    visitIfStmt_(ctx) {
        let pred = this.visit(ctx._pred);
        let then = this.visitBlock(ctx._body);
        let else_ = ctx._else_ ? this.visitElseClause(ctx._else_) : null;
        return new AST.IfStmt(pred, then, else_).$(ctx);
    }
    visitElseClause(ctx) {
        let stmt = ctx.stmt();
        if (stmt) {
            return new AST.Block([this.visit(stmt)]).$(ctx);
        }
        else {
            let block = ctx.block();
            return this.visitBlock(block);
        }
    }
    visitBlock(ctx) {
        return new AST.Block(ctx._body.map((x) => this.visit(x))).$(ctx);
    }
    visitForStmt_(ctx) {
        let binding = this.visit(ctx._binding);
        let iter = this.visit(ctx._iter);
        let body = this.visitBlock(ctx._body);
        return new AST.ForStmt(binding, iter, body).$(ctx);
    }
    visitForStmt(ctx) {
        return this.visitForStmt_(ctx.forStmt_());
    }
    visitExecStmt(ctx) {
        let expr = this.visit(ctx.expr());
        let options = ctx._options ? this.visitCallOptions(ctx._options) : null;
        return new AST.ExecStmt(expr, options).$(ctx);
    }
    visitDelegateExecStmt(ctx) {
        let expr = this.visit(ctx.expr());
        return new AST.DelegateExecStmt(expr).$(ctx);
    }
    visitInstantiateStmt(ctx) {
        let expr = this.visit(ctx.expr());
        let new_ = !!ctx._new;
        let options = ctx._options ? this.visitCallOptions(ctx._options) : null;
        return new AST.InstantiateStmt(expr, new_, options).$(ctx);
    }
    visitCallOptions(ctx) {
        return this.vlist(ctx.memberVal()).$(ctx);
    }
    visitEmitStmt(ctx) {
        let expr = this.visit(ctx.expr());
        return new AST.EmitStmt(expr).$(ctx);
    }
    visitReturnStmt(ctx) {
        let value = this.visit(ctx.expr());
        return new AST.ReturnStmt(value).$(ctx);
    }
    visitFailStmt(ctx) {
        let expr = this.visit(ctx.expr());
        return new AST.FailStmt(expr).$(ctx);
    }
    visitExprStmt(ctx) {
        return this.visit(ctx.expr());
    }
    visitIdentBinding_(ctx) {
        let name = this.visitIdent(ctx._name);
        let ty = ctx._ty ? this.visit(ctx._ty) : null;
        return new AST.IdentBinding(name, ty).$(ctx);
    }
    visitStructBinding(ctx) {
        let bindings = this.vlist(ctx._bindings);
        return new AST.StructBinding(bindings).$(ctx);
    }
    visitTupleBinding(ctx) {
        let bindings = this.vlist(ctx._bindings);
        return new AST.TupleBinding(bindings).$(ctx);
    }
    visitIdentLHS(ctx) {
        const ident = this.visitIdent(ctx.ident());
        return new AST.IdentLHS(ident).$(ctx);
    }
    visitDotLHS(ctx) {
        const obj = this.visit(ctx._obj);
        const member = this.visitIdent(ctx._member);
        return new AST.DotLHS(obj, member).$(ctx);
    }
    visitIndexLHS(ctx) {
        const obj = this.visit(ctx._obj);
        const args = this.vlist(ctx._args);
        return new AST.IndexLHS(obj, args).$(ctx);
    }
    visitGroupedExpr(ctx) {
        const expr = this.visit(ctx.expr());
        return new AST.GroupedExpr(expr).$(ctx);
    }
    visitGrouped2Expr(ctx) {
        const expr = this.visit(ctx.expr());
        return new AST.Grouped2Expr(expr).$(ctx);
    }
    visitDotExpr(ctx) {
        const obj = this.visit(ctx.expr());
        let unwrap = null;
        if (ctx._unwrap) {
            switch (ctx._unwrap.text) {
                case '?':
                    unwrap = AST.UnwrapOp.OR_NONE;
                    break;
                case '!':
                    unwrap = AST.UnwrapOp.OR_FAIL;
                    break;
            }
        }
        const member = this.visitIdent(ctx._member);
        return new AST.DotExpr(obj, unwrap, member).$(ctx);
    }
    visitAsExpr(ctx) {
        const expr = this.visit(ctx.expr());
        const ty = this.visit(ctx._ty);
        return new AST.AsExpr(expr, ty).$(ctx);
    }
    visitIndexExpr(ctx) {
        const obj = this.visit(ctx.expr());
        const args = new AST.List(ctx._args.map((arg) => this.visitArg(arg)));
        return new AST.IndexExpr(obj, args).$(ctx);
    }
    visitDColonExpr(ctx) {
        const obj = this.visit(ctx.expr());
        const member = this.visitIdent(ctx._member);
        return new AST.DColonExpr(obj, member).$(ctx);
    }
    visitTypeDColonExpr(ctx) {
        const obj = this.visit(ctx.typeExpr());
        const ident = this.visitIdent(ctx._member);
        return new AST.DColonExpr(obj, ident).$(ctx);
    }
    visitArg(ctx) {
        const value = this.visit(ctx._value);
        const name = ctx._name ? this.visitIdent(ctx._name) : null;
        return new AST.Arg(name, value).$(ctx);
    }
    visitFnCallExpr(ctx) {
        const func = this.visit(ctx.expr());
        const fallible = !!ctx._fallible;
        const args = new AST.List(ctx._args.map((arg) => this.visitArg(arg)));
        return new AST.FnCallExpr(func, fallible, args).$(ctx);
    }
    visitTypeFnCallExpr(ctx) {
        const func = this.visit(ctx.typeExpr());
        const fallible = !!ctx._fallible;
        const args = new AST.List(ctx._args.map((arg) => this.visitArg(arg)));
        return new AST.FnCallExpr(func, fallible, args).$(ctx);
    }
    visitMulExpr(ctx) {
        const lhs = this.visit(ctx.expr()[0]);
        const op = ctx._op.text;
        const rhs = this.visit(ctx._rhs);
        return new AST.BinOpExpr(lhs, op, rhs).$(ctx);
    }
    visitAddExpr(ctx) {
        const lhs = this.visit(ctx.expr()[0]);
        const op = ctx._op.text;
        const rhs = this.visit(ctx._rhs);
        return new AST.BinOpExpr(lhs, op, rhs).$(ctx);
    }
    visitCompExpr(ctx) {
        const lhs = this.visit(ctx.expr()[0]);
        const op = ctx._op.text;
        const rhs = this.visit(ctx._rhs);
        return new AST.BinOpExpr(lhs, op, rhs).$(ctx);
    }
    visitEqExpr(ctx) {
        const lhs = this.visit(ctx.expr()[0]);
        const op = ctx._op.text;
        const rhs = this.visit(ctx._rhs);
        return new AST.BinOpExpr(lhs, op, rhs).$(ctx);
    }
    visitNoneCheckExpr(ctx) {
        const obj = this.visit(ctx.expr());
        return new AST.NoneCheckExpr(obj).$(ctx);
    }
    visitIsExpr(ctx) {
        const lhs = this.visit(ctx.expr());
        const negative = !!ctx._negative;
        const rhs = this.visit(ctx._rhs);
        return new AST.IsExpr(negative, lhs, rhs).$(ctx);
    }
    visitInExpr(ctx) {
        const lhs = this.visit(ctx.expr()[0]);
        const rhs = this.visit(ctx._rhs);
        return new AST.InExpr(lhs, rhs).$(ctx);
    }
    visitShortTryExpr(ctx) {
        let lhs = this.visit(ctx.expr()[0]);
        let rhs = this.visit(ctx._rhs);
        let body = new AST.Block([lhs]).$(ctx.expr()[0]);
        let else_ = new AST.Block([rhs]).$(ctx._rhs);
        return new AST.TryCatchElseExpr(body, AST.List.empty(), else_).$(ctx);
    }
    visitTryCatchElseExpr_(ctx) {
        let body = this.visit(ctx._body);
        let catch_ = this.vlist(ctx._catches);
        let else_ = ctx._else_ ? this.visitElseClause(ctx._else_) : null;
        return new AST.TryCatchElseExpr(body, catch_, else_).$(ctx);
    }
    visitCatch(ctx) {
        let ty = this.visit(ctx._ty);
        let body = this.visitBlock(ctx._body);
        return new AST.CatchClause(null, ty, body).$(ctx);
    }
    visitCatchBind(ctx) {
        let name = this.visitIdent(ctx._name);
        let ty = this.visit(ctx._ty);
        let body = this.visitBlock(ctx._body);
        return new AST.CatchClause(name, ty, body).$(ctx);
    }
    visitAndExpr(ctx) {
        const lhs = this.visit(ctx.expr()[0]);
        const rhs = this.visit(ctx._rhs);
        return new AST.AndExpr(lhs, rhs).$(ctx);
    }
    visitOrExpr(ctx) {
        const lhs = this.visit(ctx.expr()[0]);
        const rhs = this.visit(ctx._rhs);
        return new AST.OrExpr(lhs, rhs).$(ctx);
    }
    visitQueryNowExpr(ctx) {
        const obj = this.visit(ctx.expr());
        return new AST.QueryNowExpr(obj).$(ctx);
    }
    visitFailExpr(ctx) {
        let expr_ = ctx.expr();
        const obj = this.visit(expr_);
        return new AST.FailExpr(obj).$(ctx);
    }
    visitClosure(ctx) {
        let fallible = !!ctx._fallible;
        let params = this.visitClosureParams(ctx._params);
        let retTy = ctx._retTy ? this.visit(ctx._retTy) : null;
        let body;
        if (ctx.stmt()) {
            body = new AST.Block([this.visit(ctx.stmt())]).$(ctx.stmt());
        }
        else {
            body = this.visitBlock(ctx.block());
        }
        return new AST.Closure(fallible, params, retTy, body).$(ctx);
    }
    visitTupleExpr(ctx) {
        return new AST.TupleExpr(this.vlist(ctx.expr())).$(ctx);
    }
    visitClosureParams(ctx) {
        return this.vlist(ctx._params).$(ctx);
    }
    visitMemberVal(ctx) {
        let name = this.visitIdent(ctx._name);
        let value = ctx._value ? this.visit(ctx._value) : null;
        return new AST.MemberVal(name, value).$(ctx);
    }
    visitStructExpr(ctx) {
        let ty = ctx.typeExpr()
            ? this.visit(ctx.typeExpr())
            : null;
        let memberVals = ctx._members.map((x) => this.visitMemberVal(x));
        return new AST.StructExpr(ty, new AST.List(memberVals)).$(ctx);
    }
    visitUnitVariantExpr(ctx) {
        let ty = this.visitTypeVariant(ctx.typeVariant());
        return new AST.UnitVariantExpr(ty).$(ctx);
    }
    visitIntLit(ctx) {
        return new AST.IntLit(ctx.text).$(ctx);
    }
    visitDecLit(ctx) {
        return new AST.DecLit(ctx.text).$(ctx);
    }
    visitBoolLit(ctx) {
        return new AST.BoolLit(ctx.text).$(ctx);
    }
    visitNoneLit(ctx) {
        return new AST.NoneLit().$(ctx);
    }
    visitIdent(ctx) {
        return new AST.Ident(ctx.text).$(ctx);
    }
    // Create a virtual AST List node of AST nodes from a list of parser contexts
    // Used for when the Node actually contains a list of other nodes rather than
    // as a child.
    vlist(ctx) {
        return AST.List.virtual(ctx.map((c) => this.visit(c)));
    }
    defaultResult() {
        return new AST.AST();
    }
}
exports.CWScriptASTBuilderVisitor = CWScriptASTBuilderVisitor;
//# sourceMappingURL=visitor.js.map