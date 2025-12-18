import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes, FaHome, FaCogs, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const pages = [
  { name: 'About', nav_id: 'landing', icon: FaHome },
  { name: 'Process', nav_id: 'Creative', icon: FaCogs },
  { name: 'Skills', nav_id: 'skill', icon: FaCode },
  { name: 'Projects', nav_id: 'Projects', icon: FaProjectDiagram },
  { name: 'Contact', nav_id: 'contact', icon: FaEnvelope },
];

function ResponsiveAppBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
            ? 'bg-[#0a0e2a]/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-slate-800/50'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                &lt;Dev /&gt;
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {pages.map((page, index) => (
                <ScrollLink
                  key={index}
                  to={page.nav_id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white cursor-pointer transition-colors group"
                >
                  {page.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-3/4 transition-all duration-300" />
                </ScrollLink>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="ml-4 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium cursor-pointer hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                >
                  Hire Me
                </ScrollLink>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-white"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0a0e2a]/98 backdrop-blur-xl"
              onClick={closeMenu}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative h-full flex flex-col items-center justify-center px-8"
            >
              {/* Menu Items */}
              <div className="w-full max-w-sm space-y-3">
                {pages.map((page, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ delay: 0.1 + index * 0.08 }}
                  >
                    <ScrollLink
                      to={page.nav_id}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      onClick={closeMenu}
                      className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <page.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">
                        {page.name}
                      </span>
                      <motion.div
                        className="ml-auto"
                        whileHover={{ x: 5 }}
                      >
                        <svg className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </ScrollLink>
                  </motion.div>
                ))}

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + pages.length * 0.08 }}
                  className="pt-4"
                >
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={closeMenu}
                    className="block w-full text-center px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-lg font-semibold shadow-lg shadow-cyan-500/25 cursor-pointer"
                  >
                    ✨ Let's Work Together
                  </ScrollLink>
                </motion.div>
              </div>

              {/* Footer in Menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 text-center"
              >
                <p className="text-slate-500 text-sm">Swipe or tap to navigate</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ResponsiveAppBar;
