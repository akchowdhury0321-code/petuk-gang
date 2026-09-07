import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, ArrowRight, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-24 pb-16 flex items-center justify-center overflow-hidden bg-[#FFF4DF]"
    >
      {/* Subtle organic warm background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D96A27]/15 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#D96A27]/10 rounded-full blur-3xl pointer-events-none -ml-32 -mb-20" />

      {/* Decorative Bangladeshi-inspired geometric pattern dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#D96A27_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Top Location & Authentic Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D96A27]/15 border border-[#D96A27]/30 text-[#D96A27] text-xs sm:text-sm font-bold"
            >
              <MapPin className="w-4 h-4 text-[#D96A27]" />
              <span>{t.hero.location}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D96A27]" />
              <span className="text-[#241812]/80">{t.hero.badge}</span>
            </motion.div>

            {/* Main Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#241812] tracking-tight uppercase leading-[0.95]">
                {t.hero.title}
              </h1>
              <div className="h-2 w-28 bg-[#D96A27] rounded-full mt-2" />
            </motion.div>

            {/* Supporting Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-[#241812]/90 leading-snug max-w-xl italic"
            >
              "{t.hero.subtext}"
            </motion.p>

            {/* Highlights bullet points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#241812]/80 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D96A27]" />
                <span>{t.hero.floatingHighlight1}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D96A27]" />
                <span>{t.hero.floatingHighlight2}</span>
              </div>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto"
            >
              <a
                id="hero-explore-menu-btn"
                href="#menu"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#D96A27] text-[#FFF4DF] font-bold text-base shadow-lg shadow-[#D96A27]/30 hover:bg-[#B85317] hover:shadow-xl hover:shadow-[#D96A27]/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>{t.hero.exploreMenu}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                id="hero-order-now-btn"
                href="#menu"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-transparent border-2 border-[#D96A27] text-[#D96A27] font-bold text-base hover:bg-[#D96A27] hover:text-[#FFF4DF] transition-all cursor-pointer"
              >
                <Flame className="w-5 h-5" />
                <span>{t.hero.orderNow}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Bangladeshi Food Composition with warm lighting and subtle floating badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Center Main Food Plate */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Outer warm glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#D96A27]/40 via-[#D96A27]/10 to-transparent blur-2xl transform scale-95" />

              {/* Composition Container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-[#D96A27]/30 shadow-2xl shadow-[#D96A27]/25 aspect-square bg-[#241812]/10 group">
                <img
                  src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85"
                  alt="Authentic Bangladeshi traditional food banquet with spiced curry, rice and bhortas"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Warm cinematic vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241812]/80 via-[#241812]/20 to-transparent" />

                {/* Steam particles animation overlay */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex space-x-2 pointer-events-none opacity-60">
                  <motion.div
                    animate={{ y: [-5, -25, -40], opacity: [0, 0.8, 0], scale: [0.8, 1.2, 1.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-4 h-12 bg-white/40 rounded-full blur-md"
                  />
                  <motion.div
                    animate={{ y: [-5, -30, -50], opacity: [0, 0.6, 0], scale: [0.9, 1.3, 1.6] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.7, ease: 'easeInOut' }}
                    className="w-5 h-14 bg-white/30 rounded-full blur-md"
                  />
                  <motion.div
                    animate={{ y: [-5, -20, -35], opacity: [0, 0.7, 0], scale: [0.7, 1.1, 1.3] }}
                    transition={{ duration: 2.8, repeat: Infinity, delay: 1.2, ease: 'easeInOut' }}
                    className="w-3 h-10 bg-white/35 rounded-full blur-md"
                  />
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#FFF4DF]/95 backdrop-blur-md border border-[#D96A27]/30 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-black text-base sm:text-lg text-[#241812] uppercase tracking-wide">
                        {language === 'bn' ? 'খাঁটি দেশি ভোজন' : 'Traditional Bengali Spread'}
                      </h3>
                      <p className="text-xs text-[#241812]/70 font-medium">
                        {language === 'bn' ? 'ভর্তা • ভাত • মাংস • ডাল' : 'Bhorta • Rice • Meat • Complimentary Dal'}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#D96A27] text-[#FFF4DF] font-bold text-xs tracking-wider">
                      {language === 'bn' ? 'তাজা ও খাঁটি' : 'Fresh Daily'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Pill 1: Complimentary Dal */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-[#D96A27] text-[#FFF4DF] px-4 py-2.5 rounded-2xl shadow-xl border-2 border-[#FFF4DF] flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-extrabold tracking-wide">
                  {language === 'bn' ? 'ডাল সম্পূর্ণ ফ্রি!' : 'Complimentary Warm Dal!'}
                </span>
              </motion.div>

              {/* Floating Pill 2: Starting ৳30 */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#241812] text-[#FFF4DF] px-4 py-2.5 rounded-2xl shadow-xl border-2 border-[#D96A27] flex items-center gap-2"
              >
                <span className="text-xs sm:text-sm font-black text-[#D96A27]">
                  {language === 'bn' ? 'শুরু মাত্র ৳৩০ থেকে' : 'From ৳30 only'}
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
