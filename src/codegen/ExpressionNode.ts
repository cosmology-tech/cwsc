import { AssignStructure, BinaryStructure, BlockStructure, CallStructure, ExpressionStructure, ForStructure, FunctionStructure, IdentifierStructure, IfStructure, IndexStructure, LiteralStructure, MethodCallStructure, PairStructure, ReturnStructure, StructStructure, TryStructure, TupleStructure, UnaryStructure } from "./ExpressionStructure";
import { StatementNode } from "./StatementNode";

export class BlockNode implements BlockStructure {
    constructor(
        public statements: StatementNode[]
    ) { }

    public static renderTemplate(): string {
return `{{#statements}}{{.}};{{/statements}}`
    }

    public renderHash() {
        return {
            statements: this.statements.map(statement => statement.renderHash()),
        }
    
    }
}

export class FunctionNode implements FunctionStructure {
    constructor(
        public name: string,
        public args: PairNode<string>[],
        public returntype: string,
        public body: BlockNode,
    ) { }

    public static renderTemplate(): string {
return `pub fn {{name}}({{#args}}{{key}}: {{value}}{{#comma}}, {{/comma}}{{/args}}) -> {{returntype}} {
    {{#body}}{{.}}{{/body}}}   
}`
    }

    public renderHash() {
        return {
            name: this.name,
            args: this.args, 
            returntype: this.returntype,
            body: this.body.renderHash(),
        }
    
    }
}

export class ExpressionNode implements ExpressionStructure {
    public literal: LiteralNode| undefined;
    public identifier: IdentifierNode | undefined;
    public binary: BinaryNode | undefined;
    public unary: UnaryNode | undefined;
    public try: TryNode | undefined;
    public index: IndexNode | undefined;
    public tuple: TupleNode | undefined;
    public struct: StructNode | undefined;
    public call: CallNode | undefined;
    public methodCall: MethodCallNode | undefined;
    public block: BlockNode | undefined;
    public if: IfNode | undefined;
    public assign: AssignNode | undefined;
    public return: ReturnNode | undefined;
    public for: ForNode | undefined;
    

    constructor(
        expression: 
            | LiteralNode
            | IdentifierNode
            | BinaryNode
            | UnaryNode
            | TryNode
            | IndexNode
            | TupleNode
            | StructNode
            | CallNode
            | MethodCallNode
            | BlockNode
            | IfNode
            | AssignNode
            | ReturnNode
            | ForNode,
    ) { 
        if (expression instanceof LiteralNode) {
            this.literal = expression;
            return
        }

        if (expression instanceof IdentifierNode) {
            this.identifier = expression;
            return
        }

        if (expression instanceof BinaryNode) {
            this.binary = expression;
            return
        }

        if (expression instanceof UnaryNode) {
            this.unary = expression;
            return
        }

        if (expression instanceof TryNode) {
            this.try = expression;
            return
        }

        if (expression instanceof IndexNode) {
            this.index = expression;
            return
        }

        if (expression instanceof TupleNode) {
            this.tuple = expression;
            return
        }

        if (expression instanceof StructNode) {
            this.struct = expression;
            return
        }

        if (expression instanceof CallNode) {
            this.call = expression;
            return
        }

        if (expression instanceof MethodCallNode) {
            this.methodCall = expression;
            return
        }

        if (expression instanceof BlockNode) {
            this.block = expression;
            return
        }

        if (expression instanceof IfNode) {
            this.if = expression;
            return
        }

        if (expression instanceof AssignNode) {
            this.assign = expression;
            return
        }

        if (expression instanceof ReturnNode) {
            this.return = expression;
            return
        }

        if (expression instanceof ForNode) {
            this.for = expression;
            return
        }

        throw new Error(`Unknown expression type: ${expression}`)

    }

