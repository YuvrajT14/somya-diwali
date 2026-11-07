import { cn } from "@/lib/utils";

export default function SomyaAccent({ punctuation = "", className = "" }) {
  return (
    <span className={cn("inline-flex items-baseline whitespace-nowrap", className)}>
      <em className="bg-clip-text font-semibold italic text-transparent [background-image:linear-gradient(120deg,#70440B_0%,#A87519_32%,#C18A24_52%,#A16E16_76%,#70440B_100%)] drop-shadow-[0_2px_10px_rgba(183,130,44,0.22)]">
        Somya{punctuation}
      </em>
      <span aria-hidden="true" className="ml-[0.1em] text-[0.72em] not-italic text-[#A87519]">
        ✦
      </span>
    </span>
  );
}
