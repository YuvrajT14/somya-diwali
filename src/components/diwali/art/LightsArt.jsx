import { motion } from "framer-motion";

const BULBS = [
  { x: 26, y: 58, d: 0 },
  { x: 74, y: 92, d: 0.5 },
  { x: 124, y: 108, d: 1.1 },
  { x: 172, y: 84, d: 1.7 },
  { x: 196, y: 44, d: 2.3 },
  { x: 104, y: 176, d: 0.8 },
  { x: 58, y: 214, d: 1.5 },
];

const BOKEH = [
  { x: 34, y: 34, r: 26, o: 0.3 },
  { x: 168, y: 128, r: 34, o: 0.24 },
  { x: 46, y: 152, r: 18, o: 0.28 },
  { x: 148, y: 246, r: 22, o: 0.2 },
  { x: 186, y: 286, r: 30, o: 0.16 },
  { x: 86, y: 122, r: 14, o: 0.22 },
];

export default function LightsArt({ className = "", idPrefix = "lights" }) {
  const p = idPrefix;

  return (
    <svg viewBox="0 0 200 320" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={`${p}-bulb`} cx="38%" cy="34%" r="66%">
          <stop offset="0%" stopColor="#FFFDF3" />
          <stop offset="52%" stopColor="#FFE6AE" />
          <stop offset="100%" stopColor="#EFB65F" />
        </radialGradient>
        <radialGradient id={`${p}-bokeh`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD79A" stopOpacity="0.9" />
          <stop offset="65%" stopColor="#F1B372" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F1B372" stopOpacity="0" />
        </radialGradient>
        <filter id={`${p}-blur`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <filter id={`${p}-bulbglow`} x="-160%" y="-160%" width="420%" height="420%">
          <feGaussianBlur stdDeviation="5.5" />
        </filter>
      </defs>

      <rect width="200" height="320" fill="#2B0D26" />

      {BOKEH.map((b, i) => (
        <circle key={i} cx={b.x} cy={b.y} r={b.r} fill={`url(#${p}-bokeh)`} opacity={b.o} filter={`url(#${p}-blur)`} />
      ))}

      <path
        d="M-10 34 C 40 74, 82 96, 124 104 C 158 111, 182 84, 210 30"
        stroke="rgba(255,224,180,0.22)"
        strokeWidth="0.7"
        fill="none"
      />
      <path
        d="M-6 200 C 44 186, 74 200, 106 232 C 132 258, 156 276, 208 292"
        stroke="rgba(255,224,180,0.16)"
        strokeWidth="0.7"
        fill="none"
      />

      {BULBS.map((b, i) => (
        <g key={i}>
          <motion.circle
            cx={b.x}
            cy={b.y}
            r={9}
            fill={`url(#${p}-bulb)`}
            opacity={0.75}
            filter={`url(#${p}-bulbglow)`}
            animate={{ opacity: [0.35, 0.85, 0.4], scale: [0.94, 1.08, 0.94] }}
            transition={{ duration: 3.6, repeat: Infinity, delay: b.d, ease: "easeInOut" }}
            style={{ transformOrigin: `${b.x}px ${b.y}px` }}
          />
          <motion.circle
            cx={b.x}
            cy={b.y}
            r={3.1}
            fill="#FFFCF0"
            animate={{ opacity: [0.65, 1, 0.7] }}
            transition={{ duration: 3.6, repeat: Infinity, delay: b.d, ease: "easeInOut" }}
          />
        </g>
      ))}

      <motion.circle
        cx="150"
        cy="54"
        r="1.4"
        fill="#FFF6DA"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 4.4, repeat: Infinity, delay: 0.9 }}
      />
      <motion.circle
        cx="60"
        cy="266"
        r="1.2"
        fill="#FFF6DA"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, delay: 2.4 }}
      />
    </svg>
  );
}