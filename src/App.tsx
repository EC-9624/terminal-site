import { banner } from "./utils/commands";
function App() {
  return (
    <>
      <div className="overflow-hidden h-full border-2 rounded ">
        <pre>{banner()}</pre>
      </div>
    </>
  );
}

export default App;
