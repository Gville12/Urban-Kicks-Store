
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="main-header">
      <div className="header-inner">
        <div className="header-logo">
          <Link to="/home" className="logo-link">
            <span className="logo-mark">UK</span>
            <span className="logo-text">
              Urban<span className="logo-text-bold">Kicks</span>
            </span>
          </Link>
        </div>

        <nav className="main-nav">
          <Link to="/home" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        <div className="header-cta">
          <button className="header-button">Sign in</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
