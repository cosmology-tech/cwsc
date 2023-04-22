"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommand = exports.ConfigKV = void 0;
const core_1 = require("@oclif/core");
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
class ConfigKV {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
exports.ConfigKV = ConfigKV;
class BaseCommand extends core_1.Command {
    async loadConfig() {
        const userConfig = await fs.readJSON(path.join(this.config.configDir, 'cwsconfig.json'));
        this.log('User config:');
        console.dir(userConfig);
    }
    async init() {
        await super.init();
        const { args, flags } = await this.parse({
            flags: this.ctor.flags,
            baseFlags: super.ctor.baseFlags,
            args: this.ctor.args,
            strict: this.ctor.strict,
        });
        this.flags = flags;
        this.args = args;
    }
    async catch(err) {
        // add any custom logic to handle errors from the command
        // or simply return the parent class error handling
        return super.catch(err);
    }
    async finally(_) {
        // called after run and catch regardless of whether or not the command errored
        return super.finally(_);
    }
}
exports.BaseCommand = BaseCommand;
BaseCommand.baseFlags = {
    verbose: core_1.Flags.boolean({
        char: 'V',
        description: 'Show verbose output - turns on all logs and diagnostics.',
        default: false,
    }),
    silent: core_1.Flags.boolean({
        char: 'Q',
        description: 'Show no output',
        default: false,
        aliases: ['quiet'],
        exclusive: ['verbose'],
    }),
    'show-hints': core_1.Flags.boolean({
        description: 'Show CWScript "hint" and "info" diagnostics when parsing.',
        default: false,
        exclusive: ['silent'],
    }),
    'show-warnings': core_1.Flags.boolean({
        description: 'Show CWScript "warning" diagnostics when parsing.',
        default: true,
        exclusive: ['silent'],
    }),
    logs: core_1.Flags.string({
        description: 'Show compiler tool logs above a certain level',
        options: ['NONE', 'INFO', 'DEBUG', 'WARNING', 'ERROR'],
        default: ['ERROR'],
        exclusive: ['silent'],
    }),
    'log-file': core_1.Flags.file({
        description: 'Write logs to a file',
        env: 'CWSC_LOG_FILE',
        dependsOn: ['logs'],
    }),
    'project-dir': core_1.Flags.directory({
        char: 'D',
        description: 'Specify a directory containing a `cwsproject.toml` file to run the command in a specific project.',
        exclusive: ['project-config', 'project-dir'],
        env: 'CWS_PROJECT_DIR',
    }),
    cwsconfig: core_1.Flags.file({
        char: 'C',
        description: 'Specify a path to `cwsconfig.toml` to use base compiler tool settings.',
        env: 'CWS_CONFIG',
    }),
    // set: Flags.custom<ConfigKV>({
    //   multiple: true,
    //   description: `Set a config value temporarily for this command. This flag can be used multiple times to set multiple values.`,
    //   helpLabel: '-Xset=value',
    //   parse: async (input: string) => {
    //     const [key, value] = input.split('=');
    //     return new ConfigKV(key, value);
    //   },
    // })(),
};
//# sourceMappingURL=BaseCommand.js.map