import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';
import { GalleryItem } from '../types';
import { Camera, X, ZoomIn, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Gallery: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCat, setSelectedCat] = useState('all');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const filtered = selectedCat === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCat);

  return (
    <section id="gallery" className="py-20 bg-[#FFF4DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D96A27]/10 border border-[#D96A27]/25 text-[#D96A27] text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>{t.gallery.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#241812] tracking-tight uppercase">
            {t.gallery.title}
          </h2>
          <p className="text-base sm:text-lg text-[#241812]/75 max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-[#D96A27] rounded-full mx-auto" />
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none px-2">
          {GALLERY_CATEGORIES.map((cat) => {
            const isSelected = selectedCat === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCat(cat.id)}
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

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => {
            const displayTitle = language === 'bn' ? item.titleBn : item.title;
            const displayCategory = language === 'bn' ? item.categoryBn : item.category;

            return (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#241812]/5 aspect-[4/3] border-2 border-[#D96A27]/20 hover:border-[#D96A27] transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={displayTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241812]/90 via-[#241812]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 space-y-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#D96A27] bg-[#FFF4DF] px-2.5 py-0.5 rounded-full inline-block">
                      {displayCategory}
                    </span>
                    <h3 className="text-base font-bold text-[#FFF4DF]">
                      {displayTitle}
                    </h3>
                  </div>

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FFF4DF]/90 text-[#241812] flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-4 h-4 text-[#D96A27]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhoto(null)}
              className="fixed inset-0 bg-[#241812]/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-[#FFF4DF] rounded-3xl overflow-hidden shadow-2xl z-10 border-2 border-[#D96A27]/40"
            >
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#241812]/80 text-[#FFF4DF] hover:bg-[#D96A27] transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black">
                <img
                  src={activePhoto.image}
                  alt={language === 'bn' ? activePhoto.titleBn : activePhoto.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-[#FFF4DF] flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#D96A27] uppercase tracking-wider">
                    {language === 'bn' ? activePhoto.categoryBn : activePhoto.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#241812]">
                    {language === 'bn' ? activePhoto.titleBn : activePhoto.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePhoto(null)}
                  className="px-4 py-2 rounded-xl bg-[#D96A27] text-[#FFF4DF] text-xs font-bold"
                >
                  {t.gallery.close}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
