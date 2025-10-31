import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
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
        <About />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
