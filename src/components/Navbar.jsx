import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-bracket">{"<"}</span>
          <span className="logo-text">Ahmad Ayaz</span>
          <span className="logo-bracket">{"/>"}</span>
        </Link>

        <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="link-number">0{index + 1}.</span>
              <span className="link-text">{link.label}</span>
            </Link>
          ))}
          
          <a 
            href="https://drive.google.com/file/d/1X5pus4wrQclgF4uo4FyhyMmDO1m32dMH/view?pli=1" 
            className="nav-btn"
            download
          >
            Resume
          </a>
        </div>

        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}