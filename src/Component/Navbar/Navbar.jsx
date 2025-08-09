import './Navbar.css'
import { useState } from 'react';
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="hero-navbar">
      <div className="hero-logo">MySite</div>
      <button
        className="hero-menu-icon"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>
      <ul className={`hero-nav-links ${isOpen ? "open" : ""}`}>
      <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={handleLinkClick}
          activeClass="open"
          className="list-btn"
        >
          <li>Home</li>
        </Link>
        <Link
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={handleLinkClick}
          activeClass="active"
          className="list-btn"
        >
          <li>Features</li>
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={handleLinkClick}
          activeClass="active"
          className="list-btn"
        >
          <li>About</li>
        </Link>
        </ul>
    </nav>
  );
}

export default Navbar;
