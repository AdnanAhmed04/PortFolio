import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const Project = ({ imglink, title, index = 0 }) => {
  // Extract tech stack from title for display
  const techMatch = title.match(/using\s+(.+)$/i);
  const projectName = title.split(' using ')[0];
  const techString = techMatch ? techMatch[1] : '';
  const techStack = techString.split(/,|\s*&\s*|\s+and\s+/).map(t => t.trim()).filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative w-full bg-gradient-to-br from-[#0f1642] to-[#0a0e2a] rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 shadow-lg hover:shadow-cyan-500/20"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={imglink}
          alt={projectName}
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e2a] via-transparent to-transparent opacity-60" />

        {/* Hover Overlay with Actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
          <motion.a
            href="https://github.com/AdnanAhmed04"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://github.com/AdnanAhmed04"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Floating Badge */}
        <div className="absolute top-3 right-3">
          <div className="px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 text-xs font-medium flex items-center gap-1">
            <FaCode className="w-3 h-3" />
            <span>Project</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Project Title */}
        <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
          {projectName}
        </h3>

        {/* Tech Stack Tags */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 4 && (
              <span className="px-2 py-1 text-xs rounded-md bg-slate-800/80 text-slate-400">
                +{techStack.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Action Button */}
        <motion.a
          href="https://github.com/AdnanAhmed04"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
        >
          <FaGithub className="w-4 h-4" />
          <span>View Code</span>
        </motion.a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
    </motion.div>
  );
};

export default Project;
