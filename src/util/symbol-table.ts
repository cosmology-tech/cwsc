type SymbolEnv = {
  [key: string]: any;
};
export class SymbolTable {
  public symbols: SymbolEnv;
  constructor(symbols?: SymbolEnv, public parent?: SymbolTable) {
    this.symbols = symbols ?? {};
  }

  getSymbol<T = any>(name: string): T {
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

  getOwnSymbol<T = any>(name: string): T {
    if (name in this.symbols) {
      return this.symbols[name];
    }

    if (name + '#!' in this.symbols) {
      return this.symbols[name + '#!'];
    }

    throw new Error(`symbol ${name} not found`);
  }

  setSymbol(name: string, value: any) {
    this.symbols[name] = value;
  }

  firstTableWithSymbol(name: string): SymbolTable | undefined {
    if (name in this.symbols) {
      return this;
    }

    if (this.parent) {
      return this.parent.firstTableWithSymbol(name);
    }

    return undefined;
  }

  hasSymbol(name: string): boolean {
    return this.firstTableWithSymbol(name) !== undefined;
  }

  hasOwnSymbol(name: string): boolean {
    return name in this.symbols;
  }

  subscope<T extends SymbolTable = SymbolTable>(x?: T): T {
    if (x === undefined) {
      let res = new SymbolTable();
      res.parent = this;
      return res as T;
    } else {
      x.parent = this;
      return x;
    }
  }
}
