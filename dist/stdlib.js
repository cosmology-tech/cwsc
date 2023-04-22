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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressT = exports.CWSAddress = exports.StringT = exports.CWSString = exports.operator = exports.idx = exports.args = exports.arg = exports.StructInstance = exports.ContractReference = exports.Arg = exports.EnumVariantUnitDefn = exports.EnumVariantStructDefn = exports.EventMsg = exports.ErrorMsg = exports.QueryMsg = exports.ExecMsg = exports.InstantiateMsg = exports.EventT = exports.ErrorT = exports.QueryMsgT = exports.ExecMsgT = exports.InstantiateMsgT = exports.EnumDefn = exports.StructDefn = exports.MethodDefn = exports.TypeMethod = exports.FnDefn = exports.StateMap = exports.StateItem = exports.MapKey = exports.InterfaceDefn = exports.ContractDefn = exports.BoolT = exports.CWSBool = exports.CWSNone = exports.AnyT = exports.CWSAny = exports.TupleInstance = exports.ListInstance = exports.SizedIndexableValue = exports.SizedIndexableIter = exports.ListT = exports.TupleT = exports.OptionT = exports.Param = exports.Value = exports.Type = exports.Return = exports.Failure = void 0;
exports.STDLIB = exports.CtxResT = exports.CtxInfoT = exports.CtxEnvT = exports.CtxEnvContractInfoT = exports.CtxEnvBlockInfoT = exports.CoinList = exports.CoinT = exports.None = exports.NoneT = exports.Err_TypeError = exports.Err_Generic = exports.Err_UnwrapNone = exports.U128_T = exports.U64_T = exports.U32_T = exports.U16_T = exports.U8_T = exports.CWSUnsignedInt = exports.MAX_8 = exports.MAX_16 = exports.MAX_32 = exports.MAX_64 = exports.UINT_MAX = exports.IntT = exports.CWSInt = exports.IntSize = exports.BinaryT = exports.CWSBinary = exports.DecT = exports.CWSDec = void 0;
const AST = __importStar(require("./ast"));
const symbol_table_1 = require("./util/symbol-table");
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
class Type extends symbol_table_1.SymbolTable {
    constructor(name) {
        super();
        this.name = name;
    }
    defineMethod(name, params, ret, call) {
        let fallible = false;
        let symbolName = name;
        if (name.endsWith('!')) {
            name = name.slice(0, -1);
            symbolName = name + '#!';
            fallible = true;
        }
        let ps = [];
        for (let p of params) {
            if (p.length === 2) {
                ps.push(new Param(p[0], p[1]));
            }
            else {
                ps.push(new Param(p[0], p[1], p[2]));
            }
        }
        this.setSymbol(symbolName, new TypeMethod(name, fallible, ps, ret, call));
    }
    inheritMethodsFrom(other) {
        for (let name in other.symbols) {
            let symbol = other.getSymbol(name);
            if (symbol instanceof TypeMethod) {
                this.setSymbol(name, symbol);
            }
        }
    }
    tryFromVal(val) {
        try {
            return this.fromVal(val);
        }
        catch (e) {
            return new Failure(exports.Err_TypeError.make({
                message: exports.StringT.value(`Cannot convert ${val.ty.name} to ${this.name}`),
            }));
        }
    }
    fromVal(val) {
        throw new Error(`Cannot convert ${val.ty.name} to ${this.name}`);
    }
    defaultValue() {
        return this.value(undefined);
    }
    /**
     * Checks if this <: other, i.e. if this can be converted to
     * other without losing information.
     */
    isSubOf(other) {
        return other === exports.AnyT || this.isEq(other);
    }
    isSuperOf(other) {
        return other === exports.AnyT || this.isEq(other) || other.isSubOf(this);
    }
    isEq(other) {
        // make sure all properties match
        return this === other;
    }
    isCompatibleWith(other) {
        return this.isSubOf(other) || other.isSubOf(this);
    }
    value(data) {
        return new Value(this, data);
    }
    [operator(AST.Op.EQ)](lhs, rhs) {
        // check if types are equal
        console.warn("default implementation of operator '==' used");
        if (lhs.equals(rhs)) {
            return CWSBool.TRUE;
        }
        else {
            return CWSBool.FALSE;
        }
    }
    [operator(AST.Op.NEQ)](lhs, rhs) {
        // check if types are equal
        if (lhs.ty.isEq(rhs.ty)) {
            return CWSBool.FALSE;
        }
        else {
            return CWSBool.TRUE;
        }
    }
    callOperator(op, lhs, rhs) {
        // check if types are equal
        if (operator(op) in this) {
            let opFn = this[operator(op)];
            return opFn(lhs, rhs);
        }
        else {
            throw new Error(`operator '${op}' not defined for type ${this.name}`);
        }
    }
    /**
     * Creates a new type with the given name, which should only be used for "unit" types,
     * which exist as root types. Then, in classes of subtypes you can define "isSubOf" to first
     * check if the other type is the unit type in question, and if so, return true.
     * E.g.: "ExecMsgT" will exist as the unit type, and "ExecMsg" will defined "isSubOf" to
     * check if the other type is "ExecMsgT" first, and if so, return true.
     * @param name
     */
    static makeUnitT(name) {
        return new (Type.unitT(name))();
    }
    static unitT(name) {
        return class extends Type {
            constructor() {
                super(name);
            }
        };
    }
}
exports.Type = Type;
class Value extends symbol_table_1.SymbolTable {
    constructor(ty, data) {
        super({});
        this.ty = ty;
        this.data = data;
    }
    toString() {
        return this.ty.name + '(' + this.data + ')';
    }
    getSymbol(name) {
        if (!this.hasOwnSymbol(name)) {
            if (this.ty.hasOwnSymbol(name)) {
                let x = this.ty.getSymbol(name);
                if (x instanceof TypeMethod) {
                    return x.bind(this);
                }
                return x;
            }
        }
        return super.getSymbol(name);
    }
    isOfType(ty) {
        return this.ty.isEq(ty);
    }
    isInstanceOf(ty) {
        return this.ty.isSubOf(ty);
    }
    isOfTypeClass(tyc) {
        return this.ty instanceof tyc;
    }
    equals(other) {
        return this.ty.isCompatibleWith(other.ty) && this.data === other.data;
    }
}
exports.Value = Value;
//endregion <INODES:META>
//region <INODES:TYPES>
class Param extends symbol_table_1.SymbolTable {
    constructor(name, ty, default_) {
        super();
        this.name = name;
        this.ty = ty;
        this.default_ = default_;
    }
}
exports.Param = Param;
class OptionT extends Type {
    constructor(inner) {
        super(`${inner.name}?`);
        this.inner = inner;
    }
    isSubOf(other) {
        return ((other instanceof OptionT && this.inner.isSubOf(other.inner)) ||
            super.isSubOf(other));
    }
    isEq(other) {
        return other instanceof OptionT && this.inner.isEq(other.inner);
    }
    defaultValue() {
        return this.value(exports.None);
    }
    value(data) {
        if (data.isOfType(exports.NoneT)) {
            return new Value(this, exports.None);
        }
        else if (data.isInstanceOf(this.inner)) {
            return new Value(this, data);
        }
        else {
            throw new Error(`cannot convert ${data.ty.name} into ${this.name}`);
        }
    }
    fromVal(val) {
        if (val.isInstanceOf(this.inner)) {
            return this.value(val);
        }
        else if (val.isInstanceOf(exports.NoneT)) {
            return this.value(exports.None);
        }
        else {
            throw new Error(`cannot convert ${val.ty.name} into ${this.name}`);
        }
    }
}
exports.OptionT = OptionT;
class TupleT extends Type {
    constructor(tys) {
        super(`[${tys.map((x) => x.name).join(', ')}]`);
        this.tys = tys;
    }
    isEq(other) {
        return (other instanceof TupleT &&
            this.tys.length === other.tys.length &&
            this.tys.every((x, i) => x.isEq(other.tys[i])));
    }
    isSubOf(other) {
        if (other instanceof TupleT) {
            return (this.tys.length === other.tys.length &&
                this.tys.every((x, i) => x.isSubOf(other.tys[i])));
        }
        else if (other instanceof ListT) {
            return this.tys.every((x, i) => {
                return x.isSubOf(other.inner);
            });
        }
        else {
            return super.isSubOf(other);
        }
    }
    value(data) {
        return new TupleInstance(this, data);
    }
    defaultValue() {
        return this.value(this.tys.map((x) => x.defaultValue()));
    }
}
exports.TupleT = TupleT;
class ListT extends Type {
    constructor(inner) {
        super(`${inner.name}[]`);
        this.inner = inner;
        this.defineMethod('push', [['val', this.inner]], exports.NoneT, (self, val) => {
            self.items.push(val);
            return exports.None;
        });
        this.defineMethod('pop', [], new OptionT(this.inner), (self) => {
            if (self.items.length > 0) {
                return self.items.pop();
            }
            else {
                return exports.None;
            }
        });
    }
    value(data) {
        return new ListInstance(this, data);
    }
    defaultValue() {
        return this.value([]);
    }
    isEq(other) {
        return other instanceof ListT && this.inner.isEq(other.inner);
    }
    isSubOf(other) {
        if (other instanceof ListT) {
            return this.inner.isSubOf(other.inner);
        }
        return super.isSubOf(other);
    }
}
exports.ListT = ListT;
class SizedIndexableIter {
    constructor(parent) {
        this.parent = parent;
        this.ix = 0;
    }
    next() {
        if (this.ix >= this.parent.getSize()) {
            return undefined;
        }
        return this.parent.getIndex(idx(this.ix++));
    }
}
exports.SizedIndexableIter = SizedIndexableIter;
class SizedIndexableValue extends Value {
    constructor(ty, items) {
        super(ty, undefined);
        this.ty = ty;
        this.items = items;
    }
    getSize() {
        return this.items.length;
    }
    getIndex(args) {
        if (args.length !== 1) {
            throw new Error(`list index requires 1 argument, got ${args.length}`);
        }
        let arg = args[0];
        if (!arg.value.isOfType(exports.IntT)) {
            throw new Error(
            // @ts-ignore
            `list index must be Int, got ${arg.value.ty.name}`);
        }
        // TODO: this is iffy, fix Value vs Val or make an int type
        let ix = arg.value.data;
        if (ix < 0 || ix >= this.getSize()) {
            throw new Error(`index out of range: ${ix}`);
        }
        return this.items[Number(ix)];
    }
    setIndex(args, val) {
        if (args.length !== 1) {
            throw new Error(`list index requires 1 argument, got ${args.length}`);
        }
        let arg = args[0];
        if (!arg.value.isOfType(exports.IntT)) {
            throw new Error(
            // @ts-ignore
            `list index must be an integer, got ${arg.value.ty.name}`);
        }
        let ix = arg.value.data;
        if (ix < 0 || ix >= this.getSize()) {
            throw new Error(`index out of range: ${ix}`);
        }
        this.items[Number(ix)] = val;
    }
    getIter() {
        return new SizedIndexableIter(this);
    }
    operatorIn(val) {
        return this.items.some((x) => val.equals(x));
    }
    equals(other) {
        return (other instanceof SizedIndexableValue &&
            this.items.every((x, i) => x.equals(other.items[i])));
    }
}
exports.SizedIndexableValue = SizedIndexableValue;
class ListInstance extends SizedIndexableValue {
    constructor(ty, items) {
        super(ty, items);
    }
}
exports.ListInstance = ListInstance;
class TupleInstance extends SizedIndexableValue {
}
exports.TupleInstance = TupleInstance;
class CWSAny extends Type {
    constructor() {
        super('Any');
    }
    value(data) {
        return data;
    }
    isSubOf(other) {
        return true;
    }
    isSuperOf(other) {
        return true;
    }
    fromVal(val) {
        return val;
    }
}
exports.CWSAny = CWSAny;
CWSAny.TYPE = new CWSAny();
exports.AnyT = CWSAny.TYPE;
class CWSNone extends Type {
    constructor() {
        super('None');
    }
    value(data) {
        return CWSNone.NONE;
    }
    defaultValue() {
        return CWSNone.NONE;
    }
    isSubOf(other) {
        return super.isSubOf(other) || other instanceof OptionT;
    }
}
exports.CWSNone = CWSNone;
CWSNone.TYPE = new CWSNone();
CWSNone.NONE = new Value(CWSNone.TYPE, null);
class CWSBool extends Type {
    constructor() {
        super('Bool');
    }
    static isTrue(val) {
        if (val.isOfType(CWSBool.TYPE)) {
            return val.data;
        }
        else {
            throw new Error(`Cannot convert ${val.ty.name} to Bool`);
        }
    }
    static isFalse(val) {
        return !CWSBool.isTrue(val);
    }
    value(data) {
        return (data ? CWSBool.TRUE : CWSBool.FALSE);
    }
    defaultValue() {
        return CWSBool.FALSE;
    }
}
exports.CWSBool = CWSBool;
CWSBool.TYPE = new CWSBool();
CWSBool.TRUE = new Value(CWSBool.TYPE, true);
CWSBool.FALSE = new Value(CWSBool.TYPE, false);
exports.BoolT = CWSBool.TYPE;
//endregion <INODES:TYPES>
//region <INODES:DEFINITIONS>
class ContractDefn extends Type {
    constructor(name) {
        super(name);
        this.name = name;
    }
    instantiate(args) {
        return this.getSymbol('#instantiate').value(args);
    }
    exec(fnName, args) {
        return this.getSymbol('exec#' + fnName).value(args);
    }
    query(fnName, args) {
        return this.getSymbol('query#' + fnName).value(args);
    }
    value(data) {
        if (data.isOfType(exports.AddressT)) {
            return new ContractReference(this, data.data);
        }
        else {
            throw new Error(`Cannot convert ${data.ty.name} to ContractInstance`);
        }
    }
    defaultValue() {
        throw new Error('Cannot get default value for ContractInstance');
    }
}
exports.ContractDefn = ContractDefn;
class InterfaceDefn extends symbol_table_1.SymbolTable {
    constructor(name) {
        super();
        this.name = name;
    }
}
exports.InterfaceDefn = InterfaceDefn;
class MapKey extends symbol_table_1.SymbolTable {
    constructor(ty, name) {
        super();
        this.ty = ty;
        this.name = name;
    }
}
exports.MapKey = MapKey;
class StateItem extends symbol_table_1.SymbolTable {
    constructor(key, ty, default_) {
        super();
        this.key = key;
        this.ty = ty;
        this.default_ = default_;
    }
}
exports.StateItem = StateItem;
class StateMap extends symbol_table_1.SymbolTable {
    constructor(prefix, mapKeys, ty, default_) {
        super();
        this.prefix = prefix;
        this.mapKeys = mapKeys;
        this.ty = ty;
        this.default_ = default_;
    }
}
exports.StateMap = StateMap;
class FnDefn extends symbol_table_1.SymbolTable {
    // if name is %anonymous%, then this is a lambda defn
    constructor(name, fallible, params, retTy, body = AST.Block.empty()) {
        super();
        this.name = name;
        this.fallible = fallible;
        this.params = params;
        this.retTy = retTy;
        this.body = body;
    }
    validateArgs(args) {
        // ensure positional arguments come before named arguments
        let firstNamedArgIx = args.findIndex((x) => x.name !== undefined);
        // check if any args after first named arg are positional
        let nextPosArg = args.findIndex((x, i) => x.name === undefined && i > firstNamedArgIx);
        if (firstNamedArgIx !== -1 && nextPosArg !== -1) {
            throw new Error(`${this.name}: positional arguments must come before named arguments`);
        }
        // see if there are too many arguments
        if (args.length > this.params.length) {
            throw new Error(`${this.name}: too many arguments`);
        }
        // see if there are enough arguments
        let requiredParams = this.params.filter((p) => p.default_ === undefined);
        if (args.length < requiredParams.length) {
            throw new Error(`${this.name}: too few arguments, got ${args.length} but expected ${requiredParams.length} (${requiredParams.map((x) => x.name).join(', ')})`);
        }
        // see if there are any arguments that are not in the function signature
        let unknownArgs = args.filter((x) => {
            return (x.name !== undefined && !this.params.some((p) => p.name === x.name));
        });
        if (unknownArgs.length > 0) {
            throw new Error(`${this.name}: called with unknown named arguments ${unknownArgs
                .map((x) => x.name)
                .join(', ')}`);
        }
        // check each provided argument type matches corresponding param
        for (let i = 0; i < args.length; i++) {
            let arg = args[i];
            // if it is a named param
            let p;
            if (arg.name !== undefined) {
                // find the corresponding param
                p = this.params.find((x) => x.name === arg.name);
            }
            else {
                p = this.params[i];
            }
            if (p.ty && !arg.value.ty.isSubOf(p.ty)) {
                throw new Error(
                // @ts-ignore
                `${this.name}: invalid argument type for ${p.name} - expected ${p.ty.name}, got ${arg.value.ty.name}`);
            }
        }
    }
    setArgsInScope(scope, args) {
        this.validateArgs(args);
        // at this point, we know:
        // 1. all named args come after positional args
        // 2. there are no unknown named args
        // 3. there are not any missing required args (the ones that don't have a default)
        // 4. all provided args are of the correct type
        for (let i = 0; i < this.params.length; i++) {
            // covered all required arguments
            if (i > args.length - 1) {
                let p = this.params[i];
                scope.setSymbol(p.name, p.default_);
            }
            else {
                let arg = args[i];
                let p;
                if (arg.name !== undefined) {
                    p = this.params.find((x) => x.name === arg.name);
                }
                else {
                    p = this.params[i];
                }
                if (p.ty && !arg.value.isOfType(p.ty)) {
                    // try converting
                    arg.value = p.ty.fromVal(arg.value);
                }
                scope.setSymbol(p.name, arg.value);
            }
        }
    }
}
exports.FnDefn = FnDefn;
/**
 * A method is a function that is bound to a specific instance of a type.
 * In order to call it, you need to call `bind` with the instance to use
 * as the `self` parameter.
 */
