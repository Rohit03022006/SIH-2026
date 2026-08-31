import React from 'react';
import { 
  FaBug, 
  FaFlask, 
  FaWater, 
  FaShieldAlt, 
  FaCloudShowersHeavy, 
  FaWifi,
  FaCheckCircle,
  FaCogs,
  FaLayerGroup
} from 'react-icons/fa';

export default function FeatureSection({ t }) {
  const featureIcons = [
    <FaBug className="w-5 h-5 text-primary" />,
    <FaFlask className="w-5 h-5 text-[#EAB308]" />,
    <FaWater className="w-5 h-5 text-[#2563EB]" />,
    <FaShieldAlt className="w-5 h-5 text-[#EF4444]" />,
    <FaCloudShowersHeavy className="w-5 h-5 text-[#F97316]" />,
    <FaWifi className="w-5 h-5 text-[#16A34A]" />
  ];

  return (
    <section id="features" className="border-b border-theme section-padding bg-card transition-colors duration-200">
      <div className="max-page-width space-y-10">
        
        {/* Eyebrow & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase">
            <FaLayerGroup className="w-3.5 h-3.5" />
            <span>{t.features.eyebrow}</span>
          </div>

          <h2 className="text-h2 font-extrabold text-main leading-tight">
            {t.features.title}
          </h2>

          <p className="text-body-spec text-muted font-medium leading-relaxed max-w-2xl mx-auto">
            {t.features.subtext}
          </p>
        </div>

        {/* 6 Core Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.features.items.map((item, idx) => (
            <div 
              key={item.id || idx} 
              className="bg-alt border border-theme card-spec space-y-4 shadow-sm hover:shadow-md transition-all group relative"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-card border border-theme flex items-center justify-center font-bold shadow-xs">
                  {featureIcons[idx % featureIcons.length]}
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-h3 text-main group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-body-spec text-muted leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Separately Highlighted Additional Operations Bar */}
        {t.features.additionalItems && (
          <div className="bg-alt border border-theme rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto text-center space-y-4 shadow-xs">
            <p className="text-xs font-extrabold text-muted uppercase tracking-widest">
              {t.features.additionalTitle}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {t.features.additionalItems.map((op, i) => (
                <div key={i} className="px-4 py-2 bg-card border border-theme rounded-xl text-xs font-bold text-main flex items-center gap-2 shadow-2xs">
                  <FaCheckCircle className="w-3.5 h-3.5 text-primary" />
                  <span>{op}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
