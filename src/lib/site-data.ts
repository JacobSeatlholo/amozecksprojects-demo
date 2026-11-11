/**
 * REAL facts of https://www.amozecksprojects.co.za/ (scraped verbatim).
 * Facts only — every display string lives in src/lib/i18n.ts (EN/ZU/AF).
 */

export const COMPANY = {
  name: "Amozecks Projects",
  phoneDisplay: "082 291 6151",
  phoneTel: "+27822916151",
  whatsappNumber: "27822916151",
  email: "Info@amozecksprojects.co.za",
  facebook: "https://web.facebook.com/amozecksprojects",
  addresses: [
    {
      label: "KwaZulu-Natal",
      text: "Hills Avenue, Ballito, Durban",
    },
    {
      label: "Gauteng",
      text: "247 Tugela Street, Kempton Park, Johannesburg",
    },
  ],
  copyright: "Copyright © 2021 Amozecks Projects. All Rights Reserved.",
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Nav anchors in display order; labels come from the active dictionary. */
export const NAV_LINKS = [
  { href: "#about", key: "about" },
  { href: "#services", key: "services" },
  { href: "#projects", key: "projects" },
  { href: "#careers", key: "careers" },
  { href: "#contact", key: "contact" },
] as const;

export type NavKey = (typeof NAV_LINKS)[number]["key"];

export interface ServiceItem {
  id: string;
  imageKey?: "building" | "formwork" | "renovations";
  icon?: "hammer" | "layers" | "paint" | "wrench" | "hard-hat" | "building";
}

export const SERVICES: ServiceItem[] = [
  { id: "building", imageKey: "building" },
  { id: "formwork", imageKey: "formwork" },
  { id: "renovations", imageKey: "renovations" },
  { id: "plumbing", icon: "wrench" },
  { id: "civil", icon: "hard-hat" },
  { id: "development", icon: "building" },
];

export const AFFILIATIONS = [
  {
    srcKey: "nhbrc",
    alt: "NHBRC — National Home Building Registration Council",
    full: "National Home Building Registration Council",
  },
  {
    srcKey: "sacpcmp",
    alt: "SACPCMP — South African Council for the Project and Construction Management Professions",
    full: "SA Council for the Project & Construction Management Professions",
  },
  {
    srcKey: "mbsa",
    alt: "Master Builders Association South Africa",
    full: "Master Builders Association South Africa",
  },
] as const;

export const GALLERY_KEYS = ["hero", "plan", "hat", "pool", "level", "site"] as const;

export const CAREERS_CV_SUBJECT =
  "Careers — CV submission via amozecksprojects.co.za";
