"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/images/logo.webp";
import { COMPANY, NAV_LINKS } from "@/lib/site-data";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 transition-shadow ${
        scrolled ? "shadow-[0_2px_16px_rgba(20,23,15,0.10)]" : ""
      }`}
    >
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-4">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2"
          aria-label={`${COMPANY.name} — back to top`}
        >
          <Image
            src={logo}
            alt={`${COMPANY.name} logo`}
            width={168}
            height={88}
            className="h-14 w-auto"
            priority
          />
        </a>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-brand-700"
          >
            <Phone className="size-4 text-brand-600" aria-hidden />
            {COMPANY.phoneDisplay}
          </a>
          <a href="#calculator" className="btn-primary">
            Get an Estimate
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-border text-ink-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-border bg-white lg:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        } transition-[max-height] duration-300`}
      >
        <nav aria-label="Mobile navigation">
          <ul className="wrap flex flex-col py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-ink-900 hover:bg-brand-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2 border-t border-border px-3 pt-4">
              <a href="#calculator" onClick={() => setOpen(false)} className="btn-primary w-full">
                Get an Estimate
              </a>
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="btn-outline w-full"
                aria-label={`Call ${COMPANY.name} on ${COMPANY.phoneDisplay}`}
              >
                <Phone className="size-4" aria-hidden /> {COMPANY.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
