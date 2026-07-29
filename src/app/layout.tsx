import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stens-salon.ru"),
  title: "Стенс — салон красоты в Нижнем Новгороде",
  description:
    "Точные стрижки, сложное окрашивание, маникюр и естественный перманент. Салон «Стенс» на Большой Покровской.",
  openGraph: {
    title: "Стенс — красота, которая остаётся вашей",
    description:
      "Салон красоты в Нижнем Новгороде. Точные формы, живой цвет и деликатные детали.",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Стенс — красота, которая остаётся вашей",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Стенс — красота, которая остаётся вашей",
    description: "Салон красоты в Нижнем Новгороде.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
