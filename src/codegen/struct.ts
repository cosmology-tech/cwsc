import { RenderConfig } from "./render";

// Tuple(string, bool)
export class Tuple<T> {
    public fields: T[] = [];

    constructor() {
    }

    public field(field: T) {
        this.fields.push(field);
    }

    public render(): string {
        return `(${this.fields.join(', ')})`
    }
}

/*
{
    a: string,
    b: bool
}

{
    a: 'asdf',
    b: true,
}
*/
export class Struct<T> {
    public fields: Field[] = [];

    constructor() {
    }

    public render(config: RenderConfig): string {
        const derive = this.derives ? `${config.indent}#[derive(${this.derives.join(', ')})]\n` : '';

        return `
${derive}${config.indent}pub struct ${this.name} {
${this.fields.map(field => `${config.innerIndent().indent}${field.render()}`).join('\n')}
}
`;
    }

    public field(name: string, type: string) {
        this.fields.push(new Field(name, type));
    }

    public derive(derive: string) {
        this.derives.push(derive);
    }
}