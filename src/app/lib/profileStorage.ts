export type ProfileInfo = {
  nombre: string;
  apellido: string;
};

const STORAGE_KEY = "decathlon_profile";

export function saveProfile(profile: ProfileInfo) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

export function loadProfile(): ProfileInfo | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as ProfileInfo;
  } catch {
    return null;
  }
}
