export type TypeDecl
    = EnumTypeDecl
    | TupleTypeDecl
    | StructTypeDecl

/*
pub enum MyEnum {
    UnitVariant,
    TupleVariant(String, bool),
    StructVariant {
        a: String,
        b: bool
    },
}
*/

export class EnumTypeDecl {
    public name: string = '';
    public variants: Variant[] = [];

    constructor(name: string, variants: Variant[]) {
        this.name = name;
        this.variants = variants;
    }

    public render(config: RenderConfig): string {
        return `
${config.indent}pub enum ${this.name} {
${config.indent}${this.variants.map(variant => variant.render(config.innerIndent())).join('\n')}
}
`;
    }
}

export type Variant 
    = UnitVariant
    | TupleVariant
    | StructVariant

export class TupleVariant {
    public name: string = '';
    public tuple: Tuple<string> = new Tuple();

    constructor(name: string, tuple: Tuple<string>) {
        this.name = name;
        this.tuple = tuple;
    }

    public render(config: RenderConfig): string {
        return `${config.indent}${this.name}${this.tuple.render()}`
    }
}

export class TupleTypeDecl {
    public name: string = '';
    public 
}

export class StructTypeDecl {
    public name: string = '';
    public derives: string[] = [];
    public struct: Struct<string> = new Struct();

    constructor(name: string, derives: string[], struct: Struct<string>) {
        this.name = name;
        this.derives = derives;
        this.struct = struct;
    }


}

export class UnitVariant {
    public name: string = '';

    constructor(name: string) {
        this.name = name;
    }

    public render(config: RenderConfig): string {
        return `${config.indent}${this.name},`
    }
}

import { RenderConfig } from "./render";
import { Struct } from "./struct";

// #[derive(Debug)]
// struct A {
//   a: String,
//   b: bool
// }




// name: string
export class Field {
    public name: string = '';
    public type: string = ''; // TODO

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }

    public render(): string {
        return `${this.name}: ${this.type}`
    }
}


export class NamedTuple {
    public name: string = '';
    public fields: Field[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public field(name: string, type: string) {
        this.fields.push(new Field(name, type));
    }

    public render(): string {
        return `${this.name}(${this.fields.map(field => field.render()).join(', ')})`
    }
}

export class PrimitiveType {
    public name: string = ''; // TODO: make enum type

    constructor(name: string) {
        this.name = name;
    }
}