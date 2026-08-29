"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

type SiteHeaderProps = {
  activePage?: "home" | "about" | "courses" | "consultancy";
};

export default function SiteHeader({ activePage = "home" }: SiteHeaderProps) {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const closeMobileMenu = () => {
    if (mobileMenuRef.current) mobileMenuRef.current.open = false;
  };

  return (
    <>
      <div className="announcement">
        <span>2026–2027 kayıtları başladı</span>
        <span className="announcement-dot" aria-hidden="true" />
        <Link href="/#iletisim">Ücretsiz deneme dersinizi planlayın</Link>
      </div>

      <header className="site-header">
        <Link className="brand" href="/" aria-label="Victory Academy ana sayfa">
          <img src="/victory-emblem.png" alt="" />
          <span className="brand-lockup">
            <strong className="brand-victory">VICTORY</strong>
            <span className="brand-academy-row">
              <i aria-hidden="true" />
              <b>Academy</b>
              <i aria-hidden="true" />
            </span>
            <small className="brand-course">İNGİLİZCE KURSU</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Ana menü">
          <Link className={activePage === "home" ? "is-active" : undefined} href="/" aria-current={activePage === "home" ? "page" : undefined}>Ana Sayfa</Link>
          <Link className={activePage === "courses" ? "is-active" : undefined} href="/kurslar" aria-current={activePage === "courses" ? "page" : undefined}>Kurslarımız</Link>
          <Link className={activePage === "consultancy" ? "is-active" : undefined} href="/danismanlik" aria-current={activePage === "consultancy" ? "page" : undefined}>Danışmanlık</Link>
          <Link href="/#neden-biz">Neden Biz?</Link>
          <Link href="/#yorumlar">Yorumlar</Link>
          <Link className={activePage === "about" ? "is-active" : undefined} href="/hakkimizda" aria-current={activePage === "about" ? "page" : undefined}>Hakkımızda</Link>
          <Link href="/#sss">Sıkça Sorulanlar</Link>
        </nav>

        <Link className="button button-small button-dark" href="/#iletisim">
          Bize Ulaşın <ArrowUpRight aria-hidden="true" />
        </Link>

        <details className="mobile-menu" ref={mobileMenuRef}>
          <summary aria-label="Ana menüyü aç veya kapat">
            <Menu className="menu-open-icon" aria-hidden="true" />
            <X className="menu-close-icon" aria-hidden="true" />
          </summary>
          <nav aria-label="Mobil menü">
            <Link href="/" onClick={closeMobileMenu}>Ana Sayfa</Link>
            <Link href="/kurslar" onClick={closeMobileMenu}>Kurslarımız</Link>
            <Link href="/danismanlik" onClick={closeMobileMenu}>Yurt Dışı Danışmanlığı</Link>
            <Link href="/#neden-biz" onClick={closeMobileMenu}>Neden Biz?</Link>
            <Link href="/#yorumlar" onClick={closeMobileMenu}>Yorumlar</Link>
            <Link href="/hakkimizda" onClick={closeMobileMenu}>Hakkımızda</Link>
            <Link href="/#sss" onClick={closeMobileMenu}>Sıkça Sorulanlar</Link>
            <Link href="/#iletisim" onClick={closeMobileMenu}>Bize Ulaşın</Link>
          </nav>
        </details>
      </header>
    </>
  );
}
