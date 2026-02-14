import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { AiPlanner } from '../components/AiPlanner';
import { Works } from '../components/Works';
import { Contact } from '../components/Contact';
import { AiPlanContext } from '../types';

import { SEO } from '../components/SEO';

export const HomePage: React.FC = () => {
    const [aiPlanData, setAiPlanData] = useState<AiPlanContext | null>(null);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "VideoProductionService",
        "name": "Film K",
        "url": "https://filmk-video.vercel.app",
        "logo": "https://filmk-video.vercel.app/og-image.jpg",
        "description": "企業の価値を映し出す映像制作会社。ブランディング、採用、イベント収録など、目的に合わせた最適な映像をご提案します。",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "JP"
        },
        "priceRange": "$$"
    };

    return (
        <main>
            <SEO jsonLd={jsonLd} />
            <Hero />
            <About />
            <Services />
            <AiPlanner onPlanGenerated={setAiPlanData} />
            <Works />
            <Contact aiPlanData={aiPlanData} />
        </main>
    );
};
