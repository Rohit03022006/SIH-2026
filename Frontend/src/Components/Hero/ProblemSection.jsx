import React from 'react';
import { 
  FaBug, 
  FaTintSlash, 
  FaFlask, 
  FaTemperatureHigh, 
  FaUserNurse, 
  FaWifi,
  FaExclamationTriangle
} from 'react-icons/fa';

export default function ProblemSection({ t }) {
  const cardIcons = [
    <FaBug className="w-5 h-5 text-[#EF4444]" />,
    <FaTintSlash className="w-5 h-5 text-[#F97316]" />,
    <FaFlask className="w-5 h-5 text-[#EAB308]" />,
    <FaTemperatureHigh className="w-5 h-5 text-[#DC2626]" />,
    <FaUserNurse className="w-5 h-5 text-[#3B82F6]" />,
    <FaWifi className="w-5 h-5 text-[#6B7280]" />
  ];

  return (
    <section className="border-b border-theme section-padding bg-alt transition-colors duration-200">
      <div className="max-page-width space-y-10">
        
        {/* Eyebrow + Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/20 text-[#EF4444] text-xs font-bold tracking-wider uppercase">
            <FaExclamationTriangle className="w-3.5 h-3.5" />
            <span>CRITICAL CHALLENGES</span>
          </div>

          <h2 className="text-h2 font-extrabold text-main leading-tight">
            {t.problem.title}
          </h2>
        </div>

        {/* 4 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.problem.cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-card border border-theme card-spec space-y-4 shadow-sm hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/20 flex items-center justify-center font-bold text-sm shadow-xs">
                    {cardIcons[idx % cardIcons.length]}
                  </div>
                  <span className="text-xs font-extrabold text-muted/60 font-mono tracking-wider">
                    PROBLEM 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-h3 text-main group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-body-spec text-muted leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
