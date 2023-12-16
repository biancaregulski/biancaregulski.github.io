import { NavLink } from "react-router-dom";
import { OrnamentalLine } from "./ornamental-line";

const Writing = () => {
    return(
        <div>
        <NavLink to="/poetry">Principles of Web Design</NavLink>
        <NavLink to="/poetry">Why I Write Poetry</NavLink>
        <OrnamentalLine />
        <NavLink to="/poetry">Selected Poems</NavLink>
        </div>
    )
}

export default Writing;