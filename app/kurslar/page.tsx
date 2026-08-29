import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Kurslarımız | Victory Academy",
  description:
    "Victory Academy Cambridge, CEnT-S, IELTS, ilkokul İngilizce, SAT ve TOEFL hazırlık kurslarını keşfedin.",
  alternates: {
    canonical: "/kurslar",
  },
  openGraph: {
    title: "Victory Academy Kursları",
    description:
      "Cambridge, CEnT-S, IELTS, ilkokul İngilizce, SAT ve TOEFL programlarıyla hedefinize uygun eğitimi bulun.",
    url: "/kurslar",
  },
};

type Course = {
  id: string;
  number: string;
  accent: "cyan" | "green" | "pink" | "orange" | "purple" | "teal";
  label: string;
  title: string;
  image: string;
  alt: string;
  summary: string;
  audience: string;
  focus: string[];
  tags: string[];
  note?: string;
};

const courses: Course[] = [
  {
    id: "cambridge",
    number: "01",
    accent: "cyan",
    label: "Uluslararası İngilizce",
    title: "Cambridge English",
    image: "/courses/cambridge.png",
    alt: "Victory Academy Cambridge hazırlık kursu duyurusu",
    summary:
      "İngilizce seviyesini uluslararası standartlarda geliştirmek ve Cambridge sınavlarına güvenle hazırlanmak isteyen öğrenciler için sistemli bir program.",
    audience: "8 yaş ve üzeri, başlangıçtan ileri seviyeye tüm öğrenciler",
    focus: [
      "Okuma, yazma, dinleme ve konuşma becerileri",
      "Seviyeye uygun sınav tekniği ve soru pratiği",
      "Düzenli gelişim takibi ve geri bildirim",
    ],
    tags: ["8+ yaş", "Tüm seviyeler", "4 beceri"],
  },
  {
    id: "cent-s",
    number: "02",
    accent: "green",
    label: "İtalya Üniversite Hazırlığı",
    title: "CEnT-S Hazırlık",
    image: "/courses/cents.jpeg",
    alt: "Victory Academy CEnT-S İtalya üniversite giriş sınavı hazırlık kursu duyurusu",
    summary:
      "İtalya'da İngilizce yürütülen mühendislik, ekonomi, eczacılık ve diğer bilim odaklı lisans programlarına başvurmayı planlayan öğrenciler için hedefli hazırlık.",
    audience: "CEnT-S isteyen İtalyan üniversitelerine başvuracak öğrenciler",
    focus: [
      "Matematik ve metin-veri üzerinden akıl yürütme",
      "Biyoloji, kimya ve fizik alanlarında soru pratiği",
      "Süre yönetimi, deneme sınavı ve sınav stratejisi",
    ],
    tags: ["CISIA", "Sayısal alanlar", "Sınav stratejisi"],
    note: "Başvuru koşulları üniversite ve bölüme göre değişebilir; hedef programın güncel kabul ilanı esas alınmalıdır.",
  },
  {
    id: "ielts",
    number: "03",
    accent: "pink",
    label: "Akademik İngilizce",
    title: "IELTS Hazırlık",
    image: "/courses/ielts.jpeg",
    alt: "Victory Academy IELTS hazırlık kursu duyurusu",
    summary:
      "Yurt dışı eğitim, kariyer veya akademik hedefleri için IELTS puanını yükseltmek isteyen adaylara yönelik performans odaklı hazırlık.",
    audience: "Hedef puanına planlı ve ölçülebilir biçimde ulaşmak isteyen adaylar",
    focus: [
      "Speaking ve Writing için kişisel geri bildirim",
      "Reading ve Listening soru çözüm teknikleri",
      "Deneme sınavları, hata analizi ve zaman yönetimi",
    ],
    tags: ["4 beceri", "Deneme sınavı", "Hedef puan"],
  },
  {
    id: "ilkokul",
    number: "04",
    accent: "orange",
    label: "Çocuklar İçin İngilizce",
    title: "İlkokul İngilizce",
    image: "/courses/ilkokul.jpeg",
    alt: "Victory Academy ilkokul öğrencileri için İngilizce kursu duyurusu",
    summary:
      "Çocukların İngilizceyi severek öğrenmesi, özgüvenle konuşması ve güçlü bir temel oluşturması için yaşa uygun, etkileşimli dersler.",
    audience: "İngilizceye sağlam ve keyifli bir başlangıç yapacak ilkokul öğrencileri",
    focus: [
      "Oyun, etkinlik ve iletişim odaklı öğrenme",
      "Kelime, telaffuz ve temel dil yapıları",
      "Küçük sınıflarda bireysel ilgi ve gelişim takibi",
    ],
    tags: ["İlkokul", "Etkileşimli ders", "Güçlü temel"],
  },
  {
    id: "sat",
    number: "05",
    accent: "purple",
    label: "Üniversite Kabul Sınavı",
    title: "SAT Hazırlık",
    image: "/courses/sat.jpeg",
    alt: "Victory Academy SAT sınavı hazırlık kursu duyurusu",
    summary:
      "Uluslararası üniversite başvurularında güçlü bir SAT sonucu hedefleyen öğrenciler için konu anlatımı, strateji ve yoğun soru pratiği.",
    audience: "Yurt dışında lisans eğitimi ve güçlü bir üniversite başvurusu hedefleyenler",
    focus: [
      "Reading & Writing ve Math alanlarında konu çalışması",
      "Soru tiplerine özel çözüm teknikleri",
      "Zamanlı denemeler ve performans analizi",
    ],
    tags: ["Math", "Reading & Writing", "Deneme"],
  },
  {
    id: "toefl",
    number: "06",
    accent: "teal",
    label: "Akademik İngilizce",
    title: "TOEFL Hazırlık",
    image: "/courses/toefl.png",
    alt: "Victory Academy TOEFL sınavı hazırlık kursu duyurusu",
    summary:
      "Yurt dışı lisans veya yüksek lisans başvurularında ihtiyaç duyulan akademik İngilizce becerilerini ve sınav stratejilerini birlikte geliştiren program.",
    audience: "TOEFL skorunu belgelemek veya yükseltmek isteyen öğrenciler ve profesyoneller",
    focus: [
      "Reading, Listening, Speaking ve Writing çalışmaları",
      "Akademik kelime ve not alma teknikleri",
      "Süreli uygulama, geri bildirim ve gelişim planı",
    ],
    tags: ["Akademik", "4 beceri", "Hedef skor"],
  },
];

