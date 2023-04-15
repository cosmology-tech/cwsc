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
	public static readonly CONTRACT = 1;
	public static readonly INTERFACE = 2;
	public static readonly IMPORT = 3;
	public static readonly IMPLEMENTS = 4;
	public static readonly EXTENDS = 5;
	public static readonly ERROR = 6;
	public static readonly EVENT = 7;
	public static readonly INSTANTIATE_NOW = 8;
	public static readonly EXEC_NOW = 9;
	public static readonly QUERY_NOW = 10;
	public static readonly DELEGATE_EXEC = 11;
	public static readonly INSTANTIATE = 12;
	public static readonly EXEC = 13;
	public static readonly QUERY = 14;
	public static readonly REPLY = 15;
	public static readonly FOR = 16;
	public static readonly IN = 17;
	public static readonly FROM = 18;
	public static readonly STATE = 19;
	public static readonly IF = 20;
	public static readonly IS = 21;
	public static readonly TRY = 22;
	public static readonly CATCH = 23;
	public static readonly ELSE = 24;
	public static readonly NOT = 25;
	public static readonly NONE = 26;
	public static readonly MUT = 27;
	public static readonly AND = 28;
	public static readonly OR = 29;
	public static readonly TRUE = 30;
	public static readonly FALSE = 31;
	public static readonly FN = 32;
	public static readonly LET = 33;
	public static readonly CONST = 34;
	public static readonly FAIL = 35;
	public static readonly RETURN = 36;
	public static readonly STRUCT = 37;
	public static readonly ENUM = 38;
	public static readonly TYPE = 39;
	public static readonly EMIT = 40;
	public static readonly AS = 41;
	public static readonly TILDE = 42;
	public static readonly LPAREN = 43;
	public static readonly RPAREN = 44;
	public static readonly LBRACK = 45;
	public static readonly RBRACK = 46;
	public static readonly LBRACE = 47;
	public static readonly RBRACE = 48;
	public static readonly DOT = 49;
	public static readonly COMMA = 50;
	public static readonly D_QUEST = 51;
	public static readonly QUEST = 52;
	public static readonly BANG = 53;
	public static readonly COLON = 54;
	public static readonly D_COLON = 55;
	public static readonly HASH = 56;
	public static readonly AT = 57;
	public static readonly AMP = 58;
	public static readonly ARROW = 59;
	public static readonly FAT_ARROW = 60;
	public static readonly BAR = 61;
	public static readonly S_QUOTE = 62;
	public static readonly D_QUOTE = 63;
	public static readonly EQ = 64;
	public static readonly EQ_EQ = 65;
	public static readonly NEQ = 66;
	public static readonly PLUS = 67;
	public static readonly PLUS_EQ = 68;
	public static readonly MINUS = 69;
	public static readonly MINUS_EQ = 70;
	public static readonly MUL = 71;
	public static readonly MUL_EQ = 72;
	public static readonly DIV = 73;
	public static readonly DIV_EQ = 74;
	public static readonly MOD = 75;
	public static readonly MOD_EQ = 76;
	public static readonly LT = 77;
	public static readonly LT_EQ = 78;
	public static readonly GT = 79;
	public static readonly GT_EQ = 80;
	public static readonly POW = 81;
	public static readonly Ident = 82;
	public static readonly StringLiteral = 83;
	public static readonly IntLiteral = 84;
	public static readonly DecLiteral = 85;
	public static readonly BoolLiteral = 86;
	public static readonly CWSPEC_LINE_COMMENT = 87;
	public static readonly CWSPEC_BLOCK_COMMENT = 88;
	public static readonly LINE_COMMENT = 89;
	public static readonly BLOCK_COMMENT = 90;
	public static readonly WS = 91;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_topLevelStmt = 1;
	public static readonly RULE_contractDefn = 2;
	public static readonly RULE_interfaceDefn = 3;
	public static readonly RULE_contractBlock = 4;
	public static readonly RULE_importStmt = 5;
	public static readonly RULE_contractItem = 6;
	public static readonly RULE_param = 7;
	public static readonly RULE_paramList = 8;
	public static readonly RULE_stateParam = 9;
	public static readonly RULE_fnParams = 10;
	public static readonly RULE_structDefn_fn = 11;
	public static readonly RULE_errorDefn = 12;
	public static readonly RULE_errorDefnBlock = 13;
	public static readonly RULE_eventDefn = 14;
	public static readonly RULE_eventDefnBlock = 15;
	public static readonly RULE_stateDefnBlock = 16;
	public static readonly RULE_stateDefn = 17;
	public static readonly RULE_mapKeyDefn = 18;
	public static readonly RULE_instantiateDefn = 19;
	public static readonly RULE_instantiateDecl = 20;
	public static readonly RULE_execDefn = 21;
	public static readonly RULE_execDecl = 22;
	public static readonly RULE_queryDefn = 23;
	public static readonly RULE_queryDecl = 24;
	public static readonly RULE_replyDefn = 25;
	public static readonly RULE_enumDefn = 26;
	public static readonly RULE_variant_ = 27;
	public static readonly RULE_variant_struct = 28;
	public static readonly RULE_variant_unit = 29;
	public static readonly RULE_typeExpr = 30;
	public static readonly RULE_typePath = 31;
	public static readonly RULE_typeVariant = 32;
	public static readonly RULE_typeDefn = 33;
	public static readonly RULE_structDefn = 34;
	public static readonly RULE_typeAliasDefn = 35;
	public static readonly RULE_fnDefn = 36;
	public static readonly RULE_annot = 37;
	public static readonly RULE_callOpts = 38;
	public static readonly RULE_stmt = 39;
	public static readonly RULE_letStmt_ = 40;
	public static readonly RULE_constStmt_ = 41;
	public static readonly RULE_identBinding_ = 42;
	public static readonly RULE_let_binding = 43;
	public static readonly RULE_assignStmt_ = 44;
	public static readonly RULE_assignLHS = 45;
	public static readonly RULE_expr = 46;
	public static readonly RULE_closureParams = 47;
	public static readonly RULE_closure = 48;
	public static readonly RULE_block = 49;
	public static readonly RULE_tryCatchElseExpr_ = 50;
	public static readonly RULE_catchClause = 51;
	public static readonly RULE_arg = 52;
	public static readonly RULE_memberVal = 53;
	public static readonly RULE_literal = 54;
	public static readonly RULE_ifStmt_ = 55;
	public static readonly RULE_elseClause = 56;
	public static readonly RULE_forStmt_ = 57;
	public static readonly RULE_ident = 58;
	public static readonly RULE_reservedKeyword = 59;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "topLevelStmt", "contractDefn", "interfaceDefn", "contractBlock", 
		"importStmt", "contractItem", "param", "paramList", "stateParam", "fnParams", 
		"structDefn_fn", "errorDefn", "errorDefnBlock", "eventDefn", "eventDefnBlock", 
		"stateDefnBlock", "stateDefn", "mapKeyDefn", "instantiateDefn", "instantiateDecl", 
		"execDefn", "execDecl", "queryDefn", "queryDecl", "replyDefn", "enumDefn", 
		"variant_", "variant_struct", "variant_unit", "typeExpr", "typePath", 
		"typeVariant", "typeDefn", "structDefn", "typeAliasDefn", "fnDefn", "annot", 
		"callOpts", "stmt", "letStmt_", "constStmt_", "identBinding_", "let_binding", 
		"assignStmt_", "assignLHS", "expr", "closureParams", "closure", "block", 
		"tryCatchElseExpr_", "catchClause", "arg", "memberVal", "literal", "ifStmt_", 
		"elseClause", "forStmt_", "ident", "reservedKeyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'contract'", "'interface'", "'import'", "'implements'", "'extends'", 
		"'error'", "'event'", "'instantiate!'", "'exec!'", "'query!'", "'delegate_exec!'", 
		"'instantiate'", "'exec'", "'query'", "'reply'", "'for'", "'in'", "'from'", 
		"'state'", "'if'", "'is'", "'try'", "'catch'", "'else'", "'not'", "'None'", 
		"'mut'", "'and'", "'or'", "'true'", "'false'", "'fn'", "'let'", "'const'", 
		"'fail!'", "'return'", "'struct'", "'enum'", "'type'", "'emit'", "'as'", 
		"'~'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'.'", "','", "'??'", 
		"'?'", "'!'", "':'", "'::'", "'#'", "'@'", "'&'", "'->'", "'=>'", "'|'", 
		"'''", "'\"'", "'='", "'=='", "'!='", "'+'", "'+='", "'-'", "'-='", "'*'", 
		"'*='", "'/'", "'/='", "'%'", "'%='", "'<'", "'<='", "'>'", "'>='", "'**'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "EXTENDS", 
		"ERROR", "EVENT", "INSTANTIATE_NOW", "EXEC_NOW", "QUERY_NOW", "DELEGATE_EXEC", 
		"INSTANTIATE", "EXEC", "QUERY", "REPLY", "FOR", "IN", "FROM", "STATE", 
		"IF", "IS", "TRY", "CATCH", "ELSE", "NOT", "NONE", "MUT", "AND", "OR", 
		"TRUE", "FALSE", "FN", "LET", "CONST", "FAIL", "RETURN", "STRUCT", "ENUM", 
		"TYPE", "EMIT", "AS", "TILDE", "LPAREN", "RPAREN", "LBRACK", "RBRACK", 
		"LBRACE", "RBRACE", "DOT", "COMMA", "D_QUEST", "QUEST", "BANG", "COLON", 
		"D_COLON", "HASH", "AT", "AMP", "ARROW", "FAT_ARROW", "BAR", "S_QUOTE", 
		"D_QUOTE", "EQ", "EQ_EQ", "NEQ", "PLUS", "PLUS_EQ", "MINUS", "MINUS_EQ", 
		"MUL", "MUL_EQ", "DIV", "DIV_EQ", "MOD", "MOD_EQ", "LT", "LT_EQ", "GT", 
		"GT_EQ", "POW", "Ident", "StringLiteral", "IntLiteral", "DecLiteral", 
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
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT))) !== 0) || _la === CWScriptParser.CONST) {
				{
				{
				this.state = 120;
				this.topLevelStmt();
				}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 126;
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
			this.state = 132;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.IMPORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 128;
				this.importStmt();
				}
				break;
			case CWScriptParser.CONTRACT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 129;
				this.contractDefn();
				}
				break;
			case CWScriptParser.INTERFACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 130;
				this.interfaceDefn();
				}
				break;
			case CWScriptParser.CONST:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 131;
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
			this.state = 134;
			this.match(CWScriptParser.CONTRACT);
			{
			this.state = 135;
			_localctx._name = this.ident();
			}
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 136;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 137;
				_localctx._base = this.typePath();
				}
				}
			}

			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.IMPLEMENTS) {
				{
				this.state = 140;
				this.match(CWScriptParser.IMPLEMENTS);
				{
				this.state = 141;
				_localctx._typePath = this.typePath();
				_localctx._interfaces.push(_localctx._typePath);
				}
				}
			}

			{
			this.state = 144;
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
			this.state = 146;
			this.match(CWScriptParser.INTERFACE);
			{
			this.state = 147;
			_localctx._name = this.ident();
			}
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 148;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 149;
				_localctx._base = this.typePath();
				}
				}
			}

			{
			this.state = 152;
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
			this.state = 154;
			this.match(CWScriptParser.LBRACE);
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.STATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.HASH - 32)))) !== 0)) {
				{
				{
				this.state = 155;
				_localctx._contractItem = this.contractItem();
				_localctx._body.push(_localctx._contractItem);
				}
				}
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 161;
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
			this.state = 182;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				_localctx = new ImportAllStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 163;
				this.match(CWScriptParser.IMPORT);
				this.state = 164;
				this.match(CWScriptParser.MUL);
				this.state = 165;
				this.match(CWScriptParser.FROM);
				{
				this.state = 166;
				(_localctx as ImportAllStmtContext)._src = this.match(CWScriptParser.StringLiteral);
				}
				}
				break;

			case 2:
				_localctx = new ImportItemsStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 167;
				this.match(CWScriptParser.IMPORT);
				{
				{
				this.state = 168;
				this.match(CWScriptParser.LBRACE);
				{
				this.state = 169;
				(_localctx as ImportItemsStmtContext)._ident = this.ident();
				(_localctx as ImportItemsStmtContext)._items.push((_localctx as ImportItemsStmtContext)._ident);
				}
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 170;
					this.match(CWScriptParser.COMMA);
					this.state = 171;
					(_localctx as ImportItemsStmtContext)._ident = this.ident();
					(_localctx as ImportItemsStmtContext)._items.push((_localctx as ImportItemsStmtContext)._ident);
					}
					}
					this.state = 176;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 177;
				this.match(CWScriptParser.RBRACE);
				}
				}
				this.state = 179;
				this.match(CWScriptParser.FROM);
				{
				this.state = 180;
				(_localctx as ImportItemsStmtContext)._src = this.match(CWScriptParser.StringLiteral);
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
			this.state = 200;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 184;
				this.typeDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 185;
				this.constStmt_();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 186;
				this.fnDefn();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 187;
				this.errorDefn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 188;
				this.errorDefnBlock();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 189;
				this.eventDefn();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 190;
				this.eventDefnBlock();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 191;
				this.stateDefnBlock();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 192;
				this.instantiateDefn();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 193;
				this.instantiateDecl();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 194;
				this.execDefn();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 195;
				this.execDecl();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 196;
				this.queryDefn();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 197;
				this.queryDefn();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 198;
				this.queryDecl();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 199;
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
			this.state = 202;
			_localctx._name = this.ident();
			}
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.QUEST) {
				{
				this.state = 203;
				_localctx._optional = this.match(CWScriptParser.QUEST);
				}
			}

			this.state = 206;
			this.match(CWScriptParser.COLON);
			{
			this.state = 207;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EQ) {
				{
				this.state = 208;
				this.match(CWScriptParser.EQ);
				this.state = 209;
				_localctx._default = this.expr(0);
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
			this.state = 212;
			this.param();
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 213;
				this.match(CWScriptParser.COMMA);
				this.state = 214;
				this.param();
				}
				}
				this.state = 219;
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
	public stateParam(): StateParamContext {
		let _localctx: StateParamContext = new StateParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CWScriptParser.RULE_stateParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.MUT) {
				{
				this.state = 220;
				_localctx._mut = this.match(CWScriptParser.MUT);
				}
			}

			this.state = 223;
			this.ident();
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
		this.enterRule(_localctx, 20, CWScriptParser.RULE_fnParams);
		let _la: number;
		try {
			this.state = 252;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				_localctx = new PureParamsContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 225;
				this.match(CWScriptParser.LPAREN);
				this.state = 234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					{
					this.state = 226;
					(_localctx as PureParamsContext)._param = this.param();
					(_localctx as PureParamsContext)._params.push((_localctx as PureParamsContext)._param);
					}
					this.state = 231;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.COMMA) {
						{
						{
						this.state = 227;
						this.match(CWScriptParser.COMMA);
						this.state = 228;
						(_localctx as PureParamsContext)._param = this.param();
						(_localctx as PureParamsContext)._params.push((_localctx as PureParamsContext)._param);
						}
						}
						this.state = 233;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 236;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				_localctx = new StateParamsContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 237;
				this.match(CWScriptParser.LPAREN);
				{
				this.state = 238;
				(_localctx as StateParamsContext)._stateful = this.stateParam();
				}
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 239;
					this.match(CWScriptParser.COMMA);
					{
					this.state = 240;
					(_localctx as StateParamsContext)._param = this.param();
					(_localctx as StateParamsContext)._params.push((_localctx as StateParamsContext)._param);
					}
					this.state = 245;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.COMMA) {
						{
						{
						this.state = 241;
						this.match(CWScriptParser.COMMA);
						this.state = 242;
						(_localctx as StateParamsContext)._param = this.param();
						(_localctx as StateParamsContext)._params.push((_localctx as StateParamsContext)._param);
						}
						}
						this.state = 247;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 250;
				this.match(CWScriptParser.RPAREN);
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
	public structDefn_fn(): StructDefn_fnContext {
		let _localctx: StructDefn_fnContext = new StructDefn_fnContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CWScriptParser.RULE_structDefn_fn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 254;
			_localctx._name = this.ident();
			}
			{
			this.state = 255;
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
		this.enterRule(_localctx, 24, CWScriptParser.RULE_errorDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.match(CWScriptParser.ERROR);
			this.state = 258;
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
		this.enterRule(_localctx, 26, CWScriptParser.RULE_errorDefnBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this.match(CWScriptParser.ERROR);
			this.state = 261;
			this.match(CWScriptParser.LBRACE);
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 262;
				_localctx._structDefn_fn = this.structDefn_fn();
				_localctx._defns.push(_localctx._structDefn_fn);
				}
				this.state = 267;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 263;
						this.match(CWScriptParser.COMMA);
						this.state = 264;
						_localctx._structDefn_fn = this.structDefn_fn();
						_localctx._defns.push(_localctx._structDefn_fn);
						}
						}
					}
					this.state = 269;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				}
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 270;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
			}

			this.state = 275;
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
		this.enterRule(_localctx, 28, CWScriptParser.RULE_eventDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.match(CWScriptParser.EVENT);
			this.state = 278;
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
		this.enterRule(_localctx, 30, CWScriptParser.RULE_eventDefnBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 280;
			this.match(CWScriptParser.EVENT);
			this.state = 281;
			this.match(CWScriptParser.LBRACE);
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 282;
				_localctx._structDefn_fn = this.structDefn_fn();
				_localctx._defns.push(_localctx._structDefn_fn);
				}
				this.state = 287;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 283;
						this.match(CWScriptParser.COMMA);
						this.state = 284;
						_localctx._structDefn_fn = this.structDefn_fn();
						_localctx._defns.push(_localctx._structDefn_fn);
						}
						}
					}
					this.state = 289;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				}
				this.state = 291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 290;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
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
	public stateDefnBlock(): StateDefnBlockContext {
		let _localctx: StateDefnBlockContext = new StateDefnBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CWScriptParser.RULE_stateDefnBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(CWScriptParser.STATE);
			this.state = 298;
			this.match(CWScriptParser.LBRACE);
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 299;
				_localctx._stateDefn = this.stateDefn();
				_localctx._defns.push(_localctx._stateDefn);
				}
				}
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 305;
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
		this.enterRule(_localctx, 34, CWScriptParser.RULE_stateDefn);
		let _la: number;
		try {
			this.state = 331;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				_localctx = new StateDefn_ItemContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 307;
				(_localctx as StateDefn_ItemContext)._name = this.ident();
				}
				this.state = 308;
				this.match(CWScriptParser.COLON);
				{
				this.state = 309;
				(_localctx as StateDefn_ItemContext)._ty = this.typeExpr(0);
				}
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EQ) {
					{
					this.state = 310;
					this.match(CWScriptParser.EQ);
					{
					this.state = 311;
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
				this.state = 314;
				(_localctx as StateDefn_MapContext)._name = this.ident();
				}
				this.state = 315;
				this.match(CWScriptParser.LBRACK);
				{
				this.state = 316;
				(_localctx as StateDefn_MapContext)._mapKeyDefn = this.mapKeyDefn();
				(_localctx as StateDefn_MapContext)._mapKeys.push((_localctx as StateDefn_MapContext)._mapKeyDefn);
				}
				this.state = 321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 317;
					this.match(CWScriptParser.COMMA);
					{
					this.state = 318;
					(_localctx as StateDefn_MapContext)._mapKeyDefn = this.mapKeyDefn();
					(_localctx as StateDefn_MapContext)._mapKeys.push((_localctx as StateDefn_MapContext)._mapKeyDefn);
					}
					}
					}
					this.state = 323;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 324;
				this.match(CWScriptParser.RBRACK);
				this.state = 325;
				this.match(CWScriptParser.COLON);
				{
				this.state = 326;
				(_localctx as StateDefn_MapContext)._ty = this.typeExpr(0);
				}
				this.state = 329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EQ) {
					{
					this.state = 327;
					this.match(CWScriptParser.EQ);
					{
					this.state = 328;
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
		this.enterRule(_localctx, 36, CWScriptParser.RULE_mapKeyDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				this.state = 333;
				_localctx._name = this.ident();
				}
			}

			this.state = 336;
			this.match(CWScriptParser.COLON);
			{
			this.state = 337;
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
		this.enterRule(_localctx, 38, CWScriptParser.RULE_instantiateDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.match(CWScriptParser.HASH);
			this.state = 340;
			this.match(CWScriptParser.INSTANTIATE);
			this.state = 341;
			_localctx._params = this.fnParams();
			this.state = 342;
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
		this.enterRule(_localctx, 40, CWScriptParser.RULE_instantiateDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this.match(CWScriptParser.HASH);
			this.state = 345;
			this.match(CWScriptParser.INSTANTIATE);
			this.state = 346;
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
		this.enterRule(_localctx, 42, CWScriptParser.RULE_execDefn);
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
			this.state = 355;
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
		this.enterRule(_localctx, 44, CWScriptParser.RULE_execDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this.match(CWScriptParser.EXEC);
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.MUL) {
				{
				this.state = 358;
				_localctx._tup = this.match(CWScriptParser.MUL);
				}
			}

			this.state = 361;
			this.match(CWScriptParser.HASH);
			this.state = 362;
			_localctx._name = this.ident();
			this.state = 363;
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
		this.enterRule(_localctx, 46, CWScriptParser.RULE_queryDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this.match(CWScriptParser.QUERY);
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.MUL) {
				{
				this.state = 366;
				_localctx._tup = this.match(CWScriptParser.MUL);
				}
			}

			this.state = 369;
			this.match(CWScriptParser.HASH);
			this.state = 370;
			_localctx._name = this.ident();
			this.state = 371;
			_localctx._params = this.fnParams();
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 372;
				this.match(CWScriptParser.ARROW);
				this.state = 373;
				_localctx._retTy = this.typeExpr(0);
				}
			}

			this.state = 376;
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
		this.enterRule(_localctx, 48, CWScriptParser.RULE_queryDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this.match(CWScriptParser.QUERY);
			this.state = 380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.MUL) {
				{
				this.state = 379;
				_localctx._tup = this.match(CWScriptParser.MUL);
				}
			}

			this.state = 382;
			this.match(CWScriptParser.HASH);
			this.state = 383;
			_localctx._name = this.ident();
			this.state = 384;
			_localctx._params = this.fnParams();
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 385;
				this.match(CWScriptParser.ARROW);
				this.state = 386;
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
		this.enterRule(_localctx, 50, CWScriptParser.RULE_replyDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.match(CWScriptParser.REPLY);
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOT) {
				{
				this.state = 390;
				this.match(CWScriptParser.DOT);
				this.state = 391;
				_localctx._on = this.ident();
				}
			}

			this.state = 394;
			_localctx._name = this.ident();
			this.state = 395;
			_localctx._params = this.fnParams();
			this.state = 396;
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
		this.enterRule(_localctx, 52, CWScriptParser.RULE_enumDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.match(CWScriptParser.ENUM);
			{
			this.state = 399;
			_localctx._name = this.ident();
			}
			this.state = 400;
			this.match(CWScriptParser.LBRACE);
			this.state = 401;
			_localctx._variant_ = this.variant_();
			_localctx._variants.push(_localctx._variant_);
			this.state = 408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.HASH) {
				{
				{
				{
				this.state = 402;
				_localctx._variant_ = this.variant_();
				_localctx._variants.push(_localctx._variant_);
				}
				this.state = 404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 403;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
				}
				this.state = 410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 411;
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
		this.enterRule(_localctx, 54, CWScriptParser.RULE_variant_);
		try {
			this.state = 415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 413;
				this.variant_struct();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 414;
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
		this.enterRule(_localctx, 56, CWScriptParser.RULE_variant_struct);
		let _la: number;
		try {
			this.state = 433;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 417;
				this.match(CWScriptParser.HASH);
				{
				this.state = 418;
				_localctx._name = this.ident();
				}
				this.state = 419;
				this.match(CWScriptParser.LPAREN);
				this.state = 421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 420;
					_localctx._members = this.paramList();
					}
				}

				this.state = 423;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 425;
				this.match(CWScriptParser.HASH);
				{
				this.state = 426;
				_localctx._name = this.ident();
				}
				this.state = 427;
				this.match(CWScriptParser.LBRACE);
				this.state = 429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 428;
					_localctx._members = this.paramList();
					}
				}

				this.state = 431;
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
		this.enterRule(_localctx, 58, CWScriptParser.RULE_variant_unit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.match(CWScriptParser.HASH);
			{
			this.state = 436;
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
		let _startState: number = 60;
		this.enterRecursionRule(_localctx, 60, CWScriptParser.RULE_typeExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				_localctx = new PathTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 439;
				this.typePath();
				}
				break;

			case 2:
				{
				_localctx = new VariantTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 440;
				this.typeVariant();
				}
				break;

			case 3:
				{
				_localctx = new InstantiateTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 441;
				this.match(CWScriptParser.INSTANTIATE);
				this.state = 442;
				this.match(CWScriptParser.HASH);
				this.state = 443;
				this.typePath();
				}
				break;

			case 4:
				{
				_localctx = new ExecTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 444;
				this.match(CWScriptParser.EXEC);
				this.state = 445;
				this.typeVariant();
				}
				break;

			case 5:
				{
				_localctx = new QueryTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 446;
				this.match(CWScriptParser.QUERY);
				this.state = 447;
				this.typeVariant();
				}
				break;

			case 6:
				{
				_localctx = new MutTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 448;
				this.match(CWScriptParser.MUT);
				this.state = 449;
				this.typeExpr(5);
				}
				break;

			case 7:
				{
				_localctx = new TupleTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 450;
				this.match(CWScriptParser.LBRACK);
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LBRACK - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 451;
					(_localctx as TupleTContext)._typeExpr = this.typeExpr(0);
					(_localctx as TupleTContext)._items.push((_localctx as TupleTContext)._typeExpr);
					this.state = 456;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.COMMA) {
						{
						{
						this.state = 452;
						this.match(CWScriptParser.COMMA);
						this.state = 453;
						(_localctx as TupleTContext)._typeExpr = this.typeExpr(0);
						(_localctx as TupleTContext)._items.push((_localctx as TupleTContext)._typeExpr);
						}
						}
						this.state = 458;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 461;
				this.match(CWScriptParser.RBRACK);
				}
				break;

			case 8:
				{
				_localctx = new DefnTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 462;
				this.typeDefn();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 475;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 473;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
					case 1:
						{
						_localctx = new OptionTContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 465;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 466;
						this.match(CWScriptParser.QUEST);
						}
						break;

					case 2:
						{
						_localctx = new ListTContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 467;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 468;
						this.match(CWScriptParser.LBRACK);
						{
						this.state = 470;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.IntLiteral) {
							{
							this.state = 469;
							(_localctx as ListTContext)._len = this.match(CWScriptParser.IntLiteral);
							}
						}

						}
						this.state = 472;
						this.match(CWScriptParser.RBRACK);
						}
						break;
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typePath(): TypePathContext {
		let _localctx: TypePathContext = new TypePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CWScriptParser.RULE_typePath);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 478;
			_localctx._ident = this.ident();
			_localctx._segments.push(_localctx._ident);
			}
			this.state = 483;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 479;
					this.match(CWScriptParser.DOT);
					this.state = 480;
					_localctx._ident = this.ident();
					_localctx._segments.push(_localctx._ident);
					}
					}
				}
				this.state = 485;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
		this.enterRule(_localctx, 64, CWScriptParser.RULE_typeVariant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this.typePath();
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LPAREN) {
				{
				this.state = 487;
				this.match(CWScriptParser.LPAREN);
				this.state = 488;
				this.expr(0);
				this.state = 489;
				this.match(CWScriptParser.RPAREN);
				}
			}

			{
			this.state = 493;
			this.match(CWScriptParser.DOT);
			this.state = 494;
			this.match(CWScriptParser.HASH);
			this.state = 495;
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
		this.enterRule(_localctx, 66, CWScriptParser.RULE_typeDefn);
		try {
			this.state = 500;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.STRUCT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 497;
				this.structDefn();
				}
				break;
			case CWScriptParser.ENUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 498;
				this.enumDefn();
				}
				break;
			case CWScriptParser.TYPE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 499;
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
		this.enterRule(_localctx, 68, CWScriptParser.RULE_structDefn);
		let _la: number;
		try {
			let _alt: number;
			this.state = 536;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 502;
				this.match(CWScriptParser.STRUCT);
				this.state = 504;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 503;
					_localctx._name = this.ident();
					}
				}

				this.state = 506;
				this.match(CWScriptParser.LPAREN);
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					{
					this.state = 507;
					_localctx._param = this.param();
					_localctx._members.push(_localctx._param);
					}
					this.state = 512;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.COMMA) {
						{
						{
						this.state = 508;
						this.match(CWScriptParser.COMMA);
						{
						this.state = 509;
						_localctx._param = this.param();
						_localctx._members.push(_localctx._param);
						}
						}
						}
						this.state = 514;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 517;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 518;
				this.match(CWScriptParser.STRUCT);
				this.state = 520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 519;
					_localctx._name = this.ident();
					}
				}

				this.state = 522;
				this.match(CWScriptParser.LBRACE);
				{
				{
				this.state = 523;
				_localctx._param = this.param();
				_localctx._members.push(_localctx._param);
				}
				this.state = 528;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 524;
						this.match(CWScriptParser.COMMA);
						{
						this.state = 525;
						_localctx._param = this.param();
						_localctx._members.push(_localctx._param);
						}
						}
						}
					}
					this.state = 530;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
				}
				this.state = 532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 531;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
				this.state = 534;
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
		this.enterRule(_localctx, 70, CWScriptParser.RULE_typeAliasDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
			this.match(CWScriptParser.TYPE);
			{
			this.state = 539;
			_localctx._name = this.ident();
			}
			this.state = 540;
			this.match(CWScriptParser.EQ);
			{
			this.state = 541;
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
		this.enterRule(_localctx, 72, CWScriptParser.RULE_fnDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this.match(CWScriptParser.FN);
			{
			this.state = 544;
			_localctx._name = this.ident();
			}
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 545;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			this.state = 548;
			_localctx._params = this.fnParams();
			this.state = 551;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 549;
				this.match(CWScriptParser.ARROW);
				this.state = 550;
				_localctx._retTy = this.typeExpr(0);
				}
			}

			this.state = 553;
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
		this.enterRule(_localctx, 74, CWScriptParser.RULE_annot);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			this.match(CWScriptParser.AT);
			{
			this.state = 556;
			_localctx._path = this.typePath();
			}
			this.state = 562;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 557;
				this.match(CWScriptParser.LPAREN);
				this.state = 559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (CWScriptParser.Ident - 82)) | (1 << (CWScriptParser.StringLiteral - 82)) | (1 << (CWScriptParser.IntLiteral - 82)) | (1 << (CWScriptParser.DecLiteral - 82)) | (1 << (CWScriptParser.BoolLiteral - 82)))) !== 0)) {
					{
					this.state = 558;
					_localctx._arg = this.arg();
					_localctx._args.push(_localctx._arg);
					}
				}

				this.state = 561;
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
	public callOpts(): CallOptsContext {
		let _localctx: CallOptsContext = new CallOptsContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CWScriptParser.RULE_callOpts);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 564;
			this.match(CWScriptParser.LBRACE);
			this.state = 576;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 565;
				_localctx._memberVal = this.memberVal();
				_localctx._options.push(_localctx._memberVal);
				}
				this.state = 570;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 566;
						this.match(CWScriptParser.COMMA);
						this.state = 567;
						_localctx._memberVal = this.memberVal();
						_localctx._options.push(_localctx._memberVal);
						}
						}
					}
					this.state = 572;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				}
				this.state = 574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 573;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
			}

			this.state = 578;
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
		this.enterRule(_localctx, 78, CWScriptParser.RULE_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.state = 708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				_localctx = new LetStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 583;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 580;
					(_localctx as LetStmtContext)._annot = this.annot();
					(_localctx as LetStmtContext)._ann.push((_localctx as LetStmtContext)._annot);
					}
					}
					this.state = 585;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 586;
				this.letStmt_();
				}
				break;

			case 2:
				_localctx = new ConstStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 587;
					(_localctx as ConstStmtContext)._annot = this.annot();
					(_localctx as ConstStmtContext)._ann.push((_localctx as ConstStmtContext)._annot);
					}
					}
					this.state = 592;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 593;
				this.constStmt_();
				}
				break;

			case 3:
				_localctx = new AssignStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 594;
					(_localctx as AssignStmtContext)._annot = this.annot();
					(_localctx as AssignStmtContext)._ann.push((_localctx as AssignStmtContext)._annot);
					}
					}
					this.state = 599;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 600;
				this.assignStmt_();
				}
				break;

			case 4:
				_localctx = new IfStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 604;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 601;
					(_localctx as IfStmtContext)._annot = this.annot();
					(_localctx as IfStmtContext)._ann.push((_localctx as IfStmtContext)._annot);
					}
					}
					this.state = 606;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 607;
				this.ifStmt_();
				}
				break;

			case 5:
				_localctx = new ForStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 608;
					(_localctx as ForStmtContext)._annot = this.annot();
					(_localctx as ForStmtContext)._ann.push((_localctx as ForStmtContext)._annot);
					}
					}
					this.state = 613;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 614;
				this.forStmt_();
				}
				break;

			case 6:
				_localctx = new ExecStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 618;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 615;
					(_localctx as ExecStmtContext)._annot = this.annot();
					(_localctx as ExecStmtContext)._ann.push((_localctx as ExecStmtContext)._annot);
					}
					}
					this.state = 620;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 621;
				this.match(CWScriptParser.EXEC_NOW);
				this.state = 622;
				this.expr(0);
				this.state = 638;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 623;
					this.match(CWScriptParser.LBRACE);
					this.state = 635;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
						{
						{
						this.state = 624;
						(_localctx as ExecStmtContext)._memberVal = this.memberVal();
						(_localctx as ExecStmtContext)._options.push((_localctx as ExecStmtContext)._memberVal);
						}
						this.state = 629;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 625;
								this.match(CWScriptParser.COMMA);
								this.state = 626;
								(_localctx as ExecStmtContext)._memberVal = this.memberVal();
								(_localctx as ExecStmtContext)._options.push((_localctx as ExecStmtContext)._memberVal);
								}
								}
							}
							this.state = 631;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
						}
						this.state = 633;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.COMMA) {
							{
							this.state = 632;
							this.match(CWScriptParser.COMMA);
							}
						}

						}
					}

					this.state = 637;
					this.match(CWScriptParser.RBRACE);
					}
					break;
				}
				}
				break;

			case 7:
				_localctx = new DelegateExecStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 640;
					(_localctx as DelegateExecStmtContext)._annot = this.annot();
					(_localctx as DelegateExecStmtContext)._ann.push((_localctx as DelegateExecStmtContext)._annot);
					}
					}
					this.state = 645;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 646;
				this.match(CWScriptParser.DELEGATE_EXEC);
				this.state = 647;
				this.match(CWScriptParser.HASH);
				this.state = 648;
				this.expr(0);
				}
				break;

			case 8:
				_localctx = new InstantiateStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 649;
					(_localctx as InstantiateStmtContext)._annot = this.annot();
					(_localctx as InstantiateStmtContext)._ann.push((_localctx as InstantiateStmtContext)._annot);
					}
					}
					this.state = 654;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 655;
				this.match(CWScriptParser.INSTANTIATE_NOW);
				this.state = 657;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.HASH) {
					{
					this.state = 656;
					(_localctx as InstantiateStmtContext)._new = this.match(CWScriptParser.HASH);
					}
				}

				this.state = 659;
				this.expr(0);
				this.state = 675;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
				case 1:
					{
					this.state = 660;
					this.match(CWScriptParser.LBRACE);
					this.state = 672;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
						{
						{
						this.state = 661;
						(_localctx as InstantiateStmtContext)._memberVal = this.memberVal();
						(_localctx as InstantiateStmtContext)._options.push((_localctx as InstantiateStmtContext)._memberVal);
						}
						this.state = 666;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 662;
								this.match(CWScriptParser.COMMA);
								this.state = 663;
								(_localctx as InstantiateStmtContext)._memberVal = this.memberVal();
								(_localctx as InstantiateStmtContext)._options.push((_localctx as InstantiateStmtContext)._memberVal);
								}
								}
							}
							this.state = 668;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
						}
						this.state = 670;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.COMMA) {
							{
							this.state = 669;
							this.match(CWScriptParser.COMMA);
							}
						}

						}
					}

					this.state = 674;
					this.match(CWScriptParser.RBRACE);
					}
					break;
				}
				}
				break;

			case 9:
				_localctx = new EmitStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 680;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 677;
					(_localctx as EmitStmtContext)._annot = this.annot();
					(_localctx as EmitStmtContext)._ann.push((_localctx as EmitStmtContext)._annot);
					}
					}
					this.state = 682;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 683;
				this.match(CWScriptParser.EMIT);
				this.state = 684;
				this.expr(0);
				}
				break;

			case 10:
				_localctx = new ReturnStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 688;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 685;
					(_localctx as ReturnStmtContext)._annot = this.annot();
					(_localctx as ReturnStmtContext)._ann.push((_localctx as ReturnStmtContext)._annot);
					}
					}
					this.state = 690;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 691;
				this.match(CWScriptParser.RETURN);
				this.state = 692;
				this.expr(0);
				}
				break;

			case 11:
				_localctx = new FailStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 696;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 693;
					(_localctx as FailStmtContext)._annot = this.annot();
					(_localctx as FailStmtContext)._ann.push((_localctx as FailStmtContext)._annot);
					}
					}
					this.state = 698;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 699;
				this.match(CWScriptParser.FAIL);
				this.state = 700;
				this.expr(0);
				}
				break;

			case 12:
				_localctx = new ExprStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 701;
					(_localctx as ExprStmtContext)._annot = this.annot();
					(_localctx as ExprStmtContext)._ann.push((_localctx as ExprStmtContext)._annot);
					}
					}
					this.state = 706;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 707;
				this.expr(0);
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
	public letStmt_(): LetStmt_Context {
		let _localctx: LetStmt_Context = new LetStmt_Context(this._ctx, this.state);
		this.enterRule(_localctx, 80, CWScriptParser.RULE_letStmt_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			this.match(CWScriptParser.LET);
			this.state = 711;
			this.let_binding();
			this.state = 714;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 712;
				this.match(CWScriptParser.EQ);
				this.state = 713;
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
		this.enterRule(_localctx, 82, CWScriptParser.RULE_constStmt_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this.match(CWScriptParser.CONST);
			this.state = 717;
			this.ident();
			this.state = 718;
			this.match(CWScriptParser.EQ);
			this.state = 719;
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
		this.enterRule(_localctx, 84, CWScriptParser.RULE_identBinding_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 721;
			_localctx._name = this.ident();
			}
			this.state = 724;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 722;
				this.match(CWScriptParser.COLON);
				this.state = 723;
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
		this.enterRule(_localctx, 86, CWScriptParser.RULE_let_binding);
		let _la: number;
		try {
			this.state = 748;
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
			case CWScriptParser.RETURN:
			case CWScriptParser.STRUCT:
			case CWScriptParser.ENUM:
			case CWScriptParser.TYPE:
			case CWScriptParser.EMIT:
			case CWScriptParser.Ident:
				_localctx = new IdentBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 726;
				this.identBinding_();
				}
				break;
			case CWScriptParser.LBRACE:
				_localctx = new StructBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 727;
				this.match(CWScriptParser.LBRACE);
				{
				this.state = 728;
				(_localctx as StructBindingContext)._identBinding_ = this.identBinding_();
				(_localctx as StructBindingContext)._bindings.push((_localctx as StructBindingContext)._identBinding_);
				}
				this.state = 732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 729;
					this.match(CWScriptParser.COMMA);
					}
					}
					this.state = 734;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 735;
				this.match(CWScriptParser.RBRACE);
				}
				break;
			case CWScriptParser.LBRACK:
				_localctx = new TupleBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 737;
				this.match(CWScriptParser.LBRACK);
				{
				this.state = 738;
				(_localctx as TupleBindingContext)._identBinding_ = this.identBinding_();
				(_localctx as TupleBindingContext)._bindings.push((_localctx as TupleBindingContext)._identBinding_);
				}
				this.state = 743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 739;
					this.match(CWScriptParser.COMMA);
					this.state = 740;
					(_localctx as TupleBindingContext)._identBinding_ = this.identBinding_();
					(_localctx as TupleBindingContext)._bindings.push((_localctx as TupleBindingContext)._identBinding_);
					}
					}
					this.state = 745;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 746;
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
		this.enterRule(_localctx, 88, CWScriptParser.RULE_assignStmt_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 750;
			_localctx._lhs = this.assignLHS();
			}
			{
			this.state = 751;
			_localctx._assignOp = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CWScriptParser.EQ - 64)) | (1 << (CWScriptParser.PLUS_EQ - 64)) | (1 << (CWScriptParser.MINUS_EQ - 64)) | (1 << (CWScriptParser.MUL_EQ - 64)) | (1 << (CWScriptParser.DIV_EQ - 64)) | (1 << (CWScriptParser.MOD_EQ - 64)))) !== 0))) {
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
			this.state = 752;
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
		this.enterRule(_localctx, 90, CWScriptParser.RULE_assignLHS);
		let _la: number;
		try {
			this.state = 771;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				_localctx = new IdentLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 754;
				(_localctx as IdentLHSContext)._symbol = this.ident();
				}
				break;

			case 2:
				_localctx = new DotLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 755;
				(_localctx as DotLHSContext)._obj = this.expr(0);
				}
				this.state = 756;
				this.match(CWScriptParser.DOT);
				{
				this.state = 757;
				(_localctx as DotLHSContext)._member = this.ident();
				}
				}
				break;

			case 3:
				_localctx = new IndexLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 759;
				(_localctx as IndexLHSContext)._obj = this.expr(0);
				}
				this.state = 760;
				this.match(CWScriptParser.LBRACK);
				{
				this.state = 761;
				(_localctx as IndexLHSContext)._expr = this.expr(0);
				(_localctx as IndexLHSContext)._args.push((_localctx as IndexLHSContext)._expr);
				}
				this.state = 766;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 762;
					this.match(CWScriptParser.COMMA);
					this.state = 763;
					(_localctx as IndexLHSContext)._expr = this.expr(0);
					(_localctx as IndexLHSContext)._args.push((_localctx as IndexLHSContext)._expr);
					}
					}
					this.state = 768;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 769;
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
		let _startState: number = 92;
		this.enterRecursionRule(_localctx, 92, CWScriptParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 843;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				_localctx = new GroupedExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 774;
				this.match(CWScriptParser.LPAREN);
				this.state = 775;
				this.expr(0);
				this.state = 776;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new TypeDColonExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 778;
				this.typeExpr(0);
				this.state = 779;
				this.match(CWScriptParser.D_COLON);
				{
				this.state = 780;
				(_localctx as TypeDColonExprContext)._member = this.ident();
				}
				}
				break;

			case 3:
				{
				_localctx = new TypeFnCallExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 782;
				this.typeExpr(0);
				this.state = 784;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.BANG) {
					{
					this.state = 783;
					(_localctx as TypeFnCallExprContext)._fallible = this.match(CWScriptParser.BANG);
					}
				}

				this.state = 786;
				this.match(CWScriptParser.LPAREN);
				this.state = 795;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (CWScriptParser.Ident - 82)) | (1 << (CWScriptParser.StringLiteral - 82)) | (1 << (CWScriptParser.IntLiteral - 82)) | (1 << (CWScriptParser.DecLiteral - 82)) | (1 << (CWScriptParser.BoolLiteral - 82)))) !== 0)) {
					{
					{
					this.state = 787;
					(_localctx as TypeFnCallExprContext)._arg = this.arg();
					(_localctx as TypeFnCallExprContext)._args.push((_localctx as TypeFnCallExprContext)._arg);
					}
					this.state = 792;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.COMMA) {
						{
						{
						this.state = 788;
						this.match(CWScriptParser.COMMA);
						this.state = 789;
						(_localctx as TypeFnCallExprContext)._arg = this.arg();
						(_localctx as TypeFnCallExprContext)._args.push((_localctx as TypeFnCallExprContext)._arg);
						}
						}
						this.state = 794;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 797;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 4:
				{
				_localctx = new TryCatchElseExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 799;
				this.tryCatchElseExpr_();
				}
				break;

			case 5:
				{
				_localctx = new NotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 800;
				this.match(CWScriptParser.NOT);
				this.state = 801;
				this.expr(13);
				}
				break;

			case 6:
				{
				_localctx = new IfExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 802;
				this.ifStmt_();
				}
				break;

			case 7:
				{
				_localctx = new QueryNowExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 803;
				this.match(CWScriptParser.QUERY_NOW);
				this.state = 804;
				this.expr(9);
				}
				break;

			case 8:
				{
				_localctx = new FailExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 805;
				this.match(CWScriptParser.FAIL);
				this.state = 807;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
				case 1:
					{
					this.state = 806;
					this.expr(0);
					}
					break;
				}
				}
				break;

			case 9:
				{
				_localctx = new ClosureExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 809;
				this.closure();
				}
				break;

			case 10:
				{
				_localctx = new TupleExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 810;
				this.match(CWScriptParser.LBRACK);
				this.state = 819;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (CWScriptParser.Ident - 82)) | (1 << (CWScriptParser.StringLiteral - 82)) | (1 << (CWScriptParser.IntLiteral - 82)) | (1 << (CWScriptParser.DecLiteral - 82)) | (1 << (CWScriptParser.BoolLiteral - 82)))) !== 0)) {
					{
					{
					this.state = 811;
					(_localctx as TupleExprContext)._expr = this.expr(0);
					(_localctx as TupleExprContext)._items.push((_localctx as TupleExprContext)._expr);
					}
					this.state = 816;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.COMMA) {
						{
						{
						this.state = 812;
						this.match(CWScriptParser.COMMA);
						{
						this.state = 813;
						(_localctx as TupleExprContext)._expr = this.expr(0);
						(_localctx as TupleExprContext)._items.push((_localctx as TupleExprContext)._expr);
						}
						}
						}
						this.state = 818;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 821;
				this.match(CWScriptParser.RBRACK);
				}
				break;

			case 11:
				{
				_localctx = new StructExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LBRACK - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 822;
					this.typeExpr(0);
					}
				}

				this.state = 825;
				this.match(CWScriptParser.LBRACE);
				this.state = 837;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					{
					this.state = 826;
					(_localctx as StructExprContext)._memberVal = this.memberVal();
					(_localctx as StructExprContext)._members.push((_localctx as StructExprContext)._memberVal);
					}
					this.state = 831;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 827;
							this.match(CWScriptParser.COMMA);
							this.state = 828;
							(_localctx as StructExprContext)._memberVal = this.memberVal();
							(_localctx as StructExprContext)._members.push((_localctx as StructExprContext)._memberVal);
							}
							}
						}
						this.state = 833;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
					}
					this.state = 835;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CWScriptParser.COMMA) {
						{
						this.state = 834;
						this.match(CWScriptParser.COMMA);
						}
					}

					}
				}

				this.state = 839;
				this.match(CWScriptParser.RBRACE);
				}
				break;

			case 12:
				{
				_localctx = new UnitVariantExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 840;
				this.typeVariant();
				}
				break;

			case 13:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 841;
				this.literal();
				}
				break;

			case 14:
				{
				_localctx = new IdentExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 842;
				this.ident();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 918;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 916;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
					case 1:
						{
						_localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 845;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						this.state = 847;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.QUEST || _la === CWScriptParser.BANG) {
							{
							this.state = 846;
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

						this.state = 849;
						this.match(CWScriptParser.DOT);
						{
						this.state = 850;
						(_localctx as DotExprContext)._member = this.ident();
						}
						}
						break;

					case 2:
						{
						_localctx = new AsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 851;
						if (!(this.precpred(this._ctx, 28))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 28)");
						}
						this.state = 852;
						this.match(CWScriptParser.AS);
						this.state = 853;
						(_localctx as AsExprContext)._ty = this.typeExpr(0);
						}
						break;

					case 3:
						{
						_localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 854;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 855;
						this.match(CWScriptParser.LBRACK);
						{
						this.state = 856;
						(_localctx as IndexExprContext)._arg = this.arg();
						(_localctx as IndexExprContext)._args.push((_localctx as IndexExprContext)._arg);
						}
						this.state = 861;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.COMMA) {
							{
							{
							this.state = 857;
							this.match(CWScriptParser.COMMA);
							this.state = 858;
							(_localctx as IndexExprContext)._arg = this.arg();
							(_localctx as IndexExprContext)._args.push((_localctx as IndexExprContext)._arg);
							}
							}
							this.state = 863;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 864;
						this.match(CWScriptParser.RBRACK);
						}
						break;

					case 4:
						{
						_localctx = new DColonExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 866;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 867;
						this.match(CWScriptParser.D_COLON);
						{
						this.state = 868;
						(_localctx as DColonExprContext)._member = this.ident();
						}
						}
						break;

					case 5:
						{
						_localctx = new FnCallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 869;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 871;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.BANG) {
							{
							this.state = 870;
							(_localctx as FnCallExprContext)._fallible = this.match(CWScriptParser.BANG);
							}
						}

						this.state = 873;
						this.match(CWScriptParser.LPAREN);
						this.state = 882;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (CWScriptParser.Ident - 82)) | (1 << (CWScriptParser.StringLiteral - 82)) | (1 << (CWScriptParser.IntLiteral - 82)) | (1 << (CWScriptParser.DecLiteral - 82)) | (1 << (CWScriptParser.BoolLiteral - 82)))) !== 0)) {
							{
							{
							this.state = 874;
							(_localctx as FnCallExprContext)._arg = this.arg();
							(_localctx as FnCallExprContext)._args.push((_localctx as FnCallExprContext)._arg);
							}
							this.state = 879;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === CWScriptParser.COMMA) {
								{
								{
								this.state = 875;
								this.match(CWScriptParser.COMMA);
								this.state = 876;
								(_localctx as FnCallExprContext)._arg = this.arg();
								(_localctx as FnCallExprContext)._args.push((_localctx as FnCallExprContext)._arg);
								}
								}
								this.state = 881;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 884;
						this.match(CWScriptParser.RPAREN);
						}
						break;

					case 6:
						{
						_localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 885;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						{
						this.state = 886;
						(_localctx as MulExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CWScriptParser.MUL - 71)) | (1 << (CWScriptParser.DIV - 71)) | (1 << (CWScriptParser.MOD - 71)))) !== 0))) {
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
						this.state = 887;
						(_localctx as MulExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 7:
						{
						_localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 888;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						{
						this.state = 889;
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
						this.state = 890;
						(_localctx as AddExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 8:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 891;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						{
						this.state = 892;
						(_localctx as CompExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (CWScriptParser.LT - 77)) | (1 << (CWScriptParser.LT_EQ - 77)) | (1 << (CWScriptParser.GT - 77)) | (1 << (CWScriptParser.GT_EQ - 77)))) !== 0))) {
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
						this.state = 893;
						(_localctx as CompExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 9:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 894;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						{
						this.state = 895;
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
						this.state = 896;
						(_localctx as EqExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 10:
						{
						_localctx = new NoneCheckExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 897;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 898;
						this.match(CWScriptParser.QUEST);
						}
						break;

					case 11:
						{
						_localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 899;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 900;
						this.match(CWScriptParser.IS);
						{
						this.state = 901;
						(_localctx as IsExprContext)._rhs = this.typeExpr(0);
						}
						}
						break;

					case 12:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 902;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 903;
						this.match(CWScriptParser.IN);
						{
						this.state = 904;
						(_localctx as InExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 13:
						{
						_localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 905;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 906;
						this.match(CWScriptParser.D_QUEST);
						{
						this.state = 907;
						(_localctx as ShortTryExprContext)._lhs = this.expr(0);
						}
						}
						break;

					case 14:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 908;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 909;
						this.match(CWScriptParser.AND);
						{
						this.state = 910;
						(_localctx as AndExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 15:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 911;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 912;
						this.match(CWScriptParser.OR);
						{
						this.state = 913;
						(_localctx as OrExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 16:
						{
						_localctx = new Grouped2ExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 914;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 915;
						this.match(CWScriptParser.TILDE);
						}
						break;
					}
					}
				}
				this.state = 920;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
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
		this.enterRule(_localctx, 94, CWScriptParser.RULE_closureParams);
		let _la: number;
		try {
			this.state = 945;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				_localctx = new UntypedClosureParamsContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 921;
				this.match(CWScriptParser.BAR);
				this.state = 930;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					{
					this.state = 922;
					(_localctx as UntypedClosureParamsContext)._ident = this.ident();
					(_localctx as UntypedClosureParamsContext)._params.push((_localctx as UntypedClosureParamsContext)._ident);
					}
					this.state = 927;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.COMMA) {
						{
						{
						this.state = 923;
						this.match(CWScriptParser.COMMA);
						this.state = 924;
						(_localctx as UntypedClosureParamsContext)._ident = this.ident();
						(_localctx as UntypedClosureParamsContext)._params.push((_localctx as UntypedClosureParamsContext)._ident);
						}
						}
						this.state = 929;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 932;
				this.match(CWScriptParser.BAR);
				}
				break;

			case 2:
				_localctx = new TypedClosureParamsContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 933;
				this.match(CWScriptParser.BAR);
				this.state = 942;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					{
					this.state = 934;
					(_localctx as TypedClosureParamsContext)._param = this.param();
					(_localctx as TypedClosureParamsContext)._params.push((_localctx as TypedClosureParamsContext)._param);
					}
					this.state = 939;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.COMMA) {
						{
						{
						this.state = 935;
						this.match(CWScriptParser.COMMA);
						this.state = 936;
						(_localctx as TypedClosureParamsContext)._param = this.param();
						(_localctx as TypedClosureParamsContext)._params.push((_localctx as TypedClosureParamsContext)._param);
						}
						}
						this.state = 941;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 944;
				this.match(CWScriptParser.BAR);
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
	public closure(): ClosureContext {
		let _localctx: ClosureContext = new ClosureContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CWScriptParser.RULE_closure);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 947;
			_localctx._params = this.closureParams();
			}
			this.state = 950;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 948;
				this.match(CWScriptParser.ARROW);
				this.state = 949;
				_localctx._retTy = this.typeExpr(0);
				}
			}

			this.state = 954;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				{
				{
				this.state = 952;
				_localctx._body = this.block();
				}
				}
				break;

			case 2:
				{
				{
				this.state = 953;
				_localctx._body_stmt = this.stmt();
				}
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
		this.enterRule(_localctx, 98, CWScriptParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 956;
			this.match(CWScriptParser.LBRACE);
			this.state = 960;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.DELEGATE_EXEC) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.AT - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (CWScriptParser.Ident - 82)) | (1 << (CWScriptParser.StringLiteral - 82)) | (1 << (CWScriptParser.IntLiteral - 82)) | (1 << (CWScriptParser.DecLiteral - 82)) | (1 << (CWScriptParser.BoolLiteral - 82)))) !== 0)) {
				{
				{
				this.state = 957;
				_localctx._stmt = this.stmt();
				_localctx._body.push(_localctx._stmt);
				}
				}
				this.state = 962;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 963;
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
		this.enterRule(_localctx, 100, CWScriptParser.RULE_tryCatchElseExpr_);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 965;
			this.match(CWScriptParser.TRY);
			{
			this.state = 966;
			_localctx._body = this.block();
			}
			this.state = 970;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 967;
					_localctx._catchClause = this.catchClause();
					_localctx._catches.push(_localctx._catchClause);
					}
					}
				}
				this.state = 972;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
			}
			this.state = 974;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				{
				this.state = 973;
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
		this.enterRule(_localctx, 102, CWScriptParser.RULE_catchClause);
		try {
			this.state = 987;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				_localctx = new CatchContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 976;
				this.match(CWScriptParser.CATCH);
				{
				this.state = 977;
				(_localctx as CatchContext)._ty = this.typeExpr(0);
				}
				{
				this.state = 978;
				(_localctx as CatchContext)._body = this.block();
				}
				}
				break;

			case 2:
				_localctx = new CatchBindContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 980;
				this.match(CWScriptParser.CATCH);
				{
				this.state = 981;
				(_localctx as CatchBindContext)._name = this.ident();
				}
				{
				this.state = 982;
				this.match(CWScriptParser.COLON);
				{
				this.state = 983;
				(_localctx as CatchBindContext)._ty = this.typeExpr(0);
				}
				}
				{
				this.state = 985;
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
		this.enterRule(_localctx, 104, CWScriptParser.RULE_arg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 992;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				{
				{
				this.state = 989;
				_localctx._name = this.ident();
				}
				this.state = 990;
				this.match(CWScriptParser.EQ);
				}
				break;
			}
			{
			this.state = 994;
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
		this.enterRule(_localctx, 106, CWScriptParser.RULE_memberVal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 996;
			_localctx._name = this.ident();
			}
			this.state = 999;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 997;
				this.match(CWScriptParser.COLON);
				{
				this.state = 998;
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
		this.enterRule(_localctx, 108, CWScriptParser.RULE_literal);
		try {
			this.state = 1006;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.StringLiteral:
				_localctx = new StringLitContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1001;
				this.match(CWScriptParser.StringLiteral);
				}
				break;
			case CWScriptParser.IntLiteral:
				_localctx = new IntLitContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1002;
				this.match(CWScriptParser.IntLiteral);
				}
				break;
			case CWScriptParser.DecLiteral:
				_localctx = new DecLitContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1003;
				this.match(CWScriptParser.DecLiteral);
				}
				break;
			case CWScriptParser.BoolLiteral:
				_localctx = new BoolLitContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1004;
				this.match(CWScriptParser.BoolLiteral);
				}
				break;
			case CWScriptParser.NONE:
				_localctx = new NoneLitContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1005;
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
		this.enterRule(_localctx, 110, CWScriptParser.RULE_ifStmt_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1008;
			this.match(CWScriptParser.IF);
			{
			this.state = 1009;
			_localctx._pred = this.expr(0);
			}
			{
			this.state = 1010;
			_localctx._body = this.block();
			}
			this.state = 1012;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				{
				this.state = 1011;
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
		this.enterRule(_localctx, 112, CWScriptParser.RULE_elseClause);
		try {
			this.state = 1018;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1014;
				this.match(CWScriptParser.ELSE);
				this.state = 1015;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1016;
				this.match(CWScriptParser.ELSE);
				this.state = 1017;
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
		this.enterRule(_localctx, 114, CWScriptParser.RULE_forStmt_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1020;
			this.match(CWScriptParser.FOR);
			{
			this.state = 1021;
			_localctx._binding = this.let_binding();
			}
			this.state = 1022;
			this.match(CWScriptParser.IN);
			{
			this.state = 1023;
			_localctx._iter = this.expr(0);
			}
			this.state = 1024;
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
		this.enterRule(_localctx, 116, CWScriptParser.RULE_ident);
		try {
			this.state = 1028;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.Ident:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1026;
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
			case CWScriptParser.RETURN:
			case CWScriptParser.STRUCT:
			case CWScriptParser.ENUM:
			case CWScriptParser.TYPE:
			case CWScriptParser.EMIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1027;
				this.reservedKeyword();
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
	public reservedKeyword(): ReservedKeywordContext {
		let _localctx: ReservedKeywordContext = new ReservedKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CWScriptParser.RULE_reservedKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1030;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0))) {
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
		case 30:
			return this.typeExpr_sempred(_localctx as TypeExprContext, predIndex);

		case 46:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03]\u040B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x03\x02\x07\x02|\n\x02\f\x02\x0E\x02\x7F\v\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03\x87\n\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x05\x04\x8D\n\x04\x03\x04\x03\x04\x05\x04\x91\n\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\x99\n\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x07\x06\x9F\n\x06\f\x06\x0E\x06\xA2\v\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x07\x07\xAF\n\x07\f\x07\x0E\x07\xB2\v\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07\xB9\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xCB" +
		"\n\b\x03\t\x03\t\x05\t\xCF\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\xD5\n\t\x03" +
		"\n\x03\n\x03\n\x07\n\xDA\n\n\f\n\x0E\n\xDD\v\n\x03\v\x05\v\xE0\n\v\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07\f\xE8\n\f\f\f\x0E\f\xEB\v\f\x05\f" +
		"\xED\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\xF6\n\f\f\f\x0E" +
		"\f\xF9\v\f\x05\f\xFB\n\f\x03\f\x03\f\x05\f\xFF\n\f\x03\r\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u010C" +
		"\n\x0F\f\x0F\x0E\x0F\u010F\v\x0F\x03\x0F\x05\x0F\u0112\n\x0F\x05\x0F\u0114" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x07\x11\u0120\n\x11\f\x11\x0E\x11\u0123\v\x11\x03\x11" +
		"\x05\x11\u0126\n\x11\x05\x11\u0128\n\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x07\x12\u012F\n\x12\f\x12\x0E\x12\u0132\v\x12\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u013B\n\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x07\x13\u0142\n\x13\f\x13\x0E\x13\u0145\v" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u014C\n\x13\x05\x13" +
		"\u014E\n\x13\x03\x14\x05\x14\u0151\n\x14\x03\x14\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x05\x17\u0161\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x18\x03\x18\x05\x18\u016A\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x05\x19\u0172\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05" +
		"\x19\u0179\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u017F\n\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0186\n\x1A\x03\x1B\x03\x1B" +
		"\x03\x1B\x05\x1B\u018B\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0197\n\x1C\x07\x1C\u0199" +
		"\n\x1C\f\x1C\x0E\x1C\u019C\v\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x05\x1D" +
		"\u01A2\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01A8\n\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01B0\n\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u01B4\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x07 \u01C9\n" +
		" \f \x0E \u01CC\v \x05 \u01CE\n \x03 \x03 \x05 \u01D2\n \x03 \x03 \x03" +
		" \x03 \x03 \x05 \u01D9\n \x03 \x07 \u01DC\n \f \x0E \u01DF\v \x03!\x03" +
		"!\x03!\x07!\u01E4\n!\f!\x0E!\u01E7\v!\x03\"\x03\"\x03\"\x03\"\x03\"\x05" +
		"\"\u01EE\n\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x05#\u01F7\n#\x03" +
		"$\x03$\x05$\u01FB\n$\x03$\x03$\x03$\x03$\x07$\u0201\n$\f$\x0E$\u0204\v" +
		"$\x05$\u0206\n$\x03$\x03$\x03$\x05$\u020B\n$\x03$\x03$\x03$\x03$\x07$" +
		"\u0211\n$\f$\x0E$\u0214\v$\x03$\x05$\u0217\n$\x03$\x03$\x05$\u021B\n$" +
		"\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x05&\u0225\n&\x03&\x03&\x03&" +
		"\x05&\u022A\n&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x05\'\u0232\n\'\x03\'" +
		"\x05\'\u0235\n\'\x03(\x03(\x03(\x03(\x07(\u023B\n(\f(\x0E(\u023E\v(\x03" +
		"(\x05(\u0241\n(\x05(\u0243\n(\x03(\x03(\x03)\x07)\u0248\n)\f)\x0E)\u024B" +
		"\v)\x03)\x03)\x07)\u024F\n)\f)\x0E)\u0252\v)\x03)\x03)\x07)\u0256\n)\f" +
		")\x0E)\u0259\v)\x03)\x03)\x07)\u025D\n)\f)\x0E)\u0260\v)\x03)\x03)\x07" +
		")\u0264\n)\f)\x0E)\u0267\v)\x03)\x03)\x07)\u026B\n)\f)\x0E)\u026E\v)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x07)\u0276\n)\f)\x0E)\u0279\v)\x03)\x05)\u027C" +
		"\n)\x05)\u027E\n)\x03)\x05)\u0281\n)\x03)\x07)\u0284\n)\f)\x0E)\u0287" +
		"\v)\x03)\x03)\x03)\x03)\x07)\u028D\n)\f)\x0E)\u0290\v)\x03)\x03)\x05)" +
		"\u0294\n)\x03)\x03)\x03)\x03)\x03)\x07)\u029B\n)\f)\x0E)\u029E\v)\x03" +
		")\x05)\u02A1\n)\x05)\u02A3\n)\x03)\x05)\u02A6\n)\x03)\x07)\u02A9\n)\f" +
		")\x0E)\u02AC\v)\x03)\x03)\x03)\x07)\u02B1\n)\f)\x0E)\u02B4\v)\x03)\x03" +
		")\x03)\x07)\u02B9\n)\f)\x0E)\u02BC\v)\x03)\x03)\x03)\x07)\u02C1\n)\f)" +
		"\x0E)\u02C4\v)\x03)\x05)\u02C7\n)\x03*\x03*\x03*\x03*\x05*\u02CD\n*\x03" +
		"+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x05,\u02D7\n,\x03-\x03-\x03-\x03" +
		"-\x07-\u02DD\n-\f-\x0E-\u02E0\v-\x03-\x03-\x03-\x03-\x03-\x03-\x07-\u02E8" +
		"\n-\f-\x0E-\u02EB\v-\x03-\x03-\x05-\u02EF\n-\x03.\x03.\x03.\x03.\x03/" +
		"\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x07/\u02FF\n/\f/\x0E/\u0302" +
		"\v/\x03/\x03/\x05/\u0306\n/\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x050\u0313\n0\x030\x030\x030\x030\x070\u0319\n0\f0\x0E0\u031C" +
		"\v0\x050\u031E\n0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x05" +
		"0\u032A\n0\x030\x030\x030\x030\x030\x070\u0331\n0\f0\x0E0\u0334\v0\x05" +
		"0\u0336\n0\x030\x030\x050\u033A\n0\x030\x030\x030\x030\x070\u0340\n0\f" +
		"0\x0E0\u0343\v0\x030\x050\u0346\n0\x050\u0348\n0\x030\x030\x030\x030\x05" +
		"0\u034E\n0\x030\x030\x050\u0352\n0\x030\x030\x030\x030\x030\x030\x030" +
		"\x030\x030\x030\x070\u035E\n0\f0\x0E0\u0361\v0\x030\x030\x030\x030\x03" +
		"0\x030\x030\x050\u036A\n0\x030\x030\x030\x030\x070\u0370\n0\f0\x0E0\u0373" +
		"\v0\x050\u0375\n0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x070\u0397\n0\f0\x0E0\u039A\v0\x03" +
		"1\x031\x031\x031\x071\u03A0\n1\f1\x0E1\u03A3\v1\x051\u03A5\n1\x031\x03" +
		"1\x031\x031\x031\x071\u03AC\n1\f1\x0E1\u03AF\v1\x051\u03B1\n1\x031\x05" +
		"1\u03B4\n1\x032\x032\x032\x052\u03B9\n2\x032\x032\x052\u03BD\n2\x033\x03" +
		"3\x073\u03C1\n3\f3\x0E3\u03C4\v3\x033\x033\x034\x034\x034\x074\u03CB\n" +
		"4\f4\x0E4\u03CE\v4\x034\x054\u03D1\n4\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x055\u03DE\n5\x036\x036\x036\x056\u03E3\n6\x036" +
		"\x036\x037\x037\x037\x057\u03EA\n7\x038\x038\x038\x038\x038\x058\u03F1" +
		"\n8\x039\x039\x039\x039\x059\u03F7\n9\x03:\x03:\x03:\x03:\x05:\u03FD\n" +
		":\x03;\x03;\x03;\x03;\x03;\x03;\x03<\x03<\x05<\u0407\n<\x03=\x03=\x03" +
		"=\x02\x02\x04>^>\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02\x02\t\b\x02BBFFHHJJLLNN\x03\x0267\x05\x02IIKKMM\x04\x02EEGG\x03" +
		"\x02OR\x03\x02CD\x07\x02\x03\t\x0E\x16\x1A\x1A\x1E#&*\x02\u0490\x02}\x03" +
		"\x02\x02\x02\x04\x86\x03\x02\x02\x02\x06\x88\x03\x02\x02\x02\b\x94\x03" +
		"\x02\x02\x02\n\x9C\x03\x02\x02\x02\f\xB8\x03\x02\x02\x02\x0E\xCA\x03\x02" +
		"\x02\x02\x10\xCC\x03\x02\x02\x02\x12\xD6\x03\x02\x02\x02\x14\xDF\x03\x02" +
		"\x02\x02\x16\xFE\x03\x02\x02\x02\x18\u0100\x03\x02\x02\x02\x1A\u0103\x03" +
		"\x02\x02\x02\x1C\u0106\x03\x02\x02\x02\x1E\u0117\x03\x02\x02\x02 \u011A" +
		"\x03\x02\x02\x02\"\u012B\x03\x02\x02\x02$\u014D\x03\x02\x02\x02&\u0150" +
		"\x03\x02\x02\x02(\u0155\x03\x02\x02\x02*\u015A\x03\x02\x02\x02,\u015E" +
		"\x03\x02\x02\x02.\u0167\x03\x02\x02\x020\u016F\x03\x02\x02\x022\u017C" +
		"\x03\x02\x02\x024\u0187\x03\x02\x02\x026\u0190\x03\x02\x02\x028\u01A1" +
		"\x03\x02\x02\x02:\u01B3\x03\x02\x02\x02<\u01B5\x03\x02\x02\x02>\u01D1" +
		"\x03\x02\x02\x02@\u01E0\x03\x02\x02\x02B\u01E8\x03\x02\x02\x02D\u01F6" +
		"\x03\x02\x02\x02F\u021A\x03\x02\x02\x02H\u021C\x03\x02\x02\x02J\u0221" +
		"\x03\x02\x02\x02L\u022D\x03\x02\x02\x02N\u0236\x03\x02\x02\x02P\u02C6" +
		"\x03\x02\x02\x02R\u02C8\x03\x02\x02\x02T\u02CE\x03\x02\x02\x02V\u02D3" +
		"\x03\x02\x02\x02X\u02EE\x03\x02\x02\x02Z\u02F0\x03\x02\x02\x02\\\u0305" +
		"\x03\x02\x02\x02^\u034D\x03\x02\x02\x02`\u03B3\x03\x02\x02\x02b\u03B5" +
		"\x03\x02\x02\x02d\u03BE\x03\x02\x02\x02f\u03C7\x03\x02\x02\x02h\u03DD" +
		"\x03\x02\x02\x02j\u03E2\x03\x02\x02\x02l\u03E6\x03\x02\x02\x02n\u03F0" +
		"\x03\x02\x02\x02p\u03F2\x03\x02\x02\x02r\u03FC\x03\x02\x02\x02t\u03FE" +
		"\x03\x02\x02\x02v\u0406\x03\x02\x02\x02x\u0408\x03\x02\x02\x02z|\x05\x04" +
		"\x03\x02{z\x03\x02\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03" +
		"\x02\x02\x02~\x80\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80\x81\x07\x02" +
		"\x02\x03\x81\x03\x03\x02\x02\x02\x82\x87\x05\f\x07\x02\x83\x87\x05\x06" +
		"\x04\x02\x84\x87\x05\b\x05\x02\x85\x87\x05T+\x02\x86\x82\x03\x02\x02\x02" +
		"\x86\x83\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x85\x03\x02\x02\x02" +
		"\x87\x05\x03\x02\x02\x02\x88\x89\x07\x03\x02\x02\x89\x8C\x05v<\x02\x8A" +
		"\x8B\x07\x07\x02\x02\x8B\x8D\x05@!\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8D" +
		"\x03\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8F\x07\x06\x02\x02\x8F\x91" +
		"\x05@!\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x92\x03" +
		"\x02\x02\x02\x92\x93\x05\n\x06\x02\x93\x07\x03\x02\x02\x02\x94\x95\x07" +
		"\x04\x02\x02\x95\x98\x05v<\x02\x96\x97\x07\x07\x02\x02\x97\x99\x05@!\x02" +
		"\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02" +
		"\x9A\x9B\x05\n\x06\x02\x9B\t\x03\x02\x02\x02\x9C\xA0\x071\x02\x02\x9D" +
		"\x9F\x05\x0E\b\x02\x9E\x9D\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0" +
		"\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2" +
		"\xA0\x03\x02\x02\x02\xA3\xA4\x072\x02\x02\xA4\v\x03\x02\x02\x02\xA5\xA6" +
		"\x07\x05\x02\x02\xA6\xA7\x07I\x02\x02\xA7\xA8\x07\x14\x02\x02\xA8\xB9" +
		"\x07U\x02\x02\xA9\xAA\x07\x05\x02\x02\xAA\xAB\x071\x02\x02\xAB\xB0\x05" +
		"v<\x02\xAC\xAD\x074\x02\x02\xAD\xAF\x05v<\x02\xAE\xAC\x03\x02\x02\x02" +
		"\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02" +
		"\xB1\xB3\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB4\x072\x02\x02" +
		"\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x07\x14\x02\x02\xB6\xB7\x07U\x02\x02" +
		"\xB7\xB9\x03\x02\x02\x02\xB8\xA5\x03\x02\x02\x02\xB8\xA9\x03\x02\x02\x02" +
		"\xB9\r\x03\x02\x02\x02\xBA\xCB\x05D#\x02\xBB\xCB\x05T+\x02\xBC\xCB\x05" +
		"J&\x02\xBD\xCB\x05\x1A\x0E\x02\xBE\xCB\x05\x1C\x0F\x02\xBF\xCB\x05\x1E" +
		"\x10\x02\xC0\xCB\x05 \x11\x02\xC1\xCB\x05\"\x12\x02\xC2\xCB\x05(\x15\x02" +
		"\xC3\xCB\x05*\x16\x02\xC4\xCB\x05,\x17\x02\xC5\xCB\x05.\x18\x02\xC6\xCB" +
		"\x050\x19\x02\xC7\xCB\x050\x19\x02\xC8\xCB\x052\x1A\x02\xC9\xCB\x054\x1B" +
		"\x02\xCA\xBA\x03\x02\x02\x02\xCA\xBB\x03\x02\x02\x02\xCA\xBC\x03\x02\x02" +
		"\x02\xCA\xBD\x03\x02\x02\x02\xCA\xBE\x03\x02\x02\x02\xCA\xBF\x03\x02\x02" +
		"\x02\xCA\xC0\x03\x02\x02\x02\xCA\xC1\x03\x02\x02\x02\xCA\xC2\x03\x02\x02" +
		"\x02\xCA\xC3\x03\x02\x02\x02\xCA\xC4\x03\x02\x02\x02\xCA\xC5\x03\x02\x02" +
		"\x02\xCA\xC6\x03\x02\x02\x02\xCA\xC7\x03\x02\x02\x02\xCA\xC8\x03\x02\x02" +
		"\x02\xCA\xC9\x03\x02\x02\x02\xCB\x0F\x03\x02\x02\x02\xCC\xCE\x05v<\x02" +
		"\xCD\xCF\x076\x02\x02\xCE\xCD\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02" +
		"\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x078\x02\x02\xD1\xD4\x05> \x02\xD2\xD3" +
		"\x07B\x02\x02\xD3\xD5\x05^0\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02" +
		"\x02\x02\xD5\x11\x03\x02\x02\x02\xD6\xDB\x05\x10\t\x02\xD7\xD8\x074\x02" +
		"\x02\xD8\xDA\x05\x10\t\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDD\x03\x02\x02" +
		"\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\x13\x03\x02\x02" +
		"\x02\xDD\xDB\x03\x02\x02\x02\xDE\xE0\x07\x1D\x02\x02\xDF\xDE\x03\x02\x02" +
		"\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x05v<\x02" +
		"\xE2\x15\x03\x02\x02\x02\xE3\xEC\x07-\x02\x02\xE4\xE9\x05\x10\t\x02\xE5" +
		"\xE6\x074\x02\x02\xE6\xE8\x05\x10\t\x02\xE7\xE5\x03\x02\x02\x02\xE8\xEB" +
		"\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xED" +
		"\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEC\xE4\x03\x02\x02\x02\xEC\xED" +
		"\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xFF\x07.\x02\x02\xEF\xF0" +
		"\x07-\x02\x02\xF0\xFA\x05\x14\v\x02\xF1\xF2\x074\x02\x02\xF2\xF7\x05\x10" +
		"\t\x02\xF3\xF4\x074\x02\x02\xF4\xF6\x05\x10\t\x02\xF5\xF3\x03\x02\x02" +
		"\x02\xF6\xF9\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02" +
		"\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\xF1\x03\x02\x02" +
		"\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD\x07.\x02" +
		"\x02\xFD\xFF\x03\x02\x02\x02\xFE\xE3\x03\x02\x02\x02\xFE\xEF\x03\x02\x02" +
		"\x02\xFF\x17\x03\x02\x02\x02\u0100\u0101\x05v<\x02\u0101\u0102\x05\x16" +
		"\f\x02\u0102\x19\x03\x02\x02\x02\u0103\u0104\x07\b\x02\x02\u0104\u0105" +
		"\x05\x18\r\x02\u0105\x1B\x03\x02\x02\x02\u0106\u0107\x07\b\x02\x02\u0107" +
		"\u0113\x071\x02\x02\u0108\u010D\x05\x18\r\x02\u0109\u010A\x074\x02\x02" +
		"\u010A\u010C\x05\x18\r\x02\u010B\u0109\x03\x02\x02\x02\u010C\u010F\x03" +
		"\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E" +
		"\u0111\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u0110\u0112\x074\x02" +
		"\x02\u0111\u0110\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0114" +
		"\x03\x02\x02\x02\u0113\u0108\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02" +
		"\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x072\x02\x02\u0116\x1D\x03\x02" +
		"\x02\x02\u0117\u0118\x07\t\x02\x02\u0118\u0119\x05\x18\r\x02\u0119\x1F" +
		"\x03\x02\x02\x02\u011A\u011B\x07\t\x02\x02\u011B\u0127\x071\x02\x02\u011C" +
		"\u0121\x05\x18\r\x02\u011D\u011E\x074\x02\x02\u011E\u0120\x05\x18\r\x02" +
		"\u011F\u011D\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u011F\x03" +
		"\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0125\x03\x02\x02\x02\u0123" +
		"\u0121\x03\x02\x02\x02\u0124\u0126\x074\x02\x02\u0125\u0124\x03\x02\x02" +
		"\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0128\x03\x02\x02\x02\u0127\u011C" +
		"\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02" +
		"\u0129\u012A\x072\x02\x02\u012A!\x03\x02\x02\x02\u012B\u012C\x07\x15\x02" +
		"\x02\u012C\u0130\x071\x02\x02\u012D\u012F\x05$\x13\x02\u012E\u012D\x03" +
		"\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130" +
		"\u0131\x03\x02\x02\x02\u0131\u0133\x03\x02\x02\x02\u0132\u0130\x03\x02" +
		"\x02\x02\u0133\u0134\x072\x02\x02\u0134#\x03\x02\x02\x02\u0135\u0136\x05" +
		"v<\x02\u0136\u0137\x078\x02\x02\u0137\u013A\x05> \x02\u0138\u0139\x07" +
		"B\x02\x02\u0139\u013B\x05^0\x02\u013A\u0138\x03\x02\x02\x02\u013A\u013B" +
		"\x03\x02\x02\x02\u013B\u014E\x03\x02\x02\x02\u013C\u013D\x05v<\x02\u013D" +
		"\u013E\x07/\x02\x02\u013E\u0143\x05&\x14\x02\u013F\u0140\x074\x02\x02" +
		"\u0140\u0142\x05&\x14\x02\u0141\u013F\x03\x02\x02\x02\u0142\u0145\x03" +
		"\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144" +
		"\u0146\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0146\u0147\x070\x02" +
		"\x02\u0147\u0148\x078\x02\x02\u0148\u014B\x05> \x02\u0149\u014A\x07B\x02" +
		"\x02\u014A\u014C\x05^0\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03" +
		"\x02\x02\x02\u014C\u014E\x03\x02\x02\x02\u014D\u0135\x03\x02\x02\x02\u014D" +
		"\u013C\x03\x02\x02\x02\u014E%\x03\x02\x02\x02\u014F\u0151\x05v<\x02\u0150" +
		"\u014F\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0152\x03\x02" +
		"\x02\x02\u0152\u0153\x078\x02\x02\u0153\u0154\x05> \x02\u0154\'\x03\x02" +
		"\x02\x02\u0155\u0156\x07:\x02\x02\u0156\u0157\x07\x0E\x02\x02\u0157\u0158" +
		"\x05\x16\f\x02\u0158\u0159\x05d3\x02\u0159)\x03\x02\x02\x02\u015A\u015B" +
		"\x07:\x02\x02\u015B\u015C\x07\x0E\x02\x02\u015C\u015D\x05\x16\f\x02\u015D" +
		"+\x03\x02\x02\x02\u015E\u0160\x07\x0F\x02\x02\u015F\u0161\x07I\x02\x02" +
		"\u0160\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x03" +
		"\x02\x02\x02\u0162\u0163\x07:\x02\x02\u0163\u0164\x05v<\x02\u0164\u0165" +
		"\x05\x16\f\x02\u0165\u0166\x05d3\x02\u0166-\x03\x02\x02\x02\u0167\u0169" +
		"\x07\x0F\x02\x02\u0168\u016A\x07I\x02\x02\u0169\u0168\x03\x02\x02\x02" +
		"\u0169\u016A\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016C\x07" +
		":\x02\x02\u016C\u016D\x05v<\x02\u016D\u016E\x05\x16\f\x02\u016E/\x03\x02" +
		"\x02\x02\u016F\u0171\x07\x10\x02\x02\u0170\u0172\x07I\x02\x02\u0171\u0170" +
		"\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02" +
		"\u0173\u0174\x07:\x02\x02\u0174\u0175\x05v<\x02\u0175\u0178\x05\x16\f" +
		"\x02\u0176\u0177\x07=\x02\x02\u0177\u0179\x05> \x02\u0178\u0176\x03\x02" +
		"\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A" +
		"\u017B\x05d3\x02\u017B1\x03\x02\x02\x02\u017C\u017E\x07\x10\x02\x02\u017D" +
		"\u017F\x07I\x02\x02\u017E\u017D\x03\x02\x02\x02\u017E\u017F\x03\x02\x02" +
		"\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0181\x07:\x02\x02\u0181\u0182" +
		"\x05v<\x02\u0182\u0185\x05\x16\f\x02\u0183\u0184\x07=\x02\x02\u0184\u0186" +
		"\x05> \x02\u0185\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186" +
		"3\x03\x02\x02\x02\u0187\u018A\x07\x11\x02\x02\u0188\u0189\x073\x02\x02" +
		"\u0189\u018B\x05v<\x02\u018A\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02" +
		"\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018D\x05v<\x02\u018D\u018E" +
		"\x05\x16\f\x02\u018E\u018F\x05d3\x02\u018F5\x03\x02\x02\x02\u0190\u0191" +
		"\x07(\x02\x02\u0191\u0192\x05v<\x02\u0192\u0193\x071\x02\x02\u0193\u019A" +
		"\x058\x1D\x02\u0194\u0196\x058\x1D\x02\u0195\u0197\x074\x02\x02\u0196" +
		"\u0195\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0199\x03\x02" +
		"\x02\x02\u0198\u0194\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A" +
		"\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019D\x03\x02" +
		"\x02\x02\u019C\u019A\x03\x02\x02\x02\u019D\u019E\x072\x02\x02\u019E7\x03" +
		"\x02\x02\x02\u019F\u01A2\x05:\x1E\x02\u01A0\u01A2\x05<\x1F\x02\u01A1\u019F" +
		"\x03\x02\x02\x02\u01A1\u01A0\x03\x02\x02\x02\u01A29\x03\x02\x02\x02\u01A3" +
		"\u01A4\x07:\x02\x02\u01A4\u01A5\x05v<\x02\u01A5\u01A7\x07-\x02\x02\u01A6" +
		"\u01A8\x05\x12\n\x02\u01A7\u01A6\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02" +
		"\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AA\x07.\x02\x02\u01AA\u01B4" +
		"\x03\x02\x02\x02\u01AB\u01AC\x07:\x02\x02\u01AC\u01AD\x05v<\x02\u01AD" +
		"\u01AF\x071\x02\x02\u01AE\u01B0\x05\x12\n\x02\u01AF\u01AE\x03\x02\x02" +
		"\x02\u01AF\u01B0\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B2\x072\x02\x02\u01B2\u01B4\x03" +
		"\x02\x02\x02\u01B3\u01A3\x03\x02\x02\x02\u01B3\u01AB\x03\x02\x02\x02\u01B4" +
		";\x03\x02\x02\x02\u01B5\u01B6\x07:\x02\x02\u01B6\u01B7\x05v<\x02\u01B7" +
		"=\x03\x02\x02\x02\u01B8\u01B9\b \x01\x02\u01B9\u01D2\x05@!\x02\u01BA\u01D2" +
		"\x05B\"\x02\u01BB\u01BC\x07\x0E\x02\x02\u01BC\u01BD\x07:\x02\x02\u01BD" +
		"\u01D2\x05@!\x02\u01BE\u01BF\x07\x0F\x02\x02\u01BF\u01D2\x05B\"\x02\u01C0" +
		"\u01C1\x07\x10\x02\x02\u01C1\u01D2\x05B\"\x02\u01C2\u01C3\x07\x1D\x02" +
		"\x02\u01C3\u01D2\x05> \x07\u01C4\u01CD\x07/\x02\x02\u01C5\u01CA\x05> " +
		"\x02\u01C6\u01C7\x074\x02\x02\u01C7\u01C9\x05> \x02\u01C8\u01C6\x03\x02" +
		"\x02\x02\u01C9\u01CC\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA" +
		"\u01CB\x03\x02\x02\x02\u01CB\u01CE\x03\x02\x02\x02\u01CC\u01CA\x03\x02" +
		"\x02\x02\u01CD\u01C5\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE" +
		"\u01CF\x03\x02\x02\x02\u01CF\u01D2\x070\x02\x02\u01D0\u01D2\x05D#\x02" +
		"\u01D1\u01B8\x03\x02\x02\x02\u01D1\u01BA\x03\x02\x02\x02\u01D1\u01BB\x03" +
		"\x02\x02\x02\u01D1\u01BE\x03\x02\x02\x02\u01D1\u01C0\x03\x02\x02\x02\u01D1" +
		"\u01C2\x03\x02\x02\x02\u01D1\u01C4\x03\x02\x02\x02\u01D1\u01D0\x03\x02" +
		"\x02\x02\u01D2\u01DD\x03\x02\x02\x02\u01D3\u01D4\f\x06\x02\x02\u01D4\u01DC" +
		"\x076\x02\x02\u01D5\u01D6\f\x05\x02\x02\u01D6\u01D8\x07/\x02\x02\u01D7" +
		"\u01D9\x07V\x02\x02\u01D8\u01D7\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02" +
		"\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DC\x070\x02\x02\u01DB\u01D3" +
		"\x03\x02\x02\x02\u01DB\u01D5\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02" +
		"\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE?\x03\x02" +
		"\x02\x02\u01DF\u01DD\x03\x02\x02\x02\u01E0\u01E5\x05v<\x02\u01E1\u01E2" +
		"\x073\x02\x02\u01E2\u01E4\x05v<\x02\u01E3\u01E1\x03\x02\x02\x02\u01E4" +
		"\u01E7\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E5\u01E6\x03\x02" +
		"\x02\x02\u01E6A\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E8\u01ED" +
		"\x05@!\x02\u01E9\u01EA\x07-\x02\x02\u01EA\u01EB\x05^0\x02\u01EB\u01EC" +
		"\x07.\x02\x02\u01EC\u01EE\x03\x02\x02\x02\u01ED\u01E9\x03\x02\x02\x02" +
		"\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F0\x07" +
		"3\x02\x02\u01F0\u01F1\x07:\x02\x02\u01F1\u01F2\x05v<\x02\u01F2C\x03\x02" +
		"\x02\x02\u01F3\u01F7\x05F$\x02\u01F4\u01F7\x056\x1C\x02\u01F5\u01F7\x05" +
		"H%\x02\u01F6\u01F3\x03\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6\u01F5" +
		"\x03\x02\x02\x02\u01F7E\x03\x02\x02\x02\u01F8\u01FA\x07\'\x02\x02\u01F9" +
		"\u01FB\x05v<\x02\u01FA\u01F9\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02" +
		"\u01FB\u01FC\x03\x02\x02\x02\u01FC\u0205\x07-\x02\x02\u01FD\u0202\x05" +
		"\x10\t\x02\u01FE\u01FF\x074\x02\x02\u01FF\u0201\x05\x10\t\x02\u0200\u01FE" +
		"\x03\x02\x02\x02\u0201\u0204\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02" +
		"\u0202\u0203\x03\x02\x02\x02\u0203\u0206\x03\x02\x02\x02\u0204\u0202\x03" +
		"\x02\x02\x02\u0205\u01FD\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206" +
		"\u0207\x03\x02\x02\x02\u0207\u021B\x07.\x02\x02\u0208\u020A\x07\'\x02" +
		"\x02\u0209\u020B\x05v<\x02\u020A\u0209\x03\x02\x02\x02\u020A\u020B\x03" +
		"\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020D\x071\x02\x02\u020D" +
		"\u0212\x05\x10\t\x02\u020E\u020F\x074\x02\x02\u020F\u0211\x05\x10\t\x02" +
		"\u0210\u020E\x03\x02\x02\x02\u0211\u0214\x03\x02\x02\x02\u0212\u0210\x03" +
		"\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0216\x03\x02\x02\x02\u0214" +
		"\u0212\x03\x02\x02\x02\u0215\u0217\x074\x02\x02\u0216\u0215\x03\x02\x02" +
		"\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u0219" +
		"\x072\x02\x02\u0219\u021B\x03\x02\x02\x02\u021A\u01F8\x03\x02\x02\x02" +
		"\u021A\u0208\x03\x02\x02\x02\u021BG\x03\x02\x02\x02\u021C\u021D\x07)\x02" +
		"\x02\u021D\u021E\x05v<\x02\u021E\u021F\x07B\x02\x02\u021F\u0220\x05> " +
		"\x02\u0220I\x03\x02\x02\x02\u0221\u0222\x07\"\x02\x02\u0222\u0224\x05" +
		"v<\x02\u0223\u0225\x077\x02\x02\u0224\u0223\x03\x02\x02\x02\u0224\u0225" +
		"\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0229\x05\x16\f\x02" +
		"\u0227\u0228\x07=\x02\x02\u0228\u022A\x05> \x02\u0229\u0227\x03\x02\x02" +
		"\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022C" +
		"\x05d3\x02\u022CK\x03\x02\x02\x02\u022D\u022E\x07;\x02\x02\u022E\u0234" +
		"\x05@!\x02\u022F\u0231\x07-\x02\x02\u0230\u0232\x05j6\x02\u0231\u0230" +
		"\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02" +
		"\u0233\u0235\x07.\x02\x02\u0234\u022F\x03\x02\x02\x02\u0234\u0235\x03" +
		"\x02\x02\x02\u0235M\x03\x02\x02\x02\u0236\u0242\x071\x02\x02\u0237\u023C" +
		"\x05l7\x02\u0238\u0239\x074\x02\x02\u0239\u023B\x05l7\x02\u023A\u0238" +
		"\x03\x02\x02\x02\u023B\u023E\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02" +
		"\u023C\u023D\x03\x02\x02\x02\u023D\u0240\x03\x02\x02\x02\u023E\u023C\x03" +
		"\x02\x02\x02\u023F\u0241\x074\x02\x02\u0240\u023F\x03\x02\x02\x02\u0240" +
		"\u0241\x03\x02\x02\x02\u0241\u0243\x03\x02\x02\x02\u0242\u0237\x03\x02" +
		"\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244" +
		"\u0245\x072\x02\x02\u0245O\x03\x02\x02\x02\u0246\u0248\x05L\'\x02\u0247" +
		"\u0246\x03\x02\x02\x02\u0248\u024B\x03\x02\x02\x02\u0249\u0247\x03\x02" +
		"\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024C\x03\x02\x02\x02\u024B" +
		"\u0249\x03\x02\x02\x02\u024C\u02C7\x05R*\x02\u024D\u024F\x05L\'\x02\u024E" +
		"\u024D\x03\x02\x02\x02\u024F\u0252\x03\x02\x02\x02\u0250\u024E\x03\x02" +
		"\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251\u0253\x03\x02\x02\x02\u0252" +
		"\u0250\x03\x02\x02\x02\u0253\u02C7\x05T+\x02\u0254\u0256\x05L\'\x02\u0255" +
		"\u0254\x03\x02\x02\x02\u0256\u0259\x03\x02\x02\x02\u0257\u0255\x03\x02" +
		"\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u025A\x03\x02\x02\x02\u0259" +
		"\u0257\x03\x02\x02\x02\u025A\u02C7\x05Z.\x02\u025B\u025D\x05L\'\x02\u025C" +
		"\u025B\x03\x02\x02\x02\u025D\u0260\x03\x02\x02\x02\u025E\u025C\x03\x02" +
		"\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u0261\x03\x02\x02\x02\u0260" +
		"\u025E\x03\x02\x02\x02\u0261\u02C7\x05p9\x02\u0262\u0264\x05L\'\x02\u0263" +
		"\u0262\x03\x02\x02\x02\u0264\u0267\x03\x02\x02\x02\u0265\u0263\x03\x02" +
		"\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266\u0268\x03\x02\x02\x02\u0267" +
		"\u0265\x03\x02\x02\x02\u0268\u02C7\x05t;\x02\u0269\u026B\x05L\'\x02\u026A" +
		"\u0269\x03\x02\x02\x02\u026B\u026E\x03\x02\x02\x02\u026C\u026A\x03\x02" +
		"\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u026F\x03\x02\x02\x02\u026E" +
		"\u026C\x03\x02\x02\x02\u026F\u0270\x07\v\x02\x02\u0270\u0280\x05^0\x02" +
		"\u0271\u027D\x071\x02\x02\u0272\u0277\x05l7\x02\u0273\u0274\x074\x02\x02" +
		"\u0274\u0276\x05l7\x02\u0275\u0273\x03\x02\x02\x02\u0276\u0279\x03\x02" +
		"\x02\x02\u0277\u0275\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278" +
		"\u027B\x03\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u027A\u027C\x074\x02" +
		"\x02\u027B\u027A\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C\u027E" +
		"\x03\x02\x02\x02\u027D\u0272\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02" +
		"\u027E\u027F\x03\x02\x02\x02\u027F\u0281\x072\x02\x02\u0280\u0271\x03" +
		"\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u02C7\x03\x02\x02\x02\u0282" +
		"\u0284\x05L\'\x02\u0283\u0282\x03\x02\x02\x02\u0284\u0287\x03\x02\x02" +
		"\x02\u0285\u0283\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0288" +
		"\x03\x02\x02\x02\u0287\u0285\x03\x02\x02\x02\u0288\u0289\x07\r\x02\x02" +
		"\u0289\u028A\x07:\x02\x02\u028A\u02C7\x05^0\x02\u028B\u028D\x05L\'\x02" +
		"\u028C\u028B\x03\x02\x02\x02\u028D\u0290\x03\x02\x02\x02\u028E\u028C\x03" +
		"\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0291\x03\x02\x02\x02\u0290" +
		"\u028E\x03\x02\x02\x02\u0291\u0293\x07\n\x02\x02\u0292\u0294\x07:\x02" +
		"\x02\u0293\u0292\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0295" +
		"\x03\x02\x02\x02\u0295\u02A5\x05^0\x02\u0296\u02A2\x071\x02\x02\u0297" +
		"\u029C\x05l7\x02\u0298\u0299\x074\x02\x02\u0299\u029B\x05l7\x02\u029A" +
		"\u0298\x03\x02\x02\x02\u029B\u029E\x03\x02\x02\x02\u029C\u029A\x03\x02" +
		"\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u02A0\x03\x02\x02\x02\u029E" +
		"\u029C\x03\x02\x02\x02\u029F\u02A1\x074\x02\x02\u02A0\u029F\x03\x02\x02" +
		"\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A3\x03\x02\x02\x02\u02A2\u0297" +
		"\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02" +
		"\u02A4\u02A6\x072\x02\x02\u02A5\u0296\x03\x02\x02\x02\u02A5\u02A6\x03" +
		"\x02\x02\x02\u02A6\u02C7\x03\x02\x02\x02\u02A7\u02A9\x05L\'\x02\u02A8" +
		"\u02A7\x03\x02\x02\x02\u02A9\u02AC\x03\x02\x02\x02\u02AA\u02A8\x03\x02" +
		"\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AD\x03\x02\x02\x02\u02AC" +
		"\u02AA\x03\x02\x02\x02\u02AD\u02AE\x07*\x02\x02\u02AE\u02C7\x05^0\x02" +
		"\u02AF\u02B1\x05L\'\x02\u02B0\u02AF\x03\x02\x02\x02\u02B1\u02B4\x03\x02" +
		"\x02\x02\u02B2\u02B0\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3" +
		"\u02B5\x03\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B5\u02B6\x07&\x02" +
		"\x02\u02B6\u02C7\x05^0\x02\u02B7\u02B9\x05L\'\x02\u02B8\u02B7\x03\x02" +
		"\x02\x02\u02B9\u02BC\x03\x02\x02\x02\u02BA\u02B8\x03\x02\x02\x02\u02BA" +
		"\u02BB\x03\x02\x02\x02\u02BB\u02BD\x03\x02\x02\x02\u02BC\u02BA\x03\x02" +
		"\x02\x02\u02BD\u02BE\x07%\x02\x02\u02BE\u02C7\x05^0\x02\u02BF\u02C1\x05" +
		"L\'\x02\u02C0\u02BF\x03\x02\x02\x02\u02C1\u02C4\x03\x02\x02\x02\u02C2" +
		"\u02C0\x03\x02\x02\x02\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02C5\x03\x02" +
		"\x02\x02\u02C4\u02C2\x03\x02\x02\x02\u02C5\u02C7\x05^0\x02\u02C6\u0249" +
		"\x03\x02\x02\x02\u02C6\u0250\x03\x02\x02\x02\u02C6\u0257\x03\x02\x02\x02" +
		"\u02C6\u025E\x03\x02\x02\x02\u02C6\u0265\x03\x02\x02\x02\u02C6\u026C\x03" +
		"\x02\x02\x02\u02C6\u0285\x03\x02\x02\x02\u02C6\u028E\x03\x02\x02\x02\u02C6" +
		"\u02AA\x03\x02\x02\x02\u02C6\u02B2\x03\x02\x02\x02\u02C6\u02BA\x03\x02" +
		"\x02\x02\u02C6\u02C2\x03\x02\x02\x02\u02C7Q\x03\x02\x02\x02\u02C8\u02C9" +
		"\x07#\x02\x02\u02C9\u02CC\x05X-\x02\u02CA\u02CB\x07B\x02\x02\u02CB\u02CD" +
		"\x05^0\x02\u02CC\u02CA\x03\x02\x02\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD" +
		"S\x03\x02\x02\x02\u02CE\u02CF\x07$\x02\x02\u02CF\u02D0\x05v<\x02\u02D0" +
		"\u02D1\x07B\x02\x02\u02D1\u02D2\x05^0\x02\u02D2U\x03\x02\x02\x02\u02D3" +
		"\u02D6\x05v<\x02\u02D4\u02D5\x078\x02\x02\u02D5\u02D7\x05> \x02\u02D6" +
		"\u02D4\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7W\x03\x02\x02" +
		"\x02\u02D8\u02EF\x05V,\x02\u02D9\u02DA\x071\x02\x02\u02DA\u02DE\x05V," +
		"\x02\u02DB\u02DD\x074\x02\x02\u02DC\u02DB\x03\x02\x02\x02\u02DD\u02E0" +
		"\x03\x02\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02" +
		"\u02DF\u02E1\x03\x02\x02\x02\u02E0\u02DE\x03\x02\x02\x02\u02E1\u02E2\x07" +
		"2\x02\x02\u02E2\u02EF\x03\x02\x02\x02\u02E3\u02E4\x07/\x02\x02\u02E4\u02E9" +
		"\x05V,\x02\u02E5\u02E6\x074\x02\x02\u02E6\u02E8\x05V,\x02\u02E7\u02E5" +
		"\x03\x02\x02\x02\u02E8\u02EB\x03\x02\x02\x02\u02E9\u02E7\x03\x02\x02\x02" +
		"\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02EC\x03\x02\x02\x02\u02EB\u02E9\x03" +
		"\x02\x02\x02\u02EC\u02ED\x070\x02\x02\u02ED\u02EF\x03\x02\x02\x02\u02EE" +
		"\u02D8\x03\x02\x02\x02\u02EE\u02D9\x03\x02\x02\x02\u02EE\u02E3\x03\x02" +
		"\x02\x02\u02EFY\x03\x02\x02\x02\u02F0\u02F1\x05\\/\x02\u02F1\u02F2\t\x02" +
		"\x02\x02\u02F2\u02F3\x05^0\x02\u02F3[\x03\x02\x02\x02\u02F4\u0306\x05" +
		"v<\x02\u02F5\u02F6\x05^0\x02\u02F6\u02F7\x073\x02\x02\u02F7\u02F8\x05" +
		"v<\x02\u02F8\u0306\x03\x02\x02\x02\u02F9\u02FA\x05^0\x02\u02FA\u02FB\x07" +
		"/\x02\x02\u02FB\u0300\x05^0\x02\u02FC\u02FD\x074\x02\x02\u02FD\u02FF\x05" +
		"^0\x02\u02FE\u02FC\x03\x02\x02\x02\u02FF\u0302\x03\x02\x02\x02\u0300\u02FE" +
		"\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301\u0303\x03\x02\x02\x02" +
		"\u0302\u0300\x03\x02\x02\x02\u0303\u0304\x070\x02\x02\u0304\u0306\x03" +
		"\x02\x02\x02\u0305\u02F4\x03\x02\x02\x02\u0305\u02F5\x03\x02\x02\x02\u0305" +
		"\u02F9\x03\x02\x02\x02\u0306]\x03\x02\x02\x02\u0307\u0308\b0\x01\x02\u0308" +
		"\u0309\x07-\x02\x02\u0309\u030A\x05^0\x02\u030A\u030B\x07.\x02\x02\u030B" +
		"\u034E\x03\x02\x02\x02\u030C\u030D\x05> \x02\u030D\u030E\x079\x02\x02" +
		"\u030E\u030F\x05v<\x02\u030F\u034E\x03\x02\x02\x02\u0310\u0312\x05> \x02" +
		"\u0311\u0313\x077\x02\x02\u0312\u0311\x03\x02\x02\x02\u0312\u0313\x03" +
		"\x02\x02\x02\u0313\u0314\x03\x02\x02\x02\u0314\u031D\x07-\x02\x02\u0315" +
		"\u031A\x05j6\x02\u0316\u0317\x074\x02\x02\u0317\u0319\x05j6\x02\u0318" +
		"\u0316\x03\x02\x02\x02\u0319\u031C\x03\x02\x02\x02\u031A\u0318\x03\x02" +
		"\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B\u031E\x03\x02\x02\x02\u031C" +
		"\u031A\x03\x02\x02\x02\u031D\u0315\x03\x02\x02\x02\u031D\u031E\x03\x02" +
		"\x02\x02\u031E\u031F\x03\x02\x02\x02\u031F\u0320\x07.\x02\x02\u0320\u034E" +
		"\x03\x02\x02\x02\u0321\u034E\x05f4\x02\u0322\u0323\x07\x1B\x02\x02\u0323" +
		"\u034E\x05^0\x0F\u0324\u034E\x05p9\x02\u0325\u0326\x07\f\x02\x02\u0326" +
		"\u034E\x05^0\v\u0327\u0329\x07%\x02\x02\u0328\u032A\x05^0\x02\u0329\u0328" +
		"\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A\u034E\x03\x02\x02\x02" +
		"\u032B\u034E\x05b2\x02\u032C\u0335\x07/\x02\x02\u032D\u0332\x05^0\x02" +
		"\u032E\u032F\x074\x02\x02\u032F\u0331\x05^0\x02\u0330\u032E\x03\x02\x02" +
		"\x02\u0331\u0334\x03\x02\x02\x02\u0332\u0330\x03\x02\x02\x02\u0332\u0333" +
		"\x03\x02\x02\x02\u0333\u0336\x03\x02\x02\x02\u0334\u0332\x03\x02\x02\x02" +
		"\u0335\u032D\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336\u0337\x03" +
		"\x02\x02\x02\u0337\u034E\x070\x02\x02\u0338\u033A\x05> \x02\u0339\u0338" +
		"\x03\x02\x02\x02\u0339\u033A\x03\x02\x02\x02\u033A\u033B\x03\x02\x02\x02" +
		"\u033B\u0347\x071\x02\x02\u033C\u0341\x05l7\x02\u033D\u033E\x074\x02\x02" +
		"\u033E\u0340\x05l7\x02\u033F\u033D\x03\x02\x02\x02\u0340\u0343\x03\x02" +
		"\x02\x02\u0341\u033F\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342" +
		"\u0345\x03\x02\x02\x02\u0343\u0341\x03\x02\x02\x02\u0344\u0346\x074\x02" +
		"\x02\u0345\u0344\x03\x02\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0348" +
		"\x03\x02\x02\x02\u0347\u033C\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02" +
		"\u0348\u0349\x03\x02\x02\x02\u0349\u034E\x072\x02\x02\u034A\u034E\x05" +
		"B\"\x02\u034B\u034E\x05n8\x02\u034C\u034E\x05v<\x02\u034D\u0307\x03\x02" +
		"\x02\x02\u034D\u030C\x03\x02\x02\x02\u034D\u0310\x03\x02\x02\x02\u034D" +
		"\u0321\x03\x02\x02\x02\u034D\u0322\x03\x02\x02\x02\u034D\u0324\x03\x02" +
		"\x02\x02\u034D\u0325\x03\x02\x02\x02\u034D\u0327\x03\x02\x02\x02\u034D" +
		"\u032B\x03\x02\x02\x02\u034D\u032C\x03\x02\x02\x02\u034D\u0339\x03\x02" +
		"\x02\x02\u034D\u034A\x03\x02\x02\x02\u034D\u034B\x03\x02\x02\x02\u034D" +
		"\u034C\x03\x02\x02\x02\u034E\u0398\x03\x02\x02\x02\u034F\u0351\f\x1F\x02" +
		"\x02\u0350\u0352\t\x03\x02\x02\u0351\u0350\x03\x02\x02\x02\u0351\u0352" +
		"\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353\u0354\x073\x02\x02" +
		"\u0354\u0397\x05v<\x02\u0355\u0356\f\x1E\x02\x02\u0356\u0357\x07+\x02" +
		"\x02\u0357\u0397\x05> \x02\u0358\u0359\f\x1D\x02\x02\u0359\u035A\x07/" +
		"\x02\x02\u035A\u035F\x05j6\x02\u035B\u035C\x074\x02\x02\u035C\u035E\x05" +
		"j6\x02\u035D\u035B\x03\x02\x02\x02\u035E\u0361\x03\x02\x02\x02\u035F\u035D" +
		"\x03\x02\x02\x02\u035F\u0360\x03\x02\x02\x02\u0360\u0362\x03\x02\x02\x02" +
		"\u0361\u035F\x03\x02\x02\x02\u0362\u0363\x070\x02\x02\u0363\u0397\x03" +
		"\x02\x02\x02\u0364\u0365\f\x1C\x02\x02\u0365\u0366\x079\x02\x02\u0366" +
		"\u0397\x05v<\x02\u0367\u0369\f\x1A\x02\x02\u0368\u036A\x077\x02\x02\u0369" +
		"\u0368\x03\x02\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A\u036B\x03\x02" +
		"\x02\x02\u036B\u0374\x07-\x02\x02\u036C\u0371\x05j6\x02\u036D\u036E\x07" +
		"4\x02\x02\u036E\u0370\x05j6\x02\u036F\u036D\x03\x02\x02\x02\u0370\u0373" +
		"\x03\x02\x02\x02\u0371\u036F\x03\x02\x02\x02\u0371\u0372\x03\x02\x02\x02" +
		"\u0372\u0375\x03\x02\x02\x02\u0373\u0371\x03\x02\x02\x02\u0374\u036C\x03" +
		"\x02\x02\x02\u0374\u0375\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376" +
		"\u0397\x07.\x02\x02\u0377\u0378\f\x18\x02\x02\u0378\u0379\t\x04\x02\x02" +
		"\u0379\u0397\x05^0\x02\u037A\u037B\f\x17\x02\x02\u037B\u037C\t\x05\x02" +
		"\x02\u037C\u0397\x05^0\x02\u037D\u037E\f\x16\x02\x02\u037E\u037F\t\x06" +
		"\x02\x02\u037F\u0397\x05^0\x02\u0380\u0381\f\x15\x02\x02\u0381\u0382\t" +
		"\x07\x02\x02\u0382\u0397\x05^0\x02\u0383\u0384\f\x14\x02\x02\u0384\u0397" +
		"\x076\x02\x02\u0385\u0386\f\x13\x02\x02\u0386\u0387\x07\x17\x02\x02\u0387" +
		"\u0397\x05> \x02\u0388\u0389\f\x12\x02\x02\u0389\u038A\x07\x13\x02\x02" +
		"\u038A\u0397\x05^0\x02\u038B\u038C\f\x11\x02\x02\u038C\u038D\x075\x02" +
		"\x02\u038D\u0397\x05^0\x02\u038E\u038F\f\x0E\x02\x02\u038F\u0390\x07\x1E" +
		"\x02\x02\u0390\u0397\x05^0\x02\u0391\u0392\f\r\x02\x02\u0392\u0393\x07" +
		"\x1F\x02\x02\u0393\u0397\x05^0\x02\u0394\u0395\f\x03\x02\x02\u0395\u0397" +
		"\x07,\x02\x02\u0396\u034F\x03\x02\x02\x02\u0396\u0355\x03\x02\x02\x02" +
		"\u0396\u0358\x03\x02\x02\x02\u0396\u0364\x03\x02\x02\x02\u0396\u0367\x03" +
		"\x02\x02\x02\u0396\u0377\x03\x02\x02\x02\u0396\u037A\x03\x02\x02\x02\u0396" +
		"\u037D\x03\x02\x02\x02\u0396\u0380\x03\x02\x02\x02\u0396\u0383\x03\x02" +
		"\x02\x02\u0396\u0385\x03\x02\x02\x02\u0396\u0388\x03\x02\x02\x02\u0396" +
		"\u038B\x03\x02\x02\x02\u0396\u038E\x03\x02\x02\x02\u0396\u0391\x03\x02" +
		"\x02\x02\u0396\u0394\x03\x02\x02\x02\u0397\u039A\x03\x02\x02\x02\u0398" +
		"\u0396\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399_\x03\x02\x02" +
		"\x02\u039A\u0398\x03\x02\x02\x02\u039B\u03A4\x07?\x02\x02\u039C\u03A1" +
		"\x05v<\x02\u039D\u039E\x074\x02\x02\u039E\u03A0\x05v<\x02\u039F\u039D" +
		"\x03\x02\x02\x02\u03A0\u03A3\x03\x02\x02\x02\u03A1\u039F\x03\x02\x02\x02" +
		"\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03A5\x03\x02\x02\x02\u03A3\u03A1\x03" +
		"\x02\x02\x02\u03A4\u039C\x03\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5" +
		"\u03A6\x03\x02\x02\x02\u03A6\u03B4\x07?\x02\x02\u03A7\u03B0\x07?\x02\x02" +
		"\u03A8\u03AD\x05\x10\t\x02\u03A9\u03AA\x074\x02\x02\u03AA\u03AC\x05\x10" +
		"\t\x02\u03AB\u03A9\x03\x02\x02\x02\u03AC\u03AF\x03\x02\x02\x02\u03AD\u03AB" +
		"\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03B1\x03\x02\x02\x02" +
		"\u03AF\u03AD\x03\x02\x02\x02\u03B0\u03A8\x03\x02\x02\x02\u03B0\u03B1\x03" +
		"\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B4\x07?\x02\x02\u03B3" +
		"\u039B\x03\x02\x02\x02\u03B3\u03A7\x03\x02\x02\x02\u03B4a\x03\x02\x02" +
		"\x02\u03B5\u03B8\x05`1\x02\u03B6\u03B7\x07=\x02\x02\u03B7\u03B9\x05> " +
		"\x02\u03B8\u03B6\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BC" +
		"\x03\x02\x02\x02\u03BA\u03BD\x05d3\x02\u03BB\u03BD\x05P)\x02\u03BC\u03BA" +
		"\x03\x02\x02\x02\u03BC\u03BB\x03\x02\x02\x02\u03BDc\x03\x02\x02\x02\u03BE" +
		"\u03C2\x071\x02\x02\u03BF\u03C1\x05P)\x02\u03C0\u03BF\x03\x02\x02\x02" +
		"\u03C1\u03C4\x03\x02\x02\x02\u03C2\u03C0\x03\x02\x02\x02\u03C2\u03C3\x03" +
		"\x02\x02\x02\u03C3\u03C5\x03\x02\x02\x02\u03C4\u03C2\x03\x02\x02\x02\u03C5" +
		"\u03C6\x072\x02\x02\u03C6e\x03\x02\x02\x02\u03C7\u03C8\x07\x18\x02\x02" +
		"\u03C8\u03CC\x05d3\x02\u03C9\u03CB\x05h5\x02\u03CA\u03C9\x03\x02\x02\x02" +
		"\u03CB\u03CE\x03\x02\x02\x02\u03CC\u03CA\x03\x02\x02\x02\u03CC\u03CD\x03" +
		"\x02\x02\x02\u03CD\u03D0\x03\x02\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CF" +
		"\u03D1\x05r:\x02\u03D0\u03CF\x03\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02" +
		"\u03D1g\x03\x02\x02\x02\u03D2\u03D3\x07\x19\x02\x02\u03D3\u03D4\x05> " +
		"\x02\u03D4\u03D5\x05d3\x02\u03D5\u03DE\x03\x02\x02\x02\u03D6\u03D7\x07" +
		"\x19\x02\x02\u03D7\u03D8\x05v<\x02\u03D8\u03D9\x078\x02\x02\u03D9\u03DA" +
		"\x05> \x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03DC\x05d3\x02\u03DC\u03DE" +
		"\x03\x02\x02\x02\u03DD\u03D2\x03\x02\x02\x02\u03DD\u03D6\x03\x02\x02\x02" +
		"\u03DEi\x03\x02\x02\x02\u03DF\u03E0\x05v<\x02\u03E0\u03E1\x07B\x02\x02" +
		"\u03E1\u03E3\x03\x02\x02\x02\u03E2\u03DF\x03\x02\x02\x02\u03E2\u03E3\x03" +
		"\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E5\x05^0\x02\u03E5k" +
		"\x03\x02\x02\x02\u03E6\u03E9\x05v<\x02\u03E7\u03E8\x078\x02\x02\u03E8" +
		"\u03EA\x05^0\x02\u03E9\u03E7\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02" +
		"\u03EAm\x03\x02\x02\x02\u03EB\u03F1\x07U\x02\x02\u03EC\u03F1\x07V\x02" +
		"\x02\u03ED\u03F1\x07W\x02\x02\u03EE\u03F1\x07X\x02\x02\u03EF\u03F1\x07" +
		"\x1C\x02\x02\u03F0\u03EB\x03\x02\x02\x02\u03F0\u03EC\x03\x02\x02\x02\u03F0" +
		"\u03ED\x03\x02\x02\x02\u03F0\u03EE\x03\x02\x02\x02\u03F0\u03EF\x03\x02" +
		"\x02\x02\u03F1o\x03\x02\x02\x02\u03F2\u03F3\x07\x16\x02\x02\u03F3\u03F4" +
		"\x05^0\x02\u03F4\u03F6\x05d3\x02\u03F5\u03F7\x05r:\x02\u03F6\u03F5\x03" +
		"\x02\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7q\x03\x02\x02\x02\u03F8" +
		"\u03F9\x07\x1A\x02\x02\u03F9\u03FD\x05d3\x02\u03FA\u03FB\x07\x1A\x02\x02" +
		"\u03FB\u03FD\x05P)\x02\u03FC\u03F8\x03\x02\x02\x02\u03FC\u03FA\x03\x02" +
		"\x02\x02\u03FDs\x03\x02\x02\x02\u03FE\u03FF\x07\x12\x02\x02\u03FF\u0400" +
		"\x05X-\x02\u0400\u0401\x07\x13\x02\x02\u0401\u0402\x05^0\x02\u0402\u0403" +
		"\x05d3\x02\u0403u\x03\x02\x02\x02\u0404\u0407\x07T\x02\x02\u0405\u0407" +
		"\x05x=\x02\u0406\u0404\x03\x02\x02\x02\u0406\u0405\x03\x02\x02\x02\u0407" +
		"w\x03\x02\x02\x02\u0408\u0409\t\b\x02\x02\u0409y\x03\x02\x02\x02\x84}" +
		"\x86\x8C\x90\x98\xA0\xB0\xB8\xCA\xCE\xD4\xDB\xDF\xE9\xEC\xF7\xFA\xFE\u010D" +
		"\u0111\u0113\u0121\u0125\u0127\u0130\u013A\u0143\u014B\u014D\u0150\u0160" +
		"\u0169\u0171\u0178\u017E\u0185\u018A\u0196\u019A\u01A1\u01A7\u01AF\u01B3" +
		"\u01CA\u01CD\u01D1\u01D8\u01DB\u01DD\u01E5\u01ED\u01F6\u01FA\u0202\u0205" +
		"\u020A\u0212\u0216\u021A\u0224\u0229\u0231\u0234\u023C\u0240\u0242\u0249" +
		"\u0250\u0257\u025E\u0265\u026C\u0277\u027B\u027D\u0280\u0285\u028E\u0293" +
		"\u029C\u02A0\u02A2\u02A5\u02AA\u02B2\u02BA\u02C2\u02C6\u02CC\u02D6\u02DE" +
		"\u02E9\u02EE\u0300\u0305\u0312\u031A\u031D\u0329\u0332\u0335\u0339\u0341" +
		"\u0345\u0347\u034D\u0351\u035F\u0369\u0371\u0374\u0396\u0398\u03A1\u03A4" +
		"\u03AD\u03B0\u03B3\u03B8\u03BC\u03C2\u03CC\u03D0\u03DD\u03E2\u03E9\u03F0" +
		"\u03F6\u03FC\u0406";
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
	public COLON(): TerminalNode { return this.getToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public QUEST(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUEST, 0); }
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


export class StateParamContext extends ParserRuleContext {
	public _mut!: Token;
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public MUT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stateParam; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateParam) {
			listener.enterStateParam(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateParam) {
			listener.exitStateParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateParam) {
			return visitor.visitStateParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnParamsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnParams; }
	public copyFrom(ctx: FnParamsContext): void {
		super.copyFrom(ctx);
	}
}
export class PureParamsContext extends FnParamsContext {
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
	constructor(ctx: FnParamsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterPureParams) {
			listener.enterPureParams(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitPureParams) {
			listener.exitPureParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitPureParams) {
			return visitor.visitPureParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StateParamsContext extends FnParamsContext {
	public _stateful!: StateParamContext;
	public _param!: ParamContext;
	public _params: ParamContext[] = [];
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public stateParam(): StateParamContext | undefined {
		return this.tryGetRuleContext(0, StateParamContext);
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
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	constructor(ctx: FnParamsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateParams) {
			listener.enterStateParams(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateParams) {
			listener.exitStateParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateParams) {
			return visitor.visitStateParams(this);
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
	public COLON(): TerminalNode { return this.getToken(CWScriptParser.COLON, 0); }
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
	public _tup!: Token;
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
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL, 0); }
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
	public _tup!: Token;
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
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL, 0); }
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
export class InstantiateTContext extends TypeExprContext {
	public INSTANTIATE(): TerminalNode { return this.getToken(CWScriptParser.INSTANTIATE, 0); }
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public typePath(): TypePathContext {
		return this.getRuleContext(0, TypePathContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInstantiateT) {
			listener.enterInstantiateT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInstantiateT) {
			listener.exitInstantiateT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInstantiateT) {
			return visitor.visitInstantiateT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecTContext extends TypeExprContext {
	public EXEC(): TerminalNode { return this.getToken(CWScriptParser.EXEC, 0); }
	public typeVariant(): TypeVariantContext {
		return this.getRuleContext(0, TypeVariantContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecT) {
			listener.enterExecT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecT) {
			listener.exitExecT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecT) {
			return visitor.visitExecT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QueryTContext extends TypeExprContext {
	public QUERY(): TerminalNode { return this.getToken(CWScriptParser.QUERY, 0); }
	public typeVariant(): TypeVariantContext {
		return this.getRuleContext(0, TypeVariantContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryT) {
			listener.enterQueryT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryT) {
			listener.exitQueryT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryT) {
			return visitor.visitQueryT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MutTContext extends TypeExprContext {
	public MUT(): TerminalNode { return this.getToken(CWScriptParser.MUT, 0); }
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMutT) {
			listener.enterMutT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMutT) {
			listener.exitMutT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMutT) {
			return visitor.visitMutT(this);
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


export class CallOptsContext extends ParserRuleContext {
	public _memberVal!: MemberValContext;
	public _options: MemberValContext[] = [];
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
	public get ruleIndex(): number { return CWScriptParser.RULE_callOpts; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterCallOpts) {
			listener.enterCallOpts(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitCallOpts) {
			listener.exitCallOpts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitCallOpts) {
			return visitor.visitCallOpts(this);
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
export class LetStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public letStmt_(): LetStmt_Context {
		return this.getRuleContext(0, LetStmt_Context);
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
	public _memberVal!: MemberValContext;
	public _options: MemberValContext[] = [];
	public EXEC_NOW(): TerminalNode { return this.getToken(CWScriptParser.EXEC_NOW, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
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
	public _memberVal!: MemberValContext;
	public _options: MemberValContext[] = [];
	public INSTANTIATE_NOW(): TerminalNode { return this.getToken(CWScriptParser.INSTANTIATE_NOW, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
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
	public _rhs!: TypeExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IS(): TerminalNode { return this.getToken(CWScriptParser.IS, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
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
	public _lhs!: ExprContext;
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
	public FAIL(): TerminalNode { return this.getToken(CWScriptParser.FAIL, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_closureParams; }
	public copyFrom(ctx: ClosureParamsContext): void {
		super.copyFrom(ctx);
	}
}
export class UntypedClosureParamsContext extends ClosureParamsContext {
	public _ident!: IdentContext;
	public _params: IdentContext[] = [];
	public BAR(): TerminalNode[];
	public BAR(i: number): TerminalNode;
	public BAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.BAR);
		} else {
			return this.getToken(CWScriptParser.BAR, i);
		}
	}
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
	constructor(ctx: ClosureParamsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterUntypedClosureParams) {
			listener.enterUntypedClosureParams(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitUntypedClosureParams) {
			listener.exitUntypedClosureParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitUntypedClosureParams) {
			return visitor.visitUntypedClosureParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypedClosureParamsContext extends ClosureParamsContext {
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
	constructor(ctx: ClosureParamsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypedClosureParams) {
			listener.enterTypedClosureParams(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypedClosureParams) {
			listener.exitTypedClosureParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypedClosureParams) {
			return visitor.visitTypedClosureParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClosureContext extends ParserRuleContext {
	public _params!: ClosureParamsContext;
	public _retTy!: TypeExprContext;
	public _body!: BlockContext;
	public _body_stmt!: StmtContext;
	public closureParams(): ClosureParamsContext | undefined {
		return this.tryGetRuleContext(0, ClosureParamsContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
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
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RETURN, 0); }
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


