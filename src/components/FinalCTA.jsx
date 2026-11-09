import { ArrowRight, Radio } from 'lucide-react';
import heroSatelliteImg from '../assets/images/hero-satellite.jpg';

export default function FinalCTA() {
  const handleScrollToPilot = (e) => {
    e.preventDefault();
    const el = document.getElementById('pilot');
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      className="relative py-24 lg:py-32 bg-[#101C2C] text-[#F4F7FA] overflow-hidden border-b border-white/10"
      aria-labelledby="final-cta-heading"
    >
      {/* Background Satellite & Grid Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSatelliteImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width="1920"
          height="1080"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101C2C] via-[#101C2C]/85 to-[#0a121e]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-[#1D3557]/45 border border-white/15 p-8 sm:p-14 lg:p-16 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.5)]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101C2C]/90 border border-[#55D3BD]/30 mb-6">
            <Radio className="w-3.5 h-3.5 text-[#55D3BD]" />
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#55D3BD] uppercase">
              TERRAPULSE PARTNERSHIP PROGRAMME
            </span>
          </div>

          <h2
            id="final-cta-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F7FA] leading-[1.12] max-w-3xl mx-auto mb-4 sm:mb-6"
          >
            The Future of Resilience Starts With Better Intelligence.
          </h2>

          <p className="text-sm sm:text-lg lg:text-xl text-[#F4F7FA]/85 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-9">
            Environmental threats are changing. The way we prepare for them must change too.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#pilot"
              onClick={handleScrollToPilot}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#3978E8] hover:bg-[#2d66cc] text-white font-semibold text-base shadow-[0_10px_30px_rgba(57,120,232,0.4)] hover:shadow-[0_12px_35px_rgba(57,120,232,0.6)] transition-all duration-200"
            >
              <span>Partner With TerraPulse</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="font-mono text-xs sm:text-sm tracking-[0.12em] uppercase text-[#55D3BD]">
            Climate intelligence for a more resilient world.
          </p>
        </div>
      </div>
    </section>
  );
}

