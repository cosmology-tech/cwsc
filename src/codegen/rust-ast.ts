export abstract class RustAST {
  abstract render(): string;
}

export class SourceFile extends RustAST {
  constructor(public elements: RustAST[]) {
    super();
  }

  render(): string {
    return this.elements.map((e) => e.render()).join('\n');
  }
}

export class Path extends RustAST {
  constructor(public elements: RustAST[]) {
    super();
  }

  render(): string {
    return this.elements.map((e) => e.render()).join('::');
  }
}

export class PathSet extends RustAST {
  constructor(public elements: RustAST[]) {
    super();
  }

  render(): string {
    return `{ ${this.elements.map((e) => e.render()).join(', ')} }`;
  }
}

export class UseStmt extends RustAST {
  constructor(public path: Path) {
    super();
  }

  render(): string {
    return `use ${this.path.render()};`;
  }
}

export class Ident extends RustAST {
  constructor(public text: string) {
    super();
  }

  render(): string {
    return this.text;
  }
}

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

export class StrLit extends RustAST {
  constructor(public innerText: string) {
    super();
  }

  render(): string {
    return `"${this.innerText}"`;
  }
}

export class Param extends RustAST {
  constructor(public name: Ident, public ty: RustAST) {
    super();
  }

  render(): string {
    return `${this.name.render()}: ${this.ty.render()}`;
  }
}

export class FnDefn extends RustAST {
  constructor(
    public name: Ident,
    public params: Param[],
    public returnTy: RustAST
  ) {
    super();
  }

  render(): string {
    return `fn ${this.name.render()}(${this.params
      .map((p) => p.render())
      .join(', ')}) -> ${this.returnTy.render()}`;
  }
}

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

export class RefExpr extends RustAST {
  constructor(public arg: RustAST) {
    super();
  }

  render(): string {
    return `&${this.arg.render()}`;
  }
}

export class UnwrapExpr extends RustAST {
  constructor(public arg: RustAST) {
    super();
  }

  render(): string {
    return `${this.arg.render()}?`;
  }
}

export class DotExpr extends RustAST {
  constructor(public lhs: RustAST, public rhs: RustAST) {
    super();
  }

  render(): string {
    return `${this.lhs.render()}.${this.rhs.render()}`;
  }
}

export class DColExpr extends RustAST {
  constructor(public lhs: RustAST, public rhs: RustAST) {
    super();
  }

  render(): string {
    return `${this.lhs.render()}::${this.rhs.render()}`;
  }
}

export const dot = (lhs: RustAST, rhs: RustAST) => new DotExpr(lhs, rhs);
export const dcol = (lhs: RustAST, rhs: RustAST) => new DColExpr(lhs, rhs);
export const q = (arg: any) => new UnwrapExpr(arg);
export const ref = (arg: any) => new RefExpr(arg);
export const call = (fn: any, args: any) => new FnCallExpr(fn, args);
export const struct = (ty: any, members: any) => new StructExpr(ty, members);
export const path = (...els: any[]) => new Path(els);
export const use = (path: any) => new UseStmt(path);
export const I = (text: string) => new Ident(text);
export const params = (kv: { [k: string]: RustAST }) =>
  Object.keys(kv).map((k) => new Param(I(k), kv[k]));
export const file = (...els: any[]) => new SourceFile(els);
export const set = (...els: any[]) => new PathSet(els);

const CRATE = I('crate');

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
  use(path(I('crate'), I('error'), I('ContractError'))),
  use(
    path(
      I('crate'),
      I('msg'),
      set(
        I('ExecuteMsg'),
        I('GetCountResponse'),
        I('InstantiateMsg'),
        I('QueryMsg')
      )
    )
  ),
  use(path(I('crate'), I('state'), set(I('State'), I('STATE')))),
  new FnDefn(
    I('instantiate'),
    params({
      deps: I('DepsMut'),
      _env: I('Env'),
      info: I('MessageInfo'),
    }),
    I('Result')
  )
);

console.log(contract_rs.render());
