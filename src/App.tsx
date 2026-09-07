/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { AIAssistantBanner } from './components/AIAssistantBanner';
import { Gallery } from './components/Gallery';
import { Offers } from './components/Offers';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Chatbot } from './components/Chatbot';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen bg-[#FFF4DF] text-[#241812] flex flex-col font-sans selection:bg-[#D96A27] selection:text-[#FFF4DF]">
          {/* Main Navigation Bar */}
          <Navbar />

          {/* Main Content Area */}
          <main className="flex-1">
            <Hero />
            <About />
            <Menu />
            <AIAssistantBanner onOpenChat={() => setIsChatOpen(true)} />
            <Gallery />
            <Offers />
            <Reviews />
            <Location />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Overlays & Drawers */}
          <CartDrawer />
          <CheckoutModal />
          <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}
