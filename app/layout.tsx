import type { Metadata } from "next";
import FloatingActions from "@/components/FloatingActions";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://english-teaching-academy.saadmarwan16.chatgpt.site"),
  title: "Victory Academy | İngilizce ve Sınav Hazırlık Kursları",
  description:
    "Cambridge English, IELTS ve İtalya üniversite giriş sınavlarına hazırlık. Victory Academy ile seviyenize ve hedefinize uygun İngilizce eğitimi alın.",
  applicationName: "Victory Academy",
  authors: [{ name: "Victory Academy" }],
  creator: "Victory Academy",
  publisher: "Victory Academy",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Victory Academy | İngilizce ve Sınav Hazırlık Kursları",
    description:
      "Cambridge English, IELTS ve İtalya üniversite giriş sınavlarına hazırlık. Hedeflerinize uygun İngilizce eğitimiyle güvenle ilerleyin.",
    url: "https://english-teaching-academy.saadmarwan16.chatgpt.site",
    siteName: "Victory Academy",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Victory Academy — İngilizce hedeflerinize güvenle ilerleyin.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victory Academy | İngilizce ve Sınav Hazırlık Kursları",
    description:
      "Cambridge English, IELTS ve İtalya üniversite giriş sınavlarına hazırlık.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/victory-emblem.png",
    shortcut: "/victory-emblem.png",
    apple: "/victory-emblem.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
