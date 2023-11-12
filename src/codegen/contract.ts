import { Fn } from "./fn";
import { RenderConfig } from "./render";
import { Statement } from "./statement";
import { Struct } from "./struct";
import { EnumTypeDecl, Field, StructTypeDecl, StructVariant, TupleVariant, UnitVariant, Variant } from "./types";

// CWS ast type => rust codegen type
// TopLevelStmt => Contract 
export class Contract {
    private _name: string = '';
    private _events: Event[] = [];
    private _errors: Error[] = [];
    private _structs: StructTypeDecl[] = [];
    private _state: StructTypeDecl = new StructTypeDecl('', []);
    private _instantiate = new Fn('instantiate', [], '');
    private _executes: Fn[] = [];
    private _queries: Fn[] = [];

    constructor(name: string) {
        this._name = name;
    }

    public event(event: Event) {
        this._events.push(event);
    }

    public error(name: string) {
        this._errors.push(new Error(name))
    }

    public state(...fields: Field<string>[]) {
        this._state = new StructTypeDecl(
            'State',
            [], // TODO: derives
            ...fields,
        )
    }

    public struct(struct: StructTypeDecl) {
        this._structs.push(struct)
    }

    public instantiate(args: Field<string>[], returntype: string, body: Statement[]) {
        // TODO: instantiate args should have cosmwasm context

        this._instantiate = new Fn('instantiate', args, returntype, ...body);
    }

    public execute(name: string, args: Field<string>[], returntype: string, body: Statement[]) {
        this._executes.push(new Fn(
            name,
            args,
            returntype,
            ...body,
        ))
    }

    public query(name: string, args: Field<string>[], returntype: string, body: Statement[]) {
        this._queries.push(new Fn(
            name,
            args,
            returntype,
            ...body,
        ))
    }

    public render(): string {
        let config = RenderConfig.default();

        return `
pub mod ${this._name} {
${config.indent}${this.renderEvents(config.innerIndent())}

${config.indent}${this.renderState(config.innerIndent())}

${config.indent}${this.renderErrors(config.innerIndent())}

${config.indent}${this.renderStructs(config.innerIndent())}

${config.indent}${this.renderInstantiate(config.innerIndent())}

${config.indent}${this.renderExecutes(config.innerIndent())}

${config.indent}${this.renderQueries(config.innerIndent())}
}
`;
    }

    private renderEvents(config: RenderConfig): string {
        let events = new EnumTypeDecl('Event', this._events.map(event => event.intoEnumVariant()))

        return events.render(config);
    }

    private renderErrors(config: RenderConfig): string {
        let error = new EnumTypeDecl('Error', this._errors.map(error => new UnitVariant(error.name)));

        return error.render(config);
    }

    private renderState(config: RenderConfig): string {
        return this._state.render(config);
    }

    private renderStructs(config: RenderConfig): string {
        return this._structs.map(struct => struct.render(config)).join('\n');
    }

    private renderInstantiate(config: RenderConfig): string {
        return this._instantiate.render(config);
    }

    private renderExecutes(config: RenderConfig): string {
        return `${config.indent}mod Execute {
${this._executes.map(execute => execute.render(config.innerIndent())).join('\n')}
${config.indent}}`
    }

    private renderQueries(config: RenderConfig): string {
        return `${config.indent}mod Query {
${this._queries.map(query => query.render(config.innerIndent())).join('\n')}
${config.indent}}`
    }
}

export class Event {
    public name: string = '';
    public fields: Field<string>[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public field(name: string, type: string) {
        this.fields.push(new Field(name, type));
    }

    public intoEnumVariant(): Variant {
        return this.fields.length
            ? new StructVariant(this.name, this.fields)
            : new UnitVariant(this.name);

    }
}

export class Error {
    public name: string = '';

    constructor(name: string) {
        this.name = name;
    }
}