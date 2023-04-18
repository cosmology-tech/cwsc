import { ErrorTypeNode } from './runtime-types';
import { TypeNode } from './typenode';
import { Nullish } from '../nodes/generics';
import { RustableCallback, RustableContext } from '../types';

export type TypeArg = string | TypeNode | RustableCallback;

export function resolveType(type: TypeArg, ctx: RustableContext): string {
  if (ctx.scope !== 'typedecl')
    throw Error('Can only resolve types in a \'typedecl\' scope');
  
  if (typeof type === 'string') return resolveStringType(type);
  if (typeof type === 'function') return type(ctx);
  if ('toRust' in type) {
    return type.toRust(ctx);
  }
  throw Error('Invalid type');
}

function resolveStringType(type: string): string {
  switch (type) {
    case 'u64': return 'cosmwasm_std::Uint64';
    case 'u128': return 'cosmwasm_std::Uint128';
    case 'u256': return 'cosmwasm_std::Uint256';
    case 'u512': return 'cosmwasm_std::Uint512';
    case 'd128': return 'cosmwasm_std::Decimal';
    case 'd256': return 'cosmwasm_std::Decimal256';
    case 'Addr': return 'cosmwasm_std::Addr';
    default: return type;
  }
}

export function unwrapType(type: TypeNode): TypeNode {
  if (!(type instanceof Nullish))
    return new ErrorTypeNode('not a Nullish', `unwrapType on ${type.cwsname}`);
  return type.inner;
}
