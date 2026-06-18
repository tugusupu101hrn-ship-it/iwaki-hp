/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppView } from './types';
import { CUSTOM_IMAGES, REVIEWS, FILM_K_PROFILE, GENERAL_PLANS, GOLD_SELECTION_PLANS } from './data';
import CameraLensIntro from './components/CameraLensIntro';
import FilmKLogo from './components/FilmKLogo';
import MaternitySpecial from './components/MaternitySpecial';
import BridalSpecial from './components/BridalSpecial';
import PriceEstimator from './components/PriceEstimator';
import HokkaidoGallery from './components/HokkaidoGallery';
import ContactUs from './components/ContactUs';
import FAQAccordion from './components/FAQAccordion';
import HeroSection from './components/HeroSection';
import SeamlessPipeline from './components/SeamlessPipeline';
import SpecializedExhibitions from './components/SpecializedExhibitions';
import GoldSelection from './components/GoldSelection';
import CorporateSolutions from './components/CorporateSolutions';
import Sitemap from './components/Sitemap';
import CorporateSpecial from './components/CorporateSpecial';
import { 
  Camera, 
  Tv, 
  MapPin, 
  Sliders, 
  Play, 
  ChevronRight, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  Plane, 
  Sparkles, 
  Video, 
  ShieldCheck, 
  ArrowUpRight,
  Workflow
} from 'lucide-react';

