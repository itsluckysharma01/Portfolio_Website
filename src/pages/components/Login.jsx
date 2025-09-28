import React, { useState } from 'react'
import './css/Login.css'
import BackButton from '../../components/BackButton'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  return (
    <div className="login-container">
      <BackButton position="top-left" size="medium" />
      <div className="login-content">
        <h1 className="login-title">
          Login
        </h1>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-field">
            <label className="login-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="login-input"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="login-field">
            <label className="login-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="login-input"
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" className="login-button">
            Sign In
          </button>
          
          <div className="login-forgot-password">
            <button 
              type="button"
              onClick={handleForgotPassword}
              className="login-forgot-link"
            >
              Forgot your password?
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
