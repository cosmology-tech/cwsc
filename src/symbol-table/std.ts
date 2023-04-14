import * as Rust from '../rust';
import { Subspace, ScopeDefn } from './scope';

export const CWSCRIPT_STD: ScopeDefn = {
  [Subspace.TYPE]: {
    String: new Rust.Type.String(),
    u8: new Rust.Type.Int(Rust.U8),
    u16: new Rust.Type.Int(Rust.U16),
    u32: new Rust.Type.Int(Rust.U32),
    u64: new Rust.Type.Int(Rust.U64),
    u128: new Rust.Type.Int(Rust.U128),
    i8: new Rust.Type.Int(Rust.I8),
    i16: new Rust.Type.Int(Rust.I16),
    i32: new Rust.Type.Int(Rust.I32),
    i64: new Rust.Type.Int(Rust.I64),
    i128: new Rust.Type.Int(Rust.I128),
    Addr: new Rust.Type('cosmwasm_std::Addr'),
    Uint128: new Rust.Type('cosmwasm_std::Uint128'),
    Binary: new Rust.Type('cosmwasm_std::Binary'),
  },
};
