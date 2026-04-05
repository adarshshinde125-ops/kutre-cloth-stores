"use client";

import { FormEvent, useState } from "react";
import { BrandHeader } from "@/components/brand-header";
import { phoneNumber, products, translations, type Language } from "@/data/store";

type CartState = Record<string, number>;

export function Storefront() {
  const [language, setLanguage] = useState<Language>("en");
  const [cart, setCart] = useState<CartState>({});
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerNote, setCustomerNote] = useState("");

  const dictionary = translations[language];
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
            <div className="hero-buttons">
              <a href="#collections" className="primary-btn">
                {dictionary.shopNow}
              </a>
              <a href="#order" className="secondary-btn">
                {dictionary.howToOrder}
              </a>
            </div>
            <div className="contact-strip">
              <span>{dictionary.whatsappLabel}</span>
              <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noreferrer">
                +91 90082 78110
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-badge">{dictionary.featured}</div>
            <div className="hero-card-art" aria-hidden="true">
              <span className="art-tag tag-one">{dictionary.ladiesWear}</span>
              <span className="art-tag tag-two">{dictionary.kidsWear}</span>
              <div className="art-swatch swatch-one" />
              <div className="art-swatch swatch-two" />
              <div className="art-swatch swatch-three" />
            </div>
            <div className="hero-card-copy">
              <h3>{dictionary.heroCardTitle}</h3>
              <p>{dictionary.heroCardText}</p>
            </div>
          </div>
        </section>
      </header>

      <main>
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

        <section className="catalog-layout">
          <div className="products-panel">
            <div className="product-grid">
              {products.map((product) => {
                const sizeText = product.sizes.length
                  ? `${dictionary.sizePrefix}: ${product.sizes.join(", ")}`
                  : "";

                return (
                  <article className="product-card" key={product.id}>
                    <div className="product-visual visual-pattern" style={{ background: product.theme }}>
                      <span className="product-badge">
                        {dictionary.productCategories[product.key]}
                      </span>
                    </div>
                    <h3>{product.names[language]}</h3>
                    <p className="product-copy">{product.descriptions[language]}</p>
                    <p className="product-sizes">{sizeText}</p>
                    <div className="product-meta">
                      <span className="product-price">{formatCurrency(product.price)}</span>
                      <span>{dictionary.productCategories[product.key]}</span>
                    </div>
                    <button type="button" onClick={() => addToCart(product.id)}>
                      {dictionary.addToCart}
                    </button>
                  </article>
                );
              })}
            </div>
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
      </main>
    </div>
  );
}
