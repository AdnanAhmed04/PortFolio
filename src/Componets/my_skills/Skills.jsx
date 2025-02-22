import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaBootstrap, FaNodeJs, FaDatabase, FaGitAlt, FaFigma, FaJira, FaMobile } from "react-icons/fa";
import { GrCloudComputer } from "react-icons/gr";
import { DiVisualstudio } from "react-icons/di";
import { RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { TbBrandNextjs, TbBrandFramerMotion } from "react-icons/tb";
import { SiMui, SiChakraui, SiPostman, SiMongodb, SiAmazons3, SiJupyter, SiExpress, SiYarn } from "react-icons/si";
import { MdComputer } from "react-icons/md";

const skillsData = [
  {
    category: "Front End",
    color: "text-green-400",
    icon: (
      <span className="flex space-x-2 items-center">
        <MdComputer className="text-4xl" />
      </span>
    ),
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "Vue.js", icon: <FaVuejs className="text-green-500" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <TbBrandNextjs className="text-gray-300" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-teal-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      { name: "Material UI", icon: <SiMui className="text-blue-400" /> },
      { name: "Chakra UI", icon: <SiChakraui className="text-teal-300" /> },
      { name: "Framer Motion", icon: <TbBrandFramerMotion className="text-pink-400" /> },
      { name: "Figma", icon: <FaFigma className="text-red-400" /> },
    ],
  },
  {
    category: "Back End",
    color: "text-blue-400",
    icon: <GrCloudComputer className="text-4xl" />, 
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-300" /> },
      { name: "Express", icon: <SiExpress className="text-gray-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "SQL", icon: <FaDatabase className="text-blue-400" /> },
      { name: "Firebase", icon: <RiFirebaseFill className="text-yellow-400" /> },
    ],
  },
  {
    category: "Tools",
    color: "text-yellow-400",
    icon: <FaGitAlt className="text-4xl" />,
    skills: [
      { name: "VS Code", icon: <DiVisualstudio className="text-blue-400" /> },
      { name: "Git & Github", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Yarn", icon: <SiYarn className="text-blue-400" /> },
      { name: "Jira", icon: <FaJira className="text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Amazon S3", icon: <SiAmazons3 className="text-yellow-500" /> },
      { name: "Jupyter Notebook", icon: <SiJupyter className="text-orange-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      className="relative bg-black text-white py-16 px-6 md:px-12 lg:px-20 w-full bg-cover bg-center "
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1200')",
      }}
    >

      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative text-center mb-12">
        <h2 class="text-4xl font-bold tracking-wide mb-3 text-white flex items-center justify-center">
          <span class="flex-1 items-center border-t border-gray-400 mx-4"></span>
          ○ My Skills ○
          <span class="flex-1 border-t border-gray-400 mx-4"></span>
        </h2>
        <p className="text-gray-400 text-lg">
          Technical competencies in many areas with a key proficiency in the MERN stack .
        </p>
      </div>

      <div className="relative grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto opacity-85">
        {skillsData.map((section, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:shadow-2xl"
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">{section.icon}</span>
              <h3 className={`text-xl font-semibold ${section.color}`}>{section.category}</h3>
            </div>
            <ul className="text-gray-200 space-y-2">
              {section.skills.map((skill, i) => (
                <li key={i} className="flex items-center space-x-3 hover:text-white transition-all">
                  <span className="text-3xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div id="landing" className="relative text-center mt-12">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all transform hover:scale-105">
          About Me
        </button>
      </div>
    </section>
  );
};

export default Skills;
