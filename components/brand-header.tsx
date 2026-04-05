import Image from "next/image";
import Link from "next/link";

export function BrandHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-mark" aria-label="Kutre Cloth Stores home">
        <Image src="/logo-kutre.svg" alt="Kutre Cloth Stores logo" width={56} height={56} />
        <span className="brand-text">
          <strong>Kutre Cloth Stores</strong>
          <span>Ladies &amp; Kids Fashion Store</span>
        </span>
      </Link>
      <nav className="site-nav" aria-label="Primary">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
