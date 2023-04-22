const { compilerOptions } = require('./tsconfig.json');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  // Other jest configurations...
  preset: 'ts-jest',
  testEnvironment: 'node',
};
