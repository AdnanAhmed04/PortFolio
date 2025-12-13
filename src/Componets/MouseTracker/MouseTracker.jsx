import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseTracker = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, [data-hover]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-cyan-400 pointer-events-none z-[9998] mix-blend-difference hidden md:block"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isHovering ? 2.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />

            {/* Trailing Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-cyan-400/50 pointer-events-none z-[9997] hidden md:block"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.8 : 0.5,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.5,
                }}
            />

            {/* Glow Effect */}
            <motion.div
                className="fixed top-0 left-0 w-32 h-32 rounded-full bg-cyan-500/10 blur-xl pointer-events-none z-[9996] hidden md:block"
                animate={{
                    x: mousePosition.x - 64,
                    y: mousePosition.y - 64,
                }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                }}
            />
        </>
    );
};

export default MouseTracker;
