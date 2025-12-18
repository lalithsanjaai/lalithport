import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

// I'll stick to custom logic or framer motion for simplicity to avoid extra unsupported installs unless I run it. 
// Actually, I can use a simple custom hook or effects like in the original code but cleaner.
// For now, let's implement a simple typer or use `framer-motion` text reveal.

import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-violet-600/30 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-cyan-600/30 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-pink-600/30 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl w-full mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left z-10"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Lalith sanjaai</span>
                    </h2>
                    {/* Type Animation implemented */}
                    <div className="text-xl md:text-2xl text-violet-300 mb-8 h-8 font-medium">
                        <TypeAnimation
                            sequence={[
                                'Building digital experiences that matter.',
                                1000,
                                'Designing delightful user interfaces.',
                                1000,
                                'Creating responsive web applications.',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        A college student passionate about web development, UI/UX, and building creative solutions with modern technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="/file/Lalithcv.pdf"
                            download
                            className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25"
                        >
                            <Download size={20} /> Resume
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-3 glass hover:bg-white/10 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2"
                        >
                            View Projects
                        </a>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-cyan-400 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <div className="relative rounded-3xl overflow-hidden glass border border-white/10 p-2 aspect-square max-w-md mx-auto">
                        <img
                            src="/pic/profile.jpg"
                            alt="Lalith Sanjaai"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </motion.div>
            </div>

            <motion.a
                href="#about"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors"
            >
                <ArrowDown size={32} />
            </motion.a>
        </section>
    );
};

export default Hero;
