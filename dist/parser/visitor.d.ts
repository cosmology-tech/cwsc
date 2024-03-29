import { ParserRuleContext } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import * as P from '../grammar/CWScriptParser';
import { CWScriptParserVisitor as ANTLRCWScriptParserVisitor } from '../grammar/CWScriptParserVisitor';
import * as AST from '../ast';
export declare class CWSASTBuilderVisitor extends AbstractParseTreeVisitor<AST.AST> implements ANTLRCWScriptParserVisitor<AST.AST> {
    visitSourceFile(ctx: P.SourceFileContext): AST.SourceFile;
    visitContractDefn(ctx: P.ContractDefnContext): AST.ContractDefn;
    visitTypePath(ctx: P.TypePathContext): AST.TypePath;
    visitTypeVariant(ctx: P.TypeVariantContext): AST.TypeVariant;
    visitTypeLens(ctx: P.TypeLensContext): AST.TypeLens;
    visitOptionT(ctx: P.OptionTContext): AST.OptionT;
    visitListT(ctx: P.ListTContext): AST.ListT | AST.TupleT;
    visitTupleT(ctx: P.TupleTContext): AST.TupleT;
    visitStructDefn(ctx: P.StructDefnContext): AST.StructDefn;
    visitTypeAliasDefn(ctx: P.TypeAliasDefnContext): AST.TypeAliasDefn;
    visitInterfaceDefn(ctx: P.InterfaceDefnContext): AST.InterfaceDefn;
    visitImportAllStmt(ctx: P.ImportAllStmtContext): AST.ImportAllStmt;
    visitImportItemsStmt(ctx: P.ImportItemsStmtContext): AST.ImportItemsStmt;
    visitParam(ctx: P.ParamContext): AST.Param;
    visitStringLit(ctx: P.StringLitContext): AST.StringLit;
    visitContractBlock(ctx: P.ContractBlockContext): AST.ContractBlock;
    visitStateDefnBlock(ctx: P.StateDefnBlockContext): AST.StateDefnBlock;
    visitStateDefn_Item(ctx: P.StateDefn_ItemContext): AST.StateDefnItem;
    visitStateDefn_Map(ctx: P.StateDefn_MapContext): AST.StateDefnMap;
    visitFnDefn(ctx: P.FnDefnContext): AST.FnDefn;
    visitFnParams(ctx: P.FnParamsContext): AST.List<AST.Param>;
    visitMapKeyDefn(ctx: P.MapKeyDefnContext): AST.MapKeyDefn;
    visitInstantiateDefn(ctx: P.InstantiateDefnContext): AST.InstantiateDefn;
    visitInstantiateDecl(ctx: P.InstantiateDeclContext): AST.InstantiateDecl;
    visitExecDefn(ctx: P.ExecDefnContext): AST.ExecDefn;
    visitExecDecl(ctx: P.ExecDeclContext): AST.ExecDecl;
    visitQueryDefn(ctx: P.QueryDefnContext): AST.QueryDefn;
    visitQueryDecl(ctx: P.QueryDeclContext): AST.QueryDecl;
    visitErrorDefn(ctx: P.ErrorDefnContext): AST.ErrorDefn;
    visitStructDefn_fn(ctx: P.StructDefn_fnContext): AST.StructDefn;
    visitErrorDefnBlock(ctx: P.ErrorDefnBlockContext): AST.ErrorDefnBlock;
    visitEventDefn(ctx: P.EventDefnContext): AST.EventDefn;
    visitEventDefnBlock(ctx: P.EventDefnBlockContext): AST.EventDefnBlock;
    visitReplyDefn(ctx: P.ReplyDefnContext): AST.ReplyDefn;
    visitEnumDefn(ctx: P.EnumDefnContext): AST.EnumDefn;
    visitVariant_struct(ctx: P.Variant_structContext): AST.EnumVariantStruct;
    visitParamList(ctx: P.ParamListContext): AST.List<AST.Param>;
    visitVariant_unit(ctx: P.Variant_unitContext): AST.EnumVariantUnit;
    visitDebugStmt_(ctx: P.DebugStmt_Context): AST.DebugStmt;
    visitDebugStmt(ctx: P.DebugStmtContext): AST.DebugStmt;
    visitLetStmt_(ctx: P.LetStmt_Context): AST.LetStmt;
    visitLetStmt(ctx: P.LetStmtContext): AST.LetStmt;
    visitConstStmt_(ctx: P.ConstStmt_Context): AST.ConstStmt;
    visitConstStmt(ctx: P.ConstStmtContext): AST.ConstStmt;
    visitAssignStmt_(ctx: P.AssignStmt_Context): AST.AssignStmt;
    visitAssignStmt(ctx: P.AssignStmtContext): AST.AssignStmt;
    visitIfStmt_(ctx: P.IfStmt_Context): AST.IfStmt;
    visitElseClause(ctx: P.ElseClauseContext): AST.Block;
    visitBlock(ctx: P.BlockContext): AST.Block;
    visitForStmt_(ctx: P.ForStmt_Context): AST.ForStmt;
    visitForStmt(ctx: P.ForStmtContext): AST.ForStmt;
    visitExecStmt(ctx: P.ExecStmtContext): AST.ExecStmt;
    visitDelegateExecStmt(ctx: P.DelegateExecStmtContext): AST.DelegateExecStmt;
    visitInstantiateStmt(ctx: P.InstantiateStmtContext): AST.InstantiateStmt;
    visitCallOptions(ctx: P.CallOptionsContext): AST.List<AST.MemberVal>;
    visitEmitStmt(ctx: P.EmitStmtContext): AST.EmitStmt;
    visitReturnStmt(ctx: P.ReturnStmtContext): AST.ReturnStmt;
    visitFailStmt(ctx: P.FailStmtContext): AST.FailStmt;
    visitExprStmt(ctx: P.ExprStmtContext): AST.Expr;
    visitIdentBinding_(ctx: P.IdentBinding_Context): AST.IdentBinding;
    visitStructBinding(ctx: P.StructBindingContext): AST.StructBinding;
    visitTupleBinding(ctx: P.TupleBindingContext): AST.TupleBinding;
    visitIdentLHS(ctx: P.IdentLHSContext): AST.IdentLHS;
    visitDotLHS(ctx: P.DotLHSContext): AST.DotLHS;
    visitIndexLHS(ctx: P.IndexLHSContext): AST.IndexLHS;
    visitGroupedExpr(ctx: P.GroupedExprContext): AST.GroupedExpr;
    visitGrouped2Expr(ctx: P.Grouped2ExprContext): AST.Grouped2Expr;
    visitDotExpr(ctx: P.DotExprContext): AST.DotExpr;
    visitAsExpr(ctx: P.AsExprContext): AST.AsExpr;
    visitIndexExpr(ctx: P.IndexExprContext): AST.IndexExpr;
    visitDColonExpr(ctx: P.DColonExprContext): AST.DColonExpr;
    visitTypeDColonExpr(ctx: P.TypeDColonExprContext): AST.DColonExpr;
    visitArg(ctx: P.ArgContext): AST.Arg;
    visitFnCallExpr(ctx: P.FnCallExprContext): AST.FnCallExpr;
    visitTypeFnCallExpr(ctx: P.TypeFnCallExprContext): AST.FnCallExpr;
    visitMulExpr(ctx: P.MulExprContext): AST.BinOpExpr;
    visitAddExpr(ctx: P.AddExprContext): AST.BinOpExpr;
    visitCompExpr(ctx: P.CompExprContext): AST.BinOpExpr;
    visitEqExpr(ctx: P.EqExprContext): AST.BinOpExpr;
    visitNoneCheckExpr(ctx: P.NoneCheckExprContext): AST.NoneCheckExpr;
    visitIsExpr(ctx: P.IsExprContext): AST.IsExpr;
    visitInExpr(ctx: P.InExprContext): AST.InExpr;
    visitShortTryExpr(ctx: P.ShortTryExprContext): AST.TryCatchElseExpr;
    visitTryCatchElseExpr_(ctx: P.TryCatchElseExpr_Context): AST.TryCatchElseExpr;
    visitCatch(ctx: P.CatchContext): AST.CatchClause;
    visitCatchBind(ctx: P.CatchBindContext): AST.CatchClause;
    visitAndExpr(ctx: P.AndExprContext): AST.AndExpr;
    visitOrExpr(ctx: P.OrExprContext): AST.OrExpr;
    visitQueryNowExpr(ctx: P.QueryNowExprContext): AST.QueryNowExpr;
    visitFailExpr(ctx: P.FailExprContext): AST.FailExpr;
    visitClosure(ctx: P.ClosureContext): AST.Closure;
    visitTupleExpr(ctx: P.TupleExprContext): AST.TupleExpr;
    visitClosureParams(ctx: P.ClosureParamsContext): AST.List<AST.Param>;
    visitMemberVal(ctx: P.MemberValContext): AST.MemberVal;
    visitStructExpr(ctx: P.StructExprContext): AST.StructExpr;
    visitUnitVariantExpr(ctx: P.UnitVariantExprContext): AST.UnitVariantExpr;
    visitIntLit(ctx: P.IntLitContext): AST.IntLit;
    visitDecLit(ctx: P.DecLitContext): AST.DecLit;
    visitBoolLit(ctx: P.BoolLitContext): AST.BoolLit;
    visitNoneLit(ctx: P.NoneLitContext): AST.NoneLit;
    visitIdent(ctx: P.IdentContext): AST.Ident;
    protected vlist<T extends AST.AST>(ctx: ParserRuleContext[]): AST.List<T>;
    protected defaultResult(): AST.AST;
}
