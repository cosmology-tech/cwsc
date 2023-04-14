import * as Rust from '../rust';
import * as AST from '../ast/nodes';

export class CWScriptSymbol {}

export namespace CWScriptSymbol {
  export class LocalVariable extends CWScriptSymbol {
    constructor(
      public tmpVar: Rust.Expr.Path,
      public type: AST.TypeExpr,
      public value: Rust.Expr
    ) {
      super();
    }
  }

  export class StateItem extends CWScriptSymbol {
    constructor(public key: string, public type: Rust.Type) {
      super();
    }
  }

  export class StateMap extends CWScriptSymbol {
    constructor(public ast: AST.MapDefn) {
      super();
    }
  }
}
