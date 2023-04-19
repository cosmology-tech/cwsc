"use strict";
// Generated from ./grammar/CWScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT
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
exports.AnnotContext = exports.FnDefnContext = exports.TypeAliasDefnContext = exports.StructDefnContext = exports.TypeDefnContext = exports.TypeVariantContext = exports.TypePathContext = exports.TypeLensContext = exports.DefnTContext = exports.TupleTContext = exports.ListTContext = exports.OptionTContext = exports.LensTContext = exports.VariantTContext = exports.PathTContext = exports.TypeExprContext = exports.Variant_unitContext = exports.Variant_structContext = exports.Variant_Context = exports.EnumDefnContext = exports.ReplyDefnContext = exports.QueryDeclContext = exports.QueryDefnContext = exports.ExecDeclContext = exports.ExecDefnContext = exports.InstantiateDeclContext = exports.InstantiateDefnContext = exports.MapKeyDefnContext = exports.StateDefn_MapContext = exports.StateDefn_ItemContext = exports.StateDefnContext = exports.StateDefnBlockContext = exports.EventDefnBlockContext = exports.EventDefnContext = exports.ErrorDefnBlockContext = exports.ErrorDefnContext = exports.StructDefn_fnContext = exports.FnParamsContext = exports.ParamListContext = exports.ParamContext = exports.ContractItemContext = exports.ImportItemsStmtContext = exports.ImportAllStmtContext = exports.ImportStmtContext = exports.ContractBlockContext = exports.InterfaceDefnContext = exports.ContractDefnContext = exports.TopLevelStmtContext = exports.SourceFileContext = exports.CWScriptParser = void 0;
exports.FailExprContext = exports.QueryNowExprContext = exports.IfExprContext = exports.OrExprContext = exports.AndExprContext = exports.NotExprContext = exports.TryCatchElseExprContext = exports.ShortTryExprContext = exports.InExprContext = exports.IsExprContext = exports.NoneCheckExprContext = exports.EqExprContext = exports.CompExprContext = exports.AddExprContext = exports.MulExprContext = exports.TypeFnCallExprContext = exports.FnCallExprContext = exports.TypeDColonExprContext = exports.DColonExprContext = exports.IndexExprContext = exports.AsExprContext = exports.DotExprContext = exports.GroupedExprContext = exports.ExprContext = exports.IndexLHSContext = exports.DotLHSContext = exports.IdentLHSContext = exports.AssignLHSContext = exports.AssignStmt_Context = exports.TupleBindingContext = exports.StructBindingContext = exports.IdentBindingContext = exports.Let_bindingContext = exports.IdentBinding_Context = exports.ConstStmt_Context = exports.LetStmt_Context = exports.ExprStmtContext = exports.FailStmtContext = exports.ReturnStmtContext = exports.EmitStmtContext = exports.InstantiateStmtContext = exports.DelegateExecStmtContext = exports.ExecStmtContext = exports.ForStmtContext = exports.IfStmtContext = exports.AssignStmtContext = exports.ConstStmtContext = exports.LetStmtContext = exports.StmtContext = exports.CallOptionsContext = void 0;
exports.ReservedKeywordContext = exports.IdentContext = exports.ForStmt_Context = exports.ElseClauseContext = exports.IfStmt_Context = exports.NoneLitContext = exports.BoolLitContext = exports.DecLitContext = exports.IntLitContext = exports.StringLitContext = exports.LiteralContext = exports.MemberValContext = exports.ArgContext = exports.CatchBindContext = exports.CatchContext = exports.CatchClauseContext = exports.TryCatchElseExpr_Context = exports.BlockContext = exports.ClosureContext = exports.ClosureParamsContext = exports.Grouped2ExprContext = exports.IdentExprContext = exports.LiteralExprContext = exports.UnitVariantExprContext = exports.StructExprContext = exports.TupleExprContext = exports.ClosureExprContext = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class CWScriptParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(CWScriptParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return CWScriptParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "CWScriptParser.g4"; }
    // @Override
    get ruleNames() { return CWScriptParser.ruleNames; }
    // @Override
    get serializedATN() { return CWScriptParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    sourceFile() {
        let _localctx = new SourceFileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, CWScriptParser.RULE_sourceFile);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    topLevelStmt() {
        let _localctx = new TopLevelStmtContext(this._ctx, this.state);
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    contractDefn() {
        let _localctx = new ContractDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, CWScriptParser.RULE_contractDefn);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceDefn() {
        let _localctx = new InterfaceDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, CWScriptParser.RULE_interfaceDefn);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    contractBlock() {
        let _localctx = new ContractBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, CWScriptParser.RULE_contractBlock);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    importStmt() {
        let _localctx = new ImportStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, CWScriptParser.RULE_importStmt);
        let _la;
        try {
            this.state = 182;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
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
                            _localctx._src = this.match(CWScriptParser.StringLiteral);
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
                                    _localctx._ident = this.ident();
                                    _localctx._items.push(_localctx._ident);
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
                                            _localctx._ident = this.ident();
                                            _localctx._items.push(_localctx._ident);
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
                            _localctx._src = this.match(CWScriptParser.StringLiteral);
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    contractItem() {
        let _localctx = new ContractItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, CWScriptParser.RULE_contractItem);
        try {
            this.state = 200;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    param() {
        let _localctx = new ParamContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, CWScriptParser.RULE_param);
        let _la;
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
                this.state = 212;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.COLON) {
                    {
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
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    paramList() {
        let _localctx = new ParamListContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, CWScriptParser.RULE_paramList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 214;
                this.param();
                this.state = 219;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CWScriptParser.COMMA) {
                    {
                        {
                            this.state = 215;
                            this.match(CWScriptParser.COMMA);
                            this.state = 216;
                            this.param();
                        }
                    }
                    this.state = 221;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fnParams() {
        let _localctx = new FnParamsContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, CWScriptParser.RULE_fnParams);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 222;
                this.match(CWScriptParser.LPAREN);
                this.state = 231;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
                    {
                        {
                            this.state = 223;
                            _localctx._param = this.param();
                            _localctx._params.push(_localctx._param);
                        }
                        this.state = 228;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.COMMA) {
                            {
                                {
                                    this.state = 224;
                                    this.match(CWScriptParser.COMMA);
                                    this.state = 225;
                                    _localctx._param = this.param();
                                    _localctx._params.push(_localctx._param);
                                }
                            }
                            this.state = 230;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 233;
                this.match(CWScriptParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    structDefn_fn() {
        let _localctx = new StructDefn_fnContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, CWScriptParser.RULE_structDefn_fn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 235;
                    _localctx._name = this.ident();
                }
                {
                    this.state = 236;
                    _localctx._params = this.fnParams();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    errorDefn() {
        let _localctx = new ErrorDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, CWScriptParser.RULE_errorDefn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this.match(CWScriptParser.ERROR);
                this.state = 239;
                _localctx._defn = this.structDefn_fn();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    errorDefnBlock() {
        let _localctx = new ErrorDefnBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, CWScriptParser.RULE_errorDefnBlock);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 241;
                this.match(CWScriptParser.ERROR);
                this.state = 242;
                this.match(CWScriptParser.LBRACE);
                this.state = 254;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
                    {
                        {
                            this.state = 243;
                            _localctx._structDefn_fn = this.structDefn_fn();
                            _localctx._defns.push(_localctx._structDefn_fn);
                        }
                        this.state = 248;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 244;
                                        this.match(CWScriptParser.COMMA);
                                        this.state = 245;
                                        _localctx._structDefn_fn = this.structDefn_fn();
                                        _localctx._defns.push(_localctx._structDefn_fn);
                                    }
                                }
                            }
                            this.state = 250;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                        }
                        this.state = 252;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CWScriptParser.COMMA) {
                            {
                                this.state = 251;
                                this.match(CWScriptParser.COMMA);
                            }
                        }
                    }
                }
                this.state = 256;
                this.match(CWScriptParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    eventDefn() {
        let _localctx = new EventDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, CWScriptParser.RULE_eventDefn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 258;
                this.match(CWScriptParser.EVENT);
                this.state = 259;
                this.structDefn_fn();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    eventDefnBlock() {
        let _localctx = new EventDefnBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, CWScriptParser.RULE_eventDefnBlock);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 261;
                this.match(CWScriptParser.EVENT);
                this.state = 262;
                this.match(CWScriptParser.LBRACE);
                this.state = 274;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
                    {
                        {
                            this.state = 263;
                            _localctx._structDefn_fn = this.structDefn_fn();
                            _localctx._defns.push(_localctx._structDefn_fn);
                        }
                        this.state = 268;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 264;
                                        this.match(CWScriptParser.COMMA);
                                        this.state = 265;
                                        _localctx._structDefn_fn = this.structDefn_fn();
                                        _localctx._defns.push(_localctx._structDefn_fn);
                                    }
                                }
                            }
                            this.state = 270;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                        }
                        this.state = 272;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CWScriptParser.COMMA) {
                            {
                                this.state = 271;
                                this.match(CWScriptParser.COMMA);
                            }
                        }
                    }
                }
                this.state = 276;
                this.match(CWScriptParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stateDefnBlock() {
        let _localctx = new StateDefnBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, CWScriptParser.RULE_stateDefnBlock);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 278;
                this.match(CWScriptParser.STATE);
                this.state = 279;
                this.match(CWScriptParser.LBRACE);
                this.state = 283;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
                    {
                        {
                            this.state = 280;
                            _localctx._stateDefn = this.stateDefn();
                            _localctx._defns.push(_localctx._stateDefn);
                        }
                    }
                    this.state = 285;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 286;
                this.match(CWScriptParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stateDefn() {
        let _localctx = new StateDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, CWScriptParser.RULE_stateDefn);
        let _la;
        try {
            this.state = 312;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                case 1:
                    _localctx = new StateDefn_ItemContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 288;
                            _localctx._name = this.ident();
                        }
                        this.state = 289;
                        this.match(CWScriptParser.COLON);
                        {
                            this.state = 290;
                            _localctx._ty = this.typeExpr(0);
                        }
                        this.state = 293;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CWScriptParser.EQ) {
                            {
                                this.state = 291;
                                this.match(CWScriptParser.EQ);
                                {
                                    this.state = 292;
                                    _localctx._default = this.expr(0);
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
                            this.state = 295;
                            _localctx._name = this.ident();
                        }
                        this.state = 296;
                        this.match(CWScriptParser.LBRACK);
                        {
                            this.state = 297;
                            _localctx._mapKeyDefn = this.mapKeyDefn();
                            _localctx._mapKeys.push(_localctx._mapKeyDefn);
                        }
                        this.state = 302;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.COMMA) {
                            {
                                {
                                    this.state = 298;
                                    this.match(CWScriptParser.COMMA);
                                    {
                                        this.state = 299;
                                        _localctx._mapKeyDefn = this.mapKeyDefn();
                                        _localctx._mapKeys.push(_localctx._mapKeyDefn);
                                    }
                                }
                            }
                            this.state = 304;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 305;
                        this.match(CWScriptParser.RBRACK);
                        this.state = 306;
                        this.match(CWScriptParser.COLON);
                        {
                            this.state = 307;
                            _localctx._ty = this.typeExpr(0);
                        }
                        this.state = 310;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CWScriptParser.EQ) {
                            {
                                this.state = 308;
                                this.match(CWScriptParser.EQ);
                                {
                                    this.state = 309;
                                    _localctx._default = this.expr(0);
                                }
                            }
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    mapKeyDefn() {
        let _localctx = new MapKeyDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, CWScriptParser.RULE_mapKeyDefn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 317;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                    case 1:
                        {
                            {
                                this.state = 314;
                                _localctx._name = this.ident();
                            }
                            this.state = 315;
                            this.match(CWScriptParser.COLON);
                        }
                        break;
                }
                {
                    this.state = 319;
                    _localctx._ty = this.typeExpr(0);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    instantiateDefn() {
        let _localctx = new InstantiateDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, CWScriptParser.RULE_instantiateDefn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 321;
                this.match(CWScriptParser.HASH);
                this.state = 322;
                this.match(CWScriptParser.INSTANTIATE);
                this.state = 323;
                _localctx._params = this.fnParams();
                this.state = 324;
                _localctx._body = this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    instantiateDecl() {
        let _localctx = new InstantiateDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, CWScriptParser.RULE_instantiateDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 326;
                this.match(CWScriptParser.HASH);
                this.state = 327;
                this.match(CWScriptParser.INSTANTIATE);
                this.state = 328;
                _localctx._params = this.fnParams();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    execDefn() {
        let _localctx = new ExecDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, CWScriptParser.RULE_execDefn);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 330;
                this.match(CWScriptParser.EXEC);
                this.state = 332;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.MUL) {
                    {
                        this.state = 331;
                        _localctx._tup = this.match(CWScriptParser.MUL);
                    }
                }
                this.state = 334;
                this.match(CWScriptParser.HASH);
                this.state = 335;
                _localctx._name = this.ident();
                this.state = 336;
                _localctx._params = this.fnParams();
                this.state = 337;
                _localctx._body = this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    execDecl() {
        let _localctx = new ExecDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, CWScriptParser.RULE_execDecl);
        let _la;
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
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    queryDefn() {
        let _localctx = new QueryDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, CWScriptParser.RULE_queryDefn);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 347;
                this.match(CWScriptParser.QUERY);
                this.state = 348;
                this.match(CWScriptParser.HASH);
                this.state = 349;
                _localctx._name = this.ident();
                this.state = 350;
                _localctx._params = this.fnParams();
                this.state = 353;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.ARROW) {
                    {
                        this.state = 351;
                        this.match(CWScriptParser.ARROW);
                        this.state = 352;
                        _localctx._retTy = this.typeExpr(0);
                    }
                }
                this.state = 355;
                _localctx._body = this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    queryDecl() {
        let _localctx = new QueryDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, CWScriptParser.RULE_queryDecl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 357;
                this.match(CWScriptParser.QUERY);
                this.state = 358;
                this.match(CWScriptParser.HASH);
                this.state = 359;
                _localctx._name = this.ident();
                this.state = 360;
                _localctx._params = this.fnParams();
                this.state = 363;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.ARROW) {
                    {
                        this.state = 361;
                        this.match(CWScriptParser.ARROW);
                        this.state = 362;
                        _localctx._retTy = this.typeExpr(0);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    replyDefn() {
        let _localctx = new ReplyDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, CWScriptParser.RULE_replyDefn);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 365;
                this.match(CWScriptParser.REPLY);
                this.state = 368;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.DOT) {
                    {
                        this.state = 366;
                        this.match(CWScriptParser.DOT);
                        this.state = 367;
                        _localctx._on = this.ident();
                    }
                }
                this.state = 370;
                _localctx._name = this.ident();
                this.state = 371;
                _localctx._params = this.fnParams();
                this.state = 372;
                _localctx._body = this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumDefn() {
        let _localctx = new EnumDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, CWScriptParser.RULE_enumDefn);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 374;
                this.match(CWScriptParser.ENUM);
                {
                    this.state = 375;
                    _localctx._name = this.ident();
                }
                this.state = 376;
                this.match(CWScriptParser.LBRACE);
                this.state = 377;
                _localctx._variant_ = this.variant_();
                _localctx._variants.push(_localctx._variant_);
                this.state = 384;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CWScriptParser.HASH) {
                    {
                        {
                            {
                                this.state = 378;
                                _localctx._variant_ = this.variant_();
                                _localctx._variants.push(_localctx._variant_);
                            }
                            this.state = 380;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === CWScriptParser.COMMA) {
                                {
                                    this.state = 379;
                                    this.match(CWScriptParser.COMMA);
                                }
                            }
                        }
                    }
                    this.state = 386;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 387;
                this.match(CWScriptParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variant_() {
        let _localctx = new Variant_Context(this._ctx, this.state);
        this.enterRule(_localctx, 52, CWScriptParser.RULE_variant_);
        try {
            this.state = 391;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 389;
                        this.variant_struct();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 390;
                        this.variant_unit();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variant_struct() {
        let _localctx = new Variant_structContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, CWScriptParser.RULE_variant_struct);
        let _la;
        try {
            this.state = 409;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 393;
                        this.match(CWScriptParser.HASH);
                        {
                            this.state = 394;
                            _localctx._name = this.ident();
                        }
                        this.state = 395;
                        this.match(CWScriptParser.LPAREN);
                        this.state = 397;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
                            {
                                this.state = 396;
                                _localctx._members = this.paramList();
                            }
                        }
                        this.state = 399;
                        this.match(CWScriptParser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 401;
                        this.match(CWScriptParser.HASH);
                        {
                            this.state = 402;
                            _localctx._name = this.ident();
                        }
                        this.state = 403;
                        this.match(CWScriptParser.LBRACE);
                        this.state = 405;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
                            {
                                this.state = 404;
                                _localctx._members = this.paramList();
                            }
                        }
                        this.state = 407;
                        this.match(CWScriptParser.RBRACE);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variant_unit() {
        let _localctx = new Variant_unitContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, CWScriptParser.RULE_variant_unit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 411;
                this.match(CWScriptParser.HASH);
                {
                    this.state = 412;
                    _localctx._name = this.ident();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeExpr(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new TypeExprContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 58;
        this.enterRecursionRule(_localctx, 58, CWScriptParser.RULE_typeExpr, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 431;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                    case 1:
                        {
                            _localctx = new PathTContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 415;
                            this.typePath();
                        }
                        break;
                    case 2:
                        {
                            _localctx = new VariantTContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 416;
                            this.typeVariant();
                        }
                        break;
                    case 3:
                        {
                            _localctx = new LensTContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 417;
                            this.typeLens();
                        }
                        break;
                    case 4:
                        {
                            _localctx = new TupleTContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 418;
                            this.match(CWScriptParser.LBRACK);
                            this.state = 427;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LBRACK - 32)))) !== 0) || _la === CWScriptParser.Ident) {
                                {
                                    this.state = 419;
                                    _localctx._typeExpr = this.typeExpr(0);
                                    _localctx._items.push(_localctx._typeExpr);
                                    this.state = 424;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === CWScriptParser.COMMA) {
                                        {
                                            {
                                                this.state = 420;
                                                this.match(CWScriptParser.COMMA);
                                                this.state = 421;
                                                _localctx._typeExpr = this.typeExpr(0);
                                                _localctx._items.push(_localctx._typeExpr);
                                            }
                                        }
                                        this.state = 426;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 429;
                            this.match(CWScriptParser.RBRACK);
                        }
                        break;
                    case 5:
                        {
                            _localctx = new DefnTContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 430;
                            this.typeDefn();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 443;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 441;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new OptionTContext(new TypeExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
                                        this.state = 433;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 434;
                                        this.match(CWScriptParser.QUEST);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ListTContext(new TypeExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
                                        this.state = 435;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 436;
                                        this.match(CWScriptParser.LBRACK);
                                        this.state = 438;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CWScriptParser.IntLiteral) {
                                            {
                                                this.state = 437;
                                                _localctx._len = this.match(CWScriptParser.IntLiteral);
                                            }
                                        }
                                        this.state = 440;
                                        this.match(CWScriptParser.RBRACK);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 445;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeLens() {
        let _localctx = new TypeLensContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, CWScriptParser.RULE_typeLens);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 446;
                _localctx._scope = this._input.LT(1);
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MUT))) !== 0))) {
                    _localctx._scope = this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 447;
                this.typePath();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typePath() {
        let _localctx = new TypePathContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, CWScriptParser.RULE_typePath);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 449;
                    _localctx._ident = this.ident();
                    _localctx._segments.push(_localctx._ident);
                }
                this.state = 454;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 450;
                                this.match(CWScriptParser.DOT);
                                this.state = 451;
                                _localctx._ident = this.ident();
                                _localctx._segments.push(_localctx._ident);
                            }
                        }
                    }
                    this.state = 456;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeVariant() {
        let _localctx = new TypeVariantContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, CWScriptParser.RULE_typeVariant);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 457;
                this.typePath();
                this.state = 462;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.LPAREN) {
                    {
                        this.state = 458;
                        this.match(CWScriptParser.LPAREN);
                        this.state = 459;
                        this.expr(0);
                        this.state = 460;
                        this.match(CWScriptParser.RPAREN);
                    }
                }
                {
                    this.state = 464;
                    this.match(CWScriptParser.DOT);
                    this.state = 465;
                    this.match(CWScriptParser.HASH);
                    this.state = 466;
                    _localctx._variant = this.ident();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeDefn() {
        let _localctx = new TypeDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, CWScriptParser.RULE_typeDefn);
        try {
            this.state = 471;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CWScriptParser.STRUCT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 468;
                        this.structDefn();
                    }
                    break;
                case CWScriptParser.ENUM:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 469;
                        this.enumDefn();
                    }
                    break;
                case CWScriptParser.TYPE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 470;
                        this.typeAliasDefn();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    structDefn() {
        let _localctx = new StructDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, CWScriptParser.RULE_structDefn);
        let _la;
        try {
            let _alt;
            this.state = 507;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 473;
                        this.match(CWScriptParser.STRUCT);
                        this.state = 475;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
                            {
                                this.state = 474;
                                _localctx._name = this.ident();
                            }
                        }
                        this.state = 477;
                        this.match(CWScriptParser.LPAREN);
                        this.state = 486;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
                            {
                                {
                                    this.state = 478;
                                    _localctx._param = this.param();
                                    _localctx._members.push(_localctx._param);
                                }
                                this.state = 483;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === CWScriptParser.COMMA) {
                                    {
                                        {
                                            this.state = 479;
                                            this.match(CWScriptParser.COMMA);
                                            {
                                                this.state = 480;
                                                _localctx._param = this.param();
                                                _localctx._members.push(_localctx._param);
                                            }
                                        }
                                    }
                                    this.state = 485;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 488;
                        this.match(CWScriptParser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 489;
                        this.match(CWScriptParser.STRUCT);
                        this.state = 491;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
                            {
                                this.state = 490;
                                _localctx._name = this.ident();
                            }
                        }
                        this.state = 493;
                        this.match(CWScriptParser.LBRACE);
                        {
                            {
                                this.state = 494;
                                _localctx._param = this.param();
                                _localctx._members.push(_localctx._param);
                            }
                            this.state = 499;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 495;
                                            this.match(CWScriptParser.COMMA);
                                            {
                                                this.state = 496;
                                                _localctx._param = this.param();
                                                _localctx._members.push(_localctx._param);
                                            }
                                        }
                                    }
                                }
                                this.state = 501;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
                            }
                            this.state = 503;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === CWScriptParser.COMMA) {
                                {
                                    this.state = 502;
                                    this.match(CWScriptParser.COMMA);
                                }
                            }
                        }
                        this.state = 505;
                        this.match(CWScriptParser.RBRACE);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeAliasDefn() {
        let _localctx = new TypeAliasDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, CWScriptParser.RULE_typeAliasDefn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 509;
                this.match(CWScriptParser.TYPE);
                {
                    this.state = 510;
                    _localctx._name = this.ident();
                }
                this.state = 511;
                this.match(CWScriptParser.EQ);
                {
                    this.state = 512;
                    _localctx._value = this.typeExpr(0);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fnDefn() {
        let _localctx = new FnDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, CWScriptParser.RULE_fnDefn);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 514;
                this.match(CWScriptParser.FN);
                {
                    this.state = 515;
                    _localctx._name = this.ident();
                }
                this.state = 517;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.BANG) {
                    {
                        this.state = 516;
                        _localctx._fallible = this.match(CWScriptParser.BANG);
                    }
                }
                this.state = 519;
                _localctx._params = this.fnParams();
                this.state = 522;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.ARROW) {
                    {
                        this.state = 520;
                        this.match(CWScriptParser.ARROW);
                        this.state = 521;
                        _localctx._retTy = this.typeExpr(0);
                    }
                }
                this.state = 524;
                _localctx._body = this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annot() {
        let _localctx = new AnnotContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, CWScriptParser.RULE_annot);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 526;
                this.match(CWScriptParser.AT);
                {
                    this.state = 527;
                    _localctx._path = this.typePath();
                }
                this.state = 533;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                    case 1:
                        {
                            this.state = 528;
                            this.match(CWScriptParser.LPAREN);
                            this.state = 530;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BANG - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (CWScriptParser.Ident - 83)) | (1 << (CWScriptParser.StringLiteral - 83)) | (1 << (CWScriptParser.IntLiteral - 83)) | (1 << (CWScriptParser.DecLiteral - 83)) | (1 << (CWScriptParser.BoolLiteral - 83)))) !== 0)) {
                                {
                                    this.state = 529;
                                    _localctx._arg = this.arg();
                                    _localctx._args.push(_localctx._arg);
                                }
                            }
                            this.state = 532;
                            this.match(CWScriptParser.RPAREN);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    callOptions() {
        let _localctx = new CallOptionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, CWScriptParser.RULE_callOptions);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 535;
                    this.match(CWScriptParser.LBRACE);
                    this.state = 547;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
                        {
                            {
                                this.state = 536;
                                this.memberVal();
                            }
                            this.state = 541;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 537;
                                            this.match(CWScriptParser.COMMA);
                                            this.state = 538;
                                            this.memberVal();
                                        }
                                    }
                                }
                                this.state = 543;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                            }
                            this.state = 545;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === CWScriptParser.COMMA) {
                                {
                                    this.state = 544;
                                    this.match(CWScriptParser.COMMA);
                                }
                            }
                        }
                    }
                    this.state = 549;
                    this.match(CWScriptParser.RBRACE);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stmt() {
        let _localctx = new StmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, CWScriptParser.RULE_stmt);
        let _la;
        try {
            this.state = 685;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 86, this._ctx)) {
                case 1:
                    _localctx = new LetStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 554;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.AT) {
                            {
                                {
                                    this.state = 551;
                                    _localctx._annot = this.annot();
                                    _localctx._ann.push(_localctx._annot);
                                }
                            }
                            this.state = 556;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 557;
                        this.letStmt_();
                        this.state = 559;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 62, this._ctx)) {
                            case 1:
                                {
                                    this.state = 558;
                                    this.match(CWScriptParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    _localctx = new ConstStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 564;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.AT) {
                            {
                                {
                                    this.state = 561;
                                    _localctx._annot = this.annot();
                                    _localctx._ann.push(_localctx._annot);
                                }
                            }
                            this.state = 566;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 567;
                        this.constStmt_();
                        this.state = 569;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                            case 1:
                                {
                                    this.state = 568;
                                    this.match(CWScriptParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    _localctx = new AssignStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 574;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.AT) {
                            {
                                {
                                    this.state = 571;
                                    _localctx._annot = this.annot();
                                    _localctx._ann.push(_localctx._annot);
                                }
                            }
                            this.state = 576;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 577;
                        this.assignStmt_();
                        this.state = 579;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 66, this._ctx)) {
                            case 1:
                                {
                                    this.state = 578;
                                    this.match(CWScriptParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    _localctx = new IfStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 584;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.AT) {
                            {
                                {
                                    this.state = 581;
                                    _localctx._annot = this.annot();
                                    _localctx._ann.push(_localctx._annot);
                                }
                            }
                            this.state = 586;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 587;
                        this.ifStmt_();
                        this.state = 589;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                            case 1:
                                {
                                    this.state = 588;
                                    this.match(CWScriptParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 5:
                    _localctx = new ForStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 594;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.AT) {
                            {
                                {
                                    this.state = 591;
                                    _localctx._annot = this.annot();
                                    _localctx._ann.push(_localctx._annot);
                                }
                            }
                            this.state = 596;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 597;
                        this.forStmt_();
                        this.state = 599;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                            case 1:
                                {
                                    this.state = 598;
                                    this.match(CWScriptParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 6:
                    _localctx = new ExecStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 604;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.AT) {
                            {
                                {
                                    this.state = 601;
                                    _localctx._annot = this.annot();
                                    _localctx._ann.push(_localctx._annot);
                                }
                            }
                            this.state = 606;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 607;
                        this.match(CWScriptParser.EXEC_NOW);
                        this.state = 608;
                        this.expr(0);
                        this.state = 610;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                            case 1:
                                {
                                    this.state = 609;
                                    _localctx._options = this.callOptions();
                                }
                                break;
                        }
                        this.state = 613;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                            case 1:
                                {
                                    this.state = 612;
                                    this.match(CWScriptParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 7:
                    _localctx = new DelegateExecStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 618;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.AT) {
                            {
                                {
                                    this.state = 615;
                                    _localctx._annot = this.annot();
                                    _localctx._ann.push(_localctx._annot);
                                }
                            }
                            this.state = 620;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 621;
                        this.match(CWScriptParser.DELEGATE_EXEC);
                        this.state = 622;
                        this.match(CWScriptParser.HASH);
                        this.state = 623;
                        this.expr(0);
                        this.state = 625;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                            case 1:
                                {
                                    this.state = 624;
                                    this.match(CWScriptParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 8:
                    _localctx = new InstantiateStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 630;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.AT) {
                            {
                                {
                                    this.state = 627;
                                    _localctx._annot = this.annot();
                                    _localctx._ann.push(_localctx._annot);
                                }
                            }
                            this.state = 632;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 633;
                        this.match(CWScriptParser.INSTANTIATE_NOW);
                        this.state = 635;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CWScriptParser.HASH) {
                            {
                                this.state = 634;
                                _localctx._new = this.match(CWScriptParser.HASH);
                            }
                        }
                        this.state = 637;
                        this.expr(0);
                        this.state = 639;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 78, this._ctx)) {
                            case 1:
                                {
                                    this.state = 638;
                                    _localctx._options = this.callOptions();
                                }
                                break;
                        }
                        this.state = 642;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                            case 1:
                                {
                                    this.state = 641;
                                    this.match(CWScriptParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 9:
                    _localctx = new EmitStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 647;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.AT) {
                            {
                                {
                                    this.state = 644;
                                    _localctx._annot = this.annot();
                                    _localctx._ann.push(_localctx._annot);
                                }
                            }
                            this.state = 649;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 650;
                        this.match(CWScriptParser.EMIT);
                        this.state = 651;
                        this.expr(0);
                        this.state = 653;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 81, this._ctx)) {
                            case 1:
                                {
                                    this.state = 652;
                                    this.match(CWScriptParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 10:
                    _localctx = new ReturnStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 658;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.AT) {
                            {
                                {
                                    this.state = 655;
                                    _localctx._annot = this.annot();
                                    _localctx._ann.push(_localctx._annot);
                                }
                            }
                            this.state = 660;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 661;
                        this.match(CWScriptParser.RETURN);
                        this.state = 662;
                        this.expr(0);
                        this.state = 663;
                        this.match(CWScriptParser.SEMI);
                    }
                    break;
                case 11:
                    _localctx = new FailStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 668;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.AT) {
                            {
                                {
                                    this.state = 665;
                                    _localctx._annot = this.annot();
                                    _localctx._ann.push(_localctx._annot);
                                }
                            }
                            this.state = 670;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 671;
                        this.match(CWScriptParser.FAIL);
                        this.state = 672;
                        this.expr(0);
                        this.state = 673;
                        this.match(CWScriptParser.SEMI);
                    }
                    break;
                case 12:
                    _localctx = new ExprStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 678;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.AT) {
                            {
                                {
                                    this.state = 675;
                                    _localctx._annot = this.annot();
                                    _localctx._ann.push(_localctx._annot);
                                }
                            }
                            this.state = 680;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 681;
                        this.expr(0);
                        this.state = 683;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                            case 1:
                                {
                                    this.state = 682;
                                    this.match(CWScriptParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    letStmt_() {
        let _localctx = new LetStmt_Context(this._ctx, this.state);
        this.enterRule(_localctx, 80, CWScriptParser.RULE_letStmt_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 687;
                this.match(CWScriptParser.LET);
                this.state = 688;
                this.let_binding();
                this.state = 691;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                    case 1:
                        {
                            this.state = 689;
                            this.match(CWScriptParser.EQ);
                            this.state = 690;
                            this.expr(0);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constStmt_() {
        let _localctx = new ConstStmt_Context(this._ctx, this.state);
        this.enterRule(_localctx, 82, CWScriptParser.RULE_constStmt_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 693;
                this.match(CWScriptParser.CONST);
                this.state = 694;
                this.ident();
                this.state = 695;
                this.match(CWScriptParser.EQ);
                this.state = 696;
                this.expr(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identBinding_() {
        let _localctx = new IdentBinding_Context(this._ctx, this.state);
        this.enterRule(_localctx, 84, CWScriptParser.RULE_identBinding_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 698;
                    _localctx._name = this.ident();
                }
                this.state = 701;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
                    case 1:
                        {
                            this.state = 699;
                            this.match(CWScriptParser.COLON);
                            this.state = 700;
                            _localctx._ty = this.typeExpr(0);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    let_binding() {
        let _localctx = new Let_bindingContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, CWScriptParser.RULE_let_binding);
        let _la;
        try {
            this.state = 725;
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
                        this.state = 703;
                        this.identBinding_();
                    }
                    break;
                case CWScriptParser.LBRACE:
                    _localctx = new StructBindingContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 704;
                        this.match(CWScriptParser.LBRACE);
                        {
                            this.state = 705;
                            _localctx._identBinding_ = this.identBinding_();
                            _localctx._bindings.push(_localctx._identBinding_);
                        }
                        this.state = 709;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.COMMA) {
                            {
                                {
                                    this.state = 706;
                                    this.match(CWScriptParser.COMMA);
                                }
                            }
                            this.state = 711;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 712;
                        this.match(CWScriptParser.RBRACE);
                    }
                    break;
                case CWScriptParser.LBRACK:
                    _localctx = new TupleBindingContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 714;
                        this.match(CWScriptParser.LBRACK);
                        {
                            this.state = 715;
                            _localctx._identBinding_ = this.identBinding_();
                            _localctx._bindings.push(_localctx._identBinding_);
                        }
                        this.state = 720;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.COMMA) {
                            {
                                {
                                    this.state = 716;
                                    this.match(CWScriptParser.COMMA);
                                    this.state = 717;
                                    _localctx._identBinding_ = this.identBinding_();
                                    _localctx._bindings.push(_localctx._identBinding_);
                                }
                            }
                            this.state = 722;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 723;
                        this.match(CWScriptParser.RBRACK);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignStmt_() {
        let _localctx = new AssignStmt_Context(this._ctx, this.state);
        this.enterRule(_localctx, 88, CWScriptParser.RULE_assignStmt_);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 727;
                    _localctx._lhs = this.assignLHS();
                }
                {
                    this.state = 728;
                    _localctx._assignOp = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CWScriptParser.EQ - 65)) | (1 << (CWScriptParser.PLUS_EQ - 65)) | (1 << (CWScriptParser.MINUS_EQ - 65)) | (1 << (CWScriptParser.MUL_EQ - 65)) | (1 << (CWScriptParser.DIV_EQ - 65)) | (1 << (CWScriptParser.MOD_EQ - 65)))) !== 0))) {
                        _localctx._assignOp = this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                }
                {
                    this.state = 729;
                    _localctx._rhs = this.expr(0);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignLHS() {
        let _localctx = new AssignLHSContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, CWScriptParser.RULE_assignLHS);
        let _la;
        try {
            this.state = 748;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                case 1:
                    _localctx = new IdentLHSContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 731;
                        _localctx._symbol = this.ident();
                    }
                    break;
                case 2:
                    _localctx = new DotLHSContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 732;
                            _localctx._obj = this.expr(0);
                        }
                        this.state = 733;
                        this.match(CWScriptParser.DOT);
                        {
                            this.state = 734;
                            _localctx._member = this.ident();
                        }
                    }
                    break;
                case 3:
                    _localctx = new IndexLHSContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        {
                            this.state = 736;
                            _localctx._obj = this.expr(0);
                        }
                        this.state = 737;
                        this.match(CWScriptParser.LBRACK);
                        {
                            this.state = 738;
                            _localctx._expr = this.expr(0);
                            _localctx._args.push(_localctx._expr);
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
                                    _localctx._expr = this.expr(0);
                                    _localctx._args.push(_localctx._expr);
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
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expr(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExprContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 92;
        this.enterRecursionRule(_localctx, 92, CWScriptParser.RULE_expr, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 820;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                    case 1:
                        {
                            _localctx = new GroupedExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 751;
                            this.match(CWScriptParser.LPAREN);
                            this.state = 752;
                            this.expr(0);
                            this.state = 753;
                            this.match(CWScriptParser.RPAREN);
                        }
                        break;
                    case 2:
                        {
                            _localctx = new TypeDColonExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 755;
                            this.typeExpr(0);
                            this.state = 756;
                            this.match(CWScriptParser.D_COLON);
                            {
                                this.state = 757;
                                _localctx._member = this.ident();
                            }
                        }
                        break;
                    case 3:
                        {
                            _localctx = new TypeFnCallExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 759;
                            this.typeExpr(0);
                            this.state = 761;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === CWScriptParser.BANG) {
                                {
                                    this.state = 760;
                                    _localctx._fallible = this.match(CWScriptParser.BANG);
                                }
                            }
                            this.state = 763;
                            this.match(CWScriptParser.LPAREN);
                            this.state = 772;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BANG - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (CWScriptParser.Ident - 83)) | (1 << (CWScriptParser.StringLiteral - 83)) | (1 << (CWScriptParser.IntLiteral - 83)) | (1 << (CWScriptParser.DecLiteral - 83)) | (1 << (CWScriptParser.BoolLiteral - 83)))) !== 0)) {
                                {
                                    {
                                        this.state = 764;
                                        _localctx._arg = this.arg();
                                        _localctx._args.push(_localctx._arg);
                                    }
                                    this.state = 769;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === CWScriptParser.COMMA) {
                                        {
                                            {
                                                this.state = 765;
                                                this.match(CWScriptParser.COMMA);
                                                this.state = 766;
                                                _localctx._arg = this.arg();
                                                _localctx._args.push(_localctx._arg);
                                            }
                                        }
                                        this.state = 771;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 774;
                            this.match(CWScriptParser.RPAREN);
                        }
                        break;
                    case 4:
                        {
                            _localctx = new TryCatchElseExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 776;
                            this.tryCatchElseExpr_();
                        }
                        break;
                    case 5:
                        {
                            _localctx = new NotExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 777;
                            this.match(CWScriptParser.NOT);
                            this.state = 778;
                            this.expr(13);
                        }
                        break;
                    case 6:
                        {
                            _localctx = new IfExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 779;
                            this.ifStmt_();
                        }
                        break;
                    case 7:
                        {
                            _localctx = new QueryNowExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 780;
                            this.match(CWScriptParser.QUERY_NOW);
                            this.state = 781;
                            this.expr(9);
                        }
                        break;
                    case 8:
                        {
                            _localctx = new FailExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 782;
                            this.match(CWScriptParser.FAIL);
                            this.state = 783;
                            this.expr(0);
                            this.state = 784;
                            this.match(CWScriptParser.SEMI);
                        }
                        break;
                    case 9:
                        {
                            _localctx = new ClosureExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 786;
                            this.closure();
                        }
                        break;
                    case 10:
                        {
                            _localctx = new TupleExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 787;
                            this.match(CWScriptParser.LBRACK);
                            this.state = 796;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BANG - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (CWScriptParser.Ident - 83)) | (1 << (CWScriptParser.StringLiteral - 83)) | (1 << (CWScriptParser.IntLiteral - 83)) | (1 << (CWScriptParser.DecLiteral - 83)) | (1 << (CWScriptParser.BoolLiteral - 83)))) !== 0)) {
                                {
                                    {
                                        this.state = 788;
                                        _localctx._expr = this.expr(0);
                                        _localctx._items.push(_localctx._expr);
                                    }
                                    this.state = 793;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === CWScriptParser.COMMA) {
                                        {
                                            {
                                                this.state = 789;
                                                this.match(CWScriptParser.COMMA);
                                                {
                                                    this.state = 790;
                                                    _localctx._expr = this.expr(0);
                                                    _localctx._items.push(_localctx._expr);
                                                }
                                            }
                                        }
                                        this.state = 795;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 798;
                            this.match(CWScriptParser.RBRACK);
                        }
                        break;
                    case 11:
                        {
                            _localctx = new StructExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 800;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LBRACK - 32)))) !== 0) || _la === CWScriptParser.Ident) {
                                {
                                    this.state = 799;
                                    this.typeExpr(0);
                                }
                            }
                            this.state = 802;
                            this.match(CWScriptParser.LBRACE);
                            this.state = 814;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
                                {
                                    {
                                        this.state = 803;
                                        _localctx._memberVal = this.memberVal();
                                        _localctx._members.push(_localctx._memberVal);
                                    }
                                    this.state = 808;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 804;
                                                    this.match(CWScriptParser.COMMA);
                                                    this.state = 805;
                                                    _localctx._memberVal = this.memberVal();
                                                    _localctx._members.push(_localctx._memberVal);
                                                }
                                            }
                                        }
                                        this.state = 810;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
                                    }
                                    this.state = 812;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === CWScriptParser.COMMA) {
                                        {
                                            this.state = 811;
                                            this.match(CWScriptParser.COMMA);
                                        }
                                    }
                                }
                            }
                            this.state = 816;
                            this.match(CWScriptParser.RBRACE);
                        }
                        break;
                    case 12:
                        {
                            _localctx = new UnitVariantExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 817;
                            this.typeVariant();
                        }
                        break;
                    case 13:
                        {
                            _localctx = new LiteralExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 818;
                            this.literal();
                        }
                        break;
                    case 14:
                        {
                            _localctx = new IdentExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 819;
                            this.ident();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 898;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 896;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 822;
                                        if (!(this.precpred(this._ctx, 29))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
                                        }
                                        this.state = 824;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CWScriptParser.QUEST || _la === CWScriptParser.BANG) {
                                            {
                                                this.state = 823;
                                                _localctx._unwrap = this._input.LT(1);
                                                _la = this._input.LA(1);
                                                if (!(_la === CWScriptParser.QUEST || _la === CWScriptParser.BANG)) {
                                                    _localctx._unwrap = this._errHandler.recoverInline(this);
                                                }
                                                else {
                                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                                        this.matchedEOF = true;
                                                    }
                                                    this._errHandler.reportMatch(this);
                                                    this.consume();
                                                }
                                            }
                                        }
                                        this.state = 826;
                                        this.match(CWScriptParser.DOT);
                                        {
                                            this.state = 827;
                                            _localctx._member = this.ident();
                                        }
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new AsExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 828;
                                        if (!(this.precpred(this._ctx, 28))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 28)");
                                        }
                                        this.state = 829;
                                        this.match(CWScriptParser.AS);
                                        this.state = 830;
                                        _localctx._ty = this.typeExpr(0);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 831;
                                        if (!(this.precpred(this._ctx, 27))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
                                        }
                                        this.state = 832;
                                        this.match(CWScriptParser.LBRACK);
                                        {
                                            this.state = 833;
                                            _localctx._arg = this.arg();
                                            _localctx._args.push(_localctx._arg);
                                        }
                                        this.state = 838;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === CWScriptParser.COMMA) {
                                            {
                                                {
                                                    this.state = 834;
                                                    this.match(CWScriptParser.COMMA);
                                                    this.state = 835;
                                                    _localctx._arg = this.arg();
                                                    _localctx._args.push(_localctx._arg);
                                                }
                                            }
                                            this.state = 840;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 841;
                                        this.match(CWScriptParser.RBRACK);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new DColonExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 843;
                                        if (!(this.precpred(this._ctx, 26))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
                                        }
                                        this.state = 844;
                                        this.match(CWScriptParser.D_COLON);
                                        {
                                            this.state = 845;
                                            _localctx._member = this.ident();
                                        }
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new FnCallExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 846;
                                        if (!(this.precpred(this._ctx, 24))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
                                        }
                                        this.state = 848;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CWScriptParser.BANG) {
                                            {
                                                this.state = 847;
                                                _localctx._fallible = this.match(CWScriptParser.BANG);
                                            }
                                        }
                                        this.state = 850;
                                        this.match(CWScriptParser.LPAREN);
                                        this.state = 859;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BANG - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (CWScriptParser.Ident - 83)) | (1 << (CWScriptParser.StringLiteral - 83)) | (1 << (CWScriptParser.IntLiteral - 83)) | (1 << (CWScriptParser.DecLiteral - 83)) | (1 << (CWScriptParser.BoolLiteral - 83)))) !== 0)) {
                                            {
                                                {
                                                    this.state = 851;
                                                    _localctx._arg = this.arg();
                                                    _localctx._args.push(_localctx._arg);
                                                }
                                                this.state = 856;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === CWScriptParser.COMMA) {
                                                    {
                                                        {
                                                            this.state = 852;
                                                            this.match(CWScriptParser.COMMA);
                                                            this.state = 853;
                                                            _localctx._arg = this.arg();
                                                            _localctx._args.push(_localctx._arg);
                                                        }
                                                    }
                                                    this.state = 858;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                            }
                                        }
                                        this.state = 861;
                                        this.match(CWScriptParser.RPAREN);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 862;
                                        if (!(this.precpred(this._ctx, 22))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
                                        }
                                        {
                                            this.state = 863;
                                            _localctx._op = this._input.LT(1);
                                            _la = this._input.LA(1);
                                            if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CWScriptParser.MUL - 72)) | (1 << (CWScriptParser.DIV - 72)) | (1 << (CWScriptParser.MOD - 72)))) !== 0))) {
                                                _localctx._op = this._errHandler.recoverInline(this);
                                            }
                                            else {
                                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                                    this.matchedEOF = true;
                                                }
                                                this._errHandler.reportMatch(this);
                                                this.consume();
                                            }
                                        }
                                        {
                                            this.state = 864;
                                            _localctx._rhs = this.expr(0);
                                        }
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 865;
                                        if (!(this.precpred(this._ctx, 21))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
                                        }
                                        {
                                            this.state = 866;
                                            _localctx._op = this._input.LT(1);
                                            _la = this._input.LA(1);
                                            if (!(_la === CWScriptParser.PLUS || _la === CWScriptParser.MINUS)) {
                                                _localctx._op = this._errHandler.recoverInline(this);
                                            }
                                            else {
                                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                                    this.matchedEOF = true;
                                                }
                                                this._errHandler.reportMatch(this);
                                                this.consume();
                                            }
                                        }
                                        {
                                            this.state = 867;
                                            _localctx._rhs = this.expr(0);
                                        }
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 868;
                                        if (!(this.precpred(this._ctx, 20))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
                                        }
                                        {
                                            this.state = 869;
                                            _localctx._op = this._input.LT(1);
                                            _la = this._input.LA(1);
                                            if (!(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (CWScriptParser.LT - 78)) | (1 << (CWScriptParser.LT_EQ - 78)) | (1 << (CWScriptParser.GT - 78)) | (1 << (CWScriptParser.GT_EQ - 78)))) !== 0))) {
                                                _localctx._op = this._errHandler.recoverInline(this);
                                            }
                                            else {
                                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                                    this.matchedEOF = true;
                                                }
                                                this._errHandler.reportMatch(this);
                                                this.consume();
                                            }
                                        }
                                        {
                                            this.state = 870;
                                            _localctx._rhs = this.expr(0);
                                        }
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 871;
                                        if (!(this.precpred(this._ctx, 19))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
                                        }
                                        {
                                            this.state = 872;
                                            _localctx._op = this._input.LT(1);
                                            _la = this._input.LA(1);
                                            if (!(_la === CWScriptParser.EQ_EQ || _la === CWScriptParser.NEQ)) {
                                                _localctx._op = this._errHandler.recoverInline(this);
                                            }
                                            else {
                                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                                    this.matchedEOF = true;
                                                }
                                                this._errHandler.reportMatch(this);
                                                this.consume();
                                            }
                                        }
                                        {
                                            this.state = 873;
                                            _localctx._rhs = this.expr(0);
                                        }
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new NoneCheckExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 874;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 875;
                                        this.match(CWScriptParser.QUEST);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 876;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 877;
                                        this.match(CWScriptParser.IS);
                                        this.state = 879;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CWScriptParser.NOT) {
                                            {
                                                this.state = 878;
                                                _localctx._negative = this.match(CWScriptParser.NOT);
                                            }
                                        }
                                        {
                                            this.state = 881;
                                            _localctx._rhs = this.typeExpr(0);
                                        }
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 882;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 883;
                                        this.match(CWScriptParser.IN);
                                        {
                                            this.state = 884;
                                            _localctx._rhs = this.expr(0);
                                        }
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 885;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 886;
                                        this.match(CWScriptParser.D_QUEST);
                                        {
                                            this.state = 887;
                                            _localctx._rhs = this.expr(0);
                                        }
                                    }
                                    break;
                                case 14:
                                    {
                                        _localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 888;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 889;
                                        this.match(CWScriptParser.AND);
                                        {
                                            this.state = 890;
                                            _localctx._rhs = this.expr(0);
                                        }
                                    }
                                    break;
                                case 15:
                                    {
                                        _localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 891;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 892;
                                        this.match(CWScriptParser.OR);
                                        {
                                            this.state = 893;
                                            _localctx._rhs = this.expr(0);
                                        }
                                    }
                                    break;
                                case 16:
                                    {
                                        _localctx = new Grouped2ExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 894;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 895;
                                        this.match(CWScriptParser.TILDE);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 900;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    closureParams() {
        let _localctx = new ClosureParamsContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, CWScriptParser.RULE_closureParams);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 901;
                this.match(CWScriptParser.BAR);
                this.state = 910;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
                    {
                        {
                            this.state = 902;
                            _localctx._param = this.param();
                            _localctx._params.push(_localctx._param);
                        }
                        this.state = 907;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.COMMA) {
                            {
                                {
                                    this.state = 903;
                                    this.match(CWScriptParser.COMMA);
                                    {
                                        this.state = 904;
                                        _localctx._param = this.param();
                                        _localctx._params.push(_localctx._param);
                                    }
                                }
                            }
                            this.state = 909;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 912;
                this.match(CWScriptParser.BAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    closure() {
        let _localctx = new ClosureContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, CWScriptParser.RULE_closure);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 915;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.BANG) {
                    {
                        this.state = 914;
                        _localctx._fallible = this.match(CWScriptParser.BANG);
                    }
                }
                {
                    this.state = 917;
                    _localctx._params = this.closureParams();
                }
                this.state = 924;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                    case 1:
                        {
                            {
                                this.state = 920;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === CWScriptParser.ARROW) {
                                    {
                                        this.state = 918;
                                        this.match(CWScriptParser.ARROW);
                                        this.state = 919;
                                        _localctx._retTy = this.typeExpr(0);
                                    }
                                }
                                this.state = 922;
                                this.block();
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 923;
                            this.stmt();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    block() {
        let _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, CWScriptParser.RULE_block);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 926;
                this.match(CWScriptParser.LBRACE);
                this.state = 930;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.DELEGATE_EXEC) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BANG - 32)) | (1 << (CWScriptParser.AT - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (CWScriptParser.Ident - 83)) | (1 << (CWScriptParser.StringLiteral - 83)) | (1 << (CWScriptParser.IntLiteral - 83)) | (1 << (CWScriptParser.DecLiteral - 83)) | (1 << (CWScriptParser.BoolLiteral - 83)))) !== 0)) {
                    {
                        {
                            this.state = 927;
                            _localctx._stmt = this.stmt();
                            _localctx._body.push(_localctx._stmt);
                        }
                    }
                    this.state = 932;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 933;
                this.match(CWScriptParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tryCatchElseExpr_() {
        let _localctx = new TryCatchElseExpr_Context(this._ctx, this.state);
        this.enterRule(_localctx, 100, CWScriptParser.RULE_tryCatchElseExpr_);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 935;
                this.match(CWScriptParser.TRY);
                {
                    this.state = 936;
                    _localctx._body = this.block();
                }
                this.state = 940;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 937;
                                _localctx._catchClause = this.catchClause();
                                _localctx._catches.push(_localctx._catchClause);
                            }
                        }
                    }
                    this.state = 942;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
                }
                this.state = 944;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                    case 1:
                        {
                            this.state = 943;
                            _localctx._else_ = this.elseClause();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    catchClause() {
        let _localctx = new CatchClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, CWScriptParser.RULE_catchClause);
        try {
            this.state = 957;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                case 1:
                    _localctx = new CatchContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 946;
                        this.match(CWScriptParser.CATCH);
                        {
                            this.state = 947;
                            _localctx._ty = this.typeExpr(0);
                        }
                        {
                            this.state = 948;
                            _localctx._body = this.block();
                        }
                    }
                    break;
                case 2:
                    _localctx = new CatchBindContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 950;
                        this.match(CWScriptParser.CATCH);
                        {
                            this.state = 951;
                            _localctx._name = this.ident();
                        }
                        {
                            this.state = 952;
                            this.match(CWScriptParser.COLON);
                            {
                                this.state = 953;
                                _localctx._ty = this.typeExpr(0);
                            }
                        }
                        {
                            this.state = 955;
                            _localctx._body = this.block();
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arg() {
        let _localctx = new ArgContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, CWScriptParser.RULE_arg);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 962;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
                    case 1:
                        {
                            {
                                this.state = 959;
                                _localctx._name = this.ident();
                            }
                            this.state = 960;
                            this.match(CWScriptParser.EQ);
                        }
                        break;
                }
                {
                    this.state = 964;
                    _localctx._value = this.expr(0);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    memberVal() {
        let _localctx = new MemberValContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, CWScriptParser.RULE_memberVal);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 966;
                    _localctx._name = this.ident();
                }
                this.state = 969;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.COLON) {
                    {
                        this.state = 967;
                        this.match(CWScriptParser.COLON);
                        {
                            this.state = 968;
                            _localctx._value = this.expr(0);
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    literal() {
        let _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, CWScriptParser.RULE_literal);
        try {
            this.state = 976;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CWScriptParser.StringLiteral:
                    _localctx = new StringLitContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 971;
                        this.match(CWScriptParser.StringLiteral);
                    }
                    break;
                case CWScriptParser.IntLiteral:
                    _localctx = new IntLitContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 972;
                        this.match(CWScriptParser.IntLiteral);
                    }
                    break;
                case CWScriptParser.DecLiteral:
                    _localctx = new DecLitContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 973;
                        this.match(CWScriptParser.DecLiteral);
                    }
                    break;
                case CWScriptParser.BoolLiteral:
                    _localctx = new BoolLitContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 974;
                        this.match(CWScriptParser.BoolLiteral);
                    }
                    break;
                case CWScriptParser.NONE:
                    _localctx = new NoneLitContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 975;
                        this.match(CWScriptParser.NONE);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ifStmt_() {
        let _localctx = new IfStmt_Context(this._ctx, this.state);
        this.enterRule(_localctx, 110, CWScriptParser.RULE_ifStmt_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 978;
                this.match(CWScriptParser.IF);
                {
                    this.state = 979;
                    _localctx._pred = this.expr(0);
                }
                {
                    this.state = 980;
                    _localctx._body = this.block();
                }
                this.state = 982;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elseClause() {
        let _localctx = new ElseClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, CWScriptParser.RULE_elseClause);
        try {
            this.state = 988;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 125, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 984;
                        this.match(CWScriptParser.ELSE);
                        this.state = 985;
                        this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 986;
                        this.match(CWScriptParser.ELSE);
                        this.state = 987;
                        this.stmt();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    forStmt_() {
        let _localctx = new ForStmt_Context(this._ctx, this.state);
        this.enterRule(_localctx, 114, CWScriptParser.RULE_forStmt_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 990;
                this.match(CWScriptParser.FOR);
                {
                    this.state = 991;
                    _localctx._binding = this.let_binding();
                }
                this.state = 992;
                this.match(CWScriptParser.IN);
                {
                    this.state = 993;
                    _localctx._iter = this.expr(0);
                }
                this.state = 994;
                _localctx._body = this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ident() {
        let _localctx = new IdentContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, CWScriptParser.RULE_ident);
        try {
            this.state = 998;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CWScriptParser.Ident:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 996;
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
                        this.state = 997;
                        this.reservedKeyword();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    reservedKeyword() {
        let _localctx = new ReservedKeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, CWScriptParser.RULE_reservedKeyword);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1000;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 29:
                return this.typeExpr_sempred(_localctx, predIndex);
            case 46:
                return this.expr_sempred(_localctx, predIndex);
        }
        return true;
    }
    typeExpr_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 4);
            case 1:
                return this.precpred(this._ctx, 3);
        }
        return true;
    }
    expr_sempred(_localctx, predIndex) {
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
    static get _ATN() {
        if (!CWScriptParser.__ATN) {
            CWScriptParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CWScriptParser._serializedATN));
        }
        return CWScriptParser.__ATN;
    }
}
exports.CWScriptParser = CWScriptParser;
CWScriptParser.CONTRACT = 1;
CWScriptParser.INTERFACE = 2;
CWScriptParser.IMPORT = 3;
CWScriptParser.IMPLEMENTS = 4;
CWScriptParser.EXTENDS = 5;
CWScriptParser.ERROR = 6;
CWScriptParser.EVENT = 7;
CWScriptParser.INSTANTIATE_NOW = 8;
CWScriptParser.EXEC_NOW = 9;
CWScriptParser.QUERY_NOW = 10;
CWScriptParser.DELEGATE_EXEC = 11;
CWScriptParser.INSTANTIATE = 12;
CWScriptParser.EXEC = 13;
CWScriptParser.QUERY = 14;
CWScriptParser.REPLY = 15;
CWScriptParser.FOR = 16;
CWScriptParser.IN = 17;
CWScriptParser.FROM = 18;
CWScriptParser.STATE = 19;
CWScriptParser.IF = 20;
CWScriptParser.IS = 21;
CWScriptParser.TRY = 22;
CWScriptParser.CATCH = 23;
CWScriptParser.ELSE = 24;
CWScriptParser.NOT = 25;
CWScriptParser.NONE = 26;
CWScriptParser.MUT = 27;
CWScriptParser.AND = 28;
CWScriptParser.OR = 29;
CWScriptParser.TRUE = 30;
CWScriptParser.FALSE = 31;
CWScriptParser.FN = 32;
CWScriptParser.LET = 33;
CWScriptParser.CONST = 34;
CWScriptParser.FAIL = 35;
CWScriptParser.RETURN = 36;
CWScriptParser.STRUCT = 37;
CWScriptParser.ENUM = 38;
CWScriptParser.TYPE = 39;
CWScriptParser.EMIT = 40;
CWScriptParser.AS = 41;
CWScriptParser.TILDE = 42;
CWScriptParser.LPAREN = 43;
CWScriptParser.RPAREN = 44;
CWScriptParser.LBRACK = 45;
CWScriptParser.RBRACK = 46;
CWScriptParser.LBRACE = 47;
CWScriptParser.RBRACE = 48;
CWScriptParser.DOT = 49;
CWScriptParser.COMMA = 50;
CWScriptParser.D_QUEST = 51;
CWScriptParser.QUEST = 52;
CWScriptParser.BANG = 53;
CWScriptParser.SEMI = 54;
CWScriptParser.COLON = 55;
CWScriptParser.D_COLON = 56;
CWScriptParser.HASH = 57;
CWScriptParser.AT = 58;
CWScriptParser.AMP = 59;
CWScriptParser.ARROW = 60;
CWScriptParser.FAT_ARROW = 61;
CWScriptParser.BAR = 62;
CWScriptParser.S_QUOTE = 63;
CWScriptParser.D_QUOTE = 64;
CWScriptParser.EQ = 65;
CWScriptParser.EQ_EQ = 66;
CWScriptParser.NEQ = 67;
CWScriptParser.PLUS = 68;
CWScriptParser.PLUS_EQ = 69;
CWScriptParser.MINUS = 70;
CWScriptParser.MINUS_EQ = 71;
CWScriptParser.MUL = 72;
CWScriptParser.MUL_EQ = 73;
CWScriptParser.DIV = 74;
CWScriptParser.DIV_EQ = 75;
CWScriptParser.MOD = 76;
CWScriptParser.MOD_EQ = 77;
CWScriptParser.LT = 78;
CWScriptParser.LT_EQ = 79;
CWScriptParser.GT = 80;
CWScriptParser.GT_EQ = 81;
CWScriptParser.POW = 82;
CWScriptParser.Ident = 83;
CWScriptParser.StringLiteral = 84;
CWScriptParser.IntLiteral = 85;
CWScriptParser.DecLiteral = 86;
CWScriptParser.BoolLiteral = 87;
CWScriptParser.CWSPEC_LINE_COMMENT = 88;
CWScriptParser.CWSPEC_BLOCK_COMMENT = 89;
CWScriptParser.LINE_COMMENT = 90;
CWScriptParser.BLOCK_COMMENT = 91;
CWScriptParser.WS = 92;
CWScriptParser.RULE_sourceFile = 0;
CWScriptParser.RULE_topLevelStmt = 1;
CWScriptParser.RULE_contractDefn = 2;
CWScriptParser.RULE_interfaceDefn = 3;
CWScriptParser.RULE_contractBlock = 4;
CWScriptParser.RULE_importStmt = 5;
CWScriptParser.RULE_contractItem = 6;
CWScriptParser.RULE_param = 7;
CWScriptParser.RULE_paramList = 8;
CWScriptParser.RULE_fnParams = 9;
CWScriptParser.RULE_structDefn_fn = 10;
CWScriptParser.RULE_errorDefn = 11;
CWScriptParser.RULE_errorDefnBlock = 12;
CWScriptParser.RULE_eventDefn = 13;
CWScriptParser.RULE_eventDefnBlock = 14;
CWScriptParser.RULE_stateDefnBlock = 15;
CWScriptParser.RULE_stateDefn = 16;
CWScriptParser.RULE_mapKeyDefn = 17;
CWScriptParser.RULE_instantiateDefn = 18;
CWScriptParser.RULE_instantiateDecl = 19;
CWScriptParser.RULE_execDefn = 20;
CWScriptParser.RULE_execDecl = 21;
CWScriptParser.RULE_queryDefn = 22;
CWScriptParser.RULE_queryDecl = 23;
CWScriptParser.RULE_replyDefn = 24;
CWScriptParser.RULE_enumDefn = 25;
CWScriptParser.RULE_variant_ = 26;
CWScriptParser.RULE_variant_struct = 27;
CWScriptParser.RULE_variant_unit = 28;
CWScriptParser.RULE_typeExpr = 29;
CWScriptParser.RULE_typeLens = 30;
CWScriptParser.RULE_typePath = 31;
CWScriptParser.RULE_typeVariant = 32;
CWScriptParser.RULE_typeDefn = 33;
CWScriptParser.RULE_structDefn = 34;
CWScriptParser.RULE_typeAliasDefn = 35;
CWScriptParser.RULE_fnDefn = 36;
CWScriptParser.RULE_annot = 37;
CWScriptParser.RULE_callOptions = 38;
CWScriptParser.RULE_stmt = 39;
CWScriptParser.RULE_letStmt_ = 40;
CWScriptParser.RULE_constStmt_ = 41;
CWScriptParser.RULE_identBinding_ = 42;
CWScriptParser.RULE_let_binding = 43;
CWScriptParser.RULE_assignStmt_ = 44;
CWScriptParser.RULE_assignLHS = 45;
CWScriptParser.RULE_expr = 46;
CWScriptParser.RULE_closureParams = 47;
CWScriptParser.RULE_closure = 48;
CWScriptParser.RULE_block = 49;
CWScriptParser.RULE_tryCatchElseExpr_ = 50;
CWScriptParser.RULE_catchClause = 51;
CWScriptParser.RULE_arg = 52;
CWScriptParser.RULE_memberVal = 53;
CWScriptParser.RULE_literal = 54;
CWScriptParser.RULE_ifStmt_ = 55;
CWScriptParser.RULE_elseClause = 56;
CWScriptParser.RULE_forStmt_ = 57;
CWScriptParser.RULE_ident = 58;
CWScriptParser.RULE_reservedKeyword = 59;
// tslint:disable:no-trailing-whitespace
CWScriptParser.ruleNames = [
    "sourceFile", "topLevelStmt", "contractDefn", "interfaceDefn", "contractBlock",
    "importStmt", "contractItem", "param", "paramList", "fnParams", "structDefn_fn",
    "errorDefn", "errorDefnBlock", "eventDefn", "eventDefnBlock", "stateDefnBlock",
    "stateDefn", "mapKeyDefn", "instantiateDefn", "instantiateDecl", "execDefn",
    "execDecl", "queryDefn", "queryDecl", "replyDefn", "enumDefn", "variant_",
    "variant_struct", "variant_unit", "typeExpr", "typeLens", "typePath",
    "typeVariant", "typeDefn", "structDefn", "typeAliasDefn", "fnDefn", "annot",
    "callOptions", "stmt", "letStmt_", "constStmt_", "identBinding_", "let_binding",
    "assignStmt_", "assignLHS", "expr", "closureParams", "closure", "block",
    "tryCatchElseExpr_", "catchClause", "arg", "memberVal", "literal", "ifStmt_",
    "elseClause", "forStmt_", "ident", "reservedKeyword",
];
CWScriptParser._LITERAL_NAMES = [
    undefined, "'contract'", "'interface'", "'import'", "'implements'", "'extends'",
    "'error'", "'event'", "'instantiate!'", "'exec!'", "'query!'", "'delegate_exec!'",
    "'instantiate'", "'exec'", "'query'", "'reply'", "'for'", "'in'", "'from'",
    "'state'", "'if'", "'is'", "'try'", "'catch'", "'else'", "'not'", "'None'",
    "'mut'", "'and'", "'or'", "'true'", "'false'", "'fn'", "'let'", "'const'",
    "'fail!'", "'return'", "'struct'", "'enum'", "'type'", "'emit'", "'as'",
    "'~'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'.'", "','", "'??'",
    "'?'", "'!'", "';'", "':'", "'::'", "'#'", "'@'", "'&'", "'->'", "'=>'",
    "'|'", "'''", "'\"'", "'='", "'=='", "'!='", "'+'", "'+='", "'-'", "'-='",
    "'*'", "'*='", "'/'", "'/='", "'%'", "'%='", "'<'", "'<='", "'>'", "'>='",
    "'**'",
];
CWScriptParser._SYMBOLIC_NAMES = [
    undefined, "CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "EXTENDS",
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
CWScriptParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CWScriptParser._LITERAL_NAMES, CWScriptParser._SYMBOLIC_NAMES, []);
CWScriptParser._serializedATNSegments = 2;
CWScriptParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03^\u03ED\x04\x02" +
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
    "\n\b\x03\t\x03\t\x05\t\xCF\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\xD5\n\t\x05" +
    "\t\xD7\n\t\x03\n\x03\n\x03\n\x07\n\xDC\n\n\f\n\x0E\n\xDF\v\n\x03\v\x03" +
    "\v\x03\v\x03\v\x07\v\xE5\n\v\f\v\x0E\v\xE8\v\v\x05\v\xEA\n\v\x03\v\x03" +
    "\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
    "\x03\x0E\x07\x0E\xF9\n\x0E\f\x0E\x0E\x0E\xFC\v\x0E\x03\x0E\x05\x0E\xFF" +
    "\n\x0E\x05\x0E\u0101\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u010D\n\x10\f\x10\x0E\x10" +
    "\u0110\v\x10\x03\x10\x05\x10\u0113\n\x10\x05\x10\u0115\n\x10\x03\x10\x03" +
    "\x10\x03\x11\x03\x11\x03\x11\x07\x11\u011C\n\x11\f\x11\x0E\x11\u011F\v" +
    "\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0128" +
    "\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u012F\n\x12\f\x12" +
    "\x0E\x12\u0132\v\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0139" +
    "\n\x12\x05\x12\u013B\n\x12\x03\x13\x03\x13\x03\x13\x05\x13\u0140\n\x13" +
    "\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
    "\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u014F\n\x16\x03\x16\x03\x16\x03" +
    "\x16\x03\x16\x03\x16\x03\x17\x03\x17\x05\x17\u0158\n\x17\x03\x17\x03\x17" +
    "\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18" +
    "\u0164\n\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
    "\x19\x05\x19\u016E\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0173\n\x1A\x03" +
    "\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
    "\x1B\x05\x1B\u017F\n\x1B\x07\x1B\u0181\n\x1B\f\x1B\x0E\x1B\u0184\v\x1B" +
    "\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C\u018A\n\x1C\x03\x1D\x03\x1D\x03" +
    "\x1D\x03\x1D\x05\x1D\u0190\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
    "\x03\x1D\x05\x1D\u0198\n\x1D\x03\x1D\x03\x1D\x05\x1D\u019C\n\x1D\x03\x1E" +
    "\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
    "\x03\x1F\x07\x1F\u01A9\n\x1F\f\x1F\x0E\x1F\u01AC\v\x1F\x05\x1F\u01AE\n" +
    "\x1F\x03\x1F\x03\x1F\x05\x1F\u01B2\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
    "\x03\x1F\x05\x1F\u01B9\n\x1F\x03\x1F\x07\x1F\u01BC\n\x1F\f\x1F\x0E\x1F" +
    "\u01BF\v\x1F\x03 \x03 \x03 \x03!\x03!\x03!\x07!\u01C7\n!\f!\x0E!\u01CA" +
    "\v!\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u01D1\n\"\x03\"\x03\"\x03\"\x03" +
    "\"\x03#\x03#\x03#\x05#\u01DA\n#\x03$\x03$\x05$\u01DE\n$\x03$\x03$\x03" +
    "$\x03$\x07$\u01E4\n$\f$\x0E$\u01E7\v$\x05$\u01E9\n$\x03$\x03$\x03$\x05" +
    "$\u01EE\n$\x03$\x03$\x03$\x03$\x07$\u01F4\n$\f$\x0E$\u01F7\v$\x03$\x05" +
    "$\u01FA\n$\x03$\x03$\x05$\u01FE\n$\x03%\x03%\x03%\x03%\x03%\x03&\x03&" +
    "\x03&\x05&\u0208\n&\x03&\x03&\x03&\x05&\u020D\n&\x03&\x03&\x03\'\x03\'" +
    "\x03\'\x03\'\x05\'\u0215\n\'\x03\'\x05\'\u0218\n\'\x03(\x03(\x03(\x03" +
    "(\x07(\u021E\n(\f(\x0E(\u0221\v(\x03(\x05(\u0224\n(\x05(\u0226\n(\x03" +
    "(\x03(\x03)\x07)\u022B\n)\f)\x0E)\u022E\v)\x03)\x03)\x05)\u0232\n)\x03" +
    ")\x07)\u0235\n)\f)\x0E)\u0238\v)\x03)\x03)\x05)\u023C\n)\x03)\x07)\u023F" +
    "\n)\f)\x0E)\u0242\v)\x03)\x03)\x05)\u0246\n)\x03)\x07)\u0249\n)\f)\x0E" +
    ")\u024C\v)\x03)\x03)\x05)\u0250\n)\x03)\x07)\u0253\n)\f)\x0E)\u0256\v" +
    ")\x03)\x03)\x05)\u025A\n)\x03)\x07)\u025D\n)\f)\x0E)\u0260\v)\x03)\x03" +
    ")\x03)\x05)\u0265\n)\x03)\x05)\u0268\n)\x03)\x07)\u026B\n)\f)\x0E)\u026E" +
    "\v)\x03)\x03)\x03)\x03)\x05)\u0274\n)\x03)\x07)\u0277\n)\f)\x0E)\u027A" +
    "\v)\x03)\x03)\x05)\u027E\n)\x03)\x03)\x05)\u0282\n)\x03)\x05)\u0285\n" +
    ")\x03)\x07)\u0288\n)\f)\x0E)\u028B\v)\x03)\x03)\x03)\x05)\u0290\n)\x03" +
    ")\x07)\u0293\n)\f)\x0E)\u0296\v)\x03)\x03)\x03)\x03)\x03)\x07)\u029D\n" +
    ")\f)\x0E)\u02A0\v)\x03)\x03)\x03)\x03)\x03)\x07)\u02A7\n)\f)\x0E)\u02AA" +
    "\v)\x03)\x03)\x05)\u02AE\n)\x05)\u02B0\n)\x03*\x03*\x03*\x03*\x05*\u02B6" +
    "\n*\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x05,\u02C0\n,\x03-\x03-\x03" +
    "-\x03-\x07-\u02C6\n-\f-\x0E-\u02C9\v-\x03-\x03-\x03-\x03-\x03-\x03-\x07" +
    "-\u02D1\n-\f-\x0E-\u02D4\v-\x03-\x03-\x05-\u02D8\n-\x03.\x03.\x03.\x03" +
    ".\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x07/\u02E8\n/\f/\x0E" +
    "/\u02EB\v/\x03/\x03/\x05/\u02EF\n/\x030\x030\x030\x030\x030\x030\x030" +
    "\x030\x030\x030\x030\x050\u02FC\n0\x030\x030\x030\x030\x070\u0302\n0\f" +
    "0\x0E0\u0305\v0\x050\u0307\n0\x030\x030\x030\x030\x030\x030\x030\x030" +
    "\x030\x030\x030\x030\x030\x030\x030\x030\x030\x070\u031A\n0\f0\x0E0\u031D" +
    "\v0\x050\u031F\n0\x030\x030\x050\u0323\n0\x030\x030\x030\x030\x070\u0329" +
    "\n0\f0\x0E0\u032C\v0\x030\x050\u032F\n0\x050\u0331\n0\x030\x030\x030\x03" +
    "0\x050\u0337\n0\x030\x030\x050\u033B\n0\x030\x030\x030\x030\x030\x030" +
    "\x030\x030\x030\x030\x070\u0347\n0\f0\x0E0\u034A\v0\x030\x030\x030\x03" +
    "0\x030\x030\x030\x050\u0353\n0\x030\x030\x030\x030\x070\u0359\n0\f0\x0E" +
    "0\u035C\v0\x050\u035E\n0\x030\x030\x030\x030\x030\x030\x030\x030\x030" +
    "\x030\x030\x030\x030\x030\x030\x030\x030\x030\x050\u0372\n0\x030\x030" +
    "\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x07" +
    "0\u0383\n0\f0\x0E0\u0386\v0\x031\x031\x031\x031\x071\u038C\n1\f1\x0E1" +
    "\u038F\v1\x051\u0391\n1\x031\x031\x032\x052\u0396\n2\x032\x032\x032\x05" +
    "2\u039B\n2\x032\x032\x052\u039F\n2\x033\x033\x073\u03A3\n3\f3\x0E3\u03A6" +
    "\v3\x033\x033\x034\x034\x034\x074\u03AD\n4\f4\x0E4\u03B0\v4\x034\x054" +
    "\u03B3\n4\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x055" +
    "\u03C0\n5\x036\x036\x036\x056\u03C5\n6\x036\x036\x037\x037\x037\x057\u03CC" +
    "\n7\x038\x038\x038\x038\x038\x058\u03D3\n8\x039\x039\x039\x039\x059\u03D9" +
    "\n9\x03:\x03:\x03:\x03:\x05:\u03DF\n:\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
    "<\x03<\x05<\u03E9\n<\x03=\x03=\x03=\x02\x02\x04<^>\x02\x02\x04\x02\x06" +
    "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
    "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
    "2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
    "N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
    "j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02\x02\n\x04\x02\x0E\x10\x1D\x1D" +
    "\b\x02CCGGIIKKMMOO\x03\x0267\x05\x02JJLLNN\x04\x02FFHH\x03\x02PS\x03\x02" +
    "DE\x07\x02\x03\t\x0E\x16\x1A\x1A\x1E#&*\x02\u046C\x02}\x03\x02\x02\x02" +
    "\x04\x86\x03\x02\x02\x02\x06\x88\x03\x02\x02\x02\b\x94\x03\x02\x02\x02" +
    "\n\x9C\x03\x02\x02\x02\f\xB8\x03\x02\x02\x02\x0E\xCA\x03\x02\x02\x02\x10" +
    "\xCC\x03\x02\x02\x02\x12\xD8\x03\x02\x02\x02\x14\xE0\x03\x02\x02\x02\x16" +
    "\xED\x03\x02\x02\x02\x18\xF0\x03\x02\x02\x02\x1A\xF3\x03\x02\x02\x02\x1C" +
    "\u0104\x03\x02\x02\x02\x1E\u0107\x03\x02\x02\x02 \u0118\x03\x02\x02\x02" +
    "\"\u013A\x03\x02\x02\x02$\u013F\x03\x02\x02\x02&\u0143\x03\x02\x02\x02" +
    "(\u0148\x03\x02\x02\x02*\u014C\x03\x02\x02\x02,\u0155\x03\x02\x02\x02" +
    ".\u015D\x03\x02\x02\x020\u0167\x03\x02\x02\x022\u016F\x03\x02\x02\x02" +
    "4\u0178\x03\x02\x02\x026\u0189\x03\x02\x02\x028\u019B\x03\x02\x02\x02" +
    ":\u019D\x03\x02\x02\x02<\u01B1\x03\x02\x02\x02>\u01C0\x03\x02\x02\x02" +
    "@\u01C3\x03\x02\x02\x02B\u01CB\x03\x02\x02\x02D\u01D9\x03\x02\x02\x02" +
    "F\u01FD\x03\x02\x02\x02H\u01FF\x03\x02\x02\x02J\u0204\x03\x02\x02\x02" +
    "L\u0210\x03\x02\x02\x02N\u0219\x03\x02\x02\x02P\u02AF\x03\x02\x02\x02" +
    "R\u02B1\x03\x02\x02\x02T\u02B7\x03\x02\x02\x02V\u02BC\x03\x02\x02\x02" +
    "X\u02D7\x03\x02\x02\x02Z\u02D9\x03\x02\x02\x02\\\u02EE\x03\x02\x02\x02" +
    "^\u0336\x03\x02\x02\x02`\u0387\x03\x02\x02\x02b\u0395\x03\x02\x02\x02" +
    "d\u03A0\x03\x02\x02\x02f\u03A9\x03\x02\x02\x02h\u03BF\x03\x02\x02\x02" +
    "j\u03C4\x03\x02\x02\x02l\u03C8\x03\x02\x02\x02n\u03D2\x03\x02\x02\x02" +
    "p\u03D4\x03\x02\x02\x02r\u03DE\x03\x02\x02\x02t\u03E0\x03\x02\x02\x02" +
    "v\u03E8\x03\x02\x02\x02x\u03EA\x03\x02\x02\x02z|\x05\x04\x03\x02{z\x03" +
    "\x02\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02" +
    "~\x80\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80\x81\x07\x02\x02\x03\x81" +
    "\x03\x03\x02\x02\x02\x82\x87\x05\f\x07\x02\x83\x87\x05\x06\x04\x02\x84" +
    "\x87\x05\b\x05\x02\x85\x87\x05T+\x02\x86\x82\x03\x02\x02\x02\x86\x83\x03" +
    "\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x85\x03\x02\x02\x02\x87\x05\x03" +
    "\x02\x02\x02\x88\x89\x07\x03\x02\x02\x89\x8C\x05v<\x02\x8A\x8B\x07\x07" +
    "\x02\x02\x8B\x8D\x05@!\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02" +
    "\x02\x8D\x90\x03\x02\x02\x02\x8E\x8F\x07\x06\x02\x02\x8F\x91\x05@!\x02" +
    "\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02" +
    "\x92\x93\x05\n\x06\x02\x93\x07\x03\x02\x02\x02\x94\x95\x07\x04\x02\x02" +
    "\x95\x98\x05v<\x02\x96\x97\x07\x07\x02\x02\x97\x99\x05@!\x02\x98\x96\x03" +
    "\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\x05" +
    "\n\x06\x02\x9B\t\x03\x02\x02\x02\x9C\xA0\x071\x02\x02\x9D\x9F\x05\x0E" +
    "\b\x02\x9E\x9D\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03\x02" +
    "\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2\xA0\x03\x02" +
    "\x02\x02\xA3\xA4\x072\x02\x02\xA4\v\x03\x02\x02\x02\xA5\xA6\x07\x05\x02" +
    "\x02\xA6\xA7\x07J\x02\x02\xA7\xA8\x07\x14\x02\x02\xA8\xB9\x07V\x02\x02" +
    "\xA9\xAA\x07\x05\x02\x02\xAA\xAB\x071\x02\x02\xAB\xB0\x05v<\x02\xAC\xAD" +
    "\x074\x02\x02\xAD\xAF\x05v<\x02\xAE\xAC\x03\x02\x02\x02\xAF\xB2\x03\x02" +
    "\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB3\x03\x02" +
    "\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB4\x072\x02\x02\xB4\xB5\x03\x02" +
    "\x02\x02\xB5\xB6\x07\x14\x02\x02\xB6\xB7\x07V\x02\x02\xB7\xB9\x03\x02" +
    "\x02\x02\xB8\xA5\x03\x02\x02\x02\xB8\xA9\x03\x02\x02\x02\xB9\r\x03\x02" +
    "\x02\x02\xBA\xCB\x05D#\x02\xBB\xCB\x05T+\x02\xBC\xCB\x05J&\x02\xBD\xCB" +
    "\x05\x18\r\x02\xBE\xCB\x05\x1A\x0E\x02\xBF\xCB\x05\x1C\x0F\x02\xC0\xCB" +
    "\x05\x1E\x10\x02\xC1\xCB\x05 \x11\x02\xC2\xCB\x05&\x14\x02\xC3\xCB\x05" +
    "(\x15\x02\xC4\xCB\x05*\x16\x02\xC5\xCB\x05,\x17\x02\xC6\xCB\x05.\x18\x02" +
    "\xC7\xCB\x05.\x18\x02\xC8\xCB\x050\x19\x02\xC9\xCB\x052\x1A\x02\xCA\xBA" +
    "\x03\x02\x02\x02\xCA\xBB\x03\x02\x02\x02\xCA\xBC\x03\x02\x02\x02\xCA\xBD" +
    "\x03\x02\x02\x02\xCA\xBE\x03\x02\x02\x02\xCA\xBF\x03\x02\x02\x02\xCA\xC0" +
    "\x03\x02\x02\x02\xCA\xC1\x03\x02\x02\x02\xCA\xC2\x03\x02\x02\x02\xCA\xC3" +
    "\x03\x02\x02\x02\xCA\xC4\x03\x02\x02\x02\xCA\xC5\x03\x02\x02\x02\xCA\xC6" +
    "\x03\x02\x02\x02\xCA\xC7\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xC9" +
    "\x03\x02\x02\x02\xCB\x0F\x03\x02\x02\x02\xCC\xCE\x05v<\x02\xCD\xCF\x07" +
    "6\x02\x02\xCE\xCD\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD6\x03" +
    "\x02\x02\x02\xD0\xD1\x079\x02\x02\xD1\xD4\x05<\x1F\x02\xD2\xD3\x07C\x02" +
    "\x02\xD3\xD5\x05^0\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02" +
    "\xD5\xD7\x03\x02\x02\x02\xD6\xD0\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02" +
    "\xD7\x11\x03\x02\x02\x02\xD8\xDD\x05\x10\t\x02\xD9\xDA\x074\x02\x02\xDA" +
    "\xDC\x05\x10\t\x02\xDB\xD9\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD" +
    "\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\x13\x03\x02\x02\x02\xDF" +
    "\xDD\x03\x02\x02\x02\xE0\xE9\x07-\x02\x02\xE1\xE6\x05\x10\t\x02\xE2\xE3" +
    "\x074\x02\x02\xE3\xE5\x05\x10\t\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE8\x03" +
    "\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xEA\x03" +
    "\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xE1\x03\x02\x02\x02\xE9\xEA\x03" +
    "\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEC\x07.\x02\x02\xEC\x15\x03" +
    "\x02\x02\x02\xED\xEE\x05v<\x02\xEE\xEF\x05\x14\v\x02\xEF\x17\x03\x02\x02" +
    "\x02\xF0\xF1\x07\b\x02\x02\xF1\xF2\x05\x16\f\x02\xF2\x19\x03\x02\x02\x02" +
    "\xF3\xF4\x07\b\x02\x02\xF4\u0100\x071\x02\x02\xF5\xFA\x05\x16\f\x02\xF6" +
    "\xF7\x074\x02\x02\xF7\xF9\x05\x16\f\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFC" +
    "\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFE" +
    "\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFD\xFF\x074\x02\x02\xFE\xFD" +
    "\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0101\x03\x02\x02\x02\u0100" +
    "\xF5\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0102\x03\x02\x02" +
    "\x02\u0102\u0103\x072\x02\x02\u0103\x1B\x03\x02\x02\x02\u0104\u0105\x07" +
    "\t\x02\x02\u0105\u0106\x05\x16\f\x02\u0106\x1D\x03\x02\x02\x02\u0107\u0108" +
    "\x07\t\x02\x02\u0108\u0114\x071\x02\x02\u0109\u010E\x05\x16\f\x02\u010A" +
    "\u010B\x074\x02\x02\u010B\u010D\x05\x16\f\x02\u010C\u010A\x03\x02\x02" +
    "\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E\u010F" +
    "\x03\x02\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02" +
    "\u0111\u0113\x074\x02\x02\u0112\u0111\x03\x02\x02\x02\u0112\u0113\x03" +
    "\x02\x02\x02\u0113\u0115\x03\x02\x02\x02\u0114\u0109\x03\x02\x02\x02\u0114" +
    "\u0115\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0117\x072\x02" +
    "\x02\u0117\x1F\x03\x02\x02\x02\u0118\u0119\x07\x15\x02\x02\u0119\u011D" +
    "\x071\x02\x02\u011A\u011C\x05\"\x12\x02\u011B\u011A\x03\x02\x02\x02\u011C" +
    "\u011F\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02" +
    "\x02\x02\u011E\u0120\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120" +
    "\u0121\x072\x02\x02\u0121!\x03\x02\x02\x02\u0122\u0123\x05v<\x02\u0123" +
    "\u0124\x079\x02\x02\u0124\u0127\x05<\x1F\x02\u0125\u0126\x07C\x02\x02" +
    "\u0126\u0128\x05^0\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02" +
    "\x02\x02\u0128\u013B\x03\x02\x02\x02\u0129\u012A\x05v<\x02\u012A\u012B" +
    "\x07/\x02\x02\u012B\u0130\x05$\x13\x02\u012C\u012D\x074\x02\x02\u012D" +
    "\u012F\x05$\x13\x02\u012E\u012C\x03\x02\x02\x02\u012F\u0132\x03\x02\x02" +
    "\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0133" +
    "\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0133\u0134\x070\x02\x02" +
    "\u0134\u0135\x079\x02\x02\u0135\u0138\x05<\x1F\x02\u0136\u0137\x07C\x02" +
    "\x02\u0137\u0139\x05^0\x02\u0138\u0136\x03\x02\x02\x02\u0138\u0139\x03" +
    "\x02\x02\x02\u0139\u013B\x03\x02\x02\x02\u013A\u0122\x03\x02\x02\x02\u013A" +
    "\u0129\x03\x02\x02\x02\u013B#\x03\x02\x02\x02\u013C\u013D\x05v<\x02\u013D" +
    "\u013E\x079\x02\x02\u013E\u0140\x03\x02\x02\x02\u013F\u013C\x03\x02\x02" +
    "\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0142" +
    "\x05<\x1F\x02\u0142%\x03\x02\x02\x02\u0143\u0144\x07;\x02\x02\u0144\u0145" +
    "\x07\x0E\x02\x02\u0145\u0146\x05\x14\v\x02\u0146\u0147\x05d3\x02\u0147" +
    "\'\x03\x02\x02\x02\u0148\u0149\x07;\x02\x02\u0149\u014A\x07\x0E\x02\x02" +
    "\u014A\u014B\x05\x14\v\x02\u014B)\x03\x02\x02\x02\u014C\u014E\x07\x0F" +
    "\x02\x02\u014D\u014F\x07J\x02\x02\u014E\u014D\x03\x02\x02\x02\u014E\u014F" +
    "\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x07;\x02\x02" +
    "\u0151\u0152\x05v<\x02\u0152\u0153\x05\x14\v\x02\u0153\u0154\x05d3\x02" +
    "\u0154+\x03\x02\x02\x02\u0155\u0157\x07\x0F\x02\x02\u0156\u0158\x07J\x02" +
    "\x02\u0157\u0156\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u0159" +
    "\x03\x02\x02\x02\u0159\u015A\x07;\x02\x02\u015A\u015B\x05v<\x02\u015B" +
    "\u015C\x05\x14\v\x02\u015C-\x03\x02\x02\x02\u015D\u015E\x07\x10\x02\x02" +
    "\u015E\u015F\x07;\x02\x02\u015F\u0160\x05v<\x02\u0160\u0163\x05\x14\v" +
    "\x02\u0161\u0162\x07>\x02\x02\u0162\u0164\x05<\x1F\x02\u0163\u0161\x03" +
    "\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165" +
    "\u0166\x05d3\x02\u0166/\x03\x02\x02\x02\u0167\u0168\x07\x10\x02\x02\u0168" +
    "\u0169\x07;\x02\x02\u0169\u016A\x05v<\x02\u016A\u016D\x05\x14\v\x02\u016B" +
    "\u016C\x07>\x02\x02\u016C\u016E\x05<\x1F\x02\u016D\u016B\x03\x02\x02\x02" +
    "\u016D\u016E\x03\x02\x02\x02\u016E1\x03\x02\x02\x02\u016F\u0172\x07\x11" +
    "\x02\x02\u0170\u0171\x073\x02\x02\u0171\u0173\x05v<\x02\u0172\u0170\x03" +
    "\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174" +
    "\u0175\x05v<\x02\u0175\u0176\x05\x14\v\x02\u0176\u0177\x05d3\x02\u0177" +
    "3\x03\x02\x02\x02\u0178\u0179\x07(\x02\x02\u0179\u017A\x05v<\x02\u017A" +
    "\u017B\x071\x02\x02\u017B\u0182\x056\x1C\x02\u017C\u017E\x056\x1C\x02" +
    "\u017D\u017F\x074\x02\x02\u017E\u017D\x03\x02\x02\x02\u017E\u017F\x03" +
    "\x02\x02\x02\u017F\u0181\x03\x02\x02\x02\u0180\u017C\x03\x02\x02\x02\u0181" +
    "\u0184\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02" +
    "\x02\x02\u0183\u0185\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0185" +
    "\u0186\x072\x02\x02\u01865\x03\x02\x02\x02\u0187\u018A\x058\x1D\x02\u0188" +
    "\u018A\x05:\x1E\x02\u0189\u0187\x03\x02\x02\x02\u0189\u0188\x03\x02\x02" +
    "\x02\u018A7\x03\x02\x02\x02\u018B\u018C\x07;\x02\x02\u018C\u018D\x05v" +
    "<\x02\u018D\u018F\x07-\x02\x02\u018E\u0190\x05\x12\n\x02\u018F\u018E\x03" +
    "\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191" +
    "\u0192\x07.\x02\x02\u0192\u019C\x03\x02\x02\x02\u0193\u0194\x07;\x02\x02" +
    "\u0194\u0195\x05v<\x02\u0195\u0197\x071\x02\x02\u0196\u0198\x05\x12\n" +
    "\x02\u0197\u0196\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199" +
    "\x03\x02\x02\x02\u0199\u019A\x072\x02\x02\u019A\u019C\x03\x02\x02\x02" +
    "\u019B\u018B\x03\x02\x02\x02\u019B\u0193\x03\x02\x02\x02\u019C9\x03\x02" +
    "\x02\x02\u019D\u019E\x07;\x02\x02\u019E\u019F\x05v<\x02\u019F;\x03\x02" +
    "\x02\x02\u01A0\u01A1\b\x1F\x01\x02\u01A1\u01B2\x05@!\x02\u01A2\u01B2\x05" +
    "B\"\x02\u01A3\u01B2\x05> \x02\u01A4\u01AD\x07/\x02\x02\u01A5\u01AA\x05" +
    "<\x1F\x02\u01A6\u01A7\x074\x02\x02\u01A7\u01A9\x05<\x1F\x02\u01A8\u01A6" +
    "\x03\x02\x02\x02\u01A9\u01AC\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02" +
    "\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC\u01AA\x03" +
    "\x02\x02\x02\u01AD\u01A5\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE" +
    "\u01AF\x03\x02\x02\x02\u01AF\u01B2\x070\x02\x02\u01B0\u01B2\x05D#\x02" +
    "\u01B1\u01A0\x03\x02\x02\x02\u01B1\u01A2\x03\x02\x02\x02\u01B1\u01A3\x03" +
    "\x02\x02\x02\u01B1\u01A4\x03\x02\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2" +
    "\u01BD\x03\x02\x02\x02\u01B3\u01B4\f\x06\x02\x02\u01B4\u01BC\x076\x02" +
    "\x02\u01B5\u01B6\f\x05\x02\x02\u01B6\u01B8\x07/\x02\x02\u01B7\u01B9\x07" +
    "W\x02\x02\u01B8";
