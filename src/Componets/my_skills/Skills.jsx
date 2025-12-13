import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaBootstrap, FaNodeJs, FaGitAlt, FaFigma, FaAws } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { TbBrandNextjs, TbBrandFramerMotion } from "react-icons/tb";
import { SiMui, SiChakraui, SiPostman, SiMongodb, SiExpress, SiTypescript, SiHostinger, SiCloudinary } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoPython } from "react-icons/io5";
import { MdOutlineMailLock } from "react-icons/md";

// Skill categories with icons and colors
const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Python", icon: IoLogoPython, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/30" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/30" },
    ]
  },
  {
    title: "Front-End",
    icon: "🎨",
    gradient: "from-cyan-500 to-blue-500",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/30" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/30" },
      { name: "React", icon: FaReact, color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/30" },
      { name: "Next.js", icon: TbBrandNextjs, color: "text-white", bg: "bg-gray-500/10", border: "border-gray-500/30" },
      { name: "Vue.js", icon: FaVuejs, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/30" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-sky-400", bg: "bg-sky-400/10", border: "border-sky-400/30" },
      { name: "Material UI", icon: SiMui, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/30" },
      { name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/30" },
      { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/30" },
      { name: "Chakra UI", icon: SiChakraui, color: "text-teal-400", bg: "bg-teal-400/10", border: "border-teal-400/30" },
      { name: "Figma", icon: FaFigma, color: "text-pink-400", bg: "bg-pink-400/10", border: "border-pink-400/30" },
    ]
  },
  {
    title: "Back-End",
    icon: "⚙️",
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/30" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300", bg: "bg-gray-500/10", border: "border-gray-500/30" },
      { name: "MongoDB", icon: BiLogoMongodb, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/30" },
      { name: "JWT", icon: MdOutlineMailLock, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/30" },
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "AWS S3", icon: FaAws, color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/30" },
      { name: "Hostinger", icon: SiHostinger, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/30" },
      { name: "Cloudinary", icon: SiCloudinary, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/30" },
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: "🤖",
    gradient: "from-violet-500 to-purple-500",
    skills: [
      { name: "Fine Tuning", icon: null, color: "text-violet-400", bg: "bg-violet-400/10", border: "border-violet-400/30" },
      { name: "RAG Pipelines", icon: null, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/30" },
      { name: "Selenium", icon: null, color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/30" },
      { name: "Beautiful Soup", icon: null, color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/30" },
      { name: "LangChain", icon: null, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30" },
    ]
  },
  {
    title: "Tools",
    icon: "🛠️",
    gradient: "from-slate-500 to-zinc-500",
    skills: [
      { name: "Git & GitHub", icon: FaGitAlt, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/30" },
      { name: "VS Code", icon: DiVisualstudio, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/30" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/30" },
      { name: "ChatGPT", icon: null, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30", isAI: true },
      { name: "Google Analytics", icon: null, color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30", isGoogle: true },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 }
  }
};

const Skills = () => {
  return (
    <section className="relative py-16 md:py-24 px-4">
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
            💡 My Tech Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
            Technologies
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            A showcase of the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />

              {/* Card Content */}
              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className={`text-xl font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`${skill.bg} ${skill.border} border rounded-xl px-3 py-2 flex items-center gap-2 cursor-default transition-all duration-300 hover:shadow-lg`}
                    >
                      {skill.icon && (
                        <skill.icon className={`w-4 h-4 ${skill.color}`} />
                      )}
                      {skill.isAI && (
                        <svg className={`w-4 h-4 ${skill.color}`} stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                        </svg>
                      )}
                      {skill.isGoogle && (
                        <svg className={`w-4 h-4 ${skill.color}`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 488 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                        </svg>
                      )}
                      <span className={`text-sm font-medium ${skill.color}`}>
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
