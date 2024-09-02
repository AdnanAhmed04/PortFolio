import { useState } from 'react';
import './App.css';


// importing react icons
import { TbBulb } from "react-icons/tb";
import { FcServices } from "react-icons/fc";
import { SiMusicbrainz } from "react-icons/si";
import { PiCertificate } from "react-icons/pi";
import { LuFileSearch } from "react-icons/lu";
import { FcProcess } from "react-icons/fc";
import { TbDeviceMobileCog } from "react-icons/tb";
import { FaBugSlash } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAmazons3 } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiJirasoftware } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";













// importing components
import ResponsiveAppBar from '../src/Componets/navbar/nav_bar';
import Landingpage from '../src/Componets/landingpage/landingpage';
import Creative from '../src/Componets/Creative Process/Creative';
import Counter from './Componets/counter/Counter';
import Services from './Componets/MyServices/Services';
import Skills from './Componets/my_skills/Skills';
import Project from './Componets/my_projects/project';
import Experience_laptop from './Componets/experience/laptop_exp'
import WhatsAppIcon from './Componets/WhatsAppIcon/WhatsAppIcon'
import LinkedInIcon from './Componets/linkedin/LinkedInIconWrapper'
import ContactForm from './Componets/ContactForm/ContactForm'


// importing images
import form from '../src/Componets/my_projects/form.png';
import wea from '../src/Componets/my_projects/weather.png';
import zakat from '../src/Componets/my_projects/zakat.png';
import pak from '../src/Componets/my_projects/pakwheels.png';
import to_do from '../src/Componets/my_projects/to_do.png';
import olx from '../src/Componets/my_projects/olx.png';
import netflix from '../src/Componets/my_projects/netflix.png';
import shop from '../src/Componets/my_projects/shop.png';
import linkedin from '../src/Componets/my_projects/linkedin.png';






