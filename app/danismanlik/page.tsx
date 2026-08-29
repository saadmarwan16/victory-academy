import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  CalendarCheck2,
  Check,
  ClipboardCheck,
  GraduationCap,
  Languages,
  Landmark,
  Map,
  MessageCircleMore,
  Plane,
  SearchCheck,
  Target,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Yurt Dışı Eğitim Danışmanlığı | Victory Academy",
  description:
    "İtalya başta olmak üzere yurt dışında eğitim hedefiniz için program araştırması, CEnT-S hazırlığı ve İngilizce yeterlilik yol haritası.",
  alternates: {
    canonical: "/danismanlik",
  },
  openGraph: {
    title: "Victory Academy Yurt Dışı Eğitim Danışmanlığı",
    description:
      "Yurt dışı eğitim hedefinizi doğru program, güçlü İngilizce ve planlı sınav hazırlığıyla gerçeğe dönüştürün.",
    url: "/danismanlik",
  },
};

const consultancyServices = [
  {
    icon: Target,
    title: "Hedef ve profil değerlendirmesi",
    text: "Akademik geçmişinizi, ilgi alanlarınızı, İngilizce seviyenizi ve eğitim hedefinizi birlikte değerlendiriyoruz.",
  },
  {
    icon: SearchCheck,
    title: "Program ve koşul araştırması",
    text: "Hedeflediğiniz üniversite ve bölümlerin güncel kabul, sınav ve dil koşullarını anlamanıza yardımcı oluyoruz.",
  },
  {
    icon: Languages,
    title: "İngilizce yeterlilik planı",
    text: "Mevcut seviyenizi belirleyip hedef programın istediği İngilizce yeterliliğine ulaşmanız için kişisel bir çalışma yolu oluşturuyoruz.",
  },
  {
    icon: BookOpenCheck,
    title: "Sınav hazırlığı",
    text: "CEnT-S, IELTS, TOEFL ve uygun diğer sınavlar için ders, deneme ve geri bildirim sürecini tek planda birleştiriyoruz.",
  },
  {
    icon: CalendarCheck2,
    title: "Takvim ve süreç takibi",
    text: "Önemli tarihleri, hazırlanacak belgeleri ve sınav adımlarını görünür bir yol haritasına dönüştürüyoruz.",
  },
  {
    icon: MessageCircleMore,
    title: "Süreç boyunca rehberlik",
    text: "Sorularınızı yanıtlıyor, ilerlemenizi takip ediyor ve değişen ihtiyaçlarınıza göre planınızı güncelliyoruz.",
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Hedefinizi belirleyelim",
    text: "Ülke, bölüm, bütçe ve zaman planınızı konuşarak gerçekçi bir başlangıç noktası oluşturuyoruz.",
  },
  {
    number: "02",
    title: "Gereklilikleri netleştirelim",
    text: "Hedef programların giriş sınavı, dil yeterliliği ve başvuru koşullarını birlikte inceliyoruz.",
  },
  {
    number: "03",
    title: "Hazırlık planını kuralım",
    text: "İngilizce ve sınav hazırlığını başvuru takviminizle uyumlu, ölçülebilir bir programa dönüştürüyoruz.",
  },
  {
    number: "04",
    title: "İlerlemenizi takip edelim",
    text: "Denemeler, geri bildirimler ve düzenli kontrollerle hedefe giden süreci birlikte yönetiyoruz.",
  },
];

const languageAdvantages = [
  "Başlangıç seviyesini ölçen kişisel değerlendirme",
  "Hedef sınava göre Reading, Writing, Listening ve Speaking çalışmaları",
  "Düzenli deneme sınavları ve ayrıntılı geri bildirim",
  "Başvuru takvimine uygun, ölçülebilir gelişim planı",
];

