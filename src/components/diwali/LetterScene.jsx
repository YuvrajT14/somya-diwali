import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Ambience from "./Ambience";
import BackLink from "./BackLink";
import Envelope from "./Envelope";
import LetterPaper from "./LetterPaper";
import GoldButton from "./GoldButton";
import TransitionCurtain from "./TransitionCurtain";
import { useSceneNav } from "./useSceneNav";

export default function LetterScene() {
  const [stage, setStage] = useState("closed");
  const { go, leaving } = useSceneNav();
  const isOpen = stage === "open";

  const openLetter = () => {
    if (stage !== "closed") return;
    setStage("opening");
    window.setTimeout(() => setStage("open"), 640);
  };

  return (
    <section aria-label="A personal letter" className="relative isolate min-h-[100dvh] w-full bg-blush">
      <Ambience particles={16} />

      <div
        className={cn(
          "relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[760px] flex-col px-4 pt-5 sm:px-8 sm:pb-16 sm:pt-6",
          isOpen ? "pb-[calc(env(safe-area-inset-bottom)+6rem)]" : "pb-10"
        )}
      >
        <div className="flex items-center justify-between">
          <BackLink to="/diyas">Diyas</BackLink>
          <span className="text-[10px] uppercase tracking-[0.3em] text-plum/45">Three</span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-6 text-center sm:py-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-[10px] uppercase tracking-[0.42em] text-plum/50"
          >
            Sealed with love
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="font-heading text-[clamp(1.9rem,5.4vw,3.2rem)] leading-tight tracking-[-0.015em] text-plum"
          >
            A Letter for You
          </motion.h1>

          <AnimatePresence mode="wait">
            {isOpen ? null : (
              <motion.p
                key="instruction"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-4 max-w-[22rem] text-[14px] font-light leading-relaxed text-plum/70 sm:text-[15px]"
              >
                It’s short, I promise. Go on, open it.
              </motion.p>
            )}
          </AnimatePresence>

          <div className="mt-8 w-full sm:mt-12">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="letter" exit={{ opacity: 0 }}>
                  <LetterPaper />
                </motion.div>
              ) : (
                <motion.div
                  key="envelope"
                  exit={{ opacity: 0, scale: 0.94, y: -18 }}
                  transition={{ duration: 0.45 }}
                >
                  <Envelope open={stage === "opening"} onOpen={openLetter} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.45 }}
              className="fixed inset-x-0 bottom-0 z-40 flex justify-center bg-gradient-to-t from-blush via-blush/95 to-transparent px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-8 sm:static sm:mt-10 sm:bg-none sm:px-0 sm:pb-0 sm:pt-0"
            >
              <GoldButton onClick={() => go("/finale")}>One last surprise</GoldButton>
            </motion.div>
          ) : null}
        </div>
      </div>

      <TransitionCurtain show={leaving} />
    </section>
  );
}
