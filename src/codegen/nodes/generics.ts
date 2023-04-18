import { RustableContext } from '../types';
import { TypeNode } from '../typesys';

/** Temporary specific TypeNode before we introduce proper generics combining both `Option`s & `Result`s. */
export class Nullish extends TypeNode {
  constructor(
    public inner: TypeNode,
    public withError: boolean,
  ) {
    super();
  }
  
  toRust(ctx: RustableContext): string {
    if (ctx.scope !== 'typedecl')
      throw Error(`Invalid scope '${ctx.scope}' for Nullish, expected 'typedecl'`)
    
    if (this.withError)
      return 'Result<' + this.inner.toRust(ctx) + ', ContractError>';
    else
      return 'Option<' + this.inner.toRust(ctx) + '>';
  }
  
  get cwsname() {
    if (this.inner.cwsname)
      return this.inner.cwsname + '?';
  }
}

export const option = (inner: TypeNode) => new Nullish(inner, false);
export const result = (inner: TypeNode) => new Nullish(inner, true);

export class Vector extends TypeNode {
  constructor(
    public inner: TypeNode,
  ) {
    super();
  }
  
  toRust(ctx: RustableContext): string {
    if (ctx.scope !== 'typedecl')
      throw Error(`Invalid scope '${ctx.scope}' for Vector, expected 'typedecl'`)
    return 'Vec<' + this.inner.toRust(ctx) + '>';
  }
  
  get cwsname() {
    if (this.inner.cwsname)
      return this.inner.cwsname + '[]';
  }
  
  static of(inner: TypeNode) {
    return new Vector(inner);
  }
}
