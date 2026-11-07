import { cn } from "@/lib/utils";

export default function RippleTitle({ text, suffix, className, sparkle = true }) {
  let index = 0;
  return (
    <h1
      className={cn(
        "font-heading font-normal leading-[1.08] tracking-[-0.015em] text-plum",
        "mx-auto max-w-[18ch] text-balance text-[clamp(2rem,9.5vw,3rem)] sm:max-w-none sm:text-[clamp(2.35rem,6.2vw,4.6rem)]",
        className
      )}
    >
      {Array.from(text).map((char, i) =>
        char === " " ? (
          <span key={`s-${i}`}> </span>
        ) : (
          <span key={`c-${i}`} className="ripple-letter" style={{ "--i": index++ }}>
            {char}
          </span>
        )
      )}
      {suffix ? <><span> </span>{suffix}</> : null}
      {sparkle ? (
        <span className="ml-2 inline-block align-middle text-[0.5em] text-gold diwali-breathe">✦</span>
      ) : null}
    </h1>
  );
}
