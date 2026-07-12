import { PressableButton } from "../PressableButton";

export function OnboardingButtons({
  onRegister,
  onLogin,
}: {
  onRegister: () => void;
  onLogin: () => void;
}) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[29px] top-[calc(80%+7.8px)] w-[332px]">
      <PressableButton
        onClick={onRegister}
        className="bg-[#3643ba] h-[48px] relative rounded-[6px] shrink-0 w-full flex items-center justify-center px-[16px] py-[12px]"
      >
        <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold leading-[18px] text-[14px] text-white px-[4px] whitespace-nowrap">Registrarse</span>
      </PressableButton>
      <div className="flex items-center justify-center overflow-clip relative shrink-0 w-full">
        <PressableButton
          onClick={onLogin}
          className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-[6px] flex items-center justify-center px-[16px] py-[12px] border border-[#d9d9d9] border-solid"
        >
          <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold leading-[18px] text-[#111] text-[14px] px-[4px] whitespace-nowrap">Iniciar sesión</span>
        </PressableButton>
      </div>
    </div>
  );
}

export function WalkthroughDots({ active }: { active: 0 | 1 | 2 }) {
  const dot = (on: boolean) => (
    <div className="relative w-[8px] h-[8px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <circle cx="4" cy="4" fill={on ? "#3643BA" : "#D9D9D9"} r="4" />
      </svg>
    </div>
  );
  return (
    <div className="flex gap-[8px]">
      {dot(active === 0)}
      {dot(active === 1)}
      {dot(active === 2)}
    </div>
  );
}
