import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { works } from '../data/works';

export const WorksPage: React.FC = () => {
    return (
        <div className="pt-24 pb-12 bg-wood-50 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-wood-600 tracking-widest text-sm font-bold uppercase block mb-2">Portfolio</span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-wood-900">All Works</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {works.map((work, index) => (
                        <Link to={`/works/${work.id}`} key={work.id}>
                            <motion.div
                                className="group relative overflow-hidden rounded-sm aspect-video cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <img
                                    src={work.youtubeId ? `https://img.youtube.com/vi/${work.youtubeId}/maxresdefault.jpg` : work.imageUrl}
                                    alt={work.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-wood-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 text-center border-2 border-transparent group-hover:border-wood-300/20 m-2">
                                    <span className="text-xs tracking-[0.2em] uppercase mb-3 text-wood-300">{work.category}</span>
                                    <h3 className="text-xl md:text-2xl font-serif font-bold">{work.title}</h3>
                                    <div className="w-8 h-[1px] bg-wood-300 mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
