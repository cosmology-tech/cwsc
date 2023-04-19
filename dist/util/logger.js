"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = exports.error = exports.warn = exports.info = void 0;
const chalk_1 = require("chalk");
function info(text) {
    console.log((0, chalk_1.bold)((0, chalk_1.white)((0, chalk_1.bgBlueBright)(' INFO '))) + ' ' + (0, chalk_1.blueBright)(text));
}
exports.info = info;
function warn(text) {
    console.log((0, chalk_1.bold)((0, chalk_1.white)((0, chalk_1.bgYellow)(' WARNING '))) + ' ' + (0, chalk_1.yellow)(text));
}
exports.warn = warn;
function error(text) {
    console.log((0, chalk_1.bold)((0, chalk_1.white)((0, chalk_1.bgRedBright)(' ERROR '))) + ' ' + (0, chalk_1.redBright)(text));
}
exports.error = error;
function success(text) {
    console.log((0, chalk_1.bold)((0, chalk_1.white)((0, chalk_1.bgGreenBright)(' SUCCESS '))) + ' ' + (0, chalk_1.greenBright)(text));
}
exports.success = success;
//# sourceMappingURL=logger.js.map