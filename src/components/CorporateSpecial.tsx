import React, { useState } from 'react';
import { Hero } from './corporate/Hero';
import { About } from './corporate/About';
import { Expertise } from './corporate/Expertise';
import { Works } from './corporate/Works';
import { AiPlanner } from './corporate/AiPlanner';
import { SplitPortal } from './corporate/SplitPortal';
import { DocumentDownload } from './corporate/DocumentDownload';
import { Contact } from './corporate/Contact';
import { AiPlannerFab } from './corporate/AiPlannerFab';
import { AiPlanContext } from '../types';

interface CorporateSpecialProps {
  onBackToHome: () => void;
}

export default function CorporateSpecial({ onBackToHome }: CorporateSpecialProps) {
  const [aiPlanData, setAiPlanData] = useState<AiPlanContext | null>(null);

  return (
    <div className="relative font-sans antialiased bg-wood-50 text-wood-900 selection:bg-wood-300 selection:text-wood-900">
      {/* Back to Home Button at top left */}
      <div className="absolute top-6 left-6 z-50">
        <button 
          onClick={onBackToHome}
          className="px-4 py-2 bg-wood-900/80 backdrop-blur-xs text-white text-xs font-bold rounded-full hover:bg-wood-800 transition-colors shadow-lg cursor-pointer"
        >
          ← フォトポートフォリオへ戻る
        </button>
      </div>

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

      {/* Cinematic Split Portal to subpages */}
      <SplitPortal />

      {/* 6. Contact / Document */}
      <DocumentDownload />
      <Contact aiPlanData={aiPlanData} />
      <AiPlannerFab />
    </div>
  );
}
