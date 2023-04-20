import * as AST from './ast';
import { SymbolTable } from './util/symbol-table';
import {
  Type,
  Value,
  OptionT,
  Param,
  FnDefn,
  IntT,
  OperatorKey,
  None,
  NoneT,
  Arg,
  CWSString,
  ErrorMsg,
  StringT,
  InterfaceDefn,
  ContractDefn,
  ContractInstance,
  StructDefn,
  EnumDefn,
  ListT,
  AddressT,
  U8_T,
  U128_T,
  StateMap,
  StateItem,
  CWSBool,
  Indexable,
  TupleT,
  MapKey,
  StructInstance,
  ExecMsgT,
  ListInstance,
  ErrorT,
  InstantiateMsgT,
  Err_UnwrapNone,
  Err_Generic,
  TupleInstance,
  EnumVariantUnitDefn,
  DecT,
  IndexableValue,
  MethodDefn,
  AnyT,
} from './stdlib';

//region <HELPER FUNCTIONS>

export function arg(val: Value, name?: string) {
  return new Arg(val, name);
}

export function args(
  a_pos: Value[] = [],
  a_named: { [name: string]: Value } = {}
): Arg[] {
  return a_pos
    .map((v) => arg(v))
    .concat(Object.keys(a_named).map((name) => arg(a_named[name], name)));
}

export function idx(ix: number) {
  return args([IntT.value(BigInt(ix))]);
}

function operator<O extends AST.Op>(op: O): OperatorKey<O> {
  return ('#operator' + op) as OperatorKey<O>;
}

//endregion <HELPER FUNCTIONS>

//region <INTERPRETER>

export interface CWScriptInterpreterContext {
  files: {
    [filename: string]: AST.SourceFile;
  };

  env?: {
    [globalName: string]: any;
  };
}

export class CWScriptInterpreter extends SymbolTable {
  visitor: CWScriptInterpreterVisitor;
  constructor(public ctx: CWScriptInterpreterContext) {
    super({}, new SymbolTable(ctx.env));
    this.visitor = new CWScriptInterpreterVisitor(this);
    Object.keys(this.ctx.files).forEach((filename) => {
      this.visitor.visit(this.ctx.files[filename]);
    });
  }

  callFn(fn: FnDefn, args: Arg[]) {
    return this.visitor.callFn(fn, args);
  }
}

//endregion <INTERPRETER>

//region <VISITOR>

export class Failure {
  constructor(public error: Value<CWSString | ErrorMsg>) {}
}

export class Return {
  constructor(public value: Value) {}
}

export class CWScriptInterpreterVisitor extends AST.CWScriptASTVisitor {
  public ctx: any;
  scope: SymbolTable;

  constructor(public interpreter: CWScriptInterpreter) {
    super();
    this.scope = interpreter;
  }

  //region <PERVASIVES>

  visitSourceFile(node: AST.SourceFile) {
    node.forEach((x) => this.visit(x));
  }

  visitParam(node: AST.Param) {
    let name = node.name.value;
    let ty = node.ty !== null ? this.visitType(node.ty!) : undefined;
    let default_ =
      node.default_ !== null ? this.visit<Value>(node.default_) : undefined;

    if (node.optional) {
      if (ty === undefined) {
        throw new Error(`Optional param '${name}?' must have a type`);
      }
      ty = new OptionT(ty);
      if (default_ === undefined) {
        default_ = None;
      }
    }

    if (default_ !== undefined) {
      if (ty === undefined) {
        ty = default_.ty;
      } else if (!default_.ty.isSubOf(ty)) {
        // check that default value is of the correct type
        throw new Error(
          `Default for param '${name}' is not compatible with ${ty.name} (got ${default_.ty.name})`
        );
      }
    }

    return new Param(name, ty, default_);
  }

  visitType(node: AST.AST): Type {
    let res = this.visit(node);
    if (res instanceof Type) {
      return res;
    } else if (res instanceof Value && res.isOfType(NoneT)) {
      return NoneT;
    } else {
      throw new Error(`Expected type, got ${res}`);
    }
  }

  //endregion <PERVASIVES>

