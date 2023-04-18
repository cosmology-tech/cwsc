import type { RustableContext } from '../../types';
import { DepsMutTypeNode, DepsTypeNode, InfoTypeNode, VoidType } from '../../typesys';
import { BoolType, EnvTypeNode, ErrorTypeNode, TypeNode, UintTypeNode, unwrapType } from '../../typesys';
import { CWSExprStmt, CWSStmt } from '../stmts';
import type { Struct } from '../structs';

export type CWSScope = CWSExpr | CWSBlock;

export abstract class CWSExpr {
  /** Get the `TypeNode` resembling the type of the evaluated result */
  abstract getType(ctx: RustableContext): TypeNode;
  
  /** Translate `CWSExpr` into its `RustExpr` equivalent. This `RustExpr` has "dependencies" which
   * must be resolved before its translation can be inserted into the generated code.
   */
  abstract translate(ctx: RustableContext): RustExpr;
}

export class CWSIdentifierExpr extends CWSExpr {
  constructor(
    public identifier: string,
  ) {
    super();
    this.identifier = identifier.trim();
  }
  
  translate(ctx: RustableContext): RustExpr {
    let path = this.identifier.split('.');
    let root = path.shift();
    if (!root) throw Error('Empty identifier');
    
    switch (root) {
      case '$env': root = 'ctx.env'; break;
      case '$deps': root = 'ctx.deps'; break;
      case '$info': root = 'ctx.info'; break;
    }
    
    return expr`${[root, ...path].join('.')}`;
  }
  
  getType(ctx: RustableContext): TypeNode {
    const path = this.identifier.split('.');
    
    let node: TypeNode;
    switch (path.shift()) {
      case '$env': node = EnvTypeNode; break;
      case '$deps':
        if (['instantiate', 'execution'].includes(ctx.fn?.kind || ''))
          node = DepsMutTypeNode;
        else
          node = DepsTypeNode;
        break;
      case '$info': node = InfoTypeNode; break;
      default: {
        const symbol = ctx.getSymbol(path[0]);
        if (!symbol) return new ErrorTypeNode('unknown identifier');
        node = symbol.type;
      }
    }
    
    while (path.length) {
      const prop = path.shift()!;
      if (prop in node.fields.fields)
        node = node.fields.fields[prop];
      else
        return new ErrorTypeNode(`Invalid property path ${this.identifier} (no property '${prop}' in ${node.cwsname ?? node.rustname ?? 'unknown type'})`);
    }
    return node;
  }
}

export class CWSLiteralExpr extends CWSExpr {
  constructor(
    public value: any,
    public type: TypeNode,
  ) {
    super();
  }
  
  translate(ctx: RustableContext): RustExpr {
    if (this.type instanceof UintTypeNode) {
      if (this.type.bits < 64) {
        return expr`${this.value+''}u${this.type.bits}`;
      } else if (this.type.bits < 256) {
        return expr`cosmwasm_std::Uint${this.type.bits}::from(${this.value+''}u${this.type.bits})`;
      } else {
        // TODO: construct `::new` from bytes
        throw Error('not yet implemented');
      }
    } else if (this.type.cwsname === 'bool') {
      return this.value ? expr`true` : expr`false`;
    } else {
      return expr`${this.value+''}`;
    }
  }
  
  getType(ctx: RustableContext): TypeNode {
    return this.type;
  }
}

export class CWSBinaryExpr extends CWSExpr {
  constructor(
    public op: '+' | '-' | '*' | '/' | '%' | '==' | '!=' | '<' | '<=' | '>' | '>=' | '&&' | '||' | 'is' | 'or' | 'and',
    public lhs: CWSExpr,
    public rhs: CWSExpr,
  ) {
    super();
  }
  
  translate(ctx: RustableContext): RustExpr {
    const op = this.op
      // 'or' is an alias for '||', and 'and' is an alias for '&&'
      .replace('or', '||')
      .replace('and', '&&');
    
    if (op === 'is') {
      // TODO: distinguish between tuple & map types
      return expr`if let ${this.rhs}(..) = ${this.lhs} { true } else { false }`;
    }
    else if (['+', '-', '*', '/', '%', '==', '!=', '<', '<=', '>', '>=', '&&', '||'].includes(op)) {
      return expr`(${this.lhs} ${op} ${this.rhs})`;
    }
    else throw Error(`Unknown binary operator: ${op}`);
  }
  
  getType(ctx: RustableContext): TypeNode {
    // TODO: type promotion, i.e. u8 + u16 should ensure the lhs is converted to u16 before adding
    if (this.op === 'is') return BoolType;
    
    const ltype = this.lhs.getType(ctx), rtype = this.rhs.getType(ctx);
    
    if (!ltype || !rtype || ltype.rustname !== rtype.rustname)
      throw Error('Currently, both sides of a binary expression must have the same type');
    return ltype;
  }
}

export class CWSUnaryPrefixExpr extends CWSExpr {
  constructor(
    public op: '-' | '+' | '!' | 'not',
    public expr: CWSExpr,
  ) {
    super();
  }
  
  translate(ctx: RustableContext): RustExpr {
    const op = this.op.replace('not', '!');
    
    if (['-', '+', '!'].includes(op)) {
      return expr`(${op}${this.expr})`;
    }
    
    else throw Error(`Unknown unary operator: ${op}`);
  }
  
  getType(ctx: RustableContext): TypeNode {
    switch (this.op) {
      case '!':
      case 'not':
        return BoolType;
      case '-':
      case '+':
        return this.expr.getType(ctx);
      default: throw Error(`Unknown unary operator: ${this.op}`);
    }
  }
}

