/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BRIDAL_PLANS, REVIEWS, CUSTOM_IMAGES } from '../data';
import { Sparkles, Shield, Award, Camera, Play, CheckCircle, ArrowRight, CornerRightDown } from 'lucide-react';

interface BridalSpecialProps {
  onBackToHome: () => void;
}

export default function BridalSpecial({ onBackToHome }: BridalSpecialProps) {
  return (
    <div className="bg-[#150d09] min-h-screen text-[#dfd2c0] selection:bg-[#8b5a2b]/60 selection:text-white">
      
      {/* Bridal Header Badge to go home */}
      <div className="bg-[#2c1a11] py-2.5 px-6 border-b border-[#8b5a2b]/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
          <span className="font-mono tracking-widest text-[#dfd2c0]/65">FILM K SPECIAL EXHIBIT // PART 2</span>
          <button
            id="bridal-back-btn"
            onClick={onBackToHome}
            className="text-[#dfd2c0] font-sans font-semibold hover:text-white flex items-center gap-1.5 bg-[#150d09] px-3.5 py-1 rounded-full border border-[#8b5a2b]/30 shadow-xs cursor-pointer"
          >
            ← メインサイトへ戻る
          </button>
        </div>
      </div>

      {/* Hero Section styled after Luminous Art - Dramatic, glamorous, charcoal-bronze & gold */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#25150c] to-[#150d09]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typography left */}
          <div className="lg:col-span-6 space-y-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8b5a2b]/20 border border-[#8b5a2b]/40 rounded-full text-xs font-medium text-[#dfd2c0] font-mono">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>BRIDAL PHOTOGRAPHY SPECIAL — LUXURY CINE EDITION</span>
            </div>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-light tracking-tight leading-tight lg:leading-tight text-white break-keep">
              映画のラストシーンのような<br />
              <span className="font-semibold text-amber-300 inline-block">劇的なブライダルを。</span>
            </h1>

            <p className="text-sm md:text-base text-[#dfd2c0]/80 leading-relaxed max-w-xl">
              おふたりの誓いを、息を呑むようなファインダーのアートへ。Studio Luminousのような重厚で贅沢な空間設計、そしてFilm Kが誇る「ドローン4K空撮＋シネマムービー」が見事にブレンド。北海道の圧倒的な残雪・緑・夕暮れをドラマに仕立て上げます。
            </p>

            {/* Inclusions overview */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-[#8b5a2b]/20 text-xs text-[#dfd2c0]/70 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>ハイエンドレタッチ(完全美肌・色調補正)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>最高峰インポート衣装・タキシード完備</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>映画用カラー（DaVinci Resolve）納品</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>ドローン空撮シネマフィルム無料同梱</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#bridal-pricing"
                className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-[#150d09] font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all text-center text-sm tracking-widest shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>プランと料金構成</span>
                <CornerRightDown className="w-4 h-4" />
              </a>
              <a 
                href="#contact"
                className="px-8 py-3.5 bg-[#2c1a11] text-[#dfd2c0] font-bold rounded-full border border-[#8b5a2b]/40 hover:bg-[#150d09] transition-all text-center text-sm tracking-widest flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>無料コンサルティング予約</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Photo frame right */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-[#8b5a2b]/30 shadow-2xl skew-y-1 max-w-lg mx-auto bg-warm-gray-900 bg-[#25150c]">
              <img 
                src={CUSTOM_IMAGES.bridal} 
                alt="Studio Luminous Inspired Bridal Photo" 
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-3/4 object-cover filter brightness-95 hover:brightness-100 transition-all duration-500"
              />
            </div>
            
            {/* Ambient gold glow backdrops */}
            <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-amber-600/10 blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[#8b5a2b]/20 blur-2xl -z-10" />

            <div className="absolute bottom-6 left-6 bg-[#2c1a11]/90 backdrop-blur-md p-4 rounded-2xl border border-[#8b5a2b]/40 z-20 max-w-[220px] text-left">
              <span className="text-[9px] font-mono tracking-widest text-amber-400 block">LUMINOUS CINEMATIC STYLE</span>
              <p className="text-xs text-[#dfd2c0]/90 mt-1.5 leading-relaxed">
                単なるポーズではない、お互いを見つめ合って生まれた「感情線」をダイナミックな構図で美しく切り取ります。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Features Spotlight */}
      <section className="py-24 bg-[#1e130d] border-t border-[#8b5a2b]/15">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-[#8b5a2b] uppercase block">THEATRICAL HIGHLIGHTS</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-light text-white mt-2 break-keep">
              Luminous Art が目指す極限の美
            </h2>
            <p className="text-xs text-[#dfd2c0]/70 mt-2">
              一生の思い出となるからこそ、一切の手抜きを許さない極限美に徹底的にこだわります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '最高峰レタッチ（美肌・造形）',
                desc: '独自のレタッチエンジンで毛穴１本のきめ細かさ、ドレスの光量、余分な障害物の除去、骨格美を極限まで美しく調整。',
                icon: Sparkles
              },
              {
                title: 'シームレス連動動画',
                desc: '撮影はスチールとシネマスタビライザーを２丁持ちで連動。写真とまったく同じ質感・ドラマの映像が出来上がります。',
                icon: Camera
              },
              {
                title: 'ハイクオリティガウン',
                desc: '東京・恵比寿やパリのインポートセレクトから買い付けた、極細シルクや贅沢な刺繍ドレスがお選び頂けます。',
                icon: Award
              },
              {
                title: '雨天・雪天補償あり',
                desc: '北海道の屋外撮影で一番心配な天気。撮影中の突発雨などに対し、予備日への代替撮影無料など安心のアフターフォロー。',
                icon: Shield
              }
            ].map((feat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#150d09] border border-[#8b5a2b]/20 hover:border-amber-400/40 transition-colors">
                <feat.icon className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-sm font-semibold text-white mb-2">{feat.title}</h3>
                <p className="text-xs text-[#dfd2c0]/70 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bridal Special Plans */}
      <section id="bridal-pricing" className="py-24 bg-gradient-to-b from-[#150d09] to-[#25150c] border-y border-[#8b5a2b]/15">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-[#8b5a2b] uppercase block">PREMIUM BRIDAL SCHEDULER</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-light text-white mt-2 break-keep">
              ウェディングパッケージ・料金表
            </h2>
            <p className="text-xs text-[#dfd2c0]/70 mt-2">
              クラシックな洋館撮影から、最高峰の空撮とシネマフィルムを融合した至福のプランまで提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {BRIDAL_PLANS.map((plan) => (
              <div 
                key={plan.id}
                className={`bg-[#1e130d] rounded-3xl p-8 border hover:shadow-xl transition-all ${
                  plan.recommended 
                    ? 'border-amber-400 ring-1 ring-amber-400 relative' 
                    : 'border-[#8b5a2b]/30'
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-[#150d09] text-[9px] font-mono font-bold tracking-widest px-4 py-0.5 rounded-full uppercase">
                    GOLD SELECTION
                  </span>
                )}

                <div className="text-center pb-6 border-b border-[#8b5a2b]/25 space-y-1.5">
                  <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-amber-300 font-mono">{plan.duration}</p>
                  <div className="flex items-baseline justify-center gap-1 mt-2">
                    <span className="text-3xl font-bold font-mono text-white">¥{plan.price.toLocaleString()}</span>
                    <span className="text-xs text-[#dfd2c0]/75">（税込）</span>
                  </div>
                </div>

                <p className="text-xs text-[#dfd2c0]/85 my-5 text-center leading-relaxed">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8 text-xs text-[#dfd2c0]/90">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full py-3 text-center block rounded-xl font-bold text-xs tracking-wider transition-all ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-[#150d09] hover:brightness-110'
                      : 'bg-[#2c1a11] text-[#dfd2c0] border border-[#8b5a2b]/40 hover:bg-[#150d09]'
                  }`}
                >
                  この特別なプランで相談する
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Customer review from Bridal */}
      <section className="py-20 bg-[#150d09]">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-[#8b5a2b] uppercase block">VOICES OF ETERNITY</span>
            <h2 className="text-xl md:text-2xl font-light text-white mt-2">
              実際に結婚写真を撮影されたお客様のウェディング紀行
            </h2>
          </div>

          <div className="bg-[#2c1a11] rounded-3xl p-8 border border-[#8b5a2b]/25 max-w-2xl mx-auto">
            {REVIEWS.filter(r => r.category === 'bridal').map(rev => (
              <div key={rev.id} className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-base font-bold text-white block">{rev.name}</span>
                    <span className="text-[10px] font-mono text-amber-300 uppercase">{rev.role}</span>
                  </div>
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Sparkles key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs md:text-sm text-[#dfd2c0]/90 leading-relaxed">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
