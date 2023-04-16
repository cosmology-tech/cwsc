import * as AST from './ast';
import { Defn } from 'rust';
import Enum = Defn.Enum;

export interface CWScriptInterpreterContext {
  files: {
    [filename: string]: AST.SourceFile;
  };

  env?: {
    [globalName: string]: any;
  };
}

export class SymbolTable {
  constructor(public symbols: any = {}, public parent?: SymbolTable) {}

  getSymbol(name: string): any {
    if (name in this.symbols) {
      return this.symbols[name];
    }

    if (this.parent) {
      return this.parent.getSymbol(name);
    }

    throw new Error(`Symbol ${name} not found`);
  }

  setSymbol(name: string, value: any) {
    this.symbols[name] = value;
  }

  subscope<T extends SymbolTable>(x: T): T {
    x.parent = this;
    return x;
  }
}

export class CWScriptInterpreter extends SymbolTable {
  constructor(public ctx: CWScriptInterpreterContext) {
    super({}, new SymbolTable(ctx.env));
    let visitor = new CWScriptInterpreterVisitor(this);
    Object.keys(this.ctx.files).forEach((filename) => {
      visitor.visit(this.ctx.files[filename]);
    });
  }
}

export class Param extends SymbolTable {
  constructor(public name: string, public ty: Type, public default_?: any) {
    super();
  }
}

export class Arg extends SymbolTable {
  constructor(public value: Value, public name?: string) {
    super();
  }
}

export class Type extends SymbolTable {
  constructor(public name: string) {
    super();
  }

  typecheck(value: Value): boolean {
    return value.ty instanceof this.constructor;
  }

  value(value: any): Value {
    return new Value(this, value);
  }

  static newType(name: string) {
    return new (class extends Type {
      constructor() {
        super(name);
      }
    })();
  }
}

export class Value extends SymbolTable {
  constructor(public ty: Type, public value?: any) {
    super();
  }
}

export class OptionalType extends Type {
  constructor(public inner: Type) {
    super(`${inner.name}?`);
  }

  typecheck(value: Value): boolean {
    return value.ty instanceof NoneType || this.inner.typecheck(value);
  }
}

export class ListType extends Type {
  constructor(public inner: Type, public size?: number) {
    super(`${inner.name}${size ? `[${size}]` : '[]'}`);
  }

  typecheck(value: Value): boolean {
    if (value.ty instanceof ListType) {
      // check inner types match
      return this.inner == value.ty.inner && this.size === value.ty.size;
    } else {
      return false;
    }
  }
}

export class NoneType extends Type {
  constructor() {
    super('None');
  }
}

export class StructDefn extends Type {
  constructor(public name: string, public params: Param[]) {
    super(name);
  }

  call(args: Arg[]): StructInstance {
    // ensure positional arguments come before named arguments
    let firstNamedArgIx = args.findIndex((x) => x.name !== undefined);
    // check if any args after first named arg are positional
    let nextPosArg = args.findIndex(
      (x, i) => x.name === undefined && i > firstNamedArgIx
    );
    if (firstNamedArgIx !== -1 && nextPosArg !== -1) {
      throw new Error(
        `${this.name}: positional arguments must come before named arguments`
      );
    }

    // see if there are enough arguments
    if (
      args.length < this.params.filter((x) => x.default_ !== undefined).length
    ) {
      throw new Error(`${this.name}: too few arguments`);
    }

    let params: { [k: string]: any } = {};

    args.forEach((arg, i) => {
      if (arg.name === undefined) {
        if (i >= this.params.length) {
          throw new Error(`${this.name}: too many positional arguments`);
        }
        params[this.params[i].name] = arg.value;
      } else {
        params[arg.name] = arg.value;
      }
    });
    return this.make(params);
  }

  make(args: { [k: string]: any }): StructInstance {
    let instance = new StructInstance(this);
    for (let m of this.params) {
      let arg = args[m.name];
      if (arg === undefined) {
        if (m.default_ === undefined) {
          throw new Error(`${this.name}: missing required member ${m.name}`);
        }
        instance.setSymbol(m.name, m.default_);
      } else {
        if (!m.ty.typecheck(arg)) {
          throw new Error(
            `${this.name}: invalid type for member ${m.name} - expected ${m.ty.name}, got ${arg.ty.name}`
          );
        }
        instance.setSymbol(m.name, arg);
      }
    }
    return instance;
  }
}

export class EnumDefn extends Type {
  constructor(public name: string) {
    super(name);
  }

