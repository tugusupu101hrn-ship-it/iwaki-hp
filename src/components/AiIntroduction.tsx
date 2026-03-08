import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const AiIntroduction: React.FC = () => {
    return (
        <section className="py-24 bg-wood-950 text-white relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-[100px] z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-purple-500/30 px-4 py-1.5 rounded-full text-purple-300 text-xs font-bold mb-6 tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                            <Sparkles size={14} className="text-purple-400" />
                            <span>AI VIDEO STRATEGY</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                            あなたの会社の課題、<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                                まずはAIにぶつけてみませんか？
                            </span>
                        </h2>

                        <p className="text-wood-200 text-sm md:text-base leading-loose mb-10 font-light tracking-wide max-w-md">
                            24時間いつでも、最新のAIが貴社のターゲット層を分析し、最適な動画コンセプトやシナリオの土台をご提案。
                            <br className="hidden md:block" />
                            アイデアをベースに、プロフェッショナルがシネマティックな実制作へと昇華させます。
                        </p>

                        <Button
                            variant="primary"
                            onClick={() => document.getElementById('ai-planner')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 text-sm md:text-lg font-bold shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center gap-3 group border-none"
                        >
                            AIに無料で相談する
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>

                    {/* Right Dummy UI */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-full max-w-[500px] mx-auto aspect-square md:aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col p-6">
                            {/* Fake Chat Window Header */}
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                                    <Sparkles size={18} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white tracking-wider">Film K AI Planner</h3>
                                    <p className="text-[10px] text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>Online - Ready to assist</p>
                                </div>
                            </div>

                            {/* Fake Chat bubbles */}
                            <div className="flex-1 space-y-4 overflow-hidden mb-4 flex flex-col justify-end">
                                <div className="bg-white/10 p-3 md:p-4 rounded-2xl rounded-tr-sm text-xs md:text-sm text-white self-end max-w-[85%] backdrop-blur-sm border border-white/5">
                                    「採用応募が少なく、会社の魅力が伝わっていません…」
                                </div>
                                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 p-3 md:p-4 rounded-2xl rounded-tl-sm text-xs md:text-sm text-white self-start max-w-[85%] border border-purple-500/20 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                                    <p className="mb-2 font-bold text-purple-200">✨ AIからのご提案：</p>
                                    <p className="leading-relaxed opacity-90">
                                        ターゲット層（20代）に向けた「1day密着型ドキュメンタリー動画」をお勧めします。<br />
                                        【コンセプト】：『隠れた情熱、共鳴する未来』<br />
                                        【トーン】：シネマティック・エモーショナル
                                    </p>
                                </div>
                            </div>

                            {/* Fake Input */}
                            <div className="bg-white/5 border border-white/10 rounded-full p-2 flex items-center gap-2 mt-auto">
                                <div className="w-full bg-transparent px-3 py-1 text-xs text-white/50">自社の課題を入力...</div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                                    <MessageSquare size={14} className="text-white" />
                                </div>
                            </div>

                            {/* Glossy Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none rounded-2xl" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
