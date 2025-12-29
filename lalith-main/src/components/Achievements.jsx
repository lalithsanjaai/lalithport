import { motion } from 'framer-motion';
import { Trophy, Award, ScrollText } from 'lucide-react';

const achievements = [
    {
        title: 'Codewar 1.0 Winner',
        icon: <Trophy className="text-yellow-400" size={32} />,
        image: '/pic/codeware.jpeg',
        desc: 'Won 1st place in the codewar 1.0 of cash prize of 10000.',
        color: 'from-yellow-500/20 to-orange-500/20'
    },
    {
        title: 'BGS Certification',
        icon: <Award className="text-blue-400" size={32} />,
        image: '/pic/bgs.jpeg',
        desc: 'participated in the BGS "ADVAYA"24hrs hackathon in bangalore.',
        color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
        title: 'Research Paper Published',
        icon: <ScrollText className="text-pink-400" size={32} />,
        image: '/pic/presentation.jpeg',
        desc: 'Presented "Thermochemical Conversion of Municipal Solid Waste" at Anna University, Chennai recognized as the best paper.',
        color: 'from-pink-500/20 to-rose-500/20'
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievements</h2>
                    <div className="w-20 h-1 bg-violet-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card rounded-2xl overflow-hidden group"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 mix-blend-overlay z-10`}></div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 relative">
                                <div className="absolute -top-8 right-6 w-14 h-14 glass rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 pr-12">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
