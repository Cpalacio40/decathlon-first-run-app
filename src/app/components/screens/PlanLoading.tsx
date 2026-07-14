import { useEffect, useState } from "react";
import imgTestimonios from "../../../imports/Cards testimonios imagen.png";

const DURATION = 4200;

const STATUS_STEPS = [
  { at: 0, text: "Personalizando..." },
  { at: 30, text: "Analizando tus objetivos..." },
  { at: 60, text: "Ajustando tu ritmo..." },
  { at: 85, text: "Preparando tu plan..." },
];

function statusFor(progress: number) {
  let current = STATUS_STEPS[0].text;
  for (const step of STATUS_STEPS) {
    if (progress >= step.at) current = step.text;
  }
  return current;
}

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function ProgressRing({ progress }: { progress: number }) {
  return (
    <div className="relative size-[128px]">
      <svg viewBox="0 0 120 120" className="-rotate-90 size-full">
        <circle cx="60" cy="60" r={RADIUS} fill="none" stroke="#e6e6e6" strokeWidth="9" />
        <circle
          cx="60"
          cy="60"
          r={RADIUS}
          fill="none"
          stroke="#3643ba"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress / 100)}
          style={{ transition: "stroke-dashoffset 0.15s linear" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[28px] text-[#3643ba]">{progress}%</span>
      </div>
    </div>
  );
}

export function PlanLoading({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / DURATION) * 100));
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(onDone, 500);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div className="bg-white relative size-full flex flex-col overflow-hidden" data-name="Creando plan">
      <div
        className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Progress */}
        <div className="flex flex-col items-center pt-[56px] pb-[32px] px-[24px]">
          <ProgressRing progress={progress} />
          <p className="mt-[20px] text-center leading-[20px] text-[15px]">
            <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[#2c2c2c]">Creando tu plan </span>
            <span className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[#8a8a8a]">{statusFor(progress)}</span>
          </p>
        </div>

        {/* Social proof */}
        <div className="px-[24px] mb-[20px] text-center">
          <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold leading-[34px] text-[#2c2c2c] text-[28px] mb-[10px]">
            Ellos también empezaron aquí
          </p>
          <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#8a8a8a]">
            personas reales, puntos de partida reales
          </p>
        </div>

        <div className="px-[16px] pb-[32px]">
          <img src={imgTestimonios} alt="Testimonios de otros corredores" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
