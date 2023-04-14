// Generated from /Users/william/IdeaProjects/cwsc-x/grammar/CWScriptParser.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CWScriptParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CONTRACT=1, INTERFACE=2, IMPORT=3, IMPLEMENTS=4, EXTENDS=5, ERROR=6, EVENT=7, 
		INSTANTIATE_NOW=8, EXEC_NOW=9, QUERY_NOW=10, DELEGATE_EXEC=11, INSTANTIATE=12, 
		EXEC=13, QUERY=14, REPLY=15, FOR=16, IN=17, FROM=18, STATE=19, IF=20, 
		IS=21, TRY=22, CATCH=23, ELSE=24, NOT=25, NONE=26, MUT=27, AND=28, OR=29, 
		TRUE=30, FALSE=31, FN=32, LET=33, CONST=34, FAIL=35, RETURN=36, STRUCT=37, 
		ENUM=38, TYPE=39, EMIT=40, AS=41, TILDE=42, LPAREN=43, RPAREN=44, LBRACK=45, 
		RBRACK=46, LBRACE=47, RBRACE=48, DOT=49, COMMA=50, D_QUEST=51, QUEST=52, 
		BANG=53, COLON=54, D_COLON=55, HASH=56, AT=57, AMP=58, ARROW=59, FAT_ARROW=60, 
		BAR=61, S_QUOTE=62, D_QUOTE=63, EQ=64, EQ_EQ=65, NEQ=66, PLUS=67, PLUS_EQ=68, 
		MINUS=69, MINUS_EQ=70, MUL=71, MUL_EQ=72, DIV=73, DIV_EQ=74, MOD=75, MOD_EQ=76, 
		LT=77, LT_EQ=78, GT=79, GT_EQ=80, POW=81, Ident=82, StringLiteral=83, 
		IntLiteral=84, DecLiteral=85, BoolLiteral=86, CWSPEC_LINE_COMMENT=87, 
		CWSPEC_BLOCK_COMMENT=88, LINE_COMMENT=89, BLOCK_COMMENT=90, WS=91;
	public static final int
		RULE_sourceFile = 0, RULE_topLevelStmt = 1, RULE_contractDefn = 2, RULE_interfaceDefn = 3, 
		RULE_contractBlock = 4, RULE_importStmt = 5, RULE_contractItem = 6, RULE_param = 7, 
		RULE_paramList = 8, RULE_stateParam = 9, RULE_fnParams = 10, RULE_structDefn_fn = 11, 
		RULE_errorDefn = 12, RULE_errorDefnBlock = 13, RULE_eventDefn = 14, RULE_eventDefnBlock = 15, 
		RULE_stateDefnBlock = 16, RULE_stateDefn_item = 17, RULE_mapKeyDefn = 18, 
		RULE_instantiateDefn = 19, RULE_instantiateDecl = 20, RULE_execDefn = 21, 
		RULE_execDecl = 22, RULE_queryDefn = 23, RULE_queryDecl = 24, RULE_replyDefn = 25, 
		RULE_enumDefn = 26, RULE_variant_ = 27, RULE_variant_struct = 28, RULE_variant_unit = 29, 
		RULE_typeExpr = 30, RULE_typePath = 31, RULE_typeVariant = 32, RULE_typeDefn = 33, 
		RULE_structDefn = 34, RULE_typeAliasDefn = 35, RULE_fnDefn = 36, RULE_annot = 37, 
		RULE_callOpts = 38, RULE_stmt = 39, RULE_letStmt_ = 40, RULE_constStmt_ = 41, 
		RULE_let_binding = 42, RULE_assignStmt_ = 43, RULE_assignLHS_ = 44, RULE_expr = 45, 
		RULE_closureParams = 46, RULE_closure = 47, RULE_block = 48, RULE_tryCatchElseExpr_ = 49, 
		RULE_catchClause = 50, RULE_arg = 51, RULE_memberVal = 52, RULE_literal = 53, 
		RULE_ifStmt_ = 54, RULE_elseClause = 55, RULE_forStmt_ = 56, RULE_ident = 57, 
		RULE_reservedKeyword = 58;
	private static String[] makeRuleNames() {
		return new String[] {
			"sourceFile", "topLevelStmt", "contractDefn", "interfaceDefn", "contractBlock", 
			"importStmt", "contractItem", "param", "paramList", "stateParam", "fnParams", 
			"structDefn_fn", "errorDefn", "errorDefnBlock", "eventDefn", "eventDefnBlock", 
			"stateDefnBlock", "stateDefn_item", "mapKeyDefn", "instantiateDefn", 
			"instantiateDecl", "execDefn", "execDecl", "queryDefn", "queryDecl", 
			"replyDefn", "enumDefn", "variant_", "variant_struct", "variant_unit", 
			"typeExpr", "typePath", "typeVariant", "typeDefn", "structDefn", "typeAliasDefn", 
			"fnDefn", "annot", "callOpts", "stmt", "letStmt_", "constStmt_", "let_binding", 
			"assignStmt_", "assignLHS_", "expr", "closureParams", "closure", "block", 
			"tryCatchElseExpr_", "catchClause", "arg", "memberVal", "literal", "ifStmt_", 
			"elseClause", "forStmt_", "ident", "reservedKeyword"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'contract'", "'interface'", "'import'", "'implements'", "'extends'", 
			"'error'", "'event'", "'instantiate!'", "'exec!'", "'query!'", "'delegate_exec!'", 
			"'instantiate'", "'exec'", "'query'", "'reply'", "'for'", "'in'", "'from'", 
			"'state'", "'if'", "'is'", "'try'", "'catch'", "'else'", "'not'", "'None'", 
			"'mut'", "'and'", "'or'", "'true'", "'false'", "'fn'", "'let'", "'const'", 
			"'fail!'", "'return'", "'struct'", "'enum'", "'type'", "'emit'", "'as'", 
			"'~'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'.'", "','", "'??'", 
			"'?'", "'!'", "':'", "'::'", "'#'", "'@'", "'&'", "'->'", "'=>'", "'|'", 
			"'''", "'\"'", "'='", "'=='", "'!='", "'+'", "'+='", "'-'", "'-='", "'*'", 
			"'*='", "'/'", "'/='", "'%'", "'%='", "'<'", "'<='", "'>'", "'>='", "'**'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "EXTENDS", "ERROR", 
			"EVENT", "INSTANTIATE_NOW", "EXEC_NOW", "QUERY_NOW", "DELEGATE_EXEC", 
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
			"BLOCK_COMMENT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "CWScriptParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CWScriptParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class SourceFileContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(CWScriptParser.EOF, 0); }
		public List<TopLevelStmtContext> topLevelStmt() {
			return getRuleContexts(TopLevelStmtContext.class);
		}
		public TopLevelStmtContext topLevelStmt(int i) {
			return getRuleContext(TopLevelStmtContext.class,i);
		}
		public SourceFileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sourceFile; }
	}

	public final SourceFileContext sourceFile() throws RecognitionException {
		SourceFileContext _localctx = new SourceFileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_sourceFile);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(121);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << CONST))) != 0)) {
				{
				{
				setState(118);
				topLevelStmt();
				}
				}
				setState(123);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(124);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TopLevelStmtContext extends ParserRuleContext {
		public ImportStmtContext importStmt() {
			return getRuleContext(ImportStmtContext.class,0);
		}
		public ContractDefnContext contractDefn() {
			return getRuleContext(ContractDefnContext.class,0);
		}
		public InterfaceDefnContext interfaceDefn() {
			return getRuleContext(InterfaceDefnContext.class,0);
		}
		public ConstStmt_Context constStmt_() {
			return getRuleContext(ConstStmt_Context.class,0);
		}
		public TopLevelStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_topLevelStmt; }
	}

	public final TopLevelStmtContext topLevelStmt() throws RecognitionException {
		TopLevelStmtContext _localctx = new TopLevelStmtContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_topLevelStmt);
		try {
			setState(130);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IMPORT:
				enterOuterAlt(_localctx, 1);
				{
				setState(126);
				importStmt();
				}
				break;
			case CONTRACT:
				enterOuterAlt(_localctx, 2);
				{
				setState(127);
				contractDefn();
				}
				break;
			case INTERFACE:
				enterOuterAlt(_localctx, 3);
				{
				setState(128);
				interfaceDefn();
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 4);
				{
				setState(129);
				constStmt_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContractDefnContext extends ParserRuleContext {
		public IdentContext name;
		public TypePathContext base;
		public TypePathContext typePath;
		public List<TypePathContext> interfaces = new ArrayList<TypePathContext>();
		public ContractBlockContext body;
		public TerminalNode CONTRACT() { return getToken(CWScriptParser.CONTRACT, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode EXTENDS() { return getToken(CWScriptParser.EXTENDS, 0); }
		public TerminalNode IMPLEMENTS() { return getToken(CWScriptParser.IMPLEMENTS, 0); }
		public ContractBlockContext contractBlock() {
			return getRuleContext(ContractBlockContext.class,0);
		}
		public List<TypePathContext> typePath() {
			return getRuleContexts(TypePathContext.class);
		}
		public TypePathContext typePath(int i) {
			return getRuleContext(TypePathContext.class,i);
		}
		public ContractDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contractDefn; }
	}

	public final ContractDefnContext contractDefn() throws RecognitionException {
		ContractDefnContext _localctx = new ContractDefnContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_contractDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(132);
			match(CONTRACT);
			{
			setState(133);
			((ContractDefnContext)_localctx).name = ident();
			}
			setState(136);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(134);
				match(EXTENDS);
				{
				setState(135);
				((ContractDefnContext)_localctx).base = typePath();
				}
				}
			}

			setState(140);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IMPLEMENTS) {
				{
				setState(138);
				match(IMPLEMENTS);
				{
				setState(139);
				((ContractDefnContext)_localctx).typePath = typePath();
				((ContractDefnContext)_localctx).interfaces.add(((ContractDefnContext)_localctx).typePath);
				}
				}
			}

			{
			setState(142);
			((ContractDefnContext)_localctx).body = contractBlock();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InterfaceDefnContext extends ParserRuleContext {
		public IdentContext name;
		public TypePathContext base;
		public ContractBlockContext body;
		public TerminalNode INTERFACE() { return getToken(CWScriptParser.INTERFACE, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode EXTENDS() { return getToken(CWScriptParser.EXTENDS, 0); }
		public ContractBlockContext contractBlock() {
			return getRuleContext(ContractBlockContext.class,0);
		}
		public TypePathContext typePath() {
			return getRuleContext(TypePathContext.class,0);
		}
		public InterfaceDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceDefn; }
	}

	public final InterfaceDefnContext interfaceDefn() throws RecognitionException {
		InterfaceDefnContext _localctx = new InterfaceDefnContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_interfaceDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			match(INTERFACE);
			{
			setState(145);
			((InterfaceDefnContext)_localctx).name = ident();
			}
			setState(148);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(146);
				match(EXTENDS);
				{
				setState(147);
				((InterfaceDefnContext)_localctx).base = typePath();
				}
				}
			}

			{
			setState(150);
			((InterfaceDefnContext)_localctx).body = contractBlock();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContractBlockContext extends ParserRuleContext {
		public ContractItemContext contractItem;
		public List<ContractItemContext> body = new ArrayList<ContractItemContext>();
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<ContractItemContext> contractItem() {
			return getRuleContexts(ContractItemContext.class);
		}
		public ContractItemContext contractItem(int i) {
			return getRuleContext(ContractItemContext.class,i);
		}
		public ContractBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contractBlock; }
	}

	public final ContractBlockContext contractBlock() throws RecognitionException {
		ContractBlockContext _localctx = new ContractBlockContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_contractBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
			match(LBRACE);
			setState(156);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ERROR) | (1L << EVENT) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << STATE) | (1L << FN) | (1L << CONST) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << HASH))) != 0)) {
				{
				{
				setState(153);
				((ContractBlockContext)_localctx).contractItem = contractItem();
				((ContractBlockContext)_localctx).body.add(((ContractBlockContext)_localctx).contractItem);
				}
				}
				setState(158);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(159);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportStmtContext extends ParserRuleContext {
		public ImportStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importStmt; }
	 
		public ImportStmtContext() { }
		public void copyFrom(ImportStmtContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ImportItemsStmtContext extends ImportStmtContext {
		public IdentContext ident;
		public List<IdentContext> items = new ArrayList<IdentContext>();
		public Token src;
		public TerminalNode IMPORT() { return getToken(CWScriptParser.IMPORT, 0); }
		public TerminalNode FROM() { return getToken(CWScriptParser.FROM, 0); }
		public TerminalNode StringLiteral() { return getToken(CWScriptParser.StringLiteral, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<IdentContext> ident() {
			return getRuleContexts(IdentContext.class);
		}
		public IdentContext ident(int i) {
			return getRuleContext(IdentContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public ImportItemsStmtContext(ImportStmtContext ctx) { copyFrom(ctx); }
	}
	public static class ImportAllStmtContext extends ImportStmtContext {
		public Token src;
		public TerminalNode IMPORT() { return getToken(CWScriptParser.IMPORT, 0); }
		public TerminalNode MUL() { return getToken(CWScriptParser.MUL, 0); }
		public TerminalNode FROM() { return getToken(CWScriptParser.FROM, 0); }
		public TerminalNode StringLiteral() { return getToken(CWScriptParser.StringLiteral, 0); }
		public ImportAllStmtContext(ImportStmtContext ctx) { copyFrom(ctx); }
	}

	public final ImportStmtContext importStmt() throws RecognitionException {
		ImportStmtContext _localctx = new ImportStmtContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_importStmt);
		int _la;
		try {
			setState(180);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				_localctx = new ImportAllStmtContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(161);
				match(IMPORT);
				setState(162);
				match(MUL);
				setState(163);
				match(FROM);
				{
				setState(164);
				((ImportAllStmtContext)_localctx).src = match(StringLiteral);
				}
				}
				break;
			case 2:
				_localctx = new ImportItemsStmtContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(165);
				match(IMPORT);
				{
				{
				setState(166);
				match(LBRACE);
				{
				setState(167);
				((ImportItemsStmtContext)_localctx).ident = ident();
				((ImportItemsStmtContext)_localctx).items.add(((ImportItemsStmtContext)_localctx).ident);
				}
				setState(172);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(168);
					match(COMMA);
					setState(169);
					((ImportItemsStmtContext)_localctx).ident = ident();
					((ImportItemsStmtContext)_localctx).items.add(((ImportItemsStmtContext)_localctx).ident);
					}
					}
					setState(174);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(175);
				match(RBRACE);
				}
				}
				setState(177);
				match(FROM);
				{
				setState(178);
				((ImportItemsStmtContext)_localctx).src = match(StringLiteral);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContractItemContext extends ParserRuleContext {
		public TypeDefnContext typeDefn() {
			return getRuleContext(TypeDefnContext.class,0);
		}
		public ConstStmt_Context constStmt_() {
			return getRuleContext(ConstStmt_Context.class,0);
		}
		public FnDefnContext fnDefn() {
			return getRuleContext(FnDefnContext.class,0);
		}
		public ErrorDefnContext errorDefn() {
			return getRuleContext(ErrorDefnContext.class,0);
		}
		public ErrorDefnBlockContext errorDefnBlock() {
			return getRuleContext(ErrorDefnBlockContext.class,0);
		}
		public EventDefnContext eventDefn() {
			return getRuleContext(EventDefnContext.class,0);
		}
		public EventDefnBlockContext eventDefnBlock() {
			return getRuleContext(EventDefnBlockContext.class,0);
		}
		public StateDefnBlockContext stateDefnBlock() {
			return getRuleContext(StateDefnBlockContext.class,0);
		}
		public InstantiateDefnContext instantiateDefn() {
			return getRuleContext(InstantiateDefnContext.class,0);
		}
		public InstantiateDeclContext instantiateDecl() {
			return getRuleContext(InstantiateDeclContext.class,0);
		}
		public ExecDefnContext execDefn() {
			return getRuleContext(ExecDefnContext.class,0);
		}
		public ExecDeclContext execDecl() {
			return getRuleContext(ExecDeclContext.class,0);
		}
		public QueryDefnContext queryDefn() {
			return getRuleContext(QueryDefnContext.class,0);
		}
		public QueryDeclContext queryDecl() {
			return getRuleContext(QueryDeclContext.class,0);
		}
		public ReplyDefnContext replyDefn() {
			return getRuleContext(ReplyDefnContext.class,0);
		}
		public ContractItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contractItem; }
	}

	public final ContractItemContext contractItem() throws RecognitionException {
		ContractItemContext _localctx = new ContractItemContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_contractItem);
		try {
			setState(198);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(182);
				typeDefn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(183);
				constStmt_();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(184);
				fnDefn();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(185);
				errorDefn();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(186);
				errorDefnBlock();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(187);
				eventDefn();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(188);
				eventDefnBlock();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(189);
				stateDefnBlock();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(190);
				instantiateDefn();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(191);
				instantiateDecl();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(192);
				execDefn();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(193);
				execDecl();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(194);
				queryDefn();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(195);
				queryDefn();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(196);
				queryDecl();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(197);
				replyDefn();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParamContext extends ParserRuleContext {
		public IdentContext name;
		public Token optional;
		public TypeExprContext ty;
		public ExprContext default;
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public TerminalNode QUEST() { return getToken(CWScriptParser.QUEST, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param; }
	}

	public final ParamContext param() throws RecognitionException {
		ParamContext _localctx = new ParamContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_param);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(200);
			((ParamContext)_localctx).name = ident();
			}
			setState(202);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==QUEST) {
				{
				setState(201);
				((ParamContext)_localctx).optional = match(QUEST);
				}
			}

			setState(204);
			match(COLON);
			{
			setState(205);
			((ParamContext)_localctx).ty = typeExpr(0);
			}
			setState(208);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQ) {
				{
				setState(206);
				match(EQ);
				setState(207);
				((ParamContext)_localctx).default = expr(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParamListContext extends ParserRuleContext {
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public ParamListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paramList; }
	}

	public final ParamListContext paramList() throws RecognitionException {
		ParamListContext _localctx = new ParamListContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_paramList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(210);
			param();
			setState(215);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(211);
				match(COMMA);
				setState(212);
				param();
				}
				}
				setState(217);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StateParamContext extends ParserRuleContext {
		public Token mut;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode MUT() { return getToken(CWScriptParser.MUT, 0); }
		public StateParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateParam; }
	}

	public final StateParamContext stateParam() throws RecognitionException {
		StateParamContext _localctx = new StateParamContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_stateParam);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MUT) {
				{
				setState(218);
				((StateParamContext)_localctx).mut = match(MUT);
				}
			}

			setState(221);
			ident();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FnParamsContext extends ParserRuleContext {
		public FnParamsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fnParams; }
	 
		public FnParamsContext() { }
		public void copyFrom(FnParamsContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class PureParamsContext extends FnParamsContext {
		public ParamContext param;
		public List<ParamContext> params = new ArrayList<ParamContext>();
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public PureParamsContext(FnParamsContext ctx) { copyFrom(ctx); }
	}
	public static class StateParamsContext extends FnParamsContext {
		public StateParamContext stateful;
		public ParamContext param;
		public List<ParamContext> params = new ArrayList<ParamContext>();
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public StateParamContext stateParam() {
			return getRuleContext(StateParamContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public StateParamsContext(FnParamsContext ctx) { copyFrom(ctx); }
	}

	public final FnParamsContext fnParams() throws RecognitionException {
		FnParamsContext _localctx = new FnParamsContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_fnParams);
		int _la;
		try {
			setState(250);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				_localctx = new PureParamsContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(223);
				match(LPAREN);
				setState(232);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
					{
					{
					setState(224);
					((PureParamsContext)_localctx).param = param();
					((PureParamsContext)_localctx).params.add(((PureParamsContext)_localctx).param);
					}
					setState(229);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(225);
						match(COMMA);
						setState(226);
						((PureParamsContext)_localctx).param = param();
						((PureParamsContext)_localctx).params.add(((PureParamsContext)_localctx).param);
						}
						}
						setState(231);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(234);
				match(RPAREN);
				}
				break;
			case 2:
				_localctx = new StateParamsContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(235);
				match(LPAREN);
				{
				setState(236);
				((StateParamsContext)_localctx).stateful = stateParam();
				}
				setState(246);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(237);
					match(COMMA);
					{
					setState(238);
					((StateParamsContext)_localctx).param = param();
					((StateParamsContext)_localctx).params.add(((StateParamsContext)_localctx).param);
					}
					setState(243);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(239);
						match(COMMA);
						setState(240);
						((StateParamsContext)_localctx).param = param();
						((StateParamsContext)_localctx).params.add(((StateParamsContext)_localctx).param);
						}
						}
						setState(245);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(248);
				match(RPAREN);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructDefn_fnContext extends ParserRuleContext {
		public IdentContext name;
		public FnParamsContext params;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public StructDefn_fnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structDefn_fn; }
	}

	public final StructDefn_fnContext structDefn_fn() throws RecognitionException {
		StructDefn_fnContext _localctx = new StructDefn_fnContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_structDefn_fn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(252);
			((StructDefn_fnContext)_localctx).name = ident();
			}
			{
			setState(253);
			((StructDefn_fnContext)_localctx).params = fnParams();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ErrorDefnContext extends ParserRuleContext {
		public StructDefn_fnContext defn;
		public TerminalNode ERROR() { return getToken(CWScriptParser.ERROR, 0); }
		public StructDefn_fnContext structDefn_fn() {
			return getRuleContext(StructDefn_fnContext.class,0);
		}
		public ErrorDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorDefn; }
	}

	public final ErrorDefnContext errorDefn() throws RecognitionException {
		ErrorDefnContext _localctx = new ErrorDefnContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_errorDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(255);
			match(ERROR);
			setState(256);
			((ErrorDefnContext)_localctx).defn = structDefn_fn();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ErrorDefnBlockContext extends ParserRuleContext {
		public StructDefn_fnContext structDefn_fn;
		public List<StructDefn_fnContext> defns = new ArrayList<StructDefn_fnContext>();
		public TerminalNode ERROR() { return getToken(CWScriptParser.ERROR, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<StructDefn_fnContext> structDefn_fn() {
			return getRuleContexts(StructDefn_fnContext.class);
		}
		public StructDefn_fnContext structDefn_fn(int i) {
			return getRuleContext(StructDefn_fnContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public ErrorDefnBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorDefnBlock; }
	}

	public final ErrorDefnBlockContext errorDefnBlock() throws RecognitionException {
		ErrorDefnBlockContext _localctx = new ErrorDefnBlockContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_errorDefnBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			match(ERROR);
			setState(259);
			match(LBRACE);
			setState(271);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
				{
				{
				setState(260);
				((ErrorDefnBlockContext)_localctx).structDefn_fn = structDefn_fn();
				((ErrorDefnBlockContext)_localctx).defns.add(((ErrorDefnBlockContext)_localctx).structDefn_fn);
				}
				setState(265);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(261);
						match(COMMA);
						setState(262);
						((ErrorDefnBlockContext)_localctx).structDefn_fn = structDefn_fn();
						((ErrorDefnBlockContext)_localctx).defns.add(((ErrorDefnBlockContext)_localctx).structDefn_fn);
						}
						} 
					}
					setState(267);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
				}
				setState(269);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(268);
					match(COMMA);
					}
				}

				}
			}

			setState(273);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EventDefnContext extends ParserRuleContext {
		public TerminalNode EVENT() { return getToken(CWScriptParser.EVENT, 0); }
		public StructDefn_fnContext structDefn_fn() {
			return getRuleContext(StructDefn_fnContext.class,0);
		}
		public EventDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eventDefn; }
	}

	public final EventDefnContext eventDefn() throws RecognitionException {
		EventDefnContext _localctx = new EventDefnContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_eventDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(275);
			match(EVENT);
			setState(276);
			structDefn_fn();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EventDefnBlockContext extends ParserRuleContext {
		public StructDefn_fnContext structDefn_fn;
		public List<StructDefn_fnContext> defns = new ArrayList<StructDefn_fnContext>();
		public TerminalNode EVENT() { return getToken(CWScriptParser.EVENT, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<StructDefn_fnContext> structDefn_fn() {
			return getRuleContexts(StructDefn_fnContext.class);
		}
		public StructDefn_fnContext structDefn_fn(int i) {
			return getRuleContext(StructDefn_fnContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public EventDefnBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eventDefnBlock; }
	}

	public final EventDefnBlockContext eventDefnBlock() throws RecognitionException {
		EventDefnBlockContext _localctx = new EventDefnBlockContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_eventDefnBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(278);
			match(EVENT);
			setState(279);
			match(LBRACE);
			setState(291);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
				{
				{
				setState(280);
				((EventDefnBlockContext)_localctx).structDefn_fn = structDefn_fn();
				((EventDefnBlockContext)_localctx).defns.add(((EventDefnBlockContext)_localctx).structDefn_fn);
				}
				setState(285);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(281);
						match(COMMA);
						setState(282);
						((EventDefnBlockContext)_localctx).structDefn_fn = structDefn_fn();
						((EventDefnBlockContext)_localctx).defns.add(((EventDefnBlockContext)_localctx).structDefn_fn);
						}
						} 
					}
					setState(287);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
				}
				setState(289);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(288);
					match(COMMA);
					}
				}

				}
			}

			setState(293);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StateDefnBlockContext extends ParserRuleContext {
		public StateDefn_itemContext stateDefn_item;
		public List<StateDefn_itemContext> defns = new ArrayList<StateDefn_itemContext>();
		public TerminalNode STATE() { return getToken(CWScriptParser.STATE, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<StateDefn_itemContext> stateDefn_item() {
			return getRuleContexts(StateDefn_itemContext.class);
		}
		public StateDefn_itemContext stateDefn_item(int i) {
			return getRuleContext(StateDefn_itemContext.class,i);
		}
		public StateDefnBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateDefnBlock; }
	}

	public final StateDefnBlockContext stateDefnBlock() throws RecognitionException {
		StateDefnBlockContext _localctx = new StateDefnBlockContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_stateDefnBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(295);
			match(STATE);
			setState(296);
			match(LBRACE);
			setState(300);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
				{
				{
				setState(297);
				((StateDefnBlockContext)_localctx).stateDefn_item = stateDefn_item();
				((StateDefnBlockContext)_localctx).defns.add(((StateDefnBlockContext)_localctx).stateDefn_item);
				}
				}
				setState(302);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(303);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StateDefn_itemContext extends ParserRuleContext {
		public StateDefn_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateDefn_item; }
	 
		public StateDefn_itemContext() { }
		public void copyFrom(StateDefn_itemContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class StateMapDefnContext extends StateDefn_itemContext {
		public IdentContext name;
		public MapKeyDefnContext mapKeyDefn;
		public List<MapKeyDefnContext> mapKeys = new ArrayList<MapKeyDefnContext>();
		public TypeExprContext ty;
		public ExprContext default;
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public List<MapKeyDefnContext> mapKeyDefn() {
			return getRuleContexts(MapKeyDefnContext.class);
		}
		public MapKeyDefnContext mapKeyDefn(int i) {
			return getRuleContext(MapKeyDefnContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public StateMapDefnContext(StateDefn_itemContext ctx) { copyFrom(ctx); }
	}
	public static class StateItemDefnContext extends StateDefn_itemContext {
		public IdentContext name;
		public TypeExprContext ty;
		public ExprContext default;
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public StateItemDefnContext(StateDefn_itemContext ctx) { copyFrom(ctx); }
	}

	public final StateDefn_itemContext stateDefn_item() throws RecognitionException {
		StateDefn_itemContext _localctx = new StateDefn_itemContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_stateDefn_item);
		int _la;
		try {
			setState(329);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				_localctx = new StateItemDefnContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(305);
				((StateItemDefnContext)_localctx).name = ident();
				}
				setState(306);
				match(COLON);
				{
				setState(307);
				((StateItemDefnContext)_localctx).ty = typeExpr(0);
				}
				setState(310);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQ) {
					{
					setState(308);
					match(EQ);
					{
					setState(309);
					((StateItemDefnContext)_localctx).default = expr(0);
					}
					}
				}

				}
				break;
			case 2:
				_localctx = new StateMapDefnContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(312);
				((StateMapDefnContext)_localctx).name = ident();
				}
				setState(313);
				match(LBRACK);
				{
				setState(314);
				((StateMapDefnContext)_localctx).mapKeyDefn = mapKeyDefn();
				((StateMapDefnContext)_localctx).mapKeys.add(((StateMapDefnContext)_localctx).mapKeyDefn);
				}
				setState(319);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(315);
					match(COMMA);
					{
					setState(316);
					((StateMapDefnContext)_localctx).mapKeyDefn = mapKeyDefn();
					((StateMapDefnContext)_localctx).mapKeys.add(((StateMapDefnContext)_localctx).mapKeyDefn);
					}
					}
					}
					setState(321);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(322);
				match(RBRACK);
				setState(323);
				match(COLON);
				{
				setState(324);
				((StateMapDefnContext)_localctx).ty = typeExpr(0);
				}
				setState(327);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQ) {
					{
					setState(325);
					match(EQ);
					{
					setState(326);
					((StateMapDefnContext)_localctx).default = expr(0);
					}
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MapKeyDefnContext extends ParserRuleContext {
		public IdentContext name;
		public TypeExprContext ty;
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public MapKeyDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mapKeyDefn; }
	}

	public final MapKeyDefnContext mapKeyDefn() throws RecognitionException {
		MapKeyDefnContext _localctx = new MapKeyDefnContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_mapKeyDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(332);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
				{
				setState(331);
				((MapKeyDefnContext)_localctx).name = ident();
				}
			}

			setState(334);
			match(COLON);
			{
			setState(335);
			((MapKeyDefnContext)_localctx).ty = typeExpr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InstantiateDefnContext extends ParserRuleContext {
		public FnParamsContext params;
		public BlockContext body;
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public TerminalNode INSTANTIATE() { return getToken(CWScriptParser.INSTANTIATE, 0); }
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public InstantiateDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instantiateDefn; }
	}

	public final InstantiateDefnContext instantiateDefn() throws RecognitionException {
		InstantiateDefnContext _localctx = new InstantiateDefnContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_instantiateDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(337);
			match(HASH);
			setState(338);
			match(INSTANTIATE);
			setState(339);
			((InstantiateDefnContext)_localctx).params = fnParams();
			setState(340);
			((InstantiateDefnContext)_localctx).body = block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InstantiateDeclContext extends ParserRuleContext {
		public FnParamsContext params;
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public TerminalNode INSTANTIATE() { return getToken(CWScriptParser.INSTANTIATE, 0); }
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public InstantiateDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instantiateDecl; }
	}

	public final InstantiateDeclContext instantiateDecl() throws RecognitionException {
		InstantiateDeclContext _localctx = new InstantiateDeclContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_instantiateDecl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(342);
			match(HASH);
			setState(343);
			match(INSTANTIATE);
			setState(344);
			((InstantiateDeclContext)_localctx).params = fnParams();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExecDefnContext extends ParserRuleContext {
		public Token tup;
		public IdentContext name;
		public FnParamsContext params;
		public BlockContext body;
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode MUL() { return getToken(CWScriptParser.MUL, 0); }
		public ExecDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execDefn; }
	}

	public final ExecDefnContext execDefn() throws RecognitionException {
		ExecDefnContext _localctx = new ExecDefnContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_execDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(346);
			match(EXEC);
			setState(348);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MUL) {
				{
				setState(347);
				((ExecDefnContext)_localctx).tup = match(MUL);
				}
			}

			setState(350);
			match(HASH);
			setState(351);
			((ExecDefnContext)_localctx).name = ident();
			setState(352);
			((ExecDefnContext)_localctx).params = fnParams();
			setState(353);
			((ExecDefnContext)_localctx).body = block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExecDeclContext extends ParserRuleContext {
		public Token tup;
		public IdentContext name;
		public FnParamsContext params;
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public TerminalNode MUL() { return getToken(CWScriptParser.MUL, 0); }
		public ExecDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execDecl; }
	}

	public final ExecDeclContext execDecl() throws RecognitionException {
		ExecDeclContext _localctx = new ExecDeclContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_execDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(355);
			match(EXEC);
			setState(357);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MUL) {
				{
				setState(356);
				((ExecDeclContext)_localctx).tup = match(MUL);
				}
			}

			setState(359);
			match(HASH);
			setState(360);
			((ExecDeclContext)_localctx).name = ident();
			setState(361);
			((ExecDeclContext)_localctx).params = fnParams();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryDefnContext extends ParserRuleContext {
		public Token tup;
		public IdentContext name;
		public FnParamsContext params;
		public TypeExprContext retTy;
		public BlockContext body;
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public TerminalNode MUL() { return getToken(CWScriptParser.MUL, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public QueryDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryDefn; }
	}

	public final QueryDefnContext queryDefn() throws RecognitionException {
		QueryDefnContext _localctx = new QueryDefnContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_queryDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(363);
			match(QUERY);
			setState(365);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MUL) {
				{
				setState(364);
				((QueryDefnContext)_localctx).tup = match(MUL);
				}
			}

			setState(367);
			match(HASH);
			setState(368);
			((QueryDefnContext)_localctx).name = ident();
			setState(369);
			((QueryDefnContext)_localctx).params = fnParams();
			setState(372);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(370);
				match(ARROW);
				setState(371);
				((QueryDefnContext)_localctx).retTy = typeExpr(0);
				}
			}

			setState(374);
			((QueryDefnContext)_localctx).body = block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryDeclContext extends ParserRuleContext {
		public Token tup;
		public IdentContext name;
		public FnParamsContext params;
		public TypeExprContext retTy;
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public TerminalNode MUL() { return getToken(CWScriptParser.MUL, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public QueryDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryDecl; }
	}

	public final QueryDeclContext queryDecl() throws RecognitionException {
		QueryDeclContext _localctx = new QueryDeclContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_queryDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(376);
			match(QUERY);
			setState(378);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MUL) {
				{
				setState(377);
				((QueryDeclContext)_localctx).tup = match(MUL);
				}
			}

			setState(380);
			match(HASH);
			setState(381);
			((QueryDeclContext)_localctx).name = ident();
			setState(382);
			((QueryDeclContext)_localctx).params = fnParams();
			setState(385);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(383);
				match(ARROW);
				setState(384);
				((QueryDeclContext)_localctx).retTy = typeExpr(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReplyDefnContext extends ParserRuleContext {
		public IdentContext on;
		public IdentContext name;
		public FnParamsContext params;
		public BlockContext body;
		public TerminalNode REPLY() { return getToken(CWScriptParser.REPLY, 0); }
		public List<IdentContext> ident() {
			return getRuleContexts(IdentContext.class);
		}
		public IdentContext ident(int i) {
			return getRuleContext(IdentContext.class,i);
		}
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public ReplyDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_replyDefn; }
	}

	public final ReplyDefnContext replyDefn() throws RecognitionException {
		ReplyDefnContext _localctx = new ReplyDefnContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_replyDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(387);
			match(REPLY);
			setState(390);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOT) {
				{
				setState(388);
				match(DOT);
				setState(389);
				((ReplyDefnContext)_localctx).on = ident();
				}
			}

			setState(392);
			((ReplyDefnContext)_localctx).name = ident();
			setState(393);
			((ReplyDefnContext)_localctx).params = fnParams();
			setState(394);
			((ReplyDefnContext)_localctx).body = block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumDefnContext extends ParserRuleContext {
		public IdentContext name;
		public Variant_Context variant_;
		public List<Variant_Context> variants = new ArrayList<Variant_Context>();
		public TerminalNode ENUM() { return getToken(CWScriptParser.ENUM, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<Variant_Context> variant_() {
			return getRuleContexts(Variant_Context.class);
		}
		public Variant_Context variant_(int i) {
			return getRuleContext(Variant_Context.class,i);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public EnumDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDefn; }
	}

	public final EnumDefnContext enumDefn() throws RecognitionException {
		EnumDefnContext _localctx = new EnumDefnContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_enumDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(396);
			match(ENUM);
			{
			setState(397);
			((EnumDefnContext)_localctx).name = ident();
			}
			setState(398);
			match(LBRACE);
			setState(399);
			((EnumDefnContext)_localctx).variant_ = variant_();
			((EnumDefnContext)_localctx).variants.add(((EnumDefnContext)_localctx).variant_);
			setState(406);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==HASH) {
				{
				{
				{
				setState(400);
				((EnumDefnContext)_localctx).variant_ = variant_();
				((EnumDefnContext)_localctx).variants.add(((EnumDefnContext)_localctx).variant_);
				}
				setState(402);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(401);
					match(COMMA);
					}
				}

				}
				}
				setState(408);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(409);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Variant_Context extends ParserRuleContext {
		public Variant_structContext variant_struct() {
			return getRuleContext(Variant_structContext.class,0);
		}
		public Variant_unitContext variant_unit() {
			return getRuleContext(Variant_unitContext.class,0);
		}
		public Variant_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variant_; }
	}

	public final Variant_Context variant_() throws RecognitionException {
		Variant_Context _localctx = new Variant_Context(_ctx, getState());
		enterRule(_localctx, 54, RULE_variant_);
		try {
			setState(413);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(411);
				variant_struct();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(412);
				variant_unit();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Variant_structContext extends ParserRuleContext {
		public IdentContext name;
		public ParamListContext members;
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public Variant_structContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variant_struct; }
	}

	public final Variant_structContext variant_struct() throws RecognitionException {
		Variant_structContext _localctx = new Variant_structContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_variant_struct);
		int _la;
		try {
			setState(431);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(415);
				match(HASH);
				{
				setState(416);
				((Variant_structContext)_localctx).name = ident();
				}
				setState(417);
				match(LPAREN);
				setState(419);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
					{
					setState(418);
					((Variant_structContext)_localctx).members = paramList();
					}
				}

				setState(421);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(423);
				match(HASH);
				{
				setState(424);
				((Variant_structContext)_localctx).name = ident();
				}
				setState(425);
				match(LBRACE);
				setState(427);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
					{
					setState(426);
					((Variant_structContext)_localctx).members = paramList();
					}
				}

				setState(429);
				match(RBRACE);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Variant_unitContext extends ParserRuleContext {
		public IdentContext name;
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public Variant_unitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variant_unit; }
	}

	public final Variant_unitContext variant_unit() throws RecognitionException {
		Variant_unitContext _localctx = new Variant_unitContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_variant_unit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(433);
			match(HASH);
			{
			setState(434);
			((Variant_unitContext)_localctx).name = ident();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeExprContext extends ParserRuleContext {
		public TypeExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeExpr; }
	 
		public TypeExprContext() { }
		public void copyFrom(TypeExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class VariantTContext extends TypeExprContext {
		public TypeVariantContext typeVariant() {
			return getRuleContext(TypeVariantContext.class,0);
		}
		public VariantTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	public static class TupleTContext extends TypeExprContext {
		public TypeExprContext typeExpr;
		public List<TypeExprContext> items = new ArrayList<TypeExprContext>();
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public List<TypeExprContext> typeExpr() {
			return getRuleContexts(TypeExprContext.class);
		}
		public TypeExprContext typeExpr(int i) {
			return getRuleContext(TypeExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public TupleTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	public static class OptionTContext extends TypeExprContext {
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode QUEST() { return getToken(CWScriptParser.QUEST, 0); }
		public OptionTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	public static class QueryTContext extends TypeExprContext {
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public TypeVariantContext typeVariant() {
			return getRuleContext(TypeVariantContext.class,0);
		}
		public QueryTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	public static class DefnTContext extends TypeExprContext {
		public TypeDefnContext typeDefn() {
			return getRuleContext(TypeDefnContext.class,0);
		}
		public DefnTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	public static class ListTContext extends TypeExprContext {
		public Token len;
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public TerminalNode IntLiteral() { return getToken(CWScriptParser.IntLiteral, 0); }
		public ListTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	public static class ExecTContext extends TypeExprContext {
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public TypeVariantContext typeVariant() {
			return getRuleContext(TypeVariantContext.class,0);
		}
		public ExecTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	public static class PathTContext extends TypeExprContext {
		public TypePathContext typePath() {
			return getRuleContext(TypePathContext.class,0);
		}
		public PathTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	public static class MutTContext extends TypeExprContext {
		public TerminalNode MUT() { return getToken(CWScriptParser.MUT, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public MutTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	public static class InstantiateTContext extends TypeExprContext {
		public TerminalNode INSTANTIATE() { return getToken(CWScriptParser.INSTANTIATE, 0); }
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public TypePathContext typePath() {
			return getRuleContext(TypePathContext.class,0);
		}
		public InstantiateTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}

	public final TypeExprContext typeExpr() throws RecognitionException {
		return typeExpr(0);
	}

	private TypeExprContext typeExpr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TypeExprContext _localctx = new TypeExprContext(_ctx, _parentState);
		TypeExprContext _prevctx = _localctx;
		int _startState = 60;
		enterRecursionRule(_localctx, 60, RULE_typeExpr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(461);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				{
				_localctx = new PathTContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(437);
				typePath();
				}
				break;
			case 2:
				{
				_localctx = new VariantTContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(438);
				typeVariant();
				}
				break;
			case 3:
				{
				_localctx = new InstantiateTContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(439);
				match(INSTANTIATE);
				setState(440);
				match(HASH);
				setState(441);
				typePath();
				}
				break;
			case 4:
				{
				_localctx = new ExecTContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(442);
				match(EXEC);
				setState(443);
				typeVariant();
				}
				break;
			case 5:
				{
				_localctx = new QueryTContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(444);
				match(QUERY);
				setState(445);
				typeVariant();
				}
				break;
			case 6:
				{
				_localctx = new MutTContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(446);
				match(MUT);
				setState(447);
				typeExpr(5);
				}
				break;
			case 7:
				{
				_localctx = new TupleTContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(448);
				match(LBRACK);
				setState(457);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << MUT) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT) | (1L << LBRACK))) != 0) || _la==Ident) {
					{
					setState(449);
					((TupleTContext)_localctx).typeExpr = typeExpr(0);
					((TupleTContext)_localctx).items.add(((TupleTContext)_localctx).typeExpr);
					setState(454);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(450);
						match(COMMA);
						setState(451);
						((TupleTContext)_localctx).typeExpr = typeExpr(0);
						((TupleTContext)_localctx).items.add(((TupleTContext)_localctx).typeExpr);
						}
						}
						setState(456);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(459);
				match(RBRACK);
				}
				break;
			case 8:
				{
				_localctx = new DefnTContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(460);
				typeDefn();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(473);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(471);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
					case 1:
						{
						_localctx = new OptionTContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(463);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(464);
						match(QUEST);
						}
						break;
					case 2:
						{
						_localctx = new ListTContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(465);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(466);
						match(LBRACK);
						{
						setState(468);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==IntLiteral) {
							{
							setState(467);
							((ListTContext)_localctx).len = match(IntLiteral);
							}
						}

						}
						setState(470);
						match(RBRACK);
						}
						break;
					}
					} 
				}
				setState(475);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class TypePathContext extends ParserRuleContext {
		public IdentContext ident;
		public List<IdentContext> segments = new ArrayList<IdentContext>();
		public List<IdentContext> ident() {
			return getRuleContexts(IdentContext.class);
		}
		public IdentContext ident(int i) {
			return getRuleContext(IdentContext.class,i);
		}
		public List<TerminalNode> DOT() { return getTokens(CWScriptParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(CWScriptParser.DOT, i);
		}
		public TypePathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typePath; }
	}

	public final TypePathContext typePath() throws RecognitionException {
		TypePathContext _localctx = new TypePathContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_typePath);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(476);
			((TypePathContext)_localctx).ident = ident();
			((TypePathContext)_localctx).segments.add(((TypePathContext)_localctx).ident);
			}
			setState(481);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(477);
					match(DOT);
					setState(478);
					((TypePathContext)_localctx).ident = ident();
					((TypePathContext)_localctx).segments.add(((TypePathContext)_localctx).ident);
					}
					} 
				}
				setState(483);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeVariantContext extends ParserRuleContext {
		public IdentContext variant;
		public TypePathContext typePath() {
			return getRuleContext(TypePathContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeVariantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeVariant; }
	}

	public final TypeVariantContext typeVariant() throws RecognitionException {
		TypeVariantContext _localctx = new TypeVariantContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_typeVariant);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(484);
			typePath();
			setState(489);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(485);
				match(LPAREN);
				setState(486);
				expr(0);
				setState(487);
				match(RPAREN);
				}
			}

			{
			setState(491);
			match(DOT);
			setState(492);
			match(HASH);
			setState(493);
			((TypeVariantContext)_localctx).variant = ident();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeDefnContext extends ParserRuleContext {
		public StructDefnContext structDefn() {
			return getRuleContext(StructDefnContext.class,0);
		}
		public EnumDefnContext enumDefn() {
			return getRuleContext(EnumDefnContext.class,0);
		}
		public TypeAliasDefnContext typeAliasDefn() {
			return getRuleContext(TypeAliasDefnContext.class,0);
		}
		public TypeDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeDefn; }
	}

	public final TypeDefnContext typeDefn() throws RecognitionException {
		TypeDefnContext _localctx = new TypeDefnContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_typeDefn);
		try {
			setState(498);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRUCT:
				enterOuterAlt(_localctx, 1);
				{
				setState(495);
				structDefn();
				}
				break;
			case ENUM:
				enterOuterAlt(_localctx, 2);
				{
				setState(496);
				enumDefn();
				}
				break;
			case TYPE:
				enterOuterAlt(_localctx, 3);
				{
				setState(497);
				typeAliasDefn();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructDefnContext extends ParserRuleContext {
		public IdentContext name;
		public ParamContext param;
		public List<ParamContext> members = new ArrayList<ParamContext>();
		public TerminalNode STRUCT() { return getToken(CWScriptParser.STRUCT, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public StructDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structDefn; }
	}

	public final StructDefnContext structDefn() throws RecognitionException {
		StructDefnContext _localctx = new StructDefnContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_structDefn);
		int _la;
		try {
			int _alt;
			setState(534);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,58,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(500);
				match(STRUCT);
				setState(502);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
					{
					setState(501);
					((StructDefnContext)_localctx).name = ident();
					}
				}

				setState(504);
				match(LPAREN);
				setState(513);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
					{
					{
					setState(505);
					((StructDefnContext)_localctx).param = param();
					((StructDefnContext)_localctx).members.add(((StructDefnContext)_localctx).param);
					}
					setState(510);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(506);
						match(COMMA);
						{
						setState(507);
						((StructDefnContext)_localctx).param = param();
						((StructDefnContext)_localctx).members.add(((StructDefnContext)_localctx).param);
						}
						}
						}
						setState(512);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(515);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(516);
				match(STRUCT);
				setState(518);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
					{
					setState(517);
					((StructDefnContext)_localctx).name = ident();
					}
				}

				setState(520);
				match(LBRACE);
				{
				{
				setState(521);
				((StructDefnContext)_localctx).param = param();
				((StructDefnContext)_localctx).members.add(((StructDefnContext)_localctx).param);
				}
				setState(526);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,56,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(522);
						match(COMMA);
						{
						setState(523);
						((StructDefnContext)_localctx).param = param();
						((StructDefnContext)_localctx).members.add(((StructDefnContext)_localctx).param);
						}
						}
						} 
					}
					setState(528);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,56,_ctx);
				}
				setState(530);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(529);
					match(COMMA);
					}
				}

				}
				setState(532);
				match(RBRACE);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeAliasDefnContext extends ParserRuleContext {
		public IdentContext name;
		public TypeExprContext value;
		public TerminalNode TYPE() { return getToken(CWScriptParser.TYPE, 0); }
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TypeAliasDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeAliasDefn; }
	}

	public final TypeAliasDefnContext typeAliasDefn() throws RecognitionException {
		TypeAliasDefnContext _localctx = new TypeAliasDefnContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_typeAliasDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(536);
			match(TYPE);
			{
			setState(537);
			((TypeAliasDefnContext)_localctx).name = ident();
			}
			setState(538);
			match(EQ);
			{
			setState(539);
			((TypeAliasDefnContext)_localctx).value = typeExpr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FnDefnContext extends ParserRuleContext {
		public IdentContext name;
		public Token fallible;
		public FnParamsContext params;
		public TypeExprContext retTy;
		public BlockContext body;
		public TerminalNode FN() { return getToken(CWScriptParser.FN, 0); }
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public FnDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fnDefn; }
	}

	public final FnDefnContext fnDefn() throws RecognitionException {
		FnDefnContext _localctx = new FnDefnContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_fnDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(541);
			match(FN);
			{
			setState(542);
			((FnDefnContext)_localctx).name = ident();
			}
			setState(544);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(543);
				((FnDefnContext)_localctx).fallible = match(BANG);
				}
			}

			setState(546);
			((FnDefnContext)_localctx).params = fnParams();
			setState(549);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(547);
				match(ARROW);
				setState(548);
				((FnDefnContext)_localctx).retTy = typeExpr(0);
				}
			}

			setState(551);
			((FnDefnContext)_localctx).body = block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotContext extends ParserRuleContext {
		public TypePathContext path;
		public ArgContext arg;
		public List<ArgContext> args = new ArrayList<ArgContext>();
		public TerminalNode AT() { return getToken(CWScriptParser.AT, 0); }
		public TypePathContext typePath() {
			return getRuleContext(TypePathContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public ArgContext arg() {
			return getRuleContext(ArgContext.class,0);
		}
		public AnnotContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annot; }
	}

	public final AnnotContext annot() throws RecognitionException {
		AnnotContext _localctx = new AnnotContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_annot);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(553);
			match(AT);
			{
			setState(554);
			((AnnotContext)_localctx).path = typePath();
			}
			setState(560);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,62,_ctx) ) {
			case 1:
				{
				setState(555);
				match(LPAREN);
				setState(557);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << QUERY_NOW) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << TRY) | (1L << ELSE) | (1L << NOT) | (1L << NONE) | (1L << MUT) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << FAIL) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT) | (1L << LPAREN) | (1L << LBRACK) | (1L << LBRACE) | (1L << BAR))) != 0) || ((((_la - 82)) & ~0x3f) == 0 && ((1L << (_la - 82)) & ((1L << (Ident - 82)) | (1L << (StringLiteral - 82)) | (1L << (IntLiteral - 82)) | (1L << (DecLiteral - 82)) | (1L << (BoolLiteral - 82)))) != 0)) {
					{
					setState(556);
					((AnnotContext)_localctx).arg = arg();
					((AnnotContext)_localctx).args.add(((AnnotContext)_localctx).arg);
					}
				}

				setState(559);
				match(RPAREN);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallOptsContext extends ParserRuleContext {
		public MemberValContext memberVal;
		public List<MemberValContext> options = new ArrayList<MemberValContext>();
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<MemberValContext> memberVal() {
			return getRuleContexts(MemberValContext.class);
		}
		public MemberValContext memberVal(int i) {
			return getRuleContext(MemberValContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public CallOptsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callOpts; }
	}

	public final CallOptsContext callOpts() throws RecognitionException {
		CallOptsContext _localctx = new CallOptsContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_callOpts);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(562);
			match(LBRACE);
			setState(574);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
				{
				{
				setState(563);
				((CallOptsContext)_localctx).memberVal = memberVal();
				((CallOptsContext)_localctx).options.add(((CallOptsContext)_localctx).memberVal);
				}
				setState(568);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,63,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(564);
						match(COMMA);
						setState(565);
						((CallOptsContext)_localctx).memberVal = memberVal();
						((CallOptsContext)_localctx).options.add(((CallOptsContext)_localctx).memberVal);
						}
						} 
					}
					setState(570);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,63,_ctx);
				}
				setState(572);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(571);
					match(COMMA);
					}
				}

				}
			}

			setState(576);
			match(RBRACE);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StmtContext extends ParserRuleContext {
		public StmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmt; }
	 
		public StmtContext() { }
		public void copyFrom(StmtContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class InstantiateStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public Token new;
		public TerminalNode INSTANTIATE_NOW() { return getToken(CWScriptParser.INSTANTIATE_NOW, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public InstantiateStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class FailStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public TerminalNode FAIL() { return getToken(CWScriptParser.FAIL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public FailStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class IfStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public IfStmt_Context ifStmt_() {
			return getRuleContext(IfStmt_Context.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public IfStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class EmitStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public TerminalNode EMIT() { return getToken(CWScriptParser.EMIT, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public EmitStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class ExprStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public ExprStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class DelegateExecStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public TerminalNode DELEGATE_EXEC() { return getToken(CWScriptParser.DELEGATE_EXEC, 0); }
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public DelegateExecStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class AssignStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public AssignStmt_Context assignStmt_() {
			return getRuleContext(AssignStmt_Context.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public AssignStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class ExecStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public MemberValContext memberVal;
		public List<MemberValContext> options = new ArrayList<MemberValContext>();
		public TerminalNode EXEC_NOW() { return getToken(CWScriptParser.EXEC_NOW, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public List<MemberValContext> memberVal() {
			return getRuleContexts(MemberValContext.class);
		}
		public MemberValContext memberVal(int i) {
			return getRuleContext(MemberValContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public ExecStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class ConstStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public ConstStmt_Context constStmt_() {
			return getRuleContext(ConstStmt_Context.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public ConstStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class ForStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public ForStmt_Context forStmt_() {
			return getRuleContext(ForStmt_Context.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public ForStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class ReturnStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public TerminalNode RETURN() { return getToken(CWScriptParser.RETURN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public ReturnStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class LetStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public LetStmt_Context letStmt_() {
			return getRuleContext(LetStmt_Context.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public LetStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}

	public final StmtContext stmt() throws RecognitionException {
		StmtContext _localctx = new StmtContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_stmt);
		int _la;
		try {
			int _alt;
			setState(689);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,83,_ctx) ) {
			case 1:
				_localctx = new LetStmtContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(581);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(578);
					((LetStmtContext)_localctx).annot = annot();
					((LetStmtContext)_localctx).ann.add(((LetStmtContext)_localctx).annot);
					}
					}
					setState(583);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(584);
				letStmt_();
				}
				break;
			case 2:
				_localctx = new ConstStmtContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(588);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(585);
					((ConstStmtContext)_localctx).annot = annot();
					((ConstStmtContext)_localctx).ann.add(((ConstStmtContext)_localctx).annot);
					}
					}
					setState(590);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(591);
				constStmt_();
				}
				break;
			case 3:
				_localctx = new AssignStmtContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(595);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(592);
					((AssignStmtContext)_localctx).annot = annot();
					((AssignStmtContext)_localctx).ann.add(((AssignStmtContext)_localctx).annot);
					}
					}
					setState(597);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(598);
				assignStmt_();
				}
				break;
			case 4:
				_localctx = new IfStmtContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(602);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(599);
					((IfStmtContext)_localctx).annot = annot();
					((IfStmtContext)_localctx).ann.add(((IfStmtContext)_localctx).annot);
					}
					}
					setState(604);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(605);
				ifStmt_();
				}
				break;
			case 5:
				_localctx = new ForStmtContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(609);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(606);
					((ForStmtContext)_localctx).annot = annot();
					((ForStmtContext)_localctx).ann.add(((ForStmtContext)_localctx).annot);
					}
					}
					setState(611);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(612);
				forStmt_();
				}
				break;
			case 6:
				_localctx = new ExecStmtContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(616);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(613);
					((ExecStmtContext)_localctx).annot = annot();
					((ExecStmtContext)_localctx).ann.add(((ExecStmtContext)_localctx).annot);
					}
					}
					setState(618);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(619);
				match(EXEC_NOW);
				setState(620);
				expr(0);
				setState(636);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,75,_ctx) ) {
				case 1:
					{
					setState(621);
					match(LBRACE);
					setState(633);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
						{
						{
						setState(622);
						((ExecStmtContext)_localctx).memberVal = memberVal();
						((ExecStmtContext)_localctx).options.add(((ExecStmtContext)_localctx).memberVal);
						}
						setState(627);
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,72,_ctx);
						while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
							if ( _alt==1 ) {
								{
								{
								setState(623);
								match(COMMA);
								setState(624);
								((ExecStmtContext)_localctx).memberVal = memberVal();
								((ExecStmtContext)_localctx).options.add(((ExecStmtContext)_localctx).memberVal);
								}
								} 
							}
							setState(629);
							_errHandler.sync(this);
							_alt = getInterpreter().adaptivePredict(_input,72,_ctx);
						}
						setState(631);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==COMMA) {
							{
							setState(630);
							match(COMMA);
							}
						}

						}
					}

					setState(635);
					match(RBRACE);
					}
					break;
				}
				}
				break;
			case 7:
				_localctx = new DelegateExecStmtContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(641);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(638);
					((DelegateExecStmtContext)_localctx).annot = annot();
					((DelegateExecStmtContext)_localctx).ann.add(((DelegateExecStmtContext)_localctx).annot);
					}
					}
					setState(643);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(644);
				match(DELEGATE_EXEC);
				setState(645);
				match(HASH);
				setState(646);
				expr(0);
				}
				break;
			case 8:
				_localctx = new InstantiateStmtContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(650);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(647);
					((InstantiateStmtContext)_localctx).annot = annot();
					((InstantiateStmtContext)_localctx).ann.add(((InstantiateStmtContext)_localctx).annot);
					}
					}
					setState(652);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(653);
				match(INSTANTIATE_NOW);
				setState(655);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==HASH) {
					{
					setState(654);
					((InstantiateStmtContext)_localctx).new = match(HASH);
					}
				}

				setState(657);
				expr(0);
				}
				break;
			case 9:
				_localctx = new EmitStmtContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(661);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(658);
					((EmitStmtContext)_localctx).annot = annot();
					((EmitStmtContext)_localctx).ann.add(((EmitStmtContext)_localctx).annot);
					}
					}
					setState(663);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(664);
				match(EMIT);
				setState(665);
				expr(0);
				}
				break;
			case 10:
				_localctx = new ReturnStmtContext(_localctx);
				enterOuterAlt(_localctx, 10);
				{
				setState(669);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(666);
					((ReturnStmtContext)_localctx).annot = annot();
					((ReturnStmtContext)_localctx).ann.add(((ReturnStmtContext)_localctx).annot);
					}
					}
					setState(671);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(672);
				match(RETURN);
				setState(673);
				expr(0);
				}
				break;
			case 11:
				_localctx = new FailStmtContext(_localctx);
				enterOuterAlt(_localctx, 11);
				{
				setState(677);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(674);
					((FailStmtContext)_localctx).annot = annot();
					((FailStmtContext)_localctx).ann.add(((FailStmtContext)_localctx).annot);
					}
					}
					setState(679);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(680);
				match(FAIL);
				setState(681);
				expr(0);
				}
				break;
			case 12:
				_localctx = new ExprStmtContext(_localctx);
				enterOuterAlt(_localctx, 12);
				{
				setState(685);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(682);
					((ExprStmtContext)_localctx).annot = annot();
					((ExprStmtContext)_localctx).ann.add(((ExprStmtContext)_localctx).annot);
					}
					}
					setState(687);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(688);
				expr(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LetStmt_Context extends ParserRuleContext {
		public TerminalNode LET() { return getToken(CWScriptParser.LET, 0); }
		public Let_bindingContext let_binding() {
			return getRuleContext(Let_bindingContext.class,0);
		}
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public LetStmt_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_letStmt_; }
	}

	public final LetStmt_Context letStmt_() throws RecognitionException {
		LetStmt_Context _localctx = new LetStmt_Context(_ctx, getState());
		enterRule(_localctx, 80, RULE_letStmt_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(691);
			match(LET);
			setState(692);
			let_binding();
			setState(695);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,84,_ctx) ) {
			case 1:
				{
				setState(693);
				match(EQ);
				setState(694);
				expr(0);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstStmt_Context extends ParserRuleContext {
		public TerminalNode CONST() { return getToken(CWScriptParser.CONST, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ConstStmt_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constStmt_; }
	}

	public final ConstStmt_Context constStmt_() throws RecognitionException {
		ConstStmt_Context _localctx = new ConstStmt_Context(_ctx, getState());
		enterRule(_localctx, 82, RULE_constStmt_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(697);
			match(CONST);
			setState(698);
			ident();
			setState(699);
			match(EQ);
			setState(700);
			expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Let_bindingContext extends ParserRuleContext {
		public Let_bindingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_let_binding; }
	 
		public Let_bindingContext() { }
		public void copyFrom(Let_bindingContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class TupleBindingContext extends Let_bindingContext {
		public IdentContext ident;
		public List<IdentContext> symbols = new ArrayList<IdentContext>();
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public List<IdentContext> ident() {
			return getRuleContexts(IdentContext.class);
		}
		public IdentContext ident(int i) {
			return getRuleContext(IdentContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public TupleBindingContext(Let_bindingContext ctx) { copyFrom(ctx); }
	}
	public static class StructBindingContext extends Let_bindingContext {
		public IdentContext ident;
		public List<IdentContext> symbols = new ArrayList<IdentContext>();
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<IdentContext> ident() {
			return getRuleContexts(IdentContext.class);
		}
		public IdentContext ident(int i) {
			return getRuleContext(IdentContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public StructBindingContext(Let_bindingContext ctx) { copyFrom(ctx); }
	}
	public static class IdentBindingContext extends Let_bindingContext {
		public TypeExprContext ty;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public IdentBindingContext(Let_bindingContext ctx) { copyFrom(ctx); }
	}

	public final Let_bindingContext let_binding() throws RecognitionException {
		Let_bindingContext _localctx = new Let_bindingContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_let_binding);
		int _la;
		try {
			setState(729);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CONTRACT:
			case INTERFACE:
			case IMPORT:
			case IMPLEMENTS:
			case EXTENDS:
			case ERROR:
			case EVENT:
			case INSTANTIATE:
			case EXEC:
			case QUERY:
			case REPLY:
			case FOR:
			case IN:
			case FROM:
			case STATE:
			case IF:
			case ELSE:
			case AND:
			case OR:
			case TRUE:
			case FALSE:
			case FN:
			case LET:
			case RETURN:
			case STRUCT:
			case ENUM:
			case TYPE:
			case EMIT:
			case Ident:
				_localctx = new IdentBindingContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(702);
				ident();
				setState(705);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,85,_ctx) ) {
				case 1:
					{
					setState(703);
					match(COLON);
					setState(704);
					((IdentBindingContext)_localctx).ty = typeExpr(0);
					}
					break;
				}
				}
				break;
			case LBRACE:
				_localctx = new StructBindingContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(707);
				match(LBRACE);
				{
				setState(708);
				((StructBindingContext)_localctx).ident = ident();
				((StructBindingContext)_localctx).symbols.add(((StructBindingContext)_localctx).ident);
				}
				setState(713);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(709);
					match(COMMA);
					setState(710);
					((StructBindingContext)_localctx).ident = ident();
					((StructBindingContext)_localctx).symbols.add(((StructBindingContext)_localctx).ident);
					}
					}
					setState(715);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(716);
				match(RBRACE);
				}
				break;
			case LBRACK:
				_localctx = new TupleBindingContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(718);
				match(LBRACK);
				{
				setState(719);
				((TupleBindingContext)_localctx).ident = ident();
				((TupleBindingContext)_localctx).symbols.add(((TupleBindingContext)_localctx).ident);
				}
				setState(724);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(720);
					match(COMMA);
					setState(721);
					((TupleBindingContext)_localctx).ident = ident();
					((TupleBindingContext)_localctx).symbols.add(((TupleBindingContext)_localctx).ident);
					}
					}
					setState(726);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(727);
				match(RBRACK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignStmt_Context extends ParserRuleContext {
		public AssignLHS_Context lhs;
		public Token assignOp;
		public ExprContext rhs;
		public AssignLHS_Context assignLHS_() {
			return getRuleContext(AssignLHS_Context.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public TerminalNode PLUS_EQ() { return getToken(CWScriptParser.PLUS_EQ, 0); }
		public TerminalNode MINUS_EQ() { return getToken(CWScriptParser.MINUS_EQ, 0); }
		public TerminalNode MUL_EQ() { return getToken(CWScriptParser.MUL_EQ, 0); }
		public TerminalNode DIV_EQ() { return getToken(CWScriptParser.DIV_EQ, 0); }
		public TerminalNode MOD_EQ() { return getToken(CWScriptParser.MOD_EQ, 0); }
		public AssignStmt_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignStmt_; }
	}

	public final AssignStmt_Context assignStmt_() throws RecognitionException {
		AssignStmt_Context _localctx = new AssignStmt_Context(_ctx, getState());
		enterRule(_localctx, 86, RULE_assignStmt_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(731);
			((AssignStmt_Context)_localctx).lhs = assignLHS_();
			}
			{
			setState(732);
			((AssignStmt_Context)_localctx).assignOp = _input.LT(1);
			_la = _input.LA(1);
			if ( !(((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (EQ - 64)) | (1L << (PLUS_EQ - 64)) | (1L << (MINUS_EQ - 64)) | (1L << (MUL_EQ - 64)) | (1L << (DIV_EQ - 64)) | (1L << (MOD_EQ - 64)))) != 0)) ) {
				((AssignStmt_Context)_localctx).assignOp = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
			{
			setState(733);
			((AssignStmt_Context)_localctx).rhs = expr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignLHS_Context extends ParserRuleContext {
		public AssignLHS_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignLHS_; }
	 
		public AssignLHS_Context() { }
		public void copyFrom(AssignLHS_Context ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class IdentLHSContext extends AssignLHS_Context {
		public IdentContext symbol;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public IdentLHSContext(AssignLHS_Context ctx) { copyFrom(ctx); }
	}
	public static class DotLHSContext extends AssignLHS_Context {
		public ExprContext obj;
		public IdentContext member;
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public DotLHSContext(AssignLHS_Context ctx) { copyFrom(ctx); }
	}
	public static class IndexLHSContext extends AssignLHS_Context {
		public ExprContext obj;
		public ExprContext expr;
		public List<ExprContext> args = new ArrayList<ExprContext>();
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public IndexLHSContext(AssignLHS_Context ctx) { copyFrom(ctx); }
	}

	public final AssignLHS_Context assignLHS_() throws RecognitionException {
		AssignLHS_Context _localctx = new AssignLHS_Context(_ctx, getState());
		enterRule(_localctx, 88, RULE_assignLHS_);
		int _la;
		try {
			setState(752);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,90,_ctx) ) {
			case 1:
				_localctx = new IdentLHSContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(735);
				((IdentLHSContext)_localctx).symbol = ident();
				}
				break;
			case 2:
				_localctx = new DotLHSContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(736);
				((DotLHSContext)_localctx).obj = expr(0);
				}
				setState(737);
				match(DOT);
				{
				setState(738);
				((DotLHSContext)_localctx).member = ident();
				}
				}
				break;
			case 3:
				_localctx = new IndexLHSContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(740);
				((IndexLHSContext)_localctx).obj = expr(0);
				}
				setState(741);
				match(LBRACK);
				{
				setState(742);
				((IndexLHSContext)_localctx).expr = expr(0);
				((IndexLHSContext)_localctx).args.add(((IndexLHSContext)_localctx).expr);
				}
				setState(747);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(743);
					match(COMMA);
					setState(744);
					((IndexLHSContext)_localctx).expr = expr(0);
					((IndexLHSContext)_localctx).args.add(((IndexLHSContext)_localctx).expr);
					}
					}
					setState(749);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(750);
				match(RBRACK);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class MulExprContext extends ExprContext {
		public Token op;
		public ExprContext rhs;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode MUL() { return getToken(CWScriptParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(CWScriptParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(CWScriptParser.MOD, 0); }
		public MulExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class AndExprContext extends ExprContext {
		public ExprContext rhs;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode AND() { return getToken(CWScriptParser.AND, 0); }
		public AndExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class IfExprContext extends ExprContext {
		public IfStmt_Context ifStmt_() {
			return getRuleContext(IfStmt_Context.class,0);
		}
		public IfExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class UnitVariantExprContext extends ExprContext {
		public TypeVariantContext typeVariant() {
			return getRuleContext(TypeVariantContext.class,0);
		}
		public UnitVariantExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class TypeDColonExprContext extends ExprContext {
		public IdentContext member;
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode D_COLON() { return getToken(CWScriptParser.D_COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeDColonExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class AsExprContext extends ExprContext {
		public TypeExprContext ty;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode AS() { return getToken(CWScriptParser.AS, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public AsExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class CompExprContext extends ExprContext {
		public Token op;
		public ExprContext rhs;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode LT() { return getToken(CWScriptParser.LT, 0); }
		public TerminalNode GT() { return getToken(CWScriptParser.GT, 0); }
		public TerminalNode LT_EQ() { return getToken(CWScriptParser.LT_EQ, 0); }
		public TerminalNode GT_EQ() { return getToken(CWScriptParser.GT_EQ, 0); }
		public CompExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class StructExprContext extends ExprContext {
		public MemberValContext memberVal;
		public List<MemberValContext> members = new ArrayList<MemberValContext>();
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public List<MemberValContext> memberVal() {
			return getRuleContexts(MemberValContext.class);
		}
		public MemberValContext memberVal(int i) {
			return getRuleContext(MemberValContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public StructExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class IndexExprContext extends ExprContext {
		public ArgContext arg;
		public List<ArgContext> args = new ArrayList<ArgContext>();
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public List<ArgContext> arg() {
			return getRuleContexts(ArgContext.class);
		}
		public ArgContext arg(int i) {
			return getRuleContext(ArgContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public IndexExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class DColonExprContext extends ExprContext {
		public IdentContext member;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode D_COLON() { return getToken(CWScriptParser.D_COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public DColonExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class IsExprContext extends ExprContext {
		public TypeExprContext rhs;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode IS() { return getToken(CWScriptParser.IS, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public IsExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class LiteralExprContext extends ExprContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public LiteralExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class TryCatchElseExprContext extends ExprContext {
		public TryCatchElseExpr_Context tryCatchElseExpr_() {
			return getRuleContext(TryCatchElseExpr_Context.class,0);
		}
		public TryCatchElseExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class NotExprContext extends ExprContext {
		public TerminalNode NOT() { return getToken(CWScriptParser.NOT, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public NotExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class InExprContext extends ExprContext {
		public ExprContext rhs;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode IN() { return getToken(CWScriptParser.IN, 0); }
		public InExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class FailExprContext extends ExprContext {
		public TerminalNode FAIL() { return getToken(CWScriptParser.FAIL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public FailExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class IdentExprContext extends ExprContext {
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public IdentExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class AddExprContext extends ExprContext {
		public Token op;
		public ExprContext rhs;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode PLUS() { return getToken(CWScriptParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(CWScriptParser.MINUS, 0); }
		public AddExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class ClosureExprContext extends ExprContext {
		public ClosureContext closure() {
			return getRuleContext(ClosureContext.class,0);
		}
		public ClosureExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class DotExprContext extends ExprContext {
		public Token unwrap;
		public IdentContext member;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public TerminalNode QUEST() { return getToken(CWScriptParser.QUEST, 0); }
		public DotExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class ShortTryExprContext extends ExprContext {
		public ExprContext lhs;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode D_QUEST() { return getToken(CWScriptParser.D_QUEST, 0); }
		public ShortTryExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class TupleExprContext extends ExprContext {
		public ExprContext expr;
		public List<ExprContext> items = new ArrayList<ExprContext>();
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public TupleExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class OrExprContext extends ExprContext {
		public ExprContext rhs;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode OR() { return getToken(CWScriptParser.OR, 0); }
		public OrExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class GroupExprContext extends ExprContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode TILDE() { return getToken(CWScriptParser.TILDE, 0); }
		public GroupExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class EqExprContext extends ExprContext {
		public Token op;
		public ExprContext rhs;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode EQ_EQ() { return getToken(CWScriptParser.EQ_EQ, 0); }
		public TerminalNode NEQ() { return getToken(CWScriptParser.NEQ, 0); }
		public EqExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class TypeFnCallExprContext extends ExprContext {
		public Token fallible;
		public ArgContext arg;
		public List<ArgContext> args = new ArrayList<ArgContext>();
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public List<ArgContext> arg() {
			return getRuleContexts(ArgContext.class);
		}
		public ArgContext arg(int i) {
			return getRuleContext(ArgContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public TypeFnCallExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class QueryNowExprContext extends ExprContext {
		public TerminalNode QUERY_NOW() { return getToken(CWScriptParser.QUERY_NOW, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public QueryNowExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class NoneCheckExprContext extends ExprContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode QUEST() { return getToken(CWScriptParser.QUEST, 0); }
		public NoneCheckExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class FnCallExprContext extends ExprContext {
		public Token fallible;
		public ArgContext arg;
		public List<ArgContext> args = new ArrayList<ArgContext>();
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public List<ArgContext> arg() {
			return getRuleContexts(ArgContext.class);
		}
		public ArgContext arg(int i) {
			return getRuleContext(ArgContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public FnCallExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class GroupedExprContext extends ExprContext {
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public GroupedExprContext(ExprContext ctx) { copyFrom(ctx); }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 90;
		enterRecursionRule(_localctx, 90, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(822);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,100,_ctx) ) {
			case 1:
				{
				_localctx = new GroupedExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(755);
				match(LPAREN);
				setState(756);
				expr(0);
				setState(757);
				match(RPAREN);
				}
				break;
			case 2:
				{
				_localctx = new TypeDColonExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(759);
				typeExpr(0);
				setState(760);
				match(D_COLON);
				{
				setState(761);
				((TypeDColonExprContext)_localctx).member = ident();
				}
				}
				break;
			case 3:
				{
				_localctx = new TypeFnCallExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(763);
				typeExpr(0);
				setState(765);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==BANG) {
					{
					setState(764);
					((TypeFnCallExprContext)_localctx).fallible = match(BANG);
					}
				}

				setState(767);
				match(LPAREN);
				setState(776);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << QUERY_NOW) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << TRY) | (1L << ELSE) | (1L << NOT) | (1L << NONE) | (1L << MUT) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << FAIL) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT) | (1L << LPAREN) | (1L << LBRACK) | (1L << LBRACE) | (1L << BAR))) != 0) || ((((_la - 82)) & ~0x3f) == 0 && ((1L << (_la - 82)) & ((1L << (Ident - 82)) | (1L << (StringLiteral - 82)) | (1L << (IntLiteral - 82)) | (1L << (DecLiteral - 82)) | (1L << (BoolLiteral - 82)))) != 0)) {
					{
					{
					setState(768);
					((TypeFnCallExprContext)_localctx).arg = arg();
					((TypeFnCallExprContext)_localctx).args.add(((TypeFnCallExprContext)_localctx).arg);
					}
					setState(773);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(769);
						match(COMMA);
						setState(770);
						((TypeFnCallExprContext)_localctx).arg = arg();
						((TypeFnCallExprContext)_localctx).args.add(((TypeFnCallExprContext)_localctx).arg);
						}
						}
						setState(775);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(778);
				match(RPAREN);
				}
				break;
			case 4:
				{
				_localctx = new TryCatchElseExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(780);
				tryCatchElseExpr_();
				}
				break;
			case 5:
				{
				_localctx = new NotExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(781);
				match(NOT);
				setState(782);
				expr(13);
				}
				break;
			case 6:
				{
				_localctx = new IfExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(783);
				ifStmt_();
				}
				break;
			case 7:
				{
				_localctx = new QueryNowExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(784);
				match(QUERY_NOW);
				setState(785);
				expr(9);
				}
				break;
			case 8:
				{
				_localctx = new FailExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(786);
				match(FAIL);
				setState(787);
				expr(8);
				}
				break;
			case 9:
				{
				_localctx = new ClosureExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(788);
				closure();
				}
				break;
			case 10:
				{
				_localctx = new TupleExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(789);
				match(LBRACK);
				setState(798);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << QUERY_NOW) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << TRY) | (1L << ELSE) | (1L << NOT) | (1L << NONE) | (1L << MUT) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << FAIL) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT) | (1L << LPAREN) | (1L << LBRACK) | (1L << LBRACE) | (1L << BAR))) != 0) || ((((_la - 82)) & ~0x3f) == 0 && ((1L << (_la - 82)) & ((1L << (Ident - 82)) | (1L << (StringLiteral - 82)) | (1L << (IntLiteral - 82)) | (1L << (DecLiteral - 82)) | (1L << (BoolLiteral - 82)))) != 0)) {
					{
					{
					setState(790);
					((TupleExprContext)_localctx).expr = expr(0);
					((TupleExprContext)_localctx).items.add(((TupleExprContext)_localctx).expr);
					}
					setState(795);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(791);
						match(COMMA);
						{
						setState(792);
						((TupleExprContext)_localctx).expr = expr(0);
						((TupleExprContext)_localctx).items.add(((TupleExprContext)_localctx).expr);
						}
						}
						}
						setState(797);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(800);
				match(RBRACK);
				}
				break;
			case 11:
				{
				_localctx = new StructExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(802);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << MUT) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT) | (1L << LBRACK))) != 0) || _la==Ident) {
					{
					setState(801);
					typeExpr(0);
					}
				}

				setState(804);
				match(LBRACE);
				setState(816);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
					{
					{
					setState(805);
					((StructExprContext)_localctx).memberVal = memberVal();
					((StructExprContext)_localctx).members.add(((StructExprContext)_localctx).memberVal);
					}
					setState(810);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,97,_ctx);
					while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
						if ( _alt==1 ) {
							{
							{
							setState(806);
							match(COMMA);
							setState(807);
							((StructExprContext)_localctx).memberVal = memberVal();
							((StructExprContext)_localctx).members.add(((StructExprContext)_localctx).memberVal);
							}
							} 
						}
						setState(812);
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,97,_ctx);
					}
					setState(814);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==COMMA) {
						{
						setState(813);
						match(COMMA);
						}
					}

					}
				}

				setState(818);
				match(RBRACE);
				}
				break;
			case 12:
				{
				_localctx = new UnitVariantExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(819);
				typeVariant();
				}
				break;
			case 13:
				{
				_localctx = new LiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(820);
				literal();
				}
				break;
			case 14:
				{
				_localctx = new IdentExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(821);
				ident();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(897);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,107,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(895);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,106,_ctx) ) {
					case 1:
						{
						_localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(824);
						if (!(precpred(_ctx, 29))) throw new FailedPredicateException(this, "precpred(_ctx, 29)");
						setState(826);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==QUEST || _la==BANG) {
							{
							setState(825);
							((DotExprContext)_localctx).unwrap = _input.LT(1);
							_la = _input.LA(1);
							if ( !(_la==QUEST || _la==BANG) ) {
								((DotExprContext)_localctx).unwrap = (Token)_errHandler.recoverInline(this);
							}
							else {
								if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
								_errHandler.reportMatch(this);
								consume();
							}
							}
						}

						setState(828);
						match(DOT);
						{
						setState(829);
						((DotExprContext)_localctx).member = ident();
						}
						}
						break;
					case 2:
						{
						_localctx = new AsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(830);
						if (!(precpred(_ctx, 28))) throw new FailedPredicateException(this, "precpred(_ctx, 28)");
						setState(831);
						match(AS);
						setState(832);
						((AsExprContext)_localctx).ty = typeExpr(0);
						}
						break;
					case 3:
						{
						_localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(833);
						if (!(precpred(_ctx, 27))) throw new FailedPredicateException(this, "precpred(_ctx, 27)");
						setState(834);
						match(LBRACK);
						{
						setState(835);
						((IndexExprContext)_localctx).arg = arg();
						((IndexExprContext)_localctx).args.add(((IndexExprContext)_localctx).arg);
						}
						setState(840);
						_errHandler.sync(this);
						_la = _input.LA(1);
						while (_la==COMMA) {
							{
							{
							setState(836);
							match(COMMA);
							setState(837);
							((IndexExprContext)_localctx).arg = arg();
							((IndexExprContext)_localctx).args.add(((IndexExprContext)_localctx).arg);
							}
							}
							setState(842);
							_errHandler.sync(this);
							_la = _input.LA(1);
						}
						setState(843);
						match(RBRACK);
						}
						break;
					case 4:
						{
						_localctx = new DColonExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(845);
						if (!(precpred(_ctx, 26))) throw new FailedPredicateException(this, "precpred(_ctx, 26)");
						setState(846);
						match(D_COLON);
						{
						setState(847);
						((DColonExprContext)_localctx).member = ident();
						}
						}
						break;
					case 5:
						{
						_localctx = new FnCallExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(848);
						if (!(precpred(_ctx, 24))) throw new FailedPredicateException(this, "precpred(_ctx, 24)");
						setState(850);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==BANG) {
							{
							setState(849);
							((FnCallExprContext)_localctx).fallible = match(BANG);
							}
						}

						setState(852);
						match(LPAREN);
						setState(861);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << QUERY_NOW) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << TRY) | (1L << ELSE) | (1L << NOT) | (1L << NONE) | (1L << MUT) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << FAIL) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT) | (1L << LPAREN) | (1L << LBRACK) | (1L << LBRACE) | (1L << BAR))) != 0) || ((((_la - 82)) & ~0x3f) == 0 && ((1L << (_la - 82)) & ((1L << (Ident - 82)) | (1L << (StringLiteral - 82)) | (1L << (IntLiteral - 82)) | (1L << (DecLiteral - 82)) | (1L << (BoolLiteral - 82)))) != 0)) {
							{
							{
							setState(853);
							((FnCallExprContext)_localctx).arg = arg();
							((FnCallExprContext)_localctx).args.add(((FnCallExprContext)_localctx).arg);
							}
							setState(858);
							_errHandler.sync(this);
							_la = _input.LA(1);
							while (_la==COMMA) {
								{
								{
								setState(854);
								match(COMMA);
								setState(855);
								((FnCallExprContext)_localctx).arg = arg();
								((FnCallExprContext)_localctx).args.add(((FnCallExprContext)_localctx).arg);
								}
								}
								setState(860);
								_errHandler.sync(this);
								_la = _input.LA(1);
							}
							}
						}

						setState(863);
						match(RPAREN);
						}
						break;
					case 6:
						{
						_localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(864);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						{
						setState(865);
						((MulExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & ((1L << (MUL - 71)) | (1L << (DIV - 71)) | (1L << (MOD - 71)))) != 0)) ) {
							((MulExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						{
						setState(866);
						((MulExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 7:
						{
						_localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(867);
						if (!(precpred(_ctx, 21))) throw new FailedPredicateException(this, "precpred(_ctx, 21)");
						{
						setState(868);
						((AddExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==MINUS) ) {
							((AddExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						{
						setState(869);
						((AddExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 8:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(870);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						{
						setState(871);
						((CompExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 77)) & ~0x3f) == 0 && ((1L << (_la - 77)) & ((1L << (LT - 77)) | (1L << (LT_EQ - 77)) | (1L << (GT - 77)) | (1L << (GT_EQ - 77)))) != 0)) ) {
							((CompExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						{
						setState(872);
						((CompExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 9:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(873);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						{
						setState(874);
						((EqExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==EQ_EQ || _la==NEQ) ) {
							((EqExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						{
						setState(875);
						((EqExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 10:
						{
						_localctx = new NoneCheckExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(876);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(877);
						match(QUEST);
						}
						break;
					case 11:
						{
						_localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(878);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(879);
						match(IS);
						{
						setState(880);
						((IsExprContext)_localctx).rhs = typeExpr(0);
						}
						}
						break;
					case 12:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(881);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(882);
						match(IN);
						{
						setState(883);
						((InExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 13:
						{
						_localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(884);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(885);
						match(D_QUEST);
						{
						setState(886);
						((ShortTryExprContext)_localctx).lhs = expr(0);
						}
						}
						break;
					case 14:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(887);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(888);
						match(AND);
						{
						setState(889);
						((AndExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 15:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(890);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(891);
						match(OR);
						{
						setState(892);
						((OrExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 16:
						{
						_localctx = new GroupExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(893);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(894);
						match(TILDE);
						}
						break;
					}
					} 
				}
				setState(899);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,107,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ClosureParamsContext extends ParserRuleContext {
		public ClosureParamsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_closureParams; }
	 
		public ClosureParamsContext() { }
		public void copyFrom(ClosureParamsContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class UntypedClosureParamsContext extends ClosureParamsContext {
		public IdentContext ident;
		public List<IdentContext> params = new ArrayList<IdentContext>();
		public List<TerminalNode> BAR() { return getTokens(CWScriptParser.BAR); }
		public TerminalNode BAR(int i) {
			return getToken(CWScriptParser.BAR, i);
		}
		public List<IdentContext> ident() {
			return getRuleContexts(IdentContext.class);
		}
		public IdentContext ident(int i) {
			return getRuleContext(IdentContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public UntypedClosureParamsContext(ClosureParamsContext ctx) { copyFrom(ctx); }
	}
	public static class TypedClosureParamsContext extends ClosureParamsContext {
		public ParamContext param;
		public List<ParamContext> params = new ArrayList<ParamContext>();
		public List<TerminalNode> BAR() { return getTokens(CWScriptParser.BAR); }
		public TerminalNode BAR(int i) {
			return getToken(CWScriptParser.BAR, i);
		}
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public TypedClosureParamsContext(ClosureParamsContext ctx) { copyFrom(ctx); }
	}

	public final ClosureParamsContext closureParams() throws RecognitionException {
		ClosureParamsContext _localctx = new ClosureParamsContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_closureParams);
		int _la;
		try {
			setState(924);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,112,_ctx) ) {
			case 1:
				_localctx = new UntypedClosureParamsContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(900);
				match(BAR);
				setState(909);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
					{
					{
					setState(901);
					((UntypedClosureParamsContext)_localctx).ident = ident();
					((UntypedClosureParamsContext)_localctx).params.add(((UntypedClosureParamsContext)_localctx).ident);
					}
					setState(906);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(902);
						match(COMMA);
						setState(903);
						((UntypedClosureParamsContext)_localctx).ident = ident();
						((UntypedClosureParamsContext)_localctx).params.add(((UntypedClosureParamsContext)_localctx).ident);
						}
						}
						setState(908);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(911);
				match(BAR);
				}
				break;
			case 2:
				_localctx = new TypedClosureParamsContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(912);
				match(BAR);
				setState(921);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
					{
					{
					setState(913);
					((TypedClosureParamsContext)_localctx).param = param();
					((TypedClosureParamsContext)_localctx).params.add(((TypedClosureParamsContext)_localctx).param);
					}
					setState(918);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(914);
						match(COMMA);
						setState(915);
						((TypedClosureParamsContext)_localctx).param = param();
						((TypedClosureParamsContext)_localctx).params.add(((TypedClosureParamsContext)_localctx).param);
						}
						}
						setState(920);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(923);
				match(BAR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClosureContext extends ParserRuleContext {
		public ClosureParamsContext params;
		public TypeExprContext retTy;
		public BlockContext body;
		public StmtContext body_stmt;
		public ClosureParamsContext closureParams() {
			return getRuleContext(ClosureParamsContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public StmtContext stmt() {
			return getRuleContext(StmtContext.class,0);
		}
		public ClosureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_closure; }
	}

	public final ClosureContext closure() throws RecognitionException {
		ClosureContext _localctx = new ClosureContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_closure);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(926);
			((ClosureContext)_localctx).params = closureParams();
			}
			setState(929);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(927);
				match(ARROW);
				setState(928);
				((ClosureContext)_localctx).retTy = typeExpr(0);
				}
			}

			setState(933);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,114,_ctx) ) {
			case 1:
				{
				{
				setState(931);
				((ClosureContext)_localctx).body = block();
				}
				}
				break;
			case 2:
				{
				{
				setState(932);
				((ClosureContext)_localctx).body_stmt = stmt();
				}
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public StmtContext stmt;
		public List<StmtContext> body = new ArrayList<StmtContext>();
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(935);
			match(LBRACE);
			setState(939);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE_NOW) | (1L << EXEC_NOW) | (1L << QUERY_NOW) | (1L << DELEGATE_EXEC) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << TRY) | (1L << ELSE) | (1L << NOT) | (1L << NONE) | (1L << MUT) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << CONST) | (1L << FAIL) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT) | (1L << LPAREN) | (1L << LBRACK) | (1L << LBRACE) | (1L << AT) | (1L << BAR))) != 0) || ((((_la - 82)) & ~0x3f) == 0 && ((1L << (_la - 82)) & ((1L << (Ident - 82)) | (1L << (StringLiteral - 82)) | (1L << (IntLiteral - 82)) | (1L << (DecLiteral - 82)) | (1L << (BoolLiteral - 82)))) != 0)) {
				{
				{
				setState(936);
				((BlockContext)_localctx).stmt = stmt();
				((BlockContext)_localctx).body.add(((BlockContext)_localctx).stmt);
				}
				}
				setState(941);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(942);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TryCatchElseExpr_Context extends ParserRuleContext {
		public BlockContext body;
		public CatchClauseContext catchClause;
		public List<CatchClauseContext> catches = new ArrayList<CatchClauseContext>();
		public ElseClauseContext else_;
		public TerminalNode TRY() { return getToken(CWScriptParser.TRY, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public List<CatchClauseContext> catchClause() {
			return getRuleContexts(CatchClauseContext.class);
		}
		public CatchClauseContext catchClause(int i) {
			return getRuleContext(CatchClauseContext.class,i);
		}
		public ElseClauseContext elseClause() {
			return getRuleContext(ElseClauseContext.class,0);
		}
		public TryCatchElseExpr_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tryCatchElseExpr_; }
	}

	public final TryCatchElseExpr_Context tryCatchElseExpr_() throws RecognitionException {
		TryCatchElseExpr_Context _localctx = new TryCatchElseExpr_Context(_ctx, getState());
		enterRule(_localctx, 98, RULE_tryCatchElseExpr_);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(944);
			match(TRY);
			{
			setState(945);
			((TryCatchElseExpr_Context)_localctx).body = block();
			}
			setState(949);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,116,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(946);
					((TryCatchElseExpr_Context)_localctx).catchClause = catchClause();
					((TryCatchElseExpr_Context)_localctx).catches.add(((TryCatchElseExpr_Context)_localctx).catchClause);
					}
					} 
				}
				setState(951);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,116,_ctx);
			}
			setState(953);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,117,_ctx) ) {
			case 1:
				{
				setState(952);
				((TryCatchElseExpr_Context)_localctx).else_ = elseClause();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CatchClauseContext extends ParserRuleContext {
		public CatchClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catchClause; }
	 
		public CatchClauseContext() { }
		public void copyFrom(CatchClauseContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class CatchContext extends CatchClauseContext {
		public TypeExprContext ty;
		public BlockContext body;
		public TerminalNode CATCH() { return getToken(CWScriptParser.CATCH, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public CatchContext(CatchClauseContext ctx) { copyFrom(ctx); }
	}
	public static class CatchBindContext extends CatchClauseContext {
		public IdentContext name;
		public TypeExprContext ty;
		public BlockContext body;
		public TerminalNode CATCH() { return getToken(CWScriptParser.CATCH, 0); }
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public CatchBindContext(CatchClauseContext ctx) { copyFrom(ctx); }
	}

	public final CatchClauseContext catchClause() throws RecognitionException {
		CatchClauseContext _localctx = new CatchClauseContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_catchClause);
		try {
			setState(966);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,118,_ctx) ) {
			case 1:
				_localctx = new CatchContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(955);
				match(CATCH);
				{
				setState(956);
				((CatchContext)_localctx).ty = typeExpr(0);
				}
				{
				setState(957);
				((CatchContext)_localctx).body = block();
				}
				}
				break;
			case 2:
				_localctx = new CatchBindContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(959);
				match(CATCH);
				{
				setState(960);
				((CatchBindContext)_localctx).name = ident();
				}
				{
				setState(961);
				match(COLON);
				{
				setState(962);
				((CatchBindContext)_localctx).ty = typeExpr(0);
				}
				}
				{
				setState(964);
				((CatchBindContext)_localctx).body = block();
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgContext extends ParserRuleContext {
		public IdentContext name;
		public ExprContext value;
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arg; }
	}

	public final ArgContext arg() throws RecognitionException {
		ArgContext _localctx = new ArgContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_arg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(971);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,119,_ctx) ) {
			case 1:
				{
				{
				setState(968);
				((ArgContext)_localctx).name = ident();
				}
				setState(969);
				match(EQ);
				}
				break;
			}
			{
			setState(973);
			((ArgContext)_localctx).value = expr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MemberValContext extends ParserRuleContext {
		public IdentContext name;
		public ExprContext value;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public MemberValContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memberVal; }
	}

	public final MemberValContext memberVal() throws RecognitionException {
		MemberValContext _localctx = new MemberValContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_memberVal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(975);
			((MemberValContext)_localctx).name = ident();
			}
			setState(978);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(976);
				match(COLON);
				{
				setState(977);
				((MemberValContext)_localctx).value = expr(0);
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	 
		public LiteralContext() { }
		public void copyFrom(LiteralContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NoneLitContext extends LiteralContext {
		public TerminalNode NONE() { return getToken(CWScriptParser.NONE, 0); }
		public NoneLitContext(LiteralContext ctx) { copyFrom(ctx); }
	}
	public static class DecLitContext extends LiteralContext {
		public TerminalNode DecLiteral() { return getToken(CWScriptParser.DecLiteral, 0); }
		public DecLitContext(LiteralContext ctx) { copyFrom(ctx); }
	}
	public static class IntLitContext extends LiteralContext {
		public TerminalNode IntLiteral() { return getToken(CWScriptParser.IntLiteral, 0); }
		public IntLitContext(LiteralContext ctx) { copyFrom(ctx); }
	}
	public static class BoolLitContext extends LiteralContext {
		public TerminalNode BoolLiteral() { return getToken(CWScriptParser.BoolLiteral, 0); }
		public BoolLitContext(LiteralContext ctx) { copyFrom(ctx); }
	}
	public static class StringLitContext extends LiteralContext {
		public TerminalNode StringLiteral() { return getToken(CWScriptParser.StringLiteral, 0); }
		public StringLitContext(LiteralContext ctx) { copyFrom(ctx); }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_literal);
		try {
			setState(985);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case StringLiteral:
				_localctx = new StringLitContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(980);
				match(StringLiteral);
				}
				break;
			case IntLiteral:
				_localctx = new IntLitContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(981);
				match(IntLiteral);
				}
				break;
			case DecLiteral:
				_localctx = new DecLitContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(982);
				match(DecLiteral);
				}
				break;
			case BoolLiteral:
				_localctx = new BoolLitContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(983);
				match(BoolLiteral);
				}
				break;
			case NONE:
				_localctx = new NoneLitContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(984);
				match(NONE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfStmt_Context extends ParserRuleContext {
		public ExprContext pred;
		public BlockContext body;
		public ElseClauseContext else_;
		public TerminalNode IF() { return getToken(CWScriptParser.IF, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ElseClauseContext elseClause() {
			return getRuleContext(ElseClauseContext.class,0);
		}
		public IfStmt_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStmt_; }
	}

	public final IfStmt_Context ifStmt_() throws RecognitionException {
		IfStmt_Context _localctx = new IfStmt_Context(_ctx, getState());
		enterRule(_localctx, 108, RULE_ifStmt_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(987);
			match(IF);
			{
			setState(988);
			((IfStmt_Context)_localctx).pred = expr(0);
			}
			{
			setState(989);
			((IfStmt_Context)_localctx).body = block();
			}
			setState(991);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,122,_ctx) ) {
			case 1:
				{
				setState(990);
				((IfStmt_Context)_localctx).else_ = elseClause();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElseClauseContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(CWScriptParser.ELSE, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public StmtContext stmt() {
			return getRuleContext(StmtContext.class,0);
		}
		public ElseClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseClause; }
	}

	public final ElseClauseContext elseClause() throws RecognitionException {
		ElseClauseContext _localctx = new ElseClauseContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_elseClause);
		try {
			setState(997);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,123,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(993);
				match(ELSE);
				setState(994);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(995);
				match(ELSE);
				setState(996);
				stmt();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForStmt_Context extends ParserRuleContext {
		public Let_bindingContext binding;
		public ExprContext iter;
		public BlockContext body;
		public TerminalNode FOR() { return getToken(CWScriptParser.FOR, 0); }
		public TerminalNode IN() { return getToken(CWScriptParser.IN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public Let_bindingContext let_binding() {
			return getRuleContext(Let_bindingContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ForStmt_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStmt_; }
	}

	public final ForStmt_Context forStmt_() throws RecognitionException {
		ForStmt_Context _localctx = new ForStmt_Context(_ctx, getState());
		enterRule(_localctx, 112, RULE_forStmt_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(999);
			match(FOR);
			{
			setState(1000);
			((ForStmt_Context)_localctx).binding = let_binding();
			}
			setState(1001);
			match(IN);
			{
			setState(1002);
			((ForStmt_Context)_localctx).iter = expr(0);
			}
			setState(1003);
			((ForStmt_Context)_localctx).body = block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentContext extends ParserRuleContext {
		public TerminalNode Ident() { return getToken(CWScriptParser.Ident, 0); }
		public ReservedKeywordContext reservedKeyword() {
			return getRuleContext(ReservedKeywordContext.class,0);
		}
		public IdentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ident; }
	}

	public final IdentContext ident() throws RecognitionException {
		IdentContext _localctx = new IdentContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_ident);
		try {
			setState(1007);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Ident:
				enterOuterAlt(_localctx, 1);
				{
				setState(1005);
				match(Ident);
				}
				break;
			case CONTRACT:
			case INTERFACE:
			case IMPORT:
			case IMPLEMENTS:
			case EXTENDS:
			case ERROR:
			case EVENT:
			case INSTANTIATE:
			case EXEC:
			case QUERY:
			case REPLY:
			case FOR:
			case IN:
			case FROM:
			case STATE:
			case IF:
			case ELSE:
			case AND:
			case OR:
			case TRUE:
			case FALSE:
			case FN:
			case LET:
			case RETURN:
			case STRUCT:
			case ENUM:
			case TYPE:
			case EMIT:
				enterOuterAlt(_localctx, 2);
				{
				setState(1006);
				reservedKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReservedKeywordContext extends ParserRuleContext {
		public TerminalNode CONTRACT() { return getToken(CWScriptParser.CONTRACT, 0); }
		public TerminalNode INTERFACE() { return getToken(CWScriptParser.INTERFACE, 0); }
		public TerminalNode IMPORT() { return getToken(CWScriptParser.IMPORT, 0); }
		public TerminalNode IMPLEMENTS() { return getToken(CWScriptParser.IMPLEMENTS, 0); }
		public TerminalNode EXTENDS() { return getToken(CWScriptParser.EXTENDS, 0); }
		public TerminalNode ERROR() { return getToken(CWScriptParser.ERROR, 0); }
		public TerminalNode EVENT() { return getToken(CWScriptParser.EVENT, 0); }
		public TerminalNode INSTANTIATE() { return getToken(CWScriptParser.INSTANTIATE, 0); }
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public TerminalNode REPLY() { return getToken(CWScriptParser.REPLY, 0); }
		public TerminalNode FOR() { return getToken(CWScriptParser.FOR, 0); }
		public TerminalNode IN() { return getToken(CWScriptParser.IN, 0); }
		public TerminalNode FROM() { return getToken(CWScriptParser.FROM, 0); }
		public TerminalNode STATE() { return getToken(CWScriptParser.STATE, 0); }
		public TerminalNode IF() { return getToken(CWScriptParser.IF, 0); }
		public TerminalNode FN() { return getToken(CWScriptParser.FN, 0); }
		public TerminalNode ELSE() { return getToken(CWScriptParser.ELSE, 0); }
		public TerminalNode AND() { return getToken(CWScriptParser.AND, 0); }
		public TerminalNode OR() { return getToken(CWScriptParser.OR, 0); }
		public TerminalNode TRUE() { return getToken(CWScriptParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(CWScriptParser.FALSE, 0); }
		public TerminalNode LET() { return getToken(CWScriptParser.LET, 0); }
		public TerminalNode RETURN() { return getToken(CWScriptParser.RETURN, 0); }
		public TerminalNode STRUCT() { return getToken(CWScriptParser.STRUCT, 0); }
		public TerminalNode ENUM() { return getToken(CWScriptParser.ENUM, 0); }
		public TerminalNode TYPE() { return getToken(CWScriptParser.TYPE, 0); }
		public TerminalNode EMIT() { return getToken(CWScriptParser.EMIT, 0); }
		public ReservedKeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reservedKeyword; }
	}

	public final ReservedKeywordContext reservedKeyword() throws RecognitionException {
		ReservedKeywordContext _localctx = new ReservedKeywordContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_reservedKeyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1009);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << REPLY) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 30:
			return typeExpr_sempred((TypeExprContext)_localctx, predIndex);
		case 45:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean typeExpr_sempred(TypeExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 4);
		case 1:
			return precpred(_ctx, 3);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return precpred(_ctx, 29);
		case 3:
			return precpred(_ctx, 28);
		case 4:
			return precpred(_ctx, 27);
		case 5:
			return precpred(_ctx, 26);
		case 6:
			return precpred(_ctx, 24);
		case 7:
			return precpred(_ctx, 22);
		case 8:
			return precpred(_ctx, 21);
		case 9:
			return precpred(_ctx, 20);
		case 10:
			return precpred(_ctx, 19);
		case 11:
			return precpred(_ctx, 18);
		case 12:
			return precpred(_ctx, 17);
		case 13:
			return precpred(_ctx, 16);
		case 14:
			return precpred(_ctx, 15);
		case 15:
			return precpred(_ctx, 12);
		case 16:
			return precpred(_ctx, 11);
		case 17:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3]\u03f6\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\3\2\7"+
		"\2z\n\2\f\2\16\2}\13\2\3\2\3\2\3\3\3\3\3\3\3\3\5\3\u0085\n\3\3\4\3\4\3"+
		"\4\3\4\5\4\u008b\n\4\3\4\3\4\5\4\u008f\n\4\3\4\3\4\3\5\3\5\3\5\3\5\5\5"+
		"\u0097\n\5\3\5\3\5\3\6\3\6\7\6\u009d\n\6\f\6\16\6\u00a0\13\6\3\6\3\6\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\7\7\u00ad\n\7\f\7\16\7\u00b0\13\7\3"+
		"\7\3\7\3\7\3\7\3\7\5\7\u00b7\n\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u00c9\n\b\3\t\3\t\5\t\u00cd\n\t\3\t\3\t"+
		"\3\t\3\t\5\t\u00d3\n\t\3\n\3\n\3\n\7\n\u00d8\n\n\f\n\16\n\u00db\13\n\3"+
		"\13\5\13\u00de\n\13\3\13\3\13\3\f\3\f\3\f\3\f\7\f\u00e6\n\f\f\f\16\f\u00e9"+
		"\13\f\5\f\u00eb\n\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\7\f\u00f4\n\f\f\f\16\f"+
		"\u00f7\13\f\5\f\u00f9\n\f\3\f\3\f\5\f\u00fd\n\f\3\r\3\r\3\r\3\16\3\16"+
		"\3\16\3\17\3\17\3\17\3\17\3\17\7\17\u010a\n\17\f\17\16\17\u010d\13\17"+
		"\3\17\5\17\u0110\n\17\5\17\u0112\n\17\3\17\3\17\3\20\3\20\3\20\3\21\3"+
		"\21\3\21\3\21\3\21\7\21\u011e\n\21\f\21\16\21\u0121\13\21\3\21\5\21\u0124"+
		"\n\21\5\21\u0126\n\21\3\21\3\21\3\22\3\22\3\22\7\22\u012d\n\22\f\22\16"+
		"\22\u0130\13\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\5\23\u0139\n\23\3\23"+
		"\3\23\3\23\3\23\3\23\7\23\u0140\n\23\f\23\16\23\u0143\13\23\3\23\3\23"+
		"\3\23\3\23\3\23\5\23\u014a\n\23\5\23\u014c\n\23\3\24\5\24\u014f\n\24\3"+
		"\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\27\3\27\5"+
		"\27\u015f\n\27\3\27\3\27\3\27\3\27\3\27\3\30\3\30\5\30\u0168\n\30\3\30"+
		"\3\30\3\30\3\30\3\31\3\31\5\31\u0170\n\31\3\31\3\31\3\31\3\31\3\31\5\31"+
		"\u0177\n\31\3\31\3\31\3\32\3\32\5\32\u017d\n\32\3\32\3\32\3\32\3\32\3"+
		"\32\5\32\u0184\n\32\3\33\3\33\3\33\5\33\u0189\n\33\3\33\3\33\3\33\3\33"+
		"\3\34\3\34\3\34\3\34\3\34\3\34\5\34\u0195\n\34\7\34\u0197\n\34\f\34\16"+
		"\34\u019a\13\34\3\34\3\34\3\35\3\35\5\35\u01a0\n\35\3\36\3\36\3\36\3\36"+
		"\5\36\u01a6\n\36\3\36\3\36\3\36\3\36\3\36\3\36\5\36\u01ae\n\36\3\36\3"+
		"\36\5\36\u01b2\n\36\3\37\3\37\3\37\3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3"+
		" \3 \3 \3 \3 \7 \u01c7\n \f \16 \u01ca\13 \5 \u01cc\n \3 \3 \5 \u01d0"+
		"\n \3 \3 \3 \3 \3 \5 \u01d7\n \3 \7 \u01da\n \f \16 \u01dd\13 \3!\3!\3"+
		"!\7!\u01e2\n!\f!\16!\u01e5\13!\3\"\3\"\3\"\3\"\3\"\5\"\u01ec\n\"\3\"\3"+
		"\"\3\"\3\"\3#\3#\3#\5#\u01f5\n#\3$\3$\5$\u01f9\n$\3$\3$\3$\3$\7$\u01ff"+
		"\n$\f$\16$\u0202\13$\5$\u0204\n$\3$\3$\3$\5$\u0209\n$\3$\3$\3$\3$\7$\u020f"+
		"\n$\f$\16$\u0212\13$\3$\5$\u0215\n$\3$\3$\5$\u0219\n$\3%\3%\3%\3%\3%\3"+
		"&\3&\3&\5&\u0223\n&\3&\3&\3&\5&\u0228\n&\3&\3&\3\'\3\'\3\'\3\'\5\'\u0230"+
		"\n\'\3\'\5\'\u0233\n\'\3(\3(\3(\3(\7(\u0239\n(\f(\16(\u023c\13(\3(\5("+
		"\u023f\n(\5(\u0241\n(\3(\3(\3)\7)\u0246\n)\f)\16)\u0249\13)\3)\3)\7)\u024d"+
		"\n)\f)\16)\u0250\13)\3)\3)\7)\u0254\n)\f)\16)\u0257\13)\3)\3)\7)\u025b"+
		"\n)\f)\16)\u025e\13)\3)\3)\7)\u0262\n)\f)\16)\u0265\13)\3)\3)\7)\u0269"+
		"\n)\f)\16)\u026c\13)\3)\3)\3)\3)\3)\3)\7)\u0274\n)\f)\16)\u0277\13)\3"+
		")\5)\u027a\n)\5)\u027c\n)\3)\5)\u027f\n)\3)\7)\u0282\n)\f)\16)\u0285\13"+
		")\3)\3)\3)\3)\7)\u028b\n)\f)\16)\u028e\13)\3)\3)\5)\u0292\n)\3)\3)\7)"+
		"\u0296\n)\f)\16)\u0299\13)\3)\3)\3)\7)\u029e\n)\f)\16)\u02a1\13)\3)\3"+
		")\3)\7)\u02a6\n)\f)\16)\u02a9\13)\3)\3)\3)\7)\u02ae\n)\f)\16)\u02b1\13"+
		")\3)\5)\u02b4\n)\3*\3*\3*\3*\5*\u02ba\n*\3+\3+\3+\3+\3+\3,\3,\3,\5,\u02c4"+
		"\n,\3,\3,\3,\3,\7,\u02ca\n,\f,\16,\u02cd\13,\3,\3,\3,\3,\3,\3,\7,\u02d5"+
		"\n,\f,\16,\u02d8\13,\3,\3,\5,\u02dc\n,\3-\3-\3-\3-\3.\3.\3.\3.\3.\3.\3"+
		".\3.\3.\3.\7.\u02ec\n.\f.\16.\u02ef\13.\3.\3.\5.\u02f3\n.\3/\3/\3/\3/"+
		"\3/\3/\3/\3/\3/\3/\3/\5/\u0300\n/\3/\3/\3/\3/\7/\u0306\n/\f/\16/\u0309"+
		"\13/\5/\u030b\n/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\7/\u031c"+
		"\n/\f/\16/\u031f\13/\5/\u0321\n/\3/\3/\5/\u0325\n/\3/\3/\3/\3/\7/\u032b"+
		"\n/\f/\16/\u032e\13/\3/\5/\u0331\n/\5/\u0333\n/\3/\3/\3/\3/\5/\u0339\n"+
		"/\3/\3/\5/\u033d\n/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\7/\u0349\n/\f/\16/\u034c"+
		"\13/\3/\3/\3/\3/\3/\3/\3/\5/\u0355\n/\3/\3/\3/\3/\7/\u035b\n/\f/\16/\u035e"+
		"\13/\5/\u0360\n/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3"+
		"/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\7/\u0382\n/\f/\16/\u0385\13"+
		"/\3\60\3\60\3\60\3\60\7\60\u038b\n\60\f\60\16\60\u038e\13\60\5\60\u0390"+
		"\n\60\3\60\3\60\3\60\3\60\3\60\7\60\u0397\n\60\f\60\16\60\u039a\13\60"+
		"\5\60\u039c\n\60\3\60\5\60\u039f\n\60\3\61\3\61\3\61\5\61\u03a4\n\61\3"+
		"\61\3\61\5\61\u03a8\n\61\3\62\3\62\7\62\u03ac\n\62\f\62\16\62\u03af\13"+
		"\62\3\62\3\62\3\63\3\63\3\63\7\63\u03b6\n\63\f\63\16\63\u03b9\13\63\3"+
		"\63\5\63\u03bc\n\63\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64"+
		"\3\64\5\64\u03c9\n\64\3\65\3\65\3\65\5\65\u03ce\n\65\3\65\3\65\3\66\3"+
		"\66\3\66\5\66\u03d5\n\66\3\67\3\67\3\67\3\67\3\67\5\67\u03dc\n\67\38\3"+
		"8\38\38\58\u03e2\n8\39\39\39\39\59\u03e8\n9\3:\3:\3:\3:\3:\3:\3;\3;\5"+
		";\u03f2\n;\3<\3<\3<\2\4>\\=\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \""+
		"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtv\2\t\b\2BBFFHHJJLL"+
		"NN\3\2\66\67\5\2IIKKMM\4\2EEGG\3\2OR\3\2CD\7\2\3\t\16\26\32\32\36#&*\2"+
		"\u0477\2{\3\2\2\2\4\u0084\3\2\2\2\6\u0086\3\2\2\2\b\u0092\3\2\2\2\n\u009a"+
		"\3\2\2\2\f\u00b6\3\2\2\2\16\u00c8\3\2\2\2\20\u00ca\3\2\2\2\22\u00d4\3"+
		"\2\2\2\24\u00dd\3\2\2\2\26\u00fc\3\2\2\2\30\u00fe\3\2\2\2\32\u0101\3\2"+
		"\2\2\34\u0104\3\2\2\2\36\u0115\3\2\2\2 \u0118\3\2\2\2\"\u0129\3\2\2\2"+
		"$\u014b\3\2\2\2&\u014e\3\2\2\2(\u0153\3\2\2\2*\u0158\3\2\2\2,\u015c\3"+
		"\2\2\2.\u0165\3\2\2\2\60\u016d\3\2\2\2\62\u017a\3\2\2\2\64\u0185\3\2\2"+
		"\2\66\u018e\3\2\2\28\u019f\3\2\2\2:\u01b1\3\2\2\2<\u01b3\3\2\2\2>\u01cf"+
		"\3\2\2\2@\u01de\3\2\2\2B\u01e6\3\2\2\2D\u01f4\3\2\2\2F\u0218\3\2\2\2H"+
		"\u021a\3\2\2\2J\u021f\3\2\2\2L\u022b\3\2\2\2N\u0234\3\2\2\2P\u02b3\3\2"+
		"\2\2R\u02b5\3\2\2\2T\u02bb\3\2\2\2V\u02db\3\2\2\2X\u02dd\3\2\2\2Z\u02f2"+
		"\3\2\2\2\\\u0338\3\2\2\2^\u039e\3\2\2\2`\u03a0\3\2\2\2b\u03a9\3\2\2\2"+
		"d\u03b2\3\2\2\2f\u03c8\3\2\2\2h\u03cd\3\2\2\2j\u03d1\3\2\2\2l\u03db\3"+
		"\2\2\2n\u03dd\3\2\2\2p\u03e7\3\2\2\2r\u03e9\3\2\2\2t\u03f1\3\2\2\2v\u03f3"+
		"\3\2\2\2xz\5\4\3\2yx\3\2\2\2z}\3\2\2\2{y\3\2\2\2{|\3\2\2\2|~\3\2\2\2}"+
		"{\3\2\2\2~\177\7\2\2\3\177\3\3\2\2\2\u0080\u0085\5\f\7\2\u0081\u0085\5"+
		"\6\4\2\u0082\u0085\5\b\5\2\u0083\u0085\5T+\2\u0084\u0080\3\2\2\2\u0084"+
		"\u0081\3\2\2\2\u0084\u0082\3\2\2\2\u0084\u0083\3\2\2\2\u0085\5\3\2\2\2"+
		"\u0086\u0087\7\3\2\2\u0087\u008a\5t;\2\u0088\u0089\7\7\2\2\u0089\u008b"+
		"\5@!\2\u008a\u0088\3\2\2\2\u008a\u008b\3\2\2\2\u008b\u008e\3\2\2\2\u008c"+
		"\u008d\7\6\2\2\u008d\u008f\5@!\2\u008e\u008c\3\2\2\2\u008e\u008f\3\2\2"+
		"\2\u008f\u0090\3\2\2\2\u0090\u0091\5\n\6\2\u0091\7\3\2\2\2\u0092\u0093"+
		"\7\4\2\2\u0093\u0096\5t;\2\u0094\u0095\7\7\2\2\u0095\u0097\5@!\2\u0096"+
		"\u0094\3\2\2\2\u0096\u0097\3\2\2\2\u0097\u0098\3\2\2\2\u0098\u0099\5\n"+
		"\6\2\u0099\t\3\2\2\2\u009a\u009e\7\61\2\2\u009b\u009d\5\16\b\2\u009c\u009b"+
		"\3\2\2\2\u009d\u00a0\3\2\2\2\u009e\u009c\3\2\2\2\u009e\u009f\3\2\2\2\u009f"+
		"\u00a1\3\2\2\2\u00a0\u009e\3\2\2\2\u00a1\u00a2\7\62\2\2\u00a2\13\3\2\2"+
		"\2\u00a3\u00a4\7\5\2\2\u00a4\u00a5\7I\2\2\u00a5\u00a6\7\24\2\2\u00a6\u00b7"+
		"\7U\2\2\u00a7\u00a8\7\5\2\2\u00a8\u00a9\7\61\2\2\u00a9\u00ae\5t;\2\u00aa"+
		"\u00ab\7\64\2\2\u00ab\u00ad\5t;\2\u00ac\u00aa\3\2\2\2\u00ad\u00b0\3\2"+
		"\2\2\u00ae\u00ac\3\2\2\2\u00ae\u00af\3\2\2\2\u00af\u00b1\3\2\2\2\u00b0"+
		"\u00ae\3\2\2\2\u00b1\u00b2\7\62\2\2\u00b2\u00b3\3\2\2\2\u00b3\u00b4\7"+
		"\24\2\2\u00b4\u00b5\7U\2\2\u00b5\u00b7\3\2\2\2\u00b6\u00a3\3\2\2\2\u00b6"+
		"\u00a7\3\2\2\2\u00b7\r\3\2\2\2\u00b8\u00c9\5D#\2\u00b9\u00c9\5T+\2\u00ba"+
		"\u00c9\5J&\2\u00bb\u00c9\5\32\16\2\u00bc\u00c9\5\34\17\2\u00bd\u00c9\5"+
		"\36\20\2\u00be\u00c9\5 \21\2\u00bf\u00c9\5\"\22\2\u00c0\u00c9\5(\25\2"+
		"\u00c1\u00c9\5*\26\2\u00c2\u00c9\5,\27\2\u00c3\u00c9\5.\30\2\u00c4\u00c9"+
		"\5\60\31\2\u00c5\u00c9\5\60\31\2\u00c6\u00c9\5\62\32\2\u00c7\u00c9\5\64"+
		"\33\2\u00c8\u00b8\3\2\2\2\u00c8\u00b9\3\2\2\2\u00c8\u00ba\3\2\2\2\u00c8"+
		"\u00bb\3\2\2\2\u00c8\u00bc\3\2\2\2\u00c8\u00bd\3\2\2\2\u00c8\u00be\3\2"+
		"\2\2\u00c8\u00bf\3\2\2\2\u00c8\u00c0\3\2\2\2\u00c8\u00c1\3\2\2\2\u00c8"+
		"\u00c2\3\2\2\2\u00c8\u00c3\3\2\2\2\u00c8\u00c4\3\2\2\2\u00c8\u00c5\3\2"+
		"\2\2\u00c8\u00c6\3\2\2\2\u00c8\u00c7\3\2\2\2\u00c9\17\3\2\2\2\u00ca\u00cc"+
		"\5t;\2\u00cb\u00cd\7\66\2\2\u00cc\u00cb\3\2\2\2\u00cc\u00cd\3\2\2\2\u00cd"+
		"\u00ce\3\2\2\2\u00ce\u00cf\78\2\2\u00cf\u00d2\5> \2\u00d0\u00d1\7B\2\2"+
		"\u00d1\u00d3\5\\/\2\u00d2\u00d0\3\2\2\2\u00d2\u00d3\3\2\2\2\u00d3\21\3"+
		"\2\2\2\u00d4\u00d9\5\20\t\2\u00d5\u00d6\7\64\2\2\u00d6\u00d8\5\20\t\2"+
		"\u00d7\u00d5\3\2\2\2\u00d8\u00db\3\2\2\2\u00d9\u00d7\3\2\2\2\u00d9\u00da"+
		"\3\2\2\2\u00da\23\3\2\2\2\u00db\u00d9\3\2\2\2\u00dc\u00de\7\35\2\2\u00dd"+
		"\u00dc\3\2\2\2\u00dd\u00de\3\2\2\2\u00de\u00df\3\2\2\2\u00df\u00e0\5t"+
		";\2\u00e0\25\3\2\2\2\u00e1\u00ea\7-\2\2\u00e2\u00e7\5\20\t\2\u00e3\u00e4"+
		"\7\64\2\2\u00e4\u00e6\5\20\t\2\u00e5\u00e3\3\2\2\2\u00e6\u00e9\3\2\2\2"+
		"\u00e7\u00e5\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8\u00eb\3\2\2\2\u00e9\u00e7"+
		"\3\2\2\2\u00ea\u00e2\3\2\2\2\u00ea\u00eb\3\2\2\2\u00eb\u00ec\3\2\2\2\u00ec"+
		"\u00fd\7.\2\2\u00ed\u00ee\7-\2\2\u00ee\u00f8\5\24\13\2\u00ef\u00f0\7\64"+
		"\2\2\u00f0\u00f5\5\20\t\2\u00f1\u00f2\7\64\2\2\u00f2\u00f4\5\20\t\2\u00f3"+
		"\u00f1\3\2\2\2\u00f4\u00f7\3\2\2\2\u00f5\u00f3\3\2\2\2\u00f5\u00f6\3\2"+
		"\2\2\u00f6\u00f9\3\2\2\2\u00f7\u00f5\3\2\2\2\u00f8\u00ef\3\2\2\2\u00f8"+
		"\u00f9\3\2\2\2\u00f9\u00fa\3\2\2\2\u00fa\u00fb\7.\2\2\u00fb\u00fd\3\2"+
		"\2\2\u00fc\u00e1\3\2\2\2\u00fc\u00ed\3\2\2\2\u00fd\27\3\2\2\2\u00fe\u00ff"+
		"\5t;\2\u00ff\u0100\5\26\f\2\u0100\31\3\2\2\2\u0101\u0102\7\b\2\2\u0102"+
		"\u0103\5\30\r\2\u0103\33\3\2\2\2\u0104\u0105\7\b\2\2\u0105\u0111\7\61"+
		"\2\2\u0106\u010b\5\30\r\2\u0107\u0108\7\64\2\2\u0108\u010a\5\30\r\2\u0109"+
		"\u0107\3\2\2\2\u010a\u010d\3\2\2\2\u010b\u0109\3\2\2\2\u010b\u010c\3\2"+
		"\2\2\u010c\u010f\3\2\2\2\u010d\u010b\3\2\2\2\u010e\u0110\7\64\2\2\u010f"+
		"\u010e\3\2\2\2\u010f\u0110\3\2\2\2\u0110\u0112\3\2\2\2\u0111\u0106\3\2"+
		"\2\2\u0111\u0112\3\2\2\2\u0112\u0113\3\2\2\2\u0113\u0114\7\62\2\2\u0114"+
		"\35\3\2\2\2\u0115\u0116\7\t\2\2\u0116\u0117\5\30\r\2\u0117\37\3\2\2\2"+
		"\u0118\u0119\7\t\2\2\u0119\u0125\7\61\2\2\u011a\u011f\5\30\r\2\u011b\u011c"+
		"\7\64\2\2\u011c\u011e\5\30\r\2\u011d\u011b\3\2\2\2\u011e\u0121\3\2\2\2"+
		"\u011f\u011d\3\2\2\2\u011f\u0120\3\2\2\2\u0120\u0123\3\2\2\2\u0121\u011f"+
		"\3\2\2\2\u0122\u0124\7\64\2\2\u0123\u0122\3\2\2\2\u0123\u0124\3\2\2\2"+
		"\u0124\u0126\3\2\2\2\u0125\u011a\3\2\2\2\u0125\u0126\3\2\2\2\u0126\u0127"+
		"\3\2\2\2\u0127\u0128\7\62\2\2\u0128!\3\2\2\2\u0129\u012a\7\25\2\2\u012a"+
		"\u012e\7\61\2\2\u012b\u012d\5$\23\2\u012c\u012b\3\2\2\2\u012d\u0130\3"+
		"\2\2\2\u012e\u012c\3\2\2\2\u012e\u012f\3\2\2\2\u012f\u0131\3\2\2\2\u0130"+
		"\u012e\3\2\2\2\u0131\u0132\7\62\2\2\u0132#\3\2\2\2\u0133\u0134\5t;\2\u0134"+
		"\u0135\78\2\2\u0135\u0138\5> \2\u0136\u0137\7B\2\2\u0137\u0139\5\\/\2"+
		"\u0138\u0136\3\2\2\2\u0138\u0139\3\2\2\2\u0139\u014c\3\2\2\2\u013a\u013b"+
		"\5t;\2\u013b\u013c\7/\2\2\u013c\u0141\5&\24\2\u013d\u013e\7\64\2\2\u013e"+
		"\u0140\5&\24\2\u013f\u013d\3\2\2\2\u0140\u0143\3\2\2\2\u0141\u013f\3\2"+
		"\2\2\u0141\u0142\3\2\2\2\u0142\u0144\3\2\2\2\u0143\u0141\3\2\2\2\u0144"+
		"\u0145\7\60\2\2\u0145\u0146\78\2\2\u0146\u0149\5> \2\u0147\u0148\7B\2"+
		"\2\u0148\u014a\5\\/\2\u0149\u0147\3\2\2\2\u0149\u014a\3\2\2\2\u014a\u014c"+
		"\3\2\2\2\u014b\u0133\3\2\2\2\u014b\u013a\3\2\2\2\u014c%\3\2\2\2\u014d"+
		"\u014f\5t;\2\u014e\u014d\3\2\2\2\u014e\u014f\3\2\2\2\u014f\u0150\3\2\2"+
		"\2\u0150\u0151\78\2\2\u0151\u0152\5> \2\u0152\'\3\2\2\2\u0153\u0154\7"+
		":\2\2\u0154\u0155\7\16\2\2\u0155\u0156\5\26\f\2\u0156\u0157\5b\62\2\u0157"+
		")\3\2\2\2\u0158\u0159\7:\2\2\u0159\u015a\7\16\2\2\u015a\u015b\5\26\f\2"+
		"\u015b+\3\2\2\2\u015c\u015e\7\17\2\2\u015d\u015f\7I\2\2\u015e\u015d\3"+
		"\2\2\2\u015e\u015f\3\2\2\2\u015f\u0160\3\2\2\2\u0160\u0161\7:\2\2\u0161"+
		"\u0162\5t;\2\u0162\u0163\5\26\f\2\u0163\u0164\5b\62\2\u0164-\3\2\2\2\u0165"+
		"\u0167\7\17\2\2\u0166\u0168\7I\2\2\u0167\u0166\3\2\2\2\u0167\u0168\3\2"+
		"\2\2\u0168\u0169\3\2\2\2\u0169\u016a\7:\2\2\u016a\u016b\5t;\2\u016b\u016c"+
		"\5\26\f\2\u016c/\3\2\2\2\u016d\u016f\7\20\2\2\u016e\u0170\7I\2\2\u016f"+
		"\u016e\3\2\2\2\u016f\u0170\3\2\2\2\u0170\u0171\3\2\2\2\u0171\u0172\7:"+
		"\2\2\u0172\u0173\5t;\2\u0173\u0176\5\26\f\2\u0174\u0175\7=\2\2\u0175\u0177"+
		"\5> \2\u0176\u0174\3\2\2\2\u0176\u0177\3\2\2\2\u0177\u0178\3\2\2\2\u0178"+
		"\u0179\5b\62\2\u0179\61\3\2\2\2\u017a\u017c\7\20\2\2\u017b\u017d\7I\2"+
		"\2\u017c\u017b\3\2\2\2\u017c\u017d\3\2\2\2\u017d\u017e\3\2\2\2\u017e\u017f"+
		"\7:\2\2\u017f\u0180\5t;\2\u0180\u0183\5\26\f\2\u0181\u0182\7=\2\2\u0182"+
		"\u0184\5> \2\u0183\u0181\3\2\2\2\u0183\u0184\3\2\2\2\u0184\63\3\2\2\2"+
		"\u0185\u0188\7\21\2\2\u0186\u0187\7\63\2\2\u0187\u0189\5t;\2\u0188\u0186"+
		"\3\2\2\2\u0188\u0189\3\2\2\2\u0189\u018a\3\2\2\2\u018a\u018b\5t;\2\u018b"+
		"\u018c\5\26\f\2\u018c\u018d\5b\62\2\u018d\65\3\2\2\2\u018e\u018f\7(\2"+
		"\2\u018f\u0190\5t;\2\u0190\u0191\7\61\2\2\u0191\u0198\58\35\2\u0192\u0194"+
		"\58\35\2\u0193\u0195\7\64\2\2\u0194\u0193\3\2\2\2\u0194\u0195\3\2\2\2"+
		"\u0195\u0197\3\2\2\2\u0196\u0192\3\2\2\2\u0197\u019a\3\2\2\2\u0198\u0196"+
		"\3\2\2\2\u0198\u0199\3\2\2\2\u0199\u019b\3\2\2\2\u019a\u0198\3\2\2\2\u019b"+
		"\u019c\7\62\2\2\u019c\67\3\2\2\2\u019d\u01a0\5:\36\2\u019e\u01a0\5<\37"+
		"\2\u019f\u019d\3\2\2\2\u019f\u019e\3\2\2\2\u01a09\3\2\2\2\u01a1\u01a2"+
		"\7:\2\2\u01a2\u01a3\5t;\2\u01a3\u01a5\7-\2\2\u01a4\u01a6\5\22\n\2\u01a5"+
		"\u01a4\3\2\2\2\u01a5\u01a6\3\2\2\2\u01a6\u01a7\3\2\2\2\u01a7\u01a8\7."+
		"\2\2\u01a8\u01b2\3\2\2\2\u01a9\u01aa\7:\2\2\u01aa\u01ab\5t;\2\u01ab\u01ad"+
		"\7\61\2\2\u01ac\u01ae\5\22\n\2\u01ad\u01ac\3\2\2\2\u01ad\u01ae\3\2\2\2"+
		"\u01ae\u01af\3\2\2\2\u01af\u01b0\7\62\2\2\u01b0\u01b2\3\2\2\2\u01b1\u01a1"+
		"\3\2\2\2\u01b1\u01a9\3\2\2\2\u01b2;\3\2\2\2\u01b3\u01b4\7:\2\2\u01b4\u01b5"+
		"\5t;\2\u01b5=\3\2\2\2\u01b6\u01b7\b \1\2\u01b7\u01d0\5@!\2\u01b8\u01d0"+
		"\5B\"\2\u01b9\u01ba\7\16\2\2\u01ba\u01bb\7:\2\2\u01bb\u01d0\5@!\2\u01bc"+
		"\u01bd\7\17\2\2\u01bd\u01d0\5B\"\2\u01be\u01bf\7\20\2\2\u01bf\u01d0\5"+
		"B\"\2\u01c0\u01c1\7\35\2\2\u01c1\u01d0\5> \7\u01c2\u01cb\7/\2\2\u01c3"+
		"\u01c8\5> \2\u01c4\u01c5\7\64\2\2\u01c5\u01c7\5> \2\u01c6\u01c4\3\2\2"+
		"\2\u01c7\u01ca\3\2\2\2\u01c8\u01c6\3\2\2\2\u01c8\u01c9\3\2\2\2\u01c9\u01cc"+
		"\3\2\2\2\u01ca\u01c8\3\2\2\2\u01cb\u01c3\3\2\2\2\u01cb\u01cc\3\2\2\2\u01cc"+
		"\u01cd\3\2\2\2\u01cd\u01d0\7\60\2\2\u01ce\u01d0\5D#\2\u01cf\u01b6\3\2"+
		"\2\2\u01cf\u01b8\3\2\2\2\u01cf\u01b9\3\2\2\2\u01cf\u01bc\3\2\2\2\u01cf"+
		"\u01be\3\2\2\2\u01cf\u01c0\3\2\2\2\u01cf\u01c2\3\2\2\2\u01cf\u01ce\3\2"+
		"\2\2\u01d0\u01db\3\2\2\2\u01d1\u01d2\f\6\2\2\u01d2\u01da\7\66\2\2\u01d3"+
		"\u01d4\f\5\2\2\u01d4\u01d6\7/\2\2\u01d5\u01d7\7V\2\2\u01d6\u01d5\3\2\2"+
		"\2\u01d6\u01d7\3\2\2\2\u01d7\u01d8\3\2\2\2\u01d8\u01da\7\60\2\2\u01d9"+
		"\u01d1\3\2\2\2\u01d9\u01d3\3\2\2\2\u01da\u01dd\3\2\2\2\u01db\u01d9\3\2"+
		"\2\2\u01db\u01dc\3\2\2\2\u01dc?\3\2\2\2\u01dd\u01db\3\2\2\2\u01de\u01e3"+
		"\5t;\2\u01df\u01e0\7\63\2\2\u01e0\u01e2\5t;\2\u01e1\u01df\3\2\2\2\u01e2"+
		"\u01e5\3\2\2\2\u01e3\u01e1\3\2\2\2\u01e3\u01e4\3\2\2\2\u01e4A\3\2\2\2"+
		"\u01e5\u01e3\3\2\2\2\u01e6\u01eb\5@!\2\u01e7\u01e8\7-\2\2\u01e8\u01e9"+
		"\5\\/\2\u01e9\u01ea\7.\2\2\u01ea\u01ec\3\2\2\2\u01eb\u01e7\3\2\2\2\u01eb"+
		"\u01ec\3\2\2\2\u01ec\u01ed\3\2\2\2\u01ed\u01ee\7\63\2\2\u01ee\u01ef\7"+
		":\2\2\u01ef\u01f0\5t;\2\u01f0C\3\2\2\2\u01f1\u01f5\5F$\2\u01f2\u01f5\5"+
		"\66\34\2\u01f3\u01f5\5H%\2\u01f4\u01f1\3\2\2\2\u01f4\u01f2\3\2\2\2\u01f4"+
		"\u01f3\3\2\2\2\u01f5E\3\2\2\2\u01f6\u01f8\7\'\2\2\u01f7\u01f9\5t;\2\u01f8"+
		"\u01f7\3\2\2\2\u01f8\u01f9\3\2\2\2\u01f9\u01fa\3\2\2\2\u01fa\u0203\7-"+
		"\2\2\u01fb\u0200\5\20\t\2\u01fc\u01fd\7\64\2\2\u01fd\u01ff\5\20\t\2\u01fe"+
		"\u01fc\3\2\2\2\u01ff\u0202\3\2\2\2\u0200\u01fe\3\2\2\2\u0200\u0201\3\2"+
		"\2\2\u0201\u0204\3\2\2\2\u0202\u0200\3\2\2\2\u0203\u01fb\3\2\2\2\u0203"+
		"\u0204\3\2\2\2\u0204\u0205\3\2\2\2\u0205\u0219\7.\2\2\u0206\u0208\7\'"+
		"\2\2\u0207\u0209\5t;\2\u0208\u0207\3\2\2\2\u0208\u0209\3\2\2\2\u0209\u020a"+
		"\3\2\2\2\u020a\u020b\7\61\2\2\u020b\u0210\5\20\t\2\u020c\u020d\7\64\2"+
		"\2\u020d\u020f\5\20\t\2\u020e\u020c\3\2\2\2\u020f\u0212\3\2\2\2\u0210"+
		"\u020e\3\2\2\2\u0210\u0211\3\2\2\2\u0211\u0214\3\2\2\2\u0212\u0210\3\2"+
		"\2\2\u0213\u0215\7\64\2\2\u0214\u0213\3\2\2\2\u0214\u0215\3\2\2\2\u0215"+
		"\u0216\3\2\2\2\u0216\u0217\7\62\2\2\u0217\u0219\3\2\2\2\u0218\u01f6\3"+
		"\2\2\2\u0218\u0206\3\2\2\2\u0219G\3\2\2\2\u021a\u021b\7)\2\2\u021b\u021c"+
		"\5t;\2\u021c\u021d\7B\2\2\u021d\u021e\5> \2\u021eI\3\2\2\2\u021f\u0220"+
		"\7\"\2\2\u0220\u0222\5t;\2\u0221\u0223\7\67\2\2\u0222\u0221\3\2\2\2\u0222"+
		"\u0223\3\2\2\2\u0223\u0224\3\2\2\2\u0224\u0227\5\26\f\2\u0225\u0226\7"+
		"=\2\2\u0226\u0228\5> \2\u0227\u0225\3\2\2\2\u0227\u0228\3\2\2\2\u0228"+
		"\u0229\3\2\2\2\u0229\u022a\5b\62\2\u022aK\3\2\2\2\u022b\u022c\7;\2\2\u022c"+
		"\u0232\5@!\2\u022d\u022f\7-\2\2\u022e\u0230\5h\65\2\u022f\u022e\3\2\2"+
		"\2\u022f\u0230\3\2\2\2\u0230\u0231\3\2\2\2\u0231\u0233\7.\2\2\u0232\u022d"+
		"\3\2\2\2\u0232\u0233\3\2\2\2\u0233M\3\2\2\2\u0234\u0240\7\61\2\2\u0235"+
		"\u023a\5j\66\2\u0236\u0237\7\64\2\2\u0237\u0239\5j\66\2\u0238\u0236\3"+
		"\2\2\2\u0239\u023c\3\2\2\2\u023a\u0238\3\2\2\2\u023a\u023b\3\2\2\2\u023b"+
		"\u023e\3\2\2\2\u023c\u023a\3\2\2\2\u023d\u023f\7\64\2\2\u023e\u023d\3"+
		"\2\2\2\u023e\u023f\3\2\2\2\u023f\u0241\3\2\2\2\u0240\u0235\3\2\2\2\u0240"+
		"\u0241\3\2\2\2\u0241\u0242\3\2\2\2\u0242\u0243\7\62\2\2\u0243O\3\2\2\2"+
		"\u0244\u0246\5L\'\2\u0245\u0244\3\2\2\2\u0246\u0249\3\2\2\2\u0247\u0245"+
		"\3\2\2\2\u0247\u0248\3\2\2\2\u0248\u024a\3\2\2\2\u0249\u0247\3\2\2\2\u024a"+
		"\u02b4\5R*\2\u024b\u024d\5L\'\2\u024c\u024b\3\2\2\2\u024d\u0250\3\2\2"+
		"\2\u024e\u024c\3\2\2\2\u024e\u024f\3\2\2\2\u024f\u0251\3\2\2\2\u0250\u024e"+
		"\3\2\2\2\u0251\u02b4\5T+\2\u0252\u0254\5L\'\2\u0253\u0252\3\2\2\2\u0254"+
		"\u0257\3\2\2\2\u0255\u0253\3\2\2\2\u0255\u0256\3\2\2\2\u0256\u0258\3\2"+
		"\2\2\u0257\u0255\3\2\2\2\u0258\u02b4\5X-\2\u0259\u025b\5L\'\2\u025a\u0259"+
		"\3\2\2\2\u025b\u025e\3\2\2\2\u025c\u025a\3\2\2\2\u025c\u025d\3\2\2\2\u025d"+
		"\u025f\3\2\2\2\u025e\u025c\3\2\2\2\u025f\u02b4\5n8\2\u0260\u0262\5L\'"+
		"\2\u0261\u0260\3\2\2\2\u0262\u0265\3\2\2\2\u0263\u0261\3\2\2\2\u0263\u0264"+
		"\3\2\2\2\u0264\u0266\3\2\2\2\u0265\u0263\3\2\2\2\u0266\u02b4\5r:\2\u0267"+
		"\u0269\5L\'\2\u0268\u0267\3\2\2\2\u0269\u026c\3\2\2\2\u026a\u0268\3\2"+
		"\2\2\u026a\u026b\3\2\2\2\u026b\u026d\3\2\2\2\u026c\u026a\3\2\2\2\u026d"+
		"\u026e\7\13\2\2\u026e\u027e\5\\/\2\u026f\u027b\7\61\2\2\u0270\u0275\5"+
		"j\66\2\u0271\u0272\7\64\2\2\u0272\u0274\5j\66\2\u0273\u0271\3\2\2\2\u0274"+
		"\u0277\3\2\2\2\u0275\u0273\3\2\2\2\u0275\u0276\3\2\2\2\u0276\u0279\3\2"+
		"\2\2\u0277\u0275\3\2\2\2\u0278\u027a\7\64\2\2\u0279\u0278\3\2\2\2\u0279"+
		"\u027a\3\2\2\2\u027a\u027c\3\2\2\2\u027b\u0270\3\2\2\2\u027b\u027c\3\2"+
		"\2\2\u027c\u027d\3\2\2\2\u027d\u027f\7\62\2\2\u027e\u026f\3\2\2\2\u027e"+
		"\u027f\3\2\2\2\u027f\u02b4\3\2\2\2\u0280\u0282\5L\'\2\u0281\u0280\3\2"+
		"\2\2\u0282\u0285\3\2\2\2\u0283\u0281\3\2\2\2\u0283\u0284\3\2\2\2\u0284"+
		"\u0286\3\2\2\2\u0285\u0283\3\2\2\2\u0286\u0287\7\r\2\2\u0287\u0288\7:"+
		"\2\2\u0288\u02b4\5\\/\2\u0289\u028b\5L\'\2\u028a\u0289\3\2\2\2\u028b\u028e"+
		"\3\2\2\2\u028c\u028a\3\2\2\2\u028c\u028d\3\2\2\2\u028d\u028f\3\2\2\2\u028e"+
		"\u028c\3\2\2\2\u028f\u0291\7\n\2\2\u0290\u0292\7:\2\2\u0291\u0290\3\2"+
		"\2\2\u0291\u0292\3\2\2\2\u0292\u0293\3\2\2\2\u0293\u02b4\5\\/\2\u0294"+
		"\u0296\5L\'\2\u0295\u0294\3\2\2\2\u0296\u0299\3\2\2\2\u0297\u0295\3\2"+
		"\2\2\u0297\u0298\3\2\2\2\u0298\u029a\3\2\2\2\u0299\u0297\3\2\2\2\u029a"+
		"\u029b\7*\2\2\u029b\u02b4\5\\/\2\u029c\u029e\5L\'\2\u029d\u029c\3\2\2"+
		"\2\u029e\u02a1\3\2\2\2\u029f\u029d\3\2\2\2\u029f\u02a0\3\2\2\2\u02a0\u02a2"+
		"\3\2\2\2\u02a1\u029f\3\2\2\2\u02a2\u02a3\7&\2\2\u02a3\u02b4\5\\/\2\u02a4"+
		"\u02a6\5L\'\2\u02a5\u02a4\3\2\2\2\u02a6\u02a9\3\2\2\2\u02a7\u02a5\3\2"+
		"\2\2\u02a7\u02a8\3\2\2\2\u02a8\u02aa\3\2\2\2\u02a9\u02a7\3\2\2\2\u02aa"+
		"\u02ab\7%\2\2\u02ab\u02b4\5\\/\2\u02ac\u02ae\5L\'\2\u02ad\u02ac\3\2\2"+
		"\2\u02ae\u02b1\3\2\2\2\u02af\u02ad\3\2\2\2\u02af\u02b0\3\2\2\2\u02b0\u02b2"+
		"\3\2\2\2\u02b1\u02af\3\2\2\2\u02b2\u02b4\5\\/\2\u02b3\u0247\3\2\2\2\u02b3"+
		"\u024e\3\2\2\2\u02b3\u0255\3\2\2\2\u02b3\u025c\3\2\2\2\u02b3\u0263\3\2"+
		"\2\2\u02b3\u026a\3\2\2\2\u02b3\u0283\3\2\2\2\u02b3\u028c\3\2\2\2\u02b3"+
		"\u0297\3\2\2\2\u02b3\u029f\3\2\2\2\u02b3\u02a7\3\2\2\2\u02b3\u02af\3\2"+
		"\2\2\u02b4Q\3\2\2\2\u02b5\u02b6\7#\2\2\u02b6\u02b9\5V,\2\u02b7\u02b8\7"+
		"B\2\2\u02b8\u02ba\5\\/\2\u02b9\u02b7\3\2\2\2\u02b9\u02ba\3\2\2\2\u02ba"+
		"S\3\2\2\2\u02bb\u02bc\7$\2\2\u02bc\u02bd\5t;\2\u02bd\u02be\7B\2\2\u02be"+
		"\u02bf\5\\/\2\u02bfU\3\2\2\2\u02c0\u02c3\5t;\2\u02c1\u02c2\78\2\2\u02c2"+
		"\u02c4\5> \2\u02c3\u02c1\3\2\2\2\u02c3\u02c4\3\2\2\2\u02c4\u02dc\3\2\2"+
		"\2\u02c5\u02c6\7\61\2\2\u02c6\u02cb\5t;\2\u02c7\u02c8\7\64\2\2\u02c8\u02ca"+
		"\5t;\2\u02c9\u02c7\3\2\2\2\u02ca\u02cd\3\2\2\2\u02cb\u02c9\3\2\2\2\u02cb"+
		"\u02cc\3\2\2\2\u02cc\u02ce\3\2\2\2\u02cd\u02cb\3\2\2\2\u02ce\u02cf\7\62"+
		"\2\2\u02cf\u02dc\3\2\2\2\u02d0\u02d1\7/\2\2\u02d1\u02d6\5t;\2\u02d2\u02d3"+
		"\7\64\2\2\u02d3\u02d5\5t;\2\u02d4\u02d2\3\2\2\2\u02d5\u02d8\3\2\2\2\u02d6"+
		"\u02d4\3\2\2\2\u02d6\u02d7\3\2\2\2\u02d7\u02d9\3\2\2\2\u02d8\u02d6\3\2"+
		"\2\2\u02d9\u02da\7\60\2\2\u02da\u02dc\3\2\2\2\u02db\u02c0\3\2\2\2\u02db"+
		"\u02c5\3\2\2\2\u02db\u02d0\3\2\2\2\u02dcW\3\2\2\2\u02dd\u02de\5Z.\2\u02de"+
		"\u02df\t\2\2\2\u02df\u02e0\5\\/\2\u02e0Y\3\2\2\2\u02e1\u02f3\5t;\2\u02e2"+
		"\u02e3\5\\/\2\u02e3\u02e4\7\63\2\2\u02e4\u02e5\5t;\2\u02e5\u02f3\3\2\2"+
		"\2\u02e6\u02e7\5\\/\2\u02e7\u02e8\7/\2\2\u02e8\u02ed\5\\/\2\u02e9\u02ea"+
		"\7\64\2\2\u02ea\u02ec\5\\/\2\u02eb\u02e9\3\2\2\2\u02ec\u02ef\3\2\2\2\u02ed"+
		"\u02eb\3\2\2\2\u02ed\u02ee\3\2\2\2\u02ee\u02f0\3\2\2\2\u02ef\u02ed\3\2"+
		"\2\2\u02f0\u02f1\7\60\2\2\u02f1\u02f3\3\2\2\2\u02f2\u02e1\3\2\2\2\u02f2"+
		"\u02e2\3\2\2\2\u02f2\u02e6\3\2\2\2\u02f3[\3\2\2\2\u02f4\u02f5\b/\1\2\u02f5"+
		"\u02f6\7-\2\2\u02f6\u02f7\5\\/\2\u02f7\u02f8\7.\2\2\u02f8\u0339\3\2\2"+
		"\2\u02f9\u02fa\5> \2\u02fa\u02fb\79\2\2\u02fb\u02fc\5t;\2\u02fc\u0339"+
		"\3\2\2\2\u02fd\u02ff\5> \2\u02fe\u0300\7\67\2\2\u02ff\u02fe\3\2\2\2\u02ff"+
		"\u0300\3\2\2\2\u0300\u0301\3\2\2\2\u0301\u030a\7-\2\2\u0302\u0307\5h\65"+
		"\2\u0303\u0304\7\64\2\2\u0304\u0306\5h\65\2\u0305\u0303\3\2\2\2\u0306"+
		"\u0309\3\2\2\2\u0307\u0305\3\2\2\2\u0307\u0308\3\2\2\2\u0308\u030b\3\2"+
		"\2\2\u0309\u0307\3\2\2\2\u030a\u0302\3\2\2\2\u030a\u030b\3\2\2\2\u030b"+
		"\u030c\3\2\2\2\u030c\u030d\7.\2\2\u030d\u0339\3\2\2\2\u030e\u0339\5d\63"+
		"\2\u030f\u0310\7\33\2\2\u0310\u0339\5\\/\17\u0311\u0339\5n8\2\u0312\u0313"+
		"\7\f\2\2\u0313\u0339\5\\/\13\u0314\u0315\7%\2\2\u0315\u0339\5\\/\n\u0316"+
		"\u0339\5`\61\2\u0317\u0320\7/\2\2\u0318\u031d\5\\/\2\u0319\u031a\7\64"+
		"\2\2\u031a\u031c\5\\/\2\u031b\u0319\3\2\2\2\u031c\u031f\3\2\2\2\u031d"+
		"\u031b\3\2\2\2\u031d\u031e\3\2\2\2\u031e\u0321\3\2\2\2\u031f\u031d\3\2"+
		"\2\2\u0320\u0318\3\2\2\2\u0320\u0321\3\2\2\2\u0321\u0322\3\2\2\2\u0322"+
		"\u0339\7\60\2\2\u0323\u0325\5> \2\u0324\u0323\3\2\2\2\u0324\u0325\3\2"+
		"\2\2\u0325\u0326\3\2\2\2\u0326\u0332\7\61\2\2\u0327\u032c\5j\66\2\u0328"+
		"\u0329\7\64\2\2\u0329\u032b\5j\66\2\u032a\u0328\3\2\2\2\u032b\u032e\3"+
		"\2\2\2\u032c\u032a\3\2\2\2\u032c\u032d\3\2\2\2\u032d\u0330\3\2\2\2\u032e"+
		"\u032c\3\2\2\2\u032f\u0331\7\64\2\2\u0330\u032f\3\2\2\2\u0330\u0331\3"+
		"\2\2\2\u0331\u0333\3\2\2\2\u0332\u0327\3\2\2\2\u0332\u0333\3\2\2\2\u0333"+
		"\u0334\3\2\2\2\u0334\u0339\7\62\2\2\u0335\u0339\5B\"\2\u0336\u0339\5l"+
		"\67\2\u0337\u0339\5t;\2\u0338\u02f4\3\2\2\2\u0338\u02f9\3\2\2\2\u0338"+
		"\u02fd\3\2\2\2\u0338\u030e\3\2\2\2\u0338\u030f\3\2\2\2\u0338\u0311\3\2"+
		"\2\2\u0338\u0312\3\2\2\2\u0338\u0314\3\2\2\2\u0338\u0316\3\2\2\2\u0338"+
		"\u0317\3\2\2\2\u0338\u0324\3\2\2\2\u0338\u0335\3\2\2\2\u0338\u0336\3\2"+
		"\2\2\u0338\u0337\3\2\2\2\u0339\u0383\3\2\2\2\u033a\u033c\f\37\2\2\u033b"+
		"\u033d\t\3\2\2\u033c\u033b\3\2\2\2\u033c\u033d\3\2\2\2\u033d\u033e\3\2"+
		"\2\2\u033e\u033f\7\63\2\2\u033f\u0382\5t;\2\u0340\u0341\f\36\2\2\u0341"+
		"\u0342\7+\2\2\u0342\u0382\5> \2\u0343\u0344\f\35\2\2\u0344\u0345\7/\2"+
		"\2\u0345\u034a\5h\65\2\u0346\u0347\7\64\2\2\u0347\u0349\5h\65\2\u0348"+
		"\u0346\3\2\2\2\u0349\u034c\3\2\2\2\u034a\u0348\3\2\2\2\u034a\u034b\3\2"+
		"\2\2\u034b\u034d\3\2\2\2\u034c\u034a\3\2\2\2\u034d\u034e\7\60\2\2\u034e"+
		"\u0382\3\2\2\2\u034f\u0350\f\34\2\2\u0350\u0351\79\2\2\u0351\u0382\5t"+
		";\2\u0352\u0354\f\32\2\2\u0353\u0355\7\67\2\2\u0354\u0353\3\2\2\2\u0354"+
		"\u0355\3\2\2\2\u0355\u0356\3\2\2\2\u0356\u035f\7-\2\2\u0357\u035c\5h\65"+
		"\2\u0358\u0359\7\64\2\2\u0359\u035b\5h\65\2\u035a\u0358\3\2\2\2\u035b"+
		"\u035e\3\2\2\2\u035c\u035a\3\2\2\2\u035c\u035d\3\2\2\2\u035d\u0360\3\2"+
		"\2\2\u035e\u035c\3\2\2\2\u035f\u0357\3\2\2\2\u035f\u0360\3\2\2\2\u0360"+
		"\u0361\3\2\2\2\u0361\u0382\7.\2\2\u0362\u0363\f\30\2\2\u0363\u0364\t\4"+
		"\2\2\u0364\u0382\5\\/\2\u0365\u0366\f\27\2\2\u0366\u0367\t\5\2\2\u0367"+
		"\u0382\5\\/\2\u0368\u0369\f\26\2\2\u0369\u036a\t\6\2\2\u036a\u0382\5\\"+
		"/\2\u036b\u036c\f\25\2\2\u036c\u036d\t\7\2\2\u036d\u0382\5\\/\2\u036e"+
		"\u036f\f\24\2\2\u036f\u0382\7\66\2\2\u0370\u0371\f\23\2\2\u0371\u0372"+
		"\7\27\2\2\u0372\u0382\5> \2\u0373\u0374\f\22\2\2\u0374\u0375\7\23\2\2"+
		"\u0375\u0382\5\\/\2\u0376\u0377\f\21\2\2\u0377\u0378\7\65\2\2\u0378\u0382"+
		"\5\\/\2\u0379\u037a\f\16\2\2\u037a\u037b\7\36\2\2\u037b\u0382\5\\/\2\u037c"+
		"\u037d\f\r\2\2\u037d\u037e\7\37\2\2\u037e\u0382\5\\/\2\u037f\u0380\f\3"+
		"\2\2\u0380\u0382\7,\2\2\u0381\u033a\3\2\2\2\u0381\u0340\3\2\2\2\u0381"+
		"\u0343\3\2\2\2\u0381\u034f\3\2\2\2\u0381\u0352\3\2\2\2\u0381\u0362\3\2"+
		"\2\2\u0381\u0365\3\2\2\2\u0381\u0368\3\2\2\2\u0381\u036b\3\2\2\2\u0381"+
		"\u036e\3\2\2\2\u0381\u0370\3\2\2\2\u0381\u0373\3\2\2\2\u0381\u0376\3\2"+
		"\2\2\u0381\u0379\3\2\2\2\u0381\u037c\3\2\2\2\u0381\u037f\3\2\2\2\u0382"+
		"\u0385\3\2\2\2\u0383\u0381\3\2\2\2\u0383\u0384\3\2\2\2\u0384]\3\2\2\2"+
		"\u0385\u0383\3\2\2\2\u0386\u038f\7?\2\2\u0387\u038c\5t;\2\u0388\u0389"+
		"\7\64\2\2\u0389\u038b\5t;\2\u038a\u0388\3\2\2\2\u038b\u038e\3\2\2\2\u038c"+
		"\u038a\3\2\2\2\u038c\u038d\3\2\2\2\u038d\u0390\3\2\2\2\u038e\u038c\3\2"+
		"\2\2\u038f\u0387\3\2\2\2\u038f\u0390\3\2\2\2\u0390\u0391\3\2\2\2\u0391"+
		"\u039f\7?\2\2\u0392\u039b\7?\2\2\u0393\u0398\5\20\t\2\u0394\u0395\7\64"+
		"\2\2\u0395\u0397\5\20\t\2\u0396\u0394\3\2\2\2\u0397\u039a\3\2\2\2\u0398"+
		"\u0396\3\2\2\2\u0398\u0399\3\2\2\2\u0399\u039c\3\2\2\2\u039a\u0398\3\2"+
		"\2\2\u039b\u0393\3\2\2\2\u039b\u039c\3\2\2\2\u039c\u039d\3\2\2\2\u039d"+
		"\u039f\7?\2\2\u039e\u0386\3\2\2\2\u039e\u0392\3\2\2\2\u039f_\3\2\2\2\u03a0"+
		"\u03a3\5^\60\2\u03a1\u03a2\7=\2\2\u03a2\u03a4\5> \2\u03a3\u03a1\3\2\2"+
		"\2\u03a3\u03a4\3\2\2\2\u03a4\u03a7\3\2\2\2\u03a5\u03a8\5b\62\2\u03a6\u03a8"+
		"\5P)\2\u03a7\u03a5\3\2\2\2\u03a7\u03a6\3\2\2\2\u03a8a\3\2\2\2\u03a9\u03ad"+
		"\7\61\2\2\u03aa\u03ac\5P)\2\u03ab\u03aa\3\2\2\2\u03ac\u03af\3\2\2\2\u03ad"+
		"\u03ab\3\2\2\2\u03ad\u03ae\3\2\2\2\u03ae\u03b0\3\2\2\2\u03af\u03ad\3\2"+
		"\2\2\u03b0\u03b1\7\62\2\2\u03b1c\3\2\2\2\u03b2\u03b3\7\30\2\2\u03b3\u03b7"+
		"\5b\62\2\u03b4\u03b6\5f\64\2\u03b5\u03b4\3\2\2\2\u03b6\u03b9\3\2\2\2\u03b7"+
		"\u03b5\3\2\2\2\u03b7\u03b8\3\2\2\2\u03b8\u03bb\3\2\2\2\u03b9\u03b7\3\2"+
		"\2\2\u03ba\u03bc\5p9\2\u03bb\u03ba\3\2\2\2\u03bb\u03bc\3\2\2\2\u03bce"+
		"\3\2\2\2\u03bd\u03be\7\31\2\2\u03be\u03bf\5> \2\u03bf\u03c0\5b\62\2\u03c0"+
		"\u03c9\3\2\2\2\u03c1\u03c2\7\31\2\2\u03c2\u03c3\5t;\2\u03c3\u03c4\78\2"+
		"\2\u03c4\u03c5\5> \2\u03c5\u03c6\3\2\2\2\u03c6\u03c7\5b\62\2\u03c7\u03c9"+
		"\3\2\2\2\u03c8\u03bd\3\2\2\2\u03c8\u03c1\3\2\2\2\u03c9g\3\2\2\2\u03ca"+
		"\u03cb\5t;\2\u03cb\u03cc\7B\2\2\u03cc\u03ce\3\2\2\2\u03cd\u03ca\3\2\2"+
		"\2\u03cd\u03ce\3\2\2\2\u03ce\u03cf\3\2\2\2\u03cf\u03d0\5\\/\2\u03d0i\3"+
		"\2\2\2\u03d1\u03d4\5t;\2\u03d2\u03d3\78\2\2\u03d3\u03d5\5\\/\2\u03d4\u03d2"+
		"\3\2\2\2\u03d4\u03d5\3\2\2\2\u03d5k\3\2\2\2\u03d6\u03dc\7U\2\2\u03d7\u03dc"+
		"\7V\2\2\u03d8\u03dc\7W\2\2\u03d9\u03dc\7X\2\2\u03da\u03dc\7\34\2\2\u03db"+
		"\u03d6\3\2\2\2\u03db\u03d7\3\2\2\2\u03db\u03d8\3\2\2\2\u03db\u03d9\3\2"+
		"\2\2\u03db\u03da\3\2\2\2\u03dcm\3\2\2\2\u03dd\u03de\7\26\2\2\u03de\u03df"+
		"\5\\/\2\u03df\u03e1\5b\62\2\u03e0\u03e2\5p9\2\u03e1\u03e0\3\2\2\2\u03e1"+
		"\u03e2\3\2\2\2\u03e2o\3\2\2\2\u03e3\u03e4\7\32\2\2\u03e4\u03e8\5b\62\2"+
		"\u03e5\u03e6\7\32\2\2\u03e6\u03e8\5P)\2\u03e7\u03e3\3\2\2\2\u03e7\u03e5"+
		"\3\2\2\2\u03e8q\3\2\2\2\u03e9\u03ea\7\22\2\2\u03ea\u03eb\5V,\2\u03eb\u03ec"+
		"\7\23\2\2\u03ec\u03ed\5\\/\2\u03ed\u03ee\5b\62\2\u03ees\3\2\2\2\u03ef"+
		"\u03f2\7T\2\2\u03f0\u03f2\5v<\2\u03f1\u03ef\3\2\2\2\u03f1\u03f0\3\2\2"+
		"\2\u03f2u\3\2\2\2\u03f3\u03f4\t\b\2\2\u03f4w\3\2\2\2\177{\u0084\u008a"+
		"\u008e\u0096\u009e\u00ae\u00b6\u00c8\u00cc\u00d2\u00d9\u00dd\u00e7\u00ea"+
		"\u00f5\u00f8\u00fc\u010b\u010f\u0111\u011f\u0123\u0125\u012e\u0138\u0141"+
		"\u0149\u014b\u014e\u015e\u0167\u016f\u0176\u017c\u0183\u0188\u0194\u0198"+
		"\u019f\u01a5\u01ad\u01b1\u01c8\u01cb\u01cf\u01d6\u01d9\u01db\u01e3\u01eb"+
		"\u01f4\u01f8\u0200\u0203\u0208\u0210\u0214\u0218\u0222\u0227\u022f\u0232"+
		"\u023a\u023e\u0240\u0247\u024e\u0255\u025c\u0263\u026a\u0275\u0279\u027b"+
		"\u027e\u0283\u028c\u0291\u0297\u029f\u02a7\u02af\u02b3\u02b9\u02c3\u02cb"+
		"\u02d6\u02db\u02ed\u02f2\u02ff\u0307\u030a\u031d\u0320\u0324\u032c\u0330"+
		"\u0332\u0338\u033c\u034a\u0354\u035c\u035f\u0381\u0383\u038c\u038f\u0398"+
		"\u039b\u039e\u03a3\u03a7\u03ad\u03b7\u03bb\u03c8\u03cd\u03d4\u03db\u03e1"+
		"\u03e7\u03f1";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}