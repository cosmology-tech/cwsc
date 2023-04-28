"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DgnsResult = exports.CWSValidationError = void 0;
const ts_results_1 = require("ts-results");
class CWSValidationError extends Error {
    constructor(diagnostics) {
        super();
        this.diagnostics = diagnostics;
    }
}
exports.CWSValidationError = CWSValidationError;
class DgnsResult {
    constructor(res, diagnostics) {
        this.res = res;
        this.diagnostics = diagnostics;
        this.flatMap = this.andThen;
    }
    static Ok(res, diagnostics) {
        return new DgnsResult((0, ts_results_1.Ok)(res), diagnostics);
    }
    static Err(err, diagnostics) {
        return new DgnsResult((0, ts_results_1.Err)(err), diagnostics);
    }
    isOk() {
        return this.res.ok;
    }
    isErr() {
        return this.res.err;
    }
    map(f) {
        if (this.isOk()) {
            let x = f(this.res.val, this.diagnostics);
            let d = x instanceof DgnsResult ? x.diagnostics : [];
            return DgnsResult.Ok(x, [...this.diagnostics, ...d]);
        }
        else {
            return DgnsResult.Err(this.res.val, this.diagnostics);
        }
    }
    mapErr(f) {
        if (this.isErr()) {
            let x = f(this.res.val, this.diagnostics);
            let d = x instanceof DgnsResult ? x.diagnostics : [];
            return DgnsResult.Err(f(this.res.val, this.diagnostics), [
                ...this.diagnostics,
                ...d,
            ]);
        }
        else {
            return DgnsResult.Ok(this.res.val, this.diagnostics);
        }
    }
    andThen(f) {
        if (this.isOk()) {
            let x = f(this.res.val, this.diagnostics);
            if (x instanceof DgnsResult) {
                return new DgnsResult(x.res, [...this.diagnostics, ...x.diagnostics]);
            }
        }
        return DgnsResult.Err(this.res.val, this.diagnostics);
    }
    unwrap() {
        return this.res.unwrap();
    }
    static all(results) {
        let res = [];
        let err;
        let diagnostics = [];
        let hasErr = false;
        for (let result of results) {
            diagnostics = [...diagnostics, ...result.diagnostics];
            if (result.isOk() && !hasErr) {
                res.push(result.res.val);
            }
            else {
                if (!hasErr) {
                    err = result.res.val;
                }
                hasErr = true;
            }
        }
        if (hasErr) {
            return DgnsResult.Err(err, diagnostics);
        }
        else {
            return DgnsResult.Ok(res, diagnostics);
        }
    }
    static allOk(results) {
        let res = [];
        let diagnostics = [];
        for (let result of results) {
            res.push(result.res.val);
            diagnostics = [...diagnostics, ...result.diagnostics];
        }
        return DgnsResult.Ok(res, diagnostics);
    }
    static allErr(results) {
        let diagnostics = [];
        for (let result of results) {
            diagnostics = [...diagnostics, ...result.diagnostics];
        }
        return DgnsResult.Err(results[0].res.val, diagnostics);
    }
    catchErr(errC, f) {
        if (this.isErr() && this.res.val instanceof errC) {
            let x = f(this.res.val, this.diagnostics);
            let d = x instanceof DgnsResult ? x.diagnostics : [];
            return new DgnsResult(x.res, [...this.diagnostics, ...d]);
        }
        else {
            return new DgnsResult(this.res, this.diagnostics);
        }
    }
}
exports.DgnsResult = DgnsResult;
//# sourceMappingURL=result.js.map