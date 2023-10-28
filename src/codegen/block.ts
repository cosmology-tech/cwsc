import { RenderConfig } from "./render";
import { Statement } from "./statement";

export class Block {
    public statements: Statement[] = [];

    constructor(...statements: Statement[]) {
        this.statements = statements;
    }

    public render(config: RenderConfig): string {
        return `
${config.indent}{
${this.statements.map(statement => statement.render(config.innerIndent())).join('\n')}
${config.indent}}
`;
    }
}