/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactFormData } from '../types';
import { Mail, Phone, Calendar, MapPin, Send, CheckCircle, ChevronRight, MessageSquareCode } from 'lucide-react';
import { HOKKAIDO_LOCATIONS, FILM_K_PROFILE } from '../data';
import FilmKLogo from './FilmKLogo';

export default function ContactUs() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    eventType: 'bridal',
    preferredDate: '',
    location: 'furano_biei',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('お名前、メールアドレス、お電話番号をご記入ください。');
      return;
    }

    setIsSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#1e130d] text-[#dfd2c0] relative overflow-hidden border-t border-[#dfd2c0]/10">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-[-20%] w-96 h-96 rounded-full bg-[#8b5a2b]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase bg-[#8b5a2b]/30 px-3 py-1 rounded-full">CONTACT REGISTRATION</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-light tracking-tight text-white mt-4 break-keep">
                お役立ちのご相談・お問い合わせ
              </h2>
              <p className="text-xs text-[#dfd2c0]/75 mt-3 leading-relaxed">
                北海道でのシネマムービー制作、ドローン空撮、マタニティ・ブライダル出張撮影について、どのようなことでもお気軽にご相談ください。24時間以内に専門スタッフが直接ご返信・ご提案いたします。
              </p>
            </div>

            {/* Profile specifications */}
            <div className="space-y-4 text-xs font-sans text-[#dfd2c0]/90 bg-[#150d09]/60 p-6 rounded-2xl border border-[#8b5a2b]/30">
              <div className="flex justify-between items-start">
                <h4 className="font-mono font-bold tracking-widest text-amber-300 uppercase">COMPANY PROFILE</h4>
                <div className="bg-[#8b5a2b]/15 rounded-xl p-1.5 border border-[#8b5a2b]/20 shrink-0">
                  <FilmKLogo size={36} variant="dark" />
                </div>
              </div>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#8b5a2b] shrink-0 font-mono w-20">会社名：</span>
                  <span>{FILM_K_PROFILE.name}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#8b5a2b] shrink-0 font-mono w-20">代表社員：</span>
                  <span>{FILM_K_PROFILE.representative}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#8b5a2b] shrink-0 font-mono w-20">事業内容：</span>
                  <div className="space-y-1 text-[#dfd2c0]/90">
                    {FILM_K_PROFILE.businessContents ? (
                      FILM_K_PROFILE.businessContents.map((content, idx) => (
                        <div key={idx} className="flex items-start gap-1">
                          <span>・</span>
                          <span>{content}</span>
                        </div>
                      ))
                    ) : (
                      <>
                        <div>・企業プロモーションビデオの企画・制作</div>
                        <div>・採用向け動画、Web用ヒーロー動画の制作</div>
                        <div>・SNS特化型縦型ショート動画の制作</div>
                        <div>・ドローンによる空撮業務（二等無人航空機操縦士）</div>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-2.5 pt-1 border-t border-[#8b5a2b]/10">
                  <span className="font-bold text-[#8b5a2b] shrink-0 font-mono w-20">所在地：</span>
                  <span>〒{FILM_K_PROFILE.postalCode} <br />{FILM_K_PROFILE.address}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#8b5a2b] shrink-0 font-mono w-20">電話：</span>
                  <a href={`tel:${FILM_K_PROFILE.phone}`} className="hover:underline hover:text-white transition-colors">{FILM_K_PROFILE.phone}</a>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#8b5a2b] shrink-0 font-mono w-20">メール：</span>
                  <a href={`mailto:${FILM_K_PROFILE.email}`} className="hover:underline hover:text-white transition-colors">{FILM_K_PROFILE.email}</a>
                </div>
              </div>
            </div>

            {/* Equipment checklist detailing video/photo specialization */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono tracking-widest text-[#8b5a2b] uppercase">STUDIO HARDWARES IN USE</h4>
              <ul className="grid grid-cols-1 gap-2 text-[11px] font-mono text-[#dfd2c0]/70">
                {FILM_K_PROFILE.equipment.map((eq, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Notice */}
            <p className="text-[10px] text-[#dfd2c0]/50 leading-relaxed font-mono">
              ※全道（札幌・小樽・富良野・美瑛・旭川・帯広・ニセコ・函館など）および日本全国への出張撮影実績がございます。移動費や日程延期等の諸規定についても分かりやすく透明性の高いご説明を徹底しています。
            </p>
          </div>

          {/* Form / Ticket Side */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              
              {!success ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#2c1a11] p-8 md:p-10 rounded-3xl border border-[#8b5a2b]/40 shadow-xl space-y-6"
                >
                  <h3 className="text-lg font-bold font-sans text-white border-b border-[#8b5a2b]/20 pb-4">
                    オンライン予約・無料お見積もり窓口
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="text-xs font-mono tracking-widest text-[#dfd2c0]/70 block mb-2">お名前 <span className="text-red-400">*</span></label>
                      <input 
                        id="contact-name"
                        type="text" 
                        required
                        placeholder="山田 太郎"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-[#150d09] border border-[#8b5a2b]/40 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-all text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-mono tracking-widest text-[#dfd2c0]/70 block mb-2">メールアドレス <span className="text-red-400">*</span></label>
                      <input 
                        id="contact-email"
                        type="email" 
                        required
                        placeholder="example@hokkaidofilmk.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-[#150d09] border border-[#8b5a2b]/40 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="text-xs font-mono tracking-widest text-[#dfd2c0]/70 block mb-2">電話番号 <span className="text-red-400">*</span></label>
                      <input 
                        id="contact-phone"
                        type="tel" 
                        required
                        placeholder="090-1234-5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-[#150d09] border border-[#8b5a2b]/40 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-all text-sm"
                      />
                    </div>

                    {/* Event Type Select */}
                    <div>
                      <label className="text-xs font-mono tracking-widest text-[#dfd2c0]/70 block mb-2">ご案内・希望プラン</label>
                      <select
                        id="contact-event-type"
                        value={formData.eventType}
                        onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                        className="w-full bg-[#150d09] border border-[#8b5a2b]/40 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-all text-sm"
                      >
                        <option value="maternity">マタニティフォト (LifeStudio Inspired)</option>
                        <option value="bridal">ブライダルウェディング (Luminous Inspired)</option>
                        <option value="drone">ドローンシネ空撮サービス</option>
                        <option value="corporate">企業プロモーション・リール動画</option>
                        <option value="other">その他お見積もり・お問い合わせ</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Target Location */}
                    <div>
                      <label className="text-xs font-mono tracking-widest text-[#dfd2c0]/70 block mb-2">ご希望の撮影ロケーション</label>
                      <select
                        id="contact-location"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="w-full bg-[#150d09] border border-[#8b5a2b]/40 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-all text-sm"
                      >
                        {HOKKAIDO_LOCATIONS.map((loc) => (
                          <option key={loc.value} value={loc.value}>{loc.label.split('（')[0]}</option>
                        ))}
                        <option value="other_all">全道その他エリア、または全国出張</option>
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="text-xs font-mono tracking-widest text-[#dfd2c0]/70 block mb-2">ご希望の日程・シーズン</label>
                      <input 
                        id="contact-date"
                        type="text" 
                        placeholder="例：2026年8月中旬、秋頃、未定など"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                        className="w-full bg-[#150d09] border border-[#8b5a2b]/40 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Message body */}
                  <div>
                    <label className="text-xs font-mono tracking-widest text-[#dfd2c0]/70 block mb-2">メッセージ詳細・ご質問要望</label>
                    <textarea 
                      id="contact-message"
                      rows={4}
                      placeholder="衣装についての質問・ドローン希望・ロケ地の相談など、詳しくお書きください。"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-[#150d09] border border-[#8b5a2b]/40 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 font-bold hover:brightness-110 active:scale-[0.99] rounded-xl text-[#150d09] tracking-widest text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-t-transparent border-[#150d09] animate-spin rounded-full"></div>
                        <span>送信処理中...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>入力データを送信する</span>
                      </>
                    )}
                  </button>

                  {/* Line connection banner */}
                  <div className="bg-[#150d09]/60 p-4 rounded-xl border border-emerald-500/20 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <span className="text-[11px] font-sans text-[#dfd2c0]/80">
                      🟢 <b>LINE公式でも24時間自動受付対応中。</b>お急ぎの場合はLINEにて瞬時にご回答が届きます。
                    </span>
                    <button 
                      type="button"
                      onClick={() => alert('Film K公式LINEアカウントが起動します（デモ接続完了）')}
                      className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-[10px] font-bold shrink-0 tracking-wide transition-colors cursor-pointer"
                    >
                      LINEで問い合わせる
                    </button>
                  </div>

                </motion.form>
              ) : (
                <motion.div 
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white text-[#150d09] p-8 md:p-12 rounded-3xl border border-amber-400 shadow-2xl flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <CheckCircle className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#8b5a2b]">TRANSMISSION SUCCESSFUL</span>
                    <h3 className="text-2xl font-bold text-[#4a2c11]">お問い合わせが完了しました！</h3>
                  </div>

                  <p className="text-xs text-[#8b5a2b]/95 max-w-md leading-relaxed">
                    お送りいただきましたカウンセリング内容は、Film K代表・撮影デスクにて無事に受理されました。
                    ご記入いただいたメールアドレス <b className="text-[#4a2c11]">{formData.email}</b> 宛てに、間もなく自動の受信確認控えをお送りいたします。
                  </p>

                  {/* Pre-fill display */}
                  <div className="w-full bg-[#fcfaf7] p-5 rounded-xl text-left border border-[#dfd2c0]/40 text-xs text-[#8b5a2b]/90 space-y-2 font-mono">
                    <div><b>お名前：</b> {formData.name}様</div>
                    <div><b>ご連絡電話：</b> {formData.phone}</div>
                    <div><b>プラン/エリア：</b> {formData.eventType === 'maternity' ? 'マタニティフォト' : 'ブライダルウェディング'} / {HOKKAIDO_LOCATIONS.find(l => l.value === formData.location)?.label.split('（')[0] || formData.location}</div>
                  </div>

                  <button
                    id="back-to-new-inquiry"
                    onClick={() => { setSuccess(false); setFormData({name: '', email: '', phone: '', eventType: 'bridal', preferredDate: '', location: 'furano_biei', message: ''}); }}
                    className="px-6 py-2 bg-[#8b5a2b] text-white hover:bg-[#4a2c11] transition-all text-xs font-bold rounded-lg tracking-wider cursor-pointer"
                  >
                    新規のお問い合わせを作成する
                  </button>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
