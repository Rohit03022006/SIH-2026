import React from 'react';
import { 
  FaMicrochip, 
  FaCamera, 
  FaThermometerHalf, 
  FaSolarPanel, 
  FaWifi, 
  FaCheckCircle, 
  FaBolt, 
  FaHdd 
} from 'react-icons/fa';

export default function HardwareSection({ t }) {
  const hw = t.hardware || {};

  return (
    <section id="hardware" className="section-padding border-b border-theme bg-card transition-colors duration-200">
      <div className="max-page-width space-y-10">
        
        {/* Eyebrow & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase">
            <FaMicrochip className="w-3.5 h-3.5" />
            <span>{hw.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-main leading-tight">
            {hw.title}
          </h2>

          <p className="text-body text-muted text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            {hw.subtext}
          </p>

          {/* Technology Chips */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {hw.chips?.map((chip, idx) => (
              <span key={idx} className="px-3.5 py-1.5 bg-alt border border-theme rounded-xl text-xs font-extrabold text-main shadow-2xs">
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Content & Hardware Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Hardware Specs Grid */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-main">
              Built for Harsh Outdoor Agricultural Conditions
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hw.specs?.map((spec, idx) => (
                <div key={idx} className="p-4 bg-alt border border-theme rounded-xl space-y-1 shadow-2xs">
                  <div className="text-xs font-bold text-muted uppercase tracking-wider">{spec.label}</div>
                  <div className="text-sm font-extrabold text-primary">{spec.val}</div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl flex items-start gap-3">
              <FaBolt className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-muted font-semibold leading-relaxed">
                <strong className="text-main">Qualcomm AI Hub Integration:</strong> Models are compiled specifically for Hexagon NPU execution, achieving high accuracy with ultra-low power consumption.
              </p>
            </div>
          </div>

          {/* Visual Hardware Unit Mock Card */}
          <div className="lg:col-span-6">
            <div className="bg-alt border border-theme rounded-2xl p-6 shadow-md space-y-5 max-w-md mx-auto relative overflow-hidden">
              
              {/* Status Header */}
              <div className="flex items-center justify-between">
                <span className="font-bold text-main text-sm">{hw.mockTitle}</span>
                <span className="px-2.5 py-1 rounded-full bg-[#16A34A]/15 text-[#16A34A] border border-[#16A34A]/30 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-ping" />
                  {hw.statusBadge}
                </span>
              </div>

              {/* Node Schematic Visualization */}
              <div className="p-5 bg-card border border-theme rounded-xl space-y-4">
                
                <div className="flex items-center justify-center gap-4 text-center">
                  <div className="p-3 bg-alt border border-theme rounded-xl space-y-1 flex-1">
                    <FaCamera className="w-6 h-6 text-primary mx-auto" />
                    <span className="text-[11px] font-bold text-main block">Optical Cam</span>
                  </div>
                  <div className="p-3 bg-alt border border-theme rounded-xl space-y-1 flex-1">
                    <FaThermometerHalf className="w-6 h-6 text-[#2563EB] mx-auto" />
                    <span className="text-[11px] font-bold text-main block">Soil Probe</span>
                  </div>
                  <div className="p-3 bg-alt border border-theme rounded-xl space-y-1 flex-1">
                    <FaSolarPanel className="w-6 h-6 text-[#EAB308] mx-auto" />
                    <span className="text-[11px] font-bold text-main block">Solar Power</span>
                  </div>
                </div>

                <div className="p-3 bg-primary/10 border border-primary/20 rounded-xl text-center space-y-1">
                  <div className="flex items-center justify-center gap-2 text-primary font-extrabold text-xs uppercase tracking-wider">
                    <FaMicrochip className="w-4 h-4" />
                    <span>Qualcomm AI Hub NPU Board</span>
                  </div>
                  <span className="text-[10px] text-muted font-mono block">Model: YOLOv8-Nano + LSTM-v2</span>
                </div>

              </div>

              {/* Component breakdown */}
              <div className="space-y-2">
                {hw.components?.map((comp, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-main font-bold">● {comp.name}</span>
                    <span className="text-muted">{comp.detail}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
