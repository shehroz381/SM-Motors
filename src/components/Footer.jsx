import React from 'react';
import '../styles/App.css';
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaApple, FaGooglePlay } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand-section">
          <h2>SM MOTOR</h2>
          <p className="footer-tagline">Experience automotive excellence. We provide premium luxury vehicles with unmatched service and dedication to our clients.</p>
          <div className="social-links">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google" className="social-icon google"><FcGoogle /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon twitter"><FaTwitter /></a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="social-icon telegram"><FaTelegramPlane /></a>
          </div>
          <div className="mobile-apps mt-4">
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', marginTop: '2rem' }}>Download Mobile Apps</h4>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="app-store-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#000', padding: '0.5rem 1rem', borderRadius: '5px', color: '#fff', textDecoration: 'none', border: '1px solid #333' }}>
                <FaGooglePlay size={20} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.6rem', lineHeight: '1', color: '#aaa' }}>GET IT ON</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 'bold', lineHeight: '1' }}>Google Play</span>
                </div>
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="app-store-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#000', padding: '0.5rem 1rem', borderRadius: '5px', color: '#fff', textDecoration: 'none', border: '1px solid #333' }}>
                <FaApple size={24} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.6rem', lineHeight: '1', color: '#aaa' }}>Download on the</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 'bold', lineHeight: '1' }}>App Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Cars By Make</h4>
          <a href="#">Toyota Cars for Sale</a>
          <a href="#">Suzuki Cars for Sale</a>
          <a href="#">Honda Cars for Sale</a>
          <a href="#">Daihatsu Cars for Sale</a>
          <a href="#">Mitsubishi Cars for Sale</a>
          <a href="#">Nissan Cars for Sale</a>
          <a href="#">Mercedes Cars for Sale</a>
          <a href="#">Hyundai Cars for Sale</a>
          <a href="#">BMW Cars for Sale</a>
        </div>
        
        <div className="footer-section">
          <h4>Cars By City</h4>
          <a href="#">Cars in Lahore</a>
          <a href="#">Cars in Karachi</a>
          <a href="#">Cars in Islamabad</a>
          <a href="#">Cars in Rawalpindi</a>
          <a href="#">Cars in Faisalabad</a>
          <a href="#">Cars in Peshawar</a>
          <a href="#">Cars in Multan</a>
          <a href="#">Cars in Gujranwala</a>
          <a href="#">Cars in Sialkot</a>
        </div>
        
        <div className="footer-section">
          <h4>Explore SM Motors</h4>
          <a href="#">Used Cars</a>
          <a href="#">Used Bikes</a>
          <a href="#">New Cars</a>
          <a href="#">Auto Parts & Accessories</a>
          <a href="#">Cool Rides</a>
          <a href="#">Forums</a>
          <a href="#">Autoshow</a>
          <a href="#">Sitemap</a>
        </div>
        
        <div className="footer-section">
          <h4>SM Motors.com</h4>
          <a href="#">About SM Motors.com</a>
          <a href="#">Our Products</a>
          <a href="#">Advertise With Us</a>
          <a href="#">How To Pay</a>
          <a href="#">FAQs</a>
          <a href="#">Refunds & Returns</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>
        
        <div className="footer-section">
          <h4>Sell On SM Motors</h4>
          <a href="#">Sell Your Car</a>
          <a href="#">Sell Your Bike</a>
          <a href="#">Sell Accessory</a>
        </div>
        
        <div className="footer-section">
          <h4>Cars by Category</h4>
          <a href="#">Jeep</a>
          <a href="#">Japanese Cars</a>
          <a href="#">Imported Cars</a>
          <a href="#">Automatic Cars</a>
          <a href="#">Low Priced Cars</a>
          <a href="#">4x4 Cars</a>
          <a href="#">660cc Cars</a>
          <a href="#">1000cc Cars</a>
        </div>
        
        <div className="footer-section">
          <h4>Cars by Body Type</h4>
          <a href="#">Sedan</a>
          <a href="#">Hatchback</a>
          <a href="#">SUV</a>
          <a href="#">Crossover</a>
          <a href="#">Mini Van</a>
          <a href="#">Compact SUV</a>
          <a href="#">MPV</a>
        </div>
        
        <div className="footer-section">
          <h4>Cars by Color</h4>
          <a href="#">White Cars</a>
          <a href="#">Black Cars</a>
          <a href="#">Silver Cars</a>
          <a href="#">Grey Cars</a>
          <a href="#">Blue Cars</a>
          <a href="#">Red Cars</a>
          <a href="#">Green Cars</a>
          <a href="#">Beige Cars</a>
        </div>
        
        <div className="footer-section">
          <h4>Cars by Province</h4>
          <a href="#">Cars in Punjab</a>
          <a href="#">Cars in Sindh</a>
          <a href="#">Cars in KPK</a>
          <a href="#">Cars in Balochistan</a>
          <a href="#">Cars in Azad Kashmir</a>
          <a href="#">Cars in Federally Administered</a>
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
            <span>SM Motors Near MCB Bank Mission Ckok Sahiwal</span>
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