export class Token {
  public text: string;
  constructor(arg: string | Token | Token[] | TokenSeq) {
    if (typeof arg === 'string') {
      this.text = arg;
    } else if (arg instanceof Token) {
      this.text = arg.text;
    } else if (arg instanceof Array) {
      this.text = arg.map((t) => t.text).join('');
    } else if (arg instanceof TokenSeq) {
      this.text = arg.tokens.map((t) => t.text).join('');
    } else {
      throw new Error(`Invalid token: ${arg}`);
    }
  }

  append(...tokens: (Token | TokenSeq)[]) {
    return new TokenSeq(this, ...tokens);
  }

  prepend(...tokens: (Token | TokenSeq)[]) {
    return new TokenSeq(...tokens, this);
  }

  toSeq() {
    return new TokenSeq(this);
  }
}

export class Text extends Token {
  constructor(public text: string) {
    super(text);
  }
}

export class Sym extends Text {}

export class Keyword extends Text {}

export const T = {
  LPAREN: new Sym('('),
  RPAREN: new Sym(')'),
  LBRACE: new Sym('{'),
  RBRACE: new Sym('}'),
  LBRACKET: new Sym('['),
  RBRACKET: new Sym(']'),
  LT: new Sym('<'),
  GT: new Sym('>'),
  SPACE: new Sym(' '),
  TAB: new Sym('\t'),
  NL: new Sym('\n'),
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
};

export class TokenSeq {
  public tokens: Token[];
  constructor(...tokens: (Token | TokenSeq)[]) {
    this.tokens = tokens
      .map((t) => (t instanceof TokenSeq ? t.tokens : t))
      .flat();
  }

  toToken() {
    return new Token(this);
  }

  prepend(...tokens: (Token | TokenSeq)[]) {
    return new TokenSeq(...tokens, ...this.tokens);
  }

  append(...tokens: (Token | TokenSeq)[]) {
    return new TokenSeq(...this.tokens, ...tokens);
  }

  static EMPTY = new TokenSeq();
}

export function seq(...tokens: (Token | TokenSeq)[]) {
  return new TokenSeq(...tokens);
}

export function spaced(...tokens: (Token | TokenSeq)[]) {
  return new TokenSeq(T.SPACE, ...tokens, T.SPACE);
}

export interface ComposeOptions {
  before?: Token | TokenSeq;
  between?: Token | TokenSeq;
  after?: Token | TokenSeq;
}

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

// comma-separated list
export function csl(...tokens: (Token | TokenSeq)[]): TokenSeq {
  return compose({ between: seq(T.COMMA, T.SPACE) }, ...tokens);
}

export function braces(...tokens: (Token | TokenSeq)[]): TokenSeq {
  return seq(T.LBRACE, ...tokens, T.RBRACE);
}

export function brackets(...tokens: (Token | TokenSeq)[]): TokenSeq {
  return seq(T.LBRACKET, ...tokens, T.RBRACKET);
}

export function parens(...tokens: (Token | TokenSeq)[]): TokenSeq {
  return seq(T.LPAREN, ...tokens, T.RPAREN);
}

export function angles(...tokens: (Token | TokenSeq)[]): TokenSeq {
  return seq(T.LT, ...tokens, T.GT);
}

export function quote(...tokens: (Token | TokenSeq)[]): TokenSeq {
  return seq(T.QUOTE, ...tokens, T.QUOTE);
}

export function dquote(...tokens: (Token | TokenSeq)[]): TokenSeq {
  return seq(T.DQUOTE, ...tokens, T.DQUOTE);
}
