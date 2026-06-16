import React from 'react';
import '../styles/App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>SM MOTOR</h3>
          <p>Your trusted partner in finding the perfect luxury vehicle.</p>
          <div className="social-links">
            <span>📱</span>
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#" onClick={(e) => e.preventDefault()}>Home</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Inventory</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Sell Car</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Financing</a>
        </div>
        
        <div className="footer-section">
          <h4>Support</h4>
          <a href="#" onClick={(e) => e.preventDefault()}>FAQ</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Shipping</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Returns</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
        </div>
        
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe for exclusive offers</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>→</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 SM MOTOR. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;