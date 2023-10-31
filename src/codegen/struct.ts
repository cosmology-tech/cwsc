import { RenderConfig } from "./render";
import { Field } from "./types";

// TODO: typify the tuple arguments, string for now
// Tuple(string, bool)
// Tuple('asdf', false)
export class Tuple {
    public fields: string[] = [];

    constructor(fields: string[]) {
        this.fields = fields
    }

    public render(): string {
        return `(${this.fields.join(', ')})`
    }
}

/*
in type definition:
{
    a: string,
    b: bool
}

in struct literal:
{
    a: 'asdf',
    b: true,
}
*/
export class Struct {
    public fields: Field[] = [];

    constructor(fields: Field[]) {
        this.fields = fields;
    }

    public render(config: RenderConfig): string {
        return `{
${this.fields.map(field => `${config.innerIndent().indent}${field.render()},`).join('\n')}
${config.indent}}`
    }

    public field(name: string, type: string) {
        this.fields.push(new Field(name, type));
    }
}