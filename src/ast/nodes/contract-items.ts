import { AST, List, CWSpec, FnArg, FnDefn } from '.';
import { Ident } from './expr';
import { StructDefn, TypeExpr } from './type';

//@Node()
export class InterfaceDefn extends AST {
  constructor(
    public ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident,
    public body: List<InterfaceItem>,
    public baseInterfaces?: List<Ident>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class ContractDefn extends AST {
  constructor(
    public ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident,
    public body: List<ContractItem>,
    public baseContracts?: List<Ident>,
    public interfaces?: List<Ident>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

export type InterfaceItem =
  | ErrorDefn
  | List<ErrorDefn>
  | EventDefn
  | List<EventDefn>
  | StateDefn
  | List<StateDefn>
  | InstantiateDecl
  | ExecDecl
  | List<ExecDecl>
  | QueryDecl
  | List<QueryDecl>
  | MigrateDecl;

export type ContractItem =
  | ErrorDefn
  | List<ErrorDefn>
  | EventDefn
  | List<EventDefn>
  | StateDefn
  | List<StateDefn>
  | InstantiateDefn
  | ExecDefn
  | List<ExecDefn>
  | QueryDefn
  | List<QueryDefn>
  | MigrateDefn;

export class ErrorDefn extends StructDefn {}

//@Node()
export class EventDefn extends StructDefn {}

export class StateDefn extends AST {
  constructor(public ctx: any, public key: Ident, public type: TypeExpr) {
    super();
  }
}

//@Node()
export class ItemDefn extends StateDefn {
  constructor(
    public ctx: any,
    public spec: CWSpec | undefined,
    key: Ident,
    type: TypeExpr
  ) {
    super(ctx, key, type);
    this.setParentForChildren();
  }
}

//@Node()
export class MapDefn extends StateDefn {
  constructor(
    public ctx: any,
    public spec: CWSpec | undefined,
    key: Ident,
    public mapKeys: List<MapDefnKey>,
    type: TypeExpr
  ) {
    super(ctx, key, type);
    this.setParentForChildren();
  }
}

//@Node()
export class MapDefnKey extends AST {
  constructor(
    public ctx: any,
    public name: Ident | undefined,
    public type: TypeExpr
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class InstantiateDefn extends FnDefn {}

//@Node()
export class ExecDefn extends FnDefn {}

//@Node()
export class QueryDefn extends FnDefn {}

export class MigrateDefn extends FnDefn {}

export class FnDecl extends AST {
  constructor(
    public ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident | undefined,
    public args: List<FnArg>,
    public returnType: TypeExpr | undefined
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class InstantiateDecl extends FnDecl {}

export class ExecDecl extends FnDecl {}

export class QueryDecl extends FnDecl {}

export class MigrateDecl extends FnDecl {}
