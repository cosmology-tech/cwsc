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
  ContractReference,
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
  SizedIndexableValue,
  MethodDefn,
  AnyT,
  CWSAddress,
  InstantiateMsg,
  CtxEnvBlockInfoT,
  CtxEnvContractInfoT,
  CtxEnvT,
  CoinT,
  CtxInfoT,
  CtxResT,
  BoolT,
  EventMsg,
  EventT,
} from './stdlib';
import { CWScriptParser } from './parser';
import { getPosition, TextView } from './util/position';
import chalk from 'chalk';

import path from 'path';

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
  sources: {
    [filename: string]: string;
  };

  env?: {
    [globalName: string]: any;
  };
}

export enum ContextType {
  INSTANTIATE,
  EXEC,
  QUERY,
}

export interface Env {
  block: {
    height: number;
    time: number;
    chain_id: string;
  };

  contract: {
    address: string;
  };
}

export interface MessageInfo {
  sender: string;
  funds: Array<{
    denom: string;
    amount: string;
  }>;
}

export function buildCtxEnv(env: Env) {
  return CtxEnvT.make({
    block: CtxEnvBlockInfoT.make({
      height: IntT.value(BigInt(env.block.height)),
      time: IntT.value(BigInt(env.block.time)),
      chain_id: StringT.value(env.block.chain_id),
    }),
    contract: CtxEnvContractInfoT.make({
      address: AddressT.value(env.contract.address),
    }),
  });
}

export const CoinListT = new ListT(CoinT);

export function buildCtxInfo(info: MessageInfo) {
  return CtxInfoT.make({
    sender: AddressT.value(info.sender),
    funds: CoinListT.value(
      info.funds.map((fund) =>
        CoinT.make({
          denom: StringT.value(fund.denom),
          amount: IntT.value(BigInt(fund.amount)),
        })
      )
    ),
  });
}

export function buildCtxRes() {
  return CtxResT.make({
    messages: new ListT(AnyT).value([]),
    events: new ListT(AnyT).value([]),
    data: None,
  });
}

export function buildMutState(contract: ContractDefn) {
  contract.getSymbol('#state');
}

export function buildMutCtx(
  contract: ContractDefn,
  state: any,
  env: Env,
  info: MessageInfo
): SymbolTable {
  let ctx = new SymbolTable();
  ctx.setSymbol('$', contract);
  ctx.setSymbol('$state', state);
  ctx.setSymbol('$env', buildCtxEnv(env));
  ctx.setSymbol('$info', buildCtxInfo(info));
  ctx.setSymbol('$res', buildCtxRes());
  return ctx;
}

export function buildQueryCtx(contract: ContractDefn, state: any, env: Env) {
  let ctx = new SymbolTable();
  ctx.setSymbol('$', contract);
  ctx.setSymbol('$state', state);
  ctx.setSymbol('$env', buildCtxEnv(env));
  return ctx;
}

export class StateMapAccessor extends Value implements Indexable {
  public prefix: string;
  public mapKeys: MapKey[];
  public ty: Type;
  public default_: Value;

  constructor(public state: ContractState, public mapDefn: StateMap) {
    super(ContractStateT, null);
    this.prefix = mapDefn.prefix;
    this.mapKeys = mapDefn.mapKeys;
    this.ty = mapDefn.ty;
    this.default_ = mapDefn.default_;
  }

  getIndex(args: Arg[]): Value {
    let key = this.buildKey(args);
    return this.state.symbols.get(key, this.default_);
  }

  setIndex(args: Arg[], val: Value) {
    let key = this.buildKey(args);
    this.state.symbols[key] = val;
  }

  removeIndex(args: Arg[]) {
    let key = this.buildKey(args);
    this.state.symbols[key].delete(key);
  }

