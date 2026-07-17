import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Calendar } from "lucide-react";
import svgPaths from "../../../imports/IPhone131423/svg-cg0jrywrs1";
import { PressableButton } from "../PressableButton";
import { saveProfile } from "../../lib/profileStorage";

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

const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function formatDate(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}

type MeasureKind = "height" | "weight";

function buildOptions(kind: MeasureKind, unit: string): { value: string; label: string }[] {
  if (kind === "height") {
    if (unit === "cm") {
      return Array.from({ length: 121 }, (_, i) => 120 + i).map((n) => ({ value: `${n}`, label: `${n} cm` }));
    }
    // feet + inches
    const out: { value: string; label: string }[] = [];
    for (let ft = 3; ft <= 7; ft++) {
      for (let inch = 0; inch <= 11; inch++) {
        out.push({ value: `${ft}'${inch}"`, label: `${ft}' ${inch}"` });
      }
    }
    return out;
  }
  // weight
  if (unit === "kg") {
    return Array.from({ length: 171 }, (_, i) => 30 + i).map((n) => ({ value: `${n}`, label: `${n} kg` }));
  }
  return Array.from({ length: 375 }, (_, i) => 66 + i).map((n) => ({ value: `${n}`, label: `${n} lb` }));
}

function MeasurePicker({
  kind,
  units,
  value,
  unit,
  onChange,
  inputClass,
}: {
  kind: MeasureKind;
  units: [string, string];
  value: string;
  unit: string;
  onChange: (value: string, unit: string) => void;
  inputClass: string;
}) {
  const [open, setOpen] = useState(false);
  const options = buildOptions(kind, unit);

  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen((o) => !o)} className={`${inputClass} pr-[52px] flex items-center text-left`}>
        <span className={value ? "text-[#111]" : "text-[#b0b0b0]"}>{value ? `${value} ${kind === "height" && unit === "cm" ? "cm" : kind === "weight" ? unit : ""}`.trim() : "—"}</span>
      </button>
      <span className="absolute right-[10px] top-1/2 -translate-y-1/2 border border-[#d9d9d9] rounded-[4px] px-[6px] py-[1px] font-['Host_Grotesk:Regular',sans-serif] text-[12px] text-[#444] pointer-events-none">
        {unit}
      </span>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute z-30 mt-[8px] w-full rounded-[12px] bg-white p-[12px] shadow-[0_12px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
          >
            {/* Unit toggle */}
            <div className="flex gap-[6px] mb-[10px] p-[3px] bg-[#f0f1f6] rounded-[8px]">
              {units.map((u) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => onChange("", u)}
                  className={`flex-1 rounded-[6px] py-[6px] text-[13px] transition-colors ${
                    unit === u ? "bg-white text-[#3643ba] shadow-sm" : "text-[#8a8a8a]"
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>

            {/* Scrollable values */}
            <div className="max-h-[180px] overflow-y-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
              {options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value, unit);
                    setOpen(false);
                  }}
                  className={`w-full text-left rounded-[6px] px-[12px] py-[8px] text-[14px] transition-colors ${
                    value === opt.value ? "bg-[#3643ba] text-white" : "text-[#2c2c2c] hover:bg-[#eceef5]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const WHEEL_ITEM_HEIGHT = 36;
const WHEEL_VISIBLE_ROWS = 5;

function WheelColumn<T extends string | number>({
  items,
  value,
  onChange,
  render,
  widthClass = "flex-1",
}: {
  items: T[];
  value: T;
  onChange: (value: T) => void;
  render?: (item: T) => React.ReactNode;
  widthClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number>();
  const containerHeight = WHEEL_ITEM_HEIGHT * WHEEL_VISIBLE_ROWS;
  const paddingY = (containerHeight - WHEEL_ITEM_HEIGHT) / 2;

  // Keep the scroll position in sync whenever the value changes from outside
  // (initial mount, or clamped e.g. when a month has fewer days).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const idx = items.indexOf(value);
    if (idx < 0) return;
    const currentIdx = Math.round(el.scrollTop / WHEEL_ITEM_HEIGHT);
    if (currentIdx !== idx) el.scrollTop = idx * WHEEL_ITEM_HEIGHT;
  }, [value, items]);

  const handleScroll = () => {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      const el = ref.current;
      if (!el) return;
      const idx = Math.min(Math.max(Math.round(el.scrollTop / WHEEL_ITEM_HEIGHT), 0), items.length - 1);
      el.scrollTo({ top: idx * WHEEL_ITEM_HEIGHT, behavior: "smooth" });
      const next = items[idx];
      if (next !== value) onChange(next);
    }, 120);
  };

  return (
    <div
      ref={ref}
      onScroll={handleScroll}
      className={`${widthClass} min-w-0 overflow-y-auto [&::-webkit-scrollbar]:hidden`}
      style={{
        height: containerHeight,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        scrollbarWidth: "none",
        scrollSnapType: "y mandatory",
      }}
    >
      {items.map((item) => (
        <div key={String(item)} style={{ height: WHEEL_ITEM_HEIGHT, scrollSnapAlign: "center" }} className="flex items-center justify-center px-[2px]">
          <span
            className={
              item === value
                ? "font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[15px] text-[#111] whitespace-nowrap"
                : "font-['Host_Grotesk:Regular',sans-serif] font-normal text-[15px] text-[#c4c4c4] whitespace-nowrap"
            }
          >
            {render ? render(item) : item}
          </span>
        </div>
      ))}
    </div>
  );
}

function BirthDateSheet({
  value,
  onCancel,
  onAccept,
}: {
  value: Date | null;
  onCancel: () => void;
  onAccept: (d: Date) => void;
}) {
  const base = value ?? new Date();
  const [month, setMonth] = useState(base.getMonth());
  const [day, setDay] = useState(base.getDate());
  const [year, setYear] = useState(base.getFullYear());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthItems = useMemo(() => Array.from({ length: 12 }, (_, i) => i), []);
  const dayItems = useMemo(() => Array.from({ length: daysInMonth }, (_, i) => i + 1), [daysInMonth]);
  const currentYear = new Date().getFullYear();
  const yearItems = useMemo(() => Array.from({ length: 100 }, (_, i) => currentYear - 99 + i), [currentYear]);

  useEffect(() => {
    if (day > daysInMonth) setDay(daysInMonth);
  }, [daysInMonth, day]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 p-[24px]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
        className="w-[320px] bg-white rounded-[16px] pt-[20px] pb-[8px] px-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
      >
        <p className="text-center font-['Host_Grotesk:Bold',sans-serif] font-bold text-[22px] leading-[26px] text-[#111] mb-[14px]">
          Selecciona tu fecha
          <br />
          de nacimiento
        </p>

        <div className="relative flex items-stretch">
          <div
            className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10 rounded-[8px] bg-[#f0f1f6]"
            style={{ height: WHEEL_ITEM_HEIGHT }}
          />
          <WheelColumn items={monthItems} value={month} onChange={setMonth} render={(m) => MONTHS[m]} widthClass="flex-[1.3]" />
          <WheelColumn items={dayItems} value={day} onChange={setDay} widthClass="flex-[0.7]" />
          <WheelColumn items={yearItems} value={year} onChange={setYear} widthClass="flex-[1]" />
        </div>

        <div className="flex items-center border-t border-[#f0f0f0] mt-[10px]">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 h-[48px] font-['Host_Grotesk:Regular',sans-serif] font-normal text-[16px] text-[#2c2c2c]"
          >
            Cancelar
          </button>
          <div className="w-px self-stretch bg-[#f0f0f0] my-[8px]" />
          <button
            type="button"
            onClick={() => onAccept(new Date(year, month, day))}
            className="flex-1 h-[48px] font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[16px] text-[#3643ba]"
          >
            Aceptar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DateField({ value, onOpen, inputClass }: { value: Date | null; onOpen: () => void; inputClass: string }) {
  return (
    <div className="relative">
      <button type="button" onClick={onOpen} className={`${inputClass} pr-[44px] flex items-center text-left`}>
        <span className={value ? "text-[#111]" : "text-[#b0b0b0]"}>{value ? formatDate(value) : "DD/MM/AAAA"}</span>
      </button>
      <Calendar size={20} className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#111] pointer-events-none" />
    </div>
  );
}

type Gender = "hombre" | "mujer" | "no-binario" | "prefiero-no-decir";

const GENDERS: { id: Gender; label: string }[] = [
  { id: "hombre", label: "Hombre" },
  { id: "mujer", label: "Mujer" },
  { id: "no-binario", label: "No binario" },
  { id: "prefiero-no-decir", label: "Prefiero no decir" },
];

function Step({ icon, label, active, compact }: { icon: React.ReactNode; label: string; active: boolean; compact: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-[8px] shrink-0 ${compact ? "" : "w-[84px]"}`}>
      <div
        className={`flex items-center justify-center size-[44px] rounded-[10px] transition-colors ${
          active ? "bg-white text-[#3643ba] border-2 border-[#3643ba]" : "bg-[#f5f5f5] text-[#b3b3b3]"
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
            className={`overflow-hidden text-center font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[13px] ${active ? "text-[#2c2c2c]" : "text-[#b3b3b3]"}`}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[8px] w-full">
      <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold leading-[18px] text-[#111] text-[14px]">{label}</p>
      {children}
    </div>
  );
}

const inputClass =
  "h-[44px] w-full rounded-[6px] border border-[#d9d9d9] bg-white px-[16px] outline-none font-['Host_Grotesk:Regular',sans-serif] font-normal text-[#111] text-[14px] focus:border-[#3643ba] transition-colors";

export function ProfileForm({ onContinue, onBack }: { onContinue: () => void; onBack: () => void }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fecha, setFecha] = useState<Date | null>(null);
  const [altura, setAltura] = useState("");
  const [alturaUnit, setAlturaUnit] = useState("cm");
  const [peso, setPeso] = useState("");
  const [pesoUnit, setPesoUnit] = useState("kg");
  const [gender, setGender] = useState<Gender | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const valid = nombre.trim() && apellido.trim() && fecha && gender;

  const handleContinue = () => {
    saveProfile({ nombre: nombre.trim(), apellido: apellido.trim() });
    onContinue();
  };

  return (
    <div className="bg-white relative size-full flex flex-col overflow-hidden" data-name="iPhone 13 & 14 - 36">
      {/* Scrollable form (header sticks to the top and content scrolls underneath it) */}
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
                <Step compact active icon={<NotepadTextIcon size={22} />} label="Info personal" />
                <div className="h-px w-[28px] bg-[#e0e0e0]" />
                <Step compact active={false} icon={<LandPlotIcon size={22} />} label="Motivaciones" />
                <div className="h-px w-[28px] bg-[#e0e0e0]" />
                <Step compact active={false} icon={<IdCardLanyardIcon size={22} />} label="Mentores" />
              </div>
            )}
          </div>

          {/* Full stepper below the arrow */}
          {!collapsed && (
            <div className="flex items-start justify-center gap-[8px] px-[13px] pt-[16px] animate-in fade-in duration-300">
              <Step compact={false} active icon={<NotepadTextIcon size={22} />} label="Info personal" />
              <div className="h-px flex-1 bg-[#e0e0e0] mt-[22px]" />
              <Step compact={false} active={false} icon={<LandPlotIcon size={22} />} label="Motivaciones" />
              <div className="h-px flex-1 bg-[#e0e0e0] mt-[22px]" />
              <Step compact={false} active={false} icon={<IdCardLanyardIcon size={22} />} label="Mentores" />
            </div>
          )}
        </div>

        <div className="px-[29px] pt-[24px] pb-[24px]">
          <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold leading-[38px] text-[#2c2c2c] text-[32px] mb-[32px]">Cuéntanos un poco sobre ti</p>

          <div className="flex flex-col gap-[20px]">
          <Field label="Nombre">
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} className={inputClass} />
          </Field>

          <Field label="Apellido">
            <input value={apellido} onChange={(e) => setApellido(e.target.value)} className={inputClass} />
          </Field>

          <Field label="Fecha de nacimiento">
            <DateField value={fecha} onOpen={() => setDatePickerOpen(true)} inputClass={inputClass} />
          </Field>

          <div className="flex gap-[16px]">
            <div className="flex-1">
              <Field label="Altura">
                <MeasurePicker
                  kind="height"
                  units={["cm", "ft"]}
                  value={altura}
                  unit={alturaUnit}
                  onChange={(v, u) => { setAltura(v); setAlturaUnit(u); }}
                  inputClass={inputClass}
                />
              </Field>
            </div>
            <div className="flex-1">
              <Field label="Peso">
                <MeasurePicker
                  kind="weight"
                  units={["kg", "lb"]}
                  value={peso}
                  unit={pesoUnit}
                  onChange={(v, u) => { setPeso(v); setPesoUnit(u); }}
                  inputClass={inputClass}
                />
              </Field>
            </div>
          </div>

          <Field label="Género">
            <div className="flex flex-col gap-[16px]">
              {GENDERS.map((g) => (
                <button key={g.id} onClick={() => setGender(g.id)} className="flex items-center gap-[12px] text-left">
                  <span className={`size-[20px] rounded-full border-2 flex items-center justify-center ${gender === g.id ? "border-[#3643ba]" : "border-[#c4c4c4]"}`}>
                    {gender === g.id && <span className="size-[10px] rounded-full bg-[#3643ba]" />}
                  </span>
                  <span className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[15px] text-[#2c2c2c]">{g.label}</span>
                </button>
              ))}
            </div>
          </Field>

          <div className="h-px bg-[#e6e6e6] mt-[8px]" />
          <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#8a8a8a]">
            No te preocupes, podrás modificar esta información más adelante desde tu perfil.
          </p>
          </div>
        </div>
      </div>

      {/* Fixed footer */}
      <div className="shrink-0 bg-white px-[28px] pt-[17px] pb-[48px] border-t border-[#f0f0f0]">
        <PressableButton
          onClick={handleContinue}
          disabled={!valid}
          interactive={!!valid}
          className={`w-full h-[48px] rounded-[6px] flex items-center justify-center transition-colors ${valid ? "bg-[#3643ba]" : "bg-[#d9d9d9]"}`}
        >
          <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] text-white">Continuar</span>
        </PressableButton>
      </div>

      <AnimatePresence>
        {datePickerOpen && (
          <BirthDateSheet
            value={fecha}
            onCancel={() => setDatePickerOpen(false)}
            onAccept={(d) => {
              setFecha(d);
              setDatePickerOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
