import { Play, Music, Users } from "lucide-react";
import svgPaths from "../../../imports/IPhone131423/svg-cg0jrywrs1";
import { PressableButton } from "../PressableButton";
import imgLaura from "../../../imports/foto laura.png";

function InfoSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-[24px]">
      <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[18px] leading-[22px] text-[#2c2c2c] mb-[8px]">
        {title}
      </p>
      <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#8a8a8a]">
        {description}
      </p>
    </div>
  );
}

function SongCard() {
  return (
    <div className="flex items-center gap-[14px] rounded-[12px] border border-[#ececec] p-[16px] mb-[24px]">
      <div className="flex items-center justify-center size-[40px] rounded-[10px] bg-[#3643ba] text-white shrink-0">
        <Music size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[15px] leading-[19px] text-[#2c2c2c] mb-[4px]">
          &ldquo;Square Hammer&rdquo; — Ghost
        </p>
        <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[13px] leading-[17px] text-[#8a8a8a]">
          Lo doy todo en esos 4:00 minutos
        </p>
      </div>
    </div>
  );
}

function GroupRunItem({ title, subtitle, isLast }: { title: string; subtitle: string; isLast?: boolean }) {
  return (
    <div className={`flex items-center gap-[14px] border border-[#ececec] p-[16px] ${isLast ? "rounded-b-[12px]" : "rounded-t-[12px] border-b-0"}`}>
      <div className="flex items-center justify-center size-[40px] rounded-[10px] bg-[#eceef9] text-[#3643ba] shrink-0">
        <Users size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[15px] leading-[19px] text-[#2c2c2c] mb-[4px]">
          {title}
        </p>
        <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[13px] leading-[17px] text-[#8a8a8a]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export function MentorDetail({ onBack, onSchedule }: { onBack: () => void; onSchedule: () => void }) {
  return (
    <div className="bg-white relative size-full flex flex-col overflow-hidden" data-name="Detalle mentor">
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {/* Hero photo */}
        <div className="relative h-[420px] w-full bg-[#f5f5f5] shrink-0">
          <img src={imgLaura} alt="Laura Luz Villalba" className="absolute inset-0 size-full object-cover" style={{ objectPosition: "50% 20%" }} />

          <PressableButton onClick={onBack} className="absolute top-[24px] left-[16px] z-10 block size-[32px] shrink-0">
            <div className="absolute inset-[20.83%]">
              <div className="absolute inset-[-7.14%]">
                <svg className="block size-full" fill="none" viewBox="0 0 21.3333 21.3333">
                  <path d={svgPaths.pdc7b00} stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                </svg>
              </div>
            </div>
          </PressableButton>

          <div className="absolute bottom-[16px] right-[16px] flex items-center justify-center size-[44px] rounded-full bg-white/40 backdrop-blur-sm text-white">
            <Play size={18} fill="white" />
          </div>
        </div>

        <div className="px-[24px] pt-[24px] pb-[24px]">
          <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[28px] leading-[32px] text-[#2c2c2c] mb-[24px]">
            Laura Luz Villalba
          </p>

          <InfoSection
            title="Sobre mí"
            description="Entreno a personas que quieren resultados reales, no motivación vacía. Cada sesión contigo tiene un propósito claro, te diré exactamente qué hacemos, por qué y qué vas a notar al terminar."
          />
          <InfoSection title="Estilo de entrenamiento" description="Estructurado y directo." />
          <InfoSection
            title="Lo que más me importa"
            description="Que sepas exactamente cómo vas. No hay progreso invisible si avanzas, lo vamos a ver juntos."
          />

          <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[18px] leading-[22px] text-[#2c2c2c] mb-[8px]">
            Canción para arrancar
          </p>
          <SongCard />

          <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[18px] leading-[22px] text-[#2c2c2c] mb-[8px]">
            Salidas grupales
          </p>
          <div className="flex flex-col">
            <GroupRunItem title="Martes y jueves" subtitle="17:00h · Parque del Retiro, Madrid" />
            <GroupRunItem title="Sábados" subtitle="9:00h · Parque del Retiro, Madrid" isLast />
          </div>
        </div>
      </div>

      {/* Fixed footer */}
      <div className="shrink-0 bg-white px-[28px] pt-[17px] pb-[48px] border-t border-[#f0f0f0]">
        <PressableButton onClick={onSchedule} className="w-full h-[48px] rounded-[6px] flex items-center justify-center bg-[#3643ba]">
          <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] text-white">Agendar cita</span>
        </PressableButton>
      </div>
    </div>
  );
}
