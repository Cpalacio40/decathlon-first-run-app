import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, ClipboardCheck, Footprints, TrendingUp, Heart, ShieldCheck, NotebookPen, Watch, Plus } from "lucide-react";
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

function SummaryRow({ label, value, isLast }: { label: string; value: string; isLast?: boolean }) {
  return (
    <div className={`flex items-center gap-[12px] px-[16px] py-[16px] ${!isLast ? "border-b border-[#ececec]" : ""}`}>
      <div className="flex-1 min-w-0">
        <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[11px] tracking-[0.04em] uppercase text-[#3643ba] mb-[4px]">{label}</p>
        <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[17px] leading-[22px] text-[#2c2c2c]">{value}</p>
      </div>
      <div className="flex items-center justify-center size-[22px] rounded-full bg-[#eceef9] text-[#3643ba] shrink-0">
        <Check size={13} strokeWidth={3} />
      </div>
    </div>
  );
}

function GoalItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-[14px] rounded-[12px] border border-[#ececec] p-[16px]">
      <div className="flex items-center justify-center size-[40px] rounded-[10px] bg-[#3643ba] text-white shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[15px] leading-[19px] text-[#2c2c2c] mb-[4px]">{title}</p>
        <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[13px] leading-[17px] text-[#8a8a8a]">{description}</p>
      </div>
    </div>
  );
}

const GOALS = [
  {
    icon: <ClipboardCheck size={20} />,
    title: "Crea el hábito",
    description: "Completa tus sesiones para obtener tu puntuación de racha semanal y consejos personalizados para mejorar tus hábitos.",
  },
  {
    icon: <Footprints size={20} />,
    title: "Corre a tu ritmo",
    description: "Mantén un ritmo cómodo y enfócate en disfrutar cada sesión. Cada persona tiene su propio proceso.",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Mejora poco a poco",
    description: "Cada entrenamiento fortalece tu resistencia y te prepara para el siguiente. Los pequeños avances hacen la diferencia.",
  },
  {
    icon: <Heart size={20} />,
    title: "Cuida tu recuperación",
    description: "Descansa, hidrátate y escucha a tu cuerpo después de correr. No te preocupes si algunos días cuestan más que otros.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Confía en el proceso",
    description: "No importa qué tan pequeño parezca, cada entrenamiento te acerca a una versión más fuerte de ti.",
  },
];

export function PlanReady({ onContinue, onBack }: { onContinue: () => void; onBack: () => void }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="bg-white relative size-full flex flex-col overflow-hidden" data-name="Plan listo">
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
                <Step compact variant="active" icon={<LandPlotIcon size={22} />} label="Motivaciones" />
                <div className="h-px w-[28px] bg-[#e0e0e0]" />
                <Step compact variant="upcoming" icon={<IdCardLanyardIcon size={22} />} label="Mentores" />
              </div>
            )}
          </div>

          {/* Full stepper below the arrow */}
          {!collapsed && (
            <div className="flex items-start justify-center gap-[8px] px-[13px] pt-[16px] animate-in fade-in duration-300">
              <Step compact={false} variant="completed" icon={<NotepadTextIcon size={22} />} label="Info personal" />
              <div className="h-px flex-1 bg-[#3643ba] mt-[22px]" />
              <Step compact={false} variant="active" icon={<LandPlotIcon size={22} />} label="Motivaciones" />
              <div className="h-px flex-1 bg-[#e0e0e0] mt-[22px]" />
              <Step compact={false} variant="upcoming" icon={<IdCardLanyardIcon size={22} />} label="Mentores" />
            </div>
          )}
        </div>

        <div className="px-[29px] pt-[24px] pb-[32px]">
          <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold leading-[38px] text-[#2c2c2c] text-[32px] text-center mb-[12px]">
            Tu plan Personalizado esta listo
          </p>
          <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[14px] leading-[19px] text-[#8a8a8a] text-center mb-[24px]">
            Puedes editarlo en cualquier momento desde tu perfil, o regresar para ajustarlos ahora.
          </p>

          {/* Plan pill */}
          <div className="flex items-center justify-center gap-[8px] rounded-[8px] bg-[#eceef9] py-[14px] px-[16px] mb-[16px]">
            <NotebookPen size={18} className="text-[#3643ba] shrink-0" />
            <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[15px] text-[#3643ba]">Plan de Camila Palacio</span>
          </div>

          {/* Summary card */}
          <div className="rounded-[12px] border border-[#ececec] mb-[28px]">
            <SummaryRow label="Tu objetivo es" value="Crear Habito" />
            <SummaryRow label="Quieres lograr" value="Resistencia física" />
            <SummaryRow label="Te motiva" value="La compañía" />
            <SummaryRow label="Sesiones" value="15 minutos / 2 veces por semana" isLast />
          </div>

          {/* Section pill */}
          <div className="rounded-[8px] bg-[#eceef9] py-[12px] px-[16px] mb-[16px]">
            <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[15px] text-[#3643ba] text-center">Cómo alcanzar tus objetivos</p>
          </div>

          <div className="flex flex-col gap-[12px] mb-[28px]">
            {GOALS.map((goal) => (
              <GoalItem key={goal.title} icon={goal.icon} title={goal.title} description={goal.description} />
            ))}
          </div>

          {/* Connect watch */}
          <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[17px] leading-[22px] text-[#2c2c2c] mb-[8px]">
            Conectar reloj (opcional)
          </p>
          <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[13px] leading-[17px] text-[#8a8a8a] mb-[16px]">
            Sincroniza fácilmente todas las actividades registradas con tu reloj con Decathlon First run.
          </p>
          <PressableButton className="flex items-center justify-center gap-[8px] rounded-[6px] border border-[#d9d9d9] h-[44px] px-[20px]">
            <Watch size={16} className="text-[#2c2c2c]" />
            <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] text-[#2c2c2c]">Agregar reloj deportivo</span>
            <Plus size={16} className="text-[#2c2c2c]" />
          </PressableButton>
        </div>
      </div>

      {/* Fixed footer */}
      <div className="shrink-0 bg-white px-[28px] pt-[17px] pb-[48px] border-t border-[#f0f0f0]">
        <PressableButton
          onClick={onContinue}
          className="w-full h-[48px] rounded-[6px] flex items-center justify-center bg-[#3643ba]"
        >
          <span className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[14px] text-white">Continuar</span>
        </PressableButton>
      </div>
    </div>
  );
}
