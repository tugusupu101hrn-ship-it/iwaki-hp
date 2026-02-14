import React from 'react';
import { Instagram, Youtube, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-wood-950 text-wood-200 py-12 border-t border-wood-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold text-white mb-2">FILM K</h2>
            <p className="text-xs text-wood-400">企業の価値を映し出す、映像制作カンパニー</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-wood-500 border-t border-wood-900 pt-8">
            <ul className="flex gap-6 mb-4 md:mb-0">
                <li><a href="#" className="hover:text-wood-300">会社概要</a></li>
                <li><a href="#" className="hover:text-wood-300">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-wood-300">特定商取引法に基づく表記</a></li>
            </ul>
          <p>&copy; {new Date().getFullYear()} Film K Production. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
