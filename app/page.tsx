"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Check,
  CircleCheck,
  ClipboardCheck,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  MoveHorizontal,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
import { FaGoogle } from "react-icons/fa6";
import ScrollReveal from "@/components/ScrollReveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import VerticalBrandLockup from "@/components/VerticalBrandLockup";

const programs = [
  {
    number: "01",
    accent: "cyan",
    image: "/program-cambridge.png",
    imageAlt: "Cambridge International Examinations ve Cambridge International School logosu",
    title: "Cambridge English",
    text: "Cambridge müfredatına dayalı, yaşa ve seviyeye uygun kapsamlı İngilizce eğitimi.",
    tags: ["8+ yaş", "Tüm seviyeler"],
  },
  {
    number: "02",
    accent: "purple",
    image: "/program-ielts.jpg",
    imageAlt: "British Council IELTS logosu",
    title: "IELTS Hazırlık",
    text: "Dört dil becerisine odaklanan sınav stratejileri, düzenli pratik ve hedef odaklı hazırlık.",
    tags: ["Akademik", "Profesyonel"],
  },
  {
    number: "03",
    accent: "orange",
    image: "/program-cents.png",
    imageAlt: "CEnT-S sınavı görseli",
    title: "İtalya Üniversite Hazırlık",
    text: "İtalya’daki üniversitelere giriş sürecinde ihtiyaç duyulan akademik ve dil desteği.",
    tags: ["Üniversite", "Sınav hazırlığı"],
  },
  {
    number: "04",
    accent: "green",
    image: "/program-general-english.png",
    imageAlt: "General English programı görseli",
    title: "Genel İngilizce",
    text: "Başlangıçtan ileri seviyeye, iletişim becerilerini güvenle geliştiren dinamik dersler.",
    tags: ["Başlangıç", "İleri seviye"],
  },
];

const steps = [
  {
    number: "01",
    title: "Tanışalım",
    text: "Hedeflerinizi dinleyelim ve merak ettiğiniz tüm soruları yanıtlayalım.",
  },
  {
    number: "02",
    title: "Seviyenizi belirleyelim",
    text: "Kısa değerlendirmeyle sizin ya da çocuğunuzun doğru başlangıç noktasını bulalım.",
  },
  {
    number: "03",
    title: "Programınızı seçelim",
    text: "Yaşınıza, seviyenize ve hedefinize en uygun öğrenme planını oluşturalım.",
  },
  {
    number: "04",
    title: "Birlikte ilerleyelim",
    text: "Düzenli dersler ve geri bildirimlerle gelişiminizi görünür hâle getirelim.",
  },
];

const faqs = [
  {
    question: "Hangi kursları sunuyorsunuz?",
    answer:
      "Cambridge English hazırlık, IELTS, İtalya üniversite giriş hazırlığı ve farklı seviyelere uygun Genel İngilizce programları sunuyoruz.",
  },
  {
    question: "Kurslarınız kimler için uygundur?",
    answer:
      "Kurslarımız İngilizce öğrenmek veya mevcut seviyesini geliştirmek isteyen her seviyeden öğrenci için tasarlanmıştır.",
  },
  {
    question: "Hangi yaş gruplarını kabul ediyorsunuz?",
    answer: "8 yaş ve üzerindeki öğrencileri kabul ediyoruz.",
  },
  {
    question: "Sınıflarınız başlangıç mı, ileri seviye mi?",
    answer:
      "Hem başlangıç hem de ileri seviye öğrenciler için uygun sınıflarımız bulunmaktadır.",
  },
  {
    question: "Çocuğum için uygun seviyeyi nasıl belirliyorsunuz?",
    answer:
      "Her öğrenciye uyguladığımız giriş değerlendirmesiyle en uygun seviyeyi belirliyor ve doğru sınıfa yerleştiriyoruz.",
  },
  {
    question: "Ücretsiz deneme dersi sunuyor musunuz?",
    answer: "Evet, kayıt öncesinde ücretsiz deneme dersi sunuyoruz.",
  },
  {
    question: "Kayıt yaptırmadan önce merkezinizi ziyaret edebilir miyim?",
    answer:
      "Evet. Bizi ziyaret edebilir, eğitim ortamımızı görebilir ve programlarımız hakkında yüz yüze bilgi alabilirsiniz.",
  },
  {
    question: "Hangi İngilizce müfredatını kullanıyorsunuz?",
    answer: "Derslerimizde Cambridge English müfredatını takip ediyoruz.",
  },
  {
    question: "Cambridge English müfredatını takip ediyor musunuz?",
    answer: "Evet, eğitim programlarımız Cambridge English müfredatıyla uyumludur.",
  },
];

