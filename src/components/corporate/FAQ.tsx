import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "動画制作の依頼が初めてで、まだ何も決まっていませんが相談できますか？",
        answer: "はい、全く問題ございません。Film Kの強みは「ゼロからの企画・ペルソナ設計」です。「採用応募を増やしたい」「自社の強みがうまく伝わらない」といった漠然としたお悩みから丁寧にヒアリングし、最適な動画の目的やターゲット設定から一緒に構築していきます。"
    },
    {
        question: "北海道内の遠方や、ドローン空撮のみの依頼も可能ですか？",
        answer: "札幌市を拠点としておりますが、北海道内全域、および全国出張撮影に対応しております。また、代表は「二等無人航空機操縦士」の国家資格を保有しております。広大な施設やダイナミックな風景のドローン空撮はもちろん、法令を遵守した安全で高品質な空撮を単独プランとしても承っております。"
    },
    {
        question: "制作期間と費用の目安を教えてください。",
        answer: "映像の尺や撮影の規模によりますが、一般的な採用ブランディング動画の場合、企画からご納品まで約1ヶ月半〜2ヶ月程度が目安です。費用はお客様の課題とご予算に合わせて、無駄を省いた最適なプランを無料でお見積り・ご提案いたします。まずはお気軽にご相談ください。"
    },
    {
        question: "どのような業界の動画制作が得意ですか？",
        answer: "警備会社様、交通・運輸インフラ企業様、製造業様など、「地域社会を支える、堅実で信頼が求められるBtoB企業様」の魅力を引き出すことを特に得意としております。現場のリアルな空気感や、働く人々の誇りをシネマティックな映像で表現し、求職者や顧客の心を動かします。"
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-wood-50 relative">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-wood-500 uppercase mb-4">FAQ</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-wood-900 mb-6">よくあるご質問</h3>
                    <div className="w-16 h-1 bg-wood-400 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-wood-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <button
                                className="w-full px-6 py-5 md:py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-wood-400 focus-visible:ring-opacity-50"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-bold text-wood-900 pr-8">
                                    <span className="text-wood-400 mr-3 font-serif">Q.</span>
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="flex-shrink-0 text-wood-400"
                                >
                                    <ChevronDown size={20} />
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={{
                                            hidden: { opacity: 0, height: 0, marginBottom: 0 },
                                            visible: { opacity: 1, height: "auto", marginBottom: 24 }
                                        }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="px-6 pb-2"
                                    >
                                        <div className="pt-4 border-t border-wood-100 flex items-start">
                                            <span className="font-bold text-wood-600 mr-4 font-serif text-lg leading-none">A.</span>
                                            <p className="text-wood-600 text-sm md:text-base leading-loose font-light">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
