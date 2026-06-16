import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

function CarDetail({ car }) {
  const navigate = useNavigate();
  
  if (!car) return null;

  return (
    <div className="car-detail-screen">
      <button className="back-button" onClick={() => navigate('/inventory')}>
        ← Back to Inventory
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
            <button className="btn-primary">Schedule Test Drive</button>
            <button className="btn-secondary">Contact Seller</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;