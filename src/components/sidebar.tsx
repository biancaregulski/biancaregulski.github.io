import { Link } from "react-router-dom";
import { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"

const Sidebar = (links: any) => {

  return (
    <>
        <div className='sidebar'>
            {links}
        </div>
    </>
  );
};

export default Sidebar;