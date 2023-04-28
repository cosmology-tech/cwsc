"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CWSInterpreterVisitor = exports.InterpreterError = exports.Return = exports.Failure = exports.CWSInterpreter = exports.ContractInstance = exports.ContractState = exports.ContractStateT = exports.StateMapAccessor = exports.buildQueryCtx = exports.buildMutCtx = exports.buildMutState = exports.buildCtxRes = exports.buildCtxInfo = exports.CoinListT = exports.buildCtxEnv = exports.ContextType = exports.idx = exports.args = exports.arg = void 0;
const AST = __importStar(require("./ast"));
const symbol_table_1 = require("./util/symbol-table");
const stdlib_1 = require("./stdlib");
const parser_1 = require("./parser");
const position_1 = require("./util/position");
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
//region <HELPER FUNCTIONS>
function arg(val, name) {
    return new stdlib_1.Arg(val, name);
}
exports.arg = arg;
function args(a_pos = [], a_named = {}) {
    return a_pos
        .map((v) => arg(v))
        .concat(Object.keys(a_named).map((name) => arg(a_named[name], name)));
}
exports.args = args;
function idx(ix) {
    return args([stdlib_1.IntT.value(BigInt(ix))]);
}
exports.idx = idx;
function operator(op) {
    return ('#operator' + op);
}
var ContextType;
(function (ContextType) {
    ContextType[ContextType["INSTANTIATE"] = 0] = "INSTANTIATE";
    ContextType[ContextType["EXEC"] = 1] = "EXEC";
    ContextType[ContextType["QUERY"] = 2] = "QUERY";
})(ContextType = exports.ContextType || (exports.ContextType = {}));
function buildCtxEnv(env) {
    return stdlib_1.CtxEnvT.make({
        block: stdlib_1.CtxEnvBlockInfoT.make({
            height: stdlib_1.IntT.value(BigInt(env.block.height)),
            time: stdlib_1.IntT.value(BigInt(env.block.time)),
            chain_id: stdlib_1.StringT.value(env.block.chain_id),
        }),
        contract: stdlib_1.CtxEnvContractInfoT.make({
            address: stdlib_1.AddressT.value(env.contract.address),
        }),
    });
}
exports.buildCtxEnv = buildCtxEnv;
exports.CoinListT = new stdlib_1.ListT(stdlib_1.CoinT);
function buildCtxInfo(info) {
    return stdlib_1.CtxInfoT.make({
        sender: stdlib_1.AddressT.value(info.sender),
        funds: exports.CoinListT.value(info.funds.map((fund) => stdlib_1.CoinT.make({
            denom: stdlib_1.StringT.value(fund.denom),
            amount: stdlib_1.IntT.value(BigInt(fund.amount)),
        }))),
    });
}
exports.buildCtxInfo = buildCtxInfo;
function buildCtxRes() {
    return stdlib_1.CtxResT.make({
        messages: new stdlib_1.ListT(stdlib_1.AnyT).value([]),
        events: new stdlib_1.ListT(stdlib_1.AnyT).value([]),
        data: stdlib_1.None,
    });
}
exports.buildCtxRes = buildCtxRes;
function buildMutState(contract) {
    contract.getSymbol('#state');
}
exports.buildMutState = buildMutState;
function buildMutCtx(contract, state, env, info) {
    let ctx = new symbol_table_1.SymbolTable();
    ctx.setSymbol('$', contract);
    ctx.setSymbol('$state', state);
    ctx.setSymbol('$env', buildCtxEnv(env));
    ctx.setSymbol('$info', buildCtxInfo(info));
    ctx.setSymbol('$res', buildCtxRes());
    return ctx;
}
exports.buildMutCtx = buildMutCtx;
function buildQueryCtx(contract, state, env) {
    let ctx = new symbol_table_1.SymbolTable();
    ctx.setSymbol('$', contract);
    ctx.setSymbol('$state', state);
    ctx.setSymbol('$env', buildCtxEnv(env));
    return ctx;
}
exports.buildQueryCtx = buildQueryCtx;
class StateMapAccessor extends stdlib_1.Value {
    constructor(state, mapDefn) {
        super(exports.ContractStateT, null);
        this.state = state;
        this.mapDefn = mapDefn;
        this.prefix = mapDefn.prefix;
        this.mapKeys = mapDefn.mapKeys;
        this.ty = mapDefn.ty;
        this.default_ = mapDefn.default_;
    }
    getIndex(args) {
        let key = this.buildKey(args);
        return this.state.symbols.get(key, this.default_);
    }
    setIndex(args, val) {
        let key = this.buildKey(args);
        this.state.symbols[key] = val;
    }
    removeIndex(args) {
        let key = this.buildKey(args);
        this.state.symbols[key].delete(key);
    }
    buildKey(args) {
        if (args.length !== this.mapKeys.length) {
            throw new Error(`Invalid number of index arguments for map '${this.prefix}'`);
        }
        let keySegments = [this.prefix];
        for (let i = 0; i < args.length; i++) {
            if (!args[i].value.isInstanceOf(this.mapKeys[i].ty)) {
                let keyNameHint = this.mapKeys[i].name
                    ? `(${this.mapKeys[i].name})`
                    : '';
                throw new Error(`Invalid index argument for map '${this.prefix}' key #${i} ${keyNameHint} - expected ${this.mapKeys[i].ty} but got ${args[i].value}`);
            }
            // TODO: this is a hack to get around the fact that we don't have a way to
            // serialize a value to a string. We should probably add a method to the
            // Value interface for this.
            keySegments.push(`#${i}:${args[i].value.toString()}#`);
        }
        return keySegments.join(`#`);
    }
}
exports.StateMapAccessor = StateMapAccessor;
exports.ContractStateT = stdlib_1.Type.makeUnitT('ContractState');
class ContractState extends stdlib_1.Value {
    constructor(interpreter, contract) {
        // get all the state items and state maps
        // if we have item, it can be accessed directly
        // if we have a map, we need to access it via index
        super(exports.ContractStateT, null);
        this.interpreter = interpreter;
        this.contract = contract;
        this.stateInfo = {};
        Object.values(contract.symbols).map((sym) => {
            if (sym instanceof stdlib_1.StateItem) {
                this.stateInfo[sym.key] = sym;
            }
            if (sym instanceof stdlib_1.StateMap) {
                this.stateInfo[sym.prefix] = sym;
            }
        });
    }
    getSymbol(name) {
        return this.getOwnSymbol(name);
    }
    getOwnSymbol(name) {
        if (!(name in this.stateInfo)) {
            throw new Error(`Contract ${this.contract.name} has no state variable ${name}`);
        }
        let s = this.stateInfo[name];
        if (s instanceof stdlib_1.StateItem) {
            return this.symbols[name] || s.ty.defaultValue();
        }
        else {
            return new StateMapAccessor(this, s);
        }
    }
    firstTableWithSymbol(name) {
        if (name in this.stateInfo) {
            return this;
        }
        return undefined;
    }
}
exports.ContractState = ContractState;
class ContractInstance extends stdlib_1.Value {
    constructor(interpreter, ty) {
        super(ty, null);
        this.interpreter = interpreter;
        this.ty = ty;
        this.state = new ContractState(interpreter, ty);
    }
    instantiate(env, info, args) {
        let context = buildMutCtx(this.ty, this.state, env, info);
        let impl = this.ty.getSymbol('#instantiate#impl');
        this.interpreter.callFn(impl, args, context);
        return context.getSymbol('$res');
    }
    exec(env, info, name, args) {
        let context = buildMutCtx(this.ty, this.state, env, info);
        let impl = this.ty.getSymbol(`#exec${name}#impl`);
        this.interpreter.callFn(impl, args, context);
        return context.getSymbol('$res');
    }
    query(env, name, args) {
        let context = buildQueryCtx(this.ty, this.state, env);
        let impl = this.ty.getSymbol(`#query${name}#impl`);
        return this.interpreter.callFn(impl, args, context);
    }
}
exports.ContractInstance = ContractInstance;
class CWSInterpreter extends symbol_table_1.SymbolTable {
    constructor(ctx) {
        super({}, new symbol_table_1.SymbolTable(ctx.env));
        this.ctx = ctx;
        for (let file in ctx.sources) {
            let sourceText = this.ctx.sources[file];
            this.runCode(sourceText, file);
        }
    }
    runCode(sourceText, file = ':memory:') {
        let tv = new position_1.TextView(sourceText);
        let ast = new parser_1.CWSParser(sourceText, file).parse();
        this.visitor = new CWSInterpreterVisitor(this, sourceText, file);
        this.visitor.visit(ast); // run
    }
    callFn(fn, args, scope) {
        if (this.visitor !== undefined) {
            return this.visitor.callFn(fn, args, scope);
        }
        else {
            throw new InterpreterError('Interpreter not initialized');
        }
    }
}
exports.CWSInterpreter = CWSInterpreter;
//endregion <INTERPRETER>
//region <VISITOR>
class Failure {
    constructor(error) {
        this.error = error;
    }
}
exports.Failure = Failure;
class Return {
    constructor(value) {
        this.value = value;
    }
}
exports.Return = Return;
class InterpreterError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.InterpreterError = InterpreterError;
class CWSInterpreterVisitor extends AST.CWSASTVisitor {
    get scope() {
        return this.scopes[this.scopes.length - 1];
    }
    firstTableWithSymbol(name) {
        for (let i = this.scopes.length - 1; i >= 0; i--) {
            let scope = this.scopes[i];
            if (name in scope.symbols) {
                return scope;
            }
        }
        return undefined;
    }
    hasSymbol(name) {
        return this.firstTableWithSymbol(name) !== undefined;
    }
    pushScope(scope) {
        this.scopes.push(scope);
    }
    popScope() {
        this.scopes.pop();
    }
    getSymbol(name) {
        for (let i = this.scopes.length - 1; i >= 0; i--) {
            let scope = this.scopes[i];
            if (scope.hasSymbol(name)) {
                return scope.getSymbol(name);
            }
        }
        throw new InterpreterError(`Symbol ${name} not found`);
    }
    setSymbol(name, value) {
        this.scope.setSymbol(name, value);
    }
    constructor(interpreter, sourceText, file) {
        super();
        this.interpreter = interpreter;
        this.sourceText = sourceText;
        this.debugMode = false;
        //endregion <TYPE EXPRESSIONS>
        //region <CONTRACT ITEMS>
        this.visitErrorDefn = (node) => {
            let struct = this.visitStructDefn(node);
            return new stdlib_1.ErrorMsg(struct.name, struct.params);
        };
        this.visitEventDefn = (node) => {
            let struct = this.visitStructDefn(node);
            return new stdlib_1.EventMsg(struct.name, struct.params);
        };
        this.scopes = [interpreter];
        this.tv = new position_1.TextView(sourceText);
        // make absolute path
        this.file = path_1.default.resolve(file);
    }
    makeError(message, node) {
        if (!node.$ctx) {
            return new InterpreterError(message);
        }
        let originalMsg = message;
        let pos = (0, position_1.getIx)(node.$ctx);
        // get range of node
        let range = this.tv.range(pos.start, pos.end, true);
        message = `Error occured in node: '${node.constructor.name}'`;
        let fnDefn = node.nearestAncestorWhere((n) => n instanceof AST.FnDefn ||
            n instanceof AST.InstantiateDefn ||
            n instanceof AST.ReplyDefn ||
            n instanceof AST.ExecDefn ||
            n instanceof AST.QueryDefn);
        if (fnDefn) {
            let fnName;
            let prefix = '';
            if (fnDefn instanceof AST.InstantiateDefn) {
                fnName = '#instantiate';
            }
            else {
                fnName = fnDefn.name.value;
            }
            if (fnDefn instanceof AST.ExecDefn) {
                prefix = 'exec ';
                fnName = '#' + fnName;
            }
            else if (fnDefn instanceof AST.QueryDefn) {
                prefix = 'query ';
                fnName = '#' + fnName;
            }
            else if (fnDefn instanceof AST.ReplyDefn) {
                prefix = 'reply ';
            }
            let cDefn = fnDefn.nearestAncestorWhere((n) => n instanceof AST.ContractDefn || n instanceof AST.InterfaceDefn);
            if (cDefn) {
                message += ` inside '${prefix}${cDefn.name.value}.${fnName}'`;
            }
            else {
                message += ` inside '${prefix}${fnName}'`;
            }
        }
        message += `\n\n`;
        message += `Source: ${this.file}:${range.start.line}:${range.start.character}-${range.end.line}:${range.end.character}\n\n`;
        let lineNoWidth = 5;
        let gutterWidth = lineNoWidth + 2;
        let makeLine = (line, text) => {
            return chalk_1.default.dim(`${line.toString().padStart(lineNoWidth, ' ')}| ${text}\n`);
        };
        let makeErrorLine = (line, text) => {
            return `${chalk_1.default.redBright(chalk_1.default.bold(line.toString().padStart(lineNoWidth, ' ')) + '|')} ${text}\n`;
        };
        this.tv.surroundingLinesOfRange(range, 5, true).forEach((x) => {
            // if this is the starting line, make a pointer
            // if range.start.line <= x.line <= range.end.line, highlight the line
            if (x.line >= range.start.line && x.line <= range.end.line) {
                // only highlight the part of the line that is in the range
                let start = x.line === range.start.line ? range.start.character - 1 : 0;
                let end = x.line === range.end.line ? range.end.character - 1 : x.text.length;
                message += makeErrorLine(x.line, chalk_1.default.dim(x.text.slice(0, start)) +
                    chalk_1.default.bold(chalk_1.default.redBright(x.text.slice(start, end))) +
                    chalk_1.default.dim(x.text.slice(end)));
                if (x.line === range.end.line) {
                    message += chalk_1.default.bold(chalk_1.default.yellow(' '.repeat(gutterWidth + range.end.character - 2) +
                        '^ ' +
                        originalMsg +
                        '\n'));
                }
            }
            else {
                message += makeLine(x.line, x.text);
            }
        });
        message += `...\n\n`;
        return new InterpreterError(message);
    }
    visit(node) {
        try {
            return super.visit(node);
        }
        catch (e) {
            if (e instanceof InterpreterError ||
                e instanceof Return ||
                e instanceof Failure) {
                throw e;
            }
            else {
                throw this.makeError(e.message, node);
            }
        }
    }
    //region <PERVASIVES>
    visitSourceFile(node) {
        node.forEach((x) => this.visit(x));
    }
    visitParam(node) {
        let name = node.name.value;
        let ty = node.ty !== null ? this.visitType(node.ty) : undefined;
        let default_ = node.default_ !== null ? this.visit(node.default_) : undefined;
        if (node.optional) {
            if (ty === undefined) {
                throw this.makeError(`Optional param '${name}?' must have a type`, node);
            }
            ty = new stdlib_1.OptionT(ty);
            if (default_ === undefined) {
                default_ = stdlib_1.None;
            }
        }
        if (default_ !== undefined) {
            if (ty === undefined) {
                ty = default_.ty;
            }
            else if (!default_.ty.isSubOf(ty)) {
                // check that default value is of the correct type
                throw this.makeError(`Default for param '${name}' is not compatible with ${ty.name} (got ${default_.ty.name})`, node.default_);
            }
        }
        return new stdlib_1.Param(name, ty, default_);
    }
    visitType(node) {
        let res = this.visit(node);
        if (res instanceof stdlib_1.Type) {
            return res;
        }
        else if (res instanceof stdlib_1.Value && res.isOfType(stdlib_1.NoneT)) {
            return stdlib_1.NoneT;
        }
        else {
            throw this.makeError(`Expected type, got ${res}`, node);
        }
    }
    //endregion <PERVASIVES>
    //region <TOP-LEVEL STATEMENTS>
    visitInterfaceDefn(node) {
        let name = node.name.value;
        let interfaceDefn = this.scope.subscope(new stdlib_1.InterfaceDefn(name));
        this.pushScope(interfaceDefn);
        node.body.children.forEach((x) => {
            if (x instanceof AST.StructDefn) {
                interfaceDefn.setSymbol(x.name.value, this.visit(x));
            }
            if (x instanceof AST.EnumDefn) {
                interfaceDefn.setSymbol(x.name.value, this.visit(x));
            }
            if (x instanceof AST.ErrorDefn) {
                interfaceDefn.setSymbol('error#' + x.name.value, this.visit(x));
            }
            if (x instanceof AST.EventDefn) {
                interfaceDefn.setSymbol('event#' + x.name.value, this.visit(x));
            }
        });
        this.popScope();
        this.setSymbol(name, interfaceDefn);
    }
    visitContractDefn(node) {
        let name = node.name.value;
        let contractDefn = this.scope.subscope(new stdlib_1.ContractDefn(name));
        this.pushScope(contractDefn);
        node.body.children.forEach((x) => {
            if (x instanceof AST.StructDefn) {
                this.setSymbol(x.name.value, this.visit(x));
            }
            if (x instanceof AST.EnumDefn) {
                this.setSymbol(x.name.value, this.visit(x));
            }
            if (x instanceof AST.FnDefn) {
                let name = x.name.value;
                this.setSymbol(x.fallible ? name + '#!' : name, this.scope.subscope(this.visitFnDefn(x)));
            }
            if (x instanceof AST.StateDefnBlock) {
                x.descendantsOfType(AST.StateDefnItem).forEach((itemDefn) => {
                    let key = itemDefn.name.value;
                    let ty = this.visitType(itemDefn.ty);
                    let default_ = itemDefn.default_ !== null
                        ? this.visit(itemDefn.default_)
                        : ty.defaultValue();
                    let item = new stdlib_1.StateItem(key, ty, default_);
                    this.setSymbol('#state#' + key, item);
                });
                x.descendantsOfType(AST.StateDefnMap).forEach((mapDefn) => {
                    let prefix = mapDefn.name.value;
                    let ty = this.visitType(mapDefn.ty);
                    let mapKeys = mapDefn.mapKeys.map((mk) => this.visit(mk));
                    let default_ = mapDefn.default_ !== null
                        ? this.visit(mapDefn.default_)
                        : ty.defaultValue();
                    let map = new stdlib_1.StateMap(prefix, mapKeys, ty, default_);
                    this.setSymbol('#state#' + mapDefn.name.value, map);
                });
            }
            if (x instanceof AST.ErrorDefn) {
                this.setSymbol('#error#' + x.name.value, this.visitErrorDefn(x));
            }
            if (x instanceof AST.EventDefn) {
                this.setSymbol('#event#' + x.name.value, this.visitEventDefn(x));
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
        this.setSymbol(name, contractDefn);
    }
    //endregion <TOP-LEVEL STATEMENTS>
    //region <TYPE EXPRESSIONS>
    visitTypePath(node) {
        let segments = node.segments.map((x) => x.value);
        // start at the first segment, and keep going until we resolve the final segment
        let curr = this.getSymbol(segments[0]);
        for (let i = 1; i < segments.length; i++) {
            curr = curr.getSymbol(segments[i]);
        }
        return curr;
    }
    visitOptionT(node) {
        let ty = this.visitType(node.ty);
        return new stdlib_1.OptionT(ty);
    }
    visitStructDefn(node) {
        var _a, _b;
        let name;
        if (node instanceof AST.InstantiateDefn ||
            node instanceof AST.InstantiateDecl) {
            name = `#instantiate`;
        }
        else {
            name = (_b = (_a = node.name) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '%anonymous';
        }
        let params = node.params.map((p, i) => {
            var _a;
            if (!p.name) {
                throw this.makeError(`${name}: missing name for struct ${i}`, p);
            }
            if (!p.ty) {
                throw this.makeError(`${name}: missing type for member ${p.name.value}`, p);
            }
            let ty = this.visit(p.ty);
            let default_ = p.default_ ? this.visit(p.default_) : undefined;
            if (p.optional) {
                ty = new stdlib_1.OptionT(ty);
                default_ = (_a = p.default_) !== null && _a !== void 0 ? _a : stdlib_1.None;
            }
            return new stdlib_1.Param(p.name.value, ty, default_);
        });
        return new stdlib_1.StructDefn(name, params);
    }
    visitEnumDefn(node) {
        let name = node.name.value;
        let enumDefn = new stdlib_1.EnumDefn(name);
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
    visitListT(node) {
        if (node.len === null) {
            return new stdlib_1.ListT(this.visit(node.ty));
        }
        else {
            let ty = this.visitType(node.ty);
            return new stdlib_1.TupleT(Array(node.len).fill(ty));
        }
    }
    visitMapKeyDefn(node) {
        let ty = this.visitType(node.ty);
        let name = node.name !== null ? node.name.value : undefined;
        return new stdlib_1.MapKey(ty, name);
    }
    visitFnDefn(node) {
        let name = node.name.value;
        let params = node.params.map((p) => this.visit(p));
        let fallible = node.fallible;
        if (fallible) {
            name += '!';
        }
        let retTy = node.retTy !== null ? this.visit(node.retTy) : undefined;
        return new stdlib_1.FnDefn(name, fallible, params, retTy, node.body);
    }
    /**
     * This visits the function definition for the instantiate message.
     * @param node
     */
    visitInstantiateDefn(node) {
        const instantiateMsg = this.visitStructDefn(node);
        instantiateMsg.name = this.scope.name + '.#instantiate';
        instantiateMsg.structFn.name = instantiateMsg.name;
        let params = node.params.map((p) => this.visit(p));
        let instantiateImpl = this.scope.subscope(new stdlib_1.FnDefn('#instantiate', false, params, undefined, node.body));
        this.setSymbol('#instantiate', instantiateMsg);
        this.setSymbol('#instantiate#impl', instantiateImpl);
    }
    visitExecDefn(node) {
        let execMsg = this.visitStructDefn(node);
        execMsg.name = `exec ${this.scope.name}.#${node.name.value}`;
        let params = node.params.map((p) => this.visit(p));
        let execImpl = this.scope.subscope(new stdlib_1.FnDefn(execMsg.name, false, params, undefined, node.body));
        this.setSymbol(`#exec#${node.name.value}`, execImpl);
        this.setSymbol(`#exec${node.name.value}#impl`, execImpl);
    }
    visitQueryDefn(node) {
        let queryMsg = this.visitStructDefn(node);
        queryMsg.name = `query ${this.scope.name}.#${node.name.value}`;
        let params = node.params.map((p) => this.visit(p));
        let queryImpl = this.scope.subscope(new stdlib_1.FnDefn(queryMsg.name, false, params, node.retTy !== null ? this.visit(node.retTy) : undefined, node.body));
        this.setSymbol(`#query#${node.name.value}`, queryImpl);
        this.setSymbol(`#query${node.name.value}#impl`, queryImpl);
    }
    //endregion <CONTRACT ITEMS>
    //region <STATEMENTS>
    visitBlock(node) {
        let res = stdlib_1.None;
        for (let stmt of node.children) {
            res = this.visit(stmt) || stdlib_1.None;
        }
        return res;
    }
    visitDebugStmt(node) {
        this.debugMode = true;
        for (let stmt of node.stmts) {
            let range = this.tv.rangeOfNode(stmt.$ctx);
            console.log(`debug(): ${range.start.line}:${range.start.character} - ${range.end.line}:${range.end.character}`);
            this.visit(stmt);
        }
        this.debugMode = false;
    }
    visitLetStmt(node) {
        if (node.expr !== null) {
            let val = this.visit(node.expr);
            if (node.binding instanceof AST.IdentBinding) {
                if (node.binding.name.value === 'total_supply') {
                    debugger;
                }
                this.setSymbol(node.binding.name.value, val);
            }
            else if (node.binding instanceof AST.TupleBinding) {
                if (!val.isOfTypeClass(stdlib_1.TupleT) && !val.isOfTypeClass(stdlib_1.ListT)) {
                    throw this.makeError(`tried to unpack ${val} as tuple of ${node.binding.bindings.length} elements`, node.expr);
                }
                node.binding.bindings.forEach((symbol, i) => {
                    let name = symbol.name.value;
                    this.setSymbol(name, val.getIndex(idx(i)));
                });
            }
            else {
                // struct binding
                if (!val.isOfTypeClass(stdlib_1.StructDefn)) {
                    throw this.makeError(`tried to unpack ${val.ty} as struct`, node.expr);
                }
                node.binding.bindings.forEach((symbol) => {
                    let name = symbol.name.value;
                    this.setSymbol(name, val.getSymbol(name));
                });
            }
        }
        else {
            throw this.makeError(`let statement without expression not yet implemented`, node);
        }
    }
    visitAssignStmt(node) {
        let rhs = this.visit(node.rhs);
        if (node.lhs instanceof AST.IdentLHS) {
            this.setSymbol(node.lhs.symbol.value, rhs);
        }
        else if (node.lhs instanceof AST.DotLHS) {
            let obj = this.visit(node.lhs.obj);
            let member = node.lhs.member.value;
            obj.setSymbol(member, rhs);
            // if (tbl === undefined) {
            //   throw this.makeError(
            //     `tried to assign to non-existent member '${member}' of ${obj}`,
            //     node.lhs.member
            //   );
            // } else {
            //   tbl.setSymbol(member, rhs);
            // }
        }
        else {
            // index assignment
            let obj = this.visit(node.lhs.obj);
            if (obj.isOfTypeClass(stdlib_1.ListT) ||
                obj.isOfTypeClass(stdlib_1.TupleT) ||
                obj instanceof StateMapAccessor) {
                let args = node.lhs.args.map((x) => new stdlib_1.Arg(this.visit(x)));
                return obj.setIndex(args, rhs);
            }
            else {
                throw this.makeError(`tried to index assign to non-indexable type ${obj.ty}`, node.lhs.obj);
            }
        }
    }
    visitIfStmt(node) {
        let pred = this.visit(node.pred);
        if (pred.isOfType(stdlib_1.CWSBool.TYPE)) {
            if (stdlib_1.CWSBool.isTrue(pred)) {
                return this.visit(node.then);
            }
            else {
                return node.else_ !== null ? this.visit(node.else_) : stdlib_1.None;
            }
        }
        else {
            // @ts-ignore
            throw this.makeError(`predicate must be a Bool, got ${pred.ty}`, node.pred);
        }
    }
    visitForStmt(node) {
        let expr = this.visit(node.iter);
        // make sure it is iterable
        if (!expr.isOfTypeClass(stdlib_1.ListT) && !expr.isOfTypeClass(stdlib_1.TupleT)) {
            throw this.makeError(`tried to iterate over non-iterable type ${expr.ty}`, node.iter);
        }
        // get iterator
        let iter = expr.getIter();
        // make new scope
        this.pushScope(this.scope.subscope());
        // bindings
        if (node.binding instanceof AST.IdentBinding) {
            let name = node.binding.name.value;
            for (let val = iter.next(); val !== undefined; val = iter.next()) {
                this.setSymbol(name, val);
                this.visit(node.body);
            }
        }
        else if (node.binding instanceof AST.TupleBinding) {
            for (let val = iter.next(); val !== undefined; val = iter.next()) {
                // make sure val is iterable
                if (!val.isOfTypeClass(stdlib_1.TupleT) && !val.isOfTypeClass(stdlib_1.ListT)) {
                    throw this.makeError(`tried to unpack ${val} as tuple of ${node.binding.bindings.length} elements`, node.binding);
                }
                node.binding.bindings.forEach((symbol, i) => {
                    this.setSymbol(symbol.name.value, val.getIndex(idx(i)));
                });
                this.visit(node.body);
            }
        }
        else {
            for (let val = iter.next(); val !== undefined; val = iter.next()) {
                if (!val.isOfTypeClass(stdlib_1.StructDefn)) {
                    throw this.makeError(`tried to unpack ${val.ty.name} as struct`, node.binding);
                }
                node.binding.bindings.forEach((symbol) => {
                    let name = symbol.name.value;
                    this.setSymbol(name, val.getSymbol(name));
                });
                this.visit(node.body);
            }
        }
        this.popScope();
    }
    visitEmitStmt(node) {
        if (!(node.expr instanceof AST.FnCallExpr)) {
            throw this.makeError(`emit statement must be a call expression`, node.expr);
        }
        else if (!(node.expr.func instanceof AST.TypePath)) {
            throw this.makeError(`emit statement must be a call to an event type`, node.expr.func);
        }
        else {
            // TODO: make it more general
            let name = node.expr.func.segments.toArray()[0].value;
            let ty = this.getSymbol('#event#' + name);
            if (!ty.isSubOf(stdlib_1.EventT)) {
                throw this.makeError(`emit statement must be a call to an event type`, node.expr);
            }
            let args = node.expr.args.map((x) => this.visitArg(x));
            let val = ty.value(args);
            let res = this.getSymbol('$res');
            let events = res.getSymbol('events');
            this.callMethod(events, 'push', [val]);
        }
    }
    visitExecStmt(node) {
        let val = this.visit(node.expr);
        // check that val is an ExecMsg// @ts-ignore
        if (!val.ty.isSubOf(stdlib_1.ExecMsgT)) {
            throw this.makeError(`tried to execute non-exec type ${val.ty.name}`, node.expr);
        }
        else {
            let res = this.getSymbol('$res');
            let messages = res.getSymbol('msgs');
            this.callMethod(messages, 'push', [val]);
        }
    }
    visitDelegateExecStmt(node) {
        if (!(node.expr instanceof AST.FnCallExpr)) {
            throw this.makeError(`delegate_exec! statement must be function call`, node.expr);
        }
        else if (!(node.expr.func instanceof AST.Ident)) {
            throw this.makeError(`delegate_exec! statement must directly call an exec #fn`, node.expr);
        }
        else {
            let fn = this.getSymbol('exec#' + node.expr.func.value + '#impl');
            let args = node.expr.args.map((x) => new stdlib_1.Arg(this.visit(x)));
            return this.callFn(fn, args);
        }
    }
    visitInstantiateStmt(node) {
        if (node.new_) {
            if (!(node.expr instanceof AST.FnCallExpr)) {
                throw this.makeError(`instantiate!# statement must be function call`, node.expr);
            }
            else if (!(node.expr.func instanceof AST.TypePath ||
                node.expr.func instanceof AST.Ident)) {
                throw this.makeError(`instantiate!# statement must directly use a contract name`, node.expr);
            }
            else {
                let ty;
                if (node.expr.func instanceof AST.TypePath) {
                    ty = this.visitType(node.expr.func);
                }
                else {
                    ty = this.getSymbol(node.expr.func.value);
                }
                if (!(ty instanceof stdlib_1.ContractDefn)) {
                    throw this.makeError(`tried to instantiate non-contract type ${ty}`, node.expr);
                }
                else {
                    let fn = ty.getSymbol('#instantiate');
                    let args_ = node.expr.args.map((x) => new stdlib_1.Arg(this.visit(x)));
                    let val = this.callFn(fn, args_);
                    if (val.ty.isSubOf(stdlib_1.InstantiateMsgT)) {
                        let res = this.getSymbol('$res');
                        let messages = res.getSymbol('messages');
                        this.callMethod(messages, 'push', [val]);
                    }
                    else {
                        throw this.makeError(`tried to instantiate non-InstantiateMsg type ${val.ty.name}`, node.expr);
                    }
                }
            }
        }
        else {
            // not #new
            let val = this.visit(node.expr);
            if (val.ty.isSubOf(stdlib_1.InstantiateMsgT)) {
                let res = this.getSymbol('$res');
                let messages = res.getSymbol('messages');
                this.callMethod(messages, 'push', [val]);
            }
            else {
                throw this.makeError(`tried to instantiate non-InstantiateMsg type ${val.ty.name}`, node.expr);
            }
        }
    }
    visitReturnStmt(node) {
        let val = this.visit(node.expr);
        throw new Return(val);
    }
    visitFailStmt(node) {
        let result = this.visit(node.expr);
        if (!result.isInstanceOf(stdlib_1.ErrorT) && !result.isInstanceOf(stdlib_1.StringT)) {
            throw this.makeError(`tried to fail with value other than Error or String: ${result}`, node.expr);
        }
        else {
            if (result.isOfType(stdlib_1.StringT)) {
                result = stdlib_1.Err_Generic.value(args([], { message: result }));
            }
            throw new Failure(result);
        }
    }
    //endregion <STATEMENTS>
    //region <EXPRESSIONS>
    visitArg(node) {
        const val = this.visit(node.expr);
        return new stdlib_1.Arg(val, node.name !== null ? node.name.value : undefined);
    }
    visitDotExpr(node) {
        const obj = this.visit(node.obj);
        if (node.unwrap === null) {
            return obj.getSymbol(node.member.value);
        }
        else if (node.unwrap === AST.UnwrapOp.OR_NONE) {
            if (obj.isOfType(stdlib_1.NoneT)) {
                return stdlib_1.None;
            }
            else {
                return obj.getSymbol(node.member.value);
            }
        }
        else {
            if (obj.isOfType(stdlib_1.NoneT)) {
                // TODO: result types
                throw this.makeError(`tried to access member ${node.member.value} of None`, node.member);
            }
            else {
                return obj.getSymbol(node.member.value);
            }
        }
    }
    visitAsExpr(node) {
        throw new Error(`not implemented: visitAsExpr`);
    }
    visitIndexExpr(node) {
        const obj = this.visit(node.obj);
        if (obj.isOfTypeClass(stdlib_1.ListT) || obj.isOfTypeClass(stdlib_1.TupleT)) {
            const args = node.args.map((x) => this.visit(x));
            return obj.getIndex(args);
        }
        else {
            throw this.makeError(`tried to index non-tuple/list: ${obj.ty}`, node.obj);
        }
    }
    visitDColonExpr(node) {
        const obj = this.visit(node.obj);
        return obj.getSymbol(node.member.value);
    }
    callMethod(obj, method, argVals) {
        let methodFn = obj.getSymbol(method);
        return this.callFn(methodFn, args(argVals));
    }
    callFn(fn, args, scope) {
        // set function definition's parent scope to the intermediate scope
        // create a new scope for the function call
        this.pushScope(fn.subscope(scope));
        fn.setArgsInScope(this.scope, args);
        let result;
        try {
            if (fn instanceof stdlib_1.MethodDefn) {
                result = fn.call(args[0].value, ...args.slice(1).map((x) => x.value));
            }
            else {
                // evaluate the function body in the new scope
                result = this.visit(fn.body);
            }
        }
        catch (e) {
            if (e instanceof Return) {
                result = e.value;
            }
            else if (e instanceof Failure) {
                result = e.error;
            }
            else {
                throw e;
            }
        }
        // reset scope
        this.popScope();
        return result;
    }
    visitFnCallExpr(node) {
        const func = this.visit(node.func);
        const args = node.args.map((x) => this.visitArg(x));
        if (func instanceof stdlib_1.FnDefn) {
            if (func.fallible && !node.fallible) {
                throw this.makeError(`tried to call fallible function '${func.name}' without '!'`, node.func);
            }
            return this.callFn(func, args);
        }
        else if (func instanceof stdlib_1.StructDefn) {
            return func.value(args);
        }
        else if (func instanceof stdlib_1.Type) {
            if (args.length !== 1) {
                throw this.makeError(`can only call type with one argument`, node);
            }
            if (node.fallible) {
                return func.tryFromVal(args[0].value);
            }
            else {
                return func.fromVal(args[0].value);
            }
        }
        else {
            throw this.makeError(`tried to call non-function: ${func.ty}`, node.func);
        }
    }
    executeBinOp(op, lhs, rhs) {
        return lhs.ty.callOperator(op, lhs, rhs);
    }
    visitBinOpExpr(node) {
        const lhs = this.visit(node.lhs);
        const rhs = this.visit(node.rhs);
        return this.executeBinOp(node.op, lhs, rhs);
    }
    visitAndExpr(node) {
        const lhs = this.visit(node.lhs);
        if (lhs.isOfType(stdlib_1.BoolT)) {
            if (lhs === stdlib_1.CWSBool.FALSE) {
                // short-circuit
                return stdlib_1.CWSBool.FALSE;
            }
            else {
                const rhs = this.visit(node.rhs);
                if (rhs.isOfType(stdlib_1.BoolT)) {
                    return rhs;
                }
                else {
                    throw this.makeError(`tried to AND non-boolean: ${rhs}`, node.rhs);
                }
            }
        }
        else {
            throw this.makeError(`tried to AND non-boolean: ${lhs}`, node.lhs);
        }
    }
    visitOrExpr(node) {
        const lhs = this.visit(node.lhs);
        if (lhs.isOfType(stdlib_1.BoolT)) {
            if (lhs === stdlib_1.CWSBool.TRUE) {
                // short-circuit
                return stdlib_1.CWSBool.TRUE;
            }
            else {
                const rhs = this.visit(node.rhs);
                if (rhs.isOfType(stdlib_1.BoolT)) {
                    return rhs;
                }
                else {
                    throw this.makeError(`tried to OR non-boolean: ${rhs}`, node.rhs);
                }
            }
        }
        else {
            throw this.makeError(`tried to OR non-boolean: ${lhs}`, node.lhs);
        }
    }
    visitIsExpr(node) {
        const lhs = this.visit(node.lhs);
        const rhs = this.visitType(node.rhs);
        let result = lhs.isOfType(rhs);
        return node.negative ? stdlib_1.CWSBool.FALSE : stdlib_1.CWSBool.TRUE;
    }
    visitInExpr(node) {
        const lhs = this.visit(node.lhs);
        const rhs = this.visit(node.rhs);
        if (rhs.isOfTypeClass(stdlib_1.ListT) || rhs.isOfTypeClass(stdlib_1.TupleT)) {
            // @ts-ignore
            const items = rhs;
            if (items.operatorIn(lhs)) {
                return stdlib_1.CWSBool.TRUE;
            }
            else {
                return stdlib_1.CWSBool.FALSE;
            }
        }
        else {
            throw this.makeError(`tried to check if value is in non-list/tuple: ${rhs}`, node.rhs);
        }
    }
    visitNotExpr(node) {
        const expr = this.visit(node.expr);
        if (expr.isOfType(stdlib_1.CWSBool.TYPE)) {
            return stdlib_1.CWSBool.isTrue(expr) ? stdlib_1.CWSBool.FALSE : stdlib_1.CWSBool.TRUE;
        }
        else if (expr.isOfType(stdlib_1.NoneT)) {
            return stdlib_1.CWSBool.TRUE;
        }
        else {
            throw this.makeError(
            // @ts-ignore
            `tried to negate on expression other than Bool or None: ${expr.ty}`, node.expr);
        }
    }
    visitNoneCheckExpr(node) {
        const expr = this.visit(node.expr);
        return expr.isOfType(stdlib_1.NoneT) ? stdlib_1.CWSBool.FALSE : stdlib_1.CWSBool.TRUE;
    }
    visitTryCatchElseExpr(node) {
        // TODO: might need to push / pop scope around this.visit
        this.pushScope(this.scope.subscope());
        const result = this.visit(node.body); // Val, ErrorInstance
        this.popScope();
        if (result instanceof Failure) {
            for (let c of node.catch_.toArray()) {
                let ty = this.visitType(c.ty);
                if (result.error.isOfType(ty)) {
                    if (c.name !== null) {
                        this.setSymbol(c.name.value, result.error);
                    }
                    return this.visit(c.body);
                }
            }
            if (node.else_ !== null) {
                return this.visit(node.else_);
            }
            else {
                return result;
            }
        }
        else if (result.isOfType(stdlib_1.NoneT)) {
            if (node.else_ !== null) {
                return this.visit(node.else_);
            }
            else {
                return new Failure(stdlib_1.Err_UnwrapNone.value([]));
            }
        }
        else {
            return result;
        }
    }
    visitFailExpr(node) {
        let result = this.visit(node.expr);
        if (!result.isOfType(stdlib_1.ErrorT) && !result.isOfType(stdlib_1.StringT)) {
            throw this.makeError(`tried to fail with value other than Error or String: ${result}`, node.expr);
        }
        else {
            if (result.isOfType(stdlib_1.StringT)) {
                result = stdlib_1.Err_Generic.value([arg(result, 'message')]);
            }
            return new Failure(result);
        }
    }
    visitClosure(node) {
        let params = node.params.map((x) => this.visit(x));
        let retTy = node.retTy !== null ? this.visitType(node.retTy) : undefined;
        return new stdlib_1.FnDefn('%anonymous', node.fallible, params, retTy, node.body);
    }
    visitTupleExpr(node) {
        let exprs = node.exprs.map((x) => this.visit(x));
        if (exprs.length === 0) {
            return new stdlib_1.ListInstance(new stdlib_1.ListT(stdlib_1.AnyT), []);
        }
        if (exprs.every((x) => x.ty.isEq(exprs[0].ty))) {
            return new stdlib_1.ListInstance(new stdlib_1.ListT(exprs[0].ty), exprs);
        }
        let tupType = new stdlib_1.TupleT(exprs.map((x) => x.ty));
        return new stdlib_1.TupleInstance(tupType, exprs);
    }
    visitStructExpr(node) {
        if (node.ty === null) {
            let args = [];
            let ty = new stdlib_1.StructDefn('%anonymous', node.args.map((m) => {
                let value;
                if (m.value === null) {
                    value = this.visit(m.name);
                }
                else {
                    value = this.visit(m.value);
                }
                args.push(arg(value, m.name.value));
                return new stdlib_1.Param(m.name.value, value.ty);
            }));
            return ty.value(args);
        }
        else {
            let ty = this.visitType(node.ty);
            if (!(ty instanceof stdlib_1.StructDefn)) {
                throw this.makeError(`tried to instantiate non-struct type: ${ty}`, node.ty);
            }
            let args = [];
            for (let m of node.args.toArray()) {
                let value;
                if (m.value === null) {
                    value = this.visit(m.name);
                }
                else {
                    value = this.visit(m.value);
                }
                args.push(arg(value, m.name.value));
            }
            return ty.value(args);
        }
    }
    visitUnitVariantExpr(node) {
        let ty = this.visit(node.ty);
        return ty.value(null);
    }
    visitIdent(node) {
        // special ! function case
        if (!this.hasSymbol(node.value) && this.hasSymbol(node.value + '#!')) {
            return this.getSymbol(node.value + '#!');
        }
        return this.getSymbol(node.value);
    }
    visitGroupedExpr(node) {
        return this.visit(node.expr);
    }
    visitGrouped2Expr(node) {
        return this.visit(node.expr);
    }
    //endregion <EXPRESSIONS>
    //region <LITERALS>
    visitStringLit(node) {
        return stdlib_1.StringT.value(node.value);
    }
    visitIntLit(node) {
        return stdlib_1.IntT.value(BigInt(node.value));
    }
    visitDecLit(node) {
        return stdlib_1.DecT.value(node.value);
    }
    visitBoolLit(node) {
        if (node.value === 'true') {
            return stdlib_1.CWSBool.TRUE;
        }
        else {
            return stdlib_1.CWSBool.FALSE;
        }
    }
    visitNoneLit(node) {
        return stdlib_1.None;
    }
}
exports.CWSInterpreterVisitor = CWSInterpreterVisitor;
//endregion <VISITOR>
//# sourceMappingURL=interpreter.js.map