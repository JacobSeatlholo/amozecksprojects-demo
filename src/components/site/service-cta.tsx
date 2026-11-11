"use client";

import { ArrowRight } from "lucide-react";
import { useQuoteStore, scrollToCalculator } from "@/lib/quote-store";
import type { ServiceKey } from "@/lib/quote";

/** Button on each service card: preselects that service in the calculator and scrolls to it. */
export default function ServiceCta({ service, label }: { service: ServiceKey; label: string }) {
  const setService = useQuoteStore((s) => s.setService);

  return (
    <button
      type="button"
      onClick={() => {
        setService(service);
        scrollToCalculator();
      }}
      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-600"
      aria-label={`Get an instant estimate for ${label} — jumps to the quote calculator`}
    >
      Get an estimate for this service
      <ArrowRight className="size-4" aria-hidden />
    </button>
  );
}
