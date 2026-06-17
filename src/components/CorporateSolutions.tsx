import React from 'react';
import { AppView } from '../types';
import { GENERAL_PLANS } from '../data';

interface CorporateSolutionsProps {
  navigateTo: (view: AppView) => void;
}

export default function CorporateSolutions({ navigateTo }: CorporateSolutionsProps) {
  return (
    <section className="py-24 bg-natural-linen border-b border-natural-sand/30 animate-fadeIn text-natural-dark">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="text-xs font-mono tracking-widest text-[#C2A383] uppercase block font-semibold">CORPORATE SOLUTIONS</span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-natural-dark mt-2 mb-4 break-keep">
          法人向けプラン
        </h3>
        <p className="text-xs text-natural-dark/60 max-w-xl mx-auto mb-16 leading-relaxed">
          ハイクオリティなシネマカメラ機材と洗練されたトランジション技術で、貴社ビジネスの真の価値とビジョンを圧倒的スケールで描き出します。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {GENERAL_PLANS.map(plan => (
            <div 
              key={plan.id} 
              id={`corp-plan-${plan.id}`}
              className="bg-[#FDFBF7] rounded-3xl border border-natural-sand shadow-sm hover:shadow-md hover:border-[#C2A383]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Plan Image Insertion */}
                {plan.imageUrl && (
                  <div className="h-56 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <img 
                      src={plan.imageUrl} 
                      alt={plan.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="text-[10px] font-mono tracking-wider text-white/80 block uppercase">
                        ESTIMATED COST
                      </span>
                      <span className="text-xl md:text-2xl font-bold font-sans text-white">
                        ¥{plan.price.toLocaleString()}〜 <span className="text-xs font-medium font-sans">（税込）</span>
                      </span>
                    </div>

                    {plan.recommended && (
                      <div className="absolute top-4 right-4 bg-natural-accent text-white font-sans font-extrabold text-[10px] tracking-wider px-3 py-1 rounded-full shadow-md z-20 uppercase">
                        RECOMMENDED
                      </div>
                    )}
                  </div>
                )}
                
                <div className="p-8 md:p-10 space-y-5">
                  <div className="space-y-1 font-sans">
                    <span className="text-xs text-natural-accent font-mono block">
                      {plan.duration}
                    </span>
                    <h4 className="text-xl font-bold tracking-tight text-natural-dark group-hover:text-[#C2A383] transition-colors leading-snug">
                      {plan.name}
                    </h4>
                  </div>
                  
                  <p className="text-xs text-natural-dark/80 leading-relaxed border-l-2 border-natural-accent/30 pl-3">
                    {plan.description}
                  </p>
                  
                  <ul className="space-y-2.5 pt-4 border-t border-natural-sand/50 text-xs text-natural-dark/95">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-natural-accent mt-1.5 shrink-0"></span>
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => navigateTo('contact')}
                  className="w-full py-3 px-6 bg-transparent hover:bg-natural-accent/5 text-natural-accent border border-natural-accent/30 hover:border-natural-accent font-bold text-xs tracking-wider rounded-xl transition-all cursor-pointer text-center block"
                >
                  このプランのお見積もり・相談
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
