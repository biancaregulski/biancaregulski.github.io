import { NavLink } from "react-router-dom";
import { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"


const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const lightModeSymbol = '\u263C';
  const nightModeSymbol = '\u263E';

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setIsDarkMode(document.body.classList.contains("dark"));
  }

  return (
    <div className="navbar navbar-fixed-top py-4">
        <ul className="navbar-items">
            <li className="nav-link home-link">
                <NavLink to="/" className={({isActive}) => isActive ? "active-link" : "" }> Home </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/about"> About </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/resume"> Resume </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/projects"> Projects </NavLink>
            </li>
        </ul>
        <ul className="ml-auto navbar-nav">
            <li>
                <button type='button' onClick={toggleDarkMode} className="btn btn-md dark-mode-button">
                    { isDarkMode ?  lightModeSymbol : nightModeSymbol }
                </button>
            </li>
        </ul>
    </div>
  );
};
            
export default Navbar;