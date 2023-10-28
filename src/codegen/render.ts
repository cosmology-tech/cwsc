export class RenderConfig {
    public indentDepth: number = 0;

    constructor(indentDepth: number) {
        this.indentDepth = indentDepth;
    }

    public get indent(): string {
        return '  '.repeat(this.indentDepth);
    }

    public innerIndent(): RenderConfig {
        return new RenderConfig(this.indentDepth + 1);
    }

    public static default(): RenderConfig {
        return new RenderConfig(0);
    }
}