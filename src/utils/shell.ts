import React from 'react';
import * as cmds from './commands';

type CommandFunctions = {
  [key: string]: (args: string[]) => Promise<string> | string;
};

export async function shell(
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) {
  const args = command.split(' ');
  args[0] = args[0].toLowerCase();

  if (args[0] === 'clear') {
    clearHistory();
  } else if (command === '') {
    setHistory('');
  } else if (!(args[0] in cmds)) {
    setHistory(
      `shell: command not found ${args[0]}. Try 'help' to get started.`,
    );
  } else {
    const output = await (cmds as CommandFunctions)[args[0]](args.slice(1));

    setHistory(output);
  }
  setCommand('');
}
