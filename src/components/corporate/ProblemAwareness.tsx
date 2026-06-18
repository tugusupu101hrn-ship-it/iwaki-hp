import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const problems = [
    "採用応募者が集まらず、企業の魅力が求職者に伝わっていない",
    "自社の強みや提供価値を論理的・感情的に言語化・映像化できていない",
    "競合他社との差別化が難しく、価格競争に巻き込まれている",
    "WebサイトやSNSからのリード（見込み顧客）獲得が伸び悩んでいる",
];

export const ProblemAwareness: React.FC = () => {
    return (
        <section className="py-32 bg-wood-50 text-wood-900 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-wood-500 tracking-[0.3em] text-xs font-bold uppercase block mb-6">Are you facing these challenges?</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">こんなお悩みは<br className="md:hidden" />ありませんか？</h2>
                    <p className="text-wood-600 text-sm md:text-base max-w-2xl mx-auto leading-loose font-light tracking-wide">
                        現代のBtoBビジネスにおいて、テキストや静止画だけで企業の真の価値を伝えることは困難です。
                        特に採用やリード獲得において、以下のような課題を感じている企業様が増えています。
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-wood-100">
                    <ul className="space-y-6 md:space-y-8">
                        {problems.map((problem, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-wood-500 flex-shrink-0 mt-1" />
                                <span className="text-lg md:text-xl font-medium font-serif text-wood-800 leading-relaxed">{problem}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
