import React from 'react';
import { Download } from 'lucide-react';

export const DocumentDownload: React.FC = () => {
    return (
        <section id="download" className="py-24 bg-wood-100 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-wood-200">

                    {/* Left Column - Image & Context */}
                    <div className="w-full md:w-5/12 bg-wood-900 text-white p-10 md:p-12 relative flex flex-col justify-center">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590483259695-1e5dc4b34898?q=80&w=1000&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-luminosity"></div>
                        <div className="relative z-10">
                            <span className="inline-block px-3 py-1 bg-wood-600 text-white text-xs font-bold rounded-sm mb-6 tracking-widest uppercase">Free Report</span>
                            <h2 className="text-3xl md:text-3xl lg:text-4xl font-serif font-bold mb-6 leading-relaxed">
                                オンラインで差がつく。<br />
                                <span className="text-wood-300">採用動画成功の<br />ポイント</span>
                            </h2>
                            <p className="text-wood-200 text-sm mb-8 leading-relaxed">
                                単なる綺麗な映像ではなく、「採用応募が増える」「共感を生む」映像を作るためのノウハウを1冊の資料にまとめました。 Film Kのサービス詳細もあわせてご紹介しています。
                            </p>

                            {/* Dummy Document Image */}
                            <div className="relative w-48 h-64 mx-auto md:mx-0 shadow-2xl transform md:-rotate-3 mt-4 border border-wood-700 bg-wood-800 flex-shrink-0">
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                                    <h3 className="text-wood-100 font-serif font-bold text-lg border-b border-wood-600 pb-2 mb-2 w-full">FILM K<br />SERVICE GUIDE</h3>
                                    <p className="text-wood-400 text-[10px] mt-2 tracking-widest font-sans uppercase">Video Production<br />For BtoB Business</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="w-full md:w-7/12 p-10 md:p-16">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-wood-900 mb-2">サービス資料ダウンロード</h3>
                            <p className="text-wood-500 text-sm">以下のフォームに入力後、すぐに資料（PDF）をダウンロードいただけます。</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-wood-700 mb-2">会社名 <span className="text-red-500">*</span></label>
                                    <input type="text" className="w-full px-4 py-3 rounded border border-wood-300 focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent bg-wood-50" required placeholder="例: 株式会社サンプル" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-wood-700 mb-2">氏名 <span className="text-red-500">*</span></label>
                                    <input type="text" className="w-full px-4 py-3 rounded border border-wood-300 focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent bg-wood-50" required placeholder="例: 山田 太郎" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-wood-700 mb-2">メールアドレス <span className="text-red-500">*</span></label>
                                    <input type="email" className="w-full px-4 py-3 rounded border border-wood-300 focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent bg-wood-50" required placeholder="例: info@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-wood-700 mb-2">電話番号 <span className="text-red-500">*</span></label>
                                    <input type="tel" className="w-full px-4 py-3 rounded border border-wood-300 focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent bg-wood-50" required placeholder="例: 03-1234-5678" />
                                </div>
                            </div>

                            <div className="pt-4">
                                <button type="submit" className="w-full bg-wood-800 hover:bg-wood-900 text-white font-bold py-4 px-8 rounded flex items-center justify-center gap-2 transition-colors duration-300 shadow-lg text-lg">
                                    <Download size={20} />
                                    資料をダウンロードする（無料）
                                </button>
                                <p className="text-center text-xs text-wood-400 mt-4 leading-relaxed">
                                    ※入力いただいた個人情報は、資料の送付および弊社サービスのご案内に利用させていただきます。<br />
                                    ※ご入力いただいた情報をもとに、担当者よりご連絡を差し上げる場合がございます。
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
