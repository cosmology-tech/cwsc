import * as Rust from '../rust';

export const CW_STD = new Rust.Path('cosmwasm_std');
export const CW_STORAGE_PLUS = new Rust.Path('cosmwasm_storage_plus');
export const CRATE = new Rust.Path('crate');

export const C_STATE = CRATE.join('state');
export const C_MSG = CRATE.join('msg');
export const C_ERROR = CRATE.join('error');
export const C_EVENT = CRATE.join('event');
export const C_CONTRACT = CRATE.join('contract');
export const C_TYPES = CRATE.join('types');
