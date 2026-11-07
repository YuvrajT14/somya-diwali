import { useNavigate } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export default function BackLink({ to, children = "Back" }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        navigate({ to });
        window.scrollTo(0, 0);
      }}
      className="inline-flex min-h-[44px] touch-manipulation items-center gap-1.5 rounded-full px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-plum/60 transition-colors hover:text-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2"
    >
      <ChevronLeft className="h-3.5 w-3.5" />
      {children}
    </button>
  );
}
