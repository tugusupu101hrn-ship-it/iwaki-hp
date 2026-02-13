import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-wood-950 text-white">
      {/* Background Video/Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 bg-cover bg-center opacity-60"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        >
             {/* Using a cinematic abstract background */}
             <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop" 
              alt="Cinematic Background" 
              className="w-full h-full object-cover"
            />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-wood-900/50 via-wood-900/30 to-wood-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-wood-200 text-lg md:text-xl font-serif tracking-[0.2em] mb-4">
            FILM K PRODUCTION
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight drop-shadow-lg">
            企業の<span className="text-wood-300">真価</span>を<br />
            映し出す
          </h1>
          <p className="text-wood-100 text-sm md:text-base max-w-lg mx-auto mb-10 leading-loose tracking-wide font-light">
            言葉にできない想いや、目に見えない価値。
            <br />
            私たちは映像の力で、あなたの企業の「本質」を世界に届けます。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
                お問い合わせ
             </Button>
             <Button variant="outline" className="border-white text-white hover:bg-white hover:text-wood-900" onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth'})}>
                制作実績を見る
             </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements (Parallax) */}
      <motion.div style={{ y: y2 }} className="absolute -bottom-20 -right-20 w-64 h-64 bg-wood-500/20 rounded-full blur-3xl z-0 pointer-events-none" />
      <motion.div style={{ y: y1 }} className="absolute top-20 -left-20 w-96 h-96 bg-wood-300/10 rounded-full blur-3xl z-0 pointer-events-none" />

      {/* Scroll Down Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-wood-800 animate-bounce"
      >
        <span className="text-xs tracking-widest mb-2 font-serif">SCROLL</span>
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};
