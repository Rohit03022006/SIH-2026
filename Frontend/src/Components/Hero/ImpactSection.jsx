import React from 'react';
import { 
  FaSearchPlus, 
  FaTint, 
  FaShieldAlt, 
  FaExclamationTriangle, 
  FaUserCheck, 
  FaGlobe,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

export default function ImpactSection({ t }) {
  const imp = t.impact || {};

  const icons = [
    <FaSearchPlus className="w-5 h-5 text-primary" />,
    <FaTint className="w-5 h-5 text-[#3B82F6]" />,
    <FaShieldAlt className="w-5 h-5 text-[#22C55E]" />,
    <FaExclamationTriangle className="w-5 h-5 text-[#EAB308]" />,
    <FaUserCheck className="w-5 h-5 text-[#9333EA]" />,
    <FaGlobe className="w-5 h-5 text-primary" />
  ];

  return (
    <section id="impact" className="section-padding border-b border-theme bg-card transition-colors duration-200">
      <div className="max-page-width space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase">
            <FaShieldAlt className="w-3.5 h-3.5" />
            <span>{imp.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-main leading-tight">
            {imp.title}
          </h2>

          <p className="text-body text-muted text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            {imp.subtext}
          </p>

          {/* 4 Minimal Pillar Highlights */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2">
            {imp.fourPillars?.map((pillar, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 bg-alt border border-theme rounded-xl text-xs font-extrabold text-main shadow-2xs flex items-center gap-2"
              >
                <FaCheckCircle className="w-3.5 h-3.5 text-primary" />
                <span>{pillar}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 6 Impact Areas (3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {imp.areas?.map((area, idx) => (
            <div 
              key={idx} 
              className="bg-alt border border-theme hover:border-primary/40 rounded-2xl p-6 space-y-3 shadow-2xs hover:shadow-md transition-all group"
            >
              {/* Icon and Title Side-by-Side */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-card border border-theme flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                  {icons[idx]}
                </div>
                <h3 className="text-lg font-extrabold text-main leading-snug">
                  {area.title}
                </h3>
              </div>

              <p className="text-xs text-muted font-medium leading-relaxed pt-1">
                {area.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Value Chain (Single Line Flow) */}
        <div className="max-w-6xl mx-auto bg-alt border border-theme rounded-2xl p-6 space-y-4 shadow-xs">
          <h4 className="text-xs font-extrabold text-muted uppercase tracking-wider text-center">
            {imp.chainTitle}
          </h4>

          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 text-xs sm:text-sm font-extrabold no-scrollbar">
            {imp.chainSteps?.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="px-3.5 py-2 rounded-xl bg-card border border-theme text-main shadow-2xs flex items-center gap-2 whitespace-nowrap shrink-0">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>{step}</span>
                </div>
                {idx < imp.chainSteps.length - 1 && (
                  <FaArrowRight className="w-3.5 h-3.5 text-primary shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
