import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaPlus } from 'react-icons/fa';

const FloatingActions = () => {
    const [isOpen, setIsOpen] = useState(false);

    const actions = [
        {
            icon: FaWhatsapp,
            href: 'https://wa.me/+923188397653',
            label: 'WhatsApp',
            color: 'from-green-500 to-green-600',
            hoverColor: 'hover:shadow-green-500/50',
        },
        {
            icon: FaLinkedin,
            href: 'https://www.linkedin.com/in/adnan-ahmed-066847242/',
            label: 'LinkedIn',
            color: 'from-blue-500 to-blue-600',
            hoverColor: 'hover:shadow-blue-500/50',
        },
        {
            icon: FaGithub,
            href: 'https://github.com/AdnanAhmed04',
            label: 'GitHub',
            color: 'from-slate-600 to-slate-700',
            hoverColor: 'hover:shadow-slate-500/50',
        },
        {
            icon: FaEnvelope,
            href: 'mailto:adnanahmedb7208@gmail.com',
            label: 'Email',
            color: 'from-red-500 to-orange-500',
            hoverColor: 'hover:shadow-red-500/50',
        },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-[90] flex flex-col-reverse items-end gap-3">
            {/* Action Buttons */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {actions.map((action, index) => (
                            <motion.a
                                key={action.label}
                                href={action.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0, y: 20 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.08,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                whileHover={{ scale: 1.1, x: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className={`group flex items-center gap-3`}
                                aria-label={action.label}
                            >
                                {/* Label */}
                                <motion.span
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.08 + 0.2 }}
                                    className="hidden sm:block px-3 py-1.5 rounded-lg bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 text-white text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    {action.label}
                                </motion.span>

                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg ${action.hoverColor} hover:shadow-xl transition-all duration-300`}>
                                    <action.icon className="w-5 h-5 text-white" />
                                </div>
                            </motion.a>
                        ))}
                    </>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
            >
                <FaPlus className="w-6 h-6 text-white" />
            </motion.button>

            {/* Pulse Animation Ring */}
            {!isOpen && (
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-cyan-500/30 pointer-events-none"
                />
            )}
        </div>
    );
};

export default FloatingActions;
