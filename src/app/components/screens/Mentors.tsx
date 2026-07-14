import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, LineChart, Target, Award, Flag, Flame, Trophy, Users, Users2, Shuffle, Footprints, Leaf, Sparkles } from "lucide-react";
import svgPaths from "../../../imports/IPhone131423/svg-cg0jrywrs1";
import { PressableButton } from "../PressableButton";
import imgLaura from "../../../imports/card-product 1.png";
import imgMarco from "../../../imports/card-product 2.png";
import imgAnna from "../../../imports/card-product 3.png";
import imgLeo from "../../../imports/card-product 4.png";

function NotepadTextIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.55512 1.38889V4.16666M8.3329 1.38889V4.16666M11.1107 1.38889V4.16666M5.55512 6.94444H9.72179M5.55512 9.72222H11.1107M5.55512 12.5H9.02734M4.16623 2.77777H12.4996C13.2666 2.77777 13.8885 3.3996 13.8885 4.16666V13.8889C13.8885 14.6559 13.2666 15.2778 12.4996 15.2778H4.16623C3.39917 15.2778 2.77734 14.6559 2.77734 13.8889V4.16666C2.77734 3.3996 3.39917 2.77777 4.16623 2.77777Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LandPlotIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.33306 5.55555L12.4997 3.47222L8.33306 1.38889V5.55555ZM8.33306 5.55555V8.33333M5.55528 8.32639L1.73584 10.5069C1.62896 10.5675 1.54007 10.6553 1.47822 10.7615C1.41637 10.8676 1.38379 10.9883 1.38379 11.1111C1.38379 11.234 1.41637 11.3546 1.47822 11.4607C1.54007 11.5669 1.62896 11.6547 1.73584 11.7153L7.63861 15.0903C7.84975 15.2122 8.08926 15.2764 8.33306 15.2764C8.57686 15.2764 8.81637 15.2122 9.0275 15.0903L14.9303 11.7153C15.0372 11.6547 15.126 11.5669 15.1879 11.4607C15.2497 11.3546 15.2823 11.234 15.2823 11.1111C15.2823 10.9883 15.2497 10.8676 15.1879 10.7615C15.126 10.6553 15.0372 10.5675 14.9303 10.5069L11.1108 8.33333M4.50667 8.92361L12.1594 13.2986M12.1594 8.92361L4.51361 13.2986" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IdCardLanyardIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.37543 5.55555H7.2921M10.4171 1.38889L9.72266 2.77777H11.806C12.1743 2.77777 12.5276 2.9241 12.7881 3.18457C13.0485 3.44504 13.1949 3.79831 13.1949 4.16666V13.8889C13.1949 14.2572 13.0485 14.6105 12.7881 14.871C12.5276 15.1314 12.1743 15.2778 11.806 15.2778H4.86155C4.49319 15.2778 4.13992 15.1314 3.87945 14.871C3.61899 14.6105 3.47266 14.2572 3.47266 13.8889V4.16666C3.47266 3.79831 3.61899 3.44504 3.87945 3.18457C4.13992 2.9241 4.49319 2.77777 4.86155 2.77777H6.94488M11.7359 15.2778C11.5761 14.4932 11.1502 13.788 10.5301 13.2814C9.9101 12.7749 9.13406 12.4982 8.33342 12.4982C7.53278 12.4982 6.75674 12.7749 6.13669 13.2814C5.51665 13.788 5.09071 14.4932 4.93099 15.2778M6.25043 1.38889L8.33377 5.55555M10.4171 10.4167C10.4171 11.5673 9.48436 12.5 8.33377 12.5C7.18317 12.5 6.25043 11.5673 6.25043 10.4167C6.25043 9.26607 7.18317 8.33333 8.33377 8.33333C9.48436 8.33333 10.4171 9.26607 10.4171 10.4167Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Step({ icon, label, variant, compact }: { icon: React.ReactNode; label: string; variant: "completed" | "active" | "upcoming"; compact: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-[8px] shrink-0 ${compact ? "" : "w-[84px]"}`}>
      <div
        className={`flex items-center justify-center size-[44px] rounded-[10px] transition-colors ${
          variant === "completed"
            ? "bg-[#3643ba] text-white"
            : variant === "active"
            ? "bg-white text-[#3643ba] border-2 border-[#3643ba]"
            : "bg-[#f5f5f5] text-[#b3b3b3]"
        }`}
      >
        {icon}
      </div>
      <AnimatePresence initial={false}>
        {!compact && (
          <motion.span
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`overflow-hidden text-center font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[13px] ${
              variant === "upcoming" ? "text-[#b3b3b3]" : "text-[#2c2c2c]"
            }`}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

function Tag({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-[6px] rounded-full bg-white/90 border border-[#ececec] px-[12px] py-[6px] shrink-0">
      <span className="text-[#3643ba]">{icon}</span>
      <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[10px] leading-none text-[#2c2c2c] whitespace-nowrap">{label}</span>
    </div>
  );
}

type MentorId = "laura" | "marco" | "anna" | "leo";

const MENTORS: {
  id: MentorId;
  name: string;
  subtitle: string;
  image: string;
  focus: string;
  tags: { icon: React.ReactNode; label: string }[];
}[] = [
  {
    id: "laura",
    name: "Laura Luz Villalba",
    subtitle: "Planes Progresivos y medibles",
    image: imgLaura,
    focus: "20% 15%",
    tags: [
      { icon: <LineChart size={13} />, label: "Estructura" },
      { icon: <Target size={13} />, label: "Tecnica" },
      { icon: <Award size={13} />, label: "Resultados" },
    ],
  },
  {
    id: "marco",
    name: "Marco Antonio Vidal",
    subtitle: "Superar tus limites mentales",
    image: imgMarco,
    focus: "25% 10%",
    tags: [
      { icon: <Flag size={13} />, label: "Retos" },
      { icon: <Flame size={13} />, label: "Intensidad" },
      { icon: <Trophy size={13} />, label: "Gamificación" },
    ],
  },
  {
    id: "anna",
    name: "Anna Sofia Palomares",
    subtitle: "Especialista en dinámicas de grupo",
    image: imgAnna,
    focus: "22% 15%",
    tags: [
      { icon: <Users size={13} />, label: "Social" },
      { icon: <Users2 size={13} />, label: "Grupal" },
      { icon: <Shuffle size={13} />, label: "Dinamico" },
    ],
  },
  {
    id: "leo",
    name: "Leo David Arroyo",
    subtitle: "Especialista en running consciente",
    image: imgLeo,
    focus: "25% 10%",
    tags: [
      { icon: <Footprints size={13} />, label: "Desconexión" },
      { icon: <Leaf size={13} />, label: "Bienestar" },
      { icon: <Sparkles size={13} />, label: "Mindfulness" },
    ],
  },
];

function MentorCard({
  mentor,
  selected,
  onSelect,
}: {
  mentor: (typeof MENTORS)[number];
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <PressableButton
      onClick={onSelect}
      className={`relative w-full rounded-[20px] overflow-hidden text-left transition-shadow ${
        selected ? "ring-[3px] ring-[#3643ba]" : "ring-1 ring-[#ececec]"
      }`}
    >
      <div className="relative h-[240px] w-full bg-[#f5f5f5]">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="absolute inset-0 size-full object-cover"
          style={{ objectPosition: mentor.focus }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.88) 38%, rgba(255,255,255,0.15) 68%, rgba(255,255,255,0) 85%)" }}
        />

        <div className="relative z-10 flex h-full flex-col p-[20px]">
          <div className="flex-1 flex flex-col justify-center translate-y-[30px]">
            <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[22px] leading-[26px] text-[#2c2c2c]/35 mb-[10px] max-w-[220px]">
              {mentor.name}
            </p>
            <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[16px] leading-[21px] text-[#2c2c2c] max-w-[200px]">
              {mentor.subtitle}
            </p>
          </div>

          <div className="flex flex-nowrap gap-[8px]">
            {mentor.tags.map((tag) => (
              <Tag key={tag.label} icon={tag.icon} label={tag.label} />
            ))}
          </div>
        </div>

        {selected && (
          <div className="absolute top-[14px] right-[14px] z-10 flex items-center justify-center size-[26px] rounded-full bg-[#3643ba] text-white">
            <Check size={15} strokeWidth={3} />
          </div>
        )}
      </div>
    </PressableButton>
  );
}

export function Mentors({
  onBack,
  onOpenMentorDetail,
}: {
  onBack: () => void;
  onOpenMentorDetail: () => void;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState<MentorId | null>(null);

  return (
    <div className="bg-white relative size-full flex flex-col overflow-hidden" data-name="Mentores">
      {/* Scrollable content (header sticks to the top and content scrolls underneath it) */}
      <div
        onScroll={(e) => {
          const top = e.currentTarget.scrollTop;
          setCollapsed((prev) => (prev ? top > 12 : top > 36));
        }}
        className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", overflowAnchor: "none" }}
      >
        {/* Sticky header + stepper */}
        <div
          style={{ height: collapsed ? 100 : 152 }}
          className={`sticky top-0 z-10 bg-white px-[16px] overflow-hidden border-b transition-all duration-300 ease-in-out ${
            collapsed ? "border-[#f0f0f0] flex items-center" : "border-transparent pt-[24px] pb-[8px]"
          }`}
        >
          <div className="relative flex items-center w-full">
            <PressableButton onClick={onBack} className="relative z-10 block size-[32px] shrink-0">
              <div className="absolute inset-[20.83%]">
                <div className="absolute inset-[-7.14%]">
                  <svg className="block size-full" fill="none" viewBox="0 0 21.3333 21.3333">
                    <path d={svgPaths.pdc7b00} stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  </svg>
                </div>
              </div>
            </PressableButton>

            {/* Compact stepper is centered across the full header width, independent of the arrow */}
            {collapsed && (
              <div className="absolute inset-0 flex items-center justify-center gap-[8px] animate-in fade-in duration-300">
                <Step compact variant="completed" icon={<NotepadTextIcon size={22} />} label="Info personal" />
                <div className="h-px w-[28px] bg-[#3643ba]" />
                <Step compact variant="completed" icon={<LandPlotIcon size={22} />} label="Motivaciones" />
                <div className="h-px w-[28px] bg-[#3643ba]" />
                <Step compact variant="active" icon={<IdCardLanyardIcon size={22} />} label="Mentores" />
              </div>
            )}
          </div>

          {/* Full stepper below the arrow */}
          {!collapsed && (
            <div className="flex items-start justify-center gap-[8px] px-[13px] pt-[16px] animate-in fade-in duration-300">
              <Step compact={false} variant="completed" icon={<NotepadTextIcon size={22} />} label="Info personal" />
              <div className="h-px flex-1 bg-[#3643ba] mt-[22px]" />
              <Step compact={false} variant="completed" icon={<LandPlotIcon size={22} />} label="Motivaciones" />
              <div className="h-px flex-1 bg-[#3643ba] mt-[22px]" />
              <Step compact={false} variant="active" icon={<IdCardLanyardIcon size={22} />} label="Mentores" />
            </div>
          )}
        </div>

        <div className="px-[24px] pt-[44px] pb-[24px]">
          <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold leading-[26px] text-[#2c2c2c] text-[20px] text-center mb-[24px]">
            El coach correcto hace la diferencia entre empezar y mantenerte
          </p>

          <div className="flex flex-col gap-[16px]">
            {MENTORS.map((mentor) => (
              <MentorCard
                key={mentor.id}
                mentor={mentor}
                selected={selected === mentor.id}
                onSelect={() => setSelected(mentor.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fixed footer */}
      <div className="shrink-0 bg-white px-[28px] pt-[17px] pb-[48px] border-t border-[#f0f0f0]">
        <PressableButton
          onClick={onOpenMentorDetail}
          disabled={!selected}
          interactive={!!selected}
          className={`w-full h-[48px] rounded-[6px] flex items-center justify-center transition-colors ${selected ? "bg-[#3643ba]" : "bg-[#d9d9d9]"}`}
        >
          <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] text-white">Continuar</span>
        </PressableButton>
      </div>
    </div>
  );
}
