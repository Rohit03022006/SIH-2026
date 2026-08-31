import React from 'react';
import { 
  FaBroadcastTower, 
  FaBrain, 
  FaWifi, 
  FaGlobe, 
  FaExclamationTriangle, 
  FaMicrochip 
} from 'react-icons/fa';

export default function Trust({ t }) {
  return (
    <section className="bg-primary text-white dark:text-[#0D140E] py-4 overflow-hidden border-y border-primary/40">
      <div className="w-full">
        <div className="animate-marquee flex items-center gap-12 text-xs font-bold tracking-widest uppercase whitespace-nowrap">
          {[1, 2, 3, 4].map((setIndex) => (
            <React.Fragment key={setIndex}>
              {t.trustStrip.map((item, idx) => {
                const icons = [
                  <FaMicrochip key={0} className="w-4.5 h-4.5 text-[#38BDF8] dark:text-[#0284C7] shrink-0" />,       /* Edge AI - Cyan/Blue */
                  <FaBroadcastTower key={1} className="w-4.5 h-4.5 text-[#FACC15] dark:text-[#CA8A04] shrink-0" />,  /* Smart IoT - Yellow */
                  <FaBrain key={2} className="w-4.5 h-4.5 text-[#C084FC] dark:text-[#9333EA] shrink-0" />,           /* Risk Engine - Purple */
                  <FaWifi key={3} className="w-4.5 h-4.5 text-[#4ADE80] dark:text-[#16A34A] shrink-0" />,            /* Offline Ready - Light Green */
                  <FaGlobe key={4} className="w-4.5 h-4.5 text-[#FB923C] dark:text-[#EA580C] shrink-0" />,           /* Multilingual - Orange */
                  <FaExclamationTriangle key={5} className="w-4.5 h-4.5 text-[#F87171] dark:text-[#DC2626] shrink-0" /> /* Early Warning - Red */
                ];
                return (
                  <div key={`set${setIndex}-${idx}`} className="flex items-center gap-2.5">
                    {icons[idx % icons.length]}
                    <span>{item}</span>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
