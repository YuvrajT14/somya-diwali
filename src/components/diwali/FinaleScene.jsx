import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import Ambience from "./Ambience";
import Fireworks from "./Fireworks";
import SkyDecor from "./SkyDecor";
import GoldButton from "./GoldButton";
import SomyaAccent from "./SomyaAccent";
import TransitionCurtain from "./TransitionCurtain";
import { useSceneNav } from "./useSceneNav";

export default function FinaleScene() {
  const [wishes, setWishes] = useState(0);
  const { go, leaving } = useSceneNav();

  return (
    <section aria-label="The finale" className="relative isolate min-h-[100dvh] w-full overflow-hidden bg-night text-champagne">
      <Ambience tone="dark" particles={22} />
      <Fireworks trigger={wishes} />
      <SkyDecor />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[820px] flex-col items-center justify-center px-4 py-12 text-center sm:px-8 sm:py-16">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-5 text-[10px] uppercase tracking-[0.44em] text-champagne/60"
        >
          The Grand Finale
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-heading text-[clamp(2.2rem,7vw,4.4rem)] leading-[1.08] tracking-[-0.02em]"
        >
          <span className="bg-clip-text text-transparent [background-image:linear-gradient(100deg,#FFF3D8_0%,#FFD98A_38%,#F6B9CE_72%,#FFF3D8_100%)]">Happy Diwali, </span>
          <SomyaAccent punctuation="!" />
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-4 font-display text-[26px] text-[#F6C9D8] sm:text-[34px]"
        >
          Of all the lights, you shine the brightest.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-6 max-w-[30rem] text-[14px] font-light leading-[1.85] text-champagne/80 sm:text-[16px]"
        >
          Not much of a speech person, so I'll keep it short: eat too much mithai, take the photos, and let this year
          be the good one.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-9 flex flex-col items-center gap-5 sm:mt-11"
        >
          <GoldButton onClick={() => setWishes((n) => n + 1)}>Make a Wish ✦</GoldButton>

          <motion.p
            initial={false}
            animate={{ opacity: wishes ? 1 : 0, y: wishes ? 0 : 6 }}
            transition={{ duration: 0.7 }}
            className="text-[11px] uppercase tracking-[0.32em] text-champagne/55"
          >
            Your wish is up in the sky now
          </motion.p>

          <button
            type="button"
            onClick={() => go("/")}
            className="group mt-1 inline-flex min-h-[44px] touch-manipulation items-center gap-2 rounded-full border border-champagne/30 px-4 py-2.5 text-[10px] uppercase tracking-[0.24em] text-champagne/80 transition-colors hover:border-champagne/70 hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-4 focus-visible:ring-offset-transparent sm:px-5 sm:tracking-[0.3em]"
          >
            <RotateCcw className="h-3 w-3 transition-transform duration-500 group-hover:-rotate-180" />
            Replay the Magic
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="mt-14 text-[9px] uppercase tracking-[0.4em] text-champagne/30"
        >
          From Yuvi, for <SomyaAccent />
        </motion.p>
      </div>

      <TransitionCurtain show={leaving} />
    </section>
  );
}
