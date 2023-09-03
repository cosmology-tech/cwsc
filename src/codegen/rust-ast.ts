import {
  TokenSeq,
  T,
  Text,
  Sym,
  Token,
  indent,
  quote,
  dquote,
  braces,
  angles,
  parens,
  spaced,
  csl,
  seq,
  compose,
} from './code-tokens';

import { CodeWriter } from './code-writer';

// Abstract base class for all Rust AST nodes
export abstract class RustAST {
  abstract render(): TokenSeq;
}

// Identifier node
export class Ident extends RustAST {
  constructor(public text: string) {
    super();
  }

  render(): TokenSeq {
    return new Text(this.text).toSeq();
  }
}

// String literal node
export class StrLit extends RustAST {
  constructor(public innerText: string) {
    super();
  }

  render(): TokenSeq {
    return new Text('"' + this.innerText + '"').toSeq();
  }
}

// Path node, represents a sequence of identifiers
export class Path extends RustAST {
  constructor(public elements: RustAST[]) {
    super();
    if (
      this.elements[0] instanceof Root &&
      this.elements.length > 1 &&
      !(this.elements[1] instanceof Ident)
    ) {
      throw new Error('Root must be the first element if it is root');
    }
  }

  render(): TokenSeq {
    return compose(
      { between: T.DCOLON },
      ...this.elements.map((e) => e.render())
    );
  }
}

export class Root extends RustAST {
  render(): TokenSeq {
    return TokenSeq.EMPTY;
  }
}

export class PathSet extends RustAST {
  constructor(public elements: RustAST[]) {
    super();
  }

  render(): TokenSeq {
    return braces(indent(csl(...this.elements.map((x) => x.render()))));
  }
}

export class Generic extends RustAST {
  constructor(public elements: RustAST[]) {
    super();
  }

  render(): TokenSeq {
    return angles(...this.elements.map((e) => e.render()));
  }
}

export class Wildcard extends RustAST {
  render(): TokenSeq {
    return new Text('*').toSeq();
  }
}

// Use statement node
export class UseStmt extends RustAST {
  constructor(public path: Path) {
    super();
  }

  render(): TokenSeq {
    return seq(T.kw('use'), T.SPACE, this.path.render(), T.SEMI);
  }
}

// Constant statement node
export class ConstStmt extends RustAST {
  constructor(
    public ident: Ident,
    public ty?: RustAST,
    public value?: RustAST
  ) {
    super();
  }

  render(): TokenSeq {
    let res = new TokenSeq(T.kw('const'), T.SPACE, this.ident.render());
    if (this.ty) {
      res = res.append(T.SPACE, T.COLON, T.SPACE, this.ty.render());
    }
    if (this.value) {
      res = res.append(T.SPACE, T.EQ, T.SPACE, this.value.render());
    }
    return res.append(T.SEMI);
  }
}

// Function parameter node
export class Param extends RustAST {
  constructor(public name: Ident, public ty: RustAST) {
    super();
  }

  render(): TokenSeq {
    return seq(this.name.render(), T.COLON, T.SPACE, this.ty.render());
  }
}

// Function definition node
export class FnDefn extends RustAST {
  constructor(
    public name: Ident,
    public params: Param[],
    public returnTy: RustAST,
    public body: RustAST[] = []
  ) {
    super();
  }

  render(): TokenSeq {
    return seq(
      T.kw('fn'),
      T.SPACE,
      this.name.render(),
      parens(csl(...this.params.map((p) => p.render()))),
      T.SPACE,
      T.ARROW,
      T.SPACE,
      this.returnTy.render(),
      T.SPACE,
      braces(...this.body.map((b) => b.render()))
    );
  }
}

// Struct member node
export class StructMember extends RustAST {
  constructor(public name: Ident, public value?: RustAST) {
    super();
  }

  render(): TokenSeq {
    let res = this.name.render();
    if (this.value) {
      res = res.append(T.COLON, T.SPACE, this.value.render());
    }
    return res;
  }
}

// Struct expression node
export class StructExpr extends RustAST {
  constructor(public ty: RustAST, public members: StructMember[]) {
    super();
  }

  render(): TokenSeq {
    return seq(
      this.ty.render(),
      T.SPACE,
      braces(csl(...this.members.map((m) => m.render())))
    );
  }
}

// Function call expression node
export class FnCallExpr extends RustAST {
  constructor(public fn: RustAST, public args: RustAST[]) {
    super();
  }

