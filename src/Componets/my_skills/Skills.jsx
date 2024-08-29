import React, { useEffect } from 'react';
import './my_skill.css'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Skills = ({ skills }) => {
  useEffect(() => {
    AOS.init({
      duration: 2500, 
      once: false,     
    });
  }, []);
  return (
    <div className="skills-container">
      <center>
      <h2>Skills & Abilities      </h2>

      </center>
      <div className="skills-row " data-aos="fade-up">    
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="icon">{skill.img}</div> 
            <p>{skill.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
