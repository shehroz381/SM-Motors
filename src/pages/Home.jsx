import React from 'react';
import { useNavigate } from 'react-router-dom';
import CarCard from '../components/CarCard';
import CarsByMake from '../components/CarsByMake';
import UsedCarAdvice from '../components/UsedCarAdvice';
import AutoStore from '../components/AutoStore';
import AnimatedPage from '../components/AnimatedPage';
import '../styles/App.css';

function Home({ cars }) {
  const navigate = useNavigate();
  
  return (
    <AnimatedPage>
      <div className="home-screen">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title animate-slide-in">
              Find Your <span className="gradient-text">Dream Car</span>
            </h1>
            <p className="hero-subtitle animate-slide-in-delay">
              Discover the finest selection of luxury and performance vehicles
            </p>
            <div className="hero-buttons animate-slide-in-delay-2">
              <button className="btn-primary" onClick={() => navigate('/inventory')}>
                Browse Inventory
              </button>
              <button className="btn-secondary" onClick={() => navigate('/sell')}>
                Sell Your Car
              </button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Luxury Cars</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </section>

        <CarsByMake />

        <UsedCarAdvice />

        <section className="featured-section">
          <h2 className="section-title">Featured Vehicles</h2>
          <p className="section-subtitle">Hand-picked selection of exceptional cars</p>
          <div className="car-grid">
            {cars.map(car => (
              <CarCard key={car.id} car={car} setSelectedCar={(car) => {}} />
            ))}
          </div>
          <div className="center-button">
            <button className="btn-outline" onClick={() => navigate('/inventory')}>
              View All Cars
            </button>
          </div>
        </section>

        <AutoStore />

        <section className="why-us-section">
          <h2 className="section-title">Why Choose SM MOTOR?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Certified Vehicles</h3>
              <p>Every car undergoes rigorous 200-point inspection</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Price Guarantee</h3>
              <p>We ensure you get the best value for your money</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Extended Warranty</h3>
              <p>All vehicles come with comprehensive warranty</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Worldwide Delivery</h3>
              <p>We deliver your dream car anywhere in the world</p>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}

export default Home;