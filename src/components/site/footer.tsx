import Image from "next/image";
import { Facebook, MessageCircle, MapPin, Clock, Phone, Mail } from "lucide-react";
import logoWhite from "@/assets/images/logo-white.webp";
import { COMPANY, NAV_LINKS, whatsappUrl } from "@/lib/site-data";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-ink-950 text-zinc-300">
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        {/* Brand */}
        <div className="space-y-5">
          <Image
            src={logoWhite}
            alt={`${COMPANY.name} logo`}
            width={180}
            height={94}
            className="h-auto w-[180px]"
          />
          <p className="max-w-sm text-sm leading-relaxed text-zinc-400">{COMPANY.footerBlurb}</p>
          <ul className="flex items-center gap-3" aria-label="Social media links">
            <li>
              <a
                href={COMPANY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${COMPANY.name} on Facebook (opens in a new tab)`}
                className="flex size-11 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-colors hover:border-brand-500 hover:text-brand-400"
              >
                <Facebook className="size-5" aria-hidden />
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl(COMPANY.whatsappGreeting)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${COMPANY.name} on WhatsApp (opens in a new tab)`}
                className="flex size-11 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-colors hover:border-brand-500 hover:text-brand-400"
              >
                <MessageCircle className="size-5" aria-hidden />
              </a>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation">
          <h2 className="font-heading text-base font-semibold text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-zinc-400 transition-colors hover:text-brand-400">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#calculator" className="text-zinc-400 transition-colors hover:text-brand-400">
                Get an Estimate
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="font-heading text-base font-semibold text-white">Contact</h2>
          <ul className="mt-4 space-y-3.5 text-sm text-zinc-400">
            {COMPANY.addresses.map((a) => (
              <li key={a.label} className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
                <span>
                  <span className="sr-only">{a.label}: </span>
                  {a.text}
                </span>
              </li>
            ))}
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
              <a href={`tel:${COMPANY.phoneTel}`} className="hover:text-brand-400">
                {COMPANY.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
              <a href={`mailto:${COMPANY.email}`} className="break-all hover:text-brand-400">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
              <span>{COMPANY.hours}</span>
            </li>
          </ul>
        </div>

        {/* Service areas */}
        <div>
          <h2 className="font-heading text-base font-semibold text-white">Areas We Serve</h2>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Service areas">
            {["Ballito", "Durban", "Kempton Park", "Johannesburg", "KwaZulu-Natal", "Gauteng"].map(
              (area) => (
                <li
                  key={area}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-zinc-300"
                >
                  {area}
                </li>
              ),
            )}
          </ul>
          <p className="mt-5 text-sm text-zinc-400">
            100% Black Owned &amp; NHBRC Registered — do it right the first time.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-zinc-500 sm:flex-row sm:text-left">
          <p>
            {COMPANY.copyright.replace("2021", `2021–${year}`)}
          </p>
          <p>
            Demo built by{" "}
            <a
              href="https://businesshustle.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-400 hover:text-brand-500"
            >
              Business Hustle
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
