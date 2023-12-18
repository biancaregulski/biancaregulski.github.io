import GithubLogo from "../assets/github-logo";

const logoSize = 20;
const logoColor = "var(--main-text)";

interface ProjectContainerProps {
    name: string;
    description: string;
    url: string;
    image1: string;
    image2?: string;
}

const ProjectContainer = ({ name, description, url, image1, image2 }: ProjectContainerProps) => {
    return (
        <div className="project-row">
            <div className="w-50 project-img-container double-image-container">
                {image2 ?
                    <div className="project-img-container double-image-container">
                        <img className="project-img w-50" src={image1} alt={"Winter Forest Animations"} />
                        <img className="project-img w-50" src={image2} alt={"Winter Forest Gameplay"} />
                    </div>
                    :
                    <div className="project-img-container">
                        <img className="project-img w-100" src={image1} alt={"Park Finder Screenshot"} />
                    </div>
                }
            </div>
            <div>
                <a href={url}>
                    <div className="project-name">
                        <span style={{ fontSize: logoSize }}>{name} </span>
                        <GithubLogo width={logoSize} height={logoSize} backgroundColor={logoColor} />
                    </div>
                </a>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectContainer;