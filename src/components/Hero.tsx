import React, { useState } from 'react';
import { Calendar, Sparkles, User, Phone, ChevronRight, Percent } from 'lucide-react';
import { Translation } from '../data/translations';

interface HeroProps {
  t: Translation;
  onFormSubmit: (data: { name: string; phone: string; slot: string; date: string; age?: string; formSource?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onFormSubmit }) => {
  const isTe = t.nav.brandName.includes('మెడ్సీ');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    date: new Date().toISOString().split('T')[0],
    slot: t.hero.slotOptions[0] || '10:00 AM - 07:00 PM'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onFormSubmit({
        ...formData,
        formSource: 'Consultation Registration (Hero Form)'
      });
    }, 600);
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF6FA] min-h-[calc(100vh-8.5rem)] flex flex-col justify-center items-center py-6 sm:py-8 lg:py-10 px-6 sm:px-12 lg:px-20 xl:px-28">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#9A389F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#652D6C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10 xl:gap-14">
          
          {/* Left Column: Headlines & Discount Offer */}
          <div className="space-y-4 sm:space-y-5 lg:col-span-7 order-2 lg:order-1">
            
            {/* Brand Eyebrow: MEDCY IVF (Poppins SemiBold) */}
            {(t.hero.brandTag || t.hero.badge) && (
              <div className="font-poppins font-semibold text-xs sm:text-sm tracking-widest text-[#652D6C] uppercase flex items-center gap-2">
                <span className="w-5 h-0.5 bg-[#9A389F]/50 rounded-full inline-block"></span>
                <span>{t.hero.brandTag || t.hero.badge}</span>
              </div>
            )}

            {/* Main Headline */}
            <h1 className="tracking-tight text-[#2A102D] leading-[1.15]">
              <span className="block font-poppins font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#2A102D]">
                {t.hero.headlinePart1}
              </span>
              <span className="block font-poppins font-extrabold italic text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#652D6C] via-[#9A389F] to-[#7E3282] mt-1 sm:mt-1.5">
                {t.hero.headlineHighlight}
              </span>
            </h1>

            {/* Tagline Line */}
            {t.hero.tagline && (
              <p className="text-base sm:text-lg lg:text-xl font-bold text-[#4D1F53] tracking-tight">
                {t.hero.tagline}
              </p>
            )}

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-base text-[#56335B] leading-relaxed max-w-2xl font-medium">
              {t.hero.subtext}
            </p>


            {/* Srikakulam Branch ₹1.5 Lakhs Special Discount Voucher (Reference Coupon Ticket) */}
            <div className="relative w-full rounded-2xl p-1 bg-gradient-to-r from-[#D91B5C] via-[#C41261] to-[#8E0956] shadow-2xl overflow-hidden group">
              {/* Inner Dashed Border Container */}
              <div className="relative w-full rounded-xl border-2 border-dashed border-white/70 p-4 sm:p-5 flex flex-col sm:flex-row items-stretch justify-between gap-4 overflow-hidden bg-gradient-to-r from-[#D81B60]/95 via-[#C2185B]/95 to-[#880E4F]/95">
                
                {/* Decorative Sparkles & Glow */}
                <div className="absolute top-2 left-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-pink-300/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute top-2 right-12 opacity-25 pointer-events-none">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>

                {/* Left Ticket Body */}
                <div className="flex-1 relative z-10 space-y-3">
                  {/* Big Point: Headline & Huge Price Banner */}
                  <div className="pt-0.5">
                    <h3 className="font-poppins font-black text-xl sm:text-2xl lg:text-[28px] text-white tracking-tight leading-snug drop-shadow-sm">
                      {t.hero.offerText}
                    </h3>
                  </div>

                  {/* Price Comparison Line & Note */}
                  <div className="space-y-1.5">
                    <div className="flex items-baseline gap-2.5 flex-wrap">
                      <span className="text-xs sm:text-sm text-pink-200 line-through font-bold">
                        {t.hero.offerOriginalPrice}
                      </span>
                      <span className="text-xs sm:text-sm text-yellow-300 font-extrabold bg-black/25 px-2.5 py-0.5 rounded-md">
                        Complete Package at ₹1.5 Lakhs
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-pink-100 font-medium leading-relaxed max-w-xl">
                      {t.hero.offerNote}
                    </p>
                  </div>
                </div>

                {/* Right Coupon Stub with Perforation & Cutout Notches */}
                <div className="relative hidden sm:flex flex-col items-center justify-center pl-4 sm:pl-5 border-l-2 border-dashed border-white/50 shrink-0">
                  {/* Top Notch Cutout */}
                  <div className="absolute -top-6 -left-[13px] w-6 h-6 rounded-full bg-[#FAF6FA]" />
                  {/* Bottom Notch Cutout */}
                  <div className="absolute -bottom-6 -left-[13px] w-6 h-6 rounded-full bg-[#FAF6FA]" />

                  {/* Stub Contents */}
                  <div className="flex flex-col items-center justify-center text-center space-y-2 py-2">
                    {/* Starburst % Badge */}
                    <div className="w-14 h-14 rounded-full bg-white text-[#C2185B] font-black flex flex-col items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                      <Percent className="w-6 h-6 text-[#C2185B]" />
                      <span className="text-[9px] uppercase font-black tracking-tighter leading-none text-[#C2185B]">OFFER</span>
                    </div>
                    <span className="text-xs font-extrabold text-yellow-300 tracking-wider uppercase">
                      SRIKAKULAM
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Registration Form */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="bg-white relative shadow-xl border border-[#652D6C]/20 px-6 pt-7 pb-8 sm:px-7 sm:pt-8 sm:pb-9 lg:pt-9 lg:pb-10 rounded-2xl">
              
              {/* Form Header */}
              <div className="text-center mb-4 sm:mb-5">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#2A102D] tracking-tight">
                  {t.hero.formTitle}
                </h2>
                <p className="text-xs sm:text-sm text-[#56335B] mt-0.5 font-medium">
                  {t.hero.formSubtitle}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                
                {/* Full Name Field */}
                <div>
                  <label className="block text-xs font-bold text-[#2A102D] mb-1">
                    {t.hero.fullNameLabel}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-[#652D6C]" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.hero.fullNamePlaceholder}
                      className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-[#2A102D] shadow-sm transition-all"
                    />
                  </div>
                </div>

                {/* Mobile & Age Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#2A102D] mb-1">
                      {t.hero.mobileLabel}
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-3 text-[#652D6C]" />
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.hero.mobilePlaceholder}
                        className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-[#2A102D] shadow-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2A102D] mb-1">
                      {t.hero.ageLabel}
                    </label>
                    <input
                      type="number"
                      min="18"
                      max="60"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder={t.hero.agePlaceholder}
                      className="w-full px-2.5 py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-center text-[#2A102D] shadow-sm transition-all"
                    />
                  </div>
                </div>

                {/* Date & Time Slot Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#2A102D] mb-1">
                      {t.hero.dateLabel}
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 absolute left-3 top-3 text-[#652D6C] pointer-events-none" />
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-9 pr-2.5 py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D] shadow-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2A102D] mb-1">
                      {t.hero.slotLabel}
                    </label>
                    <select
                      value={formData.slot}
                      onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                      className="w-full px-2.5 py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D] shadow-sm transition-all cursor-pointer"
                    >
                      {t.hero.slotOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-accent rounded-xl font-extrabold text-sm sm:text-base py-3 px-5 flex items-center justify-center gap-2 shadow-lg mt-2 group hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
                >
                  <span>{isSubmitting ? t.hero.submitting : t.hero.submitButton}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-center text-[#56335B] font-medium pt-1 flex items-center justify-center gap-1">
                  <span>🔒</span>
                  <span>{t.hero.privacyNote}</span>
                </p>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
