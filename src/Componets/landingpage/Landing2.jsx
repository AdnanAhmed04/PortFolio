import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaStackOverflow, FaDownload, FaArrowRight } from "react-icons/fa";
import { SiHackerrank, SiUpwork } from "react-icons/si";

const Landing2 = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [loop, setLoop] = useState(0);

    const words = ["Responsive Design", "Attractive Design", "Efficient Websites", "Modern UI/UX"];
    const typingSpeed = 120;
    const deletingSpeed = 80;
    const delayBetweenWords = 2500;

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[loop % words.length];

            if (!isDeleting) {
                setText(currentWord.substring(0, index + 1));
                setIndex(index + 1);
            } else {
                setText(currentWord.substring(0, index - 1));
                setIndex(index - 1);
            }

            if (!isDeleting && index === currentWord.length) {
                setTimeout(() => setIsDeleting(true), delayBetweenWords);
            }

            if (isDeleting && index === 0) {
                setIsDeleting(false);
                setLoop(loop + 1);
            }
        };

        const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(typingTimeout);
    }, [text, index, isDeleting, loop]);


    const handleDownloadCV = () => {
        window.open("Adnan Ahmed CV.pdf", "_blank");
    };

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/adnan-ahmed-066847242/", label: "LinkedIn", color: "hover:bg-blue-500", borderColor: "hover:border-blue-500" },
        { icon: FaGithub, href: "https://github.com/AdnanAhmed04", label: "GitHub", color: "hover:bg-gray-600", borderColor: "hover:border-gray-500" },
        { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61561668212685&sk=friends", label: "Facebook", color: "hover:bg-blue-600", borderColor: "hover:border-blue-600" },
        { icon: FaStackOverflow, href: "https://stackoverflow.com/users/27099467/adnan-ahmed", label: "Stack Overflow", color: "hover:bg-orange-500", borderColor: "hover:border-orange-500" },
        { icon: SiHackerrank, href: "https://www.hackerrank.com/profile/adnanahmed140221", label: "HackerRank", color: "hover:bg-green-600", borderColor: "hover:border-green-600" },
        { icon: SiUpwork, href: "https://www.upwork.com/freelancers/~your-profile", label: "Upwork", color: "hover:bg-green-500", borderColor: "hover:border-green-500" },
    ];

    const techStack = ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"];

    return (
        <section className="relative min-h-screen flex items-center pt-16 md:pt-20">
            {/* Main Content */}
            <div className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="flex-[1.2] text-center lg:text-left w-full"
                        >
                            {/* Status Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 mb-4"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs sm:text-sm text-emerald-400 font-medium">Available for Freelance</span>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h2 className="text-base sm:text-lg text-slate-400 font-medium mb-2">
                                    Hello, I'm
                                </h2>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                                    <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                        Adnan{" "}
                                    </span>
                                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                        Ahmed
                                    </span>
                                </h1>
                            </motion.div>

                            {/* Typing Effect */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mb-4"
                            >
                                <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                                    <span className="text-slate-400 text-base sm:text-lg">I create</span>
                                    <div className="relative">
                                        <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                                            {text}
                                        </span>
                                        <span className="text-yellow-400 animate-pulse ml-0.5">|</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-5"
                            >
                                Full Stack Developer specializing in building exceptional digital experiences.
                                I transform ideas into <span className="text-cyan-400 font-medium">modern</span>,
                                <span className="text-blue-400 font-medium"> scalable</span>, and
                                <span className="text-purple-400 font-medium"> user-centric</span> web applications.
                            </motion.p>

                            {/* Tech Stack Pills */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6"
                            >
                                {techStack.map((tech, idx) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6 + idx * 0.08 }}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6"
                            >
                                <motion.button
                                    onClick={scrollToContact}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                                >
                                    <span>Let's Talk</span>
                                    <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                                <motion.button
                                    onClick={handleDownloadCV}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-3 rounded-xl border-2 border-slate-600 text-white font-semibold text-sm flex items-center gap-2 hover:border-cyan-500/70 hover:bg-cyan-500/10 transition-all duration-300"
                                >
                                    <FaDownload className="w-3 h-3" />
                                    <span>Resume</span>
                                </motion.button>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-wrap gap-2 justify-center lg:justify-start items-center"
                            >
                                <span className="text-slate-500 text-xs mr-1">Find me</span>
                                {socialLinks.map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-9 h-9 rounded-lg bg-slate-800/70 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white ${social.color} ${social.borderColor} transition-all duration-300`}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-4 h-4" />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Content - Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                            className="flex-1 flex justify-center lg:justify-end w-full"
                        >
                            <div className="relative">
                                {/* Outer Glow */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-25" />

                                {/* Image Container */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900"
                                >
                                    <img
                                        src="banner-image.png"
                                        alt="Adnan Ahmed - Full Stack Developer"
                                        className="w-full h-full object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e2a]/40 via-transparent to-transparent" />
                                </motion.div>

                                {/* Floating Badge - Developer */}
                                <motion.div
                                    animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-2 -right-2 px-3 py-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30"
                                >
                                    <span className="text-lg">💻</span>
                                </motion.div>

                                {/* Floating Badge - Experience */}
                                <motion.div
                                    animate={{ y: [0, 6, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute -bottom-1 -left-2 px-3 py-2 rounded-xl bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 shadow-lg"
                                >
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-xs font-medium text-slate-300">2+ Years</span>
                                    </div>
                                </motion.div>

                                {/* Floating Badge - Stack */}
                                <motion.div
                                    animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute top-1/2 -right-6 hidden sm:block px-3 py-1.5 rounded-lg bg-purple-500/90 shadow-lg shadow-purple-500/30"
                                >
                                    <span className="text-white text-xs font-medium">MERN</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-1"
                >
                    <span className="text-slate-500 text-[10px] tracking-wider uppercase">Scroll</span>
                    <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                            className="w-1 h-2 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Landing2;
