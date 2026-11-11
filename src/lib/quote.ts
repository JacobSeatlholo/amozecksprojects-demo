/**
 * Instant Estimate engine for the WhatsApp quote calculator.
 *
 * IMPORTANT: the rates below are INDICATIVE market ranges for planning
 * purposes only — they are clearly labelled as such in the UI, and the
 * WhatsApp message always asks for a firm quote. To tune them for the
 * business, edit the numbers in RATE_TABLE only.
 */

import { whatsappUrl } from "@/lib/site-data";

export type ServiceKey =
  | "building"
  | "formwork"
  | "renovations"
  | "plumbing"
  | "civil"
  | "development";

export interface ServiceRate {
  key: ServiceKey;
  label: string;
  /** What the "size" input means for this service */
  sizeLabel: string;
  sizeUnit: string;
  /** Singular form for "per …" price lines, e.g. "per room" */
  unitSingular?: string;
  presets: number[];
  minSize: number;
  /** Indicative range per unit. Omitted => custom quote required. */
  rate?: { low: number; high: number };
  note: string;
}

export const RATE_TABLE: ServiceRate[] = [
  {
    key: "building",
    label: "Building",
    sizeLabel: "Floor area to build",
    sizeUnit: "m²",
    presets: [50, 80, 120, 200],
    minSize: 30,
    rate: { low: 8500, high: 13500 },
    note: "Indicative market range for new residential/commercial building work per m².",
  },
  {
    key: "renovations",
    label: "Renovations",
    sizeLabel: "Area being renovated",
    sizeUnit: "m²",
    presets: [10, 20, 40, 80],
    minSize: 5,
    rate: { low: 5500, high: 9500 },
    note: "Tiling, painting, remodelling and general renovation work per m².",
  },
  {
    key: "formwork",
    label: "Formwork",
    sizeLabel: "Formwork contact area",
    sizeUnit: "m²",
    presets: [20, 50, 100, 200],
    minSize: 10,
    rate: { low: 250, high: 600 },
    note: "Supply-and-erect formwork per m² of concrete contact area.",
  },
  {
    key: "plumbing",
    label: "Plumbing",
    sizeLabel: "Rooms / major installations",
    sizeUnit: "rooms",
    unitSingular: "room",
    presets: [1, 2, 3, 4],
    minSize: 1,
    rate: { low: 6500, high: 15000 },
    note: "Per bathroom/kitchen installation — repairs and geyser work are usually less.",
  },
  {
    key: "civil",
    label: "Civil Works",
    sizeLabel: "Works area",
    sizeUnit: "m²",
    presets: [100, 250, 500, 1000],
    minSize: 50,
    rate: { low: 250, high: 550 },
    note: "Civil works scope varies widely — engineer-driven projects are quoted per design.",
  },
  {
    key: "development",
    label: "Property Developers",
    sizeLabel: "Units / extent of development",
    sizeUnit: "units",
    unitSingular: "unit",
    presets: [1, 4, 8, 12],
    minSize: 1,
    note: "Developer services are scoped per project — we’ll put a tailored proposal together with you.",
  },
];

export const FINISH_OPTIONS = [
  { value: "standard", label: "Standard finish", multiplier: [1, 1] as const },
  { value: "premium", label: "Premium finish", multiplier: [1.2, 1.35] as const },
] as const;

export const TIMELINE_OPTIONS = [
  { value: "flexible", label: "Flexible", multiplier: [0.95, 1] as const },
  { value: "standard", label: "Standard", multiplier: [1, 1] as const },
  { value: "urgent", label: "Urgent", multiplier: [1.1, 1.2] as const },
] as const;

export const AREA_OPTIONS = [
  "Ballito — KwaZulu-Natal",
  "Durban — KwaZulu-Natal",
  "Kempton Park — Gauteng",
  "Johannesburg — Gauteng",
  "Elsewhere in South Africa",
] as const;

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
  finish: (typeof FINISH_OPTIONS)[number]["value"],
  timeline: (typeof TIMELINE_OPTIONS)[number]["value"],
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
  finish: string;
  timeline: string;
  area: string;
  name: string;
  cell: string;
}

export function buildEstimateMessage(fields: CalculatorFields): string {
  const def = serviceByKey(fields.service);
  const qty = Math.max(def.minSize, Math.max(0, fields.size || 0));
  const est = estimate(fields.service, qty, fields.finish as never, fields.timeline as never);
  const finishLabel = FINISH_OPTIONS.find((o) => o.value === fields.finish)?.label ?? "Standard finish";
  const timelineLabel = TIMELINE_OPTIONS.find((o) => o.value === fields.timeline)?.label ?? "Standard";

  const lines = [
    "Hi Amozecks Projects! I used the estimate calculator on your website and would like a firm quote:",
    "",
    `• Service: ${def.label}`,
    `• ${def.sizeLabel}: ${qty} ${def.sizeUnit}`,
    `• Finish: ${finishLabel}`,
    `• Timeline: ${timelineLabel}`,
    `• Area: ${fields.area}`,
  ];
  if (est.hasRate) {
    lines.push(`• Indicative estimate: ${formatRand(est.low)} – ${formatRand(est.high)}`);
  }
  if (fields.name.trim()) lines.push(`• Name: ${fields.name.trim()}`);
  if (fields.cell.trim()) lines.push(`• Cell: ${fields.cell.trim()}`);
  lines.push("", "Please contact me to arrange a site assessment. Thank you!");
  return lines.join("\n");
}

export function estimateWhatsAppUrl(fields: CalculatorFields): string {
  return whatsappUrl(buildEstimateMessage(fields));
}
