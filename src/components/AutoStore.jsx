import React, { useState } from 'react';
import { 
  FaSprayCan, FaBroom, FaSoap, FaCouch, FaShieldAlt, FaMagic, FaCogs, FaHandsWash, FaCube, 
  FaFilter, FaWind, FaCloudRain, FaSquare, FaSync, FaBatteryFull, FaLightbulb, FaFan, FaCar, 
  FaCarSide, FaTruck, FaBox, FaNetworkWired, FaUmbrella, FaSun, FaTint, FaShower, FaStopCircle, 
  FaMusic, FaVolumeUp, FaBoxOpen, FaBullhorn, FaBolt, FaBatteryHalf 
} from 'react-icons/fa';
import { MdCleaningServices, MdDashboard } from 'react-icons/md';
import { GiCarWheel, GiRaceCar, GiToolbox, GiJoystick, GiStairs, GiGate } from 'react-icons/gi';

const storeItems = [
  // Sub Category
  { id: 1, title: 'All Purpose...', icon: <FaSprayCan />, color: '#3b82f6', category: 'Sub Category' },
  { id: 2, title: 'Microfiber Cloth', icon: <FaBroom />, color: '#ffd700', category: 'Sub Category' },
  { id: 3, title: 'Glass Cleaner', icon: <MdCleaningServices />, color: '#38bdf8', category: 'Sub Category' },
  { id: 4, title: 'Car Shampoo', icon: <FaSoap />, color: '#ec4899', category: 'Sub Category' },
  { id: 5, title: 'Leather Care', icon: <FaCouch />, color: '#d97706', category: 'Sub Category' },
  { id: 6, title: 'Tire Shine', icon: <GiCarWheel />, color: '#94a3b8', category: 'Sub Category' },
  { id: 7, title: 'Wax & Polish', icon: <FaShieldAlt />, color: '#ffd700', category: 'Sub Category' },
  { id: 8, title: 'Scratch Remover', icon: <FaMagic />, color: '#ffffff', category: 'Sub Category' },
  { id: 9, title: 'Engine Degreaser', icon: <FaCogs />, color: '#f97316', category: 'Sub Category' },
  { id: 10, title: 'Wash Mitt', icon: <FaHandsWash />, color: '#10b981', category: 'Sub Category' },
  { id: 11, title: 'Drying Towel', icon: <FaBroom />, color: '#3b82f6', category: 'Sub Category' },
  { id: 12, title: 'Clay Bar', icon: <FaCube />, color: '#94a3b8', category: 'Sub Category' },

  // Make
  { id: 13, title: 'Toyota Pads', icon: <FaStopCircle />, color: '#ef4444', category: 'Make' },
  { id: 14, title: 'Honda Filter', icon: <FaFilter />, color: '#ffffff', category: 'Make' },
  { id: 15, title: 'Ford Plugs', icon: <FaBolt />, color: '#ffd700', category: 'Make' },
  { id: 16, title: 'BMW Air Filter', icon: <FaWind />, color: '#38bdf8', category: 'Make' },
  { id: 17, title: 'Audi Wipers', icon: <FaCloudRain />, color: '#94a3b8', category: 'Make' },
  { id: 18, title: 'Mercedes Mats', icon: <FaSquare />, color: '#ffffff', category: 'Make' },
  { id: 19, title: 'Nissan Belt', icon: <FaSync />, color: '#f97316', category: 'Make' },
  { id: 20, title: 'Chevy Battery', icon: <FaBatteryFull />, color: '#10b981', category: 'Make' },
  { id: 21, title: 'Hyundai Lights', icon: <FaLightbulb />, color: '#ffd700', category: 'Make' },
  { id: 22, title: 'Kia Cabin Filter', icon: <FaFan />, color: '#38bdf8', category: 'Make' },
  { id: 23, title: 'Tesla Covers', icon: <FaCar />, color: '#3b82f6', category: 'Make' },
  { id: 24, title: 'Jeep Mud Flaps', icon: <FaShieldAlt />, color: '#94a3b8', category: 'Make' },

  // Model
  { id: 25, title: 'Civic Covers', icon: <FaCarSide />, color: '#ffffff', category: 'Model' },
  { id: 26, title: 'Corolla Dash', icon: <MdDashboard />, color: '#94a3b8', category: 'Model' },
  { id: 27, title: 'Mustang Spoiler', icon: <GiRaceCar />, color: '#ef4444', category: 'Model' },
  { id: 28, title: 'Wrangler Rack', icon: <GiToolbox />, color: '#f97316', category: 'Model' },
  { id: 29, title: 'F-150 Liner', icon: <FaTruck />, color: '#94a3b8', category: 'Model' },
  { id: 30, title: 'Model 3 Tray', icon: <FaBox />, color: '#ffffff', category: 'Model' },
  { id: 31, title: 'CR-V Net', icon: <FaNetworkWired />, color: '#ffd700', category: 'Model' },
  { id: 32, title: 'RAV4 Deflectors', icon: <FaUmbrella />, color: '#3b82f6', category: 'Model' },
  { id: 33, title: 'Camry Shade', icon: <FaSun />, color: '#ffd700', category: 'Model' },
  { id: 34, title: 'Accord Knob', icon: <GiJoystick />, color: '#94a3b8', category: 'Model' },
  { id: 35, title: 'Tacoma Steps', icon: <GiStairs />, color: '#ffffff', category: 'Model' },
  { id: 36, title: 'X5 Grill Guard', icon: <GiGate />, color: '#ef4444', category: 'Model' },

  // Brand
  { id: 37, title: 'Michelin Tyres', icon: <GiCarWheel />, color: '#94a3b8', category: 'Brand' },
  { id: 38, title: 'Castrol Coolant', icon: <FaTint />, color: '#3b82f6', category: 'Brand' },
  { id: 39, title: 'Bosch Washers', icon: <FaShower />, color: '#38bdf8', category: 'Brand' },
  { id: 40, title: 'K&N Filters', icon: <FaFilter />, color: '#ef4444', category: 'Brand' },
  { id: 41, title: 'Brembo Brakes', icon: <FaStopCircle />, color: '#ef4444', category: 'Brand' },
  { id: 42, title: 'Meguiars Wax', icon: <FaSprayCan />, color: '#f97316', category: 'Brand' },
  { id: 43, title: 'Pioneer Stereo', icon: <FaMusic />, color: '#3b82f6', category: 'Brand' },
  { id: 44, title: 'JBL Speakers', icon: <FaVolumeUp />, color: '#f97316', category: 'Brand' },
  { id: 45, title: 'Thule Roof Box', icon: <FaBoxOpen />, color: '#94a3b8', category: 'Brand' },
  { id: 46, title: 'Hella Horns', icon: <FaBullhorn />, color: '#ffd700', category: 'Brand' },
  { id: 47, title: 'NGK Plugs', icon: <FaBolt />, color: '#38bdf8', category: 'Brand' },
  { id: 48, title: 'Optima Battery', icon: <FaBatteryHalf />, color: '#10b981', category: 'Brand' },
];

