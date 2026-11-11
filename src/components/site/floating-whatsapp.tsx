"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY, whatsappUrl } from "@/lib/site-data";
import { useT } from "@/lib/lang-store";

/** Persistent one-tap WhatsApp shortcut — the fastest way to reach the business. */
export default function FloatingWhatsApp() {
  const { t } = useT();
  return (
    <a
      href={whatsappUrl(t.whatsapp.greeting)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.floating.aria}
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-900/40 transition-transform hover:scale-105 hover:bg-brand-700 motion-reduce:transition-none"
    >
      <MessageCircle className="size-7" aria-hidden />
    </a>
  );
}
