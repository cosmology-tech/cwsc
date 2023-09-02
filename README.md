# `cwsc`: CWScript Compiler

CWScript is a high-level programming language designed for writing smart contracts on the CosmWasm platform. It is focused on simplifying the process of creating smart contracts while maintaining compatibility with Rust and CosmWasm programming patterns. CWScript enforces a more constrained framework for writing smart contracts, allowing developers to build on a well-defined domain. This approach aims to streamline code organization, composability patterns, and the overall development experience.

cwsc is written in TypeScript and requires Node.js v16 or later.

<!-- TOC -->
* [`cwsc`: CWScript Compiler](#cwsc-cwscript-compiler)
  * [Features](#features)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Examples](#examples)
    * [Hello World](#hello-world)
    * [Simple Token Contract](#simple-token-contract)
    * [Proxy Contract](#proxy-contract)
    * [AtomicOrderExample (Injective Protocol)](#atomicorderexample-injective-protocol)
  * [License](#license)
  * [Copyright](#copyright)
<!-- TOC -->

## Features
- Simplified syntax, reducing syntactic noise and enhancing readability
- High-level translation to idiomatic CosmWasm Rust patterns
- Tooling-first approach, built for seamless integration with existing and new development tools
- Designed to be extensible and compatible with Rust
- Comprehensive documentation to guide you through the CWScript journey


## Installation
**Initial release coming soon. Announcement will be made on official channels.**
##
## Usage
Please refer to the official documentation for a complete guide on how to use CWScript and the cwsc compiler. Discover how to create, compile, and deploy smart contracts, and learn about the unique features of CWScript that simplify development and increase productivity.

## Examples

### Hello World

```rs
contract HelloWorld {
    state {
        greeting: String
    }

    #instantiate(init_greeting: String) {
        $state.greeting = init_greeting
    }

    exec #update_greeting(new_greeting: String) {
        $state.greeting = new_greeting
    }

    query #get_greeting() -> String {
        return $state.greeting
    }
}
```

### Simple Token Contract

```rs
contract MyToken {
    state {
        total_supply: Uint128,
        balances[Address]: Uint128 = 0
    }

    #instantiate(initial_supply: Uint128) {
        let creator = $info.sender
        $state.total_supply = initial_supply
        $state.balances[creator] = initial_supply
    }

    exec #transfer(to: Address, amount: Uint128) {
        let sender = $info.sender
        let sender_balance = $state.balances[sender] ?? Uint128(0)

        assert!(sender_balance >= amount, "Insufficient balance")

        $state.balances[sender] = sender_balance - amount
        $state.balances[to] += amount
    }

    query #balance_of(address: Address) -> Uint128 {
        return $state.balances[address] ?? Uint128(0)
    }

    query #total_supply() -> Uint128 {
        return $state.total_supply
    }
}
```

### Proxy Contract

```rs
import { CW20 } from "standards/cw20"

contract ProxyContract {
    state {
        target_token: Address
    }

    #instantiate(target_token_address: Address) {
        $state.target_token = target_token_address
    }

    exec #transfer_proxy(to: Address, amount: Uint128) {
        let sender = $info.sender

        // Call the transfer method of the target CW20 contract
        exec! CW20($state.target_token).#transfer(to, amount)
    }

    query #balance_of_proxy(address: Address) -> Uint128 {
        // Call the balance_of method of the target CW20 contract
        return query! CW20($state.target_token).#balance_of(address)
    }
}
```

### AtomicOrderExample (Injective Protocol)

```rs
import { SubaccountId, MarketId } from "injective/types"
import { FPDecimal } from "injective/math"
import { CW2 } from "standards/cw2"

const CONTRACT_NAME = "crates.io:atomic-order-example"
const CONTRACT_VERSION = "0.0.1"

contract AtomicOrderExample extends CW2 {

  state {
    config: struct ContractConfigState {
      market_id: MarketId,
      owner: Address,
      contract_subaccount_id: SubaccountId,
      base_denom: String,
      quote_denom: String
    }
    swap_operation_state: struct SwapCacheState {
      sender_address: String,
      deposited_amount: Coin
    }
  }

  #instantiate(
    market_id: MarketId
  ) {

    let market = try {
      query! Exchange.#market(market_id)
    } else fail! "Market with id: {market_id} not found"

    let config = ContractConfigState {
      market_id,
      base_denom: market.base_denom,
      quote_denom: market.quote_denom,
      owner: $info.sender,
      contract_subaccount_id: SubaccountId($env.contract.address, 0),
    }

    CW2.set_contract_version!($, CONTRACT_NAME, CONTRACT_VERSION)

    // we've changed it to "config"
    $state.config = config
    emit event(method="instantiate", owner=$info.sender) // anonymous event
  }

  reply.success handle_atomic_order() {
    let dec_scale_factor = FPDecimal(1000000000000000000)
    let order_response = Exchange.#create_spot_market_order::parse_response!($data)

    let trade_data = order_response.results ?? fail! "No trade data in order response"
    let quantity = FPDecimal!(trade_data.quantity)
    let price = FPDecimal!(trade_data.price)
    let fee = FPDecimal!(trade_data.fee)

    let { config, cache } = $state
    let contract_address = $env.contract.address
    let subaccount_id = config.contract_subaccount_id
    let cache = $state.cache
    let purchased_coins = coin(quantity, config.base_denom)
    let pair = quantity * price + fee
    let leftover = cache.deposited_amount.amount - paid


    exec! Exchange.#withdraw(contract_address, subaccount_id, purchased_coins)
    exec! Exchange.#withdraw(contract_address, subaccount_id, leftover_coins)
    exec! Bank.#send(cache.sender_address, [purchased_coins, leftover_coins])
  }

  exec #swap_spot(quantity: FPDecimal, price: FPDecimal) {
    let { config } = $state
    let contract = $env.contract.address
    let subaccount_id = config.contract_subaccount_id
    let min_deposit = price quantity

    if $info.funds.is_empty() {
      fail! "No funds deposited!"
    }

    let message_deposit = FPDecimal!($info.funds[0].amount)

    if message_deposit < min_deposit {
      fail! "Deposit: {message_deposit} below min_deposit: {min_deposit}"
    }

    let order = SpotOrder(
      price, quantity, OrderType.#BuyAtomic, config.market_id, subaccount_id, contract
    )

    let coins = $info.funds[0]

    $state.swap_operation_state = SwapCacheState($info.sender, coins)

    exec! Exchange.#deposit(contract, subaccount_id, coins)

    @reply.success(handle_atomic_order)
    exec! Exchange.create_spot_market_order(contract, order)
  }

}

Disclaimer:

The software provided herein may contain personal intellectual property that is protected under applicable laws and regulations. The ownership and rights to such intellectual property remain vested in the original creator or rightful owner. By using this software, you acknowledge and agree to the following:

1. Intellectual Property Rights: The software may include, but is not limited to, proprietary algorithms, designs, code, processes, trade secrets, trademarks, patents, and other intellectual property. These intellectual property rights are protected by copyright laws and other relevant intellectual property legislation.

2. Restrictions on Use: You are granted a limited, non-exclusive, non-transferable license to use the software solely for your personal or internal business purposes. You may not modify, distribute, reproduce, reverse engineer, decompile, disassemble, or create derivative works based on the software without the explicit written permission of the owner.

3. No Transfer of Ownership: Your use of the software does not grant you any ownership rights or intellectual property rights in the software. All rights not expressly granted to you are reserved by the owner.

4. No Warranty: The software is provided on an "as-is" basis without any warranties, express or implied. The owner does not guarantee the accuracy, reliability, or performance of the software. You acknowledge that the use of the software is at your own risk, and the owner shall not be liable for any damages or losses arising from the use or inability to use the software.

5. Compliance with Laws: You agree to use the software in compliance with all applicable laws, regulations, and third-party rights. You are solely responsible for obtaining any necessary permissions, licenses, or consents required to use the software.

6. Indemnification: You agree to indemnify, defend, and hold harmless the owner and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses arising out of or in connection with your use of the software, including any breach of this disclaimer.

7. Modifications: The owner reserves the right to modify or update this disclaimer at any time without prior notice. It is your responsibility to review the disclaimer periodically for any changes.

By using this software, you acknowledge that you have read, understood, and agreed to the terms and conditions set forth in this disclaimer. If you do not agree with any part of this disclaimer, please refrain from using the software.

```

## License
CWScript, cwsc, and its bundled toolchain are licensed under the MIT License.

## Copyright

Copyright © 2021-2023 Terran One, Inc.
