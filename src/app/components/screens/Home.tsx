import { useEffect, useRef, useState } from "react";
import { User, CalendarDays, Bell, ChevronRight, Home as HomeIcon, LineChart, IdCard, Footprints } from "lucide-react";
import { PressableButton } from "../PressableButton";
import { getMentor, type MentorId } from "../../lib/mentors";
import { loadProfile } from "../../lib/profileStorage";
import { loadMotivations } from "../../lib/motivationsStorage";

const DEFAULT_SESSIONS_PER_WEEK = 3;

function getSessionsPerWeek(frecuencia: string | null | undefined): number {
  if (!frecuencia) return DEFAULT_SESSIONS_PER_WEEK;
  const match = frecuencia.match(/\d+/);
  return match ? Number(match[0]) : DEFAULT_SESSIONS_PER_WEEK;
}

const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const WEEKDAYS_FULL = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const WEEKDAYS_SHORT = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const DAY_CELL_WIDTH = 40;
const DAY_CELL_GAP = 10;
const DAY_CELL_STRIDE = DAY_CELL_WIDTH + DAY_CELL_GAP;
const VISIBLE_DAYS = 7;

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function getMondayOfWeek(reference: Date) {
  const mondayOffset = (reference.getDay() + 6) % 7;
  return new Date(reference.getFullYear(), reference.getMonth(), reference.getDate() - mondayOffset);
}

function getDaysRange(start: Date, count: number) {
  return Array.from({ length: count }, (_, i) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + i));
}

function addMinutes(time: string, minutes: number) {
  const [h, m] = time.split(":").map(Number);
  const total = h * 60 + m + minutes;
  const eh = Math.floor(total / 60) % 24;
  const em = total % 60;
  return `${eh}:${String(em).padStart(2, "0")}`;
}

function formatTime12(time: string) {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "pm" : "am";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")}${period}`;
}

function StreakIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="3.73333" fill="#D9D9D9" />
      <path
        d="M13.9996 5.6C14.6219 8.08889 15.8663 10.1111 17.733 11.6667C19.5996 13.2222 20.533 14.9333 20.533 16.8C20.533 18.5327 19.8446 20.1945 18.6194 21.4198C17.3942 22.645 15.7324 23.3333 13.9996 23.3333C12.2669 23.3333 10.6051 22.645 9.37988 21.4198C8.15464 20.1945 7.46631 18.5327 7.46631 16.8C7.46631 15.7903 7.79381 14.8078 8.39964 14C8.39964 14.6188 8.64547 15.2123 9.08306 15.6499C9.52064 16.0875 10.1141 16.3333 10.733 16.3333C11.3518 16.3333 11.9453 16.0875 12.3829 15.6499C12.8205 15.2123 13.0663 14.6188 13.0663 14C13.0663 12.1333 11.6663 11.2 11.6663 9.33333C11.6663 8.08889 12.4441 6.84444 13.9996 5.6Z"
        fill="white"
        stroke="white"
        strokeWidth="1.86667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DayCell({
  label,
  day,
  selected,
  hasEvent,
  past,
}: {
  label: string;
  day: number;
  selected: boolean;
  hasEvent: boolean;
  past: boolean;
}) {
  return (
    <div className="flex shrink-0 snap-start flex-col items-center gap-[4px]">
      <div className={`size-[5px] rounded-full ${hasEvent ? "bg-[#3643ba]" : "bg-transparent"}`} />
      <div
        className={`flex w-[40px] flex-col items-center justify-center gap-[2px] rounded-[10px] py-[8px] transition-colors ${
          selected ? "bg-[#3643ba]" : past ? "bg-[#f5f5f5]" : "bg-white ring-1 ring-[#ececec]"
        }`}
      >
        <span
          className={
            selected
              ? "font-['Host_Grotesk:Regular',sans-serif] font-normal text-[11px] text-white/80"
              : past
              ? "font-['Host_Grotesk:Regular',sans-serif] font-normal text-[11px] text-[#b3b3b3]"
              : "font-['Host_Grotesk:Regular',sans-serif] font-normal text-[11px] text-[#8a8a8a]"
          }
        >
          {label}
        </span>
        <span
          className={
            selected
              ? "font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[15px] text-white"
              : past
              ? "font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[15px] text-[#b3b3b3]"
              : "font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[15px] text-[#2c2c2c]"
          }
        >
          {day}
        </span>
      </div>
    </div>
  );
}

