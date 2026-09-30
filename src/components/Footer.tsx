import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { Translation } from '../data/translations';

interface FooterProps {
  t: Translation;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  const mapDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Medcy+IVF+Plot+9A+Health+City+Arilova+Visakhapatnam+530040&dir_action=navigate";

  return (
    <footer className="bg-gradient-to-b from-[#4D1F53] to-[#2A102D] text-white pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/15">
          
          {/* Brand & About */}
          <div className="lg:col-span-4 space-y-4">
            {/* Brand Logo with white background */}
            <a href="#" className="inline-block bg-white px-3.5 py-2 rounded-xl focus:outline-none hover:opacity-95 transition-opacity">
              <img 
                src="/medcy-logo.png" 
                alt="Medcy IVF Logo" 
                className="h-10 sm:h-12 w-auto object-contain" 
              />
            </a>

            <p className="text-xs sm:text-sm text-purple-200/80 font-medium leading-relaxed">
              {t.footer.aboutText}
            </p>
          </div>

          {/* Location & Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-base font-extrabold text-white border-l-4 border-[#9A389F] pl-3">
              {t.footer.addressTitle}
            </h4>

            <ul className="space-y-3.5 text-xs sm:text-sm text-purple-200/90 font-medium">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-[#9A389F] shrink-0 mt-0.5" />
                <a 
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFCC00] transition-colors font-medium underline-offset-4 hover:underline"
                  title="Click to navigate on Google Maps"
                >
                  {t.footer.addressValue}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#9A389F] shrink-0" />
                <a href="tel:+919502534222" className="hover:text-white font-bold transition-colors">
                  {t.footer.phoneValue}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#9A389F] shrink-0" />
                <span>{t.footer.hoursValue}</span>
              </li>
            </ul>
          </div>

          {/* Interactive Vizag Health City Map (Clicking ANY side opens Google Maps) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-base font-extrabold text-white border-l-4 border-[#9A389F] pl-3">
              Location Map (Arilova Health City)
            </h4>

            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-44 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl group cursor-pointer"
              title="Click anywhere on map to open Google Maps navigation to Medcy IVF"
            >
              {/* Map Iframe */}
              <iframe
                title="Medcy IVF Visakhapatnam Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.0768912845!2d83.3325!3d17.7650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b28d0000001%3A0x6b4a3a60e0a5c4d2!2sHealth%20City%2C%20Arilova%2C%20Visakhapatnam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none group-hover:scale-105 transition-transform duration-300"
              />

              {/* View on Google Maps Overlay Badge */}
              <div className="absolute bottom-3 right-3 bg-[#652D6C] group-hover:bg-[#9A389F] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-1.5 transition-all z-10 border border-white/20">
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-purple-200" />
              </div>
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-purple-300/70 font-medium">
          <p>{t.footer.copyright}</p>
        </div>

      </div>
    </footer>
  );
};
