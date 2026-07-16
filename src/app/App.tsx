import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Splash } from "./components/screens/Splash";
import { Walkthrough } from "./components/screens/Walkthrough";
import { CreateAccount } from "./components/screens/CreateAccount";
import { Subscription } from "./components/screens/Subscription";
import { TicketGuide } from "./components/screens/TicketGuide";
import { CameraPermission } from "./components/screens/CameraPermission";
import { PaymentSheet } from "./components/screens/PaymentSheet";
import { AccessConfirmed } from "./components/screens/AccessConfirmed";
import { ManualCode } from "./components/screens/ManualCode";
import { ProfileForm } from "./components/screens/ProfileForm";
import { MotivationsForm } from "./components/screens/MotivationsForm";
import { Permissions } from "./components/screens/Permissions";
import { PlanLoading } from "./components/screens/PlanLoading";
import { PlanReady } from "./components/screens/PlanReady";
import { Mentors } from "./components/screens/Mentors";
import { MentorDetail } from "./components/screens/MentorDetail";
import { MentorSchedule } from "./components/screens/MentorSchedule";
import { MentorScheduled } from "./components/screens/MentorScheduled";
import { Home } from "./components/screens/Home";
import { getMentor, type MentorId } from "./lib/mentors";

type Screen =
  | "splash"
  | "walkthrough"
  | "account"
  | "subscription"
  | "ticket"
  | "manual"
  | "camera"
  | "scanning"
  | "payment"
  | "confirmed"
  | "profile"
  | "motivations"
  | "planLoading"
  | "planReady"
  | "mentors"
  | "mentorDetail"
  | "mentorSchedule"
  | "mentorScheduled"
  | "home"
  | "permissions";

const ORDER: Screen[] = [
  "splash",
  "walkthrough",
  "account",
  "subscription",
  "payment",
  "confirmed",
  "profile",
  "permissions",
  "motivations",
  "planLoading",
  "planReady",
  "mentors",
  "mentorDetail",
  "mentorSchedule",
  "mentorScheduled",
  "home",
  "ticket",
  "manual",
  "camera",
];

