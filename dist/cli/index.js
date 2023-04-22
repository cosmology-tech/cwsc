"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const commander_1 = require("commander");
const commands_1 = __importDefault(require("./commands"));
const completions_1 = require("./ui/completions");
completions_1.completions.init();
function run(argv) {
    process.on('unhandledRejection', (error) => {
        if (commander_1.program.verbose) {
            console.error(error);
        }
        else {
            console.error(error.toString() + '; use --verbose for more details');
        }
    });
    try {
        commander_1.program
            .name('cwsc')
            .version('0.1.0')
            .option('-v,--verbose', 'show verbose error logs')
            .description('Official CWScript compiler by Terran One');
        commands_1.default.forEach((cmd) => {
            commander_1.program.addCommand(cmd);
        });
        commander_1.program.parse(argv);
    }
    catch (e) {
        console.error(e);
    }
}
exports.run = run;
//# sourceMappingURL=index.js.map