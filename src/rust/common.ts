import { CWScriptEnv } from '../symbol-table/env';
import { Type } from './type';

export interface Rust {
  toRustString(): string;
}

export interface TransformsToRust {
  toRust(env: CWScriptEnv): Rust;
}

/**
 * A bundle of Rust code -- sometimes we need to
 * generate more than 1 Rust code item.
 */
export class CodeGroup implements Rust {
  public items: Rust[] = [];
  constructor(public title?: string) {}

  add(item: Rust) {
    if (item === undefined) {
      throw new Error('item is undefined');
    }
    this.items.push(item);
  }

  toRustString(): string {
    let items;
    if (this.title) {
      items = [
        new Comment(`-- begin ${this.title}`),
        ...this.items,
        new Comment(`-- end ${this.title}\n`),
      ];
    } else {
      items = this.items;
    }
    return items.map((x) => x.toRustString()).join('\n');
  }
}

export function group(...items: Rust[]): Rust {
  let res = new CodeGroup();
  items.forEach((x) => res.add(x));
  return res;
}
export class Comment implements Rust {
  constructor(public value: string) {}

  toRustString(): string {
    return `// ${this.value}`;
  }
}
export class Annotation {
  constructor(public value: string) {}

  toRustString(): string {
    return `#[${this.value}]`;
  }
}

export const DERIVE_ANNOTATION = new Annotation(
  'derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)'
);

export const SERDE_RENAME_ANNOTATION = new Annotation(
  'serde(rename_all = "snake_case")'
);

export abstract class Annotated implements Rust {
  constructor(public annotations: Annotation[]) {}

  withAnnotations(x: string): string {
    return `${this.annotations.map((x) => x.toRustString()).join(' ')} ${x}`;
  }

  toRustString(): string {
    throw new Error('Annotated.toRustString() implementation is missing');
  }
}

export class FunctionArg extends Annotated {
  constructor(
    public annotations: Annotation[],
    public name: string,
    public type: Type
  ) {
    super(annotations);
  }

  toRustString(): string {
    return this.withAnnotations(`${this.name}: ${this.type.toRustString()}`);
  }
}

export class SelfArg extends FunctionArg {
  constructor(public annotations: Annotation[], public mut: boolean) {
    super(annotations, `&${mut ? 'mut ' : ''}self`, new Type());
  }

  toRustString(): string {
    return this.withAnnotations(this.name);
  }
}

export class MatchPattern implements Rust {
  constructor(public pattern: string, public expr: Rust) {}

  toRustString(): string {
    return `${this.pattern} => ${this.expr.toRustString()}`;
  }
}

export enum StructType {
  STRUCT,
  TUPLE,
  UNIT,
}

export const STRUCT = StructType.STRUCT;
export const TUPLE = StructType.TUPLE;
export const UNIT = StructType.UNIT;

export enum IntType {
  U8 = 'u8',
  I8 = 'i8',
  U16 = 'u16',
  I16 = 'i16',
  U32 = 'u32',
  I32 = 'i32',
  U64 = 'u64',
  I64 = 'i64',
  U128 = 'u128',
  I128 = 'i128',
  USIZE = 'usize',
  ISIZE = 'isize',
}

export const U8 = IntType.U8;
export const I8 = IntType.I8;
export const U16 = IntType.U16;
export const I16 = IntType.I16;
export const U32 = IntType.U32;
export const I32 = IntType.I32;
export const U64 = IntType.U64;
export const I64 = IntType.I64;
export const U128 = IntType.U128;
export const I128 = IntType.I128;
export const USIZE = IntType.USIZE;
export const ISIZE = IntType.ISIZE;

export enum RefType {
  REF = '&',
  MUT = '&mut ',
}

export const REF = RefType.REF;
export const MUT = RefType.MUT;

export enum PointerType {
  CONST = 'const',
  MUT = 'mut',
}

export const P_CONST = PointerType.CONST;
export const P_MUT = PointerType.MUT;
