import Ps1 from './Ps1';

interface HistoryInterface {
  id: number;
  date: Date;
  command: string;
  output: string;
}

function InputHistory({ history }: { history: Array<HistoryInterface> }) {
  return (
    <>
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <Ps1 />
            </div>

            <div className="flex-grow">{entry.command}</div>
          </div>

          <p
            className="whitespace-pre-wrap mb-2"
            style={{ lineHeight: 'normal' }}
            dangerouslySetInnerHTML={{ __html: entry.output }} //setinnerHTML
          />
        </div>
      ))}
    </>
  );
}

export default InputHistory;
