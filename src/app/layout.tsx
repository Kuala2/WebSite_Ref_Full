import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Стенс — Премиальный салон красоты в Нижнем Новгороде",
  description: "Салон красоты «Стенс» на Большой Покровской в Нижнем Новгороде. Сложные окрашивания (AirTouch, балаяж, тотальный блонд), стрижки, маникюр, педикюр, брови и перманентный макияж. Скидка 10% на первый визит.",
  keywords: "салон красоты, Нижний Новгород, Стенс, Большая Покровская, AirTouch, окрашивание волос, стрижка, маникюр, педикюр, перманентный макияж, оформление бровей",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${playfair.variable} ${manrope.variable} scroll-smooth antialiased`}
    >
      <body className="bg-brand-cream text-brand-dark flex flex-col min-h-[100svh] overflow-x-hidden">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
