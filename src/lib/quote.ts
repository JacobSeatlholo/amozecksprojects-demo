/**
 * Instant Estimate engine for the WhatsApp quote calculator.
 *
 * IMPORTANT: the rates below are INDICATIVE market ranges for planning
 * purposes only — they are clearly labelled as such in the UI, and the
 * WhatsApp message always asks for a firm quote. To tune them for the
 * business, edit the numbers in RATE_TABLE only.
 *
 * Numbers live here; every display word lives in src/lib/i18n.ts.
 */

import { whatsappUrl } from "@/lib/site-data";
import { DICT, type Lang } from "@/lib/i18n";

export type ServiceKey =
  | "building"
  | "formwork"
  | "renovations"
  | "plumbing"
  | "civil"
  | "development";

export interface ServiceRate {
  key: ServiceKey;
  presets: number[];
  minSize: number;
  /** Indicative range per unit. Omitted => custom quote required. */
  rate?: { low: number; high: number };
}

export const RATE_TABLE: ServiceRate[] = [
  {
    key: "building",
    presets: [50, 80, 120, 200],
    minSize: 30,
    rate: { low: 8500, high: 13500 },
  },
  {
    key: "renovations",
    presets: [10, 20, 40, 80],
    minSize: 5,
    rate: { low: 5500, high: 9500 },
  },
  {
    key: "formwork",
    presets: [20, 50, 100, 200],
    minSize: 10,
    rate: { low: 250, high: 600 },
  },
  {
    key: "plumbing",
    presets: [1, 2, 3, 4],
    minSize: 1,
    rate: { low: 6500, high: 15000 },
  },
  {
    key: "civil",
    presets: [100, 250, 500, 1000],
    minSize: 50,
    rate: { low: 250, high: 550 },
  },
  {
    key: "development",
    presets: [1, 4, 8, 12],
    minSize: 1,
  },
];

export type FinishValue = "standard" | "premium";
export type TimelineValue = "flexible" | "standard" | "urgent";

/** Multipliers only — labels come from the active dictionary. */
export const FINISH_OPTIONS: { value: FinishValue; multiplier: readonly [number, number] }[] =
  [
    { value: "standard", multiplier: [1, 1] },
    { value: "premium", multiplier: [1.2, 1.35] },
  ];

export const TIMELINE_OPTIONS: {
  value: TimelineValue;
  multiplier: readonly [number, number];
}[] = [
  { value: "flexible", multiplier: [0.95, 1] },
  { value: "standard", multiplier: [1, 1] },
  { value: "urgent", multiplier: [1.1, 1.2] },
];

export function serviceByKey(key: ServiceKey): ServiceRate {
  return RATE_TABLE.find((s) => s.key === key) ?? RATE_TABLE[0];
}

export interface EstimateResult {
  low: number;
  high: number;
  hasRate: boolean;
}

export function estimate(
  service: ServiceKey,
  size: number,
  finish: FinishValue,
  timeline: TimelineValue,
): EstimateResult {
  const def = serviceByKey(service);
  if (!def.rate) return { low: 0, high: 0, hasRate: false };
  const qty = Math.max(def.minSize, Math.max(0, size || 0));
  const f = FINISH_OPTIONS.find((o) => o.value === finish)!.multiplier;
  const t = TIMELINE_OPTIONS.find((o) => o.value === timeline)!.multiplier;
  const round = (n: number) => Math.round(n / 1000) * 1000;
  return {
    low: round(def.rate.low * qty * f[0] * t[0]),
    high: round(def.rate.high * qty * f[1] * t[1]),
    hasRate: true,
  };
}

const zar = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
  maximumFractionDigits: 0,
});

export function formatRand(n: number): string {
  return zar.format(n).replace(/\u00a0/g, " ");
}

export interface CalculatorFields {
  service: ServiceKey;
  size: number;
  finish: FinishValue;
  timeline: TimelineValue;
  /** Already-translated project area label (from the active dictionary). */
  area: string;
  name: string;
  cell: string;
}

export function buildEstimateMessage(fields: CalculatorFields, lang: Lang = "en"): string {
  const dict = DICT[lang];
  const wt = dict.whatsapp;
  const sm = dict.servicesMeta[fields.service];
  const def = serviceByKey(fields.service);
  const qty = Math.max(def.minSize, Math.max(0, fields.size || 0));
  const est = estimate(fields.service, qty, fields.finish, fields.timeline);
  const finishLabel = dict.calc.finish[fields.finish];
  const timelineLabel = dict.calc.timeline[fields.timeline];

  const lines = [
    wt.estimateIntro,
    "",
    `• ${wt.fieldService}: ${sm.label}`,
    `• ${sm.sizeLabel}: ${qty} ${sm.sizeUnit}`,
    `• ${wt.fieldFinish}: ${finishLabel}`,
    `• ${wt.fieldTimeline}: ${timelineLabel}`,
    `• ${wt.fieldArea}: ${fields.area}`,
  ];
  if (est.hasRate) {
    lines.push(`• ${wt.fieldEstimate}: ${formatRand(est.low)} – ${formatRand(est.high)}`);
  }
  if (fields.name.trim()) lines.push(`• ${wt.fieldName}: ${fields.name.trim()}`);
  if (fields.cell.trim()) lines.push(`• ${wt.fieldCell}: ${fields.cell.trim()}`);
  lines.push("", wt.estimateOutro);
  return lines.join("\n");
}

export function estimateWhatsAppUrl(fields: CalculatorFields, lang: Lang = "en"): string {
  return whatsappUrl(buildEstimateMessage(fields, lang));
}
