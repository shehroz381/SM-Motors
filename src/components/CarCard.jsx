import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

function CarCard({ car, setSelectedCar }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    setSelectedCar(car);
    navigate('/carDetail');
  };
  
  return (
    <div className="car-card" onClick={handleClick}>
      <div className="car-image">
        <img src={car.image} alt={car.name} />
        <div className="car-overlay">
          <button className="view-details">View Details</button>
        </div>
      </div>
      <div className="car-info">
        <h3>{car.name}</h3>
        <p className="car-price">{car.price}</p>
        <div className="car-specs">
          <span>{car.year}</span>
          <span>{car.mileage}</span>
          <span>{car.transmission}</span>
        </div>
      </div>
    </div>
  );
}

export default CarCard;