  typecheck(value: Value): boolean {
    // TODO: need to change this to be more strict,
    //  which involves making StructVariant and UnitVariant types
    return value.ty.name.startsWith(this.name + '.#');
  }
}

export class StructInstance extends Value {}

export class ErrorDefn extends StructDefn {}
export class EventDefn extends StructDefn {}

export class ContractDefn extends SymbolTable {
  constructor(public name: string) {
    super();
  }

  instantiate(args: any[]) {
    this.getSymbol('#instantiate').call(args);
  }

  exec(fnName: string, args: any[]) {
    this.getSymbol('exec#' + fnName).call(args);
  }

  query(fnName: any, args: any[]) {
    return this.getSymbol('query#' + fnName).call(args);
  }
}

export class StateMap extends SymbolTable {
  constructor(public prefix: string, public mapKeys: Type[], public ty: Type) {
    super();
  }
}

export class StateItem extends SymbolTable {
  constructor(public key: string, public ty: Type) {
    super();
  }
}

export class InterfaceDefn extends SymbolTable {
  constructor(public name: string) {
    super();
  }
}

export class CWScriptInterpreterVisitor extends AST.CWScriptASTVisitor {
  public ctx: any;
  scope: SymbolTable;

  constructor(public interpreter: CWScriptInterpreter) {
    super();
    this.scope = interpreter;
  }

  visitSourceFile(node: AST.SourceFile) {
    node.forEach((x) => this.visit(x));
  }

  visitParam(node: AST.Param) {
    return {
      name: node.name.value,
      ty: node.ty ? this.visit(node.ty) : undefined,
      default_: node.default_ ? this.visit(node.default_) : undefined,
    };
  }

  visitStructDefn(
    node:
      | AST.ErrorDefn
      | AST.EventDefn
      | AST.StructDefn
      | AST.InstantiateDefn
      | AST.InstantiateDecl
      | AST.ExecDefn
      | AST.ExecDecl
      | AST.QueryDefn
      | AST.QueryDecl
  ): StructDefn {
    let name: string;
    if (
      node instanceof AST.InstantiateDefn ||
      node instanceof AST.InstantiateDecl
    ) {
      name = `#instantiate`;
    } else {
      name = node.name?.value ?? '%anonymous';
    }
    let params: any = [];
    node.params.forEach((m, i) => {
      if (!m.name) {
        throw new Error(`${name}: missing name for member ${i}`);
      }
      if (!m.ty) {
        throw new Error(`${name}: missing type for member ${m.name!.value}`);
      }
      let ty = this.visit(m.ty!);
      let default_ = m.default_ ? this.visit(m.default_) : undefined;
      if (m.optional) {
        ty = new OptionalType(ty);
        default_ = m.default_ ?? new NoneType();
      }

      params.push({
        name: m.name.value,
        ty,
        default_,
      });
    });

    return new StructDefn(name, params);
  }

  visitEnumDefn(node: AST.EnumDefn): EnumDefn {
    let name = node.name.value;
    let enumDefn = new EnumDefn(name);
    node.variants.forEach((v, i) => {
      if (v instanceof AST.EnumVariantStruct) {
        let structDefn = this.visitStructDefn(v);
        structDefn.name = name + '.#' + v.name.value;
        enumDefn.setSymbol('#' + v.name.value, this.visitStructDefn(v));
      }

      if (v instanceof AST.EnumVariantUnit) {
        enumDefn.setSymbol(
          '#' + v.name.value,
          new Type(name + '.#' + v.name.value)
        );
      }
    });
    return enumDefn;
  }

  visitErrorDefn = (node: AST.ErrorDefn) => this.visitStructDefn(node);
  visitEventDefn = (node: AST.EventDefn) => this.visitStructDefn(node);

  visitInterfaceDefn(node: AST.InterfaceDefn) {
    let prevScope = this.scope;
    let name = node.name.value;
    let interfaceDefn = this.scope.subscope(new InterfaceDefn(name));
    this.scope = interfaceDefn;

    node.body.children.forEach((x) => {
      if (x instanceof AST.StructDefn) {
        interfaceDefn.setSymbol(x.name!.value, this.visitStructDefn(x));
      }

      if (x instanceof AST.EnumDefn) {
        interfaceDefn.setSymbol(x.name.value, this.visitEnumDefn(x));
      }

      if (x instanceof AST.ErrorDefn) {
        interfaceDefn.setSymbol(
          'error#' + x.name!.value,
          this.visitErrorDefn(x)
        );
      }

      if (x instanceof AST.EventDefn) {
        interfaceDefn.setSymbol(
          'event#' + x.name!.value,
          this.visitEventDefn(x)
        );
      }
    });

    this.interpreter.setSymbol(name, interfaceDefn);
    this.scope = prevScope;
  }

