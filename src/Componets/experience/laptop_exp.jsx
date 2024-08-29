import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="timeline">
      <p className="timeline-header">WHAT I HAVE DONE SO FAR</p>
      <h1 className="timeline-title">Work Experience.</h1>
      
      <div className="timeline-container">
        <div className="timeline-item left">
          <div className="content">
            <div className='exp_row'>
            <div className="circle1"><span>Sep 2023<br/> | <br/> Oct 2023</span></div>
            <h3 className='exp_h3'>Frontend Developer Intern At Cod Soft</h3>

            </div>
            <h4>Miles (A Product Based Tech Startup)</h4>
            <ul>
              <li className='content_li'>- Developed proficiency in modern web technologies.</li>
              <li className='content_li'>- Contributed to enhancing user experience by integrating user-friendly features .</li>
            </ul>
            <p>Technologies - HTML ,CSS , JavaScript, ReactJS, Bootstap, TailwindCSS, Git, GitHub.</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="content">
            <h3 className='exp_h3'>Frontend Developer Intern At Rawts</h3>
            <h4>Miles (Interior design Startup)</h4>
            <ul>
              <li className='content_li'>- Improved system usability by integrating responsive user-friendly and features.</li>
              <li className='content_li'>- Code Effective and Quality Assurance.</li>
            </ul>
            <p>Technologies - CSS, ReactJS, JavaScript, Gatsby, TypeScript, AWS S3, AOS, Git, GitHub.</p>
          </div>
          <div className="circle2"><span>Aug 2024<br/> | <br/>Oct 2024</span></div>
        </div>
        
        
        <div className="timeline-line"></div>
        
      </div>
      <center className='present'>        <p>Present</p>
        </center>
    </div>
  );
}

export default Experience;
