import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsComplete(true);
                        setTimeout(() => onLoadingComplete(), 500);
                    }, 300);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-[#0a0e2a] flex flex-col items-center justify-center"
                >
                    {/* Background Animation */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>

                    {/* Loader Content */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo/Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Adnan Ahmed
                            </h1>
                            <p className="text-slate-400 text-center mt-2">Full Stack Developer</p>
                        </motion.div>

                        {/* Animated Loader Ring */}
                        <div className="relative w-24 h-24 mb-8">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 border-r-purple-500"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-2 rounded-full border-4 border-transparent border-b-blue-500 border-l-pink-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">{Math.min(Math.round(progress), 100)}%</span>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.min(progress, 100)}%` }}
                                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
                            />
                        </div>

                        {/* Loading Text */}
                        <motion.p
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-slate-500 mt-4 text-sm"
                        >
                            Loading amazing things...
                        </motion.p>
                    </div>

                    {/* Decorative Floating Elements */}
                    <motion.div
                        animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 right-1/4 w-4 h-4 bg-cyan-500 rounded-full opacity-50"
                    />
                    <motion.div
                        animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-500 rounded-full opacity-50"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