  //region <TOP-LEVEL STATEMENTS>
  visitInterfaceDefn(node: AST.InterfaceDefn) {
    let prevScope = this.scope;
    let name = node.name.value;
    let interfaceDefn = this.scope.subscope(new InterfaceDefn(name));
    this.scope = interfaceDefn;

    node.body.children.forEach((x) => {
      if (x instanceof AST.StructDefn) {
        interfaceDefn.setSymbol(x.name!.value, this.visit<StructDefn>(x));
      }

      if (x instanceof AST.EnumDefn) {
        interfaceDefn.setSymbol(x.name.value, this.visit<EnumDefn>(x));
      }

      if (x instanceof AST.ErrorDefn) {
        interfaceDefn.setSymbol(
          'error#' + x.name!.value,
          this.visit<StructDefn>(x)
        );
      }

      if (x instanceof AST.EventDefn) {
        interfaceDefn.setSymbol(
          'event#' + x.name!.value,
          this.visit<StructDefn>(x)
        );
      }
    });

    this.interpreter.setSymbol(name, interfaceDefn);
    this.scope = prevScope;
  }

  visitContractDefn(node: AST.ContractDefn) {
    let prevScope = this.scope;
    let name = node.name.value;
    this.scope = this.scope.subscope(new ContractDefn(name));

    node.body.children.forEach((x) => {
      if (x instanceof AST.StructDefn) {
        this.scope.setSymbol(x.name!.value, this.visit<StructDefn>(x));
      }

      if (x instanceof AST.EnumDefn) {
        this.scope.setSymbol(x.name.value, this.visit<EnumDefn>(x));
      }

      if (x instanceof AST.FnDefn) {
        console.log('visiting fn defn', x.name!.value);
        let name = x.name!.value;
        if (x.fallible) {
          name += '#!';
        }
        this.scope.setSymbol(name, this.scope.subscope(this.visitFnDefn(x)));
      }

      if (x instanceof AST.StateDefnBlock) {
        x.descendantsOfType(AST.StateDefnItem).forEach((itemDefn) => {
          this.scope.setSymbol(
            'state#' + itemDefn.name.value,
            new StateItem(itemDefn.name.value, this.visit(itemDefn.ty))
          );
        });
        x.descendantsOfType(AST.StateDefnMap).forEach((mapDefn) => {
          this.scope.setSymbol(
            'state#' + mapDefn.name.value,
            new StateMap(
              mapDefn.name.value,
              mapDefn.mapKeys.map((mk) => this.visit<MapKey>(mk)),
              this.visitType(mapDefn.ty),
              mapDefn.default_ !== null
                ? this.visit(mapDefn.default_)
                : undefined
            )
          );
        });
      }

      if (x instanceof AST.ErrorDefn) {
        this.scope.setSymbol(
          '#error#' + x.name!.value,
          this.visitStructDefn(x)
        );
      }

      if (x instanceof AST.EventDefn) {
        this.scope.setSymbol(
          '#event#' + x.name!.value,
          this.visitStructDefn(x)
        );
      }

      if (x instanceof AST.InstantiateDefn) {
        this.visitInstantiateDefn(x);
      }

      if (x instanceof AST.ExecDefn) {
        this.visitExecDefn(x);
      }

      if (x instanceof AST.QueryDefn) {
        this.visitQueryDefn(x);
      }
    });

    this.interpreter.setSymbol(name, this.scope);
    this.scope = prevScope;
  }

  //endregion <TOP-LEVEL STATEMENTS>

  //region <TYPE EXPRESSIONS>

  visitTypePath(node: AST.TypePath): Type {
    let segments = node.segments.map((x) => x.value);
    // start at the first segment, and keep going until we resolve the final segment
    let curr = this.scope.getSymbol(segments[0]);
    for (let i = 1; i < segments.length; i++) {
      curr = curr.getSymbol(segments[i]);
    }
    return curr;
  }

  visitOptionT(node: AST.OptionT): OptionT {
    let ty = this.visitType(node.ty);
    return new OptionT(ty);
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
    let params = node.params.map((p, i) => {
      if (!p.name) {
        throw new Error(`${name}: missing name for struct ${i}`);
      }
      if (!p.ty) {
        throw new Error(`${name}: missing type for member ${p.name!.value}`);
      }
      let ty = this.visit(p.ty!);
      let default_ = p.default_ ? this.visit(p.default_) : undefined;
      if (p.optional) {
        ty = new OptionT(ty);
        default_ = p.default_ ?? None;
      }
      return new Param(p.name.value, ty, default_);
    });

    return new StructDefn(name, params);
  }

