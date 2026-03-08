import React from 'react';
import { motion } from 'framer-motion';
import { WorkItem } from '../types';

import { Link } from 'react-router-dom';
import { works } from '../data/works';

export const Works: React.FC = () => {
  return (
    <section id="works" className="py-32 bg-wood-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-wood-500 tracking-[0.3em] text-xs font-bold uppercase block mb-4">Our Works</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-900">制作実績</h2>
          </div>
          <Link to="/works" className="hidden md:block text-wood-600 hover:text-wood-900 font-medium underline underline-offset-4 decoration-1">
            View All Works
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <Link to={`/works/${work.id}`} key={work.id}>
              <motion.div
                className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-wood-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={work.youtubeId ? `https://img.youtube.com/vi/${work.youtubeId}/maxresdefault.jpg` : work.imageUrl}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-wood-900 text-white text-xs font-bold px-3 py-1 rounded-sm tracking-wider shadow-lg">
                    {work.category || "プロモーション"}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-wood-500 text-xs font-bold mb-3 tracking-wide uppercase">
                    {work.subtitle || work.category}
                  </p>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-wood-900 mb-4 leading-relaxed group-hover:text-wood-600 transition-colors">
                    {work.title.split('｜')[0]}
                    {work.title.includes('｜') && (
                      <span className="block text-[0.80em] font-sans font-normal text-wood-500 mt-2 leading-relaxed">
                        {work.title.split('｜')[1]}
                      </span>
                    )}
                  </h3>
                  <p className="text-wood-600 text-sm mt-auto font-light leading-loose tracking-wide line-clamp-3">
                    {work.description}
                  </p>
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
