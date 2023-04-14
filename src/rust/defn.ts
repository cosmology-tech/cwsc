import {
  Annotated,
  Annotation,
  StructType,
  FunctionArg,
  STRUCT,
  TUPLE,
  UNIT,
  Rust,
} from './common';
import { Type } from './type';
import { Expr } from './expr';

export namespace Defn {
  export class StructMember extends Annotated {
    constructor(
      public annotations: Annotation[],
      public name: string | null,
      public type: Type
    ) {
      super(annotations);
    }

    public toRustString(): string {
      if (this.name === null) {
        return this.withAnnotations(`pub ${this.type.toRustString()}`);
      }
      return this.withAnnotations(
        `pub ${this.name}: ${this.type.toRustString()}`
      );
    }

    public toEnumVariantString(): string {
      if (this.name === null) {
        return this.withAnnotations(this.type.toRustString());
      }
      return this.withAnnotations(`${this.name}: ${this.type.toRustString()}`);
    }
  }

  export class Struct extends Annotated {
    constructor(
      public annotations: Annotation[],
      public type: StructType,
      public name: string,
      public members: StructMember[] = []
    ) {
      super(annotations);
    }

    addMember(member: StructMember): Struct {
      this.members.push(member);
      return this;
    }

    toRustString(): string {
      switch (this.type) {
        case STRUCT:
          return this.withAnnotations(
            `pub struct ${this.name} { ${this.members
              .map(x => x.toRustString())
              .join(', ')} }`
          );
        case TUPLE:
          return this.withAnnotations(
            `pub struct ${this.name}(${this.members
              .map(x => x.toRustString())
              .join(', ')});`
          );
        case UNIT:
          return this.withAnnotations(`pub struct ${this.name};`);
      }
    }

    toEnumVariantString(): string {
      switch (this.type) {
        case STRUCT:
          return this.withAnnotations(
            `${this.name} { ${this.members
              .map(x => x.toEnumVariantString())
              .join(', ')} }`
          );
        case TUPLE:
          return this.withAnnotations(
            `${this.name}(${this.members
              .map(x => x.toEnumVariantString())
              .join(', ')})`
          );
        case UNIT:
          return this.withAnnotations(this.name);
      }
    }
  }

  export class Enum extends Annotated {
    constructor(
      public annotations: Annotation[],
      public name: string,
      public variants: Struct[] = []
    ) {
      super(annotations);
    }

    addVariant(variant: Struct): Enum {
      this.variants.push(variant);
      return this;
    }

    toRustString(): string {
      return this.withAnnotations(
        `pub enum ${this.name} { ${this.variants
          .map(x => x.toEnumVariantString())
          .join(',\n')} }`
      );
    }
  }

  export class TypeAlias {
    constructor(public name: string, public type: Type) {}

    toRustString(): string {
      return `pub type ${this.name} = ${this.type.toRustString()};`;
    }
  }

  export class Module {
    constructor(public name: string, public items: any[] = []) {}

    addItem(item: any): Module {
      this.items.push(item);
      return this;
    }

    toRustString(): string {
      return `pub mod ${this.name} { ${this.items
        .map(x => x.toRustString())
        .join('\n')} }`;
    }
  }

  export class Use extends Annotated {
    constructor(public annotations: Annotation[], public path: string) {
      super(annotations);
    }

    toRustString(): string {
      return this.withAnnotations(`use ${this.path};`);
    }
  }

  export class Const {
    constructor(public name: string, public type: Type, public value: Expr) {}

    toRustString(): string {
      return `pub const ${
        this.name
      }: ${this.type.toRustString()} = ${this.value.toRustString()};`;
    }
  }

  export class Function extends Annotated {
    constructor(
      public annotations: Annotation[],
      public name: string,
      public args: FunctionArg[],
      public returnType: Type,
      public body: Rust[] = []
    ) {
      super(annotations);
    }

    addArg(arg: FunctionArg): Function {
      this.args.push(arg);
      return this;
    }

    addBody(stmt: Rust): Function {
      this.body.push(stmt);
      return this;
    }

    toRustString(): string {
      return this.withAnnotations(
        `pub fn ${this.name}(${this.args
          .map(x => x.toRustString())
          .join(
            ', '
          )}) -> ${this.returnType.toRustString()} { ${this.body
          .map(x => x.toRustString())
          .join('\n')} }`
      );
    }
  }

  export class Let {
    constructor(
      public mut: boolean,
      public ident: string,
      public type?: Type,
      public rhs?: Expr
    ) {}

    toRustString(): string {
      let m = '';
      if (this.mut) {
        m = ' mut ';
      }
      let t = '';
      if (this.type !== undefined) {
        t = `: ${this.type.toRustString()}`;
      }
      let r = '';
      if (this.rhs !== undefined) {
        r = ` = ${this.rhs.toRustString()}`;
      }
      return `let${m}${this.ident}${t}${r};`;
    }
  }
}