const tabs = ['Sub Category', 'Make', 'Model', 'Brand'];

function AutoStore() {
  const [activeTab, setActiveTab] = useState('Sub Category');

  const filteredItems = storeItems.filter(item => item.category === activeTab);

  const handlePrevCategory = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const newIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
    setActiveTab(tabs[newIndex]);
  };

  const handleNextCategory = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const newIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
    setActiveTab(tabs[newIndex]);
  };

  return (
    <section className="auto-store-section">
      <div className="store-header">
        <h2 className="section-title">Auto Store Car Parts & Accessories</h2>
      </div>
      
      <div className="store-tabs">
        {tabs.map(tab => (
          <button 
            key={tab} 
            className={`store-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="store-carousel-container">
        <button className="carousel-btn left" onClick={handlePrevCategory}>❮</button>
        
        <div className="store-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <div key={item.id} className="store-card">
                <div className="store-icon" style={{ '--icon-color': item.color }}>{item.icon}</div>
                <div className="store-item-title">{item.title}</div>
              </div>
            ))
          ) : (
            <div style={{ padding: '2rem', color: 'var(--text-light)', gridColumn: '1 / -1', textAlign: 'center', width: '100%' }}>
              No products found for this category.
            </div>
          )}
        </div>

        <button className="carousel-btn right" onClick={handleNextCategory}>❯</button>
      </div>
      
      <div className="carousel-pagination">
        {tabs.map((tab, index) => (
          <span 
            key={tab} 
            className={`dot ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default AutoStore;
