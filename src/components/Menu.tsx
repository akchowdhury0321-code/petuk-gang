import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MENU_ITEMS, CATEGORIES } from '../data/menu';
import { MenuCard } from './MenuCard';
import { UtensilsCrossed, Sparkles } from 'lucide-react';

export const Menu: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-[#FFF4DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D96A27]/10 border border-[#D96A27]/25 text-[#D96A27] text-xs font-bold uppercase tracking-wider">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>{t.menu.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#241812] tracking-tight uppercase">
            {t.menu.title}
          </h2>
          <p className="text-base sm:text-lg text-[#241812]/75 max-w-2xl mx-auto">
            {t.menu.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-[#D96A27] rounded-full mx-auto" />
        </div>

        {/* Category Pills Slider / Filter */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none px-2">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#D96A27] text-[#FFF4DF] shadow-md shadow-[#D96A27]/25 scale-105'
                    : 'bg-[#FFF4DF] text-[#241812]/80 border border-[#D96A27]/20 hover:border-[#D96A27] hover:text-[#D96A27]'
                }`}
              >
                {language === 'bn' ? cat.nameBn : cat.name}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Complimentary Dal Note */}
        <div className="mt-12 p-6 rounded-3xl bg-[#D96A27]/10 border-2 border-[#D96A27]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D96A27] text-[#FFF4DF] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#241812]">
                {language === 'bn' ? 'মনে রাখবেন: ডাল সম্পূর্ণ ফ্রি!' : 'Reminder: Dal is Always Complimentary!'}
              </h4>
              <p className="text-xs sm:text-sm text-[#241812]/75">
                {language === 'bn'
                  ? 'গরম ভাতের সাথে ফ্রি ডাল যোগ করতে ভুলবেন না।'
                  : 'Add Dal to your order anytime at zero cost for a complete Bangladeshi feast.'}
              </p>
            </div>
          </div>
          <a
            href="#ai-assistant"
            className="px-5 py-2.5 rounded-xl bg-[#241812] text-[#FFF4DF] text-xs sm:text-sm font-bold hover:bg-[#D96A27] transition-colors whitespace-nowrap"
          >
            {language === 'bn' ? 'বাজেট হিসাব করুন 🤖' : 'Calculate Combo with AI 🤖'}
          </a>
        </div>
      </div>
    </section>
  );
};
