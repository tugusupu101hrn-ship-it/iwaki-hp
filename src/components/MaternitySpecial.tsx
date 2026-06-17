/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MATERNITY_PLANS, REVIEWS, CUSTOM_IMAGES } from '../data';
import { Heart, ShieldCheck, UserCheck, Calendar, Sparkles, Smile, ArrowRight, CornerRightDown } from 'lucide-react';

interface MaternitySpecialProps {
  onBackToHome: () => void;
}

export default function MaternitySpecial({ onBackToHome }: MaternitySpecialProps) {
  return (
    <div className="bg-[#fdfcf9] min-h-screen text-[#5d4037] selection:bg-[#dfd2c0]/60 selection:text-[#5d4037]">
      
      {/* Dynamic Header Badge to return home */}
      <div className="bg-[#dfd2c0]/40 py-2.5 px-6 border-b border-[#dfd2c0]/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
          <span className="font-mono tracking-wider text-[#8d6e63]">FILM K SPECIAL EXHIBIT // PART 1</span>
          <button
            id="maternity-back-btn"
            onClick={onBackToHome}
            className="text-[#5d4037] font-semibold hover:text-[#8b5a2b] flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-[#dfd2c0]/50 shadow-xs cursor-pointer"
          >
            ← メインサイトへ戻る
          </button>
        </div>
      </div>

      {/* Hero Section styled after LifeStudio - Soft, ethereal, cozy cream-beige */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#fcfaf2] to-[#fcfbf9]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typography left */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#dfd2c0]/30 rounded-full text-xs font-medium text-[#8d6e63] font-sans">
              <Heart className="w-3.5 h-3.5 text-[#e57373]" />
              <span>マタニティフォト特設ページ — LifeStudioテイスト</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans leading-tight lg:leading-tight text-[#4e342e] font-light break-keep">
              お腹の中にいる時から、<br />
              <span className="font-bold text-[#8d6e63] bg-gradient-to-r from-[#8d6e63] to-[#b7a38b] bg-clip-text text-transparent inline-block">はじまる家族の物語</span>
            </h1>

            <p className="text-sm md:text-base text-[#6d4c41] leading-relaxed max-w-xl">
              いつか大きくなった我が子に見せてあげたい。新しい生命を迎える奇跡の瞬間を、北海道の柔らかな木漏れ日や美しいパノラマのなかで優しく描写します。ママの負担を最優先した、完全アテンド出張＆プライベート撮影です。
            </p>

            {/* Micro value stats */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-[#dfd2c0]/40 text-center">
              <div className="border-r border-[#dfd2c0]/40">
                <span className="block text-2xl font-bold text-[#8d6e63] font-mono">Dress</span>
                <span className="text-[10px] text-[#6d4c41]/80 mt-1 block">マタニティドレスレンタル可能</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-[#8d6e63] font-mono">0円</span>
                <span className="text-[10px] text-[#6d4c41]/80 mt-1 block">日程順延手数料</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#maternity-pricing"
                className="px-8 py-3.5 bg-[#8d6e63] text-white font-bold rounded-full hover:bg-[#4e342e] transition-all text-center text-sm tracking-widest shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>プラン料金を見る</span>
                <CornerRightDown className="w-4 h-4" />
              </a>
              <a 
                href="#contact"
                className="px-8 py-3.5 bg-white text-[#8d6e63] font-bold rounded-full border border-[#dfd2c0] hover:bg-[#fcfaf2] transition-all text-center text-sm tracking-widest flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>空き状況の相談をする</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Photo frame right */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white shadow-xl rotate-1 max-w-lg mx-auto bg-warm-gray-100">
              <img 
                src={CUSTOM_IMAGES.maternity} 
                alt="Hokkaido Maternity Photography" 
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-3/4 object-cover"
              />
            </div>
            
            {/* Ethereal background accent circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#fce4ec]/40 blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[#dfd2c0]/30 blur-2xl -z-10" />

            <div className="absolute bottom-4 right-4 bg-[#fdfcf9] p-4 rounded-xl shadow-lg border border-[#dfd2c0]/40 z-20 max-w-[200px] text-left">
              <span className="text-[10px] font-mono text-[#8d6e63] block">RECOMMENDED SEASON</span>
              <p className="text-xs font-semibold text-[#4e342e] mt-1">
                北海道・美瑛・旭川のラベンダー・麦ワラ期がおすすめです（7月〜9月）
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Style Concept Section (LifeStudio features) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-[#8d6e63]">LIFESTUDIO PHILOSOPHY</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-light text-[#4e342e] mt-2 break-keep">
              私たちが愛され、お喜び頂ける理由
            </h2>
            <p className="text-xs text-[#8d6e63]/80 mt-2">
              マタニティ撮影において最も大切なのは、ママの居心地のよさと、リラックスして生まれるピュアな表情です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Guarantee 1 */}
            <div className="p-8 rounded-2xl bg-[#fdfcf9] border border-[#dfd2c0]/30 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#fce4ec] flex items-center justify-center text-[#e57373]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#4e342e]">ママ第一、安心の体調優先撮影</h3>
              <p className="text-xs text-[#6d4c41] leading-relaxed">
                妊婦様の体力を第一に配慮。撮影時間は細かな小休憩を挟みながらお茶などで水分補給。もし万が一、当日に体調が優れない場合は日程変更料無料で即時延期スケジュールを組み直します。
              </p>
            </div>

            {/* Guarantee 2 */}
            <div className="p-8 rounded-2xl bg-[#fdfcf9] border border-[#dfd2c0]/30 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#dfd2c0]/40 flex items-center justify-center text-[#8d6e63]">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#4e342e]">女性スタイリスト・アテンド同行</h3>
              <p className="text-xs text-[#6d4c41] leading-relaxed">
                露出調節やお腹の出し方、ドレスのちょっとした乱れ、ポージング時の微修正など、女性カメラマンまたはスタイリストが同行し丁寧にかつ同性視点で優しくフォローするのでご安心いただけます。
              </p>
            </div>

            {/* Guarantee 3 */}
            <div className="p-8 rounded-2xl bg-[#fdfcf9] border border-[#dfd2c0]/30 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#fff3e0] flex items-center justify-center text-[#ffb74d]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#4e342e]">温白色を活かしたレタッチ加工</h3>
              <p className="text-xs text-[#6d4c41] leading-relaxed">
                LifeStudioのようなふんわりと明るく透き通るような白調、そして北海道の優しい陽光がふたりを包む「ウォーム・ハイキー調」の専門加工を施した高品質ファイルをお届けします。
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Maternity Plans Section */}
      <section id="maternity-pricing" className="py-20 bg-[#fdfbf7] border-y border-[#dfd2c0]/20">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-[#8d6e63]">SIMPLE & ELEGANT PRICING</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-light text-[#4e342e] mt-2 break-keep">
              マタニティプラン・料金案内
            </h2>
            <p className="text-xs text-[#8d6e63]/80 mt-2">
              ご希望の撮り方に合わせて2つの温和なパッケージをご用意。撮影費用、データ補正、衣装代が含まれます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {MATERNITY_PLANS.map((plan) => (
              <div 
                key={plan.id}
                className={`bg-white rounded-3xl p-8 border ${
                  plan.recommended 
                    ? 'border-[#8d6e63] ring-1 ring-[#8d6e63] shadow-lg relative' 
                    : 'border-[#dfd2c0]/40 shadow-sm'
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8d6e63] text-white text-[10px] font-sans font-bold tracking-widest uppercase px-4 py-1 rounded-full">
                    RECOMMENDED PLAN
                  </span>
                )}

                <div className="text-center pb-6 border-b border-[#dfd2c0]/30 space-y-2">
                  <h3 className="text-xl font-bold text-[#4e342e]">{plan.name}</h3>
                  <p className="text-xs text-[#8d6e63] font-mono">{plan.duration}</p>
                  <div className="flex items-baseline justify-center gap-1 mt-2">
                    <span className="text-3xl font-bold text-[#4e342e]">¥{plan.price.toLocaleString()}</span>
                    <span className="text-xs text-[#6d4c41]">（税込）</span>
                  </div>
                </div>

                <p className="text-xs text-[#6d4c41]/90 my-6 text-center leading-relaxed">
                  {plan.description}
                </p>

                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#5d4037]">
                      <Smile className="w-4 h-4 text-[#8d6e63] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full py-3.5 text-center block rounded-xl font-bold text-xs tracking-wider transition-all ${
                    plan.recommended
                      ? 'bg-[#8d6e63] text-white hover:bg-[#4e342e]'
                      : 'bg-[#dfd2c0]/35 text-[#8d6e63] hover:bg-[#dfd2c0]/65'
                  }`}
                >
                  このプランを予約・相談する
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
