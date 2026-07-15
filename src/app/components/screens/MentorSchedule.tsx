import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import svgPaths from "../../../imports/IPhone131423/svg-cg0jrywrs1";
import { PressableButton } from "../PressableButton";

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

function Step({ icon, label, compact }: { icon: React.ReactNode; label: string; compact: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-[8px] shrink-0 ${compact ? "" : "w-[84px]"}`}>
      <div className="flex items-center justify-center size-[44px] rounded-[10px] bg-[#3643ba] text-white transition-colors">
        {icon}
      </div>
      <AnimatePresence initial={false}>
        {!compact && (
          <motion.span
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden text-center font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[13px] text-[#2c2c2c]"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const WEEKDAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const TIME_SLOTS = Array.from({ length: 21 }, (_, i) => {
  const totalMinutes = 8 * 60 + i * 30;
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${h}:${String(m).padStart(2, "0")}`;
});

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function TimePicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="h-[44px] w-full rounded-[6px] border border-[#d9d9d9] bg-white px-[16px] flex items-center justify-between text-left"
      >
        <span className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[14px] text-[#111]">{value}</span>
        <ChevronDown size={18} className={`text-[#8a8a8a] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute z-30 mt-[8px] w-full max-h-[220px] overflow-y-auto [&::-webkit-scrollbar]:hidden rounded-[12px] bg-white p-[8px] shadow-[0_12px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
            style={{ scrollbarWidth: "none" }}
          >
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => {
                  onChange(slot);
                  setOpen(false);
                }}
                className={`w-full text-left rounded-[6px] px-[12px] py-[8px] text-[14px] transition-colors ${
                  value === slot ? "bg-[#3643ba] text-white" : "text-[#2c2c2c] hover:bg-[#eceef5]"
                }`}
              >
                {slot}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MentorSchedule({
  mentorName,
  onBack,
  onContinue,
}: {
  mentorName: string;
  onBack: () => void;
  onContinue: (date: Date, time: string) => void;
}) {
  const today = new Date();
  const [collapsed, setCollapsed] = useState(false);
  const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [time, setTime] = useState(TIME_SLOTS[0]);

  const year = view.getFullYear();
  const month = view.getMonth();
  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  const isPast = (day: number) => {
    const d = new Date(year, month, day);
    return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const isCurrentMonth = year === today.getFullYear() && month === today.getMonth();

  const valid = !!selectedDate;

  return (
    <div className="bg-white relative size-full flex flex-col overflow-hidden" data-name="Agendar mentoria">
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

            {collapsed && (
              <div className="absolute inset-0 flex items-center justify-center gap-[8px] animate-in fade-in duration-300">
                <Step compact icon={<NotepadTextIcon size={22} />} label="Info personal" />
                <div className="h-px w-[28px] bg-[#3643ba]" />
                <Step compact icon={<LandPlotIcon size={22} />} label="Motivaciones" />
                <div className="h-px w-[28px] bg-[#3643ba]" />
                <Step compact icon={<IdCardLanyardIcon size={22} />} label="Mentores" />
              </div>
            )}
          </div>

          {!collapsed && (
            <div className="flex items-start justify-center gap-[8px] px-[13px] pt-[16px] animate-in fade-in duration-300">
              <Step compact={false} icon={<NotepadTextIcon size={22} />} label="Info personal" />
              <div className="h-px flex-1 bg-[#3643ba] mt-[22px]" />
              <Step compact={false} icon={<LandPlotIcon size={22} />} label="Motivaciones" />
              <div className="h-px flex-1 bg-[#3643ba] mt-[22px]" />
              <Step compact={false} icon={<IdCardLanyardIcon size={22} />} label="Mentores" />
            </div>
          )}
        </div>

        <div className="px-[24px] pt-[28px] pb-[24px]">
          <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold leading-[30px] text-[#2c2c2c] text-[26px] text-center mb-[16px]">
            Agendemos tu<br />primera mentoría
          </p>
          <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[16px] leading-[22px] text-[#8a8a8a] text-center mb-[44px]">
            Sesiones <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[#2c2c2c]">100% online</span> para adaptarlas<br />a tus tiempos y acceso en cualquier lugar.
          </p>

          <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[16px] leading-[20px] text-[#2c2c2c] text-center mb-[2px]">
            Mentorías {mentorName} – 30 min
          </p>
          <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#8a8a8a] text-center mb-[16px]">
            (GMT+02:00) Hora de Europa central – Madrid
          </p>

          {/* Calendar */}
          <div className="rounded-[16px] border border-[#ececec] p-[16px] mb-[24px]">
            <div className="flex items-center justify-between mb-[14px]">
              <button
                type="button"
                onClick={() => setView(new Date(year, month - 1, 1))}
                disabled={isCurrentMonth}
                className={`size-[28px] rounded-[8px] flex items-center justify-center transition-colors ${
                  isCurrentMonth ? "text-[#d9d9d9]" : "text-[#2c2c2c] hover:bg-[#f5f5f5]"
                }`}
              >
                <ChevronLeft size={18} />
              </button>
              <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[15px] text-[#2c2c2c]">
                {MONTHS[month]} {year}
              </p>
              <button
                type="button"
                onClick={() => setView(new Date(year, month + 1, 1))}
                className="size-[28px] rounded-[8px] bg-[#f5f5f5] flex items-center justify-center text-[#2c2c2c] hover:bg-[#ececec] transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-[2px] mb-[6px]">
              {WEEKDAYS.map((w) => (
                <div key={w} className="text-center font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[10px] text-[#b3b3b3]">
                  {w}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-[4px]">
              {cells.map((day, i) => {
                if (!day) return <div key={i} />;
                const date = new Date(year, month, day);
                const selected = selectedDate && isSameDay(selectedDate, date);
                const isToday = isSameDay(date, today);
                const disabled = isPast(day);
                return (
                  <div key={i} className="flex flex-col items-center gap-[2px]">
                    <button
                      type="button"
                      disabled={disabled}
                      onClick={() => setSelectedDate(date)}
                      className={`size-[32px] rounded-full text-[13px] transition-colors ${
                        selected
                          ? "bg-[#3643ba] text-white font-semibold"
                          : disabled
                          ? "text-[#d9d9d9]"
                          : "text-[#2c2c2c] hover:bg-[#eceef5]"
                      }`}
                    >
                      {day}
                    </button>
                    <span className={`size-[4px] rounded-full ${isToday && !selected ? "bg-[#3643ba]" : "bg-transparent"}`} />
                  </div>
                );
              })}
            </div>
          </div>

          <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold leading-[18px] text-[#111] text-[14px] mb-[8px]">
            Disponibilidad
          </p>
          <TimePicker value={time} onChange={setTime} />
        </div>
      </div>

      {/* Fixed footer */}
      <div className="shrink-0 bg-white px-[28px] pt-[17px] pb-[48px] border-t border-[#f0f0f0]">
        <PressableButton
          onClick={() => selectedDate && onContinue(selectedDate, time)}
          disabled={!valid}
          interactive={valid}
          className={`w-full h-[48px] rounded-[6px] flex items-center justify-center transition-colors ${valid ? "bg-[#3643ba]" : "bg-[#d9d9d9]"}`}
        >
          <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] text-white">Continuar</span>
        </PressableButton>
      </div>
    </div>
  );
}
