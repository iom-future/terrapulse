import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquarePlus } from 'lucide-react';
import { faqContent } from '../data/content';

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState([0]);

  const toggleIndex = (idx) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((item) => item !== idx) : [...prev, idx]
    );
  };

  const allExpanded = openIndices.length === faqContent.length;

  const toggleAll = () => {
    if (allExpanded) {
      setOpenIndices([]);
    } else {
      setOpenIndices(faqContent.map((_, i) => i));
    }
  };

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-32 bg-[#F4F7FA] text-[#101C2C] bg-geo-grid-light border-b border-[#101C2C]/10"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101C2C]/5 border border-[#101C2C]/15 mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-[#3978E8]" />
              <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#1D3557] uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h2
              id="faq-heading"
              className="font-heading text-3xl sm:text-4xl font-extrabold text-[#101C2C] leading-tight"
            >
              Clear Answers on How TerraPulse Operates.
            </h2>
          </div>

          <button
            type="button"
            onClick={toggleAll}
            className="self-start sm:self-auto px-4 py-2 rounded-lg bg-white border border-[#101C2C]/15 hover:border-[#3978E8] text-xs font-mono font-semibold text-[#1D3557] transition-colors cursor-pointer"
          >
            {allExpanded ? 'Collapse All' : 'Expand All Questions'}
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqContent.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div
                key={item.question}
                className={`rounded-2xl bg-white border transition-all duration-200 ${
                  isOpen
                    ? 'border-[#3978E8] shadow-[0_10px_30px_rgba(16,28,44,0.08)]'
                    : 'border-[#101C2C]/10 hover:border-[#101C2C]/25'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleIndex(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] rounded-2xl"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#F4F7FA] text-[#3978E8] border border-[#101C2C]/10">
                        0{idx + 1}
                      </span>
                      <span className="font-heading text-base sm:text-lg font-bold text-[#101C2C]">
                        {item.question}
                      </span>
                    </div>
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-[#3978E8] text-white rotate-180'
                          : 'bg-[#F4F7FA] text-[#1D3557]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#1D3557]/90 leading-relaxed border-t border-[#101C2C]/5"
                  >
                    <div className="pl-0 sm:pl-12">{item.answer}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Prompt */}
        <div className="mt-10 p-6 rounded-2xl bg-[#101C2C] text-[#F4F7FA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MessageSquarePlus className="w-5 h-5 text-[#55D3BD] shrink-0" />
            <p className="text-sm text-[#F4F7FA]/90">
              Have a specific institutional question about pilot regions or data integration?
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
            className="px-4 py-2 rounded-lg bg-[#3978E8] hover:bg-[#2d66cc] text-xs font-semibold text-white transition-colors shrink-0"
          >
            Contact the Pilot Team
          </a>
        </div>
      </div>
    </section>
  );
}

