import GithubLogo from "../assets/github-logo";
import LinkedinLogo from "../assets/linkedin-logo";
import EmailLogo from "../assets/email-logo";
import ModeToggle from "./mode-toggle";
import { OrnamentalLine } from "./ornamental-line";
import { useLocation } from "react-router-dom";

const logoSize = 18;
const logoColor = "var(--text-logo)";

const ContactContainer = () => {
    function headerText() {
        return (
            <>
                {/* <h4 className="page-header">Links</h4> */}
                <p>If you would like to get in touch, feel free to contact me!</p>
            </>

        );
    };

    const location = useLocation();
    // only show additional text on default (about) page
    const additionalText = location.pathname === "/";

    return (
        <div>
            <OrnamentalLine />
            {additionalText ? headerText() : null}
            <div className='contact-end'>
                <div className='link-container'>
                    <div>
                        <EmailLogo width={logoSize} height={logoSize} backgroundColor={logoColor} />
                        <a href="mailto:biancaregulski@yahoo.com">Email</a>
                    </div>
                    <div>
                        <GithubLogo width={logoSize} height={logoSize} backgroundColor={logoColor} />
                        <a href="https://github.com/biancaregulski/">Github</a>
                    </div>
                    <div>
                        <LinkedinLogo width={logoSize} height={logoSize} backgroundColor={logoColor} />
                        <a href="https://linkedin.com/in/bianca-regulski">LinkedIn</a>
                    </div>
                </div>
                <div id="contact-mode-toggle">
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
};

export default ContactContainer;