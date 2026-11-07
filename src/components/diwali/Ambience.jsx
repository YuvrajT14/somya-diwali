import { cn } from "@/lib/utils";

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

const rand = mulberry32(20261107);

const PARTICLES = Array.from({ length: 30 }, () => ({
  left: Number((rand() * 100).toFixed(2)),
  size: Number((2 + rand() * 4.2).toFixed(2)),
  drift: Math.round((rand() - 0.5) * 140),
  duration: Number((15 + rand() * 17).toFixed(1)),
  delay: Number((-rand() * 32).toFixed(1)),
  opacity: Number((0.3 + rand() * 0.55).toFixed(2)),
}));

export default function Ambience({ tone = "light", particles = 30, className }) {
  const dark = tone === "dark";
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className={cn(
          "absolute inset-0",
          dark
            ? "bg-[radial-gradient(130%_95%_at_50%_-10%,#4A1B58_0%,#2A0D33_45%,#150718_78%,#0B040F_100%)]"
            : "bg-[radial-gradient(125%_90%_at_50%_-12%,#FFFFFF_0%,#FFF2F7_38%,#FCE6EF_68%,#F5D8E4_100%)]"
        )}
      />
      {dark ? (
        <>
          <div className="absolute -top-32 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(183,110,121,0.35),transparent_68%)] blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-[30rem] w-[52rem] -translate-x-1/2 translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(255,196,120,0.18),transparent_70%)] blur-3xl" />
        </>
      ) : (
        <>
          <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,214,140,0.34),transparent_66%)] blur-2xl diwali-breathe" />
          <div className="absolute -bottom-40 -left-24 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(214,160,220,0.28),transparent_68%)] blur-3xl" />
        </>
      )}
      {PARTICLES.slice(0, particles).map((p, i) => (
        <span
          key={i}
          className="diwali-particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            "--drift": `${p.drift}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}