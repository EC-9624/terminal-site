import { getProject, getReadme } from './utils/apis';
function App() {
  getProject();
  getReadme();
  return (
    <>
      <div className="overflow-hidden h-full border-2 rounded"></div>
    </>
  );
}

export default App;
