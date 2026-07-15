import { Play, Music } from "lucide-react";
import svgPaths from "../../../imports/IPhone131423/svg-cg0jrywrs1";
import { PressableButton } from "../PressableButton";
import { getMentor, type MentorId } from "../../lib/mentors";

function MapPinnedIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.05185 9.72225H3.47546C3.32986 9.72231 3.18796 9.76814 3.06982 9.85325C2.95168 9.93837 2.86329 10.0585 2.81713 10.1966L1.42546 14.3632C1.39058 14.4676 1.381 14.5788 1.39752 14.6876C1.41404 14.7964 1.45618 14.8997 1.52048 14.9891C1.58478 15.0784 1.66938 15.1511 1.76732 15.2014C1.86527 15.2516 1.97374 15.2778 2.0838 15.2778H14.5838C14.6938 15.2777 14.8022 15.2515 14.9 15.2014C14.9979 15.1512 15.0825 15.0785 15.1467 14.9893C15.211 14.9 15.2532 14.7968 15.2698 14.6881C15.2864 14.5794 15.2769 14.4683 15.2421 14.3639L13.8532 10.1972C13.8072 10.0589 13.7187 9.93859 13.6004 9.85333C13.4821 9.76808 13.34 9.72221 13.1942 9.72225H10.6164M12.5005 5.55558C12.5005 8.06461 9.81366 10.7146 8.75533 11.6632C8.63426 11.7557 8.48614 11.8058 8.3338 11.8058C8.18145 11.8058 8.03334 11.7557 7.91227 11.6632C6.85463 10.7146 4.16713 8.06461 4.16713 5.55558C4.16713 4.45051 4.60612 3.39071 5.38752 2.6093C6.16892 1.8279 7.22873 1.38892 8.3338 1.38892C9.43887 1.38892 10.4987 1.8279 11.2801 2.6093C12.0615 3.39071 12.5005 4.45051 12.5005 5.55558ZM9.72269 5.55558C9.72269 6.32265 9.10086 6.94447 8.3338 6.94447C7.56674 6.94447 6.94491 6.32265 6.94491 5.55558C6.94491 4.78852 7.56674 4.16669 8.3338 4.16669C9.10086 4.16669 9.72269 4.78852 9.72269 5.55558Z"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

function SongCard({ title, artist, blurb }: { title: string; artist: string; blurb: string }) {
  return (
    <div className="flex items-center gap-[14px] rounded-[12px] border border-[#ececec] p-[16px] mb-[24px]">
      <div className="flex items-center justify-center size-[40px] rounded-[10px] bg-[#3643ba] text-white shrink-0">
        <Music size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[15px] leading-[19px] text-[#2c2c2c] mb-[4px]">
          &ldquo;{title}&rdquo; — {artist}
        </p>
        <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[13px] leading-[17px] text-[#8a8a8a]">
          {blurb}
        </p>
      </div>
    </div>
  );
}

function GroupRunItem({ title, subtitle, isLast }: { title: string; subtitle: string; isLast?: boolean }) {
  return (
    <div className={`flex items-center gap-[14px] border border-[#ececec] p-[16px] ${isLast ? "rounded-b-[12px]" : "rounded-t-[12px] border-b-0"}`}>
      <div className="flex items-center justify-center size-[40px] rounded-[10px] bg-[#3643ba] shrink-0">
        <MapPinnedIcon size={18} />
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

export function MentorDetail({ mentorId, onBack, onSchedule }: { mentorId: MentorId; onBack: () => void; onSchedule: () => void }) {
  const mentor = getMentor(mentorId);

  return (
    <div className="bg-white relative size-full flex flex-col overflow-hidden" data-name="Detalle mentor">
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {/* Hero photo */}
        <div className="relative h-[420px] w-full bg-[#f5f5f5] shrink-0">
          <img src={mentor.heroImage} alt={mentor.name} className="absolute inset-0 size-full object-cover" style={{ objectPosition: mentor.heroFocus }} />

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
            {mentor.name}
          </p>

          <InfoSection title="Sobre mí" description={mentor.about} />
          <InfoSection title="Estilo de entrenamiento" description={mentor.trainingStyle} />
          <InfoSection title="Lo que más me importa" description={mentor.important} />

          <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[18px] leading-[22px] text-[#2c2c2c] mb-[8px]">
            Canción para arrancar
          </p>
          <SongCard title={mentor.song.title} artist={mentor.song.artist} blurb={mentor.song.blurb} />

          <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[18px] leading-[22px] text-[#2c2c2c] mb-[8px]">
            Salidas grupales
          </p>
          <div className="flex flex-col">
            {mentor.groupRuns.map((run, i) => (
              <GroupRunItem key={run.title} title={run.title} subtitle={run.subtitle} isLast={i === mentor.groupRuns.length - 1} />
            ))}
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
