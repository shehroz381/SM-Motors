import React from 'react';
import { 
  SiToyota, SiHonda, SiKia, SiHyundai, SiBmw, 
  SiAudi, SiFord, SiChevrolet, SiTesla, 
  SiNissan, SiVolkswagen, SiVolvo, SiSuzuki, SiPeugeot,
  SiJeep, SiSubaru, SiPorsche, SiMazda, SiFerrari,
  SiAstonmartin, SiBentley, SiMaserati, SiMg,
  SiJaguar, SiLandrover, SiRollsroyce, SiFiat
} from 'react-icons/si';
import { TbBrandMercedes } from 'react-icons/tb';

const brands = [
  { name: 'Suzuki', icon: <SiSuzuki color="#e3000f" /> },
  { name: 'Toyota', icon: <SiToyota color="#eb0a1e" /> },
  { name: 'Honda', icon: <SiHonda color="#e40521" /> },
  { name: 'KIA', icon: <SiKia color="#ffffff" /> },
  { name: 'Hyundai', icon: <SiHyundai color="#ffffff" /> },
  { name: 'Jaguar', icon: <SiJaguar color="#ffffff" /> },
  { name: 'MG', icon: <SiMg color="#ffffff" /> },
  { name: 'Land Rover', icon: <SiLandrover color="#005a2b" /> },
  { name: 'BMW', icon: <SiBmw color="#ffffff" /> },
  { name: 'Audi', icon: <SiAudi color="#ffffff" /> },
  { name: 'Mercedes Benz', icon: <TbBrandMercedes color="#ffffff" /> },
  { name: 'Rolls Royce', icon: <SiRollsroyce color="#ffffff" /> },
  { name: 'Ford', icon: <SiFord color="#ffffff" /> },
  { name: 'Chevrolet', icon: <SiChevrolet color="#c59837" /> },
  { name: 'Tesla', icon: <SiTesla color="#ffffff" /> },
  { name: 'Nissan', icon: <SiNissan color="#ffffff" /> },
  { name: 'Volkswagen', icon: <SiVolkswagen color="#ffffff" /> },
  { name: 'Jeep', icon: <SiJeep color="#ffba00" /> },
  { name: 'Subaru', icon: <SiSubaru color="#ffffff" /> },
  { name: 'Porsche', icon: <SiPorsche color="#b11a21" /> },
  { name: 'Fiat', icon: <SiFiat color="#ffffff" /> },
  { name: 'Volvo', icon: <SiVolvo color="#ffffff" /> },
  { name: 'Mazda', icon: <SiMazda color="#ffffff" /> },
  { name: 'Ferrari', icon: <SiFerrari color="#e32636" /> },
  { name: 'Peugeot', icon: <SiPeugeot color="#ffffff" /> },
  { name: 'Aston Martin', icon: <SiAstonmartin color="#ffffff" /> },
  { name: 'Bentley', icon: <SiBentley color="#ffffff" /> },
  { name: 'Maserati', icon: <SiMaserati color="#ffffff" /> }
];

const CarsByMake = () => {
  return (
    <section className="cars-by-make-section fade-in">
      <h2 className="section-title">New Cars by Make</h2>
      <div className="cars-by-make-container">
        <div className="brand-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card">
              <div className="brand-logo-container">
                {brand.icon}
              </div>
              <span className="brand-name">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsByMake;
