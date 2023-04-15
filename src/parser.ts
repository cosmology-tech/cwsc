import {
  AsExprContext,
  AssignStmt_Context,
  AssignStmtContext,
  BlockContext,
  ConstStmt_Context,
  ConstStmtContext,
  ContractBlockContext,
  ContractDefnContext,
  CWScriptParser,
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
  IdentBindingContext,
  IdentContext,
  IdentLHSContext,
  IfStmt_Context,
  IfStmtContext,
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
  PureParamsContext,
  QueryDeclContext,
  QueryDefnContext,
  ReplyDefnContext,
  ReturnStmtContext,
  SourceFileContext,
  StateDefnBlockContext,
  StateDefn_MapContext,
  StateDefn_ItemContext,
  StateParamsContext,
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
} from './grammar/CWScriptParser';
import { CWScriptLexer } from './grammar/CWScriptLexer';
import { CharStreams, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { CWScriptParserVisitor } from 'grammar/CWScriptParserVisitor';
import * as AST from './ast';

export class CWScriptASTVisitor
  extends AbstractParseTreeVisitor<AST.AST>
  implements CWScriptParserVisitor<AST.AST>
{
  // Stmts
  visitSourceFile(ctx: SourceFileContext): AST.SourceFile {
    let body = ctx.topLevelStmt().map((x) => this.visit(x));
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
    return new AST.TypePath(ctx._segments.map((x) => this.visitIdent(x))).$(
      ctx
    );
  }

  visitInterfaceDefn(ctx: InterfaceDefnContext): AST.InterfaceDefn {
    let name = this.visitIdent(ctx._name);
    console.log(Object.keys(ctx));
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
    let ty = this.visit(ctx._ty);
    let optional = !!ctx._optional;
    let default_ = ctx._default ? this.visit(ctx._default) : null;
    return new AST.Param(
      name,
      ty as AST.TypeExpr,
      optional,
      default_ as AST.Expr
    ).$(ctx);
  }

  visitStringLit(ctx: StringLitContext): AST.StringLit {
    return new AST.StringLit(ctx.text).$(ctx);
  }

  visitContractBlock(ctx: ContractBlockContext): AST.ContractBlock {
    return new AST.ContractBlock(ctx._body.map((x) => this.visit(x))).$(ctx);
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
    let params = this.visit(ctx._params) as AST.List<AST.Param>;
    let retTy = ctx._retTy ? (this.visit(ctx._retTy) as AST.TypeExpr) : null;
    let body = this.visit(ctx._body);
    return new AST.FnDefn(name, params, retTy, body as AST.Block).$(ctx);
  }

  visitPureParams(ctx: PureParamsContext): AST.List<Param> {
    return new AST.List<Param>(ctx._params.map((x) => this.visitParam(x))).$(
      ctx
    );
  }

  visitStateParams(ctx: StateParamsContext): AST.List<Param> {
    // TODO: add state params
    return new AST.List<Param>(ctx._params.map((x) => this.visitParam(x))).$(
      ctx
    );
  }

  visitMapKeyDefn(ctx: MapKeyDefnContext): AST.MapKeyDefn {
    let name = ctx._name ? this.visitIdent(ctx._name) : null;
    let ty = this.visit(ctx._ty);
    return new AST.MapKeyDefn(name, ty as AST.TypeExpr).$(ctx);
  }

  visitInstantiateDefn(ctx: InstantiateDefnContext): AST.InstantiateDefn {
    let params = this.visit(ctx._params) as AST.List<AST.Param>;
    let body = this.visit(ctx._body) as AST.Block;
    return new AST.InstantiateDefn(params, body).$(ctx);
  }

  visitInstantiateDecl(ctx: InstantiateDeclContext): AST.InstantiateDecl {
    let params = this.visit(ctx._params) as AST.List<AST.Param>;
    return new AST.InstantiateDecl(params).$(ctx);
  }

  visitExecDefn(ctx: ExecDefnContext): AST.ExecDefn {
    let name = this.visitIdent(ctx._name);
    let params = this.visit(ctx._params) as AST.List<AST.Param>;
    let body = this.visit(ctx._body) as AST.Block;
    return new AST.ExecDefn(name, params, body).$(ctx);
  }

  visitExecDecl(ctx: ExecDeclContext): AST.ExecDecl {
    let name = this.visitIdent(ctx._name);
    let params = this.visit(ctx._params) as AST.List<AST.Param>;
    return new AST.ExecDecl(name, params).$(ctx);
  }

  visitQueryDefn(ctx: QueryDefnContext): AST.QueryDefn {
    let name = this.visitIdent(ctx._name);
    let params = this.visit(ctx._params) as AST.List<AST.Param>;
    let retTy = ctx._retTy ? (this.visit(ctx._retTy) as AST.TypeExpr) : null;
    let body = this.visit(ctx._body) as AST.Block;
    return new AST.QueryDefn(name, params, retTy, body).$(ctx);
  }

  visitQueryDecl(ctx: QueryDeclContext): AST.QueryDecl {
    let name = this.visitIdent(ctx._name);
    let params = this.visit(ctx._params) as AST.List<AST.Param>;
    let retTy = ctx._retTy ? (this.visit(ctx._retTy) as AST.TypeExpr) : null;
    return new AST.QueryDecl(name, params, retTy).$(ctx);
  }

  visitErrorDefn(ctx: ErrorDefnContext): AST.ErrorDefn {
    let name = this.visitIdent(ctx._defn._name);
    let params = this.visit(ctx._defn._params) as AST.List<AST.Param>;
    return new AST.ErrorDefn(name, params).$(ctx);
  }

  visitStructDefn_fn(ctx: StructDefn_fnContext): AST.StructDefn {
    let name = this.visitIdent(ctx._name);
    let params = this.visit(ctx._params) as AST.List<AST.Param>;
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
    let params = this.visit(defn._params) as AST.List<AST.Param>;
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
    let params = this.visit(ctx._params) as AST.List<AST.Param>;
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
    let params = this.visit(ctx._members) as AST.List<AST.Param>;
    return new AST.EnumVariantStruct(name, params).$(ctx);
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

  visitIfStmt(ctx: IfStmtContext): AST.IfStmt {
    return this.visitIfStmt_(ctx.ifStmt_());
  }

  visitBlock(ctx: BlockContext): AST.Block {
    return new AST.Block(ctx._body.map((x) => this.visit(x) as AST.Stmt)).$(
      ctx
    );
  }

  visitFor_Stmt(ctx: ForStmt_Context): AST.ForStmt {
    let binding = this.visit(ctx._binding) as AST.LetBinding;
    let iter = this.visit(ctx._iter) as AST.Expr;
    let body = this.visitBlock(ctx._body);
    return new AST.ForStmt(binding, iter, body).$(ctx);
  }

  visitForStmt(ctx: ForStmtContext): AST.ForStmt {
    return this.visitFor_Stmt(ctx.forStmt_());
  }

  visitExecStmt(ctx: ExecStmtContext): AST.ExecStmt {
    let expr = this.visit(ctx.expr()) as AST.Expr;
    return new AST.ExecStmt(expr).$(ctx);
  }

  visitDelegateExecStmt(ctx: DelegateExecStmtContext): AST.DelegateExecStmt {
    let expr = this.visit(ctx.expr()) as AST.Expr;
    return new AST.DelegateExecStmt(expr).$(ctx);
  }

  visitInstantiateStmt(ctx: InstantiateStmtContext): AST.InstantiateStmt {
    let expr = this.visit(ctx.expr()) as AST.TypePath;
    let new_ = !!ctx._new;
    let options = this.vlist<AST.MemberVal>(ctx._options);
    return new AST.InstantiateStmt(expr, new_, options).$(ctx);
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

  visitIdentBinding(ctx: IdentBindingContext): AST.IdentBinding {
    return this.visitIdentBinding_(ctx.identBinding_());
  }

  visitStructBinding(ctx: StructBindingContext): AST.StructBinding {
    let bindings = ctx._bindings.map((binding) =>
      this.visitIdentBinding_(binding)
    );
    return new AST.StructBinding(bindings).$(ctx);
  }

  visitTupleBinding(ctx: TupleBindingContext): AST.TupleBinding {
    let bindings = ctx._bindings.map((binding) =>
      this.visitIdentBinding_(binding)
    );
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
    const obj = this.visit(ctx.expr()) as AST.Expr;
    const fallible = !!ctx._fallible;
    const args = this.vlist<AST.Arg>(ctx._args);
    return new AST.FnCallExpr(obj, fallible, args).$(ctx);
  }

  visitTypeFnCallExpr(ctx: TypeFnCallExprContext): AST.FnCallExpr {
    const obj = this.visit(ctx.typeExpr()) as AST.TypeExpr;
    const fallible = !!ctx._fallible;
    const args = this.vlist<AST.Arg>(ctx._args);
    return new AST.FnCallExpr(obj, fallible, args).$(ctx);
  }

  visitMulExpr(ctx: MulExprContext): AST.MathExpr {
    const lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    const op = ctx._op.text as AST.MathOp;
    const rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.MathExpr(lhs, op, rhs).$(ctx);
  }

  visitAddExpr(ctx: AddExprContext): AST.MathExpr {
    const lhs = this.visit(ctx.expr()[0]) as AST.Expr;
    const op = ctx._op.text as AST.MathOp;
    const rhs = this.visit(ctx._rhs) as AST.Expr;
    return new AST.MathExpr(lhs, op, rhs).$(ctx);
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

export class Parser {
  public antlrLexer: CWScriptLexer;
  public antlrParser: CWScriptParser;

  constructor(public sourceInput: string) {
    this.antlrLexer = new CWScriptLexer(CharStreams.fromString(sourceInput));
    this.antlrParser = new CWScriptParser(
      new CommonTokenStream(this.antlrLexer)
    );
  }

  public static fromString(sourceInput: string): Parser {
    return new Parser(sourceInput);
  }

  public buildAST(): any {
    let tree = this.antlrParser.sourceFile();
    let visitor = new CWScriptASTVisitor();
    return visitor.visitSourceFile(tree);
  }
}

import { readFileSync, writeFileSync } from 'fs';
import { Param } from './ast';

let parser = Parser.fromString(
  readFileSync('./examples/terraswap/TerraswapToken.cws', 'utf8')
);
let ast = parser.buildAST();
writeFileSync(
  'output-x.json',
  JSON.stringify(ast.$children[0].toJSON(), null, 2)
);
