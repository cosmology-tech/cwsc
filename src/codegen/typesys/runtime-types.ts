import { TypeFields, TypeNode } from './typenode';
import { Nullish, Vector } from '../nodes/generics';

export const BoolType = new TypeNode('bool', 'bool');
export const VoidType = new TypeNode('()', '()');
export const AddrType = new TypeNode('Addr', 'cosmwasm_std::Addr');

export class UintTypeNode extends TypeNode {
  constructor(public bits: number) {
    super(`Uint${bits}`);
    if (![8, 16, 32, 64, 128, 256, 512].includes(bits))
      throw Error(`Invalid Uint bits: ${bits}`);
  }
  
  get rustname(): string {
    if ([8, 16, 32].includes(this.bits))
      return 'u' + this.bits;
    return `cosmwasm_std::Uint${this.bits}`;
  }
}
export const Uint8Type = new UintTypeNode(8);
export const Uint16Type = new UintTypeNode(16);
export const Uint32Type = new UintTypeNode(32);
export const Uint64Type = new UintTypeNode(64);
export const Uint128Type = new UintTypeNode(128);
export const Uint256Type = new UintTypeNode(256);
export const Uint512Type = new UintTypeNode(512);

export class DecimalTypeNode extends TypeNode {
  constructor(public bits: number) {
    super(`Decimal${bits}`);
    if (![128, 256].includes(bits))
      throw Error(`Invalid Decimal bits: ${bits}`);
  }
  
  get rustname(): string {
    if (this.bits === 128)
      return 'cosmwasm_std::Decimal';
    return `cosmwasm_std::Decimal${this.bits}`;
  }
}
export const Decimal128Type = new DecimalTypeNode(128);
export const Decimal256Type = new DecimalTypeNode(256);

export const StringType = new TypeNode('string', 'String');

/** Error types are used for debugging. They're not supposed to actually translate to any Rust
 * code, rather used to generate a compile error.
 * 
 * Do not confuse `ErrorTypeNode` with `ErrorNode`, which defines a `fail` error within a specific
 * contract.
 */
export class ErrorTypeNode extends TypeNode {
  constructor(public msg: string, public extra?: any) {
    super(`Error: ${msg}`);
  }
  
  static isErrorType(type: TypeNode): type is ErrorTypeNode {
    return type.cwsname?.slice(0, 5).toLowerCase() === 'error';
  }
  
  get escapedMsg() {
    return this.msg.replace(/[\\"]/g, '\\$&');
  }
}

export const CoinType = new TypeNode('Coin', 'cosmwasm_std::Coin', TypeFields.Map({
  denom: StringType,
  amount: Uint128Type,
}));

export const EnvTypeNode = new TypeNode('Env', 'cosmwasm_std::Env', TypeFields.Map({
  block: new TypeNode('BlockInfo', 'cosmwasm_std::BlockInfo', TypeFields.Map({
    height: Uint64Type,
    time: new ErrorTypeNode('Timestamp is not yet supported'),
    chain_id: StringType,
  })),
  transaction: new Nullish(
    new TypeNode('TransactionInfo', 'cosmwasm_std::TransactionInfo', TypeFields.Map({ index: Uint32Type })),
    false
  ),
  // contract: new TypeNode('ContractInfo', 'ContractInfo'),
  contract: new TypeNode('ContractInfo', 'cosmwasm_std::ContractInfo', TypeFields.Map({
    address: AddrType,
  })),
}));
// TODO: add fields to Deps & DepsMut
export const DepsTypeNode = new TypeNode('Deps', 'cosmwasm_std::Deps');
export const DepsMutTypeNode = new TypeNode('DepsMut', 'cosmwasm_std::DepsMut');
export const InfoTypeNode = new TypeNode('MessageInfo', 'cosmwasm_std::MessageInfo', TypeFields.Map({
  sender: AddrType,
  funds: Vector.of(CoinType),
}));
