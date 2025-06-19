import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <p>Current Month Offers - Know the best deals of the month and avail the benefits</p>
      </div>

      <nav className="navbar">
        <div className="left-section">
          <button className="menu-icon">☰</button>
          <div className="logo">ORIFLAME <span className="country"></span></div>
          <input
            type="text"
            placeholder="Search 60+ brands, 1000+ beauty and nutrition products"
            className="search-bar"
          />
        </div>

        <div className="right-section">
          <Link to="/join" className="join-btn">JOIN US</Link>
          <Link to="/signin" className="signin-btn">SIGN IN</Link>
          <Link to="/cart" className="cart-btn">🛒</Link>
        </div>
      </nav>

      <div className="bottom-nav">
        <ul className="nav-links">
          <li><Link to="/">CATALOGUE</Link></li>
          <li><Link to="/nutrition">NUTRITION</Link></li>
          <li><Link to="/skincare">SKINCARE</Link></li>
          <li><Link to="/makeup">MAKEUP</Link></li>
          <li><Link to="/fragrance">FRAGRANCE</Link></li>
          <li><Link to="/body">BATH & BODY</Link></li>
          <li><Link to="/hair">HAIR</Link></li>
          <li><Link to="/men">MEN</Link></li>
          <li><Link to="/kids">KIDS & BABY</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
