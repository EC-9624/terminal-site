import React from 'react';
import * as cmds from './commands';

export async function shell(
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>, //typeScript Wrapper For setState : string
) {
  const args = command.split(' ');
  args[0] = args[0].toLowerCase();
  if (args[0] === 'clear') {
    clearHistory();
  } else if (command === '') {
    setHistory('');
  } else if (Object.keys(cmds).indexOf(args[0]) === -1) {
    setHistory(
      `shell : command not found ${args[0]}. Try 'help' to get started.`,
    );
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const output = await (cmds as any)[args[0]](args.slice(1)); //arg[0] is a function in cmds  args.slice(1) is an arg[0] arguments IE: weather(tokyo)

    setHistory(output);
  }
  setCommand('');
}
