import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-wood-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-wood-300 rounded-sm z-0"></div>

              <div className="col-span-2 relative z-10">
                <img
                  src="/images/philosophy1.jpg"
                  alt="Filming process main"
                  className="w-full h-auto rounded-sm shadow-lg grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="col-span-1 relative z-10">
                <img
                  src="/images/philosophy2.jpg"
                  alt="Filming process 2"
                  className="w-full h-full object-cover rounded-sm shadow-lg grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="col-span-1 relative z-10">
                <img
                  src="/images/philosophy3.jpg"
                  alt="Filming process 3"
                  className="w-full h-full object-cover rounded-sm shadow-lg grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-wood-600 font-bold tracking-widest mb-2">PHILOSOPHY</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-wood-900 mb-6 leading-relaxed">
              企業の<span className="wood-text">「温度」</span>を<br />
              デザインする。
            </h2>
            <p className="text-wood-800 leading-8 mb-6 font-light">
              美しい映像を作るだけが私たちの仕事ではありません。
              Film Kは、クライアントへのヒアリングを徹底し、
              表面的な魅力だけでなく、その奥にある「想い」や「歴史」を掘り起こします。
            </p>
            <p className="text-wood-800 leading-8 font-light">
              木目が一つひとつ異なるように、企業にも唯一無二の物語があります。
              温かみのある映像表現で、視聴者の心に深く残るブランディングを実現します。
            </p>
          </motion.div>
        </div>
      </div>

      {/* Wood texture overlay effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
    </section>
  );
};