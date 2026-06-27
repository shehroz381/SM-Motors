import React from 'react';
import '../styles/App.css';
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand-section">
          <h2>SM MOTOR</h2>
          <p className="footer-tagline">Experience automotive excellence. We provide premium luxury vehicles with unmatched service and dedication to our clients.</p>
          <div className="social-links">
            <a href="#" aria-label="Google" className="social-icon google"><FcGoogle /></a>
            <a href="#" aria-label="Facebook" className="social-icon facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="social-icon twitter"><FaTwitter /></a>
            <a href="#" aria-label="Telegram" className="social-icon telegram"><FaTelegramPlane /></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/inventory">Browse Inventory</a>
          <a href="/sell">Sell Your Car</a>
          <a href="/financing">Financing Options</a>
          <a href="/about">About Us</a>
          <a href="/testimonials">Testimonials</a>
        </div>
        
        <div className="footer-section contact-section">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Mission Chok Near MCB Bank, Sahiwal</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span>+92 318 4459394</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>smmotors@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaClock className="contact-icon" />
            <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
          </div>
        </div>
        
        <div className="footer-section newsletter-section">
          <h4>Newsletter</h4>
          <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} SM Motors Premium Dealership. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;