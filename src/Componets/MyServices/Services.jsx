import React from 'react';
import './Service.css';

const Services = ({ services }) => (
  <div className='service_main'>
    <center>
      <h2 className='h2_Creative'>My <span className='italic'>Services</span></h2>
    </center>
    <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <div className="service-icon">
            {service.img} {/* Render the icon directly */}
          </div>
          <h3>{service.heading}</h3>
          <p>{service.para}</p>
          <a href={service.link} className="learn-more">
            Explore More &rsaquo;
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