  buildKey(args: Arg[]): string {
    if (args.length !== this.mapKeys.length) {
      throw new Error(
        `Invalid number of index arguments for map '${this.prefix}'`
      );
    }

    let keySegments = [this.prefix];
    for (let i = 0; i < args.length; i++) {
      if (!args[i].value.isInstanceOf(this.mapKeys[i].ty)) {
        let keyNameHint = this.mapKeys[i].name
          ? `(${this.mapKeys[i].name})`
          : '';
        throw new Error(
          `Invalid index argument for map '${this.prefix}' key #${i} ${keyNameHint} - expected ${this.mapKeys[i].ty} but got ${args[i].value}`
        );
      }
      // TODO: this is a hack to get around the fact that we don't have a way to
      // serialize a value to a string. We should probably add a method to the
      // Value interface for this.
      keySegments.push(`#${i}:${args[i].value.toString()}#`);
    }
    return keySegments.join(`#`);
  }
}

export const ContractStateT = Type.makeUnitT('ContractState');

export class ContractState extends Value {
  public stateInfo: {
    [key: string]: StateItem | StateMap;
  } = {};

  constructor(
    public interpreter: CWScriptInterpreter,
    public contract: ContractDefn
  ) {
    // get all the state items and state maps
    // if we have item, it can be accessed directly
    // if we have a map, we need to access it via index
    super(ContractStateT, null);
    Object.values(contract.symbols).map((sym) => {
      if (sym instanceof StateItem) {
        this.stateInfo[sym.key] = sym;
      }
      if (sym instanceof StateMap) {
        this.stateInfo[sym.prefix] = sym;
      }
    });
  }

  getSymbol<T = any>(name: string): T {
    return this.getOwnSymbol(name);
  }

  getOwnSymbol<T = any>(name: string): T {
    if (!(name in this.stateInfo)) {
      throw new Error(
        `Contract ${this.contract.name} has no state variable ${name}`
      );
    }
    let s = this.stateInfo[name];
    if (s instanceof StateItem) {
      return this.symbols[name] || s.ty.defaultValue();
    } else {
      return new StateMapAccessor(this, s) as any;
    }
  }

  firstTableWithSymbol(name: string): SymbolTable | undefined {
    if (name in this.stateInfo) {
      return this;
    }

    return undefined;
  }
}

export class ContractInstance<
  C extends ContractDefn = ContractDefn
> extends Value<C, null> {
  public state: ContractState;

  constructor(public interpreter: CWScriptInterpreter, public ty: C) {
    super(ty, null);
    this.state = new ContractState(interpreter, ty);
  }

  instantiate(env: Env, info: MessageInfo, args: Arg[]) {
    let context = buildMutCtx(this.ty, this.state, env, info);
    let impl = this.ty.getSymbol<FnDefn>('#instantiate#impl');
    this.interpreter.callFn(impl, args, context);
    return context.getSymbol('$res');
  }

  exec(env: Env, info: MessageInfo, name: string, args: Arg[]) {
    let context = buildMutCtx(this.ty, this.state, env, info);
    let impl = this.ty.getSymbol<FnDefn>(`#exec${name}#impl`);
    this.interpreter.callFn(impl, args, context);
    return context.getSymbol('$res');
  }

  query(env: Env, name: string, args: Arg[]) {
    let context = buildQueryCtx(this.ty, this.state, env);
    let impl = this.ty.getSymbol<FnDefn>(`#query${name}#impl`);
    return this.interpreter.callFn(impl, args, context);
  }
}

export class CWScriptInterpreter extends SymbolTable {
  public visitor?: CWScriptInterpreterVisitor;

  constructor(public ctx: CWScriptInterpreterContext) {
    super({}, new SymbolTable(ctx.env));
    for (let file in ctx.sources) {
      let sourceText = this.ctx.sources[file];
      this.runCode(sourceText, file);
    }
  }

  runCode(sourceText: string, file: string = ':memory:') {
    let { ast, diagnostics } = CWScriptParser.parse(sourceText);

    if (!ast) {
      return;
    }
    this.visitor = new CWScriptInterpreterVisitor(this, sourceText, file);
    this.visitor.visit(ast); // run
  }

