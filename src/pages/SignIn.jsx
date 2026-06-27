import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import '../styles/App.css';

function SignIn({ setCurrentScreen }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert('Successfully logged in!');
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      alert('Account created successfully! Please sign in.');
      setIsLogin(true);
    }
    setCurrentScreen('home');
  };

  const handleGoogleSignIn = () => {
    alert('Google Sign In - This would connect to Google OAuth in a production app');
    setCurrentScreen('home');
  };

  return (
    <AnimatedPage>
    <div className="signin-screen">
      <div className="signin-container">
        <div className="signin-header">
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p>{isLogin ? 'Sign in to continue' : 'Register to get started'}</p>
        </div>

        <form onSubmit={handleSubmit} className="signin-form">
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                required
              />
            </div>
          )}

          {isLogin && (
            <div className="forgot-password">
              <a href="#" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="btn-primary signin-btn">
            {isLogin ? 'Sign In' : 'Register'}
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button type="button" className="google-signin-btn" onClick={handleGoogleSignIn}>
            <span className="google-icon">G</span>
            Continue with Google
          </button>

          <div className="signin-footer">
            <p>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button onClick={() => setIsLogin(!isLogin)} className="toggle-btn">
                {isLogin ? 'Register' : 'Sign In'}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
    </AnimatedPage>
  );
}

export default SignIn;