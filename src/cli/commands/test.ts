import { Command } from 'commander';

export const command = new Command('test');

// short form
command.alias('t');
command.description(`Run a CWScript project's tests`);

export default command;