  visitEnumDefn(node: AST.EnumDefn): EnumDefn {
    let name = node.name.value;
    let enumDefn = new EnumDefn(name);
    node.variants.forEach((v) => {
      if (v instanceof AST.EnumVariantStruct) {
        let structDefn = this.visitStructDefn(v);
        enumDefn.structVariant(name, structDefn.params);
      }

      if (v instanceof AST.EnumVariantUnit) {
        enumDefn.unitVariant(name);
      }
    });
    return enumDefn;
  }

  visitListT(node: AST.ListT) {
    if (node.len === null) {
      return new ListT(this.visit(node.ty));
    } else {
      let ty = this.visitType(node.ty);
      return new TupleT(Array(node.len).fill(ty));
    }
  }

  //endregion <TYPE EXPRESSIONS>

  //region <CONTRACT ITEMS>

  visitErrorDefn = (node: AST.ErrorDefn) => this.visitStructDefn(node);
  visitEventDefn = (node: AST.EventDefn) => this.visitStructDefn(node);

  visitMapKeyDefn(node: AST.MapKeyDefn) {
    let ty = this.visitType(node.ty);
    let name = node.name !== null ? node.name.value : undefined;
    return new MapKey(ty, name);
  }

  visitFnDefn(node: AST.FnDefn) {
    let name = node.name.value;
    let params = node.params.map((p) => this.visit<Param>(p));
    let fallible = node.fallible;
    if (fallible) {
      name += '#!';
    }
    let retTy = node.retTy !== null ? this.visit(node.retTy) : undefined;
    return new FnDefn(name, fallible, params, retTy, node.body);
  }

  /**
   * This visits the function definition for the instantiate message.
   * @param node
   */
  visitInstantiateDefn(node: AST.InstantiateDefn) {
    const instantiateMsg = this.visitStructDefn(node);
    instantiateMsg.name = (this.scope as ContractDefn).name + '.#instantiate';
    instantiateMsg.structFn.name = instantiateMsg.name;
    let params = node.params.map((p) => this.visit<Param>(p));
    let instantiateImpl = this.scope.subscope(
      new FnDefn('#instantiate', false, params, undefined, node.body)
    );
    this.scope.setSymbol('#instantiate', instantiateMsg);
    this.scope.setSymbol('#instantiate#impl', instantiateImpl);
  }

  visitExecDefn(node: AST.ExecDefn) {
    let execMsg = this.visitStructDefn(node);
    execMsg.name = `exec ${(this.scope as ContractDefn).name}.#${
      node.name.value
    }`;
    let params = node.params.map((p) => this.visit<Param>(p));
    let execImpl = this.scope.subscope(
      new FnDefn(execMsg.name, false, params, undefined, node.body)
    );
    this.scope.setSymbol(`#exec#${node.name.value}`, execImpl);
    this.scope.setSymbol(`#exec${node.name.value}#impl`, execImpl);
  }

  visitQueryDefn(node: AST.QueryDefn) {
    let queryMsg = this.visitStructDefn(node);
    queryMsg.name = `query ${(this.scope as ContractDefn).name}.#${
      node.name.value
    }`;

    let params = node.params.map((p) => this.visit<Param>(p));
    let queryImpl = this.scope.subscope(
      new FnDefn(
        queryMsg.name,
        false,
        params,
        node.retTy !== null ? this.visit(node.retTy) : undefined,
        node.body
      )
    );

    this.scope.setSymbol(`#query#${node.name.value}`, queryImpl);
    this.scope.setSymbol(`#query${node.name.value}#impl`, queryImpl);
  }

  //endregion <CONTRACT ITEMS>

  //region <STATEMENTS>
  visitBlock(node: AST.Block) {
    let res = None;
    for (let stmt of node.children) {
      res = this.visit(stmt);
    }
    return res;
  }