  render(): TokenSeq {
    return seq(
      this.fn.render(),
      parens(csl(...this.args.map((a) => a.render())))
    );
  }
}

// Reference expression node
export class RefExpr extends RustAST {
  constructor(public arg: RustAST) {
    super();
  }

  render(): TokenSeq {
    return this.arg.render().prepend(T.AMP);
  }
}

// Unwrap expression node
export class UnwrapExpr extends RustAST {
  constructor(public arg: RustAST) {
    super();
  }

  render(): TokenSeq {
    return this.arg.render().append(T.QUESTION);
  }
}

// Dot expression node
export class DotExpr extends RustAST {
  constructor(public lhs: RustAST, public rhs: RustAST) {
    super();
  }

  render(): TokenSeq {
    return seq(this.lhs.render(), T.DOT, this.rhs.render());
  }
}

// Double colon expression node
export class DColExpr extends RustAST {
  constructor(public lhs: RustAST, public rhs: RustAST) {
    super();
  }

  render(): TokenSeq {
    return seq(this.lhs.render(), T.DCOLON, this.rhs.render());
  }
}

// Source file node, represents a complete Rust source file
export class SourceFile extends RustAST {
  constructor(public elements: RustAST[]) {
    super();
  }

  render(): TokenSeq {
    return compose({ between: T.NL }, ...this.elements.map((e) => e.render()));
  }
}

// Let statement node
export class LetStmt extends RustAST {
  constructor(public name: Ident, public value: RustAST) {
    super();
  }

  render(): TokenSeq {
    return seq(
      T.kw('let'),
      T.SPACE,
      this.name.render(),
      T.SPACE,
      T.EQ,
      T.SPACE,
      this.value.render(),
      T.SEMI
    );
  }
}

// Match statement node
export class MatchStmt extends RustAST {
  constructor(public expr: RustAST, public arms: MatchArm[]) {
    super();
  }

  render(): TokenSeq {
    return seq(
      T.kw('match'),
      T.SPACE,
      this.expr.render(),
      T.SPACE,
      braces(csl(...this.arms.map((a) => a.render())))
    );
  }
}

// Match arm node
export class MatchArm extends RustAST {
  constructor(public pattern: RustAST, public body: RustAST) {
    super();
  }

  render(): TokenSeq {
    return seq(this.pattern.render(), T.FAT_ARROW, T.SPACE, this.body.render());
  }
}

// Module definition node
export class ModDefn extends RustAST {
  constructor(public name: Ident, public body: RustAST[]) {
    super();
  }

  render(): TokenSeq {
    return seq(
      T.kw('mod'),
      T.SPACE,
      this.name.render(),
      T.SPACE,
      braces(indent(csl(...this.body.map((b) => b.render()))))
    );
  }
}

// Closure expression node
export class ClosureExpr extends RustAST {
  constructor(
    public params: Param[],
    public returnTy: RustAST,
    public body: RustAST[]
  ) {
    super();
  }

  render(): TokenSeq {
    return seq(
      T.PIPE,
      csl(...this.params.map((p) => p.render())),
      T.PIPE,
      T.SPACE,
      T.ARROW,
      T.SPACE,
      this.returnTy.render(),
      T.SPACE,
      braces(...this.body.map((b) => b.render()))
    );
  }
}

// If statement node
export class IfStmt extends RustAST {
  constructor(
    public condition: RustAST,
    public thenBranch: RustAST[],
    public elseBranch: RustAST[] = []
  ) {
    super();
  }

  render(): TokenSeq {
    let res = seq(
      T.kw('if'),
      T.SPACE,
      this.condition.render(),
      T.SPACE,
      braces(...this.thenBranch.map((b) => b.render()))
    );
    if (this.elseBranch.length > 0) {
      res = res.append(
        T.SPACE,
        T.kw('else'),
        T.SPACE,
        braces(...this.elseBranch.map((b) => b.render()))
      );
    }
    return res;
  }
}

// Binary operation expression node
export class BinOpExpr extends RustAST {
  constructor(public lhs: RustAST, public op: string, public rhs: RustAST) {
    super();
  }

  render(): TokenSeq {
    return seq(
      this.lhs.render(),
      T.SPACE,
      new Sym(this.op),
      T.SPACE,
      this.rhs.render()
    );
  }
}

// Array expression node
export class ArrayExpr extends RustAST {
  constructor(public elements: RustAST[]) {
    super();
  }

