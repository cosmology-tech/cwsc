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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const commander_1 = require("commander");
const commands_1 = __importDefault(require("./commands"));
const logger = __importStar(require("../util/logger"));
function run(argv) {
    process.on('unhandledRejection', (error) => {
        if (commander_1.program.verbose) {
            console.error(error);
            logger.error(error.toString());
        }
        else {
            logger.error(error.toString() + '; use --verbose for more details');
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
        logger.error(e.message);
    }
}
exports.run = run;
//# sourceMappingURL=index.js.map