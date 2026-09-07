import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu as MenuIcon, X, UtensilsCrossed, Globe } from 'lucide-react';
import { config } from '../config/restaurant';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { itemCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.menu, href: '#menu' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.offers, href: '#offers' },
    { name: t.nav.reviews, href: '#reviews' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF4DF]/95 backdrop-blur-md py-3 shadow-md border-b border-[#D96A27]/20'
          : 'bg-[#FFF4DF] py-5 border-b border-[#D96A27]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#home"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#D96A27] text-[#FFF4DF] flex items-center justify-center font-bold shadow-md shadow-[#D96A27]/20 transition-transform group-hover:scale-105">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#241812] uppercase leading-none">
                {language === 'bn' ? config.restaurantNameBn : config.restaurantName}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#D96A27] uppercase">
                {language === 'bn' ? 'পাথরঘাটা • চট্টগ্রাম' : 'Patharghata • Chattogram'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-[#241812]/80 hover:text-[#D96A27] hover:bg-[#D96A27]/10 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions: Language Switcher, Cart Button, Order Now */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Language Switch */}
            <button
              id="lang-toggle-btn"
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-[#D96A27]/30 bg-[#FFF4DF] text-[#D96A27] hover:bg-[#D96A27] hover:text-[#FFF4DF] transition-all cursor-pointer"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'বাংলা' : 'EN'}</span>
            </button>

            {/* Cart Trigger */}
            <button
              id="cart-drawer-trigger"
              onClick={() => setIsCartOpen(true)}
              type="button"
              className="relative p-2.5 rounded-xl bg-[#FFF4DF] border border-[#D96A27]/30 text-[#241812] hover:border-[#D96A27] hover:bg-[#D96A27]/10 transition-all cursor-pointer"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5 text-[#D96A27]" />
              {itemCount > 0 && (
                <span
                  id="cart-badge-count"
                  className="absolute -top-1.5 -right-1.5 bg-[#D96A27] text-[#FFF4DF] text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-pulse"
                >
                  {itemCount}
                </span>
              )}
            </button>

            {/* Desktop Order Now Button */}
            <a
              id="navbar-order-btn"
              href="#menu"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-bold rounded-xl bg-[#D96A27] text-[#FFF4DF] hover:bg-[#B85317] transition-all shadow-md shadow-[#D96A27]/20 hover:shadow-lg hover:shadow-[#D96A27]/30 hover:-translate-y-0.5 cursor-pointer"
            >
              {t.nav.orderNow}
            </a>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-xl text-[#241812] hover:bg-[#D96A27]/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-dropdown-menu"
            className="lg:hidden mt-3 pt-3 border-t border-[#D96A27]/15 flex flex-col space-y-2 pb-3 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-[#241812] hover:bg-[#D96A27]/10 hover:text-[#D96A27] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between gap-3">
              <a
                href="#menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 font-bold rounded-xl bg-[#D96A27] text-[#FFF4DF] shadow-md text-sm"
              >
                {t.nav.orderNow}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
