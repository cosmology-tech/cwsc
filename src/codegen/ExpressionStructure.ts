import { StatementStructure } from "./StatementStructure";

export interface BlockStructure {
    statements: StatementStructure[];
}

export interface FunctionStructure {
    name: string;
    args: PairStructure<string>[];
    returntype: string;
    body: BlockStructure;
}

export interface ExpressionStructure {
    literal?: LiteralStructure | undefined;
    identifier?: IdentifierStructure | undefined;
    binary?: BinaryStructure | undefined;
    unary?: UnaryStructure | undefined;
    try?: TryStructure | undefined;
    index?: IndexStructure | undefined;
    tuple?: TupleStructure | undefined;
    struct?: StructStructure | undefined;
    call?: CallStructure | undefined;
    methodCall?: MethodCallStructure | undefined;
    block?: BlockStructure | undefined;
    if_?: IfStructure | undefined;
    assign?: AssignStructure | undefined;
    return?: ReturnStructure | undefined;
    for?: ForStructure | undefined;
}

export interface LiteralStructure {
    value: string;
}

export function LiteralStructure(value: string): ExpressionStructure {
    return { literal: { value } };
}

export interface IdentifierStructure {
    name: string;
}

export function IdentifierStructure(name: string): ExpressionStructure {
    return { identifier: { name } };
}

export interface BinaryStructure {
    left: ExpressionStructure;
    op: string;
    right: ExpressionStructure;
}

export function BinaryStructure(left: ExpressionStructure, op: string, right: ExpressionStructure): ExpressionStructure {
    return { binary: { left, op, right } };
}

export interface UnaryStructure {
    op: string;
    expr: ExpressionStructure;
}

export function UnaryStructure(op: string, expr: ExpressionStructure): ExpressionStructure {
    return { unary: { op, expr } };
}

export interface TryStructure {
    expr: ExpressionStructure;
}

export function TryStructure(expr: ExpressionStructure): ExpressionStructure {
    return { try: { expr } };
}

export interface IndexStructure {
    receiver: ExpressionStructure;
    arg: ExpressionStructure;
}

export function IndexStructure(receiver: ExpressionStructure, arg: ExpressionStructure): ExpressionStructure {
    return { index: { receiver, arg } };
}

export interface TupleStructure {
    values: ExpressionStructure[];
}

export function TupleStructure(...values: ExpressionStructure[]): ExpressionStructure {
    return { tuple: { values } };
}

export interface StructStructure {
    name: string;
    fields: PairStructure<ExpressionStructure>[];
}

export function StructStructure(name: string, ...fields: [string, ExpressionStructure][]): ExpressionStructure {
    return { struct: { name, fields: fields.map(([key, value]) => PairStructure(key, value)) } };
}

export interface CallStructure {
    callee: ExpressionStructure;
    args: ExpressionStructure[];
}

export function CallStructure(callee: ExpressionStructure, ...args: ExpressionStructure[]): ExpressionStructure {
    return { call: { callee, args } };
}

export interface MethodCallStructure {
    callee: ExpressionStructure;
    method: string;
    args: ExpressionStructure[];
}

export function MethodCallStructure(callee: ExpressionStructure, method: string, ...args: ExpressionStructure[]): ExpressionStructure {
    return { methodCall: { callee, method, args } };
}

export interface IfStructure {
    cond: ExpressionStructure;
    then: BlockStructure;
    else_: BlockStructure | undefined;
}

export function IfStructure(cond: ExpressionStructure, then: BlockStructure, else_: BlockStructure | undefined): ExpressionStructure {
    return { if_: { cond, then, else_ } };
}

export interface AssignStructure {
    left: ExpressionStructure;
    op: string;
    right: ExpressionStructure;
}

export function AssignStructure(left: ExpressionStructure, op: string, right: ExpressionStructure): ExpressionStructure {
    return { assign: { left, op, right } };
}

export interface ReturnStructure {
    expr: ExpressionStructure | undefined;
}

export function ReturnStructure(expr: ExpressionStructure | undefined): ExpressionStructure {
    return { return: { expr } };
}

export interface ForStructure {
    binding: PatternStructure;
    iter: ExpressionStructure;
    body: BlockStructure;
}

export function ForStructure(binding: PatternStructure, iter: ExpressionStructure, body: BlockStructure): ExpressionStructure {
    return { for: { binding, iter, body } };
}

export interface PatternStructure {
    identifier: IdentifierStructure | undefined
    tuple: TupleStructure | undefined
    struct: StructStructure | undefined
}

export function PatternStructure(identifier: IdentifierStructure | undefined, tuple: TupleStructure | undefined, struct: StructStructure | undefined): PatternStructure {
    return { identifier, tuple, struct };
}

export interface PairStructure<T> {
    key: string;
    value: T;
}

export function PairStructure<T>(key: string, value: T): PairStructure<T> {
    return { key, value };
}