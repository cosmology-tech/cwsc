import * as AST from './ast';

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
}

export class CWScriptInterpreter extends SymbolTable {
  constructor(public ctx: CWScriptInterpreterContext) {
    super(new SymbolTable(ctx.env));
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
  constructor(public value: any, public name?: string) {
    super();
  }
}

export abstract class Type extends SymbolTable {
	constructor(public name: string) {
		super();
	}

	typecheck(value: Value): boolean {
		return value.ty instanceof this.constructor;
	}
}

export class Value extends SymbolTable {
	constructor(public ty: Type) {
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
			return this.inner ==value.ty.inner && this.size === value.ty.size;
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
  constructor(public name: string, public members: Param[]) {
    super(name);
  }

  call(args: Arg[]): StructInstance {
    // ensure positional arguments come before named arguments
    let firstNamedArgIx = args.findIndex((x) => x.name !== undefined);
    // check if any args after first named arg are positional
    let nextPosArg = args.findIndex(
      (x, i) => x.name === undefined && i > firstNamedArgIx
    );
    if (nextPosArg !== -1) {
      throw new Error(
        `${this.name}: positional arguments must come before named arguments`
      );
    }

    let params: { [k: string]: any } = {};

    args.forEach((arg, i) => {
      if (arg.name === undefined) {
        if (i >= this.members.length) {
          throw new Error(`${this.name}: too many positional arguments`);
        }
        params[this.members[i].name] = arg.value;
      } else {
        params[arg.name] = arg.value;
      }
    });
    return this.make(params);
  }

  make(args: { [k: string]: any }): StructInstance {
    let instance = new StructInstance(this);
    for (let m of this.members) {
      let arg = args[m.name];
      if (arg === undefined) {
        if (m.default_ === undefined) {
          throw new Error(`${this.name}: missing required member ${m.name}`);
        }
        instance.setSymbol(m.name, m.default_);
      } else {
        if (!m.ty.typecheck(arg)) {
          throw new Error(`${this.name}: invalid type for member ${m.name}`);
        }
        instance.setSymbol(m.name, arg);
      }
    }
    return instance;
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

  constructor(public interpreter: CWScriptInterpreter) {
    super();
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

  visitStructDefn(node: AST.ErrorDefn | AST.EventDefn | AST.StructDefn): StructDefn {
    let name = node.name?.value ?? '%anonymous';
    let members: any = [];

    node.members.forEach((m, i) => {
			if (m.name === undefined) {
				throw new Error(`${name}: missing name for member ${i}`);
			}
			if (m.ty === undefined) {
				throw new Error(`${name}: missing type for member ${m.name!.value}`);
			}
			let ty = this.visit(m.ty!);
			let default_ = m.default_ ? this.visit(m.default_) : undefined;
			if (m.optional) {
				ty = new OptionalType(ty);
				default_ = m.default_ ?? new NoneType();
			}

      members.push({
        name: m.name.value,
        ty,
				default_,
      });
    });

		return new StructDefn(name, members);
  }

  visitErrorDefn = (node: AST.ErrorDefn) => this.visitStructDefn(node);
  visitEventDefn = (node: AST.EventDefn) => this.visitStructDefn(node);

  visitInterfaceDefn(node: AST.InterfaceDefn) {
    let name = node.name.value;
    let res = new InterfaceDefn(name);

    node.descendantsOfType(AST.ErrorDefn).forEach((x) => {
      let { name, members } = this.visitErrorDefn(x);
      res.setSymbol('error#' + name, members);
    });
    node.descendantsOfType(AST.EventDefn).forEach((x) => {
      let { name, members } = this.visitEventDefn(x);
      res.setSymbol('event#' + name, members);
    });
    node.descendantsOfType(AST.InstantiateDecl).forEach((x) => {
      let params = x.params.map((p) => this.visitParam(p));
      res.setSymbol('#instantiate', params);
    });
    node.descendantsOfType(AST.ExecDecl).forEach((x) => {
      let params = x.params.map((p) => this.visitParam(p));
      res.setSymbol('exec#' + x.name.value, params);
    });
    node.descendantsOfType(AST.QueryDecl).forEach((x) => {
      let params = x.params.map((p) => this.visitParam(p));
      res.setSymbol('query#' + x.name.value, params);
    });

    this.interpreter.setSymbol(name, res);
  }

  visitContractDefn(node: AST.ContractDefn) {
    let name = node.name.value;
    let contractDefn = new ContractDefn(name);

    let state: any = {};
    let errors: any = {};
    let events: any = {};
    let instantiate: any;
    let exec: any = [];
    let query: any = [];

    node.descendantsOfType(AST.StateDefnBlock).forEach((s) => {
      s.descendantsOfType(AST.StateDefnItem).forEach((itemDefn) => {
        contractDefn.setSymbol(
          'state#' + itemDefn.name.value,
					new StateItem(itemDefn.name.value, this.visit(itemDefn.ty)
        );
      });
      s.descendantsOfType(AST.StateDefnMap).forEach((mapDefn) => {
        contractDefn.setSymbol(
          'state#' + mapDefn.name.value,
          new StateMap(
            mapDefn.name.value,
            mapDefn.mapKeys.map((k) => this.visit(k)),
            this.visit(mapDefn.ty)
          )
        );
      });
    });
    node.descendantsOfType(AST.ErrorDefn).forEach((x) => {
      let { name, members } = this.visitErrorDefn(x);
      errors[name] = members;
    });
    node.descendantsOfType(AST.EventDefn).forEach((x) => {
      let { name, members } = this.visitEventDefn(x);
      events[name] = members;
    });

    node.descendantsOfType(AST.InstantiateDefn).forEach((x) => {
      instantiate = this.visitInstantiateDefn(x);
    });

    node.descendantsOfType(AST.ExecDefn).forEach((x) => {
      exec.push(this.visitExecDefn(x));
    });

    node.descendantsOfType(AST.QueryDefn).forEach((x) => {
      query.push(this.visitQueryDefn(x));
    });

    this.interpreter.setSymbol(name, contractDefn);
  }

  visitInstantiateDefn(node: AST.InstantiateDefn) {
    let params = node.params.map((p) => this.visitParam(p));
    return { params, body: this.visitBlock(node.body) };
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
