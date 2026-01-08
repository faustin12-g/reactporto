import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsSun, BsMoon } from 'react-icons/bs';
import './Navigation.css';

const Navigation = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      className="navigation"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <span className="logo-mark">◎</span>
          <span className="logo-text">Faustin</span>
        </Link>

        {/* Nav Links */}
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              <span className="nav-link-text">{item.name}</span>
              <span className="nav-link-underline"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/contact" className="nav-cta">
          Start Project
        </Link>

        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <BsSun size={20} /> : <BsMoon size={20} />}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
