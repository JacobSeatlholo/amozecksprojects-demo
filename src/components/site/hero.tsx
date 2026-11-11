import Image from "next/image";
import { ArrowRight, Calculator, BadgeCheck, ShieldCheck, Award, BadgePercent } from "lucide-react";
import heroHome from "@/assets/images/hero-home.webp";
import { HERO } from "@/lib/site-data";

const chipIcons = [ShieldCheck, BadgeCheck, BadgePercent, Award];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate">
      <Image
        src={heroHome}
        alt="Modern residential home built by Amozecks Projects"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {/* Accessibility + contrast overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/90 via-ink-950/70 to-ink-950/40" />

      <div className="wrap flex min-h-[88svh] flex-col justify-center py-24 sm:py-28">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
            {HERO.kicker}
          </p>
          <h1
            id="hero-title"
            className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
          >
            Do It <span className="text-brand-400">Right</span>
            <br />
            The First Time
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-200">{HERO.text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#calculator" className="btn-primary text-base sm:min-h-12">
              <Calculator className="size-5" aria-hidden />
              Get an Instant Estimate
            </a>
            <a href="#services" className="btn-outline-dark text-base sm:min-h-12">
              Explore Our Services
              <ArrowRight className="size-5" aria-hidden />
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-2.5" aria-label="Trust badges">
            {HERO.trustChips.map((chip, i) => {
              const Icon = chipIcons[i % chipIcons.length];
              return (
                <li
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur"
                >
                  <Icon className="size-4 text-brand-400" aria-hidden />
                  {chip}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