class TypeMethod {
    constructor(name, fallible, params, retTy, call) {
        this.name = name;
        this.fallible = fallible;
        this.params = params;
        this.retTy = retTy;
        this.call = call;
    }
    bind(self) {
        return new MethodDefn(this.name, this.fallible, this.params, this.retTy, (...args) => this.call(self, ...args));
    }
}
exports.TypeMethod = TypeMethod;
class MethodDefn extends FnDefn {
    constructor(name, fallible, params, retTy, call) {
        super(name, fallible, params, retTy);
        this.name = name;
        this.fallible = fallible;
        this.params = params;
        this.retTy = retTy;
        this.call = call;
    }
}
exports.MethodDefn = MethodDefn;
class StructDefn extends Type {
    constructor(name, params) {
        super(name);
        this.name = name;
        this.params = params;
        this.structFn = new FnDefn(name, false, params, this, new AST.Block([]));
    }
    isEq(other) {
        return (other instanceof StructDefn &&
            this.name === other.name &&
            this.params.length === other.params.length &&
            this.params.every((p, i) => p.name === other.params[i].name && p.ty
                ? other.params[i].ty
                    ? p.ty.isEq(other.params[i].ty)
                    : false
                : p.ty === other.params[i].ty));
    }
    value(args) {
        this.structFn.validateArgs(args);
        let instance = new StructInstance(this, undefined);
        this.structFn.setArgsInScope(instance, args);
        return instance;
    }
    make(args) {
        let argsList = Object.keys(args).map((name) => arg(args[name], name));
        return this.value(argsList);
    }
    defaultValue() {
        return this.value(this.params.map((p) => arg(p.ty.defaultValue(), p.name)));
    }
}
exports.StructDefn = StructDefn;
class EnumDefn extends Type {
    constructor(name, variants = {}) {
        super(name);
        this.name = name;
        this.variants = variants;
        for (let v in variants) {
            this.setSymbol('#' + variants[v].name, variants[v]);
        }
    }
    isEq(other) {
        return (other instanceof EnumDefn &&
            this.name === other.name &&
            Object.keys(this.variants).length ===
                Object.keys(other.variants).length &&
            Object.keys(this.variants).every((k) => {
                return other.variants[k] && this.variants[k].isEq(other.variants[k]);
            }));
    }
    isSuperOf(other) {
        if (other instanceof EnumVariantStructDefn ||
            other instanceof EnumVariantUnitDefn) {
            return this.isEq(other.ty);
        }
        else {
            return super.isSuperOf(other);
        }
    }
    structVariant(name, params) {
        const defn = new EnumVariantStructDefn(this, name, params);
        this.variants[name] = defn;
        this.setSymbol('#' + name, defn);
        return defn;
    }
    unitVariant(name) {
        const defn = new EnumVariantUnitDefn(this, name);
        this.variants[name] = defn;
        this.setSymbol('#' + name, defn);
        return defn;
    }
    defaultValue() {
        throw new Error(`EnumDefn ${this.name} has no default value`);
    }
}
exports.EnumDefn = EnumDefn;
exports.InstantiateMsgT = Type.makeUnitT('InstantiateMsg');
exports.ExecMsgT = Type.makeUnitT('ExecMsg');
exports.QueryMsgT = Type.makeUnitT('QueryMsg');
exports.ErrorT = Type.makeUnitT('Error');
exports.EventT = Type.makeUnitT('Event');
class InstantiateMsg extends StructDefn {
    isSubOf(other) {
        return other.isEq(exports.InstantiateMsgT) || super.isSubOf(other);
    }
    isEq(other) {
        return other instanceof InstantiateMsg && super.isEq(other);
    }
}
exports.InstantiateMsg = InstantiateMsg;
class ExecMsg extends StructDefn {
    isSubOf(other) {
        return other.isEq(exports.ExecMsgT) || super.isSubOf(other);
    }
    isEq(other) {
        return other instanceof ExecMsg && super.isEq(other);
    }
}
exports.ExecMsg = ExecMsg;
class QueryMsg extends StructDefn {
    isSubOf(other) {
        return other.isEq(exports.QueryMsgT) || super.isSubOf(other);
    }
    isEq(other) {
        return other instanceof QueryMsg && super.isEq(other);
    }
}
exports.QueryMsg = QueryMsg;
class ErrorMsg extends StructDefn {
    isSubOf(other) {
        return other.isEq(exports.ErrorT) || super.isSubOf(other);
    }
    isEq(other) {
        return other instanceof ErrorMsg && super.isEq(other);
    }
}
exports.ErrorMsg = ErrorMsg;
class EventMsg extends StructDefn {
    isSubOf(other) {
        return other.isEq(exports.EventT) || super.isSubOf(other);
    }
    isEq(other) {
        return other instanceof EventMsg && super.isEq(other);
    }
}
exports.EventMsg = EventMsg;
class EnumVariantStructDefn extends StructDefn {
    constructor(ty, variantName, params) {
        super(`${ty.name}.#${variantName}`, params);
        this.ty = ty;
        this.variantName = variantName;
        this.params = params;
    }
    isSubOf(other) {
        return this.ty.isSubOf(other) || super.isSubOf(other);
    }
    isEq(other) {
        return (other instanceof EnumVariantStructDefn &&
            this.ty.isEq(other.ty) &&
            super.isEq(other));
    }
}
exports.EnumVariantStructDefn = EnumVariantStructDefn;
class EnumVariantUnitDefn extends Type {
    constructor(ty, variantName) {
        super(`${ty.name}.#${variantName}`);
        this.ty = ty;
        this.variantName = variantName;
    }
    isSubOf(other) {
        return this.ty.isSubOf(other) || super.isSubOf(other);
    }
    isEq(other) {
        return (other instanceof EnumVariantUnitDefn &&
            this.ty.isEq(other.ty) &&
            this.name === other.name);
    }
}
exports.EnumVariantUnitDefn = EnumVariantUnitDefn;
//endregion <INODES:DEFNS>
//region <INODES:VALUES>
class Arg extends symbol_table_1.SymbolTable {
    constructor(value, name) {
        super();
        this.value = value;
        this.name = name;
    }
}
exports.Arg = Arg;
class ContractReference extends Value {
    constructor(ty, address) {
        super(ty, null);
        this.ty = ty;
        this.address = address;
    }
}
exports.ContractReference = ContractReference;
class StructInstance extends Value {
}
exports.StructInstance = StructInstance;
//endregion <INODES:VALUES>
//region <STDLIB>
//region <HELPER FUNCTIONS>
function arg(val, name) {
    return new Arg(val, name);
}
exports.arg = arg;
function args(a_pos = [], a_named = {}) {
    return a_pos
        .map((v) => arg(v))
        .concat(Object.keys(a_named).map((name) => arg(a_named[name], name)));
}
exports.args = args;
function idx(ix) {
    return args([exports.IntT.value(BigInt(ix))]);
}
exports.idx = idx;
function operator(op) {
    return ('#operator' + op);
}
exports.operator = operator;
class CWSString extends Type {
    constructor() {
        super('String');
    }
    defaultValue() {
        return this.value('');
    }
}
exports.CWSString = CWSString;
CWSString.TYPE = new CWSString();
exports.StringT = CWSString.TYPE;
class CWSAddress extends Type {
    constructor() {
        super('Address');
        this.inheritMethodsFrom(exports.StringT);
    }
    isSubOf(other) {
        return other.isEq(exports.StringT) || super.isSubOf(other);
    }
    defaultValue() {
        throw new Error(`Cannot get default value for ${this.name} type`);
    }
    fromVal(val) {
        if (val.isInstanceOf(exports.StringT)) {
            return this.value(val.data);
        }
        else {
            throw new Error(`Cannot convert ${val.ty.name} to ${this.name}`);
        }
    }
}
exports.CWSAddress = CWSAddress;
CWSAddress.TYPE = new CWSAddress();
exports.AddressT = CWSAddress.TYPE;
class CWSDec extends Type {
    constructor() {
        super('Dec');
    }
}
exports.CWSDec = CWSDec;
CWSDec.TYPE = new CWSDec();
exports.DecT = CWSDec.TYPE;
class CWSBinary extends Type {
    constructor() {
        super('Binary');
    }
}
exports.CWSBinary = CWSBinary;
CWSBinary.TYPE = new CWSBinary();
exports.BinaryT = CWSBinary.TYPE;
var IntSize;
(function (IntSize) {
    IntSize[IntSize["SIZE_8"] = 8] = "SIZE_8";
    IntSize[IntSize["SIZE_16"] = 16] = "SIZE_16";
    IntSize[IntSize["SIZE_32"] = 32] = "SIZE_32";
    IntSize[IntSize["SIZE_64"] = 64] = "SIZE_64";
    IntSize[IntSize["SIZE_128"] = 128] = "SIZE_128";
})(IntSize = exports.IntSize || (exports.IntSize = {}));
class CWSInt extends Type {
    constructor() {
        super('Int');
    }
    defaultValue() {
        return this.value(BigInt(0));
    }
    fromVal(val) {
        if (val.isInstanceOf(exports.IntT)) {
            return this.value(val.data);
        }
        else {
            throw new Error(`Cannot convert ${val.ty.name} to ${this.name}`);
        }
    }
}
exports.CWSInt = CWSInt;
CWSInt.TYPE = new CWSInt();
exports.IntT = CWSInt.TYPE;
exports.UINT_MAX = {
    U128: BigInt(2) ** BigInt(128) - BigInt(1),
    U64: BigInt(2) ** BigInt(64) - BigInt(1),
    U32: BigInt(2 ** 32 - 1),
    U16: BigInt(2 ** 16 - 1),
    U8: BigInt(2 ** 8 - 1),
};
exports.MAX_64 = BigInt(2) ** BigInt(64) - BigInt(1);
exports.MAX_32 = BigInt(2 ** 32 - 1);
exports.MAX_16 = BigInt(2 ** 16 - 1);
exports.MAX_8 = BigInt(2 ** 8 - 1);
class CWSUnsignedInt extends Type {
    constructor(size) {
        let name = 'U' + size.toString();
        super(name);
        this.size = size;
        this.MAX = exports.IntT.value(exports.UINT_MAX[name]);
        this.setSymbol('MAX', this.MAX);
    }
    defaultValue() {
        return this.value(BigInt(0));
    }
    isSubOf(other) {
        return other.isEq(exports.IntT) || super.isSubOf(other);
    }
    tryFromVal(val) {
        if (val.isInstanceOf(exports.IntT)) {
            // check that the value is in range
            if (val.data < BigInt(0)) {
                return new Failure(exports.Err_TypeError.make({
                    message: exports.StringT.value(`Cannot convert negative value to ${this.name}`),
                }));
            }
            if (val.data > this.MAX.data) {
                return new Failure(exports.Err_TypeError.make({
                    message: exports.StringT.value(`Cannot convert value ${val.data} to ${this.name}`),
                }));
            }
            return this.value(val.data);
        }
        else if (val.isInstanceOf(exports.StringT)) {
            let data;
            try {
                data = BigInt(val.data);
            }
            catch (e) {
                return new Failure(exports.Err_TypeError.make({
                    message: exports.StringT.value(e.toString()),
                }));
            }
            if (data < BigInt(0)) {
                return new Failure(exports.Err_TypeError.make({
                    message: exports.StringT.value(`Cannot convert negative value to ${this.name}`),
                }));
            }
            if (data > this.MAX.data) {
                return new Failure(exports.Err_TypeError.make({
                    message: exports.StringT.value(`Cannot convert value ${val.data} to ${this.name}`),
                }));
            }
            return this.value(data);
        }
        else {
            return new Failure(exports.Err_TypeError.make({
                message: exports.StringT.value(
                // @ts-ignore
                `Cannot convert ${val.ty.name} to ${this.name}`),
            }));
        }
    }
    fromVal(val) {
        let res = this.tryFromVal(val);
        if (res instanceof Failure) {
            throw res.error;
        }
        return res;
    }
    value(data) {
        if (typeof data === 'bigint' ||
            typeof data === 'number' ||
            typeof data === 'string') {
            return new Value(this, BigInt(data));
        }
        else {
            throw new Error(`Cannot convert ${typeof data} to ${this.name}`);
        }
    }
}
exports.CWSUnsignedInt = CWSUnsignedInt;
exports.U8_T = new CWSUnsignedInt(IntSize.SIZE_8);
exports.U16_T = new CWSUnsignedInt(IntSize.SIZE_16);
exports.U32_T = new CWSUnsignedInt(IntSize.SIZE_32);
exports.U64_T = new CWSUnsignedInt(IntSize.SIZE_64);
exports.U128_T = new CWSUnsignedInt(IntSize.SIZE_128);
exports.Err_UnwrapNone = new ErrorMsg('UnwrapNone', []);
exports.Err_Generic = new ErrorMsg('StringError', [
    new Param('message', exports.StringT),
]);
exports.Err_TypeError = new ErrorMsg('TypeError', [
    new Param('message', exports.StringT),
]);
exports.NoneT = CWSNone.TYPE;
exports.None = CWSNone.NONE;
exports.CoinT = new StructDefn('Coin', [
    new Param('denom', exports.StringT),
    new Param('amount', exports.IntT),
]);
exports.CoinList = new ListT(exports.CoinT);
exports.CtxEnvBlockInfoT = new StructDefn('BlockInfo', [
    new Param('height', exports.IntT),
    new Param('time', exports.IntT),
    new Param('chain_id', exports.StringT),
]);
exports.CtxEnvContractInfoT = new StructDefn('ContractInfo', [
    new Param('address', exports.AddressT),
]);
exports.CtxEnvT = new StructDefn('$env', [
    new Param('block', exports.CtxEnvBlockInfoT),
    new Param('contract', exports.CtxEnvContractInfoT),
]);
exports.CtxInfoT = new StructDefn('$info', [
    new Param('sender', exports.AddressT),
    new Param('funds', new ListT(exports.CoinT)),
]);
exports.CtxResT = new StructDefn('$res', [
    new Param('messages', new ListT(exports.AnyT)),
    new Param('events', new ListT(exports.AnyT)),
    new Param('data', new OptionT(exports.BinaryT)),
]);
exports.STDLIB = {
    None: exports.None,
    Int: exports.IntT,
    String: exports.StringT,
    Address: exports.AddressT,
    Bool: exports.BoolT,
    U8: exports.U8_T,
    U16: exports.U16_T,
    U32: exports.U32_T,
    U64: exports.U64_T,
    U128: exports.U128_T,
    Binary: exports.BinaryT,
    Error: exports.ErrorT,
};
//# sourceMappingURL=stdlib.js.map