import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main" data-reveal="up">
        <div className="footer-brand">
          <img src="/victory-emblem.png" alt="Victory Academy logosu" />
          <p>İngilizce hedeflerinize giden yolda güvenilir eğitim ortağınız.</p>
        </div>
        <div>
          <h3>Kurslarımız</h3>
          <Link href="/kurslar#cambridge">Cambridge English</Link>
          <Link href="/kurslar#cent-s">CEnT-S Hazırlık</Link>
          <Link href="/kurslar#ielts">IELTS Hazırlık</Link>
          <Link href="/kurslar#ilkokul">İlkokul İngilizce</Link>
          <Link href="/kurslar#sat">SAT Hazırlık</Link>
          <Link href="/kurslar#toefl">TOEFL Hazırlık</Link>
        </div>
        <div>
          <h3>Victory Academy</h3>
          <Link href="/danismanlik">Yurt Dışı Danışmanlığı</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/#neden-biz">Neden Biz?</Link>
          <Link href="/#yorumlar">Google Yorumları</Link>
          <Link href="/#sss">Sıkça Sorulan Sorular</Link>
          <Link href="/#iletisim">Ücretsiz Deneme Dersi</Link>
          <a href="mailto:gulcan@victoryacademyenglish.com">Bize Ulaşın</a>
        </div>
        <div className="footer-cta">
          <h3>Hazır mısınız?</h3>
          <p>Doğru seviyeden başlayın, hedefinize güvenle ilerleyin.</p>
          <Link className="button button-primary" href="/#iletisim">Hemen Başlayın <ArrowRight aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="footer-connect" data-reveal="up" aria-label="Sosyal medya ve iletişim bağlantıları">
        <a className="social-link instagram-link" href="https://www.instagram.com/victoryacademyyy" target="_blank" rel="noreferrer" aria-label="Victory Academy Instagram hesabını aç">
          <span><FaInstagram aria-hidden="true" /></span><p><small>Instagram</small><strong>@victoryacademyyy</strong></p><i aria-hidden="true"><ArrowUpRight /></i>
        </a>
        <a className="social-link whatsapp-link" href="https://wa.me/905325639060?text=Merhaba%20Victory%20Academy%2C%20programlar%C4%B1n%C4%B1z%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer" aria-label="Victory Academy WhatsApp sohbetini aç">
          <span><FaWhatsapp aria-hidden="true" /></span><p><small>WhatsApp</small><strong>Mesaj gönderin</strong></p><i aria-hidden="true"><ArrowUpRight /></i>
        </a>
        <a className="social-link email-link" href="mailto:gulcan@victoryacademyenglish.com" aria-label="Victory Academy'ye e-posta gönder">
          <span><Mail aria-hidden="true" /></span><p><small>E-posta</small><strong>Bize yazın</strong></p><i aria-hidden="true"><ArrowRight /></i>
        </a>
        <a className="social-link phone-link" href="tel:+905325639060" aria-label="Victory Academy'yi ara">
          <span><Phone aria-hidden="true" /></span><p><small>Telefon</small><strong>Hemen arayın</strong></p><i aria-hidden="true"><ArrowRight /></i>
        </a>
        <a className="social-link location-link" href="https://www.google.com/maps/search/?api=1&query=Victory%20Academy%20Dil%20Kursu%20Pamukkale%20Denizli" target="_blank" rel="noreferrer" aria-label="Victory Academy Dil Kursu Google işletme profilini aç">
          <span><MapPin aria-hidden="true" /></span><p><small>Konum</small><strong>Yol tarifi alın</strong></p><i aria-hidden="true"><ArrowUpRight /></i>
        </a>
      </div>
      <div className="footer-bottom" data-reveal="up">
        <p>© 2026 Victory Academy. Tüm hakları saklıdır.</p>
        <p>Cambridge müfredatı · 8+ yaş · Tüm seviyeler</p>
      </div>
    </footer>
  );
}
