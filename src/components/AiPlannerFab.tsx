import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Sparkles } from 'lucide-react';

export const AiPlannerFab: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 10, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="hidden md:block bg-wood-900 border border-white/10 text-white text-xs px-4 py-2 rounded-full shadow-lg whitespace-nowrap"
                    >
                        AIに無料企画相談
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => document.getElementById('ai-planner')?.scrollIntoView({ behavior: 'smooth' })}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group w-14 h-14 md:w-16 md:h-16 rounded-full bg-wood-900 border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center text-white overflow-hidden transition-colors hover:bg-wood-800 focus:outline-none focus:ring-2 focus:ring-wood-400 focus:ring-offset-2 focus:ring-offset-wood-100"
                aria-label="AIプランナーに相談する"
            >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative flex items-center justify-center">
                    <MessageSquare size={24} className="md:w-7 md:h-7 opacity-90 group-hover:scale-95 transition-transform duration-300" />
                    <Sparkles size={12} className="absolute -top-1 -right-2 text-indigo-300 animate-pulse-slow" />
                </div>
            </motion.button>
        </div>
    );
};
