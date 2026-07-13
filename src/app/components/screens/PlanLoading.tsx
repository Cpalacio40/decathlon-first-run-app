import { useEffect, useState } from "react";
import { Play, Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

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

function StarRow({ size = 10 }: { size?: number }) {
  return (
    <div className="flex items-center gap-[1px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} className="fill-[#2c2c2c] text-[#2c2c2c]" />
      ))}
    </div>
  );
}

function Waveform() {
  const bars = [4, 9, 15, 10, 19, 12, 21, 9, 16, 7, 14, 6, 17, 10, 5, 13, 8, 15, 6, 9];
  return (
    <div className="flex items-center gap-[8px] rounded-[8px] bg-[#f5f5f5] px-[10px] py-[8px]">
      <div className="flex items-center justify-center size-[20px] rounded-full bg-white shrink-0">
        <Play size={10} className="fill-[#3643ba] text-[#3643ba] ml-[1px]" />
      </div>
      <div className="flex items-center gap-[2px] flex-1 h-[18px] overflow-hidden">
        {bars.map((h, i) => (
          <div key={i} className="w-[2px] rounded-full bg-[#c7c7c7] shrink-0" style={{ height: h }} />
        ))}
      </div>
    </div>
  );
}

function ReviewerRow({ avatar, name }: { avatar: string; name: string }) {
  return (
    <div className="flex items-center gap-[7px]">
      <ImageWithFallback src={avatar} alt={name} className="size-[24px] rounded-full object-cover shrink-0" />
      <div className="flex flex-col gap-[1px] min-w-0">
        <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[11px] leading-[13px] text-[#2c2c2c] truncate">{name}</p>
        <StarRow size={9} />
      </div>
    </div>
  );
}

function InfoCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-[10px] break-inside-avoid-column rounded-[10px] border border-[#ececec] bg-white p-[10px] flex flex-col gap-[8px]">
      {children}
    </div>
  );
}

function PhotoCard({ src, alt, aspect = "3 / 4" }: { src: string; alt: string; aspect?: string }) {
  return (
    <div className="mb-[10px] break-inside-avoid-column rounded-[10px] overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: aspect }}>
      <ImageWithFallback src={src} alt={alt} className="size-full object-cover" />
    </div>
  );
}

function StoryCard({ src, alt, title, aspect = "3 / 4" }: { src: string; alt: string; title: string; aspect?: string }) {
  return (
    <div className="relative mb-[10px] break-inside-avoid-column rounded-[10px] overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: aspect }}>
      <ImageWithFallback src={src} alt={alt} className="size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-[10px]">
        <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[8px] tracking-[0.08em] uppercase text-white/80 mb-[2px]">
          Historias de corredores
        </p>
        <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[15px] leading-[17px] text-white">{title}</p>
      </div>
    </div>
  );
}

const avatar = (seed: string) => `https://i.pravatar.cc/64?u=${seed}`;
const photo = (seed: string, w = 300, h = 400) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

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

        <div className="px-[16px] pb-[32px] columns-3 gap-[10px]">
          <InfoCard>
            <ReviewerRow avatar={avatar("maria-salasar")} name="María Salasar" />
            <Waveform />
            <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[10px] text-[#b3b3b3]">Marzo 12, 2026</p>
          </InfoCard>

          <StoryCard src={photo("olivia-jake")} alt="Olivia y Jake" title="Olivia y Jake" />

          <InfoCard>
            <ReviewerRow avatar={avatar("carlos-guzman")} name="Carlos Guzman" />
            <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[11px] leading-[15px] text-[#6a6a6a]">
              Lo había dejado hace dos años. Pensaba que ya no era para mí. Pero con alguien de tu lado es diferente.
            </p>
          </InfoCard>

          <PhotoCard src={photo("carlos-guzman-beach", 300, 320)} alt="Carlos Guzman" aspect="3 / 2.6" />

          <PhotoCard src={photo("runner-055", 300, 460)} alt="Corredora con dorsal" aspect="3 / 4.6" />

          <InfoCard>
            <ReviewerRow avatar={avatar("teresa-gutierrez")} name="Teresa Gutierrez" />
            <Waveform />
            <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[10px] text-[#b3b3b3]">Mayo 3, 2026</p>
          </InfoCard>

          <PhotoCard src={photo("group-run", 300, 240)} alt="Grupo corriendo" aspect="3 / 2.4" />

          <InfoCard>
            <ReviewerRow avatar={avatar("pepe-trueno")} name="Pepe Trueno" />
            <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[11px] leading-[15px] text-[#6a6a6a]">
              Llevaba años diciéndome que iba a empezar a correr. Mi mentor no me presionó, solo me ayudó a dar el primer paso. La primera
              semana solo corrí 10 minutos y me dijo que era suficiente.
            </p>
            <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[10px] text-[#b3b3b3]">Enero 10, 2026</p>
          </InfoCard>

          <PhotoCard src={photo("pepe-running", 300, 340)} alt="Pepe Trueno corriendo" aspect="3 / 3.4" />

          <StoryCard src={photo("maria-ortiz")} alt="Maria Ortiz" title="Maria Ortiz" />
        </div>
      </div>
    </div>
  );
}
