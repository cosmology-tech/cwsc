import type { CWSExpr, Contract, FnNode } from './nodes';
import type { TypeNode } from './typesys';

export type Rustify = string | Rustable | RustableCallback;
export type RustifyScope = 'global' | 'block' | 'typedecl' | 'expr' | 'mod' | 'contract' | 'struct' | 'enum' | 'variant.tuple' | 'variant.map';

export interface Rustable {
  toRust(ctx: RustableContext): string;
}

namespace Rustable {
  export const toRustable = (cb: RustableCallback): Rustable => ({ toRust: cb });
  export const toCallback = (node: Rustable): RustableCallback => node.toRust.bind(node);
}

export type RustableCallback = (ctx: RustableContext) => string;

export interface RustableContextOptions {
  scope?: RustifyScope;
  indentText?: string;
  indentLevel?: number;
  frames?: Frame[];
  contract?: Contract;
  fn?: FnNode;
  modpath?: string[];
  _nextTmpVarId?: number;
}
/** `RustableContext` provides contextual information to `Rustable.prototype.toRust` methods and
 * `RustableCallback`s. They're intended to be immutable, thus you should create and pass down
 * clones where necessary. For this purpose, various methods are provided to create new contexts
 * with the same properties except some alteration, such as indent level, scope, or frame stack.
 * There are thus no inverse methods, because you should typically simply return to a previously
 * created context.
 */
export class RustableContext {
  scope: RustifyScope;
  indentText: string;
  indentLevel: number;
  
  frames: Frame[];
  contract: Contract | null;
  /** The CWS function associated with this context. */
  fn: FnNode | null;
  modpath: string[] = [];
  
  _nextTmpVarId = 0;
  
  constructor(opts: RustableContextOptions = {}) {
    this.scope = opts.scope ?? 'global';
    this.indentText = opts.indentText ?? '  ';
    this.indentLevel = opts.indentLevel ?? 0;
    this.frames = opts.frames ?? [];
    this.contract = opts.contract ?? null;
    this.fn = opts.fn ?? null;
    this.modpath = opts.modpath ?? [];
    this._nextTmpVarId = opts._nextTmpVarId ?? 0;
  }
  
  /** Get the newline string with subsequent indentation. */
  get nl() { return `\n${this.indent}` }
  /** Get the indentation string for this given level. */
  get indent() { return this.indentText.repeat(this.indentLevel) }
  
  /** Create a new context with the same properties, but with an increased indent level. */
  get indented() {
    const clone = this.clone();
    clone.indentLevel++;
    return clone;
  }
  
  /** Enter a new context scope, e.g. 'if' or 'contract'. */
  enter = (scope: RustifyScope) => this.clone({ scope });
  
  /** Push a new frame onto the frame stack, returning a new `RustableContext`. */
  pushFrame = (frame: Frame) => this.clone({ frames: [...this.frames, frame] });
  
  /** Set a new or shadow an existing variable. */
  pushVar = (name: string, type: TypeNode) => this.pushFrame({ symbols: {[name]: { name, type }}});
  
  /** Push a new temporary variable onto the frame stack.
   * 
   * @returns the name of the temporary variable and the new context.
   */
  pushTmpVars = (...types: TypeNode[]): [string[], RustableContext] => {
    const names = types.map((_, i) => `__tmp${this._nextTmpVarId+i}`);
    return [
      names,
      this.clone({
        frames: [
          ...this.frames!,
          {
            symbols: Object.fromEntries(
              names.map((_, i) => [names[i], { name: names[i], type: types[i] }])
            ),
          },
        ],
        _nextTmpVarId: this._nextTmpVarId + types.length,
      })
    ];
  }
  
  getSymbol(name: string) {
    for (let i = this.frames.length - 1; i >= 0; --i) {
      const frame = this.frames[i];
      const value = frame.symbols[name];
      if (value) return value;
    }
  }
  
  /** Get the "fully qualified name" using the `modpath` property. */
  getFullName(name: string) {
    return ['crate', ...this.modpath, name].join('::');
  }
  
  clone(opts: RustableContextOptions = {}): RustableContext {
    const clone = new RustableContext();
    clone.scope = opts.scope ?? this.scope;
    clone.indentText = opts.indentText ?? this.indentText;
    clone.indentLevel = opts.indentLevel ?? this.indentLevel;
    clone.frames = opts.frames ?? this.frames;
    clone.contract = opts.contract ?? this.contract;
    return clone;
  }
}

export interface PushVarParameters {
  name?: string;
  type?: TypeNode;
  init?: CWSExpr;
}

export interface Frame {
  symbols: Record<string, RustSymbol>;
}

export interface RustSymbol {
  name: string;
  type: TypeNode;
  cwsSymbol?: string;
}
