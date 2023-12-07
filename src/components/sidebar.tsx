import { Link } from "react-router-dom";
import { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"


import girl_icon from '../girl_icon.jpeg';

const Sidebar = () => {
  return (
    <>
        <div className='sidebar'>
            <div className='img-div'>
                <img src={girl_icon} alt="Profile photograph" />
            </div>
            <h2>Bianca Regulski</h2>
            
            {/* <i className="fa-sharp fa-light fa-sun-bright"></i> */}

            <div className="nav-link">
                <Link to="/"> Home </Link>
            </div>
            <div className="nav-link">
                <Link to="/about"> About </Link>
            </div>
            <div className="nav-link">
                <Link to="/projects"> Projects </Link>
            </div>
        </div>
    </>
  );
};

export default Sidebar;