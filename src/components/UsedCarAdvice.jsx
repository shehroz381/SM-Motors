import React from 'react';

const adviceData = [
  {
    id: 1,
    title: "How To Buy A Used Car – A Complete Guide!",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    text: "Buying a car can be a daunting task; a vehicle is, for most people, either the biggest or the second biggest purchase of their lives in terms of monetary value. So, it comes as no surprise then that caution is advisable, especially when it comes to a pre-owned/used car..."
  },
  {
    id: 2,
    title: "Important Documents To Check Before Buying A Car",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    text: "To safeguard yourself, it is important that you comprehensively know about all the important documents before buying a car. After doing your research and selecting a car to buy, be sure to check the following documents before spending your money..."
  },
  {
    id: 3,
    title: "Things To Do After Buying A Used Car!",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    text: "Mostly we take a fair amount of time before buying a used car. Unlike a new car, you have to check the vehicle thoroughly including exterior, interior, and engine. However, there is a whole new issues after buying the vehicle. As the car is used and an most probably an old model, hence,..."
  },
  {
    id: 4,
    title: "Top 5 Fuel-Efficient Used Cars in 2024",
    image: "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    text: "With rising fuel prices, finding a fuel-efficient used car is more important than ever. We've compiled a list of the top 5 used cars that offer incredible mileage without compromising on comfort and reliability."
  },
  {
    id: 5,
    title: "How to Negotiate the Best Price for a Used Car",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    text: "Negotiating can be intimidating, but it's a crucial step in buying a used car. Learn the best strategies to negotiate like a pro, understand market values, and confidently walk away with a deal that works for your budget."
  },
  {
    id: 6,
    title: "The Pros and Cons of Buying Certified Pre-Owned (CPO)",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    text: "Certified Pre-Owned vehicles offer peace of mind with extended warranties and rigorous inspections, but they come with a higher price tag. Is it worth the extra cost? Discover the pros and cons of buying CPO vs. a standard used car."
  }
];

function UsedCarAdvice() {
  return (
    <section className="used-car-advice-section">
      <h2 className="section-title">Used Car Advice & Tips</h2>
      <div className="advice-grid">
        {adviceData.map((advice) => (
          <div key={advice.id} className="advice-card">
            <div className="advice-image">
              <img src={advice.image} alt={advice.title} />
            </div>
            <div className="advice-content">
              <h3>{advice.title}</h3>
              <p>{advice.text}</p>
              <a href="#" className="advice-link" onClick={(e) => e.preventDefault()}>
                more »
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UsedCarAdvice;
