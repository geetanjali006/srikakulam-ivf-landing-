import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Translation } from '../data/translations';

interface MobileBottomBarProps {
  t: Translation;
  onBookClick: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ t, onBookClick }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#652D6C]/20 p-3 shadow-2xl flex items-center gap-3">
      <a
        href="tel:+919502534222"
        className="flex-1 bg-[#FAF3FB] text-[#652D6C] border border-[#652D6C]/30 hover:bg-[#652D6C] hover:text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors"
      >
        <Phone className="w-4 h-4 text-[#9A389F] animate-pulse" />
        <span>{t.nav.phone}</span>
      </a>

      <button
        onClick={onBookClick}
        className="flex-1 btn-accent py-3 px-4 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg"
      >
        <Calendar className="w-4 h-4 text-pink-200" />
        <span>{t.nav.bookAppointment}</span>
      </button>
    </div>
  );
};