  render(): TokenSeq {
    return seq(
      T.LBRACKET,
      csl(...this.elements.map((e) => e.render())),
      T.RBRACKET
    );
  }
}

// Tuple expression node
export class TupleExpr extends RustAST {
  constructor(public elements: RustAST[]) {
    super();
  }

  render(): TokenSeq {
    return seq(
      T.LPAREN,
      csl(...this.elements.map((e) => e.render())),
      T.RPAREN
    );
  }
}
// Shortcut functions
export function I(text: string): Ident {
  return new Ident(text);
}

export function strLit(innerText: string): StrLit {
  return new StrLit(innerText);
}

export function path(...elements: RustAST[]): Path {
  return new Path(elements);
}

export function set(...elements: RustAST[]): PathSet {
  return new PathSet(elements);
}

export function useStmt(path: Path): UseStmt {
  return new UseStmt(path);
}

export function constStmt(ident: Ident, value?: RustAST): ConstStmt {
  return new ConstStmt(ident, undefined, value);
}

export function param(name: Ident, ty: RustAST): Param {
  return new Param(name, ty);
}

export function fnDefn(
  name: Ident,
  params: Param[],
  returnTy: RustAST,
  body: RustAST[] = []
): FnDefn {
  return new FnDefn(name, params, returnTy, body);
}

export function structMember(name: Ident, value?: RustAST): StructMember {
  return new StructMember(name, value);
}

export function structExpr(ty: RustAST, members: StructMember[]): StructExpr {
  return new StructExpr(ty, members);
}

export function fnCallExpr(fn: RustAST, args: RustAST[]): FnCallExpr {
  return new FnCallExpr(fn, args);
}

export function refExpr(arg: RustAST): RefExpr {
  return new RefExpr(arg);
}

export function dotExpr(lhs: RustAST, rhs: RustAST): DotExpr {
  return new DotExpr(lhs, rhs);
}

export function dColExpr(lhs: RustAST, rhs: RustAST): DColExpr {
  return new DColExpr(lhs, rhs);
}

export function letStmt(name: Ident, value: RustAST): LetStmt {
  return new LetStmt(name, value);
}

export function matchStmt(expr: RustAST, arms: MatchArm[]): MatchStmt {
  return new MatchStmt(expr, arms);
}

export function matchArm(pattern: RustAST, body: RustAST): MatchArm {
  return new MatchArm(pattern, body);
}

export function modDefn(name: Ident, body: RustAST[]): ModDefn {
  return new ModDefn(name, body);
}

export function closureExpr(
  params: Param[],
  returnTy: RustAST,
  body: RustAST[]
): ClosureExpr {
  return new ClosureExpr(params, returnTy, body);
}

export function ifStmt(
  condition: RustAST,
  thenBranch: RustAST[],
  elseBranch: RustAST[] = []
): IfStmt {
  return new IfStmt(condition, thenBranch, elseBranch);
}

export function binOpExpr(lhs: RustAST, op: string, rhs: RustAST): BinOpExpr {
  return new BinOpExpr(lhs, op, rhs);
}

export function file(...elements: RustAST[]): SourceFile {
  return new SourceFile(elements);
}

export function unwrapExpr(arg: RustAST): UnwrapExpr {
  return new UnwrapExpr(arg);
}
export function use(...elements: RustAST[]): UseStmt {
  return new UseStmt(path(...elements));
}

let contract_rs = file(
  use(path(I('cosmwasm_std'), I('entry_point'))),
  use(
    path(
      I('cosmwasm_std'),
      set(
        I('to_binary'),
        I('Binary'),
        I('Deps'),
        I('DepsMut'),
        I('Env'),
        I('MessageInfo'),
        I('Response'),
        I('StdResult')
      )
    )
  ),
  use(path(I('cw2'), I('set_contract_version'))),
  use(path(I('error'), I('ContractError'))),
  use(
    path(
      I('msg'),
      set(
        I('ExecuteMsg'),
        I('GetCountResponse'),
        I('InstantiateMsg'),
        I('QueryMsg')
      )
    )
  ),
  use(path(I('state'), set(I('State'), I('STATE')))),
  constStmt(I('CONTRACT_NAME'), strLit('crates.io:cw-template')),
  constStmt(
    I('CONTRACT_VERSION'),
    fnCallExpr(I('env'), [strLit('CARGO_PKG_VERSION')])
  ),
  modDefn(I('contract'), [constStmt(I('COUNT_KEY'), strLit('count'))])
);

console.log(new CodeWriter().write(contract_rs.render()));
