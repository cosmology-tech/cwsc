import * as AST from '../../ast/nodes';
import * as Rust from '../../rust';
import { snakeToPascal } from '../../util/strings';
import { AST2Rust } from '../ast2rust';

export function buildModMsg(
  ast2rust: AST2Rust,
  i: AST.InstantiateDefn,
  e: AST.ExecDefn[],
  q: AST.QueryDefn[]
): Rust.Defn.Module {
  let module = new Rust.Defn.Module('msg');
  module.addItem(new Rust.Defn.Use([], 'schemars::JsonSchema'));
  module.addItem(new Rust.Defn.Use([], 'serde::{Serialize, Deserialize}'));

  // build instantiate msg
  let instantiateMsg = new Rust.Defn.Struct(
    [Rust.DERIVE_ANNOTATION],
    Rust.STRUCT,
    'InstantiateMsg'
  );

  i.args.elements.forEach(a => {
    let argType = ast2rust.resolveType(a.type);
    if (a.option) {
      argType = new Rust.Type.Option(argType);
    }
    let m = new Rust.Defn.StructMember([], a.name.text, argType);
    instantiateMsg.addMember(m);
  });

  module.addItem(instantiateMsg);

  // build execute msg
  let executeMsg = new Rust.Defn.Enum(
    [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
    'ExecuteMsg'
  );
  for (let execFn of e) {
    // turn snake-case to pascal case
    let s = new Rust.Defn.Struct(
      [],
      Rust.STRUCT,
      snakeToPascal(execFn.name!.text)
    );

    execFn.args.elements.forEach(arg => {
      let argType = ast2rust.resolveType(arg.type);
      if (arg.option) {
        argType = new Rust.Type.Option(argType);
      }
      s.addMember(new Rust.Defn.StructMember([], arg.name.text, argType));
    });
    executeMsg.addVariant(s);
  }

  module.addItem(executeMsg);

  // build query msg
  let queryMsg = new Rust.Defn.Enum(
    [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
    'QueryMsg'
  );
  for (let queryFn of q) {
    // turn snake-case to pascal case
    let s = new Rust.Defn.Struct(
      [],
      Rust.STRUCT,
      snakeToPascal(queryFn.name!.text)
    );

    queryFn.args.elements.forEach(arg => {
      let argType = ast2rust.resolveType(arg.type);
      if (arg.option) {
        argType = new Rust.Type.Option(argType);
      }
      s.addMember(new Rust.Defn.StructMember([], arg.name.text, argType));
    });
    queryMsg.addVariant(s);
  }

  module.addItem(queryMsg);
  return module;
}
