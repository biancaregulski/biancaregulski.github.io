import { NavLink } from "react-router-dom";
import "react-toggle/style.css";

import Dropdown from "./dropdown";
import ModeToggle from "./mode-toggle";

const Navbar = () => {

  return (
    <div className="top-navbar py-3 w-100">
      <ul className="navbar-items">
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link navbar-link home-link" : "navbar-link home-link"}><h1>Bianca Regulski</h1></NavLink>
        <div id="navbar-links">
          {/* <NavLink to="/about" className="navbar-link standard-link"> About </NavLink> */}
          <NavLink to="/resume" className="navbar-link standard-link"> Resume </NavLink>
          <NavLink to="/projects" className="navbar-link standard-link"> Projects </NavLink>
        </div>
        <div className="navbar-button-right">
          <Dropdown />
          <div id="navbar-mode-toggle">
            <ModeToggle />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;