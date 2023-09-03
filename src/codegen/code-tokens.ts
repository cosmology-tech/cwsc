/**
 * Class representing a Token. A Token is a fundamental unit of syntax in the code generation process.
 * It can represent a string, another Token, an array of Tokens, or a sequence of Tokens (TokenSeq).
 */
export class Token {
  constructor(public kind: string) {}

  /**
   * Append tokens to the current token. This method creates a new TokenSeq with the current Token and the passed Tokens.
   * @param {...(Token | TokenSeq)[]} tokens - The tokens to append.
   * @return {TokenSeq} The new TokenSeq.
   */
  append(...tokens: (Token | TokenSeq)[]) {
    return new TokenSeq(this, ...tokens);
  }

  /**
   * Prepend tokens to the current token. This method creates a new TokenSeq with the passed Tokens and the current Token.
   * @param {...(Token | TokenSeq)[]} tokens - The tokens to prepend.
   * @return {TokenSeq} The new TokenSeq.
   */
  prepend(...tokens: (Token | TokenSeq)[]) {
    return new TokenSeq(...tokens, this);
  }

  /**
   * Convert the current token to a TokenSeq. This method creates a new TokenSeq with only the current Token.
   * @return {TokenSeq} The new TokenSeq.
   */
  toSeq() {
    return new TokenSeq(this);
  }
}

export class Indent extends Token {
  constructor(public level: number) {
    super('<INDENT>');
  }
}

export abstract class Whitespace extends Token {
  constructor(public text: string) {
    super('Whitespace');
  }
}

export class Space extends Whitespace {
  constructor(repeat: number = 1) {
    super(' '.repeat(repeat));
  }
}

export class Newline extends Whitespace {
  constructor(repeat: number = 1) {
    super('\n'.repeat(repeat));
  }
}

export class Tab extends Whitespace {
  constructor(repeat: number = 1) {
    super('\t'.repeat(repeat));
  }
}

/**
 * Class representing a Text, which extends Token. A Text is a Token that specifically represents a string.
 */
export class Text extends Token {
  public text: string;

  constructor(arg: string | Text | Text[]) {
    super('Text');
    if (arg instanceof Text) {
      this.text = arg.text;
    } else if (typeof arg === 'string') {
      this.text = arg;
    } else if (Array.isArray(arg)) {
      this.text = arg.map((t) => t.text).join('');
    } else {
      throw new Error('Invalid argument for Text');
    }
  }
}

/**
 * Class representing a Sym, which extends Text. A Sym is a Text that specifically represents a symbol.
 */
export class Sym extends Text {}

/**
 * Class representing a Keyword, which extends Text. A Keyword is a Text that specifically represents a keyword.
 */
export class Keyword extends Text {}

/**
 * Object containing various symbols and keywords. Each property is a Sym or a Keyword representing a specific symbol or keyword.
 */
export const T = {
  LPAREN: new Sym('('),
  RPAREN: new Sym(')'),
  LBRACE: new Sym('{'),
  RBRACE: new Sym('}'),
  LBRACKET: new Sym('['),
  RBRACKET: new Sym(']'),
  LT: new Sym('<'),
  GT: new Sym('>'),
  SPACE: new Space(),
  TAB: new Tab(),
  NL: new Newline(),
  COMMA: new Sym(','),
  COLON: new Sym(':'),
  DCOLON: new Sym('::'),
  SEMI: new Sym(';'),
  QUOTE: new Sym("'"),
  DQUOTE: new Sym('"'),
  BACKTICK: new Sym('`'),
  EXCLAM: new Sym('!'),
  QUESTION: new Sym('?'),
  HASH: new Sym('#'),
  DOLLAR: new Sym('$'),
  AT: new Sym('@'),
  AMP: new Sym('&'),
  PIPE: new Sym('|'),
  DOT: new Sym('.'),
  PLUS: new Sym('+'),
  MINUS: new Sym('-'),
  STAR: new Sym('*'),
  SLASH: new Sym('/'),
  PERCENT: new Sym('%'),
  EQ: new Sym('='),
  EQEQ: new Sym('=='),
  NEQ: new Sym('!='),
  ARROW: new Sym('->'),
  FAT_ARROW: new Sym('=>'),
  kw: (text: string) => new Keyword(text),
  $INDENT: new Indent(1), // indent marker
  $DEDENT: new Indent(-1), // dedent marker
};

/**
 * Class representing a TokenSeq. A TokenSeq is a sequence of Tokens. It can be converted to a Token, and Tokens can be prepended or appended to it.
 */
export class TokenSeq {
  public tokens: Token[];

  /**
   * Create a TokenSeq. The constructor accepts an arbitrary number of Tokens and TokenSeqs.
   * If a Token is passed, it is added to the sequence.
   * If a TokenSeq is passed, its Tokens are added to the sequence.
   * @param {...(Token | TokenSeq)[]} tokens - The tokens to create a TokenSeq.
   */
  constructor(...tokens: (Token | TokenSeq)[]) {
    this.tokens = tokens
      .map((t) => (t instanceof TokenSeq ? t.tokens : t))
      .flat();
  }

  /**
   * Prepend tokens to the current TokenSeq. This method creates a new TokenSeq with the passed Tokens and the Tokens in the current sequence.
   * @param {...(Token | TokenSeq)[]} tokens - The tokens to prepend.
   * @return {TokenSeq} The new TokenSeq.
   */
  prepend(...tokens: (Token | TokenSeq)[]) {
    return new TokenSeq(...tokens, ...this.tokens);
  }

