import winterForestSrc from "../assets/winter_forest_animation.gif";
import winterForestGameplaySrc from "../assets/winter_forest_gameplay.gif";
import parkFinderSrc from "../assets/park_finder_zoomed.png";
import Project from "./project";
import { UnderConstruction } from "./under-construction";

// todo: on click, increase size of image with darkened bg

const ProjectContainer = () => {
    return (

        <UnderConstruction />
        // <>
        //     <div>
        //         <h4 className="page-header">Projects</h4>
        //         <div className="projects-container">

        //             <Project
        //                 name="Park Finder"
        //                 description="Web application built in Python and React."
        //                 url="https://github.com/biancaregulski/ParkFinder"
        //                 image1={parkFinderSrc} />

        //             <Project
        //                 name="biancaregulski.com"
        //                 description="Personal website written in React."
        //                 url="https://github.com/biancaregulski/biancaregulski.github.io"
        //                 image1={parkFinderSrc} />

        //             <Project
        //                 name="Winter Forest"
        //                 description="Android App written in Java."
        //                 url="https://github.com/biancaregulski/ParkFinder"
        //                 image1={winterForestSrc}
        //                 image2={winterForestGameplaySrc} />


        //         </div>
        //     </div>
        // </>
    );
};

export default ProjectContainer;