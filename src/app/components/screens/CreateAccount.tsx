import { useState } from "react";
import svgPaths from "../../../imports/IPhone131427/svg-epg4kw5m1t";
import eyeOpenPaths from "../../../imports/IPhone131428/svg-idjk2wqahg";
import { DecathlonLogo } from "../DecathlonLogo";
import { PressableButton } from "../PressableButton";
import { GoogleIcon, AppleIcon } from "./GoogleIcon";

function Label({ children }: { children: string }) {
  return (
    <div className="flex gap-[4px] h-[24px] items-center w-full">
      <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold leading-[18px] text-[#111] text-[14px] whitespace-nowrap">{children}</p>
    </div>
  );
}

export function CreateAccount({ onNext }: { onNext: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const valid = /\S+@\S+\.\S+/.test(email) && password.length >= 8;

  return (
    <div className="bg-white relative size-full overflow-hidden" data-name="iPhone 13 & 14 - 27">
      <div className="absolute flex flex-col gap-[40px] items-start left-[29px] top-[124px] w-[332px]">
        <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold leading-[34px] text-[#2c2c2c] text-[30px]">Crear cuenta</p>

        <div className="flex flex-col gap-[16px] items-start">
          {/* Email */}
          <div className="flex flex-col gap-[8px] items-start justify-center w-[332px]">
            <Label>Email</Label>
            <div className="bg-white h-[44px] rounded-[6px] w-full border border-[#d9d9d9] flex items-center px-[8px] focus-within:border-[#3643ba] transition-colors">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="off"
                style={{ WebkitTextFillColor: "#111", WebkitBoxShadow: "0 0 0px 1000px white inset", caretColor: "#111" }}
                className="flex-1 min-w-px px-[8px] outline-none bg-transparent font-['Host_Grotesk:Regular',sans-serif] font-normal leading-[18px] text-[#111] text-[14px]"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-[8px] items-start justify-center w-[332px]">
            <Label>Contraseña</Label>
            <div className="bg-white h-[44px] rounded-[6px] w-full border border-[#d9d9d9] flex items-center px-[8px] focus-within:border-[#3643ba] transition-colors">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={show ? "text" : "password"}
                className="flex-1 min-w-px px-[8px] outline-none bg-transparent font-['Host_Grotesk:Regular',sans-serif] font-normal leading-[18px] text-[#111] text-[14px]"
              />
              <PressableButton onClick={() => setShow((s) => !s)} className="pr-[4px] flex items-start">
                <div className="relative size-[16px]">
                  {show ? (
                    <div className="absolute inset-[20.84%_8.33%]">
                      <div className="absolute inset-[-7.14%_-5%]">
                        <svg className="block size-full" fill="none" viewBox="0 0 14.6673 10.6658">
                          <g>
                            <path d={eyeOpenPaths.p2d60de00} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={eyeOpenPaths.p24e4d500} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-[33.33%]">
                      <div className="absolute inset-[-10%_-5%]">
                        <svg className="block size-full" fill="none" viewBox="0 0 14.667 8.00032">
                          <path d={svgPaths.p28cd2500} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </PressableButton>
            </div>
            <div className="flex h-[20px] items-center w-full">
              <p className="flex-1 font-['Host_Grotesk:Regular',sans-serif] font-normal leading-[16px] text-[#444] text-[12px]">La contraseña debe contener mas de 8 caracteres</p>
            </div>
          </div>

          {/* Register */}
          <div className="flex items-center justify-center w-[332px]">
            <PressableButton
              onClick={onNext}
              disabled={!valid}
              interactive={valid}
              className={`flex-1 h-[48px] min-w-px rounded-[6px] flex items-center justify-center px-[16px] py-[12px] transition-colors ${valid ? "bg-[#3643ba]" : "bg-[#d9d9d9]"}`}
            >
              <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold leading-[18px] text-[14px] text-white px-[4px] whitespace-nowrap">Registrarse</span>
            </PressableButton>
          </div>

          {/* Terms */}
          <div className="flex flex-col gap-[8px] items-start justify-center w-[332px]">
            <div className="font-['Host_Grotesk:Host_Grotesk',sans-serif] flex flex-col h-[38px] items-start justify-center text-[#444] w-full">
              <p className="w-full text-[12px] leading-[16px]">Al registrarte, aceptas nuestros <span className="font-['Host_Grotesk:Medium',sans-serif] font-medium underline">Términos y condiciones</span>. </p>
              <p className="w-full text-[12px] leading-[16px]">Consulta nuestra <span className="font-['Host_Grotesk:Medium',sans-serif] font-medium underline">Política de privacidad</span>.</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-[16px] items-start w-[332px]">
            <div className="flex gap-[21px] items-center justify-center">
              <div className="h-0 w-[141px] border-t border-[#757575]" />
              <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal leading-[16px] text-[#444] text-[12px]">o</p>
              <div className="h-0 w-[141px] border-t border-[#757575]" />
            </div>
            <PressableButton className="bg-white w-full h-[48px] rounded-[6px] border border-[#d9d9d9] flex items-center justify-center gap-[4px] px-[16px] py-[12px]">
              <GoogleIcon />
              <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold leading-[18px] text-[#111] text-[14px] px-[4px] whitespace-nowrap">Continuar con Google</span>
            </PressableButton>
            <PressableButton className="bg-white w-full h-[48px] rounded-[6px] border border-[#d9d9d9] flex items-center justify-center gap-[4px] px-[16px] py-[12px]">
              <AppleIcon />
              <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold leading-[18px] text-[#111] text-[14px] px-[4px] whitespace-nowrap">Continuar con Apple</span>
            </PressableButton>
          </div>
        </div>
      </div>

      <div className="absolute bg-white flex gap-[64px] h-[100px] items-center left-0 overflow-clip px-[113px] py-[12px] top-[24px] w-[390px]">
        <DecathlonLogo />
      </div>
    </div>
  );
}
