import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Human Body Explorer</h2>
      </div>

      <ul className="nav-links">
  <li>
    <a href="#home">Home</a>
  </li>

  <li>
    <a href="#organs">Organs</a>
  </li>

  <li>
  <Link to="/about">About</Link>
</li>
</ul>
    </nav>
  );
}

export default Navbar;