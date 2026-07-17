import { useState } from "react";
import svgPaths from "../../../imports/IPhone131460/svg-v26gqslo5u";
import imgImage2 from "../../../imports/IPhone131460/c8688b7502dd162691fcba1b408807e206a08914.png";
import { DecathlonLogo } from "../DecathlonLogo";
import { PressableButton } from "../PressableButton";

function Radio({ selected }: { selected: boolean }) {
  return (
    <div className="bg-white overflow-clip relative rounded-full shrink-0 size-[20px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            d={svgPaths.p248dfa80}
            fill={selected ? "#3643BA" : "#D9D9D9"}
          />
        </svg>
      </div>
      {selected && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[10px] top-1/2">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            viewBox="0 0 10 10"
          >
            <circle cx="5" cy="5" fill="#3643BA" r="5" />
          </svg>
        </div>
      )}
    </div>
  );
}

export function Subscription({
  onNext,
  onBack,
  onRedeem,
}: {
  onNext: () => void;
  onBack: () => void;
  onRedeem: () => void;
}) {
  const [plan, setPlan] = useState<"anual" | "mensual" | null>(
    null,
  );

  return (
    <div
      className="bg-white relative size-full overflow-hidden"
      data-name="iPhone 13 & 14 - 60"
    >
      <div className="absolute bg-white flex gap-[64px] h-[101px] items-center left-0 overflow-clip px-[16px] py-[12px] top-[24px] w-[390px] z-10">
        <PressableButton
          onClick={onBack}
          className="block relative shrink-0 size-[32px]"
        >
          <div className="absolute inset-[20.83%]">
            <div className="absolute inset-[-7.14%]">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 21.3333 21.3333"
              >
                <path
                  d={svgPaths.pdc7b00}
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.66667"
                />
              </svg>
            </div>
          </div>
        </PressableButton>
        <DecathlonLogo />
      </div>

      <div className="absolute flex flex-col gap-[24px] items-center left-[29px] top-[130px] w-[332px]">
        <p className="font-['Host_Grotesk:Bold',sans-serif] font-bold leading-[28px] text-[#2c2c2c] text-[24px] text-center w-full">
          Comienza tu Suscripción
        </p>

        <div className="flex flex-col gap-[11px] items-start w-full">
          {/* Anual */}
          <button
            onClick={() => setPlan("anual")}
            className={`h-[70px] rounded-[8px] w-full border flex gap-[12px] items-center px-[16px] py-[14px] text-left transition-colors ${plan === "anual" ? "bg-[#f4f6ff] border-[#3643ba]" : "bg-white border-[#d9d9d9]"}`}
          >
            <Radio selected={plan === "anual"} />
            <div className="flex flex-col gap-[5px] items-start w-[129px]">
              <div className="flex gap-[8px] items-center w-full">
                <p className="font-['Host_Grotesk:Bold',sans-serif] font-bold leading-[22px] text-[#2c2c2c] text-[18px] whitespace-nowrap">
                  Anual
                </p>
                <div className="bg-[#3643ba] flex items-center justify-center px-[6px] py-[4px] rounded-[4px] h-[19px]">
                  <p className="font-['Host_Grotesk:Host_Grotesk',sans-serif] leading-[16px] text-[12px] text-white whitespace-nowrap">
                    -16%
                  </p>
                </div>
              </div>
              <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[12px] w-full">
                <span className="line-through text-[#b3b3b3] leading-[16px]">
                  €47,61
                </span>
                <span className="text-[#2c2c2c] leading-[16px]">
                  {" "}
                  €39.99/Anual
                </span>
              </p>
            </div>
            <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal leading-[22px] text-[#2c2c2c] text-[18px] w-[133px]">
              €3,33/Mensual
            </p>
          </button>

          {/* Mensual */}
          <button
            onClick={() => setPlan("mensual")}
            className={`h-[70px] rounded-[8px] w-full border flex gap-[12px] items-center px-[16px] py-[14px] text-left transition-colors ${plan === "mensual" ? "bg-[#f4f6ff] border-[#3643ba]" : "bg-white border-[#d9d9d9]"}`}
          >
            <Radio selected={plan === "mensual"} />
            <div className="flex flex-col items-start w-[129px]">
              <p className="font-['Host_Grotesk:Bold',sans-serif] font-bold leading-[22px] text-[#2c2c2c] text-[18px] whitespace-nowrap">
                Mensual
              </p>
            </div>
            <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal leading-[22px] text-[#2c2c2c] text-[18px] w-[133px]">
              €3.99/Mensual
            </p>
          </button>

          {/* Banner */}
          <div className="bg-gradient-to-b from-white to-[#f3f5ff] to-[181.9%] rounded-[8px] w-[332px] border border-[#d9d9d9] flex gap-[8px] items-center overflow-clip px-[20px] py-[16px]">
            <div className="flex flex-col gap-[12px] items-start justify-center self-stretch w-[147px]">
              <div className="flex flex-col gap-[5px] items-start w-full">
                <div className="h-[8.684px] overflow-clip relative w-[55px]">
                  <div className="absolute inset-[13.6%_0.44%_13.6%_21.17%]">
                    <svg
                      className="absolute block inset-0 size-full"
                      fill="none"
                      viewBox="0 0 43.116 6.3221"
                    >
                      <path
                        d={svgPaths.p1398c010}
                        fill="#3643BA"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-[0_81.81%_0_0.54%]">
                    <svg
                      className="absolute block inset-0 size-full"
                      fill="none"
                      viewBox="0 0 9.70812 8.68421"
                    >
                      <path
                        d={svgPaths.p24dc1680}
                        fill="#3643BA"
                      />
                    </svg>
                  </div>
                </div>
                <p className="font-['Host_Grotesk:Bold',sans-serif] font-bold leading-[22px] text-[#3643ba] text-[18px] w-[163px]">
                  3 MESES GRATIS
                </p>
                <div className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[#3643ba] text-[14px]">
                  <p className="leading-[18px] mb-0">
                    Con la compra de una{" "}
                  </p>
                  <p className="leading-[18px]">
                    de nuestras zapatillas
                  </p>
                </div>
              </div>
              <PressableButton
                onClick={onRedeem}
                className="bg-[#3643ba] flex items-center justify-center px-[10px] py-[8px] rounded-[6px]"
              >
                <span className="font-['Host_Grotesk:Host_Grotesk',sans-serif] leading-[16px] text-[12px] text-white whitespace-nowrap">
                  Canjear Código
                </span>
              </PressableButton>
            </div>
            <div className="h-[106.522px] relative shrink-0 w-[140px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt="Zapatillas Decathlon"
                  className="absolute h-[146.19%] left-[-5.9%] max-w-none top-[-14.75%] w-[112.32%]"
                  src={imgImage2}
                />
              </div>
            </div>
          </div>
        </div>

        <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[#444] w-full text-[12px]">
          <span className="text-[12px]">
            Las suscripciones se renovarán automáticamente{" "}
          </span>
          <span className="font-['Host_Grotesk:Medium',sans-serif] font-medium text-[12px]">
            después de tu período gratuito de membresía
            Decathlon Rookie.
          </span>
          <span className="text-[12px]">
            {" "}
            Puedes cancelar en cualquier momento (sin cargos por
            cancelación).
          </span>
        </p>
      </div>

      <div className="absolute bg-white bottom-0 flex flex-col h-[114px] items-start left-0 pb-[48px] pt-[17px] px-[28px] w-[390px]">
        <div className="flex items-center justify-center w-full">
          <PressableButton
            onClick={onNext}
            disabled={!plan}
            interactive={!!plan}
            className={`flex-1 h-[48px] min-w-px rounded-[6px] flex items-center justify-center px-[16px] py-[12px] transition-colors ${plan ? "bg-[#3643ba]" : "bg-[#d9d9d9]"}`}
          >
            <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold leading-[18px] text-[14px] text-white px-[4px] whitespace-nowrap">
              Siguiente
            </span>
          </PressableButton>
        </div>
      </div>
    </div>
  );
}