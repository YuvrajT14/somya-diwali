export default function DiyaArt({ lit = false, idPrefix = "diya", className = "" }) {
  const p = idPrefix;

  return (
    <svg viewBox="0 0 240 210" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${p}-body`} x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#FAE7B6" />
          <stop offset="24%" stopColor="#E2B678" />
          <stop offset="58%" stopColor="#B47B3C" />
          <stop offset="100%" stopColor="#5C3313" />
        </linearGradient>
        <linearGradient id={`${p}-rim`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF6D8" />
          <stop offset="40%" stopColor="#F0CC8D" />
          <stop offset="72%" stopColor="#D9A868" />
          <stop offset="100%" stopColor="#BE8B4C" />
        </linearGradient>
        <radialGradient id={`${p}-flame`} cx="50%" cy="80%" r="66%">
          <stop offset="0%" stopColor="#FFFDF2" />
          <stop offset="40%" stopColor="#FFE39A" />
          <stop offset="74%" stopColor="#FFAE4F" />
          <stop offset="100%" stopColor="#FF8B2E" stopOpacity="0.05" />
        </radialGradient>
        <radialGradient id={`${p}-halo`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD68E" stopOpacity="0.55" />
          <stop offset="52%" stopColor="#FFB55F" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFB55F" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${p}-pool`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD08A" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#FFC078" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFC078" stopOpacity="0" />
        </radialGradient>
        <filter id={`${p}-soft`} x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      {lit ? <ellipse cx="120" cy="199" rx="120" ry="18" fill={`url(#${p}-pool)`} /> : null}

      {lit ? (
        <g className="diwali-halo-ignite">
          <circle cx="120" cy="92" r="74" fill={`url(#${p}-halo)`} filter={`url(#${p}-soft)`} />
        </g>
      ) : null}

      {lit ? (
        <g className="diwali-flame-ignite" style={{ transformOrigin: "120px 116px" }}>
          <g className="diwali-flicker" style={{ transformOrigin: "120px 116px" }}>
            <path
              d="M120 32 C 103 62, 97 83, 100 97 C 103 117, 137 117, 140 97 C 143 83, 137 62, 120 32 Z"
              fill={`url(#${p}-flame)`}
            />
            <path
              d="M120 62 C 112 80, 109 91, 111 100 C 113 113, 127 113, 129 100 C 131 91, 128 80, 120 62 Z"
              fill="#FFF8DE"
              opacity="0.92"
            />
          </g>
        </g>
      ) : null}

      <rect x="118.7" y="103" width="2.6" height="13" rx="1.3" fill="#4B2A11" opacity={lit ? 0.9 : 0.5} />

      <path d="M18 118 C 30 199, 210 199, 222 118 Z" fill={`url(#${p}-body)`} />
      <path
        d="M40 134 C 66 178, 152 188, 198 156"
        stroke="#FFF1CE"
        strokeOpacity={lit ? 0.5 : 0.2}
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="120" cy="118" rx="104" ry="15.5" fill={`url(#${p}-rim)`} />
      <ellipse cx="120" cy="116.5" rx="76" ry="4.2" fill="#FFF7E0" opacity={lit ? 0.6 : 0.3} />
      <ellipse cx="120" cy="120.5" rx="86" ry="9.6" fill="#6B4423" />
      <ellipse cx="120" cy="122" rx="64" ry="6" fill="#42270F" opacity="0.8" />
    </svg>
  );
}
