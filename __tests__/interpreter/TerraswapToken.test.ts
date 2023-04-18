import {
  ContractDefn,
  ContractInstance,
  CWScriptInterpreter,
  CWSString,
  STDLIB,
} from '../../src/interpreter';
import { CWScriptParser } from '../../src/parser';
import * as fs from 'fs';

const EXAMPLES_DIR = __dirname + '/../../examples';
const TERRASWAP_TOKEN_FILE = EXAMPLES_DIR + '/terraswap/TerraswapToken.cws';

describe('Interpreter: TerraswapToken', () => {
  it('should be able to parse and interpret a TerraswapToken contract', () => {
    const ast = CWScriptParser.parse(
      fs.readFileSync(TERRASWAP_TOKEN_FILE, 'utf8')
    );

    console.log(ast.$ctx!.text);
    const interpreter = new CWScriptInterpreter({
      files: {
        [TERRASWAP_TOKEN_FILE]: ast,
      },
      env: STDLIB,
    });

    let TerraswapToken = interpreter.getSymbol<ContractDefn>('TerraswapToken');
    let myAddress = CWSString.TYPE.value(
      'terra1hzh9vpxhsk82503se0vv5jj6etdvxu3nv8z07e'
    );
    let myToken = TerraswapToken.value(myAddress);
    console.log(myToken);
    expect(TerraswapToken).toBeDefined();
    expect(TerraswapToken).toBeInstanceOf(ContractDefn);
  });
});
