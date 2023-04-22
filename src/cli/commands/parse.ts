import { Command } from 'commander';
import { readFileSync, writeFileSync } from 'fs';
import { CWScriptParser } from '../../parser';
import { stdin, stdout } from 'process';

export const command = new Command('parse');
command.argument('[filename]', 'File to parse (default <STDIN>)');
command.option('-o,--output <file>', 'File to write AST to');
command.option('-v,--verbose', 'Show verbose logs');
command.option(
  '-x,--format <format>',
  'Format to write AST in (json|sexpr)',
  /^(json|sexpr)$/i,
  'json'
);
command.description(
  'Parse a source file <filename> to AST and write to <outfile>'
);
command.action((filename) => {
  let { output, verbose, format } = command.opts();
  let sourceInput = '';
  if (!filename) {
    sourceInput = stdin.read().toString();
  } else {
    sourceInput = readFileSync(filename, 'utf8');
  }

  let { ast, diagnostics } = CWScriptParser.parse(sourceInput);
  if (!ast) {
    console.error('Failed to parse file');
    process.exit(1);
  }
  if (output) {
    writeFileSync(output, JSON.stringify(ast));
  } else {
    stdout.write(JSON.stringify(ast), 'utf8');
  }
});

export default command;
