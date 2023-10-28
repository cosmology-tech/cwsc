import { Enum, UnitVariant } from "./enum";
import { Fn } from "./fn";
import { RenderConfig } from "./render";
import { Struct } from "./struct";
import { StructTypeDecl } from "./types";

// CWS ast type => rust codegen type
// TopLevelStmt => Contract 
export class Contract {
    public name: string = '';
    public events: Event[] = [];
    public errors: Error[] = [];
    public structs: StructTypeDecl[] = [];
    public states: StructTypeDecl = new Struct('State');
    public instantiates = new Fn('instantiate');
    public executes: Fn[] = [];
    public queries: Fn[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public event(event: Event) {
        this.events.push(event);
    }

    public error(name: string) {
        this.errors.push(new Error(name));
    }

    public state(...fields: Field[]) {
        this.states.fields = fields;
    }

    public struct(struct: Struct) {
        this.structs.push(struct);
    }

    public instantiate(fn: Fn) {
        this.instantiates = fn;
    }

    public execute(fn: Fn) {
        this.executes.push(fn);
    }

    public query(fn: Fn) {
        this.queries.push(fn);
    }

    public render(): string {
        let config = RenderConfig.default();

        return `
pub mod ${this.name} {
${config.indent}${this.renderEvents(config.innerIndent())}
${config.indent}${this.renderStates(config.innerIndent())}
${config.indent}${this.renderErrors(config.innerIndent())}
${config.indent}${this.renderStructs(config.innerIndent())}
${config.indent}${this.renderInstantiate(config.innerIndent())}
${config.indent}${this.renderExecutes(config.innerIndent())}
${config.indent}${this.renderQueries(config.innerIndent())}
}
`;
    }

    private renderEvents(config: RenderConfig): string {
        // TODO
        return 'unimplemented: render events'
    }

    private renderErrors(config: RenderConfig): string {
        let error = new Enum('Error', this.errors.map(error => new UnitVariant(error.name)));

        return error.render(config);
    }

    private renderStates(config: RenderConfig): string {
        return this.states.render(config);
    }

    private renderStructs(config: RenderConfig): string {
        return this.structs.map(struct => struct.render(config)).join('\n');
    }

    private renderInstantiate(config: RenderConfig): string {
        return this.instantiates.render(config);
    }

    private renderExecutes(config: RenderConfig): string {
        return this.executes.map(execute => execute.render(config)).join('\n');
    }

    private renderQueries(config: RenderConfig): string {
        return this.queries.map(query => query.render(config)).join('\n');
    }
}

export class Event {
    public name: string = '';
    public fields: Field[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public field(name: string, type: string) {
        this.fields.push(new Field(name, type));
    }
}

export class Error {
    public name: string = '';

    constructor(name: string) {
        this.name = name;
    }
}