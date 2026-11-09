import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Quote, Building2, MapPin, ShieldCheck } from 'lucide-react';
import tundeImg from '../assets/images/testimonial_tunde_adeyemi.jpg';
import ngoziImg from '../assets/images/testimonial_ngozi_okonkwo.jpg';
import faroukImg from '../assets/images/testimonial_farouk_umar.jpg';
import { testimonialsContent } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const imageMap = {
  testimonial_tunde_adeyemi: tundeImg,
  testimonial_ngozi_okonkwo: ngoziImg,
  testimonial_farouk_umar: faroukImg,
};

export default function Testimonials() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        '.testimonial-card',
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
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#F4F7FA] text-[#101C2C] border-b border-[#101C2C]/10"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101C2C]/5 border border-[#101C2C]/15 mb-4">
            <Quote className="w-3.5 h-3.5 text-[#3978E8]" />
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#1D3557] uppercase">
              {testimonialsContent.eyebrow}
            </span>
          </div>

          <h2
            id="testimonials-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101C2C] leading-[1.12] mb-3 sm:mb-5"
          >
            {testimonialsContent.headline}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#1D3557]/85 leading-relaxed">
            {testimonialsContent.description}
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-10">
          {testimonialsContent.testimonials.map((item) => {
            const avatar = imageMap[item.imageKey];
            return (
              <article
                key={item.id}
                className="testimonial-card rounded-2xl bg-white p-7 sm:p-8 border border-[#101C2C]/10 shadow-[0_10px_35px_rgba(16,28,44,0.06)] hover:shadow-[0_18px_45px_rgba(16,28,44,0.12)] hover:border-[#3978E8]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#101C2C] text-[#55D3BD] flex items-center justify-center">
                      <Quote className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[#7B8794]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#55D3BD]" />
                      Advisory Contributor
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#1D3557]/90 leading-relaxed italic mb-8">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-5 border-t border-[#101C2C]/10 flex items-center gap-4">
                  <img
                    src={avatar}
                    alt={item.name}
                    width="56"
                    height="56"
                    loading="lazy"
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#55D3BD]/50 shrink-0"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#101C2C]">
                      {item.name}
                    </h3>
                    <p className="text-xs font-medium text-[#3978E8]">{item.role}</p>
                    <p className="text-[11px] text-[#7B8794] mt-0.5 flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-[#7B8794]" />
                      <span>{item.organization}</span>
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Framing & Integrity Notice */}
        <div className="p-4 rounded-xl bg-white border border-[#101C2C]/10 flex items-center gap-2.5 text-xs text-[#7B8794]">
          <MapPin className="w-4 h-4 text-[#3978E8] shrink-0" />
          <span>{testimonialsContent.disclaimer}</span>
        </div>
      </div>
    </section>
  );
}

