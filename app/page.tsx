import type { Metadata } from "next";
import { Storefront } from "@/components/storefront";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop ladies and kids garments from Kutre Cloth Stores with bilingual browsing and WhatsApp order confirmation.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: siteUrl,
    title: "Kutre Cloth Stores",
    description:
      "Ladies and kids garments with WhatsApp ordering from Kutre Cloth Stores in Nesari, Kolhapur."
  }
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: "Kutre Cloth Stores",
    description:
      "Ladies and kids garments with WhatsApp ordering from Kutre Cloth Stores in Nesari, Kolhapur.",
    telephone: "+91 90082 78110",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bazar Peth, Nesari",
      addressLocality: "Gadhinglaj",
      addressRegion: "Maharashtra",
      postalCode: "",
      addressCountry: "IN"
    },
    url: siteUrl,
    image: `${siteUrl}/og-store.svg`,
    sameAs: [`https://wa.me/919008278110`]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Storefront />
    </>
  );
}
