import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Bot, ArrowRight } from 'lucide-react';

interface AIAssistantBannerProps {
  onOpenChat: () => void;
}

export const AIAssistantBanner: React.FC<AIAssistantBannerProps> = ({ onOpenChat }) => {
  const { language, t } = useLanguage();

  return (
    <section id="ai-assistant" className="py-16 bg-[#FFF4DF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#D96A27] via-[#B85317] to-[#D96A27] p-8 sm:p-12 text-[#FFF4DF] shadow-2xl overflow-hidden border-2 border-[#FFF4DF]/20">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/15 rounded-full blur-xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4DF]/15 border border-[#FFF4DF]/30 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Bot className="w-4 h-4" />
              <span>{t.aiBanner.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {t.aiBanner.title}
            </h2>

            <p className="text-base sm:text-lg text-[#FFF4DF]/90 font-medium max-w-2xl leading-relaxed">
              {t.aiBanner.subtitle}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenChat}
                className="px-7 py-3.5 rounded-xl bg-[#FFF4DF] text-[#D96A27] font-extrabold text-base hover:bg-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{t.aiBanner.button}</span>
                <ArrowRight className="w-5 h-5 text-[#D96A27]" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#FFF4DF]/80">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>
                  {language === 'bn' ? 'সরাসরি বাজেট ও মেনু বিশ্লেষণ' : 'Instant Budget & Bill Calculations'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
