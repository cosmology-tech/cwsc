import { Command } from 'commander';
import { CWSProjectManager } from '../../project/manager';

export const command = new Command('build');

// short form
command.alias('b');
command.description('Build a CWScript project');
command.action(() => {
  let currentDir = process.cwd();
  let project = CWSProjectManager.readProject(currentDir);
  console.log(project);
});

export default command;
