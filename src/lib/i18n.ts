/**
 * Multilingual content for the Amozecks Projects demo.
 *
 * Languages: English (en), isiZulu (zu), Afrikaans (af) — the languages most
 * relevant to the company's service areas (KwaZulu-Natal & Gauteng).
 *
 * FACT-FIDELITY RULE: every fact (phone numbers, email, addresses, NHBRC /
 * BBBEE claims, rates, years in operation) is carried over verbatim from the
 * real English content of amozecksprojects.co.za. Only the prose is translated.
 *
 * Note: isiZulu copy is written as natural, professional urban-industrial
 * isiZulu (technical terms such as formwork/plumbing use the standard SA
 * loanword forms). Have a native isiZulu speaker proof-read before production
 * use. Institution names (NHBRC, SACPCMP, Master Builders SA) are kept in
 * their official English forms in all languages.
 */
import type { ServiceKey } from "@/lib/quote";

export const LANGS = ["en", "zu", "af"] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_META: Record<
  Lang,
  { short: string; native: string; htmlLang: string; label: string }
> = {
  en: { short: "EN", native: "English", htmlLang: "en-ZA", label: "English" },
  zu: { short: "ZU", native: "isiZulu", htmlLang: "zu-ZA", label: "isiZulu" },
  af: { short: "AF", native: "Afrikaans", htmlLang: "af-ZA", label: "Afrikaans" },
};

