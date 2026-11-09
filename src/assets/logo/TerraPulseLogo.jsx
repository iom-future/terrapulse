export function TerraPulseMark({ className = 'w-9 h-9' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Base deep navy housing */}
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="11"
        fill="#101C2C"
        stroke="#1D3557"
        strokeWidth="1.5"
      />
      {/* Planetary meridian & orbital track */}
      <circle
        cx="24"
        cy="24"
        r="15"
        stroke="#1D3557"
        strokeWidth="1.75"
        strokeDasharray="3 3"
      />
      <path
        d="M24 9C32.2843 9 39 15.7157 39 24C39 28.02 37.42 31.67 34.85 34.36"
        stroke="#3978E8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M9 24C9 17.8 12.76 12.48 18.12 10.2"
        stroke="#55D3BD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.65"
      />
      {/* Topographical & hydrological signal waveform */}
      <path
        d="M9.5 25H15.5L18.8 17.5L23.5 31.5L27.6 21L30.8 25H38.5"
        stroke="#55D3BD"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Satellite telemetry nodes */}
      <circle cx="24" cy="9" r="2.5" fill="#55D3BD" />
      <circle cx="34.8" cy="34.3" r="2.2" fill="#3978E8" />
    </svg>
  );
}

export default function TerraPulseLogo({
  className = '',
  markClassName = 'w-9 h-9',
  textClassName = 'text-lg',
  showSubtitle = false,
}) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <TerraPulseMark className={markClassName} />
      <div className="flex flex-col">
        <span
          className={`font-heading font-extrabold tracking-[0.14em] text-[#F4F7FA] leading-none ${textClassName}`}
        >
          TERRAPULSE
        </span>
        {showSubtitle && (
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#55D3BD] uppercase mt-1">
            Climate Intelligence
          </span>
        )}
      </div>
    </div>
  );
}

