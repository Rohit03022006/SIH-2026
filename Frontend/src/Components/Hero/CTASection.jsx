import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaShieldAlt, FaExclamationTriangle } from 'react-icons/fa';

export default function CTASection({ t }) {
  const c = t.cta || {};

  return (
    <section className="section-padding bg-alt border-b border-theme transition-colors duration-200 relative overflow-hidden">
      <div className="max-page-width space-y-10">
        
        {/* Main CTA Card Container */}
        <div className="bg-card border border-theme card-spec p-8 sm:p-12 shadow-xl space-y-8 relative overflow-hidden">
          
          {/* Top Eyebrow */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-widest uppercase">
              <FaShieldAlt className="w-3.5 h-3.5" />
              <span>{c.eyebrow}</span>
            </div>

            <p className="text-xs font-black text-muted uppercase tracking-widest">
              {c.topTitle}
            </p>

            <h2 className="text-h2 font-black text-main tracking-tight max-w-3xl mx-auto leading-tight">
              {c.title}
            </h2>

            <p className="text-body-spec font-medium text-muted max-w-2xl mx-auto leading-relaxed">
              {c.subtext}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/login"
              className="btn-spec w-full sm:w-auto bg-primary text-white dark:text-[#0D140E] uppercase tracking-wider shadow-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{c.primary}</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#"
              className="btn-spec w-full sm:w-auto bg-alt border border-theme text-main uppercase tracking-wider hover:border-primary/40 transition-all flex items-center justify-center cursor-pointer"
            >
              <span>{c.secondary}</span>
            </a>
          </div>

          {/* Supporting Points */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
            {c.supportingPoints?.map((pt, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-extrabold text-main">
                <FaCheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          
        </div>

        {/* Bottom Tagline */}
        <div className="text-center font-bold text-xs text-muted uppercase tracking-widest">
          {c.bottomTagline}
        </div>

      </div>
    </section>
  );
}
