import * as cmds from './commands';

export function handleTabCompletion(
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) {
  const commands = ['clear', ...Object.keys(cmds)]
  .filter((entry) =>
    entry.startsWith(command),
  );

  if (commands.length === 1) {
    setCommand(commands[0]);
  }
}