const googleReviews = [
  {
    name: "Arda Ege YILDIRIM",
    initials: "AE",
    date: "1 yıl önce",
    summary:
      "Bir ay içinde B2 Cambridge sertifikası alarak yurt dışında eğitim hedefine yaklaştığını ve kurumu tavsiye ettiğini paylaşıyor.",
  },
  {
    name: "seyma kilinc",
    initials: "ŞK",
    date: "2 yıl önce",
    summary:
      "Gülcan Hoca'nın kızını yurt dışı üniversite sınavlarına profesyonel ve adım adım hazırladığını belirtiyor.",
  },
  {
    name: "AYTÜL DOĞAN",
    initials: "AD",
    date: "2 yıl önce",
    summary:
      "Dört yıllık eğitim sürecinin kızının İngilizcesine, özellikle uluslararası eğitmenlerle konuşma becerisine büyük katkı sağladığını söylüyor.",
  },
  {
    name: "azra kilinc",
    initials: "AK",
    date: "2 yıl önce",
    summary:
      "B1 seviyesinde başladığını ve Gülcan Hoca'nın özenli yaklaşımıyla belirgin şekilde ilerlediğini anlatıyor.",
  },
  {
    name: "Nisan Zeybek",
    initials: "NZ",
    date: "1 yıl önce",
    summary:
      "Çocukluğundan beri devam ettiği kurumun İngilizceyi sevdirdiğini, seviyesini geliştirdiğini ve Cambridge belgeleri için yönlendirdiğini belirtiyor.",
  },
  {
    name: "DrHasan Doğan",
    initials: "HD",
    date: "2 yıl önce",
    summary:
      "Denizli'de farklı yaşlara ve mesleklere uygun, uluslararası deneyime dayanan böyle bir eğitim seçeneğinin bulunmasını değerli buluyor.",
  },
  {
    name: "Erva Nil AYDIN",
    initials: "EN",
    date: "2 yıl önce",
    summary:
      "Beş yıllık eğitim sürecinde Cambridge sınavlarına hazırlanıp sertifikalarını başarıyla aldıklarını paylaşıyor.",
  },
  {
    name: "Metin süzen",
    initials: "MS",
    date: "3 yıl önce",
    summary:
      "Kızına İngilizceyi sevdiren; etkinlikler ve oyunlarla öğrenmeyi kolaylaştıran titiz ve gayretli bir kurum olduğunu söylüyor.",
  },
  {
    name: "Dilruba Öz",
    initials: "DÖ",
    date: "2 yıl önce",
    summary:
      "Cambridge sınavına hazırlanıp başarılı olduğunu ve konuşma becerisinin belirgin şekilde geliştiğini belirterek kurumu tavsiye ediyor.",
  },
  {
    name: "Beyiyy ocel",
    initials: "BO",
    date: "2 yıl önce",
    summary:
      "Yaklaşık altı yıllık deneyiminde, başlangıç seviyesi ne olursa olsun öğrencilerin güçlü biçimde ilerleyebildiğini ifade ediyor.",
  },
];

