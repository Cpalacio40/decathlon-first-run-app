import { IdCard, CalendarDays, Globe, Video } from "lucide-react";
import svgPaths from "../../../imports/IPhone131423/svg-cg0jrywrs1";
import { DecathlonLogo } from "../DecathlonLogo";
import { PressableButton } from "../PressableButton";

const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const WEEKDAYS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function addMinutes(time: string, minutes: number) {
  const [h, m] = time.split(":").map(Number);
  const total = h * 60 + m + minutes;
  const eh = Math.floor(total / 60) % 24;
  const em = total % 60;
  return `${eh}:${String(em).padStart(2, "0")}`;
}

function DetailRow({ icon, children, isLast }: { icon: React.ReactNode; children: React.ReactNode; isLast?: boolean }) {
  return (
    <div className={`flex items-center gap-[12px] ${isLast ? "" : "mb-[14px]"}`}>
      <div className="flex items-center justify-center size-[20px] shrink-0 text-[#8a8a8a]">{icon}</div>
      <span className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#2c2c2c]">{children}</span>
    </div>
  );
}

export function MentorScheduled({
  mentorName,
  mentorRole,
  onAccept,
  onBack,
  date,
  time,
}: {
  mentorName: string;
  mentorRole: string;
  onAccept: () => void;
  onBack: () => void;
  date: Date;
  time: string;
}) {
  const dateLabel = `${WEEKDAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  const timeRange = `${time} - ${addMinutes(time, 30)}`;

  return (
    <div className="bg-white relative size-full flex flex-col overflow-hidden" data-name="Mentoria agendada">
      {/* Header */}
      <div className="relative flex items-center justify-center h-[101px] px-[16px] py-[12px] mt-[24px] shrink-0">
        <PressableButton onClick={onBack} className="absolute left-[16px] z-10 block size-[32px] shrink-0">
          <div className="absolute inset-[20.83%]">
            <div className="absolute inset-[-7.14%]">
              <svg className="block size-full" fill="none" viewBox="0 0 21.3333 21.3333">
                <path d={svgPaths.pdc7b00} stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
              </svg>
            </div>
          </div>
        </PressableButton>
        <DecathlonLogo />
      </div>

      <div
        className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden flex flex-col"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="min-h-full px-[24px] py-[24px] flex flex-col items-center justify-center">
          <div className="flex items-center justify-center size-[64px] rounded-[16px] bg-[#3643ba] mb-[24px] shrink-0">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M7 15.5L12.5 21L23 8" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold leading-[30px] text-[#2c2c2c] text-[26px] text-center mb-[16px]">
            Tu mentoría ha<br />sido agendada
          </p>
          <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[16px] leading-[22px] text-[#8a8a8a] text-center mb-[32px]">
            Se ha <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[#2c2c2c]">enviado una invitación</span> de calendario<br />a su dirección de correo electrónico.
          </p>

          <div className="w-full rounded-[16px] border border-[#ececec] p-[16px]">
            <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[16px] leading-[20px] text-[#3643ba] mb-[16px]">
              Detalles de la sesión
            </p>
            <DetailRow icon={<IdCard size={18} />}>{mentorName} ({mentorRole})</DetailRow>
            <DetailRow icon={<CalendarDays size={18} />}>{timeRange}, {dateLabel}</DetailRow>
            <DetailRow icon={<Globe size={18} />}>Europa central/Madrid</DetailRow>
            <DetailRow icon={<Video size={18} />} isLast>Online</DetailRow>
          </div>
        </div>
      </div>

      {/* Fixed footer */}
      <div className="shrink-0 bg-white px-[28px] pt-[17px] pb-[48px] border-t border-[#f0f0f0]">
        <PressableButton onClick={onAccept} className="w-full h-[48px] rounded-[6px] flex items-center justify-center bg-[#3643ba]">
          <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] text-white">Aceptar</span>
        </PressableButton>
      </div>
    </div>
  );
}
