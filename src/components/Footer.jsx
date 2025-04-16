import React from 'react';
import './style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section brand">
        <h2>Shopverse</h2>
        <p>&copy; {new Date().getFullYear()} Shopverse. All rights reserved.</p>
      </div>

      <div className="footer-section links">
        <h4>Quick Links</h4>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>

      <div className="footer-section social">
        <h4>Follow Us</h4>
        <div className="icons">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
