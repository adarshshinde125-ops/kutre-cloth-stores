"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BrandHeader } from "@/components/brand-header";
import { phoneNumber, products, translations, type Language, type ProductCategory } from "@/data/store";

type CartState = Record<string, number>;
type CategoryFilter = ProductCategory | "all";

export function Storefront() {
  const [language, setLanguage] = useState<Language>("en");
  const [cart, setCart] = useState<CartState>({});
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerNote, setCustomerNote] = useState("");

  const dictionary = translations[language];
  const categoryOptions: CategoryFilter[] = ["all", "sarees", "kurtis", "frocks", "kids", "tops", "leggings"];
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const categoryMatch = activeCategory === "all" || product.key === activeCategory;
    const searchMatch =
      !normalizedSearch ||
      product.names[language].toLowerCase().includes(normalizedSearch) ||
      product.descriptions[language].toLowerCase().includes(normalizedSearch) ||
      dictionary.productCategories[product.key].toLowerCase().includes(normalizedSearch);

    return categoryMatch && searchMatch;
  });
  const cartEntries = Object.entries(cart).filter(([, quantity]) => quantity > 0);
  const cartCount = cartEntries.reduce((sum, [, quantity]) => sum + quantity, 0);
  const total = cartEntries.reduce((sum, [productId, quantity]) => {
    const product = products.find((item) => item.id === productId);
    return product ? sum + product.price * quantity : sum;
  }, 0);

  function formatCurrency(amount: number) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(amount);
  }

  function updateCart(productId: string, nextQuantity: number) {
    setCart((current) => {
      if (nextQuantity <= 0) {
        const updated = { ...current };
        delete updated[productId];
        return updated;
      }

      return {
        ...current,
        [productId]: nextQuantity
      };
    });
  }

  function addToCart(productId: string) {
    updateCart(productId, (cart[productId] ?? 0) + 1);
  }

  function buildWhatsappMessage() {
    const lines = [
      dictionary.orderMessageIntro,
      "",
      `${dictionary.orderMessageName}: ${customerName}`,
      `${dictionary.orderMessagePhone}: ${customerPhone}`,
      `${dictionary.orderMessageAddress}: ${customerAddress}`,
      "",
      `${dictionary.orderMessageItems}:`
    ];

    cartEntries.forEach(([productId, quantity]) => {
      const product = products.find((item) => item.id === productId);

      if (product) {
        lines.push(
          `- ${product.names[language]} x ${quantity} = ${formatCurrency(product.price * quantity)}`
        );
      }
    });

    lines.push("");
    lines.push(`${dictionary.orderMessageTotal}: ${formatCurrency(total)}`);

    if (customerNote.trim()) {
      lines.push(`${dictionary.orderMessageNote}: ${customerNote.trim()}`);
    }

    return lines.join("\n");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!cartEntries.length) {
      window.alert(dictionary.orderAlertEmpty);
      return;
    }

    if (!customerName.trim() || !customerPhone.trim() || !customerAddress.trim()) {
      window.alert(dictionary.orderAlertFields);
      return;
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(buildWhatsappMessage())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="page-shell">
      <BrandHeader />
      <header className="hero">
        <section className="hero-content">
          <div className="hero-copy">
            <div className="topbar-actions">
              <button
                className={`lang-btn ${language === "en" ? "is-active" : ""}`}
                onClick={() => setLanguage("en")}
                type="button"
              >
                English
              </button>
              <button
                className={`lang-btn ${language === "mr" ? "is-active" : ""}`}
                onClick={() => setLanguage("mr")}
                type="button"
              >
                मराठी
              </button>
            </div>
            <p className="hero-kicker">{dictionary.heroKicker}</p>
            <h2>{dictionary.heroTitle}</h2>
            <p className="hero-text">{dictionary.heroText}</p>
            <p className="hero-subtext">{dictionary.heroSubtext}</p>
            <div className="hero-buttons">
              <a href="#collections" className="primary-btn">
                {dictionary.shopNow}
              </a>
              <a href="#order" className="secondary-btn">
                {dictionary.howToOrder}
              </a>
              <a href={`tel:+91${phoneNumber.slice(2)}`} className="secondary-btn">
                {dictionary.callNow}
              </a>
            </div>
            <div className="contact-strip">
              <span>{dictionary.whatsappLabel}</span>
              <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noreferrer">
                +91 90082 78110
              </a>
            </div>
            <div className="trust-row">
              <span>{dictionary.trustOne}</span>
              <span>{dictionary.trustTwo}</span>
              <span>{dictionary.trustThree}</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-badge">{dictionary.featured}</div>
            <div className="hero-card-art" aria-hidden="true">
              <span className="art-tag tag-one">{dictionary.ladiesWear}</span>
              <span className="art-tag tag-two">{dictionary.kidsWear}</span>
              <div className="art-glow glow-one" />
              <div className="art-glow glow-two" />
              <div className="art-swatch swatch-one" />
              <div className="art-swatch swatch-two" />
              <div className="art-swatch swatch-three" />
            </div>
            <div className="hero-card-copy">
              <h3>{dictionary.heroCardTitle}</h3>
              <p>{dictionary.heroCardText}</p>
            </div>
            <div className="hero-stats">
              <div>
                <span>{dictionary.statsYearsLabel}</span>
                <strong>{dictionary.statsYearsValue}</strong>
              </div>
              <div>
                <span>{dictionary.statsOrdersLabel}</span>
                <strong>{dictionary.statsOrdersValue}</strong>
              </div>
              <div>
                <span>{dictionary.statsVisitLabel}</span>
                <strong>{dictionary.statsVisitValue}</strong>
              </div>
            </div>
          </div>
        </section>
        <div className="hero-marquee">
          <span>{dictionary.productCategories.sarees}</span>
          <span>{dictionary.productCategories.kurtis}</span>
          <span>{dictionary.productCategories.frocks}</span>
          <span>{dictionary.productCategories.kids}</span>
          <span>{dictionary.productCategories.tops}</span>
          <span>{dictionary.productCategories.leggings}</span>
        </div>
      </header>

      <main>
        <section className="banner-section">
          <div className="banner-copy">
            <p className="section-kicker">{dictionary.featured}</p>
            <h2>{dictionary.bannerTitle}</h2>
            <p>{dictionary.bannerText}</p>
            <div className="trust-row">
              <span>{dictionary.bannerChipOne}</span>
              <span>{dictionary.bannerChipTwo}</span>
              <span>{dictionary.bannerChipThree}</span>
            </div>
          </div>
          <div className="banner-stack">
            <div className="banner-card banner-card-one">
              <Image
                src={products[0].image}
                alt={products[0].names[language]}
                fill
                sizes="(max-width: 980px) 100vw, 30vw"
                className="product-photo"
              />
            </div>
            <div className="banner-card banner-card-two">
              <Image
                src={products[3].image}
                alt={products[3].names[language]}
                fill
                sizes="(max-width: 980px) 100vw, 24vw"
                className="product-photo"
              />
            </div>
          </div>
        </section>

        <section className="info-grid">
          <article className="info-card">
            <p className="info-label">{dictionary.visitUs}</p>
            <h3>{dictionary.addressTitle}</h3>
            <p>{dictionary.addressText}</p>
          </article>
          <article className="info-card">
            <p className="info-label">{dictionary.easyOrders}</p>
            <h3>{dictionary.orderModeTitle}</h3>
            <p>{dictionary.orderModeText}</p>
          </article>
          <article className="info-card">
            <p className="info-label">{dictionary.sizesAvailable}</p>
            <h3>{dictionary.sizeTitle}</h3>
            <p>{dictionary.sizeText}</p>
          </article>
        </section>

        <section id="collections" className="section-heading">
          <div>
            <p className="section-kicker">{dictionary.collectionsKicker}</p>
            <h2>{dictionary.collectionsTitle}</h2>
          </div>
          <div className="section-pill">{dictionary.placeholderNote}</div>
        </section>

        <section className="filter-panel">
          <div>
            <p className="section-kicker">{dictionary.browseByCategory}</p>
          </div>
          <label className="search-field">
            <span>{dictionary.searchLabel}</span>
            <input
              type="search"
              placeholder={dictionary.searchPlaceholder}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>
          <div className="filter-chips">
            {categoryOptions.map((category) => {
              const label =
                category === "all"
                  ? dictionary.allProducts
                  : dictionary.productCategories[category];

              return (
                <button
                  key={category}
                  type="button"
                  className={`filter-chip ${activeCategory === category ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </section>

        <section className="catalog-layout">
          <div className="products-panel">
            {visibleProducts.length ? (
              <div className="product-grid">
                {visibleProducts.map((product) => {
                const sizeText = product.sizes.length
                  ? `${dictionary.sizePrefix}: ${product.sizes.join(", ")}`
                  : "";

                return (
                  <article className="product-card" key={product.id}>
                    <div className="product-image-wrap product-image-home">
                      <Image
                        src={product.image}
                        alt={product.names[language]}
                        fill
                        sizes="(max-width: 980px) 100vw, 40vw"
                        className="product-photo"
                      />
                    </div>
                    <div className="product-visual visual-pattern" style={{ background: product.theme }}>
                      <div className="product-card-top">
                        <span className="product-badge">
                          {dictionary.productCategories[product.key]}
                        </span>
                        <span className="product-price-chip">{formatCurrency(product.price)}</span>
                      </div>
                    </div>
                    <h3>{product.names[language]}</h3>
                    <p className="product-copy">{product.descriptions[language]}</p>
                    <p className="product-sizes">{sizeText}</p>
                    <div className="product-meta">
                      <span>{dictionary.productCategories[product.key]}</span>
                      <span className="product-price">{formatCurrency(product.price)}</span>
                    </div>
                    <div className="product-actions">
                      <button type="button" onClick={() => addToCart(product.id)}>
                        {dictionary.addToCart}
                      </button>
                      <Link href={`/products/${product.slug}`} className="secondary-btn full-width">
                        {dictionary.viewDetails}
                      </Link>
                    </div>
                  </article>
                );
                })}
              </div>
            ) : (
              <div className="empty-results">{dictionary.noResults}</div>
            )}
          </div>

          <aside className="cart-panel">
            <div className="cart-header">
              <div>
                <p className="section-kicker">{dictionary.cartKicker}</p>
                <h2>{dictionary.cartTitle}</h2>
              </div>
              <span className="cart-count">{cartCount}</span>
            </div>

            <div className="cart-items">
              {!cartEntries.length ? (
                <p className="empty-cart">{dictionary.emptyCart}</p>
              ) : (
                cartEntries.map(([productId, quantity]) => {
                  const product = products.find((item) => item.id === productId);

                  if (!product) {
                    return null;
                  }

                  return (
                    <article className="cart-item" key={productId}>
                      <div>
                        <h4>{product.names[language]}</h4>
                        <p>
                          {formatCurrency(product.price)} | {dictionary.cartQty}: {quantity}
                        </p>
                      </div>
                      <div className="qty-controls">
                        <button
                          type="button"
                          onClick={() => updateCart(productId, quantity - 1)}
                        >
                          -
                        </button>
                        <strong>{quantity}</strong>
                        <button
                          type="button"
                          onClick={() => updateCart(productId, quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </article>
                  );
                })
              )}
            </div>

            <div className="cart-footer">
              <div className="total-row">
                <span>{dictionary.totalLabel}</span>
                <strong>{formatCurrency(total)}</strong>
              </div>
              <a className="secondary-btn full-width" href="#order">
                {dictionary.continueToOrder}
              </a>
            </div>
          </aside>
        </section>

        <section className="info-grid" style={{ marginTop: 28 }}>
          <article className="info-card">
            <p className="info-label">{dictionary.deployLabel}</p>
            <h3>{dictionary.deployTitle}</h3>
            <p>{dictionary.deployText}</p>
          </article>
        </section>

        <section className="benefits-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">{dictionary.benefitsKicker}</p>
              <h2>{dictionary.benefitsTitle}</h2>
            </div>
          </div>
          <div className="info-grid">
            <article className="info-card">
              <p className="info-label">01</p>
              <h3>{dictionary.benefitOneTitle}</h3>
              <p>{dictionary.benefitOneText}</p>
            </article>
            <article className="info-card">
              <p className="info-label">02</p>
              <h3>{dictionary.benefitTwoTitle}</h3>
              <p>{dictionary.benefitTwoText}</p>
            </article>
            <article className="info-card">
              <p className="info-label">03</p>
              <h3>{dictionary.benefitThreeTitle}</h3>
              <p>{dictionary.benefitThreeText}</p>
            </article>
          </div>
        </section>

        <section id="order" className="order-section">
          <div className="order-copy">
            <p className="section-kicker">{dictionary.orderKicker}</p>
            <h2>{dictionary.orderTitle}</h2>
            <p>{dictionary.orderText}</p>
            <ol className="steps-list">
              <li>{dictionary.stepOne}</li>
              <li>{dictionary.stepTwo}</li>
              <li>{dictionary.stepThree}</li>
            </ol>
          </div>

          <form className="order-form" onSubmit={handleSubmit}>
            <label>
              <span>{dictionary.nameLabel}</span>
              <input
                type="text"
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                required
              />
            </label>
            <label>
              <span>{dictionary.phoneLabel}</span>
              <input
                type="tel"
                value={customerPhone}
                onChange={(event) => setCustomerPhone(event.target.value)}
                required
              />
            </label>
            <label>
              <span>{dictionary.addressLabel}</span>
              <textarea
                rows={4}
                value={customerAddress}
                onChange={(event) => setCustomerAddress(event.target.value)}
                required
              />
            </label>
            <label>
              <span>{dictionary.noteLabel}</span>
              <textarea
                rows={3}
                placeholder={dictionary.notePlaceholder}
                value={customerNote}
                onChange={(event) => setCustomerNote(event.target.value)}
              />
            </label>
            <button type="submit" className="primary-btn full-width">
              {dictionary.sendOrder}
            </button>
          </form>
        </section>

        <section className="faq-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">{dictionary.faqKicker}</p>
              <h2>{dictionary.faqTitle}</h2>
            </div>
            <Link href="/contact" className="secondary-btn">
              {dictionary.visitContact}
            </Link>
          </div>

          <div className="faq-list">
            <article className="faq-card">
              <h3>{dictionary.faqOneQuestion}</h3>
              <p>{dictionary.faqOneAnswer}</p>
            </article>
            <article className="faq-card">
              <h3>{dictionary.faqTwoQuestion}</h3>
              <p>{dictionary.faqTwoAnswer}</p>
            </article>
            <article className="faq-card">
              <h3>{dictionary.faqThreeQuestion}</h3>
              <p>{dictionary.faqThreeAnswer}</p>
            </article>
          </div>
        </section>
      </main>

      <a
        className="floating-whatsapp"
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </div>
  );
}
