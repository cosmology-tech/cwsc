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
        return `${config.indent}pub enum ${this.name} {
${this.variants.map(variant => `${variant.render(config.innerIndent())},`).join('\n')}
${config.indent}}`;
    }
}

export type Variant 
    = UnitVariant
    | TupleVariant
    | StructVariant

export class TupleVariant {
    public name: string = '';
    public tuple: Tuple<string> = new Tuple([]);

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
}

export class StructVariant {
    public name: string = '';
    public struct: Struct<string> = new Struct([]);

    constructor(name: string, fields: Field<string>[]) {
        this.name = name;
        this.struct = new Struct(fields);
    }

    public render(config: RenderConfig): string {
        return `${config.indent}${this.name} ${this.struct.render(config)}`
    }
}

/*
#[derive(A, B)]
pub struct StructName {
    ...
}
*/
export class StructTypeDecl {
    public name: string = '';
    public derives: string[] = [];
    public struct: Struct<string> = new Struct([]);

    constructor(name: string, derives: string[], ...fields: Field<string>[]) {
        this.name = name;
        this.derives = derives;
        this.struct = new Struct(fields); 
    }

    public render(config: RenderConfig): string {
        const derive = this.derives.length ? 
`#[derive(${this.derives.join(', ')})]` : '';
        
        return `${config.indent}${derive}
${config.indent}pub struct ${this.name} ${this.struct.render(config)}`;
    }
}

export class UnitVariant {
    public name: string = '';

    constructor(name: string) {
        this.name = name;
    }

    public render(config: RenderConfig): string {
        return `${config.indent}${this.name}`
    }
}

import { RenderConfig } from "./render";
import { Struct, Tuple } from "./struct";

// #[derive(Debug)]
// struct A {
//   a: String,
//   b: bool
// }




// name: string
export class Field<T extends string | { render(config: RenderConfig): string }> {
    public name: string = '';
    public value: T;

    constructor(name: string, value: T) {
        this.name = name;
        this.value = value;
    }

    public render(config: RenderConfig): string {
        return `${this.name}: ${typeof this.value == 'string' ? this.value : this.value.render(config)}`
    }
}

export class PrimitiveType {
    public name: string = ''; // TODO: make enum type

    constructor(name: string) {
        this.name = name;
    }
}