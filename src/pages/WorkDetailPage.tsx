import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Download, MessageSquare } from 'lucide-react';
import { works } from '../data/works';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';

export const WorkDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const work = works.find(w => w.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // If no work is found, or while loading
    if (!work) {
        return (
            <div className="min-h-screen pt-32 pb-12 px-6 flex flex-col items-center justify-center bg-wood-950 text-white">
                <h2 className="text-2xl font-bold mb-4">Work not found</h2>
                <Link to="/works" className="text-wood-400 hover:text-white underline transition-colors">Back to Works</Link>
            </div>
        );
    }



    return (
        <div className="bg-wood-50 min-h-screen font-sans text-wood-900 pb-24">
            <SEO
                title={`${work.title} | Works`}
                description={work.description || ""}
                image={work.youtubeId ? `https://img.youtube.com/vi/${work.youtubeId}/maxresdefault.jpg` : work.imageUrl}
                url={`https://filmk-video.vercel.app/works/${work.id}`}
            />

            {/* 1. Page Header (Hero Area) */}
            <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-wood-950">
                <div className="absolute inset-0 z-0">
                    <img
                        src={work.youtubeId ? `https://img.youtube.com/vi/${work.youtubeId}/maxresdefault.jpg` : (work.imageUrl || "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop")}
                        alt={work.title}
                        className="w-full h-full object-cover opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wood-950 via-wood-950/60 to-transparent"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 pt-20 flex flex-col items-center text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-wood-300 tracking-[0.2em] text-xs md:text-sm font-bold uppercase mb-4"
                    >
                        {work.subtitle || "Client Works"}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white max-w-5xl leading-tight drop-shadow-lg"
                    >
                        {work.title.split('｜')[0]}
                        {work.title.includes('｜') && (
                            <span className="block text-lg md:text-2xl font-sans font-normal text-wood-200 mt-4 md:mt-6 leading-relaxed">
                                {work.title.split('｜')[1]}
                            </span>
                        )}
                    </motion.h1>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-16 relative z-20 max-w-6xl">
                {/* 2. Video Player Area */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white p-4 md:p-8 rounded-2xl shadow-2xl border border-wood-100"
                >
                    <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-inner mb-8">
                        {work.youtubeId ? (
                            <iframe
                                className="w-full h-full absolute inset-0"
                                src={`https://www.youtube.com/embed/${work.youtubeId}?rel=0`}
                                title={work.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : work.videoUrl ? (
                            <video
                                controls
                                className="w-full h-full object-cover absolute inset-0"
                                poster={work.imageUrl}
                                src={work.videoUrl}
                            >
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50 bg-wood-900">
                                <Play size={64} className="mb-4 opacity-50" />
                                <p>Video source not available</p>
                            </div>
                        )}
                    </div>

                    {/* Project Requirements Table */}
                    <div className="bg-wood-50 rounded-xl p-6 border border-wood-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x divide-wood-200">
                            <div className="pt-4 md:pt-0 md:px-6 first:pt-0 first:px-0">
                                <h4 className="text-xs font-bold text-wood-500 uppercase tracking-wider mb-2">Category</h4>
                                <p className="font-medium text-wood-900">{work.category}</p>
                            </div>
                            <div className="pt-4 md:pt-0 md:px-6">
                                <h4 className="text-xs font-bold text-wood-500 uppercase tracking-wider mb-2">Role</h4>
                                <p className="font-medium text-wood-900">企画・構成・ディレクション・撮影・編集・カラグレ</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 3. Project Story (Article Area) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto mt-24 space-y-20"
                >
                    {/* Story Block 1 */}
                    {work.challenge && (
                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                            <div className="md:w-1/3 shrink-0">
                                <div className="text-wood-400 font-serif text-5xl opacity-50 mb-2">01</div>
                                <h2 className="text-2xl font-serif font-bold text-wood-900 border-b border-wood-200 pb-4">The Challenge<br /><span className="text-sm font-sans font-normal text-wood-500 mt-2 block">お客様の課題</span></h2>
                            </div>
                            <div className="md:w-2/3 pt-4">
                                <p className="text-wood-700 leading-loose text-lg font-light tracking-wide whitespace-pre-wrap">
                                    {work.challenge}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Story Block 2 */}
                    {work.approach && (
                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                            <div className="md:w-1/3 shrink-0">
                                <div className="text-wood-400 font-serif text-5xl opacity-50 mb-2">02</div>
                                <h2 className="text-2xl font-serif font-bold text-wood-900 border-b border-wood-200 pb-4">Our Approach<br /><span className="text-sm font-sans font-normal text-wood-500 mt-2 block">ペルソナ設計とアプローチ</span></h2>
                            </div>
                            <div className="md:w-2/3 pt-4">
                                <p className="text-wood-700 leading-loose text-lg font-light tracking-wide whitespace-pre-wrap">
                                    {work.approach}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Story Block 3 */}
                    {work.execution && (
                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                            <div className="md:w-1/3 shrink-0">
                                <div className="text-wood-400 font-serif text-5xl opacity-50 mb-2">03</div>
                                <h2 className="text-2xl font-serif font-bold text-wood-900 border-b border-wood-200 pb-4">Cinematic Execution<br /><span className="text-sm font-sans font-normal text-wood-500 mt-2 block">映像への落とし込み・技術</span></h2>
                            </div>
                            <div className="md:w-2/3 pt-4">
                                <p className="text-wood-700 leading-loose text-lg font-light tracking-wide whitespace-pre-wrap">
                                    {work.execution}
                                </p>
                            </div>
                        </div>
                    )}
                </motion.div>

                {/* 4. Page Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32 max-w-4xl mx-auto bg-wood-900 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 pointer-events-none"></div>

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">この実績のような動画制作について<br className="hidden md:block" />相談してみませんか？</h3>
                        <p className="text-wood-300 mb-10 text-sm md:text-base">貴社の課題に合わせた最適な映像プランをご提案いたします。</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                variant="primary"
                                className="w-full sm:w-auto bg-white text-wood-900 hover:bg-wood-100 flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-widest"
                                onClick={() => window.location.href = '/#contact'}
                            >
                                <MessageSquare size={18} />
                                無料オンライン相談
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full sm:w-auto border-white/50 text-white hover:bg-white/10 flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-widest"
                                onClick={() => window.location.href = '/#download'}
                            >
                                <Download size={18} />
                                サービス資料ダウンロード
                            </Button>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-16 text-center">
                    <Link to="/works" className="inline-flex items-center text-wood-500 hover:text-wood-900 font-medium transition-colors tracking-widest uppercase text-sm group">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Works <span className="ml-2 text-xs opacity-50">一覧へ戻る</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
