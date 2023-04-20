// Generated from ./grammar/CWScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CWScriptParserListener } from "./CWScriptParserListener";
import { CWScriptParserVisitor } from "./CWScriptParserVisitor";


export class CWScriptParser extends Parser {
	public static readonly DEBUG = 1;
	public static readonly CONTRACT = 2;
	public static readonly INTERFACE = 3;
	public static readonly IMPORT = 4;
	public static readonly IMPLEMENTS = 5;
	public static readonly EXTENDS = 6;
	public static readonly ERROR = 7;
	public static readonly EVENT = 8;
	public static readonly INSTANTIATE_NOW = 9;
	public static readonly EXEC_NOW = 10;
	public static readonly QUERY_NOW = 11;
	public static readonly DELEGATE_EXEC = 12;
	public static readonly INSTANTIATE = 13;
	public static readonly EXEC = 14;
	public static readonly QUERY = 15;
	public static readonly REPLY = 16;
	public static readonly FOR = 17;
	public static readonly IN = 18;
	public static readonly FROM = 19;
	public static readonly STATE = 20;
	public static readonly IF = 21;
	public static readonly IS = 22;
	public static readonly TRY = 23;
	public static readonly CATCH = 24;
	public static readonly ELSE = 25;
	public static readonly NOT = 26;
	public static readonly NONE = 27;
	public static readonly MUT = 28;
	public static readonly AND = 29;
	public static readonly OR = 30;
	public static readonly TRUE = 31;
	public static readonly FALSE = 32;
	public static readonly FN = 33;
	public static readonly LET = 34;
	public static readonly CONST = 35;
	public static readonly FAIL = 36;
	public static readonly RETURN = 37;
	public static readonly STRUCT = 38;
	public static readonly ENUM = 39;
	public static readonly TYPE = 40;
	public static readonly EMIT = 41;
	public static readonly AS = 42;
	public static readonly TILDE = 43;
	public static readonly LPAREN = 44;
	public static readonly RPAREN = 45;
	public static readonly LBRACK = 46;
	public static readonly RBRACK = 47;
	public static readonly LBRACE = 48;
	public static readonly RBRACE = 49;
	public static readonly DOT = 50;
	public static readonly COMMA = 51;
	public static readonly D_QUEST = 52;
	public static readonly QUEST = 53;
	public static readonly BANG = 54;
	public static readonly SEMI = 55;
	public static readonly COLON = 56;
	public static readonly D_COLON = 57;
	public static readonly HASH = 58;
	public static readonly AT = 59;
	public static readonly AMP = 60;
	public static readonly ARROW = 61;
	public static readonly FAT_ARROW = 62;
	public static readonly BAR = 63;
	public static readonly S_QUOTE = 64;
	public static readonly D_QUOTE = 65;
	public static readonly EQ = 66;
	public static readonly EQ_EQ = 67;
	public static readonly NEQ = 68;
	public static readonly PLUS = 69;
	public static readonly PLUS_EQ = 70;
	public static readonly MINUS = 71;
	public static readonly MINUS_EQ = 72;
	public static readonly MUL = 73;
	public static readonly MUL_EQ = 74;
	public static readonly DIV = 75;
	public static readonly DIV_EQ = 76;
	public static readonly MOD = 77;
	public static readonly MOD_EQ = 78;
	public static readonly LT = 79;
	public static readonly LT_EQ = 80;
	public static readonly GT = 81;
	public static readonly GT_EQ = 82;
	public static readonly POW = 83;
	public static readonly Ident = 84;
	public static readonly StringLiteral = 85;
	public static readonly IntLiteral = 86;
	public static readonly DecLiteral = 87;
	public static readonly BoolLiteral = 88;
	public static readonly CWSPEC_LINE_COMMENT = 89;
	public static readonly CWSPEC_BLOCK_COMMENT = 90;
	public static readonly LINE_COMMENT = 91;
	public static readonly BLOCK_COMMENT = 92;
	public static readonly WS = 93;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_topLevelStmt = 1;
	public static readonly RULE_contractDefn = 2;
	public static readonly RULE_interfaceDefn = 3;
	public static readonly RULE_contractBlock = 4;
	public static readonly RULE_importStmt = 5;
	public static readonly RULE_contractItem = 6;
	public static readonly RULE_param = 7;
	public static readonly RULE_paramList = 8;
	public static readonly RULE_fnParams = 9;
	public static readonly RULE_structDefn_fn = 10;
	public static readonly RULE_errorDefn = 11;
	public static readonly RULE_errorDefnBlock = 12;
	public static readonly RULE_eventDefn = 13;
	public static readonly RULE_eventDefnBlock = 14;
	public static readonly RULE_stateDefnBlock = 15;
	public static readonly RULE_stateDefn = 16;
	public static readonly RULE_mapKeyDefn = 17;
	public static readonly RULE_instantiateDefn = 18;
	public static readonly RULE_instantiateDecl = 19;
	public static readonly RULE_execDefn = 20;
	public static readonly RULE_execDecl = 21;
	public static readonly RULE_queryDefn = 22;
	public static readonly RULE_queryDecl = 23;
	public static readonly RULE_replyDefn = 24;
	public static readonly RULE_enumDefn = 25;
	public static readonly RULE_variant_ = 26;
	public static readonly RULE_variant_struct = 27;
	public static readonly RULE_variant_unit = 28;
	public static readonly RULE_typeExpr = 29;
	public static readonly RULE_fnType = 30;
	public static readonly RULE_typeLens = 31;
	public static readonly RULE_typePath = 32;
	public static readonly RULE_typeVariant = 33;
	public static readonly RULE_typeDefn = 34;
	public static readonly RULE_structDefn = 35;
	public static readonly RULE_typeAliasDefn = 36;
	public static readonly RULE_fnDefn = 37;
	public static readonly RULE_annot = 38;
	public static readonly RULE_callOptions = 39;
	public static readonly RULE_stmt = 40;
	public static readonly RULE_debugStmt_ = 41;
	public static readonly RULE_letStmt_ = 42;
	public static readonly RULE_constStmt_ = 43;
	public static readonly RULE_identBinding_ = 44;
	public static readonly RULE_let_binding = 45;
	public static readonly RULE_assignStmt_ = 46;
	public static readonly RULE_assignLHS = 47;
	public static readonly RULE_expr = 48;
	public static readonly RULE_closureParams = 49;
	public static readonly RULE_closure = 50;
	public static readonly RULE_block = 51;
	public static readonly RULE_tryCatchElseExpr_ = 52;
	public static readonly RULE_catchClause = 53;
	public static readonly RULE_arg = 54;
	public static readonly RULE_memberVal = 55;
	public static readonly RULE_literal = 56;
	public static readonly RULE_ifStmt_ = 57;
	public static readonly RULE_elseClause = 58;
	public static readonly RULE_forStmt_ = 59;
	public static readonly RULE_ident = 60;
	public static readonly RULE_reservedKeyword = 61;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "topLevelStmt", "contractDefn", "interfaceDefn", "contractBlock", 
		"importStmt", "contractItem", "param", "paramList", "fnParams", "structDefn_fn", 
		"errorDefn", "errorDefnBlock", "eventDefn", "eventDefnBlock", "stateDefnBlock", 
		"stateDefn", "mapKeyDefn", "instantiateDefn", "instantiateDecl", "execDefn", 
		"execDecl", "queryDefn", "queryDecl", "replyDefn", "enumDefn", "variant_", 
		"variant_struct", "variant_unit", "typeExpr", "fnType", "typeLens", "typePath", 
		"typeVariant", "typeDefn", "structDefn", "typeAliasDefn", "fnDefn", "annot", 
		"callOptions", "stmt", "debugStmt_", "letStmt_", "constStmt_", "identBinding_", 
		"let_binding", "assignStmt_", "assignLHS", "expr", "closureParams", "closure", 
		"block", "tryCatchElseExpr_", "catchClause", "arg", "memberVal", "literal", 
		"ifStmt_", "elseClause", "forStmt_", "ident", "reservedKeyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'debug!'", "'contract'", "'interface'", "'import'", "'implements'", 
		"'extends'", "'error'", "'event'", "'instantiate!'", "'exec!'", "'query!'", 
		"'delegate_exec!'", "'instantiate'", "'exec'", "'query'", "'reply'", "'for'", 
		"'in'", "'from'", "'state'", "'if'", "'is'", "'try'", "'catch'", "'else'", 
		"'not'", "'None'", "'mut'", "'and'", "'or'", "'true'", "'false'", "'fn'", 
		"'let'", "'const'", "'fail!'", "'return'", "'struct'", "'enum'", "'type'", 
		"'emit'", "'as'", "'~'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'.'", 
		"','", "'??'", "'?'", "'!'", "';'", "':'", "'::'", "'#'", "'@'", "'&'", 
		"'->'", "'=>'", "'|'", "'''", "'\"'", "'='", "'=='", "'!='", "'+'", "'+='", 
		"'-'", "'-='", "'*'", "'*='", "'/'", "'/='", "'%'", "'%='", "'<'", "'<='", 
		"'>'", "'>='", "'**'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DEBUG", "CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "EXTENDS", 
		"ERROR", "EVENT", "INSTANTIATE_NOW", "EXEC_NOW", "QUERY_NOW", "DELEGATE_EXEC", 
		"INSTANTIATE", "EXEC", "QUERY", "REPLY", "FOR", "IN", "FROM", "STATE", 
		"IF", "IS", "TRY", "CATCH", "ELSE", "NOT", "NONE", "MUT", "AND", "OR", 
		"TRUE", "FALSE", "FN", "LET", "CONST", "FAIL", "RETURN", "STRUCT", "ENUM", 
		"TYPE", "EMIT", "AS", "TILDE", "LPAREN", "RPAREN", "LBRACK", "RBRACK", 
		"LBRACE", "RBRACE", "DOT", "COMMA", "D_QUEST", "QUEST", "BANG", "SEMI", 
		"COLON", "D_COLON", "HASH", "AT", "AMP", "ARROW", "FAT_ARROW", "BAR", 
		"S_QUOTE", "D_QUOTE", "EQ", "EQ_EQ", "NEQ", "PLUS", "PLUS_EQ", "MINUS", 
		"MINUS_EQ", "MUL", "MUL_EQ", "DIV", "DIV_EQ", "MOD", "MOD_EQ", "LT", "LT_EQ", 
		"GT", "GT_EQ", "POW", "Ident", "StringLiteral", "IntLiteral", "DecLiteral", 
		"BoolLiteral", "CWSPEC_LINE_COMMENT", "CWSPEC_BLOCK_COMMENT", "LINE_COMMENT", 
		"BLOCK_COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CWScriptParser._LITERAL_NAMES, CWScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CWScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CWScriptParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CWScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CWScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CWScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceFile(): SourceFileContext {
		let _localctx: SourceFileContext = new SourceFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CWScriptParser.RULE_sourceFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT))) !== 0) || _la === CWScriptParser.CONST) {
				{
				{
				this.state = 124;
				this.topLevelStmt();
				}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 130;
			this.match(CWScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topLevelStmt(): TopLevelStmtContext {
		let _localctx: TopLevelStmtContext = new TopLevelStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CWScriptParser.RULE_topLevelStmt);
		try {
			this.state = 136;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.IMPORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 132;
				this.importStmt();
				}
				break;
			case CWScriptParser.CONTRACT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 133;
				this.contractDefn();
				}
				break;
			case CWScriptParser.INTERFACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 134;
				this.interfaceDefn();
				}
				break;
			case CWScriptParser.CONST:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 135;
				this.constStmt_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractDefn(): ContractDefnContext {
		let _localctx: ContractDefnContext = new ContractDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CWScriptParser.RULE_contractDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(CWScriptParser.CONTRACT);
			{
			this.state = 139;
			_localctx._name = this.ident();
			}
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 140;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 141;
				_localctx._base = this.typePath();
				}
				}
			}

			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.IMPLEMENTS) {
				{
				this.state = 144;
				this.match(CWScriptParser.IMPLEMENTS);
				{
				this.state = 145;
				_localctx._typePath = this.typePath();
				_localctx._interfaces.push(_localctx._typePath);
				}
				}
			}

			{
			this.state = 148;
			_localctx._body = this.contractBlock();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDefn(): InterfaceDefnContext {
		let _localctx: InterfaceDefnContext = new InterfaceDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CWScriptParser.RULE_interfaceDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.match(CWScriptParser.INTERFACE);
			{
			this.state = 151;
			_localctx._name = this.ident();
			}
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 152;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 153;
				_localctx._base = this.typePath();
				}
				}
			}

			{
			this.state = 156;
			_localctx._body = this.contractBlock();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractBlock(): ContractBlockContext {
		let _localctx: ContractBlockContext = new ContractBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CWScriptParser.RULE_contractBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(CWScriptParser.LBRACE);
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.STATE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CWScriptParser.FN - 33)) | (1 << (CWScriptParser.CONST - 33)) | (1 << (CWScriptParser.STRUCT - 33)) | (1 << (CWScriptParser.ENUM - 33)) | (1 << (CWScriptParser.TYPE - 33)) | (1 << (CWScriptParser.HASH - 33)))) !== 0)) {
				{
				{
				this.state = 159;
				_localctx._contractItem = this.contractItem();
				_localctx._body.push(_localctx._contractItem);
				}
				}
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 165;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStmt(): ImportStmtContext {
		let _localctx: ImportStmtContext = new ImportStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CWScriptParser.RULE_importStmt);
		let _la: number;
		try {
			this.state = 191;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				_localctx = new ImportAllStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 167;
				this.match(CWScriptParser.IMPORT);
				this.state = 168;
				this.match(CWScriptParser.MUL);
				this.state = 169;
				this.match(CWScriptParser.FROM);
				{
				this.state = 170;
				(_localctx as ImportAllStmtContext)._src = this.match(CWScriptParser.StringLiteral);
				}
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 171;
					this.match(CWScriptParser.SEMI);
					}
				}

				}
				break;

			case 2:
				_localctx = new ImportItemsStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 174;
				this.match(CWScriptParser.IMPORT);
				{
				{
				this.state = 175;
				this.match(CWScriptParser.LBRACE);
				{
				this.state = 176;
				(_localctx as ImportItemsStmtContext)._ident = this.ident();
				(_localctx as ImportItemsStmtContext)._items.push((_localctx as ImportItemsStmtContext)._ident);
				}
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 177;
					this.match(CWScriptParser.COMMA);
					this.state = 178;
					(_localctx as ImportItemsStmtContext)._ident = this.ident();
					(_localctx as ImportItemsStmtContext)._items.push((_localctx as ImportItemsStmtContext)._ident);
					}
					}
					this.state = 183;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 184;
				this.match(CWScriptParser.RBRACE);
				}
				}
				this.state = 186;
				this.match(CWScriptParser.FROM);
				{
				this.state = 187;
				(_localctx as ImportItemsStmtContext)._src = this.match(CWScriptParser.StringLiteral);
				}
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 188;
					this.match(CWScriptParser.SEMI);
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractItem(): ContractItemContext {
		let _localctx: ContractItemContext = new ContractItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CWScriptParser.RULE_contractItem);
		try {
			this.state = 209;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 193;
				this.typeDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 194;
				this.constStmt_();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 195;
				this.fnDefn();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 196;
				this.errorDefn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 197;
				this.errorDefnBlock();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 198;
				this.eventDefn();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 199;
				this.eventDefnBlock();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 200;
				this.stateDefnBlock();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 201;
				this.instantiateDefn();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 202;
				this.instantiateDecl();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 203;
				this.execDefn();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 204;
				this.execDecl();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 205;
				this.queryDefn();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 206;
				this.queryDefn();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 207;
				this.queryDecl();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 208;
				this.replyDefn();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CWScriptParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 211;
			_localctx._name = this.ident();
			}
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.QUEST) {
				{
				this.state = 212;
				_localctx._optional = this.match(CWScriptParser.QUEST);
				}
			}

			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 215;
				this.match(CWScriptParser.COLON);
				{
				this.state = 216;
				_localctx._ty = this.typeExpr(0);
				}
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EQ) {
					{
					this.state = 217;
					this.match(CWScriptParser.EQ);
					this.state = 218;
					_localctx._default = this.expr(0);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CWScriptParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.param();
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 224;
				this.match(CWScriptParser.COMMA);
				this.state = 225;
				this.param();
				}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnParams(): FnParamsContext {
		let _localctx: FnParamsContext = new FnParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CWScriptParser.RULE_fnParams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.match(CWScriptParser.LPAREN);
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 232;
				_localctx._param = this.param();
				_localctx._params.push(_localctx._param);
				}
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 233;
					this.match(CWScriptParser.COMMA);
					this.state = 234;
					_localctx._param = this.param();
					_localctx._params.push(_localctx._param);
					}
					}
					this.state = 239;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 242;
			this.match(CWScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDefn_fn(): StructDefn_fnContext {
		let _localctx: StructDefn_fnContext = new StructDefn_fnContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CWScriptParser.RULE_structDefn_fn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 244;
			_localctx._name = this.ident();
			}
			{
			this.state = 245;
			_localctx._params = this.fnParams();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorDefn(): ErrorDefnContext {
		let _localctx: ErrorDefnContext = new ErrorDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CWScriptParser.RULE_errorDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.match(CWScriptParser.ERROR);
			this.state = 248;
			_localctx._defn = this.structDefn_fn();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorDefnBlock(): ErrorDefnBlockContext {
		let _localctx: ErrorDefnBlockContext = new ErrorDefnBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CWScriptParser.RULE_errorDefnBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.match(CWScriptParser.ERROR);
			this.state = 251;
			this.match(CWScriptParser.LBRACE);
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 252;
				_localctx._structDefn_fn = this.structDefn_fn();
				_localctx._defns.push(_localctx._structDefn_fn);
				}
				this.state = 257;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 253;
						this.match(CWScriptParser.COMMA);
						this.state = 254;
						_localctx._structDefn_fn = this.structDefn_fn();
						_localctx._defns.push(_localctx._structDefn_fn);
						}
						}
					}
					this.state = 259;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				}
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 260;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
			}

			this.state = 265;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventDefn(): EventDefnContext {
		let _localctx: EventDefnContext = new EventDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CWScriptParser.RULE_eventDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.match(CWScriptParser.EVENT);
			this.state = 268;
			this.structDefn_fn();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventDefnBlock(): EventDefnBlockContext {
		let _localctx: EventDefnBlockContext = new EventDefnBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CWScriptParser.RULE_eventDefnBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.match(CWScriptParser.EVENT);
			this.state = 271;
			this.match(CWScriptParser.LBRACE);
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 272;
				_localctx._structDefn_fn = this.structDefn_fn();
				_localctx._defns.push(_localctx._structDefn_fn);
				}
				this.state = 277;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 273;
						this.match(CWScriptParser.COMMA);
						this.state = 274;
						_localctx._structDefn_fn = this.structDefn_fn();
						_localctx._defns.push(_localctx._structDefn_fn);
						}
						}
					}
					this.state = 279;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				}
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 280;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
			}

			this.state = 285;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateDefnBlock(): StateDefnBlockContext {
		let _localctx: StateDefnBlockContext = new StateDefnBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CWScriptParser.RULE_stateDefnBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(CWScriptParser.STATE);
			this.state = 288;
			this.match(CWScriptParser.LBRACE);
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 289;
				_localctx._stateDefn = this.stateDefn();
				_localctx._defns.push(_localctx._stateDefn);
				}
				}
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 295;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateDefn(): StateDefnContext {
		let _localctx: StateDefnContext = new StateDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CWScriptParser.RULE_stateDefn);
		let _la: number;
		try {
			this.state = 321;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				_localctx = new StateDefn_ItemContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 297;
				(_localctx as StateDefn_ItemContext)._name = this.ident();
				}
				this.state = 298;
				this.match(CWScriptParser.COLON);
				{
				this.state = 299;
				(_localctx as StateDefn_ItemContext)._ty = this.typeExpr(0);
				}
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EQ) {
					{
					this.state = 300;
					this.match(CWScriptParser.EQ);
					{
					this.state = 301;
					(_localctx as StateDefn_ItemContext)._default = this.expr(0);
					}
					}
				}

				}
				break;

			case 2:
				_localctx = new StateDefn_MapContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 304;
				(_localctx as StateDefn_MapContext)._name = this.ident();
				}
				this.state = 305;
				this.match(CWScriptParser.LBRACK);
				{
				this.state = 306;
				(_localctx as StateDefn_MapContext)._mapKeyDefn = this.mapKeyDefn();
				(_localctx as StateDefn_MapContext)._mapKeys.push((_localctx as StateDefn_MapContext)._mapKeyDefn);
				}
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 307;
					this.match(CWScriptParser.COMMA);
					{
					this.state = 308;
					(_localctx as StateDefn_MapContext)._mapKeyDefn = this.mapKeyDefn();
					(_localctx as StateDefn_MapContext)._mapKeys.push((_localctx as StateDefn_MapContext)._mapKeyDefn);
					}
					}
					}
					this.state = 313;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 314;
				this.match(CWScriptParser.RBRACK);
				this.state = 315;
				this.match(CWScriptParser.COLON);
				{
				this.state = 316;
				(_localctx as StateDefn_MapContext)._ty = this.typeExpr(0);
				}
				this.state = 319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EQ) {
					{
					this.state = 317;
					this.match(CWScriptParser.EQ);
					{
					this.state = 318;
					(_localctx as StateDefn_MapContext)._default = this.expr(0);
					}
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapKeyDefn(): MapKeyDefnContext {
		let _localctx: MapKeyDefnContext = new MapKeyDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CWScriptParser.RULE_mapKeyDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				{
				this.state = 323;
				_localctx._name = this.ident();
				}
				this.state = 324;
				this.match(CWScriptParser.COLON);
				}
				break;
			}
			{
			this.state = 328;
			_localctx._ty = this.typeExpr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instantiateDefn(): InstantiateDefnContext {
		let _localctx: InstantiateDefnContext = new InstantiateDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CWScriptParser.RULE_instantiateDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.match(CWScriptParser.HASH);
			this.state = 331;
			this.match(CWScriptParser.INSTANTIATE);
			this.state = 332;
			_localctx._params = this.fnParams();
			this.state = 333;
			_localctx._body = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instantiateDecl(): InstantiateDeclContext {
		let _localctx: InstantiateDeclContext = new InstantiateDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CWScriptParser.RULE_instantiateDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.match(CWScriptParser.HASH);
			this.state = 336;
			this.match(CWScriptParser.INSTANTIATE);
			this.state = 337;
			_localctx._params = this.fnParams();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execDefn(): ExecDefnContext {
		let _localctx: ExecDefnContext = new ExecDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CWScriptParser.RULE_execDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.match(CWScriptParser.EXEC);
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.MUL) {
				{
				this.state = 340;
				_localctx._tup = this.match(CWScriptParser.MUL);
				}
			}

			this.state = 343;
			this.match(CWScriptParser.HASH);
			this.state = 344;
			_localctx._name = this.ident();
			this.state = 345;
			_localctx._params = this.fnParams();
			this.state = 346;
			_localctx._body = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execDecl(): ExecDeclContext {
		let _localctx: ExecDeclContext = new ExecDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CWScriptParser.RULE_execDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(CWScriptParser.EXEC);
			this.state = 350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.MUL) {
				{
				this.state = 349;
				_localctx._tup = this.match(CWScriptParser.MUL);
				}
			}

			this.state = 352;
			this.match(CWScriptParser.HASH);
			this.state = 353;
			_localctx._name = this.ident();
			this.state = 354;
			_localctx._params = this.fnParams();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryDefn(): QueryDefnContext {
		let _localctx: QueryDefnContext = new QueryDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CWScriptParser.RULE_queryDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this.match(CWScriptParser.QUERY);
			this.state = 357;
			this.match(CWScriptParser.HASH);
			this.state = 358;
			_localctx._name = this.ident();
			this.state = 359;
			_localctx._params = this.fnParams();
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 360;
				this.match(CWScriptParser.ARROW);
				this.state = 361;
				_localctx._retTy = this.typeExpr(0);
				}
			}

			this.state = 364;
			_localctx._body = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryDecl(): QueryDeclContext {
		let _localctx: QueryDeclContext = new QueryDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CWScriptParser.RULE_queryDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(CWScriptParser.QUERY);
			this.state = 367;
			this.match(CWScriptParser.HASH);
			this.state = 368;
			_localctx._name = this.ident();
			this.state = 369;
			_localctx._params = this.fnParams();
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 370;
				this.match(CWScriptParser.ARROW);
				this.state = 371;
				_localctx._retTy = this.typeExpr(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public replyDefn(): ReplyDefnContext {
		let _localctx: ReplyDefnContext = new ReplyDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CWScriptParser.RULE_replyDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.match(CWScriptParser.REPLY);
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOT) {
				{
				this.state = 375;
				this.match(CWScriptParser.DOT);
				this.state = 376;
				_localctx._on = this.ident();
				}
			}

			this.state = 379;
			_localctx._name = this.ident();
			this.state = 380;
			_localctx._params = this.fnParams();
			this.state = 381;
			_localctx._body = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDefn(): EnumDefnContext {
		let _localctx: EnumDefnContext = new EnumDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CWScriptParser.RULE_enumDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.match(CWScriptParser.ENUM);
			{
			this.state = 384;
			_localctx._name = this.ident();
			}
			this.state = 385;
			this.match(CWScriptParser.LBRACE);
			this.state = 386;
			_localctx._variant_ = this.variant_();
			_localctx._variants.push(_localctx._variant_);
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.HASH) {
				{
				{
				{
				this.state = 387;
				_localctx._variant_ = this.variant_();
				_localctx._variants.push(_localctx._variant_);
				}
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 388;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
				}
				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 396;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variant_(): Variant_Context {
		let _localctx: Variant_Context = new Variant_Context(this._ctx, this.state);
		this.enterRule(_localctx, 52, CWScriptParser.RULE_variant_);
		try {
			this.state = 400;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 398;
				this.variant_struct();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 399;
				this.variant_unit();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variant_struct(): Variant_structContext {
		let _localctx: Variant_structContext = new Variant_structContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CWScriptParser.RULE_variant_struct);
		let _la: number;
		try {
			this.state = 418;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 402;
				this.match(CWScriptParser.HASH);
				{
				this.state = 403;
				_localctx._name = this.ident();
				}
				this.state = 404;
				this.match(CWScriptParser.LPAREN);
				this.state = 406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 405;
					_localctx._members = this.paramList();
					}
				}

				this.state = 408;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 410;
				this.match(CWScriptParser.HASH);
				{
				this.state = 411;
				_localctx._name = this.ident();
				}
				this.state = 412;
				this.match(CWScriptParser.LBRACE);
				this.state = 414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 413;
					_localctx._members = this.paramList();
					}
				}

				this.state = 416;
				this.match(CWScriptParser.RBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variant_unit(): Variant_unitContext {
		let _localctx: Variant_unitContext = new Variant_unitContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CWScriptParser.RULE_variant_unit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			this.match(CWScriptParser.HASH);
			{
			this.state = 421;
			_localctx._name = this.ident();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public typeExpr(): TypeExprContext;
	public typeExpr(_p: number): TypeExprContext;
	// @RuleVersion(0)
	public typeExpr(_p?: number): TypeExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeExprContext = new TypeExprContext(this._ctx, _parentState);
		let _prevctx: TypeExprContext = _localctx;
		let _startState: number = 58;
		this.enterRecursionRule(_localctx, 58, CWScriptParser.RULE_typeExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				_localctx = new PathTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 424;
				this.typePath();
				}
				break;

			case 2:
				{
				_localctx = new VariantTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 425;
				this.typeVariant();
				}
				break;

			case 3:
				{
				_localctx = new LensTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 426;
				this.typeLens();
				}
				break;

			case 4:
				{
				_localctx = new FnTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 427;
				this.fnType();
				}
				break;

			case 5:
				{
				_localctx = new TupleTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 428;
				this.match(CWScriptParser.LBRACK);
				this.state = 437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 429;
					(_localctx as TupleTContext)._typeExpr = this.typeExpr(0);
					(_localctx as TupleTContext)._items.push((_localctx as TupleTContext)._typeExpr);
					this.state = 434;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.COMMA) {
						{
						{
						this.state = 430;
						this.match(CWScriptParser.COMMA);
						this.state = 431;
						(_localctx as TupleTContext)._typeExpr = this.typeExpr(0);
						(_localctx as TupleTContext)._items.push((_localctx as TupleTContext)._typeExpr);
						}
						}
						this.state = 436;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 439;
				this.match(CWScriptParser.RBRACK);
				}
				break;

			case 6:
				{
				_localctx = new DefnTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 440;
				this.typeDefn();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 453;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 451;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
					case 1:
						{
						_localctx = new OptionTContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 443;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 444;
						this.match(CWScriptParser.QUEST);
						}
						break;

					case 2:
						{
						_localctx = new ListTContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 445;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 446;
						this.match(CWScriptParser.LBRACK);
						this.state = 448;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.IntLiteral) {
							{
							this.state = 447;
							(_localctx as ListTContext)._len = this.match(CWScriptParser.IntLiteral);
							}
						}

						this.state = 450;
						this.match(CWScriptParser.RBRACK);
						}
						break;
					}
					}
				}
				this.state = 455;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnType(): FnTypeContext {
		let _localctx: FnTypeContext = new FnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CWScriptParser.RULE_fnType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 456;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			this.state = 459;
			this.match(CWScriptParser.LPAREN);
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				this.state = 460;
				_localctx._params = this.paramList();
				}
			}

			this.state = 463;
			this.match(CWScriptParser.RPAREN);
			this.state = 464;
			this.match(CWScriptParser.ARROW);
			this.state = 465;
			_localctx._retTy = this.typeExpr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeLens(): TypeLensContext {
		let _localctx: TypeLensContext = new TypeLensContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CWScriptParser.RULE_typeLens);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			_localctx._scope = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MUT))) !== 0))) {
				_localctx._scope = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 468;
			this.typePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typePath(): TypePathContext {
		let _localctx: TypePathContext = new TypePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CWScriptParser.RULE_typePath);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 470;
			_localctx._ident = this.ident();
			_localctx._segments.push(_localctx._ident);
			}
			this.state = 475;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 471;
					this.match(CWScriptParser.DOT);
					this.state = 472;
					_localctx._ident = this.ident();
					_localctx._segments.push(_localctx._ident);
					}
					}
				}
				this.state = 477;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeVariant(): TypeVariantContext {
		let _localctx: TypeVariantContext = new TypeVariantContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CWScriptParser.RULE_typeVariant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.typePath();
			this.state = 483;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LPAREN) {
				{
				this.state = 479;
				this.match(CWScriptParser.LPAREN);
				this.state = 480;
				this.expr(0);
				this.state = 481;
				this.match(CWScriptParser.RPAREN);
				}
			}

			{
			this.state = 485;
			this.match(CWScriptParser.DOT);
			this.state = 486;
			this.match(CWScriptParser.HASH);
			this.state = 487;
			_localctx._variant = this.ident();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDefn(): TypeDefnContext {
		let _localctx: TypeDefnContext = new TypeDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CWScriptParser.RULE_typeDefn);
		try {
			this.state = 492;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.STRUCT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 489;
				this.structDefn();
				}
				break;
			case CWScriptParser.ENUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 490;
				this.enumDefn();
				}
				break;
			case CWScriptParser.TYPE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 491;
				this.typeAliasDefn();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDefn(): StructDefnContext {
		let _localctx: StructDefnContext = new StructDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CWScriptParser.RULE_structDefn);
		let _la: number;
		try {
			let _alt: number;
			this.state = 528;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 494;
				this.match(CWScriptParser.STRUCT);
				this.state = 496;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 495;
					_localctx._name = this.ident();
					}
				}

				this.state = 498;
				this.match(CWScriptParser.LPAREN);
				this.state = 507;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					{
					this.state = 499;
					_localctx._param = this.param();
					_localctx._members.push(_localctx._param);
					}
					this.state = 504;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.COMMA) {
						{
						{
						this.state = 500;
						this.match(CWScriptParser.COMMA);
						{
						this.state = 501;
						_localctx._param = this.param();
						_localctx._members.push(_localctx._param);
						}
						}
						}
						this.state = 506;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 509;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 510;
				this.match(CWScriptParser.STRUCT);
				this.state = 512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 511;
					_localctx._name = this.ident();
					}
				}

				this.state = 514;
				this.match(CWScriptParser.LBRACE);
				{
				{
				this.state = 515;
				_localctx._param = this.param();
				_localctx._members.push(_localctx._param);
				}
				this.state = 520;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 516;
						this.match(CWScriptParser.COMMA);
						{
						this.state = 517;
						_localctx._param = this.param();
						_localctx._members.push(_localctx._param);
						}
						}
						}
					}
					this.state = 522;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				}
				this.state = 524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 523;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
				this.state = 526;
				this.match(CWScriptParser.RBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAliasDefn(): TypeAliasDefnContext {
		let _localctx: TypeAliasDefnContext = new TypeAliasDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CWScriptParser.RULE_typeAliasDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			this.match(CWScriptParser.TYPE);
			{
			this.state = 531;
			_localctx._name = this.ident();
			}
			this.state = 532;
			this.match(CWScriptParser.EQ);
			{
			this.state = 533;
			_localctx._value = this.typeExpr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnDefn(): FnDefnContext {
		let _localctx: FnDefnContext = new FnDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CWScriptParser.RULE_fnDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			this.match(CWScriptParser.FN);
			{
			this.state = 536;
			_localctx._name = this.ident();
			}
			this.state = 538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 537;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			this.state = 540;
			_localctx._params = this.fnParams();
			this.state = 543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 541;
				this.match(CWScriptParser.ARROW);
				this.state = 542;
				_localctx._retTy = this.typeExpr(0);
				}
			}

			this.state = 545;
			_localctx._body = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annot(): AnnotContext {
		let _localctx: AnnotContext = new AnnotContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CWScriptParser.RULE_annot);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			this.match(CWScriptParser.AT);
			{
			this.state = 548;
			_localctx._path = this.typePath();
			}
			this.state = 554;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 549;
				this.match(CWScriptParser.LPAREN);
				this.state = 551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BANG - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (CWScriptParser.Ident - 84)) | (1 << (CWScriptParser.StringLiteral - 84)) | (1 << (CWScriptParser.IntLiteral - 84)) | (1 << (CWScriptParser.DecLiteral - 84)) | (1 << (CWScriptParser.BoolLiteral - 84)))) !== 0)) {
					{
					this.state = 550;
					_localctx._arg = this.arg();
					_localctx._args.push(_localctx._arg);
					}
				}

				this.state = 553;
				this.match(CWScriptParser.RPAREN);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callOptions(): CallOptionsContext {
		let _localctx: CallOptionsContext = new CallOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CWScriptParser.RULE_callOptions);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 556;
			this.match(CWScriptParser.LBRACE);
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 557;
				this.memberVal();
				}
				this.state = 562;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 558;
						this.match(CWScriptParser.COMMA);
						this.state = 559;
						this.memberVal();
						}
						}
					}
					this.state = 564;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
				}
				this.state = 566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 565;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
			}

			this.state = 570;
			this.match(CWScriptParser.RBRACE);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CWScriptParser.RULE_stmt);
		let _la: number;
		try {
			this.state = 718;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				_localctx = new DebugStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 572;
					(_localctx as DebugStmtContext)._annot = this.annot();
					(_localctx as DebugStmtContext)._ann.push((_localctx as DebugStmtContext)._annot);
					}
					}
					this.state = 577;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 578;
				this.debugStmt_();
				this.state = 580;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
				case 1:
					{
					this.state = 579;
					this.match(CWScriptParser.SEMI);
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new LetStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 582;
					(_localctx as LetStmtContext)._annot = this.annot();
					(_localctx as LetStmtContext)._ann.push((_localctx as LetStmtContext)._annot);
					}
					}
					this.state = 587;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 588;
				this.letStmt_();
				this.state = 590;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
				case 1:
					{
					this.state = 589;
					this.match(CWScriptParser.SEMI);
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new ConstStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 592;
					(_localctx as ConstStmtContext)._annot = this.annot();
					(_localctx as ConstStmtContext)._ann.push((_localctx as ConstStmtContext)._annot);
					}
					}
					this.state = 597;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 598;
				this.constStmt_();
				this.state = 600;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
				case 1:
					{
					this.state = 599;
					this.match(CWScriptParser.SEMI);
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new AssignStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 602;
					(_localctx as AssignStmtContext)._annot = this.annot();
					(_localctx as AssignStmtContext)._ann.push((_localctx as AssignStmtContext)._annot);
					}
					}
					this.state = 607;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 608;
				this.assignStmt_();
				this.state = 610;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
				case 1:
					{
					this.state = 609;
					this.match(CWScriptParser.SEMI);
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new IfStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 612;
					(_localctx as IfStmtContext)._annot = this.annot();
					(_localctx as IfStmtContext)._ann.push((_localctx as IfStmtContext)._annot);
					}
					}
					this.state = 617;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 618;
				this.ifStmt_();
				this.state = 620;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 619;
					this.match(CWScriptParser.SEMI);
					}
					break;
				}
				}
				break;

			case 6:
				_localctx = new ForStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 622;
					(_localctx as ForStmtContext)._annot = this.annot();
					(_localctx as ForStmtContext)._ann.push((_localctx as ForStmtContext)._annot);
					}
					}
					this.state = 627;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 628;
				this.forStmt_();
				this.state = 630;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
				case 1:
					{
					this.state = 629;
					this.match(CWScriptParser.SEMI);
					}
					break;
				}
				}
				break;

			case 7:
				_localctx = new ExecStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 635;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 632;
					(_localctx as ExecStmtContext)._annot = this.annot();
					(_localctx as ExecStmtContext)._ann.push((_localctx as ExecStmtContext)._annot);
					}
					}
					this.state = 637;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 638;
				this.match(CWScriptParser.EXEC_NOW);
				this.state = 639;
				this.expr(0);
				this.state = 641;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
				case 1:
					{
					this.state = 640;
					(_localctx as ExecStmtContext)._options = this.callOptions();
					}
					break;
				}
				this.state = 644;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
				case 1:
					{
					this.state = 643;
					this.match(CWScriptParser.SEMI);
					}
					break;
				}
				}
				break;

			case 8:
				_localctx = new DelegateExecStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 649;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 646;
					(_localctx as DelegateExecStmtContext)._annot = this.annot();
					(_localctx as DelegateExecStmtContext)._ann.push((_localctx as DelegateExecStmtContext)._annot);
					}
					}
					this.state = 651;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 652;
				this.match(CWScriptParser.DELEGATE_EXEC);
				this.state = 653;
				this.match(CWScriptParser.HASH);
				this.state = 654;
				this.expr(0);
				this.state = 656;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
				case 1:
					{
					this.state = 655;
					this.match(CWScriptParser.SEMI);
					}
					break;
				}
				}
				break;

			case 9:
				_localctx = new InstantiateStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 661;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 658;
					(_localctx as InstantiateStmtContext)._annot = this.annot();
					(_localctx as InstantiateStmtContext)._ann.push((_localctx as InstantiateStmtContext)._annot);
					}
					}
					this.state = 663;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 664;
				this.match(CWScriptParser.INSTANTIATE_NOW);
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.HASH) {
					{
					this.state = 665;
					(_localctx as InstantiateStmtContext)._new = this.match(CWScriptParser.HASH);
					}
				}

				this.state = 668;
				this.expr(0);
				this.state = 670;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
				case 1:
					{
					this.state = 669;
					(_localctx as InstantiateStmtContext)._options = this.callOptions();
					}
					break;
				}
				this.state = 673;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
				case 1:
					{
					this.state = 672;
					this.match(CWScriptParser.SEMI);
					}
					break;
				}
				}
				break;

			case 10:
				_localctx = new EmitStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 675;
					(_localctx as EmitStmtContext)._annot = this.annot();
					(_localctx as EmitStmtContext)._ann.push((_localctx as EmitStmtContext)._annot);
					}
					}
					this.state = 680;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 681;
				this.match(CWScriptParser.EMIT);
				this.state = 682;
				this.expr(0);
				this.state = 684;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 683;
					this.match(CWScriptParser.SEMI);
					}
					break;
				}
				}
				break;

			case 11:
				_localctx = new ReturnStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 689;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 686;
					(_localctx as ReturnStmtContext)._annot = this.annot();
					(_localctx as ReturnStmtContext)._ann.push((_localctx as ReturnStmtContext)._annot);
					}
					}
					this.state = 691;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 692;
				this.match(CWScriptParser.RETURN);
				this.state = 693;
				this.expr(0);
				this.state = 695;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 694;
					(_localctx as ReturnStmtContext)._semi = this.match(CWScriptParser.SEMI);
					}
					break;
				}
				}
				break;

			case 12:
				_localctx = new FailStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 697;
					(_localctx as FailStmtContext)._annot = this.annot();
					(_localctx as FailStmtContext)._ann.push((_localctx as FailStmtContext)._annot);
					}
					}
					this.state = 702;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 703;
				this.match(CWScriptParser.FAIL);
				this.state = 704;
				this.expr(0);
				this.state = 706;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
				case 1:
					{
					this.state = 705;
					(_localctx as FailStmtContext)._semi = this.match(CWScriptParser.SEMI);
					}
					break;
				}
				}
				break;

			case 13:
				_localctx = new ExprStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 708;
					(_localctx as ExprStmtContext)._annot = this.annot();
					(_localctx as ExprStmtContext)._ann.push((_localctx as ExprStmtContext)._annot);
					}
					}
					this.state = 713;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 714;
				this.expr(0);
				this.state = 716;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
				case 1:
					{
					this.state = 715;
					this.match(CWScriptParser.SEMI);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public debugStmt_(): DebugStmt_Context {
		let _localctx: DebugStmt_Context = new DebugStmt_Context(this._ctx, this.state);
		this.enterRule(_localctx, 82, CWScriptParser.RULE_debugStmt_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 720;
			this.match(CWScriptParser.DEBUG);
			this.state = 723;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 721;
				this.block();
				}
				break;

			case 2:
				{
				this.state = 722;
				this.stmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letStmt_(): LetStmt_Context {
		let _localctx: LetStmt_Context = new LetStmt_Context(this._ctx, this.state);
		this.enterRule(_localctx, 84, CWScriptParser.RULE_letStmt_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
			this.match(CWScriptParser.LET);
			this.state = 726;
			this.let_binding();
			this.state = 729;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 727;
				this.match(CWScriptParser.EQ);
				this.state = 728;
				this.expr(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constStmt_(): ConstStmt_Context {
		let _localctx: ConstStmt_Context = new ConstStmt_Context(this._ctx, this.state);
		this.enterRule(_localctx, 86, CWScriptParser.RULE_constStmt_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
			this.match(CWScriptParser.CONST);
			this.state = 732;
			this.ident();
			this.state = 733;
			this.match(CWScriptParser.EQ);
			this.state = 734;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identBinding_(): IdentBinding_Context {
		let _localctx: IdentBinding_Context = new IdentBinding_Context(this._ctx, this.state);
		this.enterRule(_localctx, 88, CWScriptParser.RULE_identBinding_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 736;
			_localctx._name = this.ident();
			}
			this.state = 739;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 737;
				this.match(CWScriptParser.COLON);
				this.state = 738;
				_localctx._ty = this.typeExpr(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public let_binding(): Let_bindingContext {
		let _localctx: Let_bindingContext = new Let_bindingContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CWScriptParser.RULE_let_binding);
		let _la: number;
		try {
			this.state = 763;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.CONTRACT:
			case CWScriptParser.INTERFACE:
			case CWScriptParser.IMPORT:
			case CWScriptParser.IMPLEMENTS:
			case CWScriptParser.EXTENDS:
			case CWScriptParser.ERROR:
			case CWScriptParser.EVENT:
			case CWScriptParser.INSTANTIATE:
			case CWScriptParser.EXEC:
			case CWScriptParser.QUERY:
			case CWScriptParser.REPLY:
			case CWScriptParser.FOR:
			case CWScriptParser.IN:
			case CWScriptParser.FROM:
			case CWScriptParser.STATE:
			case CWScriptParser.IF:
			case CWScriptParser.ELSE:
			case CWScriptParser.AND:
			case CWScriptParser.OR:
			case CWScriptParser.TRUE:
			case CWScriptParser.FALSE:
			case CWScriptParser.FN:
			case CWScriptParser.LET:
			case CWScriptParser.STRUCT:
			case CWScriptParser.ENUM:
			case CWScriptParser.TYPE:
			case CWScriptParser.EMIT:
			case CWScriptParser.Ident:
				_localctx = new IdentBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 741;
				this.identBinding_();
				}
				break;
			case CWScriptParser.LBRACE:
				_localctx = new StructBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 742;
				this.match(CWScriptParser.LBRACE);
				{
				this.state = 743;
				(_localctx as StructBindingContext)._identBinding_ = this.identBinding_();
				(_localctx as StructBindingContext)._bindings.push((_localctx as StructBindingContext)._identBinding_);
				}
				this.state = 747;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 744;
					this.match(CWScriptParser.COMMA);
					}
					}
					this.state = 749;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 750;
				this.match(CWScriptParser.RBRACE);
				}
				break;
			case CWScriptParser.LBRACK:
				_localctx = new TupleBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 752;
				this.match(CWScriptParser.LBRACK);
				{
				this.state = 753;
				(_localctx as TupleBindingContext)._identBinding_ = this.identBinding_();
				(_localctx as TupleBindingContext)._bindings.push((_localctx as TupleBindingContext)._identBinding_);
				}
				this.state = 758;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 754;
					this.match(CWScriptParser.COMMA);
					this.state = 755;
					(_localctx as TupleBindingContext)._identBinding_ = this.identBinding_();
					(_localctx as TupleBindingContext)._bindings.push((_localctx as TupleBindingContext)._identBinding_);
					}
					}
					this.state = 760;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 761;
				this.match(CWScriptParser.RBRACK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignStmt_(): AssignStmt_Context {
		let _localctx: AssignStmt_Context = new AssignStmt_Context(this._ctx, this.state);
		this.enterRule(_localctx, 92, CWScriptParser.RULE_assignStmt_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 765;
			_localctx._lhs = this.assignLHS();
			}
			{
			this.state = 766;
			_localctx._assignOp = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.EQ - 66)) | (1 << (CWScriptParser.PLUS_EQ - 66)) | (1 << (CWScriptParser.MINUS_EQ - 66)) | (1 << (CWScriptParser.MUL_EQ - 66)) | (1 << (CWScriptParser.DIV_EQ - 66)) | (1 << (CWScriptParser.MOD_EQ - 66)))) !== 0))) {
				_localctx._assignOp = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
			{
			this.state = 767;
			_localctx._rhs = this.expr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignLHS(): AssignLHSContext {
		let _localctx: AssignLHSContext = new AssignLHSContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CWScriptParser.RULE_assignLHS);
		let _la: number;
		try {
			this.state = 786;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				_localctx = new IdentLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 769;
				(_localctx as IdentLHSContext)._symbol = this.ident();
				}
				break;

			case 2:
				_localctx = new DotLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 770;
				(_localctx as DotLHSContext)._obj = this.expr(0);
				}
				this.state = 771;
				this.match(CWScriptParser.DOT);
				{
				this.state = 772;
				(_localctx as DotLHSContext)._member = this.ident();
				}
				}
				break;

			case 3:
				_localctx = new IndexLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 774;
				(_localctx as IndexLHSContext)._obj = this.expr(0);
				}
				this.state = 775;
				this.match(CWScriptParser.LBRACK);
				{
				this.state = 776;
				(_localctx as IndexLHSContext)._expr = this.expr(0);
				(_localctx as IndexLHSContext)._args.push((_localctx as IndexLHSContext)._expr);
				}
				this.state = 781;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 777;
					this.match(CWScriptParser.COMMA);
					this.state = 778;
					(_localctx as IndexLHSContext)._expr = this.expr(0);
					(_localctx as IndexLHSContext)._args.push((_localctx as IndexLHSContext)._expr);
					}
					}
					this.state = 783;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 784;
				this.match(CWScriptParser.RBRACK);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 96;
		this.enterRecursionRule(_localctx, 96, CWScriptParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 858;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				_localctx = new GroupedExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 789;
				this.match(CWScriptParser.LPAREN);
				this.state = 790;
				this.expr(0);
				this.state = 791;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new TypeDColonExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 793;
				this.typeExpr(0);
				this.state = 794;
				this.match(CWScriptParser.D_COLON);
				{
				this.state = 795;
				(_localctx as TypeDColonExprContext)._member = this.ident();
				}
				}
				break;

			case 3:
				{
				_localctx = new TypeFnCallExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 797;
				this.typeExpr(0);
				this.state = 799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.BANG) {
					{
					this.state = 798;
					(_localctx as TypeFnCallExprContext)._fallible = this.match(CWScriptParser.BANG);
					}
				}

				this.state = 801;
				this.match(CWScriptParser.LPAREN);
				this.state = 810;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BANG - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (CWScriptParser.Ident - 84)) | (1 << (CWScriptParser.StringLiteral - 84)) | (1 << (CWScriptParser.IntLiteral - 84)) | (1 << (CWScriptParser.DecLiteral - 84)) | (1 << (CWScriptParser.BoolLiteral - 84)))) !== 0)) {
					{
					{
					this.state = 802;
					(_localctx as TypeFnCallExprContext)._arg = this.arg();
					(_localctx as TypeFnCallExprContext)._args.push((_localctx as TypeFnCallExprContext)._arg);
					}
					this.state = 807;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.COMMA) {
						{
						{
						this.state = 803;
						this.match(CWScriptParser.COMMA);
						this.state = 804;
						(_localctx as TypeFnCallExprContext)._arg = this.arg();
						(_localctx as TypeFnCallExprContext)._args.push((_localctx as TypeFnCallExprContext)._arg);
						}
						}
						this.state = 809;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 812;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 4:
				{
				_localctx = new TryCatchElseExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 814;
				this.tryCatchElseExpr_();
				}
				break;

			case 5:
				{
				_localctx = new NotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 815;
				this.match(CWScriptParser.NOT);
				this.state = 816;
				this.expr(13);
				}
				break;

			case 6:
				{
				_localctx = new IfExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 817;
				this.ifStmt_();
				}
				break;

			case 7:
				{
				_localctx = new QueryNowExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 818;
				this.match(CWScriptParser.QUERY_NOW);
				this.state = 819;
				this.expr(9);
				}
				break;

			case 8:
				{
				_localctx = new FailExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 820;
				this.match(CWScriptParser.FAIL);
				this.state = 821;
				this.expr(0);
				{
				this.state = 822;
				(_localctx as FailExprContext)._semi = this.match(CWScriptParser.SEMI);
				}
				}
				break;

			case 9:
				{
				_localctx = new ClosureExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 824;
				this.closure();
				}
				break;

			case 10:
				{
				_localctx = new TupleExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 825;
				this.match(CWScriptParser.LBRACK);
				this.state = 834;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BANG - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (CWScriptParser.Ident - 84)) | (1 << (CWScriptParser.StringLiteral - 84)) | (1 << (CWScriptParser.IntLiteral - 84)) | (1 << (CWScriptParser.DecLiteral - 84)) | (1 << (CWScriptParser.BoolLiteral - 84)))) !== 0)) {
					{
					{
					this.state = 826;
					(_localctx as TupleExprContext)._expr = this.expr(0);
					(_localctx as TupleExprContext)._items.push((_localctx as TupleExprContext)._expr);
					}
					this.state = 831;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.COMMA) {
						{
						{
						this.state = 827;
						this.match(CWScriptParser.COMMA);
						{
						this.state = 828;
						(_localctx as TupleExprContext)._expr = this.expr(0);
						(_localctx as TupleExprContext)._items.push((_localctx as TupleExprContext)._expr);
						}
						}
						}
						this.state = 833;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 836;
				this.match(CWScriptParser.RBRACK);
				}
				break;

			case 11:
				{
				_localctx = new StructExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 838;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 837;
					this.typeExpr(0);
					}
				}

				this.state = 840;
				this.match(CWScriptParser.LBRACE);
				this.state = 852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					{
					this.state = 841;
					(_localctx as StructExprContext)._memberVal = this.memberVal();
					(_localctx as StructExprContext)._members.push((_localctx as StructExprContext)._memberVal);
					}
					this.state = 846;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 842;
							this.match(CWScriptParser.COMMA);
							this.state = 843;
							(_localctx as StructExprContext)._memberVal = this.memberVal();
							(_localctx as StructExprContext)._members.push((_localctx as StructExprContext)._memberVal);
							}
							}
						}
						this.state = 848;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
					}
					this.state = 850;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CWScriptParser.COMMA) {
						{
						this.state = 849;
						this.match(CWScriptParser.COMMA);
						}
					}

					}
				}

				this.state = 854;
				this.match(CWScriptParser.RBRACE);
				}
				break;

			case 12:
				{
				_localctx = new UnitVariantExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 855;
				this.typeVariant();
				}
				break;

			case 13:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 856;
				this.literal();
				}
				break;

			case 14:
				{
				_localctx = new IdentExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 857;
				this.ident();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 936;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 934;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
					case 1:
						{
						_localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 860;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						this.state = 862;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.QUEST || _la === CWScriptParser.BANG) {
							{
							this.state = 861;
							(_localctx as DotExprContext)._unwrap = this._input.LT(1);
							_la = this._input.LA(1);
							if (!(_la === CWScriptParser.QUEST || _la === CWScriptParser.BANG)) {
								(_localctx as DotExprContext)._unwrap = this._errHandler.recoverInline(this);
							} else {
								if (this._input.LA(1) === Token.EOF) {
									this.matchedEOF = true;
								}

								this._errHandler.reportMatch(this);
								this.consume();
							}
							}
						}

						this.state = 864;
						this.match(CWScriptParser.DOT);
						{
						this.state = 865;
						(_localctx as DotExprContext)._member = this.ident();
						}
						}
						break;

					case 2:
						{
						_localctx = new AsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 866;
						if (!(this.precpred(this._ctx, 28))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 28)");
						}
						this.state = 867;
						this.match(CWScriptParser.AS);
						this.state = 868;
						(_localctx as AsExprContext)._ty = this.typeExpr(0);
						}
						break;

					case 3:
						{
						_localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 869;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 870;
						this.match(CWScriptParser.LBRACK);
						{
						this.state = 871;
						(_localctx as IndexExprContext)._arg = this.arg();
						(_localctx as IndexExprContext)._args.push((_localctx as IndexExprContext)._arg);
						}
						this.state = 876;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.COMMA) {
							{
							{
							this.state = 872;
							this.match(CWScriptParser.COMMA);
							this.state = 873;
							(_localctx as IndexExprContext)._arg = this.arg();
							(_localctx as IndexExprContext)._args.push((_localctx as IndexExprContext)._arg);
							}
							}
							this.state = 878;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 879;
						this.match(CWScriptParser.RBRACK);
						}
						break;

					case 4:
						{
						_localctx = new DColonExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 881;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 882;
						this.match(CWScriptParser.D_COLON);
						{
						this.state = 883;
						(_localctx as DColonExprContext)._member = this.ident();
						}
						}
						break;

					case 5:
						{
						_localctx = new FnCallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 884;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 886;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.BANG) {
							{
							this.state = 885;
							(_localctx as FnCallExprContext)._fallible = this.match(CWScriptParser.BANG);
							}
						}

						this.state = 888;
						this.match(CWScriptParser.LPAREN);
						this.state = 897;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BANG - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (CWScriptParser.Ident - 84)) | (1 << (CWScriptParser.StringLiteral - 84)) | (1 << (CWScriptParser.IntLiteral - 84)) | (1 << (CWScriptParser.DecLiteral - 84)) | (1 << (CWScriptParser.BoolLiteral - 84)))) !== 0)) {
							{
							{
							this.state = 889;
							(_localctx as FnCallExprContext)._arg = this.arg();
							(_localctx as FnCallExprContext)._args.push((_localctx as FnCallExprContext)._arg);
							}
							this.state = 894;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === CWScriptParser.COMMA) {
								{
								{
								this.state = 890;
								this.match(CWScriptParser.COMMA);
								this.state = 891;
								(_localctx as FnCallExprContext)._arg = this.arg();
								(_localctx as FnCallExprContext)._args.push((_localctx as FnCallExprContext)._arg);
								}
								}
								this.state = 896;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 899;
						this.match(CWScriptParser.RPAREN);
						}
						break;

					case 6:
						{
						_localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 900;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						{
						this.state = 901;
						(_localctx as MulExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CWScriptParser.MUL - 73)) | (1 << (CWScriptParser.DIV - 73)) | (1 << (CWScriptParser.MOD - 73)))) !== 0))) {
							(_localctx as MulExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						{
						this.state = 902;
						(_localctx as MulExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 7:
						{
						_localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 903;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						{
						this.state = 904;
						(_localctx as AddExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CWScriptParser.PLUS || _la === CWScriptParser.MINUS)) {
							(_localctx as AddExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						{
						this.state = 905;
						(_localctx as AddExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 8:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 906;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						{
						this.state = 907;
						(_localctx as CompExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (CWScriptParser.LT - 79)) | (1 << (CWScriptParser.LT_EQ - 79)) | (1 << (CWScriptParser.GT - 79)) | (1 << (CWScriptParser.GT_EQ - 79)))) !== 0))) {
							(_localctx as CompExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						{
						this.state = 908;
						(_localctx as CompExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 9:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 909;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						{
						this.state = 910;
						(_localctx as EqExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CWScriptParser.EQ_EQ || _la === CWScriptParser.NEQ)) {
							(_localctx as EqExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						{
						this.state = 911;
						(_localctx as EqExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 10:
						{
						_localctx = new NoneCheckExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 912;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 913;
						this.match(CWScriptParser.QUEST);
						}
						break;

					case 11:
						{
						_localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 914;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 915;
						this.match(CWScriptParser.IS);
						this.state = 917;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.NOT) {
							{
							this.state = 916;
							(_localctx as IsExprContext)._negative = this.match(CWScriptParser.NOT);
							}
						}

						{
						this.state = 919;
						(_localctx as IsExprContext)._rhs = this.typeExpr(0);
						}
						}
						break;

					case 12:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 920;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 921;
						this.match(CWScriptParser.IN);
						{
						this.state = 922;
						(_localctx as InExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 13:
						{
						_localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 923;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 924;
						this.match(CWScriptParser.D_QUEST);
						{
						this.state = 925;
						(_localctx as ShortTryExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 14:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 926;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 927;
						this.match(CWScriptParser.AND);
						{
						this.state = 928;
						(_localctx as AndExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 15:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 929;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 930;
						this.match(CWScriptParser.OR);
						{
						this.state = 931;
						(_localctx as OrExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 16:
						{
						_localctx = new Grouped2ExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 932;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 933;
						this.match(CWScriptParser.TILDE);
						}
						break;
					}
					}
				}
				this.state = 938;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public closureParams(): ClosureParamsContext {
		let _localctx: ClosureParamsContext = new ClosureParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CWScriptParser.RULE_closureParams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 939;
			this.match(CWScriptParser.BAR);
			this.state = 948;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 940;
				_localctx._param = this.param();
				_localctx._params.push(_localctx._param);
				}
				this.state = 945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 941;
					this.match(CWScriptParser.COMMA);
					{
					this.state = 942;
					_localctx._param = this.param();
					_localctx._params.push(_localctx._param);
					}
					}
					}
					this.state = 947;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 950;
			this.match(CWScriptParser.BAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public closure(): ClosureContext {
		let _localctx: ClosureContext = new ClosureContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CWScriptParser.RULE_closure);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 953;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 952;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 955;
			_localctx._params = this.closureParams();
			}
			this.state = 962;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				{
				{
				this.state = 958;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.ARROW) {
					{
					this.state = 956;
					this.match(CWScriptParser.ARROW);
					this.state = 957;
					_localctx._retTy = this.typeExpr(0);
					}
				}

				this.state = 960;
				this.block();
				}
				}
				break;

			case 2:
				{
				this.state = 961;
				this.stmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CWScriptParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 964;
			this.match(CWScriptParser.LBRACE);
			this.state = 968;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.DEBUG) | (1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.DELEGATE_EXEC) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BANG - 32)) | (1 << (CWScriptParser.AT - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (CWScriptParser.Ident - 84)) | (1 << (CWScriptParser.StringLiteral - 84)) | (1 << (CWScriptParser.IntLiteral - 84)) | (1 << (CWScriptParser.DecLiteral - 84)) | (1 << (CWScriptParser.BoolLiteral - 84)))) !== 0)) {
				{
				{
				this.state = 965;
				_localctx._stmt = this.stmt();
				_localctx._body.push(_localctx._stmt);
				}
				}
				this.state = 970;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 971;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryCatchElseExpr_(): TryCatchElseExpr_Context {
		let _localctx: TryCatchElseExpr_Context = new TryCatchElseExpr_Context(this._ctx, this.state);
		this.enterRule(_localctx, 104, CWScriptParser.RULE_tryCatchElseExpr_);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 973;
			this.match(CWScriptParser.TRY);
			{
			this.state = 974;
			_localctx._body = this.block();
			}
			this.state = 978;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 975;
					_localctx._catchClause = this.catchClause();
					_localctx._catches.push(_localctx._catchClause);
					}
					}
				}
				this.state = 980;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			}
			this.state = 982;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				{
				this.state = 981;
				_localctx._else_ = this.elseClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CWScriptParser.RULE_catchClause);
		try {
			this.state = 995;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				_localctx = new CatchContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 984;
				this.match(CWScriptParser.CATCH);
				{
				this.state = 985;
				(_localctx as CatchContext)._ty = this.typeExpr(0);
				}
				{
				this.state = 986;
				(_localctx as CatchContext)._body = this.block();
				}
				}
				break;

			case 2:
				_localctx = new CatchBindContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 988;
				this.match(CWScriptParser.CATCH);
				{
				this.state = 989;
				(_localctx as CatchBindContext)._name = this.ident();
				}
				{
				this.state = 990;
				this.match(CWScriptParser.COLON);
				{
				this.state = 991;
				(_localctx as CatchBindContext)._ty = this.typeExpr(0);
				}
				}
				{
				this.state = 993;
				(_localctx as CatchBindContext)._body = this.block();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arg(): ArgContext {
		let _localctx: ArgContext = new ArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CWScriptParser.RULE_arg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1000;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				{
				{
				this.state = 997;
				_localctx._name = this.ident();
				}
				this.state = 998;
				this.match(CWScriptParser.EQ);
				}
				break;
			}
			{
			this.state = 1002;
			_localctx._value = this.expr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberVal(): MemberValContext {
		let _localctx: MemberValContext = new MemberValContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CWScriptParser.RULE_memberVal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1004;
			_localctx._name = this.ident();
			}
			this.state = 1007;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 1005;
				this.match(CWScriptParser.COLON);
				{
				this.state = 1006;
				_localctx._value = this.expr(0);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CWScriptParser.RULE_literal);
		try {
			this.state = 1014;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.StringLiteral:
				_localctx = new StringLitContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1009;
				this.match(CWScriptParser.StringLiteral);
				}
				break;
			case CWScriptParser.IntLiteral:
				_localctx = new IntLitContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1010;
				this.match(CWScriptParser.IntLiteral);
				}
				break;
			case CWScriptParser.DecLiteral:
				_localctx = new DecLitContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1011;
				this.match(CWScriptParser.DecLiteral);
				}
				break;
			case CWScriptParser.BoolLiteral:
				_localctx = new BoolLitContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1012;
				this.match(CWScriptParser.BoolLiteral);
				}
				break;
			case CWScriptParser.NONE:
				_localctx = new NoneLitContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1013;
				this.match(CWScriptParser.NONE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStmt_(): IfStmt_Context {
		let _localctx: IfStmt_Context = new IfStmt_Context(this._ctx, this.state);
		this.enterRule(_localctx, 114, CWScriptParser.RULE_ifStmt_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1016;
			this.match(CWScriptParser.IF);
			{
			this.state = 1017;
			_localctx._pred = this.expr(0);
			}
			{
			this.state = 1018;
			_localctx._body = this.block();
			}
			this.state = 1020;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				{
				this.state = 1019;
				_localctx._else_ = this.elseClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseClause(): ElseClauseContext {
		let _localctx: ElseClauseContext = new ElseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CWScriptParser.RULE_elseClause);
		try {
			this.state = 1026;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1022;
				this.match(CWScriptParser.ELSE);
				this.state = 1023;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1024;
				this.match(CWScriptParser.ELSE);
				this.state = 1025;
				this.stmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStmt_(): ForStmt_Context {
		let _localctx: ForStmt_Context = new ForStmt_Context(this._ctx, this.state);
		this.enterRule(_localctx, 118, CWScriptParser.RULE_forStmt_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1028;
			this.match(CWScriptParser.FOR);
			{
			this.state = 1029;
			_localctx._binding = this.let_binding();
			}
			this.state = 1030;
			this.match(CWScriptParser.IN);
			{
			this.state = 1031;
			_localctx._iter = this.expr(0);
			}
			this.state = 1032;
			_localctx._body = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ident(): IdentContext {
		let _localctx: IdentContext = new IdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CWScriptParser.RULE_ident);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1036;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.Ident:
				{
				this.state = 1034;
				this.match(CWScriptParser.Ident);
				}
				break;
			case CWScriptParser.CONTRACT:
			case CWScriptParser.INTERFACE:
			case CWScriptParser.IMPORT:
			case CWScriptParser.IMPLEMENTS:
			case CWScriptParser.EXTENDS:
			case CWScriptParser.ERROR:
			case CWScriptParser.EVENT:
			case CWScriptParser.INSTANTIATE:
			case CWScriptParser.EXEC:
			case CWScriptParser.QUERY:
			case CWScriptParser.REPLY:
			case CWScriptParser.FOR:
			case CWScriptParser.IN:
			case CWScriptParser.FROM:
			case CWScriptParser.STATE:
			case CWScriptParser.IF:
			case CWScriptParser.ELSE:
			case CWScriptParser.AND:
			case CWScriptParser.OR:
			case CWScriptParser.TRUE:
			case CWScriptParser.FALSE:
			case CWScriptParser.FN:
			case CWScriptParser.LET:
			case CWScriptParser.STRUCT:
			case CWScriptParser.ENUM:
			case CWScriptParser.TYPE:
			case CWScriptParser.EMIT:
				{
				this.state = 1035;
				this.reservedKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedKeyword(): ReservedKeywordContext {
		let _localctx: ReservedKeywordContext = new ReservedKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CWScriptParser.RULE_reservedKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1038;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 29:
			return this.typeExpr_sempred(_localctx as TypeExprContext, predIndex);

		case 48:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private typeExpr_sempred(_localctx: TypeExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 29);

		case 3:
			return this.precpred(this._ctx, 28);

		case 4:
			return this.precpred(this._ctx, 27);

		case 5:
			return this.precpred(this._ctx, 26);

		case 6:
			return this.precpred(this._ctx, 24);

		case 7:
			return this.precpred(this._ctx, 22);

		case 8:
			return this.precpred(this._ctx, 21);

		case 9:
			return this.precpred(this._ctx, 20);

		case 10:
			return this.precpred(this._ctx, 19);

		case 11:
			return this.precpred(this._ctx, 18);

		case 12:
			return this.precpred(this._ctx, 17);

		case 13:
			return this.precpred(this._ctx, 16);

		case 14:
			return this.precpred(this._ctx, 15);

		case 15:
			return this.precpred(this._ctx, 12);

		case 16:
			return this.precpred(this._ctx, 11);

		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03_\u0413\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x03\x02\x07\x02\x80\n\x02\f\x02\x0E\x02\x83\v\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x8B\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x05\x04\x91\n\x04\x03\x04\x03\x04\x05\x04" +
		"\x95\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\x9D" +
		"\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x07\x06\xA3\n\x06\f\x06\x0E\x06" +
		"\xA6\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07\xAF\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\xB6\n\x07" +
		"\f\x07\x0E\x07\xB9\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\xC0\n\x07\x05\x07\xC2\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xD4\n\b\x03" +
		"\t\x03\t\x05\t\xD8\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\xDE\n\t\x05\t\xE0" +
		"\n\t\x03\n\x03\n\x03\n\x07\n\xE5\n\n\f\n\x0E\n\xE8\v\n\x03\v\x03\v\x03" +
		"\v\x03\v\x07\v\xEE\n\v\f\v\x0E\v\xF1\v\v\x05\v\xF3\n\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x07\x0E\u0102\n\x0E\f\x0E\x0E\x0E\u0105\v\x0E\x03\x0E\x05\x0E\u0108\n" +
		"\x0E\x05\x0E\u010A\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u0116\n\x10\f\x10\x0E\x10\u0119" +
		"\v\x10\x03\x10\x05\x10\u011C\n\x10\x05\x10\u011E\n\x10\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x11\x07\x11\u0125\n\x11\f\x11\x0E\x11\u0128\v\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0131" +
		"\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0138\n\x12\f\x12" +
		"\x0E\x12\u013B\v\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0142" +
		"\n\x12\x05\x12\u0144\n\x12\x03\x13\x03\x13\x03\x13\x05\x13\u0149\n\x13" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u0158\n\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x17\x03\x17\x05\x17\u0161\n\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18" +
		"\u016D\n\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x05\x19\u0177\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u017C\n\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x05\x1B\u0188\n\x1B\x07\x1B\u018A\n\x1B\f\x1B\x0E\x1B\u018D\v\x1B" +
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C\u0193\n\x1C\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u0199\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x05\x1D\u01A1\n\x1D\x03\x1D\x03\x1D\x05\x1D\u01A5\n\x1D\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x07\x1F\u01B3\n\x1F\f\x1F\x0E\x1F\u01B6\v\x1F\x05\x1F" +
		"\u01B8\n\x1F\x03\x1F\x03\x1F\x05\x1F\u01BC\n\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x05\x1F\u01C3\n\x1F\x03\x1F\x07\x1F\u01C6\n\x1F\f\x1F" +
		"\x0E\x1F\u01C9\v\x1F\x03 \x05 \u01CC\n \x03 \x03 \x05 \u01D0\n \x03 \x03" +
		" \x03 \x03 \x03!\x03!\x03!\x03\"\x03\"\x03\"\x07\"\u01DC\n\"\f\"\x0E\"" +
		"\u01DF\v\"\x03#\x03#\x03#\x03#\x03#\x05#\u01E6\n#\x03#\x03#\x03#\x03#" +
		"\x03$\x03$\x03$\x05$\u01EF\n$\x03%\x03%\x05%\u01F3\n%\x03%\x03%\x03%\x03" +
		"%\x07%\u01F9\n%\f%\x0E%\u01FC\v%\x05%\u01FE\n%\x03%\x03%\x03%\x05%\u0203" +
		"\n%\x03%\x03%\x03%\x03%\x07%\u0209\n%\f%\x0E%\u020C\v%\x03%\x05%\u020F" +
		"\n%\x03%\x03%\x05%\u0213\n%\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'" +
		"\x05\'\u021D\n\'\x03\'\x03\'\x03\'\x05\'\u0222\n\'\x03\'\x03\'\x03(\x03" +
		"(\x03(\x03(\x05(\u022A\n(\x03(\x05(\u022D\n(\x03)\x03)\x03)\x03)\x07)" +
		"\u0233\n)\f)\x0E)\u0236\v)\x03)\x05)\u0239\n)\x05)\u023B\n)\x03)\x03)" +
		"\x03*\x07*\u0240\n*\f*\x0E*\u0243\v*\x03*\x03*\x05*\u0247\n*\x03*\x07" +
		"*\u024A\n*\f*\x0E*\u024D\v*\x03*\x03*\x05*\u0251\n*\x03*\x07*\u0254\n" +
		"*\f*\x0E*\u0257\v*\x03*\x03*\x05*\u025B\n*\x03*\x07*\u025E\n*\f*\x0E*" +
		"\u0261\v*\x03*\x03*\x05*\u0265\n*\x03*\x07*\u0268\n*\f*\x0E*\u026B\v*" +
		"\x03*\x03*\x05*\u026F\n*\x03*\x07*\u0272\n*\f*\x0E*\u0275\v*\x03*\x03" +
		"*\x05*\u0279\n*\x03*\x07*\u027C\n*\f*\x0E*\u027F\v*\x03*\x03*\x03*\x05" +
		"*\u0284\n*\x03*\x05*\u0287\n*\x03*\x07*\u028A\n*\f*\x0E*\u028D\v*\x03" +
		"*\x03*\x03*\x03*\x05*\u0293\n*\x03*\x07*\u0296\n*\f*\x0E*\u0299\v*\x03" +
		"*\x03*\x05*\u029D\n*\x03*\x03*\x05*\u02A1\n*\x03*\x05*\u02A4\n*\x03*\x07" +
		"*\u02A7\n*\f*\x0E*\u02AA\v*\x03*\x03*\x03*\x05*\u02AF\n*\x03*\x07*\u02B2" +
		"\n*\f*\x0E*\u02B5\v*\x03*\x03*\x03*\x05*\u02BA\n*\x03*\x07*\u02BD\n*\f" +
		"*\x0E*\u02C0\v*\x03*\x03*\x03*\x05*\u02C5\n*\x03*\x07*\u02C8\n*\f*\x0E" +
		"*\u02CB\v*\x03*\x03*\x05*\u02CF\n*\x05*\u02D1\n*\x03+\x03+\x03+\x05+\u02D6" +
		"\n+\x03,\x03,\x03,\x03,\x05,\u02DC\n,\x03-\x03-\x03-\x03-\x03-\x03.\x03" +
		".\x03.\x05.\u02E6\n.\x03/\x03/\x03/\x03/\x07/\u02EC\n/\f/\x0E/\u02EF\v" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x07/\u02F7\n/\f/\x0E/\u02FA\v/\x03/\x03" +
		"/\x05/\u02FE\n/\x030\x030\x030\x030\x031\x031\x031\x031\x031\x031\x03" +
		"1\x031\x031\x031\x071\u030E\n1\f1\x0E1\u0311\v1\x031\x031\x051\u0315\n" +
		"1\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x052\u0322\n" +
		"2\x032\x032\x032\x032\x072\u0328\n2\f2\x0E2\u032B\v2\x052\u032D\n2\x03" +
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x072\u0340\n2\f2\x0E2\u0343\v2\x052\u0345\n2\x032\x032\x05" +
		"2\u0349\n2\x032\x032\x032\x032\x072\u034F\n2\f2\x0E2\u0352\v2\x032\x05" +
		"2\u0355\n2\x052\u0357\n2\x032\x032\x032\x032\x052\u035D\n2\x032\x032\x05" +
		"2\u0361\n2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x072\u036D" +
		"\n2\f2\x0E2\u0370\v2\x032\x032\x032\x032\x032\x032\x032\x052\u0379\n2" +
		"\x032\x032\x032\x032\x072\u037F\n2\f2\x0E2\u0382\v2\x052\u0384\n2\x03" +
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x052\u0398\n2\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x032\x032\x032\x032\x072\u03A9\n2\f2\x0E2\u03AC\v2\x03" +
		"3\x033\x033\x033\x073\u03B2\n3\f3\x0E3\u03B5\v3\x053\u03B7\n3\x033\x03" +
		"3\x034\x054\u03BC\n4\x034\x034\x034\x054\u03C1\n4\x034\x034\x054\u03C5" +
		"\n4\x035\x035\x075\u03C9\n5\f5\x0E5\u03CC\v5\x035\x035\x036\x036\x036" +
		"\x076\u03D3\n6\f6\x0E6\u03D6\v6\x036\x056\u03D9\n6\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x057\u03E6\n7\x038\x038\x038\x05" +
		"8\u03EB\n8\x038\x038\x039\x039\x039\x059\u03F2\n9\x03:\x03:\x03:\x03:" +
		"\x03:\x05:\u03F9\n:\x03;\x03;\x03;\x03;\x05;\u03FF\n;\x03<\x03<\x03<\x03" +
		"<\x05<\u0405\n<\x03=\x03=\x03=\x03=\x03=\x03=\x03>\x03>\x05>\u040F\n>" +
		"\x03?\x03?\x03?\x02\x02\x04<b@\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02\x02\n\x04\x02\x0F\x11\x1E\x1E\b\x02DDHHJJLL" +
		"NNPP\x03\x0278\x05\x02KKMMOO\x04\x02GGII\x03\x02QT\x03\x02EF\x07\x02\x04" +
		"\n\x0F\x17\x1B\x1B\x1F$(+\x02\u049C\x02\x81\x03\x02\x02\x02\x04\x8A\x03" +
		"\x02\x02\x02\x06\x8C\x03\x02\x02\x02\b\x98\x03\x02\x02\x02\n\xA0\x03\x02" +
		"\x02\x02\f\xC1\x03\x02\x02\x02\x0E\xD3\x03\x02\x02\x02\x10\xD5\x03\x02" +
		"\x02\x02\x12\xE1\x03\x02\x02\x02\x14\xE9\x03\x02\x02\x02\x16\xF6\x03\x02" +
		"\x02\x02\x18\xF9\x03\x02\x02\x02\x1A\xFC\x03\x02\x02\x02\x1C\u010D\x03" +
		"\x02\x02\x02\x1E\u0110\x03\x02\x02\x02 \u0121\x03\x02\x02\x02\"\u0143" +
		"\x03\x02\x02\x02$\u0148\x03\x02\x02\x02&\u014C\x03\x02\x02\x02(\u0151" +
		"\x03\x02\x02\x02*\u0155\x03\x02\x02\x02,\u015E\x03\x02\x02\x02.\u0166" +
		"\x03\x02\x02\x020\u0170\x03\x02\x02\x022\u0178\x03\x02\x02\x024\u0181" +
		"\x03\x02\x02\x026\u0192\x03\x02\x02\x028\u01A4\x03\x02\x02\x02:\u01A6" +
		"\x03\x02\x02\x02<\u01BB\x03\x02\x02\x02>\u01CB\x03\x02\x02\x02@\u01D5" +
		"\x03\x02\x02\x02B\u01D8\x03\x02\x02\x02D\u01E0\x03\x02\x02\x02F\u01EE" +
		"\x03\x02\x02\x02H\u0212\x03\x02\x02\x02J\u0214\x03\x02\x02\x02L\u0219" +
		"\x03\x02\x02\x02N\u0225\x03\x02\x02\x02P\u022E\x03\x02\x02\x02R\u02D0" +
		"\x03\x02\x02\x02T\u02D2\x03\x02\x02\x02V\u02D7\x03\x02\x02\x02X\u02DD" +
		"\x03\x02\x02\x02Z\u02E2\x03\x02\x02\x02\\\u02FD\x03\x02\x02\x02^\u02FF" +
		"\x03\x02\x02\x02`\u0314\x03\x02\x02\x02b\u035C\x03\x02\x02\x02d\u03AD" +
		"\x03\x02\x02\x02f\u03BB\x03\x02\x02\x02h\u03C6\x03\x02\x02\x02j\u03CF" +
		"\x03\x02\x02\x02l\u03E5\x03\x02\x02\x02n\u03EA\x03\x02\x02\x02p\u03EE" +
		"\x03\x02\x02\x02r\u03F8\x03\x02\x02\x02t\u03FA\x03\x02\x02\x02v\u0404" +
		"\x03\x02\x02\x02x\u0406\x03\x02\x02\x02z\u040E\x03\x02\x02\x02|\u0410" +
		"\x03\x02\x02\x02~\x80\x05\x04\x03\x02\x7F~\x03\x02\x02\x02\x80\x83\x03" +
		"\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x84\x03" +
		"\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84\x85\x07\x02\x02\x03\x85\x03\x03" +
		"\x02\x02\x02\x86\x8B\x05\f\x07\x02\x87\x8B\x05\x06\x04\x02\x88\x8B\x05" +
		"\b\x05\x02\x89\x8B\x05X-\x02\x8A\x86\x03\x02\x02\x02\x8A\x87\x03\x02\x02" +
		"\x02\x8A\x88\x03\x02\x02\x02\x8A\x89\x03\x02\x02\x02\x8B\x05\x03\x02\x02" +
		"\x02\x8C\x8D\x07\x04\x02\x02\x8D\x90\x05z>\x02\x8E\x8F\x07\b\x02\x02\x8F" +
		"\x91\x05B\"\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x94" +
		"\x03\x02\x02\x02\x92\x93\x07\x07\x02\x02\x93\x95\x05B\"\x02\x94\x92\x03" +
		"\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x05" +
		"\n\x06\x02\x97\x07\x03\x02\x02\x02\x98\x99\x07\x05\x02\x02\x99\x9C\x05" +
		"z>\x02\x9A\x9B\x07\b\x02\x02\x9B\x9D\x05B\"\x02\x9C\x9A\x03\x02\x02\x02" +
		"\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F\x05\n\x06\x02" +
		"\x9F\t\x03\x02\x02\x02\xA0\xA4\x072\x02\x02\xA1\xA3\x05\x0E\b\x02\xA2" +
		"\xA1\x03\x02\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA4" +
		"\xA5\x03\x02\x02\x02\xA5\xA7\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA7" +
		"\xA8\x073\x02\x02\xA8\v\x03\x02\x02\x02\xA9\xAA\x07\x06\x02\x02\xAA\xAB" +
		"\x07K\x02\x02\xAB\xAC\x07\x15\x02\x02\xAC\xAE\x07W\x02\x02\xAD\xAF\x07" +
		"9\x02\x02\xAE\xAD\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xC2\x03" +
		"\x02\x02\x02\xB0\xB1\x07\x06\x02\x02\xB1\xB2\x072\x02\x02\xB2\xB7\x05" +
		"z>\x02\xB3\xB4\x075\x02\x02\xB4\xB6\x05z>\x02\xB5\xB3\x03\x02\x02\x02" +
		"\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02" +
		"\xB8\xBA\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBB\x073\x02\x02" +
		"\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x07\x15\x02\x02\xBD\xBF\x07W\x02\x02" +
		"\xBE\xC0\x079\x02\x02\xBF\xBE\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02" +
		"\xC0\xC2\x03\x02\x02\x02\xC1\xA9\x03\x02\x02\x02\xC1\xB0\x03\x02\x02\x02" +
		"\xC2\r\x03\x02\x02\x02\xC3\xD4\x05F$\x02\xC4\xD4\x05X-\x02\xC5\xD4\x05" +
		"L\'\x02\xC6\xD4\x05\x18\r\x02\xC7\xD4\x05\x1A\x0E\x02\xC8\xD4\x05\x1C" +
		"\x0F\x02\xC9\xD4\x05\x1E\x10\x02\xCA\xD4\x05 \x11\x02\xCB\xD4\x05&\x14" +
		"\x02\xCC\xD4\x05(\x15\x02\xCD\xD4\x05*\x16\x02\xCE\xD4\x05,\x17\x02\xCF" +
		"\xD4\x05.\x18\x02\xD0\xD4\x05.\x18\x02\xD1\xD4\x050\x19\x02\xD2\xD4\x05" +
		"2\x1A\x02\xD3\xC3\x03\x02\x02\x02\xD3\xC4\x03\x02\x02\x02\xD3\xC5\x03" +
		"\x02\x02\x02\xD3\xC6\x03\x02\x02\x02\xD3\xC7\x03\x02\x02\x02\xD3\xC8\x03" +
		"\x02\x02\x02\xD3\xC9\x03\x02\x02\x02\xD3\xCA\x03\x02\x02\x02\xD3\xCB\x03" +
		"\x02\x02\x02\xD3\xCC\x03\x02\x02\x02\xD3\xCD\x03\x02\x02\x02\xD3\xCE\x03" +
		"\x02\x02\x02\xD3\xCF\x03\x02\x02\x02\xD3\xD0\x03\x02\x02\x02\xD3\xD1\x03" +
		"\x02\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\x0F\x03\x02\x02\x02\xD5\xD7\x05" +
		"z>\x02\xD6\xD8\x077\x02\x02\xD7\xD6\x03\x02\x02\x02\xD7\xD8\x03\x02\x02" +
		"\x02\xD8\xDF\x03\x02\x02\x02\xD9\xDA\x07:\x02\x02\xDA\xDD\x05<\x1F\x02" +
		"\xDB\xDC\x07D\x02\x02\xDC\xDE\x05b2\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE" +
		"\x03\x02\x02\x02\xDE\xE0\x03\x02\x02\x02\xDF\xD9\x03\x02\x02\x02\xDF\xE0" +
		"\x03\x02\x02\x02\xE0\x11\x03\x02\x02\x02\xE1\xE6\x05\x10\t\x02\xE2\xE3" +
		"\x075\x02\x02\xE3\xE5\x05\x10\t\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE8\x03" +
		"\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\x13\x03" +
		"\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xF2\x07.\x02\x02\xEA\xEF\x05" +
		"\x10\t\x02\xEB\xEC\x075\x02\x02\xEC\xEE\x05\x10\t\x02\xED\xEB\x03\x02" +
		"\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02" +
		"\x02\x02\xF0\xF3\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xEA\x03\x02" +
		"\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x07/" +
		"\x02\x02\xF5\x15\x03\x02\x02\x02\xF6\xF7\x05z>\x02\xF7\xF8\x05\x14\v\x02" +
		"\xF8\x17\x03\x02\x02\x02\xF9\xFA\x07\t\x02\x02\xFA\xFB\x05\x16\f\x02\xFB" +
		"\x19\x03\x02\x02\x02\xFC\xFD\x07\t\x02\x02\xFD\u0109\x072\x02\x02\xFE" +
		"\u0103\x05\x16\f\x02\xFF\u0100\x075\x02\x02\u0100\u0102\x05\x16\f\x02" +
		"\u0101\xFF\x03\x02\x02\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03" +
		"\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0107\x03\x02\x02\x02\u0105" +
		"\u0103\x03\x02\x02\x02\u0106\u0108\x075\x02\x02\u0107\u0106\x03\x02\x02" +
		"\x02\u0107\u0108\x03\x02\x02\x02\u0108\u010A\x03\x02\x02\x02\u0109\xFE" +
		"\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02" +
		"\u010B\u010C\x073\x02\x02\u010C\x1B\x03\x02\x02\x02\u010D\u010E\x07\n" +
		"\x02\x02\u010E\u010F\x05\x16\f\x02\u010F\x1D\x03\x02\x02\x02\u0110\u0111" +
		"\x07\n\x02\x02\u0111\u011D\x072\x02\x02\u0112\u0117\x05\x16\f\x02\u0113" +
		"\u0114\x075\x02\x02\u0114\u0116\x05\x16\f\x02\u0115\u0113\x03\x02\x02" +
		"\x02\u0116\u0119\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0118" +
		"\x03\x02\x02\x02\u0118\u011B\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02" +
		"\u011A\u011C\x075\x02\x02\u011B\u011A\x03\x02\x02\x02\u011B\u011C\x03" +
		"\x02\x02\x02\u011C\u011E\x03\x02\x02\x02\u011D\u0112\x03\x02\x02\x02\u011D" +
		"\u011E\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0120\x073\x02" +
		"\x02\u0120\x1F\x03\x02\x02\x02\u0121\u0122\x07\x16\x02\x02\u0122\u0126" +
		"\x072\x02\x02\u0123\u0125\x05\"\x12\x02\u0124\u0123\x03\x02\x02\x02\u0125" +
		"\u0128\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0126\u0127\x03\x02" +
		"\x02\x02\u0127\u0129\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0129" +
		"\u012A\x073\x02\x02\u012A!\x03\x02\x02\x02\u012B\u012C\x05z>\x02\u012C" +
		"\u012D\x07:\x02\x02\u012D\u0130\x05<\x1F\x02\u012E\u012F\x07D\x02\x02" +
		"\u012F\u0131\x05b2\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02" +
		"\x02\x02\u0131\u0144\x03\x02\x02\x02\u0132\u0133\x05z>\x02\u0133\u0134" +
		"\x070\x02\x02\u0134\u0139\x05$\x13\x02\u0135\u0136\x075\x02\x02\u0136" +
		"\u0138\x05$\x13\x02\u0137\u0135\x03\x02\x02\x02\u0138\u013B\x03\x02\x02" +
		"\x02\u0139\u0137\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013C" +
		"\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013C\u013D\x071\x02\x02" +
		"\u013D\u013E\x07:\x02\x02\u013E\u0141\x05<\x1F\x02\u013F\u0140\x07D\x02" +
		"\x02\u0140\u0142\x05b2\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0142\x03" +
		"\x02\x02\x02\u0142\u0144\x03\x02\x02\x02\u0143\u012B\x03\x02\x02\x02\u0143" +
		"\u0132\x03\x02\x02\x02\u0144#\x03\x02\x02\x02\u0145\u0146\x05z>\x02\u0146" +
		"\u0147\x07:\x02\x02\u0147\u0149\x03\x02\x02\x02\u0148\u0145\x03\x02\x02" +
		"\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014B" +
		"\x05<\x1F\x02\u014B%\x03\x02\x02\x02\u014C\u014D\x07<\x02\x02\u014D\u014E" +
		"\x07\x0F\x02\x02\u014E\u014F\x05\x14\v\x02\u014F\u0150\x05h5\x02\u0150" +
		"\'\x03\x02\x02\x02\u0151\u0152\x07<\x02\x02\u0152\u0153\x07\x0F\x02\x02" +
		"\u0153\u0154\x05\x14\v\x02\u0154)\x03\x02\x02\x02\u0155\u0157\x07\x10" +
		"\x02\x02\u0156\u0158\x07K\x02\x02\u0157\u0156\x03\x02\x02\x02\u0157\u0158" +
		"\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015A\x07<\x02\x02" +
		"\u015A\u015B\x05z>\x02\u015B\u015C\x05\x14\v\x02\u015C\u015D\x05h5\x02" +
		"\u015D+\x03\x02\x02\x02\u015E\u0160\x07\x10\x02\x02\u015F\u0161\x07K\x02" +
		"\x02\u0160\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162" +
		"\x03\x02\x02\x02\u0162\u0163\x07<\x02\x02\u0163\u0164\x05z>\x02\u0164" +
		"\u0165\x05\x14\v\x02\u0165-\x03\x02\x02\x02\u0166\u0167\x07\x11\x02\x02" +
		"\u0167\u0168\x07<\x02\x02\u0168\u0169\x05z>\x02\u0169\u016C\x05\x14\v" +
		"\x02\u016A\u016B\x07?\x02\x02\u016B\u016D\x05<\x1F\x02\u016C\u016A\x03" +
		"\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E" +
		"\u016F\x05h5\x02\u016F/\x03\x02\x02\x02\u0170\u0171\x07\x11\x02\x02\u0171" +
		"\u0172\x07<\x02\x02\u0172\u0173\x05z>\x02\u0173\u0176\x05\x14\v\x02\u0174" +
		"\u0175\x07?\x02\x02\u0175\u0177\x05<\x1F\x02\u0176\u0174\x03\x02\x02\x02" +
		"\u0176\u0177\x03\x02\x02\x02\u01771\x03\x02\x02\x02\u0178\u017B\x07\x12" +
		"\x02\x02\u0179\u017A\x074\x02\x02\u017A\u017C\x05z>\x02\u017B\u0179\x03" +
		"\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D" +
		"\u017E\x05z>\x02\u017E\u017F\x05\x14\v\x02\u017F\u0180\x05h5\x02\u0180" +
		"3\x03\x02\x02\x02\u0181\u0182\x07)\x02\x02\u0182\u0183\x05z>\x02\u0183" +
		"\u0184\x072\x02\x02\u0184\u018B\x056\x1C\x02\u0185\u0187\x056\x1C\x02" +
		"\u0186\u0188\x075\x02\x02\u0187\u0186\x03\x02\x02\x02\u0187\u0188\x03" +
		"\x02\x02\x02\u0188\u018A\x03\x02\x02\x02\u0189\u0185\x03\x02\x02\x02\u018A" +
		"\u018D\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02" +
		"\x02\x02\u018C\u018E\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018E" +
		"\u018F\x073\x02\x02\u018F5\x03\x02\x02\x02\u0190\u0193\x058\x1D\x02\u0191" +
		"\u0193\x05:\x1E\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0191\x03\x02\x02" +
		"\x02\u01937\x03\x02\x02\x02\u0194\u0195\x07<\x02\x02\u0195\u0196\x05z" +
		">\x02\u0196\u0198\x07.\x02\x02\u0197\u0199\x05\x12\n\x02\u0198\u0197\x03" +
		"\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A" +
		"\u019B\x07/\x02\x02\u019B\u01A5\x03\x02\x02\x02\u019C\u019D\x07<\x02\x02" +
		"\u019D\u019E\x05z>\x02\u019E\u01A0\x072\x02\x02\u019F\u01A1\x05\x12\n" +
		"\x02\u01A0\u019F\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A2" +
		"\x03\x02\x02\x02\u01A2\u01A3\x073\x02\x02\u01A3\u01A5\x03\x02\x02\x02" +
		"\u01A4\u0194\x03\x02\x02\x02\u01A4\u019C\x03\x02\x02\x02\u01A59\x03\x02" +
		"\x02\x02\u01A6\u01A7\x07<\x02\x02\u01A7\u01A8\x05z>\x02\u01A8;\x03\x02" +
		"\x02\x02\u01A9\u01AA\b\x1F\x01\x02\u01AA\u01BC\x05B\"\x02\u01AB\u01BC" +
		"\x05D#\x02\u01AC\u01BC\x05@!\x02\u01AD\u01BC\x05> \x02\u01AE\u01B7\x07" +
		"0\x02\x02\u01AF";
	private static readonly _serializedATNSegment1: string =
		"\u01B4\x05<\x1F\x02\u01B0\u01B1\x075\x02\x02\u01B1\u01B3\x05<\x1F\x02" +
		"\u01B2\u01B0\x03\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B2\x03" +
		"\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B8\x03\x02\x02\x02\u01B6" +
		"\u01B4\x03\x02\x02\x02\u01B7\u01AF\x03\x02\x02\x02\u01B7\u01B8\x03\x02" +
		"\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BC\x071\x02\x02\u01BA\u01BC" +
		"\x05F$\x02\u01BB\u01A9\x03\x02\x02\x02\u01BB\u01AB\x03\x02\x02\x02\u01BB" +
		"\u01AC\x03\x02\x02\x02\u01BB\u01AD\x03\x02\x02\x02\u01BB\u01AE\x03\x02" +
		"\x02\x02\u01BB\u01BA\x03\x02\x02\x02\u01BC\u01C7\x03\x02\x02\x02\u01BD" +
		"\u01BE\f\x06\x02\x02\u01BE\u01C6\x077\x02\x02\u01BF\u01C0\f\x05\x02\x02" +
		"\u01C0\u01C2\x070\x02\x02\u01C1\u01C3\x07X\x02\x02\u01C2\u01C1\x03\x02" +
		"\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4" +
		"\u01C6\x071\x02\x02\u01C5\u01BD\x03\x02\x02\x02\u01C5\u01BF\x03\x02\x02" +
		"\x02\u01C6\u01C9\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C8" +
		"\x03\x02\x02\x02\u01C8=\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01CA" +
		"\u01CC\x078\x02\x02\u01CB\u01CA\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02" +
		"\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CF\x07.\x02\x02\u01CE\u01D0" +
		"\x05\x12\n\x02\u01CF\u01CE\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02" +
		"\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x07/\x02\x02\u01D2\u01D3\x07" +
		"?\x02\x02\u01D3\u01D4\x05<\x1F\x02\u01D4?\x03\x02\x02\x02\u01D5\u01D6" +
		"\t\x02\x02\x02\u01D6\u01D7\x05B\"\x02\u01D7A\x03\x02\x02\x02\u01D8\u01DD" +
		"\x05z>\x02\u01D9\u01DA\x074\x02\x02\u01DA\u01DC\x05z>\x02\u01DB\u01D9" +
		"\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02" +
		"\u01DD\u01DE\x03\x02\x02\x02\u01DEC\x03\x02\x02\x02\u01DF\u01DD\x03\x02" +
		"\x02\x02\u01E0\u01E5\x05B\"\x02\u01E1\u01E2\x07.\x02\x02\u01E2\u01E3\x05" +
		"b2\x02\u01E3\u01E4\x07/\x02\x02\u01E4\u01E6\x03\x02\x02\x02\u01E5\u01E1" +
		"\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02" +
		"\u01E7\u01E8\x074\x02\x02\u01E8\u01E9\x07<\x02\x02\u01E9\u01EA\x05z>\x02" +
		"\u01EAE\x03\x02\x02\x02\u01EB\u01EF\x05H%\x02\u01EC\u01EF\x054\x1B\x02" +
		"\u01ED\u01EF\x05J&\x02\u01EE\u01EB\x03\x02\x02\x02\u01EE\u01EC\x03\x02" +
		"\x02\x02\u01EE\u01ED\x03\x02\x02\x02\u01EFG\x03\x02\x02\x02\u01F0\u01F2" +
		"\x07(\x02\x02\u01F1\u01F3\x05z>\x02\u01F2\u01F1\x03\x02\x02\x02\u01F2" +
		"\u01F3\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01FD\x07.\x02" +
		"\x02\u01F5\u01FA\x05\x10\t\x02\u01F6\u01F7\x075\x02\x02\u01F7\u01F9\x05" +
		"\x10\t\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FC\x03\x02\x02\x02\u01FA" +
		"\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FE\x03\x02" +
		"\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD\u01F5\x03\x02\x02\x02\u01FD" +
		"\u01FE\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0213\x07/\x02" +
		"\x02\u0200\u0202\x07(\x02\x02\u0201\u0203\x05z>\x02\u0202\u0201\x03\x02" +
		"\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204" +
		"\u0205\x072\x02\x02\u0205\u020A\x05\x10\t\x02\u0206\u0207\x075\x02\x02" +
		"\u0207\u0209\x05\x10\t\x02\u0208\u0206\x03\x02\x02\x02\u0209\u020C\x03" +
		"\x02\x02\x02\u020A\u0208\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B" +
		"\u020E\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020D\u020F\x075\x02" +
		"\x02\u020E\u020D\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F\u0210" +
		"\x03\x02\x02\x02\u0210\u0211\x073\x02\x02\u0211\u0213\x03\x02\x02\x02" +
		"\u0212\u01F0\x03\x02\x02\x02\u0212\u0200\x03\x02\x02\x02\u0213I\x03\x02" +
		"\x02\x02\u0214\u0215\x07*\x02\x02\u0215\u0216\x05z>\x02\u0216\u0217\x07" +
		"D\x02\x02\u0217\u0218\x05<\x1F\x02\u0218K\x03\x02\x02\x02\u0219\u021A" +
		"\x07#\x02\x02\u021A\u021C\x05z>\x02\u021B\u021D\x078\x02\x02\u021C\u021B" +
		"\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02" +
		"\u021E\u0221\x05\x14\v\x02\u021F\u0220\x07?\x02\x02\u0220\u0222\x05<\x1F" +
		"\x02\u0221\u021F\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0223" +
		"\x03\x02\x02\x02\u0223\u0224\x05h5\x02\u0224M\x03\x02\x02\x02\u0225\u0226" +
		"\x07=\x02\x02\u0226\u022C\x05B\"\x02\u0227\u0229\x07.\x02\x02\u0228\u022A" +
		"\x05n8\x02\u0229\u0228\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A" +
		"\u022B\x03\x02\x02\x02\u022B\u022D\x07/\x02\x02\u022C\u0227\x03\x02\x02" +
		"\x02\u022C\u022D\x03\x02\x02\x02\u022DO\x03\x02\x02\x02\u022E\u023A\x07" +
		"2\x02\x02\u022F\u0234\x05p9\x02\u0230\u0231\x075\x02\x02\u0231\u0233\x05" +
		"p9\x02\u0232\u0230\x03\x02\x02\x02\u0233\u0236\x03\x02\x02\x02\u0234\u0232" +
		"\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0238\x03\x02\x02\x02" +
		"\u0236\u0234\x03\x02\x02\x02\u0237\u0239\x075\x02\x02\u0238\u0237\x03" +
		"\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u023B\x03\x02\x02\x02\u023A" +
		"\u022F\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023C\x03\x02" +
		"\x02\x02\u023C\u023D\x073\x02\x02\u023DQ\x03\x02\x02\x02\u023E\u0240\x05" +
		"N(\x02\u023F\u023E\x03\x02\x02\x02\u0240\u0243\x03\x02\x02\x02\u0241\u023F" +
		"\x03\x02\x02\x02\u0241\u0242\x03\x02\x02\x02\u0242\u0244\x03\x02\x02\x02" +
		"\u0243\u0241\x03\x02\x02\x02\u0244\u0246\x05T+\x02\u0245\u0247\x079\x02" +
		"\x02\u0246\u0245\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\u02D1" +
		"\x03\x02\x02\x02\u0248\u024A\x05N(\x02\u0249\u0248\x03\x02\x02\x02\u024A" +
		"\u024D\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024B\u024C\x03\x02" +
		"\x02\x02\u024C\u024E\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024E" +
		"\u0250\x05V,\x02\u024F\u0251\x079\x02\x02\u0250\u024F\x03\x02\x02\x02" +
		"\u0250\u0251\x03\x02\x02\x02\u0251\u02D1\x03\x02\x02\x02\u0252\u0254\x05" +
		"N(\x02\u0253\u0252\x03\x02\x02\x02\u0254\u0257\x03\x02\x02\x02\u0255\u0253" +
		"\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0258\x03\x02\x02\x02" +
		"\u0257\u0255\x03\x02\x02\x02\u0258\u025A\x05X-\x02\u0259\u025B\x079\x02" +
		"\x02\u025A\u0259\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u02D1" +
		"\x03\x02\x02\x02\u025C\u025E\x05N(\x02\u025D\u025C\x03\x02\x02\x02\u025E" +
		"\u0261\x03\x02\x02\x02\u025F\u025D\x03\x02\x02\x02\u025F\u0260\x03\x02" +
		"\x02\x02\u0260\u0262\x03\x02\x02\x02\u0261\u025F\x03\x02\x02\x02\u0262" +
		"\u0264\x05^0\x02\u0263\u0265\x079\x02\x02\u0264\u0263\x03\x02\x02\x02" +
		"\u0264\u0265\x03\x02\x02\x02\u0265\u02D1\x03\x02\x02\x02\u0266\u0268\x05" +
		"N(\x02\u0267\u0266\x03\x02\x02\x02\u0268\u026B\x03\x02\x02\x02\u0269\u0267" +
		"\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026C\x03\x02\x02\x02" +
		"\u026B\u0269\x03\x02\x02\x02\u026C\u026E\x05t;\x02\u026D\u026F\x079\x02" +
		"\x02\u026E\u026D\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F\u02D1" +
		"\x03\x02\x02\x02\u0270\u0272\x05N(\x02\u0271\u0270\x03\x02\x02\x02\u0272" +
		"\u0275\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0273\u0274\x03\x02" +
		"\x02\x02\u0274\u0276\x03\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0276" +
		"\u0278\x05x=\x02\u0277\u0279\x079\x02\x02\u0278\u0277\x03\x02\x02\x02" +
		"\u0278\u0279\x03\x02\x02\x02\u0279\u02D1\x03\x02\x02\x02\u027A\u027C\x05" +
		"N(\x02\u027B\u027A\x03\x02\x02\x02\u027C\u027F\x03\x02\x02\x02\u027D\u027B" +
		"\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E\u0280\x03\x02\x02\x02" +
		"\u027F\u027D\x03\x02\x02\x02\u0280\u0281\x07\f\x02\x02\u0281\u0283\x05" +
		"b2\x02\u0282\u0284\x05P)\x02\u0283\u0282\x03\x02\x02\x02\u0283\u0284\x03" +
		"\x02\x02\x02\u0284\u0286\x03\x02\x02\x02\u0285\u0287\x079\x02\x02\u0286" +
		"\u0285\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287\u02D1\x03\x02" +
		"\x02\x02\u0288\u028A\x05N(\x02\u0289\u0288\x03\x02\x02\x02\u028A\u028D" +
		"\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02" +
		"\u028C\u028E\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028E\u028F\x07" +
		"\x0E\x02\x02\u028F\u0290\x07<\x02\x02\u0290\u0292\x05b2\x02\u0291\u0293" +
		"\x079\x02\x02\u0292\u0291\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02" +
		"\u0293\u02D1\x03\x02\x02\x02\u0294\u0296\x05N(\x02\u0295\u0294\x03\x02" +
		"\x02\x02\u0296\u0299\x03\x02\x02\x02\u0297\u0295\x03\x02\x02\x02\u0297" +
		"\u0298\x03\x02\x02\x02\u0298\u029A\x03\x02\x02\x02\u0299\u0297\x03\x02" +
		"\x02\x02\u029A\u029C\x07\v\x02\x02\u029B\u029D\x07<\x02\x02\u029C\u029B" +
		"\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02" +
		"\u029E\u02A0\x05b2\x02\u029F\u02A1\x05P)\x02\u02A0\u029F\x03\x02\x02\x02" +
		"\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A3\x03\x02\x02\x02\u02A2\u02A4\x07" +
		"9\x02\x02\u02A3\u02A2\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4" +
		"\u02D1\x03\x02\x02\x02\u02A5\u02A7\x05N(\x02\u02A6\u02A5\x03\x02\x02\x02" +
		"\u02A7\u02AA\x03\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03" +
		"\x02\x02\x02\u02A9\u02AB\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AB" +
		"\u02AC\x07+\x02\x02\u02AC\u02AE\x05b2\x02\u02AD\u02AF\x079\x02\x02\u02AE" +
		"\u02AD\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02D1\x03\x02" +
		"\x02\x02\u02B0\u02B2\x05N(\x02\u02B1\u02B0\x03\x02\x02\x02\u02B2\u02B5" +
		"\x03\x02\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B3\u02B4\x03\x02\x02\x02" +
		"\u02B4\u02B6\x03\x02\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B6\u02B7\x07" +
		"\'\x02\x02\u02B7\u02B9\x05b2\x02\u02B8\u02BA\x079\x02\x02\u02B9\u02B8" +
		"\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02D1\x03\x02\x02\x02" +
		"\u02BB\u02BD\x05N(\x02\u02BC\u02BB\x03\x02\x02\x02\u02BD\u02C0\x03\x02" +
		"\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF" +
		"\u02C1\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C1\u02C2\x07&\x02" +
		"\x02\u02C2\u02C4\x05b2\x02\u02C3\u02C5\x079\x02\x02\u02C4\u02C3\x03\x02" +
		"\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02D1\x03\x02\x02\x02\u02C6" +
		"\u02C8\x05N(\x02\u02C7\u02C6\x03\x02\x02\x02\u02C8\u02CB\x03\x02\x02\x02" +
		"\u02C9\u02C7\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA\u02CC\x03" +
		"\x02\x02\x02\u02CB\u02C9\x03\x02\x02\x02\u02CC\u02CE\x05b2\x02\u02CD\u02CF" +
		"\x079\x02\x02\u02CE\u02CD\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02" +
		"\u02CF\u02D1\x03\x02\x02\x02\u02D0\u0241\x03\x02\x02\x02\u02D0\u024B\x03" +
		"\x02\x02\x02\u02D0\u0255\x03\x02\x02\x02\u02D0\u025F\x03\x02\x02\x02\u02D0" +
		"\u0269\x03\x02\x02\x02\u02D0\u0273\x03\x02\x02\x02\u02D0\u027D\x03\x02" +
		"\x02\x02\u02D0\u028B\x03\x02\x02\x02\u02D0\u0297\x03\x02\x02\x02\u02D0" +
		"\u02A8\x03\x02\x02\x02\u02D0\u02B3\x03\x02\x02\x02\u02D0\u02BE\x03\x02" +
		"\x02\x02\u02D0\u02C9\x03\x02\x02\x02\u02D1S\x03\x02\x02\x02\u02D2\u02D5" +
		"\x07\x03\x02\x02\u02D3\u02D6\x05h5\x02\u02D4\u02D6\x05R*\x02\u02D5\u02D3" +
		"\x03\x02\x02\x02\u02D5\u02D4\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02" +
		"\u02D6U\x03\x02\x02\x02\u02D7\u02D8\x07$\x02\x02\u02D8\u02DB\x05\\/\x02" +
		"\u02D9\u02DA\x07D\x02\x02\u02DA\u02DC\x05b2\x02\u02DB\u02D9\x03\x02\x02" +
		"\x02\u02DB\u02DC\x03\x02\x02\x02\u02DCW\x03\x02\x02\x02\u02DD\u02DE\x07" +
		"%\x02\x02\u02DE\u02DF\x05z>\x02\u02DF\u02E0\x07D\x02\x02\u02E0\u02E1\x05" +
		"b2\x02\u02E1Y\x03\x02\x02\x02\u02E2\u02E5\x05z>\x02\u02E3\u02E4\x07:\x02" +
		"\x02\u02E4\u02E6\x05<\x1F\x02\u02E5\u02E3\x03\x02\x02\x02\u02E5\u02E6" +
		"\x03\x02\x02\x02\u02E6[\x03\x02\x02\x02\u02E7\u02FE\x05Z.\x02\u02E8\u02E9" +
		"\x072\x02\x02\u02E9\u02ED\x05Z.\x02\u02EA\u02EC\x075\x02\x02\u02EB\u02EA" +
		"\x03\x02\x02\x02\u02EC\u02EF\x03\x02\x02\x02\u02ED\u02EB\x03\x02\x02\x02" +
		"\u02ED\u02EE\x03\x02\x02\x02\u02EE\u02F0\x03\x02\x02\x02\u02EF\u02ED\x03" +
		"\x02\x02\x02\u02F0\u02F1\x073\x02\x02\u02F1\u02FE\x03\x02\x02\x02\u02F2" +
		"\u02F3\x070\x02\x02\u02F3\u02F8\x05Z.\x02\u02F4\u02F5\x075\x02\x02\u02F5" +
		"\u02F7\x05Z.\x02\u02F6\u02F4\x03\x02\x02\x02\u02F7\u02FA\x03\x02\x02\x02" +
		"\u02F8\u02F6\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FB\x03" +
		"\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FB\u02FC\x071\x02\x02\u02FC" +
		"\u02FE\x03\x02\x02\x02\u02FD\u02E7\x03\x02\x02\x02\u02FD\u02E8\x03\x02" +
		"\x02\x02\u02FD\u02F2\x03\x02\x02\x02\u02FE]\x03\x02\x02\x02\u02FF\u0300" +
		"\x05`1\x02\u0300\u0301\t\x03\x02\x02\u0301\u0302\x05b2\x02\u0302_\x03" +
		"\x02\x02\x02\u0303\u0315\x05z>\x02\u0304\u0305\x05b2\x02\u0305\u0306\x07" +
		"4\x02\x02\u0306\u0307\x05z>\x02\u0307\u0315\x03\x02\x02\x02\u0308\u0309" +
		"\x05b2\x02\u0309\u030A\x070\x02\x02\u030A\u030F\x05b2\x02\u030B\u030C" +
		"\x075\x02\x02\u030C\u030E\x05b2\x02\u030D\u030B\x03\x02\x02\x02\u030E" +
		"\u0311\x03\x02\x02\x02\u030F\u030D\x03\x02\x02\x02\u030F\u0310\x03\x02" +
		"\x02\x02\u0310\u0312\x03\x02\x02\x02\u0311\u030F\x03\x02\x02\x02\u0312" +
		"\u0313\x071\x02\x02\u0313\u0315\x03\x02\x02\x02\u0314\u0303\x03\x02\x02" +
		"\x02\u0314\u0304\x03\x02\x02\x02\u0314\u0308\x03\x02\x02\x02\u0315a\x03" +
		"\x02\x02\x02\u0316\u0317\b2\x01\x02\u0317\u0318\x07.\x02\x02\u0318\u0319" +
		"\x05b2\x02\u0319\u031A\x07/\x02\x02\u031A\u035D\x03\x02\x02\x02\u031B" +
		"\u031C\x05<\x1F\x02\u031C\u031D\x07;\x02\x02\u031D\u031E\x05z>\x02\u031E" +
		"\u035D\x03\x02\x02\x02\u031F\u0321\x05<\x1F\x02\u0320\u0322\x078\x02\x02" +
		"\u0321\u0320\x03\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0323\x03" +
		"\x02\x02\x02\u0323\u032C\x07.\x02\x02\u0324\u0329\x05n8\x02\u0325\u0326" +
		"\x075\x02\x02\u0326\u0328\x05n8\x02\u0327\u0325\x03\x02\x02\x02\u0328" +
		"\u032B\x03\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u0329\u032A\x03\x02" +
		"\x02\x02\u032A\u032D\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02\u032C" +
		"\u0324\x03\x02\x02\x02\u032C\u032D\x03\x02\x02\x02\u032D\u032E\x03\x02" +
		"\x02\x02\u032E\u032F\x07/\x02\x02\u032F\u035D\x03\x02\x02\x02\u0330\u035D" +
		"\x05j6\x02\u0331\u0332\x07\x1C\x02\x02\u0332\u035D\x05b2\x0F\u0333\u035D" +
		"\x05t;\x02\u0334\u0335\x07\r\x02\x02\u0335\u035D\x05b2\v\u0336\u0337\x07" +
		"&\x02\x02\u0337\u0338\x05b2\x02\u0338\u0339\x079\x02\x02\u0339\u035D\x03" +
		"\x02\x02\x02\u033A\u035D\x05f4\x02\u033B\u0344\x070\x02\x02\u033C\u0341" +
		"\x05b2\x02\u033D\u033E\x075\x02\x02\u033E\u0340\x05b2\x02\u033F\u033D" +
		"\x03\x02\x02\x02\u0340\u0343\x03\x02\x02\x02\u0341\u033F\x03\x02\x02\x02" +
		"\u0341\u0342\x03\x02\x02\x02\u0342\u0345\x03\x02\x02\x02\u0343\u0341\x03" +
		"\x02\x02\x02\u0344\u033C\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345" +
		"\u0346\x03\x02\x02\x02\u0346\u035D\x071\x02\x02\u0347\u0349\x05<\x1F\x02" +
		"\u0348\u0347\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349\u034A\x03" +
		"\x02\x02\x02\u034A\u0356\x072\x02\x02\u034B\u0350\x05p9\x02\u034C\u034D" +
		"\x075\x02\x02\u034D\u034F\x05p9\x02\u034E\u034C\x03\x02\x02\x02\u034F" +
		"\u0352\x03\x02\x02\x02\u0350\u034E\x03\x02\x02\x02\u0350\u0351\x03\x02" +
		"\x02\x02\u0351\u0354\x03\x02\x02\x02\u0352\u0350\x03\x02\x02\x02\u0353" +
		"\u0355\x075\x02\x02\u0354\u0353\x03\x02\x02\x02\u0354\u0355\x03\x02\x02" +
		"\x02\u0355\u0357\x03\x02\x02\x02\u0356\u034B\x03\x02\x02\x02\u0356\u0357" +
		"\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358\u035D\x073\x02\x02" +
		"\u0359\u035D\x05D#\x02\u035A\u035D\x05r:\x02\u035B\u035D\x05z>\x02\u035C" +
		"\u0316\x03\x02\x02\x02\u035C\u031B\x03\x02\x02\x02\u035C\u031F\x03\x02" +
		"\x02\x02\u035C\u0330\x03\x02\x02\x02\u035C\u0331\x03\x02\x02\x02\u035C" +
		"\u0333\x03\x02\x02\x02\u035C\u0334\x03\x02\x02\x02\u035C\u0336\x03\x02" +
		"\x02\x02\u035C\u033A\x03\x02\x02\x02\u035C\u033B\x03\x02\x02\x02\u035C" +
		"\u0348\x03\x02\x02\x02\u035C\u0359\x03\x02\x02\x02\u035C\u035A\x03\x02" +
		"\x02\x02\u035C\u035B\x03\x02\x02\x02\u035D\u03AA\x03\x02\x02\x02\u035E" +
		"\u0360\f\x1F\x02\x02\u035F\u0361\t\x04\x02\x02\u0360\u035F\x03\x02\x02" +
		"\x02\u0360\u0361\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02\u0362\u0363" +
		"\x074\x02\x02\u0363\u03A9\x05z>\x02\u0364\u0365\f\x1E\x02\x02\u0365\u0366" +
		"\x07,\x02\x02\u0366\u03A9\x05<\x1F\x02\u0367\u0368\f\x1D\x02\x02\u0368" +
		"\u0369\x070\x02\x02\u0369\u036E\x05n8\x02\u036A\u036B\x075\x02\x02\u036B" +
		"\u036D\x05n8\x02\u036C\u036A\x03\x02\x02\x02\u036D\u0370\x03\x02\x02\x02" +
		"\u036E\u036C\x03\x02\x02\x02\u036E\u036F\x03\x02\x02\x02\u036F\u0371\x03" +
		"\x02\x02\x02\u0370\u036E\x03\x02\x02\x02\u0371\u0372\x071\x02\x02\u0372" +
		"\u03A9\x03\x02\x02\x02\u0373\u0374\f\x1C\x02\x02\u0374\u0375\x07;\x02" +
		"\x02\u0375\u03A9\x05z>\x02\u0376\u0378\f\x1A\x02\x02\u0377\u0379\x078" +
		"\x02\x02\u0378\u0377\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379" +
		"\u037A\x03\x02\x02\x02\u037A\u0383\x07.\x02\x02\u037B\u0380\x05n8\x02" +
		"\u037C\u037D\x075\x02\x02\u037D\u037F\x05n8\x02\u037E\u037C\x03\x02\x02" +
		"\x02\u037F\u0382\x03\x02\x02\x02\u0380\u037E\x03\x02\x02\x02\u0380\u0381" +
		"\x03\x02\x02\x02\u0381\u0384\x03\x02\x02\x02\u0382\u0380\x03\x02\x02\x02" +
		"\u0383\u037B\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02\u0384\u0385\x03" +
		"\x02\x02\x02\u0385\u03A9\x07/\x02\x02\u0386\u0387\f\x18\x02\x02\u0387" +
		"\u0388\t\x05\x02\x02\u0388\u03A9\x05b2\x02\u0389\u038A\f\x17\x02\x02\u038A" +
		"\u038B\t\x06\x02\x02\u038B\u03A9\x05b2\x02\u038C\u038D\f\x16\x02\x02\u038D" +
		"\u038E\t\x07\x02\x02\u038E\u03A9\x05b2\x02\u038F\u0390\f\x15\x02\x02\u0390" +
		"\u0391\t\b\x02\x02\u0391\u03A9\x05b2\x02\u0392\u0393\f\x14\x02\x02\u0393" +
		"\u03A9\x077\x02\x02\u0394\u0395\f\x13\x02\x02\u0395\u0397\x07\x18\x02" +
		"\x02\u0396\u0398\x07\x1C\x02\x02\u0397\u0396\x03\x02\x02\x02\u0397\u0398" +
		"\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\u03A9\x05<\x1F\x02" +
		"\u039A\u039B\f\x12\x02\x02\u039B\u039C\x07\x14\x02\x02\u039C\u03A9\x05" +
		"b2\x02\u039D\u039E\f\x11\x02\x02\u039E\u039F\x076\x02\x02\u039F\u03A9" +
		"\x05b2\x02\u03A0\u03A1\f\x0E\x02\x02\u03A1\u03A2\x07\x1F\x02\x02\u03A2" +
		"\u03A9\x05b2\x02\u03A3\u03A4\f\r\x02\x02\u03A4\u03A5\x07 \x02\x02\u03A5" +
		"\u03A9\x05b2\x02\u03A6\u03A7\f\x03\x02\x02\u03A7\u03A9\x07-\x02\x02\u03A8" +
		"\u035E\x03\x02\x02\x02\u03A8\u0364\x03\x02\x02\x02\u03A8\u0367\x03\x02" +
		"\x02\x02\u03A8\u0373\x03\x02\x02\x02\u03A8\u0376\x03\x02\x02\x02\u03A8" +
		"\u0386\x03\x02\x02\x02\u03A8\u0389\x03\x02\x02\x02\u03A8\u038C\x03\x02" +
		"\x02\x02\u03A8\u038F\x03\x02\x02\x02\u03A8\u0392\x03\x02\x02\x02\u03A8" +
		"\u0394\x03\x02\x02\x02\u03A8\u039A\x03\x02\x02\x02\u03A8\u039D\x03\x02" +
		"\x02\x02\u03A8\u03A0\x03\x02\x02\x02\u03A8\u03A3\x03\x02\x02\x02\u03A8" +
		"\u03A6\x03\x02\x02\x02\u03A9\u03AC\x03\x02\x02\x02\u03AA\u03A8\x03\x02" +
		"\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03ABc\x03\x02\x02\x02\u03AC\u03AA" +
		"\x03\x02\x02\x02\u03AD\u03B6\x07A\x02\x02\u03AE\u03B3\x05\x10\t\x02\u03AF" +
		"\u03B0\x075\x02\x02\u03B0\u03B2\x05\x10\t\x02\u03B1\u03AF\x03\x02\x02" +
		"\x02\u03B2\u03B5\x03\x02\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B3\u03B4" +
		"\x03\x02\x02\x02\u03B4\u03B7\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02" +
		"\u03B6\u03AE\x03\x02\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7\u03B8\x03" +
		"\x02\x02\x02\u03B8\u03B9\x07A\x02\x02\u03B9e\x03\x02\x02\x02\u03BA\u03BC" +
		"\x078\x02\x02\u03BB\u03BA\x03\x02\x02\x02\u03BB\u03BC\x03\x02\x02\x02" +
		"\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03C4\x05d3\x02\u03BE\u03BF\x07?\x02" +
		"\x02\u03BF\u03C1\x05<\x1F\x02\u03C0\u03BE\x03\x02\x02\x02\u03C0\u03C1" +
		"\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\u03C5\x05h5\x02\u03C3" +
		"\u03C5\x05R*\x02\u03C4\u03C0\x03\x02\x02\x02\u03C4\u03C3\x03\x02\x02\x02" +
		"\u03C5g\x03\x02\x02\x02\u03C6\u03CA\x072\x02\x02\u03C7\u03C9\x05R*\x02" +
		"\u03C8\u03C7\x03\x02\x02\x02\u03C9\u03CC\x03\x02\x02\x02\u03CA\u03C8\x03" +
		"\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB\u03CD\x03\x02\x02\x02\u03CC" +
		"\u03CA\x03\x02\x02\x02\u03CD\u03CE\x073\x02\x02\u03CEi\x03\x02\x02\x02" +
		"\u03CF\u03D0\x07\x19\x02\x02\u03D0\u03D4\x05h5\x02\u03D1\u03D3\x05l7\x02" +
		"\u03D2\u03D1\x03\x02\x02\x02\u03D3\u03D6\x03\x02\x02\x02\u03D4\u03D2\x03" +
		"\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5\u03D8\x03\x02\x02\x02\u03D6" +
		"\u03D4\x03\x02\x02\x02\u03D7\u03D9\x05v<\x02\u03D8\u03D7\x03\x02\x02\x02" +
		"\u03D8\u03D9\x03\x02\x02\x02\u03D9k\x03\x02\x02\x02\u03DA\u03DB\x07\x1A" +
		"\x02\x02\u03DB\u03DC\x05<\x1F\x02\u03DC\u03DD\x05h5\x02\u03DD\u03E6\x03" +
		"\x02\x02\x02\u03DE\u03DF\x07\x1A\x02\x02\u03DF\u03E0\x05z>\x02\u03E0\u03E1" +
		"\x07:\x02\x02\u03E1\u03E2\x05<\x1F\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3" +
		"\u03E4\x05h5\x02\u03E4\u03E6\x03\x02\x02\x02\u03E5\u03DA\x03\x02\x02\x02" +
		"\u03E5\u03DE\x03\x02\x02\x02\u03E6m\x03\x02\x02\x02\u03E7\u03E8\x05z>" +
		"\x02\u03E8\u03E9\x07D\x02\x02\u03E9\u03EB\x03\x02\x02\x02\u03EA\u03E7" +
		"\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB\u03EC\x03\x02\x02\x02" +
		"\u03EC\u03ED\x05b2\x02\u03EDo\x03\x02\x02\x02\u03EE\u03F1\x05z>\x02\u03EF" +
		"\u03F0\x07:\x02\x02\u03F0\u03F2\x05b2\x02\u03F1\u03EF\x03\x02\x02\x02" +
		"\u03F1\u03F2\x03\x02\x02\x02\u03F2q\x03\x02\x02\x02\u03F3\u03F9\x07W\x02" +
		"\x02\u03F4\u03F9\x07X\x02\x02\u03F5\u03F9\x07Y\x02\x02\u03F6\u03F9\x07" +
		"Z\x02\x02\u03F7\u03F9\x07\x1D\x02\x02\u03F8\u03F3\x03\x02\x02\x02\u03F8" +
		"\u03F4\x03\x02\x02\x02\u03F8\u03F5\x03\x02\x02\x02\u03F8\u03F6\x03\x02" +
		"\x02\x02\u03F8\u03F7\x03\x02\x02\x02\u03F9s\x03\x02\x02\x02\u03FA\u03FB" +
		"\x07\x17\x02\x02\u03FB\u03FC\x05b2\x02\u03FC\u03FE\x05h5\x02\u03FD\u03FF" +
		"\x05v<\x02\u03FE\u03FD\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF" +
		"u\x03\x02\x02\x02\u0400\u0401\x07\x1B\x02\x02\u0401\u0405\x05h5\x02\u0402" +
		"\u0403\x07\x1B\x02\x02\u0403\u0405\x05R*\x02\u0404\u0400\x03\x02\x02\x02" +
		"\u0404\u0402\x03\x02\x02\x02\u0405w\x03\x02\x02\x02\u0406\u0407\x07\x13" +
		"\x02\x02\u0407\u0408\x05\\/\x02\u0408\u0409\x07\x14\x02\x02\u0409\u040A" +
		"\x05b2\x02\u040A\u040B\x05h5\x02\u040By\x03\x02\x02\x02\u040C\u040F\x07" +
		"V\x02\x02\u040D\u040F\x05|?\x02\u040E\u040C\x03\x02\x02\x02\u040E\u040D" +
		"\x03\x02\x02\x02\u040F{\x03\x02\x02\x02\u0410\u0411\t\t\x02\x02\u0411" +
		"}\x03\x02\x02\x02\x8A\x81\x8A\x90\x94\x9C\xA4\xAE\xB7\xBF\xC1\xD3\xD7" +
		"\xDD\xDF\xE6\xEF\xF2\u0103\u0107\u0109\u0117\u011B\u011D\u0126\u0130\u0139" +
		"\u0141\u0143\u0148\u0157\u0160\u016C\u0176\u017B\u0187\u018B\u0192\u0198" +
		"\u01A0\u01A4\u01B4\u01B7\u01BB\u01C2\u01C5\u01C7\u01CB\u01CF\u01DD\u01E5" +
		"\u01EE\u01F2\u01FA\u01FD\u0202\u020A\u020E\u0212\u021C\u0221\u0229\u022C" +
		"\u0234\u0238\u023A\u0241\u0246\u024B\u0250\u0255\u025A\u025F\u0264\u0269" +
		"\u026E\u0273\u0278\u027D\u0283\u0286\u028B\u0292\u0297\u029C\u02A0\u02A3" +
		"\u02A8\u02AE\u02B3\u02B9\u02BE\u02C4\u02C9\u02CE\u02D0\u02D5\u02DB\u02E5" +
		"\u02ED\u02F8\u02FD\u030F\u0314\u0321\u0329\u032C\u0341\u0344\u0348\u0350" +
		"\u0354\u0356\u035C\u0360\u036E\u0378\u0380\u0383\u0397\u03A8\u03AA\u03B3" +
		"\u03B6\u03BB\u03C0\u03C4\u03CA\u03D4\u03D8\u03E5\u03EA\u03F1\u03F8\u03FE" +
		"\u0404\u040E";
	public static readonly _serializedATN: string = Utils.join(
		[
			CWScriptParser._serializedATNSegment0,
			CWScriptParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CWScriptParser.__ATN) {
			CWScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CWScriptParser._serializedATN));
		}

		return CWScriptParser.__ATN;
	}

}

export class SourceFileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CWScriptParser.EOF, 0); }
	public topLevelStmt(): TopLevelStmtContext[];
	public topLevelStmt(i: number): TopLevelStmtContext;
	public topLevelStmt(i?: number): TopLevelStmtContext | TopLevelStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelStmtContext);
		} else {
			return this.getRuleContext(i, TopLevelStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_sourceFile; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterSourceFile) {
			listener.enterSourceFile(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitSourceFile) {
			listener.exitSourceFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitSourceFile) {
			return visitor.visitSourceFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopLevelStmtContext extends ParserRuleContext {
	public importStmt(): ImportStmtContext | undefined {
		return this.tryGetRuleContext(0, ImportStmtContext);
	}
	public contractDefn(): ContractDefnContext | undefined {
		return this.tryGetRuleContext(0, ContractDefnContext);
	}
	public interfaceDefn(): InterfaceDefnContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDefnContext);
	}
	public constStmt_(): ConstStmt_Context | undefined {
		return this.tryGetRuleContext(0, ConstStmt_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_topLevelStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTopLevelStmt) {
			listener.enterTopLevelStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTopLevelStmt) {
			listener.exitTopLevelStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTopLevelStmt) {
			return visitor.visitTopLevelStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _base!: TypePathContext;
	public _typePath!: TypePathContext;
	public _interfaces: TypePathContext[] = [];
	public _body!: ContractBlockContext;
	public CONTRACT(): TerminalNode { return this.getToken(CWScriptParser.CONTRACT, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPLEMENTS, 0); }
	public contractBlock(): ContractBlockContext | undefined {
		return this.tryGetRuleContext(0, ContractBlockContext);
	}
	public typePath(): TypePathContext[];
	public typePath(i: number): TypePathContext;
	public typePath(i?: number): TypePathContext | TypePathContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypePathContext);
		} else {
			return this.getRuleContext(i, TypePathContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_contractDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterContractDefn) {
			listener.enterContractDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitContractDefn) {
			listener.exitContractDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitContractDefn) {
			return visitor.visitContractDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _base!: TypePathContext;
	public _body!: ContractBlockContext;
	public INTERFACE(): TerminalNode { return this.getToken(CWScriptParser.INTERFACE, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public contractBlock(): ContractBlockContext | undefined {
		return this.tryGetRuleContext(0, ContractBlockContext);
	}
	public typePath(): TypePathContext | undefined {
		return this.tryGetRuleContext(0, TypePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_interfaceDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInterfaceDefn) {
			listener.enterInterfaceDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInterfaceDefn) {
			listener.exitInterfaceDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDefn) {
			return visitor.visitInterfaceDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractBlockContext extends ParserRuleContext {
	public _contractItem!: ContractItemContext;
	public _body: ContractItemContext[] = [];
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public contractItem(): ContractItemContext[];
	public contractItem(i: number): ContractItemContext;
	public contractItem(i?: number): ContractItemContext | ContractItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractItemContext);
		} else {
			return this.getRuleContext(i, ContractItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_contractBlock; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterContractBlock) {
			listener.enterContractBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitContractBlock) {
			listener.exitContractBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitContractBlock) {
			return visitor.visitContractBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_importStmt; }
	public copyFrom(ctx: ImportStmtContext): void {
		super.copyFrom(ctx);
	}
}
export class ImportAllStmtContext extends ImportStmtContext {
	public _src!: Token;
	public IMPORT(): TerminalNode { return this.getToken(CWScriptParser.IMPORT, 0); }
	public MUL(): TerminalNode { return this.getToken(CWScriptParser.MUL, 0); }
	public FROM(): TerminalNode { return this.getToken(CWScriptParser.FROM, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.StringLiteral, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(ctx: ImportStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterImportAllStmt) {
			listener.enterImportAllStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitImportAllStmt) {
			listener.exitImportAllStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitImportAllStmt) {
			return visitor.visitImportAllStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImportItemsStmtContext extends ImportStmtContext {
	public _ident!: IdentContext;
	public _items: IdentContext[] = [];
	public _src!: Token;
	public IMPORT(): TerminalNode { return this.getToken(CWScriptParser.IMPORT, 0); }
	public FROM(): TerminalNode { return this.getToken(CWScriptParser.FROM, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.StringLiteral, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: ImportStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterImportItemsStmt) {
			listener.enterImportItemsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitImportItemsStmt) {
			listener.exitImportItemsStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitImportItemsStmt) {
			return visitor.visitImportItemsStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractItemContext extends ParserRuleContext {
	public typeDefn(): TypeDefnContext | undefined {
		return this.tryGetRuleContext(0, TypeDefnContext);
	}
	public constStmt_(): ConstStmt_Context | undefined {
		return this.tryGetRuleContext(0, ConstStmt_Context);
	}
	public fnDefn(): FnDefnContext | undefined {
		return this.tryGetRuleContext(0, FnDefnContext);
	}
	public errorDefn(): ErrorDefnContext | undefined {
		return this.tryGetRuleContext(0, ErrorDefnContext);
	}
	public errorDefnBlock(): ErrorDefnBlockContext | undefined {
		return this.tryGetRuleContext(0, ErrorDefnBlockContext);
	}
	public eventDefn(): EventDefnContext | undefined {
		return this.tryGetRuleContext(0, EventDefnContext);
	}
	public eventDefnBlock(): EventDefnBlockContext | undefined {
		return this.tryGetRuleContext(0, EventDefnBlockContext);
	}
	public stateDefnBlock(): StateDefnBlockContext | undefined {
		return this.tryGetRuleContext(0, StateDefnBlockContext);
	}
	public instantiateDefn(): InstantiateDefnContext | undefined {
		return this.tryGetRuleContext(0, InstantiateDefnContext);
	}
	public instantiateDecl(): InstantiateDeclContext | undefined {
		return this.tryGetRuleContext(0, InstantiateDeclContext);
	}
	public execDefn(): ExecDefnContext | undefined {
		return this.tryGetRuleContext(0, ExecDefnContext);
	}
	public execDecl(): ExecDeclContext | undefined {
		return this.tryGetRuleContext(0, ExecDeclContext);
	}
	public queryDefn(): QueryDefnContext | undefined {
		return this.tryGetRuleContext(0, QueryDefnContext);
	}
	public queryDecl(): QueryDeclContext | undefined {
		return this.tryGetRuleContext(0, QueryDeclContext);
	}
	public replyDefn(): ReplyDefnContext | undefined {
		return this.tryGetRuleContext(0, ReplyDefnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_contractItem; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterContractItem) {
			listener.enterContractItem(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitContractItem) {
			listener.exitContractItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitContractItem) {
			return visitor.visitContractItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _optional!: Token;
	public _ty!: TypeExprContext;
	public _default!: ExprContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public QUEST(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUEST, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_param; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterParam) {
			listener.enterParam(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitParam) {
			listener.exitParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamListContext extends ParserRuleContext {
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_paramList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterParamList) {
			listener.enterParamList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitParamList) {
			listener.exitParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitParamList) {
			return visitor.visitParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnParamsContext extends ParserRuleContext {
	public _param!: ParamContext;
	public _params: ParamContext[] = [];
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnParams; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFnParams) {
			listener.enterFnParams(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFnParams) {
			listener.exitFnParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFnParams) {
			return visitor.visitFnParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefn_fnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _params!: FnParamsContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public fnParams(): FnParamsContext | undefined {
		return this.tryGetRuleContext(0, FnParamsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_structDefn_fn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructDefn_fn) {
			listener.enterStructDefn_fn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructDefn_fn) {
			listener.exitStructDefn_fn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructDefn_fn) {
			return visitor.visitStructDefn_fn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorDefnContext extends ParserRuleContext {
	public _defn!: StructDefn_fnContext;
	public ERROR(): TerminalNode { return this.getToken(CWScriptParser.ERROR, 0); }
	public structDefn_fn(): StructDefn_fnContext {
		return this.getRuleContext(0, StructDefn_fnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_errorDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterErrorDefn) {
			listener.enterErrorDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitErrorDefn) {
			listener.exitErrorDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitErrorDefn) {
			return visitor.visitErrorDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorDefnBlockContext extends ParserRuleContext {
	public _structDefn_fn!: StructDefn_fnContext;
	public _defns: StructDefn_fnContext[] = [];
	public ERROR(): TerminalNode { return this.getToken(CWScriptParser.ERROR, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public structDefn_fn(): StructDefn_fnContext[];
	public structDefn_fn(i: number): StructDefn_fnContext;
	public structDefn_fn(i?: number): StructDefn_fnContext | StructDefn_fnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructDefn_fnContext);
		} else {
			return this.getRuleContext(i, StructDefn_fnContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_errorDefnBlock; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterErrorDefnBlock) {
			listener.enterErrorDefnBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitErrorDefnBlock) {
			listener.exitErrorDefnBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitErrorDefnBlock) {
			return visitor.visitErrorDefnBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventDefnContext extends ParserRuleContext {
	public EVENT(): TerminalNode { return this.getToken(CWScriptParser.EVENT, 0); }
	public structDefn_fn(): StructDefn_fnContext {
		return this.getRuleContext(0, StructDefn_fnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_eventDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEventDefn) {
			listener.enterEventDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEventDefn) {
			listener.exitEventDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEventDefn) {
			return visitor.visitEventDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventDefnBlockContext extends ParserRuleContext {
	public _structDefn_fn!: StructDefn_fnContext;
	public _defns: StructDefn_fnContext[] = [];
	public EVENT(): TerminalNode { return this.getToken(CWScriptParser.EVENT, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public structDefn_fn(): StructDefn_fnContext[];
	public structDefn_fn(i: number): StructDefn_fnContext;
	public structDefn_fn(i?: number): StructDefn_fnContext | StructDefn_fnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructDefn_fnContext);
		} else {
			return this.getRuleContext(i, StructDefn_fnContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_eventDefnBlock; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEventDefnBlock) {
			listener.enterEventDefnBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEventDefnBlock) {
			listener.exitEventDefnBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEventDefnBlock) {
			return visitor.visitEventDefnBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateDefnBlockContext extends ParserRuleContext {
	public _stateDefn!: StateDefnContext;
	public _defns: StateDefnContext[] = [];
	public STATE(): TerminalNode { return this.getToken(CWScriptParser.STATE, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public stateDefn(): StateDefnContext[];
	public stateDefn(i: number): StateDefnContext;
	public stateDefn(i?: number): StateDefnContext | StateDefnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateDefnContext);
		} else {
			return this.getRuleContext(i, StateDefnContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stateDefnBlock; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateDefnBlock) {
			listener.enterStateDefnBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateDefnBlock) {
			listener.exitStateDefnBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateDefnBlock) {
			return visitor.visitStateDefnBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateDefnContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stateDefn; }
	public copyFrom(ctx: StateDefnContext): void {
		super.copyFrom(ctx);
	}
}
export class StateDefn_ItemContext extends StateDefnContext {
	public _name!: IdentContext;
	public _ty!: TypeExprContext;
	public _default!: ExprContext;
	public COLON(): TerminalNode { return this.getToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: StateDefnContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateDefn_Item) {
			listener.enterStateDefn_Item(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateDefn_Item) {
			listener.exitStateDefn_Item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateDefn_Item) {
			return visitor.visitStateDefn_Item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StateDefn_MapContext extends StateDefnContext {
	public _name!: IdentContext;
	public _mapKeyDefn!: MapKeyDefnContext;
	public _mapKeys: MapKeyDefnContext[] = [];
	public _ty!: TypeExprContext;
	public _default!: ExprContext;
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public COLON(): TerminalNode { return this.getToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public mapKeyDefn(): MapKeyDefnContext[];
	public mapKeyDefn(i: number): MapKeyDefnContext;
	public mapKeyDefn(i?: number): MapKeyDefnContext | MapKeyDefnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapKeyDefnContext);
		} else {
			return this.getRuleContext(i, MapKeyDefnContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: StateDefnContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateDefn_Map) {
			listener.enterStateDefn_Map(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateDefn_Map) {
			listener.exitStateDefn_Map(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateDefn_Map) {
			return visitor.visitStateDefn_Map(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapKeyDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _ty!: TypeExprContext;
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_mapKeyDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMapKeyDefn) {
			listener.enterMapKeyDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMapKeyDefn) {
			listener.exitMapKeyDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMapKeyDefn) {
			return visitor.visitMapKeyDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstantiateDefnContext extends ParserRuleContext {
	public _params!: FnParamsContext;
	public _body!: BlockContext;
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public INSTANTIATE(): TerminalNode { return this.getToken(CWScriptParser.INSTANTIATE, 0); }
	public fnParams(): FnParamsContext {
		return this.getRuleContext(0, FnParamsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_instantiateDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInstantiateDefn) {
			listener.enterInstantiateDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInstantiateDefn) {
			listener.exitInstantiateDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInstantiateDefn) {
			return visitor.visitInstantiateDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstantiateDeclContext extends ParserRuleContext {
	public _params!: FnParamsContext;
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public INSTANTIATE(): TerminalNode { return this.getToken(CWScriptParser.INSTANTIATE, 0); }
	public fnParams(): FnParamsContext {
		return this.getRuleContext(0, FnParamsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_instantiateDecl; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInstantiateDecl) {
			listener.enterInstantiateDecl(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInstantiateDecl) {
			listener.exitInstantiateDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInstantiateDecl) {
			return visitor.visitInstantiateDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecDefnContext extends ParserRuleContext {
	public _tup!: Token;
	public _name!: IdentContext;
	public _params!: FnParamsContext;
	public _body!: BlockContext;
	public EXEC(): TerminalNode { return this.getToken(CWScriptParser.EXEC, 0); }
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public fnParams(): FnParamsContext {
		return this.getRuleContext(0, FnParamsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_execDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecDefn) {
			listener.enterExecDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecDefn) {
			listener.exitExecDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecDefn) {
			return visitor.visitExecDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecDeclContext extends ParserRuleContext {
	public _tup!: Token;
	public _name!: IdentContext;
	public _params!: FnParamsContext;
	public EXEC(): TerminalNode { return this.getToken(CWScriptParser.EXEC, 0); }
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public fnParams(): FnParamsContext {
		return this.getRuleContext(0, FnParamsContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_execDecl; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecDecl) {
			listener.enterExecDecl(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecDecl) {
			listener.exitExecDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecDecl) {
			return visitor.visitExecDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _params!: FnParamsContext;
	public _retTy!: TypeExprContext;
	public _body!: BlockContext;
	public QUERY(): TerminalNode { return this.getToken(CWScriptParser.QUERY, 0); }
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public fnParams(): FnParamsContext {
		return this.getRuleContext(0, FnParamsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_queryDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryDefn) {
			listener.enterQueryDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryDefn) {
			listener.exitQueryDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryDefn) {
			return visitor.visitQueryDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryDeclContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _params!: FnParamsContext;
	public _retTy!: TypeExprContext;
	public QUERY(): TerminalNode { return this.getToken(CWScriptParser.QUERY, 0); }
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public fnParams(): FnParamsContext {
		return this.getRuleContext(0, FnParamsContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_queryDecl; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryDecl) {
			listener.enterQueryDecl(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryDecl) {
			listener.exitQueryDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryDecl) {
			return visitor.visitQueryDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReplyDefnContext extends ParserRuleContext {
	public _on!: IdentContext;
	public _name!: IdentContext;
	public _params!: FnParamsContext;
	public _body!: BlockContext;
	public REPLY(): TerminalNode { return this.getToken(CWScriptParser.REPLY, 0); }
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public fnParams(): FnParamsContext {
		return this.getRuleContext(0, FnParamsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_replyDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterReplyDefn) {
			listener.enterReplyDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitReplyDefn) {
			listener.exitReplyDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitReplyDefn) {
			return visitor.visitReplyDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _variant_!: Variant_Context;
	public _variants: Variant_Context[] = [];
	public ENUM(): TerminalNode { return this.getToken(CWScriptParser.ENUM, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public variant_(): Variant_Context[];
	public variant_(i: number): Variant_Context;
	public variant_(i?: number): Variant_Context | Variant_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Variant_Context);
		} else {
			return this.getRuleContext(i, Variant_Context);
		}
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_enumDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumDefn) {
			listener.enterEnumDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumDefn) {
			listener.exitEnumDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumDefn) {
			return visitor.visitEnumDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variant_Context extends ParserRuleContext {
	public variant_struct(): Variant_structContext | undefined {
		return this.tryGetRuleContext(0, Variant_structContext);
	}
	public variant_unit(): Variant_unitContext | undefined {
		return this.tryGetRuleContext(0, Variant_unitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_variant_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterVariant_) {
			listener.enterVariant_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitVariant_) {
			listener.exitVariant_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitVariant_) {
			return visitor.visitVariant_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variant_structContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _members!: ParamListContext;
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RPAREN, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_variant_struct; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterVariant_struct) {
			listener.enterVariant_struct(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitVariant_struct) {
			listener.exitVariant_struct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitVariant_struct) {
			return visitor.visitVariant_struct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variant_unitContext extends ParserRuleContext {
	public _name!: IdentContext;
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_variant_unit; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterVariant_unit) {
			listener.enterVariant_unit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitVariant_unit) {
			listener.exitVariant_unit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitVariant_unit) {
			return visitor.visitVariant_unit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeExpr; }
	public copyFrom(ctx: TypeExprContext): void {
		super.copyFrom(ctx);
	}
}
export class PathTContext extends TypeExprContext {
	public typePath(): TypePathContext {
		return this.getRuleContext(0, TypePathContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterPathT) {
			listener.enterPathT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitPathT) {
			listener.exitPathT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitPathT) {
			return visitor.visitPathT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariantTContext extends TypeExprContext {
	public typeVariant(): TypeVariantContext {
		return this.getRuleContext(0, TypeVariantContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterVariantT) {
			listener.enterVariantT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitVariantT) {
			listener.exitVariantT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitVariantT) {
			return visitor.visitVariantT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LensTContext extends TypeExprContext {
	public typeLens(): TypeLensContext {
		return this.getRuleContext(0, TypeLensContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterLensT) {
			listener.enterLensT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitLensT) {
			listener.exitLensT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitLensT) {
			return visitor.visitLensT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FnTContext extends TypeExprContext {
	public fnType(): FnTypeContext {
		return this.getRuleContext(0, FnTypeContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFnT) {
			listener.enterFnT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFnT) {
			listener.exitFnT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFnT) {
			return visitor.visitFnT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OptionTContext extends TypeExprContext {
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public QUEST(): TerminalNode { return this.getToken(CWScriptParser.QUEST, 0); }
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterOptionT) {
			listener.enterOptionT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitOptionT) {
			listener.exitOptionT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitOptionT) {
			return visitor.visitOptionT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListTContext extends TypeExprContext {
	public _len!: Token;
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public IntLiteral(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IntLiteral, 0); }
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterListT) {
			listener.enterListT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitListT) {
			listener.exitListT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitListT) {
			return visitor.visitListT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleTContext extends TypeExprContext {
	public _typeExpr!: TypeExprContext;
	public _items: TypeExprContext[] = [];
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public typeExpr(): TypeExprContext[];
	public typeExpr(i: number): TypeExprContext;
	public typeExpr(i?: number): TypeExprContext | TypeExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeExprContext);
		} else {
			return this.getRuleContext(i, TypeExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleT) {
			listener.enterTupleT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleT) {
			listener.exitTupleT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleT) {
			return visitor.visitTupleT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DefnTContext extends TypeExprContext {
	public typeDefn(): TypeDefnContext {
		return this.getRuleContext(0, TypeDefnContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDefnT) {
			listener.enterDefnT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDefnT) {
			listener.exitDefnT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDefnT) {
			return visitor.visitDefnT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnTypeContext extends ParserRuleContext {
	public _fallible!: Token;
	public _params!: ParamListContext;
	public _retTy!: TypeExprContext;
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public ARROW(): TerminalNode { return this.getToken(CWScriptParser.ARROW, 0); }
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnType; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFnType) {
			listener.enterFnType(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFnType) {
			listener.exitFnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFnType) {
			return visitor.visitFnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeLensContext extends ParserRuleContext {
	public _scope!: Token;
	public typePath(): TypePathContext {
		return this.getRuleContext(0, TypePathContext);
	}
	public INSTANTIATE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.INSTANTIATE, 0); }
	public EXEC(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXEC, 0); }
	public QUERY(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUERY, 0); }
	public MUT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeLens; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeLens) {
			listener.enterTypeLens(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeLens) {
			listener.exitTypeLens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeLens) {
			return visitor.visitTypeLens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypePathContext extends ParserRuleContext {
	public _ident!: IdentContext;
	public _segments: IdentContext[] = [];
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.DOT);
		} else {
			return this.getToken(CWScriptParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typePath; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypePath) {
			listener.enterTypePath(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypePath) {
			listener.exitTypePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypePath) {
			return visitor.visitTypePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeVariantContext extends ParserRuleContext {
	public _variant!: IdentContext;
	public typePath(): TypePathContext {
		return this.getRuleContext(0, TypePathContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DOT, 0); }
	public HASH(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.HASH, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LPAREN, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RPAREN, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeVariant; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeVariant) {
			listener.enterTypeVariant(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeVariant) {
			listener.exitTypeVariant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeVariant) {
			return visitor.visitTypeVariant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefnContext extends ParserRuleContext {
	public structDefn(): StructDefnContext | undefined {
		return this.tryGetRuleContext(0, StructDefnContext);
	}
	public enumDefn(): EnumDefnContext | undefined {
		return this.tryGetRuleContext(0, EnumDefnContext);
	}
	public typeAliasDefn(): TypeAliasDefnContext | undefined {
		return this.tryGetRuleContext(0, TypeAliasDefnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeDefn) {
			listener.enterTypeDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeDefn) {
			listener.exitTypeDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeDefn) {
			return visitor.visitTypeDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _param!: ParamContext;
	public _members: ParamContext[] = [];
	public STRUCT(): TerminalNode { return this.getToken(CWScriptParser.STRUCT, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RPAREN, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_structDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructDefn) {
			listener.enterStructDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructDefn) {
			listener.exitStructDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructDefn) {
			return visitor.visitStructDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAliasDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _value!: TypeExprContext;
	public TYPE(): TerminalNode { return this.getToken(CWScriptParser.TYPE, 0); }
	public EQ(): TerminalNode { return this.getToken(CWScriptParser.EQ, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeAliasDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeAliasDefn) {
			listener.enterTypeAliasDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeAliasDefn) {
			listener.exitTypeAliasDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeAliasDefn) {
			return visitor.visitTypeAliasDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _fallible!: Token;
	public _params!: FnParamsContext;
	public _retTy!: TypeExprContext;
	public _body!: BlockContext;
	public FN(): TerminalNode { return this.getToken(CWScriptParser.FN, 0); }
	public fnParams(): FnParamsContext {
		return this.getRuleContext(0, FnParamsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFnDefn) {
			listener.enterFnDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFnDefn) {
			listener.exitFnDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFnDefn) {
			return visitor.visitFnDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotContext extends ParserRuleContext {
	public _path!: TypePathContext;
	public _arg!: ArgContext;
	public _args: ArgContext[] = [];
	public AT(): TerminalNode { return this.getToken(CWScriptParser.AT, 0); }
	public typePath(): TypePathContext | undefined {
		return this.tryGetRuleContext(0, TypePathContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RPAREN, 0); }
	public arg(): ArgContext | undefined {
		return this.tryGetRuleContext(0, ArgContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_annot; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAnnot) {
			listener.enterAnnot(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAnnot) {
			listener.exitAnnot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAnnot) {
			return visitor.visitAnnot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallOptionsContext extends ParserRuleContext {
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
	public memberVal(): MemberValContext[];
	public memberVal(i: number): MemberValContext;
	public memberVal(i?: number): MemberValContext | MemberValContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberValContext);
		} else {
			return this.getRuleContext(i, MemberValContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_callOptions; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterCallOptions) {
			listener.enterCallOptions(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitCallOptions) {
			listener.exitCallOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitCallOptions) {
			return visitor.visitCallOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stmt; }
	public copyFrom(ctx: StmtContext): void {
		super.copyFrom(ctx);
	}
}
export class DebugStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public debugStmt_(): DebugStmt_Context {
		return this.getRuleContext(0, DebugStmt_Context);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDebugStmt) {
			listener.enterDebugStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDebugStmt) {
			listener.exitDebugStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDebugStmt) {
			return visitor.visitDebugStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public letStmt_(): LetStmt_Context {
		return this.getRuleContext(0, LetStmt_Context);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterLetStmt) {
			listener.enterLetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitLetStmt) {
			listener.exitLetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitLetStmt) {
			return visitor.visitLetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public constStmt_(): ConstStmt_Context {
		return this.getRuleContext(0, ConstStmt_Context);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterConstStmt) {
			listener.enterConstStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitConstStmt) {
			listener.exitConstStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitConstStmt) {
			return visitor.visitConstStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public assignStmt_(): AssignStmt_Context {
		return this.getRuleContext(0, AssignStmt_Context);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAssignStmt) {
			listener.enterAssignStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAssignStmt) {
			listener.exitAssignStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignStmt) {
			return visitor.visitAssignStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public ifStmt_(): IfStmt_Context {
		return this.getRuleContext(0, IfStmt_Context);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public forStmt_(): ForStmt_Context {
		return this.getRuleContext(0, ForStmt_Context);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterForStmt) {
			listener.enterForStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitForStmt) {
			listener.exitForStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitForStmt) {
			return visitor.visitForStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public _options!: CallOptionsContext;
	public EXEC_NOW(): TerminalNode { return this.getToken(CWScriptParser.EXEC_NOW, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	public callOptions(): CallOptionsContext | undefined {
		return this.tryGetRuleContext(0, CallOptionsContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecStmt) {
			listener.enterExecStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecStmt) {
			listener.exitExecStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecStmt) {
			return visitor.visitExecStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DelegateExecStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public DELEGATE_EXEC(): TerminalNode { return this.getToken(CWScriptParser.DELEGATE_EXEC, 0); }
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDelegateExecStmt) {
			listener.enterDelegateExecStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDelegateExecStmt) {
			listener.exitDelegateExecStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDelegateExecStmt) {
			return visitor.visitDelegateExecStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstantiateStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public _new!: Token;
	public _options!: CallOptionsContext;
	public INSTANTIATE_NOW(): TerminalNode { return this.getToken(CWScriptParser.INSTANTIATE_NOW, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	public HASH(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.HASH, 0); }
	public callOptions(): CallOptionsContext | undefined {
		return this.tryGetRuleContext(0, CallOptionsContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInstantiateStmt) {
			listener.enterInstantiateStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInstantiateStmt) {
			listener.exitInstantiateStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInstantiateStmt) {
			return visitor.visitInstantiateStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmitStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public EMIT(): TerminalNode { return this.getToken(CWScriptParser.EMIT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEmitStmt) {
			listener.enterEmitStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEmitStmt) {
			listener.exitEmitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEmitStmt) {
			return visitor.visitEmitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public _semi!: Token;
	public RETURN(): TerminalNode { return this.getToken(CWScriptParser.RETURN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FailStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public _semi!: Token;
	public FAIL(): TerminalNode { return this.getToken(CWScriptParser.FAIL, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFailStmt) {
			listener.enterFailStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFailStmt) {
			listener.exitFailStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFailStmt) {
			return visitor.visitFailStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExprStmt) {
			listener.enterExprStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExprStmt) {
			listener.exitExprStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExprStmt) {
			return visitor.visitExprStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DebugStmt_Context extends ParserRuleContext {
	public DEBUG(): TerminalNode { return this.getToken(CWScriptParser.DEBUG, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public stmt(): StmtContext | undefined {
		return this.tryGetRuleContext(0, StmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_debugStmt_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDebugStmt_) {
			listener.enterDebugStmt_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDebugStmt_) {
			listener.exitDebugStmt_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDebugStmt_) {
			return visitor.visitDebugStmt_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetStmt_Context extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(CWScriptParser.LET, 0); }
	public let_binding(): Let_bindingContext {
		return this.getRuleContext(0, Let_bindingContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_letStmt_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterLetStmt_) {
			listener.enterLetStmt_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitLetStmt_) {
			listener.exitLetStmt_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitLetStmt_) {
			return visitor.visitLetStmt_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstStmt_Context extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(CWScriptParser.CONST, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public EQ(): TerminalNode { return this.getToken(CWScriptParser.EQ, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_constStmt_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterConstStmt_) {
			listener.enterConstStmt_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitConstStmt_) {
			listener.exitConstStmt_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitConstStmt_) {
			return visitor.visitConstStmt_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentBinding_Context extends ParserRuleContext {
	public _name!: IdentContext;
	public _ty!: TypeExprContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_identBinding_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdentBinding_) {
			listener.enterIdentBinding_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdentBinding_) {
			listener.exitIdentBinding_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentBinding_) {
			return visitor.visitIdentBinding_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Let_bindingContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_let_binding; }
	public copyFrom(ctx: Let_bindingContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentBindingContext extends Let_bindingContext {
	public identBinding_(): IdentBinding_Context {
		return this.getRuleContext(0, IdentBinding_Context);
	}
	constructor(ctx: Let_bindingContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdentBinding) {
			listener.enterIdentBinding(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdentBinding) {
			listener.exitIdentBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentBinding) {
			return visitor.visitIdentBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructBindingContext extends Let_bindingContext {
	public _identBinding_!: IdentBinding_Context;
	public _bindings: IdentBinding_Context[] = [];
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public identBinding_(): IdentBinding_Context | undefined {
		return this.tryGetRuleContext(0, IdentBinding_Context);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: Let_bindingContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructBinding) {
			listener.enterStructBinding(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructBinding) {
			listener.exitStructBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructBinding) {
			return visitor.visitStructBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleBindingContext extends Let_bindingContext {
	public _identBinding_!: IdentBinding_Context;
	public _bindings: IdentBinding_Context[] = [];
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public identBinding_(): IdentBinding_Context[];
	public identBinding_(i: number): IdentBinding_Context;
	public identBinding_(i?: number): IdentBinding_Context | IdentBinding_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentBinding_Context);
		} else {
			return this.getRuleContext(i, IdentBinding_Context);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: Let_bindingContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleBinding) {
			listener.enterTupleBinding(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleBinding) {
			listener.exitTupleBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleBinding) {
			return visitor.visitTupleBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignStmt_Context extends ParserRuleContext {
	public _lhs!: AssignLHSContext;
	public _assignOp!: Token;
	public _rhs!: ExprContext;
	public assignLHS(): AssignLHSContext | undefined {
		return this.tryGetRuleContext(0, AssignLHSContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public PLUS_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS_EQ, 0); }
	public MINUS_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MINUS_EQ, 0); }
	public MUL_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL_EQ, 0); }
	public DIV_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DIV_EQ, 0); }
	public MOD_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MOD_EQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_assignStmt_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAssignStmt_) {
			listener.enterAssignStmt_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAssignStmt_) {
			listener.exitAssignStmt_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignStmt_) {
			return visitor.visitAssignStmt_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignLHSContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_assignLHS; }
	public copyFrom(ctx: AssignLHSContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentLHSContext extends AssignLHSContext {
	public _symbol!: IdentContext;
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(ctx: AssignLHSContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdentLHS) {
			listener.enterIdentLHS(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdentLHS) {
			listener.exitIdentLHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentLHS) {
			return visitor.visitIdentLHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DotLHSContext extends AssignLHSContext {
	public _obj!: ExprContext;
	public _member!: IdentContext;
	public DOT(): TerminalNode { return this.getToken(CWScriptParser.DOT, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(ctx: AssignLHSContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDotLHS) {
			listener.enterDotLHS(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDotLHS) {
			listener.exitDotLHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDotLHS) {
			return visitor.visitDotLHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexLHSContext extends AssignLHSContext {
	public _obj!: ExprContext;
	public _expr!: ExprContext;
	public _args: ExprContext[] = [];
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: AssignLHSContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIndexLHS) {
			listener.enterIndexLHS(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIndexLHS) {
			listener.exitIndexLHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIndexLHS) {
			return visitor.visitIndexLHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class GroupedExprContext extends ExprContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterGroupedExpr) {
			listener.enterGroupedExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitGroupedExpr) {
			listener.exitGroupedExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitGroupedExpr) {
			return visitor.visitGroupedExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DotExprContext extends ExprContext {
	public _unwrap!: Token;
	public _member!: IdentContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public DOT(): TerminalNode { return this.getToken(CWScriptParser.DOT, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public QUEST(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUEST, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDotExpr) {
			listener.enterDotExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDotExpr) {
			listener.exitDotExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDotExpr) {
			return visitor.visitDotExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AsExprContext extends ExprContext {
	public _ty!: TypeExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public AS(): TerminalNode { return this.getToken(CWScriptParser.AS, 0); }
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAsExpr) {
			listener.enterAsExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAsExpr) {
			listener.exitAsExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAsExpr) {
			return visitor.visitAsExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexExprContext extends ExprContext {
	public _arg!: ArgContext;
	public _args: ArgContext[] = [];
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public arg(): ArgContext[];
	public arg(i: number): ArgContext;
	public arg(i?: number): ArgContext | ArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgContext);
		} else {
			return this.getRuleContext(i, ArgContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIndexExpr) {
			listener.enterIndexExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIndexExpr) {
			listener.exitIndexExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIndexExpr) {
			return visitor.visitIndexExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DColonExprContext extends ExprContext {
	public _member!: IdentContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public D_COLON(): TerminalNode { return this.getToken(CWScriptParser.D_COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDColonExpr) {
			listener.enterDColonExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDColonExpr) {
			listener.exitDColonExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDColonExpr) {
			return visitor.visitDColonExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeDColonExprContext extends ExprContext {
	public _member!: IdentContext;
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public D_COLON(): TerminalNode { return this.getToken(CWScriptParser.D_COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeDColonExpr) {
			listener.enterTypeDColonExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeDColonExpr) {
			listener.exitTypeDColonExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeDColonExpr) {
			return visitor.visitTypeDColonExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FnCallExprContext extends ExprContext {
	public _fallible!: Token;
	public _arg!: ArgContext;
	public _args: ArgContext[] = [];
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public arg(): ArgContext[];
	public arg(i: number): ArgContext;
	public arg(i?: number): ArgContext | ArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgContext);
		} else {
			return this.getRuleContext(i, ArgContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFnCallExpr) {
			listener.enterFnCallExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFnCallExpr) {
			listener.exitFnCallExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFnCallExpr) {
			return visitor.visitFnCallExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeFnCallExprContext extends ExprContext {
	public _fallible!: Token;
	public _arg!: ArgContext;
	public _args: ArgContext[] = [];
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public arg(): ArgContext[];
	public arg(i: number): ArgContext;
	public arg(i?: number): ArgContext | ArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgContext);
		} else {
			return this.getRuleContext(i, ArgContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeFnCallExpr) {
			listener.enterTypeFnCallExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeFnCallExpr) {
			listener.exitTypeFnCallExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeFnCallExpr) {
			return visitor.visitTypeFnCallExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulExprContext extends ExprContext {
	public _op!: Token;
	public _rhs!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MOD, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMulExpr) {
			listener.enterMulExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMulExpr) {
			listener.exitMulExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMulExpr) {
			return visitor.visitMulExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddExprContext extends ExprContext {
	public _op!: Token;
	public _rhs!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MINUS, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAddExpr) {
			listener.enterAddExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAddExpr) {
			listener.exitAddExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAddExpr) {
			return visitor.visitAddExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CompExprContext extends ExprContext {
	public _op!: Token;
	public _rhs!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.GT, 0); }
	public LT_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LT_EQ, 0); }
	public GT_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.GT_EQ, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterCompExpr) {
			listener.enterCompExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitCompExpr) {
			listener.exitCompExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitCompExpr) {
			return visitor.visitCompExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqExprContext extends ExprContext {
	public _op!: Token;
	public _rhs!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public EQ_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ_EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.NEQ, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEqExpr) {
			listener.enterEqExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEqExpr) {
			listener.exitEqExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEqExpr) {
			return visitor.visitEqExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NoneCheckExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public QUEST(): TerminalNode { return this.getToken(CWScriptParser.QUEST, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterNoneCheckExpr) {
			listener.enterNoneCheckExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitNoneCheckExpr) {
			listener.exitNoneCheckExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitNoneCheckExpr) {
			return visitor.visitNoneCheckExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IsExprContext extends ExprContext {
	public _negative!: Token;
	public _rhs!: TypeExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IS(): TerminalNode { return this.getToken(CWScriptParser.IS, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.NOT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIsExpr) {
			listener.enterIsExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIsExpr) {
			listener.exitIsExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIsExpr) {
			return visitor.visitIsExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InExprContext extends ExprContext {
	public _rhs!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public IN(): TerminalNode { return this.getToken(CWScriptParser.IN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInExpr) {
			listener.enterInExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInExpr) {
			listener.exitInExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInExpr) {
			return visitor.visitInExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShortTryExprContext extends ExprContext {
	public _rhs!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public D_QUEST(): TerminalNode { return this.getToken(CWScriptParser.D_QUEST, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterShortTryExpr) {
			listener.enterShortTryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitShortTryExpr) {
			listener.exitShortTryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitShortTryExpr) {
			return visitor.visitShortTryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TryCatchElseExprContext extends ExprContext {
	public tryCatchElseExpr_(): TryCatchElseExpr_Context {
		return this.getRuleContext(0, TryCatchElseExpr_Context);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTryCatchElseExpr) {
			listener.enterTryCatchElseExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTryCatchElseExpr) {
			listener.exitTryCatchElseExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTryCatchElseExpr) {
			return visitor.visitTryCatchElseExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExprContext extends ExprContext {
	public NOT(): TerminalNode { return this.getToken(CWScriptParser.NOT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterNotExpr) {
			listener.enterNotExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitNotExpr) {
			listener.exitNotExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitNotExpr) {
			return visitor.visitNotExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExprContext extends ExprContext {
	public _rhs!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(CWScriptParser.AND, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAndExpr) {
			listener.enterAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAndExpr) {
			listener.exitAndExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAndExpr) {
			return visitor.visitAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExprContext extends ExprContext {
	public _rhs!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(CWScriptParser.OR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterOrExpr) {
			listener.enterOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitOrExpr) {
			listener.exitOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitOrExpr) {
			return visitor.visitOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfExprContext extends ExprContext {
	public ifStmt_(): IfStmt_Context {
		return this.getRuleContext(0, IfStmt_Context);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIfExpr) {
			listener.enterIfExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIfExpr) {
			listener.exitIfExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIfExpr) {
			return visitor.visitIfExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QueryNowExprContext extends ExprContext {
	public QUERY_NOW(): TerminalNode { return this.getToken(CWScriptParser.QUERY_NOW, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryNowExpr) {
			listener.enterQueryNowExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryNowExpr) {
			listener.exitQueryNowExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryNowExpr) {
			return visitor.visitQueryNowExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FailExprContext extends ExprContext {
	public _semi!: Token;
	public FAIL(): TerminalNode { return this.getToken(CWScriptParser.FAIL, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFailExpr) {
			listener.enterFailExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFailExpr) {
			listener.exitFailExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFailExpr) {
			return visitor.visitFailExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClosureExprContext extends ExprContext {
	public closure(): ClosureContext {
		return this.getRuleContext(0, ClosureContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterClosureExpr) {
			listener.enterClosureExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitClosureExpr) {
			listener.exitClosureExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitClosureExpr) {
			return visitor.visitClosureExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleExprContext extends ExprContext {
	public _expr!: ExprContext;
	public _items: ExprContext[] = [];
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleExpr) {
			listener.enterTupleExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleExpr) {
			listener.exitTupleExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleExpr) {
			return visitor.visitTupleExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructExprContext extends ExprContext {
	public _memberVal!: MemberValContext;
	public _members: MemberValContext[] = [];
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public memberVal(): MemberValContext[];
	public memberVal(i: number): MemberValContext;
	public memberVal(i?: number): MemberValContext | MemberValContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberValContext);
		} else {
			return this.getRuleContext(i, MemberValContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructExpr) {
			listener.enterStructExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructExpr) {
			listener.exitStructExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructExpr) {
			return visitor.visitStructExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnitVariantExprContext extends ExprContext {
	public typeVariant(): TypeVariantContext {
		return this.getRuleContext(0, TypeVariantContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterUnitVariantExpr) {
			listener.enterUnitVariantExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitUnitVariantExpr) {
			listener.exitUnitVariantExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitUnitVariantExpr) {
			return visitor.visitUnitVariantExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExprContext extends ExprContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterLiteralExpr) {
			listener.enterLiteralExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitLiteralExpr) {
			listener.exitLiteralExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpr) {
			return visitor.visitLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentExprContext extends ExprContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdentExpr) {
			listener.enterIdentExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdentExpr) {
			listener.exitIdentExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentExpr) {
			return visitor.visitIdentExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Grouped2ExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public TILDE(): TerminalNode { return this.getToken(CWScriptParser.TILDE, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterGrouped2Expr) {
			listener.enterGrouped2Expr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitGrouped2Expr) {
			listener.exitGrouped2Expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitGrouped2Expr) {
			return visitor.visitGrouped2Expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClosureParamsContext extends ParserRuleContext {
	public _param!: ParamContext;
	public _params: ParamContext[] = [];
	public BAR(): TerminalNode[];
	public BAR(i: number): TerminalNode;
	public BAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.BAR);
		} else {
			return this.getToken(CWScriptParser.BAR, i);
		}
	}
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_closureParams; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterClosureParams) {
			listener.enterClosureParams(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitClosureParams) {
			listener.exitClosureParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitClosureParams) {
			return visitor.visitClosureParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClosureContext extends ParserRuleContext {
	public _fallible!: Token;
	public _params!: ClosureParamsContext;
	public _retTy!: TypeExprContext;
	public stmt(): StmtContext | undefined {
		return this.tryGetRuleContext(0, StmtContext);
	}
	public closureParams(): ClosureParamsContext | undefined {
		return this.tryGetRuleContext(0, ClosureParamsContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_closure; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterClosure) {
			listener.enterClosure(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitClosure) {
			listener.exitClosure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitClosure) {
			return visitor.visitClosure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public _stmt!: StmtContext;
	public _body: StmtContext[] = [];
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_block; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryCatchElseExpr_Context extends ParserRuleContext {
	public _body!: BlockContext;
	public _catchClause!: CatchClauseContext;
	public _catches: CatchClauseContext[] = [];
	public _else_!: ElseClauseContext;
	public TRY(): TerminalNode { return this.getToken(CWScriptParser.TRY, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	public elseClause(): ElseClauseContext | undefined {
		return this.tryGetRuleContext(0, ElseClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_tryCatchElseExpr_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTryCatchElseExpr_) {
			listener.enterTryCatchElseExpr_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTryCatchElseExpr_) {
			listener.exitTryCatchElseExpr_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTryCatchElseExpr_) {
			return visitor.visitTryCatchElseExpr_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_catchClause; }
	public copyFrom(ctx: CatchClauseContext): void {
		super.copyFrom(ctx);
	}
}
export class CatchContext extends CatchClauseContext {
	public _ty!: TypeExprContext;
	public _body!: BlockContext;
	public CATCH(): TerminalNode { return this.getToken(CWScriptParser.CATCH, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(ctx: CatchClauseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterCatch) {
			listener.enterCatch(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitCatch) {
			listener.exitCatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitCatch) {
			return visitor.visitCatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CatchBindContext extends CatchClauseContext {
	public _name!: IdentContext;
	public _ty!: TypeExprContext;
	public _body!: BlockContext;
	public CATCH(): TerminalNode { return this.getToken(CWScriptParser.CATCH, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(ctx: CatchClauseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterCatchBind) {
			listener.enterCatchBind(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitCatchBind) {
			listener.exitCatchBind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitCatchBind) {
			return visitor.visitCatchBind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _value!: ExprContext;
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_arg; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterArg) {
			listener.enterArg(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitArg) {
			listener.exitArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitArg) {
			return visitor.visitArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberValContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _value!: ExprContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_memberVal; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMemberVal) {
			listener.enterMemberVal(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMemberVal) {
			listener.exitMemberVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMemberVal) {
			return visitor.visitMemberVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class StringLitContext extends LiteralContext {
	public StringLiteral(): TerminalNode { return this.getToken(CWScriptParser.StringLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStringLit) {
			listener.enterStringLit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStringLit) {
			listener.exitStringLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStringLit) {
			return visitor.visitStringLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntLitContext extends LiteralContext {
	public IntLiteral(): TerminalNode { return this.getToken(CWScriptParser.IntLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIntLit) {
			listener.enterIntLit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIntLit) {
			listener.exitIntLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIntLit) {
			return visitor.visitIntLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DecLitContext extends LiteralContext {
	public DecLiteral(): TerminalNode { return this.getToken(CWScriptParser.DecLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDecLit) {
			listener.enterDecLit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDecLit) {
			listener.exitDecLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDecLit) {
			return visitor.visitDecLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolLitContext extends LiteralContext {
	public BoolLiteral(): TerminalNode { return this.getToken(CWScriptParser.BoolLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBoolLit) {
			listener.enterBoolLit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBoolLit) {
			listener.exitBoolLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBoolLit) {
			return visitor.visitBoolLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NoneLitContext extends LiteralContext {
	public NONE(): TerminalNode { return this.getToken(CWScriptParser.NONE, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterNoneLit) {
			listener.enterNoneLit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitNoneLit) {
			listener.exitNoneLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitNoneLit) {
			return visitor.visitNoneLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmt_Context extends ParserRuleContext {
	public _pred!: ExprContext;
	public _body!: BlockContext;
	public _else_!: ElseClauseContext;
	public IF(): TerminalNode { return this.getToken(CWScriptParser.IF, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public elseClause(): ElseClauseContext | undefined {
		return this.tryGetRuleContext(0, ElseClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_ifStmt_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIfStmt_) {
			listener.enterIfStmt_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIfStmt_) {
			listener.exitIfStmt_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIfStmt_) {
			return visitor.visitIfStmt_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseClauseContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(CWScriptParser.ELSE, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public stmt(): StmtContext | undefined {
		return this.tryGetRuleContext(0, StmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_elseClause; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterElseClause) {
			listener.enterElseClause(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitElseClause) {
			listener.exitElseClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitElseClause) {
			return visitor.visitElseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStmt_Context extends ParserRuleContext {
	public _binding!: Let_bindingContext;
	public _iter!: ExprContext;
	public _body!: BlockContext;
	public FOR(): TerminalNode { return this.getToken(CWScriptParser.FOR, 0); }
	public IN(): TerminalNode { return this.getToken(CWScriptParser.IN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public let_binding(): Let_bindingContext | undefined {
		return this.tryGetRuleContext(0, Let_bindingContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_forStmt_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterForStmt_) {
			listener.enterForStmt_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitForStmt_) {
			listener.exitForStmt_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitForStmt_) {
			return visitor.visitForStmt_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentContext extends ParserRuleContext {
	public Ident(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.Ident, 0); }
	public reservedKeyword(): ReservedKeywordContext | undefined {
		return this.tryGetRuleContext(0, ReservedKeywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_ident; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdent) {
			listener.enterIdent(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdent) {
			listener.exitIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdent) {
			return visitor.visitIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedKeywordContext extends ParserRuleContext {
	public CONTRACT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.CONTRACT, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.INTERFACE, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPORT, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPLEMENTS, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public ERROR(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ERROR, 0); }
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EVENT, 0); }
	public INSTANTIATE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.INSTANTIATE, 0); }
	public EXEC(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXEC, 0); }
	public QUERY(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUERY, 0); }
	public REPLY(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.REPLY, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FOR, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IN, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FROM, 0); }
	public STATE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.STATE, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IF, 0); }
	public FN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FN, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ELSE, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.OR, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FALSE, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LET, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.STRUCT, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ENUM, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.TYPE, 0); }
	public EMIT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EMIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_reservedKeyword; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterReservedKeyword) {
			listener.enterReservedKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitReservedKeyword) {
			listener.exitReservedKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitReservedKeyword) {
			return visitor.visitReservedKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


