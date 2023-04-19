"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pascalToSnake = exports.snakeToPascal = void 0;
function snakeToPascal(s) {
    return s
        .split('_')
        .map((x) => x[0].toUpperCase() + x.slice(1))
        .join('');
}
exports.snakeToPascal = snakeToPascal;
function pascalToSnake(s) {
    return s.replace(/([A-Z])/g, '_$1').toLowerCase();
}
exports.pascalToSnake = pascalToSnake;
//# sourceMappingURL=strings.js.map