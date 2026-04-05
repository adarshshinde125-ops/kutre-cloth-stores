import type { Metadata } from "next";
import Link from "next/link";
import { BrandHeader } from "@/components/brand-header";
import { phoneNumber } from "@/data/store";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kutre Cloth Stores for ladies and kids garments, WhatsApp ordering, and store visit details.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    url: `${siteUrl}/contact`,
    title: "Contact | Kutre Cloth Stores",
    description:
      "Reach Kutre Cloth Stores on WhatsApp or visit the store in Nesari, Gadhinglaj, Kolhapur."
  }
};

export default function ContactPage() {
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const mapLink =
    "https://www.google.com/maps/search/?api=1&query=Kutre+Cloth+Store+Bazar+Peth+Nesari+Tal+Gadhinglaj+Kolhapur";

  return (
    <div className="page-shell">
      <BrandHeader />
      <main className="contact-page">
        <section className="contact-hero">
          <p className="section-kicker">Contact</p>
          <h1>Visit the store or order quickly on WhatsApp.</h1>
          <p className="hero-text">
            Kutre Cloth Stores serves ladies and kids garments from Bazar Peth, Nesari. Customers
            can inquire about sarees, kurtis, frocks, kids wear, tops, and leggings directly.
          </p>
          <div className="hero-buttons">
            <a href={whatsappLink} className="primary-btn" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
            <a href={mapLink} className="secondary-btn" target="_blank" rel="noreferrer">
              Open Map
            </a>
          </div>
        </section>

        <section className="contact-grid">
          <article className="info-card">
            <p className="info-label">Phone</p>
            <h3>+91 90082 78110</h3>
            <p>Use WhatsApp for order confirmation, product inquiries, and stock checks.</p>
          </article>
          <article className="info-card">
            <p className="info-label">Address</p>
            <h3>Nesari, Kolhapur</h3>
            <p>Kutre Cloth Store, Bazar Peth, Nesari, Tal. Gadhinglaj, Kolhapur.</p>
          </article>
          <article className="info-card">
            <p className="info-label">Store Focus</p>
            <h3>Ladies &amp; Kids Wear</h3>
            <p>Popular categories include sarees, kurtis, frocks, kids wear, tops, and leggings.</p>
          </article>
        </section>

        <section className="contact-cta">
          <div className="info-card">
            <p className="info-label">Need Help?</p>
            <h3>Start with the storefront or message directly.</h3>
            <p>
              Browse the full collection on the home page, add items to the cart, and send the
              order to WhatsApp for confirmation.
            </p>
            <Link href="/" className="primary-btn">
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
