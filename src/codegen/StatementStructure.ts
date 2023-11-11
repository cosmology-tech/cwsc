import { ExpressionStructure } from "./ExpressionStructure";

export interface StatementStructure {
    expression: ExpressionStructure | undefined;
    localBinding: LocalBindingStructure | undefined;
}

export interface LocalBindingStructure {
    name: string;
    mutable: boolean;
    type: string;
    expr: ExpressionStructure;
}