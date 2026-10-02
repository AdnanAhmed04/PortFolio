import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// Small icons shown in the center hub button, arranged like a mini social-media wheel.
const hubIcons = [
    { icon: FaWhatsapp, color: '#22c55e', position: 'top-0.5 left-1/2 -translate-x-1/2' },
    { icon: FaLinkedin, color: '#0ea5e9', position: 'bottom-1 left-1 ' },
    { icon: FaGithub, color: '#e2e8f0', position: 'bottom-1 right-1' },
];

const RADIUS = 90; // distance of each action icon from the center button, in px

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
        color: 'from-sky-500 to-blue-600',
        hoverColor: 'hover:shadow-sky-500/50',
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
        color: 'from-blue-600 to-indigo-600',
        hoverColor: 'hover:shadow-blue-500/50',
    },
];

// Spread the icons across a quarter circle (90deg -> 180deg) so they fan out
// up and to the left of the main button, staying on-screen.
const getPosition = (index, total) => {
    const startAngle = 95;
    const endAngle = 185;
    const angle = startAngle + ((endAngle - startAngle) / (total - 1)) * index;
    const radians = (angle * Math.PI) / 180;
    const x = Math.cos(radians) * RADIUS;
    const y = -Math.sin(radians) * RADIUS;
    return { x, y };
};

const FloatingActions = ({ hidden = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`fixed bottom-24 right-6 z-[90] transition-all duration-300 ${hidden ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="relative w-14 h-14">
                {/* Action Buttons - fan out in a circular arc */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {actions.map((action, index) => {
                                const { x, y } = getPosition(index, actions.length);
                                return (
                                    <motion.a
                                        key={action.label}
                                        href={action.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                                        animate={{ opacity: 1, scale: 1, x, y }}
                                        exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.05,
                                            type: 'spring',
                                            stiffness: 260,
                                            damping: 20,
                                        }}
                                        whileHover={{ scale: 1.15 }}
                                        className="group absolute top-0 left-0 w-14 h-14 flex items-center justify-center"
                                        aria-label={action.label}
                                    >
                                        {/* Icon */}
                                        <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg ${action.hoverColor} hover:shadow-xl transition-all duration-300`}>
                                            <action.icon className="w-4.5 h-4.5 text-white" />
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </>
                    )}
                </AnimatePresence>

                {/* Main Button - multi social-media hub style */}
                <motion.div
                    animate={{ scale: isOpen ? 1.05 : 1, rotate: isOpen ? 8 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-14 h-14 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer"
                    style={{
                        background: 'conic-gradient(from 0deg, #0ea5e9 0deg 90deg, #4f46e5 90deg 180deg, #0284c7 180deg 270deg, #1d4ed8 270deg 360deg)',
                    }}
                >
                    {/* Center hub */}
                    <div className="absolute inset-[9px] rounded-full bg-slate-900 shadow-inner" />

                    {/* Mini social icons arranged around the hub */}
                    {hubIcons.map(({ icon: Icon, color, position }, i) => (
                        <div
                            key={i}
                            className={`absolute ${position} w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center shadow-sm`}
                        >
                            <Icon className="w-3 h-3" style={{ color }} />
                        </div>
                    ))}
                </motion.div>

                {/* Pulse Animation Ring */}
                {!isOpen && (
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-sky-500/30 pointer-events-none"
                    />
                )}
            </div>
        </div>
    );
};

export default FloatingActions;
