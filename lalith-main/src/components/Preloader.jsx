import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#0f172a]"
        >
            <div className="flex flex-col items-center">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                        borderRadius: ["20%", "50%", "20%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeat: Infinity
                    }}
                    className="w-16 h-16 border-4 border-violet-500 border-t-cyan-400 rounded-xl mb-4"
                />
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-white text-xl font-bold tracking-wider"
                >
                    LOADING
                </motion.span>
            </div>
        </motion.div>
    );
};

export default Preloader;