function App() {

  const creativeData = [
    {
      heading: '01 Inspiration',
      para: 'The starting point where creative ideas and concepts are sparked by experiences, observations, or influences.',
      img: <TbBulb className="react_icon_bulb" /> 

    },
    {
      heading: '02 Research',
      para: 'Delving into relevant information, trends, and user needs to build a solid foundation for the creative project.',
      img: <LuFileSearch className="react_icon" />

    },
    {
      heading: '03 Conceptualization',
      para: 'Crafting and shaping ideas into a cohesive vision that aligns with the project’s goals and objectives.',
      img: <SiMusicbrainz className=" Concept_react_icon" />

    },
    {
      heading: '04 Development',
      para: 'Transforming initial concepts into structured designs, prototypes, or detailed plans for execution.',
      img: <FcServices  className="react_icon" />

    },
    {
      heading: '05 Refinement',
      para: 'Bringing the creative vision to life through the application of skills, tools, and techniques to produce the final product.',
      img: <FcProcess className="react_icon" />

    }, 
    {
      heading: '06 finalization',
      para: 'Iterating and polishing the work based on feedback, ensuring it meets the highest standards of quality and effectiveness.',
      img: <PiCertificate className="react_icon_final" />
    }
    
  ];
  const servicesData = [
    {
        heading: 'Mobile Optimize',
        para: 'Ensure that websites and applications are fully responsive and function seamlessly on all mobile devices, enhancing user experience and accessibility.',
        img: <TbDeviceMobileCog className="react_icon_mobile" />
    },
    {
        heading: 'Maintenance and Bug Fixes',
        para: 'Provide ongoing support to identify and resolve issues, ensuring the website remains functional, secure, and up-to-date.',
        img: <FaBugSlash className="react_icon_bug" />
    },
    {
        heading: 'Optimiz Animation',
        para: 'Improve the efficiency and performance of animations, ensuring smooth transitions and interactions without compromising load times.',
        img: <BsGraphUpArrow className="react_icon_optimiz" />
    }
];

const skillArray = [
  {
    img: <FaHtml5 className="react_icon_skill_html react_icon_skill" />
    ,  
    skill: 'HTML',
  },
  {
    img: <FaCss3Alt className="react_icon_skill_css react_icon_skill" />
    ,  
    skill: 'CSS',
  },
  {
    img: <FaNodeJs className="react_icon_skill_python react_icon_skill" />
    ,  
    skill: 'JavaScript',
  },
  {
    img: <FaReact className="react_icon_skill_css react_icon_skill" />
    ,  
    skill: 'React',
  },
  {
    img: <RiNextjsFill className="react_icon_skill_css react_icon_skill" />
    ,  
    skill: 'Next',
  },
  {
    img: <RiTailwindCssFill className="react_icon_skill_css react_icon_skill" />
    ,  
    skill: 'Tailwind CSS',
  },
  {
    img: <SiMui className="react_icon_skill_css react_icon_skill" />
    ,  
    skill: 'Material Ui',
  },
  {
    img: <FaBootstrap className="react_icon_skill_bootstrap react_icon_skill" />
    ,  
    skill: 'Bootstrap',
  },
  {
    img: <IoLogoFirebase className="react_icon_skill_firebase react_icon_skill" />
    ,  
    skill: 'Firebase',
  },
  {
    img: <SiAmazons3 className="react_icon_skill_git react_icon_skill" />
    ,  
    skill: 'Amazon S3',
  },
  {
    img: <GrMysql className="react_icon_skill_css react_icon_skill" />
    ,  
    skill: 'SQL',
  },
  {
    img: <FaPython className="react_icon_skill_python react_icon_skill" />
    ,  
    skill: 'Python',
  },
  {
    img: <SiPostman className="react_icon_skill_html react_icon_skill" />
    ,  
    skill: 'Postman',
  },
  {
    img: <SiJirasoftware className="react_icon_skill_css react_icon_skill" />
    ,  
    skill: 'Jira',
  },
  {
    img: <FaGithub className="react_icon_skill_git react_icon_skill" />
    ,  
    skill: 'Github',
  },
  {
    img: <FaGitAlt className="react_icon_skill_html react_icon_skill" />
    ,  
    skill: 'Git',
  },
  
];


const [visibleProjects, setVisibleProjects] = useState(3);
const projects = [
  {
    img: zakat,
    title: 'Zakat calculator using Js and CSS',
  },{
    img: to_do,
    title: 'To Do List using React and CSS',
  },
  {
    img: olx,
    title: 'Olx Clone using React and CSS',
  },
  {
    img: pak,
    title: 'PakWheels Clone using React and TailwindCSS',
  },
  {
    img: form,
    title: 'Google Form  using CSS and Firebase',
  },
  {
    img: wea,
    title: 'Weather App using Js and TailwindCSS',
  },

  {
    img: linkedin,
    title: 'linkedin Clone using React and TailwindCSS',
  },
  {
    img: shop,
    title: 'Shoping Cart using React and TailwindCSS',
  },
  {
    img: netflix,
    title: 'HTML CSS and JS',
  },
];
const handleShowMore = () => {
  setVisibleProjects((prev) => prev + 3);
};

const handleShowLess = () => {
  setVisibleProjects(3);
};
return (
  <>
    <ResponsiveAppBar />
       {/* ------------------------ landing --------------- */}

    <section id='landing'>
      <Landingpage />
    </section>
    <hr />
       {/* ------------------------ creative --------------- */}

    <section id='Creative'>
      <center>
        <h2 className='h2_Creative'>Creative Process</h2>
      </center>
      <div className='creative_row'>
        {creativeData.map((item, index) => (
          <Creative
            key={index}
            heading={item.heading}
            para={item.para}
            img={item.img}
          />
        ))}
      </div>
    </section>
    <hr />
       {/* ------------------------ Counter --------------- */}

    <section id='Counter'>
      <div className="counters_row">
        <Counter className='para_width' label="Projects Completed" targetNumber={50} duration={3000} suffix="+" />
        <Counter label="Ongoing Projects" targetNumber={2} duration={9000} />
        <Counter label="Satisfied Clients" targetNumber={95} duration={2500} suffix="%" />
      </div>
    </section>
    <hr />
       {/* ------------------------ Skills --------------- */}

    <section id='skill'>
      <div className='skill_row'>
        <Skills skills={skillArray} />
      </div>
    </section>



   {/* ------------------------ project --------------- */}
    <section id='Projects'>
      <div className='project_row'>
        <center className='h2_Creative'>
          <h2>Project Showcase</h2>
        </center>
        <div className='project-list'>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <Project
              key={index}
              imglink={project.img}
              title={project.title}
            />
          ))}
          <div className="buttons-container">
            {visibleProjects < projects.length && (
              <button className='show-more-button' onClick={handleShowMore}>
                Show More
              </button>
            )}
            {visibleProjects > 3 && (
              <button className='show-less-button' onClick={handleShowLess}>
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
       {/* ------------------------ experience --------------- */}

       <section id='Experience'>

    <Experience_laptop />

</section>
   {/* ------------------------ services --------------- */}
{/*    <section id='services'>

    <div className='services'>
      <Services services={servicesData} />
    </div>

    </section> */}
    {/* ---------------------------whatsapp and linkedin icons ---------------------------- */}
    <WhatsAppIcon />
    <LinkedInIcon />
    {/* ------------------------ contact --------------- */}

       <section id='contact'>

    <ContactForm />
    </section>
  </>
);
}

export default App;
