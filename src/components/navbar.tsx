import { Link } from "react-router-dom";
import { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"


const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const lightModeSymbol = '\u263C';
  const nightModeSymbol = '\u263E';

  return (
    <div className="navbar navbar-fixed-top py-4">
        <ul className="navbar-items">
            <li className="nav-link home-link">
                <Link to="/"> Home </Link>
            </li>
            <li className="nav-link">
                <Link to="/about"> About </Link>
            </li>
            <li className="nav-link">
                <Link to="/projects"> Projects </Link>
            </li>
        </ul>
        <ul className="ml-auto navbar-nav">
            <li>
                <button type='button' onClick={() => setIsLightMode(!isLightMode)} className="btn btn-secondary btn-md">
                    { isLightMode ? nightModeSymbol : lightModeSymbol }
                </button>
            </li>
        </ul>
    </div>
  );
};

{/* <h2>Bianca Regulski</h2> */}
            
            {/* <i className="fa-sharp fa-light fa-sun-bright"></i> */}

            {/* <div className="nav-link">
                <Link to="/"> Home </Link>
            </div>
            <div className="nav-link">
                <Link to="/about"> About </Link>
            </div>
            <div className="nav-link">
                <Link to="/projects"> Projects </Link>
            </div> */}
            
export default Navbar;