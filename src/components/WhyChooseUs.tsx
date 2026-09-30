import React from 'react';
import { 
  Trophy, 
  Gem, 
  Stethoscope, 
  HeartHandshake, 
  Microscope,
  Sparkles
} from 'lucide-react';
import { Translation } from '../data/translations';

interface WhyChooseUsProps {
  t: Translation;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ t }) => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-[#652D6C]" };
    switch (iconName) {
      case 'Trophy':
        return <Trophy {...props} />;
      case 'Gem':
        return <Gem {...props} />;
      case 'Stethoscope':
        return <Stethoscope {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Microscope':
        return <Microscope {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-[#FAF6FA] relative overflow-hidden">
      {/* Subtle Ambient Decorative Glows */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-[#652D6C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#9A389F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#652D6C]/10 border border-[#652D6C]/20 text-[#652D6C] text-xs font-extrabold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#9A389F]" />
            <span>Our Core Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2A102D] tracking-tight">
            {t.whyChoose.title}
          </h2>
        </div>

        {/* 5 Core Pillars Grid: Row 1 has 3 items, Row 2 has 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {t.whyChoose.items.map((item, idx) => {
            // In a 6-col grid on lg: first 3 items take 2 cols each (2+2+2 = 6).
            // Last 2 items take 3 cols each (3+3 = 6), perfectly filling both rows!
            const colSpanClass = idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
            const mdColSpan = idx === 4 ? 'md:col-span-2 lg:col-span-3' : 'md:col-span-1';

            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#652D6C]/15 shadow-sm hover:shadow-xl hover:border-[#652D6C]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${colSpanClass} ${mdColSpan}`}
              >
                <div>
                  {/* Top Bar: Icon in Soft Lavender Wrapper & Number Pill */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-[#FAF3FB] border border-[#652D6C]/15 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 group-hover:bg-[#652D6C] group-hover:text-white transition-all">
                      {getIcon(item.icon)}
                    </div>
                    <span className="text-xs font-black text-[#652D6C]/50 uppercase tracking-widest bg-[#FAF6FA] px-3 py-1 rounded-full border border-[#652D6C]/10">
                      0{item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#2A102D] group-hover:text-[#652D6C] transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#56335B] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
