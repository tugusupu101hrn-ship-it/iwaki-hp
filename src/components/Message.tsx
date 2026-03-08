import React from 'react';
import { motion } from 'framer-motion';

export const Message: React.FC = () => {
    return (
        <section id="message" className="py-24 bg-wood-950 text-white relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-wood-950 via-wood-900 to-wood-800 opacity-80"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-5 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">

                    {/* Left Column: Image */}
                    <motion.div
                        className="w-full lg:w-5/12"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1542039499-5f21295b92cb?q=80&w=2127&auto=format&fit=crop"
                                alt="代表 岩城 圭佑"
                                className="absolute inset-0 w-full h-full object-cover filter grayscale-[30%]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-wood-950 via-transparent to-transparent opacity-80"></div>
                            {/* Optional: Add a subtle border/frame */}
                            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
                        </div>
                    </motion.div>

                    {/* Right Column: Text */}
                    <motion.div
                        className="w-full lg:w-7/12 flex flex-col justify-center py-6 lg:py-12"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-sm font-bold tracking-[0.2em] text-wood-400 uppercase mb-4">Message</h2>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-8 leading-tight">
                            映像美の先にある、企業の<br className="hidden md:block" />
                            「真の価値」を届けるために。
                        </h3>

                        <div className="space-y-6 text-wood-200 text-sm md:text-base leading-loose font-light tracking-wide mb-12">
                            <p>
                                合同会社Film K 代表の岩城 圭佑です。
                            </p>
                            <p>
                                「かっこいい映像」を作るだけなら、今の時代は誰にでもできるかもしれません。しかし、企業が本当に求めているのは、映像の先にある「採用課題の解決」や「ブランドへの信頼獲得」です。
                            </p>
                            <p>
                                私は航空自衛隊での8年間の任務を通じて、何よりも「責任」と「信頼」、そして「地域社会を支える使命感」の重さを学んできました。その経験は現在の映像制作にも直結しています。
                            </p>
                            <p>
                                クライアントが日々どのような想いで現場に立ち、社会を守り、支えているのか。私たちはまず、その泥臭くも尊い「本質」を徹底的にヒアリングし、ターゲット（ペルソナ）を緻密に設計します。その上で、シネマカメラによる圧倒的な映像美、緻密なカラーグレーディング、そして国家資格を活かしたプロフェッショナルなドローン空撮を駆使し、言葉だけでは伝わらない貴社の「真の魅力」を視覚化します。
                            </p>
                            <p>
                                ただの制作会社ではなく、貴社の課題解決に共に立ち向かうパートナーとして。心を動かし、ビジネスを前進させる映像を一緒に創り上げましょう。
                            </p>
                        </div>

                        <div className="mt-auto border-t border-white/10 pt-8 inline-block">
                            <p className="font-serif text-lg text-white tracking-widest">合同会社Film K</p>
                            <p className="text-wood-400 text-sm mt-1">代表　岩城 圭佑</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
