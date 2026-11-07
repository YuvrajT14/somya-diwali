import { motion } from "framer-motion";

const PETALS = Array.from({ length: 16 }, (_, i) => (i * 360) / 16);
const DOTS = Array.from({ length: 24 }, (_, i) => (i * 360) / 24);

export default function RangoliArt({ className = "", idPrefix = "rangoli" }) {
  const p = idPrefix;

  return (
    <svg viewBox="0 0 200 320" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={`${p}-core`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF3D2" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#F6C682" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#F6C682" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${p}-wash`} cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#7A2F63" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2B0D26" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="200" height="320" fill="#2B0D26" />
      <rect width="200" height="320" fill={`url(#${p}-wash)`} />

      <g transform="translate(100 168)">
        <circle r="86" fill="none" stroke="rgba(246,198,130,0.18)" strokeWidth="0.8" />
        <circle r="74" fill="none" stroke="rgba(246,198,130,0.3)" strokeWidth="0.6" />

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          {PETALS.map((angle, i) => (
            <g key={i} transform={`rotate(${angle})`}>
              <ellipse
                cx="0"
                cy="-56"
                rx="6.4"
                ry="17"
                fill="none"
                stroke={i % 2 ? "rgba(255,209,150,0.42)" : "rgba(246,170,197,0.34)"}
                strokeWidth="0.7"
              />
              <circle cx="0" cy="-74" r="1.5" fill="rgba(255,228,180,0.7)" />
            </g>
          ))}
        </motion.g>

        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          {DOTS.map((angle, i) => (
            <circle
              key={i}
              cx="0"
              cy={-40}
              r={i % 3 === 0 ? 2.1 : 1.1}
              fill="rgba(255,232,190,0.55)"
              transform={`rotate(${angle})`}
            />
          ))}
        </motion.g>

        <circle r="30" fill="none" stroke="rgba(246,198,130,0.35)" strokeWidth="0.7" />
        <circle r="19" fill="none" stroke="rgba(246,198,130,0.22)" strokeWidth="0.6" strokeDasharray="1 5" />
        <motion.circle
          r="16"
          fill={`url(#${p}-core)`}
          animate={{ opacity: [0.7, 1, 0.7], scale: [0.94, 1.06, 0.94] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle r="4.4" fill="#FFF8E4" />
      </g>

      <path
        d="M100 240 C 96 258, 100 272, 100 284"
        stroke="rgba(255,226,178,0.2)"
        strokeWidth="0.7"
        fill="none"
      />
    </svg>
  );
}