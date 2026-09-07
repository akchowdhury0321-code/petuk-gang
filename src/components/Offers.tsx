import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { OFFERS_DATA } from '../data/offers';
import { Tag, Sparkles, ArrowRight, Flame } from 'lucide-react';

export const Offers: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="offers" className="py-20 bg-[#FFF4DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D96A27]/10 border border-[#D96A27]/25 text-[#D96A27] text-xs font-bold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>{t.offers.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#241812] tracking-tight uppercase">
            {t.offers.title}
          </h2>
          <p className="text-base sm:text-lg text-[#241812]/75 max-w-2xl mx-auto">
            {t.offers.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-[#D96A27] rounded-full mx-auto" />
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFERS_DATA.map((offer) => {
            const title = language === 'bn' ? offer.titleBn : offer.title;
            const tag = language === 'bn' ? offer.tagBn : offer.tag;
            const desc = language === 'bn' ? offer.descriptionBn : offer.description;

            return (
              <div
                key={offer.id}
                className="group relative rounded-3xl p-8 bg-[#FFF4DF] border-2 border-[#D96A27]/25 hover:border-[#D96A27] transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#D96A27]/15 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#D96A27]/15 text-[#D96A27] font-extrabold text-xs tracking-wider">
                      {tag}
                    </span>
                    <Flame className="w-5 h-5 text-[#D96A27]" />
                  </div>

                  <h3 className="text-xl font-black text-[#241812] group-hover:text-[#D96A27] transition-colors">
                    {title}
                  </h3>

                  <p className="text-sm text-[#241812]/75 leading-relaxed italic">
                    "{desc}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D96A27]/15 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#D96A27]">
                    {language === 'bn' ? 'শীঘ্রই যুক্ত হচ্ছে' : 'Coming Soon'}
                  </span>
                  <a
                    href="#menu"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#241812] hover:text-[#D96A27] transition-colors"
                  >
                    <span>{t.nav.menu}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
