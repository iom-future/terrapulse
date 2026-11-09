import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  FileSearch,
  AlertCircle,
  Users,
  Lock,
  ShieldCheck,
  Clock,
  Database,
  MapPin,
  RefreshCw,
  Info,
} from 'lucide-react';
import { trustContent } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const principleIcons = {
  FileSearch,
  AlertCircle,
  Users,
  Lock,
};

export default function Trust() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.from('.trust-principle-card', {
        scrollTrigger: {
          trigger: '.trust-principles-grid',
          start: 'top 82%',
        },
        y: 22,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    },
    { scope: sectionRef }
  );

  const panel = trustContent.sampleAssessmentPanel;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a121e] text-[#F4F7FA] border-b border-white/10"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D3557]/80 border border-[#55D3BD]/30 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#55D3BD]" />
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#55D3BD] uppercase">
              {trustContent.eyebrow}
            </span>
          </div>

          <h2
            id="trust-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#F4F7FA] leading-[1.15] mb-5"
          >
            {trustContent.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#F4F7FA]/80 leading-relaxed">
            {trustContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Four Responsible Intelligence Principles */}
          <div className="lg:col-span-6 trust-principles-grid grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustContent.principles.map((item, idx) => {
              const Icon = principleIcons[item.icon] || ShieldCheck;
              return (
                <article
                  key={item.title}
                  className="trust-principle-card rounded-2xl bg-[#101C2C] border border-white/10 hover:border-[#55D3BD]/40 p-6 flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs text-[#55D3BD]">
                        PRINCIPLE 0{idx + 1}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#1D3557]/70 border border-white/10 flex items-center justify-center text-[#55D3BD]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-[#F4F7FA] mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#F4F7FA]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#7B8794]">
                    <span>OPERATIONAL SAFEGUARD</span>
                    <span className="text-[#55D3BD]">REQUIRED</span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Right Column: Sample Risk Assessment Panel */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#101C2C] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Panel Header */}
              <div className="px-6 py-4 bg-[#1D3557]/60 border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#55D3BD]" />
                  <span className="font-mono text-xs font-bold tracking-wider text-[#F4F7FA]">
                    {panel.headerLabel}
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-[#101C2C] border border-white/10 font-mono text-[10px] text-[#55D3BD]">
                  TRANSPARENCY VIEW
                </span>
              </div>

              {/* Panel Body */}
              <div className="p-6 space-y-5">
                {/* 1. Assessment Status & 2. Observation Timestamp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#0a121e] border border-white/10">
                    <span className="font-mono text-[10px] uppercase text-[#7B8794] block mb-1">
                      Assessment status
                    </span>
                    <p className="font-heading font-bold text-sm text-amber-300">
                      {panel.assessmentStatus}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0a121e] border border-white/10">
                    <span className="font-mono text-[10px] uppercase text-[#7B8794] flex items-center gap-1 mb-1">
                      <Clock className="w-3 h-3 text-[#55D3BD]" />
                      Observation timestamp
                    </span>
                    <p className="font-mono text-xs text-[#F4F7FA]">
                      {panel.observationTimestamp}
                    </p>
                  </div>
                </div>

                {/* 3. Data Source */}
                <div className="p-4 rounded-xl bg-[#0a121e] border border-white/10">
                  <span className="font-mono text-[10px] uppercase text-[#7B8794] flex items-center gap-1.5 mb-2">
                    <Database className="w-3.5 h-3.5 text-[#3978E8]" />
                    Data source traceability
                  </span>
                  <ul className="space-y-1.5">
                    {panel.dataSources.map((src, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-[#F4F7FA]/85 font-mono"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3978E8]" />
                        <span>{src}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Confidence or Uncertainty Indicator */}
                <div className="p-4 rounded-xl bg-[#1D3557]/35 border border-amber-400/30">
                  <span className="font-mono text-[10px] uppercase text-amber-300 flex items-center gap-1.5 mb-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                    Confidence or uncertainty indicator (Where Validated)
                  </span>
                  <p className="text-xs text-[#F4F7FA]/90 leading-relaxed">
                    {panel.uncertaintyIndicator}
                  </p>
                </div>

                {/* 5. Geographic Area Covered & 6. Recommended Next Review */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#0a121e] border border-white/10">
                    <span className="font-mono text-[10px] uppercase text-[#7B8794] flex items-center gap-1 mb-1">
                      <MapPin className="w-3 h-3 text-[#55D3BD]" />
                      Geographic area covered
                    </span>
                    <p className="text-xs text-[#F4F7FA]/90 leading-snug">
                      {panel.geographicAreaCovered}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0a121e] border border-white/10">
                    <span className="font-mono text-[10px] uppercase text-[#7B8794] flex items-center gap-1 mb-1">
                      <RefreshCw className="w-3 h-3 text-[#3978E8]" />
                      Recommended next review
                    </span>
                    <p className="text-xs text-[#F4F7FA]/90 leading-snug">
                      {panel.recommendedNextReview}
                    </p>
                  </div>
                </div>

                {/* Bottom Credibility Safeguard */}
                <div className="pt-2 flex items-start gap-2 text-[11px] font-mono text-[#7B8794]">
                  <Info className="w-3.5 h-3.5 text-[#55D3BD] shrink-0 mt-0.5" />
                  <span>
                    Sample interface layout. TerraPulse does not display unvalidated confidence percentages or present model outputs as verified field observations.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

