import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  Landmark,
  HeartHandshake,
  Network,
  ShieldCheck,
  Microscope,
  Building2,
  MapPin,
  Target,
  ArrowUpRight,
} from 'lucide-react';
import { audienceContent } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const audienceIcons = {
  Landmark,
  HeartHandshake,
  Network,
  ShieldCheck,
  Microscope,
  Building2,
};

export default function Audience() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.from('.audience-card', {
        scrollTrigger: {
          trigger: '.audience-grid',
          start: 'top 82%',
        },
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="use-cases"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#F4F7FA] text-[#101C2C] bg-geo-grid-light border-b border-[#101C2C]/10"
      aria-labelledby="audience-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101C2C]/5 border border-[#101C2C]/15 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#3978E8]" />
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#1D3557] uppercase">
              {audienceContent.eyebrow}
            </span>
          </div>

          <h2
            id="audience-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#101C2C] leading-[1.15] mb-5"
          >
            {audienceContent.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#1D3557]/85 leading-relaxed">
            TerraPulse provides actionable environmental intelligence for organizations operating on the front lines of climate resilience, infrastructure stewardship and emergency preparedness.
          </p>
        </div>

        {/* 6 Audience Cards Grid */}
        <div className="audience-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {audienceContent.cards.map((card) => {
            const Icon = audienceIcons[card.icon] || Landmark;
            return (
              <article
                key={card.title}
                className="audience-card group rounded-2xl bg-white p-7 border border-[#101C2C]/10 shadow-[0_8px_30px_rgba(16,28,44,0.05)] hover:shadow-[0_16px_40px_rgba(16,28,44,0.1)] hover:border-[#3978E8]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#101C2C] text-[#55D3BD] flex items-center justify-center mb-6 group-hover:bg-[#3978E8] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#101C2C] mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#1D3557]/85 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#101C2C]/10">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-[#7B8794] mb-1">
                    Operational Application
                  </span>
                  <p className="text-xs font-medium text-[#1D3557]">{card.useCaseExample}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Strategic Product Direction: Initial Market Focus (Nigeria & Pilot Evaluation Framework) */}
        <div className="rounded-2xl bg-[#101C2C] text-[#F4F7FA] p-7 sm:p-10 lg:p-12 border border-[#1D3557] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-geo-grid opacity-35 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Strategic Focus Description */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557] border border-[#55D3BD]/30 font-mono text-[11px] text-[#55D3BD] mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>{audienceContent.initialMarketFocus.badge}</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F4F7FA] mb-4 leading-tight">
                {audienceContent.initialMarketFocus.title}
              </h3>

              <p className="text-sm sm:text-base text-[#F4F7FA]/80 leading-relaxed mb-6">
                {audienceContent.initialMarketFocus.description}
              </p>

              <div className="p-4 rounded-xl bg-[#1D3557]/50 border border-white/10 mb-6">
                <span className="font-mono text-[11px] text-[#55D3BD] uppercase block mb-1">
                  Core Pilot Objective
                </span>
                <p className="text-xs sm:text-sm text-[#F4F7FA]/90 leading-relaxed">
                  Demonstrate that TerraPulse can help an organization understand flood exposure more effectively than its existing fragmented information sources.
                </p>
              </div>

              <a
                href="#pilot"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('pilot');
                  if (el) {
                    window.scrollTo({
                      top: el.getBoundingClientRect().top + window.pageYOffset - 80,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#3978E8] hover:bg-[#2d66cc] text-white font-semibold text-sm transition-colors"
              >
                <span>Join the Nigeria Flood Intelligence Pilot</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right: What the First Pilot Should Prove (6-Metric Evaluation Table) */}
            <div className="lg:col-span-7">
              <div className="rounded-xl bg-[#0a121e] border border-white/10 overflow-hidden">
                <div className="px-5 py-3.5 bg-[#1D3557]/60 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#55D3BD]" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F4F7FA]">
                      Pilot Programme Evaluation Framework — What We Measure Together
                    </span>
                  </div>
                </div>

                <div className="divide-y divide-white/10">
                  {audienceContent.initialMarketFocus.pilotGoals.map((goal, idx) => (
                    <div
                      key={goal.area}
                      className="px-5 py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-4 items-center hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="sm:col-span-4 flex items-center gap-2.5">
                        <span className="font-mono text-[11px] text-[#55D3BD]">
                          0{idx + 1}
                        </span>
                        <span className="font-heading font-bold text-sm text-[#F4F7FA]">
                          {goal.area}
                        </span>
                      </div>
                      <div className="sm:col-span-8 text-xs sm:text-sm text-[#7B8794]">
                        {goal.question}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

