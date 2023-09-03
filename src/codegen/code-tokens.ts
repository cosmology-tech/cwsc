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

  append(...tokens: (Token | Token[] | TokenSeq)[]) {
    return new TokenSeq(this, ...tokens);
  }

  prepend(...tokens: (Token | Token[] | TokenSeq)[]) {
    return new TokenSeq(...tokens, this);
  }
}

export class Text extends Token {
  constructor(public text: string) {
    super(text);
  }
}

export class Sym extends Text {}

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
};

export class TokenSeq {
  public tokens: Token[];
  constructor(...tokens: (Token | Token[] | TokenSeq)[]) {
    this.tokens = [];
    for (const token of tokens) {
      if (token instanceof TokenSeq) {
        this.tokens.push(...token.tokens);
      } else if (token instanceof Array) {
        this.tokens.push(...token);
      } else {
        this.tokens.push(token);
      }
    }
  }

  prepend(...tokens: (Token | Token[] | TokenSeq)[]) {
    return new TokenSeq(...tokens, ...this.tokens);
  }

  append(...tokens: (Token | Token[] | TokenSeq)[]) {
    return new TokenSeq(...this.tokens, ...tokens);
  }
}

export function sp(...tokens: (Token | Token[] | TokenSeq)[]) {
  return new TokenSeq(T.SPACE, ...tokens, T.SPACE);
}

export function braces(...tokens: (Token | Token[] | TokenSeq)[]) {
  return new TokenSeq(T.LBRACE, ...tokens, T.RBRACE);
}

export function brackets(...tokens: (Token | Token[] | TokenSeq)[]) {
  return new TokenSeq(T.LBRACKET, ...tokens, T.RBRACKET);
}

export function parens(...tokens: (Token | Token[] | TokenSeq)[]) {
  return new TokenSeq(T.LPAREN, ...tokens, T.RPAREN);
}

export function angles(...tokens: (Token | Token[] | TokenSeq)[]) {
  return new TokenSeq(T.LT, ...tokens, T.GT);
}
