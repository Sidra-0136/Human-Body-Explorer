import { Link } from "react-router-dom";
import "../styles/about.css";

function About() {
  return (
    <section className="about-page">
<Link to="/" className="back-btn">
  ← Back to Home
</Link>
      <div className="about-container">

        <h1>About Human Body Explorer</h1>

        <p className="about-description">
          Human Body Explorer is an interactive educational website developed
          using React to make learning human anatomy simple, engaging, and
          accessible. It is designed for students, beginners, and anyone
          interested in understanding the major organs of the human body.
          The website provides detailed information about each organ,
          including its function, location, main parts, common diseases,
          and interesting facts. With a clean interface, responsive design,
          and easy navigation, Human Body Explorer transforms complex
          anatomical concepts into an enjoyable learning experience.
        </p>

        <h2>Project Purpose</h2>

        <p className="purpose">
          The primary purpose of this project is to provide an easy-to-use
          educational platform that helps users explore and understand the
          structure and function of the human body's major organs. Instead
          of relying on lengthy textbooks, users can quickly access organized
          information through an interactive interface. This project also
          demonstrates the use of modern React concepts such as reusable
          components, React Router, dynamic rendering, and component-based
          architecture while building a practical educational application.
        </p>

        <div className="about-creator">
          <h2>Developed By</h2>
          <p>Sidra Tul Muntaha</p>
        </div>

      </div>

    </section>
  );
}

export default About;