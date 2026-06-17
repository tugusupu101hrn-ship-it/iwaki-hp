import React from 'react';
import { Workflow } from 'lucide-react';

export default function SeamlessPipeline() {
  return (
    <section className="py-24 bg-[#4A3728] text-[#F5EFE6] border-y border-natural-sand/15 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Graph/UI visualization left */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-[#594331] p-6 border border-natural-accent/30 space-y-4 shadow-xl">
              <h4 className="text-xs font-mono tracking-widest text-[#C2A383] uppercase flex items-center gap-2">
                <Workflow className="w-4 h-4 text-[#C2A383]" />
                THE SEAMLESS PIPELINE
              </h4>
              
              {/* Visual Timeline Nodes representing gapless shoot */}
              <div className="relative space-y-3 pl-4 border-l border-natural-accent/40">
                <div className="relative">
                  <span className="absolute -left-[20px] top-1 w-2.5 h-2.5 rounded-full bg-[#C2A383] ring-4 ring-[#594331]" />
                  <span className="text-xs font-bold text-white block">1. 動きの調和（マッチ・モーション）</span>
                  <p className="text-[10px] text-[#F5EFE6]/75 mt-0.5">カメラの動きの速度や方向を、次のテイクへ完全にシンクロ</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[20px] top-1 w-2.5 h-2.5 rounded-full bg-[#C2A383] ring-4 ring-[#594331]" />
                  <span className="text-xs font-bold text-white block">2. 光のトランジション（ライトリーク）</span>
                  <p className="text-[10px] text-[#F5EFE6]/75 mt-0.5">時間経過を一瞬で繋ぐ、自然光を反射させるレンズワーク</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[20px] top-1 w-2.5 h-2.5 rounded-full bg-[#C2A383] ring-4 ring-[#594331]" />
                  <span className="text-xs font-bold text-white block">3. 音とカットの一体化</span>
                  <p className="text-[10px] text-[#F5EFE6]/75 mt-0.5">映像カットとBGMライセンス曲、環境音の1ミリ秒単位の同調</p>
                </div>
              </div>

              <p className="text-[10px] text-white/50 p-3 bg-natural-dark rounded-xl font-mono leading-relaxed">
                [SYS_LOG] 撮影段階でおおまかな繋ぎ方を決定して臨むことで、映像が一度も途切れず、呼吸が伝わる心地よい仕上がりになります。
              </p>
            </div>
          </div>

          {/* Speech bubbles / Feature explanation right */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-mono tracking-widest text-[#C2A383] uppercase block font-semibold">OUR EDGE</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight break-keep">
              なぜ「切れ目の無い動画編集」なのか
            </h3>
            
            <p className="text-sm text-natural-linen/90 leading-relaxed font-light">
              従来の「ただカットを繋ぐだけ」の映像は、視聴者に時間の途切れや退屈感を与えてしまいます。Film Kは、プロ用の3軸カメラジンバル（DJI Ronin 4D、RS3 Pro）の操作と撮影の段取りを「編集工程」と最初から同期させて撮影します。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-[#594331] rounded-xl border border-natural-accent/15 space-y-2">
                <span className="text-xs font-semibold text-white block">ドローンと地上視点のシームレスな接続</span>
                <p className="text-[11px] text-[#FDFBF7]/70 leading-relaxed">地上での接近戦カメラが、空の雄大なドローンシーンへと吸い込まれるように滑らかにオーバーラップする驚きを作ります。</p>
              </div>
              <div className="p-4 bg-[#594331] rounded-xl border border-natural-accent/15 space-y-2">
                <span className="text-xs font-semibold text-white block">ストーリーが一繋ぎの美へ</span>
                <p className="text-[11px] text-[#FDFBF7]/70 leading-relaxed">マタニティであれ、ブライダルであれ、時間の流れをおふたりの感情にシンクロ。見る側が「あっという間」にのめり込む作品性の高さがここにあります。</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
