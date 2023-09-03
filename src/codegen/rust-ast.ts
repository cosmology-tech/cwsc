// Abstract base class for all Rust AST nodes
export abstract class RustAST {
  abstract render(): string;
}

// Identifier node
export class Ident extends RustAST {
  constructor(public text: string) {
    super();
  }

  render(): string {
    return this.text;
  }
}

// String literal node
export class StrLit extends RustAST {
  constructor(public innerText: string) {
    super();
  }

  render(): string {
    return `"${this.innerText}"`;
  }
}

// Path node, represents a sequence of identifiers
export class Path extends RustAST {
  constructor(public elements: RustAST[]) {
    super();
  }

  render(): string {
    return this.elements.map((e) => e.render()).join('::');
  }
}

// PathSet node, represents a set of paths
export class PathSet extends RustAST {
  constructor(public elements: RustAST[]) {
    super();
  }

  render(): string {
    return `{ ${this.elements.map((e) => e.render()).join(', ')} }`;
  }
}

// Use statement node
export class UseStmt extends RustAST {
  constructor(public path: Path) {
    super();
  }

  render(): string {
    return `use ${this.path.render()};`;
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

  render(): string {
    // if ty is not provided, infer it from value
    let res = `const ${this.ident.render()}`;
    if (this.ty) {
      res += `: ${this.ty.render()}`;
    }
    if (this.value) {
      res += ` = ${this.value.render()}`;
    }
    res += ';';
    return res;
  }
}

// Function parameter node
export class Param extends RustAST {
  constructor(public name: Ident, public ty: RustAST) {
    super();
  }

  render(): string {
    return `${this.name.render()}: ${this.ty.render()}`;
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

  render(): string {
    return `fn ${this.name.render()}(${this.params
      .map((p) => p.render())
      .join(', ')}) -> ${this.returnTy.render()} {
      ${this.body.map((b) => b.render()).join('\n')}}`;
  }
}

// Struct member node
export class StructMember extends RustAST {
  constructor(public name: Ident, public value?: RustAST) {
    super();
  }

  render(): string {
    if (this.value) {
      return `${this.name.render()}: ${this.value.render()}`;
    } else {
      return this.name.render();
    }
  }
}

// Struct expression node
export class StructExpr extends RustAST {
  constructor(public ty: RustAST, public members: StructMember[]) {
    super();
  }

  render(): string {
    return `${this.ty.render()} {
      ${this.members.map((m) => m.render()).join(',\n')}
    }`;
  }
}

// Function call expression node
export class FnCallExpr extends RustAST {
  constructor(public fn: RustAST, public args: RustAST[]) {
    super();
  }

  render(): string {
    return `${this.fn.render()}(${this.args
      .map((a) => a.render())
      .join(', ')})`;
  }
}

// Reference expression node
export class RefExpr extends RustAST {
  constructor(public arg: RustAST) {
    super();
  }

  render(): string {
    return `&${this.arg.render()}`;
  }
}

// Unwrap expression node
export class UnwrapExpr extends RustAST {
  constructor(public arg: RustAST) {
    super();
  }

  render(): string {
    return `${this.arg.render()}?`;
  }
}

// Dot expression node
export class DotExpr extends RustAST {
  constructor(public lhs: RustAST, public rhs: RustAST) {
    super();
  }

  render(): string {
    return `${this.lhs.render()}.${this.rhs.render()}`;
  }
}

// Double colon expression node
export class DColExpr extends RustAST {
  constructor(public lhs: RustAST, public rhs: RustAST) {
    super();
  }

  render(): string {
    return `${this.lhs.render()}::${this.rhs.render()}`;
  }
}

// Source file node, represents a complete Rust source file
export class SourceFile extends RustAST {
  constructor(public elements: RustAST[]) {
    super();
  }

  render(): string {
    return this.elements.map((e) => e.render()).join('\n');
  }
}

// Let statement node
export class LetStmt extends RustAST {
  constructor(public name: Ident, public value: RustAST) {
    super();
  }

  render(): string {
    return `let ${this.name.render()} = ${this.value.render()};`;
  }
}

// Match statement node
export class MatchStmt extends RustAST {
  constructor(public expr: RustAST, public arms: MatchArm[]) {
    super();
  }

  render(): string {
    return `match ${this.expr.render()} {
      ${this.arms.map((a) => a.render()).join(',\n')}
    }`;
  }
}

// Match arm node
export class MatchArm extends RustAST {
  constructor(public pattern: RustAST, public body: RustAST) {
    super();
  }

  render(): string {
    return `${this.pattern.render()} => ${this.body.render()},`;
  }
}

// Module definition node
export class ModDefn extends RustAST {
  constructor(public name: Ident, public body: RustAST[]) {
    super();
  }

  render(): string {
    return `mod ${this.name.render()} {
      ${this.body.map((b) => b.render()).join('\n')}
    }`;
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

  render(): string {
    return `|${this.params
      .map((p) => p.render())
      .join(', ')}| -> ${this.returnTy.render()} {
      ${this.body.map((b) => b.render()).join('\n')}
    }`;
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

  render(): string {
    let res = `if ${this.condition.render()} {
      ${this.thenBranch.map((b) => b.render()).join('\n')}
    }`;
    if (this.elseBranch.length > 0) {
      res += ` else {
        ${this.elseBranch.map((b) => b.render()).join('\n')}
      }`;
    }
    return res;
  }
}

// Binary operation expression node
export class BinOpExpr extends RustAST {
  constructor(public lhs: RustAST, public op: string, public rhs: RustAST) {
    super();
  }

  render(): string {
    return `${this.lhs.render()} ${this.op} ${this.rhs.render()}`;
  }
}

// None expression node
export class NoneExpr extends RustAST {
  constructor() {
    super();
  }

  render(): string {
    return `None`;
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

function noneExpr(): NoneExpr {
  return new NoneExpr();
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