  visitLetStmt(node: AST.LetStmt) {
    if (node.expr !== null) {
      let val = this.visit<Value>(node.expr);
      if (node.binding instanceof AST.IdentBinding) {
        this.scope.setSymbol(node.binding.name.value, val);
      } else if (node.binding instanceof AST.TupleBinding) {
        if (!val.isOfTypeClass(TupleT) && !val.isOfTypeClass(ListT)) {
          throw new Error(
            `tried to unpack ${val} as tuple of ${node.binding.bindings.length} elements`
          );
        }
        node.binding.bindings.forEach((symbol, i) => {
          let name = symbol.name.value;
          this.scope.setSymbol(
            name,
            (val as unknown as Indexable).getIndex(idx(i))
          );
        });
      } else {
        // struct binding
        if (val.isOfTypeClass(StructDefn)) {
          throw new Error(`tried to unpack ${val} as struct`);
        }
        node.binding.bindings.forEach((symbol) => {
          let name = symbol.name.value;
          this.scope.setSymbol(name, val.getSymbol(name));
        });
      }
    } else {
      throw new Error(`let statement without expression not yet implemented`);
    }
  }

  visitAssignStmt(node: AST.AssignStmt) {
    let rhs = this.visit<Value>(node.rhs);
    if (node.lhs instanceof AST.IdentLHS) {
      this.scope.setSymbol(node.lhs.symbol.value, rhs);
    } else if (node.lhs instanceof AST.DotLHS) {
      let obj = this.visit<SymbolTable>(node.lhs.obj);
      let member = node.lhs.member.value;
      let tbl = obj.firstTableWithSymbol(member);
      if (tbl === undefined) {
        throw new Error(
          `tried to assign to non-existent member ${member} of ${obj}`
        );
      } else {
        tbl.setSymbol(member, rhs);
      }
    } else {
      // index assignment
      let obj = this.visit<Value>(node.lhs.obj);
      if (!obj.isOfTypeClass(ListT) && !obj.isOfTypeClass(TupleT)) {
        throw new Error(`tried to index into non-indexable type ${obj.ty}`);
      } else {
        let args = node.lhs.args.map((x) => new Arg(this.visit(x)));
        (obj as unknown as Indexable).setIndex(args, rhs);
      }
    }
  }

  visitIfStmt(node: AST.IfStmt) {
    let pred = this.visit<Value>(node.pred);
    if (pred.isOfType(CWSBool.TYPE)) {
      if (CWSBool.isTrue(pred)) {
        return this.visit(node.then);
      } else {
        return node.else_ !== null ? this.visit(node.else_) : None;
      }
    } else {
      // @ts-ignore
      throw new Error(`predicate must be a Bool, got ${pred.ty}`);
    }
  }

  visitForStmt(node: AST.ForStmt) {
    let expr = this.visit(node.iter) as Value | ListInstance | TupleInstance;
    // make sure it is iterable
    if (!expr.isOfTypeClass(ListT) && !expr.isOfTypeClass(TupleT)) {
      throw new Error(`tried to iterate over non-iterable type ${expr.ty}`);
    }

    // get iterator
    let iter = expr.getIter();

    // make new scope
    let prevScope = this.scope;
    this.scope = prevScope.subscope();

    // bindings
    if (node.binding instanceof AST.IdentBinding) {
      let name = node.binding.name.value;
      for (let val = iter.next(); val !== undefined; val = iter.next()) {
        this.scope.setSymbol(name, val);
        this.visit(node.body);
      }
    } else if (node.binding instanceof AST.TupleBinding) {
      for (let val = iter.next(); val !== undefined; val = iter.next()) {
        // make sure val is iterable
        if (!val.isOfTypeClass(TupleT) && !val.isOfTypeClass(ListT)) {
          throw new Error(
            `tried to unpack ${val} as tuple of ${node.binding.bindings.length} elements`
          );
        }

        node.binding.bindings.forEach((symbol, i) => {
          this.scope.setSymbol(
            symbol.name.value,
            (val as unknown as Indexable).getIndex(idx(i))
          );
        });
        this.visit(node.body);
      }
    } else {
      for (let val = iter.next(); val !== undefined; val = iter.next()) {
        if (!val.isOfTypeClass(StructDefn)) {
          throw new Error(`tried to unpack ${val} as struct`);
        }
        node.binding.bindings.forEach((symbol) => {
          let name = symbol.name.value;
          this.scope.setSymbol(
            name,
            (val as unknown as StructInstance).getSymbol(name)
          );
        });
        this.visit(node.body);
      }
    }
    this.scope = prevScope;
  }

