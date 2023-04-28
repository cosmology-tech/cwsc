"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolTable = void 0;
class SymbolTable {
    constructor(symbols, parent) {
        this.parent = parent;
        this.symbols = symbols !== null && symbols !== void 0 ? symbols : {};
    }
    getTrail() {
        let res = [this];
        let cur = this.parent;
        while (cur) {
            res.push(cur);
            cur = cur.parent;
        }
        return res.reverse();
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
    hasSymbol(name) {
        let res = name in this.symbols || name + '#!' in this.symbols;
        if (res) {
            return true;
        }
        else {
            return this.parent ? this.parent.hasSymbol(name) : false;
        }
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