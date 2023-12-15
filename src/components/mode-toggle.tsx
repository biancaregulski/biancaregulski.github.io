import { useContext } from "react";
import { DarkModeContext } from "../context";
import { modeSymbol } from "../App";

const ModeToggle = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

    const toggleDarkMode = () => {
        document.body.classList.toggle("dark");
        setIsDarkMode(document.body.classList.contains("dark"));
    };

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