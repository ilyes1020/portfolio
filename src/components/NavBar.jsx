import logo from "../assets/cloud-sun-alt-svgrepo-com.svg";
function NavBar() {
  return (
    <header className="bg-red-500 p-3">
      <div className="flex justify-around">
        <a href="#home">
          <img src={logo} className="h-8 w-8" />
        </a>
        <nav className="flex space-x-6">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
