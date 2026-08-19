import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WorkItem } from '../../types';
import { works } from '../../corporateWorks';
import { X, Play } from 'lucide-react';

export const Works: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  // ユーザー指定のトップ6本のID順
  const topWorkIds = ['4', '3', '7', '8', '9', '10'];
  
  // 指定されたID順に並べ替えたトップ6本
  const topWorks = topWorkIds
    .map(id => works.find(w => w.id === id))
    .filter((w): w is WorkItem => w !== undefined);

  // 表示する実績リスト (showAllがtrueなら10本すべて、falseならトップの6本)
  const displayWorks = showAll ? works : topWorks;

  return (
    <section id="works" className="py-32 bg-wood-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-wood-500 tracking-[0.3em] text-xs font-bold uppercase block mb-4">Our Works</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-900">制作実績</h2>
          </div>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="hidden md:block text-wood-600 hover:text-wood-900 font-medium underline underline-offset-4 decoration-1 cursor-pointer bg-transparent border-none"
          >
            {showAll ? 'Show Featured Works' : 'View All Works'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayWorks.map((work, index) => (
            <div 
              key={work.id} 
              className="cursor-pointer"
              onClick={() => setSelectedWork(work)}
            >
              <motion.div
                className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-wood-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={work.youtubeId ? `https://img.youtube.com/vi/${work.youtubeId}/maxresdefault.jpg` : work.imageUrl}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                  />
                  {/* Play icon overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                    <div className="w-14 h-14 rounded-full bg-white/90 text-wood-900 flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-wood-900 text-white text-xs font-bold px-3 py-1 rounded-sm tracking-wider shadow-lg">
                    {work.category || "プロモーション"}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-wood-500 text-xs font-bold mb-3 tracking-wide uppercase">
                    {work.subtitle || work.category}
                  </p>
                  <h3 className="text-xl font-serif font-bold text-wood-900 leading-relaxed group-hover:text-wood-600 transition-colors">
                    {work.title.split('｜')[0]}
                    {work.title.includes('｜') && (
                      <span className="block text-[0.80em] font-sans font-normal text-wood-500 mt-2 leading-relaxed">
                        {work.title.split('｜')[1]}
                      </span>
                    )}
                  </h3>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-wood-600 hover:text-wood-900 font-medium underline underline-offset-4 decoration-1 cursor-pointer bg-transparent border-none"
          >
            {showAll ? 'Show Featured Works' : 'View All Works'}
          </button>
        </div>
      </div>

      {/* Video Detail Modal Dialog */}
      <AnimatePresence>
        {selectedWork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm">
            <motion.div 
              className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer border-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto flex-1">
                {/* Responsive Iframe Video Container */}
                <div className="relative w-full aspect-video bg-black">
                  {selectedWork.youtubeId ? (
                    <iframe
                      className="absolute inset-0 w-full h-full border-none"
                      src={`https://www.youtube.com/embed/${selectedWork.youtubeId}?autoplay=1`}
                      title={selectedWork.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="flex items-center justify-center h-full text-white">動画の再生情報がありません</div>
                  )}
                </div>

                {/* Details text */}
                <div className="p-6 md:p-8 space-y-6">
                  <div>
                    <span className="text-wood-500 text-xs font-bold uppercase tracking-widest">{selectedWork.subtitle || selectedWork.category}</span>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-wood-900 mt-2 leading-relaxed">
                      {selectedWork.title}
                    </h3>
                  </div>

                  <div className="border-t border-wood-100 pt-6">
                    <h4 className="text-sm font-bold text-wood-900 mb-3 font-serif">作品紹介</h4>
                    <p className="text-wood-700 leading-loose tracking-wide font-light text-sm md:text-base whitespace-pre-line">
                      {selectedWork.description}
                    </p>
                  </div>

                  {(selectedWork.challenge || selectedWork.approach || selectedWork.execution) && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-wood-100 pt-6 text-xs leading-relaxed text-wood-700">
                      {selectedWork.challenge && (
                        <div>
                          <h5 className="font-bold text-wood-900 mb-2 font-serif">課題 (Challenge)</h5>
                          <p className="font-light">{selectedWork.challenge}</p>
                        </div>
                      )}
                      {selectedWork.approach && (
                        <div>
                          <h5 className="font-bold text-wood-900 mb-2 font-serif">提案 (Approach)</h5>
                          <p className="font-light">{selectedWork.approach}</p>
                        </div>
                      )}
                      {selectedWork.execution && (
                        <div>
                          <h5 className="font-bold text-wood-900 mb-2 font-serif">結果 (Execution)</h5>
                          <p className="font-light">{selectedWork.execution}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
