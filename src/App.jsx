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
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

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
import ContactForm from './Componets/ContactForm/ContactForm'
import Landing2 from './Componets/landingpage/Landing2';
import Footer from './Componets/Footer/Footer';
import Loader from './Componets/Loader/Loader';
import MouseTracker from './Componets/MouseTracker/MouseTracker';
import FloatingActions from './Componets/FloatingActions/FloatingActions';


// importing images
import chat from '../src/Componets/my_projects/chat.png';
import trip from '../src/Componets/my_projects/trip.png';
import erp from '../src/Componets/my_projects/erp.png';
import autoexpense_hub from '../src/Componets/my_projects/autoexpense_hub.png';
import pak from '../src/Componets/my_projects/pakwheels.png';
import linkedin from '../src/Componets/my_projects/linkedin.png';






function App() {
  const [isLoading, setIsLoading] = useState(true);

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
      img: <FcServices className="react_icon" />

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
      img: <SiExpress className=" react_icon_skill" />
      ,
      skill: 'Express',
    },
    {
      img: <SiMongodb className="react_icon_skill_css react_icon_skill" />
      ,
      skill: 'MongoDB',
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
      img: erp,
      title: 'ERP SyStem using React, TailwindCSS, Postman & Rest API ',
    },
    {
      img: trip,
      title: 'Trip planning platform using React, Express, Node.js, MongoDB, Material UI, TailwindCSS, React Icons, LLM & Figma',
      hot: true,
    },
    {
      img: '/ai-construction.png',
      title: 'AI-Based Home Construction using React, Node.js, MongoDB & LLM',
    },
    {
      img: '/dsa-learning.png',
      title: 'DSA Learning Mobile App using React Native, Expo Go, EAS & Material UI',
      fit: 'contain',
    },
    {
      img: '/job-finder.png',
      title: 'Job Finder using React, Web Scraping, Node.js & MongoDB',
      hot: true,
    },
    {
      img: autoexpense_hub,
      title: 'Auto Expense hub platform using React-vite tailwindcss Postman Express and MongoDB',
      hot: true,
    },
    {
      img: chat,
      title: 'Chat App using React-vite tailwindcss Express and MongoDB',
    },
    {
      img: pak,
      title: 'PakWheels Clone using React and TailwindCSS',
    },
    {
      img: linkedin,
      title: 'linkedin Clone using React and TailwindCSS',
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
      {/* Loader */}
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}

      {/* Mouse Tracker */}
      <MouseTracker />

      {/* Main Container with Unified Background */}
      <div className='relative bg-[#0a0e2a] min-h-screen overflow-x-hidden'>
        {/* Global Background Effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <ResponsiveAppBar />
          {/* ------------------------ landing --------------- */}

          <section id='landing'>
            <Landing2 />
          </section>

          {/* ------------------------ creative --------------- */}
          <section id='Creative' className='relative py-16 md:py-24'>
            <div className="relative px-4">
              {/* Section Header */}
              <div className="text-center mb-12 md:mb-16">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4">
                  ✨ How I Work
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Creative Process
                </h2>
                <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
                  My systematic approach to turning ideas into exceptional digital experiences
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {creativeData.map((item, index) => (
                  <Creative key={index} heading={item.heading} para={item.para} img={item.img} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* ------------------------ Counter --------------- */}

          <section id='Counter' className="relative py-16 md:py-20">
            <div className="relative max-w-7xl mx-auto px-4">
              {/* Section Header */}
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
                  📊 My Achievements
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  Numbers That Speak
                </h2>
              </div>

              {/* Counters */}
              <div className="flex flex-wrap justify-center items-stretch">
                <Counter label="Projects Completed" targetNumber={50} duration={2500} suffix="+" />
                <Counter label="Ongoing Projects" targetNumber={2} duration={3000} />
                <Counter label="Client Satisfaction" targetNumber={95} duration={2000} suffix="%" />
              </div>
            </div>
          </section>
          {/* ------------------------ Skills --------------- */}

          <section id='skill'>
            <div className='skill_row'>
              <Skills skills={skillArray} />
            </div>
          </section>



          {/* ------------------------ project --------------- */}
          <section id="Projects" className="relative py-16 md:py-24">
            <div className="relative px-4">
              {/* Section Header */}
              <div className="text-center mb-12 md:mb-16">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-cyan-400 text-sm font-medium mb-4">
                  🚀 My Work
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Project Showcase
                </h2>
                <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
                  A collection of projects that demonstrate my skills and passion for development
                </p>
              </div>

              {/* Projects Grid */}
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.slice(0, visibleProjects).map((project, index) => (
                  <Project key={index} imglink={project.img} title={project.title} index={index} fit={project.fit} hot={project.hot} />
                ))}
              </div>

              {/* Action Buttons */}
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
                {visibleProjects < projects.length && (
                  <button
                    className="group relative px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                    onClick={handleShowMore}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Show More Projects
                      <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                )}
                {visibleProjects > 3 && (
                  <button
                    className="px-8 py-3 rounded-xl border border-slate-600 text-slate-300 font-semibold hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                    onClick={handleShowLess}
                  >
                    <span className="flex items-center gap-2">
                      Show Less
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </section>


          {/* ------------------------ experience --------------- */}

          <section id='Experience'>

            <Experience_laptop />

          </section>

          {/* Floating Action Buttons */}
          <FloatingActions />

          {/* ------------------------ contact --------------- */}

          <section id='contact'>
            <ContactForm />
          </section>

          {/* ------------------------ footer --------------- */}
          <Footer />

        </div>
      </div>
    </>
  );
}

export default App;
