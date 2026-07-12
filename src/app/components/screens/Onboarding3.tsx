import imgRectangle65 from "../../../imports/IPhone131469/6a052385a638aa0b50158b6d496145c0e654eec1.png";
import { imgRectangle64 } from "../../../imports/IPhone131469/svg-kbce2";

function MaskGroup() {
  return (
    <div className="absolute contents left-[-8px] top-[-20px]" data-name="Mask group">
      <div
        className="absolute h-[725px] left-[-187px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[179px_-6.5px] mask-size-[405px_492.84px] top-[-13.5px] w-[1387px]"
        style={{ maskImage: `url("${imgRectangle64}")` }}
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img alt="Mentor acompañando" className="absolute h-[66.77%] left-[1.6%] max-w-none top-0 w-[52.35%]" src={imgRectangle65} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Onboarding3Content() {
  return (
    <>
      <MaskGroup />
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[14px] items-start text-center left-[29px] top-[calc(60%+18.6px)] w-[332px] z-10">
        <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold leading-[34px] text-[#2c2c2c] text-[30px] w-full">Alguien real a tu lado</p>
        <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal h-[48px] leading-[20px] text-[#444] text-[16px] w-full">Un mentor que te evalúa cada dos semanas, te escucha y ajusta tu plan si lo necesitas</p>
      </div>
    </>
  );
}
