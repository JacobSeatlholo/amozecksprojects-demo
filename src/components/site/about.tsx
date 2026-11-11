import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import aboutPlan from "@/assets/images/about-plan.webp";
import { ABOUT } from "@/lib/site-data";
import Reveal from "@/components/site/reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-20 lg:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={aboutPlan}
              alt="Amozecks Projects team reviewing construction plans on site"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>
          {/* Verified badges overlay (replaces the original's broken 0-value counters) */}
          <div className="absolute -bottom-6 left-4 right-4 flex flex-wrap gap-3 sm:left-8 sm:right-auto">
            <span className="inline-flex items-center gap-2 rounded-xl bg-ink-900 px-4 py-3 text-sm font-semibold text-white shadow-lg">
              <CheckCircle2 className="size-5 text-brand-400" aria-hidden />
              100% Black Owned
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-lg">
              <CheckCircle2 className="size-5" aria-hidden />
              NHBRC Registered
            </span>
          </div>
        </Reveal>

        <Reveal delay={120} className="pt-8 lg:pt-0">
          <p className="kicker">About us</p>
          <h2 id="about-title" className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
            {ABOUT.heading}
          </h2>
          {ABOUT.paragraphs.map((p) => (
            <p key={p.slice(0, 32)} className="mt-5 leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}

          <ul className="mt-8 space-y-5">
            {ABOUT.values.map((v) => (
              <li key={v.title} className="flex gap-3.5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden />
                <div>
                  <h3 className="font-heading text-base font-semibold text-ink-900">{v.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Real, verifiable stats — no more “0 Finished Projects” */}
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {ABOUT.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-3xl font-extrabold text-brand-600 sm:text-4xl">
                  {s.value}
                </dd>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
