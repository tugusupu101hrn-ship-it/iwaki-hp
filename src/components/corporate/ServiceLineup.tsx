import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const lineup = [
    {
        id: 'branding',
        title: 'Corporate Branding',
        jpTitle: '企業ブランディング・プロモーション動画',
        description: '企業の理念や価値を、シネマティックな映像美で視覚化。「信頼感」や「空気感」をダイレクトに届けます。',
        bgImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop', // Office/Corporate
    },
    {
        id: 'recruit',
        title: 'Recruitment Video',
        jpTitle: '採用・リクルート動画',
        description: '「現場のリアル」と「働く人々の想い」を抽出。求職者の心を動かし、ミスマッチを防ぐ採用動画を制作します。',
        bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop', // Team/Working
    },
    {
        id: 'hero',
        title: 'Hero / Background Video',
        jpTitle: 'Webサイト用ヒーロー動画（FV）',
        description: 'HPを訪れたユーザーを瞬時に企業の世界観に引き込む、高画質な背景用ショートムービー。',
        bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', // Web/Tech
    },
    {
        id: 'sns',
        title: 'Vertical SNS Shorts',
        jpTitle: 'SNS最適化ショート動画（縦型）',
        description: 'TikTokやリールなど、スマートフォン視聴に特化したフォーマットで認知拡大に繋げるインパクトのある動画。',
        bgImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop', // Mobile/SNS
    },
    {
        id: 'drone',
        title: 'Professional Drone',
        jpTitle: 'プロフェッショナルドローン空撮',
        description: '国家資格保有者によるダイナミックな風景・施設の空撮。安全かつ高品質な映像をご提供します。',
        bgImage: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop', // Drone/Landscape
    }
];

export const ServiceLineup: React.FC = () => {
    const [activeId, setActiveId] = useState<string>(lineup[0].id);

    return (
        <section id="service-lineup" className="relative h-screen min-h-[800px] flex items-center bg-wood-950 text-white overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    {lineup.map((item) => (
                        item.id === activeId && (
                            <motion.img
                                key={item.id}
                                src={item.bgImage}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 0.4, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            />
                        )
                    ))}
                </AnimatePresence>
                {/* Gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-wood-950 via-wood-950/80 to-wood-950/40"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row h-full items-center">
                {/* Left Side: Title and Active Description */}
                <div className="w-full md:w-5/12 pr-0 md:pr-12 md:mb-0 mb-12 flex flex-col justify-center mt-24 md:mt-0">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-wood-400 tracking-[0.3em] text-xs font-bold uppercase block mb-6"
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-12 leading-tight"
                    >
                        対応可能な<br />映像制作領域
                    </motion.h2>

                    <AnimatePresence mode="wait">
                        {lineup.map((item) => (
                            item.id === activeId && (
                                <motion.div
                                    key={`desc-${item.id}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="hidden md:block border-l-2 border-wood-500 pl-6"
                                >
                                    <h3 className="text-xl font-bold font-serif mb-3 text-wood-100">{item.jpTitle}</h3>
                                    <p className="text-wood-300 font-light leading-loose tracking-wide">{item.description}</p>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>

                {/* Right Side: Interactive Typography List */}
                <div className="w-full md:w-7/12 flex flex-col justify-center gap-6 md:gap-8">
                    {lineup.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className={`group cursor-pointer relative ${activeId === item.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'} transition-opacity duration-300`}
                            onMouseEnter={() => setActiveId(item.id)}
                            onClick={() => setActiveId(item.id)} // for mobile tap
                        >
                            <div className="flex items-center justify-between border-b border-white/20 pb-4 md:pb-6">
                                <h3 className={`text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide transition-transform duration-500 origin-left ${activeId === item.id ? 'translate-x-4 md:translate-x-8 text-white' : 'text-wood-300 group-hover:translate-x-2'}`}>
                                    {item.title}
                                </h3>
                                <ArrowUpRight size={32} className={`transition-transform duration-500 ${activeId === item.id ? 'opacity-100 rotate-45' : 'opacity-0 -translate-x-4 group-hover:opacity-50'}`} />
                            </div>

                            {/* Mobile description (shown only on small screens when active) */}
                            <AnimatePresence>
                                {activeId === item.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="md:hidden pt-4 pb-2"
                                    >
                                        <p className="text-sm text-wood-300 font-light leading-relaxed">{item.jpTitle}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
