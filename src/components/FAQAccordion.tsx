/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, FileText, CalendarRange, Trash2, Camera } from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'service' | 'flow' | 'cancel' | 'equipment';
  question: string;
  answer: React.ReactNode;
}

export default function FAQAccordion() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'service' | 'flow' | 'cancel' | 'equipment'>('all');

  const faqItems: FAQItem[] = [
    {
      id: 'faq-service-1',
      category: 'service',
      question: '撮影のほかに、プロによる動画編集のみ・色味補正のみの依頼も可能ですか？',
      answer: (
        <span className="leading-relaxed block">
          はい、制作のフェーズにあわせた個別作業も歓迎いたします。Film K では、お客様がお持ちの素材を活かした<strong>「切れ目の無いシームレスな編集」</strong>や、シネマティックな空気感を際立たせる色補正（カラーグレーディング）を専門に受注しております。ぜひシミュレーターまたはお問い合わせフォームより詳細をお伝えください。
        </span>
      ),
    },
    {
      id: 'faq-service-2',
      category: 'service',
      question: 'どのようなジャンルの撮影に対応していますか？',
      answer: (
        <span className="leading-relaxed block">
          マタニティフォト、ニューボーンフォト、お宮参り、七五三、ブライダルシネマ（ウェディングドキュメンタリー）をはじめとした個人向けプレミアム記念撮影から、企業のプロモーション動画、イベント記録、ドキュメンタリー制作、空撮ドローン撮影まで幅広くカバーしています。
        </span>
      ),
    },
    {
      id: 'faq-flow-1',
      category: 'flow',
      question: 'お申し込みから、撮影当日、納品までのスケジュールを教えてください。',
      answer: (
        <div className="space-y-2 leading-relaxed">
          <p className="font-semibold text-[#8b5a2b]">【ご予約から納品までの5つのステップ】</p>
          <ol className="list-decimal list-inside space-y-1 pl-1 text-[11px] sm:text-xs text-[#5c4021]">
            <li><strong>無料相談 & お見積り:</strong> お問い合わせフォームまたはお電話にて、ご希望の日程やイメージをお伺いします。</li>
            <li><strong>事前カウンセリング:</strong> 画角、構成、衣装、演出について担当クリエイターと詳細を詰め、お見積りを確定。</li>
            <li><strong>撮影当日:</strong> リラックスして自然な表情をお見せいただけるよう、心地よいコミュニケーションを大切にしながら、ハイエンド機材で撮影します。</li>
            <li><strong>シネマ編集・カラー補正:</strong> 厳選したカットとトーンカラー調整を施し、洗練されたストーリーに仕立てます。</li>
            <li><strong>オンライン納品:</strong> 撮影後、通常3〜4週間で高画質な専用リンクよりダウンロードいただけます。（お急ぎ特急便もございます）</li>
          </ol>
        </div>
      ),
    },
    {
      id: 'faq-cancel-1',
      category: 'cancel',
      question: '急な体調不良や、悪天候時の日程変更・キャンセル料はどうなりますか？',
      answer: (
        <span className="leading-relaxed block">
          天候不良（大雨や降雪等により撮影に支障が出る場合）は、<strong>前日までにご連絡いただくことで何度でも、手数料完全無料で撮影予定日を延期・変更</strong>いただけます。また、マタニティ撮影など急な体調不良が生じやすい特別な撮影についても、追加料金なしで別日程をご案内いたします。なお、お客様の一方的なご都合による完全キャンセルの場合に限り、1週間前からキャンセル規約（7日前〜30%、前日〜50%、当日〜100%）を適用させていただきます。
        </span>
      ),
    },
    {
      id: 'faq-equipment-1',
      category: 'equipment',
      question: '使用しているシネマカメラやマイク、その他のプロ機材を教えてください。',
      answer: (
        <div className="space-y-2 leading-relaxed text-[11px] sm:text-xs">
          <p>Film K は、すべての撮影において映画制作水準のハイエンド機材を採用し、驚異的なノイズ抑制とリアルな質感を両立しています。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="bg-[#dfd2c0]/20 p-2.5 rounded-lg border border-[#dfd2c0]/30">
              <strong className="text-[#8b5a2b] block mb-0.5">● カメラ & レンズ</strong>
              Sony FX3 / FX6 等の4Kシネマカメラ機材。最高峰の解像感と暗所耐性を誇る、シグマArtシリーズ及びソニーG Masterレンズ一式を採用しています。
            </div>
            <div className="bg-[#dfd2c0]/20 p-2.5 rounded-lg border border-[#dfd2c0]/30">
              <strong className="text-[#8b5a2b] block mb-0.5">● 特殊ガジェット & 音響</strong>
              DJI Roninジンバルによるブレの無い極限の動きと、映画の繊細な吐息・自然音をハイクオリティに捉えるSennheiser / Røde社製の最高級マイクを常備しています。
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'faq-equipment-2',
      category: 'equipment',
      question: 'ドローンでの本格的な空撮はどのような場所でも可能ですか？',
      answer: (
        <span className="leading-relaxed block">
          はい、当社は【国土交通省の全国飛行包括許可承認】を取得している専任パイロットが所属しております。ただし、空港周辺や人口集中地区(DID)、私有地境界などの撮影制限地域については、土地所有者・関係自治体への追加申請や立ち入り手続きを行うため、事前にお時間をいただきます。ご要望をお聞きし、飛行ルートをご提案いたします。
        </span>
      ),
    },
  ];

  const handleToggle = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  const filteredFaqs = faqItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const categories = [
    { id: 'all', label: 'すべて', icon: HelpCircle },
    { id: 'service', label: 'サービス内容', icon: FileText },
    { id: 'flow', label: '予約の流れ', icon: CalendarRange },
    { id: 'cancel', label: 'キャンセル規定', icon: Trash2 },
    { id: 'equipment', label: '使用機材', icon: Camera },
  ] as const;

  return (
    <section id="faq" className="py-24 bg-[#FAF7F2] border-t border-[#dfd2c0]/30">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#8b5a2b] uppercase bg-[#dfd2c0]/20 px-3 py-1 rounded-full">FAQ</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-light text-[#4a2c11] tracking-tight mt-4 break-keep">
            よくあるご質問
          </h2>
          <p className="text-xs sm:text-sm text-[#8b5a2b]/80 mt-2 leading-relaxed">
            お客様から多く寄せられるご相談への回答です。そのほか個別のご相談はお気軽にお問い合わせください。
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveId(null);
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-sans tracking-wide transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-[#8b5a2b] text-[#FAF7F2] border-[#8b5a2b] shadow-xs'
                    : 'bg-white text-[#4a2c11] border-[#dfd2c0]/50 hover:bg-[#dfd2c0]/15'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item) => {
                const isOpen = activeId === item.id;
                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className="bg-white rounded-2xl border border-[#dfd2c0]/40 overflow-hidden transition-all duration-300 hover:shadow-xs"
                  >
                    <button
                      onClick={() => handleToggle(item.id)}
                      className="w-full flex justify-between items-center p-5 sm:p-6 text-left cursor-pointer group focus:outline-none"
                    >
                      <div className="flex gap-3 pr-4">
                        <span className="text-sm font-mono text-[#8b5a2b] font-bold mt-0.5 shrink-0 select-none">Q.</span>
                        <h3 className="text-xs sm:text-sm font-sans font-semibold text-[#4a2c11] leading-relaxed group-hover:text-[#8b5a2b] transition-colors">
                          {item.question}
                        </h3>
                      </div>
                      <span className={`w-8 h-8 rounded-full border border-[#dfd2c0]/40 flex items-center justify-center shrink-0 text-[#8b5a2b] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#8b5a2b] text-white border-transparent' : 'group-hover:bg-[#dfd2c0]/10'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                        isOpen ? 'max-h-[500px]' : 'max-h-0'
                      }`}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#dfd2c0]/20 text-[11px] sm:text-xs text-[#5c4021] bg-[#FAF7F2]/40">
                        <div className="flex gap-3">
                          <span className="text-sm font-mono text-[#C2A383] font-bold shrink-0 select-none">A.</span>
                          <div className="flex-1 leading-normal font-sans pt-0.5">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 text-[#8b5a2b]/70 text-xs font-sans">
                該当する質問はございません。
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
