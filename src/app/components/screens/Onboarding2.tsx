import imgUnsplashKOhV9WrzE1U1 from "../../../imports/IPhone131468/15930fd2e17a7d7c978255bdac846c886d6dbe67.png";
import { imgUnsplashKOhV9WrzE1U } from "../../../imports/IPhone131468/svg-mhxgt";

function MaskGroup() {
  return (
    <div className="absolute contents left-[-8px] top-[-20px]" data-name="Mask group">
      <div
        className="absolute h-[745px] left-[-37px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[29px_252.5px] mask-size-[405px_492.84px] top-[-272.5px] w-[496px]"
        style={{ maskImage: `url("${imgUnsplashKOhV9WrzE1U}")` }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Corredor motivado" className="absolute h-[65.17%] left-[-23.36%] max-w-none top-[34.83%] w-[146.82%]" src={imgUnsplashKOhV9WrzE1U1} />
        </div>
      </div>
    </div>
  );
}

export function Onboarding2Content() {
  return (
    <>
      <MaskGroup />
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[14px] items-start text-center left-[29px] top-[calc(60%+18.6px)] w-[332px] z-10">
        <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold leading-[34px] text-[#2c2c2c] text-[30px] w-full">Corre por tu motivo</p>
        <div className="font-['Host_Grotesk:Regular',sans-serif] font-normal h-[48px] text-[#444] text-[16px] w-full">
          <p className="leading-[20px] mb-0">Tu motivación no es igual a la de nadie. </p>
          <p className="leading-[20px]">Tu plan tampoco debería serlo</p>
        </div>
      </div>
    </>
  );
}
