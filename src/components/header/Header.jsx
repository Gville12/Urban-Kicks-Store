import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import "./Header.css";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {

    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());

    if (newMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="main-header">
      <div className="header-inner">
        <div className="header-logo">
          <Link to="/home" className="logo-link">
            <Logo width={40} height={40} color={isDarkMode ? "#a78bfa" : "#7c3aed"} />
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
          <Link to="/rss" className="nav-link">
            RSS
          </Link>
        </nav>

        <div className="header-cta">
          <button className="dark-mode-toggle" onClick={toggleDarkMode} title="Toggle Dark/Light Mode" aria-label="Toggle Dark Mode" style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--text-color)", display: "flex", alignItems: "center", justifyContent: "center", padding: "0.5rem", marginRight: "0.5rem", borderRadius: "8px", transition: "background-color 0.2s" }}>
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
          <button className="header-button">Sign in</button>
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-dropdown">
          <nav className="mobile-nav">
            <Link to="/home" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link>
            <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>About</Link>
            <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact</Link>
            <Link to="/rss" className="mobile-nav-link" onClick={closeMobileMenu}>RSS</Link>
            <button className="mobile-header-button" onClick={closeMobileMenu}>Sign in</button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
