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

// Scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Wrapper component for Navbar to use navigate
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
    { id: 7, name: 'Alsvin', price: 'PKR 32,0,000', year: 2023, mileage: '12000 Km', image: 'https://pbs.twimg.com/media/G0ZTzGvbgAAwqqT.jpg', type: 'Petrol', transmission: 'Manual', color: 'Matallic Gun', description: 'The Changan Alsvin blends contemporary styling with smart technology and efficient performance, offering a comfortable and value-driven driving experience for modern lifestyles.' },
    { id: 8, name: 'Toyota Camry', price: 'PKR 2,50,00,000', year: 2022, mileage: '15,000 KM', image: 'https://www.usnews.com/object/image/00000190-4b28-dd37-a1dd-dbecc20e0000/02-2025-toyota-camry-angular-rear-jmv.JPG?update-time=1719248104337&size=responsiveGallery&format=webp', type: 'Petrol', transmission: 'Automatic', color: 'BLUE', description: 'The Toyota Camry delivers a refined blend of luxury, performance, and advanced technology, offering a smooth and confident drive with premium comfort.' },
    { id: 9, name: 'LandCruiser-PRADO', price: 'PKR 1,25,00,000', year: 2023, mileage: '50,000 KM', image: 'https://carzone.com.pk/wp-content/uploads/2024/11/39aa0569-bbe9-42e2-acf2-693ccd8517a7.jpeg', type: 'Diseal', transmission: 'Automatic', color: 'Arctic White', description: 'The Toyota Land Cruiser Prado combines rugged off-road capability with premium comfort and advanced technology, delivering a powerful and refined driving experience across any terrain.' }
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
        <Routes>
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