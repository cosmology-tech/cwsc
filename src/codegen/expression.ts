// CWS ast type => rust codegen type
// DotExpr => MethodCall
// IndexExpr => Index
// FnCallExpr => Call
// ShortTryExpr => Try(? operator)
// TryCatchElseExpr => if
// NoneCheckExpr => if
// NotExpr => Unary
// QueryExpr => Call
// FailExpr => Call
// IdentExpr => Ident
// TupleExpr => Tuple
// LiteralExpr => Literal
// BinOpExpr => Binary

import { RenderConfig } from "./render";


export type Expr 
    = EndValueExpr // Literals, Idents, etc.
    | BinaryExpr
    | UnaryExpr
    | TryExpr
    | IndexExpr
    | TupleExpr
    | StructExpr
    | MethodCallExpr
    // Statement-like expressions
    | IfExpr
    | AssignExpr
    | ForExpr
    | ReturnExpr

export class EndValueExpr {
    public value: string = '';

    constructor(value: string) {
        this.value = value;
    }

    public render(config: RenderConfig): string {
        return this.value;
    }
}

export class BinaryExpr {
    public op: string = '';
    public left: Expr;
    public right: Expr;

    constructor(op: string, left: Expr, right: Expr) {
        this.op = op;
        this.left = left;
        this.right = right;
    }

    public render(config: RenderConfig): string {
        return `(${this.left.render(config)} ${this.op} ${this.right.render(config)})`;
    }
}

export class UnaryExpr {
    public op: string = '';
    public expr: Expr;

    constructor(op: string, expr: Expr) {
        this.op = op;
        this.expr = expr;
    }

    public render(config: RenderConfig): string {
        return `(${this.op}${this.expr.render(config)})`;
    }
}

export class TryExpr {
    public expr: Expr;

    constructor(expr: Expr) {
        this.expr = expr;
    }

    public render(config: RenderConfig): string {
        return `(${this.expr.render(config)}?)`;
    }
}

export class IndexExpr {
    public expr: Expr;

    constructor(expr: Expr) {
        this.expr = expr;
    }

    public render(config: RenderConfig): string {
        return `unimplemented: Index`;
    }
}

export class TupleExpr {
    public values: Expr[] = [];

    constructor(...values: Expr[]) {
        this.values = values;
    }

    public render(config: RenderConfig): string {
        return `(${this.values.map(value => value.render(config)).join(', ')})`;
    }
}

export class StructExpr {
    public render(): string {
        return `unimplemented: Struct`;
    }
}

export class MethodCallExpr {
    public callee: string = ''; // path + receiver
    public args: Expr[] = [];

    constructor(callee: string, ...args: Expr[]) {
        this.callee = callee;
        this.args = args;
    }

    public render(config: RenderConfig): string {
        return `${this.callee}(${this.args.map(arg => arg.render(config)).join(', ')})`;
    }
}

export class IfExpr {
    public cond: Expr;
    public then: Expr;
    public else: Expr;

    constructor(cond: Expr, then: Expr, else_: Expr) {
        this.cond = cond;
        this.then = then;
        this.else = else_;
    }

    public render(config: RenderConfig): string {
        return `
${config.indent}if ${this.cond.render(config)} {
${this.then.render(config.innerIndent())}
${config.indent}} else {
${this.else.render(config.innerIndent())}
${config.indent}}
`;
    }
}

export class AssignExpr {
    public left: Expr;
    public assignop: string = '';
    public right: Expr;

    constructor(left: Expr, assignop: string, right: Expr) {
        this.left = left;
        this.right = right;
        this.assignop = assignop;
    }

    public render(config: RenderConfig): string {
        return `${this.left.render(config)} ${this.assignop} ${this.right.render(config)}`;
    }
}

export class ForExpr {
    public render(): string {
        return `unimplemented: For`;
    }
}

export class ReturnExpr {
    public expr: Expr;

    constructor(expr: Expr) {
        this.expr = expr;
    }

    public render(config: RenderConfig): string {
        return `${config.indent}return ${this.expr.render(config)}`;
    }
}