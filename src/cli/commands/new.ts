import * as fs from 'fs';
import * as path from 'path';
import yesno from 'yesno';
import { Command } from 'commander';
import { cwd } from 'process';
import { CWSProjectManager } from '../../project/manager';
import { kebabCase } from 'lodash';

export const command = new Command('new');

// short form
command.description('Create a new CWScript project');
command.argument('<name>', 'The name of the project.');
command.argument('[dir]', 'The directory to create the project in.');
command.action(async (name, dir) => {
  let currentDir = cwd();
  let projectDir: string;
  if (!!dir) {
    if (path.isAbsolute(dir)) {
      projectDir = dir;
    } else {
      projectDir = path.resolve(currentDir, dir);
    }
  } else {
    projectDir = path.resolve(currentDir, kebabCase(name));
  }

  console.log(`Creating project ${name} in ${projectDir}`);

  if (fs.existsSync(projectDir)) {
    let response = await yesno({
      question: `Directory ${projectDir} already exists. Continue?`,
    });
    if (!response) {
      console.log('Aborting.');
      return;
    }
  }

  if (CWSProjectManager.isProject(projectDir)) {
    let response = await yesno({
      question: `Directory ${projectDir} is already a CWScript project. Continue?`,
    });
    if (!response) {
      console.log('Aborting.');
      return;
    }
  }

  CWSProjectManager.createNewProject(name, projectDir);
  console.log(`Project ${name} created in ${projectDir}`);
});

export default command;
