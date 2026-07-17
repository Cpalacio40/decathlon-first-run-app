import { useState } from "react";
import { motion } from "motion/react";
import svgPaths from "../../../imports/IPhone131423/svg-cg0jrywrs1";
import { DecathlonLogo } from "../DecathlonLogo";
import { PressableButton } from "../PressableButton";

function BarcodeIcon() {
  return (
    <div className="size-[64px] rounded-[14px] bg-[#3643ba] flex items-center justify-center">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M3 8V5.5A2.5 2.5 0 0 1 5.5 3H8M22 3h2.5A2.5 2.5 0 0 1 27 5.5V8M27 22v2.5a2.5 2.5 0 0 1-2.5 2.5H22M8 27H5.5A2.5 2.5 0 0 1 3 24.5V22" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 10v10M13 10v10M17 10v10M21 10v10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function ManualCode({ onValidate, onBack }: { onValidate: () => void; onBack: () => void }) {
  const [code, setCode] = useState("");
  const valid = /^DCT-\d{4}-\d{3,4}$/i.test(code.trim());

  return (
    <div className="bg-white relative size-full overflow-hidden" data-name="iPhone 13 & 14 - 33">
      {/* Header */}
      <div className="absolute flex gap-[64px] h-[100px] items-center left-0 overflow-clip px-[16px] py-[12px] top-[24px] w-[390px]">
        <PressableButton onClick={onBack} className="block relative shrink-0 size-[32px]">
          <div className="absolute inset-[20.83%]">
            <div className="absolute inset-[-7.14%]">
              <svg className="block size-full" fill="none" viewBox="0 0 21.3333 21.3333">
                <path d={svgPaths.pdc7b00} stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
              </svg>
            </div>
          </div>
        </PressableButton>
        <DecathlonLogo />
      </div>

      {/* Center content */}
      <div className="absolute left-1/2 top-1/2 w-[332px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <BarcodeIcon />
        <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold leading-[34px] text-[#2c2c2c] text-[30px] text-center mt-[24px]">Ingresa el código <br /> de tus zapatillas</p>

        <div className="flex flex-col gap-[16px] items-start w-full mt-[40px]">
          <div className="flex flex-col gap-[8px] items-start w-full">
            <div className="flex gap-[4px] items-center">
              <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold leading-[18px] text-[#111] text-[14px]">Código de barra</p>
              <span className="text-[#c8251f] text-[14px]">*</span>
            </div>
            <div className={`bg-white h-[44px] rounded-[6px] w-full border flex items-center px-[16px] transition-colors ${valid ? "border-[#23a942]" : "border-[#d9d9d9] focus-within:border-[#3643ba]"}`}>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Ej: DCT-2026-8842"
                className="flex-1 min-w-px outline-none bg-transparent font-['Host_Grotesk:Regular',sans-serif] font-normal leading-[18px] text-[#111] text-[14px] placeholder:text-[#b0b0b0]"
              />
              {valid && (
                <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 9.5L7.5 13L14 5" stroke="#23a942" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              )}
            </div>
          </div>

          <PressableButton
            onClick={onValidate}
            disabled={!valid}
            interactive={valid}
            className={`w-full h-[48px] rounded-[6px] flex items-center justify-center px-[16px] py-[12px] transition-colors ${valid ? "bg-[#3643ba]" : "bg-[#d9d9d9]"}`}
          >
            <span className={`font-['Host_Grotesk:SemiBold',sans-serif] font-semibold leading-[18px] text-[14px] px-[4px] whitespace-nowrap ${valid ? "text-white" : "text-white/80"}`}>Validar código</span>
          </PressableButton>
        </div>
      </div>
    </div>
  );
}
