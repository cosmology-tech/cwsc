import { CWScriptInterpreter } from '../../src/interpreter';
import {
  ContractDefn,
  ContractInstance,
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
      name: StringT.value('My Token'),
      symbol: StringT.value('MYT'),
      decimals: U8_T.value(6),
      initial_balances: CoinList.value([
        Coin.value(
          args([
            StringT.value('terra1hzh9vpxhsk82503se0vv5jj6etdvxu3nv8z07e'),
            U128_T.value(1000000),
          ])
        ),
      ]),
    });
    let instantiateMsg = TerraswapToken.instantiate(instantiateArgs);
    let myToken = TerraswapToken.value(AddressT.value(myAddress));
    // call the instantiate implementation
    let instantiateImpl = TerraswapToken.getSymbol<FnDefn>('#instantiate#impl');
    let res = interpreter.callFn(instantiateImpl, instantiateArgs);

    expect(TerraswapToken).toBeDefined();
    expect(TerraswapToken).toBeInstanceOf(ContractDefn);
  });
});
