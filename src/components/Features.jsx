import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  MapPin,
  Satellite,
  CloudRain,
  Building,
  BellRing,
  History,
  Check,
  Download,
} from 'lucide-react';
import sarFloodImg from '../assets/images/sar-flood-observation.jpg';
import { featuresContent } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const featureIcons = {
  '01': MapPin,
  '02': Satellite,
  '03': CloudRain,
  '04': Building,
  '05': BellRing,
  '06': History,
};

function FeatureVisual({ type }) {
  switch (type) {
    case 'geospatial-grid':
      return (
        <div className="h-44 rounded-xl bg-[#0a121e] border border-white/10 p-3.5 relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#7B8794] z-10">
            <span>EXPOSURE MAPPING ENGINE</span>
            <span className="text-[#55D3BD]">ILLUSTRATIVE</span>
          </div>
          <svg viewBox="0 0 280 110" className="w-full h-24">
            <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
              <line x1="0" y1="25" x2="280" y2="25" />
              <line x1="0" y1="55" x2="280" y2="55" />
              <line x1="0" y1="85" x2="280" y2="85" />
              <line x1="70" y1="0" x2="70" y2="110" />
              <line x1="140" y1="0" x2="140" y2="110" />
              <line x1="210" y1="0" x2="210" y2="110" />
            </g>
            <polygon
              points="45,85 95,30 165,25 225,65 185,98 85,95"
              fill="rgba(85,211,189,0.16)"
              stroke="#55D3BD"
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />
            <polygon
              points="90,75 130,42 180,48 165,84"
              fill="rgba(57,120,232,0.28)"
              stroke="#3978E8"
              strokeWidth="1.5"
            />
            <circle cx="138" cy="62" r="4" fill="#55D3BD" />
            <text x="148" y="65" fill="#F4F7FA" fontSize="9" fontFamily="JetBrains Mono, monospace">
              Zone A-04
            </text>
          </svg>
          <div className="flex items-center justify-between text-[10px] font-mono text-[#7B8794] z-10">
            <span>Layers: Vulnerability + DEM</span>
            <span className="text-[#3978E8]">3 Zones Flagged</span>
          </div>
        </div>
      );

    case 'satellite-sar':
      return (
        <div className="h-44 rounded-xl bg-[#0a121e] border border-white/10 relative overflow-hidden">
          <img
            src={sarFloodImg}
            alt="Illustrative satellite observation comparison"
            loading="lazy"
            width="500"
            height="280"
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a121e] via-[#0a121e]/30 to-transparent" />
          {/* Split Before / After Pass Overlay */}
          <div className="absolute inset-y-0 left-1/2 w-0.5 bg-[#55D3BD]/80" />
          <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#101C2C]/90 border border-white/10 text-[10px] font-mono text-[#7B8794]">
            PASS T-14D (BASELINE)
          </div>
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#101C2C]/90 border border-[#55D3BD]/40 text-[10px] font-mono text-[#55D3BD]">
            PASS T-0D (CHANGE DETECTED)
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-[#F4F7FA] bg-[#101C2C]/90 px-2.5 py-1.5 rounded border border-white/10">
            <span>SAR Surface Water Delta</span>
            <span className="text-[#55D3BD]">Illustrative Comparison</span>
          </div>
        </div>
      );

    case 'flood-signals':
      return (
        <div className="h-44 rounded-xl bg-[#0a121e] border border-white/10 p-3.5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-[#7B8794]">RAINFALL & STAGE SIGNALS</span>
            <span className="text-amber-300">THRESHOLD WATCH (SAMPLE)</span>
          </div>
          {/* Hydrological Bar + Curve Chart */}
          <svg viewBox="0 0 280 90" className="w-full h-24">
            {/* Threshold line */}
            <line
              x1="0"
              y1="28"
              x2="280"
              y2="28"
              stroke="#F59E0B"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
            <text x="6" y="22" fill="#F59E0B" fontSize="8" fontFamily="JetBrains Mono, monospace">
              Monitoring Threshold (Illustrative)
            </text>
            {/* Rainfall Bars */}
            {[22, 28, 35, 48, 62, 58, 70, 76].map((val, idx) => (
              <rect
                key={idx}
                x={18 + idx * 32}
                y={85 - val * 0.7}
                width="16"
                height={val * 0.7}
                rx="2"
                fill={idx >= 6 ? '#55D3BD' : '#3978E8'}
                fillOpacity={idx >= 6 ? '0.85' : '0.45'}
              />
            ))}
            {/* River Stage Trend Curve */}
            <path
              d="M26,72 Q90,65 150,48 T250,24"
              fill="none"
              stroke="#55D3BD"
              strokeWidth="2"
            />
          </svg>
          <div className="flex items-center justify-between text-[10px] font-mono text-[#7B8794]">
            <span>Precipitation + Basin Stage</span>
            <span className="text-[#55D3BD]">Early Signal Active</span>
          </div>
        </div>
      );

    case 'infrastructure-context':
      return (
        <div className="h-44 rounded-xl bg-[#0a121e] border border-white/10 p-3.5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-[#7B8794]">CRITICAL ASSET OVERLAY</span>
            <span className="text-[#55D3BD]">SAMPLE INVENTORY</span>
          </div>
          <div className="space-y-2 my-auto">
            {[
              { asset: 'Primary Highway Corridor & Bridges', risk: 'Elevated Exposure', color: 'text-amber-300' },
              { asset: 'District Healthcare & Clinic Nodes', risk: 'Access Route Watch', color: 'text-[#55D3BD]' },
              { asset: 'Regional Power Substation Sector', risk: 'Perimeter Monitored', color: 'text-[#3978E8]' },
            ].map((item, i) => (
              <div
                key={i}
                className="px-2.5 py-1.5 rounded bg-[#101C2C] border border-white/5 flex items-center justify-between text-[11px]"
              >
                <span className="text-[#F4F7FA]/90 truncate pr-2">{item.asset}</span>
                <span className={`font-mono text-[10px] shrink-0 ${item.color}`}>{item.risk}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-[#7B8794]">
            <span>Infrastructure Intersections</span>
            <span>Location-Specific Context</span>
          </div>
        </div>
      );

    case 'alerts-workflow':
      return (
        <div className="h-44 rounded-xl bg-[#0a121e] border border-white/10 p-3.5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-[#7B8794]">CONFIGURABLE THRESHOLD ALERTS</span>
            <span className="text-[#3978E8]">WORKFLOW LOG</span>
          </div>
          <div className="p-3 rounded-lg bg-[#101C2C] border border-[#55D3BD]/30 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-[#55D3BD]/15 text-[#55D3BD] font-mono text-[10px]">
                ALERT #TP-204 (SAMPLE)
              </span>
              <span className="font-mono text-[10px] text-[#7B8794]">T - 02h 15m</span>
            </div>
            <p className="text-xs font-semibold text-[#F4F7FA]">
              Flood Exposure Threshold Reached — Sample Ward B
            </p>
            <p className="text-[11px] text-[#7B8794]">
              Routed to: Emergency Operations Desk & Infrastructure Duty Officer
            </p>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-[#7B8794]">
            <span>Escalation: Multi-Stage Review</span>
            <span className="text-[#55D3BD]">Audit Trail Logged</span>
          </div>
        </div>
      );

    case 'historical-trends':
    default:
      return (
        <div className="h-44 rounded-xl bg-[#0a121e] border border-white/10 p-3.5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-[#7B8794]">MULTI-YEAR SEASONAL RECORD</span>
            <span className="inline-flex items-center gap-1 text-[#55D3BD]">
              <Download className="w-3 h-3" /> CSV / PDF BRIEF
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2 my-auto">
            {[
              { yr: 'Year 1', status: 'Moderate Peak', bar: 'h-10 bg-[#1D3557]' },
              { yr: 'Year 2', status: 'High Floodplain', bar: 'h-16 bg-[#3978E8]' },
              { yr: 'Year 3', status: 'Baseline', bar: 'h-8 bg-[#1D3557]' },
              { yr: 'Current', status: 'Monitoring', bar: 'h-14 bg-[#55D3BD]' },
            ].map((col, i) => (
              <div
                key={i}
                className="p-2 rounded bg-[#101C2C] border border-white/5 flex flex-col items-center justify-end"
              >
                <div className={`w-full rounded-sm ${col.bar} mb-1.5`} />
                <span className="font-mono text-[10px] text-[#F4F7FA]">{col.yr}</span>
                <span className="font-mono text-[9px] text-[#7B8794] truncate max-w-full">
                  {col.status}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-[#7B8794]">
            <span>Recurring Pattern Archive</span>
            <span>Illustrative Trend</span>
          </div>
        </div>
      );
  }
}

export default function Features() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        '.feature-card',
        { y: 26, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#101C2C] text-[#F4F7FA] border-b border-white/10"
      aria-labelledby="capabilities-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D3557]/80 border border-[#3978E8]/40 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#3978E8]" />
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#55D3BD] uppercase">
              {featuresContent.eyebrow}
            </span>
          </div>

          <h2
            id="capabilities-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#F4F7FA] leading-[1.15] mb-5"
          >
            {featuresContent.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#F4F7FA]/80 leading-relaxed">
            {featuresContent.description}
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featuresContent.features.map((feat) => {
            const Icon = featureIcons[feat.id] || MapPin;
            return (
              <article
                key={feat.id}
                className="feature-card group rounded-2xl bg-[#1D3557]/35 hover:bg-[#1D3557]/55 border border-white/10 hover:border-[#3978E8]/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_12px_35px_rgba(0,0,0,0.25)]"
              >
                <div>
                  {/* Top Feature Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#101C2C] text-[#55D3BD] border border-white/10">
                        Feature {feat.id}
                      </span>
                      <span className="font-mono text-[10px] text-[#7B8794]">
                        {feat.layerBadge}
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-[#101C2C] border border-white/10 flex items-center justify-center text-[#55D3BD] group-hover:bg-[#3978E8] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Feature Title & Subtitle */}
                  <h3 className="font-heading text-xl font-bold text-[#F4F7FA] mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-[#F4F7FA]/75 leading-relaxed mb-5">
                    {feat.subtitle}
                  </p>

                  {/* Embedded Product Visual Mockup */}
                  <div className="mb-6">
                    <FeatureVisual type={feat.visualType} />
                  </div>
                </div>

                {/* Feature Bullet List */}
                <ul className="space-y-2 pt-4 border-t border-white/10">
                  {feat.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F4F7FA]/85"
                    >
                      <span className="w-4 h-4 rounded-full bg-[#55D3BD]/15 border border-[#55D3BD]/40 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#55D3BD]" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

