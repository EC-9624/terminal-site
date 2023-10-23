import React, { useRef, useEffect } from 'react';
import Input from './components/Input';
import { useHistory } from './components/History/Hook';
import History from './components/History/History';
import { banner } from './utils/commands';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
}

const App: React.FC<IndexPageProps> = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickedAnywhere = () => {
    inputRef.current.focus();
  };

  const containerRef = useRef(null);
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
      <main className="bg-foreground dark:bg-dark-background w-full h-full p-2">
        <div
          className="text-background min-w-max text-xs md:min-w-full md:-text-base"
          onClick={onClickedAnywhere}
        >
          <div ref={containerRef} className="overflow-y-auto h-full">
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
