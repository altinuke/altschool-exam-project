import { NavLink } from "react-router-dom";
import logo from "../images/logo.jpg";
import "../styles.css";
const Navbar = () => {

    

  return (
    <header className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <NavLink  to="/"  style={({ isActive }) => ({
    color: isActive ? '#964B00' : '#3f51b5', 
  })} className="nav-item">
          Home
        </NavLink>
        <NavLink to="about" style={({ isActive }) => ({
    color: isActive ? '#964B00' : '#3f51b5', 
  })} className="nav-item">
          About
        </NavLink>
        <NavLink to="portfolio" style={({ isActive }) => ({
    color: isActive ? '#964B00' : '#3f51b5', 
  })} className="nav-item">
          Portfolio
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
