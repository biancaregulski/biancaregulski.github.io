import ProjectContainer from "./project-container";
import winterForestSrc from "../assets/winter_forest_animation.gif";

const Projects = () => {
    return(
        <div>
            <h1>Projects</h1>
            <ProjectContainer name="Park Finder" description="Web application built in Python and React." />
            <ProjectContainer name="Winter Forest" description="Android App written in Java." />
            <img className="project-img" src={winterForestSrc} alt="Winter Forest Animation"/>
        </div>
    )
}

export default Projects;