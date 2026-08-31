import React from 'react';
import {
    FaCamera,
    FaBrain,
    FaShieldAlt,
    FaLightbulb,
    FaBell,
    FaArrowRight,
    FaArrowDown,
    FaCogs
} from 'react-icons/fa';

export default function HowItWorks({ t }) {
    const stepIcons = [
        <FaCamera className="w-5 h-5 text-primary" />,
        <FaBrain className="w-5 h-5 text-[#3B82F6]" />,
        <FaShieldAlt className="w-5 h-5 text-[#EF4444]" />,
        <FaLightbulb className="w-5 h-5 text-[#EAB308]" />,
        <FaBell className="w-5 h-5 text-[#16A34A]" />
    ];

    return (
        <section id="how-it-works" className="section-padding border-b border-theme bg-alt transition-colors duration-200">
            <div className="max-page-width space-y-10">

                {/* Eyebrow & Header */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    {t.howItWorks?.eyebrow && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase">
                            <FaCogs className="w-3.5 h-3.5 text-primary" />
                            <span>{t.howItWorks.eyebrow}</span>
                        </div>
                    )}

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-main">
                        {t.howItWorks.title}
                    </h2>

                    <p className="text-body text-muted text-lg font-medium">
                        {t.howItWorks.subtext}
                    </p>
                </div>

                {/* 4-Step Pipeline Grid / Flow */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {t.howItWorks.steps.map((step, idx) => (
                        <div key={idx} className="relative flex flex-col justify-between bg-card border border-theme card-spec space-y-4 shadow-sm hover:shadow-md transition-all group">

                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="w-10 h-10 rounded-xl bg-alt border border-theme flex items-center justify-center font-bold shadow-xs">
                                        {stepIcons[idx % stepIcons.length]}
                                    </div>
                                    <span className="text-xs font-extrabold text-primary font-mono tracking-wider">
                                        {step.step}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-h3 text-main group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs font-semibold text-primary mt-0.5">
                                        {step.subtitle}
                                    </p>
                                </div>

                                <p className="text-body-spec text-muted leading-relaxed font-medium">
                                    {step.desc}
                                </p>
                            </div>

                            <div className="pt-2  ">
                                <span className="px-2.5 py-1 rounded-md bg-alt border border-theme text-[10px] font-bold text-muted block text-center uppercase tracking-wider">
                                    {step.badge}
                                </span>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Headline Pipeline Summary Bar */}
                <div className="bg-card border border-theme rounded-2xl p-4 sm:p-5 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-extrabold text-main uppercase tracking-wider shadow-xs">
                    <div className="flex items-center gap-2 text-primary">
                        <FaCamera className="w-4 h-4" />
                        <span>{t.howItWorks.summaryLabels?.step1 || "01 CAPTURE"}</span>
                    </div>
                    <FaArrowRight className="w-3.5 h-3.5 text-muted/60" />

                    <div className="flex items-center gap-2 text-[#3B82F6]">
                        <FaBrain className="w-4 h-4" />
                        <span>{t.howItWorks.summaryLabels?.step2 || "02 DETECT"}</span>
                    </div>
                    <FaArrowRight className="w-3.5 h-3.5 text-muted/60" />

                    <div className="flex items-center gap-2 text-[#EF4444]">
                        <FaShieldAlt className="w-4 h-4" />
                        <span>{t.howItWorks.summaryLabels?.step3 || "03 ASSESS"}</span>
                    </div>
                    <FaArrowRight className="w-3.5 h-3.5 text-muted/60" />

                    <div className="flex items-center gap-2 text-[#16A34A]">
                        <FaBell className="w-4 h-4" />
                        <span>{t.howItWorks.summaryLabels?.step4 || "04 ACT"}</span>
                    </div>
                </div>


            </div>
        </section>
    );
}
