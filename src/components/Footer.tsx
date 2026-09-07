import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { config } from '../config/restaurant';
import { UtensilsCrossed, Heart, Globe, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241812] text-[#FFF4DF] pt-16 pb-12 border-t-4 border-[#D96A27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#FFF4DF]/15">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#D96A27] text-[#FFF4DF] flex items-center justify-center font-bold shadow-md">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tight uppercase text-[#FFF4DF]">
                {language === 'bn' ? config.restaurantNameBn : config.restaurantName}
              </span>
            </div>

            <p className="text-sm font-medium text-[#FFF4DF]/80 italic max-w-sm">
              "{language === 'bn' ? config.taglineBn : config.tagline}"
            </p>

            <p className="text-xs text-[#D96A27] font-semibold">
              {language === 'bn' ? config.fullAddressBn : config.fullAddress}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-black text-[#D96A27] uppercase tracking-wider">
              {language === 'bn' ? 'ন্যাভিগেশন' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FFF4DF]/70">
              <li>
                <a href="#home" className="hover:text-[#D96A27] transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D96A27] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D96A27] transition-colors">
                  {t.nav.menu}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D96A27] transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#offers" className="hover:text-[#D96A27] transition-colors">
                  {t.nav.offers}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#D96A27] transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Delivery Partners & Language */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-black text-[#D96A27] uppercase tracking-wider">
              {language === 'bn' ? 'অর্ডার পার্টনার' : 'Delivery Partners'}
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <a
                href={config.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors"
              >
                WhatsApp Direct Order
              </a>
              <a
                href={config.foodpandaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D70F64] transition-colors"
              >
                Foodpanda
              </a>
              <a
                href={config.pathaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#EB2227] transition-colors"
              >
                Pathao Food
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#FFF4DF]/20 text-xs font-bold text-[#FFF4DF] hover:bg-[#D96A27] hover:border-[#D96A27] transition-all cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#D96A27]" />
                <span>{language === 'en' ? 'বাংলা সংস্করণ' : 'English Version'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF4DF]/60">
          <p>
            © {new Date().getFullYear()} {config.restaurantName}. {t.footer.legal}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#FFF4DF]/80 hover:text-[#D96A27] transition-colors"
          >
            <span>{language === 'bn' ? 'উপরে যান' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
