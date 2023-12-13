interface ProjectContainerProps {
    name: string,
    description: string;
}

const ProjectContainer = ({name, description}: ProjectContainerProps) => {
    return (
        <div>
            <div>
                <h3 className="text-secondary">{name}</h3>
                <p>{description}</p>
            </div>
            <hr/>
        </div>
    )
}

export default ProjectContainer;