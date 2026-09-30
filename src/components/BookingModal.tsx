import React from 'react';
import { X, CheckCircle } from 'lucide-react';
import { Translation } from '../data/translations';
import { FormSubmissionData } from '../utils/googleSheets';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: FormSubmissionData | null;
  t: Translation;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, bookingData, t }) => {
  if (!isOpen || !bookingData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="glass-card bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-[#652D6C]/30 text-[#2A102D]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF3FB] hover:bg-[#652D6C] text-[#652D6C] hover:text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 animate-bounce">
            <CheckCircle className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-extrabold text-[#2A102D]">
            {t.modal.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#56335B] font-medium">
            {t.modal.subtitle}
          </p>
        </div>

        {/* Details Card */}
        <div className="p-4 rounded-2xl bg-[#FAF3FB] border border-[#652D6C]/20 space-y-3 mb-6">
          <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
            <div>
              <p className="text-[11px] font-bold text-[#56335B] uppercase">{t.modal.nameLabel}</p>
              <p className="font-bold text-[#2A102D]">{bookingData.name}</p>
            </div>

            <div>
              <p className="text-[11px] font-bold text-[#56335B] uppercase">{t.modal.phoneLabel}</p>
              <p className="font-bold text-[#2A102D]">{bookingData.phone}</p>
            </div>

            <div>
              <p className="text-[11px] font-bold text-[#56335B] uppercase">{t.modal.dateLabel}</p>
              <p className="font-bold text-[#2A102D]">{bookingData.date}</p>
            </div>

            <div>
              <p className="text-[11px] font-bold text-[#56335B] uppercase">{t.modal.slotLabel}</p>
              <p className="font-bold text-[#2A102D]">{bookingData.slot}</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={onClose}
            className="w-full btn-primary-purple text-white font-extrabold py-3.5 px-5 rounded-xl text-sm sm:text-base shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            {t.modal.closeButton}
          </button>
        </div>

        <p className="text-xs text-center text-[#56335B] font-medium mt-4">
          {t.modal.note}
        </p>

      </div>
    </div>
  );
};
