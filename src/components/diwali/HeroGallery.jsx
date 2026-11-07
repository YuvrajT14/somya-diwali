import { motion } from "framer-motion";
import DiyaArt from "./art/DiyaArt";
import LightsArt from "./art/LightsArt";
import RangoliArt from "./art/RangoliArt";

function Frame({ children, delay, className = "" }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 46 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.95, delay, ease: [0.2, 0.7, 0.2, 1] }}
      aria-hidden="true"
      className={`relative min-w-0 overflow-hidden rounded-[16px] border border-gold/25 bg-[#2B0D26] shadow-[0_24px_54px_-34px_rgba(75,0,130,0.65)] sm:rounded-[20px] sm:shadow-[0_30px_70px_-40px_rgba(75,0,130,0.65)] ${className}`}
    >
      {children}
    </motion.figure>
  );
}

export default function HeroGallery() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:h-[min(46vh,440px)] sm:grid-cols-[1fr_1.24fr_1fr] sm:gap-4">
      <Frame
        delay={0.42}
        className="col-span-2 h-[clamp(176px,54vw,220px)] sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:h-full"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,#5C1F4E_0%,#3A1033_48%,#220A1E_100%)]" />
        <div className="diwali-breathe pointer-events-none absolute left-1/2 top-[6%] h-40 w-40 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,200,120,0.45)_0%,rgba(255,170,90,0.12)_55%,transparent_75%)] blur-xl sm:h-52 sm:w-52" />
        <RangoliArt idPrefix="hero-rangoli" className="absolute inset-0 h-full w-full opacity-70" />
        <DiyaArt lit idPrefix="hero-diya" className="absolute bottom-[4%] left-1/2 w-[62%] -translate-x-1/2 drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)] sm:w-[88%]" />
      </Frame>

      <Frame
        delay={0.54}
        className="h-[clamp(140px,40vw,174px)] sm:col-start-1 sm:row-start-1 sm:mt-10 sm:h-[calc(100%-40px)]"
      >
        <LightsArt idPrefix="hero-lights" className="h-full w-full" />
      </Frame>

      <Frame
        delay={0.66}
        className="h-[clamp(140px,40vw,174px)] sm:col-start-3 sm:row-start-1 sm:mt-10 sm:h-[calc(100%-40px)]"
      >
        <RangoliArt idPrefix="hero-rangoli-side" className="h-full w-full" />
      </Frame>
    </div>
  );
}
