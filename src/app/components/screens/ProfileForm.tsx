import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ClipboardList, Dumbbell, Users, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import svgPaths from "../../../imports/IPhone131423/svg-cg0jrywrs1";
import { PressableButton } from "../PressableButton";

const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const WEEKDAYS = ["L", "M", "X", "J", "V", "S", "D"];

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

function DatePicker({ value, onChange, inputClass }: { value: Date | null; onChange: (d: Date) => void; inputClass: string }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(() => value ?? new Date(2000, 0, 1));

  const year = view.getFullYear();
  const month = view.getMonth();
  // Monday-first offset for the 1st of the month.
  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const isSelected = (day: number) =>
    value && value.getFullYear() === year && value.getMonth() === month && value.getDate() === day;

  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen((o) => !o)} className={`${inputClass} pr-[44px] flex items-center text-left`}>
        <span className={value ? "text-[#111]" : "text-[#b0b0b0]"}>{value ? formatDate(value) : "DD/MM/AAAA"}</span>
      </button>
      <Calendar size={20} className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#3643ba] pointer-events-none" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute z-30 mt-[8px] w-[300px] rounded-[12px] bg-white p-[14px] shadow-[0_12px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
          >
            {/* Month / year controls */}
            <div className="flex items-center justify-between mb-[10px]">
              <button type="button" onClick={() => setView(new Date(year, month - 1, 1))} className="size-[28px] rounded-full hover:bg-[#f0f0f0] flex items-center justify-center text-[#2c2c2c]">
                <ChevronLeft size={18} />
              </button>
              <div className="flex items-center gap-[6px]">
                <select
                  value={month}
                  onChange={(e) => setView(new Date(year, Number(e.target.value), 1))}
                  className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] text-[#2c2c2c] outline-none bg-transparent"
                >
                  {MONTHS.map((m, i) => (
                    <option key={m} value={i}>{m}</option>
                  ))}
                </select>
                <select
                  value={year}
                  onChange={(e) => setView(new Date(Number(e.target.value), month, 1))}
                  className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] text-[#2c2c2c] outline-none bg-transparent"
                >
                  {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
              <button type="button" onClick={() => setView(new Date(year, month + 1, 1))} className="size-[28px] rounded-full hover:bg-[#f0f0f0] flex items-center justify-center text-[#2c2c2c]">
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Weekday headers */}
            <div className="grid grid-cols-7 gap-[2px] mb-[4px]">
              {WEEKDAYS.map((w) => (
                <div key={w} className="text-center font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[11px] text-[#b3b3b3]">{w}</div>
              ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-[2px]">
              {cells.map((day, i) => (
                <div key={i} className="flex items-center justify-center">
                  {day && (
                    <button
                      type="button"
                      onClick={() => {
                        const picked = new Date(year, month, day);
                        onChange(picked);
                        setOpen(false);
                      }}
                      className={`size-[34px] rounded-full text-[13px] transition-colors ${
                        isSelected(day) ? "bg-[#3643ba] text-white" : "text-[#2c2c2c] hover:bg-[#eceef5]"
                      }`}
                    >
                      {day}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
    <div className="flex flex-col items-center gap-[8px]">
      <motion.div
        animate={{ width: compact ? 34 : 44, height: compact ? 34 : 44, borderRadius: compact ? 8 : 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`flex items-center justify-center ${active ? "bg-[#3643ba] text-white ring-2 ring-[#3643ba]/40" : "bg-[#eceef5] text-[#b3b3b3]"}`}
      >
        {icon}
      </motion.div>
      <AnimatePresence initial={false}>
        {!compact && (
          <motion.span
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`overflow-hidden font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[13px] ${active ? "text-[#2c2c2c]" : "text-[#b3b3b3]"}`}
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

  const valid = nombre.trim() && apellido.trim() && fecha && gender;

  return (
    <div className="bg-white relative size-full flex flex-col overflow-hidden" data-name="iPhone 13 & 14 - 36">
      {/* Header + stepper */}
      <div className="shrink-0 px-[16px] pt-[24px] pb-[8px]">
        <div className="flex items-center gap-[16px]">
          <PressableButton onClick={onBack} className="block relative size-[32px] shrink-0">
            <div className="absolute inset-[20.83%]">
              <div className="absolute inset-[-7.14%]">
                <svg className="block size-full" fill="none" viewBox="0 0 21.3333 21.3333">
                  <path d={svgPaths.pdc7b00} stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                </svg>
              </div>
            </div>
          </PressableButton>

          {/* Compact stepper sits inline with the arrow */}
          {collapsed && (
            <div className="flex-1 flex items-center justify-center gap-[8px] pr-[48px]">
              <Step compact active icon={<ClipboardList size={18} />} label="Info personal" />
              <div className="h-px w-[28px] bg-[#e0e0e0]" />
              <Step compact active={false} icon={<Dumbbell size={18} />} label="Motivaciones" />
              <div className="h-px w-[28px] bg-[#e0e0e0]" />
              <Step compact active={false} icon={<Users size={18} />} label="Mentores" />
            </div>
          )}
        </div>

        {/* Full stepper below the arrow */}
        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="flex items-start justify-center gap-[8px] px-[13px] pt-[16px]">
                <Step compact={false} active icon={<ClipboardList size={22} />} label="Info personal" />
                <div className="h-px flex-1 bg-[#e0e0e0] mt-[22px]" />
                <Step compact={false} active={false} icon={<Dumbbell size={22} />} label="Motivaciones" />
                <div className="h-px flex-1 bg-[#e0e0e0] mt-[22px]" />
                <Step compact={false} active={false} icon={<Users size={22} />} label="Mentores" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scrollable form */}
      <div
        onScroll={(e) => setCollapsed(e.currentTarget.scrollTop > 24)}
        className="flex-1 overflow-y-auto px-[29px] pt-[24px] pb-[24px] [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold leading-[38px] text-[#2c2c2c] text-[32px] mb-[32px]">Cuéntanos un poco sobre ti</p>

        <div className="flex flex-col gap-[20px]">
          <Field label="Nombre">
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} className={inputClass} />
          </Field>

          <Field label="Apellido">
            <input value={apellido} onChange={(e) => setApellido(e.target.value)} className={inputClass} />
          </Field>

          <Field label="Fecha de nacimiento">
            <DatePicker value={fecha} onChange={setFecha} inputClass={inputClass} />
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

          <Field label="Genero">
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

      {/* Fixed footer */}
      <div className="shrink-0 bg-white px-[28px] pt-[17px] pb-[48px] border-t border-[#f0f0f0]">
        <PressableButton
          onClick={onContinue}
          disabled={!valid}
          interactive={!!valid}
          className={`w-full h-[48px] rounded-[6px] flex items-center justify-center transition-colors ${valid ? "bg-[#3643ba]" : "bg-[#d9d9d9]"}`}
        >
          <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] text-white">Continuar</span>
        </PressableButton>
      </div>
    </div>
  );
}
