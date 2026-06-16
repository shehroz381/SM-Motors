import React from 'react';
import '../styles/App.css';

function Testimonials() {
  const testimonials = [
    { name: "Ali Shahbaz", car: "Porsche 911", rating: 5, comment: "Exceptional service from start to finish. The team made buying my dream car effortless.", image: "👨" },
    { name: "Abdullah Tariq", car: "Tesla Model S", rating: 5, comment: "I've never experienced such personalized attention. They found the perfect electric vehicle for me.", image: "👩" },
    { name: "Dawood ijaz", car: "Range Rover Velar", rating: 5, comment: "The certification process is thorough and transparent. Highly recommended!", image: "👨" },
    { name: "Awais", car: "Mercedes-Benz S-Class", rating: 5, comment: "From financing to delivery, every step was smooth and professional.", image: "👩" },
    { name: "Arkam Rehman", car: "Audi R8", rating: 5, comment: "They went above and beyond to find exactly what I wanted. Outstanding service!", image: "👨" },
    { name: "Afzal", car: "BMW M4", rating: 5, comment: "The attention to detail and customer care is unmatched. I'm a customer for life.", image: "👩" }
  ];

  return (
    <div className="testimonials-screen">
      <div className="testimonials-header">
        <h1>What Our Clients Say</h1>
        <p>Join thousands of satisfied customers who found their dream car with us</p>
      </div>
      
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-avatar">{testimonial.image}</div>
            <div className="testimonial-rating">
              {"★".repeat(testimonial.rating)}{"☆".repeat(5-testimonial.rating)}
            </div>
            <p className="testimonial-comment">"{testimonial.comment}"</p>
            <h4>{testimonial.name}</h4>
            <p className="testimonial-car">{testimonial.car}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;