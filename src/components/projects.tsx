import winterForestSrc from "../assets/winter_forest_animation.gif";
import parkFinderSrc from "../assets/park_finder.png";
import GithubLogo from "../assets/github-logo";

const logoSize = 20;
const logoColor = "var(--main-text)";

const ProjectContainer = (props: { name: string, description: string, url: string, image?: string; }) => {
    return (
        // use grid?
        <div className="project-row">
            <div>
                <img className="project-img" src={props.image} alt={props.name} />
            </div>
            <div>
                <a href={props.url}>
                    <div className="project-name">
                        <span style={{ fontSize: logoSize }}>{props.name} </span>
                        <GithubLogo width={logoSize} height={logoSize} backgroundColor={logoColor} />
                    </div>
                </a>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

// todo: on click, increase size of image with darkened bg

const Projects = () => {
    return (
        <div className="danger">
            This page is under construction.
        </div>
        // <div>
        //     <h4 className="page-header">Projects</h4>
        //     <div className="projects-container">
        //         <ProjectContainer
        //             name="Park Finder"
        //             description="Web application built in Python and React."
        //             url="https://github.com/biancaregulski/ParkFinder"
        //             image={parkFinderSrc} />
        //         <ProjectContainer
        //             name="Winter Forest"
        //             description="Android App written in Java."
        //             url="https://github.com/biancaregulski/ParkFinder"
        //             image={winterForestSrc} />
        //     </div>
        // </div>
    );
};

export default Projects;