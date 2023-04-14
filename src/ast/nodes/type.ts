import {
  AST,
  List,
  CWSpec,
  Ident,
  StructMember,
  EnumVariant,
  EnumVariantStruct,
  EnumVariantTuple,
} from './';

export type TypeExpr =
  | TypePath
  | ParamzdTypeExpr
  | TupleTypeExpr
  | ShortOptionTypeExpr
  | ShortVecTypeExpr
  | RefTypeExpr
  | ReflectiveTypeExpr
  | StructDefn
  | TupleStructDefn
  | EnumDefn
  | TypeAliasDefn;

export class TypePath extends AST {
  constructor(
    public ctx: any,
    public root: boolean,
    public paths: List<Ident>
  ) {
    super(ctx);
    this.setParentForChildren();
  }

  public toString(): string {
    return this.paths.map(x => x.text).join('::');
  }
}

export class ParamzdTypeExpr extends AST {
  constructor(
    public ctx: any,
    public type: TypeExpr,
    public params: List<TypeExpr>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class TupleTypeExpr extends AST {
  constructor(public ctx: any, public members: List<TypeExpr>) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class ShortOptionTypeExpr extends AST {
  constructor(public ctx: any, public type: TypeExpr) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class ShortVecTypeExpr extends AST {
  constructor(public ctx: any, public type: TypeExpr) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class RefTypeExpr extends AST {
  constructor(public ctx: any, public type: TypeExpr) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class ReflectiveTypeExpr extends AST {
  constructor(public ctx: any, public type: TypeExpr, public member: Ident) {
    super(ctx);
    this.setParentForChildren();
  }
}
export class StructDefn extends AST {
  constructor(
    public ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident,
    public members: List<StructMember>
  ) {
    super(ctx);
    this.setParentForChildren();
  }

  public toString(): string {
    return `${this.name.text}`;
  }

  // public toRust(env: CWScriptEnv, context?: CodegenCtx): Rust.Rust {
  //   let s = new Rust.Defn.Struct([], Rust.STRUCT, this.name.text);
  //   this.members.elements.forEach(x => {
  //     s.addMember(
  //       new Rust.Defn.StructMember(
  //         [],
  //         x.name.text,
  //         x.type.toRust(env, context) as Rust.Type
  //       )
  //     );
  //   });
  //   return s;
  // }
}

export class TupleStructDefn extends AST {
  constructor(
    public ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident,
    public members: List<TypeExpr>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class EnumDefn extends AST {
  constructor(
    public ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident,
    public variants: List<EnumVariant>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class TypeAliasDefn extends AST {
  constructor(
    public ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident,
    public type: TypeExpr
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}
