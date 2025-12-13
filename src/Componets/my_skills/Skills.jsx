
import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaBootstrap, FaNodeJs, FaDatabase, FaGitAlt, FaFigma, FaJira, FaTools } from "react-icons/fa";
import { GrCloudComputer } from "react-icons/gr";
import { DiVisualstudio } from "react-icons/di";
import { RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { TbBrandNextjs, TbBrandFramerMotion } from "react-icons/tb";
import { SiMui, SiChakraui, SiPostman, SiMongodb, SiAmazons3, SiJupyter, SiExpress, SiYarn } from "react-icons/si";
import { MdComputer } from "react-icons/md";
import { GrGraphQl } from "react-icons/gr";
import { BiLogoMongodb } from "react-icons/bi";
import { FaAws } from "react-icons/fa6";
import { SiHostinger } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";








import { MdOutlineMailLock } from "react-icons/md";


const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  }),
};

const Skills = () => {
  return (
    
<div className='flex flex-col items-center justify-center mt-20'>
  <div className='flex justify-center'>
      <h2 className='text-white text-5xl'>Technologies </h2>

  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 text-white w-[80%]">
      <div className="bg-transparent border-2 border-gray-500 p-6 rounded-lg shadow-lg transform transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">Programming Languages</h2>
        <div className="flex flex-wrap gap-3">
          <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Python <IoLogoPython  className="text-yellow-600 w-5 h-4" />
</span>
          <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">JavaScript <FaJs className="text-yellow-500 w-5 h-5" /></span>
          <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">TypeScript <SiTypescript  className="text-blue-500 w-5 h-5"/>
</span>
        </div>
      </div>

      {/* Front-End Section */}
      <div className="bg-transparent border-2 border-gray-500 p-6 rounded-lg shadow-lg transform transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">Front-End</h2>
        <div className="flex flex-wrap gap-3">
          <span className="hover:scale-105 transform transition-all duration-300 bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4 ">HTML5 <FaHtml5 className="text-orange-400 w-5 h-5" /></span>
          <span className="hover:scale-105 transform transition-all duration-300 bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">CSS3 <FaCss3Alt className="text-blue-500 w-5 h-5" /></span>
          <span className="hover:scale-105 transform transition-all duration-300 bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">React <FaReact className="text-cyan-500 w-5 h-5" /></span>
          <span className="hover:scale-105 transform transition-all duration-300 bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Next.js <TbBrandNextjs className="text-gray-400 w-5 h-5" /></span>
          <span className="hover:scale-105 transform transition-all duration-300 bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Vue.js <FaVuejs className="text-green-400 w-5 h-5" /></span>
          <span className="hover:scale-105 transform transition-all duration-300 bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Tailwind CSS <RiTailwindCssFill className="text-sky-400 w-5 h-5" /></span>
          <span className="hover:scale-105 transform transition-all duration-300 bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Material UI <SiMui className="text-blue-400 w-5 h-5" /></span>
          <span className="hover:scale-105 transform transition-all duration-300 bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Framer Motion <TbBrandFramerMotion className="text-gray-600 w-5 h-5" /></span>
          <span className="hover:scale-105 transform transition-all duration-300 bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Bootstrap <FaBootstrap className="text-purple-500 w-5 h-5" /></span>
          <span className="hover:scale-105 transform transition-all duration-300 bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Chakra UI <SiChakraui className="text-teal-400 w-5 h-5" /></span>
          <span className="hover:scale-105 transform transition-all duration-300 bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Figma <FaFigma className="text-pink-500 w-5 h-5" /></span>
        </div>
      </div>

      {/* Back-End Section */}
      <div className="bg-transparent border-2 border-gray-500 p-6 rounded-lg shadow-lg transform transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">Back-End</h2>
        <div className="flex flex-wrap gap-3">
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Node.js <FaNodeJs className="text-pink-500 w-5 h-5"/></span>
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Express.js <SiExpress className="text-gray-100 w-4 h-4" /></span>
          {/* <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Nest.js</span> */}
          {/* <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">PostgreSQL <SiPostman className="text-blue-500" /></span> */}
          {/* <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">MySQL</span> */}
          {/* <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">GraphQL <GrGraphQl /></span> */}
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">JWT <MdOutlineMailLock className='text-gray-400 w-5 h-5' />
</span>
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">MongoDB  <BiLogoMongodb  className="text-green-500 w-5 h-5"/>
</span>

        </div>
      </div>

      {/* DevOps & Cloud Section */}
      <div className="bg-transparent border-2 border-gray-500 p-6 rounded-lg shadow-lg transform transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">DevOps & Cloud</h2>
        <div className="flex flex-wrap gap-3">
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">AWS S3 <FaAws className="text-yellow-400 w-5 h-5" /></span>
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Hostinger <SiHostinger  className="text-purple-600 w-4 h-4" /></span>
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Cloudinary <SiCloudinary  className="text-white w-5 h-5" /></span> 
        </div>
      </div>

      {/* AI & Machine Learning Section */}
      <div className="bg-transparent border-2 border-gray-500 p-6 rounded-lg shadow-lg transform transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">AI & Machine Learning</h2>
        <div className="flex flex-wrap gap-3">
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Fine Tuning</span>
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">RAG Pipelines</span>
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Selenium</span>
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Beautiful Soup</span>
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">LangChain</span>
        </div>
      </div>

      {/* Tools Section */}
      <div className="bg-transparent border-2 border-gray-500 p-6 rounded-lg shadow-lg transform transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">Tools</h2>
        <div className="flex flex-wrap gap-3">
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Git & GitHub <FaGitAlt className="text-green-400 w-6 h-6" /></span>
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">VS Code <DiVisualstudio className="text-blue-500 w-6 h-6" /></span>
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Postman <SiPostman className="text-orange-500 w-5 h-5" /></span>
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">ChatGPT <svg className='w-4 h-4' stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path></svg></span>
          <span className="bg-gray-800 hover:scale-105 transform transition-all duration-300 text-white px-4 py-2 rounded-full text-sm shadow-md flex justify-center items-center gap-4">Google Analytics <svg className='w-4 h-4' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 488 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg></span>
        </div>
      </div>
      
    </div>
    </div>
)
};

export default Skills;
