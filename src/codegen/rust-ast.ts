export abstract class RustAST {
}

export class Path extends RustAST {
  constructor(public elements: RustAST[]) {
    super()
  }
}

export class UseStmt extends RustAST {
  constructor(public path: Path) {
    super()
  }
}
export class Ident extends RustAST {
  constructor(public text: string) {
    super()
  }
}

export class Ty extends RustAST {
  
}

export class ConstStmt extends RustAST {
  constructor(public ident: Ident, public ty?: RustAST, public value?: RustAST) {
    super() 
  }
}

export class StrLit extends RustAST { 
  constructor(public innerText: string) {
    super()
  }  
}

export class Param extends RustAST {
  constructor(public name: Ident, public ty: RustAST) {
    super()
  }
}

export class FnDefn extends RustAST {
  constructor(
    public name: Ident,
    public params: Param[],
    public returnTy: RustAST
  ) {
    super()
  }
}

export class StructMember extends RustAST {
  constructor(
    public name: Ident,
    public value?: RustAST
  ) {
    super()
  }
}

export class StructExpr extends RustAST {
  constructor(
    public ty: RustAST,
    public members: StructMember[],
  ) {
    super();
  }
}

export class FnCallExpr extends RustAST {
  constructor(
    public fn: RustAST,
    public args: RustAST[],
  ) {
    super();
  }
}

export class RefExpr extends RustAST {
  constructor(
    public arg: RustAST
  ) {
    super()
  }
}

export class UnwrapExpr extends RustAST {
  constructor(
    public arg: RustAST
  ) {
    super()
  }
}

export class DotExpr extends RustAST {
  constructor(
    public lhs: RustAST,
    public rhs: RustAST
  ) {
    super()
  }
}

export class DColExpr extends RustAST {
  constructor(
    public lhs: RustAST,
    public rhs: RustAST
  ) {
    super()
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
export const params = (kv: { [k: string]: RustAST }) => Object.keys(kv).map((k) => new Param(I(k), kv[k]));

const CRATE = I("crate");

let contract_rs = [
  use(
    path(I("cosmwasm_std"), I("entry_point"))
  ),
  use(
    path(I("cosmwasm_std"), [
      I("to_binary"),
      I("Binary"),
      I("Deps"),
      I("DepsMut"),
      I("Env"),
      I("MessageInfo"),
      I("Response"),
      I("StdResult")
    ])
  ),
  use(
    path(I("cw2"), I("set_contract_version"))
  ),
  use(
    path(I("crate"), I("error"), I("ContractError"))
  ),
  use(
    path(I("crate"), I("msg"), [
      I("ExecuteMsg"),
      I("GetCountResponse"),
      I("InstantiateMsg"),
      I("QueryMsg")
    ])
  ),
  use(
    path(I("crate"), I("state"), [
      I("State"),
      I("STATE")
    ])
  ),
  new FnDefn(
    I("instantiate"),
    params({
      deps: I("DepsMut"),
      _env: I("Env"),
      info: I("MessageInfo"),
    }),
    I("Result")
  )
];


let contract_rs = R.stmts([  
  R.use(
    R.path("cosmwasm_std", "entry_point")
  ).attr("cfg(not(feature = \"library\"))"),
  R.use(
    R.path("cosmwasm_std", ["to_binary", "Binary", "Deps", "DepsMut", "Env", "MessageInfo", "Response", "StdResult"])
  ),
  R.use(
    R.path("cw2", "set_contract_version")
  ),
  R.use(
    R.path(R.CRATE, "error", "ContractError"), 
  ),
  R.use(
    R.path(R.CRATE, "msg", ["ExecuteMsg", "GetCountResponse", "InstantiateMsg", "QueryMsg"])
  ),
  R.use(
    R.path(R.CRATE, "state", ["State", "STATE"])
  ),
  R.defconst({
    symbol: "CONTRACT_NAME",
    ty: R.ref(R.ty("str")),
    value: R.str("crates.io:cw-template"),
  }),
  R.defconst({
    symbol: "CONTRACT_VERSION",
    ty: R.ref(R.ty("str")),
    value: R.
  })
])
