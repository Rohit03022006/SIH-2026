import React, { lazy, Suspense } from 'react';
import { FaMicrochip, FaWifi, FaGlobe, FaBroadcastTower, FaExclamationTriangle, FaBrain } from 'react-icons/fa';

import HeroSection from '../Components/Hero/HeroSection';
import Trust from '../Components/Hero/Trust';

// Lazy loaded below-the-fold sections for maximum performance
const ProblemSection = lazy(() => import('../Components/Hero/ProblemSection'));
const SolutionSection = lazy(() => import('../Components/Hero/SolutionSection'));
const HowItWorks = lazy(() => import('../Components/Hero/HowItWorks'));
const FeatureSection = lazy(() => import('../Components/Hero/FeatureSection'));
const DisasterSection = lazy(() => import('../Components/Hero/DisasterSection'));
const MultilingualSection = lazy(() => import('../Components/Hero/MultilingualSection'));
const OfflineSection = lazy(() => import('../Components/Hero/OfflineSection'));
const HardwareSection = lazy(() => import('../Components/Hero/HardwareSection'));
const ImpactSection = lazy(() => import('../Components/Hero/ImpactSection'));
const CTASection = lazy(() => import('../Components/Hero/CTASection'));

export default function Home({ t, lang, setLang }) {
  const SectionLoader = () => (
    <div className="py-16 flex items-center justify-center bg-alt text-muted text-xs font-bold uppercase tracking-widest animate-pulse">
      Loading Section...
    </div>
  );

  return (
    <div className="space-y-0 text-main bg-main transition-colors duration-200">
      <HeroSection t={t} />
      <Trust t={t} />
      
      <Suspense fallback={<SectionLoader />}>
        <ProblemSection t={t} />
        <SolutionSection t={t} />
        <HowItWorks t={t} />
        <FeatureSection t={t} />
        <DisasterSection t={t} />
        <MultilingualSection t={t} lang={lang} setLang={setLang} />
        <OfflineSection t={t} />

        {/* 5-Second Judge Summary Badge */}
        <div className="py-8 bg-card border-b border-theme transition-colors duration-200">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-3.5 rounded-2xl bg-alt border border-theme shadow-sm font-extrabold text-xs sm:text-sm text-main uppercase tracking-wider">
              <span className="flex items-center gap-1.5 text-primary">
                <FaMicrochip className="w-4 h-4 text-primary" /> EDGE AI
              </span>
              <span className="text-muted font-light">•</span>
              <span className="flex items-center gap-1.5 text-[#3B82F6]">
                <FaWifi className="w-4 h-4 text-[#3B82F6]" /> OFFLINE READY
              </span>
              <span className="text-muted font-light">•</span>
              <span className="flex items-center gap-1.5 text-[#EAB308]">
                <FaGlobe className="w-4 h-4 text-[#EAB308]" /> MULTILINGUAL
              </span>
              <span className="text-muted font-light">•</span>
              <span className="flex items-center gap-1.5 text-[#9333EA]">
                <FaBroadcastTower className="w-4 h-4 text-[#9333EA]" /> IoT
              </span>
              <span className="text-muted font-light">•</span>
              <span className="flex items-center gap-1.5 text-[#EF4444]">
                <FaExclamationTriangle className="w-4 h-4 text-[#EF4444]" /> EARLY WARNING
              </span>
              <span className="text-muted font-light">•</span>
              <span className="flex items-center gap-1.5 text-[#16A34A]">
                <FaBrain className="w-4 h-4 text-[#16A34A]" /> REAL-TIME
              </span>
            </div>
          </div>
        </div>

        <HardwareSection t={t} />
        <ImpactSection t={t} />
        <CTASection t={t} />
      </Suspense>
    </div>
  );
}
