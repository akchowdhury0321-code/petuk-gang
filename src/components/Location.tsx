import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { config } from '../config/restaurant';
import { MapPin, Navigation, Phone, ExternalLink } from 'lucide-react';

export const Location: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="location" className="py-20 bg-[#FFF4DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D96A27]/10 border border-[#D96A27]/25 text-[#D96A27] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.location.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#241812] tracking-tight uppercase">
            {t.location.title}
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-[#D96A27] italic">
            "{t.location.subtitle}"
          </p>
          <div className="w-20 h-1.5 bg-[#D96A27] rounded-full mx-auto" />
        </div>

        {/* Location & Map Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Details Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#FFF4DF] border-2 border-[#D96A27]/25 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold text-[#D96A27] uppercase tracking-wider">
                {t.location.addressTitle}
              </span>
              <h3 className="text-2xl font-black text-[#241812] mt-1">
                {language === 'bn' ? config.restaurantNameBn : config.restaurantName}
              </h3>
              <p className="text-base text-[#241812]/80 mt-1 font-medium">
                {language === 'bn' ? config.fullAddressBn : config.fullAddress}
              </p>
            </div>

            <p className="text-sm text-[#241812]/70 leading-relaxed">
              {t.location.mapNotice}
            </p>

            <div className="pt-4 border-t border-[#D96A27]/20 flex flex-col sm:flex-row gap-3">
              <a
                id="get-directions-btn"
                href={config.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#D96A27] text-[#FFF4DF] font-bold text-sm hover:bg-[#B85317] shadow-lg shadow-[#D96A27]/20 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>{t.location.getDirections}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent border-2 border-[#D96A27] text-[#D96A27] font-bold text-sm hover:bg-[#D96A27] hover:text-[#FFF4DF] transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>{t.location.contactUs}</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Area */}
          <div className="lg:col-span-7 h-[360px] sm:h-[420px] rounded-3xl overflow-hidden border-2 border-[#D96A27]/30 shadow-2xl relative bg-[#241812]/10 group">
            {/* Embedded Google Maps responsive iframe centered at Patharghata, Chattogram */}
            <iframe
              title="Petuk Gang Location Map"
              src="https://maps.google.com/maps?q=Patharghata,+Chattogram,+Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter contrast-[1.05] saturate-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            {/* Overlay Marker Card */}
            <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[#FFF4DF]/95 backdrop-blur-md border border-[#D96A27]/30 shadow-lg flex items-center gap-3 pointer-events-none">
              <div className="w-8 h-8 rounded-xl bg-[#D96A27] text-[#FFF4DF] flex items-center justify-center font-bold">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="font-extrabold text-xs text-[#241812]">
                  {language === 'bn' ? config.restaurantNameBn : config.restaurantName}
                </p>
                <p className="text-[10px] text-[#241812]/70 font-semibold">
                  {language === 'bn' ? 'পাথরঘাটা, চট্টগ্রাম' : 'Patharghata, Chattogram'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
