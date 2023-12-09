import { Link } from "react-router-dom";
import { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"

const Sidebar = () => {
  return (
    <>
        <div className='sidebar'>
            <div className="nav-link">
                <Link to="#"> Poem 1 </Link>
            </div>
            <div className="nav-link">
                <Link to="#"> Poem 2 </Link>
            </div>
            <div className="nav-link">
                <Link to="#"> Poem 3 </Link>
            </div>
        </div>
    </>
  );
};

export default Sidebar;