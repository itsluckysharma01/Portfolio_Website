import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = ({ 
  showHome = true, 
  showBack = true, 
  customHomePath = '/home',
  customBackPath = null,
  position = 'top-left',
  size = 'medium'
}) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(customHomePath);
  };

  const handleBackClick = () => {
    if (customBackPath) {
      navigate(customBackPath);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={`back-button-container ${position} ${size}`}>
      {showBack && (
        <button 
          className="back-button back-btn"
          onClick={handleBackClick}
          title="Go Back"
        >
          <svg className="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
          <span className="back-text">Back</span>
        </button>
      )}
      
      {showHome && (
        <button 
          className="back-button home-btn"
          onClick={handleHomeClick}
          title="Go Home"
        >
          <svg className="home-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <span className="home-text">Home</span>
        </button>
      )}
    </div>
  );
};

export default BackButton;



