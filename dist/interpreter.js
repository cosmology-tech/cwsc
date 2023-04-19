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
exports.CWScriptInterpreterVisitor = exports.Return = exports.Failure = exports.CWScriptInterpreter = exports.STDLIB = exports.Generic = exports.UnwrapNone = exports.Address = exports.CWSString = exports.U128 = exports.U64 = exports.U32 = exports.U16 = exports.U8 = exports.None = exports.StructInstance = exports.ContractInstance = exports.Arg = exports.EnumVariantUnitDefn = exports.EnumVariantStructDefn = exports.EventMsg = exports.ErrorMsg = exports.QueryMsg = exports.ExecMsg = exports.InstantiateMsg = exports.EventType = exports.ErrorType = exports.QueryMsgType = exports.ExecMsgType = exports.InstantiateMsgType = exports.EnumDefn = exports.StructDefn = exports.FnDefn = exports.StateMap = exports.StateItem = exports.MapKey = exports.InterfaceDefn = exports.ContractDefn = exports.Bool = exports.CWSNone = exports.TupleInstance = exports.ListInstance = exports.IndexableValue = exports.IndexableIter = exports.ListT = exports.TupleT = exports.OptionT = exports.Param = exports.Value = exports.Type = void 0;
const AST = __importStar(require("./ast"));
const symbol_table_1 = require("./util/symbol-table");
class Type extends symbol_table_1.SymbolTable {
    constructor(name) {
        super({});
        this.name = name;
    }
    /**
     * Checks if this <: other, i.e. if this can be converted to
     * other without losing information.
     */
    isSubOf(other) {
        return this.isEq(other) || other.isSuperOf(this);
    }
    isSuperOf(other) {
        return this.isEq(other) || other.isSubOf(this);
    }
    isEq(other) {
        // make sure all properties match
        if (!(other instanceof this.constructor)) {
            return false;
        }
        else {
            for (let key in this) {
                if (this[key] !== other[key]) {
                    return false;
                }
            }
            return true;
        }
    }
    isCompatibleWith(other) {
        return this.isSubOf(other) || other.isSubOf(this);
    }
    value(data) {
        return new Value(this, data);
    }
    convertFrom(val) {
        throw new Error(`Method not implemented.`);
    }
    convertInto(into, val) {
        if (!this.canConvertInto(into)) {
            throw new Error(`cannot convert ${this.name} into ${into.name}`);
        }
        return into.convertFrom(val);
    }
    canConvertFrom(other) {
        if (this.getConvertFromTypes) {
            return this.getConvertFromTypes().includes(other);
        }
        else {
            return other.canConvertInto(this);
        }
    }
    canConvertInto(other) {
        return other.canConvertFrom(this);
    }
    [operator(AST.Op.EQ)](lhs, rhs) {
        // check if types are equal
        console.warn("default implementation of operator '==' used");
        if (lhs.ty.isEq(rhs.ty)) {
            return Bool.TRUE;
        }
        else {
            return Bool.FALSE;
        }
    }
    [operator(AST.Op.NEQ)](lhs, rhs) {
        // check if types are equal
        if (lhs.ty.isEq(rhs.ty)) {
            return Bool.FALSE;
        }
        else {
            return Bool.TRUE;
        }
    }
    callOperator(op, lhs, rhs) {
        // check if types are equal
        if (operator(op) in this) {
            let opFn = this[operator(op)];
            return opFn(lhs, rhs);
        }
        else {
            throw new Error(`operator ${op} not defined for type ${this.name}`);
        }
    }
}
exports.Type = Type;
class Value extends symbol_table_1.SymbolTable {
    constructor(ty, data) {
        super({});
        this.ty = ty;
        this.data = data;
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
    convertFrom(val) {
        throw new Error('Method not implemented.');
        if (checkC(OptionT, val)) {
            return this.value(val.data);
        }
        else if (check(CWSNone.TYPE, val)) {
            return this.value(null);
        }
        else {
            throw new Error(`cannot convert ${val.ty.name} into ${this.name}`);
        }
    }
    value(data) {
        // TODO: replace null with CWSNone
        if (data === null) {
            return new Value(this, null);
        }
        else {
            return new Value(this, this.inner.value(data));
        }
    }
    canConvertFrom(other) {
        if (other instanceof OptionT) {
            return this.inner.canConvertFrom(other.inner);
        }
        else if (other.isEq(CWSNone.TYPE)) {
            return true;
        }
        else {
            return super.canConvertFrom(other);
        }
    }
}
exports.OptionT = OptionT;
class TupleT extends Type {
    constructor(tys) {
        super(`[${tys.map((x) => x.name).join(', ')}]`);
        this.tys = tys;
    }
    convertFrom(val) {
        throw new Error('Method not implemented.');
    }
    value(data) {
        return new TupleInstance(this, data);
    }
}
exports.TupleT = TupleT;
class ListT extends Type {
    constructor(inner, size) {
        super(`${inner.name}${size ? `[${size}]` : '[]'}`);
        this.inner = inner;
        this.size = size;
    }
    convertFrom(val) {
        throw new Error('Method not implemented.');
    }
    isSubOf(other) {
        if (other instanceof ListT) {
            if (this.size !== undefined) {
                return this.size === other.size && this.inner.isSubOf(other.inner);
            }
            else {
                return this.inner.isSubOf(other.inner);
            }
        }
        else if (other instanceof TupleT) {
            if (this.size !== undefined) {
                return (this.size === other.tys.length &&
                    other.tys.every((x) => this.inner.isSubOf(x)));
            }
            else {
                return super.isSubOf(other);
            }
        }
        else {
            return super.isSubOf(other);
        }
    }
}
exports.ListT = ListT;
class IndexableIter {
    constructor(parent) {
        this.parent = parent;
        this.ix = 0;
    }
    next() {
        if (this.ix >= this.parent.getSize()) {
            return undefined;
        }
        return this.parent.getIndex([new Arg(Int.TYPE.value(this.ix++))]);
    }
}
exports.IndexableIter = IndexableIter;
class IndexableValue extends Value {
    constructor(ty, items) {
        super(ty, items);
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
        if (!check(Int.TYPE, arg.value)) {
            throw new Error(
            // @ts-ignore
            `list index must be an integer, got ${arg.value.ty.name}`);
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
        if (!check(Int.TYPE, arg.value)) {
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
        return new IndexableIter(this);
    }
}
exports.IndexableValue = IndexableValue;
class ListInstance extends IndexableValue {
    push(val) {
        this.items.push(val);
    }
}
exports.ListInstance = ListInstance;
class TupleInstance extends IndexableValue {
}
exports.TupleInstance = TupleInstance;
class CWSNone extends Type {
    constructor() {
        super('None');
        this.ty = CWSNone.TYPE;
    }
    value(data) {
        return new Value(this, null);
    }
    convertFrom(other) {
        if (!check(CWSNone.TYPE, other)) {
            // @ts-ignore
            throw new Error(`Cannot convert ${other.ty.name} to None`);
        }
        else {
            return new Value(this, null);
        }
    }
    getConvertFromTypes() {
        return [CWSNone.TYPE];
    }
    isSubOf(other) {
        return super.isSubOf(other) || other instanceof OptionT;
    }
}
exports.CWSNone = CWSNone;
CWSNone.TYPE = new CWSNone();
class Bool extends Type {
    constructor() {
        super('Bool');
    }
    static isTrue(val) {
        if (check(Bool.TYPE, val)) {
            return val.data;
        }
        else {
            // @ts-ignore
            throw new Error(`Cannot convert ${val.ty.name} to Bool`);
        }
    }
    static isFalse(val) {
        return !Bool.isTrue(val);
    }
    convertFrom(other) {
        throw new Error('Method not implemented.');
        if (check(Int.TYPE, other)) {
            return new Value(this, other.data !== BigInt(0));
        }
        else if (check(Bool.TYPE, other)) {
            return new Value(this, other.data);
        }
        else {
            throw new Error(`Cannot convert ${other.ty.name} to Bool`);
        }
    }
}
exports.Bool = Bool;
Bool.TYPE = new Bool();
Bool.TRUE = new Value(Bool.TYPE, true);
Bool.FALSE = new Value(Bool.TYPE, false);
//endregion <INODES:TYPES>
//region <INODES:DEFINITIONS>
class ContractDefn extends Type {
    constructor(name) {
        super(name);
        this.name = name;
    }
    convertFrom(other) {
        throw new Error('Method not implemented.');
    }
    instantiate(args) {
        this.getSymbol('#instantiate').call(args);
    }
    exec(fnName, args) {
        this.getSymbol('exec#' + fnName).call(args);
    }
    query(fnName, args) {
        return this.getSymbol('query#' + fnName).call(args);
    }
    value(address) {
        if (check(CWSString.TYPE, address)) {
            return new ContractInstance(this, address);
        }
        else {
            // @ts-ignore
            throw new Error(`Cannot convert ${address.ty.name} to ContractInstance`);
        }
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
    constructor(key, ty) {
        super();
        this.key = key;
        this.ty = ty;
    }
}
exports.StateItem = StateItem;
class StateMap extends symbol_table_1.SymbolTable {
    constructor(prefix, mapKeys, ty) {
        super();
        this.prefix = prefix;
        this.mapKeys = mapKeys;
        this.ty = ty;
    }
}
exports.StateMap = StateMap;
class FnDefn extends Type {
    // if name is %anonymous%, then this is a lambda defn
    constructor(name, fallible, params, retTy, body) {
        super(name);
        this.name = name;
        this.fallible = fallible;
        this.params = params;
        this.retTy = retTy;
        this.body = body;
    }
    convertFrom(val) {
        throw new Error('Method not implemented.');
    }
    setArgsInScope(scope, args) {
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
        if (args.length < this.params.filter((x) => x.default_ !== undefined).length) {
            throw new Error(`${this.name}: too few arguments`);
        }
        // see if there are any arguments that are not in the function signature
        let unknownArgs = args.filter((x) => {
            return !this.params.some((y) => y.name === x.name);
        });
        if (unknownArgs.length > 0) {
            throw new Error(`${this.name}: ${this.name}: called with unknown named arguments ${unknownArgs
                .map((x) => x.name)
                .join(', ')}`);
        }
        for (let p of this.params) {
            let arg = args.find((a) => p.name === a.name);
            if (arg === undefined) {
                if (p.default_ === undefined) {
                    throw new Error(`${this.name}: missing argument for required param ${p.name}`);
                }
                scope.setSymbol(p.name, p.default_);
            }
            else {
                if (p.ty ? check(p.ty, arg.value) : false) {
                    throw new Error(`${this.name}: invalid argument type for ${p.name} - expected ${p.ty.name}, got ${arg.value.ty.name}`);
                }
                scope.setSymbol(p.name, arg.value);
            }
        }
    }
}
exports.FnDefn = FnDefn;
class StructDefn extends Type {
    constructor(name, params) {
        super(name);
        this.name = name;
        this.params = params;
    }
    convertFrom(val) {
        throw new Error('Method not implemented.');
    }
    call(args) {
        // ensure positional arguments come before named arguments
        let firstNamedArgIx = args.findIndex((x) => x.name !== undefined);
        // check if any args after first named arg are positional
        let nextPosArg = args.findIndex((x, i) => x.name === undefined && i > firstNamedArgIx);
        if (firstNamedArgIx !== -1 && nextPosArg !== -1) {
            throw new Error(`${this.name}: positional arguments must come before named arguments`);
        }
        // see if there are enough arguments
        if (args.length < this.params.filter((x) => x.default_ !== undefined).length) {
            throw new Error(`${this.name}: too few arguments`);
        }
        let params = {};
        args.forEach((arg, i) => {
            if (arg.name === undefined) {
                if (i >= this.params.length) {
                    throw new Error(`${this.name}: too many positional arguments`);
                }
                params[this.params[i].name] = arg.value;
            }
            else {
                params[arg.name] = arg.value;
            }
        });
        return this.make(params);
    }
    make(args) {
        let instance = new StructInstance(this, undefined);
        for (let m of this.params) {
            let arg = args[m.name];
            if (arg === undefined) {
                if (m.default_ === undefined) {
                    throw new Error(`${this.name}: missing required member ${m.name}`);
                }
                instance.setSymbol(m.name, m.default_);
            }
            else {
                if (m.ty !== undefined && !arg.ty.isSubOf(m.ty)) {
                    throw new Error(`${this.name}: invalid type for member ${m.name} - expected ${m.ty.name}, got ${arg.ty.name}`);
                }
                instance.setSymbol(m.name, arg);
            }
        }
        return instance;
    }
}
exports.StructDefn = StructDefn;
class EnumDefn extends Type {
    constructor(name) {
        super(name);
        this.name = name;
    }
    convertFrom(val) {
        throw new Error('Method not implemented.');
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
        this.setSymbol(name, defn);
        return defn;
    }
    unitVariant(name) {
        const defn = new EnumVariantUnitDefn(this, name);
        console.log(defn);
        this.setSymbol(name, defn);
        return defn;
    }
}
exports.EnumDefn = EnumDefn;
exports.InstantiateMsgType = new Type('InstantiateMsg');
exports.ExecMsgType = new Type('ExecMsg');
exports.QueryMsgType = new Type('QueryMsg');
exports.ErrorType = new Type('Error');
exports.EventType = new Type('Event');
class InstantiateMsg extends StructDefn {
    isSubOf(other) {
        return other.isEq(exports.InstantiateMsgType) || super.isSubOf(other);
    }
}
exports.InstantiateMsg = InstantiateMsg;
class ExecMsg extends EnumDefn {
    isSubOf(other) {
        return other.isEq(exports.ExecMsgType) || super.isSubOf(other);
    }
}
exports.ExecMsg = ExecMsg;
class QueryMsg extends EnumDefn {
    isSubOf(other) {
        return other.isEq(exports.QueryMsgType) || super.isSubOf(other);
    }
}
exports.QueryMsg = QueryMsg;
class ErrorMsg extends EnumDefn {
    isSubOf(other) {
        return other.isEq(exports.ErrorType) || super.isSubOf(other);
    }
}
exports.ErrorMsg = ErrorMsg;
class EventMsg extends EnumDefn {
    isSubOf(other) {
        return other.isEq(exports.EventType) || super.isSubOf(other);
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
class ContractInstance extends Value {
    constructor(ty, address) {
        super(ty, null);
        this.ty = ty;
        this.address = address;
    }
}
exports.ContractInstance = ContractInstance;
class StructInstance extends Value {
}
exports.StructInstance = StructInstance;
//endregion <INODES:VALUES>
// region <STDLIB>
exports.None = new CWSNone();
var IntSize;
(function (IntSize) {
    IntSize[IntSize["SIZE_8"] = 8] = "SIZE_8";
    IntSize[IntSize["SIZE_16"] = 16] = "SIZE_16";
    IntSize[IntSize["SIZE_32"] = 32] = "SIZE_32";
    IntSize[IntSize["SIZE_64"] = 64] = "SIZE_64";
    IntSize[IntSize["SIZE_128"] = 128] = "SIZE_128";
})(IntSize || (IntSize = {}));
class UnsignedInt extends Type {
    constructor(size) {
        super('U' + size.toString());
    }
    isSubOf(other) {
        return other.isEq(Int.TYPE) || super.isSubOf(other);
    }
    convertFrom(val) {
        if (check(CWSString.TYPE, val)) {
            return this.value(BigInt(val.data));
        }
        throw new Error(`Cannot convert ${val.ty.name} to ${this.name}!`);
    }
}
exports.U8 = new UnsignedInt(IntSize.SIZE_8);
exports.U16 = new UnsignedInt(IntSize.SIZE_16);
exports.U32 = new UnsignedInt(IntSize.SIZE_32);
exports.U64 = new UnsignedInt(IntSize.SIZE_64);
exports.U128 = new UnsignedInt(IntSize.SIZE_128);
class Int extends Type {
    constructor() {
        super('Int');
    }
    // [operator(AST.Op.PLUS)](lhs_: Data<Int>, rhs_: Data) {
    //   let lhs = cast(this, lhs_);
    //   let rhs = this.cast(rhs_);
    //   return this.value(lhs.data + rhs.data);
    // }
    //
    // [operator(AST.Op.MINUS)](lhs_: Data<Int>, rhs_: Data) {
    //   let lhs = this.cast(lhs_);
    //   let rhs = this.cast(rhs_);
    //   return this.value(lhs.data - rhs.data);
    // }
    //
    // [operator(AST.Op.MUL)](lhs_: Data<Int>, rhs_: Data) {
    //   let lhs = this.cast(lhs_);
    //   let rhs = this.cast(rhs_);
    //   return this.value(lhs.data * rhs.data);
    // }
    //
    // [operator(AST.Op.DIV)](lhs_: Data<Int>, rhs_: Data) {
    //   let lhs = this.cast(lhs_);
    //   let rhs = this.cast(rhs_);
    //   try {
    //     this.value(BigInt(lhs.data / rhs.data));
    //   } catch (e) {
    //     throw new Error('Cannot divide by zero');
    //   }
    // }
    //
    // [operator(AST.Op.MOD)](lhs_: Data<Int>, rhs_: Data) {
    //   let lhs = this.cast(lhs_);
    //   let rhs = this.cast(rhs_);
    //   try {
    //     this.value(BigInt(lhs.data % rhs.data));
    //   } catch (e) {
    //     throw new Error('Cannot divide by zero');
    //   }
    // }
    //
    // [operator(AST.Op.EQ)](lhs_: Data<Int>, rhs_: Data) {
    //   let lhs = this.cast(lhs_);
    //   let rhs = this.cast(rhs_);
    //   return Bool.TYPE.value(lhs.data === rhs.data);
    // }
    convertFrom(other) {
        throw new Error('Method not implemented.');
        if (check(CWSString.TYPE, other)) {
            return this.value(BigInt(other.data));
        }
        else if (check(exports.U8, other) ||
            check(exports.U16, other) ||
            check(exports.U32, other) ||
            check(exports.U64, other) ||
            check(exports.U128, other)) {
            return this.value(BigInt(other.data));
        }
        else {
            throw new Error('Cannot convert from ' + other.ty.name);
        }
    }
    getConvertFromTypes() {
        return [CWSString.TYPE, exports.U8, exports.U16, exports.U32, exports.U64, exports.U128];
    }
    canConvertFrom(other) {
        return other.isEq(Int.TYPE) || other.isEq(exports.U8);
    }
}
Int.TYPE = new Int();
class CWSString extends Type {
    constructor() {
        super('String');
    }
    convertFrom(val) {
        if (check(Int.TYPE, val) || checkC(UnsignedInt, val)) {
            return this.value(val.data.toString());
        }
        // @ts-ignore
        throw new Error('Cannot convert from ' + val.ty.name);
    }
}
exports.CWSString = CWSString;
CWSString.TYPE = new CWSString();
class Address extends Type {
    constructor() {
        super('Address');
    }
    isSubOf(other) {
        return other.isEq(CWSString.TYPE) || super.isSubOf(other);
    }
}
exports.Address = Address;
Address.TYPE = new Address();
class Dec extends Type {
    constructor() {
        super('Dec');
    }
}
Dec.TYPE = new Dec();
class Binary extends Type {
    constructor() {
        super('Binary');
    }
}
Binary.TYPE = new Binary();
const CWSError = new ErrorMsg('Error');
exports.UnwrapNone = CWSError.unitVariant('UnwrapNone');
exports.Generic = CWSError.structVariant('Generic', [
    new Param('message', CWSString.TYPE),
]);
exports.STDLIB = {
    Address: Address.TYPE,
    Int: Int.TYPE,
    String: CWSString.TYPE,
    U8: exports.U8,
    U64: exports.U64,
    U128: exports.U128,
    Binary: Binary.TYPE,
    Error: CWSError,
};
//endregion <STDLIB>
//region <HELPER FUNCTIONS>
function check(ty, val) {
    if (ty === undefined) {
        return val instanceof Value;
    }
    else {
        return val instanceof Value && val.ty.isEq(ty);
    }
}
function checkC(tyc, val) {
    return val instanceof Value && val.ty instanceof tyc;
}
function arg(val, name) {
    return new Arg(val, name);
}
function index(ix) {
    return [new Arg(Int.TYPE.value(BigInt(ix)))];
}
function operator(op) {
    return ('#operator' + op);
}
class CWScriptInterpreter extends symbol_table_1.SymbolTable {
    constructor(ctx) {
        super({}, new symbol_table_1.SymbolTable(ctx.env));
        this.ctx = ctx;
        let visitor = new CWScriptInterpreterVisitor(this);
        Object.keys(this.ctx.files).forEach((filename) => {
            visitor.visit(this.ctx.files[filename]);
        });
    }
}
exports.CWScriptInterpreter = CWScriptInterpreter;
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
class CWScriptInterpreterVisitor extends AST.CWScriptASTVisitor {
    constructor(interpreter) {
        super();
        this.interpreter = interpreter;
        //endregion <TYPE EXPRESSIONS>
        //region <CONTRACT ITEMS>
        this.visitErrorDefn = (node) => this.visitStructDefn(node);
        this.visitEventDefn = (node) => this.visitStructDefn(node);
        this.scope = interpreter;
    }
    //region <PERVASIVES>
    visitSourceFile(node) {
        node.forEach((x) => this.visit(x));
    }
    visitParam(node) {
        return new Param(node.name.value, node.ty !== null ? this.visit(node.ty) : undefined, node.default_ !== null ? this.visit(node.default_) : undefined);
    }
    //endregion <PERVASIVES>
    //region <TOP-LEVEL STATEMENTS>
    visitInterfaceDefn(node) {
        let prevScope = this.scope;
        let name = node.name.value;
        let interfaceDefn = this.scope.subscope(new InterfaceDefn(name));
        this.scope = interfaceDefn;
        node.body.children.forEach((x) => {
            if (x instanceof AST.StructDefn) {
                interfaceDefn.setSymbol(x.name.value, this.visitStructDefn(x));
            }
            if (x instanceof AST.EnumDefn) {
                interfaceDefn.setSymbol(x.name.value, this.visitEnumDefn(x));
            }
            if (x instanceof AST.ErrorDefn) {
                interfaceDefn.setSymbol('error#' + x.name.value, this.visitErrorDefn(x));
            }
            if (x instanceof AST.EventDefn) {
                interfaceDefn.setSymbol('event#' + x.name.value, this.visitEventDefn(x));
            }
        });
        this.interpreter.setSymbol(name, interfaceDefn);
        this.scope = prevScope;
    }
    visitContractDefn(node) {
        let prevScope = this.scope;
        let name = node.name.value;
        let contractDefn = this.scope.subscope(new ContractDefn(name));
        this.scope = contractDefn;
        node.body.children.forEach((x) => {
            if (x instanceof AST.StructDefn) {
                contractDefn.setSymbol(x.name.value, this.visitStructDefn(x));
            }
            if (x instanceof AST.EnumDefn) {
                contractDefn.setSymbol(x.name.value, this.visitEnumDefn(x));
            }
            if (x instanceof AST.StateDefnBlock) {
                x.descendantsOfType(AST.StateDefnItem).forEach((itemDefn) => {
                    contractDefn.setSymbol('state#' + itemDefn.name.value, new StateItem(itemDefn.name.value, this.visit(itemDefn.ty)));
                });
                x.descendantsOfType(AST.StateDefnMap).forEach((mapDefn) => {
                    contractDefn.setSymbol('state#' + mapDefn.name.value, new StateMap(mapDefn.name.value, mapDefn.mapKeys.map((mk) => this.visitMapKeyDefn(mk)), this.visit(mapDefn.ty)));
                });
            }
            if (x instanceof AST.ErrorDefn) {
                contractDefn.setSymbol('error#' + x.name.value, this.visitErrorDefn(x));
            }
            if (x instanceof AST.EventDefn) {
                contractDefn.setSymbol('event#' + x.name.value, this.visitEventDefn(x));
            }
            if (x instanceof AST.InstantiateDefn) {
                let instantiateMsg = this.visitStructDefn(x);
                instantiateMsg.name = name + '.#instantiate';
                contractDefn.setSymbol('#instantiate', instantiateMsg);
                contractDefn.setSymbol('#instantiate#impl', this.visitInstantiateDefn(x));
            }
            if (x instanceof AST.ExecDefn) {
                let execMsg = this.visitStructDefn(x);
                execMsg.name = `exec ${name}.#${x.name.value}`;
                contractDefn.setSymbol('exec#' + x.name.value, execMsg);
                contractDefn.setSymbol('exec#' + x.name.value + '#impl', this.visitExecDefn(x));
            }
            if (x instanceof AST.QueryDefn) {
                let queryMsg = this.visitStructDefn(x);
                queryMsg.name = `query ${name}.#${x.name.value}`;
                contractDefn.setSymbol('query#' + x.name.value, queryMsg);
                contractDefn.setSymbol('query#' + x.name.value + '#impl', this.visitQueryDefn(x));
            }
        });
        this.scope = prevScope;
        this.interpreter.setSymbol(name, contractDefn);
    }
    //endregion <TOP-LEVEL STATEMENTS>
    //region <TYPE EXPRESSIONS>
    visitTypePath(node) {
        let segments = node.segments.map((x) => x.value);
        // start at the first segment, and keep going until we resolve the final segment
        let curr = this.scope.getSymbol(segments[0]);
        for (let i = 1; i < segments.length; i++) {
            let next = curr.getSymbol(segments[i]);
            if (!(next instanceof Type)) {
                throw new Error(`${segments[i]} is not a type`);
            }
            curr = next;
        }
        return curr;
    }
    visitOptionT(node) {
        let ty = this.visit(node.ty);
        return new OptionT(ty);
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
                throw new Error(`${name}: missing name for struct ${i}`);
            }
            if (!p.ty) {
                throw new Error(`${name}: missing type for member ${p.name.value}`);
            }
            let ty = this.visit(p.ty);
            let default_ = p.default_ ? this.visit(p.default_) : undefined;
            if (p.optional) {
                ty = new OptionT(ty);
                default_ = (_a = p.default_) !== null && _a !== void 0 ? _a : exports.None;
            }
            return new Param(p.name.value, ty, default_);
        });
        return new StructDefn(name, params);
    }
    visitEnumDefn(node) {
        let name = node.name.value;
        let enumDefn = new EnumDefn(name);
        node.variants.forEach((v, i) => {
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
        return new ListT(this.visit(node.ty), node.size ? node.size : undefined);
    }
    visitMapKeyDefn(node) {
        let ty = this.visit(node.ty);
        let name = node.name !== null ? node.name.value : undefined;
        return new MapKey(ty, name);
    }
    visitFnDefn(node) {
        let name = node.name.value;
        let params = node.params.map((p) => this.visitParam(p));
        let fallible = node.fallible;
        let retTy = node.retTy !== null ? this.visit(node.retTy) : undefined;
        return new FnDefn(name, fallible, params, retTy, node.body);
    }
    /**
     * This visits the function definition for the instantiate message.
     * @param node
     */
    visitInstantiateDefn(node) {
        let params = node.params.map((p) => this.visitParam(p));
        return new FnDefn('#instantiate', false, params, undefined, node.body);
    }
    visitExecDefn(node) {
        return {};
    }
    visitQueryDefn(node) {
        return {};
    }
    //endregion <CONTRACT ITEMS>
    //region <STATEMENTS>
    visitBlock(node) {
        return node.map((x) => this.visit(x));
    }
    visitLetStmt(node) {
        if (node.expr !== null) {
            let val = this.visit(node.expr);
            if (node.binding instanceof AST.IdentBinding) {
                this.scope.setSymbol(node.binding.name.value, val);
            }
            else if (node.binding instanceof AST.TupleBinding) {
                if (!(val.ty instanceof TupleT) && !(val.ty instanceof ListT)) {
                    throw new Error(`tried to unpack ${val} as tuple of ${node.binding.bindings.length} elements`);
                }
                node.binding.bindings.forEach((symbol, i) => {
                    let name = symbol.name.value;
                    this.scope.setSymbol(name, val.index(i));
                });
            }
            else {
                // struct binding
                if (!(val.ty instanceof StructDefn)) {
                    throw new Error(`tried to unpack ${val} as struct`);
                }
                node.binding.bindings.forEach((symbol, i) => {
                    let name = symbol.name.value;
                    this.scope.setSymbol(name, val.getSymbol(name));
                });
            }
        }
        else {
            throw new Error(`let statement without expression not yet implemented`);
        }
    }
    visitAssignStmt(node) {
        let rhs = this.visit(node.rhs);
        if (node.lhs instanceof AST.IdentLHS) {
            this.scope.setSymbol(node.lhs.symbol.value, rhs);
        }
        else if (node.lhs instanceof AST.DotLHS) {
            let obj = this.visit(node.lhs.obj);
            let member = node.lhs.member.value;
            let tbl = obj.firstTableWithSymbol(member);
            if (tbl === undefined) {
                throw new Error(`tried to assign to non-existent member ${member} of ${obj}`);
            }
            else {
                tbl.setSymbol(member, rhs);
            }
        }
        else {
            // index assignment
            let obj = this.visit(node.lhs.obj);
            if (!(obj.ty instanceof ListT) && !(obj.ty instanceof TupleT)) {
                throw new Error(`tried to index into non-indexable type ${obj.ty}`);
            }
            else {
                let args = node.lhs.args.map((x) => new Arg(this.visit(x)));
                obj.setIndex(args, rhs);
            }
        }
    }
    visitIfStmt(node) {
        let pred = this.visit(node.pred);
        if (check(Bool.TYPE, pred)) {
            if (Bool.isTrue(pred)) {
                return this.visit(node.then);
            }
            else {
                return node.else_ !== null ? this.visit(node.else_) : exports.None;
            }
        }
        else {
            // @ts-ignore
            throw new Error(`predicate must be a Bool, got ${pred.ty}`);
        }
    }
    visitForStmt(node) {
        let expr = this.visit(node.iter);
        // make sure it is iterable
        if (!(expr.ty instanceof ListT) && !(expr.ty instanceof TupleT)) {
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
        }
        else if (node.binding instanceof AST.TupleBinding) {
            for (let val = iter.next(); val !== undefined; val = iter.next()) {
                // make sure val is iterable
                if (!(val.ty instanceof TupleT) && !(val.ty instanceof ListT)) {
                    throw new Error(`tried to unpack ${val} as tuple of ${node.binding.bindings.length} elements`);
                }
                node.binding.bindings.forEach((symbol, i) => {
                    this.scope.setSymbol(symbol.name.value, val.getIndex(index(i)));
                });
                this.visit(node.body);
            }
        }
        else {
            for (let val = iter.next(); val !== undefined; val = iter.next()) {
                if (!(val.ty instanceof StructDefn)) {
                    throw new Error(`tried to unpack ${val} as struct`);
                }
                node.binding.bindings.forEach((symbol, i) => {
                    let name = symbol.name.value;
                    this.scope.setSymbol(name, val.getSymbol(name));
                });
                this.visit(node.body);
            }
        }
        this.scope = prevScope;
    }
    visitExecStmt(node) {
        let val = this.visit(node.expr);
        // check that val is an ExecMsg// @ts-ignore
        if (!val.ty.isSubOf(exports.ExecMsgType)) {
            throw new Error(`tried to execute non-executable type ${val.ty.name}`);
        }
        else {
            let res = this.scope.getSymbol('$res');
            let msgs = res.getSymbol('msgs');
            return msgs.push(val);
        }
    }
    visitDelegateExecStmt(node) {
        if (!(node.expr instanceof AST.FnCallExpr)) {
            throw new Error(`delegate_exec! statement must be function call`);
        }
        else if (!(node.expr.func instanceof AST.Ident)) {
            throw new Error(`delegate_exec! statement must directly call an exec #fn`);
        }
        else {
            let fn = this.scope.getSymbol('exec#' + node.expr.func.value + '#impl');
            let args = node.expr.args.map((x) => new Arg(this.visit(x)));
            return this.callFn(fn, args);
        }
    }
    visitInstantiateStmt(node) {
        if (node.new_) {
            if (!(node.expr instanceof AST.FnCallExpr)) {
                throw new Error(`instantiate!# statement must be function call`);
            }
            else if (!(node.expr.func instanceof AST.TypePath ||
                node.expr.func instanceof AST.Ident)) {
                throw new Error(`instantiate!# statement must directly use a contract name`);
            }
            else {
                let ty;
                if (node.expr.func instanceof AST.TypePath) {
                    ty = this.visit(node.expr.func);
                }
                else {
                    ty = this.scope.getSymbol(node.expr.func.value);
                }
                if (!(ty instanceof ContractDefn)) {
                    throw new Error(`tried to instantiate non-contract type ${ty}`);
                }
                else {
                    let fn = ty.getSymbol('#instantiate');
                    let args = node.expr.args.map((x) => new Arg(this.visit(x)));
                    let val = this.callFn(fn, args);
                    if (val.ty.isSubOf(exports.InstantiateMsgType)) {
                        let res = this.scope.getSymbol('$res');
                        let msgs = res.getSymbol('msgs');
                        msgs.push(val);
                    }
                    else {
                        throw new Error(`tried to instantiate non-InstantiateMsg type ${val.ty.name}`);
                    }
                }
            }
        }
        else {
            // not #new
            let val = this.visit(node.expr);
            if (val.ty.isSubOf(exports.InstantiateMsgType)) {
                let res = this.scope.getSymbol('$res');
                let msgs = res.getSymbol('msgs');
                msgs.push(val);
            }
            else {
                throw new Error(`tried to instantiate non-InstantiateMsg type ${val.ty.name}`);
            }
        }
    }
    visitReturnStmt(node) {
        let val = this.visit(node.expr);
        return new Return(val);
    }
    visitFailStmt(node) {
        let result = this.visit(node.expr);
        if (!check(exports.ErrorType, result) && !check(CWSString.TYPE, result)) {
            throw new Error(`tried to fail with value other than Error or String: ${result}`);
        }
        else {
            if (check(CWSString.TYPE, result)) {
                result = exports.Generic.make({ message: result });
            }
            return new Failure(result);
        }
    }
    //endregion <STATEMENTS>
    //region <EXPRESSIONS>
    visitArg(node) {
        const val = this.visit(node.expr);
        return new Arg(val, node.name !== null ? node.name.value : undefined);
    }
    visitDotExpr(node) {
        const obj = this.visit(node.obj);
        if (node.unwrap !== null) {
            obj.getSymbol(node.member.value);
        }
        else if (node.unwrap === AST.UnwrapOp.OR_NONE) {
            if (check(exports.None, obj)) {
                return exports.None;
            }
            else {
                return obj.getSymbol(node.member.value);
            }
        }
        else {
            if (check(exports.None, obj)) {
                // TODO: result types
                throw new Error(`tried to access member ${node.member.value} of None`);
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
        if (obj.ty instanceof ListT || obj.ty instanceof TupleT) {
            const args = node.args.map((x) => this.visitArg(x));
            return obj.getIndex(args);
        }
        else {
            throw new Error(`tried to index non-tuple/list: ${obj.ty}`);
        }
    }
    visitDColonExpr(node) {
        const obj = this.visit(node.obj);
        return obj.getSymbol(node.member.value);
    }
    callFn(fn, args) {
        // create a new scope for the function call
        const prevScope = this.scope;
        this.scope = this.scope.subscope(new symbol_table_1.SymbolTable());
        fn.setArgsInScope(this.scope, args);
        // evaluate the function body in the new scope
        const result = this.visit(fn.body);
        // reset scope
        this.scope = prevScope;
        return result;
    }
    visitFnCallExpr(node) {
        const func = this.visit(node.func);
        if (!(func instanceof FnDefn)) {
            throw new Error(`tried to call non-function ${func}`);
        }
        // evaluate the arguments in the present scope
        const args = node.args.map((x) => this.visitArg(x));
        return this.callFn(func, args);
    }
    executeBinOp(op, lhs, rhs) {
        return lhs.ty.callOperator(op, lhs, rhs);
    }
    visitBinOpExpr(node) {
        const lhs = this.visit(node.lhs);
        const rhs = this.visit(node.rhs);
        return this.executeBinOp(node.op, lhs, rhs);
    }
    visitIsExpr(node) {
        const lhs = this.visit(node.lhs);
        const rhs = this.visit(node.rhs);
        let result = check(rhs, lhs);
        return node.negative ? Bool.FALSE : Bool.TRUE;
    }
    visitNotExpr(node) {
        const expr = this.visit(node.expr);
        if (check(Bool.TYPE, expr)) {
            return Bool.isTrue(expr) ? Bool.FALSE : Bool.TRUE;
        }
        else if (check(exports.None, expr)) {
            return Bool.TRUE;
        }
        else {
            throw new Error(
            // @ts-ignore
            `tried to negate on expression other than Bool or None: ${expr.ty}`);
        }
    }
    visitNoneCheckExpr(node) {
        const expr = this.visit(node.expr);
        return check(exports.None, expr) ? Bool.TRUE : Bool.FALSE;
    }
    visitTryCatchElseExpr(node) {
        let prevScope = this.scope;
        this.scope = prevScope.subscope(new symbol_table_1.SymbolTable());
        const result = this.visit(node.body); // Val, ErrorInstance
        if (check(exports.ErrorType, result)) {
            for (let c of node.catch_.toArray()) {
                let ty = this.visit(c.ty);
                if (check(ty, result)) {
                    if (c.name !== null) {
                        this.scope.setSymbol(c.name.value, result);
                    }
                    return this.visit(c.body);
                }
            }
            if (node.else_ !== null) {
                return this.visit(node.else_);
            }
            else {
                return new Failure(result);
            }
        }
        else if (check(exports.None, result)) {
            if (node.else_ !== null) {
                return this.visit(node.else_);
            }
            else {
                return new Failure(exports.UnwrapNone.value(null));
            }
        }
        else {
            return result;
        }
    }
    visitFailExpr(node) {
        let result = this.visit(node.expr);
        if (!check(exports.ErrorType, result) && !check(CWSString.TYPE, result)) {
            throw new Error(`tried to fail with value other than Error or String: ${result}`);
        }
        else {
            if (check(CWSString.TYPE, result)) {
                result = exports.Generic.make({ message: result });
            }
            return new Failure(result);
        }
    }
    visitClosure(node) {
        let params = node.params.map((x) => this.visitParam(x));
        let retTy = node.retTy !== null ? this.visit(node.retTy) : undefined;
        return new FnDefn('%anonymous', node.fallible, params, retTy, node.body);
    }
    visitTupleExpr(node) {
        let exprs = node.exprs.map((x) => this.visit(x));
        let tupType = new TupleT(exprs.map((x) => x.ty));
        return new TupleInstance(tupType, exprs);
    }
    visitStructExpr(node) {
        if (node.ty === null) {
            let args = {};
            let ty = new StructDefn('%anonymous', node.args.map((m) => {
                let value;
                if (m.value === null) {
                    value = this.visit(m.name);
                }
                else {
                    value = this.visit(m.value);
                }
                args[m.name.value] = value;
                return new Param(m.name.value, value.ty);
            }));
            return ty.make(args);
        }
        else {
            let ty = this.visit(node.ty);
            if (ty instanceof StructDefn) {
                throw new Error(`tried to instantiate non-struct type: ${ty}`);
            }
            let args = {};
            for (let m of node.args.toArray()) {
                let value;
                if (m.value === null) {
                    value = this.visit(m.name);
                }
                else {
                    value = this.visit(m.value);
                }
                args[m.name.value] = value;
            }
            return ty.make(args);
        }
    }
    visitUnitVariantExpr(node) {
        let ty = this.visit(node.ty);
        return ty.value(null);
    }
    visitIdent(node) {
        return this.scope.getSymbol(node.value);
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
        return CWSString.TYPE.value(node.value);
    }
    visitIntLit(node) {
        return Int.TYPE.value(BigInt(node.value));
    }
    visitDecLit(node) {
        return Dec.TYPE.value(node.value);
    }
    visitBoolLit(node) {
        if (node.value === 'true') {
            return Bool.TRUE;
        }
        else {
            return Bool.FALSE;
        }
    }
    visitNoneLit(node) {
        return exports.None;
    }
}
exports.CWScriptInterpreterVisitor = CWScriptInterpreterVisitor;
//endregion <VISITOR>
//# sourceMappingURL=interpreter.js.map