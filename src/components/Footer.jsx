import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-us">
          <h4>About Oriflame</h4>
          <p>Oriflame is a leading beauty company selling direct. We are present in more than 60 countries, of which we are the market leader in more than a half.</p>
        </div>

        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/nutrition">Nutrition</Link></li>
            <li><Link to="/daily-wellbeing">Daily Wellbeing</Link></li>
            <li><Link to="/weight-management">Weight Management</Link></li>
            <li><Link to="/beauty">Beauty</Link></li>
            <li><Link to="/immunity">Immunity</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><a href="/skincare">Skin Care</a></li>
            <li><a href="/moisturisers">Moisturisers</a></li>
            <li><a href="/eye-care">Eye care</a></li>
            <li><a href="/cleanse">Cleanse</a></li>
            <li><a href="/concerns">Concerns</a></li>
            <li><a href="/toner">Toner</a></li>
            <li><a href="/essences-mist">Essences and Mist</a></li>
            <li><a href="/mask">Mask</a></li>
          </ul>
        </div>

        <div className="footer-section customer-service">
          <h4>Customer Service</h4>
          <ul>
            <li><Link to="/shipping">Shipping & Returns</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Oriflame Clone. All Rights Reserved.</p>
        <p>This is a clone website created for practice purposes.</p>
      </div>
    </footer>
  );
};

export default Footer;
