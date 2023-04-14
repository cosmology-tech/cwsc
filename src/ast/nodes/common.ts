import {
  AST,
  List,
  StructDefn,
  TypeExpr,
  ContractDefn,
  InterfaceDefn,
  Ident,
  Stmt,
} from './';

export class StructMember extends AST {
  constructor(
    public ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident,
    public option: boolean,
    public type: TypeExpr
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class EmptyAST extends AST {}

export class CWSpec extends AST {
  constructor(public ctx: any, public text: string) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class SourceFile extends AST {
  constructor(
    public ctx: any,
    public spec: CWSpec | undefined,
    public stmts: List<TopLevelStmt>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

export type TopLevelStmt = InterfaceDefn | ContractDefn | ImportStmt;

//@Node()
export class ImportStmt extends AST {
  constructor(public ctx: any, public fileName: string) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class ImportAllStmt extends ImportStmt {
  constructor(public ctx: any, public fileName: string) {
    super(ctx, fileName);
    this.setParentForChildren();
  }
}

export class ImportItemsStmt extends ImportStmt {
  constructor(
    public ctx: any,
    public fileName: string,
    public items: List<ImportItem>
  ) {
    super(ctx, fileName);
    this.setParentForChildren();
  }
}

//@Node()
export class ImportItem extends AST {
  constructor(public ctx: any, public symbol: Ident, public alias?: Ident) {
    super(ctx);
    this.setParentForChildren();
  }
}

export type EnumVariant = EnumVariantStruct | EnumVariantTuple;

//@Node()
export class EnumVariantStruct extends AST {
  constructor(
    public ctx: any,
    public name: Ident,
    public members: List<StructMember>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class EnumVariantTuple extends AST {
  constructor(
    public ctx: any,
    public name: Ident,
    public members: List<TypeExpr>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class FnArg extends AST {
  constructor(
    public ctx: any,
    public name: Ident,
    public option: boolean,
    public type: TypeExpr
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class FnDefn extends AST {
  constructor(
    public ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident | undefined,
    public args: List<FnArg>,
    public returnType: TypeExpr | undefined,
    public body: List<Stmt>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}
