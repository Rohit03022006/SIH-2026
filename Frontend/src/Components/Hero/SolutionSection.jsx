import React from 'react';
import { 
  FaCamera, 
  FaBroadcastTower, 
  FaCloudSun, 
  FaBrain, 
  FaUserCheck, 
  FaLightbulb,
  FaArrowRight,
  FaArrowDown,
  FaBug,
  FaWater,
  FaFlask,
  FaShieldAlt,
  FaTemperatureHigh,
  FaRobot,
  FaWifi
} from 'react-icons/fa';

export default function SolutionSection({ t }) {
  const solutionIcons = [
    <FaBug className="w-5 h-5 text-primary" />,
    <FaWater className="w-5 h-5 text-[#2563EB]" />,
    <FaFlask className="w-5 h-5 text-[#EAB308]" />,
    <FaShieldAlt className="w-5 h-5 text-[#EF4444]" />,
    <FaTemperatureHigh className="w-5 h-5 text-[#F97316]" />,
    <FaRobot className="w-5 h-5 text-[#9333EA]" />,
    <FaWifi className="w-5 h-5 text-[#16A34A]" />
  ];

  return (
    <section id="solution" className="section-padding border-b border-theme bg-card transition-colors duration-200">
      <div className="max-page-width space-y-10">
        
        {/* Eyebrow & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase">
            <FaLightbulb className="w-3.5 h-3.5" />
            <span>{t.solution.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-main leading-tight">
            {t.solution.title}
          </h2>

          <p className="text-body text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            {t.solution.subtext}
          </p>
        </div>

        {/* Horizontal Solution Diagram */}
        <div className="bg-alt border border-theme rounded-3xl p-6 sm:p-10 max-w-6xl mx-auto shadow-sm transition-colors relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Stage 1: Data Inputs */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs font-bold text-muted uppercase tracking-widest text-center lg:text-left">
                {t.solution.step1}
              </p>

              <div className="space-y-2.5">
                <div className="bg-card border border-theme rounded-xl p-3.5 flex items-center gap-3 shadow-xs hover:border-primary/50 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <FaCamera className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-main block">{t.solution.camera}</span>
                    <span className="text-[11px] text-muted">{t.solution.cameraDesc}</span>
                  </div>
                </div>

                <div className="bg-card border border-theme rounded-xl p-3.5 flex items-center gap-3 shadow-xs hover:border-primary/50 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-[#F97316]/10 text-[#F97316] flex items-center justify-center shrink-0">
                    <FaBroadcastTower className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-main block">{t.solution.sensors}</span>
                    <span className="text-[11px] text-muted">{t.solution.sensorsDesc}</span>
                  </div>
                </div>

                <div className="bg-card border border-theme rounded-xl p-3.5 flex items-center gap-3 shadow-xs hover:border-primary/50 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
                    <FaCloudSun className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-main block">{t.solution.weather}</span>
                    <span className="text-[11px] text-muted">{t.solution.weatherDesc}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector Arrow 1 */}
            <div className="lg:col-span-1 flex justify-center py-2 lg:py-0">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                <FaArrowRight className="hidden lg:block w-4 h-4 animate-pulse" />
                <FaArrowDown className="block lg:hidden w-4 h-4 animate-pulse" />
              </div>
            </div>

            {/* Stage 2: Central AI Engine */}
            <div className="lg:col-span-3 text-center space-y-3">
              <p className="text-xs font-bold text-muted uppercase tracking-widest">
                {t.solution.step2}
              </p>

              <div className="bg-primary text-white dark:text-[#0D140E] rounded-2xl p-6 space-y-3 shadow-md border border-primary/40 flex flex-col items-center justify-center min-h-[160px]">
                <FaBrain className="w-10 h-10 text-white dark:text-[#0D140E]" />
                <div>
                  <h4 className="font-extrabold text-base uppercase tracking-wider">{t.solution.engineTitle}</h4>
                  <p className="text-xs opacity-90 mt-1 font-medium">{t.solution.engineDesc}</p>
                </div>
              </div>
            </div>

            {/* Connector Arrow 2 */}
            <div className="lg:col-span-1 flex justify-center py-2 lg:py-0">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                <FaArrowRight className="hidden lg:block w-4 h-4 animate-pulse" />
                <FaArrowDown className="block lg:hidden w-4 h-4 animate-pulse" />
              </div>
            </div>

            {/* Stage 3: Actionable Outcome */}
            <div className="lg:col-span-3 text-center space-y-3">
              <p className="text-xs font-bold text-muted uppercase tracking-widest">
                {t.solution.step3}
              </p>

              <div className="bg-card border border-primary/30 rounded-2xl p-6 space-y-3 shadow-xs flex flex-col items-center justify-center min-h-[160px]">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <FaUserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-primary uppercase tracking-wider">{t.solution.advisoryTitle}</h4>
                  <p className="text-xs text-muted mt-1 font-medium">{t.solution.advisoryDesc}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 7 Solution Pillar Feature Cards Grid */}
        {t.solution.cards && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {t.solution.cards.map((card, idx) => (
              <div 
                key={idx}
                className={`bg-alt border border-theme rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-all ${idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-card border border-theme flex items-center justify-center shadow-xs">
                    {solutionIcons[idx % solutionIcons.length]}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-main">
                  {card.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