const en = {
  meta: {
    title:
      "Amozecks Projects | Do It Right The First Time — Building, Formwork & Renovations",
  },
  nav: {
    about: "About us",
    services: "Services",
    projects: "Projects",
    careers: "Careers",
    contact: "Contact us",
  },
  header: {
    estimateCta: "Get an Estimate",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    backToTop: "back to top",
    mainNavLabel: "Main navigation",
    mobileNavLabel: "Mobile navigation",
    callLabel: "Call",
    languageLabel: "Language",
    switchTo: "Switch to",
  },
  hero: {
    kicker: "100% Black-Owned • NHBRC-Registered Contractor",
    titlePre: "Do It",
    titleHighlight: "Right",
    titlePost: "The First Time",
    text: "At Amozecks Projects we believe in doing things correctly the first time, so it’s easier than having to go back and fix it.",
    ctaCalc: "Get an Instant Estimate",
    ctaServices: "Explore Our Services",
    trustChips: [
      "100% Black Owned",
      "NHBRC Registered",
      "SACPCMP Affiliated",
      "Master Builders SA",
    ],
    trustLabel: "Trust badges",
    imgAlt: "Modern residential home built by Amozecks Projects",
  },
  about: {
    kicker: "About us",
    heading: "The best construction experts",
    paragraphs: [
      "Amozecks Projects is a 100% Black Owned, well-established contracting company that has provided building solutions to public and private sector clients across the country for the past five years, with an exceptional service offering founded on values such as honesty, reliability and quality.",
      "We have earned a reputation as the trusted contractor for building, construction, maintenance, plumbing and shop fitting projects of all types. From new structures — commercial, industrial and residential — to restorations of heritage buildings, we are in our element on the building site, regardless of the nature or requirements of a project.",
    ],
    badge1: "100% Black Owned",
    badge2: "NHBRC Registered",
    imgAlt: "Amozecks Projects team reviewing construction plans on site",
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
  },
  services: {
    kicker: "Services",
    heading: "Quality Construction. Honest Service. Great Value.",
    text: "Six core services delivered across KwaZulu-Natal and Gauteng — tap any service to get an instant, indicative estimate on WhatsApp.",
    estimateCta: "Get an estimate for this service",
    estimateCtaAria: "Get an instant estimate for",
    estimateCtaAriaSuffix: "— jumps to the quote calculator",
    imgAlts: {
      building: "Bricklaying work in progress on an Amozecks building site",
      formwork: "Worker pouring concrete into formwork structures",
      renovations: "Renovation team member ready to start work on site",
    },
    items: {
      building: {
        name: "Building",
        text: "At Amozecks Projects we provide quality materials and have professional builders to ensure our clients get the best quality results and a guarantee on their structure. We are also NHBRC registered, meaning we comply with South African legislation on home building — specifically the Housing Consumer Protection Measures Act, which protects the housing consumer and regulates the home building environment.",
      },
      formwork: {
        name: "Formwork",
        text: "We are specialists in formwork, helping you with the process of creating a temporary mould into which concrete is poured and formed. We help with temporary or permanent support structures and moulds into which concrete is poured.",
      },
      renovations: {
        name: "Renovations",
        text: "Amozecks Projects offers professional home renovation, home remodelling, office renovation and office remodelling services for projects big and small. If you need tiling, painting, or a living room that stands out, we can help with the best renovation solutions.",
      },
      plumbing: {
        name: "Plumbing",
        text: "We do everything related to plumbing, from a blocked drain to geyser installation and leak detection. We will make sure all your plumbing problems get solved and leave you with no problems.",
      },
      civil: {
        name: "Civil Works",
        text: "Our Civil Works Department possesses deep expertise and professionalism in civil works services, supported by highly qualified engineers, technicians and workers, mastering highly advanced tools, equipment and facilities to provide world-class services.",
      },
      development: {
        name: "Property Developers",
        text: "We render specialised services to property developers, assisting them in the development process from the moment of acquiring land to concluding various agreements, conveyancing, and even litigation where necessary.",
      },
    },
  },
  gallery: {
    kicker: "Projects",
    heading: "Our Work in Pictures",
    text: "A look at the sites, standards and craftsmanship that define Amozecks Projects — photographs featured on amozecksprojects.co.za.",
    items: {
      hero: {
        alt: "Outdoor view of a modern house completed by Amozecks Projects",
        caption: "Modern residential construction",
      },
      plan: {
        alt: "Construction professionals reviewing building plans on site",
        caption: "Planning every project right the first time",
      },
      hat: {
        alt: "Construction worker wearing a hard hat on a construction zone",
        caption: "On-site safety and supervision",
      },
      pool: {
        alt: "Modern house with garden, swimming pool and wooden deck",
        caption: "Outdoor living & home improvements",
      },
      level: {
        alt: "Worker checking a construction spirit level for accuracy",
        caption: "Precision and quality checks",
      },
      site: {
        alt: "Large-scale construction site with structural works",
        caption: "Large-scale construction sites",
      },
    },
  },
  affiliations: {
    heading: "Registered & Affiliated With",
  },
  careers: {
    kicker: "Careers",
    heading: "Build Your Career With Us",
    text: "We continuously empower people through practical, on-site training, and also provide employment opportunities to people living in the surrounding areas of our sites. Send us your CV and we will keep it on file for upcoming projects.",
    emailCv: "Email Your CV",
    whatsappUs: "WhatsApp Us",
    waMessage:
      "Hi Amozecks Projects! I would like to apply for work opportunities. My CV is ready to send — please let me know where to send it. Thank you!",
  },
  contact: {
    kicker: "Contact us",
    heading: "Let’s Talk About Your Project",
    text: "Request a firm quote, book a site assessment, or simply ask a question — every channel below reaches the real Amozecks Projects team.",
    hoursShort: "Mon–Fri, 9:00 AM – 5:00 PM",
    channels: {
      call: { label: "Call Us", description: "Mon–Fri, 9:00 AM – 5:00 PM" },
      whatsapp: {
        label: "WhatsApp",
        description: "Fastest response — send a message anytime",
      },
      email: {
        label: "Email",
        description: "For quotes, tenders and general enquiries",
      },
      facebook: {
        label: "Facebook",
        description: "Follow our latest projects and updates",
      },
    },
    operatingHours: "Operating Hours",
  },
  footer: {
    blurb:
      "We have earned a reputation as the trusted contractor for building, construction, maintenance, plumbing and shop fitting projects of all types.",
    quickLinks: "Quick Links",
    contact: "Contact",
    areasWeServe: "Areas We Serve",
    areasLabel: "Service areas",
    tagline:
      "100% Black Owned & NHBRC Registered — do it right the first time.",
    demoCredit: "Demo built by",
    getEstimate: "Get an Estimate",
    socialLabel: "Social media links",
    facebookAria: "on Facebook (opens in a new tab)",
    whatsappAria: "on WhatsApp (opens in a new tab)",
  },
  floating: {
    aria: "Chat with Amozecks Projects on WhatsApp (opens in a new tab)",
  },
  skip: {
    toContent: "Skip to main content",
  },
  calc: {
    kicker: "Get a quote",
    heading: "Know Your Budget Before You Call",
    text: "Answer four quick questions, see an indicative range instantly, then send it straight to our WhatsApp for a firm quote and site assessment.",
    formLabel: "Instant estimate calculator",
    legendService: "Choose your service",
    legendFinish: "Finish & timeline",
    finishLabel: "Finish level",
    timelineLabel: "Timeline",
    legendWhere: "Where & who",
    optional: "(optional)",
    areaLabel: "Project area",
    nameLabel: "Your name",
    namePlaceholder: "e.g. Thabo",
    cellLabel: "Cell number",
    cellPlaceholder: "e.g. 082 000 0000",
    sizeSrLabel: "in",
    min: "min",
    panelLabel: "Your indicative estimate",
    upTo: "up to",
    customQuote: "Custom quote",
    disclaimer:
      "Indicative market ranges for planning only — not a formal quote. Final pricing depends on site conditions, materials and plans.",
    sendWa: "Send This Estimate on WhatsApp",
    callUs: "Call Us",
    copySummary: "Copy Summary",
    goesTo: "Goes straight to",
    toastCopiedTitle: "Estimate copied",
    toastCopiedDesc: "Paste it into WhatsApp, email or SMS.",
    toastFailTitle: "Could not copy",
    toastFailDesc: "Please copy the estimate manually.",
    finish: { standard: "Standard", premium: "Premium" },
    timeline: { flexible: "Flexible", standard: "Standard", urgent: "Urgent" },
    areas: [
      "Ballito — KwaZulu-Natal",
      "Durban — KwaZulu-Natal",
      "Kempton Park — Gauteng",
      "Johannesburg — Gauteng",
      "Elsewhere in South Africa",
    ],
  },
  servicesMeta: {
    building: {
      label: "Building",
      sizeLabel: "Floor area to build",
      sizeUnit: "m²",
      perUnit: "per m²",
      note: "Indicative market range for new residential/commercial building work per m².",
    },
    renovations: {
      label: "Renovations",
      sizeLabel: "Area being renovated",
      sizeUnit: "m²",
      perUnit: "per m²",
      note: "Tiling, painting, remodelling and general renovation work per m².",
    },
    formwork: {
      label: "Formwork",
      sizeLabel: "Formwork contact area",
      sizeUnit: "m²",
      perUnit: "per m²",
      note: "Supply-and-erect formwork per m² of concrete contact area.",
    },
    plumbing: {
      label: "Plumbing",
      sizeLabel: "Rooms / major installations",
      sizeUnit: "rooms",
      unitSingular: "room",
      perUnit: "per room",
      note: "Per bathroom/kitchen installation — repairs and geyser work are usually less.",
    },
    civil: {
      label: "Civil Works",
      sizeLabel: "Works area",
      sizeUnit: "m²",
      perUnit: "per m²",
      note: "Civil works scope varies widely — engineer-driven projects are quoted per design.",
    },
    development: {
      label: "Property Developers",
      sizeLabel: "Units / extent of development",
      sizeUnit: "units",
      unitSingular: "unit",
      perUnit: "per unit",
      note: "Developer services are scoped per project — we’ll put a tailored proposal together with you.",
    },
  },
  hours: "Monday – Friday: 9:00 AM – 5:00 PM",
  whatsapp: {
    greeting: "Hi there, Please assist me",
    estimateIntro:
      "Hi Amozecks Projects! I used the estimate calculator on your website and would like a firm quote:",
    fieldService: "Service",
    fieldFinish: "Finish",
    fieldTimeline: "Timeline",
    fieldArea: "Area",
    fieldEstimate: "Indicative estimate",
    fieldName: "Name",
    fieldCell: "Cell",
    estimateOutro:
      "Please contact me to arrange a site assessment. Thank you!",
  },
};

