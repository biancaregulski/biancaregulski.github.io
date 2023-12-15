import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dropdown = () => {
    return (
        <div className="dropdown" id="navbar-dropdown">
            <FontAwesomeIcon className="dropdown-icon" icon={faBars} />
            <div className="dropdown-content">
                <a href="/">About</a>
                <a href="/resume">Resume</a>
                <a href="/projects">Projects</a>
            </div>
        </div>
    );
};

export default Dropdown;