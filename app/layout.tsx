import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { SITE } from "@/lib/content";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const body = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "PetVet — Wound & Skin Care for Dogs & Cats",
    template: "%s | PetVet",
  },
  description: SITE.description,
  keywords: ["pet care", "dog wound care", "cat skin care", "pet first aid", "dog skin care", "pet health products", "PetVet"],
  applicationName: "PetVet",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "PetVet",
    title: "PetVet — Care for every paw, every day.",
    description: SITE.description,
    url: "/",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "PetVet — Care for every paw, every day.",
    description: SITE.description,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export const viewport: Viewport = {
  themeColor: "#1B3A8C",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#org`,
      name: "PetVet",
      url: SITE.url,
      slogan: SITE.tagline,
      description: SITE.description,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: "PetVet",
      publisher: { "@id": `${SITE.url}/#org` },
      inLanguage: "en",
    },
    {
      "@type": "Product",
      name: "PetVet Wound & Skin Care",
      description: "Gentle wound and skin care for minor cuts, scrapes and irritated skin in dogs and cats.",
      brand: { "@type": "Brand", name: "PetVet" },
      category: "Pet Health & Care",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
