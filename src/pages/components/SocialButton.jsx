// src/pages/components/SocialButton.jsx

import React from 'react';

const SocialButton = ({ svgPath, text, link, platformClass }) => {
  return (
    <button
      className={`social-btn ${platformClass}`}
      onClick={() => window.open(link, '_blank', 'noopener noreferrer')}
    >
      <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
        <path d={svgPath} />
      </svg>
      <span>{text}</span>
    </button>
  );
};

export default SocialButton;



