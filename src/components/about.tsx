import GithubLogo from "../assets/github-logo";
import LinkedinLogo from "../assets/linkedin-logo";
import EmailLogo from "../assets/email-logo";


const logoSize = 18;
const logoColor = "gray";

const About = () => {
    const lineSymbol = '\u2b29';
    return (
        <>
            <h1>About</h1>
            <p>I am a full-stack software engineer living in Boston, MA.</p>
            <p>On this site, you can find my resume, several of my projects, and links to my web presence.</p>
            {/* <p>Outside of software, I enjoy drawing, painting, and <a href="https://soundcloud.com/hazydaymusic">making music</a>. */}
            <p><a href="https://soundcloud.com/hazydaymusic">Here</a> is some music I've made.</p>
            <p><a href="/books">Here</a> are some of my favorite books.</p>
            <p><a href="/poetry">Here</a> is some poetry I've written.</p>
            
            <div className='ornamental-line'>
                <span>
                    {lineSymbol}
                </span>
            </div>

            <h5 className="text-secondary">Links:</h5>
            <p>If you would like to get in touch, feel free to contact me!</p>
            <div className='link-container'>
                <div>
                    <EmailLogo width={logoSize} height={logoSize} backgroundColor={logoColor}/>
                    <a href="mailto:biancaregulski@yahoo.com">Email</a>
                </div>
                <div>
                    <GithubLogo width={logoSize} height={logoSize} backgroundColor={logoColor}/>
                    <a href="https://github.com/biancaregulski/">Github</a>
                </div>
                <div>
                    <LinkedinLogo width={logoSize} height={logoSize} backgroundColor={logoColor}/>
                    <a href="https://linkedin.com/in/bianca-regulski">LinkedIn</a>
                </div>
            </div>
        </>
    );
}

export default About;