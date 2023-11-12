import { AssignNode, BinaryNode, BlockNode, CallNode, ExpressionNode, ForNode, IdentifierNode, IfNode, IndexNode, LiteralNode, MethodCallNode, PairNode, ReturnNode, StructNode, TryNode, TupleNode, UnaryNode } from "./ExpressionNode"
import Handlebars from "handlebars";

export type RenderHash<Node> = {
    [P in keyof Node]?: 
        Node[P] extends { renderHash(): infer R } ? R :
        Node[P] extends { renderHash(): infer R } | undefined ? R | undefined : 
        Node[P] extends Array<{ renderHash(): infer R }> ? R[] :
        Node[P] extends string ? string :
        Node[P] extends PairNode<infer V> ? { key: string, value: RenderHash<V> } :
        Node[P] extends Array<PairNode<infer V>> ? { key: string, value: RenderHash<V> }[] :
        undefined
}

export function prepareHandlebar() {
    Handlebars.registerPartial('expression', ExpressionNode.Template)
    Handlebars.registerPartial('literal', LiteralNode.Template)
    Handlebars.registerPartial('identifier', IdentifierNode.Template)
    Handlebars.registerPartial('binary', BinaryNode.Template)
    Handlebars.registerPartial('unary', UnaryNode.Template)
    Handlebars.registerPartial('try', TryNode.Template)
    Handlebars.registerPartial('index', IndexNode.Template)
    Handlebars.registerPartial('tuple', TupleNode.Template)
    Handlebars.registerPartial('struct', StructNode.Template)
    Handlebars.registerPartial('call', CallNode.Template)
    Handlebars.registerPartial('methodCall', MethodCallNode.Template)
    Handlebars.registerPartial('block', BlockNode.Template)
    Handlebars.registerPartial('if_', IfNode.Template)
    Handlebars.registerPartial('assign', AssignNode.Template)
    Handlebars.registerPartial('return', ReturnNode.Template)
    Handlebars.registerPartial('for', ForNode.Template)
}