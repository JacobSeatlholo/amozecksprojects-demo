/**
 * All content on this site is the REAL content of https://www.amozecksprojects.co.za/
 * (scraped verbatim, with light grammar fixes). No invented facts.
 */

export const COMPANY = {
  name: "Amozecks Projects",
  slogan: "Do it right the first time.",
  phoneDisplay: "082 291 6151",
  phoneTel: "+27822916151",
  whatsappNumber: "27822916151",
  whatsappGreeting: "Hi there, Please assist me", // same prefill as the site's wa.link
  email: "Info@amozecksprojects.co.za",
  facebook: "https://web.facebook.com/amozecksprojects",
  hours: "Monday – Friday: 9:00 AM – 5:00 PM",
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
  footerBlurb:
    "We have earned a reputation as the trusted contractor for building, construction, maintenance, plumbing and shop fitting projects of all types.",
  copyright: "Copyright © 2021 Amozecks Projects. All Rights Reserved.",
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#about", label: "About us" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact us" },
] as const;

export const HERO = {
  kicker: "100% Black-Owned • NHBRC-Registered Contractor",
  title: "Do It Right The First Time",
  text: "At Amozecks Projects we believe in doing things correctly the first time, so it’s easier than having to go back and fix it.",
  trustChips: [
    "100% Black Owned",
    "NHBRC Registered",
    "SACPCMP Affiliated",
    "Master Builders SA",
  ],
} as const;

export const ABOUT = {
  heading: "The best construction experts",
  paragraphs: [
    "Amozecks Projects is a 100% Black Owned, well-established contracting company that has provided building solutions to public and private sector clients across the country for the past five years, with an exceptional service offering founded on values such as honesty, reliability and quality.",
    "We have earned a reputation as the trusted contractor for building, construction, maintenance, plumbing and shop fitting projects of all types. From new structures — commercial, industrial and residential — to restorations of heritage buildings, we are in our element on the building site, regardless of the nature or requirements of a project.",
  ],
  values: [
    {
      title: "Honesty, reliability & quality",
      text: "Values placed at the core of everything we do — from management to site supervision.",
    },
    {
      title: "BBBEE-compliant procurement",
      text: "All of our procurement requirements are sourced from BEE-compliant providers to support the objectives of BBBEE.",
    },
    {
      title: "Training & local employment",
      text: "We continuously empower people through practical, on-site training and provide employment opportunities to people living in the surrounding areas of our sites.",
    },
  ],
  stats: [
    { value: "100%", label: "Black Owned" },
    { value: "6", label: "Core Services" },
    { value: "2", label: "Provinces Served" },
  ],
} as const;

export interface ServiceItem {
  id: string;
  name: string;
  text: string;
  imageKey?: "building" | "formwork" | "renovations";
  icon?: "hammer" | "layers" | "paint" | "wrench" | "hard-hat" | "building";
}

export const SERVICES: ServiceItem[] = [
  {
    id: "building",
    name: "Building",
    imageKey: "building",
    text: "At Amozecks Projects we provide quality materials and have professional builders to ensure our clients get the best quality results and a guarantee on their structure. We are also NHBRC registered, meaning we comply with South African legislation on home building — specifically the Housing Consumer Protection Measures Act, which protects the housing consumer and regulates the home building environment.",
  },
  {
    id: "formwork",
    name: "Formwork",
    imageKey: "formwork",
    text: "We are specialists in formwork, helping you with the process of creating a temporary mould into which concrete is poured and formed. We help with temporary or permanent support structures and moulds into which concrete is poured.",
  },
  {
    id: "renovations",
    name: "Renovations",
    imageKey: "renovations",
    text: "Amozecks Projects offers professional home renovation, home remodelling, office renovation and office remodelling services for projects big and small. If you need tiling, painting, or a living room that stands out, we can help with the best renovation solutions.",
  },
  {
    id: "plumbing",
    name: "Plumbing",
    icon: "wrench",
    text: "We do everything related to plumbing, from a blocked drain to geyser installation and leak detection. We will make sure all your plumbing problems get solved and leave you with no problems.",
  },
  {
    id: "civil",
    name: "Civil Works",
    icon: "hard-hat",
    text: "Our Civil Works Department possesses deep expertise and professionalism in civil works services, supported by highly qualified engineers, technicians and workers, mastering highly advanced tools, equipment and facilities to provide world-class services.",
  },
  {
    id: "development",
    name: "Property Developers",
    icon: "building",
    text: "We render specialised services to property developers, assisting them in the development process from the moment of acquiring land to concluding various agreements, conveyancing, and even litigation where necessary.",
  },
] as const;

export const AFFILIATIONS = [
  {
    srcKey: "nhbrc",
    alt: "NHBRC — National Home Building Registration Council",
    name: "NHBRC",
    full: "National Home Building Registration Council",
  },
  {
    srcKey: "sacpcmp",
    alt: "SACPCMP — South African Council for the Project and Construction Management Professions",
    name: "SACPCMP",
    full: "SA Council for the Project & Construction Management Professions",
  },
  {
    srcKey: "mbsa",
    alt: "Master Builders Association South Africa",
    name: "Master Builders SA",
    full: "Master Builders Association South Africa",
  },
] as const;

export const GALLERY = [
  {
    srcKey: "hero",
    alt: "Outdoor view of a modern house completed by Amozecks Projects",
    caption: "Modern residential construction",
  },
  {
    srcKey: "plan",
    alt: "Construction professionals reviewing building plans on site",
    caption: "Planning every project right the first time",
  },
  {
    srcKey: "hat",
    alt: "Construction worker wearing a hard hat on a construction zone",
    caption: "On-site safety and supervision",
  },
  {
    srcKey: "pool",
    alt: "Modern house with garden, swimming pool and wooden deck",
    caption: "Outdoor living & home improvements",
  },
  {
    srcKey: "level",
    alt: "Worker checking a construction spirit level for accuracy",
    caption: "Precision and quality checks",
  },
  {
    srcKey: "site",
    alt: "Large-scale construction site with structural works",
    caption: "Large-scale construction sites",
  },
] as const;

export const CAREERS = {
  text: "We continuously empower people through practical, on-site training, and also provide employment opportunities to people living in the surrounding areas of our sites. Send us your CV and we will keep it on file for upcoming projects.",
  cvMailSubject: "Careers — CV submission via amozecksprojects.co.za",
} as const;
