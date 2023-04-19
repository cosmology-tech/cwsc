import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { IdentLHSContext } from "./CWScriptParser";
import { DotLHSContext } from "./CWScriptParser";
import { IndexLHSContext } from "./CWScriptParser";
import { StateDefn_ItemContext } from "./CWScriptParser";
import { StateDefn_MapContext } from "./CWScriptParser";
import { ImportAllStmtContext } from "./CWScriptParser";
import { ImportItemsStmtContext } from "./CWScriptParser";
import { StringLitContext } from "./CWScriptParser";
import { IntLitContext } from "./CWScriptParser";
import { DecLitContext } from "./CWScriptParser";
import { BoolLitContext } from "./CWScriptParser";
import { NoneLitContext } from "./CWScriptParser";
import { CatchContext } from "./CWScriptParser";
import { CatchBindContext } from "./CWScriptParser";
import { GroupedExprContext } from "./CWScriptParser";
import { DotExprContext } from "./CWScriptParser";
import { AsExprContext } from "./CWScriptParser";
import { IndexExprContext } from "./CWScriptParser";
import { DColonExprContext } from "./CWScriptParser";
import { TypeDColonExprContext } from "./CWScriptParser";
import { FnCallExprContext } from "./CWScriptParser";
import { TypeFnCallExprContext } from "./CWScriptParser";
import { MulExprContext } from "./CWScriptParser";
import { AddExprContext } from "./CWScriptParser";
import { CompExprContext } from "./CWScriptParser";
import { EqExprContext } from "./CWScriptParser";
import { NoneCheckExprContext } from "./CWScriptParser";
import { IsExprContext } from "./CWScriptParser";
import { InExprContext } from "./CWScriptParser";
import { ShortTryExprContext } from "./CWScriptParser";
import { TryCatchElseExprContext } from "./CWScriptParser";
import { NotExprContext } from "./CWScriptParser";
import { AndExprContext } from "./CWScriptParser";
import { OrExprContext } from "./CWScriptParser";
import { IfExprContext } from "./CWScriptParser";
import { QueryNowExprContext } from "./CWScriptParser";
import { FailExprContext } from "./CWScriptParser";
import { ClosureExprContext } from "./CWScriptParser";
import { TupleExprContext } from "./CWScriptParser";
import { StructExprContext } from "./CWScriptParser";
import { UnitVariantExprContext } from "./CWScriptParser";
import { LiteralExprContext } from "./CWScriptParser";
import { IdentExprContext } from "./CWScriptParser";
import { Grouped2ExprContext } from "./CWScriptParser";
import { PathTContext } from "./CWScriptParser";
import { VariantTContext } from "./CWScriptParser";
import { LensTContext } from "./CWScriptParser";
import { OptionTContext } from "./CWScriptParser";
import { ListTContext } from "./CWScriptParser";
import { TupleTContext } from "./CWScriptParser";
import { DefnTContext } from "./CWScriptParser";
import { IdentBindingContext } from "./CWScriptParser";
import { StructBindingContext } from "./CWScriptParser";
import { TupleBindingContext } from "./CWScriptParser";
import { LetStmtContext } from "./CWScriptParser";
import { ConstStmtContext } from "./CWScriptParser";
import { AssignStmtContext } from "./CWScriptParser";
import { IfStmtContext } from "./CWScriptParser";
import { ForStmtContext } from "./CWScriptParser";
import { ExecStmtContext } from "./CWScriptParser";
import { DelegateExecStmtContext } from "./CWScriptParser";
import { InstantiateStmtContext } from "./CWScriptParser";
import { EmitStmtContext } from "./CWScriptParser";
import { ReturnStmtContext } from "./CWScriptParser";
import { FailStmtContext } from "./CWScriptParser";
import { ExprStmtContext } from "./CWScriptParser";
import { SourceFileContext } from "./CWScriptParser";
import { TopLevelStmtContext } from "./CWScriptParser";
import { ContractDefnContext } from "./CWScriptParser";
import { InterfaceDefnContext } from "./CWScriptParser";
import { ContractBlockContext } from "./CWScriptParser";
import { ImportStmtContext } from "./CWScriptParser";
import { ContractItemContext } from "./CWScriptParser";
import { ParamContext } from "./CWScriptParser";
import { ParamListContext } from "./CWScriptParser";
import { FnParamsContext } from "./CWScriptParser";
import { StructDefn_fnContext } from "./CWScriptParser";
import { ErrorDefnContext } from "./CWScriptParser";
import { ErrorDefnBlockContext } from "./CWScriptParser";
import { EventDefnContext } from "./CWScriptParser";
import { EventDefnBlockContext } from "./CWScriptParser";
import { StateDefnBlockContext } from "./CWScriptParser";
import { StateDefnContext } from "./CWScriptParser";
import { MapKeyDefnContext } from "./CWScriptParser";
import { InstantiateDefnContext } from "./CWScriptParser";
import { InstantiateDeclContext } from "./CWScriptParser";
import { ExecDefnContext } from "./CWScriptParser";
import { ExecDeclContext } from "./CWScriptParser";
import { QueryDefnContext } from "./CWScriptParser";
import { QueryDeclContext } from "./CWScriptParser";
import { ReplyDefnContext } from "./CWScriptParser";
import { EnumDefnContext } from "./CWScriptParser";
import { Variant_Context } from "./CWScriptParser";
import { Variant_structContext } from "./CWScriptParser";
import { Variant_unitContext } from "./CWScriptParser";
import { TypeExprContext } from "./CWScriptParser";
import { TypeLensContext } from "./CWScriptParser";
import { TypePathContext } from "./CWScriptParser";
import { TypeVariantContext } from "./CWScriptParser";
import { TypeDefnContext } from "./CWScriptParser";
import { StructDefnContext } from "./CWScriptParser";
import { TypeAliasDefnContext } from "./CWScriptParser";
import { FnDefnContext } from "./CWScriptParser";
import { AnnotContext } from "./CWScriptParser";
import { CallOptionsContext } from "./CWScriptParser";
import { StmtContext } from "./CWScriptParser";
import { LetStmt_Context } from "./CWScriptParser";
import { ConstStmt_Context } from "./CWScriptParser";
import { IdentBinding_Context } from "./CWScriptParser";
import { Let_bindingContext } from "./CWScriptParser";
import { AssignStmt_Context } from "./CWScriptParser";
import { AssignLHSContext } from "./CWScriptParser";
import { ExprContext } from "./CWScriptParser";
import { ClosureParamsContext } from "./CWScriptParser";
import { ClosureContext } from "./CWScriptParser";
import { BlockContext } from "./CWScriptParser";
import { TryCatchElseExpr_Context } from "./CWScriptParser";
import { CatchClauseContext } from "./CWScriptParser";
import { ArgContext } from "./CWScriptParser";
import { MemberValContext } from "./CWScriptParser";
import { LiteralContext } from "./CWScriptParser";
import { IfStmt_Context } from "./CWScriptParser";
import { ElseClauseContext } from "./CWScriptParser";
import { ForStmt_Context } from "./CWScriptParser";
import { IdentContext } from "./CWScriptParser";
import { ReservedKeywordContext } from "./CWScriptParser";
/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CWScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CWScriptParserVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by the `IdentLHS`
     * labeled alternative in `CWScriptParser.assignLHS`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentLHS?: (ctx: IdentLHSContext) => Result;
    /**
     * Visit a parse tree produced by the `DotLHS`
     * labeled alternative in `CWScriptParser.assignLHS`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDotLHS?: (ctx: DotLHSContext) => Result;
    /**
     * Visit a parse tree produced by the `IndexLHS`
     * labeled alternative in `CWScriptParser.assignLHS`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexLHS?: (ctx: IndexLHSContext) => Result;
    /**
     * Visit a parse tree produced by the `StateDefn_Item`
     * labeled alternative in `CWScriptParser.stateDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStateDefn_Item?: (ctx: StateDefn_ItemContext) => Result;
    /**
     * Visit a parse tree produced by the `StateDefn_Map`
     * labeled alternative in `CWScriptParser.stateDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStateDefn_Map?: (ctx: StateDefn_MapContext) => Result;
    /**
     * Visit a parse tree produced by the `ImportAllStmt`
     * labeled alternative in `CWScriptParser.importStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportAllStmt?: (ctx: ImportAllStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `ImportItemsStmt`
     * labeled alternative in `CWScriptParser.importStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportItemsStmt?: (ctx: ImportItemsStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `StringLit`
     * labeled alternative in `CWScriptParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLit?: (ctx: StringLitContext) => Result;
    /**
     * Visit a parse tree produced by the `IntLit`
     * labeled alternative in `CWScriptParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntLit?: (ctx: IntLitContext) => Result;
    /**
     * Visit a parse tree produced by the `DecLit`
     * labeled alternative in `CWScriptParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecLit?: (ctx: DecLitContext) => Result;
    /**
     * Visit a parse tree produced by the `BoolLit`
     * labeled alternative in `CWScriptParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoolLit?: (ctx: BoolLitContext) => Result;
    /**
     * Visit a parse tree produced by the `NoneLit`
     * labeled alternative in `CWScriptParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNoneLit?: (ctx: NoneLitContext) => Result;
    /**
     * Visit a parse tree produced by the `Catch`
     * labeled alternative in `CWScriptParser.catchClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatch?: (ctx: CatchContext) => Result;
    /**
     * Visit a parse tree produced by the `CatchBind`
     * labeled alternative in `CWScriptParser.catchClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatchBind?: (ctx: CatchBindContext) => Result;
    /**
     * Visit a parse tree produced by the `GroupedExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupedExpr?: (ctx: GroupedExprContext) => Result;
    /**
     * Visit a parse tree produced by the `DotExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDotExpr?: (ctx: DotExprContext) => Result;
    /**
     * Visit a parse tree produced by the `AsExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAsExpr?: (ctx: AsExprContext) => Result;
    /**
     * Visit a parse tree produced by the `IndexExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexExpr?: (ctx: IndexExprContext) => Result;
    /**
     * Visit a parse tree produced by the `DColonExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDColonExpr?: (ctx: DColonExprContext) => Result;
    /**
     * Visit a parse tree produced by the `TypeDColonExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeDColonExpr?: (ctx: TypeDColonExprContext) => Result;
    /**
     * Visit a parse tree produced by the `FnCallExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFnCallExpr?: (ctx: FnCallExprContext) => Result;
    /**
     * Visit a parse tree produced by the `TypeFnCallExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeFnCallExpr?: (ctx: TypeFnCallExprContext) => Result;
    /**
     * Visit a parse tree produced by the `MulExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMulExpr?: (ctx: MulExprContext) => Result;
    /**
     * Visit a parse tree produced by the `AddExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddExpr?: (ctx: AddExprContext) => Result;
    /**
     * Visit a parse tree produced by the `CompExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompExpr?: (ctx: CompExprContext) => Result;
    /**
     * Visit a parse tree produced by the `EqExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEqExpr?: (ctx: EqExprContext) => Result;
    /**
     * Visit a parse tree produced by the `NoneCheckExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNoneCheckExpr?: (ctx: NoneCheckExprContext) => Result;
    /**
     * Visit a parse tree produced by the `IsExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsExpr?: (ctx: IsExprContext) => Result;
    /**
     * Visit a parse tree produced by the `InExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInExpr?: (ctx: InExprContext) => Result;
    /**
     * Visit a parse tree produced by the `ShortTryExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShortTryExpr?: (ctx: ShortTryExprContext) => Result;
    /**
     * Visit a parse tree produced by the `TryCatchElseExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTryCatchElseExpr?: (ctx: TryCatchElseExprContext) => Result;
    /**
     * Visit a parse tree produced by the `NotExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotExpr?: (ctx: NotExprContext) => Result;
    /**
     * Visit a parse tree produced by the `AndExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAndExpr?: (ctx: AndExprContext) => Result;
    /**
     * Visit a parse tree produced by the `OrExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrExpr?: (ctx: OrExprContext) => Result;
    /**
     * Visit a parse tree produced by the `IfExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfExpr?: (ctx: IfExprContext) => Result;
    /**
     * Visit a parse tree produced by the `QueryNowExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryNowExpr?: (ctx: QueryNowExprContext) => Result;
    /**
     * Visit a parse tree produced by the `FailExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFailExpr?: (ctx: FailExprContext) => Result;
    /**
     * Visit a parse tree produced by the `ClosureExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClosureExpr?: (ctx: ClosureExprContext) => Result;
    /**
     * Visit a parse tree produced by the `TupleExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleExpr?: (ctx: TupleExprContext) => Result;
    /**
     * Visit a parse tree produced by the `StructExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructExpr?: (ctx: StructExprContext) => Result;
    /**
     * Visit a parse tree produced by the `UnitVariantExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitVariantExpr?: (ctx: UnitVariantExprContext) => Result;
    /**
     * Visit a parse tree produced by the `LiteralExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralExpr?: (ctx: LiteralExprContext) => Result;
    /**
     * Visit a parse tree produced by the `IdentExpr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentExpr?: (ctx: IdentExprContext) => Result;
    /**
     * Visit a parse tree produced by the `Grouped2Expr`
     * labeled alternative in `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrouped2Expr?: (ctx: Grouped2ExprContext) => Result;
    /**
     * Visit a parse tree produced by the `PathT`
     * labeled alternative in `CWScriptParser.typeExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathT?: (ctx: PathTContext) => Result;
    /**
     * Visit a parse tree produced by the `VariantT`
     * labeled alternative in `CWScriptParser.typeExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariantT?: (ctx: VariantTContext) => Result;
    /**
     * Visit a parse tree produced by the `LensT`
     * labeled alternative in `CWScriptParser.typeExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLensT?: (ctx: LensTContext) => Result;
    /**
     * Visit a parse tree produced by the `OptionT`
     * labeled alternative in `CWScriptParser.typeExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptionT?: (ctx: OptionTContext) => Result;
    /**
     * Visit a parse tree produced by the `ListT`
     * labeled alternative in `CWScriptParser.typeExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListT?: (ctx: ListTContext) => Result;
    /**
     * Visit a parse tree produced by the `TupleT`
     * labeled alternative in `CWScriptParser.typeExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleT?: (ctx: TupleTContext) => Result;
    /**
     * Visit a parse tree produced by the `DefnT`
     * labeled alternative in `CWScriptParser.typeExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefnT?: (ctx: DefnTContext) => Result;
    /**
     * Visit a parse tree produced by the `IdentBinding`
     * labeled alternative in `CWScriptParser.let_binding`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentBinding?: (ctx: IdentBindingContext) => Result;
    /**
     * Visit a parse tree produced by the `StructBinding`
     * labeled alternative in `CWScriptParser.let_binding`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructBinding?: (ctx: StructBindingContext) => Result;
    /**
     * Visit a parse tree produced by the `TupleBinding`
     * labeled alternative in `CWScriptParser.let_binding`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleBinding?: (ctx: TupleBindingContext) => Result;
    /**
     * Visit a parse tree produced by the `LetStmt`
     * labeled alternative in `CWScriptParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetStmt?: (ctx: LetStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `ConstStmt`
     * labeled alternative in `CWScriptParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstStmt?: (ctx: ConstStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `AssignStmt`
     * labeled alternative in `CWScriptParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignStmt?: (ctx: AssignStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `IfStmt`
     * labeled alternative in `CWScriptParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStmt?: (ctx: IfStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `ForStmt`
     * labeled alternative in `CWScriptParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForStmt?: (ctx: ForStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `ExecStmt`
     * labeled alternative in `CWScriptParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecStmt?: (ctx: ExecStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `DelegateExecStmt`
     * labeled alternative in `CWScriptParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDelegateExecStmt?: (ctx: DelegateExecStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `InstantiateStmt`
     * labeled alternative in `CWScriptParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInstantiateStmt?: (ctx: InstantiateStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `EmitStmt`
     * labeled alternative in `CWScriptParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmitStmt?: (ctx: EmitStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `ReturnStmt`
     * labeled alternative in `CWScriptParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStmt?: (ctx: ReturnStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `FailStmt`
     * labeled alternative in `CWScriptParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFailStmt?: (ctx: FailStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `ExprStmt`
     * labeled alternative in `CWScriptParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprStmt?: (ctx: ExprStmtContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.sourceFile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSourceFile?: (ctx: SourceFileContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.topLevelStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTopLevelStmt?: (ctx: TopLevelStmtContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.contractDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContractDefn?: (ctx: ContractDefnContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.interfaceDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceDefn?: (ctx: InterfaceDefnContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.contractBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContractBlock?: (ctx: ContractBlockContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.importStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportStmt?: (ctx: ImportStmtContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.contractItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContractItem?: (ctx: ContractItemContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.param`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParam?: (ctx: ParamContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.paramList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParamList?: (ctx: ParamListContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.fnParams`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFnParams?: (ctx: FnParamsContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.structDefn_fn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructDefn_fn?: (ctx: StructDefn_fnContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.errorDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorDefn?: (ctx: ErrorDefnContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.errorDefnBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorDefnBlock?: (ctx: ErrorDefnBlockContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.eventDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEventDefn?: (ctx: EventDefnContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.eventDefnBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEventDefnBlock?: (ctx: EventDefnBlockContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.stateDefnBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStateDefnBlock?: (ctx: StateDefnBlockContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.stateDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStateDefn?: (ctx: StateDefnContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.mapKeyDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMapKeyDefn?: (ctx: MapKeyDefnContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.instantiateDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInstantiateDefn?: (ctx: InstantiateDefnContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.instantiateDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInstantiateDecl?: (ctx: InstantiateDeclContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.execDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecDefn?: (ctx: ExecDefnContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.execDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecDecl?: (ctx: ExecDeclContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.queryDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryDefn?: (ctx: QueryDefnContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.queryDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryDecl?: (ctx: QueryDeclContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.replyDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplyDefn?: (ctx: ReplyDefnContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.enumDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumDefn?: (ctx: EnumDefnContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.variant_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariant_?: (ctx: Variant_Context) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.variant_struct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariant_struct?: (ctx: Variant_structContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.variant_unit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariant_unit?: (ctx: Variant_unitContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.typeExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeExpr?: (ctx: TypeExprContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.typeLens`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeLens?: (ctx: TypeLensContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.typePath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypePath?: (ctx: TypePathContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.typeVariant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeVariant?: (ctx: TypeVariantContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.typeDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeDefn?: (ctx: TypeDefnContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.structDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructDefn?: (ctx: StructDefnContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.typeAliasDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeAliasDefn?: (ctx: TypeAliasDefnContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.fnDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFnDefn?: (ctx: FnDefnContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.annot`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnot?: (ctx: AnnotContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.callOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallOptions?: (ctx: CallOptionsContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt?: (ctx: StmtContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.letStmt_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetStmt_?: (ctx: LetStmt_Context) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.constStmt_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstStmt_?: (ctx: ConstStmt_Context) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.identBinding_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentBinding_?: (ctx: IdentBinding_Context) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.let_binding`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLet_binding?: (ctx: Let_bindingContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.assignStmt_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignStmt_?: (ctx: AssignStmt_Context) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.assignLHS`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignLHS?: (ctx: AssignLHSContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr?: (ctx: ExprContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.closureParams`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClosureParams?: (ctx: ClosureParamsContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.closure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClosure?: (ctx: ClosureContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.tryCatchElseExpr_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTryCatchElseExpr_?: (ctx: TryCatchElseExpr_Context) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.catchClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatchClause?: (ctx: CatchClauseContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArg?: (ctx: ArgContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.memberVal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMemberVal?: (ctx: MemberValContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.ifStmt_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStmt_?: (ctx: IfStmt_Context) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.elseClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElseClause?: (ctx: ElseClauseContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.forStmt_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForStmt_?: (ctx: ForStmt_Context) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.ident`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdent?: (ctx: IdentContext) => Result;
    /**
     * Visit a parse tree produced by `CWScriptParser.reservedKeyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReservedKeyword?: (ctx: ReservedKeywordContext) => Result;
}
