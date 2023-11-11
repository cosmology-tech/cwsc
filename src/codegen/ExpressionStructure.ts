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
    literal: LiteralStructure | undefined;
    identifier: IdentifierStructure | undefined;
    binary: BinaryStructure | undefined;
    unary: UnaryStructure | undefined;
    try: TryStructure | undefined;
    index: IndexStructure | undefined;
    tuple: TupleStructure | undefined;
    struct: StructStructure | undefined;
    call: CallStructure | undefined;
    methodCall: MethodCallStructure | undefined;
    block: BlockStructure | undefined;
    if: IfStructure | undefined;
    assign: AssignStructure | undefined;
    return: ReturnStructure | undefined;
    for: ForStructure | undefined;
}

export interface LiteralStructure {
    value: string;
}

export interface IdentifierStructure {
    name: string;
}

export interface BinaryStructure {
    left: ExpressionStructure;
    op: string;
    right: ExpressionStructure;
}

export interface UnaryStructure {
    op: string;
    expr: ExpressionStructure;
}

export interface TryStructure {
    expr: ExpressionStructure;
}

export interface IndexStructure {
    expr: ExpressionStructure;
    args: ExpressionStructure[];
}

export interface TupleStructure {
    values: ExpressionStructure[];
}

export interface StructStructure {
    name: string;
    fields: PairStructure<ExpressionStructure>[];
}

export interface CallStructure {
    callee: ExpressionStructure;
    args: ExpressionStructure[];
}

export interface MethodCallStructure {
    callee: ExpressionStructure;
    method: string;
    args: ExpressionStructure[];
}

export interface IfStructure {
    cond: ExpressionStructure;
    then: BlockStructure;
    else_: BlockStructure | undefined;
}

export interface AssignStructure {
    left: ExpressionStructure;
    op: string;
    right: ExpressionStructure;
}

export interface ReturnStructure {
    expr: ExpressionStructure | undefined;
}

export interface ForStructure {
    binding: PatternStructure;
    iter: ExpressionStructure;
    body: BlockStructure;
}

export interface PatternStructure {
    identifier: IdentifierStructure | undefined
    tuple: TupleStructure | undefined
    struct: StructStructure | undefined
}

export interface PairStructure<T> {
    key: string;
    value: T;
}

