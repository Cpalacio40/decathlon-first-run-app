import type { ReactNode } from "react";
import { LineChart, Target, Award, Flag, Flame, Trophy, Users, Users2, Shuffle, Footprints, Leaf, Sparkles } from "lucide-react";
import imgLauraCard from "../../imports/card-product 1.png";
import imgMarcoCard from "../../imports/card-product 2.png";
import imgAnnaCard from "../../imports/card-product 3.png";
import imgLeoCard from "../../imports/card-product 4.png";
import imgLauraHero from "../../imports/Foto laura.png";
import imgMarcoHero from "../../imports/Foto Marco.png";
import imgAnnaHero from "../../imports/Foto Anna.png";
import imgLeoHero from "../../imports/Foto David.png";

export type MentorId = "laura" | "marco" | "anna" | "leo";

export type Mentor = {
  id: MentorId;
  name: string;
  role: string;
  subtitle: string;
  cardImage: string;
  cardFocus: string;
  tags: { icon: ReactNode; label: string }[];
  heroImage: string;
  heroFocus: string;
  about: string;
  trainingStyle: string;
  important: string;
  song: { title: string; artist: string; blurb: string };
  groupRuns: { title: string; subtitle: string }[];
};

export const MENTORS: Mentor[] = [
  {
    id: "laura",
    name: "Laura Luz Villalba",
    role: "Mentora",
    subtitle: "Planes Progresivos y medibles",
    cardImage: imgLauraCard,
    cardFocus: "20% 15%",
    tags: [
      { icon: <LineChart size={13} />, label: "Estructura" },
      { icon: <Target size={13} />, label: "Técnica" },
      { icon: <Award size={13} />, label: "Resultados" },
    ],
    heroImage: imgLauraHero,
    heroFocus: "50% 20%",
    about:
      "Entreno a personas que quieren resultados reales, no motivación vacía. Cada sesión contigo tiene un propósito claro, te diré exactamente qué hacemos, por qué y qué vas a notar al terminar.",
    trainingStyle: "Estructurado y directo.",
    important: "Que sepas exactamente cómo vas. No hay progreso invisible si avanzas, lo vamos a ver juntos.",
    song: { title: "Square Hammer", artist: "Ghost", blurb: "Lo doy todo en esos 4:00 minutos" },
    groupRuns: [
      { title: "Martes y jueves", subtitle: "17:00h · Parque del Retiro, Madrid" },
      { title: "Sábados", subtitle: "9:00h · Parque del Retiro, Madrid" },
    ],
  },
  {
    id: "marco",
    name: "Marco Antonio Vidal",
    role: "Mentor",
    subtitle: "Superar tus límites mentales",
    cardImage: imgMarcoCard,
    cardFocus: "25% 10%",
    tags: [
      { icon: <Flag size={13} />, label: "Retos" },
      { icon: <Flame size={13} />, label: "Intensidad" },
      { icon: <Trophy size={13} />, label: "Gamificación" },
    ],
    heroImage: imgMarcoHero,
    heroFocus: "50% 20%",
    about:
      "El problema nunca es el cuerpo. Siempre es la mente. Llevo años entrenando a personas que creían que no podían y demostrándoles que sí. Conmigo cada kilómetro tiene un reto pequeño que ganar.",
    trainingStyle: "Retador y progresivo",
    important: "Que cada semana te sorprendas de lo que puedes hacer. Las marcas no mienten y las tuyas van a subir.",
    song: { title: "Eye of the Tiger", artist: "Survivor", blurb: "Clásico que nunca falla para entrar en modo reto" },
    groupRuns: [
      { title: "Miércoles y Viernes", subtitle: "9:00h · Pista de atletismo de La Ermita, Madrid" },
      { title: "Domingos", subtitle: "11:00h · Pista de atletismo de La Ermita, Madrid" },
    ],
  },
  {
    id: "anna",
    name: "Anna Sofía Palomares",
    role: "Mentora",
    subtitle: "Especialista en dinámicas de grupo",
    cardImage: imgAnnaCard,
    cardFocus: "22% 15%",
    tags: [
      { icon: <Users size={13} />, label: "Social" },
      { icon: <Users2 size={13} />, label: "Grupal" },
      { icon: <Shuffle size={13} />, label: "Dinámico" },
    ],
    heroImage: imgAnnaHero,
    heroFocus: "50% 20%",
    about:
      "Correr sola tiene sus momentos, pero correr acompañada es diferente. El tiempo pasa volando y llegas más lejos de lo que creías. Mis sesiones son para personas que necesitan compañía para arrancar.",
    trainingStyle: "Energético y colectivo",
    important: "Que nadie se quede atrás. En mis salidas no hay ritmo mínimo. Hay personas con ganas de moverse y eso es suficiente.",
    song: { title: "Good as Hell", artist: "Lizzo", blurb: "Porque arrancar bien empieza por sentirte bien" },
    groupRuns: [
      { title: "Lunes y viernes", subtitle: "8:00h · Paseo del Prado, Madrid" },
      { title: "Sábados", subtitle: "14:00h · Paseo del Prado, Madrid" },
    ],
  },
  {
    id: "leo",
    name: "Leo David Arroyo",
    role: "Mentor",
    subtitle: "Especialista en running consciente",
    cardImage: imgLeoCard,
    cardFocus: "25% 10%",
    tags: [
      { icon: <Footprints size={13} />, label: "Desconexión" },
      { icon: <Leaf size={13} />, label: "Bienestar" },
      { icon: <Sparkles size={13} />, label: "Mindfulness" },
    ],
    heroImage: imgLeoHero,
    heroFocus: "50% 20%",
    about:
      "Correr no es solo mover las piernas. Es la única hora del día donde no tienes que responder mensajes ni tomar decisiones. Yo te ayudo a que ese rato sea tuyo de verdad.",
    trainingStyle: "Pausado e intuitivo",
    important: "Que acabes cada salida sintiéndote mejor de lo que llegaste. No se trata de ir rápido. Se trata de volver.",
    song: { title: "Breathe", artist: "Télépopmusik", blurb: "Para los días en que correr es la pausa que necesitas" },
    groupRuns: [
      { title: "Martes y Jueves", subtitle: "17:00h · Bosque de El Pardo, Madrid" },
      { title: "Domingo", subtitle: "9:00h · Bosque de El Pardo, Madrid" },
    ],
  },
];

export function getMentor(id: MentorId): Mentor {
  return MENTORS.find((m) => m.id === id) ?? MENTORS[0];
}
