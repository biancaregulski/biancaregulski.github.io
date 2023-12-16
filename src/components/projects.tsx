import winterForestSrc from "../assets/winter_forest_animation.gif";
import winterForestGameplaySrc from "../assets/winter_forest_gameplay.gif";
import parkFinderSrc from "../assets/park_finder_zoomed.png";
import GithubLogo from "../assets/github-logo";

const logoSize = 20;
const logoColor = "var(--main-text)";

const ProjectContainer = (props: { name: string, description: string, url: string; }) => {
    return (
        <div>
            <a href={props.url}>
                <div className="project-name">
                    <span style={{ fontSize: logoSize }}>{props.name} </span>
                    <GithubLogo width={logoSize} height={logoSize} backgroundColor={logoColor} />
                </div>
            </a>
            <p>{props.description}</p>
        </div>
    );
};

// todo: on click, increase size of image with darkened bg

const Projects = () => {
    return (
        <>
            <div className="danger">
                This page is under construction.
            </div>
            <div>
                <h4 className="page-header">Projects</h4>
                <div className="projects-container">
                    <div className="project-row">
                        <div className="w-50">
                            <img className="project-img w-100" src={parkFinderSrc} alt={"Park Finder Screenshot"} />
                        </div>
                        <ProjectContainer
                            name="Park Finder"
                            description="Web application built in Python and React."
                            url="https://github.com/biancaregulski/ParkFinder" />
                    </div>
                    <div className="project-row">
                        <div className="w-50">
                            <img className="project-img w-100" src={parkFinderSrc} alt={"Park Finder Screenshot"} />
                        </div>
                        <ProjectContainer
                            name="biancaregulski.com"
                            description="Personal website written in React."
                            url="https://github.com/biancaregulski/biancaregulski.github.io" />
                    </div>
                    <div className="project-row">
                        <div className="w-50 double-image-container">
                            <img className="project-img w-50" src={winterForestSrc} alt={"Winter Forest Animations"} />
                            <img className="project-img w-50" src={winterForestGameplaySrc} alt={"Winter Forest Gameplay"} />
                        </div>
                        <ProjectContainer
                            name="Winter Forest"
                            description="Android App written in Java."
                            url="https://github.com/biancaregulski/ParkFinder" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;