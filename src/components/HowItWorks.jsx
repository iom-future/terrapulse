import { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  Map,
  ShieldAlert,
  Clock,
  ClipboardCheck,
  CheckCircle2,
  Layers,
  Info,
  Sliders,
  AlertTriangle,
  Radio,
  ArrowUpRight,
  FileText,
  Database,
  Cpu,
  Compass,
} from 'lucide-react';
import sarFloodImg from '../assets/images/sar-flood-observation.jpg';
import { howItWorksContent } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const stepIcons = [Database, Cpu, Compass, ClipboardCheck];

const tabIcons = {
  'environmental-map': Map,
  'risk-assessment': ShieldAlert,
  'monitoring-timeline': Clock,
  'response-overview': ClipboardCheck,
};

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const [activeTabId, setActiveTabId] = useState(howItWorksContent.tabs[0].id);
  const [showSarOverlay, setShowSarOverlay] = useState(true);
  const [showDrainageBuffers, setShowDrainageBuffers] = useState(true);

  const activeTab =
    howItWorksContent.tabs.find((t) => t.id === activeTabId) || howItWorksContent.tabs[0];

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        '.hiw-step-card',
        { y: 24, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: 'power3.out',
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="platform"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#101C2C] text-[#F4F7FA] border-b border-white/10 overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D3557]/80 border border-[#55D3BD]/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#55D3BD]" />
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#55D3BD] uppercase">
              {howItWorksContent.eyebrow}
            </span>
          </div>

          <h2
            id="how-it-works-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#F4F7FA] leading-[1.12] mb-3 sm:mb-5"
          >
            {howItWorksContent.headline}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#F4F7FA]/80 leading-relaxed">
            {howItWorksContent.description}
          </p>
        </div>

        {/* Four-Step Workflow Grid */}
        <div className="hiw-steps-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {howItWorksContent.steps.map((step, idx) => {
            const StepIcon = stepIcons[idx] || Database;
            return (
              <div
                key={step.number}
                className="hiw-step-card relative rounded-2xl bg-[#1D3557]/45 border border-white/10 hover:border-[#55D3BD]/40 p-6 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#101C2C] border border-[#55D3BD]/30 flex items-center justify-center text-[#55D3BD]">
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#F4F7FA] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#F4F7FA]/75 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {step.inputs.map((chip) => (
                    <span
                      key={chip}
                      className="px-2 py-0.5 rounded bg-[#101C2C]/80 border border-white/10 font-mono text-[10px] text-[#7B8794]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Product Demonstration */}
        <div className="rounded-2xl bg-[#0a121e] border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Top Bar */}
          <div className="px-5 py-4 bg-[#101C2C] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-[#55D3BD]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F4F7FA]">
                Interactive Platform Demonstration
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1D3557]/80 border border-white/10 text-[11px] font-mono text-[#55D3BD]">
              <Info className="w-3.5 h-3.5" />
              <span>Illustrative Workspace — Sample Data Only</span>
            </div>
          </div>

          {/* 4 Tab Triggers */}
          <div
            role="tablist"
            aria-label="Platform Views"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/10 bg-[#101C2C]/70"
          >
            {howItWorksContent.tabs.map((tab) => {
              const Icon = tabIcons[tab.id] || Map;
              const isSelected = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`text-left p-4 sm:p-5 border-b sm:border-b-0 sm:border-r border-white/10 transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-[#1D3557]/75 text-[#F4F7FA]'
                      : 'hover:bg-[#1D3557]/30 text-[#7B8794]'
                  }`}
                >
                  {isSelected && (
                    <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3978E8] to-[#55D3BD]" />
                  )}
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <Icon
                      className={`w-4 h-4 ${
                        isSelected ? 'text-[#55D3BD]' : 'text-[#7B8794]'
                      }`}
                    />
                    <span className="font-heading font-bold text-sm sm:text-base text-[#F4F7FA]">
                      {tab.label}
                    </span>
                  </div>
                  <p className="text-xs text-[#7B8794] line-clamp-2 leading-relaxed">
                    {tab.shortDesc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Panel */}
          <div
            role="tabpanel"
            id={`panel-${activeTab.id}`}
            aria-labelledby={`tab-${activeTab.id}`}
            className="grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Left Description & Context Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#101C2C]/90 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1D3557] text-[#55D3BD] font-mono text-[11px] mb-4">
                  <span>VIEW: {activeTab.label.toUpperCase()}</span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-[#F4F7FA] mb-3">
                  {activeTab.headline}
                </h3>

                <p className="text-sm sm:text-base text-[#F4F7FA]/80 leading-relaxed mb-6">
                  {activeTab.details}
                </p>

                <ul className="space-y-3 mb-8">
                  {activeTab.keyPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F4F7FA]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#55D3BD] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metadata Summary Box */}
              <div className="p-4 rounded-xl bg-[#0a121e] border border-white/10 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#7B8794]">Monitored scope:</span>
                  <span className="text-[#F4F7FA]">{activeTab.mockMetadata.region}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#7B8794]">Active layer set:</span>
                  <span className="text-[#55D3BD] text-right">{activeTab.mockMetadata.activeLayers}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#7B8794]">View status:</span>
                  <span className="text-amber-300">{activeTab.mockMetadata.status}</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Visualization Mockup */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-[#0a121e] flex flex-col justify-between min-h-[420px]">
              {/* VIEW 1: ENVIRONMENTAL MAP */}
              {activeTab.id === 'environmental-map' && (
                <div className="flex flex-col h-full justify-between space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-[#55D3BD]" />
                      <span className="font-mono text-xs text-[#F4F7FA]">
                        Interactive Layer Controls (Illustrative)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setShowSarOverlay((v) => !v)}
                        className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                          showSarOverlay
                            ? 'bg-[#3978E8] text-white'
                            : 'bg-[#101C2C] text-[#7B8794] border border-white/10'
                        }`}
                      >
                        {showSarOverlay ? '✓ SAR Water Mask' : '+ SAR Water Mask'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowDrainageBuffers((v) => !v)}
                        className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                          showDrainageBuffers
                            ? 'bg-[#55D3BD]/20 text-[#55D3BD] border border-[#55D3BD]/50'
                            : 'bg-[#101C2C] text-[#7B8794] border border-white/10'
                        }`}
                      >
                        {showDrainageBuffers ? '✓ Flood Exposure Zones' : '+ Flood Exposure Zones'}
                      </button>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden border border-white/15 bg-[#101C2C] h-72 sm:h-80">
                    <img
                      src={sarFloodImg}
                      alt="Synthetic Aperture Radar (SAR) satellite flood observation view"
                      loading="lazy"
                      width="900"
                      height="520"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a121e] via-transparent to-[#0a121e]/50" />

                    <svg viewBox="0 0 500 260" className="absolute inset-0 w-full h-full">
                      {showDrainageBuffers && (
                        <g>
                          <path
                            d="M40,190 Q175,140 280,115 T470,65 L485,110 Q320,155 210,185 T55,230 Z"
                            fill="rgba(85, 211, 189, 0.22)"
                            stroke="#55D3BD"
                            strokeWidth="1.5"
                            strokeDasharray="5 3"
                          />
                        </g>
                      )}
                      {showSarOverlay && (
                        <g>
                          <path
                            d="M35,205 Q180,155 290,125 T475,80"
                            fill="none"
                            stroke="#3978E8"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeOpacity="0.75"
                          />
                          <circle cx="235" cy="145" r="24" fill="rgba(57,120,232,0.3)" stroke="#3978E8" strokeWidth="1.5" />
                          <circle cx="350" cy="110" r="18" fill="rgba(85,211,189,0.3)" stroke="#55D3BD" strokeWidth="1.5" />
                        </g>
                      )}
                      <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#F4F7FA">
                        <rect x="200" y="95" width="135" height="22" rx="4" fill="rgba(16,28,44,0.9)" stroke="#55D3BD" />
                        <text x="208" y="110" fill="#55D3BD">Sector B4: Floodplain</text>
                      </g>
                    </svg>

                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded bg-[#101C2C]/90 border border-white/10 font-mono text-[11px]">
                      <span className="text-[#F4F7FA]">
                        Selected Region: <strong className="text-[#55D3BD]">Sample District</strong>
                      </span>
                      <span className="text-[#7B8794]">Scale: 1:50,000 (Illustrative)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 2: RISK ASSESSMENT */}
              {activeTab.id === 'risk-assessment' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div>
                      <span className="font-mono text-[11px] text-[#55D3BD] uppercase">
                        ILLUSTRATIVE EXPOSURE BREAKDOWN
                      </span>
                      <h4 className="font-heading text-lg font-bold text-[#F4F7FA]">
                        Sample District — Contributing Risk Indicators
                      </h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 font-mono text-xs font-semibold">
                      Risk Indicator: Elevated
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#101C2C] border border-white/10">
                      <span className="font-mono text-[10px] text-[#7B8794] uppercase">
                        HYDROLOGICAL FACTOR
                      </span>
                      <p className="font-heading font-bold text-sm text-[#F4F7FA] mt-1">
                        Upstream Basin Inflow
                      </p>
                      <p className="text-xs text-[#55D3BD] font-mono mt-1">
                        High accumulation signal
                      </p>
                      <p className="text-[11px] text-[#7B8794] mt-1.5">
                        Multi-day rainfall across upper catchment increases tributary volume.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#101C2C] border border-white/10">
                      <span className="font-mono text-[10px] text-[#7B8794] uppercase">
                        TOPOGRAPHIC FACTOR
                      </span>
                      <p className="font-heading font-bold text-sm text-[#F4F7FA] mt-1">
                        Low-Elevation Corridor
                      </p>
                      <p className="text-xs text-[#3978E8] font-mono mt-1">
                        DEM Floodplain Class II
                      </p>
                      <p className="text-[11px] text-[#7B8794] mt-1.5">
                        Flat gradient slows surface runoff drainage near riverine wards.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#101C2C] border border-white/10">
                      <span className="font-mono text-[10px] text-[#7B8794] uppercase">
                        EXPOSED INFRASTRUCTURE
                      </span>
                      <p className="font-heading font-bold text-sm text-[#F4F7FA] mt-1">
                        2 Arterial Crossings
                      </p>
                      <p className="text-xs text-amber-300 font-mono mt-1">
                        Priority Inspection Zone
                      </p>
                      <p className="text-[11px] text-[#7B8794] mt-1.5">
                        Low-clearance culverts and primary access routes within buffer zone.
                      </p>
                    </div>
                  </div>

                  {/* Exposure Matrix Table */}
                  <div className="rounded-xl bg-[#101C2C] border border-white/10 overflow-hidden">
                    <div className="px-4 py-2.5 bg-[#1D3557]/50 border-b border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-[#F4F7FA]">LOCATION / CORRIDOR (SAMPLE)</span>
                      <span className="text-[#7B8794]">EXPOSURE STATUS & SOURCE</span>
                    </div>
                    <div className="divide-y divide-white/5 text-xs">
                      {[
                        {
                          loc: 'Sample Ward B — Riverside Settlement Zone',
                          source: 'SAR Water Extent + DEM Low-Zone',
                          status: 'Elevated Exposure',
                          badgeColor: 'text-amber-300 bg-amber-400/10 border-amber-400/30',
                        },
                        {
                          loc: 'Eastern Access Bridge & Causeway Corridor',
                          source: 'Hydrological Buffer + Field Report',
                          status: 'Priority Monitoring',
                          badgeColor: 'text-[#55D3BD] bg-[#55D3BD]/10 border-[#55D3BD]/30',
                        },
                        {
                          loc: 'District Substation & Water Treatment Node',
                          source: 'Perimeter Elevation Assessment',
                          status: 'Moderate Watch',
                          badgeColor: 'text-[#3978E8] bg-[#3978E8]/10 border-[#3978E8]/30',
                        },
                      ].map((row, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                        >
                          <div>
                            <p className="font-semibold text-[#F4F7FA]">{row.loc}</p>
                            <p className="font-mono text-[11px] text-[#7B8794]">{row.source}</p>
                          </div>
                          <span
                            className={`px-2.5 py-1 rounded border font-mono text-[11px] self-start sm:self-center shrink-0 ${row.badgeColor}`}
                          >
                            {row.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 3: MONITORING TIMELINE */}
              {activeTab.id === 'monitoring-timeline' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div>
                      <span className="font-mono text-[11px] text-[#55D3BD] uppercase">
                        CHRONOLOGICAL OBSERVATION LOG (ILLUSTRATIVE)
                      </span>
                      <h4 className="font-heading text-lg font-bold text-[#F4F7FA]">
                        Multi-Day Environmental Progression
                      </h4>
                    </div>
                    <span className="font-mono text-xs text-[#7B8794]">
                      Window: 14-Day Sample Sequence
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        day: 'Day 01 • Sample Baseline',
                        source: 'Optical & SAR Archive',
                        title: 'Seasonal River Channel Baseline Recorded',
                        desc: 'Water levels within normal dry-to-wet transition bounds across monitored floodplain sectors.',
                        indicator: 'Baseline',
                      },
                      {
                        day: 'Day 06 • Weather Signal',
                        source: 'Meteorological Precipitation Data',
                        title: 'Sustained Multi-Day Catchment Rainfall',
                        desc: 'Upper tributary sub-basins receive persistent rainfall above seasonal average.',
                        indicator: 'Watch Initialized',
                      },
                      {
                        day: 'Day 10 • Earth Observation Pass',
                        source: 'SAR Backscatter Analysis',
                        title: 'Lateral Floodplain Water Expansion Detected',
                        desc: 'Radar imagery penetrates cloud cover, showing surface water spreading into low-lying depressions.',
                        indicator: 'Change Detected',
                      },
                      {
                        day: 'Day 14 • Current Sample State',
                        source: 'Combined Intelligence Assessment',
                        title: 'Elevated Exposure Notification Issued to Pilot Teams',
                        desc: 'Location-specific assessment highlights riverside corridors for preparedness inspection.',
                        indicator: 'Elevated Status',
                      },
                    ].map((entry, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#101C2C] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#55D3BD] mt-2 shrink-0" />
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="font-mono text-[11px] text-[#55D3BD]">
                                {entry.day}
                              </span>
                              <span className="text-[11px] font-mono text-[#7B8794]">
                                • {entry.source}
                              </span>
                            </div>
                            <p className="font-heading font-bold text-sm text-[#F4F7FA]">
                              {entry.title}
                            </p>
                            <p className="text-xs text-[#7B8794] mt-0.5">{entry.desc}</p>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-[#1D3557] text-[#F4F7FA] font-mono text-[11px] shrink-0 self-start sm:self-center">
                          {entry.indicator}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VIEW 4: RESPONSE OVERVIEW */}
              {activeTab.id === 'response-overview' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div>
                      <span className="font-mono text-[11px] text-[#55D3BD] uppercase">
                        DECISION SUPPORT & COORDINATION WORKSPACE
                      </span>
                      <h4 className="font-heading text-lg font-bold text-[#F4F7FA]">
                        Preparedness Priority Queue (Illustrative)
                      </h4>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#3978E8]/20 border border-[#3978E8]/40 text-[#F4F7FA] font-mono text-xs">
                      <FileText className="w-3.5 h-3.5 text-[#55D3BD]" />
                      Briefing Ready
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-[#101C2C] border border-amber-400/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-400/15 text-amber-300">
                          PRIORITY 01 • IMMEDIATE REVIEW
                        </span>
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                      </div>
                      <h5 className="font-heading font-bold text-sm text-[#F4F7FA] mb-1">
                        Lower Basin Drainage & Culvert Corridors
                      </h5>
                      <p className="text-xs text-[#7B8794] mb-3">
                        Recommended Action: Field verification of water levels at Primary Bridge B2 and clearance check of storm channels.
                      </p>
                      <div className="pt-2 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#55D3BD]">
                        <span>Lead: Municipal Emergency Unit</span>
                        <span>Status: Under Review</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#101C2C] border border-[#55D3BD]/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#55D3BD]/15 text-[#55D3BD]">
                          PRIORITY 02 • PREPAREDNESS WATCH
                        </span>
                        <Radio className="w-4 h-4 text-[#55D3BD]" />
                      </div>
                      <h5 className="font-heading font-bold text-sm text-[#F4F7FA] mb-1">
                        Riparian Community Outreach & Staging
                      </h5>
                      <p className="text-xs text-[#7B8794] mb-3">
                        Recommended Action: Share updated flood exposure map with local ward coordinators and humanitarian partners.
                      </p>
                      <div className="pt-2 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#3978E8]">
                        <span>Lead: State Relief Liaison</span>
                        <span>Status: Briefing Shared</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#101C2C] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-[#F4F7FA]">
                        Human-in-the-Loop Decision Protocol
                      </p>
                      <p className="text-[11px] text-[#7B8794]">
                        TerraPulse organizes environmental intelligence to help operational teams prioritize attention—all field orders remain with authorized responders.
                      </p>
                    </div>
                    <a
                      href="#pilot"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#1D3557] hover:bg-[#3978E8] text-xs font-semibold text-white transition-colors shrink-0"
                    >
                      <span>Explore Pilot Workflows</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

