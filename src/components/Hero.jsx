import "../styles/hero.css";
import body from "../assets/images/human.png";

function Hero() {
    return(
<section id="home" className="hero">
    <div className="hero-content">
        <h1>Human Body Explorer</h1>
        <h2>Explore Human Anatomy Made Simple.</h2>
        <p>Welcome to Human Body Ewplorer, an interactice educational website designed to help you understand the major organs of the human body. Explore each organ to learn about its function, location, parts, common diseases, and fascinating facts-all in one place.</p>
<button
onClick={() => {
    document.getElementById("organs").scrollIntoView({
     behavior: "smooth",   
    });
}}
>
    Explore Organs
    </button>
    </div>
    <div className="hero-image"><img src={body} alt="Human Body" /></div>
</section>
    );
}

export default Hero;