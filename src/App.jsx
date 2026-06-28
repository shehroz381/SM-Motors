import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import CarDetail from './pages/CarDetail';
import Sell from './pages/Sell';
import About from './pages/About';
import Contact from './pages/Contact';
import Financing from './pages/Financing';
import Testimonials from './pages/Testimonials';
import SignIn from './pages/SignIn';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function NavbarWrapper() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const currentScreen = location.pathname.substring(1) || 'home';
  
  const setCurrentScreen = (screen) => {
    navigate(`/${screen === 'home' ? '' : screen}`);
    setIsMenuOpen(false);
  };
  
  return (
    <Navbar 
      currentScreen={currentScreen}
      setCurrentScreen={setCurrentScreen}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    />
  );
}

import { AnimatePresence } from 'framer-motion';

// Main App Component
function AppContent() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [dbCars, setDbCars] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(`${API_URL}/api/cars`);
        const data = await response.json();
        if (data.success && data.data) {
          setDbCars(data.data);
        }
      } catch (error) {
        console.error('Error fetching cars from database:', error);
      }
    };
    fetchCars();
  }, [location.pathname]); // Re-fetch when navigating (e.g., coming back from the Sell screen)

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const staticCars = [
    { id: 1, name: 'Toyota LandCruiser', price: 'PKR 1,80,000,00', year: 2023, mileage: '185,000 KM', image: 'https://i.ytimg.com/vi/SK7LOAXDVI4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCmsORmFFw0Nl2nFoffEmCUWZkLwg', type: 'Petrol', transmission: 'Automatic', color: 'Golden', description: 'The Toyota Land Cruiser LC200 embodies legendary durability and commanding performance, delivering unmatched off-road capability with luxurious comfort and a powerful road presence.' },
    { id: 2, name: 'Honda Accord', price: 'PKR 1,50,00,000', year: 2022, mileage: '5,000 KM', image: 'https://images.ctfassets.net/zv2d763cyyyu/48UmHPvm0ItrYSSmAKtU4E/f377329a8fdc9d7f9511f63d0b17d988/honda-accord-8g-1.jpg', type: 'Gasoline', transmission: 'Manual', color: 'Matalic Gun', description: 'The iconic Porsche 911 combines timeless design with exhilarating performance. Every drive is an event.' },
    { id: 3, name: 'Toyota Grande', price: 'PKR 56,90,000', year: 2023, mileage: '68,000 KM', image: 'https://w0.peakpx.com/wallpaper/563/792/HD-wallpaper-toyota-corolla-altis-1-8-grande.jpg', type: 'Petrol', transmission: 'Automatic', color: 'Santorini Black', description: 'Luxury meets capability. The Toyota Corolla Grande delivers a perfect blend of modern sophistication and reliable performance, making every drive smooth, efficient, and comfortable.' },
    { id: 4, name: 'BMW M4 Competition', price: '24,700,000', year: 2023, mileage: '150,000 KM', image: 'https://autos.hamariweb.com/images/carimages/car_154_638771603827007332.jpg', type: 'Gasoline', transmission: 'Automatic', color: 'Brooklyn Grey', description: 'The ultimate driving machine. The M4 Competition delivers 503 horsepower and track-ready performance.' },
    { id: 5, name: 'Honda Civic RS Turbo', price: 'PKR 90,000,00', year: 2022, mileage: '8,000 KM', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7sheXRf3yLjz8Xih_k4gBj6lh8d3o_4unEVeR5gQ1gvN1CG9IJRz4KEOR-kE4hN_OfN1wuJmT8-_98QyRYZM6UCx7lWNnbNlJy7B9qyrAVvmT8UG7_4HuN38tQ2ASlx6jQG5p16dKJIR-naF5lzMm5pUSkNS260kGiR93gMKpZ58G7c8i2v04tRRW6Q/s1024/2022_honda_civic_rs_turbo_00.jpg', type: 'Petrol', transmission: 'Automatic', color: 'White', description: 'The Honda Civic combines sleek design with dynamic performance, delivering a refined driving experience with comfort, style, and efficiency.' },
    { id: 6, name: 'Havel H6', price: 'PKR 85,00,000', year: 2021, mileage: '6000 KM', image: 'https://havalkhi.com/wp-content/uploads/2026/01/Haval-H6-HEV-Is-the-Money-Really-Worth-It-Featured-Image.jpg', transmission: 'Automatic', color: 'Golden', description: 'A masterpiece of engineering. The R8 features a naturally aspirated V10 engine and breathtaking design.' },
    { id: 7, name: 'Changan Alsvin', price: 'PKR 32,0,000', year: 2023, mileage: '12000 Km', image: 'https://pbs.twimg.com/media/G0ZTzGvbgAAwqqT.jpg', type: 'Petrol', transmission: 'Manual', color: 'Matallic Gun', description: 'The Changan Alsvin blends contemporary styling with smart technology and efficient performance, offering a comfortable and value-driven driving experience for modern lifestyles.' },
    { id: 8, name: 'Toyota Camry', price: 'PKR 2,50,00,000', year: 2022, mileage: '15,000 KM', image: 'https://www.usnews.com/object/image/00000190-4b28-dd37-a1dd-dbecc20e0000/02-2025-toyota-camry-angular-rear-jmv.JPG?update-time=1719248104337&size=responsiveGallery&format=webp', type: 'Petrol', transmission: 'Automatic', color: 'BLUE', description: 'The Toyota Camry delivers a refined blend of luxury, performance, and advanced technology, offering a smooth and confident drive with premium comfort.' },
    { id: 9, name: 'LandCruiser-PRADO', price: 'PKR 1,25,00,000', year: 2023, mileage: '50,000 KM', image: 'https://carzone.com.pk/wp-content/uploads/2024/11/39aa0569-bbe9-42e2-acf2-693ccd8517a7.jpeg', type: 'Diseal', transmission: 'Automatic', color: 'Arctic White', description: 'The Toyota Land Cruiser Prado combines rugged off-road capability with premium comfort and advanced technology, delivering a powerful and refined driving experience across any terrain.' },
    { id: 10, name: 'BYD Sealion', price: 'PKR 1,60,00,000', year: 2024, mileage: '0 KM', image: 'https://images.carexpert.com.au/resize/960/-/cms/v1/media/2025-12-byd-sealion-7251024byd-sealion-7-premiumstill-27.jpg', type: 'Electric', transmission: 'Automatic', color: 'Ocean Blue', description: 'The BYD Seal is a cutting-edge electric sedan offering thrilling performance, advanced battery technology, and a striking ocean-inspired design.' },
    { id: 11, name: 'Jaecoo J7', price: 'PKR 1,25,00,000', year: 2024, mileage: '100 KM', image: 'https://static.pakwheels.com/2025/10/IMG-20251021-WA0089.jpg', type: 'Gasoline', transmission: 'Automatic', color: 'Moonlight Silver', description: 'The Jaecoo J7 is a premium off-road capable SUV that blends rugged performance with a highly sophisticated, technology-packed interior.' },
    { id: 12, name: 'BYD Atto 3', price: 'PKR 1,10,00,000', year: 2024, mileage: '50 KM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_GA1_BJvewk7zYMfhHnvj4Ljsq-ytAjyxaA-EsRxK_XU7DmJjh8Y75-RT&s=10', type: 'Electric', transmission: 'Automatic', color: 'Ski White', description: 'A highly efficient and family-friendly electric crossover, the BYD Atto 3 delivers an ultra-smooth drive with an exceptional driving range.' },
    { id: 13, name: 'Changan Oshan X7', price: 'PKR 82,99,000', year: 2023, mileage: '15,000 KM', image: 'https://autos.hamariweb.com/images/carimages/car_347_639040305295624512.jpg', type: 'Gasoline', transmission: 'Automatic', color: 'Cosmic Red', description: 'The Oshan X7 provides a luxurious 7-seater experience, powered by a turbocharged engine that ensures a commanding presence on the road.' },
    { id: 14, name: 'MG HS PHEV', price: 'PKR 1,05,00,000', year: 2023, mileage: '8,500 KM', image: 'https://i.ytimg.com/vi/SdkmKWqA5oA/maxresdefault.jpg', type: 'Hybrid', transmission: 'Automatic', color: 'Pearl White', description: 'Combining electric efficiency with petrol power, the MG HS Plug-in Hybrid offers premium comfort, zero-emissions city driving, and long-range capability.' },
    { id: 15, name: 'Suzuki Swift', price: 'PKR 49,90,000', year: 2023, mileage: '22,000 KM', image: 'https://carsales.pxcrush.net/carsales/car/dealer/5p7tqf9cftthgtulrff59vndt.jpg?pxc_method=fitfill&pxc_bgtype=self&pxc_size=720,480', type: 'Gasoline', transmission: 'Automatic', color: 'Mineral Grey', description: 'The Suzuki Swift GLX CVT is a highly popular, fuel-efficient hatchback with sporty aesthetics, perfect for navigating tight city streets.' },
    { id: 16, name: 'Hyundai Tucson', price: 'PKR 86,50,000', year: 2022, mileage: '45,000 KM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGgqptPv522l1Ps2FL2r3knFA40krlZCVm5tdifjNPs7DlTdwpF8VH1Md&s=10', type: 'Gasoline', transmission: 'Automatic', color: 'Phantom Black', description: 'The Hyundai Tucson features a bold, dynamic design. This AWD SUV ensures supreme comfort and unmatched reliability across all terrains.' },
    { id: 17, name: 'Honda HR-V', price: 'PKR 76,00,000', year: 2023, mileage: '18,000 KM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsVHG0cwIlqdAzjL4hA6YSjNWD0DqGWHg0wyyBe6hrQCif89nsf_FcA8&s=10', type: 'Gasoline', transmission: 'Automatic', color: 'Meteoroid Grey', description: 'The Honda HR-V is a versatile and stylish crossover that maximizes interior space while delivering a sharp, responsive driving experience.' },
    { id: 18, name: 'Hyundai Elantra', price: 'PKR 69,50,000', year: 2022, mileage: '30,000 KM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorjruZ0CXPgOc7uqpBnUfoSuaUTD55Vyjdu0V4FiBiRX-QV2b5xWJEEfg&s=10', type: 'Gasoline', transmission: 'Automatic', color: 'Polar White', description: 'The Elantra seduces with its parametric dynamics design and offers a highly refined, tech-forward cabin for a superior daily commute.' }
  ];

  // Map backend vehicle data to matching frontend prop format
  const mappedDbCars = dbCars.map((car, idx) => ({
    id: car._id || `db-${idx}`,
    name: `${car.make} ${car.model}`,
    price: `PKR ${car.price.toLocaleString()}`,
    year: car.year,
    mileage: car.mileage.includes('KM') || car.mileage.includes('km') ? car.mileage : `${Number(car.mileage).toLocaleString()} KM`,
    image: car.image || 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800', // Dynamic URL or placeholder
    type: car.fuelType,
    transmission: car.transmission,
    color: car.exteriorColor || 'N/A',
    description: car.description || 'No description provided.'
  }));

  const cars = [...mappedDbCars, ...staticCars];

  return (
    <div className="app">
      <ScrollToTop />
      <NavbarWrapper />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home setCurrentScreen={(screen) => navigate(`/${screen === 'home' ? '' : screen}`)} cars={cars.slice(0, 6)} />} />
            <Route path="/home" element={<Home setCurrentScreen={(screen) => navigate(`/${screen === 'home' ? '' : screen}`)} cars={cars.slice(0, 6)} />} />
            <Route path="/inventory" element={<Inventory cars={cars} setCurrentScreen={(screen) => navigate(`/${screen === 'home' ? '' : screen}`)} setSelectedCar={setSelectedCar} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
            <Route path="/carDetail" element={<CarDetail car={selectedCar} setCurrentScreen={(screen) => navigate(`/${screen === 'home' ? '' : screen}`)} />} />
            <Route path="/sell" element={<Sell setCurrentScreen={(screen) => navigate(`/${screen === 'home' ? '' : screen}`)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/signin" element={<SignIn setCurrentScreen={(screen) => navigate(`/${screen === 'home' ? '' : screen}`)} />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;