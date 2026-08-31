import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBrain
} from 'react-icons/fa';
import { FarmDashboardMockup } from './PreviewSection';

export default function HeroSection({ t }) {
  return (
    <section className="border-b border-theme section-padding bg-gradient-to-b from-alt to-main transition-colors duration-200">
      <div className="max-page-width">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] sm:text-xs font-bold tracking-wider uppercase">
              <FaBrain className="w-3.5 h-3.5" />
              <span>{t.hero.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-main leading-tight tracking-tight">
              {t.hero.headline}
            </h1>

            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-xl">
              {t.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/login"
                className="btn-spec bg-primary hover:opacity-95 text-white dark:text-[#0D140E] shadow-sm transition-all cursor-pointer text-center"
              >
                <span>{t.hero.ctaPrimary}</span>
              </Link>
              
              <a
                href="#how-it-works"
                className="btn-spec border border-theme bg-card hover:bg-alt text-main transition-all cursor-pointer text-center"
              >
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            <p className="text-[11px] sm:text-xs font-semibold text-muted uppercase tracking-wider pt-1">
              {t.hero.badges}
            </p>
          </div>

          {/* Right Hero Column: PreviewSection / Farm Dashboard Mockup */}
          <div className="lg:col-span-6 w-full max-w-2xl mx-auto lg:max-w-none">
            <FarmDashboardMockup t={t} compact={true} />
          </div>

        </div>
      </div>
    </section>
  );
}
