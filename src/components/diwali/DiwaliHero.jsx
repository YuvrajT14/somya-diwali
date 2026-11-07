import { motion } from "framer-motion";
import Ambience from "./Ambience";
import FairyLights from "./FairyLights";
import GoldButton from "./GoldButton";
import RippleTitle from "./RippleTitle";
import SomyaAccent from "./SomyaAccent";
import HeroGallery from "./HeroGallery";
import TransitionCurtain from "./TransitionCurtain";
import { useSceneNav } from "./useSceneNav";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] } },
};

export default function DiwaliHero() {
  const { go, leaving } = useSceneNav();

  return (
    <section aria-label="Diwali welcome" className="relative isolate min-h-[100dvh] w-full overflow-hidden bg-blush">
      <Ambience tone="light" />
      <FairyLights />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[1180px] flex-col px-4 pb-6 pt-10 sm:px-8 sm:pb-0 sm:pt-28 lg:pt-32">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center text-center">
          <motion.p
            variants={item}
            className="mb-4 text-[10px] uppercase tracking-[0.38em] text-plum/55 sm:mb-5 sm:text-[11px] sm:tracking-[0.44em]"
          >
            A Diwali Surprise
          </motion.p>

          <motion.div variants={item}>
            <RippleTitle text="A Little Diwali Magic for" suffix={<SomyaAccent />} sparkle={false} />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-4 max-w-[30rem] text-[15px] font-light leading-[1.7] text-plum/75 sm:mt-7 sm:text-[17px] sm:leading-[1.75]"
          >
            A few small lights, one letter I actually mean, and a sky full of fireworks. All of it's yours, <SomyaAccent punctuation="." />
          </motion.p>

          <motion.div variants={item} className="mt-6 sm:mt-10">
            <GoldButton onClick={() => go("/diyas")}>
              Open It Cutiee <span aria-hidden="true" className="ml-1 text-base tracking-normal">🎀</span>
            </GoldButton>
          </motion.div>
        </motion.div>

        <div className="mt-10 pt-6 sm:mt-auto sm:pt-14">
          <HeroGallery />
        </div>
      </div>

      <TransitionCurtain show={leaving} />
    </section>
  );
}
