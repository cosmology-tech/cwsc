import { RenderConfig } from "./render";
import { Field } from "./types";

// TODO: typify the tuple arguments, string for now
// Tuple(string, bool)
// Tuple('asdf', false)
export class Tuple<T extends string | { render(): string }> {
    public fields: T[] = [];

    constructor(fields: T[]) {
        this.fields = fields
    }

    public render(): string {
        return `(${this.fields.map(field => {
            if (typeof field == 'string') {
                return field
            } else {
                return field.render()
            } 
        }).join(', ')})`
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
export class Struct<T extends string | { render(): string }> {
    public fields: Field<T>[] = [];

    constructor(fields: Field<T>[]) {
        this.fields = fields;
    }

    public render(config: RenderConfig): string {
        return `{
${this.fields.map(field => `${config.indent}${field.render(config)},`).join('\n')}
${config.indent}}`
    }
}