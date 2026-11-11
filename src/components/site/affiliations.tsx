import Image from "next/image";
import affNhbrc from "@/assets/images/aff-nhbrc.webp";
import affSacpcmp from "@/assets/images/aff-sacpcmp.webp";
import affMbsa from "@/assets/images/aff-mbsa.webp";
import { AFFILIATIONS } from "@/lib/site-data";
import Reveal from "@/components/site/reveal";

const AFF_IMAGES = {
  nhbrc: affNhbrc,
  sacpcmp: affSacpcmp,
  mbsa: affMbsa,
} as const;

export default function Affiliations() {
  return (
    <section aria-labelledby="affiliations-title" className="border-y border-border bg-muted py-14">
      <div className="wrap">
        <Reveal>
          <h2
            id="affiliations-title"
            className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            Registered &amp; Affiliated With
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {AFFILIATIONS.map((a) => (
              <li
                key={a.srcKey}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-white px-6 py-7"
              >
                <Image
                  src={AFF_IMAGES[a.srcKey as keyof typeof AFF_IMAGES]}
                  alt={a.alt}
                  sizes="(min-width: 640px) 200px, 60vw"
                  className="h-auto w-[190px] object-contain"
                />
                <span className="text-center text-xs leading-snug text-muted-foreground">
                  {a.full}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
