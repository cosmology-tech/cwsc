import { BaseCommand } from '../BaseCommand';
export default class ParseCommand extends BaseCommand<typeof ParseCommand> {
    static description: string;
    static examples: string[];
    static flags: {
        format: import("@oclif/core/lib/interfaces").OptionFlag<string, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        out: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
    };
    static args: {
        file: import("@oclif/core/lib/interfaces/parser").Arg<string, {
            exists?: boolean | undefined;
        }>;
    };
    run(): Promise<void>;
}
