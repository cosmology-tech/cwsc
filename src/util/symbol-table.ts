type SymbolEnv = {
  [key: string]: any;
};

export class SymbolTable {
  public symbols: SymbolEnv;

  constructor(symbols?: SymbolEnv, public parent?: SymbolTable) {
    this.symbols = symbols ?? {};
  }

  getTrail(): SymbolTable[] {
    let res: SymbolTable[] = [this];
    let cur = this.parent;
    while (cur) {
      res.push(cur);
      cur = cur.parent;
    }
    return res.reverse();
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

  hasSymbol(name: string): boolean {
    let res = name in this.symbols || name + '#!' in this.symbols;
    if (res) {
      return true;
    } else {
      return this.parent ? this.parent.hasSymbol(name) : false;
    }
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
