import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import '../styles/App.css';

const modalOverlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
};

const modalContentStyle = {
  backgroundColor: '#1a1a2e',
  padding: '30px',
  borderRadius: '10px',
  width: '90%',
  maxWidth: '500px',
  color: 'white',
  boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  marginTop: '20px'
};

const inputStyle = {
  padding: '12px',
  borderRadius: '5px',
  border: '1px solid #333',
  backgroundColor: '#0f0f1a',
  color: 'white'
};

const formButtonsStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
  marginTop: '10px'
};

const learnMoreContentStyle = {
  marginTop: '20px',
  lineHeight: '1.6'
};

function Financing() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [downPayment, setDownPayment] = useState(1000000);
  const [loanTerm, setLoanTerm] = useState(60);
  const [interestRate, setInterestRate] = useState(3.99);

  const [showApplyForm, setShowApplyForm] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);

  const calculateMonthlyPayment = () => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;
    const monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return isNaN(monthlyPayment) ? 0 : monthlyPayment.toFixed(0);
  };

  return (
    <AnimatedPage>
    <div className="financing-screen">
      <div className="financing-container">
        <h1>Flexible Financing</h1>
        <p className="financing-subtitle">Drive your dream car today with our tailored payment plans</p>

        <div className="financing-options">
          <div className="finance-card">
            <h3>Standard Loan</h3>
            <p className="finance-rate">From 3.99% APR</p>
            <ul>
              <li>✓ Terms up to 72 months</li>
              <li>✓ No prepayment penalties</li>
              <li>✓ Quick approval process</li>
            </ul>
            <button className="btn-outline" onClick={() => setShowApplyForm(true)}>Apply Now</button>
          </div>

          <div className="finance-card featured">
            <h3>Premium Lease</h3>
            <p className="finance-rate">From 2.49% APR</p>
            <ul>
              <li>✓ Lower monthly payments</li>
              <li>✓ Upgrade every 3 years</li>
              <li>✓ Maintenance included</li>
            </ul>
            <button className="btn-primary" onClick={() => setShowApplyForm(true)}>Apply Now</button>
          </div>

          <div className="finance-card">
            <h3>Special Financing</h3>
            <p className="finance-rate">0% APR</p>
            <ul>
              <li>✓ For qualified buyers</li>
              <li>✓ Limited time offer</li>
              <li>✓ Select models only</li>
            </ul>
            <button className="btn-outline" onClick={() => setShowLearnMore(true)}>Learn More</button>
          </div>
        </div>

        <div className="calculator-section">
          <h2>Payment Calculator</h2>
          <div className="calculator">
            <div className="calc-input">
              <label>Vehicle Price (PKR)</label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                min="0"
                step="50000"
              />
            </div>
            <div className="calc-input">
              <label>Down Payment (PKR)</label>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                min="0"
                step="50000"
              />
            </div>
            <div className="calc-input">
              <label>Loan Term (months)</label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                min="12"
                max="84"
                step="12"
              />
            </div>
            <div className="calc-input">
              <label>Interest Rate (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                min="0"
                max="20"
                step="0.1"
              />
            </div>
            <div className="calc-result">
              <p>Estimated Monthly Payment</p>
              <h3>PKR {new Intl.NumberFormat('en-PK').format(calculateMonthlyPayment())}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Form Modal */}
      {showApplyForm && (
        <div className="modal-overlay" style={modalOverlayStyle}>
          <div className="modal-content" style={modalContentStyle}>
            <h2>Financing Application</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Financing application submitted successfully!'); setShowApplyForm(false); }} style={formStyle}>
              <input type="text" placeholder="First Name" required style={inputStyle} />
              <input type="text" placeholder="Last Name" required style={inputStyle} />
              <input type="email" placeholder="Email Address" required style={inputStyle} />
              <input type="tel" placeholder="Phone Number" required style={inputStyle} />
              <input type="number" placeholder="Annual Income (PKR)" required style={inputStyle} />
              <div style={formButtonsStyle}>
                <button type="button" onClick={() => setShowApplyForm(false)} className="btn-outline">Cancel</button>
                <button type="submit" className="btn-primary">Submit Application</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Learn More Modal */}
      {showLearnMore && (
        <div className="modal-overlay" style={modalOverlayStyle}>
          <div className="modal-content" style={modalContentStyle}>
            <h2>Special Financing Information</h2>
            <div style={learnMoreContentStyle}>
              <p>Take advantage of our exclusive 0% APR financing on select models.</p>
              <h3 style={{ marginTop: '15px', color: '#fdbd2c' }}>Eligibility Criteria:</h3>
              <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
                <li>✓ Must have excellent credit score (720+)</li>
                <li>✓ Valid for terms up to 36 months</li>
                <li>✓ Requires a minimum down payment of 20%</li>
              </ul>
              <h3 style={{ marginTop: '15px', color: '#fdbd2c' }}>How it works:</h3>
              <p style={{ marginTop: '10px' }}>Our special financing is designed to help you get behind the wheel of your dream car without paying interest. Apply online or visit our showroom to speak with a finance expert today.</p>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <button onClick={() => setShowLearnMore(false)} className="btn-primary">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </AnimatedPage>
  );
}

export default Financing;