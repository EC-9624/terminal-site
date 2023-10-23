import React from 'react';
import Ps1 from './Ps1';
import { commandExists } from '../utils/commandExists';
import { shell } from '../utils/shell';
import { handleTabCompletion } from '../utils/tabCompletion';

function Input({
  inputRef,
  containerRef,
  command,
  history,
  lastCommandIndex,
  setCommand,
  setHistory,
  setLastCommandIndex,
  clearHistory,
}: any) {
  const onSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    const commands: [string] = history
      .map(({ command }: any) => command)
      .filter((command: string) => command);

    if (event.key === 'c' && event.ctrlKey) {
      event.preventDefault();
      setCommand('');
      setHistory('');
      setLastCommandIndex(0);
    }

    if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault();
      clearHistory();
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      handleTabCompletion(command, setCommand);
    }

    if (event.key === 'Enter' || event.code === '13') {
      event.preventDefault();
      setLastCommandIndex(0);
      await shell(command, setHistory, clearHistory, setCommand);
    
      // Assuming that `containerRef.current` is a reference to the container element
      // and you want to scroll it to the bottom
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }
    

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index: number = lastCommandIndex + 1;
      if (index <= commands.length) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      }
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index: number = lastCommandIndex - 1;
      if (index > 0) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      } else {
        setLastCommandIndex(0);
        setCommand('');
      }
    }
  };

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(value);
  };
  return (
    <div className="flex flex-row space-x-2">
      <label htmlFor="prompt" className="flex-shrink">
        <Ps1 />
      </label>
      <input
        ref={inputRef}
        id="prompt"
        type="text"
        className={`bg-background focus:outline-none flex-grow ${
          commandExists(command) || command === ''
            ? 'text-green'
            : 'text-red'
        }`}
        value={command}
        onChange={onChange}
        autoFocus
        onKeyDown={onSubmit}
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
}

export default Input;