CWScriptParser._serializedATNSegment1 = "\u01B7\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BA\x03\x02" +
    "\x02\x02\u01BA\u01BC\x070\x02\x02\u01BB\u01B3\x03\x02\x02\x02\u01BB\u01B5" +
    "\x03\x02\x02\x02\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02" +
    "\u01BD\u01BE\x03\x02\x02\x02\u01BE=\x03\x02\x02\x02\u01BF\u01BD\x03\x02" +
    "\x02\x02\u01C0\u01C1\t\x02\x02\x02\u01C1\u01C2\x05@!\x02\u01C2?\x03\x02" +
    "\x02\x02\u01C3\u01C8\x05v<\x02\u01C4\u01C5\x073\x02\x02\u01C5\u01C7\x05" +
    "v<\x02\u01C6\u01C4\x03\x02\x02\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01C6" +
    "\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9A\x03\x02\x02\x02\u01CA" +
    "\u01C8\x03\x02\x02\x02\u01CB\u01D0\x05@!\x02\u01CC\u01CD\x07-\x02\x02" +
    "\u01CD\u01CE\x05^0\x02\u01CE\u01CF\x07.\x02\x02\u01CF\u01D1\x03\x02\x02" +
    "\x02\u01D0\u01CC\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2" +
    "\x03\x02\x02\x02\u01D2\u01D3\x073\x02\x02\u01D3\u01D4\x07;\x02\x02\u01D4" +
    "\u01D5\x05v<\x02\u01D5C\x03\x02\x02\x02\u01D6\u01DA\x05F$\x02\u01D7\u01DA" +
    "\x054\x1B\x02\u01D8\u01DA\x05H%\x02\u01D9\u01D6\x03\x02\x02\x02\u01D9" +
    "\u01D7\x03\x02\x02\x02\u01D9\u01D8\x03\x02\x02\x02\u01DAE\x03\x02\x02" +
    "\x02\u01DB\u01DD\x07\'\x02\x02\u01DC\u01DE\x05v<\x02\u01DD\u01DC\x03\x02" +
    "\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF" +
    "\u01E8\x07-\x02\x02\u01E0\u01E5\x05\x10\t\x02\u01E1\u01E2\x074\x02\x02" +
    "\u01E2\u01E4\x05\x10\t\x02\u01E3\u01E1\x03\x02\x02\x02\u01E4\u01E7\x03" +
    "\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6" +
    "\u01E9\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E8\u01E0\x03\x02" +
    "\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA" +
    "\u01FE\x07.\x02\x02\u01EB\u01ED\x07\'\x02\x02\u01EC\u01EE\x05v<\x02\u01ED" +
    "\u01EC\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01EF\x03\x02" +
    "\x02\x02\u01EF\u01F0\x071\x02\x02\u01F0\u01F5\x05\x10\t\x02\u01F1\u01F2" +
    "\x074\x02\x02\u01F2\u01F4\x05\x10\t\x02\u01F3\u01F1\x03\x02\x02\x02\u01F4" +
    "\u01F7\x03\x02\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03\x02" +
    "\x02\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F8" +
    "\u01FA\x074\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02" +
    "\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FC\x072\x02\x02\u01FC\u01FE" +
    "\x03\x02\x02\x02\u01FD\u01DB\x03\x02\x02\x02\u01FD\u01EB\x03\x02\x02\x02" +
    "\u01FEG\x03\x02\x02\x02\u01FF\u0200\x07)\x02\x02\u0200\u0201\x05v<\x02" +
    "\u0201\u0202\x07C\x02\x02\u0202\u0203\x05<\x1F\x02\u0203I\x03\x02\x02" +
    "\x02\u0204\u0205\x07\"\x02\x02\u0205\u0207\x05v<\x02\u0206\u0208\x077" +
    "\x02\x02\u0207\u0206\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208" +
    "\u0209\x03\x02\x02\x02\u0209\u020C\x05\x14\v\x02\u020A\u020B\x07>\x02" +
    "\x02\u020B\u020D\x05<\x1F\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020D" +
    "\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u020F\x05d3\x02\u020F" +
    "K\x03\x02\x02\x02\u0210\u0211\x07<\x02\x02\u0211\u0217\x05@!\x02\u0212" +
    "\u0214\x07-\x02\x02\u0213\u0215\x05j6\x02\u0214\u0213\x03\x02\x02\x02" +
    "\u0214\u0215\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0218\x07" +
    ".\x02\x02\u0217\u0212\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218" +
    "M\x03\x02\x02\x02\u0219\u0225\x071\x02\x02\u021A\u021F\x05l7\x02\u021B" +
    "\u021C\x074\x02\x02\u021C\u021E\x05l7\x02\u021D\u021B\x03\x02\x02\x02" +
    "\u021E\u0221\x03\x02\x02\x02\u021F\u021D\x03\x02\x02\x02\u021F\u0220\x03" +
    "\x02\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221\u021F\x03\x02\x02\x02\u0222" +
    "\u0224\x074\x02\x02\u0223\u0222\x03\x02\x02\x02\u0223\u0224\x03\x02\x02" +
    "\x02\u0224\u0226\x03\x02\x02\x02\u0225\u021A\x03\x02\x02\x02\u0225\u0226" +
    "\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u0228\x072\x02\x02" +
    "\u0228O\x03\x02\x02\x02\u0229\u022B\x05L\'\x02\u022A\u0229\x03\x02\x02" +
    "\x02\u022B\u022E\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022C\u022D" +
    "\x03\x02\x02\x02\u022D\u022F\x03\x02\x02\x02\u022E\u022C\x03\x02\x02\x02" +
    "\u022F\u0231\x05R*\x02\u0230\u0232\x078\x02\x02\u0231\u0230\x03\x02\x02" +
    "\x02\u0231\u0232\x03\x02\x02\x02\u0232\u02B0\x03\x02\x02\x02\u0233\u0235" +
    "\x05L\'\x02\u0234\u0233\x03\x02\x02\x02\u0235\u0238\x03\x02\x02\x02\u0236" +
    "\u0234\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0239\x03\x02" +
    "\x02\x02\u0238\u0236\x03\x02\x02\x02\u0239\u023B\x05T+\x02\u023A\u023C" +
    "\x078\x02\x02\u023B\u023A\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02" +
    "\u023C\u02B0\x03\x02\x02\x02\u023D\u023F\x05L\'\x02\u023E\u023D\x03\x02" +
    "\x02\x02\u023F\u0242\x03\x02\x02\x02\u0240\u023E\x03\x02\x02\x02\u0240" +
    "\u0241\x03\x02\x02\x02\u0241\u0243\x03\x02\x02\x02\u0242\u0240\x03\x02" +
    "\x02\x02\u0243\u0245\x05Z.\x02\u0244\u0246\x078\x02\x02\u0245\u0244\x03" +
    "\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u02B0\x03\x02\x02\x02\u0247" +
    "\u0249\x05L\'\x02\u0248\u0247\x03\x02\x02\x02\u0249\u024C\x03\x02\x02" +
    "\x02\u024A\u0248\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024D" +
    "\x03\x02\x02\x02\u024C\u024A\x03\x02\x02\x02\u024D\u024F\x05p9\x02\u024E" +
    "\u0250\x078\x02\x02\u024F\u024E\x03\x02\x02\x02\u024F\u0250\x03\x02\x02" +
    "\x02\u0250\u02B0\x03\x02\x02\x02\u0251\u0253\x05L\'\x02\u0252\u0251\x03" +
    "\x02\x02\x02\u0253\u0256\x03\x02\x02\x02\u0254\u0252\x03\x02\x02\x02\u0254" +
    "\u0255\x03\x02\x02\x02\u0255\u0257\x03\x02\x02\x02\u0256\u0254\x03\x02" +
    "\x02\x02\u0257\u0259\x05t;\x02\u0258\u025A\x078\x02\x02\u0259\u0258\x03" +
    "\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\u02B0\x03\x02\x02\x02\u025B" +
    "\u025D\x05L\'\x02\u025C\u025B\x03\x02\x02\x02\u025D\u0260\x03\x02\x02" +
    "\x02\u025E\u025C\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u0261" +
    "\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0261\u0262\x07\v\x02\x02" +
    "\u0262\u0264\x05^0\x02\u0263\u0265\x05N(\x02\u0264\u0263\x03\x02\x02\x02" +
    "\u0264\u0265\x03\x02\x02\x02\u0265\u0267\x03\x02\x02\x02\u0266\u0268\x07" +
    "8\x02\x02\u0267\u0266\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268" +
    "\u02B0\x03\x02\x02\x02\u0269\u026B\x05L\'\x02\u026A\u0269\x03\x02\x02" +
    "\x02\u026B\u026E\x03\x02\x02\x02\u026C\u026A\x03\x02\x02\x02\u026C\u026D" +
    "\x03\x02\x02\x02\u026D\u026F\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02" +
    "\u026F\u0270\x07\r\x02\x02\u0270\u0271\x07;\x02\x02\u0271\u0273\x05^0" +
    "\x02\u0272\u0274\x078\x02\x02\u0273\u0272\x03\x02\x02\x02\u0273\u0274" +
    "\x03\x02\x02\x02\u0274\u02B0\x03\x02\x02\x02\u0275\u0277\x05L\'\x02\u0276" +
    "\u0275\x03\x02\x02\x02\u0277\u027A\x03\x02\x02\x02\u0278\u0276\x03\x02" +
    "\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027B\x03\x02\x02\x02\u027A" +
    "\u0278\x03\x02\x02\x02\u027B\u027D\x07\n\x02\x02\u027C\u027E\x07;\x02" +
    "\x02\u027D\u027C\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E\u027F" +
    "\x03\x02\x02\x02\u027F\u0281\x05^0\x02\u0280\u0282\x05N(\x02\u0281\u0280" +
    "\x03\x02\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282\u0284\x03\x02\x02\x02" +
    "\u0283\u0285\x078\x02\x02\u0284\u0283\x03\x02\x02\x02\u0284\u0285\x03" +
    "\x02\x02\x02\u0285\u02B0\x03\x02\x02\x02\u0286\u0288\x05L\'\x02\u0287" +
    "\u0286\x03\x02\x02\x02\u0288\u028B\x03\x02\x02\x02\u0289\u0287\x03\x02" +
    "\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u028C\x03\x02\x02\x02\u028B" +
    "\u0289\x03\x02\x02\x02\u028C\u028D\x07*\x02\x02\u028D\u028F\x05^0\x02" +
    "\u028E\u0290\x078\x02\x02\u028F\u028E\x03\x02\x02\x02\u028F\u0290\x03" +
    "\x02\x02\x02\u0290\u02B0\x03\x02\x02\x02\u0291\u0293\x05L\'\x02\u0292" +
    "\u0291\x03\x02\x02\x02\u0293\u0296\x03\x02\x02\x02\u0294\u0292\x03\x02" +
    "\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0297\x03\x02\x02\x02\u0296" +
    "\u0294\x03\x02\x02\x02\u0297\u0298\x07&\x02\x02\u0298\u0299\x05^0\x02" +
    "\u0299\u029A\x078\x02\x02\u029A\u02B0\x03\x02\x02\x02\u029B\u029D\x05" +
    "L\'\x02\u029C\u029B\x03\x02\x02\x02\u029D\u02A0\x03\x02\x02\x02\u029E" +
    "\u029C\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F\u02A1\x03\x02" +
    "\x02\x02\u02A0\u029E\x03\x02\x02\x02\u02A1\u02A2\x07%\x02\x02\u02A2\u02A3" +
    "\x05^0\x02\u02A3\u02A4\x078\x02\x02\u02A4\u02B0\x03\x02\x02\x02\u02A5" +
    "\u02A7\x05L\'\x02\u02A6\u02A5\x03\x02\x02\x02\u02A7\u02AA\x03\x02\x02" +
    "\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02AB" +
    "\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AB\u02AD\x05^0\x02\u02AC" +
    "\u02AE\x078\x02\x02\u02AD\u02AC\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02" +
    "\x02\u02AE\u02B0\x03\x02\x02\x02\u02AF\u022C\x03\x02\x02\x02\u02AF\u0236" +
    "\x03\x02\x02\x02\u02AF\u0240\x03\x02\x02\x02\u02AF\u024A\x03\x02\x02\x02" +
    "\u02AF\u0254\x03\x02\x02\x02\u02AF\u025E\x03\x02\x02\x02\u02AF\u026C\x03" +
    "\x02\x02\x02\u02AF\u0278\x03\x02\x02\x02\u02AF\u0289\x03\x02\x02\x02\u02AF" +
    "\u0294\x03\x02\x02\x02\u02AF\u029E\x03\x02\x02\x02\u02AF\u02A8\x03\x02" +
    "\x02\x02\u02B0Q\x03\x02\x02\x02\u02B1\u02B2\x07#\x02\x02\u02B2\u02B5\x05" +
    "X-\x02\u02B3\u02B4\x07C\x02\x02\u02B4\u02B6\x05^0\x02\u02B5\u02B3\x03" +
    "\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6S\x03\x02\x02\x02\u02B7" +
    "\u02B8\x07$\x02\x02\u02B8\u02B9\x05v<\x02\u02B9\u02BA\x07C\x02\x02\u02BA" +
    "\u02BB\x05^0\x02\u02BBU\x03\x02\x02\x02\u02BC\u02BF\x05v<\x02\u02BD\u02BE" +
    "\x079\x02\x02\u02BE\u02C0\x05<\x1F\x02\u02BF\u02BD\x03\x02\x02\x02\u02BF" +
    "\u02C0\x03\x02\x02\x02\u02C0W\x03\x02\x02\x02\u02C1\u02D8\x05V,\x02\u02C2" +
    "\u02C3\x071\x02\x02\u02C3\u02C7\x05V,\x02\u02C4\u02C6\x074\x02\x02\u02C5" +
    "\u02C4\x03\x02\x02\x02\u02C6\u02C9\x03\x02\x02\x02\u02C7\u02C5\x03\x02" +
    "\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02CA\x03\x02\x02\x02\u02C9" +
    "\u02C7\x03\x02\x02\x02\u02CA\u02CB\x072\x02\x02\u02CB\u02D8\x03\x02\x02" +
    "\x02\u02CC\u02CD\x07/\x02\x02\u02CD\u02D2\x05V,\x02\u02CE\u02CF\x074\x02" +
    "\x02\u02CF\u02D1\x05V,\x02\u02D0\u02CE\x03\x02\x02\x02\u02D1\u02D4\x03" +
    "\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3" +
    "\u02D5\x03\x02\x02\x02\u02D4\u02D2\x03\x02\x02\x02\u02D5\u02D6\x070\x02" +
    "\x02\u02D6\u02D8\x03\x02\x02\x02\u02D7\u02C1\x03\x02\x02\x02\u02D7\u02C2" +
    "\x03\x02\x02\x02\u02D7\u02CC\x03\x02\x02\x02\u02D8Y\x03\x02\x02\x02\u02D9" +
    "\u02DA\x05\\/\x02\u02DA\u02DB\t\x03\x02\x02\u02DB\u02DC\x05^0\x02\u02DC" +
    "[\x03\x02\x02\x02\u02DD\u02EF\x05v<\x02\u02DE\u02DF\x05^0\x02\u02DF\u02E0" +
    "\x073\x02\x02\u02E0\u02E1\x05v<\x02\u02E1\u02EF\x03\x02\x02\x02\u02E2" +
    "\u02E3\x05^0\x02\u02E3\u02E4\x07/\x02\x02\u02E4\u02E9\x05^0\x02\u02E5" +
    "\u02E6\x074\x02\x02\u02E6\u02E8\x05^0\x02\u02E7\u02E5\x03\x02\x02\x02" +
    "\u02E8\u02EB\x03\x02\x02\x02\u02E9\u02E7\x03\x02\x02\x02\u02E9\u02EA\x03" +
    "\x02\x02\x02\u02EA\u02EC\x03\x02\x02\x02\u02EB\u02E9\x03\x02\x02\x02\u02EC" +
    "\u02ED\x070\x02\x02\u02ED\u02EF\x03\x02\x02\x02\u02EE\u02DD\x03\x02\x02" +
    "\x02\u02EE\u02DE\x03\x02\x02\x02\u02EE\u02E2\x03\x02\x02\x02\u02EF]\x03" +
    "\x02\x02\x02\u02F0\u02F1\b0\x01\x02\u02F1\u02F2\x07-\x02\x02\u02F2\u02F3" +
    "\x05^0\x02\u02F3\u02F4\x07.\x02\x02\u02F4\u0337\x03\x02\x02\x02\u02F5" +
    "\u02F6\x05<\x1F\x02\u02F6\u02F7\x07:\x02\x02\u02F7\u02F8\x05v<\x02\u02F8" +
    "\u0337\x03\x02\x02\x02\u02F9\u02FB\x05<\x1F\x02\u02FA\u02FC\x077\x02\x02" +
    "\u02FB\u02FA\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FC\u02FD\x03" +
    "\x02\x02\x02\u02FD\u0306\x07-\x02\x02\u02FE\u0303\x05j6\x02\u02FF\u0300" +
    "\x074\x02\x02\u0300\u0302\x05j6\x02\u0301\u02FF\x03\x02\x02\x02\u0302" +
    "\u0305\x03\x02\x02\x02\u0303\u0301\x03\x02\x02\x02\u0303\u0304\x03\x02" +
    "\x02\x02\u0304\u0307\x03\x02\x02\x02\u0305\u0303\x03\x02\x02\x02\u0306" +
    "\u02FE\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307\u0308\x03\x02" +
    "\x02\x02\u0308\u0309\x07.\x02\x02\u0309\u0337\x03\x02\x02\x02\u030A\u0337" +
    "\x05f4\x02\u030B\u030C\x07\x1B\x02\x02\u030C\u0337\x05^0\x0F\u030D\u0337" +
    "\x05p9\x02\u030E\u030F\x07\f\x02\x02\u030F\u0337\x05^0\v\u0310\u0311\x07" +
    "%\x02\x02\u0311\u0312\x05^0\x02\u0312\u0313\x078\x02\x02\u0313\u0337\x03" +
    "\x02\x02\x02\u0314\u0337\x05b2\x02\u0315\u031E\x07/\x02\x02\u0316\u031B" +
    "\x05^0\x02\u0317\u0318\x074\x02\x02\u0318\u031A\x05^0\x02\u0319\u0317" +
    "\x03\x02\x02\x02\u031A\u031D\x03\x02\x02\x02\u031B\u0319\x03\x02\x02\x02" +
    "\u031B\u031C\x03\x02\x02\x02\u031C\u031F\x03\x02\x02\x02\u031D\u031B\x03" +
    "\x02\x02\x02\u031E\u0316\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02\u031F" +
    "\u0320\x03\x02\x02\x02\u0320\u0337\x070\x02\x02\u0321\u0323\x05<\x1F\x02" +
    "\u0322\u0321\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323\u0324\x03" +
    "\x02\x02\x02\u0324\u0330\x071\x02\x02\u0325\u032A\x05l7\x02\u0326\u0327" +
    "\x074\x02\x02\u0327\u0329\x05l7\x02\u0328\u0326\x03\x02\x02\x02\u0329" +
    "\u032C\x03\x02\x02\x02\u032A\u0328\x03\x02\x02\x02\u032A\u032B\x03\x02" +
    "\x02\x02\u032B\u032E\x03\x02\x02\x02\u032C\u032A\x03\x02\x02\x02\u032D" +
    "\u032F\x074\x02\x02\u032E\u032D\x03\x02\x02\x02\u032E\u032F\x03\x02\x02" +
    "\x02\u032F\u0331\x03\x02\x02\x02\u0330\u0325\x03\x02\x02\x02\u0330\u0331" +
    "\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332\u0337\x072\x02\x02" +
    "\u0333\u0337\x05B\"\x02\u0334\u0337\x05n8\x02\u0335\u0337\x05v<\x02\u0336" +
    "\u02F0\x03\x02\x02\x02\u0336\u02F5\x03\x02\x02\x02\u0336\u02F9\x03\x02" +
    "\x02\x02\u0336\u030A\x03\x02\x02\x02\u0336\u030B\x03\x02\x02\x02\u0336" +
    "\u030D\x03\x02\x02\x02\u0336\u030E\x03\x02\x02\x02\u0336\u0310\x03\x02" +
    "\x02\x02\u0336\u0314\x03\x02\x02\x02\u0336\u0315\x03\x02\x02\x02\u0336" +
    "\u0322\x03\x02\x02\x02\u0336\u0333\x03\x02\x02\x02\u0336\u0334\x03\x02" +
    "\x02\x02\u0336\u0335\x03\x02\x02\x02\u0337\u0384\x03\x02\x02\x02\u0338" +
    "\u033A\f\x1F\x02\x02\u0339\u033B\t\x04\x02\x02\u033A\u0339\x03\x02\x02" +
    "\x02\u033A\u033B\x03\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C\u033D" +
    "\x073\x02\x02\u033D\u0383\x05v<\x02\u033E\u033F\f\x1E\x02\x02\u033F\u0340" +
    "\x07+\x02\x02\u0340\u0383\x05<\x1F\x02\u0341\u0342\f\x1D\x02\x02\u0342" +
    "\u0343\x07/\x02\x02\u0343\u0348\x05j6\x02\u0344\u0345\x074\x02\x02\u0345" +
    "\u0347\x05j6\x02\u0346\u0344\x03\x02\x02\x02\u0347\u034A\x03\x02\x02\x02" +
    "\u0348\u0346\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349\u034B\x03" +
    "\x02\x02\x02\u034A\u0348\x03\x02\x02\x02\u034B\u034C\x070\x02\x02\u034C" +
    "\u0383\x03\x02\x02\x02\u034D\u034E\f\x1C\x02\x02\u034E\u034F\x07:\x02" +
    "\x02\u034F\u0383\x05v<\x02\u0350\u0352\f\x1A\x02\x02\u0351\u0353\x077" +
    "\x02\x02\u0352\u0351\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353" +
    "\u0354\x03\x02\x02\x02\u0354\u035D\x07-\x02\x02\u0355\u035A\x05j6\x02" +
    "\u0356\u0357\x074\x02\x02\u0357\u0359\x05j6\x02\u0358\u0356\x03\x02\x02" +
    "\x02\u0359\u035C\x03\x02\x02\x02\u035A\u0358\x03\x02\x02\x02\u035A\u035B" +
    "\x03\x02\x02\x02\u035B\u035E\x03\x02\x02\x02\u035C\u035A\x03\x02\x02\x02" +
    "\u035D\u0355\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\u035F\x03" +
    "\x02\x02\x02\u035F\u0383\x07.\x02\x02\u0360\u0361\f\x18\x02\x02\u0361" +
    "\u0362\t\x05\x02\x02\u0362\u0383\x05^0\x02\u0363\u0364\f\x17\x02\x02\u0364" +
    "\u0365\t\x06\x02\x02\u0365\u0383\x05^0\x02\u0366\u0367\f\x16\x02\x02\u0367" +
    "\u0368\t\x07\x02\x02\u0368\u0383\x05^0\x02\u0369\u036A\f\x15\x02\x02\u036A" +
    "\u036B\t\b\x02\x02\u036B\u0383\x05^0\x02\u036C\u036D\f\x14\x02\x02\u036D" +
    "\u0383\x076\x02\x02\u036E\u036F\f\x13\x02\x02\u036F\u0371\x07\x17\x02" +
    "\x02\u0370\u0372\x07\x1B\x02\x02\u0371\u0370\x03\x02\x02\x02\u0371\u0372" +
    "\x03\x02\x02\x02\u0372\u0373\x03\x02\x02\x02\u0373\u0383\x05<\x1F\x02" +
    "\u0374\u0375\f\x12\x02\x02\u0375\u0376\x07\x13\x02\x02\u0376\u0383\x05" +
    "^0\x02\u0377\u0378\f\x11\x02\x02\u0378\u0379\x075\x02\x02\u0379\u0383" +
    "\x05^0\x02\u037A\u037B\f\x0E\x02\x02\u037B\u037C\x07\x1E\x02\x02\u037C" +
    "\u0383\x05^0\x02\u037D\u037E\f\r\x02\x02\u037E\u037F\x07\x1F\x02\x02\u037F" +
    "\u0383\x05^0\x02\u0380\u0381\f\x03\x02\x02\u0381\u0383\x07,\x02\x02\u0382" +
    "\u0338\x03\x02\x02\x02\u0382\u033E\x03\x02\x02\x02\u0382\u0341\x03\x02" +
    "\x02\x02\u0382\u034D\x03\x02\x02\x02\u0382\u0350\x03\x02\x02\x02\u0382" +
    "\u0360\x03\x02\x02\x02\u0382\u0363\x03\x02\x02\x02\u0382\u0366\x03\x02" +
    "\x02\x02\u0382\u0369\x03\x02\x02\x02\u0382\u036C\x03\x02\x02\x02\u0382" +
    "\u036E\x03\x02\x02\x02\u0382\u0374\x03\x02\x02\x02\u0382\u0377\x03\x02" +
    "\x02\x02\u0382\u037A\x03\x02\x02\x02\u0382\u037D\x03\x02\x02\x02\u0382" +
    "\u0380\x03\x02\x02\x02\u0383\u0386\x03\x02\x02\x02\u0384\u0382\x03\x02" +
    "\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385_\x03\x02\x02\x02\u0386\u0384" +
    "\x03\x02\x02\x02\u0387\u0390\x07@\x02\x02\u0388\u038D\x05\x10\t\x02\u0389" +
    "\u038A\x074\x02\x02\u038A\u038C\x05\x10\t\x02\u038B\u0389\x03\x02\x02" +
    "\x02\u038C\u038F\x03\x02\x02\x02\u038D\u038B\x03\x02\x02\x02\u038D\u038E" +
    "\x03\x02\x02\x02\u038E\u0391\x03\x02\x02\x02\u038F\u038D\x03\x02\x02\x02" +
    "\u0390\u0388\x03\x02\x02\x02\u0390\u0391\x03\x02\x02\x02\u0391\u0392\x03" +
    "\x02\x02\x02\u0392\u0393\x07@\x02\x02\u0393a\x03\x02\x02\x02\u0394\u0396" +
    "\x077\x02\x02\u0395\u0394\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02" +
    "\u0396\u0397\x03\x02\x02\x02\u0397\u039E\x05`1\x02\u0398\u0399\x07>\x02" +
    "\x02\u0399\u039B\x05<\x1F\x02\u039A\u0398\x03\x02\x02\x02\u039A\u039B" +
    "\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u039F\x05d3\x02\u039D" +
    "\u039F\x05P)\x02\u039E\u039A\x03\x02\x02\x02\u039E\u039D\x03\x02\x02\x02" +
    "\u039Fc\x03\x02\x02\x02\u03A0\u03A4\x071\x02\x02\u03A1\u03A3\x05P)\x02" +
    "\u03A2\u03A1\x03\x02\x02\x02\u03A3\u03A6\x03\x02\x02\x02\u03A4\u03A2\x03" +
    "\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5\u03A7\x03\x02\x02\x02\u03A6" +
    "\u03A4\x03\x02\x02\x02\u03A7\u03A8\x072\x02\x02\u03A8e\x03\x02\x02\x02" +
    "\u03A9\u03AA\x07\x18\x02\x02\u03AA\u03AE\x05d3\x02\u03AB\u03AD\x05h5\x02" +
    "\u03AC\u03AB\x03\x02\x02\x02\u03AD\u03B0\x03\x02\x02\x02\u03AE\u03AC\x03" +
    "\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02\u03AF\u03B2\x03\x02\x02\x02\u03B0" +
    "\u03AE\x03\x02\x02\x02\u03B1\u03B3\x05r:\x02\u03B2\u03B1\x03\x02\x02\x02" +
    "\u03B2\u03B3\x03\x02\x02\x02\u03B3g\x03\x02\x02\x02\u03B4\u03B5\x07\x19" +
    "\x02\x02\u03B5\u03B6\x05<\x1F\x02\u03B6\u03B7\x05d3\x02\u03B7\u03C0\x03" +
    "\x02\x02\x02\u03B8\u03B9\x07\x19\x02\x02\u03B9\u03BA\x05v<\x02\u03BA\u03BB" +
    "\x079\x02\x02\u03BB\u03BC\x05<\x1F\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD" +
    "\u03BE\x05d3\x02\u03BE\u03C0\x03\x02\x02\x02\u03BF\u03B4\x03\x02\x02\x02" +
    "\u03BF\u03B8\x03\x02\x02\x02\u03C0i\x03\x02\x02\x02\u03C1\u03C2\x05v<" +
    "\x02\u03C2\u03C3\x07C\x02\x02\u03C3\u03C5\x03\x02\x02\x02\u03C4\u03C1" +
    "\x03\x02\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02\x02" +
    "\u03C6\u03C7\x05^0\x02\u03C7k\x03\x02\x02\x02\u03C8\u03CB\x05v<\x02\u03C9" +
    "\u03CA\x079\x02\x02\u03CA\u03CC\x05^0\x02\u03CB\u03C9\x03\x02\x02\x02" +
    "\u03CB\u03CC\x03\x02\x02\x02\u03CCm\x03\x02\x02\x02\u03CD\u03D3\x07V\x02" +
    "\x02\u03CE\u03D3\x07W\x02\x02\u03CF\u03D3\x07X\x02\x02\u03D0\u03D3\x07" +
    "Y\x02\x02\u03D1\u03D3\x07\x1C\x02\x02\u03D2\u03CD\x03\x02\x02\x02\u03D2" +
    "\u03CE\x03\x02\x02\x02\u03D2\u03CF\x03\x02\x02\x02\u03D2\u03D0\x03\x02" +
    "\x02\x02\u03D2\u03D1\x03\x02\x02\x02\u03D3o\x03\x02\x02\x02\u03D4\u03D5" +
    "\x07\x16\x02\x02\u03D5\u03D6\x05^0\x02\u03D6\u03D8\x05d3\x02\u03D7\u03D9" +
    "\x05r:\x02\u03D8\u03D7\x03\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02\u03D9" +
    "q\x03\x02\x02\x02\u03DA\u03DB\x07\x1A\x02\x02\u03DB\u03DF\x05d3\x02\u03DC" +
    "\u03DD\x07\x1A\x02\x02\u03DD\u03DF\x05P)\x02\u03DE\u03DA\x03\x02\x02\x02" +
    "\u03DE\u03DC\x03\x02\x02\x02\u03DFs\x03\x02\x02\x02\u03E0\u03E1\x07\x12" +
    "\x02\x02\u03E1\u03E2\x05X-\x02\u03E2\u03E3\x07\x13\x02\x02\u03E3\u03E4" +
    "\x05^0\x02\u03E4\u03E5\x05d3\x02\u03E5u\x03\x02\x02\x02\u03E6\u03E9\x07" +
    "U\x02\x02\u03E7\u03E9\x05x=\x02\u03E8\u03E6\x03\x02\x02\x02\u03E8\u03E7" +
    "\x03\x02\x02\x02\u03E9w\x03\x02\x02\x02\u03EA\u03EB\t\t\x02\x02\u03EB" +
    "y\x03\x02\x02\x02\x81}\x86\x8C\x90\x98\xA0\xB0\xB8\xCA\xCE\xD4\xD6\xDD" +
    "\xE6\xE9\xFA\xFE\u0100\u010E\u0112\u0114\u011D\u0127\u0130\u0138\u013A" +
    "\u013F\u014E\u0157\u0163\u016D\u0172\u017E\u0182\u0189\u018F\u0197\u019B" +
    "\u01AA\u01AD\u01B1\u01B8\u01BB\u01BD\u01C8\u01D0\u01D9\u01DD\u01E5\u01E8" +
    "\u01ED\u01F5\u01F9\u01FD\u0207\u020C\u0214\u0217\u021F\u0223\u0225\u022C" +
    "\u0231\u0236\u023B\u0240\u0245\u024A\u024F\u0254\u0259\u025E\u0264\u0267" +
    "\u026C\u0273\u0278\u027D\u0281\u0284\u0289\u028F\u0294\u029E\u02A8\u02AD" +
    "\u02AF\u02B5\u02BF\u02C7\u02D2\u02D7\u02E9\u02EE\u02FB\u0303\u0306\u031B" +
    "\u031E\u0322\u032A\u032E\u0330\u0336\u033A\u0348\u0352\u035A\u035D\u0371" +
    "\u0382\u0384\u038D\u0390\u0395\u039A\u039E\u03A4\u03AE\u03B2\u03BF\u03C4" +
    "\u03CB\u03D2\u03D8\u03DE\u03E8";
