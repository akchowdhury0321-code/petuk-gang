import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { config } from '../config/restaurant';
import { X, Send, ExternalLink, CheckCircle, MessageSquare, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export const CheckoutModal: React.FC = () => {
  const { items, total, isCheckoutOpen, setIsCheckoutOpen, clearCart } = useCart();
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    specialInstructions: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Generate WhatsApp order message
  const generateWhatsAppUrl = () => {
    const itemList = items
      .map(({ item, quantity }) => {
        const name = item.name;
        const linePrice = item.isFree ? 'FREE' : `৳${item.price * quantity}`;
        return `• ${name} × ${quantity} (${linePrice})`;
      })
      .join('\n');

    const message = `*PETUK GANG ORDER*\n` +
      `-------------------------\n` +
      `*Customer:* ${formData.name || 'Not provided'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Address:* ${formData.address || 'Patharghata, Chattogram'}\n` +
      (formData.specialInstructions ? `*Special Notes:* ${formData.specialInstructions}\n` : '') +
      `-------------------------\n` +
      `*Items:*\n${itemList}\n` +
      `-------------------------\n` +
      `*TOTAL:* ৳${total}\n\n` +
      `Thank you Petuk Gang! Please confirm my order.`;

    const baseUrl = config.whatsappUrl || 'https://wa.me/?text=';
    return `${baseUrl}${encodeURIComponent(message)}`;
  };

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const url = generateWhatsAppUrl();
    window.open(url, '_blank');
    setOrderPlaced(true);
  };

  const handleFoodpandaOrder = () => {
    window.open(config.foodpandaUrl, '_blank');
  };

  const handlePathaoOrder = () => {
    window.open(config.pathaoUrl, '_blank');
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    if (orderPlaced) {
      clearCart();
      setOrderPlaced(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 bg-[#241812]/70 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative w-full max-w-2xl bg-[#FFF4DF] rounded-3xl shadow-2xl border-2 border-[#D96A27]/30 p-6 sm:p-8 overflow-hidden z-10 my-8"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-[#241812]/70 hover:text-[#D96A27] hover:bg-[#D96A27]/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {orderPlaced ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-[#241812]">
              {language === 'bn' ? 'অর্ডার পাঠানো হয়েছে!' : 'Order Dispatched!'}
            </h3>
            <p className="text-sm text-[#241812]/75 max-w-md mx-auto">
              {language === 'bn'
                ? 'হোয়াটসঅ্যাপ উইন্ডো খুলেছে। আপনার তথ্য পাঠিয়ে কনফার্ম করুন। পেটুক গ্যাং গরম খাবার প্রস্তুত করবে!'
                : 'Your order details have been forwarded to WhatsApp. Petuk Gang is ready to serve your meal hot and fresh!'}
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-[#D96A27] text-[#FFF4DF] font-bold text-sm hover:bg-[#B85317] transition-colors"
              >
                {t.checkout.backToMenu}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D96A27]/15 text-[#D96A27] text-xs font-bold mb-2">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{config.location}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#241812] uppercase">
                {t.checkout.title}
              </h2>
              <p className="text-sm text-[#241812]/70 mt-1">
                {t.checkout.subtitle}
              </p>
            </div>

            {/* Order Summary Preview Card */}
            <div className="p-4 rounded-2xl bg-[#D96A27]/10 border border-[#D96A27]/25 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#D96A27] uppercase tracking-wider">
                <span>{t.checkout.orderSummary}</span>
                <span>{items.length} {t.cart.itemsCount}</span>
              </div>
              <div className="max-h-32 overflow-y-auto space-y-1 pr-1 text-xs text-[#241812]/85">
                {items.map(({ item, quantity }) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{language === 'bn' ? item.nameBn : item.name} × {quantity}</span>
                    <span className="font-semibold">
                      {item.isFree ? 'FREE' : `৳${item.price * quantity}`}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-[#D96A27]/20 flex justify-between font-black text-sm text-[#241812]">
                <span>{t.cart.total}</span>
                <span className="text-[#D96A27] text-base">৳{total}</span>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleWhatsAppOrder} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#241812] uppercase tracking-wider">
                    {t.checkout.fullName} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.checkout.fullNamePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFF4DF] border border-[#D96A27]/30 focus:border-[#D96A27] focus:ring-2 focus:ring-[#D96A27]/20 text-sm font-medium text-[#241812] placeholder-[#241812]/40 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#241812] uppercase tracking-wider">
                    {t.checkout.phone} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.checkout.phonePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFF4DF] border border-[#D96A27]/30 focus:border-[#D96A27] focus:ring-2 focus:ring-[#D96A27]/20 text-sm font-medium text-[#241812] placeholder-[#241812]/40 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#241812] uppercase tracking-wider">
                  {t.checkout.address} *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder={t.checkout.addressPlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FFF4DF] border border-[#D96A27]/30 focus:border-[#D96A27] focus:ring-2 focus:ring-[#D96A27]/20 text-sm font-medium text-[#241812] placeholder-[#241812]/40 outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#241812] uppercase tracking-wider">
                  {t.checkout.instructions}
                </label>
                <textarea
                  name="specialInstructions"
                  rows={2}
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  placeholder={t.checkout.instructionsPlaceholder}
                  className="w-full px-4 py-2 rounded-xl bg-[#FFF4DF] border border-[#D96A27]/30 focus:border-[#D96A27] focus:ring-2 focus:ring-[#D96A27]/20 text-sm font-medium text-[#241812] placeholder-[#241812]/40 outline-none transition-all resize-none"
                />
              </div>

              {/* Order Options */}
              <div className="pt-2 space-y-3">
                <button
                  id="checkout-whatsapp-btn"
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#1ebd59] shadow-lg shadow-[#25D366]/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>{t.checkout.orderViaWhatsApp}</span>
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <button
                    id="checkout-foodpanda-btn"
                    type="button"
                    onClick={handleFoodpandaOrder}
                    className="py-3 px-4 rounded-xl bg-[#D70F64] text-white font-bold text-sm hover:bg-[#b80b54] shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t.checkout.orderViaFoodpanda}</span>
                  </button>

                  <button
                    id="checkout-pathao-btn"
                    type="button"
                    onClick={handlePathaoOrder}
                    className="py-3 px-4 rounded-xl bg-[#EB2227] text-white font-bold text-sm hover:bg-[#c9181d] shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t.checkout.orderViaPathao}</span>
                  </button>
                </div>

                <p className="text-center text-xs text-[#241812]/60 pt-1">
                  {t.checkout.directNotice}
                </p>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
