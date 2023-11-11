import { ExpressionNode } from "./ExpressionNode";
import { LocalBindingStructure, StatementStructure } from "./StatementStructure";

export class StatementNode implements StatementStructure {
    public expression: ExpressionNode | undefined;
    public localBinding: LocalBindingNode | undefined;

    constructor(
        statement: ExpressionNode | LocalBindingNode,        
    ) { 
        if(statement instanceof ExpressionNode) {
            this.expression = statement;
        } 
        if (statement instanceof LocalBindingNode) {
            this.localBinding = statement;
        }

        throw new Error(`Unknown statement type: ${statement}`)
    }

    public static renderTemplate(): string {
return `
{{expression}}
{{localBinding}}
`
    }

    public renderHash() {
        return {
            expression: this.expression?.renderHash(),
            localBinding: this.localBinding?.renderHash(),
        }
    }
}

export class LocalBindingNode implements LocalBindingStructure {
    constructor(
        public name: string,
        public mutable: boolean,
        public type: string,
        public expr: ExpressionNode,
    ) { }

    public static renderTemplate(): string {
return `
let {{name}}{{mutable}}{{#type}}: {{.}}{{/type}} = {{expr}};
`
    }

    public renderHash() {
        return {
            name: this.name,
            mutable: this.mutable ? ' mut' : undefined,
            type: this.type,
            expr: this.expr.renderHash(),
        }
    }
}