import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFacebook, FaStackOverflow, FaHeart, FaArrowUp } from 'react-icons/fa';
import { SiHackerrank, SiUpwork } from 'react-icons/si';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/adnan-ahmed-066847242/", label: "LinkedIn" },
        { icon: FaGithub, href: "https://github.com/AdnanAhmed04", label: "GitHub" },
        { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61561668212685", label: "Facebook" },
        { icon: FaStackOverflow, href: "https://stackoverflow.com/users/27099467/adnan-ahmed", label: "Stack Overflow" },
        { icon: SiHackerrank, href: "https://www.hackerrank.com/profile/adnanahmed140221", label: "HackerRank" },
        { icon: SiUpwork, href: "https://www.upwork.com/freelancers/~your-profile", label: "Upwork" },
    ];

    const quickLinks = [
        { name: "Home", href: "#landing" },
        { name: "Skills", href: "#skill" },
        { name: "Projects", href: "#Projects" },
        { name: "Experience", href: "#Experience" },
        { name: "Contact", href: "#contact" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[#060918] border-t border-slate-800/50">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4"
                        >
                            Adnan Ahmed
                        </motion.h3>
                        <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                            Full Stack Developer passionate about creating responsive, efficient, and visually stunning web applications. Let's build something amazing together!
                        </p>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-cyan-500 group-hover:w-3 transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-lg">Get In Touch</h4>
                        <ul className="space-y-3">
                            <li className="text-slate-400">
                                <span className="text-cyan-400">📍</span> Pakistan
                            </li>
                            <li>
                                <a href="mailto:adnanahmedb7208@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                    <span className="text-cyan-400">✉️</span> adnanahmedb7208@gmail.com
                                </a>
                            </li>
                            <li className="text-slate-400">
                                <span className="text-cyan-400">💼</span> Available for Freelance
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        © {currentYear} Adnan Ahmed. Crafted with{' '}
                        <FaHeart className="inline w-3 h-3 text-red-500 animate-pulse" />{' '}
                        using React & TailwindCSS
                    </p>

                    {/* Scroll to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                    >
                        <span className="text-sm">Back to Top</span>
                        <FaArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                </div>
            </div>

            {/* Gradient Line at Bottom */}
            <div className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
        </footer>
    );
};

export default Footer;
