import React from 'react';
import { Sparkles } from 'lucide-react';
import { AppView } from '../types';
import { GOLD_SELECTION_PLANS } from '../data';

interface GoldSelectionProps {
  navigateTo: (view: AppView) => void;
}

export default function GoldSelection({ navigateTo }: GoldSelectionProps) {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white border-y border-neutral-900 animate-fadeIn relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(194,163,131,0.06),transparent_60%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C2A383]/10 border border-[#C2A383]/30 rounded-full text-[10px] tracking-widest text-[#C2A383] uppercase font-mono mb-4">
          <Sparkles className="w-3 h-3 text-[#C2A383] animate-pulse" />
          GOLD SELECTION
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mt-1 mb-3 tracking-tight break-keep">
          ゴールド・セレクション
        </h3>
        <p className="text-xs text-neutral-400 max-w-xl mx-auto mb-16 leading-relaxed">
          一生の誓いと美しき最高潮の瞬間を、本物志向 of シネマクオリティで描き出す特別な動画・ロケプラン。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {GOLD_SELECTION_PLANS.map((plan) => (
            <div 
              key={plan.id} 
              id={`gold-plan-${plan.id}`}
              className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800/80 rounded-3xl overflow-hidden shadow-2xl hover:border-[#C2A383]/40 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                {/* Plan Cover Image */}
                {plan.imageUrl && (
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10" />
                    <img 
                      src={plan.imageUrl} 
                      alt={plan.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Price Tag Overlay */}
                    <div className="absolute top-4 right-4 bg-[#C2A383] text-neutral-950 font-sans font-extrabold text-xs px-4 py-1.5 rounded-full shadow-lg z-20">
                      ¥{plan.price.toLocaleString()}{plan.id === 'bri_luxury_gold' ? '〜' : ''} <span className="text-[10px] font-medium font-sans">（税込）</span>
                    </div>
                  </div>
                )}

                <div className="p-8 md:p-10 space-y-5">
                  <div className="space-y-1 font-sans">
                    <span className="text-[10px] font-mono text-[#C2A383] tracking-wider block uppercase">
                      {plan.duration}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-[#C2A383] transition-colors leading-snug">
                      {plan.name}
                    </h4>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed border-l-2 border-[#C2A383]/40 pl-3">
                    {plan.description}
                  </p>

                  <ul className="space-y-3 pt-4 border-t border-neutral-800/40">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C2A383] shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => navigateTo('contact')}
                  className="w-full py-3.5 px-6 bg-[#C2A383] text-neutral-950 hover:bg-[#ebd7c2] font-bold text-xs tracking-wider rounded-xl transition-colors cursor-pointer text-center block shadow-md"
                >
                  プランのご相談・お申し込み
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
