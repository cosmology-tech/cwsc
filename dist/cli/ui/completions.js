"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.completions = void 0;
const omelette_1 = __importDefault(require("omelette"));
const fs_1 = __importDefault(require("fs"));
exports.completions = (0, omelette_1.default)(`githubber|gh <action> <user> <repo>`);
// Bind events for every template part.
exports.completions.on('action', ({ reply }) => {
    reply(['clone', 'update', 'push']);
});
exports.completions.on('user', ({ reply }) => {
    reply(fs_1.default.readdirSync('/Users/'));
});
exports.completions.on('repo', ({ before, reply }) => {
    reply([
        `http://github.com/${before}/helloworld`,
        `http://github.com/${before}/blabla`,
    ]);
});
// Initialize the omelette.
exports.completions.init();
//# sourceMappingURL=completions.js.map