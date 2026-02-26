import { en } from "./en";
import { es } from "./es";

const translations = { en, es };

export type Lang = keyof typeof translations;

export function useTranslations(lang: Lang) {
  return translations[lang];
}
