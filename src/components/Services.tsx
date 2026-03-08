import React from 'react';
import { Target, Users, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import { BeforeAfterSlider } from './BeforeAfterSlider';

const services = [
  {
    id: '1',
    title: '本質的な課題解決とペルソナ設計',
    description: '単に綺麗な映像を作るのではなく、「誰に、何を届け、どう動いてほしいのか」を徹底的に深掘りします。1社1社に寄り添い、クライアントの真の目的（採用強化、リード獲得、ブランディング等）を確実に達成するための最適な動画を二人三脚で創り上げます。',
    icon: <Target className="w-8 h-8 text-wood-100" />
  },
  {
    id: '2',
    title: '業界に特化したメッセージ構築',
    description: '例えば警備業界であれば「地域への貢献と確かな信頼性」、地域の交通インフラを支えるバス・運輸業界であれば「安全と日常を支える力」など、詳細なターゲット設定（ペルソナ）に基づき、企業が持つ本当の魅力を映像化・言語化します。',
    icon: <Users className="w-8 h-8 text-wood-100" />
  },
  {
    id: '3',
    title: '目的の達成を後押しする確かな技術力',
    description: '一緒に導き出した本質的なメッセージを妥協なく表現するため、シネマカメラによる高品質な映像表現、緻密なカラーグレーディング、そして国家資格（二等無人航空機操縦士）を活かしたダイナミックな空撮を駆使し、ターゲットの心へ確実に届けます。',
    icon: <Video className="w-8 h-8 text-wood-100" />
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-wood-950 text-wood-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-wood-400 tracking-widest text-sm font-bold uppercase block mb-2">Our Strengths</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Film Kの強み</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group bg-wood-800 p-8 rounded-lg border border-wood-700 hover:border-wood-500 transition-colors duration-300 flex flex-col items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-wood-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-wood-600 transition-colors duration-300 flex-shrink-0">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif leading-relaxed">{service.title}</h3>
              <p className="text-wood-300 text-sm leading-6">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Color Grading Showcase */}
        <motion.div
          className="mt-32 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Color Grading <span className="text-wood-400 font-sans text-lg md:text-xl ml-2 font-normal">カラーグレーディングの魔法</span></h3>
            <p className="text-wood-300 font-light tracking-wide max-w-2xl mx-auto leading-loose text-sm md:text-base">
              Log撮影されたフラットな映像に、独自のカラーグレーディングを施すことで、企業が持つ「温度感」や「シネマティックな空気感」を引き出します。スライダーを動かして違いを体感してください。
            </p>
          </div>
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1542039499-5f21295b92cb?q=80&w=2127&auto=format&fit=crop&sat=-100&bri=20"
            afterImage="https://images.unsplash.com/photo-1542039499-5f21295b92cb?q=80&w=2127&auto=format&fit=crop"
            beforeLabel="Log (Before)"
            afterLabel="Graded (After)"
          />
        </motion.div>
      </div>
    </section>
  );
};