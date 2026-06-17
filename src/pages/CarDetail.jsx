import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

function CarDetail({ car }) {
  const navigate = useNavigate();
  const [showSeller, setShowSeller] = useState(false);
  const [testDriveStatus, setTestDriveStatus] = useState('');
  
  if (!car) return null;

  const handleScheduleTestDrive = () => {
    setTestDriveStatus('Test drive request sent successfully! We will contact you shortly.');
    setTimeout(() => setTestDriveStatus(''), 5000);
  };

  return (
    <div className="car-detail-screen">
      <button className="back-button" onClick={() => navigate('/inventory')}>
        Back to Inventory
      </button>
      
      <div className="detail-container">
        <div className="detail-gallery">
          <img src={car.image} alt={car.name} className="main-image" />
        </div>
        
        <div className="detail-info">
          <h1>{car.name}</h1>
          <p className="detail-price">{car.price}</p>
          
          <div className="detail-specs">
            <div className="spec-item">
              <span className="spec-label">Year</span>
              <span className="spec-value">{car.year}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Mileage</span>
              <span className="spec-value">{car.mileage}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Type</span>
              <span className="spec-value">{car.type}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Transmission</span>
              <span className="spec-value">{car.transmission}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Color</span>
              <span className="spec-value">{car.color}</span>
            </div>
          </div>
          
          <div className="detail-description">
            <h3>Description</h3>
            <p>{car.description}</p>
          </div>
          
          <div className="detail-actions">
            <button className="btn-primary" onClick={handleScheduleTestDrive}>Schedule Test Drive</button>
            <button className="btn-secondary" onClick={() => setShowSeller(!showSeller)}>
              {showSeller ? 'Hide Seller Details' : 'Contact Seller'}
            </button>
          </div>

          {testDriveStatus && (
            <div className="form-message success fade-in visible" style={{ marginTop: '1.5rem' }}>
              {testDriveStatus}
            </div>
          )}

          {showSeller && (
            <div className="seller-details fade-in visible" style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: '15px', border: 'var(--glass-border)', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.2rem' }}>Seller Information</h3>
              <div style={{ color: 'var(--text-light)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <p><strong style={{ color: 'var(--primary)' }}>Name:</strong> {car.sellerName || 'SM Motors Premium Dealership'}</p>
                <p><strong style={{ color: 'var(--primary)' }}>Phone:</strong> {car.sellerPhone || '+92 318 4459394'}</p>
                <p><strong style={{ color: 'var(--primary)' }}>Email:</strong> {car.sellerEmail || 'smmotors@gmail.com'}</p>
                <p><strong style={{ color: 'var(--primary)' }}>Location:</strong> {car.sellerLocation || 'Mission Chok Near MCB Bank Sahiwal.'}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarDetail;