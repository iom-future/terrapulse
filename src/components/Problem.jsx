import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Clock, Layers, Compass, History, AlertCircle, ArrowRight } from 'lucide-react';
import { problemContent } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  ClockAlert: Clock,
  Layers: Layers,
  Compass: Compass,
  History: History,
};

export default function Problem() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        '.problem-header',
        { y: 24, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        '.problem-card',
        { y: 28, opacity: 0 },
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
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#F4F7FA] text-[#101C2C] bg-geo-grid-light border-b border-[#101C2C]/10"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="problem-header max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101C2C]/5 border border-[#101C2C]/15 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#3978E8]" />
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#1D3557] uppercase">
              {problemContent.eyebrow}
            </span>
          </div>

          <h2
            id="problem-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#101C2C] leading-[1.15] mb-5"
          >
            {problemContent.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#1D3557]/85 leading-relaxed">
            {problemContent.description}
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="problem-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {problemContent.cards.map((card) => {
            const IconComponent = iconMap[card.icon] || AlertCircle;
            return (
              <article
                key={card.number}
                className="problem-card group relative rounded-2xl bg-white p-7 border border-[#101C2C]/10 shadow-[0_8px_30px_rgba(16,28,44,0.05)] hover:shadow-[0_16px_40px_rgba(16,28,44,0.1)] hover:border-[#3978E8]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Number & Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#101C2C] text-[#55D3BD] tracking-wider">
                      {card.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F4F7FA] border border-[#101C2C]/10 flex items-center justify-center text-[#1D3557] group-hover:bg-[#3978E8] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-heading text-xl font-bold text-[#101C2C] mb-3 leading-snug">
                    {card.number}. {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm text-[#1D3557]/85 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Operational Tag */}
                <div className="pt-4 border-t border-[#101C2C]/10 flex items-center justify-between text-[11px] font-mono text-[#7B8794]">
                  <span>{card.contextTag}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3978E8]/60 group-hover:bg-[#3978E8]" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing Statement Banner */}
        <div className="rounded-2xl bg-[#101C2C] text-[#F4F7FA] p-8 sm:p-10 border border-[#1D3557] shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-geo-grid opacity-40 pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#55D3BD] uppercase tracking-wider mb-2">
                <span>CORE OPERATIONAL BOTTLENECK</span>
              </div>
              <p className="font-heading text-xl sm:text-2xl font-bold text-[#F4F7FA] leading-snug">
                {problemContent.closingStatement}
              </p>
            </div>

            <a
              href="#platform"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('platform');
                if (el) {
                  window.scrollTo({
                    top: el.getBoundingClientRect().top + window.pageYOffset - 80,
                    behavior: 'smooth',
                  });
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#1D3557] hover:bg-[#3978E8] text-[#F4F7FA] font-semibold text-sm border border-white/10 transition-colors shrink-0 self-start lg:self-center"
            >
              <span>See How TerraPulse Works</span>
              <ArrowRight className="w-4 h-4 text-[#55D3BD]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

