/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HOKKAIDO_LOCATIONS } from '../data';
import { Calculator, ArrowRight, HelpCircle, CheckCircle2, Video, Plane, MapPin, Calendar } from 'lucide-react';

interface PriceEstimatorProps {
  onSelectedPlan: (category: string) => void;
}

export default function PriceEstimator({ onSelectedPlan }: PriceEstimatorProps) {
  const [planType, setPlanType] = useState<'maternity' | 'bridal' | 'comprehensive'>('bridal');
  const [corpMenu, setCorpMenu] = useState<string>('corp_pv_short');
  const [hasDrone, setHasDrone] = useState(true);
  const [hasVideoEdit, setHasVideoEdit] = useState(true);
  const [location, setLocation] = useState('furano_biei');
  const [durationHours, setDurationHours] = useState(3);
  const [totalCost, setTotalCost] = useState(0);

  // Real-time cost calculation logic matching specifications 100%
  useEffect(() => {
    let basePrice = 0;
    let timeAddon = 0;
    let droneAddon = 0;
    let videoEditAddon = 0;
    let travelCost = 0;

    travelCost = HOKKAIDO_LOCATIONS.find((loc) => loc.value === location)?.fee || 0;

    if (planType === 'maternity') {
      // Maternity photo shoot base: 29,800 JPY (1.5 hours)
      basePrice = 29800;
      // Extension: 5,000 JPY per 30 minutes (equivalent to 10,000 JPY/hr, calculated in 30-min blocks)
      const extraHalfHours = Math.max(0, Math.ceil((durationHours - 1.5) / 0.5));
      timeAddon = extraHalfHours * 5000;
      // Drone option: 30,000 JPY
      droneAddon = hasDrone ? 30000 : 0;
      // Cinematic video editing: 30,000 JPY
      videoEditAddon = hasVideoEdit ? 30000 : 0;
    } else if (planType === 'bridal') {
      // Bridal photo shoot base: 39,800 JPY (starts at 2 hours)
      basePrice = 39800;
      // Extension: 10,000 JPY per 1 hour
      const extraHours = Math.max(0, Math.ceil(durationHours - 2));
      timeAddon = extraHours * 10000;
      // Drone option: 30,000 JPY
      droneAddon = hasDrone ? 30000 : 0;
      // Cinematic video editing: 40,000 JPY
      videoEditAddon = hasVideoEdit ? 40000 : 0;
    } else {
      // Corporate Video & Promotion Plan (Flat Rate structures)
      if (corpMenu === 'corp_interview') basePrice = 150000;
      else if (corpMenu === 'corp_pv_short') basePrice = 250000;
      else if (corpMenu === 'corp_pv_long') basePrice = 400000;
      else if (corpMenu === 'corp_pv_composite') basePrice = 650000;
      else if (corpMenu === 'corp_stills') basePrice = 30000;
      else if (corpMenu === 'corp_exec') basePrice = 50000;

      // Corporate Drone option: 100,000 JPY
      droneAddon = hasDrone ? 100000 : 0;
      // Video editing is pre-included in the PV base package, so zero videoEditAddon.
      videoEditAddon = 0;
      // Set default hours standard to match description
      if (corpMenu === 'corp_interview') durationHours !== 4 && setDurationHours(4);
      else if (corpMenu === 'corp_pv_short') durationHours !== 8 && setDurationHours(8); // standard 1 day
      else if (corpMenu === 'corp_pv_long') durationHours !== 12 && setDurationHours(12); // standard 1.5 days
      else if (corpMenu === 'corp_pv_composite') durationHours !== 16 && setDurationHours(16); // 2-day set
      else if (corpMenu === 'corp_stills') durationHours !== 3 && setDurationHours(3);
      else if (corpMenu === 'corp_exec') durationHours !== 2 && setDurationHours(2);
    }

    setTotalCost(basePrice + timeAddon + droneAddon + videoEditAddon + travelCost);
  }, [planType, corpMenu, hasDrone, hasVideoEdit, location, durationHours]);

  return (
    <div id="price-estimator" className="py-16 bg-[#fbf9f4] border-y border-[#dfd2c0]/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Headings */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-widest text-[#8b5a2b] uppercase bg-[#dfd2c0]/20 px-3 py-1 rounded-full">PLANNING TOOL</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans text-[#4a2c11] tracking-tight mt-3 break-keep">
            料金シミュレーター
          </h2>
          <p className="text-sm text-[#8b5a2b]/80 mt-3 leading-relaxed">
            ご希望のプランや出張地域、ドローンや動画編集オプションを組み合わせ、概算金額をリアルタイムにシミュレートできます。
          </p>
        </div>

        {/* Multi-grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-[#dfd2c0]/40 shadow-sm space-y-8">
            
            {/* Step 1: Base Shoot Type */}
            <div>
              <label className="text-sm font-sans font-semibold text-[#4a2c11] flex items-center gap-2 mb-4">
                <span className="w-5 h-5 flex items-center justify-center bg-[#8b5a2b] text-[#fbf9f4] rounded-full text-xs font-bold">1</span>
                基本撮影カテゴリを選択
              </label>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Maternity */}
                <button
                  id="estimator-plan-maternity"
                  onClick={() => { setPlanType('maternity'); setDurationHours(1.5); }}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    planType === 'maternity' 
                      ? 'border-[#8b5a2b] bg-[#fcfaf7] ring-1 ring-[#8b5a2b]'
                      : 'border-[#dfd2c0]/50 hover:border-[#8b5a2b]/50 hover:bg-[#dfd2c0]/5'
                  }`}
                >
                  <span className="block text-xs font-mono text-[#8b5a2b] uppercase mb-1">Maternity</span>
                  <span className="block text-base font-semibold text-[#4a2c11]">マタニティフォト</span>
                  <span className="block text-xs text-[#8b5a2b]/70 mt-1 font-mono font-medium">基本 ¥29,800〜</span>
                </button>

                {/* Bridal */}
                <button
                  id="estimator-plan-bridal"
                  onClick={() => { setPlanType('bridal'); setDurationHours(2); }}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    planType === 'bridal' 
                      ? 'border-[#8b5a2b] bg-[#fcfaf7] ring-1 ring-[#8b5a2b]'
                      : 'border-[#dfd2c0]/50 hover:border-[#8b5a2b]/50 hover:bg-[#dfd2c0]/5'
                  }`}
                >
                  <span className="block text-xs font-mono text-[#8b5a2b] uppercase mb-1">Bridal Wedding</span>
                  <span className="block text-base font-semibold text-[#4a2c11]">ブライダルフォト</span>
                  <span className="block text-xs text-[#8b5a2b]/70 mt-1 font-mono font-medium">基本 ¥39,800〜</span>
                </button>

                {/* Comprehensive Corporate Video */}
                <button
                  id="estimator-plan-comprehensive"
                  onClick={() => { setPlanType('comprehensive'); }}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    planType === 'comprehensive' 
                      ? 'border-[#8b5a2b] bg-[#fcfaf7] ring-1 ring-[#8b5a2b]'
                      : 'border-[#dfd2c0]/50 hover:border-[#8b5a2b]/50 hover:bg-[#dfd2c0]/5'
                  }`}
                >
                  <span className="block text-xs font-mono text-[#8b5a2b] uppercase mb-1">Corporate Menu</span>
                  <span className="block text-base font-semibold text-[#4a2c11]">法人向けプラン</span>
                  <span className="block text-xs text-[#8b5a2b]/70 mt-1 font-mono font-medium">基本 ¥30,000〜</span>
                </button>
              </div>
            </div>

            {/* Step 2: Location Select */}
            <div>
              <label className="text-sm font-sans font-semibold text-[#4a2c11] flex items-center gap-2 mb-3">
                <span className="w-5 h-5 flex items-center justify-center bg-[#8b5a2b] text-[#fbf9f4] rounded-full text-xs font-bold">2</span>
                撮影を希望する北海道エリア
              </label>
              <div className="relative">
                <MapPin className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5 text-[#8b5a2b]" />
                <select
                  id="estimator-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#fcfaf7] border border-[#dfd2c0] rounded-xl text-[#4a2c11] focus:outline-none focus:border-[#8b5a2b] transition-all"
                >
                  {HOKKAIDO_LOCATIONS.map((loc) => (
                    <option key={loc.value} value={loc.value}>
                      {loc.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Conditional Block: Personal Shoot sliders vs Corporate Menu Selections */}
            {planType !== 'comprehensive' ? (
              /* Step 3: Hour Duration Slider for Maternity & Bridal */
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-sans font-semibold text-[#4a2c11] flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center bg-[#8b5a2b] text-[#fbf9f4] rounded-full text-xs font-bold">3</span>
                    ご希望の拘束・撮影時間 (延長料金対応)
                  </label>
                  <span className="text-sm font-mono font-medium text-[#8b5a2b]">{durationHours} 時間</span>
                </div>
                
                <input
                  id="estimator-duration-slider"
                  type="range"
                  min={planType === 'maternity' ? '1.5' : '2'}
                  max="10"
                  step="0.5"
                  value={durationHours}
                  onChange={(e) => setDurationHours(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-[#dfd2c0]/40 rounded-lg appearance-none cursor-pointer accent-[#8b5a2b]"
                />
                <div className="flex justify-between text-[11px] text-[#8b5a2b]/70 mt-2 font-mono">
                  <span>
                    基本時間: {planType === 'maternity' ? '1.5時間 (¥29,800)' : '2時間 (¥39,800〜)'}
                  </span>
                  <span>
                    延長料金: {planType === 'maternity' ? '¥5,000 / 30分毎' : '¥10,000 / 1時間毎'}
                  </span>
                </div>
              </div>
            ) : (
              /* Step 3: Corporate Menu Specific Selector */
              <div>
                <label className="text-sm font-sans font-semibold text-[#4a2c11] flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 flex items-center justify-center bg-[#8b5a2b] text-[#fbf9f4] rounded-full text-xs font-bold">3</span>
                  法人向けメニュー内容を選択
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { id: 'corp_interview', label: 'インタビュー動画撮影', price: '¥150,000' },
                    { id: 'corp_pv_short', label: '企業PV (2分未満) 短尺PV', price: '¥250,000' },
                    { id: 'corp_pv_long', label: '企業PV (5分未満) 本格PV', price: '¥400,000' },
                    { id: 'corp_pv_composite', label: 'インタビュー＋企業PV (2日セット)', price: '¥650,000〜' },
                    { id: 'corp_stills', label: '法人写真撮影 (HP・パンフレット向け)', price: '¥30,000〜' },
                    { id: 'corp_exec', label: '代表者撮影 (出張プロフィール用)', price: '¥50,000〜' },
                  ].map((menu) => (
                    <button
                      key={menu.id}
                      type="button"
                      onClick={() => setCorpMenu(menu.id)}
                      className={`p-3 rounded-xl text-left border text-xs transition-all flex justify-between items-center ${
                        corpMenu === menu.id
                          ? 'border-[#8b5a2b] bg-[#fcfaf7] ring-1 ring-[#8b5a2b] font-medium'
                          : 'border-[#dfd2c0]/40 hover:bg-[#dfd2c0]/5'
                      }`}
                    >
                      <span className="text-[#4a2c11]">{menu.label}</span>
                      <span className="font-mono text-[#8b5a2b]">{menu.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Cinematic Video Option & Drone Option */}
            <div>
              <label className="text-sm font-sans font-semibold text-[#4a2c11] flex items-center gap-2 mb-4">
                <span className="w-5 h-5 flex items-center justify-center bg-[#8b5a2b] text-[#fbf9f4] rounded-full text-xs font-bold">4</span>
                プロ用オプション追加
              </label>

              <div className="space-y-3">
                {/* Drone aerial footage */}
                <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                  hasDrone ? 'border-[#8b5a2b] bg-[#fcfaf7]' : 'border-[#dfd2c0]/40 hover:bg-[#dfd2c0]/5'
                }`}>
                  <div className="flex items-start gap-3">
                    <input
                      id="estimator-option-drone"
                      type="checkbox"
                      checked={hasDrone}
                      onChange={(e) => setHasDrone(e.target.checked)}
                      className="mt-1 accent-[#8b5a2b] h-4 w-4"
                    />
                    <div>
                      <span className="text-sm font-semibold text-[#4a2c11] flex items-center gap-1.5">
                        <Plane className="w-4 h-4 text-[#8b5a2b]" />
                        国土交通省承認 高品質4Kドローン空撮を追加 (+{planType === 'comprehensive' ? '¥100,000〜' : '¥30,000'})
                      </span>
                      <p className="text-xs text-[#8b5a2b]/70 mt-1">
                        {planType === 'comprehensive' 
                          ? '企業PVや工場・社屋の外観、観光PR等に圧倒的な迫力を加える法人空撮特別プラン。'
                          : '北海道の大自然・四季折々の地平線を壮大なパノラマスケールで捉えます。'}
                      </p>
                    </div>
                  </div>
                </label>

                {/* Non-stop editing integration - Only visible/applicable for Personal Maternity & Bridal */}
                {planType !== 'comprehensive' && (
                  <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    hasVideoEdit ? 'border-[#8b5a2b] bg-[#fcfaf7]' : 'border-[#dfd2c0]/40 hover:bg-[#dfd2c0]/5'
                  }`}>
                    <div className="flex items-start gap-3">
                      <input
                        id="estimator-option-video"
                        type="checkbox"
                        checked={hasVideoEdit}
                        onChange={(e) => setHasVideoEdit(e.target.checked)}
                        className="mt-1 accent-[#8b5a2b] h-4 w-4"
                      />
                      <div>
                        <span className="text-sm font-semibold text-[#4a2c11] flex items-center gap-1.5">
                          <Video className="w-4 h-4 text-[#8b5a2b]" />
                          シネマティック動画・編集を追加 (+{planType === 'maternity' ? '¥30,000' : '¥40,000'})
                        </span>
                        <p className="text-xs text-[#8b5a2b]/70 mt-1">
                          フィルムさながらの滑らかな映像トランジションと、BGMを完全にシンクロさせたショートムービー。
                        </p>
                      </div>
                    </div>
                  </label>
                )}
              </div>
            </div>

          </div>

          {/* Estimates Card Sticky Side */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 bg-[#4a2c11] text-[#dfd2c0] p-8 rounded-2xl shadow-xl space-y-6">
            
            <div>
              <span className="text-xs font-mono tracking-widest text-[#dfd2c0]/60 uppercase">TOTAL ESTIMATED PRICE</span>
              <h3 className="text-xs text-[#dfd2c0]/60 mt-1">Film K 出張オーダー見積もり金額</h3>
            </div>

            {/* Clear Big Price display */}
            <div className="border-y border-[#dfd2c0]/15 py-6">
              <span className="text-sm font-mono text-[#dfd2c0]/80">税込料金シミュレーション</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl md:text-5xl font-mono font-bold text-white">¥{totalCost.toLocaleString()}</span>
                <span className="text-sm font-sans text-[#dfd2c0]/70">
                  {['corp_pv_composite', 'corp_stills', 'corp_exec'].includes(corpMenu) && planType === 'comprehensive' ? '〜（概算）' : '（概算）'}
                </span>
              </div>
            </div>

            {/* Inclusions checklist dynamically created based on options selected */}
            <div>
              <h4 className="text-xs font-mono tracking-wider uppercase text-white mb-3">お見積もりに含まれるサービス項目:</h4>
              <ul className="space-y-2 text-sm text-[#dfd2c0]/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    {planType === 'maternity' 
                      ? 'マタニティ基本フォト撮影' 
                      : planType === 'bridal' 
                      ? 'ブライダル基本フォト撮影（2hスタート）' 
                      : `法人：${
                          corpMenu === 'corp_interview' ? 'インタビュー動画撮影' :
                          corpMenu === 'corp_pv_short' ? '企業PV（2分未満）' :
                          corpMenu === 'corp_pv_long' ? '企業PV（5分未満、構成考案込）' :
                          corpMenu === 'corp_pv_composite' ? 'インタビュー＋企業PV撮影（2日セット）' :
                          corpMenu === 'corp_stills' ? '企業スチール写真撮影' : '代表者プロフィール出張撮影'
                        }`}
                  </span>
                </li>
                {planType !== 'comprehensive' && (
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>撮影拘束時間：たっぷり {durationHours}時間</span>
                  </li>
                )}
                {hasDrone && (
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>国土交通省航空局承認 ドローン4K空撮映像収録</span>
                  </li>
                )}
                {planType !== 'comprehensive' && hasVideoEdit && (
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>DaVinci Resolveによる高度シネマティック動画編集 ({planType === 'maternity' ? '¥30,000' : '¥40,000'})</span>
                  </li>
                )}
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    出張先エリア：{HOKKAIDO_LOCATIONS.find(l => l.value === location)?.label.split('（')[0]} 
                    （出張費：¥{(HOKKAIDO_LOCATIONS.find(l => l.value === location)?.fee || 0).toLocaleString()}円）
                  </span>
                </li>
              </ul>
            </div>

            {/* Note about real consultation */}
            <p className="text-xs text-[#dfd2c0]/60 leading-relaxed">
              ※本シミュレーターの金額は概算となります。気象条件や混み具合、お好みのドレスブランド、撮影希望カット数により変動します。一度お気軽にお問い合わせ窓口からご相談ください。
            </p>

            {/* CTA action to go to form with pre-filled */}
            <a 
              href="#contact"
              onClick={() => {
                // Pre-fill type inside the window.location or contact form state if available
                onSelectedPlan(planType);
              }}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#dfd2c0] to-[#b7a38b] hover:from-white hover:to-[#dfd2c0] text-[#4a2c11] text-center font-bold text-sm tracking-widest flex items-center justify-center gap-2 transition-all mt-4 cursor-pointer"
            >
              <span>このプラン仕様で詳しく相談する</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}