export type Dict = {
  meta: { title: string };
  nav: Record<"about" | "services" | "projects" | "careers" | "contact", string>;
  header: {
    estimateCta: string;
    openMenu: string;
    closeMenu: string;
    backToTop: string;
    mainNavLabel: string;
    mobileNavLabel: string;
    callLabel: string;
    languageLabel: string;
    switchTo: string;
  };
  hero: {
    kicker: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    text: string;
    ctaCalc: string;
    ctaServices: string;
    trustChips: string[];
    trustLabel: string;
    imgAlt: string;
  };
  about: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    badge1: string;
    badge2: string;
    imgAlt: string;
    values: { title: string; text: string }[];
    stats: { value: string; label: string }[];
  };
  services: {
    kicker: string;
    heading: string;
    text: string;
    estimateCta: string;
    estimateCtaAria: string;
    estimateCtaAriaSuffix: string;
    imgAlts: Record<"building" | "formwork" | "renovations", string>;
    items: Record<ServiceKey, { name: string; text: string }>;
  };
  gallery: {
    kicker: string;
    heading: string;
    text: string;
    items: Record<
      "hero" | "plan" | "hat" | "pool" | "level" | "site",
      { alt: string; caption: string }
    >;
  };
  affiliations: { heading: string };
  careers: {
    kicker: string;
    heading: string;
    text: string;
    emailCv: string;
    whatsappUs: string;
    waMessage: string;
  };
  contact: {
    kicker: string;
    heading: string;
    text: string;
    hoursShort: string;
    channels: Record<
      "call" | "whatsapp" | "email" | "facebook",
      { label: string; description: string }
    >;
    operatingHours: string;
  };
  footer: {
    blurb: string;
    quickLinks: string;
    contact: string;
    areasWeServe: string;
    areasLabel: string;
    tagline: string;
    demoCredit: string;
    getEstimate: string;
    socialLabel: string;
    facebookAria: string;
    whatsappAria: string;
  };
  floating: { aria: string };
  skip: { toContent: string };
  calc: {
    kicker: string;
    heading: string;
    text: string;
    formLabel: string;
    legendService: string;
    legendFinish: string;
    finishLabel: string;
    timelineLabel: string;
    legendWhere: string;
    optional: string;
    areaLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    cellLabel: string;
    cellPlaceholder: string;
    sizeSrLabel: string;
    min: string;
    panelLabel: string;
    upTo: string;
    customQuote: string;
    disclaimer: string;
    sendWa: string;
    callUs: string;
    copySummary: string;
    goesTo: string;
    toastCopiedTitle: string;
    toastCopiedDesc: string;
    toastFailTitle: string;
    toastFailDesc: string;
    finish: Record<"standard" | "premium", string>;
    timeline: Record<"flexible" | "standard" | "urgent", string>;
    areas: string[];
  };
  servicesMeta: Record<
    ServiceKey,
    {
      label: string;
      sizeLabel: string;
      sizeUnit: string;
      unitSingular?: string;
      perUnit: string;
      note: string;
    }
  >;
  hours: string;
  whatsapp: {
    greeting: string;
    estimateIntro: string;
    fieldService: string;
    fieldFinish: string;
    fieldTimeline: string;
    fieldArea: string;
    fieldEstimate: string;
    fieldName: string;
    fieldCell: string;
    estimateOutro: string;
  };
};

