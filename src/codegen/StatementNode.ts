import { ExpressionNode } from "./ExpressionNode";
import { LocalBindingStructure, StatementStructure } from "./StatementStructure";
import Handlebars from 'handlebars';
import { RenderHash } from "./Template";

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

    public static from(structure: StatementStructure) {
        if (structure.expression) {
            return new StatementNode(ExpressionNode.from(structure.expression))
        }

        if (structure.localBinding) {
            return new StatementNode(LocalBindingNode.from(structure.localBinding))
        }

        throw new Error(`Unknown statement type: ${structure}`)
    }

    public static readonly Template = Handlebars.compile(`{{expression}}{{localBinding}}`)

    public renderHash(): RenderHash<StatementNode> {
        return {
            expression: this.expression?.renderHash(),
            localBinding: this.localBinding?.renderHash(),
        }
    }

    public render() {
        return StatementNode.Template(this.renderHash())
    }
}

export class LocalBindingNode implements LocalBindingStructure {
    constructor(
        public name: string,
        public mutable: boolean,
        public type: string,
        public expr: ExpressionNode,
    ) { }

    public static from(structure: LocalBindingStructure) {
        return new LocalBindingNode(
            structure.name,
            structure.mutable,
            structure.type,
            ExpressionNode.from(structure.expr),
        )
    }

    public static readonly Template = Handlebars.compile(`let {{name}}{{mutable}}{{#type}}: {{.}}{{/type}} = {{expr}};`)

    public renderHash() {
        return {
            name: this.name,
            mutable: this.mutable ? ' mut' : undefined,
            type: this.type,
            expr: this.expr.renderHash(),
        }
    }

    public render() {
        return LocalBindingNode.Template(this.renderHash())
    }
}