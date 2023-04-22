import { Command, Interfaces } from '@oclif/core';
export type FlagsT<T extends typeof Command> = Interfaces.InferredFlags<typeof BaseCommand['baseFlags'] & T['flags']>;
export type ArgsT<T extends typeof Command> = Interfaces.InferredArgs<T['args']>;
export declare class ConfigKV {
    key: string;
    value: string;
    constructor(key: string, value: string);
}
export declare abstract class BaseCommand<T extends typeof Command> extends Command {
    loadConfig(): Promise<void>;
    protected flags: FlagsT<T>;
    protected args: ArgsT<T>;
    init(): Promise<void>;
    static baseFlags: {
        verbose: Interfaces.BooleanFlag<boolean>;
        silent: Interfaces.BooleanFlag<boolean>;
        'show-hints': Interfaces.BooleanFlag<boolean>;
        'show-warnings': Interfaces.BooleanFlag<boolean>;
        logs: Interfaces.OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        'log-file': Interfaces.OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        'project-dir': Interfaces.OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        cwsconfig: Interfaces.OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
    };
    protected catch(err: Error & {
        exitCode?: number;
    }): Promise<any>;
    protected finally(_: Error | undefined): Promise<any>;
    abstract run(): Promise<any>;
}
