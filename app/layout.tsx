import type { Metadata, Viewport } from "next";
import { Caveat, DM_Sans, Lilita_One, Oswald } from "next/font/google";
import { CARE, SITE } from "@/lib/data";
import { StoreProvider } from "@/components/Store";
import "./globals.css";

const lilita = Lilita_One({ subsets: ["latin"], weight: "400", variable: "--font-lilita", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-oswald", display: "swap" });
const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-dm", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], weight: "600", variable: "--font-caveat", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "PetVet — Pet care, from eyes to paws", template: "%s | PetVet" },
  description: SITE.description,
  keywords: ["pet care", "HOCl pet spray", "dog paw cleaner", "dog dental gel", "pet eye and ear cleaner", "itchy skin gel for dogs", "soft dog treats", "cat care", "PetVet"],
  applicationName: "PetVet",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "PetVet", title: "PetVet — Pet care, from eyes to paws", description: SITE.description, url: "/", locale: "en_IN" },
  twitter: { card: "summary_large_image", title: "PetVet — Pet care, from eyes to paws", description: SITE.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};
export const viewport: Viewport = { themeColor: "#173798", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE.url}/#org`, name: "PetVet", url: SITE.url, slogan: "vet-smart. pet-loved.", logo: `${SITE.url}/brand/petvet-logo-cobalt.svg`, description: SITE.description },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: "PetVet", publisher: { "@id": `${SITE.url}/#org` }, inLanguage: "en" },
    ...CARE.map((p) => ({ "@type": "Product", name: `PetVet ${p.name}`, description: p.desc, brand: { "@type": "Brand", name: "PetVet" }, category: "Pet Health & Care", image: `${SITE.url}/images/hero.webp` })),
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lilita.variable} ${oswald.variable} ${dm.variable} ${caveat.variable}`}>
      <body>
        <StoreProvider>{children}</StoreProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
