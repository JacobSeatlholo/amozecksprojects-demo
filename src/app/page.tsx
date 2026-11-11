import Hero from "@/components/site/hero";
import About from "@/components/site/about";
import Services from "@/components/site/services";
import Affiliations from "@/components/site/affiliations";
import Gallery from "@/components/site/gallery";
import QuoteCalculator from "@/components/site/quote-calculator";
import Careers from "@/components/site/careers";
import Contact from "@/components/site/contact";

const SITE_URL = "https://www.amozecksprojects.co.za";

/** Rich results for search engines + AI agents (agentic-browsing readiness). */
function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#business`,
    name: "Amozecks Projects",
    slogan: "Do it right the first time.",
    description:
      "100% Black-owned, NHBRC-registered contracting company providing building, formwork, renovations, plumbing, civil works and property development services in KwaZulu-Natal and Gauteng, South Africa.",
    url: SITE_URL,
    telephone: "+27822916151",
    email: "info@amozecksprojects.co.za",
    image: `${SITE_URL}/og-image.jpg`,
    sameAs: ["https://web.facebook.com/amozecksprojects"],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Hills Avenue",
        addressLocality: "Ballito",
        addressRegion: "KwaZulu-Natal",
        addressCountry: "ZA",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "247 Tugela Street",
        addressLocality: "Kempton Park",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
    ],
    areaServed: ["Ballito", "Durban", "Kempton Park", "Johannesburg", "South Africa"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    knowsAbout: [
      "Building",
      "Formwork",
      "Renovations",
      "Plumbing",
      "Civil Works",
      "Property Development",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <About />
      <Services />
      <Affiliations />
      <Gallery />
      <QuoteCalculator />
      <Careers />
      <Contact />
    </>
  );
}
