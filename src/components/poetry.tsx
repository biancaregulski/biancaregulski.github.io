import CornerBorder from "../assets/corner-border";
import { poemList } from "../poems";
import { useState } from "react";

const cornerBorderSize = 50;

const Poetry = () => {
    const [currentPoem, setCurrentPoem] = useState(poemList[0]);        // check if available
    const borderColor: string = getComputedStyle(document.documentElement).getPropertyValue("--gray-light");


    const poemLinks = poemList.map((poem) => (
        <div className="gray">
            <button className="button-as-link sidebar-link" onClick={() => { setCurrentPoem(poem); }}>{poem.title}</button>
        </div>
    ));

    return (
        <div className="row-to-column mt-3">
            <div className='sidebar'>
                <h2>Poems</h2>
                {poemLinks}
            </div>
            <div>
                <div className="d-flex ml-4 ornamental-border poetry-container">
                    <div className="poetry-header">
                        <div>
                            <CornerBorder width={cornerBorderSize} height={cornerBorderSize} backgroundColor={borderColor} />
                        </div>
                        <h3>{currentPoem.title}</h3>
                    </div>
                    <div className="poetry-content">
                        <p>{currentPoem.text}</p>
                    </div>
                    <div className="poetry-footer">
                        <CornerBorder width={cornerBorderSize} height={cornerBorderSize} backgroundColor={borderColor} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Poetry;