  visitTypePath(node: AST.TypePath): Type {
    let segments = node.segments.map((x) => x.value);
    // start at the first segment, and keep going until we resolve the final segment
    let curr = this.scope.getSymbol(segments[0]);
    for (let i = 1; i < segments.length; i++) {
      let next = curr.getSymbol(segments[i]);
      if (next === undefined) {
        throw new Error(`type ${segments[i]} not found`);
      }
      if (!(next instanceof Type)) {
        throw new Error(`${segments[i]} is not a type`);
      }
      curr = next;
    }
    return curr;
  }

  visitListT(node: AST.ListT) {
    return new ListType(this.visit(node.ty), node.size ? node.size : undefined);
  }

  visitContractDefn(node: AST.ContractDefn) {
    let prevScope = this.scope;
    let name = node.name.value;
    let contractDefn = this.scope.subscope(new ContractDefn(name));
    this.scope = contractDefn;

    node.body.children.forEach((x) => {
      if (x instanceof AST.StructDefn) {
        contractDefn.setSymbol(x.name!.value, this.visitStructDefn(x));
      }

      if (x instanceof AST.EnumDefn) {
        contractDefn.setSymbol(x.name.value, this.visitEnumDefn(x));
      }

      if (x instanceof AST.StateDefnBlock) {
        x.descendantsOfType(AST.StateDefnItem).forEach((itemDefn) => {
          contractDefn.setSymbol(
            'state#' + itemDefn.name.value,
            new StateItem(itemDefn.name.value, this.visit(itemDefn.ty))
          );
        });
        x.descendantsOfType(AST.StateDefnMap).forEach((mapDefn) => {
          contractDefn.setSymbol(
            'state#' + mapDefn.name.value,
            new StateMap(
              mapDefn.name.value,
              mapDefn.mapKeys.map((k) => this.visit(k)),
              this.visit(mapDefn.ty)
            )
          );
        });
      }

      if (x instanceof AST.ErrorDefn) {
        contractDefn.setSymbol(
          'error#' + x.name!.value,
          this.visitErrorDefn(x)
        );
      }

      if (x instanceof AST.EventDefn) {
        contractDefn.setSymbol(
          'event#' + x.name!.value,
          this.visitEventDefn(x)
        );
      }

      if (x instanceof AST.InstantiateDefn) {
        contractDefn.setSymbol('#instantiate', this.visitStructDefn(x));
        contractDefn.setSymbol('#instantiate#impl', []);
      }

      if (x instanceof AST.ExecDefn) {
        contractDefn.setSymbol('exec#' + x.name.value, this.visitStructDefn(x));
        contractDefn.setSymbol('exec#' + x.name.value + '#impl', []);
      }

      if (x instanceof AST.QueryDefn) {
        contractDefn.setSymbol(
          'query#' + x.name.value,
          this.visitStructDefn(x)
        );
        contractDefn.setSymbol('query#' + x.name.value + '#impl', []);
      }
    });

    this.scope = prevScope;
    this.interpreter.setSymbol(name, contractDefn);
  }

  visitExecDefn(node: AST.ExecDefn) {
    let name = node.name.value;
    let params = node.params.map((p) => this.visitParam(p));
    let tup = node.tup;
    let body = this.visitBlock(node.body);
    return { name, tup, params, body };
  }

  visitQueryDefn(node: AST.QueryDefn) {
    let name = node.name.value;
    let params = node.params.map((p) => this.visitParam(p));
    let retTy = node.retTy ? this.visit(node.retTy) : undefined;
    let body = this.visitBlock(node.body);
    return { name, params, retTy, body };
  }

  visitBlock(node: AST.Block) {
    return node.map((x) => this.visit(x));
  }
}

export const Address = Type.newType('Address');
export const Int = Type.newType('Int');
export const String = Type.newType('String');
export const U8 = Type.newType('U8');
export const U64 = Type.newType('U64');
export const U128 = Type.newType('U128');
export const Binary = Type.newType('Binary');

export const STDLIB = {
  Address,
  Int,
  String,
  U8,
  U64,
  U128,
  Binary,
};
