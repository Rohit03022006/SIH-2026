import React from 'react';
import {
  FaExclamationTriangle,
  FaTint,
  FaThermometerHalf,
  FaWind,
  FaCloudRain,
  FaSun,
  FaCheckCircle,
  FaArrowUp,
  FaArrowRight,
  FaBell,
  FaSyncAlt,
  FaBug,
  FaHistory,
  FaChartLine,
  FaShieldAlt
} from 'react-icons/fa';

// Reusable Farm Dashboard Mockup Frame Component
export function FarmDashboardMockup({ t, compact = false }) {
  const p = t.preview || {};

  const [lastSyncTime, setLastSyncTime] = React.useState('');

  React.useEffect(() => {
    const updateSyncTime = () => {
      const now = new Date();
      setLastSyncTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateSyncTime();
    const interval = setInterval(updateSyncTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card border border-theme rounded-2xl shadow-xl overflow-hidden transition-all text-left">

      {/* Top Mockup Header Bar */}
      <div className="bg-alt border-b border-theme px-3.5 sm:px-4 py-2.5 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-primary text-white font-black flex items-center justify-center text-xs shadow-2xs">
            KR
          </div>
          <div>
            <h3 className="font-extrabold text-main text-xs sm:text-sm leading-none">{p.fieldName}</h3>
            <span className="text-[10px] text-muted font-bold mt-0.5 block">{p.fieldSub}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 text-xs font-bold">
          <span className="flex items-center gap-1 text-muted font-mono text-[10px]">
            <FaSyncAlt className="w-2.5 h-2.5 animate-spin text-primary" />
            <span>Sync: {lastSyncTime}</span>
          </span>
          <span className="px-2 py-0.5 bg-[#16A34A]/15 text-[#16A34A] border border-[#16A34A]/30 rounded-full font-extrabold flex items-center gap-1 uppercase tracking-wider text-[9px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
            {p.statusBadge}
          </span>
        </div>
      </div>

      {/* Dashboard Body Grid */}
      <div className="p-3.5 sm:p-4 space-y-3.5">

        {/* ROW 1: Hero KPI (Farm Health) + Live Conditions */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">

          {/* 1. Hero KPI: Farm Health */}
          <div className="sm:col-span-5 bg-alt border border-[#EF4444]/40 rounded-xl p-3 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-extrabold text-muted uppercase tracking-wider">{p.farmHealthTitle}</span>
                <span className="px-1.5 py-0.5 rounded bg-[#EF4444]/20 text-[#EF4444] text-[8px] font-black uppercase">
                  {p.farmHealthLabel}
                </span>
              </div>
              <div className="my-1.5 text-center">
                <div className="text-3xl sm:text-4xl font-black text-[#EF4444] tracking-tight">
                  {p.farmHealthScore}
                </div>
                <p className="text-[9px] font-extrabold text-[#EF4444] uppercase tracking-widest mt-0.5">
                  {p.farmHealthLabel}
                </p>
              </div>
            </div>
            <div className="pt-1 text-[9px] font-bold text-muted flex items-center justify-center gap-1">
              <FaArrowUp className="w-2 h-2 text-[#EF4444]" />
              <span>{p.farmHealthTrend}</span>
            </div>
          </div>

          {/* 3. Live Farm Conditions (4 Compact Cards) */}
          <div className="sm:col-span-7 grid grid-cols-2 gap-2">
            {/* Moisture */}
            <div className="bg-alt border border-theme rounded-lg p-2 flex flex-col justify-between shadow-2xs">
              <div className="flex justify-between items-center text-[9px] font-bold text-muted">
                <span>MOISTURE</span>
                <FaTint className="w-2.5 h-2.5 text-[#3B82F6]" />
              </div>
              <div className="my-0.5">
                <div className="text-base font-black text-main leading-tight">24%</div>
                <span className="text-[8px] font-black text-[#EF4444] uppercase">LOW</span>
              </div>
              <div className="w-full bg-card rounded-full h-1 overflow-hidden border border-theme">
                <div className="bg-[#EF4444] h-full w-[24%]" />
              </div>
            </div>

            {/* Temp */}
            <div className="bg-alt border border-theme rounded-lg p-2 flex flex-col justify-between shadow-2xs">
              <div className="flex justify-between items-center text-[9px] font-bold text-muted">
                <span>TEMP</span>
                <FaThermometerHalf className="w-2.5 h-2.5 text-[#EF4444]" />
              </div>
              <div className="my-0.5">
                <div className="text-base font-black text-main leading-tight">38°C</div>
                <span className="text-[8px] font-black text-[#EF4444] uppercase">HIGH</span>
              </div>
              <div className="w-full bg-card rounded-full h-1 overflow-hidden border border-theme">
                <div className="bg-[#EF4444] h-full w-[78%]" />
              </div>
            </div>

            {/* Humidity */}
            <div className="bg-alt border border-theme rounded-lg p-2 flex flex-col justify-between shadow-2xs">
              <div className="flex justify-between items-center text-[9px] font-bold text-muted">
                <span>HUMIDITY</span>
                <FaWind className="w-2.5 h-2.5 text-[#22C55E]" />
              </div>
              <div className="my-0.5">
                <div className="text-base font-black text-main leading-tight">72%</div>
                <span className="text-[8px] font-black text-[#22C55E] uppercase">NORMAL</span>
              </div>
              <div className="w-full bg-card rounded-full h-1 overflow-hidden border border-theme">
                <div className="bg-[#22C55E] h-full w-[72%]" />
              </div>
            </div>

            {/* Rainfall */}
            <div className="bg-alt border border-theme rounded-lg p-2 flex flex-col justify-between shadow-2xs">
              <div className="flex justify-between items-center text-[9px] font-bold text-muted">
                <span>RAINFALL</span>
                <FaCloudRain className="w-2.5 h-2.5 text-[#3B82F6]" />
              </div>
              <div className="my-0.5">
                <div className="text-base font-black text-main leading-tight">12 mm</div>
                <span className="text-[8px] font-black text-[#3B82F6] uppercase">TODAY</span>
              </div>
              <div className="w-full bg-card rounded-full h-1 overflow-hidden border border-theme">
                <div className="bg-[#3B82F6] h-full w-[40%]" />
              </div>
            </div>
          </div>

        </div>

        {/* ROW 2: AI Detection + Climate Alert Pill */}
        <div className="bg-alt border border-theme rounded-lg p-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-card border border-theme flex items-center justify-center text-primary font-bold text-xs shrink-0">
              <FaBug className="w-4 h-4 text-[#EF4444]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h5 className="font-extrabold text-main text-xs">{p.aiDetection?.name || "Leaf Rust Detected"}</h5>
                <span className="px-1.5 py-0.2 bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30 rounded text-[8px] font-black uppercase">
                  {p.aiDetection?.risk || "CRITICAL"}
                </span>
              </div>
              <p className="text-[10px] text-muted font-medium">{p.aiDetection?.confidence || "94% Confidence (YOLOv8)"}</p>
            </div>
          </div>

          <div className="px-2.5 py-1 bg-[#EAB308]/10 border border-[#EAB308]/30 rounded-md text-[9px] font-bold text-[#EAB308] flex items-center gap-1 ml-auto">
            <FaExclamationTriangle className="w-2.5 h-2.5 shrink-0" />
            <span>Heat Wave (38°C)</span>
          </div>
        </div>

        {/* ROW 3: Recommended Action Banner */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 flex items-center justify-between gap-2">
          <div className="space-y-0.5">
            <span className="text-[8px] font-black text-primary uppercase tracking-wider block">{p.actionTitle || "RECOMMENDED ACTION"}</span>
            <h4 className="text-xs font-black text-main">{p.actionHeading || "Irrigate Within 6 Hours"}</h4>
          </div>
          <button className="px-3 py-1.5 bg-primary text-white font-extrabold rounded-md text-[10px] uppercase tracking-wider shadow-xs hover:bg-primary/90 transition-all inline-flex items-center gap-1 shrink-0">
            <span>{p.actionBtn || "View Action"}</span>
            <FaArrowRight className="w-2.5 h-2.5" />
          </button>
        </div>

      </div>

    </div>
  );
}

export default function PreviewSection({ t }) {
  const p = t.preview || {};

  return (
    <section id="preview" className="section-padding border-b border-theme bg-alt transition-colors duration-200">
      <div className="max-page-width space-y-10">

        {/* Eyebrow & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase">
            <FaShieldAlt className="w-3.5 h-3.5" />
            <span>{p.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-main leading-tight">
            {p.title}
          </h2>

          <p className="text-body text-muted text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            {p.subtext}
          </p>
        </div>

        {/* Full Dashboard Mockup Frame */}
        <div className="max-w-6xl mx-auto">
          <FarmDashboardMockup t={t} />
        </div>

      </div>
    </section>
  );
}
