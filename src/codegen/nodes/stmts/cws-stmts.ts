import { block, rustify } from '../../utils';
import type { RustSymbol, Rustable, RustableContext, Rustify } from '../../types';
import { resolveType, TypeNode, VoidType } from '../../typesys';
import type { CWSBlock, CWSExpr, CWSScope, RustExpr } from '../exprs';

export abstract class CWSStmt implements Rustable {
  toRust(ctx: RustableContext) {
    if (ctx.scope !== 'block')
      throw Error(`Invalid scope '${ctx.scope}' for CWSStmt, expected 'block'`);
    return this.translate(ctx).join(`;${ctx.nl}`);
  }
  
  /** Augment/transform the current context, returning a new instance. The resulting context should
   * represent the state of the transpiler after this statement has been translated.
   */
  augmentContext(ctx: RustableContext): RustableContext {
    return ctx;
  }
  
  /** Translate this statement into one or more lines of Rust code. */
  abstract translate(ctx: RustableContext): Rustify[];
}

export class CWSLetStmt extends CWSStmt {
  constructor(
    public decls: CWSLetDecl[],
  ) {
    super();
  }
  
  translate(ctx: RustableContext): Rustify[] {
    // in order to support `let a = "foo", b = format!("bar {}", a);`, we need to keep track of
    // symbols in between each declaration as well
    const deps: Rustify[] = [];
    const lets: Rustify[] = [];
    
    for (const decl of this.decls) {
      let curr = 'let ' + decl.name;
      if (decl.type)
        curr += `: ${resolveType(decl.type, ctx.enter('typedecl'))}`;
      if (decl.init) {
        const [_deps, _expr] = renderExpr(decl.init, ctx.enter('expr'));
        deps.push(..._deps);
        curr += ` = ${_expr}`;
      }
      lets.push(curr);
      ctx = ctx.pushFrame({ symbols: { [decl.name]: decl.getSymbol(ctx) } });
    }
    
    return [
      ...deps,
      ...lets,
    ]
  }
  
  augmentContext(ctx: RustableContext): RustableContext {
    // unlike in `translate`, `augmentedContext` is "compressed". Once past initialization, we can
    // simply assume that all symbols are available and compress them into a single frame, rather
    // than a frame per symbol.
    return ctx.pushFrame({
      symbols: Object.fromEntries(this.decls.map(
        decl => [decl.name, decl.getSymbol(ctx)]
      )),
    });
  }
}

interface CWSLetDeclOptions {
  name: string;
  type?: TypeNode;
  init?: CWSExpr;
}
export class CWSLetDecl {
  name: string;
  type: TypeNode | undefined;
  init: CWSExpr | undefined;
  
  constructor({ name, type, init }: CWSLetDeclOptions) {
    this.name = name;
    this.type = type;
    this.init = init;
    if (!type && !init)
      throw Error('CWSLetDecl must have either a type or an initializer');
  }
  
  getType(ctx: RustableContext): TypeNode {
    if (this.type) return this.type;
    if (!this.init) throw Error('CWSLetDecl must have either a type or an initializer');
    return this.init.getType(ctx);
  }
  
  getSymbol(ctx: RustableContext): RustSymbol {
    return {
      name: this.name,
      type: this.getType(ctx),
      cwsSymbol: this.name,
    }
  }
}

/** A statement which simply consists of an expression. */
export class CWSExprStmt extends CWSStmt {
  constructor(
    public expr: CWSExpr,
  ) {
    super();
  }
  
  translate(ctx: RustableContext): Rustify[] {
    const [deps, expr] = renderExpr(this.expr, ctx.enter('expr'));
    return [
      ...deps,
      expr,
    ];
  }
}

export class CWSIfStmt extends CWSStmt {
  constructor(
    public branches: [CWSExpr, CWSBlock][],
    public elseBranch?: CWSBlock,
  ) {
    super();
  }
  
  toRust(ctx: RustableContext): string {
    if (!this.branches.length) throw Error('Empty if expression');
    
    let code = '';
    let deps: string[] = [];
    
    code += this.branches.map(([cond, branch]) => {
      const [_deps1, _cond, ctx2] = renderExpr(cond, ctx.enter('expr'));
      const [_deps2, _branch] = renderExpr(branch, ctx2.enter('block'));
      deps.push(..._deps1, ..._deps2);
      return `if ${_cond} ${_branch}`;
    }).join(' else ');
    
    if (this.elseBranch) {
      const [_deps, _else] = renderExpr(this.elseBranch, ctx.enter('block'));
      deps.push(..._deps);
      code += ` else ${_else}`;
    }
    
    return deps.join(`;${ctx.nl}`) + (deps.length ? `;${ctx.nl}` : '') + code;
  }
  
