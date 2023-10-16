import { getProject, getReadme } from './utils/apis';
import Ps1 from './components/Ps1';
function App() {
  getProject();
  getReadme();
  return (
    <>
      <div className="overflow-hidden h-full border-2 rounded">
        <Ps1 />
      </div>
    </>
  );
}

export default App;
