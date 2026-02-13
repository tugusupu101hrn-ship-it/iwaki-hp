import React from 'react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-wood-200 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="bg-white p-10 md:p-16 rounded-2xl shadow-xl border border-wood-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-wood-900 mb-4">お問い合わせ</h2>
            <p className="text-wood-600">
              映像制作に関するご相談、お見積もりなど、<br className="hidden md:block" />
              お気軽にお問い合わせください。
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-wood-800 mb-2">お名前 <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-4 py-3 bg-wood-50 border-b-2 border-wood-200 focus:border-wood-600 outline-none transition-colors" placeholder="山田 太郎" />
              </div>
              <div>
                <label className="block text-sm font-medium text-wood-800 mb-2">貴社名</label>
                <input type="text" className="w-full px-4 py-3 bg-wood-50 border-b-2 border-wood-200 focus:border-wood-600 outline-none transition-colors" placeholder="株式会社Film K" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-wood-800 mb-2">メールアドレス <span className="text-red-500">*</span></label>
              <input type="email" className="w-full px-4 py-3 bg-wood-50 border-b-2 border-wood-200 focus:border-wood-600 outline-none transition-colors" placeholder="info@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-wood-800 mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
              <textarea rows={5} className="w-full px-4 py-3 bg-wood-50 border-b-2 border-wood-200 focus:border-wood-600 outline-none transition-colors" placeholder="ご相談内容をご記入ください"></textarea>
            </div>

            <div className="text-center pt-4">
              <Button type="submit" className="w-full md:w-auto px-12">
                送信する
              </Button>
            </div>
          </form>
        </div>
      </div>
      {/* Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 pointer-events-none"></div>
    </section>
  );
};
