import React from 'react';
import {
  FaWifi,
  FaCheckCircle,
  FaServer,
  FaMicrochip,
  FaSyncAlt,
  FaExclamationTriangle,
  FaArrowRight,
  FaCamera,
  FaThermometerHalf,
  FaBrain,
  FaHdd,
  FaCloudUploadAlt
} from 'react-icons/fa';

export default function OfflineSection({ t }) {
  const offlineCard = t.offline.demoOfflineCard || {
    badge: "⚠ Offline Mode",
    statusText: "AI detection is still working.",
    syncText: "7 records waiting to sync",
    items: [
      { label: "Camera", status: "Available" },
      { label: "Sensors", status: "Recording" },
      { label: "AI", status: "Running" }
    ]
  };

  const onlineCard = t.offline.demoOnlineCard || {
    badge: "✓ Back Online",
    statusText: "7 records synchronized",
    lastSync: "Last sync: Just now"
  };

  return (
    <section id="offline" className="section-padding border-b border-theme bg-alt transition-colors duration-200">
      <div className="max-page-width space-y-10">

        {/* Eyebrow & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase">
            <FaMicrochip className="w-3.5 h-3.5" />
            <span>{t.offline.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-main leading-tight">
            {t.offline.title}
          </h2>

          <p className="text-body text-muted text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            {t.offline.subtext}
          </p>
        </div>

        {/* Technical Highlights & Flow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">

          {/* Highlights */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-main">
              On-Device AI & Resilience Engineering
            </h3>
            <ul className="space-y-3">
              {t.offline.highlights?.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-muted font-semibold">
                  <FaCheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Flow Diagram Card */}
          <div className="lg:col-span-6 bg-card border border-theme rounded-2xl p-6 shadow-sm space-y-4">
            <h4 className="text-xs font-extrabold text-muted uppercase tracking-wider text-center">
              Field Device Architecture
            </h4>
            <div className="p-4 bg-alt border border-theme rounded-xl space-y-3 text-xs font-bold">
              {/* Inputs to Models */}
              <div className="flex items-center justify-between gap-2 text-main">
                <div className="flex items-center gap-1.5 bg-card px-2.5 py-1 rounded-lg border border-theme">
                  <FaCamera className="w-3.5 h-3.5 text-primary" />
                  <FaThermometerHalf className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span className="font-mono text-[11px]">Inputs</span>
                </div>

                <FaArrowRight className="w-3 h-3 text-primary shrink-0" />

                <div className="flex items-center gap-1.5 bg-card px-2.5 py-1 rounded-lg border border-theme">
                  <FaBrain className="w-3.5 h-3.5 text-[#9333EA]" />
                  <span className="font-mono text-[11px]">YOLO + LSTM</span>
                </div>
              </div>

              {/* Edge AI Box */}
              <div className="flex items-center justify-center gap-2 text-primary font-extrabold py-2 bg-primary/10 border border-primary/20 rounded-lg text-center text-[11px] uppercase tracking-wider">
                <FaMicrochip className="w-4 h-4" />
                <span>Local Edge AI Inference</span>
              </div>

              {/* Routing Logic */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-bold">
                <div className="flex items-center justify-center gap-1.5 p-2 bg-[#EAB308]/10 border border-[#EAB308]/30 rounded-lg text-[#EAB308]">
                  <FaHdd className="w-3.5 h-3.5" />
                  <span>Offline Buffer</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 p-2 bg-[#16A34A]/10 border border-[#16A34A]/30 rounded-lg text-[#16A34A]">
                  <FaCloudUploadAlt className="w-3.5 h-3.5" />
                  <span>Auto Sync</span>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* Offline vs Online UI Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Offline UI Card */}
          <div className="bg-card border border-[#EAB308]/40 rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#EAB308]/15 text-[#EAB308] border border-[#EAB308]/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <FaExclamationTriangle className="w-3 h-3" />
                {offlineCard.badge}
              </span>
              <span className="text-xs font-extrabold text-muted">{offlineCard.syncText}</span>
            </div>

            <p className="text-sm font-bold text-main">
              {offlineCard.statusText}
            </p>

            <div className="space-y-2 pt-2   text-xs font-semibold text-muted">
              {offlineCard.items?.map((it, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span>● {it.label}</span>
                  <span className="text-primary font-bold">{it.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Online Synced UI Card */}
          <div className="bg-card border border-[#16A34A]/40 rounded-2xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#16A34A]/15 text-[#16A34A] border border-[#16A34A]/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <FaSyncAlt className="w-3 h-3 animate-spin" />
                  {onlineCard.badge}
                </span>
              </div>

              <p className="text-sm font-bold text-main">
                {onlineCard.statusText}
              </p>
            </div>

            <div className="pt-2   text-xs font-semibold text-muted">
              {onlineCard.lastSync}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
