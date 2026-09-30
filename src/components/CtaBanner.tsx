import React from 'react';
import { Calendar, Sparkles, ChevronRight } from 'lucide-react';
import { Translation } from '../data/translations';

interface CtaBannerProps {
  t: Translation;
  onBookClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ t, onBookClick }) => {
  return (
    <section className="py-12 bg-gradient-to-r from-[#4D1F53] via-[#652D6C] to-[#9A389F] text-white relative overflow-hidden shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-yellow-300 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Free Consultation</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            {t.ctaBanner.title}
          </h3>

          <p className="text-sm sm:text-base text-purple-100 font-medium">
            {t.ctaBanner.subtitle}
          </p>
        </div>

        <button
          onClick={onBookClick}
          className="bg-yellow-400 hover:bg-yellow-300 text-[#4D1F53] font-black px-8 py-4 rounded-2xl text-base sm:text-lg shadow-xl hover:scale-105 transition-all flex items-center gap-3 shrink-0"
        >
          <Calendar className="w-5 h-5" />
          <span>{t.ctaBanner.button}</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
