import { useState } from 'react';
import { X, ArrowUpRight, Shield, FileText, BookOpen } from 'lucide-react';
import TerraPulseLogo from '../assets/logo/TerraPulseLogo';

const resourceModals = {
  insights: {
    title: 'TerraPulse Environmental Intelligence Briefs',
    subtitle: 'Strategic Product Direction & Watershed Focus',
    icon: BookOpen,
    body: [
      'TerraPulse begins with a focused mission: helping organizations in Nigeria identify and monitor flood exposure before and during high-risk periods.',
      'Rather than claiming universal natural disaster prediction from day one, our analytical methodology focuses on combining satellite Earth observation (SAR and optical passes), meteorological precipitation feeds, digital elevation models (DEM) and verified local field observations into actionable location-specific insights.',
      'Organizations participating in the early access programme receive periodic situational briefings and methodology documentation tailored to their pilot region.',
    ],
  },
  documentation: {
    title: 'Platform Architecture & Data Documentation',
    subtitle: 'Overview of Layers, Traceability & Human-in-the-Loop Workflows',
    icon: FileText,
    body: [
      '1. Environmental Data Layer: Integrates multi-spectral and Synthetic Aperture Radar (SAR) satellite observations, weather system precipitation data, topographic drainage models and structured local observations.',
      '2. Intelligence Engine: Applies geospatial processing and change detection to highlight surface water expansion, catchment saturation and low-lying corridor exposure.',
      '3. Risk Intelligence & Traceability: Every assessment panel surfaces source timestamps, geographic coverage boundaries and explicit uncertainty notes.',
      '4. Operational Decision Support: Designed to assist—never replace—meteorologists, hydrologists and emergency response authorities.',
    ],
  },
  privacy: {
    title: 'Privacy Policy & Responsible Data Practices',
    subtitle: 'Institutional Data Protection & Operational Safeguards',
    icon: Shield,
    body: [
      'Responsible Data Collection: TerraPulse collects only the institutional contact and pilot scoping details voluntarily submitted through our Early Access Programme form.',
      'Operational Security & Sensitive Locations: TerraPulse enforces strict access controls around sensitive infrastructure coordinates and community observations shared during pilot engagements.',
      'No Third-Party Commercial Resale: Contact details and organizational pilot inquiries are used solely for evaluating collaboration opportunities and are never sold or shared with external advertising networks.',
    ],
  },
};

export default function Footer() {
  const [activeModalKey, setActiveModalKey] = useState(null);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth',
      });
    }
  };

  const activeModal = activeModalKey ? resourceModals[activeModalKey] : null;

  return (
    <footer className="bg-[#0a121e] text-[#F4F7FA] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block mb-4 focus:outline-none"
            >
              <TerraPulseLogo showSubtitle />
            </a>

            <p className="text-sm text-[#7B8794] leading-relaxed max-w-sm mb-6">
              Turning environmental data into intelligence that helps organizations understand risk, prepare earlier and protect what matters.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                {
                  name: 'LinkedIn',
                  href: 'https://www.linkedin.com',
                  label: 'IN',
                },
                {
                  name: 'X',
                  href: 'https://x.com',
                  label: 'X',
                },
                {
                  name: 'YouTube',
                  href: 'https://www.youtube.com',
                  label: 'YT',
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`TerraPulse on ${social.name}`}
                  className="px-3 py-1.5 rounded-lg bg-[#101C2C] hover:bg-[#1D3557] border border-white/10 hover:border-[#55D3BD]/40 text-xs font-mono text-[#F4F7FA]/85 hover:text-[#55D3BD] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Platform */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-[#55D3BD] mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#platform"
                  onClick={(e) => scrollToSection(e, 'platform')}
                  className="text-[#7B8794] hover:text-[#F4F7FA] transition-colors"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#intelligence"
                  onClick={(e) => scrollToSection(e, 'intelligence')}
                  className="text-[#7B8794] hover:text-[#F4F7FA] transition-colors"
                >
                  Environmental Intelligence
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => scrollToSection(e, 'platform')}
                  className="text-[#7B8794] hover:text-[#F4F7FA] transition-colors"
                >
                  Flood Monitoring
                </a>
              </li>
              <li>
                <a
                  href="#capabilities"
                  onClick={(e) => scrollToSection(e, 'capabilities')}
                  className="text-[#7B8794] hover:text-[#F4F7FA] transition-colors"
                >
                  Risk Assessment
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-[#55D3BD] mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#platform"
                  onClick={(e) => scrollToSection(e, 'platform')}
                  className="text-[#7B8794] hover:text-[#F4F7FA] transition-colors"
                >
                  About TerraPulse
                </a>
              </li>
              <li>
                <a
                  href="#intelligence"
                  onClick={(e) => scrollToSection(e, 'intelligence')}
                  className="text-[#7B8794] hover:text-[#F4F7FA] transition-colors"
                >
                  Our Approach
                </a>
              </li>
              <li>
                <a
                  href="#pilot"
                  onClick={(e) => scrollToSection(e, 'pilot')}
                  className="text-[#7B8794] hover:text-[#F4F7FA] transition-colors"
                >
                  Pilot Programme
                </a>
              </li>
              <li>
                <a
                  href="#pilot"
                  onClick={(e) => scrollToSection(e, 'pilot')}
                  className="text-[#7B8794] hover:text-[#F4F7FA] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-[#55D3BD] mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModalKey('insights')}
                  className="text-[#7B8794] hover:text-[#F4F7FA] transition-colors cursor-pointer text-left"
                >
                  Insights
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModalKey('documentation')}
                  className="text-[#7B8794] hover:text-[#F4F7FA] transition-colors cursor-pointer text-left"
                >
                  Documentation
                </button>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => scrollToSection(e, 'faq')}
                  className="text-[#7B8794] hover:text-[#F4F7FA] transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModalKey('privacy')}
                  className="text-[#7B8794] hover:text-[#F4F7FA] transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#7B8794]">
          <p>© 2026 TerraPulse. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            See Risk Earlier. Protect What Matters. • Initial Focus: Flood-Risk Intelligence
          </p>
        </div>
      </div>

      {/* Resource / Policy Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="footer-modal-title"
          onClick={() => setActiveModalKey(null)}
        >
          <div
            className="max-w-xl w-full rounded-2xl bg-[#101C2C] border border-white/15 p-6 sm:p-8 shadow-2xl text-[#F4F7FA]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 mb-5">
              <div>
                <span className="font-mono text-xs text-[#55D3BD] uppercase block mb-1">
                  {activeModal.subtitle}
                </span>
                <h4 id="footer-modal-title" className="font-heading text-xl font-bold">
                  {activeModal.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalKey(null)}
                aria-label="Close dialog"
                className="p-2 rounded-lg bg-[#1D3557]/60 hover:bg-[#1D3557] text-[#F4F7FA] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3.5 text-sm text-[#F4F7FA]/85 leading-relaxed mb-6">
              {activeModal.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setActiveModalKey(null)}
                className="px-4 py-2 rounded-lg bg-[#3978E8] hover:bg-[#2d66cc] text-xs font-semibold text-white cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