  translate(ctx: RustableContext): Rustify[] {
    throw Error('not implemented');
  }
}

// TODO: we can likely leverage stmt interface to avoid re-reading from state by tracking special local state variables
// TODO: batch subsequent state writes into a single update
export class CWSWriteStateStmt extends CWSStmt {
  constructor(
    public name: string,
    public value: CWSExpr,
  ) {
    super();
  }
  
  translate(ctx: RustableContext): Rustify[] {
    if (ctx.scope !== 'block')
      throw Error(`Invalid scope '${ctx.scope}' for CWSWriteStateStmt, expected 'block'`);
    if (!ctx.contract)
      throw Error('CWSWriteStateStmt must be inside a contract');
    
    const [deps, expr] = renderExpr(this.value, ctx.enter('expr'));
    return [
      ...deps,
      `STATE.update(ctx.deps.storage, |mut state| -> Result<State, ContractError> ` + block([
        `state.${this.name} = ${expr};`,
        'Ok(state)',
      ])(ctx) + ')?;',
    ]
  }
}

// TODO: throw predefined contract error rather than just generic
export class CWSFailStmt extends CWSStmt {
  constructor(
    public message?: string,
  ) {
    super();
  }
  
  translate(): Rustify[] {
    const msg = (this.message ?? '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return [`return Err(ContractError::Generic("${msg}"))`];
  }
}

export class CWSReturnStmt extends CWSStmt {
  constructor(
    public value?: CWSExpr,
  ) {
    super();
  }
  
  translate(ctx: RustableContext): Rustify[] {
    if (ctx.scope !== 'block')
      throw Error(`Invalid scope '${ctx.scope}' for CWSReturnStmt, expected 'block'`);
    if (!this.value) {
      return ['return ()'];
    } else {
      const [deps, expr] = renderExpr(this.value, ctx.enter('expr'));
      return [
        ...deps,
        'return ' + expr,
      ];
    }
  }
  
  // getType will be relevant when we add return type inferrence
  getType(ctx: RustableContext): TypeNode {
    return this?.value?.getType(ctx) ?? VoidType;
  }
}

/** Render the given `CWSExpr`. This produces 3 distinct elements: (1) the dependency code, which
 * are full Rust statements to be inserted at some point before (2) the expression Rust code, which
 * is to be inserted appropriately within the given context, and (3) the new context to be used in
 * code generation after this expression.
 * 
 * For a `return` statement, the calling code could look like:
 * ```typescript
 * const [deps, rust, ctx2] = renderExpr(cws, ctx);
 * return [
 *   ...deps,
 *   `return ${rust};`,
 * ];
 * ```
 */
function renderExpr(expr: CWSExpr, ctx: RustableContext): [string[], string, RustableContext] {
  const tmpstore = new Map<CWSExpr, string>();
  const rust = expr.translate(ctx);
  
  type TmpVar = {
    cws: CWSExpr;
    rust: RustExpr;
    varname: string;
  }
  
  const deps: TmpVar[] = [];
  const symbols: Record<string, RustSymbol> = {};
  let varcount = 0;
  const collectDeps = (expr: CWSExpr, rust?: RustExpr, skipDep = false) => {
    rust = rust ?? expr.translate(ctx);
    rust.deps.forEach(dep => collectDeps(dep));
    const varname = '__cws_tmp' + (ctx._nextTmpVarId + varcount++).toString().padStart(2, '0');
    symbols[varname] = {
      name: varname,
      type: expr.getType(ctx),
    }
    if (!skipDep)
      deps.push({
        varname,
        rust,
        cws: expr,
      });
    tmpstore.set(expr, varname);
  }
  collectDeps(expr, rust, true);
  
  const ctx2 = ctx.pushFrame({ symbols });
  return [
    deps.map(dep => `let ${dep.varname} = ` + dep.rust.toRust(ctx, tmpstore)),
    rust.toRust(ctx, tmpstore), ctx2
  ];
}
