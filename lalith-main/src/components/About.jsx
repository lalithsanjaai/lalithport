import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-violet-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-violet-400">Who am I?</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            I am a college student studying Information Technology. I enjoy building web apps, designing UIs, and learning new technologies.
                            My focus is on writing maintainable code and creating pleasant user experiences.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {['Web Dev', 'Designer', 'Learner', 'Problem Solver'].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-violet-500/10 text-violet-300 rounded-full text-sm border border-violet-500/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-cyan-400">Education Journey</h3>

                        <div className="glass-card p-6 rounded-2xl flex gap-4 items-start">
                            <div className="p-3 bg-violet-600/20 rounded-lg text-violet-400">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">B.Tech Information Technology</h4>
                                <p className="text-gray-400 text-sm mb-2">Knowledge Institute of Technology, Salem</p>
                                <div className="text-sm text-gray-500 mb-2">2025 - Present</div>
                                <p className="text-gray-300">Focus: Web Development, Data Structures, and Algorithms.</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl flex gap-4 items-start">
                            <div className="p-3 bg-cyan-600/20 rounded-lg text-cyan-400">
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">Higher Secondary</h4>
                                <p className="text-gray-400 text-sm mb-2">Notre Dame of Holy Cross School, Salem</p>
                                <div className="text-sm text-gray-500 mb-2">2022</div>
                                <p className="text-gray-300">Active participation in Computer Science events. Top 10 rank.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