  visitExecStmt(node: AST.ExecStmt) {
    let val = this.visit<Value>(node.expr);

    // check that val is an ExecMsg// @ts-ignore
    if (!val.ty.isSubOf(ExecMsgT)) {
      throw new Error(`tried to execute non-exec type ${val.ty.name}`);
    } else {
      let res = this.scope.getSymbol<StructInstance>('$res');
      let msgs = res.getSymbol<ListInstance<typeof ExecMsgT>>('msgs');
      this.callFn(msgs.getSymbol<MethodDefn>('push'), args([msgs, val]));
    }
  }

  visitDelegateExecStmt(node: AST.DelegateExecStmt) {
    if (!(node.expr instanceof AST.FnCallExpr)) {
      throw new Error(`delegate_exec! statement must be function call`);
    } else if (!(node.expr.func instanceof AST.Ident)) {
      throw new Error(
        `delegate_exec! statement must directly call an exec #fn`
      );
    } else {
      let fn = this.scope.getSymbol<FnDefn>(
        'exec#' + node.expr.func.value + '#impl'
      );
      let args = node.expr.args.map((x) => new Arg(this.visit(x)));
      return this.callFn(fn, args);
    }
  }

  visitInstantiateStmt(node: AST.InstantiateStmt) {
    if (node.new_) {
      if (!(node.expr instanceof AST.FnCallExpr)) {
        throw new Error(`instantiate!# statement must be function call`);
      } else if (
        !(
          node.expr.func instanceof AST.TypePath ||
          node.expr.func instanceof AST.Ident
        )
      ) {
        throw new Error(
          `instantiate!# statement must directly use a contract name`
        );
      } else {
        let ty: Type;
        if (node.expr.func instanceof AST.TypePath) {
          ty = this.visitType(node.expr.func);
        } else {
          ty = this.scope.getSymbol<Type>(node.expr.func.value);
        }
        if (!(ty instanceof ContractDefn)) {
          throw new Error(`tried to instantiate non-contract type ${ty}`);
        } else {
          let fn = ty.getSymbol<FnDefn>('#instantiate');
          let args = node.expr.args.map((x) => new Arg(this.visit(x)));
          let val = this.callFn(fn, args);
          if (val.ty.isSubOf(InstantiateMsgT)) {
            let res = this.scope.getSymbol<StructInstance>('$res');
            let msgs = res.getSymbol<ListInstance>('msgs');
            msgs.push(val);
          } else {
            throw new Error(
              `tried to instantiate non-InstantiateMsg type ${val.ty.name}`
            );
          }
        }
      }
    } else {
      // not #new
      let val = this.visit<Value>(node.expr);
      if (val.ty.isSubOf(InstantiateMsgT)) {
        let res = this.scope.getSymbol<StructInstance>('$res');
        let msgs = res.getSymbol<ListInstance<typeof InstantiateMsgT>>('msgs');
        msgs.push(val);
      } else {
        throw new Error(
          `tried to instantiate non-InstantiateMsg type ${val.ty.name}`
        );
      }
    }
  }

  visitReturnStmt(node: AST.ReturnStmt) {
    let val = this.visit<Value>(node.expr);
    return new Return(val);
  }

  visitFailStmt(node: AST.FailStmt) {
    let result = this.visit<Value>(node.expr);
    if (!result.isOfType(ErrorT) && !result.isOfType(StringT)) {
      throw new Error(
        `tried to fail with value other than Error or String: ${result}`
      );
    } else {
      if (result.isOfType(StringT)) {
        result = Err_Generic.value(args([], { message: result }));
      }
      return new Failure(result);
    }
  }

  //endregion <STATEMENTS>

  //region <EXPRESSIONS>

  visitArg(node: AST.Arg) {
    const val = this.visit<Value>(node.expr);
    return new Arg(val, node.name !== null ? node.name.value : undefined);
  }