    public static renderTemplate(): string {
return `{{#literal}}${LiteralNode.renderTemplate}{{/literal}}
{{#identifier}}${IdentifierNode.renderTemplate}{{/identifier}}
{{#binary}}${BinaryNode.renderTemplate}{{/binary}
{{#unary}}${UnaryNode.renderTemplate}{{/unary}
{{#try}}${TryNode.renderTemplate}{{/try}
{{#index}}${IndexNode.renderTemplate}{{/index}
{{#tuple}}${TupleNode.renderTemplate}{{/tuple}
{{#struct}}${StructNode.renderTemplate}{{/struct}
{{#call}}${CallNode.renderTemplate}{{/call}
{{#methodCall}}${MethodCallNode.renderTemplate}{{/methodCall}
{{#block}}${BlockNode.renderTemplate}{{/block}
{{#if}}${IfNode.renderTemplate}{{/if}
{{#assign}}${AssignNode.renderTemplate}{{/assign}
{{#return}}${ReturnNode.renderTemplate}{{/return}
{{#for}}${ForNode.renderTemplate}{{/for}
`
    }

    public renderHash() {
        return {
            literal: this.literal?.renderHash,
            identifier: this.identifier?.renderHash,
            binary: this.binary?.renderHash,
            unary: this.unary?.renderHash,
            try: this.try?.renderHash,
            index: this.index?.renderHash,
            tuple: this.tuple?.renderHash,
            struct: this.struct?.renderHash,
            call: this.call?.renderHash,
            methodCall: this.methodCall?.renderHash,
            block: this.block?.renderHash,
            if: this.if?.renderHash,
            assign: this.assign?.renderHash,
            return: this.return?.renderHash,
            for: this.for?.renderHash,
        }
    }
}
    

export class LiteralNode implements LiteralStructure {
    constructor(
        public value: string,
    ) { }

    public static renderTemplate(): string {
return `{{value}}`        
    }

    public renderHash() {
        return {
            value: this.value
        }
    
    }
}

export class IdentifierNode implements IdentifierStructure {
    constructor(
        public name: string,
    ) { }

    public static renderTemplate(): string {
return `{{name}}`
    }

    public renderHash() {
        return {
            name: this.name,
        }
    
    }
}

export class BinaryNode implements BinaryStructure {
    constructor(
        public left: ExpressionNode,
        public op: string,
        public right: ExpressionNode,
    ) { }

    public static renderTemplate(): string {
return `({{left}}{{op}}{{right}})`
    }

    public renderHash() {
        return {
            left: this.left.renderHash,
            op: this.op,
            right: this.right.renderHash,
        }
    
    }
}

export class UnaryNode implements UnaryStructure {
    constructor(
        public op: string,
        public expr: ExpressionNode,
    ) { }

    public static renderTemplate(): string {
return `{{op}}{{expr}}`
    }

    public renderHash() {
        return {
            op: this.op,
            expr: this.expr.renderHash(),
        }
    
    }
}

export class TryNode implements TryStructure {
    constructor(
        public expr: ExpressionNode,
    ) { }

    public static renderTemplate(): string {
return `{{expr}}?`
    }

    public renderHash() {
        return {
            expr: this.expr.renderHash(),
        }
    }
}

export class IndexNode implements IndexStructure {
    constructor(
        public expr: ExpressionNode,
        public args: ExpressionNode[],
    ) { }

    public static renderTemplate(): string {
return `{{expr}}[{{#args}}{{.}}{{#comma}},{{/comma}}{{/args}}]`
    }

    public renderHash() {
        return {
            expr: this.expr.renderHash(),
            args: this.args.map(arg => arg.renderHash()),
        }
    
    }
}

export class TupleNode implements TupleStructure {
    constructor(
        public values: ExpressionNode[],
    ) { }

    public static renderTemplate(): string {
return `({{#values}}{{.}}{{#comma}},{{/comma}}{{/values}})`
    }

    public renderHash() {
        return {
            values: this.values.map(value => value.renderHash()),
        }
    
    }
}

