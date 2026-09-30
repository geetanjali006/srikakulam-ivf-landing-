import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Translation } from '../data/translations';

interface FAQSectionProps {
  t: Translation;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = t.faq.items.filter(item => 
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#652D6C]/10 border border-[#652D6C]/20 text-[#652D6C] text-xs font-extrabold tracking-wider uppercase">
            <HelpCircle className="w-4 h-4 text-[#9A389F]" />
            <span>{t.faq.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2A102D] tracking-tight">
            {t.faq.title}
          </h2>

          <p className="text-base sm:text-lg text-[#56335B] font-medium leading-relaxed">
            {t.faq.subtitle}
          </p>

          {/* Search Box */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-4 h-4 absolute left-4 top-7 text-[#56335B]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-11 pr-4 py-3 text-sm bg-[#FAF6FA] border border-[#652D6C]/20 rounded-2xl focus:ring-2 focus:ring-[#9A389F] outline-none font-medium"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#2A102D] hover:text-[#652D6C] transition-colors"
                >
                  <span className="flex-1">{item.q}</span>
                  <div className={`p-2 rounded-full bg-[#FAF3FB] text-[#652D6C] shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-[#652D6C] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#56335B] leading-relaxed font-medium border-t border-[#652D6C]/10">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
