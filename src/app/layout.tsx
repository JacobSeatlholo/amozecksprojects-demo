import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SiteHeader from "@/components/site/header";
import SiteFooter from "@/components/site/footer";
import FloatingWhatsApp from "@/components/site/floating-whatsapp";
import LanguageSync from "@/components/site/lang-sync";
import { COMPANY } from "@/lib/site-data";

/* Self-hosted fonts — replaces the original site's render-blocking
   Google Fonts request (3 families × every weight). */
const poppins = localFont({
  src: [
    { path: "../assets/fonts/poppins-500.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/poppins-600.woff2", weight: "600", style: "normal" },
    { path: "../assets/fonts/poppins-700.woff2", weight: "700", style: "normal" },
    { path: "../assets/fonts/poppins-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = localFont({
  src: [
    { path: "../assets/fonts/roboto-400.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/roboto-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-roboto",
  display: "swap",
});

const SITE_URL = "https://www.amozecksprojects.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Amozecks Projects | Do It Right The First Time — Building, Formwork & Renovations",
    template: "%s | Amozecks Projects",
  },
  description:
    "100% Black-owned, NHBRC-registered contractor serving Ballito, Durban, Kempton Park and Johannesburg. Building, formwork, renovations, plumbing, civil works and property development. Get an instant estimate on WhatsApp.",
  keywords: [
    "construction company South Africa",
    "builders Ballito",
    "builders Durban",
    "builders Kempton Park",
    "formwork specialists",
    "home renovations Johannesburg",
    "NHBRC registered contractor",
    "100% black owned construction",
    "plumbing Durban",
    "civil works Gauteng",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE_URL,
    siteName: COMPANY.name,
    title: "Amozecks Projects | Do It Right The First Time",
    description:
      "100% Black-owned, NHBRC-registered contractor in KwaZulu-Natal and Gauteng. Building, formwork, renovations, plumbing, civil works and property development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Modern residential construction by Amozecks Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amozecks Projects | Do It Right The First Time",
    description:
      "100% Black-owned, NHBRC-registered contractor in KwaZulu-Natal and Gauteng.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1f7a00",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${roboto.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <noscript>
          {/* Keep scroll-reveal content visible without JavaScript */}
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {/* Client component: skip link (localized) + <html lang>/title sync + persisted language rehydration */}
        <LanguageSync />
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <FloatingWhatsApp />
        <Toaster />
      </body>
    </html>
  );
}
