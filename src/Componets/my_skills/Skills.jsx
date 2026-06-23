import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaBootstrap, FaNodeJs, FaGitAlt, FaFigma, FaAws, FaSpider, FaBrain } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { TbBrandNextjs, TbBrandFramerMotion, TbVectorTriangle, TbAdjustmentsHorizontal } from "react-icons/tb";
import { SiMui, SiChakraui, SiPostman, SiMongodb, SiExpress, SiTypescript, SiHostinger, SiCloudinary, SiSupabase, SiSelenium, SiLangchain, SiOpenai, SiGoogleanalytics } from "react-icons/si";
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
      { name: "Supabase", icon: SiSupabase, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30" },
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
      { name: "LLM Implementation", icon: SiOpenai, color: "text-fuchsia-400", bg: "bg-fuchsia-400/10", border: "border-fuchsia-400/30" },
      { name: "Fine Tuning", icon: TbAdjustmentsHorizontal, color: "text-violet-400", bg: "bg-violet-400/10", border: "border-violet-400/30" },
      { name: "RAG Pipelines", icon: TbVectorTriangle, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/30" },
      { name: "Selenium", icon: SiSelenium, color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/30" },
      { name: "Beautiful Soup", icon: FaSpider, color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/30" },
      { name: "LangChain", icon: SiLangchain, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30" },
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
      { name: "ChatGPT", icon: SiOpenai, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30" },
      { name: "Google Analytics", icon: SiGoogleanalytics, color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30" },
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
