import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clearArrival, peekArrival } from "./useSceneNav";

export default function TransitionCurtain({ show }) {
  const [revealing, setRevealing] = useState(() => peekArrival());

  useEffect(() => {
    clearArrival();
    if (!revealing) return undefined;
    const id = window.setTimeout(() => setRevealing(false), 760);
    return () => window.clearTimeout(id);
  }, [revealing]);

  const visible = show || revealing;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="curtain"
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[60]"
          initial={{ opacity: show ? 0 : 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: show ? 0.5 : 0.75, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,226,168,0.98)_0%,rgba(214,150,120,0.9)_38%,rgba(75,0,130,0.96)_78%,#2A0B23_100%)]" />
          <motion.div
            className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#FFFDF4_0%,rgba(255,236,190,0.6)_45%,transparent_72%)]"
            initial={{ scale: show ? 0.2 : 2.6, opacity: show ? 0 : 0.9 }}
            animate={{ scale: show ? 3.4 : 1.6, opacity: 1 }}
            transition={{ duration: 0.62, ease: [0.2, 0.7, 0.2, 1] }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}