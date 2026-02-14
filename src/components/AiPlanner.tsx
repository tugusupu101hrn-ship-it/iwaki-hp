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
        <section className="py-24 bg-wood-100 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-wood-200 px-4 py-1 rounded-full text-wood-800 text-xs font-bold mb-4">
                        <Sparkles size={14} />
                        <span>AI POWERED</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-wood-900 mb-4">AI映像企画プランナー</h2>
                    <p className="text-wood-700 max-w-2xl mx-auto">
                        企業名や想いを入力するだけで、Gemini AIがあなたの企業の価値を引き出す映像構成案を無料で提案します。
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Form */}
                    <motion.div
                        className="bg-white p-8 rounded-2xl shadow-xl border border-wood-200"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-wood-800 mb-2">企業名 / ブランド名</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    required
                                    className="w-full px-4 py-3 bg-wood-50 border border-wood-200 rounded-lg focus:ring-2 focus:ring-wood-400 focus:border-transparent outline-none transition-all"
                                    placeholder="例: 株式会社フィルムK"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-wood-800 mb-2">業種 / サービス内容</label>
                                <input
                                    type="text"
                                    name="industry"
                                    required
                                    className="w-full px-4 py-3 bg-wood-50 border border-wood-200 rounded-lg focus:ring-2 focus:ring-wood-400 focus:border-transparent outline-none transition-all"
                                    placeholder="例: オーガニック食品のEC販売"
                                    value={formData.industry}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-wood-800 mb-2">最も大切にしている価値観 (Core Value)</label>
                                <textarea
                                    name="coreValue"
                                    required
                                    rows={3}
                                    className="w-full px-4 py-3 bg-wood-50 border border-wood-200 rounded-lg focus:ring-2 focus:ring-wood-400 focus:border-transparent outline-none transition-all"
                                    placeholder="例: 家族の健康を守る、持続可能な社会作り"
                                    value={formData.coreValue}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-wood-800 mb-2">ターゲット層</label>
                                <input
                                    type="text"
                                    name="targetAudience"
                                    required
                                    className="w-full px-4 py-3 bg-wood-50 border border-wood-200 rounded-lg focus:ring-2 focus:ring-wood-400 focus:border-transparent outline-none transition-all"
                                    placeholder="例: 30代〜40代の子育て世代"
                                    value={formData.targetAudience}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <Button type="submit" disabled={loading} className="w-full h-12">
                                {loading ? <Loader2 className="animate-spin" /> : 'AIに企画を相談する'}
                            </Button>
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        </form>
                    </motion.div>

                    {/* Result Display */}
                    <div className="relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {!result && !loading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center text-wood-400 border-2 border-dashed border-wood-300 rounded-2xl bg-wood-50/50"
                                >
                                    <Lightbulb size={48} className="mb-4 opacity-50" />
                                    <p className="text-lg">ここにAIからの提案が表示されます</p>
                                </motion.div>
                            )}

                            {loading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center text-wood-600 bg-white/80 backdrop-blur-sm rounded-2xl z-20"
                                >
                                    <Loader2 size={48} className="animate-spin mb-4 text-wood-600" />
                                    <p className="font-serif animate-pulse">Film K AIが企画を構想中...</p>
                                </motion.div>
                            )}

                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-wood-600 h-full relative"
                                >
                                    <div className="absolute top-0 right-0 bg-wood-600 text-white text-xs px-3 py-1 rounded-bl-lg font-bold">
                                        AI SUGGESTION
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="text-xs font-bold text-wood-500 uppercase tracking-widest mb-1">CONCEPT</h3>
                                        <h4 className="text-xl font-bold text-wood-900 font-serif">{result.concept}</h4>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-wood-50 p-4 rounded-lg">
                                            <div className="flex items-center gap-2 mb-2 text-wood-600">
                                                <Film size={16} />
                                                <span className="text-xs font-bold">TONE</span>
                                            </div>
                                            <p className="text-sm font-medium">{result.tone}</p>
                                        </div>
                                        <div className="bg-wood-50 p-4 rounded-lg">
                                            <div className="flex items-center gap-2 mb-2 text-wood-600">
                                                <PenTool size={16} />
                                                <span className="text-xs font-bold">STYLE</span>
                                            </div>
                                            <p className="text-sm font-medium">{result.recommendedStyle}</p>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="text-xs font-bold text-wood-500 uppercase tracking-widest mb-3">STORYLINE</h3>
                                        <ul className="space-y-3">
                                            {result.storyline.map((line, idx) => (
                                                <li key={idx} className="flex gap-3 text-wood-800 text-sm leading-relaxed">
                                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-wood-200 text-wood-700 flex items-center justify-center text-xs font-bold">
                                                        {idx + 1}
                                                    </span>
                                                    {line}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-wood-100 text-center">
                                        <p className="text-sm text-wood-500 mb-4">この企画を元に、具体的な制作相談をしませんか？</p>
                                        <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                            このプランで相談する
                                        </Button>
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