const zu: Dict = {
  meta: {
    title:
      "Amozecks Projects | Yenza Kahle Okokuqala — Ukwakhiwa, I-Formwork & Ukulungiswa",
  },
  nav: {
    about: "Mayelana nathi",
    services: "Amasevisi",
    projects: "Amaphrojekthi",
    careers: "Amathuba omsebenzi",
    contact: "Xhumana nathi",
  },
  header: {
    estimateCta: "Thola Isilinganiso",
    openMenu: "Vula imenyu",
    closeMenu: "Vala imenyu",
    backToTop: "buyela phezulu",
    mainNavLabel: "Ukuzulazula okuyinhloko",
    mobileNavLabel: "Ukuzulazula kweselula",
    callLabel: "Shayela",
    languageLabel: "Ulwazi lolimi",
    switchTo: "Guqula kokuba",
  },
  hero: {
    kicker: "Inkampani Yabantu Abamnyama 100% • Irekhodiwe ku-NHBRC",
    titlePre: "Yenza",
    titleHighlight: "Kahle",
    titlePost: "Okokuqala",
    text: "Ku-Amozecks Projects sikholwa ekwenzeni izinto ngendlela efanele okokuqala — kulula kunokubuyela emuva ukuzilungisa.",
    ctaCalc: "Thola Isilinganiso Ngokushesha",
    ctaServices: "Hlola Amasevisi Ethu",
    trustChips: [
      "Inkampani Yabantu Abamnyama 100%",
      "Irekhodiwe ku-NHBRC",
      "Ixhumekile ku-SACPCMP",
      "Master Builders SA",
    ],
    trustLabel: "Izimpawu zokwethemba",
    imgAlt: "Indlu yanamuhla eyakhiwe ngu-Amozecks Projects",
  },
  about: {
    kicker: "Mayelana nathi",
    heading: "Abakhono kakhulu ekwakheni",
    paragraphs: [
      "U-Amozecks Projects yinkampani yamakontraki eqinile edume kahle, enobunikazi obugcwele babantu abamnyama (100%). Iminyaka emihlanu edlule inikeze izixazululo zokwakha kubakhenethi bomphakathi nabo wezamabhizinisi ezweni lonke, ngezinsizakalo ezihamba phambili ezisuselwe ezimisweni ezinjengobuqotho, ukwethembeka kanye nekhwalithi.",
      "Sithole udumo njengomkontraki othembekile wezidingo zokwakha, ukwakhiwa, ukugcinwa kwesakhiwo, i-plumbing kanye nokulungisa amastolo nganoma yiziphi izinhlobo. Kusukela kumasakhiwo amasha — omabhizinisi, wezimboni nasezindlu — kuya ekubuyiseleni izakhiwo zamagugu, silungele umsebenzi wesakhiwo noma ngabe yimuphi umkhakha noma izidingo zephrojekthi.",
    ],
    badge1: "Inkampani Yabantu Abamnyama 100%",
    badge2: "Irekhodiwe ku-NHBRC",
    imgAlt: "Ithimba lase-Amozecks Projects lihlola amaplani okwakha endaweni",
    values: [
      {
        title: "Ubuqotho, ukwethembeka kanye nekhwalithi",
        text: "Izimiso ezibekwe enhlokwanambili yonke into esiyenzayo — kusuka ekuphathweni kuya ekuqapheleni kumasayithi.",
      },
      {
        title: "Ukuthengisa okulandela i-BBBEE",
        text: "Zonke izidingo zethu zokuthenga zitholakala kubathengisi abalandela i-BEE ukusekela izinhloso ze-BBBEE.",
      },
      {
        title: "Ukuqeqetsha nomsebenzi wendawo",
        text: "Siqhubeka siphakamisa abantu nokuqeqetshwa okusebenzayo nasendaweni yokwakha, futhi sinikeza amathuba omsebenzi kubantu abahlala ezindaweni ezizungezile izindawo zethu zokwakha.",
      },
    ],
    stats: [
      { value: "100%", label: "Inkampani Yabantu Abamnyama" },
      { value: "6", label: "Amasevisi Ayisisekelo" },
      { value: "2", label: "Amasifunda Asebenza Kuwo" },
    ],
  },
  services: {
    kicker: "Amasevisi",
    heading: "Ikhwalithi Yokwakha. Insizakalo Eqotho. Inani Elihle.",
    text: "Amasevisi ayisithupha eyisisekelo eKwaZulu-Natal naseGauteng — thinta noma yisiphi isevisi uthole isilinganiso ngokushesha ku-WhatsApp.",
    estimateCta: "Thola isilinganiso salesi sisevisi",
    estimateCtaAria: "Thola isilinganiso ngokushesha se",
    estimateCtaAriaSuffix: "— kuya kwi-calculator yekwotasie",
    imgAlts: {
      building: "Ukwenza ubhulukhu olukhulu endaweni yokwakha ye-Amozecks",
      formwork: "Umsebenzi ekhonkhredi lilahliwe ku-formwork",
      renovations: "Ilungu lethimba lokulungisa lilungele umsebenzi endaweni",
    },
    items: {
      building: {
        name: "Ukwakhiwa",
        text: "Ku-Amozecks Projects sinikeza izinto ezakhelwayo zekhwalithi futhi sinabakhi abaqeqetshiwe ukuqinisekisa ukuthi abakhenethi bethu bathola imiphumela yekhwalithi engcono kakhulu kanye nokuqinisekiswa ngesakhiwo sabo. Siphinde sirekhodiwe ku-NHBRC, okusho ukuthi silandela umthetho waseNingizimu Afrika ngokwakhiwa kwendlu — okuyilo uMthetho Wezokuvikela Abathengi Bezendlu (Housing Consumer Protection Measures Act), ovikela umthengi wendlu futhi ulawula imvelo yokwakhiwa kwendlu.",
      },
      formwork: {
        name: "I-Formwork",
        text: "Singobachwepheshe be-formwork, sizokusiza ngenqubo yokwenza i-mould yesikhashana ekhonkhredi iza kuthi ngaphakathi yakhelwe. Sisiza ngamasakhiwo axhasayo esikhashana noma ahlala njalo, kanye nemi-mould ekhonkhredi iza kuthi ngaphakathi.",
      },
      renovations: {
        name: "Ukulungiswa",
        text: "U-Amozecks Projects unikeza izinsizakalo zochwepheshe zokulungisa nokuguqula amakhaya namahhovisi — kwamaphrojekthi amakhulu n’amancane. Uma udinga ama-thilesi, ukupenda, noma igumbi lokuhlala elivelelayo, singakusiza ngezixazululo zokulungisa ezinhle kakhulu.",
      },
      plumbing: {
        name: "I-Plumbing",
        text: "Senza konke okumayelana ne-plumbing — kusukela empombini evimbezelayo kuya ekufakeni i-geyser nokuthola indawo lapho amanzi ekhishwa khona. Sizoqinisekisa ukuthi wonke amaphutha e-plumbing akho ayaxazululwa, uhlale ungenayo inselele.",
      },
      civil: {
        name: "Imisebenzi Ye-Civil",
        text: "I-Civil Works Department yethu inolwazi olujulile nobuchwepheshe emisebenzini ye-civil, ixhaswa yizingcwephe ezifanelekile, abachwepheshe nabasebenzi abaqeqetshiwe kahle, abaphethe amathuluzi, ama-machines nezindawo ezithuthukile kakhulu ukunikeza izinsizakalo zomhlaba jikelele.",
      },
      development: {
        name: "Abathuthukisi Bezakhiwo",
        text: "Sinikeza izinsizakalo ezikhethekile kubathuthukisi bezakhiwo, sibasiza enqubweni yokuthuthukisa kusukela ngesikhathi abathatha umhlabathi kuya ekwenzeni izivumelwano ezahlukene, i-conveyancing, nangokulwa ngomthetho lapho kudingeka khona.",
      },
    },
  },
  gallery: {
    kicker: "Amaphrojekthi",
    heading: "Umsebenzi Wethu Ngezithombe",
    text: "Ukwakhelwa kwezindawo, izidingo kanye nobuchwepheshe obumele i-Amozecks Projects — izithombe ezisikhishwe ku-amozecksprojects.co.za.",
    items: {
      hero: {
        alt: "Ukubheka ngaphandle kwendlu yanamuhla eyapheleliswa ngu-Amozecks Projects",
        caption: "Ukwakhiwa kwendlu yanamuhla",
      },
      plan: {
        alt: "Ochwazazemvelo bezokwakha behlola amaplani okwakha endaweni",
        caption: "Ukuhlela iprojekthi nganye kahle okokuqala",
      },
      hat: {
        alt: "Umakhi efaka isigqoko sokuphepha endaweni yokwakha",
        caption: "Ukuphepha nokuqaphelwa emsebenzini",
      },
      pool: {
        alt: "Indlu yanamuhla enengadi, ibhafu nedekhi yokhuni",
        caption: "Ukuphila ngaphandle nokuthuthukisa indlu",
      },
      level: {
        alt: "Umsebenzi ehlola izinga lokwakha (ileveli) ngokunemba",
        caption: "Ukuqondisa nokuhlola ikhwalithi",
      },
      site: {
        alt: "Indawo enkulu yokwakha nemisebenzi yesakhiwo",
        caption: "Amasayithi amakhulu okwakha",
      },
    },
  },
  affiliations: {
    heading: "Irekhodiwe & Ixhumekile Nalaba",
  },
  careers: {
    kicker: "Amathuba omsebenzi",
    heading: "Yakha Umsebenzi Wakho Lapha Kithi",
    text: "Siphakamisa abantu ngokuqhubekayo nokuqeqetshwa okusebenzayo nasendaweni, futhi sinikeza amathuba omsebenzi kubantu abahlala ezindaweni ezizungezile izindawo zethu zokwakha. Thumela i-CV yakho kithi futhi siyoyigcina ifayilini ngemiphrojekthi ezayo.",
    emailCv: "Thumela I-CV Nge-imeyili",
    whatsappUs: "Sithumele ku-WhatsApp",
    waMessage:
      "Sawubona Amozecks Projects! Ngingathanda ukufaka isicelo sezithuba zomsebenzi. I-CV yami ilungele ukuthunywa — ngicela ungitshele ngingayithumela ngapi. Ngiyabonga!",
  },
  contact: {
    kicker: "Xhumana nathi",
    heading: "Ake Sikhulume Ngephrojekthi Yakho",
    text: "Cela ikwotasie eqinile, bhukha ukuhlolwa kwendawo, noma buza umbuzo — yonke indlela yokuxhumana ngezansi ifika ngqo ethimbeni lase-Amozecks Projects.",
    hoursShort: "UMsombuluko–ULwesihlanu, 09:00–17:00",
    channels: {
      call: {
        label: "Sishayele",
        description: "UMsombuluko–ULwesihlanu, 09:00–17:00",
      },
      whatsapp: {
        label: "WhatsApp",
        description: "Impendulo esheshayo — thumela umyalezo noma nini",
      },
      email: {
        label: "I-imeyili",
        description: "Ngamakwotasie, amatenda nemibuzo ejwayelekile",
      },
      facebook: {
        label: "Facebook",
        description: "Landela amaphrojekthi ethu amasha nezibuyekezo",
      },
    },
    operatingHours: "Amahora Okusebenza",
  },
  footer: {
    blurb:
      "Sithole udumo njengomkontraki othembekile wezokwakha, ukwakhiwa, ukugcinwa, i-plumbing nokulungisa amastolo nganoma yiziphi izinhlobo.",
    quickLinks: "Izixhumanisi Ezisheshayo",
    contact: "Xhumana Nathi",
    areasWeServe: "Izindawo Esisebenza Kuzo",
    areasLabel: "Izindawo zensizakalo",
    tagline:
      "Inkampani Yabantu Abamnyama 100% & Irekhodiwe ku-NHBRC — yenza kahle okokuqala.",
    demoCredit: "Idemo yakhiwe ngu-",
    getEstimate: "Thola Isilinganiso",
    socialLabel: "Izixhumanisi ze-social media",
    facebookAria: "ku-Facebook (kuyavulwa ithebhu elisha)",
    whatsappAria: "ku-WhatsApp (kuyavulwa ithebhu elisha)",
  },
  floating: {
    aria: "Xhumana ne-Amozecks Projects ku-WhatsApp (kuyavulwa ithebhu elisha)",
  },
  skip: {
    toContent: "Yeza kokuqukethwe okuyinkosi",
  },
  calc: {
    kicker: "Cela Ikwotasie",
    heading: "Yazi Ibhajethi Yakho Ngaphambi Kokushayela",
    text: "Phendula imibuzo emine emifushane, bona isilinganiso ngokushesha, bese uwuthumela ku-WhatsApp wethu ukuthola ikwotasie eqinile nokuhlolwa kwendawo.",
    formLabel: "Isibali Yesilinganiso Ngokushesha",
    legendService: "Khetha Isevisi Yakho",
    legendFinish: "Ibanga Lokuphela & Isikhathi",
    finishLabel: "Ibanga Lokugcina",
    timelineLabel: "Isikhathi",
    legendWhere: "Kuphi & Ubani",
    optional: "(okunokukhethwa)",
    areaLabel: "Indawo Yephrojekthi",
    nameLabel: "Igama lakho",
    namePlaceholder: "isb. Thabo",
    cellLabel: "Inombolo Yocingo",
    cellPlaceholder: "isb. 082 000 0000",
    sizeSrLabel: "ku",
    min: "okuncane",
    panelLabel: "Isilinganiso Sakho Esiphawulayo",
    upTo: "kuze kufika ku-",
    customQuote: "Ikwotasie Eyenzelwe Wena",
    disclaimer:
      "Amanani lawa ngamabanga emakethe awusizo ekuhleleni kuphela — awona ikwotasie esemthethweni. Imali yokugcina iya ngokwakheka kwendawo, izinto ezisetshenziswayo kanye nezinhlelo.",
    sendWa: "Thumela Lesi Silinganiso ku-WhatsApp",
    callUs: "Shayela Nathi",
    copySummary: "Kopisha Isifinyezo",
    goesTo: "Iyahamba ngqo ku-",
    toastCopiedTitle: "Isilinganiso sikopishiwe",
    toastCopiedDesc: "Inamathisela ku-WhatsApp, i-imeyili noma i-SMS.",
    toastFailTitle: "Ayikwazanga ukukopisha",
    toastFailDesc: "Ngicela ukopishe isilinganiso ngokwenza.",
    finish: { standard: "Evamile", premium: "Ephezulu" },
    timeline: {
      flexible: "Kuguquguqukayo",
      standard: "Evamile",
      urgent: "Ngokuphuthumayo",
    },
    areas: [
      "Ballito — KwaZulu-Natal",
      "Durban — KwaZulu-Natal",
      "Kempton Park — Gauteng",
      "Johannesburg — Gauteng",
      "Ezinye Izindawo ZaseNingizimu Afrika",
    ],
  },
  servicesMeta: {
    building: {
      label: "Ukwakhiwa",
      sizeLabel: "Ububanzi Bendawo Yokwakha",
      sizeUnit: "m²",
      perUnit: "nge-m²",
      note: "Ibanga lemakethe lesiqondiso ngokwakhiwa kwezindlu/amabhizinisi amasha nge-m².",
    },
    renovations: {
      label: "Ukulungiswa",
      sizeLabel: "Ububanzi Bendawo Okulungiswayo",
      sizeUnit: "m²",
      perUnit: "nge-m²",
      note: "Ama-thilesi, ukupenda, ukushintshwa kokwakhiwa nokulungisa okujwayelekile nge-m².",
    },
    formwork: {
      label: "I-Formwork",
      sizeLabel: "Ububanzi Bokuthinta Boformwork",
      sizeUnit: "m²",
      perUnit: "nge-m²",
      note: "Ukuthenga nokusimamisa i-formwork nge-m² yendawo yokuthinta ikhonkhredi.",
    },
    plumbing: {
      label: "I-Plumbing",
      sizeLabel: "Amagumbi / Izofakwayo Ezinkulu",
      sizeUnit: "amagumbi",
      unitSingular: "igumbi",
      perUnit: "ngegumbi",
      note: "Ngegumbi lokugezela noma ikhishini — ukulungisa nomsebenzi we-geyser ngokujwayelekile kungaphansi.",
    },
    civil: {
      label: "Imisebenzi Ye-Civil",
      sizeLabel: "Ububanzi Bomsebenzi",
      sizeUnit: "m²",
      perUnit: "nge-m²",
      note: "Umsebenzi we-civil uyahluka kakhulu — amaphrojekthi achazwe yizingcwephe atholwa ngokususelwa kumklamo.",
    },
    development: {
      label: "Abathuthukisi Bezakhiwo",
      sizeLabel: "Amayunithi / Ububanzi Bokuthuthukiswa",
      sizeUnit: "amayunithi",
      unitSingular: "iyunithi",
      perUnit: "ngeyunithi",
      note: "Izinsizakalo zothuthukisi ziyalinganiswa ngephrojekthi — sizohlela nawe isiphakamiso esilungile.",
    },
  },
  hours: "UMsombuluko – ULwesihlanu: 09:00 – 17:00",
  whatsapp: {
    greeting: "Sawubona, ngicela ungisize",
    estimateIntro:
      "Sawubona Amozecks Projects! Ngisebenzise isibali yesilinganiso ku-website wenu ngithanda ikwotasie eqinile:",
    fieldService: "Isevisi",
    fieldFinish: "Ibanga lokugcina",
    fieldTimeline: "Isikhathi",
    fieldArea: "Indawo",
    fieldEstimate: "Isilinganiso esiphawulayo",
    fieldName: "Igama",
    fieldCell: "Icingo",
    estimateOutro: "Ngicela uxhumane nami ukuhlela ukuhlolwa kwendawo. Ngiyabonga!",
  },
};

