import type { Rustable, RustableContext, Rustify } from '../types';
import { TypeFields, TypeNode } from '../typesys';
import { resolveType, TypeArg } from '../typesys/resolve';
import { dict, rustifyMacros } from '../utils';

type FieldMap = Record<string, TypeArg> | ((ctx: RustableContext) => Record<string, TypeArg>);
type FieldList = TypeArg[] | ((ctx: RustableContext) => TypeArg[]);

export class Struct extends TypeNode {
  constructor(
    public name: string | undefined,
    fields: TypeFields,
    public pub = false,
    public macros: string[] = [],
  ) {
    super(undefined, undefined, fields);
  }
  
  toRust(ctx: RustableContext): string {
    if (!this.name)
      throw Error('No generated name for struct');
    
    switch (ctx.scope) {
      case 'typedecl':
        return ctx.getFullName(this.name);
        
      case 'global':
      case 'mod': {
        const pub = this.pub ? 'pub ' : '';
        const fields = this.fields;
        
        return rustifyMacros(this.macros, ctx) +
          pub + `struct ${this.name} ` +
          dict(Object.entries(fields.fields).map(
            ([field, type]) => [field, ctx => type.toRust(ctx.enter('typedecl'))] as [string, Rustify]
          ))(ctx.enter('struct'));
      }
      default: throw Error(`Invalid scope '${ctx.scope}' for Struct, expected 'typedecl', 'global' or 'mod'`);
    }
  }
  
  get cwsname() { return this.name ? 'struct ' + this.name : '~anonymous struct' }
}

export interface EnumArgs {
  name: string;
  variants?: Variant[];
  pub?: boolean;
  macros?: string[];
}
export class Enum extends TypeNode {
  name: string;
  variants: Variant[];
  pub: boolean;
  macros: string[];
  
  constructor(args: EnumArgs) {
    super();
    this.name = args.name;
    this.variants = args.variants ?? [];
    this.pub = args.pub ?? false;
    this.macros = args.macros ?? [];
    args.variants?.forEach(v => v.parent = this);
  }
  
  toRust(ctx: RustableContext): string {
    switch (ctx.scope) {
      case 'typedecl':
        return ctx.getFullName(this.name);
      
      case 'global':
      case 'mod': {
        const { indented, nl } = ctx.enter('enum');
        const nl2 = indented.nl;
        const pub = this.pub ? 'pub ' : '';
        
        return rustifyMacros(this.macros, ctx) +
          pub + `enum ${this.name} {${nl2}` +
          this.variants.map(
            variant => variant.toRust(indented) + ','
          ).join(nl2) + nl +
          '}';
      }
      default: throw Error(`Invalid scope '${ctx.scope}' for Enum, expected 'typedecl', 'global' or 'mod'`);
    }
  }
  
  get cwsname() { return `enum ${this.name}` }
}

export abstract class Variant extends TypeNode {
  parent: Enum = null as any;
  abstract get name(): string;
  abstract get macros(): string[];
  
  constructor(fields: TypeFields) {
    super(undefined, undefined, fields);
  }
  
  toRust(ctx: RustableContext) {
    this.fields.validate();
    
    switch (ctx.scope) {
      case 'expr':
        if (!this.parent) throw Error('No parent for TupleVariant');
        return ctx.getFullName(`${this.parent.name}::${this.name}`);
      
      // generate Rust tuple variant
      case 'enum':
        return rustifyMacros(this.macros, ctx) + this.name + this.getProps(ctx);
      default: throw Error(`Invalid scope '${ctx.scope}' for TupleVariant, expected 'if.condition' or 'enum'`);
    }
  }
  
  protected abstract getProps(ctx: RustableContext): string;
}

export interface TupleVariantArgs {
  name: string;
  fields?: TupleVariant['fields'];
  macros?: string[];
}
export class TupleVariant extends Variant {
  name: string;
  macros: string[];
  
  constructor(args: TupleVariantArgs) {
    super(args.fields ?? new TypeFields('tuple'));
    this.name = args.name;
    this.macros = args.macros ?? [];
  }
  
  getProps(ctx: RustableContext) {
    ctx = ctx.enter('variant.tuple');
    const { indented, nl } = ctx;
    const nl2 = indented.nl;
    
    const fields = Object.entries(this.fields.fields).sort((a, b) => parseInt(a[0]) - parseInt(b[0])).map(([_, field]) => field);
    return fields.length
      ? '(' + nl2 +
          fields.map(
            field => field.toRust(indented.enter('typedecl')) + ',',
          ).join(nl2) + nl +
        ')'
      : '()';
  }
}

export interface MapVariantArgs {
  name: string;
  fields?: TypeFields<'map'>;
  macros?: string[];
}
export class MapVariant extends Variant {
  name: string;
  macros: string[];
  
  constructor(args: MapVariantArgs) {
    super(args.fields ?? new TypeFields('map'));
    this.name = args.name;
    this.macros = args.macros ?? [];
  }
  
  protected getProps(ctx: RustableContext): string {
    ctx = ctx.enter('variant.map');
    const fields = this.fields.fields;
    
    return ' ' + dict(Object.entries(fields).map(
      ([field, type]) => [field, ctx => type.toRust(ctx.enter('typedecl'))] as [string, Rustify]
    ))(ctx);
  }
}
