import { useEffect } from "react";
import { motion } from "motion/react";
import logoDecathlonRookie from "../../../assets/logo-decathlon-rookie.svg";

export function Splash({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="bg-[#3643ba] relative size-full overflow-hidden" data-name="iPhone 13 & 14 - 18">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[108px] left-1/2 top-[calc(50%+10.52px)] w-[132px]"
        data-name="logo decatlon rookie"
      >
        <img src={logoDecathlonRookie} alt="Decathlon Rookie" className="size-full" />
      </motion.div>
    </div>
  );
}
