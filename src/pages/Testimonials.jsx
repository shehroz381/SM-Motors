import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import '../styles/App.css';
import alishahbazPic from '../assets/pictures/alishahbaz.jpg';
import TariqPic from '../assets/pictures/Tariq.jpg';
import dawoodPic from '../assets/pictures/dawood.jpg';
import awaisPic from '../assets/pictures/awais.jpg';
import AkramPic from '../assets/pictures/Akram.webp';
import afzalPic from '../assets/pictures/afzal.jpeg';

function Testimonials() {
  const testimonials = [
    { name: "Ali Shahbaz", car: "Toyota Altis", rating: 5, comment: "Exceptional service from start to finish. The team made buying my dream car effortless.", image: alishahbazPic },
    { name: "Abdullah Tariq", car: "Honda Civic RS Turbo", rating: 5, comment: "I've never experienced such personalized attention. They found the perfect electric vehicle for me.", image: TariqPic },
    { name: "Dawood ijaz", car: "Toyta Prius", rating: 5, comment: "The certification process is thorough and transparent. Highly recommended!", image: dawoodPic },
    { name: "Awais", car: "Mercedes S-Class", rating: 5, comment: "From financing to delivery, every step was smooth and professional.", image: awaisPic },
    { name: "Arkam Rehman", car: "Havel H6-HEV", rating: 5, comment: "They went above and beyond to find exactly what I wanted. Outstanding service!", image: AkramPic },
    { name: "Afzal", car: "BMW M3", rating: 5, comment: "The attention to detail and customer care is unmatched. I'm a customer for life.", image: afzalPic }
  ];

  return (
    <AnimatedPage>
    <div className="testimonials-screen">
      <div className="testimonials-header">
        <h1>What Our Clients Say</h1>
        <p>Join thousands of satisfied customers who found their dream car with us</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-avatar">
              {testimonial.image.length > 5 ? (
                <img src={testimonial.image} alt={testimonial.name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto', display: 'block' }} />
              ) : (
                testimonial.image
              )}
            </div>
            <div className="testimonial-rating">
              {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
            </div>
            <p className="testimonial-comment">"{testimonial.comment}"</p>
            <h4>{testimonial.name}</h4>
            <p className="testimonial-car">{testimonial.car}</p>
          </div>
        ))}
      </div>
    </div>
    </AnimatedPage>
  );
}

export default Testimonials;