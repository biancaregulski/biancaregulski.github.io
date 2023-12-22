import profilePicture from "../assets/pfp2.jpg";
import { NavLink } from "react-router-dom";
import Contact from "./contact";
import { OrnamentalLine } from "./ornamental-line";

const logoSize = 18;
const logoColor = "var(--text-logo)";

const About = () => {
    return (
        <div>
            <div className="about-container">
                <div>
                    <p>I am a full-stack software engineer based in Boston, MA. I have three years of professional experience working on enterprise software in the data management and email validation sectors.</p>
                    <p>On this site, you can find my resume, several of my projects, and links to my web presence.</p>
                    {/* <p><NavLink to="/web-design">Here</NavLink> I write about guiding principles of web design.</p> */}
                    <p>Outside of the software space, I enjoy <a href="https://soundcloud.com/hazydaymusic" target="_blank" rel="noreferrer">music</a>, <NavLink to="/poetry" target="_blank" rel="noreferrer">poetry</NavLink>, drawing, and running. I deeply love reading, and my genres of choice are usually philosophy, neuroscience, and history.</p>
                    {/* <p>Friends would describe me as "esoteric" and a "lateral thinker."</p> */}
                    {/* <p><a href="/books">Here</a> are some of my favorite books.</p> */}
                    {/* <p><NavLink to="/poetry">Here</NavLink> is some poetry I've written.</p> */}

                    <p>If you would like to get in touch, feel free to contact me!</p>
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