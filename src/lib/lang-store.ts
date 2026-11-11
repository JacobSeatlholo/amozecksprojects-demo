"use client";

/**
 * Client-side language store (zustand + localStorage).
 *
 * The first render is always English — identical to the server-rendered
 * HTML — so there are no hydration-mismatch warnings. `LanguageSync`
 * applies the persisted choice right after mount.
 */
import { create } from "zustand";
import { DICT, LANG_META, LANGS, type Dict, type Lang } from "@/lib/i18n";

const STORAGE_KEY = "amozecks-lang";

interface LangState {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useLangStore = create<LangState>((set) => ({
  lang: "en",
  setLang: (lang) => {
    set({ lang });
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* private mode / storage disabled — language still works this session */
    }
  },
}));

/** Reads the persisted language (if any) and applies it. Call once after mount. */
export function rehydrateLang(): void {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && (LANGS as readonly string[]).includes(saved)) {
      useLangStore.setState({ lang: saved as Lang });
    }
  } catch {
    /* storage unavailable — keep English */
  }
}

/** Convenience hook: current language + its dictionary + setter. */
export function useT(): { lang: Lang; setLang: (lang: Lang) => void; t: Dict } {
  const lang = useLangStore((s) => s.lang);
  const setLang = useLangStore((s) => s.setLang);
  return { lang, setLang, t: DICT[lang] };
}

export { DICT, LANG_META, LANGS };
export type { Lang, Dict };
