import { AssignStructure, BinaryStructure, BlockStructure, CallStructure, ExpressionStructure, ForStructure, FunctionStructure, IdentifierStructure, IfStructure, IndexStructure, LiteralStructure, MethodCallStructure, PairStructure, PatternStructure, ReturnStructure, StructStructure, TryStructure, TupleStructure, UnaryStructure } from "./ExpressionStructure";
import { StatementNode } from "./StatementNode";
import Handlebars from 'handlebars';
import { RenderHash } from "./Template";

export class BlockNode implements BlockStructure {
    constructor(
        public statements: StatementNode[]
    ) { }

    public static from(structure: BlockStructure): BlockNode {
        return new BlockNode(
            structure.statements.map(statement => StatementNode.from(statement)),
        )
    }

    public static readonly Template = Handlebars.compile(`{{#statements}}{{.}};{{/statements}}`)

    public renderHash(): RenderHash<BlockNode> {
        return {
            statements: this.statements.map(statement => statement.renderHash()),
        }
    }

    public render() {
        return BlockNode.Template(this.renderHash())
    }
}

export class FunctionNode implements FunctionStructure {
    constructor(
        public name: string,
        public args: PairNode<string>[],
        public returntype: string,
        public body: BlockNode,
    ) { }

    public static from(structure: FunctionStructure): FunctionNode {
        return new FunctionNode(
            structure.name,
            structure.args.map(arg => new PairNode(arg.key, arg.value)),
            structure.returntype,
            BlockNode.from(structure.body),
        )
    }

    public static readonly Template = Handlebars.compile(`pub fn {{name}}({{#args}}{{key}}: {{value}}{{#comma}}, {{/comma}}{{/args}}) -> {{returntype}} {
{{#body}}{{.}}{{/body}}}
`)

    public renderHash() {
        return {
            name: this.name,
            args: this.args, 
            returntype: this.returntype,
            body: this.body.renderHash(),
        }
    }

    public render() {
        return FunctionNode.Template(this.renderHash())
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
    public if_: IfNode | undefined;
    public assign: AssignNode | undefined;
    public return: ReturnNode | undefined;
    public for: ForNode | undefined;
    
    public static from(structure: ExpressionStructure): ExpressionNode {
        if (structure.literal) {
            return new ExpressionNode(LiteralNode.from(structure.literal))
        }

        if (structure.identifier) {
            return new ExpressionNode(IdentifierNode.from(structure.identifier))
        }

        if (structure.binary) {
            return new ExpressionNode(BinaryNode.from(structure.binary))
        }

        if (structure.unary) {
            return new ExpressionNode(UnaryNode.from(structure.unary))
        }

        if (structure.try) {
            return new ExpressionNode(TryNode.from(structure.try))
        }

        if (structure.index) {
            return new ExpressionNode(IndexNode.from(structure.index))
        }

        if (structure.tuple) {
            return new ExpressionNode(TupleNode.from(structure.tuple))
        }

        if (structure.struct) {
            return new ExpressionNode(StructNode.from(structure.struct))
        }

        if (structure.call) {
            return new ExpressionNode(CallNode.from(structure.call))
        }

        if (structure.methodCall) {
            return new ExpressionNode(MethodCallNode.from(structure.methodCall))
        }

        if (structure.block) {
            return new ExpressionNode(BlockNode.from(structure.block))
        }

        if (structure.if_) {
            return new ExpressionNode(IfNode.from(structure.if_))
        }

        if (structure.assign) {
            return new ExpressionNode(AssignNode.from(structure.assign))
        }

        if (structure.return) {
            return new ExpressionNode(ReturnNode.from(structure.return))
        }

        if (structure.for) {
            return new ExpressionNode(ForNode.from(structure.for))
        }

        throw new Error(`Unknown expression structure: ${structure}`)
    }
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
            this.if_ = expression;
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

    public static readonly Template = Handlebars.compile(
        `{{#literal}}{{> literal}}{{/literal}}{{#identifier}}{{> identifier}}{{/identifier}}{{#binary}}{{> binary}}{{/binary}}{{#unary}}{{> unary}}{{/unary}}{{#try}}{{> try}}{{/try}}{{#index}}{{> index}}{{/index}}{{#tuple}}{{> tuple}}{{/tuple}}{{#struct}}{{> struct}}{{/struct}}{{#call}}{{> call}}{{/call}}{{#methodCall}}{{> methodCall}}{{/methodCall}}{{#block}}{{> block}}{{/block}}{{#if_}}{{> if_}}{{/if_}}{{#assign}}{{> assign}}{{/assign}}{{#return}}{{> return}}{{/return}}{{#for}}{{> for}}{{/for}}`)

    public renderHash(): RenderHash<ExpressionNode> {
        return {
            literal: this.literal?.renderHash(),
            identifier: this.identifier?.renderHash(),
            binary: this.binary?.renderHash(),
            unary: this.unary?.renderHash(),
            try: this.try?.renderHash(),
            index: this.index?.renderHash(),
            tuple: this.tuple?.renderHash(),
            struct: this.struct?.renderHash(),
            call: this.call?.renderHash(),
            methodCall: this.methodCall?.renderHash(),
            block: this.block?.renderHash(),
            if_: this.if_?.renderHash(),
            assign: this.assign?.renderHash(),
            return: this.return?.renderHash(),
            for: this.for?.renderHash(),
        }
    }

    public render() {
        return ExpressionNode.Template(this.renderHash())
    }
}
    

export class LiteralNode implements LiteralStructure {
    constructor(
        public value: string,
    ) { }

