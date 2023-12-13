import GithubLogo from "../assets/github-logo";
import LinkedinLogo from "../assets/linkedin-logo";
import EmailLogo from "../assets/email-logo";
import profilePicture from "../assets/pfp2.jpg";
import { NavLink } from "react-router-dom";
import { OrnamentalLine } from "./ornamental_line";

const logoSize = 18;
const logoColor = "var(--text-logo)";

const About = () => {
    return (
        <div>
            <div className="about-container">
                <div>
                    <h4 className="page-header">About</h4>
                    <p>I am a full-stack software engineer based in Boston, MA.</p>
                    <p>On this site, you can find my resume, several of my projects, and links to my web presence.</p>
                    <p><a href="https://soundcloud.com/hazydaymusic">Here</a> is some music I've made.</p>
                    {/* <p><a href="/books">Here</a> are some of my favorite books.</p> */}
                    <p><NavLink to="/poetry">Here</NavLink> is some poetry I've written.</p>

                    {/* <h3>Writings</h3>
                    <p><a href="#">Principles of Web Design</a></p>
                    <p><a href="#">Why I Like Poetry</a></p> */}

                </div>
                <div className='img-div'>
                    <img src={profilePicture} alt="Profile photograph" />
                </div>

            </div>
            <div>
                <OrnamentalLine />

                <h4 className="page-header">Links</h4>
                <p>If you would like to get in touch, feel free to contact me!</p>
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
            </div>
        </div>
    );
};

export default About;