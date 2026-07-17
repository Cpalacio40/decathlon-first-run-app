import { useEffect } from "react";
import { motion } from "motion/react";
import svgPaths from "../../../imports/IPhone131467/svg-pti0p0rncw";
import imgTooltip from "../../../imports/Double_Click_to_Pay.png";
import imgSideButton from "../../../imports/Mask_group.png";
import imgBackground from "../../../imports/iPhone_13___14_-_62.png";

function AppIcon() {
  return (
    <div className="relative shrink-0 size-[52px] rounded-[12px] bg-[#3643ba] overflow-hidden flex items-center justify-center">
      <div className="relative size-[30px]">
        <svg className="absolute inset-0 block size-full" fill="none" viewBox="0 0 35.6359 29.8571" preserveAspectRatio="xMidYMid meet">
          <path d={svgPaths.p35568800} fill="white" />
        </svg>
      </div>
    </div>
  );
}

export function PaymentSheet({ onConfirm, onCancel, trial = false }: { onConfirm: () => void; onCancel: () => void; trial?: boolean }) {
  // Simulate the "double click side button" confirmation.
  useEffect(() => {
    const t = setTimeout(onConfirm, 3600);
    return () => clearTimeout(t);
  }, [onConfirm]);

  return (
    <div className="relative size-full overflow-hidden bg-[#1c1c1e]" data-name="Payment">
      {/* Subscription screenshot behind */}
      <img alt="" src={imgBackground} className="absolute inset-0 size-full object-cover" />

      {/* Tooltip pointing to the side button */}
      <img alt="Doble Click para Suscribirse" src={imgTooltip} className="absolute right-0 top-[92px] h-[64px] w-auto z-10 object-contain" />

      {/* App Store bottom sheet */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="absolute bottom-0 left-0 w-full bg-[#ededed] rounded-t-[14px] px-[20px] pt-[18px] pb-[28px] z-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-[16px]">
          <p className="font-['Host_Grotesk:Bold',sans-serif] font-bold text-[24px] text-[#111]">App Store</p>
          <button onClick={onCancel} className="size-[28px] rounded-full bg-[#dcdcdc] flex items-center justify-center text-[#8a8a8a]" aria-label="Cerrar">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
        </div>

        {/* White card */}
        <div className="bg-white rounded-[12px] px-[16px] py-[16px]">
          {/* App row */}
          <div className="flex items-center gap-[12px] pb-[14px]">
            <AppIcon />
            <div className="flex-1">
              <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[17px] text-[#111] leading-[22px]">Decathlon Rookie</p>
              <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[13px] text-[#8a8a8a] leading-[17px]">Decathlon: Fitness y entrenamientos Subcripción</p>
            </div>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          {/* Trial (only with coupon) */}
          {trial && (
            <div className="pt-[12px]">
              <p className="font-['Host_Grotesk:Bold',sans-serif] font-bold text-[17px] text-[#111] leading-[22px]">3 meses gratis</p>
              <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[13px] text-[#8a8a8a] leading-[17px]">Empieza hoy</p>
            </div>
          )}

          {/* Price */}
          <div className="pt-[12px] pb-[14px]">
            <p className="font-['Host_Grotesk:Bold',sans-serif] font-bold text-[17px] text-[#111] leading-[22px]">€3.99/mes</p>
            <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[13px] text-[#8a8a8a] leading-[17px]">{trial ? "Empieza Sep 6, 2026" : "Empieza hoy"}</p>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[12px] text-[#8a8a8a] leading-[16px] py-[14px]">
            Sin compromiso. Cancela en cualquier momento desde Ajustes, al menos un día antes de cada fecha de renovación. El plan se renueva automáticamente hasta que se cancele.
          </p>

          <div className="h-px bg-[#e6e6e6]" />

          <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[13px] text-[#8a8a8a] pt-[14px]">Cuenta: camipalacio78@gmail.com</p>
        </div>

        {/* Confirm with side button */}
        <motion.button
          onClick={onConfirm}
          whileTap={{ scale: 0.98 }}
          className="w-full flex flex-col items-center gap-[6px] pt-[18px]"
        >
          <img alt="" src={imgSideButton} className="h-[34px] w-auto object-contain" />
          <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[15px] text-[#111]">Confirm with Side Button</span>
        </motion.button>
      </motion.div>
    </div>
  );
}
