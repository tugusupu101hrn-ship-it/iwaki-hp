import React from 'react';
import { AppView } from '../types';
import { CUSTOM_IMAGES } from '../data';

interface SpecializedExhibitionsProps {
  setActiveView: (view: AppView) => void;
}

export default function SpecializedExhibitions({ setActiveView }: SpecializedExhibitionsProps) {
  return (
    <section className="py-24 bg-natural-light">
      <div className="max-w-7xl mx-auto px-6 font-sans">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-natural-accent uppercase block font-semibold">SPECIALIZED EXHIBITIONS</span>
          <h2 className="text-2xl sm:text-3xl font-serif text-natural-dark tracking-tight mt-2 break-keep">
            ２つのフォト＆シネマ特設会場
          </h2>
          <p className="text-sm text-[#4A3728]/80 mt-2">
            ご希望のシーンに特化したプロフェッショナルなオリジナル構成。デザインから料金設定まで深く追求いたしました。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* maternity link banner */}
          <div className="relative group rounded-3xl overflow-hidden border border-natural-sand bg-natural-linen text-natural-dark shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="p-10 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#FDFBF7] to-[#F5EFE6] h-[340px]">
              {/* Glowing organic blur circle matching themes */}
              <div className="absolute -left-10 top-1/2 w-48 h-48 bg-[#EBE0D0] rounded-full blur-2xl opacity-40"></div>
              
              {/* Curved image white-border floating layout */}
              <div className="relative z-10 w-52 h-64 bg-[#EBE0D0] rounded-t-full shadow-lg overflow-hidden border-[6px] border-white">
                <img 
                  src={CUSTOM_IMAGES.maternity} 
                  alt="Maternity session" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="p-8 space-y-4 bg-natural-linen/35 font-sans">
              <span className="text-[10px] tracking-widest font-semibold text-[#A68966] block uppercase font-sans">
                01. LIFE STUDIO COLLABORATION
              </span>
              <h3 className="text-2xl font-serif text-natural-dark font-normal">Maternity <span className="text-sm font-serif tracking-wider">Portraiture</span></h3>
              <p className="text-xs text-natural-dark/80 leading-relaxed font-light">
                LifeStudioの持つナチュラルで柔らかい白色の光、優しくお腹を見つめる瞬間をそのまま再現。ママの安心・無料順延補償付き。
              </p>
              
              <button
                id="home-maternity-card-btn"
                onClick={() => { setActiveView('maternity'); window.scrollTo(0, 0); }}
                className="w-full pt-4 font-bold text-xs uppercase tracking-widest border-t border-natural-sand/65 text-left hover:text-[#C2A383] flex items-center justify-between cursor-pointer"
              >
                <span>View Detail</span>
                <div className="w-12 h-[1px] bg-natural-dark"></div>
              </button>
            </div>
          </div>

          {/* bridal link banner */}
          <div className="relative group rounded-3xl overflow-hidden border border-natural-sand bg-natural-sand text-natural-dark shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="p-10 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#F5EFE6] to-[#EBE0D0] h-[340px]">
              {/* Glowing organic blur circle matching themes */}
              <div className="absolute -right-10 top-0 w-64 h-64 bg-natural-warm rounded-full blur-2xl opacity-40"></div>
              
              {/* Curved image white-border floating layout */}
              <div className="relative z-10 w-52 h-64 bg-[#FDFBF7] rounded-b-full shadow-lg overflow-hidden border-[6px] border-white">
                <img 
                  src={CUSTOM_IMAGES.bridal} 
                  alt="Bridal session" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="p-8 space-y-4 bg-natural-sand/30 font-sans">
              <span className="text-[10px] tracking-widest font-semibold text-[#8b5a2b] block uppercase font-sans">
                02. LUMINOUS ART PARTNERSHIP
              </span>
              <h3 className="text-2xl font-serif text-natural-dark font-normal">Bridal <span className="text-sm font-serif tracking-wider">Cinema</span></h3>
              <p className="text-xs text-natural-dark/80 leading-relaxed font-light">
                Studio Luminousのような格調高くドラマチックな美術構成。4Kドローン空撮ムービーと極細部美肌レタッチを融合。
              </p>

              <button
                id="home-bridal-card-btn"
                onClick={() => { setActiveView('bridal'); window.scrollTo(0, 0); }}
                className="w-full pt-4 font-bold text-xs uppercase tracking-widest border-t border-natural-sand/65 text-left hover:text-[#A68966] flex items-center justify-between cursor-pointer"
              >
                <span>View Detail</span>
                <div className="w-12 h-[1px] bg-natural-dark font-sans"></div>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
