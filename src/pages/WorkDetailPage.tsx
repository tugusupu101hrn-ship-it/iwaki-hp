import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play } from 'lucide-react';
import { works } from '../data/works';
import { SEO } from '../components/SEO';

export const WorkDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const work = works.find(w => w.id === id);

    if (!work) {
        return (
            <div className="min-h-screen pt-32 pb-12 px-6 flex flex-col items-center justify-center bg-wood-50 text-wood-900">
                <h2 className="text-2xl font-bold mb-4">Work not found</h2>
                <Link to="/works" className="text-wood-600 hover:underline">Back to Works</Link>
            </div>
        );
    }


    return (
        <div className="pt-24 pb-12 bg-wood-50 min-h-screen">
            <SEO
                title={work.title}
                description={work.description}
                image={work.youtubeId ? `https://img.youtube.com/vi/${work.youtubeId}/maxresdefault.jpg` : work.imageUrl}
                url={`https://filmk-video.vercel.app/works/${work.id}`}
            />
            <div className="container mx-auto px-6">
                <Link to="/works" className="inline-flex items-center text-wood-600 hover:text-wood-900 mb-8 transition-colors">
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Works
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-8">
                        <span className="text-wood-600 tracking-widest text-sm font-bold uppercase block mb-2">{work.category}</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-6">{work.title}</h1>
                        {work.description && (
                            <p className="text-wood-700 max-w-2xl text-lg leading-relaxed">{work.description}</p>
                        )}
                    </div>

                    {/* Video Player Container */}
                    <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                        {work.youtubeId ? (
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${work.youtubeId}`}
                                title={work.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : work.videoUrl ? (
                            <video
                                controls
                                autoPlay
                                className="w-full h-full object-contain"
                                poster={work.imageUrl}
                                src={work.videoUrl}
                            >
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50 bg-wood-900/90">
                                <Play size={64} className="mb-4 opacity-50" />
                                <p>Video source not available</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-sm text-wood-500">
                            ※YouTube動画が表示されない場合は <code>src/data/works.ts</code> のIDを確認してください。
                        </p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};
