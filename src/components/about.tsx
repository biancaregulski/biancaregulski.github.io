import GithubLogo from "../assets/github-logo";
import LinkedinLogo from "../assets/linkedin-logo";
import EmailLogo from "../assets/email-logo";
import profilePicture from "../assets/pfp2.jpg";
import { NavLink } from "react-router-dom";
import { OrnamentalLine } from "./ornamental-line";
import ContactContainer from "./contact-container";

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
            <OrnamentalLine />
            <ContactContainer />
        </div>
    );
};

export default About;