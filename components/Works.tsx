import React from 'react';
import { motion } from 'framer-motion';
import { WorkItem } from '../types';

const works: WorkItem[] = [
  { id: '1', title: 'Natura Life Co.', category: 'Brand Movie', imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop' },
  { id: '2', title: 'Cafe Mokume', category: 'Web CM', imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop' },
  { id: '3', title: 'Tech Artisan', category: 'Recruit', imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop' },
  { id: '4', title: 'Craftsmen Union', category: 'Documentary', imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop' },
  { id: '5', title: 'Forest Stay', category: 'Promotion', imageUrl: 'https://images.unsplash.com/photo-1445964047600-cdbdb873673d?q=80&w=1984&auto=format&fit=crop' },
  { id: '6', title: 'Organic Farm', category: 'Product', imageUrl: 'https://images.unsplash.com/photo-1625246333195-09d966332410?q=80&w=1979&auto=format&fit=crop' },
];

export const Works: React.FC = () => {
  return (
    <section id="works" className="py-24 bg-wood-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-wood-600 tracking-widest text-sm font-bold uppercase block mb-2">Our Works</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-wood-900">制作実績</h2>
          </div>
          <a href="#" className="hidden md:block text-wood-600 hover:text-wood-900 font-medium underline underline-offset-4 decoration-1">
            View All Works
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <motion.div 
              key={work.id}
              className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={work.imageUrl} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-wood-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <span className="text-xs tracking-widest uppercase mb-2 text-wood-300">{work.category}</span>
                <h3 className="text-xl font-serif font-bold">{work.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="text-wood-600 hover:text-wood-900 font-medium underline underline-offset-4 decoration-1">
            View All Works
          </a>
        </div>
      </div>
    </section>
  );
};
