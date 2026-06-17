import React from 'react';
import { Sparkles, Video } from 'lucide-react';
import { AppView } from '../types';
import { CUSTOM_IMAGES } from '../data';

interface HeroSectionProps {
  navigateTo: (view: AppView) => void;
}

export default function HeroSection({ navigateTo }: HeroSectionProps) {
  return (
    <section className="relative h-[85vh] md:h-[90vh] bg-natural-dark flex items-center text-white overflow-hidden">
      {/* Golden/Brown ambient gradients overlay */}
      <div className="absolute inset-0 bg-[#4A3728]/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-natural-dark via-transparent to-black/75 z-10" />
      
      {/* Live Background Image */}
      <img 
        src={CUSTOM_IMAGES.hero} 
        alt="Film K Camera Shooting" 
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover scale-102 filter brightness-[0.70] saturation-90 pointer-events-none"
      />

      {/* Camera grid crosshair overlay lines */}
      <div className="absolute inset-10 border border-white/5 pointer-events-none z-10 rounded-lg">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/5" />
      </div>

      <div className="max-w-7xl mx-auto px-12 w-full relative z-20">
        <div className="space-y-6 max-w-2xl">
          
          {/* Shutter Telemetry Tag */}
          <div className="inline-flex items-center gap-2 bg-natural-accent text-[#FDFBF7] px-4 py-1.5 rounded-full text-xs font-mono tracking-widest font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span>HOKKAIDO SHUTTER ACTIVE // 切れ目の無い撮影</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-tight md:leading-tight">
            <span className="inline-block break-keep">カメラを回したその瞬間から、</span><br />
            <span className="text-[#FDFBF7] inline-block break-keep">
              物語は始まっている
            </span>
          </h2>

          <p className="text-sm md:text-base text-neutral-200 max-w-xl font-sans leading-relaxed">
            私たちは、北海道のありのままの大自然を背景に、単なる「切り貼り」ではない
            <b>「切れ目の無いカメラワーク」と「卓越した動画編集」</b>を施す映像、そしてマタニティ・ブライダルの至高の写真作品を創造するクリエイティブスタジオです。
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              id="hero-maternity-trigger"
              onClick={() => navigateTo('maternity')}
              className="px-8 py-3.5 bg-natural-linen hover:bg-[#FDFBF7] text-natural-dark font-bold text-xs tracking-widest rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#C2A383]/45"
            >
              <Sparkles className="w-4 h-4 text-[#A68966]" />
              <span>Maternity Studio ➔</span>
            </button>
            
            <button
              id="hero-bridal-trigger"
              onClick={() => navigateTo('bridal')}
              className="px-8 py-3.5 bg-transparent border-2 border-[#EBE0D0]/50 hover:bg-[#EBE0D0] hover:text-[#4A3728] text-white font-bold text-xs tracking-widest rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Video className="w-4 h-4 text-natural-accent" />
              <span>Bridal Cinema ➔</span>
            </button>
          </div>

        </div>
      </div>

      {/* Infinite scrolling coordinates tracker accent footer */}
      <div className="absolute bottom-6 left-6 z-20 hidden md:flex items-center gap-6 text-[10px] uppercase font-mono text-white/50">
        <div>CAMERA: SONY FX3 HYBRID</div>
        <div>•</div>
        <div>TRANSITION: TIMELESS SEAMLESS CUT</div>
        <div>•</div>
        <div>LENS: ZEISS SUPREME PRIMES</div>
      </div>
    </section>
  );
}