export default function App() {
  const [introFinished, setIntroFinished] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<AppView>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Quick navigation helper
  const navigateTo = (view: AppView) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    
    // Smooth scroll to relevant elements on homepage
    if (view === 'gallery' || view === 'estimator' || view === 'contact') {
      setActiveView('home');
      setTimeout(() => {
        const id = view === 'estimator' ? 'price-estimator' : view;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-natural-light min-h-screen text-natural-dark selection:bg-natural-sand/70 selection:text-natural-dark font-sans">
      
      {/* 1. Introductory Shutter/aperture experience */}
      <AnimatePresence>
        {!introFinished && (
          <CameraLensIntro onEnter={() => setIntroFinished(true)} />
        )}
      </AnimatePresence>

      {/* Main Container after shutter opens */}
      {introFinished && (
        <div className="flex flex-col min-h-screen">
          
          {/* Header Navigation Menu - Elegant, Simple, Gold-Brown accents */}
          <header className="sticky top-0 z-40 bg-natural-light border-b border-natural-sand/50 shadow-xs">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
              
              {/* Brand Logo - Styled EXACTLY like the Natural Tones Film K Logo */}
              <div 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => navigateTo('home')}
              >
                <div className="flex items-center gap-2">
                  <FilmKLogo size={56} variant="light" />
                </div>
              </div>

              {/* Central Nav Menu Items - Easy to read (メニューも分かりやすく) */}
              <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-[#4A3728]">
                <button 
                  id="nav-home-btn"
                  onClick={() => navigateTo('home')} 
                  className={`py-1 cursor-pointer hover:text-natural-accent transition-colors ${activeView === 'home' ? 'text-natural-accent border-b border-natural-dark' : 'text-natural-dark/80'}`}
                >
                  ホーム
                </button>
                <button 
                  id="nav-corporate-btn"
                  onClick={() => navigateTo('corporate')} 
                  className={`py-1 cursor-pointer hover:text-natural-accent transition-colors ${activeView === 'corporate' ? 'text-natural-accent border-b border-natural-dark' : 'text-natural-dark/80'}`}
                >
                  映像制作
                </button>
                <button 
                  id="nav-maternity-btn"
                  onClick={() => navigateTo('maternity')} 
                  className={`py-1 cursor-pointer hover:text-natural-accent transition-colors ${activeView === 'maternity' ? 'text-natural-accent border-b border-natural-dark' : 'text-natural-dark/80'}`}
                >
                  マタニティ
                </button>
                <button 
                  id="nav-bridal-btn"
                  onClick={() => navigateTo('bridal')} 
                  className={`py-1 cursor-pointer hover:text-natural-accent transition-colors ${activeView === 'bridal' ? 'text-natural-accent border-b border-natural-dark' : 'text-natural-dark/80'}`}
                >
                  ブライダル
                </button>
                <button 
                  id="nav-gallery-btn"
                  onClick={() => navigateTo('gallery')} 
                  className="py-1 cursor-pointer hover:text-natural-accent transition-colors text-natural-dark/80"
                >
                  ギャラリー
                </button>
                <button 
                  id="nav-estimator-btn"
                  onClick={() => navigateTo('estimator')} 
                  className="py-1 cursor-pointer hover:text-natural-accent transition-colors text-natural-dark/80"
                >
                  料金計算
                </button>
              </nav>

              {/* Right Side Action Button */}
              <div className="hidden lg:flex items-center gap-4">
                <a 
                  id="header-linemenu"
                  href="#contact"
                  onClick={() => navigateTo('contact')}
                  className="px-6 py-2 border border-natural-dark rounded-full text-[11px] font-bold text-natural-dark hover:bg-natural-dark hover:text-white transition-all shadow-md cursor-pointer"
                >
                  予約
                </a>
              </div>

              {/* Mobile menu trigger */}
              <div className="lg:hidden flex items-center gap-3">
                <button 
                  id="mobile-menu-trigger"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-natural-dark hover:text-natural-accent focus:outline-none"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

            </div>
          </header>

          {/* Mobile Overlay Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="lg:hidden fixed inset-x-0 top-20 bg-natural-light border-b border-natural-sand z-30 shadow-lg p-6 space-y-4"
              >
                <button 
                  id="mobile-nav-home"
                  onClick={() => navigateTo('home')} 
                  className="w-full text-left py-2 border-b border-natural-sand/40 font-semibold text-natural-dark flex justify-between items-center"
                >
                  <span>ホーム</span>
                  <ChevronRight className="w-4 h-4 text-natural-accent" />
                </button>
                <button 
                  id="mobile-nav-maternity"
                  onClick={() => navigateTo('maternity')} 
                  className="w-full text-left py-2 border-b border-natural-sand/40 font-semibold text-natural-accent flex justify-between items-center"
                >
                  <span>マタニティフォト特設ページ</span>
                  <ChevronRight className="w-4 h-4 text-natural-accent" />
                </button>
                <button 
                  id="mobile-nav-bridal"
                  onClick={() => navigateTo('bridal')} 
                  className="w-full text-left py-2 border-b border-natural-sand/40 font-semibold text-natural-accent flex justify-between items-center"
                >
                  <span>ブライダルフォト特設ページ</span>
                  <ChevronRight className="w-4 h-4 text-natural-accent" />
                </button>
                <button 
                  id="mobile-nav-gallery"
                  onClick={() => navigateTo('gallery')} 
                  className="w-full text-left py-2 border-b border-natural-sand/40 text-natural-dark"
                >
                  ギャラリー
                </button>
                <button 
                  id="mobile-nav-estimator"
                  onClick={() => navigateTo('estimator')} 
                  className="w-full text-left py-2 border-b border-natural-sand/40 text-natural-dark"
                >
                  料金計算
                </button>
                <button 
                  id="mobile-nav-corporate"
                  onClick={() => navigateTo('corporate')} 
                  className="w-full text-left py-2 border-b border-natural-sand/40 font-semibold text-natural-accent flex justify-between items-center"
                >
                  <span>映像制作特設ページ</span>
                  <ChevronRight className="w-4 h-4 text-natural-accent" />
                </button>
                <a 
                  id="mobile-nav-contact"
                  href="#contact"
                  onClick={() => { navigateTo('contact'); setMobileMenuOpen(false); }}
                  className="block text-center py-3 rounded-full bg-natural-dark hover:bg-natural-accent text-white text-xs font-bold font-mono tracking-widest transition-all"
                >
                  無料相談・撮影予約
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* -------------------- MAIN ROUTE CONTROLLER -------------------- */}
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              
              {/* VIEW: MATERNITY SPECIAL PAGE */}
              {activeView === 'maternity' && (
                <motion.div
                  key="maternity-page"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.4 }}
                >
                  <MaternitySpecial onBackToHome={() => setActiveView('home')} />
                </motion.div>
              )}

              {/* VIEW: BRIDAL SPECIAL PAGE */}
              {activeView === 'bridal' && (
                <motion.div
                  key="bridal-page"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <BridalSpecial onBackToHome={() => setActiveView('home')} />
                </motion.div>
              )}

              {/* VIEW: CORPORATE SPECIAL PAGE */}
              {activeView === 'corporate' && (
                <motion.div
                  key="corporate-page"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <CorporateSpecial onBackToHome={() => setActiveView('home')} />
                </motion.div>
              )}

              {/* VIEW: HOME (The Unified Cinema and Photography Space) */}
              {activeView === 'home' && (
                <motion.div
                  key="home-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-0"
                >
                  {/* Hero Banner Section */}
                  <HeroSection navigateTo={navigateTo} />

                  {/* Cinematic Gapless Pipeline */}
                  <SeamlessPipeline />

                  {/* Dual Creative Exhibitions */}
                  <SpecializedExhibitions setActiveView={setActiveView} />

                  {/* Gallery Component */}
                  <HokkaidoGallery />

                  {/* Golden Selection Signature Plans */}
                  <GoldSelection navigateTo={navigateTo} />

                  {/* Corporate/Business Solutions */}
                  <CorporateSolutions navigateTo={navigateTo} />

                  {/* Realtime Interactive Price Calculator */}
                  <PriceEstimator onSelectedPlan={(plan) => navigateTo('contact')} />

                  {/* General FAQ Section */}
                  <FAQAccordion />

                  {/* Contact Reservation Forms */}
                  <ContactUs />
                </motion.div>
              )}

            </AnimatePresence>
          </main>

          {/* Elegant Visual HTML Sitemap Section (Highly Optimized for search crawlers & human scannability) */}
          <Sitemap navigateTo={navigateTo} />

          {/* Core Footer matches exactly the design footer parameters */}
          <footer className="h-24 bg-[#4A3728] text-white flex items-center justify-between px-12 z-40 border-t border-white/5 shadow-inner">
            <div className="flex items-center gap-6 font-sans">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo('home')}>
                <FilmKLogo size={44} variant="footer" />
              </div>
              <div className="h-6 w-[1px] bg-white/10 hidden md:block"></div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></div>
                <span className="text-[9px] uppercase tracking-tighter font-mono text-white/80">REC: 4K 60FPS</span>
              </div>
              <div className="h-4 w-[1px] bg-white/20"></div>
              <span className="text-[9px] uppercase tracking-widest font-bold opacity-60">Seamless Transition Editing</span>
            </div>
            <div className="flex gap-6 text-right font-sans">
              <div className="text-[10px] opacity-80">
                <span className="block font-bold">Location</span>
                <span className="font-light uppercase text-natural-accent">Sapporo, Hokkaido</span>
              </div>
              <div className="text-[10px] opacity-80">
                <span className="block font-bold">Est.</span>
                <span className="font-light uppercase">2026 Film K</span>
              </div>
            </div>
          </footer>

        </div>
      )}

    </div>
  );
}
