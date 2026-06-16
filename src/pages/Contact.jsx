import React, { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function Contact() {
  // Form data store karne ke liye state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Loading aur message ke liye state
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Input change handle karne ka function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Form submit handle karne ka function
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Loading start
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      // Backend pe data bhejein
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        // Success case
        setMessage({
          text: '✅ ' + data.message,
          type: 'success'
        });
        
        // Form clear karein
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        // Error case
        setMessage({
          text: '❌ ' + (data.message || 'Something went wrong'),
          type: 'error'
        });
      }
    } catch (error) {
      // Network error
      setMessage({
        text: '❌ Network Error! Make sure backend server is running on port 5000',
        type: 'error'
      });
      console.error('Error:', error);
    } finally {
      // Loading off
      setLoading(false);
      
      // 5 second baad message hatayein
      setTimeout(() => {
        setMessage({ text: '', type: '' });
      }, 5000);
    }
  };

  return (
    <div className="contact-screen">
      <div className="contact-container">
        <h1>Get In Touch</h1>
        <p className="contact-subtitle">We're here to help you find your dream car</p>
        
        <div className="contact-content">
          {/* Contact Info Section */}
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h3>Visit Us</h3>
                <p>SM MOTOR MISSION CHOK NEAR MCB <br />BANK SAHIWAL</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h3>Call Us</h3>
                <p>+92 318-4459394<br />Mon-Sat: 9am - 8pm</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h3>Email Us</h3>
                <p>shehrozm101@gmail.com<br />sm-motor@gmail.com</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form Section */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input 
                type="text" 
                name="firstName"
                placeholder="First Name" 
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input 
                type="text" 
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            
            <input 
              type="email" 
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            
            <textarea 
              name="message"
              rows="5" 
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            
            {/* Message dikhane ke liye */}
            {message.text && (
              <div className={`form-message ${message.type}`}>
                {message.text}
              </div>
            )}
            
            <button 
              type="submit" 
              className="btn-primary"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;