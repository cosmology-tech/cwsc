import omelette from 'omelette';
import fs from 'fs';

export const completions = omelette(`githubber|gh <action> <user> <repo>`);

// Bind events for every template part.
completions.on('action', ({ reply }) => {
  reply(['clone', 'update', 'push']);
});

completions.on('user', ({ reply }) => {
  reply(fs.readdirSync('/Users/'));
});

completions.on('repo', ({ before, reply }) => {
  reply([
    `http://github.com/${before}/helloworld`,
    `http://github.com/${before}/blabla`,
  ]);
});

// Initialize the omelette.
completions.init();
