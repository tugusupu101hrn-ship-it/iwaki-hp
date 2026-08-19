import React, { useState } from 'react';
import { Hero } from './corporate/Hero';
import { About } from './corporate/About';
import { Expertise } from './corporate/Expertise';
import { Works } from './corporate/Works';
import { AiPlanner } from './corporate/AiPlanner';
import { SplitPortal } from './corporate/SplitPortal';
import { DocumentDownload } from './corporate/DocumentDownload';
import { AiPlannerFab } from './corporate/AiPlannerFab';
import { AiPlanContext } from '../types';

import CorporateSolutions from './CorporateSolutions';
import PriceEstimator from './PriceEstimator';
import FAQAccordion from './FAQAccordion';
import ContactUs from './ContactUs';

interface CorporateSpecialProps {
  onBackToPhoto: () => void;
  navigateTo: (view: any) => void;
}

export default function CorporateSpecial({ onBackToPhoto, navigateTo }: CorporateSpecialProps) {
  const [aiPlanData, setAiPlanData] = useState<AiPlanContext | null>(null);

  return (
    <div className="relative font-sans antialiased bg-wood-50 text-wood-900 selection:bg-wood-300 selection:text-wood-900">
      {/* Back to Photo Button at top left */}
      <div className="absolute top-6 left-6 z-50">
        <button 
          onClick={onBackToPhoto}
          className="px-4 py-2 bg-wood-900/80 backdrop-blur-xs text-white text-xs font-bold rounded-full hover:bg-wood-800 transition-colors shadow-lg cursor-pointer"
        >
          ← フォトギャラリーへ
        </button>
      </div>

      {/* 1. Hero */}
      <Hero />

      {/* 2. Works */}
      <Works />

      {/* 3. Philosophy */}
      <About />

      {/* 4. Our Expertise */}
      <Expertise />

      {/* 5. AI Video Strategy */}
      <AiPlanner onPlanGenerated={setAiPlanData} />

      {/* Cinematic Split Portal to subpages */}
      <SplitPortal />

      {/* 6. Document Download */}
      <DocumentDownload />

      {/* 7. Corporate Solutions (法人向けプラン) */}
      <CorporateSolutions navigateTo={navigateTo} />

      {/* 8. Price Estimator (料金計算) */}
      <PriceEstimator onSelectedPlan={(plan) => navigateTo('contact')} />

      {/* 9. FAQ Accordion */}
      <FAQAccordion />

      {/* 10. Contact Us (総合お問い合わせフォーム) */}
      <ContactUs />

      <AiPlannerFab />
    </div>
  );
}
