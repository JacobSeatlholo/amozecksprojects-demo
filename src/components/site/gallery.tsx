import Image, { type StaticImageData } from "next/image";
import heroHome from "@/assets/images/hero-home.webp";
import aboutPlan from "@/assets/images/about-plan.webp";
import galleryHat from "@/assets/images/gallery-hat.webp";
import galleryPool from "@/assets/images/gallery-pool.webp";
import galleryLevel from "@/assets/images/gallery-level.webp";
import gallerySite from "@/assets/images/gallery-site.webp";
import { GALLERY } from "@/lib/site-data";
import Reveal from "@/components/site/reveal";

const IMAGES: Record<string, { src: StaticImageData; tall?: boolean }> = {
  hero: { src: heroHome, tall: true },
  plan: { src: aboutPlan, tall: true },
  hat: { src: galleryHat, tall: true },
  pool: { src: galleryPool },
  level: { src: galleryLevel },
  site: { src: gallerySite },
};

export default function Gallery() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-white py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="kicker justify-center">Projects</p>
          <h2 id="projects-title" className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
            Our Work in Pictures
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A look at the sites, standards and craftsmanship that define Amozecks Projects —
            photographs featured on amozecksprojects.co.za.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
          {GALLERY.map((g, i) => {
            const img = IMAGES[g.srcKey];
            return (
              <Reveal key={g.srcKey} delay={(i % 3) * 80}>
                <figure
                  className={`group relative overflow-hidden rounded-2xl ${
                    i === 0 || i === 3 ? "aspect-[4/3.4]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={g.alt}
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/85 to-transparent p-4 pt-10 text-sm font-semibold text-white">
                    {g.caption}
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
