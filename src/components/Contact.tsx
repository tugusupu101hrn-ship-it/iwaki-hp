import React from 'react';
import { Button } from './ui/Button';

import { useForm, ValidationError } from '@formspree/react';

export const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mwvnopre");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 bg-wood-200 relative">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="bg-white p-10 md:p-16 rounded-2xl shadow-xl border border-wood-100 text-center">
            <h2 className="text-3xl font-serif font-bold text-wood-900 mb-4">お問い合わせありがとうございます</h2>
            <p className="text-wood-600 mb-8">
              送信が完了しました。<br />
              内容を確認次第、担当者よりご連絡させていただきます。
            </p>
            <Button onClick={() => window.location.reload()} className="px-8">
              フォームに戻る
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 pointer-events-none"></div>
      </section>
    );
  }

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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-wood-800 mb-2">お名前 <span className="text-red-500">*</span></label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-wood-50 border-b-2 border-wood-200 focus:border-wood-600 outline-none transition-colors"
                  placeholder="山田 太郎"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-wood-800 mb-2">貴社名</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  className="w-full px-4 py-3 bg-wood-50 border-b-2 border-wood-200 focus:border-wood-600 outline-none transition-colors"
                  placeholder="株式会社Film K"
                />
                <ValidationError prefix="Company" field="company" errors={state.errors} />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-wood-800 mb-2">メールアドレス <span className="text-red-500">*</span></label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-wood-50 border-b-2 border-wood-200 focus:border-wood-600 outline-none transition-colors"
                placeholder="info@example.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-wood-800 mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-wood-50 border-b-2 border-wood-200 focus:border-wood-600 outline-none transition-colors"
                placeholder="ご相談内容をご記入ください"
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div className="text-center pt-4">
              <Button type="submit" disabled={state.submitting} className="w-full md:w-auto px-12 disabled:opacity-50 disabled:cursor-not-allowed">
                {state.submitting ? '送信中...' : '送信する'}
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
