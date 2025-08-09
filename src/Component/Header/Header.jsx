import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">MySite</div>
      <button
        className="menu-icon"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Toggle Menu"
      >
       
        <span>&#9776;</span>
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
      <Link to='/attend'> 
      <li>Attendance</li>
      </Link>
      <Link to='/marks'>
        <li>Marks</li>
      </Link>
      </ul>
    </nav>
  );
}

export default Header;
