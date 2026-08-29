import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  HeartHandshake,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import VerticalBrandLockup from "@/components/VerticalBrandLockup";

export const metadata: Metadata = {
  title: "Hakkımızda | Victory Academy",
  description:
    "Victory Academy'nin hikâyesini, misyonunu, vizyonunu, eğitim yaklaşımını ve öğrencilerine sunduğu değerleri keşfedin.",
  alternates: {
    canonical: "/hakkimizda",
  },
  openGraph: {
    title: "Hakkımızda | Victory Academy",
    description:
      "Victory Academy'nin hikâyesini, misyonunu, vizyonunu ve öğrenci odaklı eğitim yaklaşımını keşfedin.",
    url: "/hakkimizda",
  },
};

const approach = [
  { number: "01", title: "Doğru başlangıç", text: "Her öğrencinin mevcut düzeyini anlayarak gerçekçi ve ulaşılabilir bir başlangıç noktası belirleriz." },
  { number: "02", title: "Kişisel öğrenme planı", text: "Yaş, seviye ve hedefleri dikkate alarak öğrencinin ihtiyaçlarına uygun bir yol haritası oluştururuz." },
  { number: "03", title: "Aktif öğrenme", text: "Dört dil becerisini birlikte geliştiren, katılımı ve gerçek iletişimi destekleyen dersler tasarlarız." },
  { number: "04", title: "Sürekli gelişim", text: "Düzenli geri bildirim ve ölçülebilir hedeflerle ilerlemeyi görünür hâle getiririz." },
];

const values = [
  { icon: HeartHandshake, title: "Öğrenci odaklılık", text: "Her öğrencinin öğrenme biçimine, hızına ve hedeflerine saygı duyarız." },
  { icon: BadgeCheck, title: "Eğitimde kalite", text: "Cambridge English müfredatını güçlü bir öğretim yaklaşımıyla buluştururuz." },
  { icon: TrendingUp, title: "Gelişim", text: "Öğrencilerimizi yalnızca sınavlara değil, gelecekteki hedeflerine de hazırlarız." },
  { icon: ShieldCheck, title: "Güven", text: "Açık iletişim, düzenli geri bildirim ve destekleyici bir öğrenme ortamı sunarız." },
];

