import React from 'react';
import { motion } from 'framer-motion';
import { Video, Megaphone, Smartphone, Mic } from 'lucide-react';

const expertiseItems = [
    {
        icon: <Video size={36} className="text-wood-400 mb-6" />,
        title: "コーポレートブランディング",
        description: "企業の理念やビジョンを映像化し、採用活動や広報活動におけるブランド価値を最大化します。"
    },
    {
        icon: <Megaphone size={36} className="text-wood-400 mb-6" />,
        title: "Web CM・プロモーション",
        description: "商品やサービスの魅力を短時間で効果的に伝える、高品質なプロモーション映像を制作します。"
    },
    {
        icon: <Smartphone size={36} className="text-wood-400 mb-6" />,
        title: "SNS・Webコンテンツ",
        description: "Instagram, YouTube, TikTokなど、各プラットフォームの特性に合わせた動画コンテンツを企画・制作。"
    },
    {
        icon: <Mic size={36} className="text-wood-400 mb-6" />,
        title: "インタビュー・ドキュメンタリー",
        description: "代表者や社員の「生の声」を届けるインタビュー動画。人の温かみが伝わる演出を得意としています。"
    }
];

export const Expertise: React.FC = () => {
    return (
        <section id="expertise" className="py-32 bg-white text-wood-900 border-t border-b border-wood-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-20 text-center md:text-left">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-wood-400 tracking-[0.3em] text-xs font-bold uppercase block mb-4"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-wood-900"
                    >
                        事業内容
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {expertiseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                            className="bg-wood-50 p-10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-wood-100 group"
                        >
                            <div className="transform group-hover:scale-110 transition-transform duration-500 origin-left">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-serif font-bold text-wood-900 mb-4 leading-relaxed group-hover:text-wood-700 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-wood-600 leading-loose text-sm font-light tracking-wide">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
