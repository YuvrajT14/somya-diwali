import { motion } from "framer-motion";
import SomyaAccent from "./SomyaAccent";

export default function Envelope({ open, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label="Open the letter written for Somya"
      initial={{ opacity: 0, y: 30, rotate: -1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
      className="group relative mx-auto block min-h-[44px] w-full max-w-[290px] touch-manipulation cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-8 focus-visible:ring-offset-transparent sm:max-w-[400px]"
    >
      <div className="relative aspect-[3/2] transition-transform duration-500 group-hover:-translate-y-1.5">
        <div className="absolute inset-0 rounded-[12px] border border-champagne/80 bg-[linear-gradient(165deg,#FADDBA_0%,#F7C9DA_45%,#E9A7C0_100%)] shadow-[0_36px_70px_-32px_rgba(75,0,130,0.55)]" />

        <div
          className="absolute inset-x-0 bottom-0 h-[76%] rounded-b-[12px] bg-[linear-gradient(180deg,#F7CEDD_0%,#EBA9C2_100%)]"
          style={{ clipPath: "polygon(0 100%, 0 0, 50% 48%, 100% 0, 100% 100%)" }}
        />
        <div className="pointer-events-none absolute inset-0 rounded-[12px] shadow-[inset_0_0_40px_rgba(255,255,255,0.45)]" />

        <div
          className="absolute inset-x-0 top-0 h-[60%] origin-top transition-transform duration-700 [transform-style:preserve-3d]"
          style={{ transform: open ? "rotateX(-168deg)" : "rotateX(0deg)" }}
        >
          <div
            className="relative h-full w-full bg-[linear-gradient(180deg,#FBE1EB_0%,#F2B8CE_100%)] [backface-visibility:hidden]"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
          >
            <div className="absolute left-1/2 top-[74%] h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#FBE7A8_0%,#E2B25F_45%,#A8732C_100%)] shadow-[0_6px_14px_rgba(90,45,10,0.35),inset_0_1px_2px_rgba(255,255,255,0.6)] sm:h-16 sm:w-16">
              <span className="flex h-full w-full items-center justify-center font-heading text-[22px] text-[#6B4210] sm:text-[26px]">
                S
              </span>
              <span className="absolute inset-[7px] rounded-full border border-[#8A5A1C]/35" />
            </div>
          </div>
        </div>

        <p className="pointer-events-none absolute bottom-[14%] left-0 right-0 text-center font-display text-[22px] text-[#8A3F5C]/80 sm:text-[26px]">
          For <SomyaAccent />
        </p>
      </div>
    </motion.button>
  );
}
