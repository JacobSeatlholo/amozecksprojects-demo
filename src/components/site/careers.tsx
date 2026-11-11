"use client";

import { Mail, MessageCircle, GraduationCap } from "lucide-react";
import { COMPANY, whatsappUrl, CAREERS_CV_SUBJECT } from "@/lib/site-data";
import { useT } from "@/lib/lang-store";
import Reveal from "@/components/site/reveal";

export default function Careers() {
  const { t } = useT();
  const mailHref = `mailto:${COMPANY.email}?subject=${encodeURIComponent(CAREERS_CV_SUBJECT)}`;
  const waHref = whatsappUrl(t.careers.waMessage);

  return (
    <section id="careers" aria-labelledby="careers-title" className="bg-muted py-20 lg:py-24">
      <div className="wrap">
        <Reveal>
          <div className="grid items-center gap-8 rounded-2xl border border-border bg-white p-8 shadow-sm lg:grid-cols-[1fr,auto] lg:gap-12 lg:p-10">
            <div>
              <p className="kicker">{t.careers.kicker}</p>
              <h2 id="careers-title" className="mt-3 flex items-center gap-3 font-heading text-2xl font-bold sm:text-3xl">
                <GraduationCap className="size-7 text-brand-600" aria-hidden />
                {t.careers.heading}
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{t.careers.text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={mailHref} className="btn-primary">
                <Mail className="size-4" aria-hidden />
                {t.careers.emailCv}
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MessageCircle className="size-4" aria-hidden />
                {t.careers.whatsappUs}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
