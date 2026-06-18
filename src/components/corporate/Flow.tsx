import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, Target, PenTool, Edit3, Video, MonitorPlay, Send } from 'lucide-react';

const steps = [
    {
        num: '01',
        title: 'お問い合わせ',
        description: '当社Webサイトのフォーム、またはお電話にてお気軽にご相談ください。「まだ漠然としている」という段階でも全く問題ございません。',
        icon: <MessageSquare size={24} />
    },
    {
        num: '02',
        title: '初回ヒアリング（課題の深掘り）',
        description: '制作したい動画のイメージだけでなく、「なぜ動画が必要なのか（採用難、認知拡大など）」という根本的な経営課題から丁寧にヒアリングいたします。',
        icon: <Search size={24} />
    },
    {
        num: '03',
        title: 'ペルソナ設計・ご提案（無料）',
        description: '「誰に、何を伝え、どう動いてほしいか」という詳細なターゲット（ペルソナ）を共に設定し、課題解決に直結する最適な映像プランと概算お見積りをご提案します。',
        icon: <Target size={24} />
    },
    {
        num: '04',
        title: 'キックオフ・構成決定',
        description: 'ご契約後、プロジェクトをスタート。設定したペルソナに向けた「本質的なメッセージ」をブレさせないよう、テイストやコンセプト、詳細なスケジュールを決定します。',
        icon: <PenTool size={24} />
    },
    {
        num: '05',
        title: 'シナリオ・絵コンテ作成',
        description: '決定したコンセプトをベースに、映像の展開を示すシナリオや絵コンテ（字コンテ）を作成。撮影前に仕上がりイメージをすり合わせ、ブラッシュアップを行います。',
        icon: <Edit3 size={24} />
    },
    {
        num: '06',
        title: '撮影（シネマカメラ・ドローン空撮）',
        description: '高品質なシネマカメラや、国家資格によるプロフェッショナルなドローン空撮を駆使し、企業の現場が持つ「リアルな魅力」を最大限に引き出す撮影を行います。',
        icon: <Video size={24} />
    },
    {
        num: '07',
        title: '編集・カラーグレーディング',
        description: '単なるカット編集ではなく、企業ブランドに合わせた緻密な色彩補正（カラーグレーディング）を実施。初稿をご確認いただき、ご要望を反映させながら映像を磨き上げます。',
        icon: <MonitorPlay size={24} />
    },
    {
        num: '08',
        title: 'ご納品・活用アドバイス',
        description: '完成した映像データをご納品いたします。納品後も、Webサイトへの埋め込み、展示会でのループ再生、SNSでの発信など、目的に合わせた「効果的な動画の活用方法」についてアドバイスさせていただきます。',
        icon: <Send size={24} />
    }
];

export const Flow: React.FC = () => {
    return (
        <section id="flow" className="py-24 bg-wood-50 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-wood-500 tracking-widest text-sm font-bold uppercase block mb-2">Work Flow</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-wood-900">制作フロー</h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative border-l-2 border-wood-200 md:border-l-0 md:border-t-2 md:border-wood-200 pl-6 md:pl-0 md:pt-6 ml-4 md:ml-0 flex flex-col md:flex-row md:flex-wrap md:justify-between gap-y-12 md:gap-y-16">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="relative md:w-[45%] lg:w-[45%] flex flex-col"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Timeline Dot (Mobile: left, Desktop: top) */}
                                <div className="absolute -left-[35px] top-0 md:-top-[35px] md:left-0 w-4 h-4 rounded-full bg-wood-500 border-4 border-wood-50 shadow-sm z-10" />

                                <div className="bg-white p-8 rounded-xl shadow-lg border border-wood-100 hover:shadow-xl transition-shadow duration-300 flex-grow relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-wood-100 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110 z-0"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-4 border-b border-wood-100 pb-4">
                                            <span className="text-3xl font-bold text-wood-300 font-serif leading-none tracking-tighter hover:text-wood-400 transition-colors">
                                                {step.num}
                                            </span>
                                            <div className="w-10 h-10 rounded bg-wood-50 flex items-center justify-center text-wood-600">
                                                {step.icon}
                                            </div>
                                            <h3 className="text-lg font-bold text-wood-900 font-serif leading-tight">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-wood-600 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