function SessionCard({ index, active }: { index: number; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-[14px] rounded-[14px] p-[14px] transition-colors ${
        active ? "ring-2 ring-[#3643ba]" : "ring-1 ring-[#ececec]"
      }`}
    >
      <div
        className={`flex items-center justify-center size-[40px] shrink-0 rounded-[10px] ${
          active ? "bg-[#3643ba] text-white" : "bg-[#f0f0f0] text-[#c7c7c7]"
        }`}
      >
        <Footprints size={19} />
      </div>
      <div className="min-w-0 flex-1">
        <p
          className={`font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[10px] uppercase tracking-[0.04em] mb-[2px] ${
            active ? "text-[#3643ba]" : "text-[#c7c7c7]"
          }`}
        >
          Sesión día {index}
        </p>
        <p
          className={
            active
              ? "font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[15px] leading-[19px] text-[#2c2c2c]"
              : "font-['Host_Grotesk:Regular',sans-serif] font-normal text-[15px] leading-[19px] text-[#c7c7c7]"
          }
        >
          Objetivos a completar
        </p>
      </div>
      <ChevronRight size={18} className={active ? "text-[#2c2c2c]" : "text-[#d9d9d9]"} />
    </div>
  );
}

function NavItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className={`flex flex-1 flex-col items-center gap-[4px] ${active ? "text-[#3643ba]" : "text-[#b3b3b3]"}`}>
      {icon}
      <span
        className={
          active
            ? "font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[11px]"
            : "font-['Host_Grotesk:Regular',sans-serif] font-normal text-[11px]"
        }
      >
        {label}
      </span>
    </div>
  );
}

export function Home({ mentorId, date, time }: { mentorId: MentorId; date: Date; time: string }) {
  const mentor = getMentor(mentorId);
  const profile = loadProfile();
  const nombre = profile?.nombre ?? "Camila";
  const motivations = loadMotivations();
  const sessionsPerWeek = getSessionsPerWeek(motivations?.frecuencia);

  const today = new Date();
  const mondayOfWeek = getMondayOfWeek(today);
  const daysToScheduled = Math.round((date.getTime() - mondayOfWeek.getTime()) / 86400000);
  const calendarDays = getDaysRange(mondayOfWeek, Math.max(28, daysToScheduled + 14));
  const monthLabel = `${MONTHS[today.getMonth()]} ${today.getFullYear()}`;

  const mentorFirstName = mentor.name.split(" ").slice(0, 2).join(" ");
  const dateLabel = `${WEEKDAYS_FULL[date.getDay()]}, ${date.getDate()} de ${MONTHS[date.getMonth()].toLowerCase()}`;
  const timeRange = `${formatTime12(time)} – ${formatTime12(addMinutes(time, 30))}`;

  const [collapsed, setCollapsed] = useState(false);

  const weekStripRef = useRef<HTMLDivElement>(null);
  const [weekStripWidth, setWeekStripWidth] = useState<number>();

  useEffect(() => {
    const el = weekStripRef.current;
    if (!el) return;
    const measure = () => {
      const available = el.parentElement?.clientWidth ?? el.clientWidth;
      const maxCellsThatFit = Math.max(1, Math.floor((available + DAY_CELL_GAP) / DAY_CELL_STRIDE));
      const visibleCells = Math.min(VISIBLE_DAYS, maxCellsThatFit);
      setWeekStripWidth(visibleCells * DAY_CELL_STRIDE - DAY_CELL_GAP);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el.parentElement ?? el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white relative size-full flex flex-col overflow-hidden" data-name="Inicio">
      <div
        onScroll={(e) => {
          const top = e.currentTarget.scrollTop;
          setCollapsed((prev) => (prev ? top > 12 : top > 36));
        }}
        className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", overflowAnchor: "none" }}
      >
        {/* Sticky top icons */}
        <div
          className={`sticky top-0 z-10 bg-white px-[24px] pt-[28px] pb-[16px] border-b transition-all duration-300 ease-in-out ${
            collapsed ? "border-[#f0f0f0]" : "border-transparent"
          }`}
        >
          <div className="flex items-center justify-between">
            <PressableButton className="flex items-center justify-center size-[36px] rounded-full ring-1 ring-[#ececec] text-[#2c2c2c]">
              <User size={18} />
            </PressableButton>
            <div className="flex items-center gap-[18px] text-[#2c2c2c]">
              <PressableButton className="block">
                <CalendarDays size={22} />
              </PressableButton>
              <PressableButton className="block">
                <Bell size={22} />
              </PressableButton>
            </div>
          </div>
        </div>

        <div className="px-[24px] pt-[20px]">
          {/* Greeting + streak */}
          <div className="flex items-start justify-between gap-[12px] mb-[2px]">
            <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[26px] leading-[30px] text-[#2c2c2c]">
              ¡Hola {nombre}!
            </p>
            <div className="flex items-center gap-[8px] rounded-[10px] ring-1 ring-[#ececec] px-[12px] py-[6px] shrink-0">
              <StreakIcon size={28} />
              <div className="flex flex-col items-center leading-none">
                <span className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[22px] text-[#2c2c2c]">0</span>
                <span className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[10px] text-[#8a8a8a]">Semanas</span>
              </div>
            </div>
          </div>
          <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[22px] leading-[22px] text-[#8a8a8a] mb-[20px]">{monthLabel}</p>

          {/* Week strip */}
          <div className="-mx-[24px] px-[24px] mb-[20px]">
            <div
              ref={weekStripRef}
              className="flex items-start gap-[10px] overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", width: weekStripWidth }}
            >
              {calendarDays.map((d) => (
                <DayCell
                  key={d.toISOString()}
                  label={WEEKDAYS_SHORT[d.getDay()]}
                  day={d.getDate()}
                  selected={isSameDay(d, today)}
                  hasEvent={isSameDay(d, date)}
                  past={d < new Date(today.getFullYear(), today.getMonth(), today.getDate())}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-[#f0f0f0] mx-[24px] mb-[20px]" />

        <div className="px-[24px] pb-[24px] flex flex-col gap-[24px]">
          {/* Mentor session card */}
          <div className="relative w-full h-[140px] rounded-[16px] overflow-hidden bg-[#f5f5f5] ring-1 ring-[#ececec]">
            <img
              src={mentor.cardImage}
              alt={mentor.name}
              className="absolute inset-0 size-full object-cover"
              style={{ objectPosition: mentor.cardFocus }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(245,245,245,0.97) 0%, rgba(245,245,245,0.9) 42%, rgba(245,245,245,0.15) 70%, rgba(245,245,245,0) 88%)",
              }}
            />
            <div className="relative z-10 flex h-full max-w-[230px] flex-col justify-center p-[16px]">
              <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[20px] leading-[24px] text-[#2c2c2c] mb-[6px]">
                {mentorFirstName}
              </p>
              <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#5c5c5c] mb-[2px]">
                {dateLabel}
              </p>
              <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#5c5c5c] mb-[10px]">
                {timeRange}
              </p>
              <PressableButton className="self-start flex items-center justify-center rounded-[6px] bg-[#e4e4e4] px-[14px] py-[7px]">
                <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[12px] text-[#b3b3b3]">Unirse a la sesión</span>
              </PressableButton>
            </div>
          </div>

          {/* Plan de la semana */}
          <div>
            <div className="flex items-center justify-between mb-[10px]">
              <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold text-[20px] leading-[24px] text-[#2c2c2c]">
                Plan de la semana
              </p>
              <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[13px] text-[#2c2c2c]">0/{sessionsPerWeek}</span>
            </div>
            <div className="flex gap-[6px] mb-[20px]">
              {Array.from({ length: sessionsPerWeek }, (_, i) => (
                <div key={i} className="h-[4px] flex-1 rounded-full bg-[#ececec]" />
              ))}
            </div>
            <div className="flex flex-col gap-[12px]">
              {Array.from({ length: sessionsPerWeek }, (_, i) => (
                <SessionCard key={i} index={i + 1} active={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="shrink-0 bg-white border-t border-[#f0f0f0] px-[16px] pt-[10px] pb-[26px]">
        <div className="flex items-center justify-between">
          <NavItem icon={<HomeIcon size={22} />} label="Inicio" active />
          <NavItem icon={<LineChart size={22} />} label="Progreso" />
          <NavItem icon={<Footprints size={22} />} label="Correr" />
          <NavItem icon={<IdCard size={22} />} label="Mentor" />
        </div>
      </div>
    </div>
  );
}
