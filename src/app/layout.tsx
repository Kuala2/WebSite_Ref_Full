import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("http://localhost:3000"),
  title: "Стенс — салон красоты в Нижнем Новгороде",
  description: "Премиальный салон красоты в Нижнем Новгороде: умные стрижки, сложное окрашивание, маникюр и перманентный макияж. Запишитесь на удобное время.",
  openGraph: {
    title: "Стенс — салон красоты в Нижнем Новгороде",
    description: "Премиальный салон красоты в Нижнем Новгороде: умные стрижки, сложное окрашивание, маникюр и перманентный макияж. Запишитесь на удобное время.",
    images: [{ url: "/images/hero.webp" }],
    type: "website",
  },
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
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=110888800', 'ym');
        
            ym(110888800, 'init', {ssr:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/110888800" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
