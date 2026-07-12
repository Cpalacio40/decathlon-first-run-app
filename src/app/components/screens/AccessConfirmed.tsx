import { motion } from "motion/react";
import imgBg from "../../../imports/iPhone_13___14_-_70.png";
import { DecathlonLogo } from "../DecathlonLogo";
import { PressableButton } from "../PressableButton";

export function AccessConfirmed({ onStart, trial = false }: { onStart: () => void; trial?: boolean }) {
  return (
    <div className="relative size-full overflow-hidden" data-name="Access confirmed">
      {/* Background photo */}
      <img alt="Corredor" src={imgBg} className="absolute inset-0 size-full object-cover" />

      {/* Header */}
      <div className="absolute flex h-[100px] items-center justify-center left-0 px-[16px] py-[12px] top-[24px] w-[390px] z-10">
        <DecathlonLogo color="white" />
      </div>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[40px] text-center z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
          className="size-[88px] rounded-full bg-white flex items-center justify-center mb-[28px]"
        >
          <motion.svg
            width="44" height="44" viewBox="0 0 44 44" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
          >
            <motion.path
              d="M10 23L19 32L34 13"
              stroke="#3643BA"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            />
          </motion.svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[30px] leading-[34px] text-white mb-[10px]">¡Bienvenido a Decathlon First run!</p>
          <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[16px] leading-[22px] text-white/90">
            {trial ? (
              <>Tu cuenta ya esta activa.<br />Disfruta tus <span className="font-['Host_Grotesk:Bold',sans-serif] font-bold">3 meses gratis</span></>
            ) : (
              <>Tu cuenta ya esta activa.</>
            )}
          </p>
        </motion.div>
      </div>

      {/* Bottom button */}
      <div className="absolute bottom-0 left-0 w-full pb-[48px] pt-[17px] px-[28px] z-10">
        <PressableButton
          onClick={onStart}
          className="w-full h-[48px] rounded-[6px] bg-[#3643ba] flex items-center justify-center"
        >
          <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] text-white">Empezar</span>
        </PressableButton>
      </div>
    </div>
  );
}
