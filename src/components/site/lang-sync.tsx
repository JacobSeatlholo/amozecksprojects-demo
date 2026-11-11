"use client";

import { useEffect } from "react";
import { useLangStore, rehydrateLang, DICT, LANG_META } from "@/lib/lang-store";

/**
 * Runs the (client-only) side effects of the language system:
 * - applies the persisted language choice right after mount (hydration-safe)
 * - keeps <html lang> in sync (en-ZA / zu-ZA / af-ZA)
 * - keeps the document title in sync with the active language
 * - renders the accessible skip link in the active language
 */
export default function LanguageSync() {
  const lang = useLangStore((s) => s.lang);

  useEffect(() => {
    rehydrateLang();
  }, []);

  useEffect(() => {
    document.documentElement.lang = LANG_META[lang].htmlLang;
    document.title = DICT[lang].meta.title;
  }, [lang]);

  return (
    <a href="#main-content" className="skip-link">
      {DICT[lang].skip.toContent}
    </a>
  );
}
