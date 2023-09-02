let R = {};

export interface UseStmt {
  attr =   
}

export type HasAttr<T> = T & { attr?: Attr };

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