  callFn(fn: FnDefn, args: Arg[], scope?: SymbolTable) {
    if (this.visitor !== undefined) {
      return this.visitor.callFn(fn, args, scope);
    } else {
      throw new InterpreterError('Interpreter not initialized');
    }
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

export class DebugCall extends FnDefn {
  constructor() {
    super('debug', true, [], NoneT);
  }

  call(interpreter: CWScriptInterpreter, node?: AST.AST) {
    debugger;
  }
}

export class InterpreterError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class CWScriptInterpreterVisitor extends AST.CWScriptASTVisitor {
  public ctx: any;
  public tv: TextView;
  scopes: SymbolTable[];

  get scope(): SymbolTable {
    return this.scopes[this.scopes.length - 1];
  }

  pushScope(scope: SymbolTable) {
    this.scopes.push(scope);
  }

  popScope() {
    this.scopes.pop();
  }

  public file: string;

  constructor(
    public interpreter: CWScriptInterpreter,
    public sourceText: string,
    file: string
  ) {
    super();
    this.scopes = [interpreter];
    this.tv = new TextView(sourceText);
    // make absolute path
    this.file = path.resolve(file);
  }

  makeError(message: string, node: AST.AST) {
    if (!node.$ctx) {
      return new InterpreterError(message);
    }

    let originalMsg = message;

    let pos = getPosition(node.$ctx);
    // get range of node
    let range = this.tv.range(pos.start, pos.end, true)!;
    message = `Error occured in node: '${node.constructor.name}'`;

    let fnDefn = node.nearestAncestorWhere(
      (n) =>
        n instanceof AST.FnDefn ||
        n instanceof AST.InstantiateDefn ||
        n instanceof AST.ReplyDefn ||
        n instanceof AST.ExecDefn ||
        n instanceof AST.QueryDefn
    );

    if (fnDefn) {
      let fnName: string;
      let prefix = '';
      if (fnDefn instanceof AST.InstantiateDefn) {
        fnName = '#instantiate';
      } else {
        fnName = (fnDefn as any).name.value;
      }

      if (fnDefn instanceof AST.ExecDefn) {
        prefix = 'exec ';
        fnName = '#' + fnName;
      } else if (fnDefn instanceof AST.QueryDefn) {
        prefix = 'query ';
        fnName = '#' + fnName;
      } else if (fnDefn instanceof AST.ReplyDefn) {
        prefix = 'reply ';
      }

      let cDefn = fnDefn.nearestAncestorWhere(
        (n) => n instanceof AST.ContractDefn || n instanceof AST.InterfaceDefn
      );

      if (cDefn) {
        message += ` inside '${prefix}${(cDefn as any).name.value}.${fnName}'`;
      } else {
        message += ` inside '${prefix}${fnName}'`;
      }
    }

    message += `\n\n`;
    message += `Source: ${this.file}:${range.start.line}:${range.start.character}-${range.end.line}:${range.end.character}\n\n`;

    let lineNoWidth = 5;
    let gutterWidth = lineNoWidth + 2;
    let makeLine = (line: number, text: string) => {
      return chalk.dim(
        `${line.toString().padStart(lineNoWidth, ' ')}| ${text}\n`
      );
    };

    let makeErrorLine = (line: number, text: string) => {
      return `${chalk.redBright(
        chalk.bold(line.toString().padStart(lineNoWidth, ' ')) + '|'
      )} ${text}\n`;
    };

    this.tv.surroundingLinesOfRange(range, 5, true).forEach((x) => {
      // if this is the starting line, make a pointer
      // if range.start.line <= x.line <= range.end.line, highlight the line
      if (x.line >= range.start.line && x.line <= range.end.line) {
        // only highlight the part of the line that is in the range
        let start = x.line === range.start.line ? range.start.character - 1 : 0;
        let end =
          x.line === range.end.line ? range.end.character - 1 : x.text.length;
        message += makeErrorLine(
          x.line,
          chalk.dim(x.text.slice(0, start)) +
            chalk.bold(chalk.redBright(x.text.slice(start, end))) +
            chalk.dim(x.text.slice(end))
        );
        if (x.line === range.end.line) {
          message += chalk.bold(
            chalk.yellow(
              ' '.repeat(gutterWidth + range.end.character - 2) +
                '^ ' +
                originalMsg +
                '\n'
            )
          );
        }
      } else {
        message += makeLine(x.line, x.text);
      }
    });
    message += `...\n\n`;

    return new InterpreterError(message);
  }

  visit<T = any>(node: AST.AST): T {
    try {
      return super.visit(node);
    } catch (e) {
      if (e instanceof InterpreterError) {
        throw e;
      } else {
        throw this.makeError((e as any).message, node);
      }
    }
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
        throw this.makeError(
          `Optional param '${name}?' must have a type`,
          node
        );
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
        throw this.makeError(
          `Default for param '${name}' is not compatible with ${ty.name} (got ${default_.ty.name})`,
          node.default_!
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
      throw this.makeError(`Expected type, got ${res}`, node);
    }
  }

  //endregion <PERVASIVES>

  //region <TOP-LEVEL STATEMENTS>
  visitInterfaceDefn(node: AST.InterfaceDefn) {
    let name = node.name.value;
    let interfaceDefn = this.scope.subscope(new InterfaceDefn(name));
    this.pushScope(interfaceDefn);

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

    this.popScope();
    this.interpreter.setSymbol(name, interfaceDefn);
  }

  visitContractDefn(node: AST.ContractDefn) {
    let name = node.name.value;
    let contractDefn = this.scope.subscope(new ContractDefn(name));
    this.pushScope(contractDefn);

    node.body.children.forEach((x) => {
      if (x instanceof AST.StructDefn) {
        this.scope.setSymbol(x.name!.value, this.visit<StructDefn>(x));
      }

      if (x instanceof AST.EnumDefn) {
        this.scope.setSymbol(x.name.value, this.visit<EnumDefn>(x));
      }

      if (x instanceof AST.FnDefn) {
        let name = x.name!.value;
        this.scope.setSymbol(
          x.fallible ? name + '#!' : name,
          this.scope.subscope(this.visitFnDefn(x))
        );
      }

      if (x instanceof AST.StateDefnBlock) {
        x.descendantsOfType(AST.StateDefnItem).forEach((itemDefn) => {
          let key = itemDefn.name.value;
          let ty = this.visitType(itemDefn.ty);
          let default_ =
            itemDefn.default_ !== null
              ? this.visit<Value>(itemDefn.default_!)
              : ty.defaultValue();
          let item = new StateItem(key, ty, default_);
          this.scope.setSymbol('#state#' + key, item);
        });
        x.descendantsOfType(AST.StateDefnMap).forEach((mapDefn) => {
          let prefix = mapDefn.name.value;
          let ty = this.visitType(mapDefn.ty);
          let mapKeys = mapDefn.mapKeys.map((mk) => this.visit<MapKey>(mk));
          let default_ =
            mapDefn.default_ !== null
              ? this.visit<Value>(mapDefn.default_)
              : ty.defaultValue();
          let map = new StateMap(prefix, mapKeys, ty, default_);

          this.scope.setSymbol('#state#' + mapDefn.name.value, map);
        });
      }

      if (x instanceof AST.ErrorDefn) {
        this.scope.setSymbol('#error#' + x.name!.value, this.visitErrorDefn(x));
      }

      if (x instanceof AST.EventDefn) {
        this.scope.setSymbol('#event#' + x.name!.value, this.visitEventDefn(x));
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
    this.popScope();
    this.scope.setSymbol(name, contractDefn);
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
        throw this.makeError(`${name}: missing name for struct ${i}`, p);
      }
      if (!p.ty) {
        throw this.makeError(
          `${name}: missing type for member ${p.name!.value}`,
          p
        );
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

  visitErrorDefn = (node: AST.ErrorDefn) => {
    let struct = this.visitStructDefn(node);
    return new ErrorMsg(struct.name, struct.params);
  };
  visitEventDefn = (node: AST.EventDefn) => {
    let struct = this.visitStructDefn(node);
    return new EventMsg(struct.name, struct.params);
  };

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
      name += '!';
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
      if (res instanceof Return) {
        return res.value;
      } else if (res instanceof Failure) {
        return res;
      }
    }
    return res;
  }

  visitDebugStmt(node: AST.DebugStmt) {
    debugger;
    for (let stmt of node.stmts) {
      let a = this.visit(stmt);
      console.log(a);
    }
  }

  visitLetStmt(node: AST.LetStmt) {
    if (node.expr !== null) {
      let val = this.visit<Value>(node.expr);
      if (node.binding instanceof AST.IdentBinding) {
        this.scope.setSymbol(node.binding.name.value, val);
      } else if (node.binding instanceof AST.TupleBinding) {
        if (!val.isOfTypeClass(TupleT) && !val.isOfTypeClass(ListT)) {
          throw this.makeError(
            `tried to unpack ${val} as tuple of ${node.binding.bindings.length} elements`,
            node.expr
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
          throw this.makeError(`tried to unpack ${val} as struct`, node.expr);
        }
        node.binding.bindings.forEach((symbol) => {
          let name = symbol.name.value;
          this.scope.setSymbol(name, val.getSymbol(name));
        });
      }
    } else {
      throw this.makeError(
        `let statement without expression not yet implemented`,
        node
      );
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
        throw this.makeError(
          `tried to assign to non-existent member '${member}' of ${obj}`,
          node.lhs.member
        );
      } else {
        tbl.setSymbol(member, rhs);
      }
    } else {
      // index assignment
      let obj = this.visit<Value>(node.lhs.obj);
      if (
        obj.isOfTypeClass(ListT) ||
        obj.isOfTypeClass(TupleT) ||
        obj instanceof StateMapAccessor
      ) {
        let args = node.lhs.args.map((x) => new Arg(this.visit(x)));
        return (obj as unknown as Indexable).setIndex(args, rhs);
      } else {
        throw this.makeError(
          `tried to index assign to non-indexable type ${obj.ty}`,
          node.lhs.obj
        );
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
      throw this.makeError(
        `predicate must be a Bool, got ${pred.ty}`,
        node.pred
      );
    }
  }

  visitForStmt(node: AST.ForStmt) {
    let expr = this.visit(node.iter) as Value | ListInstance | TupleInstance;
    // make sure it is iterable
    if (!expr.isOfTypeClass(ListT) && !expr.isOfTypeClass(TupleT)) {
      throw this.makeError(
        `tried to iterate over non-iterable type ${expr.ty}`,
        node.iter
      );
    }

    // get iterator
    let iter = (expr as any).getIter();

    // make new scope
    this.pushScope(this.scope.subscope());

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
          throw this.makeError(
            `tried to unpack ${val} as tuple of ${node.binding.bindings.length} elements`,
            node.binding
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
          throw this.makeError(
            `tried to unpack ${val} as struct`,
            node.binding
          );
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
    this.popScope();
  }

  visitEmitStmt(node: AST.EmitStmt) {
    if (!(node.expr instanceof AST.FnCallExpr)) {
      throw this.makeError(
        `emit statement must be a call expression`,
        node.expr
      );
    } else if (!(node.expr.func instanceof AST.TypePath)) {
      throw this.makeError(
        `emit statement must be a call to an event type`,
        node.expr.func
      );
    } else {
      // TODO: make it more general
      let name = node.expr.func.segments.toArray()[0].value;
      let ty = this.scope.getSymbol('#event#' + name);
      if (!ty.isSubOf(EventT)) {
        throw this.makeError(
          `emit statement must be a call to an event type`,
          node.expr
        );
      }
      let args = node.expr.args.map((x) => this.visitArg(x));
      let val = ty.value(args);
      let res = this.scope.getSymbol<StructInstance>('$res');
      let events = res.getSymbol<ListInstance<EventMsg>>('events');
      this.callMethod(events, 'push', [val]);
    }
  }

  visitExecStmt(node: AST.ExecStmt) {
    let val = this.visit<Value>(node.expr);

    // check that val is an ExecMsg// @ts-ignore
    if (!val.ty.isSubOf(ExecMsgT)) {
      throw this.makeError(
        `tried to execute non-exec type ${val.ty.name}`,
        node.expr
      );
    } else {
      let res = this.scope.getSymbol<StructInstance>('$res');
      let messages = res.getSymbol<ListInstance<typeof ExecMsgT>>('msgs');
      this.callMethod(messages, 'push', [val]);
    }
  }

  visitDelegateExecStmt(node: AST.DelegateExecStmt) {
    if (!(node.expr instanceof AST.FnCallExpr)) {
      throw this.makeError(
        `delegate_exec! statement must be function call`,
        node.expr
      );
    } else if (!(node.expr.func instanceof AST.Ident)) {
      throw this.makeError(
        `delegate_exec! statement must directly call an exec #fn`,
        node.expr
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
        throw this.makeError(
          `instantiate!# statement must be function call`,
          node.expr
        );
      } else if (
        !(
          node.expr.func instanceof AST.TypePath ||
          node.expr.func instanceof AST.Ident
        )
      ) {
        throw this.makeError(
          `instantiate!# statement must directly use a contract name`,
          node.expr
        );
      } else {
        let ty: Type;
        if (node.expr.func instanceof AST.TypePath) {
          ty = this.visitType(node.expr.func);
        } else {
          ty = this.scope.getSymbol<Type>(node.expr.func.value);
        }
        if (!(ty instanceof ContractDefn)) {
          throw this.makeError(
            `tried to instantiate non-contract type ${ty}`,
            node.expr
          );
        } else {
          let fn = ty.getSymbol<FnDefn>('#instantiate');
          let args_ = node.expr.args.map((x) => new Arg(this.visit(x)));
          let val = this.callFn(fn, args_);
          if (val.ty.isSubOf(InstantiateMsgT)) {
            let res = this.scope.getSymbol<StructInstance>('$res');
            let messages = res.getSymbol<ListInstance>('messages');
            this.callMethod(messages, 'push', [val]);
          } else {
            throw this.makeError(
              `tried to instantiate non-InstantiateMsg type ${val.ty.name}`,
              node.expr
            );
          }
        }
      }
    } else {
      // not #new
      let val = this.visit<Value>(node.expr);
      if (val.ty.isSubOf(InstantiateMsgT)) {
        let res = this.scope.getSymbol<StructInstance>('$res');
        let messages =
          res.getSymbol<ListInstance<typeof InstantiateMsgT>>('messages');
        this.callMethod(messages, 'push', [val]);
      } else {
        throw this.makeError(
          `tried to instantiate non-InstantiateMsg type ${val.ty.name}`,
          node.expr
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
    if (!result.isInstanceOf(ErrorT) && !result.isInstanceOf(StringT)) {
      throw this.makeError(
        `tried to fail with value other than Error or String: ${result}`,
        node.expr
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
    const obj: any = this.visit<Value>(node.obj);
    if (node.unwrap === null) {
      return (obj as SymbolTable).getSymbol(node.member.value);
    } else if (node.unwrap === AST.UnwrapOp.OR_NONE) {
      if (obj.isOfType(NoneT)) {
        return None;
      } else {
        return (obj as SymbolTable).getSymbol(node.member.value);
      }
    } else {
      if (obj.isOfType(NoneT)) {
        // TODO: result types
        throw this.makeError(
          `tried to access member ${node.member.value} of None`,
          node.member
        );
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
      throw this.makeError(
        `tried to index non-tuple/list: ${obj.ty}`,
        node.obj
      );
    }
  }

  visitDColonExpr(node: AST.DColonExpr) {
    const obj = this.visit(node.obj) as SymbolTable;
    return obj.getSymbol(node.member.value);
  }

  callMethod(obj: Value, method: string, argVals: Value[]) {
    let methodFn = obj.getSymbol<MethodDefn>(method);
    return this.callFn(methodFn, args(argVals));
  }

  callFn(fn: FnDefn, args: Arg[], scope?: SymbolTable) {
    // set function definition's parent scope to the intermediate scope
    // create a new scope for the function call
    this.pushScope(fn.subscope(scope));
    fn.setArgsInScope(this.scope, args);

    let result: Value;
    if (fn instanceof MethodDefn) {
      result = fn.call(args[0].value, ...args.slice(1).map((x) => x.value));
    } else {
      // evaluate the function body in the new scope
      result = this.visit(fn.body);
    }

    // reset scope
    this.popScope();
    return result;
  }

  visitFnCallExpr(node: AST.FnCallExpr) {
    const func = this.visit(node.func);
    if (func instanceof DebugCall) {
      return func.call(this.interpreter, node.args);
    }
    const args = node.args.map((x) => this.visitArg(x));
    if (func instanceof FnDefn) {
      if (func.fallible && !node.fallible) {
        throw this.makeError(
          `tried to call fallible function '${func.name}' without '!'`,
          node.func
        );
      }
      return this.callFn(func, args);
    } else if (func instanceof StructDefn) {
      return func.value(args);
    } else if (func instanceof Type) {
      if (args.length !== 1) {
        throw this.makeError(`can only call type with one argument`, node);
      }
      if (node.fallible) {
        return func.tryFromVal(args[0].value);
      } else {
        return func.fromVal(args[0].value);
      }
    } else {
      throw this.makeError(`tried to call non-function: ${func.ty}`, node.func);
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

  visitAndExpr(node: AST.AndExpr) {
    const lhs = this.visit(node.lhs);
    if (lhs.isOfType(BoolT)) {
      if (lhs === CWSBool.FALSE) {
        // short-circuit
        return CWSBool.FALSE;
      } else {
        const rhs = this.visit(node.rhs);
        if (rhs.isOfType(BoolT)) {
          return rhs;
        } else {
          throw this.makeError(`tried to AND non-boolean: ${rhs}`, node.rhs);
        }
      }
    } else {
      throw this.makeError(`tried to AND non-boolean: ${lhs}`, node.lhs);
    }
  }

  visitOrExpr(node: AST.OrExpr) {
    const lhs = this.visit(node.lhs);
    if (lhs.isOfType(BoolT)) {
      if (lhs === CWSBool.TRUE) {
        // short-circuit
        return CWSBool.TRUE;
      } else {
        const rhs = this.visit(node.rhs);
        if (rhs.isOfType(BoolT)) {
          return rhs;
        } else {
          throw this.makeError(`tried to OR non-boolean: ${rhs}`, node.rhs);
        }
      }
    } else {
      throw this.makeError(`tried to OR non-boolean: ${lhs}`, node.lhs);
    }
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
      const items = rhs as SizedIndexableValue;
      if (items.operatorIn(lhs)) {
        return CWSBool.TRUE;
      } else {
        return CWSBool.FALSE;
      }
    } else {
      throw this.makeError(
        `tried to check if value is in non-list/tuple: ${rhs}`,
        node.rhs
      );
    }
  }

  visitNotExpr(node: AST.NotExpr) {
    const expr = this.visit<Value>(node.expr);

    if (expr.isOfType(CWSBool.TYPE)) {
      return CWSBool.isTrue(expr) ? CWSBool.FALSE : CWSBool.TRUE;
    } else if (expr.isOfType(NoneT)) {
      return CWSBool.TRUE;
    } else {
      throw this.makeError(
        // @ts-ignore
        `tried to negate on expression other than Bool or None: ${expr.ty}`,
        node.expr
      );
    }
  }

  visitNoneCheckExpr(node: AST.NoneCheckExpr) {
    const expr = this.visit<Value>(node.expr);
    return expr.isOfType(NoneT) ? CWSBool.FALSE : CWSBool.TRUE;
  }

  visitTryCatchElseExpr(node: AST.TryCatchElseExpr) {
    // TODO: might need to push / pop scope around this.visit
    this.pushScope(this.scope.subscope());
    const result = this.visit(node.body); // Val, ErrorInstance
    this.popScope();
    if (result instanceof Failure) {
      for (let c of node.catch_.toArray()) {
        let ty = this.visitType(c.ty);
        if (result.error.isOfType(ty)) {
          if (c.name !== null) {
            this.scope.setSymbol(c.name.value, result.error);
          }
          return this.visit(c.body);
        }
      }
      if (node.else_ !== null) {
        return this.visit(node.else_);
      } else {
        return result;
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
      throw this.makeError(
        `tried to fail with value other than Error or String: ${result}`,
        node.expr
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
        throw this.makeError(
          `tried to instantiate non-struct type: ${ty}`,
          node.ty
        );
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
