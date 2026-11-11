import Image from "next/image";
import {
  Hammer,
  Layers,
  Paintbrush,
  Wrench,
  HardHat,
  Building2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import svcBuilding from "@/assets/images/svc-building.webp";
import svcFormwork from "@/assets/images/svc-formwork.webp";
import svcRenovations from "@/assets/images/svc-renovations.webp";
import { SERVICES, type ServiceItem } from "@/lib/site-data";
import type { ServiceKey } from "@/lib/quote";
import Reveal from "@/components/site/reveal";
import ServiceCta from "@/components/site/service-cta";

const IMAGES = {
  building: { src: svcBuilding, alt: "Bricklaying work in progress on an Amozecks building site" },
  formwork: { src: svcFormwork, alt: "Worker pouring concrete into formwork structures" },
  renovations: {
    src: svcRenovations,
    alt: "Renovation team member ready to start work on site",
  },
} as const;

const ICONS: Record<NonNullable<ServiceItem["icon"]>, LucideIcon> = {
  hammer: Hammer,
  layers: Layers,
  paint: Paintbrush,
  wrench: Wrench,
  "hard-hat": HardHat,
  building: Building2,
};

function ctaKey(id: string): ServiceKey {
  return id as ServiceKey;
}

export default function Services() {
  const photoServices = SERVICES.filter((s) => s.imageKey);
  const iconServices = SERVICES.filter((s) => !s.imageKey);

  return (
    <section id="services" aria-labelledby="services-title" className="bg-muted py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="kicker justify-center">Services</p>
          <h2 id="services-title" className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
            Quality Construction. Honest Service. Great Value.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Six core services delivered across KwaZulu-Natal and Gauteng — tap any service to get an
            instant, indicative estimate on WhatsApp.
          </p>
        </Reveal>

        {/* Featured services with real site photography */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photoServices.map((s, i) => {
            const img = IMAGES[s.imageKey as keyof typeof IMAGES];
            return (
              <Reveal key={s.id} delay={i * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-xl font-bold text-ink-900">{s.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                    <ServiceCta service={ctaKey(s.id)} label={s.name} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Remaining services */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {iconServices.map((s, i) => {
            const Icon = ICONS[s.icon!];
            return (
              <Reveal key={s.id} delay={i * 90}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold text-ink-900">{s.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                  <ServiceCta service={ctaKey(s.id)} label={s.name} />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
