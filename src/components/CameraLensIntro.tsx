/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Compass, Sliders, Play } from 'lucide-react';

interface CameraLensIntroProps {
  onEnter: () => void;
}

export default function CameraLensIntro({ onEnter }: CameraLensIntroProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [apertureValue, setApertureValue] = useState(1.2);
  const shutterButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    shutterButtonRef.current?.focus({ preventScroll: true });
  }, []);

  // Synthesize a cool camera shutter click + motor wind sound using Web Audio API!
  const playShutterSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Step 1: Click / Crack (Shutter Curtains opening)
      const bufferSize = ctx.sampleRate * 0.1; // 100ms
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, ctx.currentTime);
      filter.Q.setValueAtTime(5, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.8, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();

      // Step 2: Pitch squeal (High quick focus beep or electrical sound)
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(2200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1500, ctx.currentTime + 0.05);

      oscGain.gain.setValueAtTime(0.2, ctx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);

      // Step 3: Mechanical Wind (Motor drive winding) - 200ms delay
      setTimeout(() => {
        const windOsc = ctx.createOscillator();
        const windGain = ctx.createGain();
        windOsc.type = 'triangle';
        windOsc.frequency.setValueAtTime(150, ctx.currentTime);
        windOsc.frequency.linearRampToValueAtTime(250, ctx.currentTime + 0.15);

        windGain.gain.setValueAtTime(0.0, ctx.currentTime);
        windGain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.05);
        windGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

        windOsc.connect(windGain);
        windGain.connect(ctx.destination);
        windOsc.start();
        windOsc.stop(ctx.currentTime + 0.22);
      }, 120);

    } catch (e) {
      console.warn('Web Audio API not supported or blocked by browser gesture constraints: ', e);
    }
  };

  const handleShutterTrigger = () => {
    if (isOpening) return;
    setIsOpening(true);
    playShutterSound();

    // Trigger onEnter after visual gate animations complete (~1.5s total time)
    setTimeout(() => {
      onEnter();
    }, 1400);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1d140e] select-none text-[#dfd2c0] overflow-hidden"
      style={{ fontFamily: '"Inter", sans-serif' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="intro-title"
      onKeyDown={(event) => {
        if (event.key === 'Escape') handleShutterTrigger();
      }}
    >
      {/* Background ambient stars/particles and technical HUD lines */}
      <div className="absolute inset-x-0 bottom-10 flex justify-between px-12 text-xs font-mono tracking-widest text-[#8b5a2b] uppercase max-w-7xl mx-auto w-full opacity-60">
        <div>HOKKAIDO FILM K • HIGH FIDELITY LENS SYSTEM</div>
        <div>SYS_STATUS: ACTIVE _</div>
      </div>

      <div className="absolute inset-x-0 top-10 flex justify-between px-12 text-xs font-mono tracking-widest text-[#8b5a2b] max-w-7xl mx-auto w-full opacity-60">
        <div>LAT_LON: 43.0618° N, 141.3545° E</div>
        <div>STABLE_STEADY: RS3_PRO</div>
      </div>

      {/* Decorative Outer Camera UI Box frame */}
      <div className="absolute inset-8 border border-[#dfd2c0]/15 pointer-events-none rounded-lg flex items-center justify-center">
        {/* Rec box markers */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#8b5a2b]"></div>
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#8b5a2b]"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#8b5a2b]"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#8b5a2b]"></div>
      </div>

      {/* White camera flash explosion card overlay */}
      <AnimatePresence>
        {isOpening && (
          <motion.div
            key="flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3, times: [0, 0.05, 0.25, 1], ease: 'easeInOut' }}
            className="fixed inset-0 z-[110] bg-[#fbf9f4] pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Main concentric lens camera assembly */}
      <div className="relative flex flex-col items-center max-w-md px-6 text-center">
        
        {/* Sub title details */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-sm font-mono tracking-[0.3em] text-[#dfd2c0]/60 uppercase mb-2"
        >
          HOKKAIDO CINEMATOGRAPHY
        </motion.p>
        
        <motion.div
          id="intro-title"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl font-sans tracking-tight font-light text-white mb-8"
        >
          Film K
        </motion.div>

        {/* Outer Ring & Aperture System */}
        <div className="relative w-64 h-64 md:w-76 md:h-76 rounded-full border border-[#8b5a2b]/30 flex items-center justify-center bg-[#150d09] shadow-2xl p-4 mb-8 overflow-hidden">
          
          {/* Dynamic Interactive Aperture Blades (SVG Overlay now placed in background) */}
          <svg className="absolute inset-0 w-full h-full p-4 pointer-events-none z-0" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="blade-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2c1a0e" />
                <stop offset="100%" stopColor="#120804" />
              </linearGradient>
            </defs>
            {/* Drawing 6 custom sliding blades that close down based on slider state or rotate closed during transition */}
            {[0, 60, 120, 180, 240, 300].map((angle, index) => {
              const rotation = angle + (isOpening ? 90 : (1.2 - apertureValue) * 35);
              const scale = isOpening ? 2.5 : 1 + (apertureValue - 1.2) * 0.15;
              const opacity = isOpening ? 0 : 0.93;
              return (
                <motion.g
                  key={index}
                  animate={{ 
                    rotate: rotation,
                    scale: scale,
                    opacity: opacity
                  }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: isOpening ? 40 : 80, 
                    damping: isOpening ? 20 : 15 
                  }}
                  style={{ transformOrigin: '50px 50px', transformBox: 'view-box' }}
                >
                  <path
                    d="M 50,50 L 75,10 C 85,20 90,35 85,55 Z"
                    fill="url(#blade-gradient)"
                    stroke="#dfd2c0"
                    strokeWidth="0.15"
                  />
                </motion.g>
              );
            })}
          </svg>

          {/* Focus ring details rotatable helper - Moved to foremost active layer z-24 */}
          <motion.div 
            animate={{ rotate: isOpening ? [0, 180] : 360 }}
            transition={{ ease: "easeInOut", duration: isOpening ? 1.2 : 25, repeat: isOpening ? 0 : Infinity }}
            className="absolute inset-1 rounded-full border-2 border-dashed border-[#8b5a2b]/35 pointer-events-none z-24"
          />

          {/* Golden technical measurements overlay - Moved to z-22, in front of the blades */}
          <div className="absolute inset-4 rounded-full border border-[#dfd2c0]/20 flex items-center justify-center pointer-events-none z-22 bg-black/5">
            <span className="absolute top-1.5 text-[7px] md:text-[8px] font-mono tracking-widest text-[#dfd2c0]/60 font-semibold">APERTURE CONTROL</span>
            <span className="absolute bottom-1.5 text-[7px] md:text-[8px] font-mono tracking-widest text-[#dfd2c0]/60 font-semibold">50MM PRIME</span>
            <span className="absolute left-1.5 text-[7px] md:text-[8px] font-mono tracking-widest text-[#dfd2c0]/60 font-semibold rotate-90">RAW CINEMA</span>
            <span className="absolute right-1.5 text-[7px] md:text-[8px] font-mono tracking-widest text-[#dfd2c0]/60 font-semibold -rotate-90">GAPLESS EDIT</span>
          </div>

          {/* Interactive Aperture Indicator (Circular scale) - Moved to z-22, in front of the blades with glass backdrop */}
          <div className="absolute inset-8 md:inset-10 rounded-full border border-[#8b5a2b]/50 flex items-center justify-center z-22 bg-[#1e130d]/50 backdrop-blur-[2px]">
            {/* Displaying Current F-Stop */}
            <div className="text-center z-10 pointer-events-none">
              <span className="text-[8px] md:text-[9px] font-mono text-[#8b5a2b] block tracking-widest font-semibold">CURRENT IRIS</span>
              <span className="text-lg md:text-xl font-mono text-white font-medium drop-shadow-md">f/{apertureValue.toFixed(1)}</span>
            </div>
          </div>

          {/* Glass Lens reflection gloss effect overlays - Moved to z-23, elegantly in front of indicators */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none z-23 mix-blend-screen" />
          <div className="absolute top-2 right-12 w-1/4 h-1/4 rounded-full bg-white/5 filter blur-xs pointer-events-none z-23" />

          {/* Lens Outer Bezel (Metal Ring) - Beautifully placed at standard frontline z-25 */}
          <div className="absolute inset-0 rounded-full border-[6px] border-[#8b5a2b]/40 pointer-events-none z-25 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]" />
          <div className="absolute inset-1.5 rounded-full border border-[#dfd2c0]/15 pointer-events-none z-25" />

          {/* Shutter mechanical click ring - Foreground Button Layer z-30 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
            <motion.button
              ref={shutterButtonRef}
              id="shutter-trigger"
              onClick={handleShutterTrigger}
              disabled={isOpening}
              aria-label="SHOOTしてFILM Kのトップページを表示"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#dfd2c0] to-[#b7a38b] hover:from-white hover:to-[#dfd2c0] text-[#4a2c11] flex flex-col items-center justify-center shadow-lg transition-colors cursor-pointer pointer-events-auto focus:outline-none focus:ring-4 focus:ring-[#8b5a2b]"
            >
              <Camera className="w-5 h-5 md:w-6 md:h-6 mb-0.5 text-[#4a2c11]" />
              <span className="text-[8px] md:text-[9px] font-mono font-bold uppercase tracking-wider">SHOOT</span>
            </motion.button>
          </div>
        </div>

        {/* F-stop interactive slider slider */}
        {!isOpening && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="w-full flex flex-col items-center px-4"
          >
            <div className="flex justify-between w-full text-xs font-mono text-[#dfd2c0]/70 mb-2">
              <span>SHARP (f/4.0)</span>
              <span>CINEMATOGRAPHY DIAL</span>
              <span>SOFT BOKEH (f/1.2)</span>
            </div>
            <input
              id="iris-slider"
              type="range"
              aria-label="レンズの絞り値"
              min="1.2"
              max="4.0"
              step="0.1"
              value={apertureValue}
              onChange={(e) => setApertureValue(parseFloat(e.target.value))}
              className="w-full h-1 bg-[#8b5a2b]/30 rounded-lg appearance-none cursor-pointer accent-[#dfd2c0]"
            />
            <p className="text-xs text-[#dfd2c0]/50 mt-4 leading-relaxed">
              シャッターボタンをクリックして撮影体験から始まるホームページの世界へ
            </p>
          </motion.div>
        )}

        {isOpening && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
              className="w-6 h-6 border-2 border-t-transparent border-[#dfd2c0] rounded-full"
            />
            <span className="text-xs font-mono text-[#dfd2c0]/80 uppercase tracking-widest">Capturing the Frame...</span>
          </motion.div>
        )}

      </div>
    </div>
  );
}
