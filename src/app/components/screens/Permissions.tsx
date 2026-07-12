import { useState } from "react";
import { ClipboardList, Dumbbell, Users } from "lucide-react";
import svgPaths from "../../../imports/IPhone131423/svg-cg0jrywrs1";
import { PressableButton } from "../PressableButton";
import { LocationPermissionModal } from "./LocationPermissionModal";

function Step({ icon, label, active }: { icon: React.ReactNode; label: string; active: boolean }) {
  return (
    <div className="flex flex-col items-center gap-[8px]">
      <div
        className={`flex items-center justify-center size-[44px] rounded-[10px] ${
          active ? "bg-[#3643ba] text-white ring-2 ring-[#3643ba]/40" : "bg-[#eceef5] text-[#b3b3b3]"
        }`}
      >
        {icon}
      </div>
      <span className={`font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[13px] ${active ? "text-[#2c2c2c]" : "text-[#b3b3b3]"}`}>
        {label}
      </span>
    </div>
  );
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`relative shrink-0 w-[51px] h-[31px] rounded-full transition-colors duration-200 ${
        checked ? "bg-[#3643ba]" : "bg-[#e2e2e6]"
      }`}
    >
      <span
        className={`absolute top-[2px] left-[2px] size-[27px] rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.2)] transition-transform duration-200 ${
          checked ? "translate-x-[20px]" : "translate-x-0"
        }`}
      />
    </button>
  );
}

type PermissionKey = "location" | "motion" | "health" | "notifications";

const PERMISSIONS: { key: PermissionKey; title: string; description: string }[] = [
  { key: "location", title: "Ubicación precisa", description: "Para registrar tu ruta con precisión." },
  { key: "motion", title: "Movimiento y estado físico", description: "Para proporcionar un conteo preciso de tus pasos." },
  { key: "health", title: "Apple Health", description: "Para sincronizarse con otras aplicaciones." },
  { key: "notifications", title: "Notificaciones", description: "Para mantenerte motivado e informado." },
];

export function Permissions({ onContinue, onBack }: { onContinue: () => void; onBack: () => void }) {
  const [permissions, setPermissions] = useState<Record<PermissionKey, boolean>>({
    location: false,
    motion: false,
    health: false,
    notifications: false,
  });
  const [locationModalOpen, setLocationModalOpen] = useState(false);

  const toggle = (key: PermissionKey) => {
    if (key === "location") {
      if (permissions.location) {
        setPermissions((p) => ({ ...p, location: false }));
      } else {
        setLocationModalOpen(true);
      }
      return;
    }
    setPermissions((p) => ({ ...p, [key]: !p[key] }));
  };

  const valid = Object.values(permissions).every(Boolean);

  return (
    <div className="bg-white relative size-full flex flex-col overflow-hidden" data-name="Permisos">
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
        </div>

        <div className="flex items-start justify-center gap-[8px] px-[13px] pt-[16px]">
          <Step active icon={<ClipboardList size={22} />} label="Info personal" />
          <div className="h-px flex-1 bg-[#e0e0e0] mt-[22px]" />
          <Step active={false} icon={<Dumbbell size={22} />} label="Motivaciones" />
          <div className="h-px flex-1 bg-[#e0e0e0] mt-[22px]" />
          <Step active={false} icon={<Users size={22} />} label="Mentores" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-[29px] pt-[24px] pb-[24px] [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
        <p className="font-['Host_Grotesk:ExtraBold',sans-serif] font-extrabold leading-[38px] text-[#2c2c2c] text-[32px] mb-[12px]">Permisos</p>
        <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[15px] leading-[20px] text-[#6a6a6a] mb-[24px]">
          Ayúdanos a ofrecerte la mejor experiencia posible.
        </p>

        <div className="flex flex-col">
          {PERMISSIONS.map((perm, i) => (
            <div key={perm.key}>
              <div className="flex items-center gap-[16px] py-[20px]">
                <div className="flex-1 flex flex-col gap-[4px]">
                  <p className="font-['Host_Grotesk:SemiBold',sans-serif] font-semibold text-[17px] leading-[22px] text-[#2c2c2c]">{perm.title}</p>
                  <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal text-[13px] leading-[17px] text-[#8a8a8a]">{perm.description}</p>
                </div>
                <Toggle checked={permissions[perm.key]} onChange={() => toggle(perm.key)} />
              </div>
              {i < PERMISSIONS.length - 1 && <div className="h-px bg-[#ececec]" />}
            </div>
          ))}
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

      {locationModalOpen && (
        <LocationPermissionModal
          onAllowOnce={() => {
            setPermissions((p) => ({ ...p, location: true }));
            setLocationModalOpen(false);
          }}
          onAllowWhileUsing={() => {
            setPermissions((p) => ({ ...p, location: true }));
            setLocationModalOpen(false);
          }}
          onDeny={() => {
            setPermissions((p) => ({ ...p, location: false }));
            setLocationModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