    public static from(structure: LiteralStructure): LiteralNode {
        return new LiteralNode(structure.value)
    }

    public static readonly Template = Handlebars.compile(`{{{value}}}`);

    public renderHash(): RenderHash<LiteralNode> {
        return {
            value: this.value
        }
    }

    public render() {
        return LiteralNode.Template(this.renderHash())
    }
}

export class IdentifierNode implements IdentifierStructure {
    constructor(
        public name: string,
    ) { }

    public static from(structure: IdentifierStructure): IdentifierNode {
        return new IdentifierNode(structure.name)
    }

    public static readonly Template = Handlebars.compile(`{{{name}}}`);

    public renderHash(): RenderHash<IdentifierNode> {
        return {
            name: this.name,
        }
    }

    public render() {
        return IdentifierNode.Template(this.renderHash())
    }
}

export class BinaryNode implements BinaryStructure {
    constructor(
        public left: ExpressionNode,
        public op: string,
        public right: ExpressionNode,
    ) { }

    public static from(structure: BinaryStructure): BinaryNode {
        return new BinaryNode(
            ExpressionNode.from(structure.left),
            structure.op,
            ExpressionNode.from(structure.right),
        )
    }

    public static readonly Template = Handlebars.compile(`({{#left}}{{> expression}}{{/left}}{{{op}}}{{#right}}{{> expression}}{{/right}})`);

    public renderHash() {
        return {
            left: this.left.renderHash(),
            op: this.op,
            right: this.right.renderHash(),
        }
    }

    public render() {
        return BinaryNode.Template(this.renderHash())
    }
}

export class UnaryNode implements UnaryStructure {
    constructor(
        public op: string,
        public expr: ExpressionNode,
    ) { }

    public static from(structure: UnaryStructure): UnaryNode {
        return new UnaryNode(
            structure.op,
            ExpressionNode.from(structure.expr),
        )
    }

    public static Template = Handlebars.compile(`{{{op}}}{{#expr}}{{> expression}}{{/expr}}`);

    public renderHash() {
        return {
            op: this.op,
            expr: this.expr.renderHash(),
        }
    }

    public render() {
        return UnaryNode.Template(this.renderHash())
    }
}

export class TryNode implements TryStructure {
    constructor(
        public expr: ExpressionNode,
    ) { }

    public static from(structure: TryStructure): TryNode {
        return new TryNode(
            ExpressionNode.from(structure.expr),
        )
    }

    public static readonly Template = Handlebars.compile(`{{#expr}}{{> expression}}{{/expr}}?`)

    public renderHash() {
        return {
            expr: this.expr.renderHash(),
        }
    }

    public render() {
        return TryNode.Template(this.renderHash())
    }
}

export class IndexNode implements IndexStructure {
    constructor(
        public receiver: ExpressionNode,
        public arg: ExpressionNode,
    ) { }

