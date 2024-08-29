import React from 'react';
import './project.css';

const Project = ({ imglink, title }) => {
  return (
    <div className='project-card'>
      <div className='project-image-container'>
        <img className='project-image' src={imglink} alt={title} />
        <div className='project-title'>
          <p className='title-text'>{title}</p>
        </div>
        <a 
          className='add-to-cart-button'
          href='https://github.com/AdnanAhmed04'
          target='_blank'
          rel="noopener noreferrer"
        >
          Get Code
        </a>        
      </div>
    </div>
  );
};

export default Project;
