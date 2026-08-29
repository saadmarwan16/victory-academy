"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const whatsappUrl =
  "https://wa.me/905325639060?text=Merhaba%20Victory%20Academy%2C%20programlar%C4%B1n%C4%B1z%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 480);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <div className="floating-actions" role="group" aria-label="Hızlı erişim bağlantıları">
      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Victory Academy ile WhatsApp üzerinden iletişime geç"
        title="WhatsApp ile iletişime geç"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>

      <button
        className={`back-to-top${showBackToTop ? " is-visible" : ""}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Sayfanın başına dön"
        aria-hidden={!showBackToTop}
        title="Yukarı dön"
        tabIndex={showBackToTop ? 0 : -1}
      >
        <ArrowUp aria-hidden="true" />
      </button>
    </div>
  );
}
