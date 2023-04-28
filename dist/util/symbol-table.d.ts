type SymbolEnv = {
    [key: string]: any;
};
export declare class SymbolTable {
    parent?: SymbolTable | undefined;
    symbols: SymbolEnv;
    constructor(symbols?: SymbolEnv, parent?: SymbolTable | undefined);
    getTrail(): SymbolTable[];
    getSymbol<T = any>(name: string): T;
    hasSymbol(name: string): boolean;
    getOwnSymbol<T = any>(name: string): T;
    setSymbol(name: string, value: any): void;
    subscope<T extends SymbolTable = SymbolTable>(x?: T): T;
}
export {};
