import { cn } from "@/lib/utils";

export default function GoldButton({ children, onClick, className, variant = "gold", type = "button", disabled }) {
  const isGold = variant === "gold";
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "group relative inline-flex h-12 items-stretch overflow-hidden rounded-[6px] border transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
        "disabled:cursor-not-allowed disabled:opacity-60",
        isGold
          ? "border-plum/60 bg-[linear-gradient(100deg,#F3CB7C_0%,#FDF0CE_38%,#E9B25F_72%,#F6DCA4_100%)] text-plum shadow-[0_14px_34px_-16px_rgba(75,0,130,0.65)] hover:border-plum hover:shadow-[0_18px_40px_-14px_rgba(75,0,130,0.7)]"
          : "border-champagne/50 bg-white/10 text-champagne backdrop-blur-sm hover:border-champagne hover:bg-white/16",
        className
      )}
    >
      <span className="relative z-10 flex items-center px-6 text-[11px] font-medium uppercase tracking-[0.28em] sm:text-[12px]">
        {children}
      </span>
      <span className={cn("relative z-10 w-px self-stretch", isGold ? "bg-plum/45" : "bg-champagne/40")} />
      <span className="relative z-10 flex w-11 items-center justify-center">
        <svg
          viewBox="0 0 17.4 17.4"
          fill="none"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.35 1.52 14.1 4.68c1.87 2.15 1.87 5.63 0 7.78l-2.75 3.16"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeMiterlimit="10"
          />
          <path d="M15.5 8.63H1.07" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeMiterlimit="10" />
        </svg>
      </span>
      {isGold ? <span className="diwali-shimmer pointer-events-none absolute inset-0" /> : null}
    </button>
  );
}