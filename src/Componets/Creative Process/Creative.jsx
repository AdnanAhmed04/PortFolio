import React from 'react';
import { motion } from 'framer-motion';

const Creative = ({ heading, para, img, index = 0 }) => {
  // Extract number and title from heading
  const numberMatch = heading.match(/^(\d+)/);
  const stepNumber = numberMatch ? numberMatch[1] : '';
  const title = heading.replace(/^\d+\s*/, '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />

      {/* Step Number Badge */}
      <div className="absolute top-4 right-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
          <span className="text-sm font-bold text-cyan-400">{stepNumber}</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon Container */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-4xl group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300"
        >
          <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
            {img}
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
          {para}
        </p>

        {/* Decorative Line */}
        <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-20 transition-all duration-500" />
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
    </motion.div>
  );
};

export default Creative;