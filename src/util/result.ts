import { Diagnostic } from 'vscode-languageserver';
import {
  Result,
  Ok,
  Err,
  Option,
  Some,
  None,
  ResultOkType,
  ResultErrType,
} from 'ts-results';

export type DgnsOk<T, E> = DgnsResult<T, E, Ok<T>>;
export type DgnsErr<T, E> = DgnsResult<T, E, Err<E>>;

export class CWSValidationError extends Error {
  constructor(public diagnostics: Diagnostic[]) {
    super();
  }
}

export class DgnsResult<T, E = any, R extends Result<T, E> = Result<T, E>> {
  constructor(public res: R, public diagnostics: Diagnostic[]) {}

  static Ok<T, E = any>(res: T, diagnostics: Diagnostic[]): DgnsOk<T, E> {
    return new DgnsResult(Ok(res), diagnostics) as DgnsOk<T, E>;
  }

  static Err<T, E = any>(err: E, diagnostics: Diagnostic[]): DgnsErr<T, E> {
    return new DgnsResult(Err(err), diagnostics) as DgnsErr<T, E>;
  }

  isOk(): this is DgnsOk<T, E> {
    return this.res.ok;
  }

  isErr(): this is DgnsErr<T, E> {
    return this.res.err;
  }

  map<U>(f: (t: T, d: Diagnostic[]) => U): DgnsResult<U, E> {
    if (this.isOk()) {
      let x = f(this.res.val, this.diagnostics);
      let d = x instanceof DgnsResult ? x.diagnostics : [];
      return DgnsResult.Ok<U, E>(x, [...this.diagnostics, ...d]);
    } else {
      return DgnsResult.Err<U, E>(this.res.val as E, this.diagnostics);
    }
  }

  mapErr<U>(f: (e: E, d: Diagnostic[]) => U): DgnsResult<T, U> {
    if (this.isErr()) {
      let x = f(this.res.val, this.diagnostics);
      let d = x instanceof DgnsResult ? x.diagnostics : [];
      return DgnsResult.Err<T, U>(f(this.res.val, this.diagnostics), [
        ...this.diagnostics,
        ...d,
      ]);
    } else {
      return DgnsResult.Ok<T, U>(this.res.val as T, this.diagnostics);
    }
  }

  public flatMap = this.andThen;

  andThen<U>(f: (r: T, d: Diagnostic[]) => DgnsResult<U>): DgnsResult<U, E> {
    if (this.isOk()) {
      let x = f(this.res.val, this.diagnostics);
      if (x instanceof DgnsResult) {
        return new DgnsResult(x.res, [...this.diagnostics, ...x.diagnostics]);
      }
    }
    return DgnsResult.Err<U, E>(this.res.val as E, this.diagnostics);
  }

  unwrap(): T {
    return this.res.unwrap();
  }

  static all<T, E = any>(results: DgnsResult<T, E>[]): DgnsResult<T[], E> {
    let res: T[] = [];
    let err: E;
    let diagnostics: Diagnostic[] = [];
    let hasErr = false;
    for (let result of results) {
      diagnostics = [...diagnostics, ...result.diagnostics];
      if (result.isOk() && !hasErr) {
        res.push(result.res.val);
      } else {
        if (!hasErr) {
          err = result.res.val as E;
        }
        hasErr = true;
      }
    }
    if (hasErr) {
      return DgnsResult.Err<T[], E>(err!, diagnostics);
    } else {
      return DgnsResult.Ok<T[], E>(res, diagnostics);
    }
  }

  static allOk<T, E>(results: DgnsOk<T, E>[]): DgnsOk<T[], E> {
    let res: T[] = [];
    let diagnostics: Diagnostic[] = [];
    for (let result of results) {
      res.push(result.res.val);
      diagnostics = [...diagnostics, ...result.diagnostics];
    }
    return DgnsResult.Ok<T[], E>(res, diagnostics);
  }

  static allErr<T, E>(results: DgnsErr<T, E>[]): DgnsErr<T[], E> {
    let diagnostics: Diagnostic[] = [];
    for (let result of results) {
      diagnostics = [...diagnostics, ...result.diagnostics];
    }
    return DgnsResult.Err<T[], E>(results[0].res.val as E, diagnostics);
  }

  catchErr<F>(
    errC: new (...args: any[]) => F,
    f: (e: F, d: Diagnostic[]) => DgnsResult<T, E>
  ): DgnsResult<T, E> {
    if (this.isErr() && this.res.val instanceof errC) {
      let x = f(this.res.val, this.diagnostics);
      let d = x instanceof DgnsResult ? x.diagnostics : [];
      return new DgnsResult(x.res, [...this.diagnostics, ...d]);
    } else {
      return new DgnsResult<T, E>(this.res, this.diagnostics);
    }
  }
}
