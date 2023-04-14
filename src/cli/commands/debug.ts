import { Command } from 'commander';

export const command = new Command('debug');

// short form
command.alias('d');
command.description('Run debugger on a CWScript project');

export default command;
