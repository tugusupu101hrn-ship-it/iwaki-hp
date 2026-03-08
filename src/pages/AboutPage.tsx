import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Message } from '../components/Message';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';

export const AboutPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>About Us | 企業情報 - 合同会社Film K</title>
                <meta name="description" content="合同会社Film Kの企業情報、代表メッセージ、よくあるご質問（FAQ）をご案内します。映像を通じて企業の「真の価値」を届ける、プロフェッショナルな制作チームです。" />
            </Helmet>
            <main className="pt-20 bg-wood-50">
                {/* About Hero */}
                <section className="relative py-32 bg-wood-950 text-white overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1601506521937-0130f1d04461?q=80&w=2000&auto=format&fit=crop"
                            alt="Film production team"
                            className="w-full h-full object-cover opacity-20 grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-wood-950 via-wood-950/80 to-transparent"></div>
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-wide"
                        >
                            About Us
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-wood-300 font-light tracking-[0.2em] text-sm md:text-base uppercase"
                        >
                            Film Kについて
                        </motion.p>
                    </div>
                </section>

                {/* Company Setup (Optional basic info section if needed, minimal) */}
                <section className="py-24 bg-white relative">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="border-t border-b border-wood-200 py-12">
                            <h2 className="text-2xl font-serif font-bold text-center text-wood-900 mb-12 tracking-widest">COMPANY PROFILE</h2>
                            <dl className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4 text-sm md:text-base">
                                <dt className="font-bold text-wood-800 border-b border-wood-100 pb-2 md:border-none md:pb-0">会社名</dt>
                                <dd className="md:col-span-2 text-wood-600 mb-6 md:mb-0">合同会社 Film K</dd>

                                <dt className="font-bold text-wood-800 border-b border-wood-100 pb-2 md:border-none md:pb-0">代表社員</dt>
                                <dd className="md:col-span-2 text-wood-600 mb-6 md:mb-0">岩城 圭佑</dd>

                                <dt className="font-bold text-wood-800 border-b border-wood-100 pb-2 md:border-none md:pb-0">事業内容</dt>
                                <dd className="md:col-span-2 text-wood-600 leading-loose">
                                    企業プロモーションビデオの企画・制作<br />
                                    採用向け動画、Web用ヒーロー動画の制作<br />
                                    SNS特化型縦型ショート動画の制作<br />
                                    ドローンによる空撮業務（二等無人航空機操縦士）
                                </dd>
                            </dl>
                        </div>
                    </div>
                </section>

                <Message />
                <FAQ />
                <Contact aiPlanData={null} />
            </main>
        </>
    );
};
