"use client";

import { ArrowRight } from "lucide-react";
import { useQuoteStore, scrollToCalculator } from "@/lib/quote-store";
import type { ServiceKey } from "@/lib/quote";
import { useT } from "@/lib/lang-store";

/** Button on each service card: preselects that service in the calculator and scrolls to it. */
export default function ServiceCta({ service, label }: { service: ServiceKey; label: string }) {
  const setService = useQuoteStore((s) => s.setService);
  const { t } = useT();

  return (
    <button
      type="button"
      onClick={() => {
        setService(service);
        scrollToCalculator();
      }}
      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-600"
      aria-label={`${t.services.estimateCtaAria} ${label} ${t.services.estimateCtaAriaSuffix}`}
    >
      {t.services.estimateCta}
      <ArrowRight className="size-4" aria-hidden />
    </button>
  );
}
