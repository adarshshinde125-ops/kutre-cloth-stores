import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const siteName = "Kutre Cloth Stores";
const description =
  "Kutre Cloth Stores offers ladies and kids garments with easy WhatsApp ordering in English and Marathi.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`
  },
  description,
  applicationName: siteName,
  keywords: [
    "Kutre Cloth Stores",
    "ladies garments",
    "kids wear",
    "sarees",
    "kurtis",
    "Kolhapur clothing store",
    "WhatsApp order store"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteName,
    description,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-store.svg",
        width: 1200,
        height: 630,
        alt: "Kutre Cloth Stores"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/og-store.svg"]
  },
  icons: {
    icon: "/logo-kutre.svg",
    shortcut: "/logo-kutre.svg",
    apple: "/logo-kutre.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