export default function ConsultancyPage() {
  return (
    <main>
      <ScrollReveal />
      <SiteHeader activePage="consultancy" />

      <section className="consultancy-hero">
        <div className="consultancy-hero-copy" data-reveal="left">
          <p className="section-kicker light">YURT DIŞI EĞİTİM DANIŞMANLIĞI</p>
          <h1>Yurt dışı eğitim hedefinizi <span>doğru bir planla</span> gerçeğe dönüştürün.</h1>
          <p>
            İtalya başta olmak üzere yurt dışında eğitim almak isteyen öğrenciler için
            hedef belirlemeden sınav ve İngilizce yeterlilik hazırlığına kadar bütüncül
            bir yol haritası sunuyoruz.
          </p>
          <div className="consultancy-hero-actions">
            <Link className="button button-primary" href="/#iletisim">
              Ücretsiz Ön Görüşme <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="consultancy-hero-link" href="#hizmetler">
              Nasıl yardımcı oluyoruz? <ArrowDown aria-hidden="true" />
            </Link>
          </div>
          <div className="consultancy-hero-tags" aria-label="Danışmanlık alanları">
            <span><Landmark aria-hidden="true" /> İtalya odağı</span>
            <span><BookOpenCheck aria-hidden="true" /> CEnT-S hazırlığı</span>
            <span><Languages aria-hidden="true" /> İngilizce yeterliliği</span>
          </div>
        </div>

        <div className="consultancy-route-card" data-reveal="right" aria-label="Yurt dışı eğitim yol haritası">
          <div className="route-card-top">
            <span><Plane aria-hidden="true" /> Eğitim yolculuğunuz</span>
            <strong>TR <ArrowRight aria-hidden="true" /> IT</strong>
          </div>
          <div className="route-destination">
            <span aria-hidden="true"><GraduationCap /></span>
            <div><small>HEDEF</small><h2>İtalya&apos;da üniversite</h2></div>
          </div>
          <div className="route-progress" aria-hidden="true"><i /></div>
          <ol className="route-steps">
            <li><span>01</span><p><strong>Profil</strong><small>Hedef ve ihtiyaç analizi</small></p><Check /></li>
            <li><span>02</span><p><strong>İngilizce</strong><small>Seviye ve yeterlilik planı</small></p><Check /></li>
            <li><span>03</span><p><strong>CEnT-S</strong><small>Sınav hazırlığı</small></p><Check /></li>
            <li><span>04</span><p><strong>Başvuru</strong><small>Takvim ve süreç takibi</small></p><ArrowUpRight /></li>
          </ol>
          <div className="route-card-note"><ClipboardCheck aria-hidden="true" /> Size özel, adım adım yol haritası</div>
        </div>
      </section>

      <section className="consultancy-intro section">
        <div data-reveal="left">
          <p className="section-kicker">BÜTÜNCÜL YAKLAŞIM</p>
          <h2>Sadece bir sınava değil, bütün yolculuğa hazırlanırsınız.</h2>
        </div>
        <div data-reveal="right">
          <p>
            Yurt dışında eğitim, birbirine bağlı birçok kararı doğru zamanda vermeyi
            gerektirir. Victory Academy; akademik hedefinizi, sınav hazırlığınızı ve
            İngilizce gelişiminizi tek bir plan içinde ele alır.
          </p>
          <p>
            Böylece hangi adımı neden attığınızı bilir, hazırlık sürecinizi daha net
            ve güvenli biçimde yönetirsiniz.
          </p>
        </div>
      </section>

      <section className="consultancy-services" id="hizmetler">
        <div className="consultancy-services-inner">
          <div className="consultancy-services-heading" data-reveal="up">
            <p className="section-kicker light">NELER SUNUYORUZ?</p>
            <h2>Hedefinizden kabul koşullarına uzanan planlı destek.</h2>
            <p>Her öğrenci için ihtiyaçlara, seviyeye ve hedef tarihe göre şekillenen kişisel bir süreç oluşturuyoruz.</p>
          </div>
          <div className="consultancy-service-grid">
            {consultancyServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <article key={service.title} data-reveal="up">
                  <span className="consultancy-service-number">{String(index + 1).padStart(2, "0")}</span>
                  <i aria-hidden="true"><ServiceIcon /></i>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="italy-focus section">
        <div className="italy-poster" data-reveal="left">
          <img src="/courses/cents.jpeg" alt="Victory Academy CEnT-S İtalya üniversite hazırlık programı" />
          <span><Plane aria-hidden="true" /> İtalya&apos;ya uzanan eğitim yolu</span>
        </div>
        <div className="italy-copy" data-reveal="right">
          <p className="section-kicker">İTALYA ODAĞI</p>
          <h2>CEnT-S ve İngilizce hazırlığını aynı hedefte buluşturuyoruz.</h2>
          <p>
            İtalya&apos;da İngilizce eğitim veren bir programa başvurmayı planlayan öğrenciler
            için yalnızca giriş sınavına çalışmak yeterli olmayabilir. Üniversitenin ve
            bölümün istediği İngilizce yeterliliğini de zamanında karşılamak gerekir.
          </p>
          <ul>
            <li><Check aria-hidden="true" /> Hedef programın güncel kabul koşullarını inceleme</li>
            <li><Check aria-hidden="true" /> CEnT-S için konu, soru ve süre yönetimi çalışmaları</li>
            <li><Check aria-hidden="true" /> Gerekli İngilizce seviyesine yönelik kişisel hazırlık</li>
            <li><Check aria-hidden="true" /> Sınav ve başvuru takvimini birlikte planlama</li>
          </ul>
          <Link className="button button-dark" href="/kurslar#cent-s">
            CEnT-S Kursunu İnceleyin <ArrowUpRight aria-hidden="true" />
          </Link>
          <p className="consultancy-disclaimer">
            Kabul, sınav ve dil koşulları üniversiteye ve programa göre değişebilir;
            başvuruda hedef kurumun güncel resmî ilanı esas alınmalıdır.
          </p>
        </div>
      </section>

      <section className="language-core">
        <div className="language-core-inner">
          <div className="language-core-copy" data-reveal="left">
            <p className="section-kicker light">SÜRECİN MERKEZİNDE İNGİLİZCE</p>
            <h2>Yeterlilik belgesi değil, üniversitede kullanacağınız güçlü bir dil.</h2>
            <p>
              İngilizce, başvuru koşullarını karşılamanın ötesinde dersleri anlamak,
              akademik metin yazmak ve yeni bir ülkede kendinizi güvenle ifade etmek
              için temel hazırlığınızdır.
            </p>
            <Link className="button button-primary" href="/kurslar">
              İngilizce Programlarını Görün <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="language-core-list" data-reveal="right">
            {languageAdvantages.map((advantage, index) => (
              <article key={advantage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{advantage}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="consultancy-journey section">
        <div className="consultancy-journey-heading" data-reveal="up">
          <p className="section-kicker">YOL HARİTANIZ</p>
          <h2>Dört adımda belirsizlikten net bir plana.</h2>
          <p>İlk görüşmeden hazırlık sürecine kadar her adımın amacını ve sıradaki görevinizi bilirsiniz.</p>
        </div>
        <div className="consultancy-journey-grid">
          {journeySteps.map((step, index) => (
            <article key={step.number} data-reveal="up">
              <div><span>{step.number}</span>{index < journeySteps.length - 1 ? <ArrowRight aria-hidden="true" /> : <GraduationCap aria-hidden="true" />}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="consultancy-cta">
        <div data-reveal="scale">
          <span className="consultancy-cta-icon" aria-hidden="true"><Map /></span>
          <p className="section-kicker light">İLK ADIM</p>
          <h2>Yurt dışı eğitim yol haritanızı birlikte oluşturalım.</h2>
          <p>Hedefinizi anlatın; seviyenize, sınavlarınıza ve zaman planınıza uygun ilk adımları birlikte belirleyelim.</p>
          <Link className="button button-primary" href="/#iletisim">
            Ücretsiz Ön Görüşme Planlayın <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
