import type { CWSExpr } from './nodes';
import { RustableCallback, RustableContext, Rustify } from './types';
import { resolveType, TypeArg } from './typesys';

export const block = (nodes: Rustify[], sep = ''): RustableCallback =>
  ({ nl, indented }: RustableContext) => {
    if (!nodes.length) return '{}';
    const nl2 = indented.nl;
    return `{${nl2}` +
      nodes.map(node => rustify(node, indented)).join(sep + nl2) +
      `${nl}}`;
  };

export function mod(name: string, nodes: Rustify[]): RustableCallback {
  const modname = snakecase(name);
  return (ctx) => `mod ${modname} ${block(nodes)(ctx.clone({ scope: 'mod', modpath: [...ctx.modpath, modname] }))}`;
}

export const dict = (map: [string, Rustify][] | Record<string, Rustify>): RustableCallback =>
  (ctx) => {
    const entries = Array.isArray(map) ? map : Object.entries(map);
    return block(entries.map(([key, value]) =>
      `${key}: ${rustify(value, ctx)},`
    ))(ctx)
  };

export interface FnOpts {
  name: string;
  pub?: boolean;
  args?: [string, TypeArg][];
  ret?: TypeArg;
  body: Rustify[];
}

export function fn({
  name,
  pub = false,
  args = [],
  ret,
  body: nodes,
}: FnOpts): RustableCallback {
  return ctx => {
    let result = '';
    if (pub) result += 'pub ';
    ctx = ctx.enter('block');
    
    let { indented } = ctx;
    result += `fn ${name}(\n${indented.indent}`;
    result += args.map(([arg, type]) => `${arg}: ${resolveType(type, indented.enter('typedecl'))}`).join(`,\n${indented.indent}`);
    result += `\n${ctx.indent})`;
    
    if (ret) result += ` -> ${resolveType(ret, ctx.enter('typedecl'))}`;
    result += ' ' + block(nodes, ';')(ctx);
    
    return result;
  }
}

export function rustify(node: Rustify, ctx: RustableContext = new RustableContext()): string {
  switch (typeof node) {
    case 'string': return node;
    case 'function': return node(ctx);
    default: return node.toRust(ctx);
  }
}

export function rustifyMacros(macros: string[], ctx: RustableContext): string {
  if (!macros.length) return '';
  return '#[' + macros.join(', ') + ']' + ctx.nl;
}

export const pascalcase = (str: string) => str[0].toUpperCase() + str.slice(1).replace(/_./g, s => s[1].toUpperCase());
export const snakecase = (str: string) => str.replace(/[a-z][A-Z]/g, s => s[0] + '_' + s[1].toLowerCase());
