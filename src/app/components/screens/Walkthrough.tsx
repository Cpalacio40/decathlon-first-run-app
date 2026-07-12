import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { DecathlonLogo } from "../DecathlonLogo";
import { OnboardingButtons, WalkthroughDots } from "./OnboardingButtons";
import { Onboarding1Content } from "./Onboarding1";
import { Onboarding2Content } from "./Onboarding2";
import { Onboarding3Content } from "./Onboarding3";

const SLIDES = [Onboarding1Content, Onboarding2Content, Onboarding3Content];

export function Walkthrough({ onRegister, onLogin }: { onRegister: () => void; onLogin: () => void }) {
  const [index, setIndex] = useState(0);

  // Auto-advance as a continuous loop.
  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), 3000);
    return () => clearTimeout(t);
  }, [index]);

  const Slide = SLIDES[index];

  return (
    <div className="bg-white relative size-full overflow-hidden" data-name="Walkthrough">
      {/* Animated slide content (image + text) */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Slide />
        </motion.div>
      </AnimatePresence>

      {/* Fixed chrome */}
      <div className="absolute content-stretch flex gap-[64px] h-[100px] items-center left-0 overflow-clip px-[113px] py-[12px] top-[24px] w-[390px] z-20">
        <DecathlonLogo />
      </div>
      <div className="-translate-x-1/2 absolute left-1/2 top-[calc(80%-23.2px)] z-20">
        <WalkthroughDots active={index as 0 | 1 | 2} />
      </div>
      <div className="z-20">
        <OnboardingButtons onRegister={onRegister} onLogin={onLogin} />
      </div>
    </div>
  );
}
