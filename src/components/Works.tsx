import React from 'react';
import { motion } from 'framer-motion';
import { WorkItem } from '../types';

import { Link } from 'react-router-dom';
import { works } from '../data/works';

export const Works: React.FC = () => {
  return (
    <section id="works" className="py-24 bg-wood-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-wood-600 tracking-widest text-sm font-bold uppercase block mb-2">Our Works</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-wood-900">制作実績</h2>
          </div>
          <Link to="/works" className="hidden md:block text-wood-600 hover:text-wood-900 font-medium underline underline-offset-4 decoration-1">
            View All Works
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <Link to={`/works/${work.id}`} key={work.id}>
              <motion.div
                className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={work.youtubeId ? `https://img.youtube.com/vi/${work.youtubeId}/maxresdefault.jpg` : work.imageUrl}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-wood-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                  <h3 className="text-xl md:text-2xl font-serif font-bold leading-relaxed">{work.title}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/works" className="text-wood-600 hover:text-wood-900 font-medium underline underline-offset-4 decoration-1">
            View All Works
          </Link>
        </div>
      </div>
    </section>
  );
};
