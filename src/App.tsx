import Ps1 from './components/Ps1';
import * as cmds from './utils/commands';
function App() {
  console.log(Object.keys(cmds));

  return (
    <>
      <div className="overflow-hidden h-full border-2 rounded bg-foreground">
        <Ps1 />
      </div>
    </>
  );
}

export default App;
