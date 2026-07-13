import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ClipboardList, Dumbbell, Users } from "lucide-react";
import svgPaths from "../../../imports/IPhone131423/svg-cg0jrywrs1";
import { PressableButton } from "../PressableButton";

function Step({ icon, label, active, compact }: { icon: React.ReactNode; label: string; active: boolean; compact: boolean }) {
  return (
    <div className="flex flex-col items-center gap-[8px]">
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
            className={`overflow-hidden font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[13px] ${active ? "text-[#2c2c2c]" : "text-[#b3b3b3]"}`}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

function ChipGroup({
  options,
  value,
  onChange,
  multi,
}: {
  options: string[];
  value: string[];
  onChange: (next: string[]) => void;
  multi?: boolean;
}) {
  const toggle = (option: string) => {
    if (multi) {
      onChange(value.includes(option) ? value.filter((o) => o !== option) : [...value, option]);
    } else {
      onChange(value.includes(option) ? [] : [option]);
    }
  };

  return (
    <div className="flex flex-wrap gap-[10px]">
      {options.map((option) => {
        const selected = value.includes(option);
        return (
          <button
            key={option}
            type="button"
            onClick={() => toggle(option)}
            className={`rounded-full border px-[16px] py-[10px] font-['Host_Grotesk:Regular',sans-serif] text-[14px] leading-[18px] transition-colors ${
              selected ? "border-[#3643ba] bg-[#eceef9] text-[#3643ba] font-['Host_Grotesk:SemiBold',sans-serif] font-semibold" : "border-[#d9d9d9] text-[#2c2c2c]"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

function Question({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[14px] w-full">
      <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold leading-[22px] text-[#111] text-[17px]">{label}</p>
      {children}
    </div>
  );
}

const OBJETIVO = ["Perder peso", "Crear hábito", "Relajarme", "Mantenerme en forma", "Mejorar salud", "Tonificarme", "Mejorar condición física", "Progresar en mi deporte", "Otro"];
const LOGROS = ["Rendimiento", "Constancia", "Disfrute", "Resistencia física", "Quemar calorías", "Técnica", "Correr una carrera", "Otro"];
const EXPERIENCIA = ["Nunca", "Hace tiempo", "Recientemente"];
const COMPLEXION = ["Delgada", "Media", "Atlética", "Redondeada"];
const MOTIVACION = ["Estructura", "Retos", "Diversión", "Compañía", "Resultados", "Desconectar"];
const TIEMPO = ["15 min", "30 min", "45 min"];
const FRECUENCIA = ["1 vez por semana", "2 veces por semana", "3 veces por semana"];
const SALUD = ["Sí", "No", "Prefiero no decirlo"];

export function MotivationsForm({ onContinue, onBack }: { onContinue: () => void; onBack: () => void }) {
  const [objetivo, setObjetivo] = useState<string[]>([]);
  const [logros, setLogros] = useState<string[]>([]);
  const [experiencia, setExperiencia] = useState<string[]>([]);
  const [complexion, setComplexion] = useState<string[]>([]);
  const [motivacion, setMotivacion] = useState<string[]>([]);
  const [tiempo, setTiempo] = useState<string[]>([]);
  const [frecuencia, setFrecuencia] = useState<string[]>([]);
  const [salud, setSalud] = useState<string[]>([]);
  const [collapsed, setCollapsed] = useState(false);

  const valid =
    objetivo.length > 0 &&
    experiencia.length > 0 &&
    complexion.length > 0 &&
    tiempo.length > 0 &&
    frecuencia.length > 0 &&
    salud.length > 0;

  return (
    <div className="bg-white relative size-full flex flex-col overflow-hidden" data-name="Motivaciones">
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
                <Step compact active={false} icon={<ClipboardList size={22} />} label="Info personal" />
                <div className="h-px w-[28px] bg-[#e0e0e0]" />
                <Step compact active icon={<Dumbbell size={22} />} label="Motivaciones" />
                <div className="h-px w-[28px] bg-[#e0e0e0]" />
                <Step compact active={false} icon={<Users size={22} />} label="Mentores" />
              </div>
            )}
          </div>

          {/* Full stepper below the arrow */}
          {!collapsed && (
            <div className="flex items-start justify-center gap-[8px] px-[13px] pt-[16px] animate-in fade-in duration-300">
              <Step compact={false} active={false} icon={<ClipboardList size={22} />} label="Info personal" />
              <div className="h-px flex-1 bg-[#e0e0e0] mt-[22px]" />
              <Step compact={false} active icon={<Dumbbell size={22} />} label="Motivaciones" />
              <div className="h-px flex-1 bg-[#e0e0e0] mt-[22px]" />
              <Step compact={false} active={false} icon={<Users size={22} />} label="Mentores" />
            </div>
          )}
        </div>

        <div className="px-[29px] pt-[24px] pb-[24px]">
          <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold leading-[38px] text-[#2c2c2c] text-[32px] mb-[12px]">Define tu camino</p>
          <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[15px] leading-[20px] text-[#6a6a6a] mb-[32px]">
            Cada corredor es diferente. Cuéntanos qué buscas y crearemos un plan que se ajuste a tu objetivo.
          </p>

          <div className="flex flex-col gap-[32px]">
            <Question label="¿Cuál es tu principal objetivo?">
              <ChipGroup options={OBJETIVO} value={objetivo} onChange={setObjetivo} />
            </Question>

            <Question label="¿Qué más te gustaría lograr con nosotros?">
              <ChipGroup options={LOGROS} value={logros} onChange={setLogros} multi />
            </Question>

            <Question label="¿Has corrido antes?">
              <ChipGroup options={EXPERIENCIA} value={experiencia} onChange={setExperiencia} />
            </Question>

            <Question label="¿Cómo describirías tu complexión física?">
              <ChipGroup options={COMPLEXION} value={complexion} onChange={setComplexion} />
            </Question>

            <Question label="¿Qué te motiva más?">
              <ChipGroup options={MOTIVACION} value={motivacion} onChange={setMotivacion} multi />
            </Question>

            <Question label="¿Cuánto tiempo tienes por sesión?">
              <ChipGroup options={TIEMPO} value={tiempo} onChange={setTiempo} />
            </Question>

            <Question label="¿Cómo quieres empezar?">
              <ChipGroup options={FRECUENCIA} value={frecuencia} onChange={setFrecuencia} />
            </Question>

            <Question label="¿Hay algo que debamos saber sobre tu salud? (lesiones, problemas cardíacos, respiratorios, articulares, etc.)">
              <ChipGroup options={SALUD} value={salud} onChange={setSalud} />
            </Question>
          </div>
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
