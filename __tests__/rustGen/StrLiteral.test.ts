import { Val } from '../../src/rust';

describe("cws -> internal", () => {
    it("errors without the proper quotes", () => {
        expect(() => new Val.StrLiteral('abc')).toThrow();
        expect(() => new Val.StrLiteral('"abc')).toThrow();
        expect(() => new Val.StrLiteral('abc"')).toThrow();
        expect(() => new Val.StrLiteral('"ab"c"')).toThrow();
        expect(() => new Val.StrLiteral('"ab"""c"')).toThrow();
        expect(() => new Val.StrLiteral('"ab"""""""""c"')).toThrow();
    });

    it("escapes quotes correctly", () => {
        expect(new Val.StrLiteral('"abc"').value).toBe('abc');
        expect(new Val.StrLiteral('"ab""c"').value).toBe('ab\"c');
        expect(new Val.StrLiteral('"a""b""c"').value).toBe('a\"b\"c');
        expect(new Val.StrLiteral('"a""""""b""""""c"').value).toBe('a\"\"\"b\"\"\"c');
        expect(new Val.StrLiteral('"ab   c"').value).toBe('ab   c');
        expect(new Val.StrLiteral('"ab """"  ""  c"').value).toBe('ab ""  "  c');
    });
});

describe("internal -> rust", () => {
    expect(new Val.StrLiteral('"abc"').toRustString()).toBe('"abc"');
    expect(new Val.StrLiteral('"ab""c"').toRustString()).toBe('"ab\\"c"');
    expect(new Val.StrLiteral('"a""b""c"').toRustString()).toBe('"a\\"b\\"c"');
    expect(new Val.StrLiteral('"a""""""b""""""c"').toRustString()).toBe('"a\\"\\"\\"b\\"\\"\\"c"');
    expect(new Val.StrLiteral('"ab   c"').toRustString()).toBe('"ab   c"');
    expect(new Val.StrLiteral('"ab """"  ""  c"').toRustString()).toBe('"ab \\"\\"  \\"  c"');
    expect(new Val.StrLiteral('"a\\c"').toRustString()).toBe('"a\\\\c"');
});