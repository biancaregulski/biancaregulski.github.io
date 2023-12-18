import profilePicture from "../assets/pfp2.jpg";
import { NavLink } from "react-router-dom";
import ContactContainer from "./contact-container";

const logoSize = 18;
const logoColor = "var(--text-logo)";

const About = () => {
    return (
        <div>
            <div className="about-container">
                <div>
                    <p>I am a full-stack software engineer based in Boston, MA.</p>
                    <p>On this site, you can find my resume, several of my projects, and links to my web presence.</p>
                    {/* <p><NavLink to="/web-design">Here</NavLink> I write about guiding principles of web design.</p> */}
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
        </div>
    );
};

export default About;