import Sidebar from "./sidebar";
import cornerBorder from "../assets/corner-border.png"
import CornerBorder from "../assets/corner-border";
import { poemList } from "../poems"
import { Link } from "react-router-dom";
import { useState } from "react";

const Poetry = () => {
    const [currentPoem, setCurrentPoem] = useState(poemList[0]);        // check if available
    const borderColor: string = getComputedStyle(document.documentElement).getPropertyValue("--gray-light");


    const poemLinks = poemList.map((poem) => (
        <div className="nav-link">
            <Link to="#">{poem.title}</Link>
        </div>
    ));

     return (
        <div className="d-flex flex-row mt-5">
            <div className='sidebar'>
                <h2>Poems</h2>
                {poemLinks}
            </div>
            <div>
                <div className="d-flex ml-4 ornamental-border poetry-container">
                    <div className="poetry-header">
                        <div>
                            <CornerBorder width={50} height={50} backgroundColor={borderColor}/>
                        </div>
                        <h3>{currentPoem.title}</h3>
                    </div>
                    <div className="poetry-content">
                        <p>{currentPoem.text}</p>
                    </div>
                </div>
            </div>
        </div>
     )
}

export default Poetry;