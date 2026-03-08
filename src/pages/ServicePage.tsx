import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ProblemAwareness } from '../components/ProblemAwareness';
import { Services } from '../components/Services';
import { ServiceLineup } from '../components/ServiceLineup';
import { Flow } from '../components/Flow';
import { Contact } from '../components/Contact';

export const ServicePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Services | 映像制作サービス - 合同会社Film K</title>
                <meta name="description" content="Film Kの提供する映像制作サービスの詳細。企業ブランディング、採用動画、SNSショート動画、ドローン空撮など、課題解決に直結する映像ソリューションをご提案します。" />
            </Helmet>
            <main className="pt-20"> {/* Offset for fixed header */}
                {/* Service Hero */}
                <section className="relative py-32 bg-wood-950 text-white overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop"
                            alt="Camera equipment"
                            className="w-full h-full object-cover opacity-20"
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
                            Our Services
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-wood-300 font-light tracking-[0.2em] text-sm md:text-base uppercase"
                        >
                            企業の課題を映像で解決する
                        </motion.p>
                    </div>
                </section>

                <ProblemAwareness />
                <Services />
                <ServiceLineup />
                <Flow />
                <Contact aiPlanData={null} />
            </main>
        </>
    );
};
