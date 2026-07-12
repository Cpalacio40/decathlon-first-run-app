import imgUnsplash7D6TjdbeBc1 from "../../../imports/IPhone131467/0e3e664a97e70cfce35da06bee5f8cc9b10e8ab0.png";
import { imgUnsplash7D6TjdbeBc } from "../../../imports/IPhone131467/svg-lu07c";

function MaskGroup() {
  return (
    <div className="absolute contents left-[-8px] top-[-20px]" data-name="Mask group">
      <div
        className="absolute h-[605px] left-[-6px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_84px] mask-size-[405px_492.84px] top-[-104px] w-[402px]"
        style={{ maskImage: `url("${imgUnsplash7D6TjdbeBc}")` }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Persona corriendo" className="absolute h-[130.23%] left-[-88.49%] max-w-none top-[-6.84%] w-[293.95%]" src={imgUnsplash7D6TjdbeBc1} />
        </div>
      </div>
    </div>
  );
}

export function Onboarding1Content() {
  return (
    <>
      <MaskGroup />
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[14px] items-center left-[29px] text-center top-[calc(60%-15.4px)] w-[332px] z-10">
        <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold leading-[34px] text-[#2c2c2c] text-[30px] w-full">Tu primer kilómetro empieza aquí</p>
        <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal h-[48px] leading-[20px] text-[#444] text-[16px] w-full">Un programa pensado para quien nunca ha corrido y no tiene por qué saber cómo</p>
      </div>
    </>
  );
}
