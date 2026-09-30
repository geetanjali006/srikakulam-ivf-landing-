import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Language, Translation } from '../data/translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
  onBookClick: () => void;
  onOpenRegistrationModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t, onBookClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/95 border-b border-[#652D6C]/15 shadow-sm transition-all duration-300">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group focus:outline-none">
          <img 
            src="/medcy-logo.png" 
            alt="Medcy IVF Logo" 
            className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Toggle Button (EN 1st default, TE option) */}
          <div className="flex items-center bg-[#FAF6FA] border border-[#652D6C]/25 rounded-full p-1 shadow-inner">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs sm:text-sm font-bold rounded-full transition-all flex items-center gap-1 ${
                lang === 'en'
                  ? 'bg-[#652D6C] text-white shadow-md'
                  : 'text-[#56335B] hover:text-[#652D6C]'
              }`}
              title="Switch to English"
            >
              English
            </button>
            <button
              onClick={() => setLang('te')}
              className={`px-3 py-1 text-xs sm:text-sm font-bold rounded-full transition-all flex items-center gap-1 ${
                lang === 'te'
                  ? 'bg-[#652D6C] text-white shadow-md'
                  : 'text-[#56335B] hover:text-[#652D6C]'
              }`}
              title="తెలుగు మార్చండి"
            >
              తెలుగు
            </button>
          </div>

          {/* Direct Call Button */}
          <a
            href="tel:+919502534222"
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-[#652D6C] bg-[#FAF3FB] hover:bg-[#652D6C] hover:text-white border border-[#652D6C]/30 transition-all group"
          >
            <Phone className="w-4 h-4 text-[#9A389F] group-hover:text-white transition-colors animate-pulse" />
            <span>{t.nav.phone}</span>
          </a>

          {/* Book Appointment CTA */}
          <button
            onClick={onBookClick}
            className="btn-primary-purple px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg"
          >
            <Calendar className="w-4 h-4 text-pink-300" />
            <span>{t.nav.bookAppointment}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
