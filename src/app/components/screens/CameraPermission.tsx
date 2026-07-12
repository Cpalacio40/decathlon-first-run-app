import { useEffect, useState } from "react";
import { motion } from "motion/react";
import svgPaths from "../../../imports/IPhone131424/svg-yt0o4og811";
import imgCamera from "../../../imports/IPhone131424/f27d5f1f341414bfde0e1469de8da2499ab0d6db.png";
import { DecathlonLogo } from "../DecathlonLogo";

export function CameraPermission({
  onAllow,
  onDeny,
  onBack,
  scanning = false,
  onComplete,
}: {
  onAllow: () => void;
  onDeny: () => void;
  onBack: () => void;
  scanning?: boolean;
  onComplete?: () => void;
}) {
  const [done, setDone] = useState(false);

  // Simulate the scan progressing, then completing, then advancing.
  useEffect(() => {
    if (!scanning) return;
    const complete = setTimeout(() => setDone(true), 2400);
    const advance = setTimeout(() => onComplete?.(), 3600);
    return () => {
      clearTimeout(complete);
      clearTimeout(advance);
    };
  }, [scanning, onComplete]);

  return (
    <div className="bg-white relative size-full overflow-hidden" data-name="iPhone 13 & 14 - 24">
      {/* Camera feed */}
      <div className="absolute h-[1038px] left-[-151px] top-[-342px] w-[692px]">
        <img alt="Cámara" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCamera} />
      </div>

      {/* Dim overlay — lighter while actively scanning so the ticket is visible */}
      <div className={`absolute h-[844px] left-0 top-0 w-[390px] transition-colors duration-500 ${scanning ? "bg-black/25" : "bg-black/70"}`} />

      {/* Black gradient at the bottom of the capture */}
      <div className="absolute bottom-0 left-0 w-[390px] h-[280px] bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none z-[5]" />

      {/* Header */}
      <div className="absolute flex gap-[64px] h-[100px] items-center left-0 overflow-clip px-[16px] py-[12px] top-[24px] w-[390px] z-10">
        <motion.button whileTap={{ scale: 0.9 }} onClick={onBack} className="block relative shrink-0 size-[32px]">
          <div className="absolute inset-[20.83%]">
            <div className="absolute inset-[-7.14%]">
              <svg className="block size-full" fill="none" viewBox="0 0 21.3333 21.3333">
                <path d={svgPaths.pdc7b00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
              </svg>
            </div>
          </div>
        </motion.button>
        <DecathlonLogo color="white" />
      </div>

      {/* Scanner frame */}
      <motion.div
        animate={scanning ? { opacity: 1 } : { opacity: [0.5, 1, 0.5] }}
        transition={scanning ? { duration: 0.3 } : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="-translate-x-1/2 absolute border-4 border-[#3643ba] border-dashed h-[192px] left-1/2 rounded-[16px] top-[calc(20%+107.2px)] w-[356px] z-10 overflow-hidden"
      >
        {/* Moving scan line */}
        {scanning && !done && (
          <motion.div
            initial={{ top: "0%" }}
            animate={{ top: ["4%", "92%", "4%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[6px] right-[6px] h-[3px] rounded-full bg-[#3643ba] shadow-[0_0_16px_4px_rgba(54,67,186,0.7)]"
          />
        )}

        {/* Completion check badge */}
        {done && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="size-[64px] rounded-[12px] bg-[#3643ba] flex items-center justify-center"
            >
              <motion.svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <motion.path
                  d="M8 18L14 24L26 10"
                  stroke="white"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                />
              </motion.svg>
            </motion.div>
          </div>
        )}
      </motion.div>

      {/* Scan status pill */}
      {scanning && (
        <motion.div
          key={done ? "done" : "scanning"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="-translate-x-1/2 absolute left-1/2 top-[calc(20%+320px)] z-20 bg-white/90 rounded-full px-[16px] py-[8px] flex items-center gap-[8px]"
        >
          {!done ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="block size-[14px] rounded-full border-2 border-[#3643ba] border-t-transparent"
            />
          ) : (
            <span className="block size-[14px] rounded-full bg-[#3643ba] flex items-center justify-center">
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.8L3.5 6.8L7.5 2.2" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          )}
          <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[13px] text-[#2c2c2c]">
            {done ? "Ticket verificado" : "Escaneando ticket…"}
          </span>
        </motion.div>
      )}

      {/* iOS Alert */}
      {!scanning && (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[11px] bg-white/95 flex flex-col items-start left-[calc(50%-0.5px)] rounded-[14px] top-1/2 w-[273px] z-20 overflow-hidden"
      >
        <div className="relative w-full border-b-[0.5px] border-[rgba(60,60,67,0.36)]">
          <div className="flex flex-col gap-[2px] items-center p-[16px] text-black text-center">
            <p className="leading-[22px] text-[17px] tracking-[-0.408px] w-full" style={{ fontWeight: 590 }}>“Decathlon First run” desea acceder a la cámara</p>
            <p className="leading-[18px] text-[13px] tracking-[-0.078px] w-full">Necesitamos acceder a la cámara de tu teléfono para iniciar la verificación.</p>
          </div>
        </div>
        <div className="flex h-[44px] items-start w-full">
          <motion.button whileTap={{ backgroundColor: "rgba(0,0,0,0.05)" }} onClick={onDeny} className="flex-1 min-w-px self-stretch border-r-[0.5px] border-[rgba(60,60,67,0.36)] flex items-center justify-center px-[16px] py-[11px]">
            <p className="leading-[22px] text-[#007aff] text-[17px] text-center tracking-[-0.408px]">No Permitir</p>
          </motion.button>
          <motion.button whileTap={{ backgroundColor: "rgba(0,0,0,0.05)" }} onClick={onAllow} className="flex-1 min-w-px self-stretch flex items-center justify-center px-[16px] py-[11px]">
            <p className="leading-[22px] text-[#007aff] text-[17px] text-center tracking-[-0.408px]" style={{ fontWeight: 590 }}>Permitir</p>
          </motion.button>
        </div>
      </motion.div>
      )}
    </div>
  );
}
