import React from 'react';
import '../styles/App.css';

function About() {
  return (
    <div className="about-screen">
      <div className="about-header">
        <h1>About SM MOTOR</h1>
        <p>Redefining the luxury car buying experience since 2008</p>
      </div>
      
      <div className="about-content">
        <div className="about-story-with-image">
          <div className="about-story">
            <h2>Our Story</h2>
            <p>Founded with a passion for exceptional automobiles, SM MOTOR has grown to become one of the most trusted names in luxury car sales. We believe that buying a dream car should be an experience as exhilarating as driving one.</p>
            
            <p>Our team of automotive experts carefully curates each vehicle in our collection, ensuring that every car meets our rigorous standards of quality, performance, and prestige. With showrooms in major cities and a commitment to customer satisfaction, we've helped thousands of customers drive home their dream vehicles. Our transparent pricing, certified vehicles, and exceptional after-sales service set us apart from the competition.</p>
            
            <p>At SM MOTOR, we believe that owning a luxury vehicle is more than just a transaction – it's a lifestyle. Our commitment to excellence extends beyond the showroom floor, offering personalized consultations, exclusive test drive experiences, and comprehensive maintenance packages. Whether you're a first-time luxury car buyer or a seasoned collector, our dedicated team works tirelessly to match you with the perfect vehicle that complements your personality and driving needs.</p>
            
            <p>What truly sets SM MOTOR apart is our unwavering dedication to customer satisfaction. We don't just sell cars; we build lasting relationships with every client who trusts us with their automotive dreams. Our after-sales support, including regular maintenance checks, 24/7 roadside assistance, and exclusive owner events, ensures that your luxury car ownership experience remains exceptional long after you've driven off our lot. Join the SM MOTOR family today and discover why thousands of satisfied customers have made us their preferred destination for luxury and performance vehicles.</p>
          </div>
          <div className="about-image">
            <img src="https://cdn.arstechnica.net/wp-content/uploads/2020/07/Twisted-NAS-E-Stacked-scaled.jpg" alt="Luxury car collection" />
          </div>
        </div>
        
        <div className="about-stats">
          <div className="stat-card">
            <h3>15+</h3>
            <p>Years of Excellence</p>
          </div>
          <div className="stat-card">
            <h3>2,500+</h3>
            <p>Cars Sold</p>
          </div>
          <div className="stat-card">
            <h3>98%</h3>
            <p>Customer Satisfaction</p>
          </div>
          <div className="stat-card">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
        </div>
        
        <div className="about-team">
          <h2>Meet Our Experts</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h4>M. SHEHROZ MEHMOOD</h4>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h4>AHMAD ISLAM</h4>
              <p>Head of Sales</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🔧</div>
              <h4>HAMDAN ASLAM</h4>
              <p>Certification Expert</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💻</div>
              <h4>ALI ARHAM RAZA</h4>
              <p>Customer Relations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;