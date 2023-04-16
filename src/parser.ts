import {
  AsExprContext,
  AssignStmt_Context,
  AssignStmtContext,
  BlockContext,
  ConstStmt_Context,
  ConstStmtContext,
  ContractBlockContext,
  ContractDefnContext,
  CWScriptParser as ANTLRCWScriptParser,
  DColonExprContext,
  DelegateExecStmtContext,
  DotExprContext,
  DotLHSContext,
  EmitStmtContext,
  EnumDefnContext,
  ErrorDefnBlockContext,
  ErrorDefnContext,
  EventDefnBlockContext,
  EventDefnContext,
  ExecDeclContext,
  ExecDefnContext,
  ExecStmtContext,
  ExprStmtContext,
  FailStmtContext,
  FnDefnContext,
  ForStmt_Context,
  ForStmtContext,
  Grouped2ExprContext,
  GroupedExprContext,
  IdentBinding_Context,
  IdentContext,
  IdentLHSContext,
  IfStmt_Context,
  ImportAllStmtContext,
  ImportItemsStmtContext,
  IndexExprContext,
  IndexLHSContext,
  InstantiateDeclContext,
  InstantiateDefnContext,
  InstantiateStmtContext,
  InterfaceDefnContext,
  LetStmt_Context,
  LetStmtContext,
  MapKeyDefnContext,
  ParamContext,
  QueryDeclContext,
  QueryDefnContext,
  ReplyDefnContext,
  ReturnStmtContext,
  SourceFileContext,
  StateDefnBlockContext,
  StateDefn_MapContext,
  StateDefn_ItemContext,
  StringLitContext,
  StructBindingContext,
  StructDefn_fnContext,
  TupleBindingContext,
  TypeDColonExprContext,
  TypePathContext,
  Variant_structContext,
  Variant_unitContext,
  FnCallExprContext,
  TypeFnCallExprContext,
  MulExprContext,
  AddExprContext,
  ElseClauseContext,
  CompExprContext,
  EqExprContext,
  NoneCheckExprContext,
  IsExprContext,
  InExprContext,
  ShortTryExprContext,
  CallOptionsContext,
  FnParamsContext,
  ParamListContext,
  TryCatchElseExpr_Context,
  CatchContext,
  CatchBindContext,
  AndExprContext,
  OrExprContext,
  QueryNowExprContext,
  FailExprContext,
  ClosureContext,
  ClosureParamsContext,
  TupleExprContext,
  StructExprContext,
  UnitVariantExprContext,
  IntLitContext,
  DecLitContext,
  BoolLitContext,
  NoneLitContext,
  OptionTContext,
  TypeLensContext,
  ListTContext,
  TupleTContext,
  StructDefnContext,
  TypeAliasDefnContext,
  TypeVariantContext,
} from './grammar/CWScriptParser';
import { CWScriptLexer as ANTLRCWScriptLexer } from './grammar/CWScriptLexer';
import { CharStreams, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { CWScriptParserVisitor as ANTLRCWScriptParserVisitor } from 'grammar/CWScriptParserVisitor';
import * as AST from './ast';

export class CWScriptASTBuilderVisitor
  extends AbstractParseTreeVisitor<AST.AST>
  implements ANTLRCWScriptParserVisitor<AST.AST>
{
  // Stmts
  visitSourceFile(ctx: SourceFileContext): AST.SourceFile {
    let body = ctx.topLevelStmt().map((x) => this.visit(x) as AST.TopLevelStmt);
    return new AST.SourceFile(body).$(ctx);
  }

  visitContractDefn(ctx: ContractDefnContext): AST.ContractDefn {
    let name = this.visitIdent(ctx._name);
    let body = this.visitContractBlock(ctx._body);
    let base = ctx._base ? this.visitTypePath(ctx._base) : null;
    let interfaces = ctx._interfaces.map((x) => this.visitTypePath(x));
    return new AST.ContractDefn(name, body, base, new AST.List(interfaces)).$(
      ctx
    );
  }

  visitTypePath(ctx: TypePathContext): AST.TypePath {
    return new AST.TypePath(this.vlist<AST.Ident>(ctx._segments)).$(ctx);
  }

  visitTypeVariant(ctx: TypeVariantContext): AST.TypeVariant {
    let path = this.visitTypePath(ctx.typePath());
    let expr = ctx.expr() ? (this.visit(ctx.expr()!) as AST.Expr) : null;
    let variant = this.visitIdent(ctx._variant);
    return new AST.TypeVariant(path, expr, variant).$(ctx);
  }

  visitTypeLens(ctx: TypeLensContext): AST.TypeLens {
    let scope = ctx._scope.text! as AST.Scope;
    let ty = this.visitTypePath(ctx.typePath());
    return new AST.TypeLens(scope, ty).$(ctx);
  }

  visitOptionT(ctx: OptionTContext): AST.OptionT {
    let ty = this.visit(ctx.typeExpr()) as AST.TypeExpr;
    return new AST.OptionT(ty).$(ctx);
  }

  visitListT(ctx: ListTContext): AST.ListT {
    let ty = this.visit(ctx.typeExpr()) as AST.TypeExpr;
    let len = ctx._len ? Number.parseInt(ctx._len.text!) : null;
    return new AST.ListT(ty, len).$(ctx);
  }

  visitTupleT(ctx: TupleTContext): AST.TupleT {
    return new AST.TupleT(this.vlist<AST.TypeExpr>(ctx._items)).$(ctx);
  }

  visitStructDefn(ctx: StructDefnContext): AST.StructDefn {
    let name = ctx._name ? this.visitIdent(ctx._name) : null;
    let members = this.vlist<AST.Param>(ctx._members);
    return new AST.StructDefn(name, members).$(ctx);
  }

  visitTypeAliasDefn(ctx: TypeAliasDefnContext): AST.TypeAliasDefn {
    let name = this.visitIdent(ctx._name);
    let value = this.visit(ctx._value) as AST.TypeExpr;
    return new AST.TypeAliasDefn(name, value).$(ctx);
  }

  visitInterfaceDefn(ctx: InterfaceDefnContext): AST.InterfaceDefn {
    let name = this.visitIdent(ctx._name);
    let body = this.visitContractBlock(ctx._body);
    let base = ctx._base ? this.visitTypePath(ctx._base) : null;
    return new AST.InterfaceDefn(name, body, base).$(ctx);
  }

  visitImportAllStmt(ctx: ImportAllStmtContext): AST.ImportAllStmt {
    let src = ctx._src.text!;
    return new AST.ImportAllStmt(src).$(ctx);
  }

  visitImportItemsStmt(ctx: ImportItemsStmtContext): AST.ImportItemsStmt {
    let items = ctx._items.map((x) => this.visitIdent(x));
    let src = ctx._src.text!;
    return new AST.ImportItemsStmt(items, src).$(ctx);
  }

  visitParam(ctx: ParamContext): AST.Param {
    let name = this.visitIdent(ctx._name);
    let ty = ctx._ty ? (this.visit(ctx._ty) as AST.TypeExpr) : null;
    let optional = !!ctx._optional;
    let default_ = ctx._default ? this.visit(ctx._default) : null;
    return new AST.Param(name, ty, optional, default_ as AST.Expr).$(ctx);
  }

  visitStringLit(ctx: StringLitContext): AST.StringLit {
    return new AST.StringLit(ctx.text).$(ctx);
  }

  visitContractBlock(ctx: ContractBlockContext): AST.ContractBlock {
    return this.vlist<AST.ContractItem>(ctx._body).$(ctx);
  }

  visitStateDefnBlock(ctx: StateDefnBlockContext): AST.StateDefnBlock {
    // @ts-ignore
    return new AST.StateDefnBlock(ctx._defns.map((x) => this.visit(x))).$(ctx);
  }

  visitStateDefn_Item(ctx: StateDefn_ItemContext): AST.StateDefnItem {
    let name = this.visitIdent(ctx._name);
    let ty = this.visit(ctx._ty) as AST.TypeExpr;
    let default_ = ctx._default ? (this.visit(ctx._default) as AST.Expr) : null;
    return new AST.StateDefnItem(name, ty, default_).$(ctx);
  }

  visitStateDefn_Map(ctx: StateDefn_MapContext): AST.StateDefnMap {
    let name = this.visitIdent(ctx._name);
    let mapKeys = this.vlist<AST.MapKeyDefn>(ctx._mapKeys);
    let ty = this.visit(ctx._ty) as AST.TypeExpr;
    let default_ = ctx._default ? (this.visit(ctx._default) as AST.Expr) : null;
    return new AST.StateDefnMap(name, mapKeys, ty, default_).$(ctx);
  }

  visitFnDefn(ctx: FnDefnContext): AST.FnDefn {
    let name = this.visitIdent(ctx._name);
    let params = this.visitFnParams(ctx._params);
    let retTy = ctx._retTy ? (this.visit(ctx._retTy) as AST.TypeExpr) : null;
    let body = this.visitBlock(ctx._body);
    let fallible = !!ctx._fallible;
    return new AST.FnDefn(name, fallible, params, retTy, body).$(ctx);
  }

  visitFnParams(ctx: FnParamsContext): AST.List<AST.Param> {
    return this.vlist<AST.Param>(ctx._params).$(ctx);
  }

  visitMapKeyDefn(ctx: MapKeyDefnContext): AST.MapKeyDefn {
    let name = ctx._name ? this.visitIdent(ctx._name) : null;
    let ty = this.visit(ctx._ty);
    return new AST.MapKeyDefn(name, ty as AST.TypeExpr).$(ctx);
  }

  visitInstantiateDefn(ctx: InstantiateDefnContext): AST.InstantiateDefn {
    let params = this.visitFnParams(ctx._params);
    let body = this.visit(ctx._body) as AST.Block;
    return new AST.InstantiateDefn(params, body).$(ctx);
  }

  visitInstantiateDecl(ctx: InstantiateDeclContext): AST.InstantiateDecl {
    let params = this.visitFnParams(ctx._params);
    return new AST.InstantiateDecl(params).$(ctx);
  }

  visitExecDefn(ctx: ExecDefnContext): AST.ExecDefn {
    let name = this.visitIdent(ctx._name);
    let params = this.visitFnParams(ctx._params);
    let body = this.visit(ctx._body) as AST.Block;
    let tup = !!ctx._tup;
    return new AST.ExecDefn(name, params, body, tup).$(ctx);
  }

  visitExecDecl(ctx: ExecDeclContext): AST.ExecDecl {
    let name = this.visitIdent(ctx._name);
    let params = this.visitFnParams(ctx._params);
    let tup = !!ctx._tup;
    return new AST.ExecDecl(name, params, tup).$(ctx);
  }

  visitQueryDefn(ctx: QueryDefnContext): AST.QueryDefn {
    let name = this.visitIdent(ctx._name);
    let params = this.visitFnParams(ctx._params);
    let retTy = ctx._retTy ? (this.visit(ctx._retTy) as AST.TypeExpr) : null;
    let body = this.visit(ctx._body) as AST.Block;
    return new AST.QueryDefn(name, params, retTy, body).$(ctx);
  }

  visitQueryDecl(ctx: QueryDeclContext): AST.QueryDecl {
    let name = this.visitIdent(ctx._name);
    let params = this.visitFnParams(ctx._params);
    let retTy = ctx._retTy ? (this.visit(ctx._retTy) as AST.TypeExpr) : null;
    return new AST.QueryDecl(name, params, retTy).$(ctx);
  }

  visitErrorDefn(ctx: ErrorDefnContext): AST.ErrorDefn {
    let name = this.visitIdent(ctx._defn._name);
    let params = this.visitFnParams(ctx._defn._params);
    return new AST.ErrorDefn(name, params).$(ctx);
  }

  visitStructDefn_fn(ctx: StructDefn_fnContext): AST.StructDefn {
    let name = this.visitIdent(ctx._name);
    let params = this.visitFnParams(ctx._params);
    return new AST.StructDefn(name, params).$(ctx);
  }

  visitErrorDefnBlock(ctx: ErrorDefnBlockContext): AST.ErrorDefnBlock {
    return new AST.ErrorDefnBlock(
      ctx._defns.map((x) => {
        return this.visitStructDefn_fn(x);
      })
    ).$(ctx);
  }

  visitEventDefn(ctx: EventDefnContext): AST.EventDefn {
    let defn = ctx.structDefn_fn();
    let name = this.visitIdent(defn._name);
    let params = this.visitFnParams(defn._params);
    return new AST.EventDefn(name, params).$(ctx);
  }

  visitEventDefnBlock(ctx: EventDefnBlockContext): AST.EventDefnBlock {
    return new AST.EventDefnBlock(
      ctx._defns.map((x) => {
        return this.visitStructDefn_fn(x);
      })
    ).$(ctx);
  }

  visitReplyDefn(ctx: ReplyDefnContext): AST.ReplyDefn {
    let name = this.visitIdent(ctx._name);
    let params = this.visitFnParams(ctx._params);
    let body = this.visit(ctx._body) as AST.Block;
    return new AST.ReplyDefn(name, params, body).$(ctx);
  }

  visitEnumDefn(ctx: EnumDefnContext): AST.EnumDefn {
    let name = this.visitIdent(ctx._name);
    let variants = this.vlist<AST.EnumVariantStruct | AST.EnumVariantUnit>(
      ctx._variants
    );
    return new AST.EnumDefn(name, variants).$(ctx);
  }

  visitVariant_struct(ctx: Variant_structContext): AST.EnumVariantStruct {
    let name = this.visitIdent(ctx._name);
    let members = this.visitParamList(ctx._members);
    return new AST.EnumVariantStruct(name, members).$(ctx);
  }

  visitParamList(ctx: ParamListContext): AST.List<AST.Param> {
    return this.vlist<AST.Param>(ctx.param()).$(ctx);
  }

  visitVariant_unit(ctx: Variant_unitContext): AST.EnumVariantUnit {
    let name = this.visitIdent(ctx._name);
    return new AST.EnumVariantUnit(name).$(ctx);
  }

  visitLetStmt_(ctx: LetStmt_Context): AST.LetStmt {
    let binding = this.visit(ctx.let_binding()) as AST.LetBinding;
    let expr_ = ctx.expr();
    let expr = expr_ ? (this.visit(expr_) as AST.Expr) : null;
    return new AST.LetStmt(binding, expr).$(ctx);
  }

  visitLetStmt(ctx: LetStmtContext): AST.LetStmt {
    return this.visitLetStmt_(ctx.letStmt_());
  }

  visitConstStmt_(ctx: ConstStmt_Context): AST.ConstStmt {
    let ident = this.visitIdent(ctx.ident());
    let expr = this.visit(ctx.expr()) as AST.Expr;
    return new AST.ConstStmt(ident, expr).$(ctx);
  }

  visitConstStmt(ctx: ConstStmtContext): AST.ConstStmt {
    return this.visitConstStmt_(ctx.constStmt_());
  }

  visitAssignStmt_(ctx: AssignStmt_Context): AST.AssignStmt {
    let lhs = this.visit(ctx._lhs) as AST.AssignLHS;
    let op = ctx._assignOp.text! as AST.AssignOp;
    let rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.AssignStmt(lhs, op, rhs).$(ctx);
  }

  visitAssignStmt(ctx: AssignStmtContext): AST.AssignStmt {
    return this.visitAssignStmt_(ctx.assignStmt_());
  }

  visitIfStmt_(ctx: IfStmt_Context): AST.IfStmt {
    let pred = this.visit(ctx._pred) as AST.Expr;
    let then = this.visitBlock(ctx._body);
    let else_ = ctx._else_ ? this.visitElseClause(ctx._else_) : null;
    return new AST.IfStmt(pred, then, else_).$(ctx);
  }

  visitElseClause(ctx: ElseClauseContext): AST.Block {
    let stmt = ctx.stmt();
    if (stmt) {
      return new AST.Block([this.visit(stmt) as AST.Stmt]).$(ctx);
    } else {
      let block = ctx.block()!;
      return this.visitBlock(block);
    }
  }

  visitBlock(ctx: BlockContext): AST.Block {
    return new AST.Block(ctx._body.map((x) => this.visit(x) as AST.Stmt)).$(
      ctx
    );
  }

  visitForStmt_(ctx: ForStmt_Context): AST.ForStmt {
    let binding = this.visit(ctx._binding) as AST.LetBinding;
    let iter = this.visit(ctx._iter) as AST.Expr;
    let body = this.visitBlock(ctx._body);
    return new AST.ForStmt(binding, iter, body).$(ctx);
  }

  visitForStmt(ctx: ForStmtContext): AST.ForStmt {
    return this.visitForStmt_(ctx.forStmt_());
  }

  visitExecStmt(ctx: ExecStmtContext): AST.ExecStmt {
    let expr = this.visit(ctx.expr()) as AST.Expr;
    let options = ctx._options ? this.visitCallOptions(ctx._options) : null;
    return new AST.ExecStmt(expr, options).$(ctx);
  }

  visitDelegateExecStmt(ctx: DelegateExecStmtContext): AST.DelegateExecStmt {
    let expr = this.visit(ctx.expr()) as AST.Expr;
    return new AST.DelegateExecStmt(expr).$(ctx);
  }

  visitInstantiateStmt(ctx: InstantiateStmtContext): AST.InstantiateStmt {
    let expr = this.visit(ctx.expr()) as AST.Expr;
    let new_ = !!ctx._new;
    let options = ctx._options ? this.visitCallOptions(ctx._options) : null;
    return new AST.InstantiateStmt(expr, new_, options).$(ctx);
  }

  visitCallOptions(ctx: CallOptionsContext): AST.List<AST.MemberVal> {
    return this.vlist<AST.MemberVal>(ctx.memberVal()).$(ctx);
  }

  visitEmitStmt(ctx: EmitStmtContext): AST.EmitStmt {
    let expr = this.visit(ctx.expr()) as AST.Expr;
    return new AST.EmitStmt(expr).$(ctx);
  }

  visitReturnStmt(ctx: ReturnStmtContext): AST.ReturnStmt {
    let value = this.visit(ctx.expr()) as AST.Expr;
    return new AST.ReturnStmt(value).$(ctx);
  }

  visitFailStmt(ctx: FailStmtContext): AST.FailStmt {
    let expr = this.visit(ctx.expr()) as AST.Expr;
    return new AST.FailStmt(expr).$(ctx);
  }

  visitExprStmt(ctx: ExprStmtContext): AST.Expr {
    return this.visit(ctx.expr()) as AST.Expr;
  }

  visitIdentBinding_(ctx: IdentBinding_Context): AST.IdentBinding {
    let name = this.visitIdent(ctx._name);
    let ty = ctx._ty ? (this.visit(ctx._ty) as AST.TypeExpr) : null;
    return new AST.IdentBinding(name, ty).$(ctx);
  }

  visitStructBinding(ctx: StructBindingContext): AST.StructBinding {
    let bindings = this.vlist<AST.IdentBinding>(ctx._bindings);
    return new AST.StructBinding(bindings).$(ctx);
  }

  visitTupleBinding(ctx: TupleBindingContext): AST.TupleBinding {
    let bindings = this.vlist<AST.IdentBinding>(ctx._bindings);
    return new AST.TupleBinding(bindings).$(ctx);
  }

  visitIdentLHS(ctx: IdentLHSContext): AST.IdentLHS {
    const ident = this.visitIdent(ctx.ident());
    return new AST.IdentLHS(ident).$(ctx);
  }

  visitDotLHS(ctx: DotLHSContext): AST.DotLHS {
    const obj = this.visit(ctx._obj) as AST.Expr;
    const member = this.visitIdent(ctx._member);
    return new AST.DotLHS(obj, member).$(ctx);
  }

  visitIndexLHS(ctx: IndexLHSContext): AST.IndexLHS {
    const obj = this.visit(ctx._obj) as AST.Expr;
    const args = this.vlist<AST.Arg>(ctx._args);
    return new AST.IndexLHS(obj, args).$(ctx);
  }

  visitGroupedExpr(ctx: GroupedExprContext): AST.GroupedExpr {
    const expr = this.visit(ctx.expr()) as AST.Expr;
    return new AST.GroupedExpr(expr).$(ctx);
  }

  visitGrouped2Expr(ctx: Grouped2ExprContext): AST.Grouped2Expr {
    const expr = this.visit(ctx.expr()) as AST.Expr;
    return new AST.Grouped2Expr(expr).$(ctx);
  }

  visitDotExpr(ctx: DotExprContext): AST.DotExpr {
    const obj = this.visit(ctx.expr()) as AST.Expr;
    const member = this.visitIdent(ctx._member);
    return new AST.DotExpr(obj, member).$(ctx);
  }

  visitAsExpr(ctx: AsExprContext): AST.AsExpr {
    const expr = this.visit(ctx.expr()) as AST.Expr;
    const ty = this.visit(ctx._ty) as AST.TypeExpr;
    return new AST.AsExpr(expr, ty).$(ctx);
  }

  visitIndexExpr(ctx: IndexExprContext): AST.IndexExpr {
    const obj = this.visit(ctx.expr()) as AST.Expr;
    const args = this.vlist<AST.Arg>(ctx._args);
    return new AST.IndexExpr(obj, args).$(ctx);
  }

  visitDColonExpr(ctx: DColonExprContext): AST.DColonExpr {
    const obj = this.visit(ctx.expr()) as AST.Expr;
    const member = this.visitIdent(ctx._member);
    return new AST.DColonExpr(obj, member).$(ctx);
  }

  visitTypeDColonExpr(ctx: TypeDColonExprContext): AST.DColonExpr {
    const obj = this.visit(ctx.typeExpr()) as AST.TypeExpr;
    const ident = this.visitIdent(ctx._member);
    return new AST.DColonExpr(obj, ident).$(ctx);
  }

  visitFnCallExpr(ctx: FnCallExprContext): AST.FnCallExpr {
    const func = this.visit(ctx.expr()) as AST.Expr;
    const fallible = !!ctx._fallible;
    const args = this.vlist<AST.Arg>(ctx._args);
    return new AST.FnCallExpr(func, fallible, args).$(ctx);
  }

  visitTypeFnCallExpr(ctx: TypeFnCallExprContext): AST.FnCallExpr {
    const func = this.visit(ctx.typeExpr()) as AST.TypeExpr;
    const fallible = !!ctx._fallible;
    const args = this.vlist<AST.Arg>(ctx._args);
    return new AST.FnCallExpr(func, fallible, args).$(ctx);
  }

  visitMulExpr(ctx: MulExprContext): AST.BinOp {
    const lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    const op = ctx._op.text as AST.Op;
    const rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.BinOp(lhs, op, rhs).$(ctx);
  }

  visitAddExpr(ctx: AddExprContext): AST.BinOp {
    const lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    const op = ctx._op.text as AST.Op;
    const rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.BinOp(lhs, op, rhs).$(ctx);
  }

  visitCompExpr(ctx: CompExprContext): AST.BinOp {
    const lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    const op = ctx._op.text as AST.Op;
    const rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.BinOp(lhs, op, rhs).$(ctx);
  }

  visitEqExpr(ctx: EqExprContext): AST.BinOp {
    const lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    const op = ctx._op.text as AST.Op;
    const rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.BinOp(lhs, op, rhs).$(ctx);
  }

  visitNoneCheckExpr(ctx: NoneCheckExprContext): AST.NoneCheckExpr {
    const obj = this.visit(ctx.expr()) as AST.Expr;
    return new AST.NoneCheckExpr(obj).$(ctx);
  }

  visitIsExpr(ctx: IsExprContext): AST.IsExpr {
    const lhs = this.visit(ctx.expr()) as AST.Expr;
    const rhs = this.visit(ctx._rhs) as AST.TypeExpr;
    return new AST.IsExpr(lhs, rhs).$(ctx);
  }

  visitInExpr(ctx: InExprContext): AST.BinOp {
    const lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    const rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.BinOp(lhs, AST.Op.IN, rhs).$(ctx);
  }

  visitShortTryExpr(ctx: ShortTryExprContext): AST.TryCatchElseExpr {
    let lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    let rhs = this.visit(ctx._rhs) as AST.Expr;
    let body = new AST.Block([lhs]).$(ctx.expr()[0]);
    let else_ = new AST.Block([rhs]).$(ctx._rhs);
    return new AST.TryCatchElseExpr(body, AST.List.empty(), else_).$(ctx);
  }

  visitTryCatchElseExpr_(ctx: TryCatchElseExpr_Context): AST.TryCatchElseExpr {
    let body = this.visit(ctx._body) as AST.Block;
    let catch_ = this.vlist<AST.CatchClause>(ctx._catches);
    let else_ = ctx._else_ ? this.visitElseClause(ctx._else_) : null;
    return new AST.TryCatchElseExpr(body, catch_, else_).$(ctx);
  }

  visitCatch(ctx: CatchContext): AST.CatchClause {
    let ty = this.visit(ctx._ty) as AST.TypeExpr;
    let body = this.visitBlock(ctx._body);
    return new AST.CatchClause(null, ty, body).$(ctx);
  }

  visitCatchBind(ctx: CatchBindContext): AST.CatchClause {
    let name = this.visitIdent(ctx._name);
    let ty = this.visit(ctx._ty) as AST.TypeExpr;
    let body = this.visitBlock(ctx._body);
    return new AST.CatchClause(name, ty, body).$(ctx);
  }

  visitAndExpr(ctx: AndExprContext): AST.BinOp {
    const lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    const rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.BinOp(lhs, AST.Op.AND, rhs).$(ctx);
  }

  visitOrExpr(ctx: OrExprContext): AST.BinOp {
    const lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    const rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.BinOp(lhs, AST.Op.OR, rhs).$(ctx);
  }

  visitQueryNowExpr(ctx: QueryNowExprContext): AST.QueryNowExpr {
    const obj = this.visit(ctx.expr()) as AST.Expr;
    return new AST.QueryNowExpr(obj).$(ctx);
  }

  visitFailExpr(ctx: FailExprContext): AST.FailExpr {
    let expr_ = ctx.expr();
    const obj = expr_ ? (this.visit(expr_) as AST.Expr) : null;
    return new AST.FailExpr(obj).$(ctx);
  }

  visitClosure(ctx: ClosureContext): AST.Closure {
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
    return new AST.Closure(params, retTy, body).$(ctx);
  }

  visitTupleExpr(ctx: TupleExprContext): AST.TupleExpr {
    return new AST.TupleExpr(this.vlist<AST.Expr>(ctx.expr())).$(ctx);
  }

  visitClosureParams(ctx: ClosureParamsContext): AST.List<AST.Param> {
    return this.vlist<AST.Param>(ctx._params).$(ctx);
  }

  visitStructExpr(ctx: StructExprContext): AST.StructExpr {
    let ty = ctx.typeExpr()
      ? (this.visit(ctx.typeExpr()!) as AST.TypeExpr)
      : null;
    let memberVals = this.vlist<AST.MemberVal>(ctx._members);
    return new AST.StructExpr(ty, memberVals).$(ctx);
  }

  visitUnitVariantExpr(ctx: UnitVariantExprContext): AST.UnitVariantExpr {
    let ty = this.visitTypeVariant(ctx.typeVariant());
    return new AST.UnitVariantExpr(ty).$(ctx);
  }

  visitIntLit(ctx: IntLitContext): AST.IntLit {
    return new AST.IntLit(ctx.text).$(ctx);
  }

  visitDecLit(ctx: DecLitContext): AST.DecLit {
    return new AST.DecLit(ctx.text).$(ctx);
  }

  visitBoolLit(ctx: BoolLitContext): AST.BoolLit {
    return new AST.BoolLit(ctx.text).$(ctx);
  }

  visitNoneLit(ctx: NoneLitContext): AST.NoneLit {
    return new AST.NoneLit().$(ctx);
  }

  visitIdent(ctx: IdentContext): AST.Ident {
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

export class CWScriptParser {
  public static parse(sourceInput: string): AST.SourceFile {
    let antlrLexer = new ANTLRCWScriptLexer(
      CharStreams.fromString(sourceInput)
    );
    let antlrParser = new ANTLRCWScriptParser(
      new CommonTokenStream(antlrLexer)
    );

    let tree = antlrParser.sourceFile();
    let visitor = new CWScriptASTBuilderVisitor();
    return visitor.visitSourceFile(tree);
  }
}

import { readFileSync, writeFileSync } from 'fs';
import {
  Arg,
  CWScriptInterpreter,
  STDLIB,
  Address,
  String,
  U8,
  U128,
  ListType,
} from './interpreter';
import util from 'util';

let ast = CWScriptParser.parse(
  readFileSync('./examples/terraswap/TerraswapToken.cws', 'utf8')
);

let interpreter = new CWScriptInterpreter({
  files: {
    './examples/terraswap/TerraswapToken.cws': ast,
  },
  env: STDLIB,
});

let token = interpreter.getSymbol('TerraswapToken');
let CW20 = interpreter.getSymbol('CW20');
console.log(CW20.symbols);
let CW20Coin = CW20.getSymbol('Coin');

console.log(token);
let instantiateMsg = token.getSymbol('#instantiate').make({
  name: String.value('TerraSwap'),
  symbol: String.value('TERRASWAP'),
  decimals: U8.value('6'),
  initial_balances: new ListType(CW20Coin).value([]),
});

console.log(instantiateMsg);

console.log(
  CW20Coin.call([
    new Arg(U128.value('1000000000000000000000000'), 'amount'),
    new Arg(
      String.value('terra1hzh9vpxhsk82503lzgdejhp09lk93g9ev39r3h'),
      'address'
    ),
  ])
);
