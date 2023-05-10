// Generated from /Users/william/IdeaProjects/cwsc-x/grammar/CWScriptLexer.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CWScriptLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		DEBUG=1, CONTRACT=2, INTERFACE=3, IMPORT=4, IMPLEMENTS=5, EXTENDS=6, ERROR=7, 
		EVENT=8, DEFER=9, INSTANTIATE_NOW=10, EXEC_NOW=11, QUERY_NOW=12, DELEGATE_EXEC=13, 
		INSTANTIATE=14, EXEC=15, QUERY=16, REPLY=17, FOR=18, IN=19, FROM=20, STATE=21, 
		IF=22, IS=23, TRY=24, CATCH=25, ELSE=26, NOT=27, NONE=28, MUT=29, AND=30, 
		OR=31, TRUE=32, FALSE=33, FN=34, LET=35, CONST=36, FAIL=37, RETURN=38, 
		STRUCT=39, ENUM=40, TYPE=41, EMIT=42, AS=43, TILDE=44, LPAREN=45, RPAREN=46, 
		LBRACK=47, RBRACK=48, LBRACE=49, RBRACE=50, DOT=51, COMMA=52, D_QUEST=53, 
		QUEST=54, BANG=55, SEMI=56, COLON=57, D_COLON=58, HASH=59, AT=60, AMP=61, 
		ARROW=62, FAT_ARROW=63, BAR=64, S_QUOTE=65, D_QUOTE=66, EQ=67, EQ_EQ=68, 
		NEQ=69, PLUS=70, PLUS_EQ=71, MINUS=72, MINUS_EQ=73, MUL=74, MUL_EQ=75, 
		DIV=76, DIV_EQ=77, MOD=78, MOD_EQ=79, LT=80, LT_EQ=81, GT=82, GT_EQ=83, 
		POW=84, Ident=85, StringLiteral=86, IntLiteral=87, DecLiteral=88, BoolLiteral=89, 
		CWSPEC_LINE_COMMENT=90, CWSPEC_BLOCK_COMMENT=91, LINE_COMMENT=92, BLOCK_COMMENT=93, 
		WS=94;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"DEBUG", "CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "EXTENDS", 
			"ERROR", "EVENT", "DEFER", "INSTANTIATE_NOW", "EXEC_NOW", "QUERY_NOW", 
			"DELEGATE_EXEC", "INSTANTIATE", "EXEC", "QUERY", "REPLY", "FOR", "IN", 
			"FROM", "STATE", "IF", "IS", "TRY", "CATCH", "ELSE", "NOT", "NONE", "MUT", 
			"AND", "OR", "TRUE", "FALSE", "FN", "LET", "CONST", "FAIL", "RETURN", 
			"STRUCT", "ENUM", "TYPE", "EMIT", "AS", "TILDE", "LPAREN", "RPAREN", 
			"LBRACK", "RBRACK", "LBRACE", "RBRACE", "DOT", "COMMA", "D_QUEST", "QUEST", 
			"BANG", "SEMI", "COLON", "D_COLON", "HASH", "AT", "AMP", "ARROW", "FAT_ARROW", 
			"BAR", "S_QUOTE", "D_QUOTE", "EQ", "EQ_EQ", "NEQ", "PLUS", "PLUS_EQ", 
			"MINUS", "MINUS_EQ", "MUL", "MUL_EQ", "DIV", "DIV_EQ", "MOD", "MOD_EQ", 
			"LT", "LT_EQ", "GT", "GT_EQ", "POW", "Ident", "StringLiteral", "DoubleQuotedStringCharacter", 
			"IntLiteral", "DecLiteral", "DecimalDigits", "BoolLiteral", "CWSPEC_LINE_COMMENT", 
			"CWSPEC_BLOCK_COMMENT", "LINE_COMMENT", "BLOCK_COMMENT", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'debug!'", "'contract'", "'interface'", "'import'", "'implements'", 
			"'extends'", "'error'", "'event'", "'defer'", "'instantiate!'", "'exec!'", 
			"'query!'", "'delegate_exec!'", "'instantiate'", "'exec'", "'query'", 
			"'reply'", "'for'", "'in'", "'from'", "'state'", "'if'", "'is'", "'try'", 
			"'catch'", "'else'", "'not'", "'None'", "'mut'", "'and'", "'or'", "'true'", 
			"'false'", "'fn'", "'let'", "'const'", "'fail!'", "'return'", "'struct'", 
			"'enum'", "'type'", "'emit'", "'as'", "'~'", "'('", "')'", "'['", "']'", 
			"'{'", "'}'", "'.'", "','", "'??'", "'?'", "'!'", "';'", "':'", "'::'", 
			"'#'", "'@'", "'&'", "'->'", "'=>'", "'|'", "'''", "'\"'", "'='", "'=='", 
			"'!='", "'+'", "'+='", "'-'", "'-='", "'*'", "'*='", "'/'", "'/='", "'%'", 
			"'%='", "'<'", "'<='", "'>'", "'>='", "'**'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "DEBUG", "CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "EXTENDS", 
			"ERROR", "EVENT", "DEFER", "INSTANTIATE_NOW", "EXEC_NOW", "QUERY_NOW", 
			"DELEGATE_EXEC", "INSTANTIATE", "EXEC", "QUERY", "REPLY", "FOR", "IN", 
			"FROM", "STATE", "IF", "IS", "TRY", "CATCH", "ELSE", "NOT", "NONE", "MUT", 
			"AND", "OR", "TRUE", "FALSE", "FN", "LET", "CONST", "FAIL", "RETURN", 
			"STRUCT", "ENUM", "TYPE", "EMIT", "AS", "TILDE", "LPAREN", "RPAREN", 
			"LBRACK", "RBRACK", "LBRACE", "RBRACE", "DOT", "COMMA", "D_QUEST", "QUEST", 
			"BANG", "SEMI", "COLON", "D_COLON", "HASH", "AT", "AMP", "ARROW", "FAT_ARROW", 
			"BAR", "S_QUOTE", "D_QUOTE", "EQ", "EQ_EQ", "NEQ", "PLUS", "PLUS_EQ", 
			"MINUS", "MINUS_EQ", "MUL", "MUL_EQ", "DIV", "DIV_EQ", "MOD", "MOD_EQ", 
			"LT", "LT_EQ", "GT", "GT_EQ", "POW", "Ident", "StringLiteral", "IntLiteral", 
			"DecLiteral", "BoolLiteral", "CWSPEC_LINE_COMMENT", "CWSPEC_BLOCK_COMMENT", 
			"LINE_COMMENT", "BLOCK_COMMENT", "WS"
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


	public CWScriptLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "CWScriptLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2`\u028c\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4"+
		"`\t`\4a\ta\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3"+
		"\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3"+
		"\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3"+
		"\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3"+
		"\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3"+
		"\20\3\20\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3"+
		"\23\3\23\3\23\3\23\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3"+
		"\26\3\26\3\26\3\26\3\27\3\27\3\27\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3"+
		"\32\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3"+
		"\34\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3"+
		" \3 \3 \3!\3!\3!\3!\3!\3\"\3\"\3\"\3\"\3\"\3\"\3#\3#\3#\3$\3$\3$\3$\3"+
		"%\3%\3%\3%\3%\3%\3&\3&\3&\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\3\'\3\'\3(\3(\3"+
		"(\3(\3(\3(\3(\3)\3)\3)\3)\3)\3*\3*\3*\3*\3*\3+\3+\3+\3+\3+\3,\3,\3,\3"+
		"-\3-\3.\3.\3/\3/\3\60\3\60\3\61\3\61\3\62\3\62\3\63\3\63\3\64\3\64\3\65"+
		"\3\65\3\66\3\66\3\66\3\67\3\67\38\38\39\39\3:\3:\3;\3;\3;\3<\3<\3=\3="+
		"\3>\3>\3?\3?\3?\3@\3@\3@\3A\3A\3B\3B\3C\3C\3D\3D\3E\3E\3E\3F\3F\3F\3G"+
		"\3G\3H\3H\3H\3I\3I\3J\3J\3J\3K\3K\3L\3L\3L\3M\3M\3N\3N\3N\3O\3O\3P\3P"+
		"\3P\3Q\3Q\3R\3R\3R\3S\3S\3T\3T\3T\3U\3U\3U\3V\3V\7V\u022b\nV\fV\16V\u022e"+
		"\13V\3W\3W\7W\u0232\nW\fW\16W\u0235\13W\3W\3W\3X\3X\3X\5X\u023c\nX\3Y"+
		"\3Y\3Z\5Z\u0241\nZ\3Z\3Z\3Z\3[\3[\5[\u0248\n[\3[\7[\u024b\n[\f[\16[\u024e"+
		"\13[\3\\\3\\\5\\\u0252\n\\\3]\3]\3]\3]\3]\7]\u0259\n]\f]\16]\u025c\13"+
		"]\3]\6]\u025f\n]\r]\16]\u0260\3^\3^\3^\3^\3^\7^\u0268\n^\f^\16^\u026b"+
		"\13^\3^\3^\3^\3_\3_\3_\3_\7_\u0274\n_\f_\16_\u0277\13_\3_\3_\3`\3`\3`"+
		"\3`\7`\u027f\n`\f`\16`\u0282\13`\3`\3`\3`\3`\3`\3a\3a\3a\3a\5\u025a\u0269"+
		"\u0280\2b\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33"+
		"\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67"+
		"\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65"+
		"i\66k\67m8o9q:s;u<w=y>{?}@\177A\u0081B\u0083C\u0085D\u0087E\u0089F\u008b"+
		"G\u008dH\u008fI\u0091J\u0093K\u0095L\u0097M\u0099N\u009bO\u009dP\u009f"+
		"Q\u00a1R\u00a3S\u00a5T\u00a7U\u00a9V\u00abW\u00adX\u00af\2\u00b1Y\u00b3"+
		"Z\u00b5\2\u00b7[\u00b9\\\u00bb]\u00bd^\u00bf_\u00c1`\3\2\b\6\2&&C\\aa"+
		"c|\6\2\62;C\\aac|\6\2\f\f\17\17$$^^\3\2\62;\4\2\f\f\17\17\5\2\13\f\17"+
		"\17\"\"\2\u0295\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3"+
		"\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2"+
		"\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3"+
		"\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2"+
		"\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\2"+
		"9\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3"+
		"\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2"+
		"\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2"+
		"_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3"+
		"\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2"+
		"\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083"+
		"\3\2\2\2\2\u0085\3\2\2\2\2\u0087\3\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2"+
		"\2\2\u008d\3\2\2\2\2\u008f\3\2\2\2\2\u0091\3\2\2\2\2\u0093\3\2\2\2\2\u0095"+
		"\3\2\2\2\2\u0097\3\2\2\2\2\u0099\3\2\2\2\2\u009b\3\2\2\2\2\u009d\3\2\2"+
		"\2\2\u009f\3\2\2\2\2\u00a1\3\2\2\2\2\u00a3\3\2\2\2\2\u00a5\3\2\2\2\2\u00a7"+
		"\3\2\2\2\2\u00a9\3\2\2\2\2\u00ab\3\2\2\2\2\u00ad\3\2\2\2\2\u00b1\3\2\2"+
		"\2\2\u00b3\3\2\2\2\2\u00b7\3\2\2\2\2\u00b9\3\2\2\2\2\u00bb\3\2\2\2\2\u00bd"+
		"\3\2\2\2\2\u00bf\3\2\2\2\2\u00c1\3\2\2\2\3\u00c3\3\2\2\2\5\u00ca\3\2\2"+
		"\2\7\u00d3\3\2\2\2\t\u00dd\3\2\2\2\13\u00e4\3\2\2\2\r\u00ef\3\2\2\2\17"+
		"\u00f7\3\2\2\2\21\u00fd\3\2\2\2\23\u0103\3\2\2\2\25\u0109\3\2\2\2\27\u0116"+
		"\3\2\2\2\31\u011c\3\2\2\2\33\u0123\3\2\2\2\35\u0132\3\2\2\2\37\u013e\3"+
		"\2\2\2!\u0143\3\2\2\2#\u0149\3\2\2\2%\u014f\3\2\2\2\'\u0153\3\2\2\2)\u0156"+
		"\3\2\2\2+\u015b\3\2\2\2-\u0161\3\2\2\2/\u0164\3\2\2\2\61\u0167\3\2\2\2"+
		"\63\u016b\3\2\2\2\65\u0171\3\2\2\2\67\u0176\3\2\2\29\u017a\3\2\2\2;\u017f"+
		"\3\2\2\2=\u0183\3\2\2\2?\u0187\3\2\2\2A\u018a\3\2\2\2C\u018f\3\2\2\2E"+
		"\u0195\3\2\2\2G\u0198\3\2\2\2I\u019c\3\2\2\2K\u01a2\3\2\2\2M\u01a8\3\2"+
		"\2\2O\u01af\3\2\2\2Q\u01b6\3\2\2\2S\u01bb\3\2\2\2U\u01c0\3\2\2\2W\u01c5"+
		"\3\2\2\2Y\u01c8\3\2\2\2[\u01ca\3\2\2\2]\u01cc\3\2\2\2_\u01ce\3\2\2\2a"+
		"\u01d0\3\2\2\2c\u01d2\3\2\2\2e\u01d4\3\2\2\2g\u01d6\3\2\2\2i\u01d8\3\2"+
		"\2\2k\u01da\3\2\2\2m\u01dd\3\2\2\2o\u01df\3\2\2\2q\u01e1\3\2\2\2s\u01e3"+
		"\3\2\2\2u\u01e5\3\2\2\2w\u01e8\3\2\2\2y\u01ea\3\2\2\2{\u01ec\3\2\2\2}"+
		"\u01ee\3\2\2\2\177\u01f1\3\2\2\2\u0081\u01f4\3\2\2\2\u0083\u01f6\3\2\2"+
		"\2\u0085\u01f8\3\2\2\2\u0087\u01fa\3\2\2\2\u0089\u01fc\3\2\2\2\u008b\u01ff"+
		"\3\2\2\2\u008d\u0202\3\2\2\2\u008f\u0204\3\2\2\2\u0091\u0207\3\2\2\2\u0093"+
		"\u0209\3\2\2\2\u0095\u020c\3\2\2\2\u0097\u020e\3\2\2\2\u0099\u0211\3\2"+
		"\2\2\u009b\u0213\3\2\2\2\u009d\u0216\3\2\2\2\u009f\u0218\3\2\2\2\u00a1"+
		"\u021b\3\2\2\2\u00a3\u021d\3\2\2\2\u00a5\u0220\3\2\2\2\u00a7\u0222\3\2"+
		"\2\2\u00a9\u0225\3\2\2\2\u00ab\u0228\3\2\2\2\u00ad\u022f\3\2\2\2\u00af"+
		"\u023b\3\2\2\2\u00b1\u023d\3\2\2\2\u00b3\u0240\3\2\2\2\u00b5\u0245\3\2"+
		"\2\2\u00b7\u0251\3\2\2\2\u00b9\u025e\3\2\2\2\u00bb\u0262\3\2\2\2\u00bd"+
		"\u026f\3\2\2\2\u00bf\u027a\3\2\2\2\u00c1\u0288\3\2\2\2\u00c3\u00c4\7f"+
		"\2\2\u00c4\u00c5\7g\2\2\u00c5\u00c6\7d\2\2\u00c6\u00c7\7w\2\2\u00c7\u00c8"+
		"\7i\2\2\u00c8\u00c9\7#\2\2\u00c9\4\3\2\2\2\u00ca\u00cb\7e\2\2\u00cb\u00cc"+
		"\7q\2\2\u00cc\u00cd\7p\2\2\u00cd\u00ce\7v\2\2\u00ce\u00cf\7t\2\2\u00cf"+
		"\u00d0\7c\2\2\u00d0\u00d1\7e\2\2\u00d1\u00d2\7v\2\2\u00d2\6\3\2\2\2\u00d3"+
		"\u00d4\7k\2\2\u00d4\u00d5\7p\2\2\u00d5\u00d6\7v\2\2\u00d6\u00d7\7g\2\2"+
		"\u00d7\u00d8\7t\2\2\u00d8\u00d9\7h\2\2\u00d9\u00da\7c\2\2\u00da\u00db"+
		"\7e\2\2\u00db\u00dc\7g\2\2\u00dc\b\3\2\2\2\u00dd\u00de\7k\2\2\u00de\u00df"+
		"\7o\2\2\u00df\u00e0\7r\2\2\u00e0\u00e1\7q\2\2\u00e1\u00e2\7t\2\2\u00e2"+
		"\u00e3\7v\2\2\u00e3\n\3\2\2\2\u00e4\u00e5\7k\2\2\u00e5\u00e6\7o\2\2\u00e6"+
		"\u00e7\7r\2\2\u00e7\u00e8\7n\2\2\u00e8\u00e9\7g\2\2\u00e9\u00ea\7o\2\2"+
		"\u00ea\u00eb\7g\2\2\u00eb\u00ec\7p\2\2\u00ec\u00ed\7v\2\2\u00ed\u00ee"+
		"\7u\2\2\u00ee\f\3\2\2\2\u00ef\u00f0\7g\2\2\u00f0\u00f1\7z\2\2\u00f1\u00f2"+
		"\7v\2\2\u00f2\u00f3\7g\2\2\u00f3\u00f4\7p\2\2\u00f4\u00f5\7f\2\2\u00f5"+
		"\u00f6\7u\2\2\u00f6\16\3\2\2\2\u00f7\u00f8\7g\2\2\u00f8\u00f9\7t\2\2\u00f9"+
		"\u00fa\7t\2\2\u00fa\u00fb\7q\2\2\u00fb\u00fc\7t\2\2\u00fc\20\3\2\2\2\u00fd"+
		"\u00fe\7g\2\2\u00fe\u00ff\7x\2\2\u00ff\u0100\7g\2\2\u0100\u0101\7p\2\2"+
		"\u0101\u0102\7v\2\2\u0102\22\3\2\2\2\u0103\u0104\7f\2\2\u0104\u0105\7"+
		"g\2\2\u0105\u0106\7h\2\2\u0106\u0107\7g\2\2\u0107\u0108\7t\2\2\u0108\24"+
		"\3\2\2\2\u0109\u010a\7k\2\2\u010a\u010b\7p\2\2\u010b\u010c\7u\2\2\u010c"+
		"\u010d\7v\2\2\u010d\u010e\7c\2\2\u010e\u010f\7p\2\2\u010f\u0110\7v\2\2"+
		"\u0110\u0111\7k\2\2\u0111\u0112\7c\2\2\u0112\u0113\7v\2\2\u0113\u0114"+
		"\7g\2\2\u0114\u0115\7#\2\2\u0115\26\3\2\2\2\u0116\u0117\7g\2\2\u0117\u0118"+
		"\7z\2\2\u0118\u0119\7g\2\2\u0119\u011a\7e\2\2\u011a\u011b\7#\2\2\u011b"+
		"\30\3\2\2\2\u011c\u011d\7s\2\2\u011d\u011e\7w\2\2\u011e\u011f\7g\2\2\u011f"+
		"\u0120\7t\2\2\u0120\u0121\7{\2\2\u0121\u0122\7#\2\2\u0122\32\3\2\2\2\u0123"+
		"\u0124\7f\2\2\u0124\u0125\7g\2\2\u0125\u0126\7n\2\2\u0126\u0127\7g\2\2"+
		"\u0127\u0128\7i\2\2\u0128\u0129\7c\2\2\u0129\u012a\7v\2\2\u012a\u012b"+
		"\7g\2\2\u012b\u012c\7a\2\2\u012c\u012d\7g\2\2\u012d\u012e\7z\2\2\u012e"+
		"\u012f\7g\2\2\u012f\u0130\7e\2\2\u0130\u0131\7#\2\2\u0131\34\3\2\2\2\u0132"+
		"\u0133\7k\2\2\u0133\u0134\7p\2\2\u0134\u0135\7u\2\2\u0135\u0136\7v\2\2"+
		"\u0136\u0137\7c\2\2\u0137\u0138\7p\2\2\u0138\u0139\7v\2\2\u0139\u013a"+
		"\7k\2\2\u013a\u013b\7c\2\2\u013b\u013c\7v\2\2\u013c\u013d\7g\2\2\u013d"+
		"\36\3\2\2\2\u013e\u013f\7g\2\2\u013f\u0140\7z\2\2\u0140\u0141\7g\2\2\u0141"+
		"\u0142\7e\2\2\u0142 \3\2\2\2\u0143\u0144\7s\2\2\u0144\u0145\7w\2\2\u0145"+
		"\u0146\7g\2\2\u0146\u0147\7t\2\2\u0147\u0148\7{\2\2\u0148\"\3\2\2\2\u0149"+
		"\u014a\7t\2\2\u014a\u014b\7g\2\2\u014b\u014c\7r\2\2\u014c\u014d\7n\2\2"+
		"\u014d\u014e\7{\2\2\u014e$\3\2\2\2\u014f\u0150\7h\2\2\u0150\u0151\7q\2"+
		"\2\u0151\u0152\7t\2\2\u0152&\3\2\2\2\u0153\u0154\7k\2\2\u0154\u0155\7"+
		"p\2\2\u0155(\3\2\2\2\u0156\u0157\7h\2\2\u0157\u0158\7t\2\2\u0158\u0159"+
		"\7q\2\2\u0159\u015a\7o\2\2\u015a*\3\2\2\2\u015b\u015c\7u\2\2\u015c\u015d"+
		"\7v\2\2\u015d\u015e\7c\2\2\u015e\u015f\7v\2\2\u015f\u0160\7g\2\2\u0160"+
		",\3\2\2\2\u0161\u0162\7k\2\2\u0162\u0163\7h\2\2\u0163.\3\2\2\2\u0164\u0165"+
		"\7k\2\2\u0165\u0166\7u\2\2\u0166\60\3\2\2\2\u0167\u0168\7v\2\2\u0168\u0169"+
		"\7t\2\2\u0169\u016a\7{\2\2\u016a\62\3\2\2\2\u016b\u016c\7e\2\2\u016c\u016d"+
		"\7c\2\2\u016d\u016e\7v\2\2\u016e\u016f\7e\2\2\u016f\u0170\7j\2\2\u0170"+
		"\64\3\2\2\2\u0171\u0172\7g\2\2\u0172\u0173\7n\2\2\u0173\u0174\7u\2\2\u0174"+
		"\u0175\7g\2\2\u0175\66\3\2\2\2\u0176\u0177\7p\2\2\u0177\u0178\7q\2\2\u0178"+
		"\u0179\7v\2\2\u01798\3\2\2\2\u017a\u017b\7P\2\2\u017b\u017c\7q\2\2\u017c"+
		"\u017d\7p\2\2\u017d\u017e\7g\2\2\u017e:\3\2\2\2\u017f\u0180\7o\2\2\u0180"+
		"\u0181\7w\2\2\u0181\u0182\7v\2\2\u0182<\3\2\2\2\u0183\u0184\7c\2\2\u0184"+
		"\u0185\7p\2\2\u0185\u0186\7f\2\2\u0186>\3\2\2\2\u0187\u0188\7q\2\2\u0188"+
		"\u0189\7t\2\2\u0189@\3\2\2\2\u018a\u018b\7v\2\2\u018b\u018c\7t\2\2\u018c"+
		"\u018d\7w\2\2\u018d\u018e\7g\2\2\u018eB\3\2\2\2\u018f\u0190\7h\2\2\u0190"+
		"\u0191\7c\2\2\u0191\u0192\7n\2\2\u0192\u0193\7u\2\2\u0193\u0194\7g\2\2"+
		"\u0194D\3\2\2\2\u0195\u0196\7h\2\2\u0196\u0197\7p\2\2\u0197F\3\2\2\2\u0198"+
		"\u0199\7n\2\2\u0199\u019a\7g\2\2\u019a\u019b\7v\2\2\u019bH\3\2\2\2\u019c"+
		"\u019d\7e\2\2\u019d\u019e\7q\2\2\u019e\u019f\7p\2\2\u019f\u01a0\7u\2\2"+
		"\u01a0\u01a1\7v\2\2\u01a1J\3\2\2\2\u01a2\u01a3\7h\2\2\u01a3\u01a4\7c\2"+
		"\2\u01a4\u01a5\7k\2\2\u01a5\u01a6\7n\2\2\u01a6\u01a7\7#\2\2\u01a7L\3\2"+
		"\2\2\u01a8\u01a9\7t\2\2\u01a9\u01aa\7g\2\2\u01aa\u01ab\7v\2\2\u01ab\u01ac"+
		"\7w\2\2\u01ac\u01ad\7t\2\2\u01ad\u01ae\7p\2\2\u01aeN\3\2\2\2\u01af\u01b0"+
		"\7u\2\2\u01b0\u01b1\7v\2\2\u01b1\u01b2\7t\2\2\u01b2\u01b3\7w\2\2\u01b3"+
		"\u01b4\7e\2\2\u01b4\u01b5\7v\2\2\u01b5P\3\2\2\2\u01b6\u01b7\7g\2\2\u01b7"+
		"\u01b8\7p\2\2\u01b8\u01b9\7w\2\2\u01b9\u01ba\7o\2\2\u01baR\3\2\2\2\u01bb"+
		"\u01bc\7v\2\2\u01bc\u01bd\7{\2\2\u01bd\u01be\7r\2\2\u01be\u01bf\7g\2\2"+
		"\u01bfT\3\2\2\2\u01c0\u01c1\7g\2\2\u01c1\u01c2\7o\2\2\u01c2\u01c3\7k\2"+
		"\2\u01c3\u01c4\7v\2\2\u01c4V\3\2\2\2\u01c5\u01c6\7c\2\2\u01c6\u01c7\7"+
		"u\2\2\u01c7X\3\2\2\2\u01c8\u01c9\7\u0080\2\2\u01c9Z\3\2\2\2\u01ca\u01cb"+
		"\7*\2\2\u01cb\\\3\2\2\2\u01cc\u01cd\7+\2\2\u01cd^\3\2\2\2\u01ce\u01cf"+
		"\7]\2\2\u01cf`\3\2\2\2\u01d0\u01d1\7_\2\2\u01d1b\3\2\2\2\u01d2\u01d3\7"+
		"}\2\2\u01d3d\3\2\2\2\u01d4\u01d5\7\177\2\2\u01d5f\3\2\2\2\u01d6\u01d7"+
		"\7\60\2\2\u01d7h\3\2\2\2\u01d8\u01d9\7.\2\2\u01d9j\3\2\2\2\u01da\u01db"+
		"\7A\2\2\u01db\u01dc\7A\2\2\u01dcl\3\2\2\2\u01dd\u01de\7A\2\2\u01den\3"+
		"\2\2\2\u01df\u01e0\7#\2\2\u01e0p\3\2\2\2\u01e1\u01e2\7=\2\2\u01e2r\3\2"+
		"\2\2\u01e3\u01e4\7<\2\2\u01e4t\3\2\2\2\u01e5\u01e6\7<\2\2\u01e6\u01e7"+
		"\7<\2\2\u01e7v\3\2\2\2\u01e8\u01e9\7%\2\2\u01e9x\3\2\2\2\u01ea\u01eb\7"+
		"B\2\2\u01ebz\3\2\2\2\u01ec\u01ed\7(\2\2\u01ed|\3\2\2\2\u01ee\u01ef\7/"+
		"\2\2\u01ef\u01f0\7@\2\2\u01f0~\3\2\2\2\u01f1\u01f2\7?\2\2\u01f2\u01f3"+
		"\7@\2\2\u01f3\u0080\3\2\2\2\u01f4\u01f5\7~\2\2\u01f5\u0082\3\2\2\2\u01f6"+
		"\u01f7\7)\2\2\u01f7\u0084\3\2\2\2\u01f8\u01f9\7$\2\2\u01f9\u0086\3\2\2"+
		"\2\u01fa\u01fb\7?\2\2\u01fb\u0088\3\2\2\2\u01fc\u01fd\7?\2\2\u01fd\u01fe"+
		"\7?\2\2\u01fe\u008a\3\2\2\2\u01ff\u0200\7#\2\2\u0200\u0201\7?\2\2\u0201"+
		"\u008c\3\2\2\2\u0202\u0203\7-\2\2\u0203\u008e\3\2\2\2\u0204\u0205\7-\2"+
		"\2\u0205\u0206\7?\2\2\u0206\u0090\3\2\2\2\u0207\u0208\7/\2\2\u0208\u0092"+
		"\3\2\2\2\u0209\u020a\7/\2\2\u020a\u020b\7?\2\2\u020b\u0094\3\2\2\2\u020c"+
		"\u020d\7,\2\2\u020d\u0096\3\2\2\2\u020e\u020f\7,\2\2\u020f\u0210\7?\2"+
		"\2\u0210\u0098\3\2\2\2\u0211\u0212\7\61\2\2\u0212\u009a\3\2\2\2\u0213"+
		"\u0214\7\61\2\2\u0214\u0215\7?\2\2\u0215\u009c\3\2\2\2\u0216\u0217\7\'"+
		"\2\2\u0217\u009e\3\2\2\2\u0218\u0219\7\'\2\2\u0219\u021a\7?\2\2\u021a"+
		"\u00a0\3\2\2\2\u021b\u021c\7>\2\2\u021c\u00a2\3\2\2\2\u021d\u021e\7>\2"+
		"\2\u021e\u021f\7?\2\2\u021f\u00a4\3\2\2\2\u0220\u0221\7@\2\2\u0221\u00a6"+
		"\3\2\2\2\u0222\u0223\7@\2\2\u0223\u0224\7?\2\2\u0224\u00a8\3\2\2\2\u0225"+
		"\u0226\7,\2\2\u0226\u0227\7,\2\2\u0227\u00aa\3\2\2\2\u0228\u022c\t\2\2"+
		"\2\u0229\u022b\t\3\2\2\u022a\u0229\3\2\2\2\u022b\u022e\3\2\2\2\u022c\u022a"+
		"\3\2\2\2\u022c\u022d\3\2\2\2\u022d\u00ac\3\2\2\2\u022e\u022c\3\2\2\2\u022f"+
		"\u0233\5\u0085C\2\u0230\u0232\5\u00afX\2\u0231\u0230\3\2\2\2\u0232\u0235"+
		"\3\2\2\2\u0233\u0231\3\2\2\2\u0233\u0234\3\2\2\2\u0234\u0236\3\2\2\2\u0235"+
		"\u0233\3\2\2\2\u0236\u0237\5\u0085C\2\u0237\u00ae\3\2\2\2\u0238\u023c"+
		"\n\4\2\2\u0239\u023a\7^\2\2\u023a\u023c\13\2\2\2\u023b\u0238\3\2\2\2\u023b"+
		"\u0239\3\2\2\2\u023c\u00b0\3\2\2\2\u023d\u023e\5\u00b5[\2\u023e\u00b2"+
		"\3\2\2\2\u023f\u0241\5\u00b5[\2\u0240\u023f\3\2\2\2\u0240\u0241\3\2\2"+
		"\2\u0241\u0242\3\2\2\2\u0242\u0243\5g\64\2\u0243\u0244\5\u00b5[\2\u0244"+
		"\u00b4\3\2\2\2\u0245\u024c\t\5\2\2\u0246\u0248\7a\2\2\u0247\u0246\3\2"+
		"\2\2\u0247\u0248\3\2\2\2\u0248\u0249\3\2\2\2\u0249\u024b\t\5\2\2\u024a"+
		"\u0247\3\2\2\2\u024b\u024e\3\2\2\2\u024c\u024a\3\2\2\2\u024c\u024d\3\2"+
		"\2\2\u024d\u00b6\3\2\2\2\u024e\u024c\3\2\2\2\u024f\u0252\5A!\2\u0250\u0252"+
		"\5C\"\2\u0251\u024f\3\2\2\2\u0251\u0250\3\2\2\2\u0252\u00b8\3\2\2\2\u0253"+
		"\u0254\7\61\2\2\u0254\u0255\7\61\2\2\u0255\u0256\7\61\2\2\u0256\u025a"+
		"\3\2\2\2\u0257\u0259\13\2\2\2\u0258\u0257\3\2\2\2\u0259\u025c\3\2\2\2"+
		"\u025a\u025b\3\2\2\2\u025a\u0258\3\2\2\2\u025b\u025d\3\2\2\2\u025c\u025a"+
		"\3\2\2\2\u025d\u025f\t\6\2\2\u025e\u0253\3\2\2\2\u025f\u0260\3\2\2\2\u0260"+
		"\u025e\3\2\2\2\u0260\u0261\3\2\2\2\u0261\u00ba\3\2\2\2\u0262\u0263\7\61"+
		"\2\2\u0263\u0264\7,\2\2\u0264\u0265\7,\2\2\u0265\u0269\3\2\2\2\u0266\u0268"+
		"\13\2\2\2\u0267\u0266\3\2\2\2\u0268\u026b\3\2\2\2\u0269\u026a\3\2\2\2"+
		"\u0269\u0267\3\2\2\2\u026a\u026c\3\2\2\2\u026b\u0269\3\2\2\2\u026c\u026d"+
		"\7,\2\2\u026d\u026e\7\61\2\2\u026e\u00bc\3\2\2\2\u026f\u0270\7\61\2\2"+
		"\u0270\u0271\7\61\2\2\u0271\u0275\3\2\2\2\u0272\u0274\n\6\2\2\u0273\u0272"+
		"\3\2\2\2\u0274\u0277\3\2\2\2\u0275\u0273\3\2\2\2\u0275\u0276\3\2\2\2\u0276"+
		"\u0278\3\2\2\2\u0277\u0275\3\2\2\2\u0278\u0279\b_\2\2\u0279\u00be\3\2"+
		"\2\2\u027a\u027b\7\61\2\2\u027b\u027c\7,\2\2\u027c\u0280\3\2\2\2\u027d"+
		"\u027f\13\2\2\2\u027e\u027d\3\2\2\2\u027f\u0282\3\2\2\2\u0280\u0281\3"+
		"\2\2\2\u0280\u027e\3\2\2\2\u0281\u0283\3\2\2\2\u0282\u0280\3\2\2\2\u0283"+
		"\u0284\7,\2\2\u0284\u0285\7\61\2\2\u0285\u0286\3\2\2\2\u0286\u0287\b`"+
		"\2\2\u0287\u00c0\3\2\2\2\u0288\u0289\t\7\2\2\u0289\u028a\3\2\2\2\u028a"+
		"\u028b\ba\2\2\u028b\u00c2\3\2\2\2\17\2\u022c\u0233\u023b\u0240\u0247\u024c"+
		"\u0251\u025a\u0260\u0269\u0275\u0280\3\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}