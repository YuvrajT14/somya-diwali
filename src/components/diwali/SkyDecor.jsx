import { Heart, Sparkles } from "lucide-react";

function mulberry32(seed) {
  let a = seed;
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(4242);

const STARS = Array.from({ length: 34 }, () => ({
  left: Number((rand() * 100).toFixed(2)),
  top: Number((rand() * 82).toFixed(2)),
  size: Number((1.5 + rand() * 3).toFixed(2)),
  delay: `${(-rand() * 5).toFixed(2)}s`,
}));

const HEARTS = Array.from({ length: 9 }, () => ({
  left: Number((6 + rand() * 88).toFixed(2)),
  size: Number((11 + rand() * 12).toFixed(0)),
  drift: Math.round((rand() - 0.5) * 90),
  duration: `${(16 + rand() * 14).toFixed(1)}s`,
  delay: `${(-rand() * 26).toFixed(1)}s`,
  opacity: Number((0.25 + rand() * 0.4).toFixed(2)),
}));

const WISPS = Array.from({ length: 5 }, () => ({
  left: Number((rand() * 90).toFixed(2)),
  top: Number((6 + rand() * 60).toFixed(2)),
  size: Number((16 + rand() * 22).toFixed(0)),
  delay: `${(-rand() * 4).toFixed(2)}s`,
}));

export default function SkyDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {STARS.map((s, i) => (
        <span
          key={`star-${i}`}
          className="fairy-bulb"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            marginLeft: `${-s.size / 2}px`,
            marginTop: `${-s.size / 2}px`,
            animationDelay: s.delay,
            opacity: 0.75,
          }}
        />
      ))}

      {WISPS.map((w, i) => (
        <Sparkles
          key={`wisp-${i}`}
          className="absolute text-champagne/25 diwali-breathe"
          style={{
            left: `${w.left}%`,
            top: `${w.top}%`,
            width: `${w.size}px`,
            height: `${w.size}px`,
            animationDelay: w.delay,
          }}
        />
      ))}

      {HEARTS.map((h, i) => (
        <span
          key={`heart-${i}`}
          className="diwali-drift absolute bottom-0 block text-rose"
          style={{
            left: `${h.left}%`,
            width: `${h.size}px`,
            height: `${h.size}px`,
            opacity: h.opacity,
            "--drift": `${h.drift}px`,
            animationDuration: h.duration,
            animationDelay: h.delay,
          }}
        >
          <Heart className="h-full w-full fill-rose/50" strokeWidth={1} />
        </span>
      ))}
    </div>
  );
}