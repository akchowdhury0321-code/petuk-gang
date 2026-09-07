import React, { useState } from 'react';
import { MenuItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Plus, Check, Sparkles } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { language, t } = useLanguage();
  const { addItem, items, updateQuantity } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const cartEntry = items.find((ci) => ci.item.id === item.id);
  const currentQuantity = cartEntry ? cartEntry.quantity : 0;

  const handleAddToCart = () => {
    addItem(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const displayName = language === 'bn' ? item.nameBn : item.name;
  const displayDescription = language === 'bn' ? item.descriptionBn : item.description;
  const displayBadge = language === 'bn' ? item.badgeBn : item.badge;

  return (
    <div
      id={`menu-item-${item.id}`}
      className="group rounded-3xl overflow-hidden bg-[#FFF4DF] border-2 border-[#D96A27]/20 hover:border-[#D96A27] transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#D96A27]/15 flex flex-col justify-between"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#241812]/5">
        <img
          src={item.image}
          alt={displayName}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Gradient shadow for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#241812]/60 via-transparent to-black/20 pointer-events-none" />

        {/* Badge (e.g. FREE, Popular, Chef Choice) */}
        {item.isFree ? (
          <div className="absolute top-3 left-3 bg-[#D96A27] text-[#FFF4DF] text-xs font-black px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.menu.free}</span>
          </div>
        ) : displayBadge ? (
          <div className="absolute top-3 left-3 bg-[#241812]/80 backdrop-blur-md text-[#FFF4DF] border border-[#D96A27]/40 text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {displayBadge}
          </div>
        ) : null}

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 right-3 bg-[#FFF4DF] text-[#241812] px-3.5 py-1.5 rounded-xl shadow-lg border border-[#D96A27]/30 flex items-center gap-1 font-black">
          {item.isFree ? (
            <span className="text-[#D96A27] text-sm font-extrabold uppercase">
              {t.menu.free}
            </span>
          ) : (
            <span className="text-base text-[#241812]">
              ৳{item.price}
            </span>
          )}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#241812] group-hover:text-[#D96A27] transition-colors">
              {displayName}
            </h3>
          </div>
          <p className="text-sm text-[#241812]/75 leading-relaxed line-clamp-2">
            {displayDescription}
          </p>
        </div>

        {/* Action Button & Quantity controls */}
        <div className="pt-2 border-t border-[#D96A27]/15 flex items-center justify-between">
          {currentQuantity > 0 ? (
            <div className="flex items-center gap-2 bg-[#D96A27]/10 p-1 rounded-xl border border-[#D96A27]/30">
              <button
                type="button"
                onClick={() => updateQuantity(item.id, -1)}
                className="w-7 h-7 rounded-lg bg-[#FFF4DF] text-[#D96A27] font-black flex items-center justify-center hover:bg-[#D96A27] hover:text-[#FFF4DF] transition-colors"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="font-bold text-sm text-[#241812] px-1">
                {currentQuantity}
              </span>
              <button
                type="button"
                onClick={() => updateQuantity(item.id, 1)}
                className="w-7 h-7 rounded-lg bg-[#D96A27] text-[#FFF4DF] font-black flex items-center justify-center hover:bg-[#B85317] transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          ) : (
            <span className="text-xs font-semibold text-[#241812]/60">
              {item.isFree ? t.menu.freeBadge : (language === 'bn' ? 'তাজা পরিবেশন' : 'Prepared fresh')}
            </span>
          )}

          <button
            type="button"
            onClick={handleAddToCart}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              justAdded
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-[#D96A27] text-[#FFF4DF] hover:bg-[#B85317] shadow-md shadow-[#D96A27]/20 hover:shadow-lg'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>{t.menu.added}</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>{t.menu.addToCart}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
