const banner: string = `


███████╗ ██████╗       █████╗  ██████╗ ██████╗ ██╗  ██╗
██╔════╝██╔════╝      ██╔══██╗██╔════╝ ╚════██╗██║  ██║
█████╗  ██║     █████╗╚██████║███████╗  █████╔╝███████║
██╔══╝  ██║     ╚════╝ ╚═══██║██╔═══██╗██╔═══╝ ╚════██║
███████╗╚██████╗       █████╔╝╚██████╔╝███████╗     ██║
╚══════╝ ╚═════╝       ╚════╝  ╚═════╝ ╚══════╝     ╚═╝
                                                       

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click `;
function App() {
  return (
    <>
      <div className="p-8 overflow-hidden h-full border-2 rounded ">
        <pre>{banner}</pre>
        <p className="text-green-500">visitor@EC-9624:$ ~ </p>
        <input type="text" name="input" id="input" />
      </div>
    </>
  );
}

export default App;
