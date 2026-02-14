import React from 'react';
import { Video, Award, Globe, Mic2 } from 'lucide-react';
import { ServiceItem } from '../types';
import { motion } from 'framer-motion';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'コーポレートブランディング',
    description: '企業の理念やビジョンを映像化し、採用活動や広報活動におけるブランド価値を最大化します。',
    icon: <Award className="w-8 h-8 text-wood-100" />
  },
  {
    id: '2',
    title: 'Web CM・プロモーション',
    description: '商品やサービスの魅力を短時間で効果的に伝える、高品質なプロモーション映像を制作します。',
    icon: <Video className="w-8 h-8 text-wood-100" />
  },
  {
    id: '3',
    title: 'SNS・Webコンテンツ',
    description: 'Instagram, YouTube, TikTokなど、各プラットフォームの特性に合わせた動画コンテンツを企画・制作。',
    icon: <Globe className="w-8 h-8 text-wood-100" />
  },
  {
    id: '4',
    title: 'インタビュー・ドキュメンタリー',
    description: '代表者や社員の「生の声」を届けるインタビュー動画。人の温かみが伝わる演出を得意としています。',
    icon: <Mic2 className="w-8 h-8 text-wood-100" />
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-wood-900 text-wood-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-wood-400 tracking-widest text-sm font-bold uppercase block mb-2">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">事業内容</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="group bg-wood-800 p-8 rounded-lg border border-wood-700 hover:border-wood-500 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-wood-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-wood-600 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif">{service.title}</h3>
              <p className="text-wood-300 text-sm leading-6">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};