import React from 'react';
import { 
  FaGlobe, 
  FaCheckCircle, 
  FaVolumeUp, 
  FaArrowRight 
} from 'react-icons/fa';

export default function MultilingualSection({ t, lang, setLang }) {
  const languageList = [
    { name: 'English', code: 'EN' },
    { name: 'हिन्दी', code: 'HI' },
    { name: 'भोजपुरी', code: 'BHO' },
    { name: 'বাংলা', code: 'BN' },
    { name: 'ਪੰਜਾਬੀ', code: 'HI' }
  ];

  const demoCard = t.multilingual.demoCard || {
    title: "फसल स्वास्थ्य",
    badge: "HIGH RISK",
    desc: "मिट्टी में नमी कम है। अगले 6 घंटे में सिंचाई करने की सलाह दी जाती है।",
    btn: "पूरी सलाह देखें"
  };

  const handleLanguageClick = (code) => {
    if (setLang) {
      setLang(code);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="multilingual" className="section-padding border-b border-theme bg-card transition-colors duration-200">
      <div className="max-page-width space-y-10">
        
        {/* Eyebrow & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase">
            <FaGlobe className="w-3.5 h-3.5" />
            <span>{t.multilingual.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-main leading-tight">
            {t.multilingual.title}
          </h2>

          <p className="text-body text-muted text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            {t.multilingual.subtext}
          </p>
        </div>

        {/* Interactive Language Chips Grid */}
        <div className="space-y-3 max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold text-muted uppercase tracking-wider">
            Click any language to switch platform locale:
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {languageList.map((item, idx) => {
              const isSelected = (item.code === 'EN' && lang === 'EN') || (item.code === 'HI' && lang === 'HI');
              return (
                <button
                  key={idx}
                  onClick={() => handleLanguageClick(item.code)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all shadow-xs flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-primary text-white border-primary ring-2 ring-primary/30 scale-105'
                      : 'bg-alt border-theme text-main hover:border-primary/40 hover:text-primary hover:scale-105'
                  }`}
                >
                  <span>{item.name}</span>
                  {isSelected && <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded uppercase">Active</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content & Interactive UI Demo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Highlights Column */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-main">
              Localized Intelligence & Voice-Ready Architecture
            </h3>
            <ul className="space-y-3">
              {t.multilingual.highlights?.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-muted font-semibold">
                  <FaCheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-primary">
              <FaVolumeUp className="w-4 h-4" />
              <span>Voice input & text-to-speech output compatible</span>
            </div>
          </div>

          {/* Localized UI Card Example */}
          <div className="lg:col-span-6">
            <div className="bg-alt border border-theme rounded-2xl p-6 shadow-md space-y-5 max-w-sm mx-auto transition-all group">
              <div className="flex justify-between items-center border-b border-theme/60 pb-3">
                <span className="font-bold text-main text-base">{demoCard.title}</span>
                <span className="text-xs font-extrabold px-3 py-1 bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30 rounded-full uppercase tracking-wider">
                  {demoCard.badge}
                </span>
              </div>

              <p className="text-sm text-main leading-relaxed font-medium">
                {demoCard.desc}
              </p>

              <button className="w-full py-2.5 bg-primary text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-xs hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                <span>{demoCard.btn}</span>
                <FaArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Headline Summary */}
        <div className="text-center pt-4">
          <span className="px-5 py-2.5 rounded-full bg-alt border border-theme text-xs font-extrabold text-main uppercase tracking-wider shadow-xs">
            {t.multilingual.bottomLine}
          </span>
        </div>

      </div>
    </section>
  );
}
