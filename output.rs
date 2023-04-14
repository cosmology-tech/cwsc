pub mod types {
    use schemars::JsonSchema;
    use serde::{Deserialize, Serialize};
    #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
    pub struct TokenInfo {
        name: ::std::string::String,
        symbol: ::std::string::String,
        decimals: u8,
        total_supply: cosmwasm_std::Uint128,
    }
    #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
    pub struct Cw20Coin {
        address: cosmwasm_std::Addr,
        amount: cosmwasm_std::Uint128,
    }
    #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
    pub struct BalanceResponse {
        balance: cosmwasm_std::Uint128,
    }
    #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
    pub struct TokenInfoResponse {
        token_info: crate::types::TokenInfo,
    }
}
pub mod msg {
    use schemars::JsonSchema;
    use serde::{Deserialize, Serialize};
    #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
    #[serde(rename_all = "snake_case")]
    pub enum ExecuteMsg {
        Transfer {
            recipient: cosmwasm_std::Addr,
            amount: cosmwasm_std::Uint128,
        },
        Burn {
            amount: cosmwasm_std::Uint128,
        },
        SendTest1 {
            contract_addr: cosmwasm_std::Addr,
            amount: cosmwasm_std::Uint128,
            msg: ::std::option::Option<cosmwasm_std::Binary>,
        },
        SendTest2 {
            contract_addr: cosmwasm_std::Addr,
            amount: cosmwasm_std::Uint128,
            msg: cosmwasm_std::Binary,
        },
        SendTest3 {
            contract_addr: cosmwasm_std::Addr,
            amount: cosmwasm_std::Uint128,
            msg: cosmwasm_std::Binary,
        },
        Mint {
            recipient: cosmwasm_std::Addr,
            amount: cosmwasm_std::Uint128,
        },
    }
    #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
    #[serde(rename_all = "snake_case")]
    pub enum QueryMsg {
        Balance { address: cosmwasm_std::Addr },
        TokenInfo {},
    }
}
pub mod state {
    use schemars::JsonSchema;
    use serde::{Deserialize, Serialize};
    pub const TOKEN_INFO: cw_storage_plus::Item<crate::types::TokenInfo> =
        <cw_storage_plus::Item<crate::types::TokenInfo>>::new("token_info");
    pub const BALANCES: cw_storage_plus::Map<cosmwasm_std::Addr, cosmwasm_std::Uint128> =
        <cw_storage_plus::Map<cosmwasm_std::Addr, cosmwasm_std::Uint128>>::new("balances");
}
pub mod error {
    #[derive(thiserror::Error, Debug)]
    pub enum Error {
        #[error("{0}")]
        Std(#[from] cosmwasm_std::StdError),
        #[error("InvalidZeroAmount")]
        InvalidZeroAmount {},
        #[error("Unauthorized")]
        Unauthorized {},
    }
}
pub mod contract {
    use crate::error::ContractError;
    #[cfg(not(feature = "library"))]
    use cosmwasm_std::entry_point;
    use cosmwasm_std::{to_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult};
    #[cfg(not(feature = "library"), entry_point)]
    pub fn instantiate(
        __deps: cosmwasm_std::DepsMut,
        __env: cosmwasm_std::Env,
        __info: cosmwasm_std::MessageInfo,
        __msg: crate::msg::InstantiateMsg,
    ) -> ::std::result::Result<cosmwasm_std::Response, crate::error::ContractError> {
        let mut total_supply;
        let mut forin_struct;
        let mut assign;
    }
    #[cfg(not(feature = "library"), entry_point)]
    pub fn execute(
        __deps: cosmwasm_std::DepsMut,
        __env: cosmwasm_std::Env,
        __info: cosmwasm_std::MessageInfo,
        __msg: crate::msg::ExecuteMsg,
    ) -> ::std::result::Result<cosmwasm_std::Response, crate::error::ContractError> {
        match (__msg) {
            Transfer { recipient, amount } => {
                exec_transfer(__deps, __env, __info, recipient, amount)
            }
            Burn { amount } => exec_burn(__deps, __env, __info, amount),
            SendTest1 {
                contract_addr,
                amount,
                msg,
            } => exec_send_test_1(__deps, __env, __info, contract_addr, amount, msg),
            SendTest2 {
                contract_addr,
                amount,
                msg,
            } => exec_send_test_2(__deps, __env, __info, contract_addr, amount, msg),
            SendTest3 {
                contract_addr,
                amount,
                msg,
            } => exec_send_test_3(__deps, __env, __info, contract_addr, amount, msg),
            Mint { recipient, amount } => exec_mint(__deps, __env, __info, recipient, amount),
            Balance { address } => query_balance(__deps, __env, address),
            TokenInfo {} => query_token_info(__deps, __env),
        }
    }
    #[cfg(not(feature = "library"), entry_point)]
    pub fn query(
        __deps: cosmwasm_std::Deps,
        __env: cosmwasm_std::Env,
        __msg: crate::msg::QueryMsg,
    ) -> cosmwasm_std::StdResult<cosmwasm_std::Binary> {
        match (__msg) {}
    }
}
