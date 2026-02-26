import "./Footer.css";
import { Link } from "react-router-dom";

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
            <a href="/home" className="footer-link">Home</a>
            <a href="/about" className="footer-link">About</a>
            <a href="/contact" className="footer-link">Contact</a>
            <Link to="/rss" className="footer-link">RSS</Link>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Project</p>
            <a
              href="https://github.com/Gville12/Urban-Kicks-Store"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              GitHub repository
            </a>
            <a
              href="https://www.figma.com/es-es/comunidad/file/1373911621515633358/shoe-store"
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
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                >
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm4.25 5.5a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm6-1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="X"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                >
                  <path d="M18.244 2H21l-6.56 7.5L22.5 22h-6.94l-5.44-7.16L3.88 22H1.12l7.02-8.02L1.5 2h7.1l4.92 6.54L18.244 2z" />
                </svg>
              </a>

              <a
                href="https://github.com/Gville12"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.424 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.018 10.018 0 0022 12.017C22 6.484 17.523 2 12 2z" />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-legal">
          © 2023 UrbanKicks. All rights reserved.{" "}
          <Link to="/privacy" className="footer-legal-link">
            Privacy Policy & Cookies
          </Link>

          |

          <Link to="/terms" className="footer-legal-link">
            Terms of Sale
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;