export class StructNode implements StructStructure {
    constructor(
        public name: string,
        public fields: PairNode<ExpressionNode>[],
    ) { }

    public static renderTemplate(): string {
return `{{name}}{{#fields}}{${PairNode.renderTemplate}}{{/fields}}`
    }

    public renderHash() {
        return {
            name: this.name,
            fields: () => this.fields.map(field => field.renderHash()),
        }
    }
}

export class CallNode implements CallStructure {
    constructor(
        public callee: ExpressionNode,
        public args: ExpressionNode[],
    ) { }

    public static renderTemplate(): string {
return `{{callee}}({{#args}}{{.}}{{#comma}},{{/comma}}{{/args}})`
    }

    public renderHash() {
        return {
            callee: this.callee.renderHash(),
            args: this.args.map(arg => arg.renderHash()),
        }
    }
}

export class MethodCallNode implements MethodCallStructure {
    constructor(
        public callee: ExpressionNode,
        public method: string,
        public args: ExpressionNode[],
    ) { }

    public static renderTemplate(): string {
return `{{callee}}.{{method}}({{#args}}{{.}}{{#comma}},{{/comma}}{{/args}})`
    }

    public renderHash() {
        return {
            callee: this.callee.renderHash(),
            method: this.method,
            args: this.args.map(arg => arg.renderHash()),
        }
    
    }
}

export class IfNode implements IfStructure {
    constructor(
        public cond: ExpressionNode,
        public then: BlockNode,
        public else_: BlockNode | undefined,
    ) { }

    public static renderTemplate(): string {
return `if ({{cond}}) { {{then}} } {{#else}} else { {{.}} } {{/else}}`
    }

    public renderHash() {
        return {
            cond: this.cond.renderHash(),
            then: this.then.renderHash(),
            else_: this.else_?.renderHash(),
        }
    
    }
}

export class AssignNode implements AssignStructure {
    constructor(
        public left: ExpressionNode,
        public op: string,
        public right: ExpressionNode,
    ) { }

    public static renderTemplate(): string {
return `{{left}} {{op}} {{right}}`
    }

    public renderHash() {
        return {
            left: this.left.renderHash(),
            op: this.op,
            right: this.right.renderHash(),
        }
    }
}

export class ReturnNode implements ReturnStructure {
    constructor(
        public expr: ExpressionNode | undefined,
    ) { }

    public static renderTemplate(): string {
return `return {{expr}}`
    }

    public renderHash() {
        return {
            expr: this.expr?.renderHash(),
        }
    }
}

export class ForNode {
    constructor(
        public binding: PatternNode, 
        public iter: ExpressionNode,
        public body: BlockNode,
    ) { }

    public static renderTemplate(): string {
return `for {{binding}} in {{iter}} {{body}}`
    }

    public renderHash() {
        return {
            binding: this.binding.renderHash(),
            iter: this.iter.renderHash(),
            body: this.body.renderHash(),
        }
    }
}

export class PatternNode {
    constructor(
        public identifier: IdentifierNode | undefined,
        public tuple: TupleNode | undefined,
        public struct: StructNode | undefined,
    ) { }

    public static renderTemplate(): string {
return `
{{#identifier}}{{.}}{{/identifier}}
{{#tuple}}{{.}}{{/tuple}}
{{#struct}}{{.}}{{/struct}}
`
    }

    public renderHash() {
        return {
            identifier: this.identifier?.renderHash(),
            tuple: this.tuple?.renderHash(),
            struct: this.struct?.renderHash(),
        }
    }
}

export class PairNode<T> implements PairStructure<T> {
    constructor(
        public key: string,
        public value: T,
    ) { }

    public static renderTemplate(): string {
return `{{key}}: {{value}},`
    }

    public renderHash() {
        return {
            key: this.key,
            value: this.value,
        }
    }
}