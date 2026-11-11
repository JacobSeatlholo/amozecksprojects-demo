"use client";

import { create } from "zustand";
import type { ServiceKey } from "@/lib/quote";

interface QuoteState {
  /** Service preselected from a service card (“Get an estimate”) */
  service: ServiceKey | null;
  setService: (s: ServiceKey) => void;
  clearService: () => void;
}

export const useQuoteStore = create<QuoteState>((set) => ({
  service: null,
  setService: (service) => set({ service }),
  clearService: () => set({ service: null }),
}));

export function scrollToCalculator() {
  document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
}
