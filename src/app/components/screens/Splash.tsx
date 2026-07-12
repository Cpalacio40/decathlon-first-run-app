import { useEffect } from "react";
import { motion } from "motion/react";
import svgPaths from "../../../imports/IPhone131418/svg-z1cq8czsi6";

function Group() {
  return (
    <div className="absolute h-[37.9px] left-0 top-[69.14px] w-[132px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 37.9001">
        <g>
          <path d={svgPaths.pe3b2a00} fill="white" />
          <g>
            <path d={svgPaths.p1636940} fill="white" />
            <path d={svgPaths.p264284c0} fill="white" />
            <path d={svgPaths.p58e6430} fill="white" />
            <path d={svgPaths.p3ed985f0} fill="white" />
            <path d={svgPaths.p2bb5c180} fill="white" />
            <path d={svgPaths.p1fdbe200} fill="white" />
            <path d={svgPaths.p26d3680} fill="white" />
            <path d={svgPaths.p2e6b4900} fill="white" />
          </g>
          <rect fill="white" height="2.4" rx="1.2" width="28.8" x="14.4004" y="30.4849" />
          <rect fill="white" height="2.4" rx="1.2" width="15.6" x="28.7998" y="25.6851" />
          <rect fill="white" height="2.4" rx="1.2" width="40.8" x="1.20006" y="35.2849" />
        </g>
      </svg>
    </div>
  );
}

export function Splash({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="bg-[#3643ba] relative size-full overflow-hidden" data-name="iPhone 13 & 14 - 18">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[107.043px] left-1/2 top-[calc(50%+10.52px)] w-[132px]"
        data-name="logo decatlon"
      >
        <Group />
        <div className="absolute inset-[0_22.27%_42.08%_21.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 62">
            <path d={svgPaths.p3f2b2300} fill="white" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
