import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandHeader } from "@/components/brand-header";
import { phoneNumber, products, translations, type Language } from "@/data/store";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {};
  }

  return {
    title: product.names.en,
    description: product.descriptions.en,
    alternates: {
      canonical: `/products/${product.slug}`
    },
    openGraph: {
      url: `${siteUrl}/products/${product.slug}`,
      title: product.names.en,
      description: product.descriptions.en,
      images: [product.image]
    }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const language: Language = "en";
  const dictionary = translations[language];
  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hello Kutre Cloth Stores, I want to order: ${product.names.en}`
  )}`;

  return (
    <div className="page-shell">
      <BrandHeader />
      <main className="product-page">
        <section className="product-detail-hero">
          <div className="product-detail-media">
            <Image
              src={product.image}
              alt={product.names.en}
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
              className="product-photo"
            />
          </div>

          <div className="product-detail-copy">
            <p className="section-kicker">{dictionary.detailTitle}</p>
            <h1>{product.names.en}</h1>
            <p className="product-detail-text">{product.details.en}</p>
            <div className="product-detail-price">{new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0
            }).format(product.price)}</div>
            <p className="product-detail-meta">{dictionary.productCategories[product.key]}</p>
            {product.sizes.length ? (
              <p className="product-detail-meta">
                {dictionary.sizePrefix}: {product.sizes.join(", ")}
              </p>
            ) : null}

            <div className="hero-buttons">
              <a href={whatsappUrl} className="primary-btn" target="_blank" rel="noreferrer">
                {dictionary.detailOrder}
              </a>
              <Link href="/" className="secondary-btn">
                {dictionary.detailBack}
              </Link>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">{dictionary.relatedTitle}</p>
              <h2>{dictionary.collectionsTitle}</h2>
            </div>
          </div>
          <div className="product-grid">
            {relatedProducts.map((item) => (
              <article className="product-card" key={item.id}>
                <div className="product-image-wrap">
                  <Image
                    src={item.image}
                    alt={item.names.en}
                    fill
                    sizes="(max-width: 980px) 100vw, 33vw"
                    className="product-photo"
                  />
                </div>
                <h3>{item.names.en}</h3>
                <p className="product-copy">{item.descriptions.en}</p>
                <div className="product-meta">
                  <span>{dictionary.productCategories[item.key]}</span>
                  <span className="product-price">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      maximumFractionDigits: 0
                    }).format(item.price)}
                  </span>
                </div>
                <Link href={`/products/${item.slug}`} className="secondary-btn full-width">
                  {dictionary.viewDetails}
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
