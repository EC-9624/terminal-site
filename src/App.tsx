import React, { useRef, useEffect } from 'react';
import Input from './components/Input';
import { useHistory } from './components/History/Hook';
import History from './components/History/History';
import { banner } from './utils/commands';

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClickedAnywhere = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  const containerRef = useRef(null); // ref for History
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = React.useCallback(() => setHistory(banner()), []);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <>
      <main className="bg-background dark:bg-dark-background w-full h-full p-4 ">
        <div
          className="text-foreground min-w-max text-xl md:min-w-full md:-text-base"
          onClick={onClickedAnywhere}
        >
          <div ref={containerRef} className="overflow-y-auto ">
            <History history={history} />
          </div>
          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </main>
    </>
  );
};

export default App;
