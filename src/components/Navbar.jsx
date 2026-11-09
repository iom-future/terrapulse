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

      const sectionIds = ['platform', 'intelligence', 'use-cases', 'about', 'pilot', 'faq'];
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
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-[#F4F7FA] bg-[#1D3557]/80 border border-white/10 hover:bg-[#1D3557] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55D3BD]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden bg-[#101C2C] border-b border-white/10 px-4 pt-4 pb-6 shadow-2xl"
        >
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1D3557] text-[#55D3BD]'
                      : 'text-[#F4F7FA]/90 hover:bg-[#1D3557]/50 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[#7B8794]">{link.href}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-5 pt-5 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1D3557]/40 border border-white/5 text-xs font-mono text-[#7B8794]">
              <Radio className="w-3.5 h-3.5 text-[#55D3BD]" />
              <span>Initial Focus: Flood-Risk Intelligence (Nigeria)</span>
            </div>
            <a
              href="#pilot"
              onClick={(e) => handleNavClick(e, '#pilot')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#3978E8] hover:bg-[#2d66cc] text-white font-semibold text-sm shadow-lg transition-colors"
            >
              <span>Request Early Access</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

