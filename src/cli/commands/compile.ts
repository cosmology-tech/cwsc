import { CWScriptCodegen, Source } from '../../codegen/codegen';
import { Command } from 'commander';
import { readFileSync, writeFileSync } from "fs";
import { Parser } from '../../parser'
import { SourceValidationContext, ASTValidationPass } from "../../static-analysis";
import { ForStmt_Context } from 'grammar/CWScriptParser';

export const command = new Command('compile');

command.argument('<filename>', 'The filename to compile');
command.argument('<contractName>', 'The name of the contract to compile');

// short form
command.alias('c');
command.description('Compile <contractName> in <filename> to <STDOUT>');
command.action((filename, contractName) => {
    const source: Source = { file: filename, ast: Parser.fromString(readFileSync(filename).toString()).buildAST() }
    const foo = new CWScriptCodegen([source]);
    const bar = foo.generateContract(contractName, '/dev/stdout');
    writeFileSync("/dev/stdout", bar.toRustString());
});

export default command;