export default function App() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [dir, setDir] = useState(1);
  const [trial, setTrial] = useState(false);
  const [debugOpen, setDebugOpen] = useState(true);
  const [scheduledDate, setScheduledDate] = useState(new Date());
  const [scheduledTime, setScheduledTime] = useState("11:00");
  const [selectedMentorId, setSelectedMentorId] = useState<MentorId>("laura");

  const go = (next: Screen) => {
    const a = ORDER.indexOf(screen);
    const b = ORDER.indexOf(next);
    setDir(b >= a ? 1 : -1);
    setScreen(next);
  };

  const render = () => {
    switch (screen) {
      case "splash":
        return <Splash onDone={() => go("walkthrough")} />;
      case "walkthrough":
        return <Walkthrough onRegister={() => go("account")} onLogin={() => go("account")} />;
      case "account":
        return <CreateAccount onNext={() => go("subscription")} />;
      case "subscription":
        return (
          <Subscription
            onNext={() => {
              setTrial(false);
              go("payment");
            }}
            onBack={() => go("walkthrough")}
            onRedeem={() => go("ticket")}
          />
        );
      case "payment":
        return <PaymentSheet trial={trial} onConfirm={() => go("confirmed")} onCancel={() => go("subscription")} />;
      case "confirmed":
        return <AccessConfirmed trial={trial} onStart={() => go("profile")} />;
      case "profile":
        return <ProfileForm onContinue={() => go("permissions")} onBack={() => go("confirmed")} />;
      case "permissions":
        return <Permissions onContinue={() => go("motivations")} onBack={() => go("profile")} />;
      case "motivations":
        return <MotivationsForm onContinue={() => go("planLoading")} onBack={() => go("permissions")} />;
      case "planLoading":
        return <PlanLoading onDone={() => go("planReady")} />;
      case "planReady":
        return <PlanReady onContinue={() => go("mentors")} onBack={() => go("motivations")} />;
      case "mentors":
        return (
          <Mentors
            onBack={() => go("planReady")}
            onOpenMentorDetail={(mentorId) => {
              setSelectedMentorId(mentorId);
              go("mentorDetail");
            }}
          />
        );
      case "mentorDetail":
        return <MentorDetail mentorId={selectedMentorId} onBack={() => go("mentors")} onSchedule={() => go("mentorSchedule")} />;
      case "mentorSchedule":
        return (
          <MentorSchedule
            mentorName={getMentor(selectedMentorId).name}
            onBack={() => go("mentorDetail")}
            onContinue={(date, time) => {
              setScheduledDate(date);
              setScheduledTime(time);
              go("mentorScheduled");
            }}
          />
        );
      case "mentorScheduled":
        return (
          <MentorScheduled
            mentorName={getMentor(selectedMentorId).name}
            mentorRole={getMentor(selectedMentorId).role}
            date={scheduledDate}
            time={scheduledTime}
            onBack={() => go("mentorSchedule")}
            onAccept={() => go("home")}
          />
        );
      case "home":
        return <Home mentorId={selectedMentorId} date={scheduledDate} time={scheduledTime} />;
      case "ticket":
        return <TicketGuide onScan={() => go("camera")} onBack={() => go("subscription")} onManual={() => go("manual")} />;
      case "manual":
        return (
          <ManualCode
            onValidate={() => {
              setTrial(true);
              go("payment");
            }}
            onBack={() => go("ticket")}
          />
        );
      case "camera":
        return (
          <CameraPermission
            onAllow={() => {
              setDir(1);
              setScreen("scanning");
            }}
            onDeny={() => go("ticket")}
            onBack={() => go("ticket")}
          />
        );
      case "scanning":
        return (
          <CameraPermission
            scanning
            onComplete={() => {
              setTrial(true);
              go("payment");
            }}
            onAllow={() => {}}
            onDeny={() => go("ticket")}
            onBack={() => go("camera")}
          />
        );
    }
  };

  const jump = (next: Screen) => {
    if (next === "payment" || next === "confirmed") setTrial(false);
    setDir(1);
    setScreen(next);
  };

  const DEBUG_SCREENS: { id: Screen; label: string }[] = [
    { id: "splash", label: "Splash" },
    { id: "walkthrough", label: "Walkthrough" },
    { id: "account", label: "Crear cuenta" },
    { id: "subscription", label: "Suscripción" },
    { id: "payment", label: "Pago" },
    { id: "confirmed", label: "Bienvenido" },
    { id: "profile", label: "Formulario" },
    { id: "permissions", label: "Permisos" },
    { id: "motivations", label: "Motivaciones" },
    { id: "planLoading", label: "Creando plan" },
    { id: "planReady", label: "Plan listo" },
    { id: "mentors", label: "Mentores" },
    { id: "mentorDetail", label: "Detalle mentor" },
    { id: "mentorSchedule", label: "Agendar mentoría" },
    { id: "mentorScheduled", label: "Mentoría agendada" },
    { id: "home", label: "Inicio" },
    { id: "ticket", label: "Ticket" },
    { id: "manual", label: "Código manual" },
    { id: "camera", label: "Cámara" },
    { id: "scanning", label: "Escaneando" },
  ];

  return (
    <div className="size-full min-h-screen flex flex-col items-center justify-center bg-[#e9eaf2] p-[24px] gap-[16px]">
      <div className="relative h-[844px] w-[930px] max-w-[calc(100vw-32px)] max-h-[calc(100vh-120px)] overflow-hidden rounded-[44px] bg-white shadow-[0_30px_80px_rgba(54,67,186,0.25)] ring-1 ring-black/5">
        <div className="relative size-full overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="popLayout" initial={false} custom={dir}>
            <motion.div
              key={screen}
              custom={dir}
              initial={{ x: dir * 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: dir * -60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="absolute top-0 h-full w-[390px]"
            >
              {render()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Debug navigation — quick access to every screen */}
      <div className="w-full max-w-[930px] rounded-[16px] bg-white shadow-[0_10px_30px_rgba(54,67,186,0.12)] ring-1 ring-black/5 overflow-hidden">
        <button
          onClick={() => setDebugOpen((o) => !o)}
          className="w-full flex items-center justify-between px-[18px] py-[12px] text-left"
        >
          <span className="text-[13px] text-[#2c2c2c]">Navegación de pruebas</span>
          <ChevronDown size={18} className={`text-[#3643ba] transition-transform ${debugOpen ? "rotate-180" : ""}`} />
        </button>
        <AnimatePresence initial={false}>
          {debugOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap items-center gap-[8px] px-[18px] pb-[16px] pt-[2px]">
                {DEBUG_SCREENS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => jump(s.id)}
                    className={`rounded-full px-[14px] py-[6px] text-[13px] transition-colors ${
                      screen === s.id ? "bg-[#3643ba] text-white" : "bg-white text-[#3643ba] ring-1 ring-[#3643ba]/30 hover:bg-[#3643ba]/10"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