const selectionSteps = [
  {
    number: "01",
    title: "Hedefinizi dinliyoruz",
    text: "Sınav, okul veya genel gelişim hedefinizi birlikte netleştiriyoruz.",
  },
  {
    number: "02",
    title: "Seviyenizi belirliyoruz",
    text: "Kısa değerlendirmeyle doğru başlangıç noktasını ve ihtiyaçları tespit ediyoruz.",
  },
  {
    number: "03",
    title: "Programınızı planlıyoruz",
    text: "Size uygun kursu, çalışma düzenini ve ilerleme yolunu birlikte oluşturuyoruz.",
  },
];

export default function CoursesPage() {
  return (
    <main>
      <ScrollReveal />
      <SiteHeader activePage="courses" />

      <section className="courses-page-hero">
        <div className="courses-page-hero-copy" data-reveal="left">
          <p className="section-kicker light">KURSLARIMIZ</p>
          <h1>Her hedef için doğru bir eğitim yolu.</h1>
          <p>
            Uluslararası sınavlardan çocuklar için İngilizceye kadar altı farklı
            programla öğrencilerimizi bugünkü seviyelerinden gelecekteki
            hedeflerine taşıyoruz.
          </p>
          <div className="courses-hero-actions">
            <Link className="button button-primary" href="#kurslar">
              Kursları keşfedin <ArrowDown aria-hidden="true" />
            </Link>
            <Link className="courses-hero-link" href="/#iletisim">
              Ücretsiz danışmanlık alın <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="courses-hero-proof" aria-label="Kurs seçenekleri">
            <div><strong>6</strong><span>Hedef odaklı kurs</span></div>
            <div><strong>8+</strong><span>Yaş ve üzeri</span></div>
            <div><strong>1:1</strong><span>Seviye değerlendirmesi</span></div>
          </div>
        </div>

        <div className="courses-hero-gallery" data-reveal="right" aria-label="Victory Academy kurs görselleri">
          <img className="hero-poster hero-poster-one" src="/courses/cambridge.png" alt="Cambridge hazırlık kursu" />
          <img className="hero-poster hero-poster-two" src="/courses/ielts.jpeg" alt="IELTS hazırlık kursu" />
          <img className="hero-poster hero-poster-three" src="/courses/ilkokul.jpeg" alt="İlkokul İngilizce kursu" />
          <span className="courses-gallery-badge">6 farklı program</span>
        </div>
      </section>

      <nav className="course-jump-nav" aria-label="Kurslara hızlı erişim">
        <div>
          {courses.map((course) => (
            <Link key={course.id} href={`#${course.id}`}>{course.title}</Link>
          ))}
        </div>
      </nav>

      <section className="courses-catalog section" id="kurslar">
        <div className="courses-catalog-heading" data-reveal="up">
          <p className="section-kicker">KURS KATALOĞU</p>
          <h2>Hedefinize en uygun programı keşfedin.</h2>
          <p>
            Her kurs, ölçülebilir ilerleme ve düzenli geri bildirim sağlayan
            yapılandırılmış bir öğrenme planıyla sunulur.
          </p>
        </div>

        <div className="course-showcase-list">
          {courses.map((course, index) => (
            <article
              className={`course-showcase course-${course.accent}`}
              id={course.id}
              key={course.id}
              data-reveal="up"
            >
              <div className="course-poster-wrap">
                <img src={course.image} alt={course.alt} loading={index > 1 ? "lazy" : "eager"} />
                <span>{course.number}</span>
              </div>

              <div className="course-showcase-copy">
                <p className="course-label">{course.label}</p>
                <h2>{course.title}</h2>
                <p className="course-summary">{course.summary}</p>

                <div className="course-audience">
                  <span aria-hidden="true"><Target /></span>
                  <p><small>Kimler için?</small><strong>{course.audience}</strong></p>
                </div>

                <div className="course-focus">
                  <h3>Programda neler var?</h3>
                  <ul>
                    {course.focus.map((item) => (
                      <li key={item}><i aria-hidden="true"><Check /></i>{item}</li>
                    ))}
                  </ul>
                </div>

                {course.note ? <p className="course-note">{course.note}</p> : null}

                <div className="course-card-footer">
                  <div className="course-tags">
                    {course.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <Link href="/#iletisim" aria-label={`${course.title} hakkında bilgi alın`}>
                    Bilgi alın <ArrowUpRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="course-selection">
        <div className="course-selection-inner">
          <div className="course-selection-heading" data-reveal="left">
            <p className="section-kicker light">KARAR VEREMEDİNİZ Mİ?</p>
            <h2>Doğru programı birlikte seçelim.</h2>
            <p>
              Yaş, mevcut seviye ve hedeflerinize göre en uygun kursu belirlemek
              için ücretsiz ön görüşme ve seviye değerlendirmesi sunuyoruz.
            </p>
            <Link className="button button-primary" href="/#iletisim">Ücretsiz Görüşme Planlayın <ArrowRight aria-hidden="true" /></Link>
          </div>

          <div className="course-selection-steps" data-reveal="right">
            {selectionSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
