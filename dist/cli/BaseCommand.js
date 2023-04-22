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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
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
    loadConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            const userConfig = yield fs.readJSON(path.join(this.config.configDir, 'cwsconfig.json'));
            this.log('User config:');
            console.dir(userConfig);
        });
    }
    init() {
        const _super = Object.create(null, {
            init: { get: () => super.init },
            ctor: { get: () => super.ctor }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.init.call(this);
            const { args, flags } = yield this.parse({
                flags: this.ctor.flags,
                baseFlags: _super.ctor.baseFlags,
                args: this.ctor.args,
                strict: this.ctor.strict,
            });
            this.flags = flags;
            this.args = args;
        });
    }
    catch(err) {
        const _super = Object.create(null, {
            catch: { get: () => super.catch }
        });
        return __awaiter(this, void 0, void 0, function* () {
            // add any custom logic to handle errors from the command
            // or simply return the parent class error handling
            return _super.catch.call(this, err);
        });
    }
    finally(_) {
        const _super = Object.create(null, {
            finally: { get: () => super.finally }
        });
        return __awaiter(this, void 0, void 0, function* () {
            // called after run and catch regardless of whether or not the command errored
            return _super.finally.call(this, _);
        });
    }
}
exports.BaseCommand = BaseCommand;
_a = BaseCommand;
BaseCommand.baseFlags = {
    verbose: core_1.Flags.boolean({
        char: 'V',
        description: 'Show verbose output - turns on all logs',
        default: false,
    }),
    silent: core_1.Flags.boolean({
        char: 'Q',
        description: 'Show no output',
        default: false,
        aliases: ['quiet'],
        exclusive: ['verbose'],
    }),
    logs: core_1.Flags.string({
        char: 'L',
        description: 'Show logs of the specified level',
        delimiter: ',',
        multiple: true,
        options: ['none', 'info', 'debug', 'warn', 'error'],
        default: ['warn', 'error'],
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
    X: core_1.Flags.custom({
        multiple: true,
        description: `Set a config value temporarily for this command. This flag can be used multiple times to set multiple values.`,
        helpLabel: '-Xkey value',
        parse: (input) => __awaiter(void 0, void 0, void 0, function* () {
            const [key, value] = input.split('=');
            return new ConfigKV(key, value);
        }),
    })(),
};
//# sourceMappingURL=BaseCommand.js.map