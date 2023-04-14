import {
  Rust,
  RefType,
  IntType,
  U8,
  I8,
  U16,
  I16,
  U32,
  I32,
  U64,
  I64,
  U128,
  I128,
  USIZE,
  ISIZE,
  PointerType,
} from './common';
import { Expr } from './expr';

export class Type implements Rust {
  constructor(public path: string = '', public typeParams: Type[] = []) {}

  withTypeParams(tps: Type[]): Type {
    return new Type(this.path, tps);
  }

  option(): Type.Option {
    return new Type.Option(this);
  }

  vec(): Type.Vec {
    return new Type.Vec(this);
  }

  ref(mut: boolean = false): Type.Ref {
    return new Type.Ref(mut ? RefType.MUT : RefType.REF, this);
  }

  mut(): Type.Mut {
    return new Type.Mut(this);
  }

  fnCall(fnName: string, args: any, typeParams: Type[] = []): Expr.FnCall {
    let fn_tps = '';
    if (typeParams.length > 0) {
      fn_tps = `::<${typeParams.map((x) => x.toRustString()).join(', ')}>`;
    }
    return new Expr.FnCall(
      `<${this.toRustString()}>::${fnName}${fn_tps}`,
      args
    );
  }

  toRustString(): string {
    if (this.typeParams.length === 0) {
      return this.path;
    }
    return `${this.path}<${this.typeParams
      .map((x) => x.toRustString())
      .join(', ')}>`;
  }
}
export namespace Type {
  export enum RefType {
    REF = '&',
    MUT = '&mut ',
  }
  export class Mut extends Type {
    constructor(public inner: Type) {
      super(`mut ${inner.toRustString()}`);
    }
  }

  export class Ref extends Type {
    constructor(public refType: RefType, public inner: Type) {
      super(`${refType}${inner.toRustString()}`);
    }

    isMut(): boolean {
      return this.refType === RefType.MUT;
    }
  }

  export class Option extends Type {
    constructor(public inner: Type) {
      super('::std::option::Option', [inner]);
    }
  }

  export class Result extends Type {
    constructor(public okType: Type, public errType: Type) {
      super('::std::result::Result', [okType, errType]);
    }
  }

  export class Vec extends Type {
    constructor(public inner: Type) {
      super('::std::vec::Vec', [inner]);
    }
  }

  export class String extends Type {
    constructor() {
      super('::std::string::String');
    }
  }

  export class Primitive extends Type {}

  export class Never extends Primitive {
    constructor() {
      super('!');
    }
  }

  export class Str extends Primitive {
    constructor(public isStatic: boolean = false) {
      super(isStatic ? "&'static str" : '&str');
    }
  }

  export class Int extends Primitive {
    constructor(public intType: IntType) {
      super(`${intType}`);
    }

    isSigned(): boolean {
      switch (this.intType) {
        case I8:
        case I16:
        case I32:
        case I64:
        case I128:
        case ISIZE:
          return true;
        default:
          return false;
      }
    }
  }

  export class Char extends Primitive {
    constructor() {
      super(`char`);
    }
  }

  export class Bool extends Primitive {
    constructor() {
      super(`bool`);
    }
  }

  export class Fn extends Primitive {
    constructor(public args: Type[], public returnType: Type) {
      super(
        `(fn(${args
          .map((x) => x.toRustString())
          .join(', ')}) -> ${returnType.toRustString()})`
      );
    }
  }

  export class Pointer extends Primitive {
    constructor(public pointerType: PointerType, public inner: Type) {
      super(`*${pointerType} ${inner.toRustString()}`);
    }

    isMut(): boolean {
      return this.pointerType === PointerType.MUT;
    }
  }

  export class Array extends Primitive {
    constructor(public inner: Type, public size: number) {
      super(`[${inner.toRustString()}; ${size}]`);
    }
  }

  export class Slice extends Primitive {
    constructor(public inner: Type) {
      super(`&[${inner.toRustString()}]`);
    }
  }

  export class Tuple extends Primitive {
    constructor(public members: Type[]) {
      super('');

      let name;
      if (members.length === 1) {
        name = `(${members[0].toRustString()},)`;
      } else {
        name = `(${members.map((x) => x.toRustString()).join(', ')})`;
      }
      super(name);
    }
  }

  export class Unit extends Primitive {
    constructor() {
      super('()');
    }
  }

  export class Unknown extends Type {}
}
