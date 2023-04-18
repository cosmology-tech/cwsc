import type { RustableContext } from '../types';

export class TypeNode {
  constructor(
    public _cwsname?: string,
    protected _rustname?: string,
    protected _fields: TypeFields = TypeFields.empty,
  ) {}
  
  toRust(ctx: RustableContext): string {
    if (ctx.scope === 'typedecl') {
      if (!this.rustname)
        throw Error(`No rustname for ${this.cwsname}`);
      return this.rustname;
    }
    else throw Error(`Cannot convert ${this.cwsname} to Rust in scope ${ctx.scope}`);
  }
  
  /** The `cwsname` is the representation of this `TypeNode` in CWScript. Special types which don't
   * have a direct analog, such as anonymous structs, should be prefixed with '~', as this is a
   * character which cannot be used for user-defined types in CWScript.
   */
  get cwsname() { return this._cwsname }
  get rustname() { return this._rustname }
  get fields() { return this._fields }
}

export class TypeFields<Style extends string = 'tuple' | 'map'> {
  static empty = new TypeFields('tuple');
  constructor(
    public style: Style,
    public fields: Record<string | number, TypeNode> = {},
  ) {}
  
  validate() {
    switch (this.style) {
      case 'tuple': {
        const count = Object.keys(this.fields).length;
        for (let i = 0; i < count; i++) {
          if (!(i in this.fields))
            throw Error(`Tuple field ${i} missing`);
        }
        break;
      }
    }
  }
  
  static Map(fields: Record<string, TypeNode>) {
    return new TypeFields('map', fields);
  }
  static Tuple(fields: TypeNode[]) {
    return new TypeFields('tuple', Object.fromEntries(fields.map((field, i) => [i, field])));
  }
}
