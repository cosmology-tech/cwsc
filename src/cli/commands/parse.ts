import { Command } from 'commander';
import { readFileSync, writeFileSync } from 'fs';
import { CWScriptParser } from '@/parser';

export const command = new Command('parse');

command.argument('<filename>', 'The filename to parse');

// short form
command.alias('p');
command.description('Parse <filename> to <STDOUT>');
command.action((filename) => {
  const fileSourceText = readFileSync(filename, 'utf8');
  writeFileSync(
    '/dev/stdout',
    JSON.stringify(CWScriptParser.parseAndValidate(fileSourceText).toJSON())
  );
});

export default command;
