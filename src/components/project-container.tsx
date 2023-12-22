import winterForestSrc from "../assets/winter_forest_animation.gif";
import winterForestGameplaySrc from "../assets/winter_forest_gameplay.gif";
import parkFinderSrc from "../assets/park_finder_zoomed.png";
import Project from "./project";

const ProjectContainer = () => {
    const parkFinderDescription = (
        <ul>
            <li>Web app that calculates the closest parks between two addresses using Google Maps API.</li>
            <li>Calculates parks using the midpoint of the fastest direction, then displays the coordinates on the map with interactive pins.</li>
            <li>Processes multiple travel types: walking, biking, driving, & public transit.</li>
        </ul>
    );

    const winterForestDescription = (
        <>
            <div className="game-description">
                <i>A snowflake attempts to move through a path which is obstructed by objects trees and stones. The player earns points by dragging the objects to another part of the path, making way for the snowflakes to pass, but must be sure to refrain from impeding other roaming snowflakes in the process.</i>
            </div>
            <ul>
                <li>Mobile game created with Android Canvas based around drag-and-drop and collision detection.</li>
                <li>Includes custom animations, sound effects, and <a href="https://soundcloud.com/hazydaymusic/evergreen" target="_blank" rel="noreferrer">background music</a>.</li>
            </ul>
        </>
    );

    return (
        <>
            <div>
                <h4 className="page-header">Projects</h4>
                <div className="projects-container">

                    <Project
                        name="Park Finder"
                        description={parkFinderDescription}
                        url="https://github.com/biancaregulski/ParkFinder"
                        skills={["Python", "Flask", "React", "TypeScript"]}
                        image1={parkFinderSrc} />

                    <Project
                        name="Winter Forest"
                        description={winterForestDescription}
                        url="https://github.com/biancaregulski/ParkFinder"
                        skills={["Java", "Android"]}
                        image1={winterForestSrc}
                        image2={winterForestGameplaySrc} />
                </div>
            </div>
        </>
    );
};

export default ProjectContainer;