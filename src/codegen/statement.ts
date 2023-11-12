import { Block } from "./block";
import { Expr } from "./expression";
import { RenderConfig } from "./render";

// Ref: https://doc.rust-lang.org/beta/nightly-rustc/rustc_ast/ast/enum.StmtKind.html

// CWS ast type => rust codegen type
// DebugStmt => ???
// LetStmt => LocalBinding(mut?)
// ConstStmt => LocalBinding
// AssignStmt => Expr(Assign)
// IfStmt => Expr(If)
// ForStmt => Expr(For)
// ExecStmt => Expr(Call)
// DelegateExecStmt => ???
// InstantiateStmt => Expr(Call)
// EmitStmt => Expr(Call)
// ReturnStmt => Expr(Return)
// FailStmt => Expr(Return)
export type Statement
    = LocalBinding
    | ExprStatement

export class LocalBinding {
    public name: string = '';
    public type: string = '';
    public mutable: boolean = false;
    public value: Expr;

    constructor(name: string, type: string, mutable: boolean, value: Expr) {
        this.name = name;
        this.type = type;
        this.mutable = mutable;
        this.value = value;
    }

    public render(config: RenderConfig): string {
        return `${config.indent}${this.mutable ? 'let mut ' : 'let '}${this.name}${this.type?`: ${this.type}`:''} = ${this.value.render(config)};`;
    }
}

export class ExprStatement {
    public value: Expr;

    constructor(value: Expr) {
        this.value = value;
    }

    public render(config: RenderConfig): string {
        return `${config.indent}${this.value.render(config)}`;
    }
}