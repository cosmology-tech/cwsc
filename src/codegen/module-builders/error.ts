import * as AST from '../../ast/nodes';
import * as Rust from '../../rust';
import { AST2Rust } from '../ast2rust';

export function buildModError(
  ast2rust: AST2Rust,
  errors: AST.ErrorDefn[]
): Rust.Defn.Module {
  let module = new Rust.Defn.Module('error');
  let DERIVE_ERROR_ANNOTATION = new Rust.Annotation(
    'derive(thiserror::Error, Debug)'
  );

  let error_enum = new Rust.Defn.Enum(
    [DERIVE_ERROR_ANNOTATION],
    'ContractError'
  );
  let std = new Rust.Defn.Struct(
    [new Rust.Annotation('error("{0}")')],
    Rust.TUPLE,
    'Std',
    [
      new Rust.Defn.StructMember(
        [new Rust.Annotation('from')],
        null,
        new Rust.Type('cosmwasm_std::StdError')
      ),
    ]
  );
  error_enum.addVariant(std);

  for (let err of errors) {
    let annotation = new Rust.Annotation(`error("${err.name.text}")`);
    let error_struct = new Rust.Defn.Struct(
      [annotation],
      Rust.STRUCT,
      err.name.text
    );

    err.members.elements.forEach(m => {
      let member_type = ast2rust.resolveType(m.type);
      if (m.option) {
        member_type = member_type.option();
      }
      let member = new Rust.Defn.StructMember([], m.name.text, member_type);
      error_struct.addMember(member);
    });
    error_enum.addVariant(error_struct);
  }
  module.addItem(error_enum);
  return module;
}