  visitDotExpr(node: AST.DotExpr) {
    const obj: any = this.visit(node.obj);
    if (node.unwrap !== null) {
      (obj as SymbolTable).getSymbol(node.member.value);
    } else if (node.unwrap === AST.UnwrapOp.OR_NONE) {
      if (obj.isOfType(NoneT)) {
        return None;
      } else {
        return (obj as SymbolTable).getSymbol(node.member.value);
      }
    } else {
      if (obj.isOfType(NoneT)) {
        // TODO: result types
        throw new Error(`tried to access member ${node.member.value} of None`);
      } else {
        return (obj as SymbolTable).getSymbol(node.member.value);
      }
    }
  }

  visitAsExpr(node: AST.AsExpr) {
    throw new Error(`not implemented: visitAsExpr`);
  }

  visitIndexExpr(node: AST.IndexExpr) {
    const obj = this.visit<Value>(node.obj);
    if (obj.isOfTypeClass(ListT) || obj.isOfTypeClass(TupleT)) {
      const args = node.args.map((x) => this.visit(x));
      return (obj as unknown as Indexable).getIndex(args);
    } else {
      throw new Error(`tried to index non-tuple/list: ${obj.ty}`);
    }
  }

  visitDColonExpr(node: AST.DColonExpr) {
    const obj = this.visit(node.obj) as SymbolTable;
    return obj.getSymbol(node.member.value);
  }

  callFn(fn: FnDefn, args: Arg[]) {
    // save previous scope
    const prevScope = this.scope; // interpreter

    // set function definition's parent scope to the intermediate scope
    // create a new scope for the function call
    this.scope = fn.subscope();
    fn.setArgsInScope(this.scope, args);

    let result: Value;
    if (fn instanceof MethodDefn) {
      result = fn.call(args.map((x) => x.value));
    } else {
      // evaluate the function body in the new scope
      result = this.visit(fn.body);
    }

    // reset scope
    this.scope = prevScope;
    return result;
  }

  visitFnCallExpr(node: AST.FnCallExpr) {
    const args = node.args.map((x) => this.visit<Arg>(x));
    const func = this.visit(node.func);
    if (func instanceof FnDefn) {
      return this.callFn(func, args);
    } else if (func instanceof StructDefn) {
      return func.value(args);
    } else {
      throw new Error(`tried to call non-function: ${func}`);
    }
  }

  executeBinOp(op: AST.Op, lhs: Value, rhs: Value) {
    return lhs.ty.callOperator(op, lhs, rhs);
  }

  visitBinOpExpr(node: AST.BinOpExpr) {
    const lhs = this.visit(node.lhs);
    const rhs = this.visit(node.rhs);
    return this.executeBinOp(node.op, lhs, rhs);
  }

  visitIsExpr(node: AST.IsExpr) {
    const lhs = this.visit(node.lhs);
    const rhs = this.visitType(node.rhs);
    let result = lhs.isOfType(rhs);
    return node.negative ? CWSBool.FALSE : CWSBool.TRUE;
  }

  visitInExpr(node: AST.InExpr) {
    const lhs = this.visit<Value>(node.lhs);
    const rhs = this.visit<Value>(node.rhs);
    if (rhs.isOfTypeClass(ListT) || rhs.isOfTypeClass(TupleT)) {
      // @ts-ignore
      const items = rhs as IndexableValue;
      if (items.operatorIn(lhs)) {
        return CWSBool.TRUE;
      } else {
        return CWSBool.FALSE;
      }
    } else {
      throw new Error(`tried to check if value is in non-list/tuple: ${rhs}`);
    }
  }

  visitNotExpr(node: AST.NotExpr) {
    const expr = this.visit<Value>(node.expr);

    if (expr.isOfType(CWSBool.TYPE)) {
      return CWSBool.isTrue(expr) ? CWSBool.FALSE : CWSBool.TRUE;
    } else if (expr.isOfType(NoneT)) {
      return CWSBool.TRUE;
    } else {
      throw new Error(
        // @ts-ignore
        `tried to negate on expression other than Bool or None: ${expr.ty}`
      );
    }
  }

  visitNoneCheckExpr(node: AST.NoneCheckExpr) {
    const expr = this.visit<Value>(node.expr);
    return expr.isOfType(NoneT) ? CWSBool.TRUE : CWSBool.FALSE;
  }