export default function AboutPage() {
  return (
    <main>
      <ScrollReveal />
      <SiteHeader activePage="about" />

      <section className="about-page-hero">
        <div className="about-page-hero-copy" data-reveal="left">
          <p className="section-kicker">VICTORY ACADEMY</p>
          <h1>Dil öğrenimini hedeflere ulaşan bir yolculuğa dönüştürüyoruz.</h1>
          <p>Öğrencilerin akademik ve profesyonel hedeflerine güvenle ilerlemesi için nitelikli İngilizce eğitimi, kişisel rehberlik ve güçlü bir öğrenme ortamı sunuyoruz.</p>
          <div className="about-hero-actions">
            <Link className="button button-primary" href="/#iletisim">Bizimle Tanışın <ArrowRight aria-hidden="true" /></Link>
            <Link className="text-link" href="#biz-kimiz">Hikâyemizi keşfedin <ArrowDown aria-hidden="true" /></Link>
          </div>
        </div>

        <div className="about-page-visual" data-reveal="right">
          <div className="about-logo-card">
            <span className="about-visual-label">Birlikte öğren. Güvenle ilerle.</span>
            <VerticalBrandLockup className="about-vertical-brand" />
            <div className="about-visual-points"><span>Cambridge müfredatı</span><span>8+ yaş</span><span>A1–C2</span></div>
          </div>
          <span className="about-shape about-shape-one" aria-hidden="true" />
          <span className="about-shape about-shape-two" aria-hidden="true" />
        </div>
      </section>

      <section className="identity-section section" id="biz-kimiz">
        <div className="identity-intro" data-reveal="up">
          <p className="section-kicker">BİZ KİMİZ?</p>
          <h2>Her öğrencinin potansiyeline inanan modern bir dil akademisiyiz.</h2>
        </div>
        <div className="identity-body">
          <div className="identity-copy" data-reveal="left">
            <p>Victory Academy; Cambridge English, IELTS, İtalya üniversite giriş hazırlığı ve Genel İngilizce alanlarında eğitim sunan, öğrenci merkezli bir dil akademisidir.</p>
            <p>Öğrenmenin herkeste aynı şekilde ilerlemediğini biliyoruz. Bu nedenle sürece seviye değerlendirmesiyle başlıyor, öğrencinin yaşına, ihtiyaçlarına ve hedeflerine uygun bir program belirliyoruz. Amacımız yalnızca İngilizce öğretmek değil; öğrencilerimize dili güvenle kullanabilecekleri kalıcı beceriler kazandırmaktır.</p>
          </div>
          <div className="identity-highlights" data-reveal="right">
            <article><strong>8+</strong><span>Yaş ve üzeri öğrenciler</span></article>
            <article><strong>A1–C2</strong><span>Başlangıçtan ileri seviyeye</span></article>
            <article><strong>4</strong><span>Hedef odaklı program alanı</span></article>
            <article><strong>1:1</strong><span>Kişisel seviye değerlendirmesi</span></article>
          </div>
        </div>
      </section>

      <section className="purpose-section">
        <div className="purpose-inner">
          <article className="purpose-card mission-card" data-reveal="left">
            <span className="purpose-number">01</span><p className="section-kicker light">MİSYONUMUZ</p>
            <h2>Öğrenciyi doğru eğitimle hedefine ulaştırmak.</h2>
            <p>Yüksek kaliteli, erişilebilir ve öğrenci odaklı İngilizce eğitimi sunarak her öğrencinin akademik, sosyal ve profesyonel yaşamında dili özgüvenle kullanmasını sağlamak.</p>
          </article>
          <article className="purpose-card vision-card" data-reveal="right">
            <span className="purpose-number">02</span><p className="section-kicker">VİZYONUMUZ</p>
            <h2>Öğrencilerin geleceğine yön veren güvenilir bir eğitim merkezi olmak.</h2>
            <p>Denizli&apos;de güçlü yerel bağlara sahip, çağdaş öğretim yöntemleriyle öğrencilerini uluslararası hedeflere hazırlayan ve eğitim kalitesiyle örnek gösterilen bir dil akademisi olmak.</p>
          </article>
        </div>
      </section>

      <section className="approach-section section">
        <div className="section-heading" data-reveal="up">
          <div><p className="section-kicker">EĞİTİM YAKLAŞIMIMIZ</p><h2>Başarıyı tesadüfe bırakmayan dört adım.</h2></div>
          <p>Öğrencinin bulunduğu seviyeden hedeflediği noktaya ilerlemesini açık, planlı ve destekleyici bir süreçle yönetiyoruz.</p>
        </div>
        <div className="approach-grid">
          {approach.map((item) => <article key={item.number} data-reveal="up"><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <section className="history-section">
        <div className="history-inner">
          <div className="history-heading" data-reveal="left">
            <p className="section-kicker light">HİKÂYEMİZ</p><h2>Bir hedefle başlayan, öğrencilerle büyüyen bir yolculuk.</h2>
            <p>Victory Academy&apos;nin hikâyesi, İngilizce eğitimini daha kişisel, daha anlaşılır ve daha sonuç odaklı hâle getirme düşüncesiyle başladı.</p>
          </div>
          <div className="history-timeline" data-reveal="right">
            <article><span>Başlangıç</span><div><h3>Öğrenciyi merkeze alan bir fikir</h3><p>Her öğrencinin farklı bir hedefi ve öğrenme yolu olduğu anlayışı akademimizin temelini oluşturdu.</p></div></article>
            <article><span>Gelişim</span><div><h3>Hedeflere göre çeşitlenen programlar</h3><p>Cambridge English, IELTS ve üniversite hazırlık programlarıyla farklı ihtiyaçlara kapsamlı çözümler geliştirdik.</p></div></article>
            <article><span>Bugün</span><div><h3>Aynı amaçla ilerliyoruz</h3><p>Her öğrencinin doğru seviyeden başlayıp İngilizce hedeflerine güvenle ulaşması için çalışmaya devam ediyoruz.</p></div></article>
          </div>
        </div>
      </section>

      <section className="values-section section">
        <div className="values-heading" data-reveal="up"><p className="section-kicker">DEĞERLERİMİZ</p><h2>Her dersin arkasında güçlü ilkeler var.</h2></div>
        <div className="values-grid">
          {values.map((value) => {
            const ValueIcon = value.icon;
            return <article key={value.title} data-reveal="up"><span aria-hidden="true"><ValueIcon /></span><h3>{value.title}</h3><p>{value.text}</p></article>;
          })}
        </div>
      </section>

      <section className="about-cta">
        <div data-reveal="scale"><p className="section-kicker light">SIRADAKİ ADIM</p><h2>Sizi ve hedeflerinizi tanımaya hazırız.</h2><p>Ücretsiz deneme dersiyle Victory Academy deneyimini yakından keşfedin.</p><Link className="button button-primary" href="/#iletisim">Ücretsiz Deneme Dersi Planlayın <ArrowRight aria-hidden="true" /></Link></div>
      </section>

      <SiteFooter />
    </main>
  );
}
