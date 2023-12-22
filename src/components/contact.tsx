import GithubLogo from "../assets/github-logo";
import LinkedinLogo from "../assets/linkedin-logo";
import EmailLogo from "../assets/email-logo";
import ModeToggle from "./mode-toggle";
import { OrnamentalLine } from "./ornamental-line";
import { useLocation } from "react-router-dom";

const logoSize = 18;
const logoColor = "var(--text-logo)";

const Contact = () => {
    return (
        <div className="contact-buttons">
            <a href="mailto:biancaregulski@yahoo.com" target="_blank" rel="noreferrer" className="mode-toggle-button btn btn-md">
                <EmailLogo width={logoSize} height={logoSize} backgroundColor={logoColor} />
            </a>
            <a href="https://github.com/biancaregulski" target="_blank" rel="noreferrer" className="mode-toggle-button btn btn-md">
                <GithubLogo width={logoSize} height={logoSize} backgroundColor={logoColor} />
            </a>
            <a href="https://linkedin.com/in/bianca-regulski" target="_blank" rel="noreferrer" className="mode-toggle-button btn btn-md">
                <LinkedinLogo width={logoSize} height={logoSize} backgroundColor={logoColor} />
            </a>
            <div id="navbar-mode-toggle">
                <ModeToggle />
            </div>
        </div>
    );
};

export default Contact;