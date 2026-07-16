import { Metadata } from "next";
import Link from "next/link";
import GalleryFilters from "@/components/GalleryFilters";
import Button from "@/components/UI/Button";

export const metadata: Metadata = {
  title: "Наши работы — Галерея портфолио салона красоты Стенс",
  description: "Фотографии реальных работ мастеров салона красоты «Стенс» в Нижнем Новгороде. Примеры сложного окрашивания (AirTouch, балаяж), стрижек, маникюра, педикюра и перманентного макияжа.",
};

export default function GalleryPage() {
  return (
    <div className="pb-32 bg-brand-cream">
      {/* Hero Header */}
      <section className="pt-32 pb-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/50 mb-8">
            <Link href="/" className="hover:text-brand-dark transition-colors">Главная</Link>
            <span className="mx-4">/</span>
            <span className="text-brand-dark">Работы</span>
          </nav>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-brand-dark mb-12">
            Галерея.
          </h1>
          <p className="text-lg md:text-xl text-brand-dark/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Бескомпромиссное качество без ретуши и фильтров.
          </p>
        </div>
      </section>

      {/* Filter and Grid (Client Side Component) */}
      <section className="pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryFilters />
      </section>

      {/* Info Block */}
      <section className="py-32 border-t border-brand-dark/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="space-y-12">
            <h3 className="font-serif-display text-4xl md:text-6xl text-brand-dark">Идеальный результат.</h3>
            <p className="text-lg md:text-xl text-brand-dark/90 font-normal leading-relaxed">
              Запишитесь на бесплатную консультацию. Мастер оценит состояние волос/ногтей/кожи, обсудит ваши пожелания и подберет идеальную технику.
            </p>
            <div className="pt-8">
              <Button href="/kontakty#zapis" variant="primary">
                Записаться онлайн
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
