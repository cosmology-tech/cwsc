// Generated from ./grammar/CWScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
import { FnTContext } from "./CWScriptParser";
import { OptionTContext } from "./CWScriptParser";
import { ListTContext } from "./CWScriptParser";
import { TupleTContext } from "./CWScriptParser";
import { DefnTContext } from "./CWScriptParser";
import { IdentBindingContext } from "./CWScriptParser";
import { StructBindingContext } from "./CWScriptParser";
import { TupleBindingContext } from "./CWScriptParser";
import { DebugStmtContext } from "./CWScriptParser";
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
import { FnTypeContext } from "./CWScriptParser";
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
import { DebugStmt_Context } from "./CWScriptParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `CWScriptParser`.
 */
export interface CWScriptParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `IdentLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	enterIdentLHS?: (ctx: IdentLHSContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	exitIdentLHS?: (ctx: IdentLHSContext) => void;

	/**
	 * Enter a parse tree produced by the `DotLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	enterDotLHS?: (ctx: DotLHSContext) => void;
	/**
	 * Exit a parse tree produced by the `DotLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	exitDotLHS?: (ctx: DotLHSContext) => void;

	/**
	 * Enter a parse tree produced by the `IndexLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	enterIndexLHS?: (ctx: IndexLHSContext) => void;
	/**
	 * Exit a parse tree produced by the `IndexLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	exitIndexLHS?: (ctx: IndexLHSContext) => void;

	/**
	 * Enter a parse tree produced by the `StateDefn_Item`
	 * labeled alternative in `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 */
	enterStateDefn_Item?: (ctx: StateDefn_ItemContext) => void;
	/**
	 * Exit a parse tree produced by the `StateDefn_Item`
	 * labeled alternative in `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 */
	exitStateDefn_Item?: (ctx: StateDefn_ItemContext) => void;

	/**
	 * Enter a parse tree produced by the `StateDefn_Map`
	 * labeled alternative in `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 */
	enterStateDefn_Map?: (ctx: StateDefn_MapContext) => void;
	/**
	 * Exit a parse tree produced by the `StateDefn_Map`
	 * labeled alternative in `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 */
	exitStateDefn_Map?: (ctx: StateDefn_MapContext) => void;

	/**
	 * Enter a parse tree produced by the `ImportAllStmt`
	 * labeled alternative in `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 */
	enterImportAllStmt?: (ctx: ImportAllStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ImportAllStmt`
	 * labeled alternative in `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 */
	exitImportAllStmt?: (ctx: ImportAllStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `ImportItemsStmt`
	 * labeled alternative in `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 */
	enterImportItemsStmt?: (ctx: ImportItemsStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ImportItemsStmt`
	 * labeled alternative in `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 */
	exitImportItemsStmt?: (ctx: ImportItemsStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `StringLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterStringLit?: (ctx: StringLitContext) => void;
	/**
	 * Exit a parse tree produced by the `StringLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitStringLit?: (ctx: StringLitContext) => void;

	/**
	 * Enter a parse tree produced by the `IntLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterIntLit?: (ctx: IntLitContext) => void;
	/**
	 * Exit a parse tree produced by the `IntLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitIntLit?: (ctx: IntLitContext) => void;

	/**
	 * Enter a parse tree produced by the `DecLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterDecLit?: (ctx: DecLitContext) => void;
	/**
	 * Exit a parse tree produced by the `DecLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitDecLit?: (ctx: DecLitContext) => void;

	/**
	 * Enter a parse tree produced by the `BoolLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterBoolLit?: (ctx: BoolLitContext) => void;
	/**
	 * Exit a parse tree produced by the `BoolLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitBoolLit?: (ctx: BoolLitContext) => void;

	/**
	 * Enter a parse tree produced by the `NoneLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterNoneLit?: (ctx: NoneLitContext) => void;
	/**
	 * Exit a parse tree produced by the `NoneLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitNoneLit?: (ctx: NoneLitContext) => void;

	/**
	 * Enter a parse tree produced by the `Catch`
	 * labeled alternative in `CWScriptParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatch?: (ctx: CatchContext) => void;
	/**
	 * Exit a parse tree produced by the `Catch`
	 * labeled alternative in `CWScriptParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatch?: (ctx: CatchContext) => void;

	/**
	 * Enter a parse tree produced by the `CatchBind`
	 * labeled alternative in `CWScriptParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchBind?: (ctx: CatchBindContext) => void;
	/**
	 * Exit a parse tree produced by the `CatchBind`
	 * labeled alternative in `CWScriptParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchBind?: (ctx: CatchBindContext) => void;

	/**
	 * Enter a parse tree produced by the `GroupedExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterGroupedExpr?: (ctx: GroupedExprContext) => void;
	/**
	 * Exit a parse tree produced by the `GroupedExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitGroupedExpr?: (ctx: GroupedExprContext) => void;

	/**
	 * Enter a parse tree produced by the `DotExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterDotExpr?: (ctx: DotExprContext) => void;
	/**
	 * Exit a parse tree produced by the `DotExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitDotExpr?: (ctx: DotExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AsExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAsExpr?: (ctx: AsExprContext) => void;
	/**
	 * Exit a parse tree produced by the `AsExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAsExpr?: (ctx: AsExprContext) => void;

	/**
	 * Enter a parse tree produced by the `IndexExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIndexExpr?: (ctx: IndexExprContext) => void;
	/**
	 * Exit a parse tree produced by the `IndexExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIndexExpr?: (ctx: IndexExprContext) => void;

	/**
	 * Enter a parse tree produced by the `DColonExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterDColonExpr?: (ctx: DColonExprContext) => void;
	/**
	 * Exit a parse tree produced by the `DColonExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitDColonExpr?: (ctx: DColonExprContext) => void;

	/**
	 * Enter a parse tree produced by the `TypeDColonExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterTypeDColonExpr?: (ctx: TypeDColonExprContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeDColonExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitTypeDColonExpr?: (ctx: TypeDColonExprContext) => void;

	/**
	 * Enter a parse tree produced by the `FnCallExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFnCallExpr?: (ctx: FnCallExprContext) => void;
	/**
	 * Exit a parse tree produced by the `FnCallExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFnCallExpr?: (ctx: FnCallExprContext) => void;

	/**
	 * Enter a parse tree produced by the `TypeFnCallExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterTypeFnCallExpr?: (ctx: TypeFnCallExprContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeFnCallExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitTypeFnCallExpr?: (ctx: TypeFnCallExprContext) => void;

	/**
	 * Enter a parse tree produced by the `MulExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMulExpr?: (ctx: MulExprContext) => void;
	/**
	 * Exit a parse tree produced by the `MulExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMulExpr?: (ctx: MulExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AddExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAddExpr?: (ctx: AddExprContext) => void;
	/**
	 * Exit a parse tree produced by the `AddExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAddExpr?: (ctx: AddExprContext) => void;

	/**
	 * Enter a parse tree produced by the `CompExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCompExpr?: (ctx: CompExprContext) => void;
	/**
	 * Exit a parse tree produced by the `CompExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCompExpr?: (ctx: CompExprContext) => void;

	/**
	 * Enter a parse tree produced by the `EqExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterEqExpr?: (ctx: EqExprContext) => void;
	/**
	 * Exit a parse tree produced by the `EqExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitEqExpr?: (ctx: EqExprContext) => void;

	/**
	 * Enter a parse tree produced by the `NoneCheckExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterNoneCheckExpr?: (ctx: NoneCheckExprContext) => void;
	/**
	 * Exit a parse tree produced by the `NoneCheckExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitNoneCheckExpr?: (ctx: NoneCheckExprContext) => void;

	/**
	 * Enter a parse tree produced by the `IsExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIsExpr?: (ctx: IsExprContext) => void;
	/**
	 * Exit a parse tree produced by the `IsExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIsExpr?: (ctx: IsExprContext) => void;

	/**
	 * Enter a parse tree produced by the `InExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterInExpr?: (ctx: InExprContext) => void;
	/**
	 * Exit a parse tree produced by the `InExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitInExpr?: (ctx: InExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ShortTryExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterShortTryExpr?: (ctx: ShortTryExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ShortTryExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitShortTryExpr?: (ctx: ShortTryExprContext) => void;

	/**
	 * Enter a parse tree produced by the `TryCatchElseExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterTryCatchElseExpr?: (ctx: TryCatchElseExprContext) => void;
	/**
	 * Exit a parse tree produced by the `TryCatchElseExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitTryCatchElseExpr?: (ctx: TryCatchElseExprContext) => void;

	/**
	 * Enter a parse tree produced by the `NotExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterNotExpr?: (ctx: NotExprContext) => void;
	/**
	 * Exit a parse tree produced by the `NotExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitNotExpr?: (ctx: NotExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AndExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAndExpr?: (ctx: AndExprContext) => void;
	/**
	 * Exit a parse tree produced by the `AndExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAndExpr?: (ctx: AndExprContext) => void;

	/**
	 * Enter a parse tree produced by the `OrExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterOrExpr?: (ctx: OrExprContext) => void;
	/**
	 * Exit a parse tree produced by the `OrExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitOrExpr?: (ctx: OrExprContext) => void;

	/**
	 * Enter a parse tree produced by the `IfExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIfExpr?: (ctx: IfExprContext) => void;
	/**
	 * Exit a parse tree produced by the `IfExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIfExpr?: (ctx: IfExprContext) => void;

	/**
	 * Enter a parse tree produced by the `QueryNowExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterQueryNowExpr?: (ctx: QueryNowExprContext) => void;
	/**
	 * Exit a parse tree produced by the `QueryNowExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitQueryNowExpr?: (ctx: QueryNowExprContext) => void;

	/**
	 * Enter a parse tree produced by the `FailExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFailExpr?: (ctx: FailExprContext) => void;
	/**
	 * Exit a parse tree produced by the `FailExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFailExpr?: (ctx: FailExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ClosureExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterClosureExpr?: (ctx: ClosureExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ClosureExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitClosureExpr?: (ctx: ClosureExprContext) => void;

	/**
	 * Enter a parse tree produced by the `TupleExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterTupleExpr?: (ctx: TupleExprContext) => void;
	/**
	 * Exit a parse tree produced by the `TupleExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitTupleExpr?: (ctx: TupleExprContext) => void;

	/**
	 * Enter a parse tree produced by the `StructExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterStructExpr?: (ctx: StructExprContext) => void;
	/**
	 * Exit a parse tree produced by the `StructExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitStructExpr?: (ctx: StructExprContext) => void;

	/**
	 * Enter a parse tree produced by the `UnitVariantExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterUnitVariantExpr?: (ctx: UnitVariantExprContext) => void;
	/**
	 * Exit a parse tree produced by the `UnitVariantExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitUnitVariantExpr?: (ctx: UnitVariantExprContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpr?: (ctx: LiteralExprContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpr?: (ctx: LiteralExprContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIdentExpr?: (ctx: IdentExprContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIdentExpr?: (ctx: IdentExprContext) => void;

	/**
	 * Enter a parse tree produced by the `Grouped2Expr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterGrouped2Expr?: (ctx: Grouped2ExprContext) => void;
	/**
	 * Exit a parse tree produced by the `Grouped2Expr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitGrouped2Expr?: (ctx: Grouped2ExprContext) => void;

	/**
	 * Enter a parse tree produced by the `PathT`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterPathT?: (ctx: PathTContext) => void;
	/**
	 * Exit a parse tree produced by the `PathT`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitPathT?: (ctx: PathTContext) => void;

	/**
	 * Enter a parse tree produced by the `VariantT`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterVariantT?: (ctx: VariantTContext) => void;
	/**
	 * Exit a parse tree produced by the `VariantT`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitVariantT?: (ctx: VariantTContext) => void;

	/**
	 * Enter a parse tree produced by the `LensT`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterLensT?: (ctx: LensTContext) => void;
	/**
	 * Exit a parse tree produced by the `LensT`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitLensT?: (ctx: LensTContext) => void;

	/**
	 * Enter a parse tree produced by the `FnT`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterFnT?: (ctx: FnTContext) => void;
	/**
	 * Exit a parse tree produced by the `FnT`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitFnT?: (ctx: FnTContext) => void;

	/**
	 * Enter a parse tree produced by the `OptionT`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterOptionT?: (ctx: OptionTContext) => void;
	/**
	 * Exit a parse tree produced by the `OptionT`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitOptionT?: (ctx: OptionTContext) => void;

	/**
	 * Enter a parse tree produced by the `ListT`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterListT?: (ctx: ListTContext) => void;
	/**
	 * Exit a parse tree produced by the `ListT`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitListT?: (ctx: ListTContext) => void;

	/**
	 * Enter a parse tree produced by the `TupleT`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterTupleT?: (ctx: TupleTContext) => void;
	/**
	 * Exit a parse tree produced by the `TupleT`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitTupleT?: (ctx: TupleTContext) => void;

	/**
	 * Enter a parse tree produced by the `DefnT`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterDefnT?: (ctx: DefnTContext) => void;
	/**
	 * Exit a parse tree produced by the `DefnT`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitDefnT?: (ctx: DefnTContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentBinding`
	 * labeled alternative in `CWScriptParser.let_binding`.
	 * @param ctx the parse tree
	 */
	enterIdentBinding?: (ctx: IdentBindingContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentBinding`
	 * labeled alternative in `CWScriptParser.let_binding`.
	 * @param ctx the parse tree
	 */
	exitIdentBinding?: (ctx: IdentBindingContext) => void;

	/**
	 * Enter a parse tree produced by the `StructBinding`
	 * labeled alternative in `CWScriptParser.let_binding`.
	 * @param ctx the parse tree
	 */
	enterStructBinding?: (ctx: StructBindingContext) => void;
	/**
	 * Exit a parse tree produced by the `StructBinding`
	 * labeled alternative in `CWScriptParser.let_binding`.
	 * @param ctx the parse tree
	 */
	exitStructBinding?: (ctx: StructBindingContext) => void;

	/**
	 * Enter a parse tree produced by the `TupleBinding`
	 * labeled alternative in `CWScriptParser.let_binding`.
	 * @param ctx the parse tree
	 */
	enterTupleBinding?: (ctx: TupleBindingContext) => void;
	/**
	 * Exit a parse tree produced by the `TupleBinding`
	 * labeled alternative in `CWScriptParser.let_binding`.
	 * @param ctx the parse tree
	 */
	exitTupleBinding?: (ctx: TupleBindingContext) => void;

	/**
	 * Enter a parse tree produced by the `DebugStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterDebugStmt?: (ctx: DebugStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `DebugStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitDebugStmt?: (ctx: DebugStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `LetStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterLetStmt?: (ctx: LetStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `LetStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitLetStmt?: (ctx: LetStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `ConstStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterConstStmt?: (ctx: ConstStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ConstStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitConstStmt?: (ctx: ConstStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `AssignStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterAssignStmt?: (ctx: AssignStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitAssignStmt?: (ctx: AssignStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `IfStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterIfStmt?: (ctx: IfStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `IfStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitIfStmt?: (ctx: IfStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `ForStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterForStmt?: (ctx: ForStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ForStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitForStmt?: (ctx: ForStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `ExecStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterExecStmt?: (ctx: ExecStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ExecStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitExecStmt?: (ctx: ExecStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `DelegateExecStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterDelegateExecStmt?: (ctx: DelegateExecStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `DelegateExecStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitDelegateExecStmt?: (ctx: DelegateExecStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `InstantiateStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterInstantiateStmt?: (ctx: InstantiateStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `InstantiateStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitInstantiateStmt?: (ctx: InstantiateStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `EmitStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterEmitStmt?: (ctx: EmitStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `EmitStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitEmitStmt?: (ctx: EmitStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `ReturnStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ReturnStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `FailStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterFailStmt?: (ctx: FailStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `FailStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitFailStmt?: (ctx: FailStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterExprStmt?: (ctx: ExprStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitExprStmt?: (ctx: ExprStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	enterSourceFile?: (ctx: SourceFileContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	exitSourceFile?: (ctx: SourceFileContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.topLevelStmt`.
	 * @param ctx the parse tree
	 */
	enterTopLevelStmt?: (ctx: TopLevelStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.topLevelStmt`.
	 * @param ctx the parse tree
	 */
	exitTopLevelStmt?: (ctx: TopLevelStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.contractDefn`.
	 * @param ctx the parse tree
	 */
	enterContractDefn?: (ctx: ContractDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.contractDefn`.
	 * @param ctx the parse tree
	 */
	exitContractDefn?: (ctx: ContractDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.interfaceDefn`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDefn?: (ctx: InterfaceDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.interfaceDefn`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDefn?: (ctx: InterfaceDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.contractBlock`.
	 * @param ctx the parse tree
	 */
	enterContractBlock?: (ctx: ContractBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.contractBlock`.
	 * @param ctx the parse tree
	 */
	exitContractBlock?: (ctx: ContractBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 */
	enterImportStmt?: (ctx: ImportStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 */
	exitImportStmt?: (ctx: ImportStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.contractItem`.
	 * @param ctx the parse tree
	 */
	enterContractItem?: (ctx: ContractItemContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.contractItem`.
	 * @param ctx the parse tree
	 */
	exitContractItem?: (ctx: ContractItemContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.paramList`.
	 * @param ctx the parse tree
	 */
	enterParamList?: (ctx: ParamListContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.paramList`.
	 * @param ctx the parse tree
	 */
	exitParamList?: (ctx: ParamListContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.fnParams`.
	 * @param ctx the parse tree
	 */
	enterFnParams?: (ctx: FnParamsContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.fnParams`.
	 * @param ctx the parse tree
	 */
	exitFnParams?: (ctx: FnParamsContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.structDefn_fn`.
	 * @param ctx the parse tree
	 */
	enterStructDefn_fn?: (ctx: StructDefn_fnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.structDefn_fn`.
	 * @param ctx the parse tree
	 */
	exitStructDefn_fn?: (ctx: StructDefn_fnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.errorDefn`.
	 * @param ctx the parse tree
	 */
	enterErrorDefn?: (ctx: ErrorDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.errorDefn`.
	 * @param ctx the parse tree
	 */
	exitErrorDefn?: (ctx: ErrorDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.errorDefnBlock`.
	 * @param ctx the parse tree
	 */
	enterErrorDefnBlock?: (ctx: ErrorDefnBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.errorDefnBlock`.
	 * @param ctx the parse tree
	 */
	exitErrorDefnBlock?: (ctx: ErrorDefnBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.eventDefn`.
	 * @param ctx the parse tree
	 */
	enterEventDefn?: (ctx: EventDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.eventDefn`.
	 * @param ctx the parse tree
	 */
	exitEventDefn?: (ctx: EventDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.eventDefnBlock`.
	 * @param ctx the parse tree
	 */
	enterEventDefnBlock?: (ctx: EventDefnBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.eventDefnBlock`.
	 * @param ctx the parse tree
	 */
	exitEventDefnBlock?: (ctx: EventDefnBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.stateDefnBlock`.
	 * @param ctx the parse tree
	 */
	enterStateDefnBlock?: (ctx: StateDefnBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.stateDefnBlock`.
	 * @param ctx the parse tree
	 */
	exitStateDefnBlock?: (ctx: StateDefnBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 */
	enterStateDefn?: (ctx: StateDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 */
	exitStateDefn?: (ctx: StateDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.mapKeyDefn`.
	 * @param ctx the parse tree
	 */
	enterMapKeyDefn?: (ctx: MapKeyDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.mapKeyDefn`.
	 * @param ctx the parse tree
	 */
	exitMapKeyDefn?: (ctx: MapKeyDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.instantiateDefn`.
	 * @param ctx the parse tree
	 */
	enterInstantiateDefn?: (ctx: InstantiateDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.instantiateDefn`.
	 * @param ctx the parse tree
	 */
	exitInstantiateDefn?: (ctx: InstantiateDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.instantiateDecl`.
	 * @param ctx the parse tree
	 */
	enterInstantiateDecl?: (ctx: InstantiateDeclContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.instantiateDecl`.
	 * @param ctx the parse tree
	 */
	exitInstantiateDecl?: (ctx: InstantiateDeclContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.execDefn`.
	 * @param ctx the parse tree
	 */
	enterExecDefn?: (ctx: ExecDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.execDefn`.
	 * @param ctx the parse tree
	 */
	exitExecDefn?: (ctx: ExecDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.execDecl`.
	 * @param ctx the parse tree
	 */
	enterExecDecl?: (ctx: ExecDeclContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.execDecl`.
	 * @param ctx the parse tree
	 */
	exitExecDecl?: (ctx: ExecDeclContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.queryDefn`.
	 * @param ctx the parse tree
	 */
	enterQueryDefn?: (ctx: QueryDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.queryDefn`.
	 * @param ctx the parse tree
	 */
	exitQueryDefn?: (ctx: QueryDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.queryDecl`.
	 * @param ctx the parse tree
	 */
	enterQueryDecl?: (ctx: QueryDeclContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.queryDecl`.
	 * @param ctx the parse tree
	 */
	exitQueryDecl?: (ctx: QueryDeclContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.replyDefn`.
	 * @param ctx the parse tree
	 */
	enterReplyDefn?: (ctx: ReplyDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.replyDefn`.
	 * @param ctx the parse tree
	 */
	exitReplyDefn?: (ctx: ReplyDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.enumDefn`.
	 * @param ctx the parse tree
	 */
	enterEnumDefn?: (ctx: EnumDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.enumDefn`.
	 * @param ctx the parse tree
	 */
	exitEnumDefn?: (ctx: EnumDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.variant_`.
	 * @param ctx the parse tree
	 */
	enterVariant_?: (ctx: Variant_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.variant_`.
	 * @param ctx the parse tree
	 */
	exitVariant_?: (ctx: Variant_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.variant_struct`.
	 * @param ctx the parse tree
	 */
	enterVariant_struct?: (ctx: Variant_structContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.variant_struct`.
	 * @param ctx the parse tree
	 */
	exitVariant_struct?: (ctx: Variant_structContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.variant_unit`.
	 * @param ctx the parse tree
	 */
	enterVariant_unit?: (ctx: Variant_unitContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.variant_unit`.
	 * @param ctx the parse tree
	 */
	exitVariant_unit?: (ctx: Variant_unitContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterTypeExpr?: (ctx: TypeExprContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitTypeExpr?: (ctx: TypeExprContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.fnType`.
	 * @param ctx the parse tree
	 */
	enterFnType?: (ctx: FnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.fnType`.
	 * @param ctx the parse tree
	 */
	exitFnType?: (ctx: FnTypeContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.typeLens`.
	 * @param ctx the parse tree
	 */
	enterTypeLens?: (ctx: TypeLensContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.typeLens`.
	 * @param ctx the parse tree
	 */
	exitTypeLens?: (ctx: TypeLensContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.typePath`.
	 * @param ctx the parse tree
	 */
	enterTypePath?: (ctx: TypePathContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.typePath`.
	 * @param ctx the parse tree
	 */
	exitTypePath?: (ctx: TypePathContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.typeVariant`.
	 * @param ctx the parse tree
	 */
	enterTypeVariant?: (ctx: TypeVariantContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.typeVariant`.
	 * @param ctx the parse tree
	 */
	exitTypeVariant?: (ctx: TypeVariantContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.typeDefn`.
	 * @param ctx the parse tree
	 */
	enterTypeDefn?: (ctx: TypeDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.typeDefn`.
	 * @param ctx the parse tree
	 */
	exitTypeDefn?: (ctx: TypeDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.structDefn`.
	 * @param ctx the parse tree
	 */
	enterStructDefn?: (ctx: StructDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.structDefn`.
	 * @param ctx the parse tree
	 */
	exitStructDefn?: (ctx: StructDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.typeAliasDefn`.
	 * @param ctx the parse tree
	 */
	enterTypeAliasDefn?: (ctx: TypeAliasDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.typeAliasDefn`.
	 * @param ctx the parse tree
	 */
	exitTypeAliasDefn?: (ctx: TypeAliasDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.fnDefn`.
	 * @param ctx the parse tree
	 */
	enterFnDefn?: (ctx: FnDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.fnDefn`.
	 * @param ctx the parse tree
	 */
	exitFnDefn?: (ctx: FnDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.annot`.
	 * @param ctx the parse tree
	 */
	enterAnnot?: (ctx: AnnotContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.annot`.
	 * @param ctx the parse tree
	 */
	exitAnnot?: (ctx: AnnotContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.callOptions`.
	 * @param ctx the parse tree
	 */
	enterCallOptions?: (ctx: CallOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.callOptions`.
	 * @param ctx the parse tree
	 */
	exitCallOptions?: (ctx: CallOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.debugStmt_`.
	 * @param ctx the parse tree
	 */
	enterDebugStmt_?: (ctx: DebugStmt_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.debugStmt_`.
	 * @param ctx the parse tree
	 */
	exitDebugStmt_?: (ctx: DebugStmt_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.letStmt_`.
	 * @param ctx the parse tree
	 */
	enterLetStmt_?: (ctx: LetStmt_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.letStmt_`.
	 * @param ctx the parse tree
	 */
	exitLetStmt_?: (ctx: LetStmt_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.constStmt_`.
	 * @param ctx the parse tree
	 */
	enterConstStmt_?: (ctx: ConstStmt_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.constStmt_`.
	 * @param ctx the parse tree
	 */
	exitConstStmt_?: (ctx: ConstStmt_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.identBinding_`.
	 * @param ctx the parse tree
	 */
	enterIdentBinding_?: (ctx: IdentBinding_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.identBinding_`.
	 * @param ctx the parse tree
	 */
	exitIdentBinding_?: (ctx: IdentBinding_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.let_binding`.
	 * @param ctx the parse tree
	 */
	enterLet_binding?: (ctx: Let_bindingContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.let_binding`.
	 * @param ctx the parse tree
	 */
	exitLet_binding?: (ctx: Let_bindingContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.assignStmt_`.
	 * @param ctx the parse tree
	 */
	enterAssignStmt_?: (ctx: AssignStmt_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.assignStmt_`.
	 * @param ctx the parse tree
	 */
	exitAssignStmt_?: (ctx: AssignStmt_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	enterAssignLHS?: (ctx: AssignLHSContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	exitAssignLHS?: (ctx: AssignLHSContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.closureParams`.
	 * @param ctx the parse tree
	 */
	enterClosureParams?: (ctx: ClosureParamsContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.closureParams`.
	 * @param ctx the parse tree
	 */
	exitClosureParams?: (ctx: ClosureParamsContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.closure`.
	 * @param ctx the parse tree
	 */
	enterClosure?: (ctx: ClosureContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.closure`.
	 * @param ctx the parse tree
	 */
	exitClosure?: (ctx: ClosureContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.tryCatchElseExpr_`.
	 * @param ctx the parse tree
	 */
	enterTryCatchElseExpr_?: (ctx: TryCatchElseExpr_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.tryCatchElseExpr_`.
	 * @param ctx the parse tree
	 */
	exitTryCatchElseExpr_?: (ctx: TryCatchElseExpr_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchClause?: (ctx: CatchClauseContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.arg`.
	 * @param ctx the parse tree
	 */
	enterArg?: (ctx: ArgContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.arg`.
	 * @param ctx the parse tree
	 */
	exitArg?: (ctx: ArgContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.memberVal`.
	 * @param ctx the parse tree
	 */
	enterMemberVal?: (ctx: MemberValContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.memberVal`.
	 * @param ctx the parse tree
	 */
	exitMemberVal?: (ctx: MemberValContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.ifStmt_`.
	 * @param ctx the parse tree
	 */
	enterIfStmt_?: (ctx: IfStmt_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.ifStmt_`.
	 * @param ctx the parse tree
	 */
	exitIfStmt_?: (ctx: IfStmt_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.elseClause`.
	 * @param ctx the parse tree
	 */
	enterElseClause?: (ctx: ElseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.elseClause`.
	 * @param ctx the parse tree
	 */
	exitElseClause?: (ctx: ElseClauseContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.forStmt_`.
	 * @param ctx the parse tree
	 */
	enterForStmt_?: (ctx: ForStmt_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.forStmt_`.
	 * @param ctx the parse tree
	 */
	exitForStmt_?: (ctx: ForStmt_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.ident`.
	 * @param ctx the parse tree
	 */
	enterIdent?: (ctx: IdentContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.ident`.
	 * @param ctx the parse tree
	 */
	exitIdent?: (ctx: IdentContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.reservedKeyword`.
	 * @param ctx the parse tree
	 */
	enterReservedKeyword?: (ctx: ReservedKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.reservedKeyword`.
	 * @param ctx the parse tree
	 */
	exitReservedKeyword?: (ctx: ReservedKeywordContext) => void;
}

