import React from 'react';
import './LinkedInIcon.css';
import { FaLinkedin } from 'react-icons/fa';

const LinkedInIcon = () => {
  const handleIconClick = () => {
    window.open('https://www.linkedin.com/in/adnan-ahmed-066847242/', '_blank');
  };

  return (
    <div className="linkedin-icon-wrapper" onClick={handleIconClick}>
    <FaLinkedin className="linkedin-icon" />
  </div>
  );
};

export default LinkedInIcon;