function ReviewCard({
  review,
  index,
}: {
  review: (typeof googleReviews)[number];
  index: number;
}) {
  return (
    <article className="review-card">
      <div className="review-card-top">
        <span className={`review-avatar avatar-${(index % 6) + 1}`} aria-hidden="true">
          {review.initials}
        </span>
        <div>
          <h3>{review.name}</h3>
          <p className="google-review-source"><FaGoogle aria-hidden="true" /> Google yorum özeti</p>
        </div>
        <span className="review-quote" aria-hidden="true">”</span>
      </div>
      <div className="review-meta">
        <span className="review-stars" aria-label="5 üzerinden 5 yıldız">★★★★★</span>
        <span>{review.date}</span>
      </div>
      <p className="review-summary">{review.summary}</p>
      <span className="review-verified"><i aria-hidden="true"><Check /></i> Google&apos;da yayınlandı</span>
    </article>
  );
}

function GoogleReviewsMarquee() {
  return (
    <div
      className="reviews-marquee"
      role="region"
      aria-label="Victory Academy Google yorumları"
      tabIndex={0}
    >
      <div className="reviews-track">
        {[false, true].map((duplicate) => (
          <div className="reviews-group" aria-hidden={duplicate || undefined} key={String(duplicate)}>
            {googleReviews.map((review, index) => (
              <ReviewCard review={review} index={index} key={`${duplicate}-${review.name}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [formStatus, setFormStatus] = useState("");

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const contact = String(form.get("contact") || "");
    const age = String(form.get("age") || "Belirtilmedi");
    const program = String(form.get("program") || "Belirtilmedi");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Victory Academy bilgi talebi — ${name}`);
    const body = encodeURIComponent(
      `Ad Soyad: ${name}\nİletişim: ${contact}\nÖğrenci yaşı: ${age}\nİlgilenilen program: ${program}\n\nMesaj:\n${message}`,
    );

    setFormStatus("E-posta uygulamanız açılıyor. Mesajı göndererek talebinizi tamamlayabilirsiniz.");
    window.location.href = `mailto:gulcan@victoryacademyenglish.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <ScrollReveal />
      <SiteHeader />

      <section className="hero" id="anasayfa">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-mark" aria-hidden="true"><GraduationCap /></span>
            Modern dil eğitimi
          </div>
          <h1>
            Hedeflerinize giden yol <span>İngilizceyle</span> başlar.
          </h1>
          <p className="hero-lead">
            Cambridge English, IELTS ve İtalya üniversite giriş hazırlığında
            deneyimli eğitmenler ve size özel öğrenme planıyla yanınızdayız.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#iletisim">
              Ücretsiz Deneme Dersi <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="text-link" href="/kurslar">
              Programları inceleyin <ArrowDown aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-proof" aria-label="Öne çıkan özellikler">
            <div>
              <strong>8+</strong>
              <span>Yaş ve üzeri</span>
            </div>
            <div>
              <strong>A1–C2</strong>
              <span>Tüm seviyeler</span>
            </div>
            <div>
              <strong>Ücretsiz</strong>
              <span>Deneme dersi</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Victory Academy öğrenci başarı yolculuğu">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="journey-card">
            <div className="journey-topline">
              <span>Size özel öğrenme yolculuğu</span>
              <span className="status-pill"><i /> Aktif</span>
            </div>
            <div className="logo-stage">
              <span className="spark spark-one" aria-hidden="true"><Sparkles /></span>
              <VerticalBrandLockup className="home-vertical-brand" />
              <span className="spark spark-two" aria-hidden="true"><Sparkles /></span>
            </div>
            <div className="journey-steps">
              <div>
                <span>01</span>
                <p><strong>Seviye tespiti</strong><small>Doğru başlangıç</small></p>
              </div>
              <div>
                <span>02</span>
                <p><strong>Kişisel plan</strong><small>Net hedefler</small></p>
              </div>
              <div>
                <span>03</span>
                <p><strong>Düzenli gelişim</strong><small>Ölçülebilir başarı</small></p>
              </div>
            </div>
          </div>
          <div className="floating-note note-cambridge">
            <span><GraduationCap aria-hidden="true" /></span>
            <p><strong>Cambridge</strong><small>Müfredat temelli</small></p>
          </div>
          <div className="floating-note note-trial">
            <span><CircleCheck aria-hidden="true" /></span>
            <p><strong>Ücretsiz</strong><small>Deneme dersi</small></p>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Victory Academy avantajları" data-reveal="scale">
        <div><BookOpenCheck aria-hidden="true" /> Cambridge İngilizce müfredatı</div>
        <div><ClipboardCheck aria-hidden="true" /> Kişisel seviye değerlendirmesi</div>
        <div><UsersRound aria-hidden="true" /> Deneyimli eğitmenler</div>
        <div><Target aria-hidden="true" /> Hedef odaklı eğitim</div>
      </section>

      <section className="programs section" id="programlar">
        <div className="section-heading" data-reveal="up">
          <div>
            <p className="section-kicker">PROGRAMLARIMIZ</p>
            <h2>Hedefinize uygun programı bulun.</h2>
          </div>
          <p>
            Her öğrencinin yolculuğu farklıdır. Seviyenizi, yaşınızı ve
            hedefinizi dikkate alarak sizin için doğru programı belirliyoruz.
          </p>
        </div>
        <div className="program-grid">
          {programs.map((program) => {
            return <article className={`program-card ${program.accent}`} key={program.title} data-reveal="up">
              <div className="program-number">{program.number}</div>
              <div className="program-image">
                <img src={program.image} alt={program.imageAlt} loading="lazy" />
              </div>
              <h3>{program.title}</h3>
              <p>{program.text}</p>
              <div className="program-tags">
                {program.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <Link href="/kurslar">Detayları inceleyin <ArrowUpRight aria-hidden="true" /></Link>
            </article>
          })}
        </div>
        <div className="programs-all-action" data-reveal="up">
          <Link className="button button-dark" href="/kurslar">Tüm Kurslarımızı Görün <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="about" id="neden-biz">
        <div className="about-inner">
          <div className="about-copy" data-reveal="left">
            <p className="section-kicker light">NEDEN BİZ?</p>
            <h2>İngilizce hedefiniz için doğru başlangıç, güçlü bir yol haritası.</h2>
            <p>
              Her öğrencinin öğrenme hızı, seviyesi ve hedefi farklıdır. Bu nedenle
              Cambridge English müfredatını kişisel seviye değerlendirmesi,
              deneyimli eğitmen desteği ve düzenli gelişim takibiyle birleştiriyoruz.
            </p>
            <Link className="button button-light" href="/hakkimizda">
              Victory Academy&apos;yi Tanıyın <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="advantage-grid">
            <article data-reveal="up">
              <span className="advantage-icon cyan-icon"><BookOpenCheck aria-hidden="true" /></span>
              <h3>Cambridge müfredatı</h3>
              <p>Uluslararası standartlarla uyumlu, sistemli ve güvenilir eğitim.</p>
            </article>
            <article data-reveal="up">
              <span className="advantage-icon orange-icon"><ClipboardCheck aria-hidden="true" /></span>
              <h3>Kişisel seviye tespiti</h3>
              <p>Her öğrenci için doğru sınıfı ve başlangıç noktasını belirleriz.</p>
            </article>
            <article data-reveal="up">
              <span className="advantage-icon green-icon"><TrendingUp aria-hidden="true" /></span>
              <h3>Ölçülebilir gelişim</h3>
              <p>Düzenli geri bildirimlerle öğrencinin ilerlemesini görünür kılarız.</p>
            </article>
            <article data-reveal="up">
              <span className="advantage-icon pink-icon"><UserRoundCheck aria-hidden="true" /></span>
              <h3>Deneyimli eğitmenler</h3>
              <p>Öğrenciyi merkeze alan, destekleyici ve etkili dersler sunarız.</p>
            </article>
            <article data-reveal="up">
              <span className="advantage-icon purple-icon"><Layers3 aria-hidden="true" /></span>
              <h3>Her seviyeye uygun</h3>
              <p>8 yaş ve üzeri, başlangıçtan ileri seviyeye uygun programlar.</p>
            </article>
            <article data-reveal="up">
              <span className="advantage-icon teal-icon"><CircleCheck aria-hidden="true" /></span>
              <h3>Ücretsiz deneme dersi</h3>
              <p>Kayıt öncesinde ortamı ve eğitim yaklaşımımızı yakından tanıyın.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="process section" aria-labelledby="process-title">
        <div className="process-heading" data-reveal="up">
          <div>
            <p className="section-kicker">BAŞLANGIÇ YOLCULUĞU</p>
            <h2 id="process-title">Victory Academy’ye nasıl başlarsınız?</h2>
          </div>
          <p>Dört basit adımda size en uygun öğrenme yolunu birlikte belirleyelim.</p>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <article key={step.number} data-reveal="up">
              <div className="step-top">
                <span>{step.number}</span>
                {index < steps.length - 1 && <i aria-hidden="true"><ArrowRight /></i>}
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reviews-section" id="yorumlar" aria-labelledby="reviews-title">
        <div className="reviews-container">
          <div className="reviews-header" data-reveal="up">
            <div className="reviews-heading">
              <p className="section-kicker">ÖĞRENCİ VE VELİ DENEYİMLERİ</p>
              <h2 id="reviews-title">Google yorumlarında Victory Academy.</h2>
              <p>
                Öğrencilerimizin ve velilerimizin eğitim deneyimlerinden öne çıkan
                görüşleri keşfedin.
              </p>
            </div>
            <div className="reviews-header-actions">
              <div className="reviews-score" aria-label="Google'da 5 üzerinden 4,9 puan">
                <strong>4,9</strong>
                <span><i aria-hidden="true">★★★★★</i><small>31 değerlendirme</small></span>
              </div>
              <a
                className="button button-dark reviews-button"
                href="https://www.google.com/maps/search/?api=1&query=Victory%20Academy%20Dil%20Kursu%20Pamukkale%20Denizli"
                target="_blank"
                rel="noreferrer"
              >
                Google Yorumlarını Görün <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <div data-reveal="up">
            <GoogleReviewsMarquee />
            <p className="reviews-hint">
              <MoveHorizontal aria-hidden="true" /> İncelemek için üzerine gelin veya mobilde kaydırın.
            </p>
          </div>

          <div className="reviews-mobile-action" data-reveal="up">
            <a
              className="button button-dark reviews-button"
              href="https://www.google.com/maps/search/?api=1&query=Victory%20Academy%20Dil%20Kursu%20Pamukkale%20Denizli"
              target="_blank"
              rel="noreferrer"
            >
              Google Yorumlarını Görün <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="faq-section" id="sss">
        <div className="faq-inner">
          <aside data-reveal="left">
            <p className="section-kicker">MERAK ETTİKLERİNİZ</p>
            <h2>Sıkça sorulan sorular.</h2>
            <p>
              Aradığınız yanıtı bulamadınız mı? Bize yazın; programlarımız ve
              kayıt süreci hakkında size yardımcı olalım.
            </p>
            <Link className="text-link" href="#iletisim">Sorunuzu bize iletin <ArrowRight aria-hidden="true" /></Link>
          </aside>
          <div className="faq-list" data-reveal="right">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {faq.question}
                  <i aria-hidden="true"><Plus /></i>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="iletisim">
        <div className="contact-inner">
          <div className="contact-copy" data-reveal="left">
            <p className="section-kicker light">İLK ADIMI ATIN</p>
            <h2>İngilizce hedefinizi birlikte gerçekleştirelim.</h2>
            <p>
              Ücretsiz deneme dersi, seviye değerlendirmesi veya programlarımız
              hakkında bilgi almak için formu doldurun.
            </p>
            <div className="contact-details">
              <a href="mailto:gulcan@victoryacademyenglish.com">
                <span><Mail aria-hidden="true" /></span>
                <p><small>E-posta</small><strong>gulcan@victoryacademyenglish.com</strong></p>
              </a>
              <a className="phone-card" href="tel:+905325639060">
                <span><Phone aria-hidden="true" /></span>
                <p><small>Telefon</small><strong>+90 532 563 90 60</strong></p>
              </a>
              <div className="address-card">
                <span><MapPin aria-hidden="true" /></span>
                <p>
                  <small>Adres</small>
                  <strong>Mehmetçik, 2581. Sk. No:11/A, 20190 Pamukkale/Denizli</strong>
                </p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleContact} data-reveal="right">
            <div className="form-heading">
              <span>Ücretsiz</span>
              <h3>Bilgi ve deneme dersi talebi</h3>
              <p>Size ulaşabilmemiz için bilgilerinizi bırakın.</p>
            </div>
            <div className="form-row">
              <label>
                Ad Soyad
                <input name="name" type="text" placeholder="Adınız ve soyadınız" required />
              </label>
              <label>
                Telefon veya e-posta
                <input name="contact" type="text" placeholder="Size nasıl ulaşalım?" required />
              </label>
            </div>
            <div className="form-row">
              <label>
                Öğrenci yaşı
                <select name="age" defaultValue="">
                  <option value="" disabled>Yaş seçin</option>
                  <option>8–11</option>
                  <option>12–15</option>
                  <option>16–18</option>
                  <option>18+</option>
                </select>
              </label>
              <label>
                İlgilendiğiniz program
                <select name="program" defaultValue="">
                  <option value="" disabled>Program seçin</option>
                  <option>Cambridge English</option>
                  <option>IELTS Hazırlık</option>
                  <option>İtalya Üniversite Hazırlık</option>
                  <option>Genel İngilizce</option>
                </select>
              </label>
            </div>
            <label>
              Mesajınız
              <textarea name="message" rows={4} placeholder="Hedefiniz veya sormak istedikleriniz..." />
            </label>
            <label className="consent">
              <input type="checkbox" required />
              <span>İletişim talebim kapsamında verdiğim bilgilerin kullanılmasını kabul ediyorum.</span>
            </label>
            <button className="button button-primary form-submit" type="submit">
              Talebimi Oluştur <ArrowRight aria-hidden="true" />
            </button>
            {formStatus && <p className="form-status" role="status">{formStatus}</p>}
          </form>
        </div>
      </section>

      <section className="ministry-approval" aria-labelledby="ministry-approval-title">
        <div className="ministry-approval-card" data-reveal="up">
          <div className="ministry-approval-copy">
            <p className="section-kicker">RESMÎ STANDARTLARDA EĞİTİM</p>
            <h2 id="ministry-approval-title">T.C. Millî Eğitim Bakanlığı onaylı</h2>
            <p>
              Victory Academy, Millî Eğitim Bakanlığı tarafından belirlenen
              standartlara ve yönetmeliklere uygun olarak faaliyet gösteren bir
              eğitim kurumudur.
            </p>
            <div className="approval-details" aria-label="Kurum onayı özellikleri">
              <span><i aria-hidden="true"><Check /></i> MEB standartları</span>
              <span><i aria-hidden="true"><Check /></i> Resmî müfredata uygunluk</span>
            </div>
          </div>

          <div className="ministry-badge" aria-label="Millî Eğitim Bakanlığı onaylı kurum">
            <div className="ministry-badge-ring" aria-hidden="true">
              <span>MEB</span>
              <i><ShieldCheck aria-hidden="true" /></i>
            </div>
            <strong>ONAYLI KURUM</strong>
            <small>T.C. Millî Eğitim Bakanlığı</small>
          </div>
        </div>
      </section>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Victory Academy Dil Kursu",
            description:
              "Cambridge English, IELTS ve İtalya üniversite giriş sınavlarına hazırlık sunan modern dil akademisi.",
            email: "gulcan@victoryacademyenglish.com",
            telephone: "+90 532 563 90 60",
            sameAs: ["https://www.instagram.com/victoryacademyyy"],
            hasMap:
              "https://www.google.com/maps/search/?api=1&query=Victory%20Academy%20Dil%20Kursu%20Pamukkale%20Denizli",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Mehmetçik, 2581. Sk. No:11/A",
              postalCode: "20190",
              addressLocality: "Pamukkale",
              addressRegion: "Denizli",
              addressCountry: "TR",
            },
          }),
        }}
      />
    </main>
  );
}
