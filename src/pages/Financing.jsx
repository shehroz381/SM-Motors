import React, { useState } from 'react';
import '../styles/App.css';

function Financing() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [downPayment, setDownPayment] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(60);
  const [interestRate, setInterestRate] = useState(3.99);

  const calculateMonthlyPayment = () => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;
    const monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return isNaN(monthlyPayment) ? 0 : monthlyPayment.toFixed(0);
  };

  return (
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
            <button className="btn-outline">Apply Now</button>
          </div>
          
          <div className="finance-card featured">
            <h3>Premium Lease</h3>
            <p className="finance-rate">From 2.49% APR</p>
            <ul>
              <li>✓ Lower monthly payments</li>
              <li>✓ Upgrade every 3 years</li>
              <li>✓ Maintenance included</li>
            </ul>
            <button className="btn-primary">Apply Now</button>
          </div>
          
          <div className="finance-card">
            <h3>Special Financing</h3>
            <p className="finance-rate">0% APR</p>
            <ul>
              <li>✓ For qualified buyers</li>
              <li>✓ Limited time offer</li>
              <li>✓ Select models only</li>
            </ul>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
        
        <div className="calculator-section">
          <h2>Payment Calculator</h2>
          <div className="calculator">
            <div className="calc-input">
              <label>Vehicle Price ($)</label>
              <input 
                type="number" 
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                min="0"
                step="1000"
              />
            </div>
            <div className="calc-input">
              <label>Down Payment ($)</label>
              <input 
                type="number" 
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                min="0"
                step="1000"
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
              <h3>$ {calculateMonthlyPayment()}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Financing;