export class CWSUnaryPostfixExpr extends CWSExpr {
  constructor(
    public op: '?' | '!',
    public expr: CWSExpr,
  ) {
    super();
  }
  
  translate(ctx: RustableContext): RustExpr {
    const op: string = this.op;
    
    switch (op) {
      case '?':
        return expr`${this.expr}.cws_nullish()`;
      case '!':
        return expr`${this.expr}.cws_unwrap()?`;
      default:
        throw Error(`Unknown unary operator: ${op}`);
    }
  }
  
  getType(ctx: RustableContext): TypeNode {
    switch (this.op) {
      case '?':
        return BoolType;
      case '!':
        return unwrapType(this.expr.getType(ctx));
      default: throw Error(`Unknown unary operator: ${this.op}`);
    }
  }
}

export class CWSReadStateExpr extends CWSExpr {
  constructor(
    public name: string,
  ) {
    super();
  }
  
  translate(ctx: RustableContext): RustExpr {
    if (!ctx.contract)
      return expr`panic!("Error: state variable outside of contract")`;
    return expr`STATE.load(ctx.deps.storage)?.${this.name}`;
  }
  
  getType(ctx: RustableContext) {
    if (!ctx.contract) return new ErrorTypeNode('Error: state variable outside of contract');
    return ctx.contract!.states[this.name];
  }
}

/** This differs from the `block` function found in utils in that it is more specialized & allows
 * introspection of the block's contents.
 */
export class CWSBlock extends CWSExpr {
  constructor(
    public statements: CWSStmt[],
  ) {
    super();
  }
  
  translate(ctx: RustableContext): RustExpr {
    return new RustBlockExpr(this.statements);
  }
  
  getType(ctx: RustableContext): TypeNode {
    const last = this.statements[this.statements.length - 1];
    if (last instanceof CWSExprStmt) {
      return last.expr.getType(ctx);
    } else {
      return VoidType;
    }
  }
}

export class CWSStructExpr extends CWSExpr {
  constructor(
    public struct: Struct,
    public fields: Record<string, CWSExpr>,
  ) {
    super();
  }
  
  translate(ctx: RustableContext): RustExpr {
    if (!this.struct.name) throw Error('Cannot create an anonymous struct');
    const tpl: any[] = [this.struct.name, '{ '];
    Object.entries(this.fields).forEach(([name, expr], i) => {
      tpl.push(name, ': ', expr);
      if (i < Object.keys(this.fields).length - 1) tpl.push(', ');
    });
    tpl.push(' }');
    return new RustExpr(tpl);
  }
  
  getType(ctx: RustableContext): TypeNode {
    return this.struct;
  }
}

/** `RustExpr` represents a piece of Rust code with certain `CWSExpr` dependencies. */
export class RustExpr {
  constructor(
    /** Pieces of  */
    protected _tpl: (string | CWSExpr)[],
  ) {}
  
  /** Translate this RustExpr into Rust source code. Does not include dependency lines of code.
   * `tmpstore` should be a map of `CWSExpr`s, including this expr's dependencies, to (temporary)
   * variable names. This can also be a non-temporary variable name. It only matters that it is
   * a valid symbol within the Rust context.
   */
  toRust(ctx: RustableContext, tmpstore: Map<CWSExpr, string>): string {
    if (ctx.scope !== 'expr')
      throw Error('RustExpr can only be used in an expression context');
    
    this.deps.forEach(dep => {
      if (!tmpstore.has(dep))
        throw Error(`RustExpr has unmet dependencies`);
    });
    
    return this._tpl.map(
      x => typeof x === 'string'
      ? x
      : tmpstore.get(x)!
    ).join('');
  }
  
  get deps() { return this._tpl.filter(x => x instanceof CWSExpr) as CWSExpr[]; }
}

/** A specialized `RustExpr` which has no dependencies and a specialized `toRust` method. */
class RustBlockExpr extends RustExpr {
  constructor(
    protected _stmts: CWSStmt[],
  ) {
    super([]);
  }
  
  toRust(ctx: RustableContext): string {
    // this method differs from `block` helper in that the context must be updated as we move through
    // the statements
    const nl = ctx.nl;
    const nl2 = ctx.indented.nl;
    let result = '{' + nl2;
    
    let ctx2 = ctx.indented.enter('block');
    result += this._stmts.map(s => {
      const code = s.toRust(ctx2);
      ctx2 = s.augmentContext(ctx2);
      return code;
    }).join(';' + nl2);
    
    result += nl + '}';
    return result;
  }
}

/** Tagged function for producing dependent `Rustify` factories */
function expr(_strings: TemplateStringsArray, ...args: (string | number | CWSExpr)[]): RustExpr {
  return new RustExpr(compressStrings(combineTagged(_strings as any, args)));
}

function combineTagged<T>(strings: string[], args: T[]): (string | T)[] {
  const all = [];
  for (let i = 0; i < strings.length; i++) {
    all.push(strings[i]);
    if (i < args.length) all.push(args[i]);
  }
  return all;
}

/** Subsequent strings in `all` will be combined into a single, such that on every string follows a `T`. */
function compressStrings<T>(all: (string | number | boolean | T)[]): (string | T)[] {
  const result: any[] = [];
  let current = '';
  for (const item of all) {
    if (item instanceof CWSExpr) {
      if (current) result.push(current);
      current = '';
      result.push(item);
    } else {
      current += item+'';
    }
  }
  if (current) result.push(current);
  return result;
}
