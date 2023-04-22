type SymbolEnv = {
    [key: string]: any;
};
export declare class SymbolTable {
    parent?: SymbolTable | undefined;
    symbols: SymbolEnv;
    constructor(symbols?: SymbolEnv, parent?: SymbolTable | undefined);
    getSymbol<T = any>(name: string): T;
    getOwnSymbol<T = any>(name: string): T;
    setSymbol(name: string, value: any): void;
    firstTableWithSymbol(name: string): SymbolTable | undefined;
    hasSymbol(name: string): boolean;
    hasOwnSymbol(name: string): boolean;
    subscope<T extends SymbolTable = SymbolTable>(x?: T): T;
}
export {};
