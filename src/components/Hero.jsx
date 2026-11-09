import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  ArrowRight,
  Compass,
  Layers,
  Radio,
  AlertTriangle,
  Clock,
  MapPin,
  CloudRain,
  Waves,
  Activity,
  Info,
  SlidersHorizontal,
} from 'lucide-react';
import heroSatelliteImg from '../assets/images/hero-satellite.jpg';
import { heroContent } from '../data/content';

export default function Hero() {
  const heroRef = useRef(null);
  const [selectedRegionIdx, setSelectedRegionIdx] = useState(0);
  const [activeMapLayer, setActiveMapLayer] = useState('Flood Exposure');

  const activeRegion = heroContent.dashboardRegions[selectedRegionIdx];

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-reveal', {
        y: 22,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
      }).from(
        '.hero-dashboard-frame',
        {
          y: 28,
          opacity: 0,
          duration: 0.9,
        },
        '-=0.45'
      );
    },
    { scope: heroRef }
  );

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#101C2C] border-b border-white/10"
    >
      {/* Immersive Satellite Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSatelliteImg}
          alt="High-altitude satellite observation of a major West African river delta and coastal floodplain"
          width="1920"
          height="1080"
          fetchPriority="high"
          loading="eager"
          className="w-full h-full object-cover object-center opacity-35 scale-102"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#101C2C]/90 via-[#101C2C]/80 to-[#101C2C]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#101C2C] via-[#101C2C]/75 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-geo-grid opacity-50" aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Copy + Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Core Messaging */}
          <div className="lg:col-span-6 xl:col-span-5 text-left">
            {/* Eyebrow */}
            <div className="hero-reveal inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1D3557]/90 border border-[#55D3BD]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#55D3BD] animate-pulse" />
              <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.14em] text-[#55D3BD] uppercase">
                {heroContent.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-reveal font-heading text-4xl sm:text-5xl xl:text-[54px] font-extrabold text-[#F4F7FA] leading-[1.1] tracking-tight mb-6">
              See Risk Earlier.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F7FA] via-[#55D3BD] to-[#3978E8]">
                Protect What Matters.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="hero-reveal text-base sm:text-lg text-[#F4F7FA]/85 leading-relaxed mb-8 max-w-xl">
              {heroContent.subheadline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="hero-reveal flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
              <a
                href="#pilot"
                onClick={(e) => scrollToSection(e, 'pilot')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#3978E8] hover:bg-[#2d66cc] text-white font-semibold text-sm sm:text-base shadow-[0_8px_25px_rgba(57,120,232,0.35)] hover:shadow-[0_10px_30px_rgba(57,120,232,0.5)] transition-all duration-200"
              >
                <span>{heroContent.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#platform"
                onClick={(e) => scrollToSection(e, 'platform')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#1D3557]/80 hover:bg-[#1D3557] text-[#F4F7FA] border border-white/15 hover:border-[#55D3BD]/40 font-semibold text-sm sm:text-base transition-all duration-200"
              >
                <Compass className="w-4 h-4 text-[#55D3BD]" />
                <span>{heroContent.secondaryCta}</span>
              </a>
            </div>

            {/* Supporting Text */}
            <div className="hero-reveal pt-5 border-t border-white/10 flex items-start gap-3">
              <div className="p-1.5 rounded-md bg-[#1D3557] border border-white/10 mt-0.5 shrink-0">
                <Layers className="w-4 h-4 text-[#55D3BD]" />
              </div>
              <p className="text-xs sm:text-sm text-[#7B8794] leading-relaxed">
                {heroContent.supportingText}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Geospatial Intelligence Dashboard Overlay */}
          <div className="lg:col-span-6 xl:col-span-7 hero-dashboard-frame">
            <div className="rounded-2xl bg-[#101C2C]/95 border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.65)] overflow-hidden backdrop-blur-xl">
              {/* Top Window Bar & Illustrative Status Notice */}
              <div className="px-4 py-3 bg-[#0a121e] border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3978E8]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#55D3BD]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7B8794]/40" />
                  </div>
                  <span className="font-mono text-[11px] text-[#F4F7FA]/90 tracking-wider uppercase">
                    TERRAPULSE // GEOSPATIAL RISK CONSOLE
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#1D3557]/90 border border-[#55D3BD]/30 text-[10px] font-mono text-[#55D3BD]">
                  <Info className="w-3 h-3 shrink-0" />
                  <span>ILLUSTRATIVE INTERFACE EXAMPLE</span>
                </div>
              </div>

              {/* Region Selector + Layer Bar */}
              <div className="px-4 py-2.5 bg-[#1D3557]/40 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
                  <span className="text-[11px] font-mono text-[#7B8794] mr-1 shrink-0">
                    REGION:
                  </span>
                  {heroContent.dashboardRegions.map((reg, idx) => (
                    <button
                      key={reg.id}
                      type="button"
                      onClick={() => setSelectedRegionIdx(idx)}
                      className={`px-2.5 py-1 rounded text-xs font-medium transition-all shrink-0 cursor-pointer ${
                        selectedRegionIdx === idx
                          ? 'bg-[#3978E8] text-white shadow-sm'
                          : 'bg-[#101C2C]/80 text-[#7B8794] hover:text-[#F4F7FA] border border-white/10'
                      }`}
                    >
                      {reg.selectedRegion.split(' (')[0]}
                    </button>
                  ))}
                </div>

                {/* Monitoring Layer Pill Switcher */}
                <div className="flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#55D3BD]" />
                  {['Flood Exposure', 'SAR Water Mask', 'Rainfall Signals'].map((layer) => (
                    <button
                      key={layer}
                      type="button"
                      onClick={() => setActiveMapLayer(layer)}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                        activeMapLayer === layer
                          ? 'bg-[#55D3BD]/20 text-[#55D3BD] border border-[#55D3BD]/40'
                          : 'text-[#7B8794] hover:text-[#F4F7FA]'
                      }`}
                    >
                      {layer}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Interactive Map & Telemetry Split */}
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Geographic Risk Map Viewport */}
                <div className="md:col-span-7 relative min-h-[300px] sm:min-h-[340px] bg-[#0a121e] overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                  <img
                    src={heroSatelliteImg}
                    alt="Illustrative satellite monitoring layer over sample river basin"
                    width="800"
                    height="600"
                    className="w-full h-full object-cover object-center opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a121e] via-transparent to-[#0a121e]/60" />

                  {/* SVG Hydrological & Flood Exposure Overlay */}
                  <svg
                    viewBox="0 0 400 280"
                    className="absolute inset-0 w-full h-full"
                    aria-label="Illustrative flood exposure polygon overlay"
                  >
                    <defs>
                      <radialGradient id="floodZoneGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#55D3BD" stopOpacity="0.42" />
                        <stop offset="65%" stopColor="#3978E8" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#3978E8" stopOpacity="0" />
                      </radialGradient>
                      <linearGradient id="riverChannel" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#55D3BD" />
                        <stop offset="100%" stopColor="#3978E8" />
                      </linearGradient>
                    </defs>

                    {/* Coordinate Grid Lines */}
                    <g stroke="rgba(244,247,250,0.08)" strokeWidth="0.75">
                      <line x1="0" y1="70" x2="400" y2="70" />
                      <line x1="0" y1="140" x2="400" y2="140" />
                      <line x1="0" y1="210" x2="400" y2="210" />
                      <line x1="100" y1="0" x2="100" y2="280" />
                      <line x1="200" y1="0" x2="200" y2="280" />
                      <line x1="300" y1="0" x2="300" y2="280" />
                    </g>

                    {/* Flood Exposure Polygon Corridors */}
                    {activeMapLayer === 'Flood Exposure' && (
                      <g>
                        <path
                          d="M40,65 Q130,85 185,135 T335,215 L350,245 Q240,210 165,165 T30,95 Z"
                          fill="url(#floodZoneGrad)"
                          stroke="#55D3BD"
                          strokeWidth="1.2"
                          strokeDasharray="4 3"
                        />
                        <ellipse
                          cx={selectedRegionIdx === 0 ? 195 : selectedRegionIdx === 1 ? 135 : 275}
                          cy={selectedRegionIdx === 0 ? 145 : selectedRegionIdx === 1 ? 105 : 195}
                          rx="58"
                          ry="36"
                          fill="url(#floodZoneGrad)"
                          stroke="#55D3BD"
                          strokeWidth="1.5"
                        />
                      </g>
                    )}

                    {activeMapLayer === 'SAR Water Mask' && (
                      <g>
                        <path
                          d="M25,75 C110,95 160,120 215,155 C265,188 310,205 365,225"
                          fill="none"
                          stroke="#3978E8"
                          strokeWidth="14"
                          strokeOpacity="0.35"
                          strokeLinecap="round"
                        />
                        <rect
                          x="140"
                          y="110"
                          width="110"
                          height="70"
                          rx="6"
                          fill="rgba(57,120,232,0.18)"
                          stroke="#3978E8"
                          strokeWidth="1.2"
                          strokeDasharray="3 3"
                        />
                      </g>
                    )}

                    {activeMapLayer === 'Rainfall Signals' && (
                      <g>
                        <circle
                          cx="160"
                          cy="125"
                          r="65"
                          fill="rgba(57,120,232,0.22)"
                          stroke="#55D3BD"
                          strokeWidth="1"
                          strokeDasharray="2 4"
                        />
                        <circle
                          cx="245"
                          cy="165"
                          r="50"
                          fill="rgba(85,211,189,0.2)"
                          stroke="#3978E8"
                          strokeWidth="1"
                        />
                      </g>
                    )}

                    {/* Primary Hydrological River Channel */}
                    <path
                      d="M20,78 Q125,92 190,142 T365,228"
                      fill="none"
                      stroke="url(#riverChannel)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Secondary Tributary */}
                    <path
                      d="M255,45 Q225,95 190,142"
                      fill="none"
                      stroke="#55D3BD"
                      strokeWidth="2"
                      strokeDasharray="3 2"
                    />

                    {/* Interactive District Nodes on Map */}
                    {[
                      { idx: 0, x: 195, y: 145, label: 'Sample District' },
                      { idx: 1, x: 135, y: 105, label: 'Sample Confluence' },
                      { idx: 2, x: 275, y: 195, label: 'Coastal Sector' },
                    ].map((node) => {
                      const isSelected = selectedRegionIdx === node.idx;
                      return (
                        <g
                          key={node.label}
                          onClick={() => setSelectedRegionIdx(node.idx)}
                          className="cursor-pointer"
                        >
                          {isSelected && (
                            <circle
                              cx={node.x}
                              cy={node.y}
                              r="16"
                              fill="rgba(85, 211, 189, 0.2)"
                              stroke="#55D3BD"
                              strokeWidth="1.2"
                            />
                          )}
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r={isSelected ? '6' : '4.5'}
                            fill={isSelected ? '#55D3BD' : '#3978E8'}
                            stroke="#101C2C"
                            strokeWidth="2"
                          />
                          <rect
                            x={node.x + 10}
                            y={node.y - 11}
                            width="98"
                            height="20"
                            rx="4"
                            fill="rgba(16, 28, 44, 0.9)"
                            stroke={isSelected ? '#55D3BD' : 'rgba(255,255,255,0.15)'}
                            strokeWidth="1"
                          />
                          <text
                            x={node.x + 16}
                            y={node.y + 2}
                            fill={isSelected ? '#55D3BD' : '#F4F7FA'}
                            fontSize="9"
                            fontFamily="JetBrains Mono, monospace"
                          >
                            {node.label}
                          </text>
                        </g>
                      );
                    })}
                  </svg>

                  {/* Map Corner Telemetry Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="px-2.5 py-1 rounded bg-[#101C2C]/90 border border-white/10 text-[11px] font-mono text-[#F4F7FA] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#55D3BD]" />
                      <span>{activeRegion.coordinates}</span>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-[#101C2C]/90 border border-[#55D3BD]/30 text-[11px] font-mono text-[#55D3BD]">
                      Layer: {activeMapLayer}
                    </div>
                  </div>

                  {/* Map Bottom Legend */}
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-lg bg-[#101C2C]/90 border border-white/10 backdrop-blur-md flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 text-[#F4F7FA]/90">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#55D3BD]/60 border border-[#55D3BD]" />
                        Flood Exposure Zone
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#F4F7FA]/90">
                        <span className="w-2.5 h-0.5 bg-[#3978E8]" />
                        Hydrological Channel
                      </span>
                    </div>
                    <span className="text-[#7B8794]">Click map nodes to inspect</span>
                  </div>
                </div>

                {/* Right Panel: Illustrative Spec Table & Assessment Card */}
                <div className="md:col-span-5 p-4 bg-[#101C2C] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                      <span className="font-mono text-[11px] text-[#7B8794] uppercase tracking-wider">
                        Selected Location Assessment
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#55D3BD]/15 text-[#55D3BD] font-mono text-[10px]">
                        <Radio className="w-3 h-3" />
                        {activeRegion.environmentalStatus}
                      </span>
                    </div>

                    {/* Exact Required Illustrative Dashboard Labels from Specification */}
                    <dl className="space-y-2.5 text-xs">
                      <div className="flex items-center justify-between py-1.5 px-2.5 rounded bg-[#1D3557]/35 border border-white/5">
                        <dt className="text-[#7B8794] font-medium">Selected region</dt>
                        <dd className="font-mono text-[#F4F7FA] font-semibold">
                          {activeRegion.selectedRegion}
                        </dd>
                      </div>

                      <div className="flex items-center justify-between py-1.5 px-2.5 rounded bg-[#1D3557]/35 border border-white/5">
                        <dt className="text-[#7B8794] font-medium">Monitoring layer</dt>
                        <dd className="font-mono text-[#55D3BD] font-semibold">
                          {activeRegion.monitoringLayer}
                        </dd>
                      </div>

                      <div className="flex items-center justify-between py-1.5 px-2.5 rounded bg-[#1D3557]/35 border border-white/5">
                        <dt className="text-[#7B8794] font-medium">Environmental status</dt>
                        <dd className="font-mono text-[#F4F7FA]">
                          {activeRegion.environmentalStatus}
                        </dd>
                      </div>

                      <div className="flex items-center justify-between py-1.5 px-2.5 rounded bg-[#1D3557]/35 border border-white/5">
                        <dt className="text-[#7B8794] font-medium">Risk indicator</dt>
                        <dd className="inline-flex items-center gap-1.5 font-mono font-semibold text-amber-300">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                          {activeRegion.riskIndicator}
                        </dd>
                      </div>

                      <div className="flex items-center justify-between py-1.5 px-2.5 rounded bg-[#1D3557]/35 border border-white/5">
                        <dt className="text-[#7B8794] font-medium">Last observation</dt>
                        <dd className="font-mono text-[#7B8794] flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#55D3BD]" />
                          {activeRegion.lastObservation}
                        </dd>
                      </div>
                    </dl>

                    {/* Environmental Monitoring Indicators */}
                    <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
                      <div className="p-2 rounded bg-[#0a121e]/80 border border-white/5">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#7B8794] mb-1">
                          <CloudRain className="w-3 h-3 text-[#3978E8]" />
                          <span>PRECIPITATION</span>
                        </div>
                        <p className="text-[11px] text-[#F4F7FA]/90 font-medium leading-snug">
                          {activeRegion.rainfallTrend}
                        </p>
                      </div>
                      <div className="p-2 rounded bg-[#0a121e]/80 border border-white/5">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#7B8794] mb-1">
                          <Waves className="w-3 h-3 text-[#55D3BD]" />
                          <span>SURFACE SIGNAL</span>
                        </div>
                        <p className="text-[11px] text-[#F4F7FA]/90 font-medium leading-snug">
                          {activeRegion.soilSaturation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Bar: Timeline of Environmental Observations */}
              <div className="p-4 bg-[#0a121e]/95 border-t border-white/10">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-[#55D3BD]" />
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#F4F7FA]">
                      Timeline of Environmental Observations (Illustrative Sequence)
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#7B8794]">
                    {activeRegion.dataSource}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2.5">
                  {activeRegion.timeline.map((item, index) => (
                    <div
                      key={index}
                      className="p-2.5 rounded-lg bg-[#101C2C] border border-white/10 hover:border-[#55D3BD]/40 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-mono text-[10px] text-[#55D3BD]">{item.time}</span>
                        <span className="px-1.5 py-0.5 rounded bg-[#1D3557] text-[9px] font-mono text-[#F4F7FA]/80">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#F4F7FA] mb-0.5">{item.event}</p>
                      <p className="text-[11px] text-[#7B8794] leading-snug">{item.detail}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-2.5 text-[11px] font-mono text-[#7B8794] text-right">
                  * Interface elements shown above are illustrative product mockups, not operational measurements or validated forecasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

