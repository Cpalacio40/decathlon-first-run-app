import { AnimatePresence, motion } from "motion/react";
import { PressableButton } from "../PressableButton";
import mapImage from "../../../imports/map.png";

function MapPreview() {
  return (
    <div className="flex-1 min-h-0 overflow-hidden">
      <img src={mapImage} alt="Mapa de ubicación" className="w-full h-full object-cover" />
    </div>
  );
}

export function LocationPermissionModal({
  onAllowOnce,
  onAllowWhileUsing,
  onDeny,
}: {
  onAllowOnce: () => void;
  onAllowWhileUsing: () => void;
  onDeny: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="absolute inset-0 z-40 flex items-center justify-center bg-black/55"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          style={{ width: 274, height: 436 }}
          className="flex flex-col rounded-[14px] bg-white overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >
          <div className="shrink-0 px-[16px] pt-[18px] pb-[14px] text-center">
            <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[17px] leading-[22px] tracking-[-0.41px] text-black">
              ¿Permitir "Decathlon Rookie" use tu ubicación?
            </p>
            <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[13px] leading-[17px] text-[#6a6a6a] mt-[8px]">
              Para registrar tus carreras, es necesario que Decathlon Rookie use tu ubicación.
            </p>
          </div>

          <MapPreview />

          <div className="shrink-0 border-t border-[#e2e2e2]">
            <PressableButton onClick={onAllowOnce} className="w-full h-[44px] flex items-center justify-center border-b border-[#e2e2e2]">
              <span className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[17px] text-[#007AFF]">Permitir una vez</span>
            </PressableButton>
            <PressableButton onClick={onAllowWhileUsing} className="w-full h-[44px] flex items-center justify-center border-b border-[#e2e2e2]">
              <span className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[17px] text-[#007AFF]">Permitir mientras use la app</span>
            </PressableButton>
            <PressableButton onClick={onDeny} className="w-full h-[44px] flex items-center justify-center">
              <span className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[17px] text-[#007AFF]">No permitir</span>
            </PressableButton>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
