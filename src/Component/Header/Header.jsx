import { NavLink } from "react-router-dom";
import "./Header.css";
import { IoLogOutOutline } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyWebsite</div>
      <div className="tab-container">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "link-tab active" : "link-tab"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "link-tab active" : "link-tab"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "link-tab active" : "link-tab"
          }
        >
          <IoLogOutOutline />
        </NavLink>
         <NavLink
          to="/marks"
          className={({ isActive }) =>
            isActive ? "link-tab active" : "link-tab"
          }
        >
          <IoLogOutOutline />
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
