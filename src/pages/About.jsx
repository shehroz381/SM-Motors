import React, { useState } from 'react';
import '../styles/App.css';
import shehrozPic from '../assets/pictures/shehroz.jpeg';
import haroonPic from '../assets/pictures/haroon.jpeg';
import hamdanPic from '../assets/pictures/hamdan.jpeg';
import ahmadPic from '../assets/pictures/ahmad.jpeg';

function About() {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "M. SHEHROZ MEHMOOD", role: "Founder & CEO", image: shehrozPic, },
    { id: 2, name: "AHMAD ISLAM", role: "Head of Sales", image: ahmadPic, },
    { id: 3, name: "HAMDAN ASLAM", role: "Certification Expert", image: hamdanPic, },
    { id: 4, name: "HAROON SHAMOON", role: "Customer Relations", image: haroonPic, },
  ]);

  const handleImageUpload = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTeamMembers(prevMembers =>
          prevMembers.map(member =>
            member.id === id ? { ...member, image: reader.result } : member
          )
        );
      };
      reader.readAsDataURL(file);
    }
  };

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
            {teamMembers.map((member) => (
              <div className="team-member" key={member.id} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <label className="member-avatar" style={{ cursor: 'pointer', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '100%', height: '280px', margin: 0, borderRadius: 0 }} title="Click to upload custom image">
                  {member.image ? (
                    <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0 }} />
                  ) : (
                    member.defaultAvatar
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e) => handleImageUpload(e, member.id)}
                  />
                </label>
                <div style={{ padding: '2rem' }}>
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;