import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
    beforeImage,
    afterImage,
    beforeLabel = 'Log (Before)',
    afterLabel = 'Graded (After)',
}) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        const handleMouseUp = () => setIsDragging(false);
        if (isDragging) {
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchend', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl relative select-none group">
            {/* Aspect Ratio Container */}
            <div
                ref={containerRef}
                className="relative w-full aspect-video cursor-ew-resize"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseDown={(e) => {
                    setIsDragging(true);
                    handleMove(e.clientX);
                }}
                onTouchStart={(e) => {
                    setIsDragging(true);
                    handleMove(e.touches[0].clientX);
                }}
            >
                {/* Background Image (After / Graded) */}
                <img
                    src={afterImage}
                    alt="After color grading"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* Foreground Image (Before / Log) */}
                <div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ width: `${sliderPosition}%` }}
                >
                    <img
                        src={beforeImage}
                        alt="Before color grading"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
                    />
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-none transition-transform group-hover:scale-110">
                        <MoveHorizontal size={20} className="text-wood-900" />
                    </div>
                </div>

                {/* Labels */}
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 flex justify-between pointer-events-none text-white font-bold tracking-widest text-xs md:text-sm drop-shadow-md">
                    <span className="bg-black/50 px-3 py-1 rounded backdrop-blur-sm opacity-80">{beforeLabel}</span>
                    <span className="bg-black/50 px-3 py-1 rounded backdrop-blur-sm opacity-80">{afterLabel}</span>
                </div>
            </div>
        </div>
    );
};
