import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Home />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
