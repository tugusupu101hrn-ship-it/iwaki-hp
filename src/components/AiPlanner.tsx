import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader2, Lightbulb, Film, PenTool } from 'lucide-react';
import { Button } from './ui/Button';
import { generateVideoStrategy } from '../services/geminiService';
import { PlannerFormData, StrategyResponse, AiPlanContext } from '../types';

interface AiPlannerProps {
    onPlanGenerated?: (context: AiPlanContext) => void;
}

export const AiPlanner: React.FC<AiPlannerProps> = ({ onPlanGenerated }) => {
    const [formData, setFormData] = useState<PlannerFormData>({
        companyName: '',
        industry: '',
        coreValue: '',
        targetAudience: ''
    });
    const [result, setResult] = useState<StrategyResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResult(null);

        try {
            const data = await generateVideoStrategy(formData);
            setResult(data);
            if (onPlanGenerated) {
                onPlanGenerated({ formData, strategy: data });
            }
        } catch (err) {
            setError('企画の生成に失敗しました。もう一度お試しください。');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="ai-planner" className="py-32 bg-wood-950 text-white relative overflow-hidden">
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-wood-600/10 via-wood-700/10 to-transparent rounded-full blur-[100px] z-0 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-wood-300 text-xs font-bold mb-6 tracking-widest backdrop-blur-sm"
                    >
                        <Sparkles size={14} className="text-wood-400" />
                        <span>AI POWERED</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-wide leading-tight"
                    >
                        AI映像企画プランナー
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-wood-300 font-light tracking-wide max-w-3xl mx-auto leading-loose text-sm md:text-base"
                    >
                        企業名や想いを入力するだけで、Gemini AIがあなたの企業の価値を引き出す映像構成案を無料で提案します。
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Form - Glassmorphism */}
                    <motion.div
                        className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl border border-white/10 flex flex-col justify-center h-full"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <label className="block text-sm font-light text-wood-300 tracking-wider mb-3">1. 企業名 / ブランド名</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    required
                                    className="w-full px-5 py-4 bg-wood-900/50 border border-white/10 rounded-xl text-white placeholder-wood-600 focus:ring-2 focus:ring-wood-500/50 focus:border-wood-500/50 focus:bg-wood-900/80 outline-none transition-all font-light"
                                    placeholder="例: 株式会社フィルムK"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-light text-wood-300 tracking-wider mb-3">2. 業種 / サービス内容</label>
                                <input
                                    type="text"
                                    name="industry"
                                    required
                                    className="w-full px-5 py-4 bg-wood-900/50 border border-white/10 rounded-xl text-white placeholder-wood-600 focus:ring-2 focus:ring-wood-500/50 focus:border-wood-500/50 focus:bg-wood-900/80 outline-none transition-all font-light"
                                    placeholder="例: オーガニック食品のEC販売"
                                    value={formData.industry}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-light text-wood-300 tracking-wider mb-3">3. 最も大切にしている価値観 (Core Value)</label>
                                <textarea
                                    name="coreValue"
                                    required
                                    rows={4}
                                    className="w-full px-5 py-4 bg-wood-900/50 border border-white/10 rounded-xl text-white placeholder-wood-600 focus:ring-2 focus:ring-wood-500/50 focus:border-wood-500/50 focus:bg-wood-900/80 outline-none transition-all font-light resize-none"
                                    placeholder="例: 家族の健康を守る、持続可能な社会作り"
                                    value={formData.coreValue}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-light text-wood-300 tracking-wider mb-3">4. ターゲット層</label>
                                <input
                                    type="text"
                                    name="targetAudience"
                                    required
                                    className="w-full px-5 py-4 bg-wood-900/50 border border-white/10 rounded-xl text-white placeholder-wood-600 focus:ring-2 focus:ring-wood-500/50 focus:border-wood-500/50 focus:bg-wood-900/80 outline-none transition-all font-light"
                                    placeholder="例: 30代〜40代の子育て世代"
                                    value={formData.targetAudience}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full h-14 bg-wood-700 hover:bg-wood-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all flex items-center justify-center border border-white/20 hover:border-white/40 hover:scale-[1.02]"
                            >
                                {loading ? <Loader2 className="animate-spin text-white" /> : 'AIに企画を相談する'}
                            </button>
                            {error && <p className="text-red-400 text-sm mt-3 font-light text-center">{error}</p>}
                        </form>
                    </motion.div>

                    {/* Result Display Area - Glassmorphism */}
                    <div className="relative min-h-[500px] h-full">
                        <AnimatePresence mode="wait">
                            {!result && !loading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center text-wood-500 border border-dashed border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm"
                                >
                                    <Lightbulb size={48} className="mb-6 opacity-30 text-wood-400" />
                                    <p className="text-sm md:text-base font-light tracking-widest text-wood-400">ここにAIからの提案が表示されます</p>
                                </motion.div>
                            )}

                            {loading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center text-white bg-wood-950/80 backdrop-blur-md rounded-2xl z-20 border border-white/10 shadow-2xl"
                                >
                                    <Loader2 size={48} className="animate-spin mb-6 text-wood-400" />
                                    <p className="font-serif animate-pulse tracking-widest text-wood-300">Film K AIが企画を構想中...</p>
                                </motion.div>
                            )}

                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-white/10 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-2xl border-t border-r border-b border-l-4 border-l-wood-500 border-white/10 h-full relative"
                                >
                                    <div className="absolute top-0 right-0 bg-wood-700 text-wood-100 text-[10px] uppercase px-4 py-1.5 rounded-bl-xl rounded-tr-xl font-bold tracking-widest shadow-md">
                                        AI SUGGESTION
                                    </div>

                                    <div className="mb-8 mt-2">
                                        <h3 className="text-[10px] font-bold text-wood-400 uppercase tracking-widest mb-3 opacity-80">CONCEPT</h3>
                                        <h4 className="text-2xl font-bold text-white font-serif leading-relaxed">{result.concept}</h4>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
                                        <div className="bg-wood-950/50 p-5 rounded-xl border border-white/5">
                                            <div className="flex items-center gap-2 mb-3 text-wood-400 opacity-80">
                                                <Film size={16} />
                                                <span className="text-[10px] font-bold tracking-widest uppercase">TONE</span>
                                            </div>
                                            <p className="text-sm font-medium text-wood-100">{result.tone}</p>
                                        </div>
                                        <div className="bg-wood-950/50 p-5 rounded-xl border border-white/5">
                                            <div className="flex items-center gap-2 mb-3 text-wood-400 opacity-80">
                                                <PenTool size={16} />
                                                <span className="text-[10px] font-bold tracking-widest uppercase">STYLE</span>
                                            </div>
                                            <p className="text-sm font-medium text-wood-100">{result.recommendedStyle}</p>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="text-[10px] font-bold text-wood-400 uppercase tracking-widest mb-5 opacity-80">STORYLINE</h3>
                                        <ul className="space-y-4">
                                            {result.storyline.map((line, idx) => (
                                                <li key={idx} className="flex gap-4 text-wood-200 text-sm font-light leading-loose">
                                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-wood-800/80 text-wood-200 border border-white/10 flex items-center justify-center text-[10px] font-bold mt-1">
                                                        {idx + 1}
                                                    </span>
                                                    {line}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-white/10 text-center">
                                        <p className="text-xs text-wood-400 mb-5 font-light tracking-wider">この企画をベースに、具体的な制作相談へ進みませんか？</p>
                                        <button
                                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="px-8 py-3 bg-white text-wood-900 hover:bg-wood-200 transition-colors rounded-full font-bold text-sm tracking-wide shadow-lg"
                                        >
                                            このプランで相談する
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
