import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
    <HashLink smooth to="/#home">
      Home
    </HashLink>
  </li>

  <li>
    <HashLink smooth to="/#organs">
      Organs
    </HashLink>
  </li>

  <li>
    <Link to="/about">About</Link>
  </li>
</ul>
    </nav>
  );
}

export default Navbar;