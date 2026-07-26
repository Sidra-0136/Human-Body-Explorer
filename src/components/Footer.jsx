import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
    return(
        <footer className="footer">
            <h2>Human Body Explorer</h2>
            <p>Explore Human Anatomy Made Simple</p>
            <h3>Contact</h3>
            <div className="footer-links">
            <a
  href="https://github.com/Sidra-0136"
  target="_blank"
  rel="noopener noreferrer"
>
    <FaGithub />
  GitHub
</a>
            <a
  href="https://www.linkedin.com/in/sidra-ali-35853a421/"
  target="_blank"
  rel="noopener noreferrer"
> 
<FaLinkedin />
  LinkedIn
</a>
                <a href="mailto:muntaha.0136@gmail.com">
                    <FaEnvelope />
  Email
</a>
            </div>
                <p className="copyright">© 2026 Human Body Explorer</p>
<p className="creator">Created with ❤️ by Sidra Tul Muntaha</p>
        </footer>
    );
}

export default Footer;