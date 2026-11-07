import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import DiyaArt from "./art/DiyaArt";

const SPARKS = 18;

export default function Diya({ label, lit, onLight, index }) {
  const [burst, setBurst] = useState(0);
  const wasLit = useRef(false);

  useEffect(() => {
    if (lit && !wasLit.current) setBurst(Date.now() + index);
    wasLit.current = lit;
  }, [index, lit]);

  const handleClick = () => {
    if (lit) return;
    onLight();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={lit}
      aria-label={lit ? `${label}, already lit` : `Light the diya of ${label}`}
      className="group relative flex min-h-[44px] w-full touch-manipulation flex-col items-center rounded-2xl px-1 pb-1 pt-14 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-4 focus-visible:ring-offset-transparent active:scale-[0.97] sm:pt-16"
    >
      <span
        className={cn(
          "pointer-events-none absolute left-1/2 top-4 h-24 w-24 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,203,116,0.8)_0%,rgba(255,163,84,0.26)_48%,transparent_74%)] blur-xl sm:h-32 sm:w-32",
          lit ? "diwali-light-glow" : "opacity-0"
        )}
      />

      {burst ? (
        <span key={burst} className="pointer-events-none absolute left-1/2 top-8 z-20 block h-0 w-0">
          <span className="diwali-ring absolute left-1/2 top-1/2 block h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-bright/80" />
          {Array.from({ length: SPARKS }).map((_, i) => {
            const angle = (i / SPARKS) * Math.PI * 2 + (i % 3) * 0.14;
            const distance = 30 + ((i * 15) % 40);
            return (
              <span
                key={i}
                className="diwali-spark"
                style={{
                  "--dx": `${Math.cos(angle) * distance}px`,
                  "--dy": `${Math.sin(angle) * distance}px`,
                  animationDelay: `${i * 12}ms`,
                }}
              />
            );
          })}
        </span>
      ) : null}

      {lit ? (
        <span className="pointer-events-none absolute left-1/2 top-2 z-20 block h-0 w-0">
          <span className="diwali-ember absolute block h-1 w-1 rounded-full bg-[#FFE6A8] shadow-[0_0_8px_2px_rgba(255,214,140,0.7)]" style={{ "--dx": "-7px" }} />
          <span
            className="diwali-ember absolute block h-1 w-1 rounded-full bg-[#FFD48A] shadow-[0_0_8px_2px_rgba(255,214,140,0.6)]"
            style={{ "--dx": "9px", animationDelay: "0.9s" }}
          />
          <span
            className="diwali-ember absolute block h-[3px] w-[3px] rounded-full bg-[#FFF0C8] shadow-[0_0_8px_2px_rgba(255,224,160,0.65)]"
            style={{ "--dx": "2px", animationDelay: "1.7s" }}
          />
        </span>
      ) : null}

      <DiyaArt
        lit={lit}
        idPrefix={`diya-${index}`}
        className={cn("relative z-10 w-full max-w-[92px] transition-all duration-700 sm:max-w-[112px]", lit ? "" : "opacity-75 saturate-[0.65]")}
      />

      <span
        className={cn(
          "relative z-10 mt-1 text-[9px] uppercase tracking-[0.18em] transition-colors duration-500 sm:text-[10px] sm:tracking-[0.3em]",
          lit ? "text-rose-deep" : "text-plum/50"
        )}
      >
        {label}
      </span>
    </button>
  );
}
