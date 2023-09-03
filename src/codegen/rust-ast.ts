import {
  TokenSeq,
  T,
  Text,
  Sym,
  Token,
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
    return seq(...this.elements.map((e) => e.render()));
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
    return braces(csl(...this.elements.map((x) => x.render())));
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
      braces(csl(...this.body.map((b) => b.render())))
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

// Shortcut functions
function I(text: string): Ident {
  return new Ident(text);
}

function strLit(innerText: string): StrLit {
  return new StrLit(innerText);
}

function path(...elements: RustAST[]): Path {
  return new Path(elements);
}

function set(...elements: RustAST[]): PathSet {
  return new PathSet(elements);
}

function useStmt(path: Path): UseStmt {
  return new UseStmt(path);
}

function constStmt(ident: Ident, value?: RustAST): ConstStmt {
  return new ConstStmt(ident, undefined, value);
}

function param(name: Ident, ty: RustAST): Param {
  return new Param(name, ty);
}

function fnDefn(
  name: Ident,
  params: Param[],
  returnTy: RustAST,
  body: RustAST[] = []
): FnDefn {
  return new FnDefn(name, params, returnTy, body);
}

function structMember(name: Ident, value?: RustAST): StructMember {
  return new StructMember(name, value);
}

function structExpr(ty: RustAST, members: StructMember[]): StructExpr {
  return new StructExpr(ty, members);
}

function fnCallExpr(fn: RustAST, args: RustAST[]): FnCallExpr {
  return new FnCallExpr(fn, args);
}

function refExpr(arg: RustAST): RefExpr {
  return new RefExpr(arg);
}

function dotExpr(lhs: RustAST, rhs: RustAST): DotExpr {
  return new DotExpr(lhs, rhs);
}

function dColExpr(lhs: RustAST, rhs: RustAST): DColExpr {
  return new DColExpr(lhs, rhs);
}

function letStmt(name: Ident, value: RustAST): LetStmt {
  return new LetStmt(name, value);
}

function matchStmt(expr: RustAST, arms: MatchArm[]): MatchStmt {
  return new MatchStmt(expr, arms);
}

function matchArm(pattern: RustAST, body: RustAST): MatchArm {
  return new MatchArm(pattern, body);
}

function modDefn(name: Ident, body: RustAST[]): ModDefn {
  return new ModDefn(name, body);
}

function closureExpr(
  params: Param[],
  returnTy: RustAST,
  body: RustAST[]
): ClosureExpr {
  return new ClosureExpr(params, returnTy, body);
}

function ifStmt(
  condition: RustAST,
  thenBranch: RustAST[],
  elseBranch: RustAST[] = []
): IfStmt {
  return new IfStmt(condition, thenBranch, elseBranch);
}

function binOpExpr(lhs: RustAST, op: string, rhs: RustAST): BinOpExpr {
  return new BinOpExpr(lhs, op, rhs);
}

function file(...elements: RustAST[]): SourceFile {
  return new SourceFile(elements);
}

function unwrapExpr(arg: RustAST): UnwrapExpr {
  return new UnwrapExpr(arg);
}
function use(...elements: RustAST[]): UseStmt {
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
  fnDefn(
    I('foo'),
    [param(I('T'), path(I('Into'), I('ContractError')))],
    path(I('Result')),
    [fnCallExpr(I('Ok'), [structExpr([])])]
  ),
  fnDefn(
    I('instantiate'),
    [
      param(I('deps'), I('DepsMut')),
      param(I('_env'), I('Env')),
      param(I('info'), I('MessageInfo')),
      param(I('msg'), I('InstantiateMsg')),
    ],
    path(I('Result')),
    [
      letStmt(
        I('state'),
        structExpr([
          structMember(I('count'), dotExpr(I('msg'), I('count'))),
          structMember(
            I('owner'),
            fnCallExpr(dotExpr(I('info'), I('sender')), [I('clone')])
          ),
        ])
      ),
      fnCallExpr(I('set_contract_version'), [
        dotExpr(I('deps'), I('storage')),
        I('CONTRACT_NAME'),
        I('CONTRACT_VERSION'),
      ]),
      fnCallExpr(dotExpr(I('STATE'), I('save')), [
        dotExpr(I('deps'), I('storage')),
        refExpr(I('state')),
      ]),
      letStmt(I('_a'), noneExpr()),
      letStmt(I('_b'), noneExpr()),
      fnCallExpr(I('Ok'), [
        fnCallExpr(I('Response'), [
          fnCallExpr(I('new'), []),
          fnCallExpr(I('add_attribute'), [
            strLit('method'),
            strLit('instantiate'),
          ]),
          fnCallExpr(I('add_attribute'), [
            strLit('owner'),
            dotExpr(I('info'), I('sender')),
          ]),
          fnCallExpr(I('add_attribute'), [
            strLit('count'),
            fnCallExpr(dotExpr(I('msg'), I('count')), [I('to_string')]),
          ]),
        ]),
      ]),
    ]
  ),
  fnDefn(
    I('execute'),
    [
      param(I('deps'), I('DepsMut')),
      param(I('_env'), I('Env')),
      param(I('info'), I('MessageInfo')),
      param(I('msg'), I('ExecuteMsg')),
    ],
    path(I('Result')),
    [
      matchStmt(I('msg'), [
        matchArm(
          structExpr([structMember(I('Increment'))]),
          fnCallExpr(path(I('execute'), I('increment')), [I('deps')])
        ),
        matchArm(
          structExpr([structMember(I('Reset'), I('count'))]),
          fnCallExpr(path(I('execute'), I('reset')), [
            I('deps'),
            I('info'),
            I('count'),
          ])
        ),
      ]),
    ]
  ),
  modDefn(I('execute'), [
    use(path(I('super'))),
    fnDefn(
      I('increment'),
      [param(I('deps'), I('DepsMut'))],
      path(I('Result')),
      [
        fnCallExpr(dotExpr(I('STATE'), I('update')), [
          dotExpr(I('deps'), I('storage')),
          closureExpr([param(I('mut state'), noneExpr())], path(I('Result')), [
            binOpExpr(dotExpr(I('state'), I('count')), '+', I('1')),
            fnCallExpr(I('Ok'), [I('state')]),
          ]),
        ]),
        fnCallExpr(I('Ok'), [
          fnCallExpr(I('Response'), [
            fnCallExpr(I('new'), []),
            fnCallExpr(I('add_attribute'), [
              strLit('action'),
              strLit('increment'),
            ]),
          ]),
        ]),
      ]
    ),
    fnDefn(
      I('reset'),
      [
        param(I('deps'), I('DepsMut')),
        param(I('info'), I('MessageInfo')),
        param(I('count'), I('i32')),
      ],
      path(I('Result')),
      [
        call(dot(I('STATE'), I('update')), [
          dot(I('deps'), I('storage')),
          closure([param(I('mut state'), none())], path(I('Result')), [
            ifStmt(
              op(
                dot(I('info'), I('sender')),
                '!=',
                dot(I('state'), I('owner'))
              ),
              [call(I('Err'), [structExpr([structMember(I('Unauthorized'))])])],
              []
            ),
            op(dot(I('state'), I('count')), '=', I('count')),
            call(I('Ok'), [I('state')]),
          ]),
        ]),
        call(I('Ok'), [
          call(I('Response'), [
            call(I('new'), []),
            call(I('add_attribute'), [strLit('action'), strLit('reset')]),
          ]),
        ]),
      ]
    ),
  ]),
  fnDefn(
    I('query'),
    [
      param(I('deps'), I('Deps')),
      param(I('_env'), I('Env')),
      param(I('msg'), I('QueryMsg')),
    ],
    path(I('StdResult')),
    [
      matchStmt(I('msg'), [
        matchArm(
          structExpr([structMember(I('GetCount'))]),
          call(I('to_binary'), [
            call(path(I('query'), I('count')), [I('deps')]),
          ])
        ),
      ]),
    ]
  ),
  modDefn(I('query'), [
    use(path(I('super'))),
    fnDefn(I('count'), [param(I('deps'), I('Deps'))], path(I('StdResult')), [
      letStmt(
        I('state'),
        call(dot(I('STATE'), I('load')), [dot(I('deps'), I('storage'))])
      ),
      call(I('Ok'), [
        structExpr([structMember(I('count'), dot(I('state'), I('count')))]),
      ]),
    ]),
  ])
);
console.log(contract_rs.render());
