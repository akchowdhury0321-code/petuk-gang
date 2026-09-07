import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { config } from '../config/restaurant';
import { MENU_ITEMS } from '../data/menu';
import { MenuItem, ChatMessage } from '../types';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  MapPin,
  Plus,
  Check,
  RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ChatbotProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ isOpen, setIsOpen }) => {
  const { language, t } = useLanguage();
  const { addItem, setIsCartOpen } = useCart();

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      sender: 'assistant',
      text: t.chatbot.openingMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // If language changes, ensure welcome message matches if only 1 message
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [
          {
            id: 'welcome',
            sender: 'assistant',
            text: t.chatbot.openingMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ];
      }
      return prev;
    });
  }, [language, t.chatbot.openingMessage]);

  const detectSuggestedItems = (text: string): MenuItem[] => {
    const lower = text.toLowerCase();
    const matches: MenuItem[] = [];
    MENU_ITEMS.forEach((item) => {
      const name = item.name.toLowerCase();
      const nameBn = item.nameBn.toLowerCase();
      if (lower.includes(name) || lower.includes(nameBn)) {
        if (!matches.some((m) => m.id === item.id)) {
          matches.push(item);
        }
      }
    });
    return matches;
  };

  const handleSendMessage = async (textToSend?: string) => {
    const userText = (textToSend || input).trim();
    if (!userText || loading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          history: messages,
          language,
        }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      const replyText: string = data.text || t.chatbot.fallbackNotice;

      const suggested = detectSuggestedItems(replyText);
      const hasDirections =
        replyText.toLowerCase().includes('directions') ||
        replyText.toLowerCase().includes('patharghata') ||
        replyText.includes('ম্যাপ') ||
        replyText.includes('পাথরঘাটা');

      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedItems: suggested.length > 0 ? suggested : undefined,
        showDirections: hasDirections,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      // Friendly fallback as specified
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          sender: 'assistant',
          text: t.chatbot.fallbackNotice,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddSuggestedToCart = (item: MenuItem) => {
    addItem(item);
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const quickActions = [
    { label: t.chatbot.quickActions.recommend, query: language === 'bn' ? 'ক্ষুধা লেগেছে, কিছু সাজেস্ট করো' : 'I am hungry, recommend something delicious' },
    { label: t.chatbot.quickActions.budget300, query: language === 'bn' ? 'আমার বাজেট ৩০০ টাকা, কি কম্বো নেওয়া যায়?' : 'I have 300 taka, what can I get?' },
    { label: t.chatbot.quickActions.bill, query: language === 'bn' ? '২ ভাত, ১ গরুর মাংস, ২ ভর্তা বিল কত?' : 'Calculate my bill: 2 rice, 1 beef, 2 bhorta' },
    { label: t.chatbot.quickActions.menu, query: language === 'bn' ? 'পেটুক গ্যাং-এর পুরো মেনু দেখাও' : 'Show the full Petuk Gang menu and prices' },
    { label: t.chatbot.quickActions.location, query: language === 'bn' ? 'তোমাদের রেস্তোরাঁ কোথায়?' : 'Where is Petuk Gang located?' },
    { label: t.chatbot.quickActions.helpOrder, query: language === 'bn' ? 'কিভাবে সহজে অর্ডার করব?' : 'Help me place an order' },
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <div id="ai-floating-container" className="fixed bottom-6 right-6 z-40">
        <motion.button
          id="ask-petuk-ai-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#D96A27] text-[#FFF4DF] font-black text-sm sm:text-base shadow-2xl shadow-[#D96A27]/40 hover:bg-[#B85317] border-2 border-[#FFF4DF] cursor-pointer transition-all"
          aria-label="Ask Petuk AI"
        >
          <Bot className="w-5 h-5 text-[#FFF4DF] animate-bounce" />
          <span>{language === 'bn' ? 'পেটুক এআই 🤖' : 'Ask Petuk AI 🤖'}</span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        </motion.button>
      </div>

      {/* Slide-Up Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="petuk-ai-chat-panel"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-20 right-4 sm:right-6 w-[94vw] sm:w-[420px] max-h-[82vh] h-[600px] bg-[#FFF4DF] rounded-3xl shadow-2xl border-2 border-[#D96A27]/30 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-[#D96A27] text-[#FFF4DF] flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-[#FFF4DF] text-[#D96A27] flex items-center justify-center font-bold shadow-sm">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold text-sm sm:text-base tracking-tight leading-none">
                      {t.chatbot.headerTitle}
                    </h3>
                    <span className="text-[10px] bg-emerald-500 text-white font-bold px-2 py-0.5 rounded-full">
                      {t.chatbot.statusOnline}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#FFF4DF]/80 font-medium mt-0.5">
                    {t.chatbot.headerSubtitle}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-black/15 text-[#FFF4DF] transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Action Chips */}
            <div className="p-2.5 bg-[#FFF4DF] border-b border-[#D96A27]/15 overflow-x-auto flex gap-1.5 scrollbar-none">
              {quickActions.map((qa, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSendMessage(qa.query)}
                  className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#D96A27]/10 text-[#D96A27] hover:bg-[#D96A27] hover:text-[#FFF4DF] transition-all whitespace-nowrap border border-[#D96A27]/20 flex-shrink-0 cursor-pointer"
                >
                  {qa.label}
                </button>
              ))}
            </div>

            {/* Message History */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#FFF4DF]">
              {messages.map((msg) => {
                const isUser = msg.sender === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                        isUser
                          ? 'bg-[#D96A27] text-[#FFF4DF] rounded-br-none font-medium'
                          : 'bg-[#FFF4DF] border border-[#D96A27]/30 text-[#241812] rounded-bl-none shadow-md'
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>

                      {/* Actionable buttons if suggested items found */}
                      {msg.suggestedItems && msg.suggestedItems.length > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-[#D96A27]/20 space-y-1.5">
                          <span className="text-[11px] font-bold text-[#D96A27] uppercase tracking-wider block">
                            {language === 'bn' ? 'সরাসরি কার্টে যোগ করুন:' : 'Add to your feast:'}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {msg.suggestedItems.map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => handleAddSuggestedToCart(item)}
                                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                  addedItems[item.id]
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-[#D96A27] text-[#FFF4DF] hover:bg-[#B85317]'
                                }`}
                              >
                                {addedItems[item.id] ? (
                                  <>
                                    <Check className="w-3 h-3" />
                                    <span>{language === 'bn' ? 'যোগ হয়েছে' : 'Added'}</span>
                                  </>
                                ) : (
                                  <>
                                    <Plus className="w-3 h-3" />
                                    <span>
                                      {language === 'bn' ? item.nameBn : item.name} (
                                      {item.isFree ? 'FREE' : `৳${item.price}`})
                                    </span>
                                  </>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Direction Link Button */}
                      {msg.showDirections && (
                        <div className="mt-2.5 pt-2 border-t border-[#D96A27]/20">
                          <a
                            href={config.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#241812] text-[#FFF4DF] text-xs font-bold hover:bg-[#D96A27] transition-colors"
                          >
                            <MapPin className="w-3.5 h-3.5 text-[#D96A27]" />
                            <span>{t.chatbot.getDirections}</span>
                          </a>
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-[#241812]/50 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                );
              })}

              {loading && (
                <div className="flex items-center space-x-2 text-[#D96A27] p-2 bg-[#FFF4DF] rounded-xl border border-[#D96A27]/20 w-28">
                  <div className="w-2 h-2 rounded-full bg-[#D96A27] animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-[#D96A27] animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-[#D96A27] animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-[#FFF4DF] border-t border-[#D96A27]/20">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.chatbot.inputPlaceholder}
                  className="flex-1 px-4 py-2.5 rounded-2xl bg-[#FFF4DF] border border-[#D96A27]/35 focus:border-[#D96A27] focus:ring-2 focus:ring-[#D96A27]/20 text-sm font-medium text-[#241812] placeholder-[#241812]/40 outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="w-10 h-10 rounded-2xl bg-[#D96A27] text-[#FFF4DF] flex items-center justify-center disabled:opacity-40 hover:bg-[#B85317] transition-all flex-shrink-0 cursor-pointer shadow-md"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
