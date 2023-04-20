import {
  ContractInstance,
  CWScriptInterpreter,
  Env,
} from '../../src/interpreter';
import {
  ContractDefn,
  ContractReference,
  CWSString,
  STDLIB,
  StringT,
  AddressT,
  None,
  U8_T,
  U128_T,
  IntT,
  args,
  InterfaceDefn,
  StructDefn,
  ListT,
  FnDefn,
} from '../../src/stdlib';
import { CWScriptParser } from '../../src/parser';
import * as fs from 'fs';

const EXAMPLES_DIR = __dirname + '/../../examples';
const TERRASWAP_TOKEN_FILE = EXAMPLES_DIR + '/terraswap/TerraswapToken.cws';

describe('Interpreter: TerraswapToken', () => {
  it('should be able to parse and interpret a TerraswapToken contract', () => {
    const ast = CWScriptParser.parse(
      fs.readFileSync(TERRASWAP_TOKEN_FILE, 'utf8')
    );

    const interpreter = new CWScriptInterpreter({
      files: {
        [TERRASWAP_TOKEN_FILE]: ast,
      },
      env: STDLIB,
    });

    let TerraswapToken = interpreter.getSymbol<ContractDefn>('TerraswapToken');
    let CW20 = interpreter.getSymbol<InterfaceDefn>('CW20');
    let Coin = CW20.getSymbol<StructDefn>('Coin');
    let CoinList = new ListT(Coin);

    let myAddress = CWSString.TYPE.value(
      'terra1hzh9vpxhsk82503se0vv5jj6etdvxu3nv8z07e'
    );
    let instantiateArgs = args([], {
      name: StringT.value('Terran One Token'),
      symbol: StringT.value('TONE'),
      decimals: U8_T.value(6),
      initial_balances: CoinList.value([
        Coin.value(args([StringT.value('yogesh'), U128_T.value('1000000000')])),
        Coin.value(
          args([StringT.value('william'), U128_T.value('1000000000')])
        ),
      ]),
    });
    let instantiateMsg = TerraswapToken.instantiate(instantiateArgs);
    // call the instantiate implementation

    let env: Env = {
      block: {
        height: 1,
        time: 1,
        chain_id: 'terran-1',
      },
      contract: {
        address: 't1tokenaddr',
      },
    };

    let info = {
      sender: 'william',
      funds: [
        {
          amount: '1000000000',
          denom: 'utone',
        },
      ],
    };

    let myToken = new ContractInstance(interpreter, TerraswapToken);
    let res = myToken.instantiate(env, info, instantiateArgs);
    let res2 = myToken.exec(
      env,
      info,
      'transfer',
      args([], {
        recipient: StringT.value('yogesh'),
        amount: U128_T.value('5000000'),
      })
    );

    expect(TerraswapToken).toBeInstanceOf(ContractDefn);
  });
});
