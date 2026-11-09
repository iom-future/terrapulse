import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Users, MapPin } from 'lucide-react';
import aminaImg from '../assets/images/team_amina_bello.jpg';
import chukwumaImg from '../assets/images/team_chukwuma_eze.jpg';
import zainabImg from '../assets/images/team_zainab_ibrahim.jpg';
import damilolaImg from '../assets/images/team_damilola_adebayo.jpg';
import halimaImg from '../assets/images/team_halima_yusuf.jpg';
import emekaImg from '../assets/images/team_emeka_nnamdi.jpg';
import { teamContent } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const teamImageMap = {
  team_amina_bello: aminaImg,
  team_chukwuma_eze: chukwumaImg,
  team_zainab_ibrahim: zainabImg,
  team_damilola_adebayo: damilolaImg,
  team_halima_yusuf: halimaImg,
  team_emeka_nnamdi: emekaImg,
};

export default function Team() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        '.team-member-card',
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
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#101C2C] text-[#F4F7FA] border-b border-white/10 overflow-hidden"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D3557]/80 border border-[#55D3BD]/30 mb-4">
            <Users className="w-3.5 h-3.5 text-[#55D3BD]" />
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#55D3BD] uppercase">
              {teamContent.eyebrow}
            </span>
          </div>

          <h2
            id="team-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#F4F7FA] leading-[1.12] mb-3 sm:mb-5"
          >
            {teamContent.headline}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#F4F7FA]/80 leading-relaxed">
            {teamContent.description}
          </p>
        </div>

        {/* 6 Team Member Cards in Responsive 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {teamContent.members.map((member) => {
            const photo = teamImageMap[member.imageKey];
            return (
              <article
                key={member.id}
                className="team-member-card group rounded-2xl bg-[#1D3557]/35 border border-white/10 hover:border-[#55D3BD]/40 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0a121e]">
                    <img
                      src={photo}
                      alt={member.name}
                      width="400"
                      height="450"
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-104"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101C2C] via-[#101C2C]/20 to-transparent" />

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#101C2C]/90 border border-white/10 font-mono text-[11px] text-[#55D3BD]">
                        <MapPin className="w-3 h-3" />
                        {member.location}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 pb-6">
                    <h3 className="font-heading font-bold text-xl text-[#F4F7FA] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#55D3BD] mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs sm:text-sm text-[#F4F7FA]/75 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
