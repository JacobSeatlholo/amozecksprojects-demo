import {
  Phone,
  MessageCircle,
  Mail,
  Facebook,
  MapPin,
  Clock,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { COMPANY, whatsappUrl } from "@/lib/site-data";
import Reveal from "@/components/site/reveal";

interface Channel {
  key: string;
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
  description: string;
}

const CHANNELS: Channel[] = [
  {
    key: "call",
    label: "Call Us",
    value: COMPANY.phoneDisplay,
    href: `tel:${COMPANY.phoneTel}`,
    icon: Phone,
    description: "Mon–Fri, 9:00 AM – 5:00 PM",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: COMPANY.phoneDisplay,
    href: whatsappUrl(COMPANY.whatsappGreeting),
    icon: MessageCircle,
    external: true,
    description: "Fastest response — send a message anytime",
  },
  {
    key: "email",
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    icon: Mail,
    description: "For quotes, tenders and general enquiries",
  },
  {
    key: "facebook",
    label: "Facebook",
    value: "amozecksprojects",
    href: COMPANY.facebook,
    icon: Facebook,
    external: true,
    description: "Follow our latest projects and updates",
  },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="kicker justify-center">Contact us</p>
          <h2 id="contact-title" className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
            Let’s Talk About Your Project
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Request a firm quote, book a site assessment, or simply ask a question — every channel
            below reaches the real Amozecks Projects team.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.key} delay={i * 80}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:border-brand-500 hover:shadow-md"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 flex items-center gap-1.5 font-heading text-base font-bold text-ink-900">
                    {c.label}
                    {c.external && <ExternalLink className="size-3.5 text-muted-foreground" aria-hidden />}
                  </h3>
                  <p className="mt-1.5 break-all text-sm font-semibold text-brand-700">{c.value}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 grid gap-5 rounded-2xl border border-border bg-muted p-6 sm:grid-cols-3 sm:p-8">
            {COMPANY.addresses.map((a) => (
              <div key={a.label} className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden />
                <div>
                  <h3 className="font-heading text-sm font-bold text-ink-900">{a.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden />
              <div>
                <h3 className="font-heading text-sm font-bold text-ink-900">Operating Hours</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{COMPANY.hours}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
