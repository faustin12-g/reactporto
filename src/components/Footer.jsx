import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>NSHIMIYIMANA</h3>
            <p>Designer & Developer crafting beautiful digital experiences.</p>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li><a href="https://www.linkedin.com/in/faustin-nshimiyimana-928a6237b/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://x.com/Nshimiy58198795" target="_blank" rel="noreferrer">X</a></li>
              <li><a href="https://github.com/faustin12-g" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://www.facebook.com/fau.stin.743442" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/peacef123/" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} NSHIMIYIMANA Faustin. All rights reserved.</p>
          <p>Designed & Developed with passion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
