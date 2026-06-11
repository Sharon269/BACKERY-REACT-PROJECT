import "./styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <nav className="nav-links">
          <Link to="/">Home</Link>

          <div className="dropdown">
            <span className="dropdown-title">Pages</span>

            <div className="dropdown-menu">
              <Link to="/about-us">ABOUT US</Link>
              <Link to="/landing">LANDING</Link>
              <Link to="/bakery-team">BAKERY TEAM</Link>
              <Link to="/workshops">WORKSHOPS PAGE</Link>
            </div>
          </div>

          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="logo">
          <span className="backhero"></span>
          <span className="logo-text">Cake Boss</span>
        </div>

        <div className="cart">
          <input
            type="text"
            placeholder="Search cakes..."
            className="search-input"
          />
          <span className="cart-icon">🛒</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;