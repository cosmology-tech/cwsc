import { Diagnostic } from 'vscode-languageserver';
import { Result, Ok, Err } from 'ts-results';
export type DgnsOk<T, E> = DgnsResult<T, E, Ok<T>>;
export type DgnsErr<T, E> = DgnsResult<T, E, Err<E>>;
export declare class CWSValidationError extends Error {
    diagnostics: Diagnostic[];
    constructor(diagnostics: Diagnostic[]);
}
export declare class DgnsResult<T, E = any, R extends Result<T, E> = Result<T, E>> {
    res: R;
    diagnostics: Diagnostic[];
    constructor(res: R, diagnostics: Diagnostic[]);
    static Ok<T, E = any>(res: T, diagnostics: Diagnostic[]): DgnsOk<T, E>;
    static Err<T, E = any>(err: E, diagnostics: Diagnostic[]): DgnsErr<T, E>;
    isOk(): this is DgnsOk<T, E>;
    isErr(): this is DgnsErr<T, E>;
    map<U>(f: (t: T, d: Diagnostic[]) => U): DgnsResult<U, E>;
    mapErr<U>(f: (e: E, d: Diagnostic[]) => U): DgnsResult<T, U>;
    flatMap: <U>(f: (r: T, d: Diagnostic[]) => DgnsResult<U, any, Result<U, any>>) => DgnsResult<U, E, Result<U, E>>;
    andThen<U>(f: (r: T, d: Diagnostic[]) => DgnsResult<U>): DgnsResult<U, E>;
    unwrap(): T;
    static all<T, E = any>(results: DgnsResult<T, E>[]): DgnsResult<T[], E>;
    static allOk<T, E>(results: DgnsOk<T, E>[]): DgnsOk<T[], E>;
    static allErr<T, E>(results: DgnsErr<T, E>[]): DgnsErr<T[], E>;
    catchErr<F>(errC: new (...args: any[]) => F, f: (e: F, d: Diagnostic[]) => DgnsResult<T, E>): DgnsResult<T, E>;
}
