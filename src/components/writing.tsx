import { NavLink } from "react-router-dom";
import { OrnamentalLine } from "./ornamental-line";

const Writing = () => {
    return (
        <div>
            <h2 className="page-header">Writings</h2>
            <div className="essay-header">
                <NavLink to="/web-design">Guiding Principles of Web Design</NavLink>
                {/* Web Design: Subjectivity and Nostalgia (warcraft 3!) */}
                {/* Anatomy of this Website */}
                {/* How Medieval Architecture Shines Light on the Essence of Design */}
                <span className="essay-date">December 17th, 2023</span>
            </div>
            <OrnamentalLine />
            <div className="text-center">
                <NavLink to="/poetry">Selected Poems</NavLink>
            </div>
        </div>
    );
};

export default Writing;