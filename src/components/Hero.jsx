import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  ArrowRight,
  Compass,
  Radio,
  Activity,
} from 'lucide-react';
import { heroContent } from '../data/content';

export default function Hero() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(
        '.hero-reveal',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 }
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
      className="relative min-h-[92vh] pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-[#101C2C] border-b border-white/10 flex items-center justify-center"
    >
      {/* Cinematic Satellite Landscape as the background visual */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero-satellite.webp"
          alt="Satellite earth observation of river basin"
          width="1376"
          height="768"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-45 scale-102"
        />
        {/* Soft vignette gradients for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#101C2C]/75 via-[#101C2C]/60 to-[#101C2C]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-radial-at-c from-transparent via-[#101C2C]/50 to-[#101C2C]"
          aria-hidden="true"
        />
      </div>

      {/* Centered Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Headline */}
        <h1 className="hero-reveal font-heading text-[42px] sm:text-6xl lg:text-[72px] font-extrabold text-[#F4F7FA] leading-[1.06] tracking-tight mb-5 sm:mb-8 max-w-3xl">
          See Risk Earlier.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F7FA] via-[#55D3BD] to-[#3978E8]">
            Protect What Matters.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="hero-reveal text-sm sm:text-lg lg:text-xl text-[#F4F7FA]/90 leading-relaxed mb-8 sm:mb-10 max-w-2xl font-normal drop-shadow-sm">
          {heroContent.subheadline}
        </p>

        {/* Centered Primary & Secondary CTAs */}
        <div className="hero-reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto">
          <a
            href="#pilot"
            onClick={(e) => scrollToSection(e, 'pilot')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#3978E8] hover:bg-[#2d66cc] text-white font-semibold text-base shadow-[0_10px_35px_rgba(57,120,232,0.4)] hover:shadow-[0_12px_40px_rgba(57,120,232,0.6)] transition-all duration-200"
          >
            <span>{heroContent.primaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#platform"
            onClick={(e) => scrollToSection(e, 'platform')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#101C2C]/80 hover:bg-[#1D3557] text-[#F4F7FA] border border-white/20 hover:border-[#55D3BD]/50 font-semibold text-base transition-all duration-200 backdrop-blur-md"
          >
            <Compass className="w-4 h-4 text-[#55D3BD]" />
            <span>{heroContent.secondaryCta}</span>
          </a>
        </div>

        {/* Supporting Micro-Badges / Key Signals */}
        <div className="hero-reveal pt-6 border-t border-white/10 w-full max-w-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7B8794]">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-[#55D3BD]" />
            <span>Initial Market Focus: <strong className="text-[#F4F7FA]">Nigeria Flood Intelligence</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#3978E8]" />
            <span>Multi-Source Satellite &amp; Catchment Hydrology</span>
          </div>
        </div>

        {/* Supporting Text */}
        <p className="hero-reveal text-xs text-[#7B8794] mt-4 max-w-xl text-center leading-relaxed">
          {heroContent.supportingText}
        </p>
      </div>
    </section>
  );
}
