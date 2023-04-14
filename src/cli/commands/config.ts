import { Command } from 'commander';

export const command = new Command('config');

// short form
command.alias('cfg');
command.description('Read / write the configuration of a CWScript project');

export default command;
