export class SymbolTable {
	constructor(public symbols: any = {}, public parent?: SymbolTable) {
	}

	getSymbol<T = any>(name: string): T {
		if (name in this.symbols) {
			return this.symbols[name];
		}

		if (this.parent) {
			return this.parent.getSymbol(name);
		}

		throw new Error(`symbol ${name} not found`);
	}

	setSymbol(name: string, value: any) {
		this.symbols[name] = value;
	}

	subscope<T extends SymbolTable>(x: T): T {
		x.parent = this;
		return x;
	}
}
