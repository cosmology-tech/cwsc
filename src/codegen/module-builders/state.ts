import * as AST from '../../ast/nodes';
import * as Rust from '../../rust';
import { AST2Rust } from '../ast2rust';

export function buildModState(
  ast2rust: AST2Rust,
  state: AST.StateDefn[]
): Rust.Defn.Module {
  let cw_storage_plus_item = new Rust.Type('cw_storage_plus::Item');
  let cw_storage_plus_map = new Rust.Type('cw_storage_plus::Map');

  let module = new Rust.Defn.Module('state');

  for (let defn of state) {
    if (defn instanceof AST.ItemDefn) {
      let item_type = cw_storage_plus_item.withTypeParams([
        ast2rust.resolveType(defn.type),
      ]);

      module.addItem(
        new Rust.Defn.Const(
          defn.key.text.toUpperCase(),
          item_type,
          item_type.fnCall('new', [new Rust.Val.StrLiteral(defn.key.text)])
        )
      );
    } else if (defn instanceof AST.MapDefn) {
      let map_type = cw_storage_plus_map.withTypeParams([
        ast2rust.resolveType(defn.mapKeys.elements[0].type).ref(),
        ast2rust.resolveType(defn.type),
      ]);

      module.addItem(
        new Rust.Defn.Const(
          defn.key.text.toUpperCase(),
          map_type,
          map_type.fnCall('new', [new Rust.Val.StrLiteral(defn.key.text)])
        )
      );
    }
  }

  return module;
}
