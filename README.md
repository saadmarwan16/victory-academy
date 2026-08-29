# Victory Academy Website

Victory Academy'nin kurslarını, yurt dışı eğitim danışmanlığını ve iletişim
bilgilerini sunan Türkçe, çok sayfalı kurumsal web sitesi.

## Sayfalar

- `/` — ana sayfa
- `/kurslar` — Cambridge, CEnT-S, IELTS, ilkokul İngilizce, SAT ve TOEFL
- `/danismanlik` — yurt dışı eğitim danışmanlığı
- `/hakkimizda` — akademi, misyon, vizyon ve eğitim yaklaşımı

## Geliştirme

Node.js `22.13.0` veya üzeri gereklidir.

```bash
npm install
npm run dev
```

## Komutlar

- `npm run dev` — yerel geliştirme sunucusunu başlatır
- `npm run lint` — kod kalitesi denetimini çalıştırır
- `npm run build` — üretim paketini oluşturur ve doğrular
- `npm run start` — oluşturulan üretim paketini çalıştırır
- `npm run validate:artifact` — mevcut üretim paketini yeniden doğrular

## SEO

Next.js Metadata API üzerinden sayfa başlıkları, açıklamalar, canonical URL'ler,
Open Graph ve Twitter kartları tanımlanmıştır. `app/robots.ts` ve
`app/sitemap.ts`, arama motorları için `robots.txt` ve `sitemap.xml` rotalarını
üretir. Ana sayfadaki yapılandırılmış veri akademinin iletişim ve adres
bilgilerini açıklar.
