import React from 'react';
import { 
  Activity, 
  Database, 
  Syringe, 
  ShieldCheck, 
  Target, 
  Building2, 
  HeartHandshake, 
  Snowflake, 
  CheckCircle2
} from 'lucide-react';
import { Translation } from '../data/translations';

interface PackageInclusionsProps {
  t: Translation;
  onBookClick?: () => void;
}

export const PackageInclusions: React.FC<PackageInclusionsProps> = ({ t }) => {
  // Mapping of icons based on icon string or item index
  const getIcon = (iconName: string, index: number) => {
    const props = { className: "w-5 h-5 sm:w-6 sm:h-6 text-[#652D6C]" };
    switch (iconName) {
      case 'Activity':
        return <Activity {...props} />;
      case 'Database':
        return <Database {...props} />;
      case 'Syringe':
        return <Syringe {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Target':
        return <Target {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Snowflake':
        return <Snowflake {...props} />;
      default:
        const fallbacks = [
          <Activity {...props} />,
          <Database {...props} />,
          <Syringe {...props} />,
          <ShieldCheck {...props} />,
          <Target {...props} />,
          <Building2 {...props} />,
          <HeartHandshake {...props} />,
          <Snowflake {...props} />
        ];
        return fallbacks[index % fallbacks.length];
    }
  };

  return (
    <section id="inclusions" className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF6FA] via-[#FAF3FB] to-[#FAF6FA] relative overflow-hidden">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#652D6C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#9A389F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2A102D] tracking-tight">
            {t.inclusions.title}
          </h2>

          {t.inclusions.subtitle && (
            <p className="text-xl sm:text-2xl text-[#652D6C] font-extrabold tracking-tight mt-2.5">
              {t.inclusions.subtitle}
            </p>
          )}
        </div>

        {/* 8 Inclusions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {t.inclusions.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#652D6C]/15 shadow-sm hover:shadow-lg hover:border-[#9A389F]/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-4 group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#FAF3FB] to-[#F5EAF7] border border-[#652D6C]/15 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:bg-[#652D6C] group-hover:text-white transition-all">
                {getIcon(item.icon, idx)}
              </div>

              {/* Title & Checkmark */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-extrabold text-[#2A102D] group-hover:text-[#652D6C] transition-colors leading-snug break-words">
                  {item.title}
                </h3>
              </div>

              {/* Verified Checkmark Icon */}
              <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
