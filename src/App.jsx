import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="text-white">
      <div>
        <NavBar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
