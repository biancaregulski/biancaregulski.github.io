import { ReactElement } from "react";
import GithubLogo from "../assets/github-logo";

const logoSize = 20;
const logoColor = "var(--main-text)";

interface ProjectContainerProps {
    name: string;
    description: ReactElement;
    url: string;
    skills: Array<String>;
    image1: string;
    image2?: string;
}

const ProjectContainer = ({ name, description, url, skills, image1, image2 }: ProjectContainerProps) => {
    return (
        <div className="project-row row-to-column">
            <div className="mb-2">
                {image2 ?
                    <div className="double-image-container">
                        <a href={url} target="_blank" rel="noreferrer" className="project-img-container">
                            <img className="project-img" src={image1} alt={"Winter Forest Animations"} />
                        </a>
                        <a href={url} target="_blank" rel="noreferrer" className="project-img-container">
                            <img className="project-img" src={image2} alt={"Winter Forest Gameplay"} />
                        </a>
                    </div>
                    :
                    <a href={url} target="_blank" rel="noreferrer" className="project-img-container">
                        <img className="project-img" src={image1} alt={"Park Finder Screenshot"} />
                    </a>
                }

            </div>
            <div>
                <a href={url} target="_blank" rel="noreferrer">
                    <div className="project-name">
                        <span style={{ fontSize: logoSize }}>{name} </span>
                        <GithubLogo width={logoSize} height={logoSize} backgroundColor={logoColor} />
                    </div>
                </a>
                <div className='project-description'>
                    {description}
                    <div className='project-skills'>
                        {skills.map((skill) =>
                            <span>{skill}</span>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectContainer;