import {
  ContractDefn,
  CWScriptInterpreter,
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
    const interpreter = new CWScriptInterpreter({
      files: {
        [TERRASWAP_TOKEN_FILE]: ast,
      },
      env: STDLIB,
    });

    let TerraswapToken = interpreter.getSymbol('TerraswapToken');
    expect(TerraswapToken).toBeDefined();
    expect(TerraswapToken).toBeInstanceOf(ContractDefn);
  });
});
