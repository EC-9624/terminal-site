import React from 'react';
import { History as HistoryInterface } from './Interface';
import Ps1 from '../Ps1';

// sanitize Html
function createMarkup(html: string) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return { __html: div.innerHTML };
}

export const History: React.FC<{ history: Array<HistoryInterface> }> = ({
  history,
}) => {
  return (
    <>
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index} className={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <Ps1 />
            </div>

            <div className="flex-grow">{entry.command}</div>
          </div>

          <pre className="whitespace-pre-wrap mb-2" style={{ lineHeight: 'normal' }}>
            <span dangerouslySetInnerHTML={createMarkup(entry.output)} />
          </pre>
        </div>
      ))}
    </>
  );
};

export default History;
