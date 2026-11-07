import { motion } from "framer-motion";
import SomyaAccent from "./SomyaAccent";

const PARAGRAPHS = [
  "Some lights are meant to brighten a room, while some people bring light into the lives of everyone around them. You're one of those rare people.",
  "May this Diwali bring you endless reasons to smile, beautiful moments to cherish, and a little extra magic in everything you do. May every diya you light remind you of the happiness you deserve.",
  "I hope your days are filled with laughter, your home with warmth, your heart with peace, and your life with opportunities that lead you to everything you've been wishing for.",
  "May this festival of lights make your world a little brighter, your dreams a little closer, and your memories a little sweeter. Happy Diwali! 🪔✨",
];
export default function LetterPaper() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
      className="paper-soft relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[18px] border border-champagne/90 px-5 py-7 text-left shadow-[0_32px_72px_-38px_rgba(75,0,130,0.45)] sm:px-12 sm:py-12 sm:shadow-[0_40px_90px_-40px_rgba(75,0,130,0.5)]"
    >
      <div className="gold-rule mb-7" />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="font-display text-[26px] text-plum sm:text-[30px]"
      >
        Dear <SomyaAccent punctuation="," />
      </motion.p>

      {PARAGRAPHS.map((text, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 + i * 0.26, duration: 0.8 }}
          className="mt-5 font-display text-[18px] leading-[1.62] text-plum/90 sm:text-[23px] sm:leading-[1.62]"
        >
          {text}
        </motion.p>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 + PARAGRAPHS.length * 0.26, duration: 0.8 }}
        className="mt-7 flex flex-wrap items-end justify-between gap-x-4 gap-y-2"
      >
        <p className="font-display text-[24px] text-rose-deep sm:text-[28px]">Happy Diwali, <SomyaAccent punctuation="." /></p>
        <p className="shrink-0 font-display text-[24px] text-plum sm:text-[28px]">— Yuvi</p>
      </motion.div>

      <div className="gold-rule mt-7" />
    </motion.article>
  );
}
