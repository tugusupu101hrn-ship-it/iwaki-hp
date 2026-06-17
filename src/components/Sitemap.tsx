import React from 'react';
import { AppView } from '../types';

interface SitemapProps {
  navigateTo: (view: AppView) => void;
}

export default function Sitemap({ navigateTo }: SitemapProps) {
  return (
    <section id="sitemap" className="bg-[#3e2e21] text-[#f7f2eb] border-t border-white/5 py-16 px-8 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-xs">
        
        {/* Column 1: Core Navigation */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold tracking-wider text-natural-accent border-b border-white/10 pb-2">
            Film K サイトマップ // HOME
          </h4>
          <ul className="space-y-2.5 text-white/80 font-sans">
            <li>
              <button 
                id="sitemap-btn-home"
                onClick={() => navigateTo('home')} 
                className="hover:text-[#dfd2c0] hover:underline transition-all cursor-pointer text-left"
              >
                ・ホーム (トップページ)
              </button>
            </li>
            <li>
              <button 
                id="sitemap-btn-gallery"
                onClick={() => navigateTo('gallery')} 
                className="hover:text-[#dfd2c0] hover:underline transition-all cursor-pointer text-left"
              >
                ・ギャラリー (撮影作品ポートフォリオ)
              </button>
            </li>
            <li>
              <button 
                id="sitemap-btn-estimator"
                onClick={() => navigateTo('estimator')} 
                className="hover:text-[#dfd2c0] hover:underline transition-all cursor-pointer text-left"
              >
                ・リアルタイム料金プランシミュレーター
              </button>
            </li>
            <li>
              <button 
                id="sitemap-btn-contact"
                onClick={() => navigateTo('contact')} 
                className="hover:text-[#dfd2c0] hover:underline transition-all cursor-pointer text-left"
              >
                ・無料相談 ＆ 撮影予約フォーム
              </button>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={() => navigateTo('contact')} 
                className="hover:text-[#dfd2c0] hover:underline transition-all cursor-pointer text-left"
              >
                ・会社概要 / アクセス地図
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Maternity Specifics */}
        <div className="space-y-4 font-sans">
          <h4 className="text-sm font-semibold tracking-wider text-natural-accent border-b border-white/10 pb-2">
            マタニティフォト特設
          </h4>
          <ul className="space-y-2.5 text-white/80">
            <li>
              <button 
                id="sitemap-btn-maternity-page"
                onClick={() => navigateTo('maternity')} 
                className="hover:text-[#dfd2c0] hover:underline transition-all cursor-pointer font-bold text-[#dfd2c0] text-left"
              >
                ・マタニティフォト特設トップページ
              </button>
            </li>
            <li>
              <button 
                id="sitemap-btn-mat-lite"
                onClick={() => { navigateTo('maternity'); setTimeout(() => document.getElementById('maternity-pricing')?.scrollIntoView({ behavior: 'smooth' }), 200); }} 
                className="hover:text-[#dfd2c0] hover:underline transition-all cursor-pointer text-left"
              >
                ・ナチュラル・ハピネスプラン (スタジオ撮影)
              </button>
            </li>
            <li>
              <button 
                id="sitemap-btn-mat-prem"
                onClick={() => { navigateTo('maternity'); setTimeout(() => document.getElementById('maternity-pricing')?.scrollIntoView({ behavior: 'smooth' }), 200); }} 
                className="hover:text-[#dfd2c0] hover:underline transition-all cursor-pointer text-left"
              >
                ・北海道ネイチャー・ドキュメンタリープラン (富良野・美瑛ロケ)
              </button>
            </li>
            <li>
              <button 
                id="sitemap-btn-mat-review"
                onClick={() => { navigateTo('maternity'); setTimeout(() => document.getElementById('maternity-reviews')?.scrollIntoView({ behavior: 'smooth' }), 200); }} 
                className="hover:text-[#dfd2c0] hover:underline transition-all cursor-pointer text-left"
              >
                ・マタニティフォトご利用のお客様の声 (口コミ)
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Bridal Specifics */}
        <div className="space-y-4 font-sans">
          <h4 className="text-sm font-semibold tracking-wider text-natural-accent border-b border-white/10 pb-2">
            ウェディング＆ブライダル
          </h4>
          <ul className="space-y-2.5 text-white/80">
            <li>
              <button 
                id="sitemap-btn-bridal-page"
                onClick={() => navigateTo('bridal')} 
                className="hover:text-[#dfd2c0] hover:underline transition-all cursor-pointer font-bold text-[#dfd2c0] text-left"
              >
                ・ブライダル・ウェディング特設トップページ
              </button>
            </li>
            <li>
              <button 
                id="sitemap-btn-bri-classic"
                onClick={() => { navigateTo('bridal'); setTimeout(() => document.getElementById('bridal-pricing')?.scrollIntoView({ behavior: 'smooth' }), 200); }} 
                className="hover:text-[#dfd2c0] hover:underline transition-all cursor-pointer text-left"
              >
                ・ヴィンテージ・ロマンティックプラン (洋館撮影)
              </button>
            </li>
            <li>
              <button 
                id="sitemap-btn-bri-cine"
                onClick={() => { navigateTo('bridal'); setTimeout(() => document.getElementById('bridal-pricing')?.scrollIntoView({ behavior: 'smooth' }), 200); }} 
                className="hover:text-[#dfd2c0] hover:underline transition-all cursor-pointer text-left"
              >
                ・ルミナス・グランド・ドローン＆シネマプラン (4K空撮)
              </button>
            </li>
            <li>
              <button 
                id="sitemap-btn-bri-review"
                onClick={() => { navigateTo('bridal'); setTimeout(() => document.getElementById('bridal-reviews')?.scrollIntoView({ behavior: 'smooth' }), 200); }} 
                className="hover:text-[#dfd2c0] hover:underline transition-all cursor-pointer text-left"
              >
                ・ブライダル撮影ご利用のお客様の声 (口コミ)
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Location Service Area */}
        <div className="space-y-4 font-sans">
          <h4 className="text-sm font-semibold tracking-wider text-natural-accent border-b border-white/10 pb-2 font-sans">
            対応撮影ロケーション
          </h4>
          <p className="text-[11px] text-white/60 leading-relaxed font-sans">
            北海道の壮大な各地で出張ロケーション撮影に対応しております。お気軽にお申し付けください。
          </p>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-white/70 font-sans">
            <div>・札幌市/札幌スタジオ</div>
            <div>・小樽市 (小樽運河)</div>
            <div>・富良野市/美瑛町</div>
            <div>・ニセコ町 (羊蹄山)</div>
            <div>・函館市 (洋館)</div>
            <div>・積丹町 (積丹ブルー)</div>
          </div>
        </div>

      </div>
    </section>
  );
}
