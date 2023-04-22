import { ParserRuleContext } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import * as P from '../grammar/CWScriptParser';
import { CWScriptParserVisitor as ANTLRCWScriptParserVisitor } from '../grammar/CWScriptParserVisitor';
import * as AST from '../ast';
import { Expr } from '../ast';

export class CWScriptASTBuilderVisitor
  extends AbstractParseTreeVisitor<AST.AST>
  implements ANTLRCWScriptParserVisitor<AST.AST>
{
  // Stmts
  visitSourceFile(ctx: P.SourceFileContext): AST.SourceFile {
    let body = ctx.topLevelStmt().map((x) => this.visit(x) as AST.TopLevelStmt);
    return new AST.SourceFile(body).$(ctx);
  }

  visitContractDefn(ctx: P.ContractDefnContext): AST.ContractDefn {
    let name = this.visitIdent(ctx._name);
    let body = this.visitContractBlock(ctx._body);
    let base = ctx._base ? this.visitTypePath(ctx._base) : null;
    let interfaces = ctx._interfaces.map((x) => this.visitTypePath(x));
    return new AST.ContractDefn(name, body, base, new AST.List(interfaces)).$(
      ctx
    );
  }

  visitTypePath(ctx: P.TypePathContext): AST.TypePath {
    return new AST.TypePath(this.vlist<AST.Ident>(ctx._segments)).$(ctx);
  }

  visitTypeVariant(ctx: P.TypeVariantContext): AST.TypeVariant {
    let path = this.visitTypePath(ctx.typePath());
    let expr = ctx.expr() ? (this.visit(ctx.expr()!) as AST.Expr) : null;
    let variant = this.visitIdent(ctx._variant);
    return new AST.TypeVariant(path, expr, variant).$(ctx);
  }

  visitTypeLens(ctx: P.TypeLensContext): AST.TypeLens {
    let scope = ctx._scope.text! as AST.Scope;
    let ty = this.visitTypePath(ctx.typePath());
    return new AST.TypeLens(scope, ty).$(ctx);
  }

  visitOptionT(ctx: P.OptionTContext): AST.OptionT {
    let ty = this.visit(ctx.typeExpr()) as AST.TypeExpr;
    return new AST.OptionT(ty).$(ctx);
  }

  visitListT(ctx: P.ListTContext): AST.ListT | AST.TupleT {
    let ty = this.visit(ctx.typeExpr()) as AST.TypeExpr;
    let len = ctx._len ? Number.parseInt(ctx._len.text!) : null;
    return new AST.ListT(ty, len).$(ctx);
  }

  visitTupleT(ctx: P.TupleTContext): AST.TupleT {
    return new AST.TupleT(this.vlist<AST.TypeExpr>(ctx._items)).$(ctx);
  }

  visitStructDefn(ctx: P.StructDefnContext): AST.StructDefn {
    let name = ctx._name ? this.visitIdent(ctx._name) : null;
    let members = this.vlist<AST.Param>(ctx._members);
    return new AST.StructDefn(name, members).$(ctx);
  }

  visitTypeAliasDefn(ctx: P.TypeAliasDefnContext): AST.TypeAliasDefn {
    let name = this.visitIdent(ctx._name);
    let value = this.visit(ctx._value) as AST.TypeExpr;
    return new AST.TypeAliasDefn(name, value).$(ctx);
  }

  visitInterfaceDefn(ctx: P.InterfaceDefnContext): AST.InterfaceDefn {
    let name = this.visitIdent(ctx._name);
    let body = this.visitContractBlock(ctx._body);
    let base = ctx._base ? this.visitTypePath(ctx._base) : null;
    return new AST.InterfaceDefn(name, body, base).$(ctx);
  }

  visitImportAllStmt(ctx: P.ImportAllStmtContext): AST.ImportAllStmt {
    let src = ctx._src.text!;
    return new AST.ImportAllStmt(src).$(ctx);
  }

  visitImportItemsStmt(ctx: P.ImportItemsStmtContext): AST.ImportItemsStmt {
    let items = ctx._items.map((x) => this.visitIdent(x));
    let src = ctx._src.text!;
    return new AST.ImportItemsStmt(items, src).$(ctx);
  }

  visitParam(ctx: P.ParamContext): AST.Param {
    let name = this.visitIdent(ctx._name);
    let ty = ctx._ty ? (this.visit(ctx._ty) as AST.TypeExpr) : null;
    let optional = !!ctx._optional;
    let default_ = ctx._default ? this.visit(ctx._default) : null;
    return new AST.Param(name, ty, optional, default_ as AST.Expr).$(ctx);
  }

  visitStringLit(ctx: P.StringLitContext): AST.StringLit {
    return new AST.StringLit(ctx.text).$(ctx);
  }

  visitContractBlock(ctx: P.ContractBlockContext): AST.ContractBlock {
    return this.vlist<AST.ContractItem>(ctx._body).$(ctx);
  }

  visitStateDefnBlock(ctx: P.StateDefnBlockContext): AST.StateDefnBlock {
    // @ts-ignore
    return new AST.StateDefnBlock(ctx._defns.map((x) => this.visit(x))).$(ctx);
  }

  visitStateDefn_Item(ctx: P.StateDefn_ItemContext): AST.StateDefnItem {
    let name = this.visitIdent(ctx._name);
    let ty = this.visit(ctx._ty) as AST.TypeExpr;
    let default_ = ctx._default ? (this.visit(ctx._default) as AST.Expr) : null;
    return new AST.StateDefnItem(name, ty, default_).$(ctx);
  }

  visitStateDefn_Map(ctx: P.StateDefn_MapContext): AST.StateDefnMap {
    let name = this.visitIdent(ctx._name);
    let mapKeys = this.vlist<AST.MapKeyDefn>(ctx._mapKeys);
    let ty = this.visit(ctx._ty) as AST.TypeExpr;
    let default_ = ctx._default ? (this.visit(ctx._default) as AST.Expr) : null;
    return new AST.StateDefnMap(name, mapKeys, ty, default_).$(ctx);
  }

  visitFnDefn(ctx: P.FnDefnContext): AST.FnDefn {
    let name = this.visitIdent(ctx._name);
    let params = this.visitFnParams(ctx._params);
    let retTy = ctx._retTy ? (this.visit(ctx._retTy) as AST.TypeExpr) : null;
    let body = this.visitBlock(ctx._body);
    let fallible = !!ctx._fallible;
    return new AST.FnDefn(name, fallible, params, retTy, body).$(ctx);
  }

  visitFnParams(ctx: P.FnParamsContext): AST.List<AST.Param> {
    return this.vlist<AST.Param>(ctx._params).$(ctx);
  }

  visitMapKeyDefn(ctx: P.MapKeyDefnContext): AST.MapKeyDefn {
    let name = ctx._name ? this.visitIdent(ctx._name) : null;
    let ty = this.visit(ctx._ty);
    return new AST.MapKeyDefn(name, ty as AST.TypeExpr).$(ctx);
  }

  visitInstantiateDefn(ctx: P.InstantiateDefnContext): AST.InstantiateDefn {
    let params = this.visitFnParams(ctx._params);
    let body = this.visit(ctx._body) as AST.Block;
    return new AST.InstantiateDefn(params, body).$(ctx);
  }

  visitInstantiateDecl(ctx: P.InstantiateDeclContext): AST.InstantiateDecl {
    let params = this.visitFnParams(ctx._params);
    return new AST.InstantiateDecl(params).$(ctx);
  }

  visitExecDefn(ctx: P.ExecDefnContext): AST.ExecDefn {
    let name = this.visitIdent(ctx._name);
    let params = this.visitFnParams(ctx._params);
    let body = this.visit(ctx._body) as AST.Block;
    let tup = !!ctx._tup;
    return new AST.ExecDefn(name, params, body, tup).$(ctx);
  }

  visitExecDecl(ctx: P.ExecDeclContext): AST.ExecDecl {
    let name = this.visitIdent(ctx._name);
    let params = this.visitFnParams(ctx._params);
    let tup = !!ctx._tup;
    return new AST.ExecDecl(name, params, tup).$(ctx);
  }

  visitQueryDefn(ctx: P.QueryDefnContext): AST.QueryDefn {
    let name = this.visitIdent(ctx._name);
    let params = this.visitFnParams(ctx._params);
    let retTy = ctx._retTy ? (this.visit(ctx._retTy) as AST.TypeExpr) : null;
    let body = this.visit(ctx._body) as AST.Block;
    return new AST.QueryDefn(name, params, retTy, body).$(ctx);
  }

  visitQueryDecl(ctx: P.QueryDeclContext): AST.QueryDecl {
    let name = this.visitIdent(ctx._name);
    let params = this.visitFnParams(ctx._params);
    let retTy = ctx._retTy ? (this.visit(ctx._retTy) as AST.TypeExpr) : null;
    return new AST.QueryDecl(name, params, retTy).$(ctx);
  }

  visitErrorDefn(ctx: P.ErrorDefnContext): AST.ErrorDefn {
    let name = this.visitIdent(ctx._defn._name);
    let params = this.visitFnParams(ctx._defn._params);
    return new AST.ErrorDefn(name, params).$(ctx);
  }

  visitStructDefn_fn(ctx: P.StructDefn_fnContext): AST.StructDefn {
    let name = this.visitIdent(ctx._name);
    let params = this.visitFnParams(ctx._params);
    return new AST.StructDefn(name, params).$(ctx);
  }

  visitErrorDefnBlock(ctx: P.ErrorDefnBlockContext): AST.ErrorDefnBlock {
    return new AST.ErrorDefnBlock(
      ctx._defns.map((x) => {
        return this.visitStructDefn_fn(x);
      })
    ).$(ctx);
  }

  visitEventDefn(ctx: P.EventDefnContext): AST.EventDefn {
    let defn = ctx.structDefn_fn();
    let name = this.visitIdent(defn._name);
    let params = this.visitFnParams(defn._params);
    return new AST.EventDefn(name, params).$(ctx);
  }

  visitEventDefnBlock(ctx: P.EventDefnBlockContext): AST.EventDefnBlock {
    return new AST.EventDefnBlock(
      ctx._defns.map((x) => {
        return this.visitStructDefn_fn(x);
      })
    ).$(ctx);
  }

  visitReplyDefn(ctx: P.ReplyDefnContext): AST.ReplyDefn {
    let name = this.visitIdent(ctx._name);
    let params = this.visitFnParams(ctx._params);
    let body = this.visit(ctx._body) as AST.Block;
    return new AST.ReplyDefn(name, params, body).$(ctx);
  }

  visitEnumDefn(ctx: P.EnumDefnContext): AST.EnumDefn {
    let name = this.visitIdent(ctx._name);
    let variants = this.vlist<AST.EnumVariantStruct | AST.EnumVariantUnit>(
      ctx._variants
    );
    return new AST.EnumDefn(name, variants).$(ctx);
  }

  visitVariant_struct(ctx: P.Variant_structContext): AST.EnumVariantStruct {
    let name = this.visitIdent(ctx._name);
    let members = this.visitParamList(ctx._members);
    return new AST.EnumVariantStruct(name, members).$(ctx);
  }

  visitParamList(ctx: P.ParamListContext): AST.List<AST.Param> {
    return this.vlist<AST.Param>(ctx.param()).$(ctx);
  }

  visitVariant_unit(ctx: P.Variant_unitContext): AST.EnumVariantUnit {
    let name = this.visitIdent(ctx._name);
    return new AST.EnumVariantUnit(name).$(ctx);
  }

  visitDebugStmt_(ctx: P.DebugStmt_Context): AST.DebugStmt {
    let stmts: AST.Stmt[] = [];
    let block = ctx.block();
    let stmt = ctx.stmt();
    if (stmt) {
      stmts = [this.visit(stmt) as AST.Stmt];
    }
    if (block) {
      stmts = this.visitBlock(block).children;
    }
    return new AST.DebugStmt(stmts).$(ctx);
  }

  visitDebugStmt(ctx: P.DebugStmtContext): AST.DebugStmt {
    return this.visitDebugStmt_(ctx.debugStmt_());
  }

  visitLetStmt_(ctx: P.LetStmt_Context): AST.LetStmt {
    let binding = this.visit(ctx.let_binding()) as AST.LetBinding;
    let expr_ = ctx.expr();
    let expr = expr_ ? (this.visit(expr_) as AST.Expr) : null;
    return new AST.LetStmt(binding, expr).$(ctx);
  }

  visitLetStmt(ctx: P.LetStmtContext): AST.LetStmt {
    return this.visitLetStmt_(ctx.letStmt_());
  }

  visitConstStmt_(ctx: P.ConstStmt_Context): AST.ConstStmt {
    let ident = this.visitIdent(ctx.ident());
    let expr = this.visit(ctx.expr()) as AST.Expr;
    return new AST.ConstStmt(ident, expr).$(ctx);
  }

  visitConstStmt(ctx: P.ConstStmtContext): AST.ConstStmt {
    return this.visitConstStmt_(ctx.constStmt_());
  }

  visitAssignStmt_(ctx: P.AssignStmt_Context): AST.AssignStmt {
    let lhs = this.visit(ctx._lhs) as AST.AssignLHS;
    let op = ctx._assignOp.text! as AST.AssignOp;
    let rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.AssignStmt(lhs, op, rhs).$(ctx);
  }

  visitAssignStmt(ctx: P.AssignStmtContext): AST.AssignStmt {
    return this.visitAssignStmt_(ctx.assignStmt_());
  }

  visitIfStmt_(ctx: P.IfStmt_Context): AST.IfStmt {
    let pred = this.visit(ctx._pred) as AST.Expr;
    let then = this.visitBlock(ctx._body);
    let else_ = ctx._else_ ? this.visitElseClause(ctx._else_) : null;
    return new AST.IfStmt(pred, then, else_).$(ctx);
  }

  visitElseClause(ctx: P.ElseClauseContext): AST.Block {
    let stmt = ctx.stmt();
    if (stmt) {
      return new AST.Block([this.visit(stmt) as AST.Stmt]).$(ctx);
    } else {
      let block = ctx.block()!;
      return this.visitBlock(block);
    }
  }

  visitBlock(ctx: P.BlockContext): AST.Block {
    return new AST.Block(ctx._body.map((x) => this.visit(x) as AST.Stmt)).$(
      ctx
    );
  }

  visitForStmt_(ctx: P.ForStmt_Context): AST.ForStmt {
    let binding = this.visit(ctx._binding) as AST.LetBinding;
    let iter = this.visit(ctx._iter) as AST.Expr;
    let body = this.visitBlock(ctx._body);
    return new AST.ForStmt(binding, iter, body).$(ctx);
  }

  visitForStmt(ctx: P.ForStmtContext): AST.ForStmt {
    return this.visitForStmt_(ctx.forStmt_());
  }

  visitExecStmt(ctx: P.ExecStmtContext): AST.ExecStmt {
    let expr = this.visit(ctx.expr()) as AST.Expr;
    let options = ctx._options ? this.visitCallOptions(ctx._options) : null;
    return new AST.ExecStmt(expr, options).$(ctx);
  }

  visitDelegateExecStmt(ctx: P.DelegateExecStmtContext): AST.DelegateExecStmt {
    let expr = this.visit(ctx.expr()) as AST.Expr;
    return new AST.DelegateExecStmt(expr).$(ctx);
  }

  visitInstantiateStmt(ctx: P.InstantiateStmtContext): AST.InstantiateStmt {
    let expr = this.visit(ctx.expr()) as AST.Expr;
    let new_ = !!ctx._new;
    let options = ctx._options ? this.visitCallOptions(ctx._options) : null;
    return new AST.InstantiateStmt(expr, new_, options).$(ctx);
  }

  visitCallOptions(ctx: P.CallOptionsContext): AST.List<AST.MemberVal> {
    return this.vlist<AST.MemberVal>(ctx.memberVal()).$(ctx);
  }

  visitEmitStmt(ctx: P.EmitStmtContext): AST.EmitStmt {
    let expr = this.visit(ctx.expr()) as AST.Expr;
    return new AST.EmitStmt(expr).$(ctx);
  }

  visitReturnStmt(ctx: P.ReturnStmtContext): AST.ReturnStmt {
    let value = this.visit(ctx.expr()) as AST.Expr;
    return new AST.ReturnStmt(value).$(ctx);
  }

  visitFailStmt(ctx: P.FailStmtContext): AST.FailStmt {
    let expr = this.visit(ctx.expr()) as AST.Expr;
    return new AST.FailStmt(expr).$(ctx);
  }

  visitExprStmt(ctx: P.ExprStmtContext): AST.Expr {
    return this.visit(ctx.expr()) as AST.Expr;
  }

  visitIdentBinding_(ctx: P.IdentBinding_Context): AST.IdentBinding {
    let name = this.visitIdent(ctx._name);
    let ty = ctx._ty ? (this.visit(ctx._ty) as AST.TypeExpr) : null;
    return new AST.IdentBinding(name, ty).$(ctx);
  }

  visitStructBinding(ctx: P.StructBindingContext): AST.StructBinding {
    let bindings = this.vlist<AST.IdentBinding>(ctx._bindings);
    return new AST.StructBinding(bindings).$(ctx);
  }

  visitTupleBinding(ctx: P.TupleBindingContext): AST.TupleBinding {
    let bindings = this.vlist<AST.IdentBinding>(ctx._bindings);
    return new AST.TupleBinding(bindings).$(ctx);
  }

  visitIdentLHS(ctx: P.IdentLHSContext): AST.IdentLHS {
    const ident = this.visitIdent(ctx.ident());
    return new AST.IdentLHS(ident).$(ctx);
  }

  visitDotLHS(ctx: P.DotLHSContext): AST.DotLHS {
    const obj = this.visit(ctx._obj) as AST.Expr;
    const member = this.visitIdent(ctx._member);
    return new AST.DotLHS(obj, member).$(ctx);
  }

  visitIndexLHS(ctx: P.IndexLHSContext): AST.IndexLHS {
    const obj = this.visit(ctx._obj) as AST.Expr;
    const args = this.vlist<AST.Expr>(ctx._args);
    return new AST.IndexLHS(obj, args).$(ctx);
  }

  visitGroupedExpr(ctx: P.GroupedExprContext): AST.GroupedExpr {
    const expr = this.visit(ctx.expr()) as AST.Expr;
    return new AST.GroupedExpr(expr).$(ctx);
  }

  visitGrouped2Expr(ctx: P.Grouped2ExprContext): AST.Grouped2Expr {
    const expr = this.visit(ctx.expr()) as AST.Expr;
    return new AST.Grouped2Expr(expr).$(ctx);
  }

  visitDotExpr(ctx: P.DotExprContext): AST.DotExpr {
    const obj = this.visit(ctx.expr()) as AST.Expr;
    let unwrap: AST.UnwrapOp | null = null;
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

  visitAsExpr(ctx: P.AsExprContext): AST.AsExpr {
    const expr = this.visit(ctx.expr()) as AST.Expr;
    const ty = this.visit(ctx._ty) as AST.TypeExpr;
    return new AST.AsExpr(expr, ty).$(ctx);
  }

  visitIndexExpr(ctx: P.IndexExprContext): AST.IndexExpr {
    const obj = this.visit(ctx.expr()) as AST.Expr;
    const args = new AST.List<AST.Arg>(
      ctx._args.map((arg) => this.visitArg(arg))
    );
    return new AST.IndexExpr(obj, args).$(ctx);
  }

  visitDColonExpr(ctx: P.DColonExprContext): AST.DColonExpr {
    const obj = this.visit(ctx.expr()) as AST.Expr;
    const member = this.visitIdent(ctx._member);
    return new AST.DColonExpr(obj, member).$(ctx);
  }

  visitTypeDColonExpr(ctx: P.TypeDColonExprContext): AST.DColonExpr {
    const obj = this.visit(ctx.typeExpr()) as AST.TypeExpr;
    const ident = this.visitIdent(ctx._member);
    return new AST.DColonExpr(obj, ident).$(ctx);
  }

  visitArg(ctx: P.ArgContext): AST.Arg {
    const value = this.visit(ctx._value) as AST.Expr;
    const name = ctx._name ? this.visitIdent(ctx._name) : null;
    return new AST.Arg(name, value).$(ctx);
  }

  visitFnCallExpr(ctx: P.FnCallExprContext): AST.FnCallExpr {
    const func = this.visit(ctx.expr()) as AST.Expr;
    const fallible = !!ctx._fallible;
    const args = new AST.List<AST.Arg>(
      ctx._args.map((arg) => this.visitArg(arg))
    );
    return new AST.FnCallExpr(func, fallible, args).$(ctx);
  }

  visitTypeFnCallExpr(ctx: P.TypeFnCallExprContext): AST.FnCallExpr {
    const func = this.visit(ctx.typeExpr()) as AST.TypeExpr;
    const fallible = !!ctx._fallible;
    const args = new AST.List<AST.Arg>(
      ctx._args.map((arg) => this.visitArg(arg))
    );
    return new AST.FnCallExpr(func, fallible, args).$(ctx);
  }

  visitMulExpr(ctx: P.MulExprContext): AST.BinOpExpr {
    const lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    const op = ctx._op.text as AST.Op;
    const rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.BinOpExpr(lhs, op, rhs).$(ctx);
  }

  visitAddExpr(ctx: P.AddExprContext): AST.BinOpExpr {
    const lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    const op = ctx._op.text as AST.Op;
    const rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.BinOpExpr(lhs, op, rhs).$(ctx);
  }

  visitCompExpr(ctx: P.CompExprContext): AST.BinOpExpr {
    const lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    const op = ctx._op.text as AST.Op;
    const rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.BinOpExpr(lhs, op, rhs).$(ctx);
  }

  visitEqExpr(ctx: P.EqExprContext): AST.BinOpExpr {
    const lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    const op = ctx._op.text as AST.Op;
    const rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.BinOpExpr(lhs, op, rhs).$(ctx);
  }

  visitNoneCheckExpr(ctx: P.NoneCheckExprContext): AST.NoneCheckExpr {
    const obj = this.visit(ctx.expr()) as AST.Expr;
    return new AST.NoneCheckExpr(obj).$(ctx);
  }

  visitIsExpr(ctx: P.IsExprContext): AST.IsExpr {
    const lhs = this.visit(ctx.expr()) as AST.Expr;
    const negative = !!ctx._negative;
    const rhs = this.visit(ctx._rhs) as AST.TypeExpr;
    return new AST.IsExpr(negative, lhs, rhs).$(ctx);
  }

  visitInExpr(ctx: P.InExprContext): AST.InExpr {
    const lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    const rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.InExpr(lhs, rhs).$(ctx);
  }

  visitShortTryExpr(ctx: P.ShortTryExprContext): AST.TryCatchElseExpr {
    let lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    let rhs = this.visit(ctx._rhs) as AST.Expr;
    let body = new AST.Block([lhs]).$(ctx.expr()[0]);
    let else_ = new AST.Block([rhs]).$(ctx._rhs);
    return new AST.TryCatchElseExpr(body, AST.List.empty(), else_).$(ctx);
  }

  visitTryCatchElseExpr_(
    ctx: P.TryCatchElseExpr_Context
  ): AST.TryCatchElseExpr {
    let body = this.visit(ctx._body) as AST.Block;
    let catch_ = this.vlist<AST.CatchClause>(ctx._catches);
    let else_ = ctx._else_ ? this.visitElseClause(ctx._else_) : null;
    return new AST.TryCatchElseExpr(body, catch_, else_).$(ctx);
  }

  visitCatch(ctx: P.CatchContext): AST.CatchClause {
    let ty = this.visit(ctx._ty) as AST.TypeExpr;
    let body = this.visitBlock(ctx._body);
    return new AST.CatchClause(null, ty, body).$(ctx);
  }

  visitCatchBind(ctx: P.CatchBindContext): AST.CatchClause {
    let name = this.visitIdent(ctx._name);
    let ty = this.visit(ctx._ty) as AST.TypeExpr;
    let body = this.visitBlock(ctx._body);
    return new AST.CatchClause(name, ty, body).$(ctx);
  }

  visitAndExpr(ctx: P.AndExprContext): AST.AndExpr {
    const lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    const rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.AndExpr(lhs, rhs).$(ctx);
  }

  visitOrExpr(ctx: P.OrExprContext): AST.OrExpr {
    const lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    const rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.OrExpr(lhs, rhs).$(ctx);
  }

  visitQueryNowExpr(ctx: P.QueryNowExprContext): AST.QueryNowExpr {
    const obj = this.visit(ctx.expr()) as AST.Expr;
    return new AST.QueryNowExpr(obj).$(ctx);
  }

  visitFailExpr(ctx: P.FailExprContext): AST.FailExpr {
    let expr_ = ctx.expr();
    const obj = this.visit(expr_) as AST.Expr;
    return new AST.FailExpr(obj).$(ctx);
  }

  visitClosure(ctx: P.ClosureContext): AST.Closure {
    let fallible = !!ctx._fallible;
    let params = this.visitClosureParams(ctx._params);
    let retTy = ctx._retTy ? (this.visit(ctx._retTy) as AST.TypeExpr) : null;
    let body: AST.Block;
    if (ctx.stmt()) {
      body = new AST.Block([this.visit(ctx.stmt()!) as AST.Stmt]).$(
        ctx.stmt()!
      );
    } else {
      body = this.visitBlock(ctx.block()!);
    }
    return new AST.Closure(fallible, params, retTy, body).$(ctx);
  }

  visitTupleExpr(ctx: P.TupleExprContext): AST.TupleExpr {
    return new AST.TupleExpr(this.vlist<AST.Expr>(ctx.expr())).$(ctx);
  }

  visitClosureParams(ctx: P.ClosureParamsContext): AST.List<AST.Param> {
    return this.vlist<AST.Param>(ctx._params).$(ctx);
  }

  visitMemberVal(ctx: P.MemberValContext): AST.MemberVal {
    let name = this.visitIdent(ctx._name);
    let value = ctx._value ? (this.visit(ctx._value) as Expr) : null;
    return new AST.MemberVal(name, value).$(ctx);
  }

  visitStructExpr(ctx: P.StructExprContext): AST.StructExpr {
    let ty = ctx.typeExpr()
      ? (this.visit(ctx.typeExpr()!) as AST.TypeExpr)
      : null;
    let memberVals = ctx._members.map((x) => this.visitMemberVal(x));
    return new AST.StructExpr(ty, new AST.List(memberVals)).$(ctx);
  }

  visitUnitVariantExpr(ctx: P.UnitVariantExprContext): AST.UnitVariantExpr {
    let ty = this.visitTypeVariant(ctx.typeVariant());
    return new AST.UnitVariantExpr(ty).$(ctx);
  }

  visitIntLit(ctx: P.IntLitContext): AST.IntLit {
    return new AST.IntLit(ctx.text).$(ctx);
  }

  visitDecLit(ctx: P.DecLitContext): AST.DecLit {
    return new AST.DecLit(ctx.text).$(ctx);
  }

  visitBoolLit(ctx: P.BoolLitContext): AST.BoolLit {
    return new AST.BoolLit(ctx.text).$(ctx);
  }

  visitNoneLit(ctx: P.NoneLitContext): AST.NoneLit {
    return new AST.NoneLit().$(ctx);
  }

  visitIdent(ctx: P.IdentContext): AST.Ident {
    return new AST.Ident(ctx.text).$(ctx);
  }

  // Create a virtual AST List node of AST nodes from a list of parser contexts
  // Used for when the Node actually contains a list of other nodes rather than
  // as a child.
  protected vlist<T extends AST.AST>(ctx: ParserRuleContext[]): AST.List<T> {
    return AST.List.virtual(ctx.map((c) => this.visit(c) as T));
  }

  protected defaultResult(): AST.AST {
    return new AST.AST();
  }
}
