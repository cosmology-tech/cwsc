import * as AST from '../../ast/nodes';
import * as Rust from '../../rust';
import { AST2Rust } from '../ast2rust';

export function buildModTypes(
  ast2rust: AST2Rust,
  types: (AST.TypeAliasDefn | AST.StructDefn | AST.EnumDefn)[]
): Rust.Defn.Module {
  let module = new Rust.Defn.Module('types');
  module.addItem(new Rust.Defn.Use([], 'schemars::JsonSchema'));
  module.addItem(new Rust.Defn.Use([], 'serde::{Serialize, Deserialize}'));

  types.forEach(t => {
    if (t instanceof AST.StructDefn) {
      let struct = new Rust.Defn.Struct(
        [Rust.DERIVE_ANNOTATION],
        Rust.STRUCT,
        t.name.text
      );
      t.members.elements.forEach(m => {
        let member_type = ast2rust.resolveType(m.type);
        if (m.option) {
          member_type = member_type.option();
        }
        struct.addMember(
          new Rust.Defn.StructMember([], m.name.text, member_type)
        );
      });
      module.addItem(struct);
    }

    if (t instanceof AST.TypeAliasDefn) {
      let alias = new Rust.Defn.TypeAlias(
        t.name.text,
        ast2rust.resolveType(t.type)
      );
      module.addItem(alias);
    }
  });

  return module;
}
