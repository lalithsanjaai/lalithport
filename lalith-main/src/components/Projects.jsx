import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Travel and Tourism',
        desc: 'Immersive travel platform featuring VR/AR views of destinations. Built to enhance the booking experience.',
        img: '/pic/vr.png',
        link: 'https://mytrip-kohl.vercel.app/',
        tags: ['React', 'VR/AR', 'CSS']
    },
    {
        title: 'Herbious',
        desc: 'Educational platform for learning about herbs with 3D visualization capabilities.',
        img: '/pic/harb.png',
        link: 'https://herbours.netlify.app/',
        tags: ['JavaScript', '3D', 'Education']
    },
    {
        title: 'Job Portal',
        desc: 'Comprehensive job finding and application platform connecting seekers with employers.',
        img: '/pic/job.png',
        link: 'https://jobbd.netlify.app/',
        tags: ['Full Stack', 'Database', 'UI/UX']
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-violet-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
                        >
                            <div className="h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 bg-white text-gray-900 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                    >
                                        View Project <ExternalLink size={16} />
                                    </a>
                                </div>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.desc}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 glass rounded-md text-violet-300 border border-violet-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