  /**
   * Append tokens to the current TokenSeq. This method creates a new TokenSeq with the Tokens in the current sequence and the passed Tokens.
   * @param {...(Token | TokenSeq)[]} tokens - The tokens to append.
   * @return {TokenSeq} The new TokenSeq.
   */
  append(...tokens: (Token | TokenSeq)[]) {
    return new TokenSeq(...this.tokens, ...tokens);
  }

  /**
   * An empty TokenSeq. This static property represents a TokenSeq with no Tokens.
   */
  static EMPTY = new TokenSeq();
}

/**
 * Create a new TokenSeq. This function is a shorthand for creating a new TokenSeq.
 * @param {...(Token | TokenSeq)[]} tokens - The tokens to create a TokenSeq.
 * @return {TokenSeq} The new TokenSeq.
 */
export function seq(...tokens: (Token | TokenSeq)[]) {
  return new TokenSeq(...tokens);
}

/**
 * Create a new TokenSeq with spaces. This function creates a new TokenSeq with a space at the beginning and the end.
 * @param {...(Token | TokenSeq)[]} tokens - The tokens to create a TokenSeq.
 * @return {TokenSeq} The new TokenSeq.
 */
export function spaced(...tokens: (Token | TokenSeq)[]) {
  return new TokenSeq(T.SPACE, ...tokens, T.SPACE);
}

/**
 * Interface for ComposeOptions. ComposeOptions is used to specify options for composing a new TokenSeq.
 * It can specify a Token or TokenSeq to be added before, between, and after the Tokens in the new sequence.
 */
export interface ComposeOptions {
  before?: Token | TokenSeq;
  between?: Token | TokenSeq;
  after?: Token | TokenSeq;
}

/**
 * Compose a new TokenSeq. This function creates a new TokenSeq with the specified options and Tokens.
 * If a before option is specified, it is added at the beginning of the sequence.
 * If a between option is specified, it is added between each Token in the sequence.
 * If an after option is specified, it is added at the end of the sequence.
 * @param {ComposeOptions} options - The options for composing.
 * @param {...(Token | TokenSeq)[]} tokens - The tokens to compose.
 * @return {TokenSeq} The new TokenSeq.
 */
export function compose(
  options: ComposeOptions,
  ...tokens: (Token | TokenSeq)[]
) {
  let result = seq();
  if (options.before) {
    result = result.append(options.before);
  }
  for (const token of tokens) {
    if (result.tokens.length > 0 && options.between) {
      result = result.append(options.between);
    }
    result = result.append(token);
  }
  if (options.after) {
    result = result.append(options.after);
  }
  return result;
}

export function indent(...tokens: (Token | TokenSeq)[]) {
  return seq(T.$INDENT, T.NL, ...tokens, T.$DEDENT, T.NL);
}

/**
 * Create a comma-separated list. This function creates a new TokenSeq with the passed Tokens separated by a comma and a space.
 * @param {...(Token | TokenSeq)[]} tokens - The tokens to create a list.
 * @return {TokenSeq} The new TokenSeq.
 */
export function csl(...tokens: (Token | TokenSeq)[]): TokenSeq {
  return compose({ between: seq(T.COMMA, T.SPACE) }, ...tokens);
}

/**
 * Create a new TokenSeq with braces. This function creates a new TokenSeq with the passed Tokens enclosed in braces.
 * @param {...(Token | TokenSeq)[]} tokens - The tokens to create a TokenSeq.
 * @return {TokenSeq} The new TokenSeq.
 */
export function braces(...tokens: (Token | TokenSeq)[]): TokenSeq {
  return seq(T.LBRACE, ...tokens, T.RBRACE);
}

/**
 * Create a new TokenSeq with brackets. This function creates a new TokenSeq with the passed Tokens enclosed in brackets.
 * @param {...(Token | TokenSeq)[]} tokens - The tokens to create a TokenSeq.
 * @return {TokenSeq} The new TokenSeq.
 */
export function brackets(...tokens: (Token | TokenSeq)[]): TokenSeq {
  return seq(T.LBRACKET, ...tokens, T.RBRACKET);
}

/**
 * Create a new TokenSeq with parentheses. This function creates a new TokenSeq with the passed Tokens enclosed in parentheses.
 * @param {...(Token | TokenSeq)[]} tokens - The tokens to create a TokenSeq.
 * @return {TokenSeq} The new TokenSeq.
 */
export function parens(...tokens: (Token | TokenSeq)[]): TokenSeq {
  return seq(T.LPAREN, ...tokens, T.RPAREN);
}

/**
 * Create a new TokenSeq with angles. This function creates a new TokenSeq with the passed Tokens enclosed in angle brackets.
 * @param {...(Token | TokenSeq)[]} tokens - The tokens to create a TokenSeq.
 * @return {TokenSeq} The new TokenSeq.
 */
export function angles(...tokens: (Token | TokenSeq)[]): TokenSeq {
  return seq(T.LT, ...tokens, T.GT);
}

/**
 * Create a new TokenSeq with quotes. This function creates a new TokenSeq with the passed Tokens enclosed in single quotes.
 * @param {...(Token | TokenSeq)[]} tokens - The tokens to create a TokenSeq.
 * @return {TokenSeq} The new TokenSeq.
 */
export function quote(...tokens: (Token | TokenSeq)[]): TokenSeq {
  return seq(T.QUOTE, ...tokens, T.QUOTE);
}

/**
 * Create a new TokenSeq with double quotes. This function creates a new TokenSeq with the passed Tokens enclosed in double quotes.
 * @param {...(Token | TokenSeq)[]} tokens - The tokens to create a TokenSeq.
 * @return {TokenSeq} The new TokenSeq.
 */
export function dquote(...tokens: (Token | TokenSeq)[]): TokenSeq {
  return seq(T.DQUOTE, ...tokens, T.DQUOTE);
}
