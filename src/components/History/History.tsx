import Ps1 from '../Ps1';
import { History as HistoryInterface } from './Interface';

function History({ history }: { history: Array<HistoryInterface> }) {
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

export default History;
