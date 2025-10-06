import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">WanderKim ᨒ↟</h2>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/vlogs">VIDEOS</Link></li>
        <li><Link to="/blogs">BLOGS</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
       <li><Link to="/booking">BOOKING</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
