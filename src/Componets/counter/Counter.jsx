import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Counter = ({ label, targetNumber, duration, suffix = '', icon }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = Math.ceil(targetNumber / steps);

    const updateCounter = () => {
      start += increment;
      if (start > targetNumber) start = targetNumber;
      setCount(start);
      if (start < targetNumber) {
        requestAnimationFrame(() => setTimeout(updateCounter, stepTime));
      }
    };

    updateCounter();
  }, [hasStarted, targetNumber, duration]);

  return (
    <motion.div
      ref={counterRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex-1 min-w-[200px] max-w-[300px] p-8 m-4 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Number */}
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-3"
        >
          <span className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {count}
          </span>
          <span className="text-3xl md:text-4xl font-bold text-cyan-400">{suffix}</span>
        </motion.div>

        {/* Label */}
        <p className="text-slate-400 text-sm md:text-base font-medium tracking-wide group-hover:text-slate-300 transition-colors">
          {label}
        </p>

        {/* Decorative Line */}
        <div className="mt-4 h-1 w-12 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-20 transition-all duration-500" />
      </div>

      {/* Corner Decoration */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
    </motion.div>
  );
};

export default Counter;
