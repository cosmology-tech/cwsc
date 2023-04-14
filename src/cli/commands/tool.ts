import { Command } from 'commander';

export const command = new Command('tool');

// short form
command.alias('x');
command.description('Run an external CWScript compiler tool');
command.argument('<name>', 'The name of the tool to run.');

export default command;
