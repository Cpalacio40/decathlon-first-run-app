export type MotivationsAnswers = {
  objetivo: string | null;
  logros: string | null;
  motivacion: string | null;
  tiempo: string | null;
  frecuencia: string | null;
};

const STORAGE_KEY = "decathlon_motivations";

export function saveMotivations(answers: MotivationsAnswers) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
}

export function loadMotivations(): MotivationsAnswers | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as MotivationsAnswers;
  } catch {
    return null;
  }
}
