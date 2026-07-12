import svgPaths from "../../../imports/IPhone131423/svg-cg0jrywrs1";
import imgReceipt from "../../../imports/IPhone131423/49a902676a68cd24d0b77950d46b72cf8973fb78.png";
import imgCropped from "../../../imports/Group_1.png";
import imgBlurry from "../../../imports/Group_2.png";
import imgGlare from "../../../imports/Group_3.png";
import { DecathlonLogo } from "../DecathlonLogo";
import { PressableButton } from "../PressableButton";

function Badge({ kind }: { kind: "x" | "check" }) {
  return (
    <div
      className={`${kind === "x" ? "bg-[#c8251f]" : "bg-[#23a942]"} flex items-center justify-center p-[5.25px] rounded-[6px]`}
    >
      <div className="overflow-clip relative size-[8.75px]">
        {kind === "x" ? (
          <div className="absolute inset-1/4">
            <div className="absolute inset-[-11.43%]">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 5.375 5.375"
              >
                <path
                  d={svgPaths.p1f8afd40}
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
            <div className="absolute inset-[-12.47%_-8.57%]">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 6.83333 5.01042"
              >
                <path
                  d={svgPaths.pa889900}
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const receiptImg = (
  <img
    alt=""
    className="absolute h-[387.63%] left-[-136.95%] max-w-none top-[-278.57%] w-[369.35%]"
    src={imgReceipt}
  />
);

export function TicketGuide({
  onScan,
  onBack,
  onManual,
}: {
  onScan: () => void;
  onBack: () => void;
  onManual: () => void;
}) {
  return (
    <div
      className="bg-white relative size-full overflow-hidden"
      data-name="iPhone 13 & 14 - 23"
    >
      <div className="[word-break:break-word] absolute flex flex-col gap-[16px] items-start left-[29px] text-center top-[124px] w-[332px]">
        <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold leading-[34px] text-[#2c2c2c] text-[30px] w-full">
          Ten tu ticket de tus zapatillas listo
        </p>
        <div className="font-['Host_Grotesk:Regular',sans-serif] font-normal h-[48px] text-[#444] text-[16px] w-full">
          <p className="leading-[20px] mb-0">
            Asegúrate de capturar una imagen{" "}
          </p>
          <p className="leading-[20px]">
            clara y completa del codigo de barra.
          </p>
        </div>
      </div>

      {/* Example optimo */}
      <div className="absolute border border-[#e6e6e6] border-solid h-[205px] left-[29px] rounded-[8px] top-[calc(20%+125.2px)] w-[332px]" />
      <div className="absolute h-[154px] left-[49px] top-[calc(20%+133.2px)] w-[292px] overflow-hidden">
        {receiptImg}
      </div>
      <p className="-translate-x-1/2 absolute font-['Host_Grotesk:Host_Grotesk',sans-serif] text-[#444] text-[12px] text-center leading-[16px] left-[195px] top-[calc(40%+136.4px)] w-[332px] mx-[0px] my-[-6px]">
        Ejemplo optimo
      </p>
      <div className="absolute left-[calc(40%+9px)] size-[41px] top-[calc(60%+39.6px)]">
        <div className="absolute inset-[-34.63%]">
          <svg
            className="block size-full"
            fill="none"
            viewBox="0 0 69.4 69.4"
          >
            <g filter="url(#f0)">
              <circle
                cx="34.7"
                cy="34.7"
                fill="white"
                fillOpacity="0.84"
                r="20.5"
                style={{ mixBlendMode: "lighten" }}
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="69.4"
                id="f0"
                width="69.4"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="b" />
                <feBlend
                  in="SourceGraphic"
                  in2="b"
                  mode="normal"
                  result="s"
                />
                <feGaussianBlur result="e" stdDeviation="7.1" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Bad examples row */}
      <div className="absolute border border-[#e6e6e6] border-solid h-[95px] left-[29px] rounded-[8px] top-[calc(60%+31.6px)] w-[105px] overflow-hidden flex items-start justify-center pt-[10px] pb-[26px] px-[12px]">
        <img
          alt="Ejemplo reflejos"
          className="w-full max-w-none object-contain"
          src={imgBlurry}
        />
      </div>
      <div className="absolute border border-[#e6e6e6] border-solid h-[95px] left-[calc(20%+64px)] rounded-[8px] top-[calc(60%+31.6px)] w-[106px] overflow-hidden flex items-start justify-center pt-[10px] pb-[26px] px-[12px]">
        <img
          alt="Ejemplo recortada"
          className="w-full max-w-none object-contain"
          src={imgCropped}
        />
      </div>
      <div className="absolute border border-[#e6e6e6] border-solid h-[95px] left-[calc(60%+22px)] rounded-[8px] top-[calc(60%+31.6px)] w-[105px] overflow-hidden flex items-start justify-center pt-[10px] pb-[26px] px-[12px]">
        <img
          alt="Ejemplo borrosa"
          className="w-full max-w-none object-contain"
          src={imgGlare}
        />
      </div>

      <p className="-translate-x-1/2 absolute font-['Host_Grotesk:Host_Grotesk',sans-serif] text-[#444] text-center leading-[16px] left-[81.5px] top-[calc(60%+101.6px)] w-[105px] text-[12px] p-[0px] mx-[0px] my-[-6px]">
        Reflejos
      </p>
      <p className="-translate-x-1/2 absolute font-['Host_Grotesk:Host_Grotesk',sans-serif] text-[#444] text-[12px] text-center leading-[16px] left-[calc(20%+116.5px)] top-[calc(60%+101.6px)] w-[105px] mx-[0px] my-[-6px]">
        Recortada
      </p>
      <p className="-translate-x-1/2 absolute font-['Host_Grotesk:Host_Grotesk',sans-serif] text-[#444] text-[12px] text-center leading-[16px] left-[calc(60%+74.5px)] top-[calc(60%+101.6px)] w-[105px] mx-[0px] my-[-6px]">
        Borrosa
      </p>

      {/* Badges */}
      <div className="absolute left-[calc(40%+30px)] top-[calc(40%+152.4px)]">
        <Badge kind="check" />
      </div>
      <div className="absolute left-[70.38px] top-[calc(60%+115.6px)]">
        <Badge kind="x" />
      </div>
      <div className="absolute left-[calc(40%+30px)] top-[calc(60%+115.6px)]">
        <Badge kind="x" />
      </div>
      <div className="absolute left-[calc(80%-12px)] top-[calc(60%+115.6px)]">
        <Badge kind="x" />
      </div>

      {/* Header */}
      <div className="absolute flex gap-[64px] h-[100px] items-center left-0 overflow-clip px-[16px] py-[12px] top-[24px] w-[390px]">
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
                  stroke="#2C2C2C"
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

      {/* Footer buttons */}
      <div className="absolute flex flex-col gap-[16px] items-start left-[29px] top-[calc(80%+7.8px)] w-[332px]">
        <PressableButton
          onClick={onScan}
          className="bg-[#3643ba] h-[48px] rounded-[6px] w-full flex items-center justify-center px-[16px] py-[12px]"
        >
          <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold leading-[18px] text-[14px] text-white px-[4px] whitespace-nowrap">
            Comenzar verificación
          </span>
        </PressableButton>
        <div className="flex items-center justify-center w-full">
          <PressableButton
            onClick={onManual}
            className="bg-white flex-1 h-[48px] min-w-px rounded-[6px] border border-[#d9d9d9] flex items-center justify-center px-[16px] py-[12px]"
          >
            <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold leading-[18px] text-[#111] text-[14px] px-[4px] whitespace-nowrap">
              Ingresarlo manualmente
            </span>
          </PressableButton>
        </div>
      </div>
    </div>
  );
}