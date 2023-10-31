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

import { Block } from "./block";
import { RenderConfig } from "./render";
import { Field } from "./types";


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
    | Block

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

    constructor(left: Expr, op: string, right: Expr) {
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
    public args: Expr[];

    constructor(expr: Expr, args: Expr[]) {
        this.expr = expr;
        this.args = args;
    }

    public render(config: RenderConfig): string {
        return `(${this.expr.render(config)}[${this.args.map(arg => arg.render(config)).join(', ')}])`;
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
    public name: string = '';
    public fields: Field<Expr>[] = [];

    constructor(name: string, ...fields: Field<Expr>[]) {
        this.name = name;
        this.fields = fields;
    }

    public render(config: RenderConfig): string {
        return `${this.name}{ ${this.fields.map(field => field.render(config)).join(', ')} }`
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
        return `if ${this.cond.render(config)} ${this.then.render(config.innerIndent())} else ${this.else.render(config.innerIndent())}`;
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

export type Pattern 
    = IdentPattern
    | StructPattern

export class IdentPattern {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public render(): string {
        return this.name;
    }
}

export class StructPattern {
    public name: string;
    public fields: string[];

    constructor(name: string, ...fields: string[]) {
        this.name = name;
        this.fields = fields;
    }

    public render(): string {
        // ignore undeclared field with rest pattern(..)
        return `${this.name}{ ${this.fields.join(', ')}, .. }`
    }
}

export class ForExpr {
    public binding: Pattern;
    public iter: Expr;
    public body: Block;

    constructor(binding: Pattern, iter: Expr, body: Block) {
        this.binding = binding;
        this.iter = iter;
        this.body = body;
    }

    public render(config: RenderConfig): string { 
        return `for ${this.binding.render()} in ${this.iter.render(config)} ${this.body.render(config.innerIndent())}`
    }
}

export class ReturnExpr {
    public expr: Expr;

    constructor(expr: Expr) {
        this.expr = expr;
    }

    public render(config: RenderConfig): string {
        return `return ${this.expr.render(config)}`;
    }
}