const af: Dict = {
  meta: {
    title:
      "Amozecks Projects | Doen Dit Reg Die Eerste Keer — Bouwerk, Bekisting & Renovasies",
  },
  nav: {
    about: "Oor ons",
    services: "Dienste",
    projects: "Projekte",
    careers: "Loopbaneke",
    contact: "Kontak ons",
  },
  header: {
    estimateCta: "Kry ’n Beraming",
    openMenu: "Maak spyskaart oop",
    closeMenu: "Maak spyskaart toe",
    backToTop: "terug na bo",
    mainNavLabel: "Hoofnavigasie",
    mobileNavLabel: "Mobiele navigasie",
    callLabel: "Bel",
    languageLabel: "Taal",
    switchTo: "Skakel oor na",
  },
  hero: {
    kicker: "100% Swartgeëien • NHBRC-Geregistreerde Kontrakteur",
    titlePre: "Doen Dit",
    titleHighlight: "Reg",
    titlePost: "Die Eerste Keer",
    text: "By Amozecks Projects glo ons daarin om dinge die eerste keer reg te doen — dit is makliker as om terug te gaan en dit te herstel.",
    ctaCalc: "Kry ’n Onmiddellike Beraming",
    ctaServices: "Verken Ons Dienste",
    trustChips: [
      "100% Swartgeëien",
      "NHBRC Geregistreer",
      "SACPCMP Geaffilieer",
      "Master Builders SA",
    ],
    trustLabel: "Vertrouensketsings",
    imgAlt: "Moderne residensiële huis gebou deur Amozecks Projects",
  },
  about: {
    kicker: "Oor ons",
    heading: "Die beste konstruksiekenners",
    paragraphs: [
      "Amozecks Projects is ’n 100% swartgeëien, gevestigde kontrakmaatskappy wat die afgelope vyf jaar bouoplossings aan openbare en private sektor-kliënte reg oor die land verskaf het, met ’n uitstekende diensaanbod wat gegrond is op waardes soos eerlikheid, betroubaarheid en gehalte.",
      "Ons het ’n reputasie as die betroubare kontrakteur vir bou-, konstruksie-, instandhoudings-, loodgieters- en winkeluitrustingsprojekte van alle soorte verdien. Van nuwe strukture — kommersieel, industrieel en residensieel — tot die restourasie van erfenisgeboue: ons is in ons element op die bouwerf, ongeag die aard of vereistes van ’n projek.",
    ],
    badge1: "100% Swartgeëien",
    badge2: "NHBRC Geregistreer",
    imgAlt: "Amozecks Projects-span beoordeel bouplanne op die werf",
    values: [
      {
        title: "Eerlikheid, betroubaarheid & gehalte",
        text: "Waardes wat die kern vorm van alles wat ons doen — vanaf bestuur tot werftoesig.",
      },
      {
        title: "BBBEE-voldoende verkryging",
        text: "Al ons verkrygingsbehoeftes word van BEE-voldoende verskaffers bekom om die doelwitte van BBBEE te ondersteun.",
      },
      {
        title: "Opleiding & plaaslike werkskepping",
        text: "Ons bemagtig voortdurend mense deur praktiese, op-werf opleiding en verskaf werksgeleenthede aan mense wat in die omliggende gebiede van ons werke woon.",
      },
    ],
    stats: [
      { value: "100%", label: "Swartgeëien" },
      { value: "6", label: "Kerndienste" },
      { value: "2", label: "Provinsies Bedien" },
    ],
  },
  services: {
    kicker: "Dienste",
    heading: "Gehalte Konstruksie. Eerlike Diens. Groot Waarde.",
    text: "Ses kerndienste gelewer in KwaZulu-Natal en Gauteng — tik enige diens vir ’n onmiddellike, aanduidende beraming op WhatsApp.",
    estimateCta: "Kry ’n beraming vir hierdie diens",
    estimateCtaAria: "Kry ’n onmiddellike beraming vir",
    estimateCtaAriaSuffix: "— spring na die kwotasie-sakrekenaar",
    imgAlts: {
      building: "Messelm werk in volle swang op ’n Amozecks-bouwerf",
      formwork: "Werker gooi beton in bekistingstrukture",
      renovations: "Renovasiespanlid gereed om op die werf te begin",
    },
    items: {
      building: {
        name: "Bouwerk",
        text: "By Amozecks Projects voorsien ons gehaltematerials en het ons professionele bouers om te verseker dat ons kliënte die beste gehalte-resultate en ’n waarborg op hulle struktuur kry. Ons is ook NHBRC geregistreer, wat beteken ons voldoen aan Suid-Afrikaanse wetgewing oor huisbou — spesifiek die Housing Consumer Protection Measures Act, wat die verbruiker beskerm en die huisbou-omgewing reguleer.",
      },
      formwork: {
        name: "Bekisting",
        text: "Ons is spesialiste in bekisting en help jou met die proses om ’n tydelike mal te maak waarin beton gegooi en gevorm word. Ons help met tydelike of permanente ondersteuningsstrukture en male waarin beton gegooi word.",
      },
      renovations: {
        name: "Renovasies",
        text: "Amozecks Projects bied professionele huisrenovasie-, huisherstrukturering-, kantoorrenovasie- en kantoorherstruktureringdienste vir projekte groot en klein. As jy teëls, verf of ’n sitkamer wat uitstaan nodig het, kan ons help met die beste renovasie-oplossings.",
      },
      plumbing: {
        name: "Loodgieterswerk",
        text: "Ons doen alles wat met loodgieterswerk verband hou, van ’n verstopte drein tot geiser-installasie en lekkasie-opsporing. Ons sal sorg dat al jou loodgietersprobleme opgelos word sodat jy geen probleme oorhet nie.",
      },
      civil: {
        name: "Siviele Werke",
        text: "Ons Siviele Werke-afdeling het diepe kundigheid en professionaliteit in siviele werksdienste, gesteun deur hoogs gekwalifiseerde ingenieurs, tegnici en werkers, met die bemeestering van hoogs gevorderde gereedskap, toerusting en fasiliteite om wêreldklas dienste te lewer.",
      },
      development: {
        name: "Eiendomsontwikkelaars",
        text: "Ons lewer gespesialiseerde dienste aan eiendomsontwikkelaars en help hulle in die ontwikkelingsproses vanaf die verkryging van grond tot die aangaan van verskillende ooreenkomste, aktebesorging en selfs regsgedinge waar nodig.",
      },
    },
  },
  gallery: {
    kicker: "Projekte",
    heading: "Ons Werk in Prent",
    text: "’n Kykie na die terreine, standaarde en vakmanskap wat Amozecks Projects definieer — foto’s vertoon op amozecksprojects.co.za.",
    items: {
      hero: {
        alt: "Buiteaansig van ’n moderne huis voltooi deur Amozecks Projects",
        caption: "Moderne residensiële konstruksie",
      },
      plan: {
        alt: "Konstruksie-professionals beoordeel bouplanne op die werf",
        caption: "Beplan elke projek die eerste keer reg",
      },
      hat: {
        alt: "Konstruksiewerker met ’n hardhats op ’n konstruksieterrein",
        caption: "Werf-veiligheid en toesig",
      },
      pool: {
        alt: "Moderne huis met tuin, swembad en houtdekk",
        caption: "Buitelewe & huisverbeterings",
      },
      level: {
        alt: "Werker kontroleer ’n bouwaterpas vir akkuraatheid",
        caption: "Presisie en gehaltekeurings",
      },
      site: {
        alt: "Grootskaalse konstruksieterrein met strukturele werke",
        caption: "Grootskaalse konstruksieterreine",
      },
    },
  },
  affiliations: {
    heading: "Geregistreer & Geaffilieer By",
  },
  careers: {
    kicker: "Loopbaneke",
    heading: "Bou Jou Loopbaan Saam Met Ons",
    text: "Ons bemagtig mense voortdurend deur praktiese, op-werf opleiding, en verskaf ook werksgeleenthede aan mense wat in die omliggende gebiede van ons terreine woon. Stuur jou CV aan ons en ons sal dit vir komende projekte in die lêer hou.",
    emailCv: "E-pos Jou CV",
    whatsappUs: "WhatsApp Ons",
    waMessage:
      "Hallo Amozecks Projects! Ek wil graag aansoek doen om werksgeleenthede. My CV is gereed om te stuur — laat weet asseblief waar ek dit kan stuur. Dankie!",
  },
  contact: {
    kicker: "Kontak ons",
    heading: "Kom Ons Praat Oor Jou Projek",
    text: "Versoek ’n vaste kwotasie, boek ’n terreinbeoordeling, of vra net ’n vraag — elke kanaal hieronder bereik die regte Amozecks Projects-span.",
    hoursShort: "Ma–Vr, 09:00–17:00",
    channels: {
      call: {
        label: "Bel Ons",
        description: "Ma–Vr, 09:00–17:00",
      },
      whatsapp: {
        label: "WhatsApp",
        description: "Vinnigste antwoord — stuur enige tyd ’n boodskap",
      },
      email: {
        label: "E-pos",
        description: "Vir kwotasies, tenders en algemene navrae",
      },
      facebook: {
        label: "Facebook",
        description: "Volg ons nuutste projekte en opdaterings",
      },
    },
    operatingHours: "Besigheidsure",
  },
  footer: {
    blurb:
      "Ons het ’n reputasie as die betroubare kontrakteur vir bou-, konstruksie-, instandhoudings-, loodgieters- en winkeluitrustingsprojekte van alle soorte verdien.",
    quickLinks: "Vinnige Skakels",
    contact: "Kontak Ons",
    areasWeServe: "Gebiede Ons Bedien",
    areasLabel: "Diensgebiede",
    tagline: "100% Swartgeëien & NHBRC Geregistreer — doen dit reg die eerste keer.",
    demoCredit: "Demo gebou deur",
    getEstimate: "Kry ’n Beraming",
    socialLabel: "Sosiale media skakels",
    facebookAria: "op Facebook (maak in ’n nuwe oortjie oop)",
    whatsappAria: "op WhatsApp (maak in ’n nuwe oortjie oop)",
  },
  floating: {
    aria: "Gesels met Amozecks Projects op WhatsApp (maak in ’n nuwe oortjie oop)",
  },
  skip: {
    toContent: "Spring na hoofinhoud",
  },
  calc: {
    kicker: "Versoek ’n Kwotasie",
    heading: "Weet Jou Begroting Voordat Jy Bel",
    text: "Antwoord vier vinnige vrae, sien dadelik ’n aanduidende reikwydte, en stuur dit direk na ons WhatsApp vir ’n vaste kwotasie en terreinbeoordeling.",
    formLabel: "Onmiddellike beramingsrekenaar",
    legendService: "Kies Jou Diens",
    legendFinish: "Afwerking & Tydlyn",
    finishLabel: "Afwerkingvlak",
    timelineLabel: "Tydlyn",
    legendWhere: "Waar & Wie",
    optional: "(opsioneel)",
    areaLabel: "Projekgebied",
    nameLabel: "Jou naam",
    namePlaceholder: "bv. Thabo",
    cellLabel: "Selfoonnommer",
    cellPlaceholder: "bv. 082 000 0000",
    sizeSrLabel: "in",
    min: "min",
    panelLabel: "Jou Aanduidende Beraming",
    upTo: "tot",
    customQuote: "Gepasmaakte Kwotasie",
    disclaimer:
      "Aanduidende markreekse slegs vir beplanning — nie ’n formele kwotasie nie. Finale prysing hang af van terreintoestande, materiale en planne.",
    sendWa: "Stuur Dié Beraming op WhatsApp",
    callUs: "Bel Ons",
    copySummary: "Kopieer Opsomming",
    goesTo: "Gaan regstreeks na",
    toastCopiedTitle: "Beraming gekopieer",
    toastCopiedDesc: "Plak dit in WhatsApp, e-pos of SMS.",
    toastFailTitle: "Kon nie kopieer nie",
    toastFailDesc: "Kopieer asseblief die beraming handmatig.",
    finish: { standard: "Standaard", premium: "Premium" },
    timeline: { flexible: "Buigsaam", standard: "Standaard", urgent: "Dringend" },
    areas: [
      "Ballito — KwaZulu-Natal",
      "Durban — KwaZulu-Natal",
      "Kempton Park — Gauteng",
      "Johannesburg — Gauteng",
      "Elders in Suid-Afrika",
    ],
  },
  servicesMeta: {
    building: {
      label: "Bouwerk",
      sizeLabel: "Vloeroppervlak om te bou",
      sizeUnit: "m²",
      perUnit: "per m²",
      note: "Aanduidende markreeks vir nuwe residensiële/kommersiele bouwerk per m².",
    },
    renovations: {
      label: "Renovasies",
      sizeLabel: "Oppervlak wat herstel word",
      sizeUnit: "m²",
      perUnit: "per m²",
      note: "Teëls, verf, herstrukturering en algemene renovasiewerk per m².",
    },
    formwork: {
      label: "Bekisting",
      sizeLabel: "Kontakoppervlak bekisting",
      sizeUnit: "m²",
      perUnit: "per m²",
      note: "Verskaf-en-erig bekisting per m² betonkontakoppervlak.",
    },
    plumbing: {
      label: "Loodgieterswerk",
      sizeLabel: "Kamers / groot installasies",
      sizeUnit: "kamers",
      unitSingular: "kamer",
      perUnit: "per kamer",
      note: "Per badkamer/kombuis installasie — herstelwerk en geiserwerk is gewoonlik minder.",
    },
    civil: {
      label: "Siviele Werke",
      sizeLabel: "Werksoppervlak",
      sizeUnit: "m²",
      perUnit: "per m²",
      note: "Siviele werke se omvang wissel baie — ingenieursgedrewe projekte word per ontwerp gekwoteer.",
    },
    development: {
      label: "Eiendomsontwikkelaars",
      sizeLabel: "Eenhede / omvang van ontwikkeling",
      sizeUnit: "eenhede",
      unitSingular: "eenheid",
      perUnit: "per eenheid",
      note: "Ontwikkelaarsdienste word per projek beplan — ons stel saam met jou ’n toegespitste voorstel op.",
    },
  },
  hours: "Maandag – Vrydag: 09:00 – 17:00",
  whatsapp: {
    greeting: "Hallo, help my asseblief",
    estimateIntro:
      "Hallo Amozecks Projects! Ek het die beramingsrekenaar op u webwerf gebruik en soek ’n vaste kwotasie:",
    fieldService: "Diens",
    fieldFinish: "Afwerking",
    fieldTimeline: "Tydlyn",
    fieldArea: "Gebied",
    fieldEstimate: "Aanduidende beraming",
    fieldName: "Naam",
    fieldCell: "Selfoon",
    estimateOutro: "Kontak my asseblief om ’n terreinbeoordeling te reël. Dankie!",
  },
};

export const DICT: Record<Lang, Dict> = { en, zu, af };
