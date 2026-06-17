/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INSTALLED_GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { Camera, MapPin, Eye, Compass, Info, Heart, ArrowUpRight } from 'lucide-react';

export default function HokkaidoGallery() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all' 
    ? INSTALLED_GALLERY_ITEMS 
    : INSTALLED_GALLERY_ITEMS.filter(item => item.category === filter);

  // Hardcode beautiful mock metadata parameters representing the "camera shooting specialization" request!
  const getCameraMetadata = (id: string) => {
    const specs: { [key: string]: { lens: string; aperture: string; shutter: string; iso: string; camera: string } } = {
      'b1': { lens: 'Zeiss Otus 85mm F1.4', aperture: 'f/1.4', shutter: '1/800s', iso: '64', camera: 'Sony ILME-FX3' },
      'm1': { lens: 'FE 50mm F1.2 GM', aperture: 'f/1.2', shutter: '1/1600s', iso: '100', camera: 'Sony ILME-FX3' },
      'v1': { lens: 'Anamorphic 35mm T2.1', aperture: 'T/2.1', shutter: '1/50s', iso: '800', camera: 'Sony ILME-FX3' },
      'b2': { lens: 'FE 24-70mm F2.8 GM II', aperture: 'f/2.8', shutter: '1/125s', iso: '400', camera: 'Sony Alpha 7R V' },
      'm2': { lens: 'FE 35mm F1.4 GM', aperture: 'f/1.4', shutter: '1/200s', iso: '200', camera: 'Sony Alpha 7 IV' },
      'd1': { lens: 'Mavic 3 Cine Hasselblad', aperture: 'f/2.8', shutter: '1/1000s', iso: '100', camera: 'DJI L2D-20c' },
      'b3': { lens: 'FE 70-200mm F2.8 GM OSS II', aperture: 'f/4.0', shutter: '1/1000s', iso: '100', camera: 'Sony Alpha 7R V' },
      'm3': { lens: 'FE 85mm F1.4 GM', aperture: 'f/1.6', shutter: '1/500s', iso: '100', camera: 'Sony Alpha 7 IV' },
      's1': { lens: 'FE 16-35mm F2.8 GM II', aperture: 'f/8.0', shutter: '1/400s', iso: '100', camera: 'Sony ILME-FX3' }
    };
    return specs[id] || { lens: 'FE 50mm F1.2 GM', aperture: 'f/1.2', shutter: '1/500s', iso: '100', camera: 'Sony ILME-FX3' };
  };

  return (
    <div id="gallery" className="py-20 bg-[#fcfaf7]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Gallery Intro */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#8b5a2b] uppercase block mb-2">CINEMATIC ARCHIVES</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-light text-[#4a2c11] tracking-tight break-keep">
              北海道を舞う、一瞬の美学
            </h2>
            <p className="text-sm text-[#8b5a2b]/80 mt-2 max-w-xl">
              Film Kがファインダー越しに捉えた、北海道各地での撮影実績。光の滲み、肌のぬくもり、風の動きまでをも「切れ目の無い」編集トーンで表現。
            </p>
          </div>

          {/* Dynamic tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'すべて表示' },
              { id: 'maternity', label: 'マタニティ' },
              { id: 'bridal', label: 'ブライダル' },
              { id: 'drone', label: 'ドローン空撮' },
              { id: 'video', label: '動画実績' }
            ].map(tab => (
              <button
                key={tab.id}
                id={`gallery-filter-${tab.id}`}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-sans tracking-wide transition-all uppercase cursor-pointer ${
                  filter === tab.id 
                    ? 'bg-[#4a2c11] text-[#dfd2c0] font-medium shadow-md'
                    : 'bg-[#dfd2c0]/20 text-[#8b5a2b] hover:bg-[#dfd2c0]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const meta = getCameraMetadata(item.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  key={item.id}
                  className="group relative bg-[#fbf9f4] rounded-2xl border border-[#dfd2c0]/30 shadow-sm overflow-hidden flex flex-col hover:shadow-xl transition-all"
                >
                  {/* Photo Canvas wrapped in aspect ratio */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-[#150d09]">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-92 group-hover:opacity-100"
                    />

                    {/* Fancy lens focuses grid overlay on hover */}
                    <div className="absolute inset-0 border-0 group-hover:border-[16px] border-[#4a2c11]/10 pointer-events-none transition-all duration-500" />
                    
                    {/* Corner autofocus indicators visible only on hover */}
                    <div className="absolute inset-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/60"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/60"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/60"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/60"></div>
                      {/* Central focus crosshair */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                      </div>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#150d09]/80 backdrop-blur-md text-xs font-mono text-[#dfd2c0]">
                      <MapPin className="w-3.5 h-3.5 text-[#8b5a2b]" />
                      <span>{item.location}</span>
                    </div>

                    {/* Action buttons on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150d09] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6 z-10">
                      <button 
                        id={`view-detail-${item.id}`}
                        onClick={() => setSelectedItem(item)}
                        className="p-3 bg-[#dfd2c0] text-[#4a2c11] rounded-full hover:bg-white hover:scale-110 transition-all shadow-lg flex items-center gap-2 text-xs font-bold font-mono tracking-widest cursor-pointer"
                      >
                        <Camera className="w-4 h-4" />
                        <span>CAMERA SCHEMATICS</span>
                      </button>
                    </div>
                  </div>

                  {/* Copy content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#8b5a2b] uppercase block mb-1">
                        {item.category === 'bridal' ? 'ウェディング・ブライダル' : item.category === 'maternity' ? 'マタニティフォト' : item.category === 'drone' ? 'ドローン空撮シネマ' : 'プロモーション動画'}
                      </span>
                      <h3 className="text-lg font-sans font-semibold text-[#4a2c11] group-hover:text-[#8b5a2b] transition-colors">{item.title}</h3>
                      <p className="text-xs text-[#8b5a2b]/80 mt-2 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Hardware telemetry line */}
                    <div className="border-t border-[#dfd2c0]/35 pt-4 mt-4 flex justify-between items-center text-[10px] font-mono text-[#8b5a2b]/70">
                      <div className="flex items-center gap-1">
                        <Camera className="w-3.5 h-3.5" />
                        <span>{meta.camera.split(' ')[1] || meta.camera}</span>
                      </div>
                      <div className="flex gap-2">
                        <span>{meta.lens.split(' ').slice(-2).join(' ')}</span>
                        <span className="text-[#4a2c11] font-bold">{meta.aperture}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Modal showing technical camera properties of the selected shot */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#150d09]/80 backdrop-blur-md">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#dfd2c0] max-w-3xl w-full shadow-2xl flex flex-col md:flex-row"
              >
                {/* Photo Side */}
                <div className="md:w-1/2 relative bg-[#150d09]">
                  <img 
                    src={selectedItem.imageUrl} 
                    alt={selectedItem.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover min-h-[300px] md:min-h-[450px]"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 text-xs font-mono text-white">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>HOKKAIDO, {selectedItem.location}</span>
                  </div>
                </div>

                {/* Technical stats side */}
                <div className="md:w-1/2 p-8 flex flex-col justify-between bg-[#fcfaf7]">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-[#8b5a2b] uppercase block">EXIF TELEMETRY</span>
                        <h4 className="text-xl font-sans font-semibold text-[#4a2c11] mt-1">{selectedItem.title}</h4>
                      </div>
                      <button 
                        id="close-gallery-modal"
                        onClick={() => setSelectedItem(null)}
                        className="text-[#8b5a2b] hover:text-[#4a2c11] font-mono text-xs hover:underline cursor-pointer"
                      >
                        [ CLOSE ]
                      </button>
                    </div>

                    <p className="text-xs text-[#8b5a2b]/95 leading-relaxed mb-6">
                      {selectedItem.description}
                    </p>

                    {/* Camera Data Fields */}
                    <div className="space-y-3 bg-white p-4 rounded-xl border border-[#dfd2c0]/40 font-mono text-xs text-[#8b5a2b]">
                      <div className="flex justify-between pb-2 border-b border-[#dfd2c0]/20">
                        <span className="text-[#8b5a2b]/60">BODY</span>
                        <span className="text-[#4a2c11] font-bold">{getCameraMetadata(selectedItem.id).camera}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-[#dfd2c0]/20">
                        <span className="text-[#8b5a2b]/60">LENS PRIMES</span>
                        <span className="text-[#4a2c11] font-bold">{getCameraMetadata(selectedItem.id).lens}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-[#dfd2c0]/20">
                        <span className="text-[#8b5a2b]/60">APERTURE (IRIS)</span>
                        <span className="text-[#4a2c11] font-bold">{getCameraMetadata(selectedItem.id).aperture}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-[#dfd2c0]/20">
                        <span className="text-[#8b5a2b]/60">SHUTTER TIME</span>
                        <span className="text-[#4a2c11] font-bold">{getCameraMetadata(selectedItem.id).shutter}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#8b5a2b]/60">SENSITIVITY</span>
                        <span className="text-[#4a2c11] font-bold">ISO {getCameraMetadata(selectedItem.id).iso}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer links */}
                  <div className="mt-8 flex justify-between items-center">
                    <span className="text-[10px] text-[#4a2c11]/55 uppercase">PRODUCED BY FILM K</span>
                    <a
                      href="#contact"
                      onClick={() => setSelectedItem(null)}
                      className="px-4 py-2 bg-[#8b5a2b] text-white rounded-lg text-xs font-bold font-sans hover:bg-[#4a2c11] transition-all flex items-center gap-1"
                    >
                      <span>このシーンをリクエスト</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
