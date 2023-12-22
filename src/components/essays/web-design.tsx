import { ErrorIcon } from "../../assets/error-icon";
import { SuccessIcon } from "../../assets/success-icon";
import trailBlazesSrc from "../../assets/trail-blazes.jpeg";
import mobileSymbolsSrc from "../../assets/mobile-symbols.png";
import { OrnamentalLine } from "../ornamental-line";


const WebDesignEssay = () => {
    return (
        <div className="essay-container">
            <div className="essay-header">
                <h3>Guiding Principles of Web Design</h3>
                <span className="essay-date">December 17th, 2023</span>
            </div>

            <p>
                For many UI designers and full-stack engineers, composition of websites is largely a matter of intuition. While there is nothing untenable about using intuition to drive aesthetic choices...
            </p>

            <p>
                A useful allegory would be a well-marked trail. When a hiking area has multiple loops, each will generally be marked with painted lines on trees, rocks, or other clearly visible surfaces.


            </p>
            <p>
                While a software engineer does not need to deal with such volatile natural elements as wind and rain, there are technoligcal hindrances to prepare for such as timeouts or low latency.
            </p>

            <ol>
                <a href="#navigation"><li>Navigation</li></a>
                <a href="#visual-hierachy"><li>Visual Hierarchy</li></a>
                <a href="#clarity"><li>Clarity</li></a>
                <a><li>Cognitive Load</li></a>
                <a href="#coherent-symbolism"><li>Coherent Symbolism</li></a>
                <a><li>Compontentization</li></a>
                <a><li>Standardization: forms, error states, ui comopnent libraries</li></a>
            </ol>

            <h5 id="navigation">Navigation</h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h5 id="visual-hierarchy">Visual Hierarchy</h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div style={{ backgroundColor: '#2e0e9d', width: "400px", height: "200px" }}>
                <div className="w-100" style={{ backgroundColor: '#5937cf', height: "20px" }}></div>
                <div className="d-flex justify-content-center" style={{ gap: "50px", margin: "30px" }}>
                    <div style={{ backgroundColor: '#5937cf', width: "100px", height: "100px" }}>

                    </div>

                    <div style={{ backgroundColor: '#5937cf', width: "100px", height: "100px" }}>

                    </div>

                </div>
            </div>

            <h5 id="clarity">Clarity</h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h5 id="coherent-symbolism">Coherent Symbolism</h5>
            <p>
                When selecting colors and icons to represent content on a website, a web designer is communicating with symbolic language. With any language come mutual restraints for the purpose of reciprocal comprehension.

                For instance, let's view three different error banners with literally identical text:
            </p >

            <div className="banner" style={{ backgroundColor: "red" }}>
                <div className="banner-img"><ErrorIcon /></div>
                <div>An error occured while trying to contact the server. Please check your internet connection</div>
            </div>

            <div className="banner" style={{ backgroundColor: "orange" }}>
                <div className="banner-img"><ErrorIcon /></div>
                <div>An error occured while trying to contact the server. Please check your internet connection</div>
            </div>

            <p>Why is the red banner better? It's debatable why red is used to symbolize danger<a href="#footnote1"><sup>1</sup></a>, but in the interest of practicality, it's helpful to assume that red signs generally mean danger, especially when the signs are meant to evoke a quick reaction.</p>

            <p>
                When you give symbols to indicate meaning, the user is not going to pay as much to unsymbolized content. This creates more cognitive load for the user, who is trying to assimilate expectations and results, wondering whether the message is saying what he thinks it's saying rather than proceeding with diagnosing the error itself.
            </p>
            <p>Similarly, symbols should generally follow custom, especially on mobile apps when there is reduced space for text and menus frequently need to communicate exclusively with symbols. The likelihood of pressing the wrong button should be as low as realistically possible, which consistent use of symbols helps with. Design should fit currently existing design. This refers to consistency within an application and within a front-end engineering zeitgeist.</p>
            <div className="essay-img-container">
                <img style={{ width: "50%" }} src={mobileSymbolsSrc} alt="Common symbols used in mobile apps" />
            </div>
            <p>Does this mean there's no room for creativity? Sure we have a common language, but Shakespeare invented his own words, didn't he?</p>

            <div className="banner" style={{ backgroundColor: "palevioletred" }}>
                <div className="banner-img"><ErrorIcon /></div>
                <div>An error occured while trying to contact the server. Please check your internet connection.</div>
            </div>

            <p>Certainly there is room for creativity that doesn't diminish intelligiblity. For instance, a font or stylizied design for an icon is able to incorporate uniqueness without creating ambiguity. But there is a time and place for novelty. Generally, austere function should be prioritized for things that ... While imaginative beauty takes precedence when pure function is not the goal. API docs have different use cases that the webpage for an art musuem. Let's elaborate more on this.</p>

            <h5 id="purpose">Purpose</h5>


            <OrnamentalLine />
            <div className="footnotes">
                <div id='footnote1'>
                    1. For one reason or another, we associate red signs with danger. Why are danger signs red? A physicist might say that red light scatters the least of all colors visible to humans because it has the longest wavelength, and thus can resist wind and rain. A biologist may answer in terms of red contrasting heavily with green, which is frequently found in nature, and its mental connotation with fire and blood. A red-green colorblind person may resist and say that red and green are too similar and create confusion for the ~4% of people with the condition. In short, these colors are probably mostly not arbitrary, but maybe somewhat suboptimal, but changing well-known symbols like these is never simple.
                </div>
            </div>
        </div >
    );
};

// todo: list of contents of each principle that can be clicked on

export default WebDesignEssay;