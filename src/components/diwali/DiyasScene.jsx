import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Ambience from "./Ambience";
import BackLink from "./BackLink";
import Diya from "./Diya";
import GoldButton from "./GoldButton";
import TransitionCurtain from "./TransitionCurtain";
import { useSceneNav } from "./useSceneNav";

const DIYAS = ["Joy", "Peace", "Love", "Magic", "Smiles", "Dreams"];

export default function DiyasScene() {
  const [lit, setLit] = useState([]);
  const [lightingAll, setLightingAll] = useState(false);
  const timers = useRef([]);
  const { go, leaving } = useSceneNav();
  const allLit = lit.length === DIYAS.length;

  useEffect(
    () => () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
    },
    []
  );

  const lightOne = (i) => setLit((prev) => (prev.includes(i) ? prev : [...prev, i]));
  const lightAll = () => {
    if (allLit || lightingAll) return;

    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 180;
    if (delay === 0) {
      setLit(DIYAS.map((_, i) => i));
      return;
    }

    setLightingAll(true);
    timers.current = DIYAS.map((_, i) =>
      window.setTimeout(() => {
        setLit((prev) => (prev.includes(i) ? prev : [...prev, i]));
        if (i === DIYAS.length - 1) {
          timers.current = [];
          setLightingAll(false);
        }
      }, i * delay)
    );
  };

  return (
    <section aria-label="Light up the diyas" className="relative isolate min-h-[100dvh] w-full overflow-hidden bg-blush">
      <Ambience particles={18} />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[900px] flex-col px-4 pb-8 pt-5 sm:px-8 sm:pb-20 sm:pt-6">
        <div className="flex items-center justify-between">
          <BackLink to="/">Welcome</BackLink>
          <span className="text-[10px] uppercase tracking-[0.3em] text-plum/45">Two</span>
        </div>

        <motion.header
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-6 text-center sm:mt-10"
        >
          <h1 className="font-heading text-[clamp(2rem,5.6vw,3.4rem)] leading-tight tracking-[-0.015em] text-plum">
            Light Up the Diyas
          </h1>
          <p className="mx-auto mt-3 max-w-[26rem] text-[14px] font-light leading-relaxed text-plum/70 sm:text-[15px]">
            One wish per diya. Tap one to light it — no rush, they'll keep waiting.
          </p>
        </motion.header>

        <div className="mt-6 flex items-center justify-center gap-3 sm:mt-10">
          <p role="status" aria-live="polite" aria-atomic="true" className="text-[10px] uppercase tracking-[0.24em] text-plum/60 sm:tracking-[0.32em]">
            {lit.length} / {DIYAS.length} glowing
          </p>
          <span
            role="progressbar"
            aria-label="Diyas lit"
            aria-valuemin={0}
            aria-valuemax={DIYAS.length}
            aria-valuenow={lit.length}
            className="block h-px w-20 overflow-hidden bg-plum/15 sm:w-36"
          >
            <span
              className="block h-full bg-[linear-gradient(90deg,#E9B25F,#F3CB7C)] transition-all duration-700"
              style={{ width: `${(lit.length / DIYAS.length) * 100}%` }}
            />
          </span>
        </div>

        <div className="mx-auto mt-3 grid w-full max-w-[560px] grid-cols-3 gap-x-1.5 gap-y-4 sm:mt-8 sm:gap-x-6 sm:gap-y-8">
          {DIYAS.map((label, i) => (
            <Diya key={label} index={i} label={label} lit={lit.includes(i)} onLight={() => lightOne(i)} />
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-12">
          <GoldButton disabled={!allLit && lightingAll} onClick={allLit ? () => go("/letter") : lightAll}>
            {allLit ? "Continue to your letter" : lightingAll ? "Lighting the diyas…" : "Light Them All"}
          </GoldButton>
        </div>

        <blockquote className="mx-auto mt-10 max-w-[30rem] text-center sm:mt-16">
          <p className="font-display text-[18px] leading-[1.65] text-plum/85 sm:text-[24px] sm:leading-[1.6]">
            May every diya bring a little hope, every sparkle bring a little joy, and every moment of this Diwali give you another reason to smile.
          </p>
        </blockquote>

        {allLit ? null : (
          <button
            type="button"
            onClick={() => go("/letter")}
            className="mx-auto mt-5 inline-flex min-h-[44px] items-center rounded-full px-4 text-[10px] uppercase tracking-[0.3em] text-plum/50 transition-colors hover:text-plum/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-4 sm:mt-8"
          >
            Skip to your letter
          </button>
        )}
      </div>

      <TransitionCurtain show={leaving} />
    </section>
  );
}