  visitTryCatchElseExpr(node: AST.TryCatchElseExpr) {
    let prevScope = this.scope;
    this.scope = prevScope.subscope();
    const result = this.visit(node.body); // Val, ErrorInstance
    if (result.isOfType(ErrorT)) {
      for (let c of node.catch_.toArray()) {
        let ty = this.visitType(c.ty);
        if (result.isOfType(ty)) {
          if (c.name !== null) {
            this.scope.setSymbol(c.name.value, result);
          }
          return this.visit(c.body);
        }
      }
      if (node.else_ !== null) {
        return this.visit(node.else_);
      } else {
        return new Failure(result);
      }
    } else if (result.isOfType(NoneT)) {
      if (node.else_ !== null) {
        return this.visit(node.else_);
      } else {
        return new Failure(Err_UnwrapNone.value([]));
      }
    } else {
      return result;
    }
  }

  visitFailExpr(node: AST.FailExpr) {
    let result = this.visit<Value>(node.expr);
    if (!result.isOfType(ErrorT) && !result.isOfType(StringT)) {
      throw new Error(
        `tried to fail with value other than Error or String: ${result}`
      );
    } else {
      if (result.isOfType(StringT)) {
        result = Err_Generic.value([arg(result, 'message')]);
      }
      return new Failure(result);
    }
  }

  visitClosure(node: AST.Closure) {
    let params = node.params.map((x) => this.visit<Param>(x));
    let retTy = node.retTy !== null ? this.visitType(node.retTy) : undefined;
    return new FnDefn('%anonymous', node.fallible, params, retTy, node.body);
  }

  visitTupleExpr(node: AST.TupleExpr) {
    let exprs = node.exprs.map((x) => this.visit<Value>(x));
    if (exprs.length === 0) {
      return new ListInstance(new ListT(AnyT), []);
    }

    if (exprs.every((x) => x.ty.isEq(exprs[0].ty))) {
      return new ListInstance(new ListT(exprs[0].ty), exprs);
    }

    let tupType = new TupleT(exprs.map((x) => x.ty));
    return new TupleInstance(tupType, exprs);
  }

  visitStructExpr(node: AST.StructExpr) {
    if (node.ty === null) {
      let args: Arg[] = [];
      let ty = new StructDefn(
        '%anonymous',
        node.args.map((m) => {
          let value: any;
          if (m.value === null) {
            value = this.visit(m.name);
          } else {
            value = this.visit(m.value);
          }
          args.push(arg(value, m.name.value));
          return new Param(m.name.value, value.ty);
        })
      );
      return ty.value(args);
    } else {
      let ty = this.visitType(node.ty);
      if (!(ty instanceof StructDefn)) {
        throw new Error(`tried to instantiate non-struct type: ${ty}`);
      }
      let args: Arg[] = [];
      for (let m of node.args.toArray()) {
        let value: any;
        if (m.value === null) {
          value = this.visit(m.name);
        } else {
          value = this.visit(m.value);
        }
        args.push(arg(value, m.name.value));
      }
      return ty.value(args);
    }
  }

  visitUnitVariantExpr(node: AST.UnitVariantExpr) {
    let ty = this.visit<EnumVariantUnitDefn>(node.ty);
    return (ty as unknown as EnumVariantUnitDefn).value(null);
  }

  visitIdent(node: AST.Ident) {
    // special ! function case
    if (
      !this.scope.hasSymbol(node.value) &&
      this.scope.hasSymbol(node.value + '#!')
    ) {
      return this.scope.getSymbol(node.value + '#!');
    }
    return this.scope.getSymbol(node.value);
  }

  visitGroupedExpr(node: AST.GroupedExpr) {
    return this.visit(node.expr);
  }

  visitGrouped2Expr(node: AST.Grouped2Expr) {
    return this.visit(node.expr);
  }

  //endregion <EXPRESSIONS>

  //region <LITERALS>
  visitStringLit(node: AST.StringLit) {
    return StringT.value(node.value);
  }

  visitIntLit(node: AST.IntLit) {
    return IntT.value(BigInt(node.value));
  }

  visitDecLit(node: AST.DecLit) {
    return DecT.value(node.value);
  }

  visitBoolLit(node: AST.BoolLit) {
    if (node.value === 'true') {
      return CWSBool.TRUE;
    } else {
      return CWSBool.FALSE;
    }
  }

  visitNoneLit(node: AST.NoneLit) {
    return None;
  }
  //endregion <LITERALS>
}

//endregion <VISITOR>