    public static from(structure: IndexStructure): IndexNode {
        return new IndexNode(
            ExpressionNode.from(structure.receiver),
            ExpressionNode.from(structure.arg),
        )
    }

    public static readonly Template = Handlebars.compile(`{{#receiver}}{{> expression}}{{/receiver}}[{{#arg}}{{> expression}}{{/arg}}]`)

    public renderHash(): RenderHash<IndexNode> {
        return {
            receiver: this.receiver.renderHash(),
            arg: this.arg.renderHash(),
        }
    }

    public render() {
        return IndexNode.Template(this.renderHash())
    }
}

export class TupleNode implements TupleStructure {
    constructor(
        public values: ExpressionNode[],
    ) { }

    public static from(structure: TupleStructure): TupleNode {
        return new TupleNode(
            structure.values.map(value => ExpressionNode.from(value)),
        )
    }

    public static readonly Template = Handlebars.compile(`({{#values}}{{> expression}}{{#comma}},{{/comma}}{{/values}})`)

    public renderHash(): RenderHash<TupleNode> {
        const init = this.values.slice(0, this.values.length - 1).map(value => ({ ...value.renderHash(), comma: true }))
        const last = this.values[this.values.length - 1].renderHash()

        return {
            values: [...init, last],
        }
    
    }

    public render() {
        return TupleNode.Template(this.renderHash())
    }
}

export class StructNode implements StructStructure {
    constructor(
        public name: string,
        public fields: PairNode<ExpressionNode>[],
    ) { }

    public static from(structure: StructStructure): StructNode {
        return new StructNode(
            structure.name,
            structure.fields.map(field => new PairNode(field.key, ExpressionNode.from(field.value))),
        )
    }

    public static readonly Template = Handlebars.compile(`{{{name}}}{ {{#fields}}{{{key}}}:{{#value}}{{> expression}}{{/value}}{{#comma}},{{/comma}}{{/fields}} }`)

    public renderHash() {
        const init = this.fields.slice(0, this.fields.length - 1).map(({key, value}) => ({key, value: value.renderHash(), comma: true }))
        const lastpair = this.fields[this.fields.length - 1]
        const last = { key: lastpair.key, value: lastpair.value.renderHash() }

        return {
            name: this.name,
            fields: [...init, last],
        }
    }

    public render() {
        return StructNode.Template(this.renderHash())
    }
}

export class CallNode implements CallStructure {
    constructor(
        public callee: ExpressionNode,
        public args: ExpressionNode[],
    ) { }

    public static from(structure: CallStructure): CallNode {
        return new CallNode(
            ExpressionNode.from(structure.callee),
            structure.args.map(arg => ExpressionNode.from(arg)),
        )
    }

    public static readonly Template = Handlebars.compile(`({{#callee}}{{> expression}}{{/callee}})({{#args}}{{> expression}}{{#comma}},{{/comma}}{{/args}})`)

    public renderHash(): RenderHash<CallNode> {
        const init = this.args.slice(0, this.args.length - 1).map(arg => ({ ...arg.renderHash(), comma: true }))
        const last = this.args[this.args.length - 1].renderHash()

        return {
            callee: this.callee.renderHash(),
            args: [...init, last],
        }
    }

    public render() {
        return CallNode.Template(this.renderHash())
    }
}

export class MethodCallNode implements MethodCallStructure {
    constructor(
        public callee: ExpressionNode,
        public method: string,
        public args: ExpressionNode[],
    ) { }

    public static from(structure: MethodCallStructure): MethodCallNode {
        return new MethodCallNode(
            ExpressionNode.from(structure.callee),
            structure.method,
            structure.args.map(arg => ExpressionNode.from(arg)),
        )
    }

    public static readonly Template = Handlebars.compile(`({{#callee}}{{> expression}}{{/callee}}).{{{method}}}({{#args}}{{> expression}}{{#comma}},{{/comma}}{{/args}})`)

    public renderHash(): RenderHash<MethodCallNode> {
        const init = this.args.slice(0, this.args.length - 1).map(arg => ({ ...arg.renderHash(), comma: true }))
        const last = this.args[this.args.length - 1].renderHash()

        return {
            callee: this.callee.renderHash(),
            method: this.method,
            args: [...init, last],
        }
    }

