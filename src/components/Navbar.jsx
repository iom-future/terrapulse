import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Radio } from 'lucide-react';
import TerraPulseLogo from '../assets/logo/TerraPulseLogo';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 28);

      const sectionIds = ['platform', 'capabilities', 'use-cases', 'about', 'team', 'pilot', 'faq'];
      const scrollPosition = window.scrollY + 180;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#101C2C]/95 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] py-3.5'
          : 'bg-gradient-to-b from-[#101C2C]/90 via-[#101C2C]/50 to-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Brand Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55D3BD] rounded-lg"
            aria-label="TerraPulse Home"
          >
            <TerraPulseLogo
              markClassName="w-9 h-9 transition-transform duration-300 group-hover:scale-105"
              textClassName="text-base sm:text-lg"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-[#55D3BD] bg-white/[0.06]'
                      : 'text-[#F4F7FA]/85 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop Persistent CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1D3557]/70 border border-white/10 text-[11px] font-mono text-[#7B8794]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55D3BD]" />
              <span>NIGERIA PILOT FOCUS</span>
            </div>
            <a
              href="#pilot"
              onClick={(e) => handleNavClick(e, '#pilot')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#3978E8] hover:bg-[#2d66cc] text-white font-medium text-sm shadow-[0_0_20px_rgba(57,120,232,0.3)] hover:shadow-[0_0_25px_rgba(57,120,232,0.5)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55D3BD]"
            >
              <span>Request Early Access</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-[#F4F7FA] bg-[#1D3557]/80 border border-white/10 hover:bg-[#1D3557] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55D3BD] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-sidebar-navigation"
              aria-label="Open mobile navigation sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Slide-over Sidebar Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-sidebar-navigation"
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in Aside Drawer Panel */}
          <aside className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#101C2C] border-l border-white/15 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Header with Brand Logo & Close Button */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                <TerraPulseLogo markClassName="w-8 h-8" textClassName="text-base" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-[#1D3557]/80 border border-white/10 text-[#F4F7FA] hover:bg-[#1D3557] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55D3BD] cursor-pointer"
                  aria-label="Close navigation sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-[#1D3557] text-[#55D3BD] border border-[#55D3BD]/30'
                          : 'text-[#F4F7FA]/90 hover:bg-[#1D3557]/50 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="font-mono text-xs text-[#7B8794]">{link.href}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Sidebar Bottom CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3.5">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1D3557]/40 border border-white/5 text-xs font-mono text-[#7B8794]">
                <Radio className="w-3.5 h-3.5 text-[#55D3BD] shrink-0" />
                <span>Nigeria Flood Risk Focus</span>
              </div>
              <a
                href="#pilot"
                onClick={(e) => handleNavClick(e, '#pilot')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#3978E8] hover:bg-[#2d66cc] text-white font-semibold text-sm shadow-lg transition-colors cursor-pointer"
              >
                <span>Request Early Access</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}

