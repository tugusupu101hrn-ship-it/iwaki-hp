import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Works } from '../components/Works';
import { AiPlanner } from '../components/AiPlanner';
import { SplitPortal } from '../components/SplitPortal';
import { DocumentDownload } from '../components/DocumentDownload';
import { Contact } from '../components/Contact';
import { AiPlannerFab } from '../components/AiPlannerFab';
import { Expertise } from '../components/Expertise';
import { AiPlanContext } from '../types';

import { SEO } from '../components/SEO';

export const HomePage: React.FC = () => {
    const [aiPlanData, setAiPlanData] = useState<AiPlanContext | null>(null);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": ["VideoProductionService", "LocalBusiness"],
        "name": "合同会社Film K",
        "url": "https://filmk-video.vercel.app",
        "logo": "https://filmk-video.vercel.app/og-image.jpg",
        "image": "https://filmk-video.vercel.app/og-image.jpg",
        "description": "企業の真価を映し出す、北海道札幌市の映像制作会社。BtoBリード獲得や採用ブランディングに特化した最適な映像をご提案します。",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "札幌市北区",
            "addressRegion": "北海道",
            "addressCountry": "JP"
        },
        "founder": {
            "@type": "Person",
            "name": "岩城 圭佑"
        },
        "priceRange": "$$"
    };

    return (
        <main>
            <SEO jsonLd={jsonLd} />
            {/* 1. Hero */}
            <Hero />

            {/* 2. Philosophy */}
            <About />

            {/* 3. Our Expertise */}
            <Expertise />

            {/* 4. Works */}
            <Works />

            {/* 5. AI Video Strategy */}
            <AiPlanner onPlanGenerated={setAiPlanData} />

            {/* Cinematic Splital Portal to subpages */}
            <SplitPortal />

            {/* 6. Contact / Document */}
            <DocumentDownload />
            <Contact aiPlanData={aiPlanData} />
            <AiPlannerFab />
        </main>
    );
};
