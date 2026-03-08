import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const SplitPortal: React.FC = () => {
    const navigate = useNavigate();
    const [hoveredPanel, setHoveredPanel] = useState<'service' | 'about' | null>(null);

    const handleNavigation = (path: string) => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        navigate(path);
    };

    return (
        <section className="w-full h-[70vh] flex flex-col md:flex-row overflow-hidden bg-wood-950">
            {/* Left Panel: Service */}
            <div
                className={`group relative h-1/2 md:h-full cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center justify-center overflow-hidden
                    ${hoveredPanel === 'service' ? 'md:flex-[1.5] flex-[1.5]' : hoveredPanel === 'about' ? 'md:flex-[0.5] flex-[0.5]' : 'flex-1'}`}
                onMouseEnter={() => setHoveredPanel('service')}
                onMouseLeave={() => setHoveredPanel(null)}
                onClick={() => handleNavigation('/service')}
            >
                {/* Background Media (Currently Image, easily swappable to Video) */}
                {/* 
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out">
                    <source src="..." type="video/mp4" />
                </video> 
                */}
                <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
                    alt="Service & Flow Background"
                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-wood-950/70 group-hover:bg-wood-950/20 transition-all duration-700 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 text-center flex flex-col items-center p-6">
                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-widest mb-4 transition-transform duration-700 group-hover:-translate-y-2"
                    >
                        SERVICE & FLOW
                    </motion.h2>
                    <div className="h-8 overflow-hidden">
                        <span className="block text-sm md:text-base font-bold tracking-[0.3em] text-white opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 uppercase">
                            View Details <span className="inline-block ml-2 tracking-tighter">―――――→</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Right Panel: About */}
            <div
                className={`group relative h-1/2 md:h-full cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center justify-center overflow-hidden
                    ${hoveredPanel === 'about' ? 'md:flex-[1.5] flex-[1.5]' : hoveredPanel === 'service' ? 'md:flex-[0.5] flex-[0.5]' : 'flex-1'}`}
                onMouseEnter={() => setHoveredPanel('about')}
                onMouseLeave={() => setHoveredPanel(null)}
                onClick={() => handleNavigation('/about')}
            >
                {/* Background Media (Currently Image, easily swappable to Video) */}
                {/* 
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out">
                    <source src="..." type="video/mp4" />
                </video> 
                */}
                <img
                    src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2000&auto=format&fit=crop"
                    alt="Our Philosophy Background"
                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-wood-950/70 group-hover:bg-wood-950/20 transition-all duration-700 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 text-center flex flex-col items-center p-6">
                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-widest mb-4 transition-transform duration-700 group-hover:-translate-y-2"
                    >
                        OUR PHILOSOPHY
                    </motion.h2>
                    <div className="h-8 overflow-hidden">
                        <span className="block text-sm md:text-base font-bold tracking-[0.3em] text-white opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 uppercase">
                            View Details <span className="inline-block ml-2 tracking-tighter">―――――→</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
