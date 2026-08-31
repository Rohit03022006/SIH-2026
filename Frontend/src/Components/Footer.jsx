import React from 'react';
import { GiWheat } from 'react-icons/gi';

export default function Footer({ t }) {
  return (
    <footer className="bg-alt border-t border-theme text-main transition-colors duration-200 py-8 sm:py-10">
      <div className="max-page-width space-y-6 sm:space-y-8">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-theme pb-6 sm:pb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#22c55e] text-black flex items-center justify-center font-bold shrink-0 shadow-md border border-green-400/30">
              <GiWheat className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-extrabold text-main">KrishiRakshak</span>
              <p className="text-xs text-muted font-medium line-clamp-1">AI-Powered Agricultural Intelligence & Disaster Warning System</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 text-[11px] sm:text-xs text-muted font-extrabold uppercase tracking-wider">
            <a href="#how-it-works" className="hover:text-primary transition-colors cursor-pointer">{t.nav.howItWorks}</a>
            <a href="#features" className="hover:text-primary transition-colors cursor-pointer">{t.nav.features}</a>
            <a href="#impact" className="hover:text-primary transition-colors cursor-pointer">{t.nav.impact}</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-muted gap-3 font-medium">
          <p className="max-w-xl">KrishiRakshak - Early crop threat detection, water conservation, and climate risk resilience.</p>
          <p className="shrink-0">© 2026 KrishiRakshak • Smart India Hackathon Project</p>
        </div>

      </div>
    </footer>
  );
}
