import { Parser } from '../src/parser';
import { AST } from '../src';

export function cws(code: TemplateStringsArray): AST.SourceFile {   
    const parser = Parser.fromString(code.toString());
    return parser.buildAST();
}
