import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CarCard from '../components/CarCard';
import AnimatedPage from '../components/AnimatedPage';
import '../styles/App.css';

function Inventory({ cars, setSelectedCar, searchQuery, setSearchQuery }) {
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredCars = cars
    .filter(car => filterType === 'all' ? true : car.type === filterType)
    .filter(car => car.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price-low') return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      if (sortBy === 'price-high') return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      if (sortBy === 'newest') return b.year - a.year;
      return 0;
    });

  return (
    <AnimatedPage>
      <div className="inventory-screen">
        <div className="inventory-header">
          <h1>Our Collection</h1>
          <p>Discover {cars.length} exceptional vehicles</p>
        </div>

        <div className="inventory-filters">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by car name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="filters">
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="Electric">Electric</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        <div className="car-grid">
          {filteredCars.map(car => (
            <CarCard key={car.id} car={car} setSelectedCar={setSelectedCar} />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Inventory;