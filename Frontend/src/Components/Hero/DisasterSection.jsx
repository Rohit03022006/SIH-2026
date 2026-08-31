import React from 'react';
import {
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaSun,
  FaTemperatureHigh,
  FaCloudShowersHeavy
} from 'react-icons/fa';

export default function DisasterSection({ t }) {
  const disasterIcons = {
    drought: <FaSun className="w-8 h-8 text-[#F97316]" />,
    heat: <FaTemperatureHigh className="w-8 h-8 text-[#EF4444]" />,
    flood: <FaCloudShowersHeavy className="w-8 h-8 text-[#2563EB]" />
  };

  const getRiskBadge = (riskColor, label) => {
    switch (riskColor) {
      case 'high':
        return (
          <span className="px-3 py-1 rounded-full bg-[#EF4444]/15 border border-[#EF4444]/30 text-[#EF4444] text-xs font-extrabold uppercase tracking-wider">
            {label}
          </span>
        );
      case 'medium':
        return (
          <span className="px-3 py-1 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/30 text-[#EAB308] text-xs font-extrabold uppercase tracking-wider">
            {label}
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 rounded-full bg-[#16A34A]/15 border border-[#16A34A]/30 text-[#16A34A] text-xs font-extrabold uppercase tracking-wider">
            {label}
          </span>
        );
    }
  };

  return (
    <section id="disasters" className="section-padding border-b border-theme bg-alt transition-colors duration-200">
      <div className="max-page-width space-y-10">

        {/* Eyebrow & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/20 text-[#EF4444] text-xs font-bold tracking-wider uppercase">
            <FaShieldAlt className="w-3.5 h-3.5" />
            <span>{t.disaster.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-main leading-tight">
            {t.disaster.title}
          </h2>

          <p className="text-body text-muted text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            {t.disaster.subtext}
          </p>
        </div>

        {/* 3 Disaster Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.disaster.cards.map((card) => (
            <div
              key={card.id}
              className="bg-card border border-theme rounded-2xl p-6 sm:p-7 space-y-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Header & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-alt border border-theme flex items-center justify-center shadow-2xs">
                    {disasterIcons[card.id] || <FaShieldAlt className="w-7 h-7 text-primary" />}
                  </div>
                  {getRiskBadge(card.riskColor, card.risk)}
                </div>

                <h3 className="text-2xl font-bold text-main group-hover:text-primary transition-colors">
                  {card.title}
                </h3>

                {/* Point Parameters */}
                <ul className="space-y-2.5 pt-2  ">
                  {card.points.map((pt, idx) => (
                    <li key={idx} className="text-xs text-muted font-semibold flex items-start gap-2.5">
                      <FaCheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-theme">
                <button className="w-full py-2.5 px-4 bg-alt hover:bg-primary/10 text-main hover:text-primary border border-theme hover:border-primary/40 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn">
                  <span>{card.btn}</span>
                  <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Headline Summary Line */}
        <div className="bg-card border border-theme rounded-2xl p-5 max-w-4xl mx-auto text-center space-y-2 shadow-xs">
          <p className="text-sm sm:text-base font-extrabold text-main uppercase tracking-wider">
            {t.disaster.bottomLine}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-muted uppercase tracking-widest pt-1">
            <span>Sensors + Weather + Edge AI</span>
            <FaArrowRight className="w-3 h-3 text-primary" />
            <span>Risk Engine</span>
            <FaArrowRight className="w-3 h-3 text-primary" />
            <span className="text-primary">Early Warning Alert</span>
          </div>
        </div>

      </div>
    </section>
  );
}
