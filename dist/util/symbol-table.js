"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolTable = void 0;
class SymbolTable {
    constructor(symbols, parent) {
        this.parent = parent;
        this.symbols = symbols !== null && symbols !== void 0 ? symbols : {};
    }
    getSymbol(name) {
        if (name in this.symbols) {
            return this.symbols[name];
        }
        if (name + '#!' in this.symbols) {
            return this.symbols[name + '#!'];
        }
        if (this.parent) {
            return this.parent.getSymbol(name);
        }
        throw new Error(`symbol ${name} not found`);
    }
    getOwnSymbol(name) {
        if (name in this.symbols) {
            return this.symbols[name];
        }
        if (name + '#!' in this.symbols) {
            return this.symbols[name + '#!'];
        }
        throw new Error(`symbol ${name} not found`);
    }
    setSymbol(name, value) {
        this.symbols[name] = value;
    }
    firstTableWithSymbol(name) {
        if (name in this.symbols) {
            return this;
        }
        if (this.parent) {
            return this.parent.firstTableWithSymbol(name);
        }
        return undefined;
    }
    hasSymbol(name) {
        return this.firstTableWithSymbol(name) !== undefined;
    }
    hasOwnSymbol(name) {
        return name in this.symbols;
    }
    subscope(x) {
        if (x === undefined) {
            let res = new SymbolTable();
            res.parent = this;
            return res;
        }
        else {
            x.parent = this;
            return x;
        }
    }
}
exports.SymbolTable = SymbolTable;
//# sourceMappingURL=symbol-table.js.map