CWScriptParser._serializedATN = Utils.join([
    CWScriptParser._serializedATNSegment0,
    CWScriptParser._serializedATNSegment1,
], "");
class SourceFileContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(CWScriptParser.EOF, 0); }
    topLevelStmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(TopLevelStmtContext);
        }
        else {
            return this.getRuleContext(i, TopLevelStmtContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_sourceFile; }
    // @Override
    enterRule(listener) {
        if (listener.enterSourceFile) {
            listener.enterSourceFile(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSourceFile) {
            listener.exitSourceFile(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSourceFile) {
            return visitor.visitSourceFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SourceFileContext = SourceFileContext;
class TopLevelStmtContext extends ParserRuleContext_1.ParserRuleContext {
    importStmt() {
        return this.tryGetRuleContext(0, ImportStmtContext);
    }
    contractDefn() {
        return this.tryGetRuleContext(0, ContractDefnContext);
    }
    interfaceDefn() {
        return this.tryGetRuleContext(0, InterfaceDefnContext);
    }
    constStmt_() {
        return this.tryGetRuleContext(0, ConstStmt_Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_topLevelStmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterTopLevelStmt) {
            listener.enterTopLevelStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTopLevelStmt) {
            listener.exitTopLevelStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTopLevelStmt) {
            return visitor.visitTopLevelStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TopLevelStmtContext = TopLevelStmtContext;
class ContractDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._interfaces = [];
    }
    CONTRACT() { return this.getToken(CWScriptParser.CONTRACT, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    EXTENDS() { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
    IMPLEMENTS() { return this.tryGetToken(CWScriptParser.IMPLEMENTS, 0); }
    contractBlock() {
        return this.tryGetRuleContext(0, ContractBlockContext);
    }
    typePath(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypePathContext);
        }
        else {
            return this.getRuleContext(i, TypePathContext);
        }
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_contractDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterContractDefn) {
            listener.enterContractDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContractDefn) {
            listener.exitContractDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContractDefn) {
            return visitor.visitContractDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContractDefnContext = ContractDefnContext;
class InterfaceDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INTERFACE() { return this.getToken(CWScriptParser.INTERFACE, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    EXTENDS() { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
    contractBlock() {
        return this.tryGetRuleContext(0, ContractBlockContext);
    }
    typePath() {
        return this.tryGetRuleContext(0, TypePathContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_interfaceDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterfaceDefn) {
            listener.enterInterfaceDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterfaceDefn) {
            listener.exitInterfaceDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceDefn) {
            return visitor.visitInterfaceDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceDefnContext = InterfaceDefnContext;
class ContractBlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._body = [];
    }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    contractItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(ContractItemContext);
        }
        else {
            return this.getRuleContext(i, ContractItemContext);
        }
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_contractBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterContractBlock) {
            listener.enterContractBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContractBlock) {
            listener.exitContractBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContractBlock) {
            return visitor.visitContractBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContractBlockContext = ContractBlockContext;
class ImportStmtContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_importStmt; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ImportStmtContext = ImportStmtContext;
class ImportAllStmtContext extends ImportStmtContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    IMPORT() { return this.getToken(CWScriptParser.IMPORT, 0); }
    MUL() { return this.getToken(CWScriptParser.MUL, 0); }
    FROM() { return this.getToken(CWScriptParser.FROM, 0); }
    StringLiteral() { return this.tryGetToken(CWScriptParser.StringLiteral, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterImportAllStmt) {
            listener.enterImportAllStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImportAllStmt) {
            listener.exitImportAllStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImportAllStmt) {
            return visitor.visitImportAllStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImportAllStmtContext = ImportAllStmtContext;
class ImportItemsStmtContext extends ImportStmtContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._items = [];
        this.copyFrom(ctx);
    }
    IMPORT() { return this.getToken(CWScriptParser.IMPORT, 0); }
    FROM() { return this.getToken(CWScriptParser.FROM, 0); }
    StringLiteral() { return this.tryGetToken(CWScriptParser.StringLiteral, 0); }
    LBRACE() { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
    ident(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterImportItemsStmt) {
            listener.enterImportItemsStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImportItemsStmt) {
            listener.exitImportItemsStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImportItemsStmt) {
            return visitor.visitImportItemsStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImportItemsStmtContext = ImportItemsStmtContext;
class ContractItemContext extends ParserRuleContext_1.ParserRuleContext {
    typeDefn() {
        return this.tryGetRuleContext(0, TypeDefnContext);
    }
    constStmt_() {
        return this.tryGetRuleContext(0, ConstStmt_Context);
    }
    fnDefn() {
        return this.tryGetRuleContext(0, FnDefnContext);
    }
    errorDefn() {
        return this.tryGetRuleContext(0, ErrorDefnContext);
    }
    errorDefnBlock() {
        return this.tryGetRuleContext(0, ErrorDefnBlockContext);
    }
    eventDefn() {
        return this.tryGetRuleContext(0, EventDefnContext);
    }
    eventDefnBlock() {
        return this.tryGetRuleContext(0, EventDefnBlockContext);
    }
    stateDefnBlock() {
        return this.tryGetRuleContext(0, StateDefnBlockContext);
    }
    instantiateDefn() {
        return this.tryGetRuleContext(0, InstantiateDefnContext);
    }
    instantiateDecl() {
        return this.tryGetRuleContext(0, InstantiateDeclContext);
    }
    execDefn() {
        return this.tryGetRuleContext(0, ExecDefnContext);
    }
    execDecl() {
        return this.tryGetRuleContext(0, ExecDeclContext);
    }
    queryDefn() {
        return this.tryGetRuleContext(0, QueryDefnContext);
    }
    queryDecl() {
        return this.tryGetRuleContext(0, QueryDeclContext);
    }
    replyDefn() {
        return this.tryGetRuleContext(0, ReplyDefnContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_contractItem; }
    // @Override
    enterRule(listener) {
        if (listener.enterContractItem) {
            listener.enterContractItem(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContractItem) {
            listener.exitContractItem(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContractItem) {
            return visitor.visitContractItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContractItemContext = ContractItemContext;
class ParamContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    COLON() { return this.tryGetToken(CWScriptParser.COLON, 0); }
    QUEST() { return this.tryGetToken(CWScriptParser.QUEST, 0); }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    EQ() { return this.tryGetToken(CWScriptParser.EQ, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_param; }
    // @Override
    enterRule(listener) {
        if (listener.enterParam) {
            listener.enterParam(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParam) {
            listener.exitParam(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParam) {
            return visitor.visitParam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParamContext = ParamContext;
class ParamListContext extends ParserRuleContext_1.ParserRuleContext {
    param(i) {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }
        else {
            return this.getRuleContext(i, ParamContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_paramList; }
    // @Override
    enterRule(listener) {
        if (listener.enterParamList) {
            listener.enterParamList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParamList) {
            listener.exitParamList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParamListContext = ParamListContext;
class FnParamsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._params = [];
    }
    LPAREN() { return this.getToken(CWScriptParser.LPAREN, 0); }
    RPAREN() { return this.getToken(CWScriptParser.RPAREN, 0); }
    param(i) {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }
        else {
            return this.getRuleContext(i, ParamContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_fnParams; }
    // @Override
    enterRule(listener) {
        if (listener.enterFnParams) {
            listener.enterFnParams(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFnParams) {
            listener.exitFnParams(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFnParams) {
            return visitor.visitFnParams(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FnParamsContext = FnParamsContext;
class StructDefn_fnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    fnParams() {
        return this.tryGetRuleContext(0, FnParamsContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_structDefn_fn; }
    // @Override
    enterRule(listener) {
        if (listener.enterStructDefn_fn) {
            listener.enterStructDefn_fn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStructDefn_fn) {
            listener.exitStructDefn_fn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStructDefn_fn) {
            return visitor.visitStructDefn_fn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructDefn_fnContext = StructDefn_fnContext;
class ErrorDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ERROR() { return this.getToken(CWScriptParser.ERROR, 0); }
    structDefn_fn() {
        return this.getRuleContext(0, StructDefn_fnContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_errorDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterErrorDefn) {
            listener.enterErrorDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitErrorDefn) {
            listener.exitErrorDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitErrorDefn) {
            return visitor.visitErrorDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ErrorDefnContext = ErrorDefnContext;
class ErrorDefnBlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._defns = [];
    }
    ERROR() { return this.getToken(CWScriptParser.ERROR, 0); }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    structDefn_fn(i) {
        if (i === undefined) {
            return this.getRuleContexts(StructDefn_fnContext);
        }
        else {
            return this.getRuleContext(i, StructDefn_fnContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_errorDefnBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterErrorDefnBlock) {
            listener.enterErrorDefnBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitErrorDefnBlock) {
            listener.exitErrorDefnBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitErrorDefnBlock) {
            return visitor.visitErrorDefnBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ErrorDefnBlockContext = ErrorDefnBlockContext;
class EventDefnContext extends ParserRuleContext_1.ParserRuleContext {
    EVENT() { return this.getToken(CWScriptParser.EVENT, 0); }
    structDefn_fn() {
        return this.getRuleContext(0, StructDefn_fnContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_eventDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterEventDefn) {
            listener.enterEventDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEventDefn) {
            listener.exitEventDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEventDefn) {
            return visitor.visitEventDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EventDefnContext = EventDefnContext;
class EventDefnBlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._defns = [];
    }
    EVENT() { return this.getToken(CWScriptParser.EVENT, 0); }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    structDefn_fn(i) {
        if (i === undefined) {
            return this.getRuleContexts(StructDefn_fnContext);
        }
        else {
            return this.getRuleContext(i, StructDefn_fnContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_eventDefnBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterEventDefnBlock) {
            listener.enterEventDefnBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEventDefnBlock) {
            listener.exitEventDefnBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEventDefnBlock) {
            return visitor.visitEventDefnBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EventDefnBlockContext = EventDefnBlockContext;
class StateDefnBlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._defns = [];
    }
    STATE() { return this.getToken(CWScriptParser.STATE, 0); }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    stateDefn(i) {
        if (i === undefined) {
            return this.getRuleContexts(StateDefnContext);
        }
        else {
            return this.getRuleContext(i, StateDefnContext);
        }
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_stateDefnBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterStateDefnBlock) {
            listener.enterStateDefnBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStateDefnBlock) {
            listener.exitStateDefnBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStateDefnBlock) {
            return visitor.visitStateDefnBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StateDefnBlockContext = StateDefnBlockContext;
class StateDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_stateDefn; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.StateDefnContext = StateDefnContext;
class StateDefn_ItemContext extends StateDefnContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    COLON() { return this.getToken(CWScriptParser.COLON, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    EQ() { return this.tryGetToken(CWScriptParser.EQ, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStateDefn_Item) {
            listener.enterStateDefn_Item(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStateDefn_Item) {
            listener.exitStateDefn_Item(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStateDefn_Item) {
            return visitor.visitStateDefn_Item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StateDefn_ItemContext = StateDefn_ItemContext;
class StateDefn_MapContext extends StateDefnContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._mapKeys = [];
        this.copyFrom(ctx);
    }
    LBRACK() { return this.getToken(CWScriptParser.LBRACK, 0); }
    RBRACK() { return this.getToken(CWScriptParser.RBRACK, 0); }
    COLON() { return this.getToken(CWScriptParser.COLON, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    mapKeyDefn(i) {
        if (i === undefined) {
            return this.getRuleContexts(MapKeyDefnContext);
        }
        else {
            return this.getRuleContext(i, MapKeyDefnContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    EQ() { return this.tryGetToken(CWScriptParser.EQ, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStateDefn_Map) {
            listener.enterStateDefn_Map(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStateDefn_Map) {
            listener.exitStateDefn_Map(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStateDefn_Map) {
            return visitor.visitStateDefn_Map(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StateDefn_MapContext = StateDefn_MapContext;
class MapKeyDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COLON() { return this.tryGetToken(CWScriptParser.COLON, 0); }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_mapKeyDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterMapKeyDefn) {
            listener.enterMapKeyDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMapKeyDefn) {
            listener.exitMapKeyDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMapKeyDefn) {
            return visitor.visitMapKeyDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MapKeyDefnContext = MapKeyDefnContext;
class InstantiateDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    HASH() { return this.getToken(CWScriptParser.HASH, 0); }
    INSTANTIATE() { return this.getToken(CWScriptParser.INSTANTIATE, 0); }
    fnParams() {
        return this.getRuleContext(0, FnParamsContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_instantiateDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterInstantiateDefn) {
            listener.enterInstantiateDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInstantiateDefn) {
            listener.exitInstantiateDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInstantiateDefn) {
            return visitor.visitInstantiateDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InstantiateDefnContext = InstantiateDefnContext;
class InstantiateDeclContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    HASH() { return this.getToken(CWScriptParser.HASH, 0); }
    INSTANTIATE() { return this.getToken(CWScriptParser.INSTANTIATE, 0); }
    fnParams() {
        return this.getRuleContext(0, FnParamsContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_instantiateDecl; }
    // @Override
    enterRule(listener) {
        if (listener.enterInstantiateDecl) {
            listener.enterInstantiateDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInstantiateDecl) {
            listener.exitInstantiateDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInstantiateDecl) {
            return visitor.visitInstantiateDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InstantiateDeclContext = InstantiateDeclContext;
class ExecDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EXEC() { return this.getToken(CWScriptParser.EXEC, 0); }
    HASH() { return this.getToken(CWScriptParser.HASH, 0); }
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    fnParams() {
        return this.getRuleContext(0, FnParamsContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    MUL() { return this.tryGetToken(CWScriptParser.MUL, 0); }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_execDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterExecDefn) {
            listener.enterExecDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExecDefn) {
            listener.exitExecDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExecDefn) {
            return visitor.visitExecDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExecDefnContext = ExecDefnContext;
class ExecDeclContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EXEC() { return this.getToken(CWScriptParser.EXEC, 0); }
    HASH() { return this.getToken(CWScriptParser.HASH, 0); }
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    fnParams() {
        return this.getRuleContext(0, FnParamsContext);
    }
    MUL() { return this.tryGetToken(CWScriptParser.MUL, 0); }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_execDecl; }
    // @Override
    enterRule(listener) {
        if (listener.enterExecDecl) {
            listener.enterExecDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExecDecl) {
            listener.exitExecDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExecDecl) {
            return visitor.visitExecDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExecDeclContext = ExecDeclContext;
class QueryDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    QUERY() { return this.getToken(CWScriptParser.QUERY, 0); }
    HASH() { return this.getToken(CWScriptParser.HASH, 0); }
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    fnParams() {
        return this.getRuleContext(0, FnParamsContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    ARROW() { return this.tryGetToken(CWScriptParser.ARROW, 0); }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_queryDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterQueryDefn) {
            listener.enterQueryDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQueryDefn) {
            listener.exitQueryDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQueryDefn) {
            return visitor.visitQueryDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryDefnContext = QueryDefnContext;
class QueryDeclContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    QUERY() { return this.getToken(CWScriptParser.QUERY, 0); }
    HASH() { return this.getToken(CWScriptParser.HASH, 0); }
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    fnParams() {
        return this.getRuleContext(0, FnParamsContext);
    }
    ARROW() { return this.tryGetToken(CWScriptParser.ARROW, 0); }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_queryDecl; }
    // @Override
    enterRule(listener) {
        if (listener.enterQueryDecl) {
            listener.enterQueryDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQueryDecl) {
            listener.exitQueryDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQueryDecl) {
            return visitor.visitQueryDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryDeclContext = QueryDeclContext;
class ReplyDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    REPLY() { return this.getToken(CWScriptParser.REPLY, 0); }
    ident(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    }
    fnParams() {
        return this.getRuleContext(0, FnParamsContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    DOT() { return this.tryGetToken(CWScriptParser.DOT, 0); }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_replyDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterReplyDefn) {
            listener.enterReplyDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReplyDefn) {
            listener.exitReplyDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReplyDefn) {
            return visitor.visitReplyDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReplyDefnContext = ReplyDefnContext;
class EnumDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._variants = [];
    }
    ENUM() { return this.getToken(CWScriptParser.ENUM, 0); }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    variant_(i) {
        if (i === undefined) {
            return this.getRuleContexts(Variant_Context);
        }
        else {
            return this.getRuleContext(i, Variant_Context);
        }
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_enumDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterEnumDefn) {
            listener.enterEnumDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnumDefn) {
            listener.exitEnumDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumDefn) {
            return visitor.visitEnumDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumDefnContext = EnumDefnContext;
class Variant_Context extends ParserRuleContext_1.ParserRuleContext {
    variant_struct() {
        return this.tryGetRuleContext(0, Variant_structContext);
    }
    variant_unit() {
        return this.tryGetRuleContext(0, Variant_unitContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_variant_; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariant_) {
            listener.enterVariant_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariant_) {
            listener.exitVariant_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariant_) {
            return visitor.visitVariant_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Variant_Context = Variant_Context;
class Variant_structContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    HASH() { return this.getToken(CWScriptParser.HASH, 0); }
    LPAREN() { return this.tryGetToken(CWScriptParser.LPAREN, 0); }
    RPAREN() { return this.tryGetToken(CWScriptParser.RPAREN, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    paramList() {
        return this.tryGetRuleContext(0, ParamListContext);
    }
    LBRACE() { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_variant_struct; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariant_struct) {
            listener.enterVariant_struct(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariant_struct) {
            listener.exitVariant_struct(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariant_struct) {
            return visitor.visitVariant_struct(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Variant_structContext = Variant_structContext;
class Variant_unitContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    HASH() { return this.getToken(CWScriptParser.HASH, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_variant_unit; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariant_unit) {
            listener.enterVariant_unit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariant_unit) {
            listener.exitVariant_unit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariant_unit) {
            return visitor.visitVariant_unit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Variant_unitContext = Variant_unitContext;
class TypeExprContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_typeExpr; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.TypeExprContext = TypeExprContext;
class PathTContext extends TypeExprContext {
    typePath() {
        return this.getRuleContext(0, TypePathContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPathT) {
            listener.enterPathT(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPathT) {
            listener.exitPathT(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPathT) {
            return visitor.visitPathT(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PathTContext = PathTContext;
class VariantTContext extends TypeExprContext {
    typeVariant() {
        return this.getRuleContext(0, TypeVariantContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterVariantT) {
            listener.enterVariantT(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariantT) {
            listener.exitVariantT(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariantT) {
            return visitor.visitVariantT(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariantTContext = VariantTContext;
class LensTContext extends TypeExprContext {
    typeLens() {
        return this.getRuleContext(0, TypeLensContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLensT) {
            listener.enterLensT(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLensT) {
            listener.exitLensT(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLensT) {
            return visitor.visitLensT(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LensTContext = LensTContext;
class OptionTContext extends TypeExprContext {
    typeExpr() {
        return this.getRuleContext(0, TypeExprContext);
    }
    QUEST() { return this.getToken(CWScriptParser.QUEST, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOptionT) {
            listener.enterOptionT(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOptionT) {
            listener.exitOptionT(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOptionT) {
            return visitor.visitOptionT(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OptionTContext = OptionTContext;
class ListTContext extends TypeExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    typeExpr() {
        return this.getRuleContext(0, TypeExprContext);
    }
    LBRACK() { return this.getToken(CWScriptParser.LBRACK, 0); }
    RBRACK() { return this.getToken(CWScriptParser.RBRACK, 0); }
    IntLiteral() { return this.tryGetToken(CWScriptParser.IntLiteral, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterListT) {
            listener.enterListT(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitListT) {
            listener.exitListT(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitListT) {
            return visitor.visitListT(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ListTContext = ListTContext;
class TupleTContext extends TypeExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._items = [];
        this.copyFrom(ctx);
    }
    LBRACK() { return this.getToken(CWScriptParser.LBRACK, 0); }
    RBRACK() { return this.getToken(CWScriptParser.RBRACK, 0); }
    typeExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeExprContext);
        }
        else {
            return this.getRuleContext(i, TypeExprContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTupleT) {
            listener.enterTupleT(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTupleT) {
            listener.exitTupleT(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTupleT) {
            return visitor.visitTupleT(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TupleTContext = TupleTContext;
class DefnTContext extends TypeExprContext {
    typeDefn() {
        return this.getRuleContext(0, TypeDefnContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDefnT) {
            listener.enterDefnT(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDefnT) {
            listener.exitDefnT(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDefnT) {
            return visitor.visitDefnT(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DefnTContext = DefnTContext;
class TypeLensContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    typePath() {
        return this.getRuleContext(0, TypePathContext);
    }
    INSTANTIATE() { return this.tryGetToken(CWScriptParser.INSTANTIATE, 0); }
    EXEC() { return this.tryGetToken(CWScriptParser.EXEC, 0); }
    QUERY() { return this.tryGetToken(CWScriptParser.QUERY, 0); }
    MUT() { return this.tryGetToken(CWScriptParser.MUT, 0); }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_typeLens; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeLens) {
            listener.enterTypeLens(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeLens) {
            listener.exitTypeLens(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeLens) {
            return visitor.visitTypeLens(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeLensContext = TypeLensContext;
class TypePathContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._segments = [];
    }
    ident(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.DOT);
        }
        else {
            return this.getToken(CWScriptParser.DOT, i);
        }
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_typePath; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypePath) {
            listener.enterTypePath(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypePath) {
            listener.exitTypePath(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypePath) {
            return visitor.visitTypePath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypePathContext = TypePathContext;
class TypeVariantContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    typePath() {
        return this.getRuleContext(0, TypePathContext);
    }
    DOT() { return this.tryGetToken(CWScriptParser.DOT, 0); }
    HASH() { return this.tryGetToken(CWScriptParser.HASH, 0); }
    LPAREN() { return this.tryGetToken(CWScriptParser.LPAREN, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    RPAREN() { return this.tryGetToken(CWScriptParser.RPAREN, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_typeVariant; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeVariant) {
            listener.enterTypeVariant(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeVariant) {
            listener.exitTypeVariant(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeVariant) {
            return visitor.visitTypeVariant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeVariantContext = TypeVariantContext;
class TypeDefnContext extends ParserRuleContext_1.ParserRuleContext {
    structDefn() {
        return this.tryGetRuleContext(0, StructDefnContext);
    }
    enumDefn() {
        return this.tryGetRuleContext(0, EnumDefnContext);
    }
    typeAliasDefn() {
        return this.tryGetRuleContext(0, TypeAliasDefnContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_typeDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeDefn) {
            listener.enterTypeDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeDefn) {
            listener.exitTypeDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeDefn) {
            return visitor.visitTypeDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeDefnContext = TypeDefnContext;
class StructDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._members = [];
    }
    STRUCT() { return this.getToken(CWScriptParser.STRUCT, 0); }
    LPAREN() { return this.tryGetToken(CWScriptParser.LPAREN, 0); }
    RPAREN() { return this.tryGetToken(CWScriptParser.RPAREN, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    param(i) {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }
        else {
            return this.getRuleContext(i, ParamContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    LBRACE() { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_structDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterStructDefn) {
            listener.enterStructDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStructDefn) {
            listener.exitStructDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStructDefn) {
            return visitor.visitStructDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructDefnContext = StructDefnContext;
class TypeAliasDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    TYPE() { return this.getToken(CWScriptParser.TYPE, 0); }
    EQ() { return this.getToken(CWScriptParser.EQ, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_typeAliasDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeAliasDefn) {
            listener.enterTypeAliasDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeAliasDefn) {
            listener.exitTypeAliasDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeAliasDefn) {
            return visitor.visitTypeAliasDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeAliasDefnContext = TypeAliasDefnContext;
class FnDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FN() { return this.getToken(CWScriptParser.FN, 0); }
    fnParams() {
        return this.getRuleContext(0, FnParamsContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    ARROW() { return this.tryGetToken(CWScriptParser.ARROW, 0); }
    BANG() { return this.tryGetToken(CWScriptParser.BANG, 0); }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_fnDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterFnDefn) {
            listener.enterFnDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFnDefn) {
            listener.exitFnDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFnDefn) {
            return visitor.visitFnDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FnDefnContext = FnDefnContext;
class AnnotContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._args = [];
    }
    AT() { return this.getToken(CWScriptParser.AT, 0); }
    typePath() {
        return this.tryGetRuleContext(0, TypePathContext);
    }
    LPAREN() { return this.tryGetToken(CWScriptParser.LPAREN, 0); }
    RPAREN() { return this.tryGetToken(CWScriptParser.RPAREN, 0); }
    arg() {
        return this.tryGetRuleContext(0, ArgContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_annot; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnot) {
            listener.enterAnnot(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnot) {
            listener.exitAnnot(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnot) {
            return visitor.visitAnnot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotContext = AnnotContext;
class CallOptionsContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
    memberVal(i) {
        if (i === undefined) {
            return this.getRuleContexts(MemberValContext);
        }
        else {
            return this.getRuleContext(i, MemberValContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_callOptions; }
    // @Override
    enterRule(listener) {
        if (listener.enterCallOptions) {
            listener.enterCallOptions(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCallOptions) {
            listener.exitCallOptions(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCallOptions) {
            return visitor.visitCallOptions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CallOptionsContext = CallOptionsContext;
class StmtContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_stmt; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.StmtContext = StmtContext;
class LetStmtContext extends StmtContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._ann = [];
        this.copyFrom(ctx);
    }
    letStmt_() {
        return this.getRuleContext(0, LetStmt_Context);
    }
    SEMI() { return this.tryGetToken(CWScriptParser.SEMI, 0); }
    annot(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotContext);
        }
        else {
            return this.getRuleContext(i, AnnotContext);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLetStmt) {
            listener.enterLetStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLetStmt) {
            listener.exitLetStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLetStmt) {
            return visitor.visitLetStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LetStmtContext = LetStmtContext;
class ConstStmtContext extends StmtContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._ann = [];
        this.copyFrom(ctx);
    }
    constStmt_() {
        return this.getRuleContext(0, ConstStmt_Context);
    }
    SEMI() { return this.tryGetToken(CWScriptParser.SEMI, 0); }
    annot(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotContext);
        }
        else {
            return this.getRuleContext(i, AnnotContext);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterConstStmt) {
            listener.enterConstStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstStmt) {
            listener.exitConstStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstStmt) {
            return visitor.visitConstStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstStmtContext = ConstStmtContext;
class AssignStmtContext extends StmtContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._ann = [];
        this.copyFrom(ctx);
    }
    assignStmt_() {
        return this.getRuleContext(0, AssignStmt_Context);
    }
    SEMI() { return this.tryGetToken(CWScriptParser.SEMI, 0); }
    annot(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotContext);
        }
        else {
            return this.getRuleContext(i, AnnotContext);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignStmt) {
            listener.enterAssignStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignStmt) {
            listener.exitAssignStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignStmt) {
            return visitor.visitAssignStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignStmtContext = AssignStmtContext;
class IfStmtContext extends StmtContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._ann = [];
        this.copyFrom(ctx);
    }
    ifStmt_() {
        return this.getRuleContext(0, IfStmt_Context);
    }
    SEMI() { return this.tryGetToken(CWScriptParser.SEMI, 0); }
    annot(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotContext);
        }
        else {
            return this.getRuleContext(i, AnnotContext);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIfStmt) {
            listener.enterIfStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfStmt) {
            listener.exitIfStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfStmt) {
            return visitor.visitIfStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfStmtContext = IfStmtContext;
class ForStmtContext extends StmtContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._ann = [];
        this.copyFrom(ctx);
    }
    forStmt_() {
        return this.getRuleContext(0, ForStmt_Context);
    }
    SEMI() { return this.tryGetToken(CWScriptParser.SEMI, 0); }
    annot(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotContext);
        }
        else {
            return this.getRuleContext(i, AnnotContext);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterForStmt) {
            listener.enterForStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitForStmt) {
            listener.exitForStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForStmt) {
            return visitor.visitForStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForStmtContext = ForStmtContext;
class ExecStmtContext extends StmtContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._ann = [];
        this.copyFrom(ctx);
    }
    EXEC_NOW() { return this.getToken(CWScriptParser.EXEC_NOW, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    SEMI() { return this.tryGetToken(CWScriptParser.SEMI, 0); }
    annot(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotContext);
        }
        else {
            return this.getRuleContext(i, AnnotContext);
        }
    }
    callOptions() {
        return this.tryGetRuleContext(0, CallOptionsContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExecStmt) {
            listener.enterExecStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExecStmt) {
            listener.exitExecStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExecStmt) {
            return visitor.visitExecStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExecStmtContext = ExecStmtContext;
class DelegateExecStmtContext extends StmtContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._ann = [];
        this.copyFrom(ctx);
    }
    DELEGATE_EXEC() { return this.getToken(CWScriptParser.DELEGATE_EXEC, 0); }
    HASH() { return this.getToken(CWScriptParser.HASH, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    SEMI() { return this.tryGetToken(CWScriptParser.SEMI, 0); }
    annot(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotContext);
        }
        else {
            return this.getRuleContext(i, AnnotContext);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDelegateExecStmt) {
            listener.enterDelegateExecStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDelegateExecStmt) {
            listener.exitDelegateExecStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDelegateExecStmt) {
            return visitor.visitDelegateExecStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DelegateExecStmtContext = DelegateExecStmtContext;
class InstantiateStmtContext extends StmtContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._ann = [];
        this.copyFrom(ctx);
    }
    INSTANTIATE_NOW() { return this.getToken(CWScriptParser.INSTANTIATE_NOW, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    SEMI() { return this.tryGetToken(CWScriptParser.SEMI, 0); }
    annot(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotContext);
        }
        else {
            return this.getRuleContext(i, AnnotContext);
        }
    }
    HASH() { return this.tryGetToken(CWScriptParser.HASH, 0); }
    callOptions() {
        return this.tryGetRuleContext(0, CallOptionsContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInstantiateStmt) {
            listener.enterInstantiateStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInstantiateStmt) {
            listener.exitInstantiateStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInstantiateStmt) {
            return visitor.visitInstantiateStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InstantiateStmtContext = InstantiateStmtContext;
class EmitStmtContext extends StmtContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._ann = [];
        this.copyFrom(ctx);
    }
    EMIT() { return this.getToken(CWScriptParser.EMIT, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    SEMI() { return this.tryGetToken(CWScriptParser.SEMI, 0); }
    annot(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotContext);
        }
        else {
            return this.getRuleContext(i, AnnotContext);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterEmitStmt) {
            listener.enterEmitStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEmitStmt) {
            listener.exitEmitStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEmitStmt) {
            return visitor.visitEmitStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EmitStmtContext = EmitStmtContext;
class ReturnStmtContext extends StmtContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._ann = [];
        this.copyFrom(ctx);
    }
    RETURN() { return this.getToken(CWScriptParser.RETURN, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    SEMI() { return this.getToken(CWScriptParser.SEMI, 0); }
    annot(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotContext);
        }
        else {
            return this.getRuleContext(i, AnnotContext);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterReturnStmt) {
            listener.enterReturnStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReturnStmt) {
            listener.exitReturnStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReturnStmt) {
            return visitor.visitReturnStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReturnStmtContext = ReturnStmtContext;
class FailStmtContext extends StmtContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._ann = [];
        this.copyFrom(ctx);
    }
    FAIL() { return this.getToken(CWScriptParser.FAIL, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    SEMI() { return this.getToken(CWScriptParser.SEMI, 0); }
    annot(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotContext);
        }
        else {
            return this.getRuleContext(i, AnnotContext);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFailStmt) {
            listener.enterFailStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFailStmt) {
            listener.exitFailStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFailStmt) {
            return visitor.visitFailStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FailStmtContext = FailStmtContext;
class ExprStmtContext extends StmtContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._ann = [];
        this.copyFrom(ctx);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    SEMI() { return this.tryGetToken(CWScriptParser.SEMI, 0); }
    annot(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotContext);
        }
        else {
            return this.getRuleContext(i, AnnotContext);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExprStmt) {
            listener.enterExprStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExprStmt) {
            listener.exitExprStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExprStmt) {
            return visitor.visitExprStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprStmtContext = ExprStmtContext;
class LetStmt_Context extends ParserRuleContext_1.ParserRuleContext {
    LET() { return this.getToken(CWScriptParser.LET, 0); }
    let_binding() {
        return this.getRuleContext(0, Let_bindingContext);
    }
    EQ() { return this.tryGetToken(CWScriptParser.EQ, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_letStmt_; }
    // @Override
    enterRule(listener) {
        if (listener.enterLetStmt_) {
            listener.enterLetStmt_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLetStmt_) {
            listener.exitLetStmt_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLetStmt_) {
            return visitor.visitLetStmt_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LetStmt_Context = LetStmt_Context;
class ConstStmt_Context extends ParserRuleContext_1.ParserRuleContext {
    CONST() { return this.getToken(CWScriptParser.CONST, 0); }
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    EQ() { return this.getToken(CWScriptParser.EQ, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_constStmt_; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstStmt_) {
            listener.enterConstStmt_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstStmt_) {
            listener.exitConstStmt_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstStmt_) {
            return visitor.visitConstStmt_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstStmt_Context = ConstStmt_Context;
class IdentBinding_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    COLON() { return this.tryGetToken(CWScriptParser.COLON, 0); }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_identBinding_; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentBinding_) {
            listener.enterIdentBinding_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentBinding_) {
            listener.exitIdentBinding_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentBinding_) {
            return visitor.visitIdentBinding_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentBinding_Context = IdentBinding_Context;
class Let_bindingContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_let_binding; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.Let_bindingContext = Let_bindingContext;
class IdentBindingContext extends Let_bindingContext {
    identBinding_() {
        return this.getRuleContext(0, IdentBinding_Context);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentBinding) {
            listener.enterIdentBinding(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentBinding) {
            listener.exitIdentBinding(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentBinding) {
            return visitor.visitIdentBinding(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentBindingContext = IdentBindingContext;
class StructBindingContext extends Let_bindingContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._bindings = [];
        this.copyFrom(ctx);
    }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    identBinding_() {
        return this.tryGetRuleContext(0, IdentBinding_Context);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStructBinding) {
            listener.enterStructBinding(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStructBinding) {
            listener.exitStructBinding(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStructBinding) {
            return visitor.visitStructBinding(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructBindingContext = StructBindingContext;
class TupleBindingContext extends Let_bindingContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._bindings = [];
        this.copyFrom(ctx);
    }
    LBRACK() { return this.getToken(CWScriptParser.LBRACK, 0); }
    RBRACK() { return this.getToken(CWScriptParser.RBRACK, 0); }
    identBinding_(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentBinding_Context);
        }
        else {
            return this.getRuleContext(i, IdentBinding_Context);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTupleBinding) {
            listener.enterTupleBinding(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTupleBinding) {
            listener.exitTupleBinding(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTupleBinding) {
            return visitor.visitTupleBinding(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TupleBindingContext = TupleBindingContext;
class AssignStmt_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    assignLHS() {
        return this.tryGetRuleContext(0, AssignLHSContext);
    }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    EQ() { return this.tryGetToken(CWScriptParser.EQ, 0); }
    PLUS_EQ() { return this.tryGetToken(CWScriptParser.PLUS_EQ, 0); }
    MINUS_EQ() { return this.tryGetToken(CWScriptParser.MINUS_EQ, 0); }
    MUL_EQ() { return this.tryGetToken(CWScriptParser.MUL_EQ, 0); }
    DIV_EQ() { return this.tryGetToken(CWScriptParser.DIV_EQ, 0); }
    MOD_EQ() { return this.tryGetToken(CWScriptParser.MOD_EQ, 0); }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_assignStmt_; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignStmt_) {
            listener.enterAssignStmt_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignStmt_) {
            listener.exitAssignStmt_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignStmt_) {
            return visitor.visitAssignStmt_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignStmt_Context = AssignStmt_Context;
class AssignLHSContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_assignLHS; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.AssignLHSContext = AssignLHSContext;
class IdentLHSContext extends AssignLHSContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentLHS) {
            listener.enterIdentLHS(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentLHS) {
            listener.exitIdentLHS(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentLHS) {
            return visitor.visitIdentLHS(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentLHSContext = IdentLHSContext;
class DotLHSContext extends AssignLHSContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    DOT() { return this.getToken(CWScriptParser.DOT, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDotLHS) {
            listener.enterDotLHS(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDotLHS) {
            listener.exitDotLHS(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDotLHS) {
            return visitor.visitDotLHS(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DotLHSContext = DotLHSContext;
class IndexLHSContext extends AssignLHSContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._args = [];
        this.copyFrom(ctx);
    }
    LBRACK() { return this.getToken(CWScriptParser.LBRACK, 0); }
    RBRACK() { return this.getToken(CWScriptParser.RBRACK, 0); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIndexLHS) {
            listener.enterIndexLHS(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIndexLHS) {
            listener.exitIndexLHS(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIndexLHS) {
            return visitor.visitIndexLHS(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IndexLHSContext = IndexLHSContext;
class ExprContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_expr; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ExprContext = ExprContext;
class GroupedExprContext extends ExprContext {
    LPAREN() { return this.getToken(CWScriptParser.LPAREN, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    RPAREN() { return this.getToken(CWScriptParser.RPAREN, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterGroupedExpr) {
            listener.enterGroupedExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGroupedExpr) {
            listener.exitGroupedExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGroupedExpr) {
            return visitor.visitGroupedExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GroupedExprContext = GroupedExprContext;
class DotExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    DOT() { return this.getToken(CWScriptParser.DOT, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    BANG() { return this.tryGetToken(CWScriptParser.BANG, 0); }
    QUEST() { return this.tryGetToken(CWScriptParser.QUEST, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterDotExpr) {
            listener.enterDotExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDotExpr) {
            listener.exitDotExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDotExpr) {
            return visitor.visitDotExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DotExprContext = DotExprContext;
class AsExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    AS() { return this.getToken(CWScriptParser.AS, 0); }
    typeExpr() {
        return this.getRuleContext(0, TypeExprContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAsExpr) {
            listener.enterAsExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAsExpr) {
            listener.exitAsExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAsExpr) {
            return visitor.visitAsExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AsExprContext = AsExprContext;
class IndexExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._args = [];
        this.copyFrom(ctx);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    LBRACK() { return this.getToken(CWScriptParser.LBRACK, 0); }
    RBRACK() { return this.getToken(CWScriptParser.RBRACK, 0); }
    arg(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgContext);
        }
        else {
            return this.getRuleContext(i, ArgContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIndexExpr) {
            listener.enterIndexExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIndexExpr) {
            listener.exitIndexExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIndexExpr) {
            return visitor.visitIndexExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IndexExprContext = IndexExprContext;
class DColonExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    D_COLON() { return this.getToken(CWScriptParser.D_COLON, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDColonExpr) {
            listener.enterDColonExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDColonExpr) {
            listener.exitDColonExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDColonExpr) {
            return visitor.visitDColonExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DColonExprContext = DColonExprContext;
class TypeDColonExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    typeExpr() {
        return this.getRuleContext(0, TypeExprContext);
    }
    D_COLON() { return this.getToken(CWScriptParser.D_COLON, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeDColonExpr) {
            listener.enterTypeDColonExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeDColonExpr) {
            listener.exitTypeDColonExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeDColonExpr) {
            return visitor.visitTypeDColonExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeDColonExprContext = TypeDColonExprContext;
class FnCallExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._args = [];
        this.copyFrom(ctx);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    LPAREN() { return this.getToken(CWScriptParser.LPAREN, 0); }
    RPAREN() { return this.getToken(CWScriptParser.RPAREN, 0); }
    BANG() { return this.tryGetToken(CWScriptParser.BANG, 0); }
    arg(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgContext);
        }
        else {
            return this.getRuleContext(i, ArgContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFnCallExpr) {
            listener.enterFnCallExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFnCallExpr) {
            listener.exitFnCallExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFnCallExpr) {
            return visitor.visitFnCallExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FnCallExprContext = FnCallExprContext;
class TypeFnCallExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._args = [];
        this.copyFrom(ctx);
    }
    typeExpr() {
        return this.getRuleContext(0, TypeExprContext);
    }
    LPAREN() { return this.getToken(CWScriptParser.LPAREN, 0); }
    RPAREN() { return this.getToken(CWScriptParser.RPAREN, 0); }
    BANG() { return this.tryGetToken(CWScriptParser.BANG, 0); }
    arg(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgContext);
        }
        else {
            return this.getRuleContext(i, ArgContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeFnCallExpr) {
            listener.enterTypeFnCallExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeFnCallExpr) {
            listener.exitTypeFnCallExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeFnCallExpr) {
            return visitor.visitTypeFnCallExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeFnCallExprContext = TypeFnCallExprContext;
class MulExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    MUL() { return this.tryGetToken(CWScriptParser.MUL, 0); }
    DIV() { return this.tryGetToken(CWScriptParser.DIV, 0); }
    MOD() { return this.tryGetToken(CWScriptParser.MOD, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterMulExpr) {
            listener.enterMulExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMulExpr) {
            listener.exitMulExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMulExpr) {
            return visitor.visitMulExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MulExprContext = MulExprContext;
class AddExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    PLUS() { return this.tryGetToken(CWScriptParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(CWScriptParser.MINUS, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterAddExpr) {
            listener.enterAddExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAddExpr) {
            listener.exitAddExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAddExpr) {
            return visitor.visitAddExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AddExprContext = AddExprContext;
class CompExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    LT() { return this.tryGetToken(CWScriptParser.LT, 0); }
    GT() { return this.tryGetToken(CWScriptParser.GT, 0); }
    LT_EQ() { return this.tryGetToken(CWScriptParser.LT_EQ, 0); }
    GT_EQ() { return this.tryGetToken(CWScriptParser.GT_EQ, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterCompExpr) {
            listener.enterCompExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCompExpr) {
            listener.exitCompExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCompExpr) {
            return visitor.visitCompExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CompExprContext = CompExprContext;
class EqExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    EQ_EQ() { return this.tryGetToken(CWScriptParser.EQ_EQ, 0); }
    NEQ() { return this.tryGetToken(CWScriptParser.NEQ, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterEqExpr) {
            listener.enterEqExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEqExpr) {
            listener.exitEqExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEqExpr) {
            return visitor.visitEqExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EqExprContext = EqExprContext;
class NoneCheckExprContext extends ExprContext {
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    QUEST() { return this.getToken(CWScriptParser.QUEST, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNoneCheckExpr) {
            listener.enterNoneCheckExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNoneCheckExpr) {
            listener.exitNoneCheckExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNoneCheckExpr) {
            return visitor.visitNoneCheckExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NoneCheckExprContext = NoneCheckExprContext;
class IsExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    IS() { return this.getToken(CWScriptParser.IS, 0); }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    NOT() { return this.tryGetToken(CWScriptParser.NOT, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterIsExpr) {
            listener.enterIsExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIsExpr) {
            listener.exitIsExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIsExpr) {
            return visitor.visitIsExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IsExprContext = IsExprContext;
class InExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    IN() { return this.getToken(CWScriptParser.IN, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterInExpr) {
            listener.enterInExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInExpr) {
            listener.exitInExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInExpr) {
            return visitor.visitInExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InExprContext = InExprContext;
class ShortTryExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    D_QUEST() { return this.getToken(CWScriptParser.D_QUEST, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterShortTryExpr) {
            listener.enterShortTryExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitShortTryExpr) {
            listener.exitShortTryExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitShortTryExpr) {
            return visitor.visitShortTryExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ShortTryExprContext = ShortTryExprContext;
class TryCatchElseExprContext extends ExprContext {
    tryCatchElseExpr_() {
        return this.getRuleContext(0, TryCatchElseExpr_Context);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTryCatchElseExpr) {
            listener.enterTryCatchElseExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTryCatchElseExpr) {
            listener.exitTryCatchElseExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTryCatchElseExpr) {
            return visitor.visitTryCatchElseExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TryCatchElseExprContext = TryCatchElseExprContext;
class NotExprContext extends ExprContext {
    NOT() { return this.getToken(CWScriptParser.NOT, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNotExpr) {
            listener.enterNotExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNotExpr) {
            listener.exitNotExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNotExpr) {
            return visitor.visitNotExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NotExprContext = NotExprContext;
class AndExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    AND() { return this.getToken(CWScriptParser.AND, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterAndExpr) {
            listener.enterAndExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAndExpr) {
            listener.exitAndExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAndExpr) {
            return visitor.visitAndExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AndExprContext = AndExprContext;
class OrExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    OR() { return this.getToken(CWScriptParser.OR, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterOrExpr) {
            listener.enterOrExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOrExpr) {
            listener.exitOrExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOrExpr) {
            return visitor.visitOrExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OrExprContext = OrExprContext;
class IfExprContext extends ExprContext {
    ifStmt_() {
        return this.getRuleContext(0, IfStmt_Context);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIfExpr) {
            listener.enterIfExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfExpr) {
            listener.exitIfExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfExpr) {
            return visitor.visitIfExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfExprContext = IfExprContext;
class QueryNowExprContext extends ExprContext {
    QUERY_NOW() { return this.getToken(CWScriptParser.QUERY_NOW, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterQueryNowExpr) {
            listener.enterQueryNowExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQueryNowExpr) {
            listener.exitQueryNowExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQueryNowExpr) {
            return visitor.visitQueryNowExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryNowExprContext = QueryNowExprContext;
class FailExprContext extends ExprContext {
    FAIL() { return this.getToken(CWScriptParser.FAIL, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    SEMI() { return this.getToken(CWScriptParser.SEMI, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFailExpr) {
            listener.enterFailExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFailExpr) {
            listener.exitFailExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFailExpr) {
            return visitor.visitFailExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FailExprContext = FailExprContext;
class ClosureExprContext extends ExprContext {
    closure() {
        return this.getRuleContext(0, ClosureContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterClosureExpr) {
            listener.enterClosureExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClosureExpr) {
            listener.exitClosureExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClosureExpr) {
            return visitor.visitClosureExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClosureExprContext = ClosureExprContext;
class TupleExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._items = [];
        this.copyFrom(ctx);
    }
    LBRACK() { return this.getToken(CWScriptParser.LBRACK, 0); }
    RBRACK() { return this.getToken(CWScriptParser.RBRACK, 0); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTupleExpr) {
            listener.enterTupleExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTupleExpr) {
            listener.exitTupleExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTupleExpr) {
            return visitor.visitTupleExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TupleExprContext = TupleExprContext;
class StructExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._members = [];
        this.copyFrom(ctx);
    }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    memberVal(i) {
        if (i === undefined) {
            return this.getRuleContexts(MemberValContext);
        }
        else {
            return this.getRuleContext(i, MemberValContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStructExpr) {
            listener.enterStructExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStructExpr) {
            listener.exitStructExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStructExpr) {
            return visitor.visitStructExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructExprContext = StructExprContext;
class UnitVariantExprContext extends ExprContext {
    typeVariant() {
        return this.getRuleContext(0, TypeVariantContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterUnitVariantExpr) {
            listener.enterUnitVariantExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnitVariantExpr) {
            listener.exitUnitVariantExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnitVariantExpr) {
            return visitor.visitUnitVariantExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnitVariantExprContext = UnitVariantExprContext;
class LiteralExprContext extends ExprContext {
    literal() {
        return this.getRuleContext(0, LiteralContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLiteralExpr) {
            listener.enterLiteralExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLiteralExpr) {
            listener.exitLiteralExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteralExpr) {
            return visitor.visitLiteralExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LiteralExprContext = LiteralExprContext;
class IdentExprContext extends ExprContext {
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentExpr) {
            listener.enterIdentExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentExpr) {
            listener.exitIdentExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentExpr) {
            return visitor.visitIdentExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentExprContext = IdentExprContext;
class Grouped2ExprContext extends ExprContext {
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    TILDE() { return this.getToken(CWScriptParser.TILDE, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterGrouped2Expr) {
            listener.enterGrouped2Expr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGrouped2Expr) {
            listener.exitGrouped2Expr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGrouped2Expr) {
            return visitor.visitGrouped2Expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Grouped2ExprContext = Grouped2ExprContext;
class ClosureParamsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._params = [];
    }
    BAR(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.BAR);
        }
        else {
            return this.getToken(CWScriptParser.BAR, i);
        }
    }
    param(i) {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }
        else {
            return this.getRuleContext(i, ParamContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_closureParams; }
    // @Override
    enterRule(listener) {
        if (listener.enterClosureParams) {
            listener.enterClosureParams(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClosureParams) {
            listener.exitClosureParams(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClosureParams) {
            return visitor.visitClosureParams(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClosureParamsContext = ClosureParamsContext;
class ClosureContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    stmt() {
        return this.tryGetRuleContext(0, StmtContext);
    }
    closureParams() {
        return this.tryGetRuleContext(0, ClosureParamsContext);
    }
    BANG() { return this.tryGetToken(CWScriptParser.BANG, 0); }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    ARROW() { return this.tryGetToken(CWScriptParser.ARROW, 0); }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_closure; }
    // @Override
    enterRule(listener) {
        if (listener.enterClosure) {
            listener.enterClosure(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClosure) {
            listener.exitClosure(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClosure) {
            return visitor.visitClosure(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClosureContext = ClosureContext;
class BlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._body = [];
    }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }
        else {
            return this.getRuleContext(i, StmtContext);
        }
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_block; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockContext = BlockContext;
class TryCatchElseExpr_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._catches = [];
    }
    TRY() { return this.getToken(CWScriptParser.TRY, 0); }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    catchClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(CatchClauseContext);
        }
        else {
            return this.getRuleContext(i, CatchClauseContext);
        }
    }
    elseClause() {
        return this.tryGetRuleContext(0, ElseClauseContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_tryCatchElseExpr_; }
    // @Override
    enterRule(listener) {
        if (listener.enterTryCatchElseExpr_) {
            listener.enterTryCatchElseExpr_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTryCatchElseExpr_) {
            listener.exitTryCatchElseExpr_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTryCatchElseExpr_) {
            return visitor.visitTryCatchElseExpr_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TryCatchElseExpr_Context = TryCatchElseExpr_Context;
class CatchClauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_catchClause; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.CatchClauseContext = CatchClauseContext;
class CatchContext extends CatchClauseContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    CATCH() { return this.getToken(CWScriptParser.CATCH, 0); }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCatch) {
            listener.enterCatch(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCatch) {
            listener.exitCatch(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCatch) {
            return visitor.visitCatch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CatchContext = CatchContext;
class CatchBindContext extends CatchClauseContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    CATCH() { return this.getToken(CWScriptParser.CATCH, 0); }
    COLON() { return this.tryGetToken(CWScriptParser.COLON, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCatchBind) {
            listener.enterCatchBind(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCatchBind) {
            listener.exitCatchBind(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCatchBind) {
            return visitor.visitCatchBind(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CatchBindContext = CatchBindContext;
class ArgContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EQ() { return this.tryGetToken(CWScriptParser.EQ, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_arg; }
    // @Override
    enterRule(listener) {
        if (listener.enterArg) {
            listener.enterArg(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArg) {
            listener.exitArg(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArg) {
            return visitor.visitArg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArgContext = ArgContext;
class MemberValContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    COLON() { return this.tryGetToken(CWScriptParser.COLON, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_memberVal; }
    // @Override
    enterRule(listener) {
        if (listener.enterMemberVal) {
            listener.enterMemberVal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMemberVal) {
            listener.exitMemberVal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMemberVal) {
            return visitor.visitMemberVal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MemberValContext = MemberValContext;
class LiteralContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_literal; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.LiteralContext = LiteralContext;
class StringLitContext extends LiteralContext {
    StringLiteral() { return this.getToken(CWScriptParser.StringLiteral, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStringLit) {
            listener.enterStringLit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStringLit) {
            listener.exitStringLit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStringLit) {
            return visitor.visitStringLit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StringLitContext = StringLitContext;
class IntLitContext extends LiteralContext {
    IntLiteral() { return this.getToken(CWScriptParser.IntLiteral, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIntLit) {
            listener.enterIntLit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIntLit) {
            listener.exitIntLit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIntLit) {
            return visitor.visitIntLit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntLitContext = IntLitContext;
class DecLitContext extends LiteralContext {
    DecLiteral() { return this.getToken(CWScriptParser.DecLiteral, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDecLit) {
            listener.enterDecLit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDecLit) {
            listener.exitDecLit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDecLit) {
            return visitor.visitDecLit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DecLitContext = DecLitContext;
class BoolLitContext extends LiteralContext {
    BoolLiteral() { return this.getToken(CWScriptParser.BoolLiteral, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBoolLit) {
            listener.enterBoolLit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBoolLit) {
            listener.exitBoolLit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBoolLit) {
            return visitor.visitBoolLit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BoolLitContext = BoolLitContext;
class NoneLitContext extends LiteralContext {
    NONE() { return this.getToken(CWScriptParser.NONE, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNoneLit) {
            listener.enterNoneLit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNoneLit) {
            listener.exitNoneLit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNoneLit) {
            return visitor.visitNoneLit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NoneLitContext = NoneLitContext;
class IfStmt_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IF() { return this.getToken(CWScriptParser.IF, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    elseClause() {
        return this.tryGetRuleContext(0, ElseClauseContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_ifStmt_; }
    // @Override
    enterRule(listener) {
        if (listener.enterIfStmt_) {
            listener.enterIfStmt_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfStmt_) {
            listener.exitIfStmt_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfStmt_) {
            return visitor.visitIfStmt_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfStmt_Context = IfStmt_Context;
class ElseClauseContext extends ParserRuleContext_1.ParserRuleContext {
    ELSE() { return this.getToken(CWScriptParser.ELSE, 0); }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    stmt() {
        return this.tryGetRuleContext(0, StmtContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_elseClause; }
    // @Override
    enterRule(listener) {
        if (listener.enterElseClause) {
            listener.enterElseClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElseClause) {
            listener.exitElseClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElseClause) {
            return visitor.visitElseClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElseClauseContext = ElseClauseContext;
class ForStmt_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FOR() { return this.getToken(CWScriptParser.FOR, 0); }
    IN() { return this.getToken(CWScriptParser.IN, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    let_binding() {
        return this.tryGetRuleContext(0, Let_bindingContext);
    }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_forStmt_; }
    // @Override
    enterRule(listener) {
        if (listener.enterForStmt_) {
            listener.enterForStmt_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitForStmt_) {
            listener.exitForStmt_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForStmt_) {
            return visitor.visitForStmt_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForStmt_Context = ForStmt_Context;
class IdentContext extends ParserRuleContext_1.ParserRuleContext {
    Ident() { return this.tryGetToken(CWScriptParser.Ident, 0); }
    reservedKeyword() {
        return this.tryGetRuleContext(0, ReservedKeywordContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_ident; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdent) {
            listener.enterIdent(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdent) {
            listener.exitIdent(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdent) {
            return visitor.visitIdent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentContext = IdentContext;
class ReservedKeywordContext extends ParserRuleContext_1.ParserRuleContext {
    CONTRACT() { return this.tryGetToken(CWScriptParser.CONTRACT, 0); }
    INTERFACE() { return this.tryGetToken(CWScriptParser.INTERFACE, 0); }
    IMPORT() { return this.tryGetToken(CWScriptParser.IMPORT, 0); }
    IMPLEMENTS() { return this.tryGetToken(CWScriptParser.IMPLEMENTS, 0); }
    EXTENDS() { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
    ERROR() { return this.tryGetToken(CWScriptParser.ERROR, 0); }
    EVENT() { return this.tryGetToken(CWScriptParser.EVENT, 0); }
    INSTANTIATE() { return this.tryGetToken(CWScriptParser.INSTANTIATE, 0); }
    EXEC() { return this.tryGetToken(CWScriptParser.EXEC, 0); }
    QUERY() { return this.tryGetToken(CWScriptParser.QUERY, 0); }
    REPLY() { return this.tryGetToken(CWScriptParser.REPLY, 0); }
    FOR() { return this.tryGetToken(CWScriptParser.FOR, 0); }
    IN() { return this.tryGetToken(CWScriptParser.IN, 0); }
    FROM() { return this.tryGetToken(CWScriptParser.FROM, 0); }
    STATE() { return this.tryGetToken(CWScriptParser.STATE, 0); }
    IF() { return this.tryGetToken(CWScriptParser.IF, 0); }
    FN() { return this.tryGetToken(CWScriptParser.FN, 0); }
    ELSE() { return this.tryGetToken(CWScriptParser.ELSE, 0); }
    AND() { return this.tryGetToken(CWScriptParser.AND, 0); }
    OR() { return this.tryGetToken(CWScriptParser.OR, 0); }
    TRUE() { return this.tryGetToken(CWScriptParser.TRUE, 0); }
    FALSE() { return this.tryGetToken(CWScriptParser.FALSE, 0); }
    LET() { return this.tryGetToken(CWScriptParser.LET, 0); }
    RETURN() { return this.tryGetToken(CWScriptParser.RETURN, 0); }
    STRUCT() { return this.tryGetToken(CWScriptParser.STRUCT, 0); }
    ENUM() { return this.tryGetToken(CWScriptParser.ENUM, 0); }
    TYPE() { return this.tryGetToken(CWScriptParser.TYPE, 0); }
    EMIT() { return this.tryGetToken(CWScriptParser.EMIT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_reservedKeyword; }
    // @Override
    enterRule(listener) {
        if (listener.enterReservedKeyword) {
            listener.enterReservedKeyword(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReservedKeyword) {
            listener.exitReservedKeyword(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReservedKeyword) {
            return visitor.visitReservedKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReservedKeywordContext = ReservedKeywordContext;
//# sourceMappingURL=CWScriptParser.js.map