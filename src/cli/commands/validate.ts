import { Command } from 'commander';

export const command = new Command('validate');

// short form
command.alias('v');
command.description(`Check a CWScript project for errors`);

export default command;
