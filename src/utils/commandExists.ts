import * as cmds from './commands';

export function commandExists(command: string) {
  const commands = ['clear', ...Object.keys(cmds)];
  return commands.indexOf(command.split(' ')[0].toLowerCase()) !== -1;
}
