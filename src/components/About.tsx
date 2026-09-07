import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Flame, HeartHandshake, Utensils, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-[#FFF4DF] relative overflow-hidden">
      {/* Subtle background warm pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D96A27]/10 border border-[#D96A27]/25 text-[#D96A27] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.about.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#241812] tracking-tight uppercase">
            {t.about.headline}
          </h2>
          <div className="w-20 h-1.5 bg-[#D96A27] rounded-full mx-auto" />
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Visual Storytelling Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#D96A27]/20 group">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80"
                  alt="Cozy wooden restaurant interior with warm lighting"
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#D96A27]/20 group">
                <img
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80"
                  alt="Steaming bowl of freshly cooked yellow dal"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#D96A27]/20 group">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
                  alt="Rich slow simmered beef curry"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#D96A27]/20 group">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80"
                  alt="Warm restaurant ambience with plants and cheerful details"
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Text Story */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-lg sm:text-xl text-[#241812]/90 leading-relaxed font-normal">
              {t.about.p1}
            </p>
            <p className="text-base sm:text-lg text-[#241812]/80 leading-relaxed">
              {t.about.p2}
            </p>

            <div className="pt-4 border-t border-[#D96A27]/20 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#D96A27] text-[#FFF4DF] flex items-center justify-center font-black shadow-md shadow-[#D96A27]/20">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#241812] uppercase">
                    {language === 'bn' ? 'খাঁটি দেশি মশলা' : 'Authentic Spices'}
                  </h4>
                  <p className="text-xs text-[#241812]/70 font-medium">
                    {language === 'bn' ? 'প্রতিদিন তাজা প্রস্তুত' : 'Freshly prepared daily'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#241812] text-[#FFF4DF] flex items-center justify-center font-black shadow-md">
                  <Utensils className="w-6 h-6 text-[#D96A27]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#241812] uppercase">
                    {language === 'bn' ? 'মনখোলা আপ্যায়ন' : 'Hospitality'}
                  </h4>
                  <p className="text-xs text-[#241812]/70 font-medium">
                    {language === 'bn' ? 'পাথরঘাটা, চট্টগ্রাম' : 'Patharghata, Chattogram'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#FFF4DF] border-2 border-[#D96A27]/20 hover:border-[#D96A27] transition-all hover:shadow-lg hover:shadow-[#D96A27]/10">
            <div className="w-12 h-12 rounded-xl bg-[#D96A27]/15 text-[#D96A27] flex items-center justify-center mb-4">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#241812] mb-2">{t.about.card1Title}</h3>
            <p className="text-sm text-[#241812]/75 leading-relaxed">{t.about.card1Desc}</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFF4DF] border-2 border-[#D96A27]/20 hover:border-[#D96A27] transition-all hover:shadow-lg hover:shadow-[#D96A27]/10">
            <div className="w-12 h-12 rounded-xl bg-[#D96A27]/15 text-[#D96A27] flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#241812] mb-2">{t.about.card2Title}</h3>
            <p className="text-sm text-[#241812]/75 leading-relaxed">{t.about.card2Desc}</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFF4DF] border-2 border-[#D96A27]/20 hover:border-[#D96A27] transition-all hover:shadow-lg hover:shadow-[#D96A27]/10">
            <div className="w-12 h-12 rounded-xl bg-[#D96A27]/15 text-[#D96A27] flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#241812] mb-2">{t.about.card3Title}</h3>
            <p className="text-sm text-[#241812]/75 leading-relaxed">{t.about.card3Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
