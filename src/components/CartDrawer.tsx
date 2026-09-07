import React from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
    total,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen
  } = useCart();
  const { language, t } = useLanguage();

  if (!isCartOpen) return null;

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-[#241812]/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="w-screen max-w-md bg-[#FFF4DF] shadow-2xl flex flex-col justify-between border-l-2 border-[#D96A27]/20"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#D96A27]/15 bg-[#FFF4DF] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#D96A27] text-[#FFF4DF] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-black text-[#241812] uppercase tracking-wide">
                {t.cart.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-[#241812]/70 hover:text-[#D96A27] hover:bg-[#D96A27]/10 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-2xl bg-[#D96A27]/10 text-[#D96A27] flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#241812] mb-1">
                    {t.cart.emptyTitle}
                  </h3>
                  <p className="text-sm text-[#241812]/70 max-w-xs">
                    {t.cart.emptySubtitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#D96A27] text-[#FFF4DF] font-bold text-sm hover:bg-[#B85317] transition-colors"
                >
                  {language === 'bn' ? 'মেনু দেখুন' : 'Explore Menu'}
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map(({ item, quantity }) => {
                  const displayName = language === 'bn' ? item.nameBn : item.name;
                  const itemPrice = item.isFree ? 0 : item.price;
                  const lineTotal = itemPrice * quantity;

                  return (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-[#FFF4DF] border border-[#D96A27]/25 shadow-sm flex items-center justify-between gap-3 hover:border-[#D96A27]/50 transition-colors"
                    >
                      <img
                        src={item.image}
                        alt={displayName}
                        className="w-14 h-14 rounded-xl object-cover flex-shrink-0 border border-[#D96A27]/20"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-sm text-[#241812] truncate">
                            {displayName}
                          </h4>
                          {item.isFree && (
                            <span className="text-[10px] bg-[#D96A27] text-[#FFF4DF] px-1.5 py-0.5 rounded font-extrabold">
                              FREE
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#241812]/70">
                          {displayName} × {quantity} = {item.isFree ? 'FREE' : `৳${lineTotal}`}
                        </p>
                      </div>

                      {/* Quantity Controls & Remove */}
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <div className="flex items-center bg-[#D96A27]/10 rounded-lg p-0.5 border border-[#D96A27]/25">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold text-[#D96A27] hover:bg-[#D96A27] hover:text-[#FFF4DF] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-black text-[#241812]">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold text-[#D96A27] hover:bg-[#D96A27] hover:text-[#FFF4DF] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}

                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs font-semibold text-[#241812]/60 hover:text-rose-600 transition-colors flex items-center gap-1 pt-2"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{t.cart.clearCart}</span>
                </button>
              </div>
            )}
          </div>

          {/* Bottom Summary and Checkout Button */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#D96A27]/20 bg-[#FFF4DF] space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-[#241812]/80">
                  <span>{t.cart.subtotal}</span>
                  <span className="font-bold">৳{subtotal}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {t.cart.complimentaryDal}
                  </span>
                  <span>{t.menu.free}</span>
                </div>
                <div className="pt-2 border-t border-[#D96A27]/20 flex justify-between text-lg font-black text-[#241812]">
                  <span>{t.cart.total}</span>
                  <span className="text-[#D96A27] text-xl">৳{total}</span>
                </div>
              </div>

              <button
                id="cart-proceed-btn"
                type="button"
                onClick={handleProceedToCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-[#D96A27] text-[#FFF4DF] font-bold text-base hover:bg-[#B85317] shadow-lg shadow-[#D96A27]/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>{t.cart.proceedToOrder}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
