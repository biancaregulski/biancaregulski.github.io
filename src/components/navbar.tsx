import { NavLink } from "react-router-dom";
import { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";


const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const lightModeSymbol = '\u263C';
  const nightModeSymbol = '\u263E';

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setIsDarkMode(document.body.classList.contains("dark"));
  };

  return (
    <div className="top-navbar py-3 w-100">
      <ul className="navbar-items">
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link navbar-link home-link" : "navbar-link home-link"}><h1>Bianca Regulski</h1></NavLink>
        {/* <NavLink to="/about" className="navbar-link standard-link"> About </NavLink> */}
        <NavLink to="/resume" className="navbar-link standard-link"> Resume </NavLink>
        <NavLink to="/projects" className="navbar-link standard-link"> Projects </NavLink>
      </ul>
      <ul className="ml-auto navbar-nav">
        <li>
          <button type='button' onClick={toggleDarkMode} className="btn btn-md dark-mode-button">
            {isDarkMode ? lightModeSymbol : nightModeSymbol}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;