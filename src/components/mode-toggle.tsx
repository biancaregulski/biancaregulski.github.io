import { useDarkMode } from "../ThemeContext";
import { modeSymbol } from "../App";

const ModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <ul className="ml-auto navbar-nav">
            <li>
                <button type='button' onClick={toggleDarkMode} className="btn btn-md mode-toggle-button">
                    {modeSymbol(isDarkMode)}
                </button>
            </li>
        </ul>
    );
};

export default ModeToggle;