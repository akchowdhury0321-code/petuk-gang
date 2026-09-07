import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { REVIEWS_DATA } from '../data/offers';
import { Star, Quote, Sparkles } from 'lucide-react';

export const Reviews: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="reviews" className="py-20 bg-[#FFF4DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D96A27]/10 border border-[#D96A27]/25 text-[#D96A27] text-xs font-bold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5" />
            <span>{t.reviews.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#241812] tracking-tight uppercase">
            {t.reviews.title}
          </h2>
          <p className="text-base sm:text-lg text-[#241812]/75 max-w-2xl mx-auto">
            {t.reviews.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-[#D96A27] rounded-full mx-auto" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((rev) => {
            const reviewText = language === 'bn' ? rev.textBn : rev.text;

            return (
              <div
                key={rev.id}
                className="p-8 rounded-3xl bg-[#FFF4DF] border-2 border-[#D96A27]/20 hover:border-[#D96A27] transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#D96A27]/10 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Star rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D96A27] text-[#D96A27]" />
                    ))}
                  </div>

                  <p className="text-base text-[#241812]/80 italic leading-relaxed">
                    "{reviewText}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D96A27]/15 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-[#241812]">{rev.author}</h4>
                    <span className="text-xs text-[#D96A27] font-semibold">{rev.tag}</span>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#D96A27]/60" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
