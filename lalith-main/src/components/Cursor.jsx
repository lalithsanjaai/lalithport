import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-violet-400 pointer-events-none z-[9999] mix-blend-difference hidden md:block" // Hidden on mobile
            animate={{
                x: position.x - 16,
                y: position.y - 16,
                scale: isHovering ? 1.5 : 1,
                backgroundColor: isHovering ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
            }}
            transition={{
                x: { duration: 0, ease: "linear" }, // Following mouse should be instant-ish
                y: { duration: 0, ease: "linear" },
                scale: { duration: 0.15 },
                backgroundColor: { duration: 0.15 }
            }}
        >
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </motion.div>
    );
};

export default Cursor;
