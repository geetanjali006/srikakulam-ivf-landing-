import React, { useState } from 'react';
import { X, Calendar, User, Phone, ChevronRight } from 'lucide-react';
import { Translation } from '../data/translations';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFormSubmit: (data: { name: string; phone: string; slot: string; date: string; age?: string; formSource?: string }) => void;
  t: Translation;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, onFormSubmit, t }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    date: new Date().toISOString().split('T')[0],
    slot: t.hero.slotOptions[0] || '10:00 AM - 07:00 PM'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onFormSubmit({
        ...formData,
        formSource: 'Consultation Registration (Modal Form)'
      });
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="glass-card bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-[#652D6C]/30 text-[#2A102D] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF3FB] hover:bg-[#652D6C] text-[#652D6C] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1 mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A102D]">
            {t.hero.formTitle}
          </h2>

          <p className="text-xs sm:text-sm text-[#56335B] font-medium max-w-sm mx-auto">
            {t.hero.formSubtitle}
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-[#2A102D] mb-1">
              {t.hero.fullNameLabel}
            </label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3.5 top-3.5 text-[#652D6C]" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.hero.fullNamePlaceholder}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-[#2A102D]"
              />
            </div>
          </div>

          {/* Phone & Age */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-[#2A102D] mb-1">
                {t.hero.mobileLabel}
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-[#652D6C]" />
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t.hero.mobilePlaceholder}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-[#2A102D]"
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
                className="w-full px-3 py-2.5 text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-center text-[#2A102D]"
              />
            </div>
          </div>

          {/* Date & Slot */}
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
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D]"
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
                className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D] cursor-pointer"
              >
                {t.hero.slotOptions.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-accent py-3.5 px-6 rounded-xl font-black text-base flex items-center justify-center gap-2 shadow-lg mt-3 group cursor-pointer"
          >
            <span>{isSubmitting ? t.hero.submitting : t.hero.submitButton}</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center justify-center gap-1.5 text-xs text-[#56335B] font-medium pt-1">
            <span>🔒</span>
            <span>{t.hero.privacyNote}</span>
          </div>

        </form>

      </div>
    </div>
  );
};
