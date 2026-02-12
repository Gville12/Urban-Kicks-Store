
import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <p className="footer-logo">UrbanKicks</p>
          <p className="footer-tagline">
            Curated sneakers for everyday city life. Limited drops, timeless silhouettes.
          </p>
        </div>

        <div className="footer-menus">
          <div className="footer-column">
            <p className="footer-heading">Explore</p>
            <a href="/home" className="footer-link">
              Home
            </a>
            <a href="/about" className="footer-link">
              About
            </a>
            <a href="/contact" className="footer-link">
              Contact
            </a>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Project</p>
            <a
              href="https://github.com/tu-usuario/urban-kicks-store"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              GitHub repository
            </a>
            <a
              href="https://www.figma.com/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Figma inspiration
            </a>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Follow</p>
            <div className="social-icons">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                IG
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                X
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                GH
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-legal">
          © 2023 UrbanKicks. All rights reserved.{" "}
          <a href="#privacy" className="footer-legal-link">
            Privacy Policy & Cookies
          </a>{" "}
          |{" "}
          <a href="#terms" className="footer-legal-link">
            Terms of Sale
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
