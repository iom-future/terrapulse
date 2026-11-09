import { useState, useRef } from 'react';
import {
  Layers,
  Eye,
  EyeOff,
  Compass,
  Info,
  Check,
} from 'lucide-react';
import regionalTopoImg from '../assets/images/regional-topography.jpg';
import { futureVisionContent } from '../data/content';

export default function FutureVision() {
  const sectionRef = useRef(null);
  // Allow users to toggle multiple environmental layers simultaneously
  const [enabledLayers, setEnabledLayers] = useState(['01', '02']);
  const [focusedLayerId, setFocusedLayerId] = useState('01');

  const toggleLayer = (id) => {
    setFocusedLayerId(id);
    setEnabledLayers((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; // Keep at least one layer active
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const focusedLayer =
    futureVisionContent.layers.find((l) => l.id === focusedLayerId) ||
    futureVisionContent.layers[0];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#101C2C] text-[#F4F7FA] border-b border-white/10 overflow-hidden"
      aria-labelledby="future-vision-heading"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D3557]/80 border border-[#55D3BD]/30 mb-4">
            <Compass className="w-3.5 h-3.5 text-[#55D3BD]" />
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#55D3BD] uppercase">
              {futureVisionContent.eyebrow}
            </span>
          </div>

          <h2
            id="future-vision-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#F4F7FA] leading-[1.12] mb-3 sm:mb-5"
          >
            {futureVisionContent.headline}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#F4F7FA]/80 leading-relaxed">
            {futureVisionContent.description}
          </p>
        </div>

        {/* Interactive Multi-Layer Geographic Visualization + 5 Future Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 5 Toggleable Capability Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="px-3.5 py-2.5 rounded-xl bg-[#1D3557]/40 border border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-[#F4F7FA] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#55D3BD]" />
                Toggle Environmental Layers ({enabledLayers.length}/5 Active)
              </span>
              <button
                type="button"
                onClick={() =>
                  setEnabledLayers(
                    enabledLayers.length === 5
                      ? ['01']
                      : futureVisionContent.layers.map((l) => l.id)
                  )
                }
                className="text-[#55D3BD] hover:underline cursor-pointer"
              >
                {enabledLayers.length === 5 ? 'Reset to Base' : 'Enable All Layers'}
              </button>
            </div>

            {futureVisionContent.layers.map((layer) => {
              const isEnabled = enabledLayers.includes(layer.id);
              const isFocused = focusedLayerId === layer.id;
              return (
                <div
                  key={layer.id}
                  onClick={() => toggleLayer(layer.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleLayer(layer.id);
                    }
                  }}
                  aria-pressed={isEnabled}
                  className={`rounded-xl p-4 sm:p-5 border transition-all duration-200 cursor-pointer ${
                    isEnabled
                      ? isFocused
                        ? 'bg-[#1D3557]/85 border-[#55D3BD] shadow-lg'
                        : 'bg-[#1D3557]/45 border-[#3978E8]/50'
                      : 'bg-[#0a121e]/70 border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border text-xs shrink-0 ${
                          isEnabled
                            ? 'bg-[#55D3BD] border-[#55D3BD] text-[#101C2C]'
                            : 'bg-[#101C2C] border-white/20 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-heading font-bold text-base text-[#F4F7FA]">
                            {layer.id}. {layer.title}
                          </h3>
                          <span
                            className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                              layer.id === '01'
                                ? 'bg-[#55D3BD]/20 text-[#55D3BD]'
                                : 'bg-white/10 text-[#7B8794]'
                            }`}
                          >
                            {layer.stage}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#F4F7FA]/80 leading-relaxed">
                          {layer.description}
                        </p>
                      </div>
                    </div>

                    <span className="text-[#7B8794] shrink-0 mt-1">
                      {isEnabled ? (
                        <Eye className="w-4 h-4 text-[#55D3BD]" />
                      ) : (
                        <EyeOff className="w-4 h-4" />
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Large Multi-Layer Geographic Region Canvas */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0a121e] border border-white/15 overflow-hidden flex flex-col justify-between shadow-2xl">
            {/* Map Header */}
            <div className="px-5 py-4 bg-[#101C2C] border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="font-mono text-[10px] text-[#55D3BD] uppercase block">
                  MULTI-INDICATOR REGIONAL SYNTHESIS (ILLUSTRATIVE ROADMAP VIEW)
                </span>
                <h4 className="font-heading text-base font-bold text-[#F4F7FA]">
                  One Geographic Region — Multiple Environmental Indicators
                </h4>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#1D3557]/80 border border-white/10 font-mono text-[11px] text-[#F4F7FA]">
                Active Layers: {enabledLayers.join(', ')}
              </span>
            </div>

            {/* Interactive Map Viewport */}
            <div className="relative min-h-[380px] sm:min-h-[430px] bg-[#0a121e] overflow-hidden">
              <img
                src={regionalTopoImg}
                alt="Regional satellite terrain and watershed topography map of Nigeria and Gulf of Guinea"
                loading="lazy"
                width="1000"
                height="650"
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a121e] via-transparent to-[#0a121e]/50" />

              {/* Dynamic SVG Overlay Driven by Toggled Layers */}
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                {/* Coordinate Grid */}
                <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.2">
                  <line x1="0" y1="25" x2="100" y2="25" />
                  <line x1="0" y1="50" x2="100" y2="50" />
                  <line x1="0" y1="75" x2="100" y2="75" />
                  <line x1="25" y1="0" x2="25" y2="100" />
                  <line x1="50" y1="0" x2="50" y2="100" />
                  <line x1="75" y1="0" x2="75" y2="100" />
                </g>

                {/* Layer 01: Environmental Risk Mapping (Flood Exposure Polygons) */}
                {enabledLayers.includes('01') && (
                  <g>
                    <path
                      d="M 28 32 Q 46 44 54 56 T 48 82 L 58 84 Q 62 60 58 46 T 78 28 L 72 22 Q 56 36 48 42 T 32 26 Z"
                      fill="rgba(85, 211, 189, 0.24)"
                      stroke="#55D3BD"
                      strokeWidth="0.4"
                    />
                  </g>
                )}

                {/* Layer 02: Infrastructure Vulnerability Corridors */}
                {enabledLayers.includes('02') && (
                  <g>
                    <polyline
                      points="22,68 42,54 54,52 72,38"
                      fill="none"
                      stroke="#3978E8"
                      strokeWidth="0.7"
                      strokeDasharray="1.5 1"
                    />
                    <rect x="51.5" y="49.5" width="4" height="4" fill="#3978E8" stroke="#101C2C" strokeWidth="0.4" />
                    <rect x="33.5" y="62.5" width="4" height="4" fill="#3978E8" stroke="#101C2C" strokeWidth="0.4" />
                  </g>
                )}

                {/* Layer 03: Regional Climate Patterns (Contours) */}
                {enabledLayers.includes('03') && (
                  <g>
                    <ellipse
                      cx="56"
                      cy="42"
                      rx="24"
                      ry="14"
                      fill="rgba(85, 211, 189, 0.1)"
                      stroke="#55D3BD"
                      strokeWidth="0.35"
                      strokeDasharray="1 1"
                    />
                    <ellipse
                      cx="56"
                      cy="42"
                      rx="15"
                      ry="8"
                      fill="none"
                      stroke="#55D3BD"
                      strokeWidth="0.35"
                    />
                  </g>
                )}

                {/* Layer 04: Preparedness Planning Staging Corridors */}
                {enabledLayers.includes('04') && (
                  <g>
                    <circle
                      cx="46"
                      cy="50"
                      r="9"
                      fill="rgba(57, 120, 232, 0.2)"
                      stroke="#3978E8"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M 36 45 L 46 50 L 62 46"
                      fill="none"
                      stroke="#F4F7FA"
                      strokeWidth="0.45"
                      strokeDasharray="0.8 0.8"
                    />
                  </g>
                )}

                {/* Layer 05: Multi-Hazard Intelligence (Coastal Erosion + Northern Dry-Spell Stress) */}
                {enabledLayers.includes('05') && (
                  <g>
                    <ellipse
                      cx="68"
                      cy="22"
                      rx="18"
                      ry="9"
                      fill="rgba(245, 158, 11, 0.2)"
                      stroke="#F59E0B"
                      strokeWidth="0.4"
                      strokeDasharray="1.2 0.8"
                    />
                    <path
                      d="M 22 78 Q 38 76 52 84"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="0.9"
                    />
                  </g>
                )}
              </svg>

              {/* Floating Active Layer Callout Tags */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 max-w-md">
                {futureVisionContent.layers
                  .filter((l) => enabledLayers.includes(l.id))
                  .map((l) => (
                    <span
                      key={l.id}
                      className="px-2.5 py-1 rounded-md bg-[#101C2C]/90 border border-white/15 font-mono text-[11px] text-[#F4F7FA] flex items-center gap-1.5 shadow-md"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: l.accentColor }}
                      />
                      <span>
                        L{l.id}: {l.title}
                      </span>
                    </span>
                  ))}
              </div>

              {/* Focused Layer Detail Strip at Bottom of Map */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#101C2C]/95 border border-white/15 backdrop-blur-md">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#55D3BD]">
                    INSPECTING LAYER {focusedLayer.id}: {focusedLayer.title.toUpperCase()}
                  </span>
                  <span className="font-mono text-[11px] text-[#7B8794]">
                    {focusedLayer.stage}
                  </span>
                </div>
                <p className="text-xs text-[#F4F7FA]/85">
                  Indicator Overlay: <strong className="text-white">{focusedLayer.mapIndicator}</strong>
                </p>
              </div>
            </div>

            {/* Footer Credibility Notice */}
            <div className="px-5 py-3.5 bg-[#101C2C] border-t border-white/10 flex items-center gap-2.5 text-xs text-[#7B8794]">
              <Info className="w-4 h-4 text-[#55D3BD] shrink-0" />
              <span>{futureVisionContent.roadmapNotice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

