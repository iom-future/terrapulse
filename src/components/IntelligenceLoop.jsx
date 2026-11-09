import { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  Database,
  Cpu,
  ShieldAlert,
  RefreshCw,
  ArrowRight,
  Info,
} from 'lucide-react';
import { intelligenceLoopContent } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const stageIcons = [Database, Cpu, ShieldAlert, RefreshCw];

export default function IntelligenceLoop() {
  const sectionRef = useRef(null);
  const [selectedStageIdx, setSelectedStageIdx] = useState(0);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.to('.loop-pulse-dash', {
        strokeDashoffset: -120,
        duration: 5,
        ease: 'none',
        repeat: -1,
      });

      gsap.fromTo(
        '.loop-node-card',
        { y: 22, opacity: 0 },
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

  const activeNode = intelligenceLoopContent.cycleNodes[selectedStageIdx];

  return (
    <section
      id="intelligence"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a121e] text-[#F4F7FA] border-b border-white/10 overflow-hidden"
      aria-labelledby="intelligence-loop-heading"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D3557]/80 border border-[#55D3BD]/30 mb-4">
            <RefreshCw className="w-3.5 h-3.5 text-[#55D3BD]" />
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#55D3BD] uppercase">
              {intelligenceLoopContent.eyebrow}
            </span>
          </div>

          <h2
            id="intelligence-loop-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#F4F7FA] leading-[1.12] mb-3 sm:mb-5"
          >
            {intelligenceLoopContent.headline}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#F4F7FA]/80 leading-relaxed">
            {intelligenceLoopContent.description}
          </p>
        </div>

        {/* Continuous Loop Diagram: Observe → Analyze → Assess → Learn → Observe */}
        <div className="loop-diagram-container rounded-2xl bg-[#101C2C] border border-white/15 p-6 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#55D3BD]">
                CONTINUOUS INTELLIGENCE ARCHITECTURE
              </span>
            </div>
            <div className="font-mono text-xs text-[#F4F7FA] bg-[#1D3557]/70 px-3 py-1.5 rounded-lg border border-white/10">
              Observe <span className="text-[#55D3BD]">→</span> Analyze{' '}
              <span className="text-[#55D3BD]">→</span> Assess{' '}
              <span className="text-[#55D3BD]">→</span> Learn{' '}
              <span className="text-[#55D3BD]">→</span> Observe
            </div>
          </div>

          {/* Animated SVG Connector Track (Desktop) */}
          <div className="hidden lg:block relative h-16 mb-2">
            <svg viewBox="0 0 1000 70" className="w-full h-full overflow-visible">
              {/* Base horizontal forward path */}
              <path
                d="M 110 35 L 890 35"
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="2"
              />
              {/* Animated forward signal pulse */}
              <path
                d="M 110 35 L 890 35"
                fill="none"
                stroke="#55D3BD"
                strokeWidth="2.5"
                strokeDasharray="10 14"
                className="loop-pulse-dash"
              />
              {/* Return Continuous Feedback Arc from Learn -> Observe */}
              <path
                d="M 890 35 C 890 -15, 110 -15, 110 35"
                fill="none"
                stroke="#3978E8"
                strokeWidth="1.75"
                strokeDasharray="6 6"
                className="loop-pulse-dash"
              />
              <rect
                x="415"
                y="-12"
                width="170"
                height="20"
                rx="10"
                fill="#0a121e"
                stroke="#3978E8"
                strokeWidth="1"
              />
              <text
                x="500"
                y="2"
                textAnchor="middle"
                fill="#55D3BD"
                fontSize="10"
                fontFamily="JetBrains Mono, monospace"
              >
                CONTINUOUS REVIEW CYCLE ↺
              </text>

              {/* 4 Connection Nodes */}
              {[125, 375, 625, 875].map((cx, i) => (
                <g key={i}>
                  <circle
                    cx={cx}
                    cy="35"
                    r="10"
                    fill={selectedStageIdx === i ? '#55D3BD' : '#1D3557'}
                    stroke="#101C2C"
                    strokeWidth="3"
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* 4 Interactive Stage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {intelligenceLoopContent.cycleNodes.map((node, index) => {
              const Icon = stageIcons[index] || Database;
              const isSelected = selectedStageIdx === index;
              return (
                <button
                  key={node.step}
                  type="button"
                  onClick={() => setSelectedStageIdx(index)}
                  className={`loop-node-card text-left rounded-xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1D3557]/85 border-[#55D3BD] shadow-[0_0_30px_rgba(85,211,189,0.15)]'
                      : 'bg-[#0a121e]/80 border-white/10 hover:border-white/25 hover:bg-[#1D3557]/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#101C2C] text-[#55D3BD] border border-white/10">
                        {node.step} // {node.action.toUpperCase()}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                          isSelected
                            ? 'bg-[#55D3BD] text-[#101C2C]'
                            : 'bg-[#101C2C] text-[#3978E8] border border-white/10'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-[#F4F7FA] mb-2">
                      {node.layer}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#F4F7FA]/80 leading-relaxed mb-4">
                      {node.function}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                    <span className={isSelected ? 'text-[#55D3BD]' : 'text-[#7B8794]'}>
                      {isSelected ? 'Active Stage Inspect' : 'Click to inspect layer'}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 ${
                        isSelected ? 'text-[#55D3BD]' : 'text-[#7B8794]'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Expanded Stage Inspection Strip */}
          <div className="mt-6 p-5 rounded-xl bg-[#0a121e] border border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold text-[#55D3BD]">
                  STAGE {activeNode.step}: {activeNode.action.toUpperCase()} ({activeNode.layer})
                </span>
              </div>
              <p className="text-sm text-[#F4F7FA]/85 leading-relaxed">{activeNode.detail}</p>
            </div>
            <div className="shrink-0 font-mono text-xs text-[#7B8794] bg-[#101C2C] px-3.5 py-2 rounded-lg border border-white/10">
              Next in cycle:{' '}
              <strong className="text-[#F4F7FA]">
                {
                  intelligenceLoopContent.cycleNodes[
                    (selectedStageIdx + 1) % intelligenceLoopContent.cycleNodes.length
                  ].action
                }
              </strong>
            </div>
          </div>
        </div>

        {/* Four Interconnected Layers Specification Table + Credibility Note */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 rounded-2xl bg-[#101C2C] border border-white/10 overflow-hidden">
            <div className="px-6 py-4 bg-[#1D3557]/50 border-b border-white/10">
              <h3 className="font-heading text-base font-bold text-[#F4F7FA]">
                Four Interconnected Layers — Architecture Summary
              </h3>
            </div>
            <div className="divide-y divide-white/10">
              {intelligenceLoopContent.cycleNodes.map((row) => (
                <div
                  key={row.layer}
                  className="px-6 py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center"
                >
                  <div className="sm:col-span-4 font-heading font-bold text-sm text-[#55D3BD]">
                    {row.layer}
                  </div>
                  <div className="sm:col-span-8 text-sm text-[#F4F7FA]/85">{row.function}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Transparent Validation & Responsible Framing Note */}
          <div className="lg:col-span-4 rounded-2xl bg-[#1D3557]/35 border border-[#55D3BD]/30 p-6">
            <div className="flex items-center gap-2 text-[#55D3BD] font-mono text-xs font-semibold uppercase mb-3">
              <Info className="w-4 h-4 shrink-0" />
              <span>Responsible System Design</span>
            </div>
            <p className="text-sm text-[#F4F7FA]/85 leading-relaxed mb-4">
              {intelligenceLoopContent.credibilityNote}
            </p>
            <p className="text-xs text-[#7B8794] leading-relaxed">
              TerraPulse does not replace meteorologists, hydrologists or emergency responders. Every stage of the intelligence loop is designed to organize evidence for human review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

