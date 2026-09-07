import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { config } from '../config/restaurant';
import { MessageSquare, ExternalLink, UtensilsCrossed, PhoneCall, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-[#FFF4DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#FFF4DF] border-2 border-[#D96A27]/30 shadow-2xl p-8 sm:p-14 text-center space-y-8 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-96 bg-[#D96A27]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Titles */}
          <div className="space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D96A27]/10 border border-[#D96A27]/25 text-[#D96A27] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.contact.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#241812] tracking-tight uppercase">
              {t.contact.title}
            </h2>
            <p className="text-base sm:text-lg text-[#241812]/75 max-w-xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          {/* Brand & Location Spotlight */}
          <div className="p-6 rounded-2xl bg-[#D96A27]/10 border border-[#D96A27]/20 max-w-md mx-auto space-y-1 relative z-10">
            <h3 className="text-2xl font-black text-[#241812] uppercase tracking-wide">
              {language === 'bn' ? config.restaurantNameBn : config.restaurantName}
            </h3>
            <p className="text-sm font-bold text-[#D96A27]">
              {language === 'bn' ? config.fullAddressBn : config.fullAddress}
            </p>
          </div>

          {/* Direct Ordering / Contact Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-2 relative z-10">
            {/* WhatsApp */}
            <a
              id="contact-whatsapp-btn"
              href={config.whatsappUrl || "https://wa.me/"}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-5 rounded-2xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#1ebd59] shadow-lg shadow-[#25D366]/20 flex flex-col items-center justify-center gap-2 transition-all hover:-translate-y-1 cursor-pointer"
            >
              <MessageSquare className="w-6 h-6" />
              <span>{t.contact.whatsapp}</span>
            </a>

            {/* Foodpanda */}
            <a
              id="contact-foodpanda-btn"
              href={config.foodpandaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-5 rounded-2xl bg-[#D70F64] text-white font-bold text-sm hover:bg-[#b80b54] shadow-lg shadow-[#D70F64]/20 flex flex-col items-center justify-center gap-2 transition-all hover:-translate-y-1 cursor-pointer"
            >
              <ExternalLink className="w-6 h-6" />
              <span>{t.contact.foodpanda}</span>
            </a>

            {/* Pathao */}
            <a
              id="contact-pathao-btn"
              href={config.pathaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-5 rounded-2xl bg-[#EB2227] text-white font-bold text-sm hover:bg-[#c9181d] shadow-lg shadow-[#EB2227]/20 flex flex-col items-center justify-center gap-2 transition-all hover:-translate-y-1 cursor-pointer"
            >
              <ExternalLink className="w-6 h-6" />
              <span>{t.contact.pathao}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
