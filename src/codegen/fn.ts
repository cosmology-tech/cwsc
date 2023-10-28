import { Block } from "./block";
import { RenderConfig } from "./render";
import { Statement } from "./statement";
import { Field } from "./struct";

export class Fn {
    public name: string = '';
    public args: Field[] = [];
    public body: Block = new Block();

    constructor(name: string, args: Field[], ...body: Statement[]) {
        this.name = name;
        this.args = args;
        this.body = new Block(...body);
    }

    public arg(name: string, type: string) {
        this.args.push(new Field(name, type));
    }

    public render(config: RenderConfig): string {
        return `
${config.indent}pub fn ${this.name}(${this.args.map(arg => arg.render(config.innerIndent())).join(', ')}) {
${this.body.map(statement => statement.render(config.innerIndent())).join('\n')}
}
`
    }
}