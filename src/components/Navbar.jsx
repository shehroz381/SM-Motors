import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Navbar({ currentScreen, setCurrentScreen, isMenuOpen, setIsMenuOpen }) {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'Sell Car', path: '/sell' },
    { name: 'Financing', path: '/financing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Testimonials', path: '/testimonials' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => setCurrentScreen('home')}>
          <span className="logo-icon">🛞</span>
          <span className="logo-text">SM MOTOR</span>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={currentScreen === link.name.toLowerCase().replace(' ', '') ? 'active' : ''}
              onClick={() => setCurrentScreen(link.name.toLowerCase().replace(' ', ''))}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="nav-actions">
          <button className="account-btn" onClick={() => setCurrentScreen('signin')}>Sign In</button>
          <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;