    public render() {
        return MethodCallNode.Template(this.renderHash())
    }
}

export class IfNode implements IfStructure {
    constructor(
        public cond: ExpressionNode,
        public then: BlockNode,
        public else_: BlockNode | undefined,
    ) { }

    public static from(structure: IfStructure): IfNode {
        return new IfNode(
            ExpressionNode.from(structure.cond),
            BlockNode.from(structure.then),
            structure.else_ ? BlockNode.from(structure.else_) : undefined,
        )
    }

    public static readonly Template = Handlebars.compile(`if ({{cond}}) { {{then}} } {{#else_}} else { {{.}} } {{/else_}}`)

    public renderHash(): RenderHash<IfNode> {
        return {
            cond: this.cond.renderHash(),
            then: this.then.renderHash(),
            else_: this.else_?.renderHash(),
        }
    }

    public render() {
        return IfNode.Template(this.renderHash())
    }
}

export class AssignNode implements AssignStructure {
    constructor(
        public left: ExpressionNode,
        public op: string,
        public right: ExpressionNode,
    ) { }

    public static from(structure: AssignStructure): AssignNode {
        return new AssignNode(
            ExpressionNode.from(structure.left),
            structure.op,
            ExpressionNode.from(structure.right),
        )
    }

    public static Template = Handlebars.compile(`{{left}} {{op}} {{right}}`)

    public renderHash(): RenderHash<AssignNode> {
        return {
            left: this.left.renderHash(),
            op: this.op,
            right: this.right.renderHash(),
        }
    }

    public render() {
        return AssignNode.Template(this.renderHash())
    }
}

export class ReturnNode implements ReturnStructure {
    constructor(
        public expr: ExpressionNode | undefined,
    ) { }

    public static from(structure: ReturnStructure): ReturnNode {
        return new ReturnNode(
            structure.expr ? ExpressionNode.from(structure.expr) : undefined,
        )
    }

    public static readonly Template = Handlebars.compile(`return {{expr}}`)

    public renderHash(): RenderHash<ReturnNode> {
        return {
            expr: this.expr?.renderHash(),
        }
    }

    public render() {
        return ReturnNode.Template(this.renderHash())
    }
}

export class ForNode {
    constructor(
        public binding: PatternNode, 
        public iter: ExpressionNode,
        public body: BlockNode,
    ) { }

    public static from(structure: ForStructure): ForNode {
        return new ForNode(
            new PatternNode(
                structure.binding.identifier ? IdentifierNode.from(structure.binding.identifier) : undefined,
                structure.binding.tuple ? TupleNode.from(structure.binding.tuple) : undefined,
                structure.binding.struct ? StructNode.from(structure.binding.struct) : undefined,
            ),
            ExpressionNode.from(structure.iter),
            BlockNode.from(structure.body),
        )
    }

    public static readonly Template = Handlebars.compile(`for {{binding}} in {{iter}} {{body}}`)

    public renderHash(): RenderHash<ForNode> {
        return {
            binding: this.binding.renderHash(),
            iter: this.iter.renderHash(),
            body: this.body.renderHash(),
        }
    }

    public render() {
        return ForNode.Template(this.renderHash())
    }
}

export class PatternNode implements PatternStructure {
    constructor(
        public identifier: IdentifierNode | undefined,
        public tuple: TupleNode | undefined,
        public struct: StructNode | undefined,
    ) { }

    public static from(structure: PatternStructure): PatternNode {
        return new PatternNode(
            structure.identifier ? IdentifierNode.from(structure.identifier) : undefined,
            structure.tuple ? TupleNode.from(structure.tuple) : undefined,
            structure.struct ? StructNode.from(structure.struct) : undefined,
        )
    }

    public static readonly Template = Handlebars.compile(`
{{#identifier}}{{.}}{{/identifier}}
{{#tuple}}{{.}}{{/tuple}}
{{#struct}}{{.}}{{/struct}}
`)

    public renderHash(): RenderHash<PatternNode> {
        return {
            identifier: this.identifier?.renderHash(),
            tuple: this.tuple?.renderHash(),
            struct: this.struct?.renderHash(),
        }
    }

    public render() {
        return PatternNode.Template(this.renderHash())
    }
}

export class PairNode<T> implements PairStructure<T> {
    constructor(
        public key: string,
        public value: T,
    ) { }
}