import { Block } from "./block";
import { RenderConfig } from "./render";
import { Statement } from "./statement";
import { Field } from "./types";

export class Fn {
    public name: string = '';
    public args: Field<string>[] = [];
    public returntype: string = '';
    public body: Block = new Block();

    constructor(name: string, args: Field<string>[], returntype: string, ...body: Statement[]) {
        this.name = name;
        this.args = args;
        this.returntype = returntype;
        this.body = new Block(...body);
    }

    public arg(name: string, type: string) {
        this.args.push(new Field(name, type));
    }

    public render(config: RenderConfig): string {
        return `${config.indent}pub fn ${this.name}(${this.args.map(arg => arg.render(config)).join(', ')}) -> ${this.returntype} {
${this.body.statements.map(statement => statement.render(config.innerIndent())).join('\n')}
${config.indent}}`
    }
}