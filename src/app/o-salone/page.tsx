import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MASTERS, REVIEWS } from "@/constants/data";
import MasterCard from "@/components/UI/MasterCard";
import ReviewCard from "@/components/UI/ReviewCard";
import Button from "@/components/UI/Button";

export const metadata: Metadata = {
  title: "О салоне Стенс — Команда, ценности и отзывы клиентов",
  description: "История создания салона красоты «Стенс» в Нижнем Новгороде. Наша команда топ-мастеров, стандарты стерилизации инструментов и отзывы наших постоянных клиентов.",
};

const INTERIOR_PHOTOS = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
];

export default function AboutPage() {
  return (
    <div className="pb-32 bg-brand-cream">
      {/* Hero Header */}
      <section className="pt-32 pb-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/50 mb-8">
            <Link href="/" className="hover:text-brand-dark transition-colors">Главная</Link>
            <span className="mx-4">/</span>
            <span className="text-brand-dark">О салоне</span>
          </nav>
          <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight text-brand-dark mb-12">
            О салоне
          </h1>
          <p className="text-lg md:text-xl text-brand-dark max-w-2xl mx-auto font-normal leading-relaxed">
            Создаем премиальный сервис и раскрываем вашу естественную красоту.
          </p>
        </div>
      </section>

      {/* Philosophy and Story */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="space-y-8">
            <h2 className="font-serif-display text-3xl md:text-4xl text-brand-dark">
              Как создавался «Стенс»
            </h2>
            <div className="space-y-6 text-lg text-brand-dark font-normal leading-relaxed">
              <p>
                Мы открыли двери нашего салона в 2018 году с простой идеей: создать пространство в Нижнем Новгороде, где премиальное качество услуг сочетается с искренней заботой о гостях.
              </p>
              <p>
                За годы работы мы сформировали сильную команду единомышленников. Каждый наш мастер — профессионал с непрерывным стажем от 8 лет, регулярно проходящий курсы повышения квалификации у мировых лидеров индустрии.
              </p>
              <p>
                «Стенс» — это не просто салон. Это место вашей перезагрузки.
              </p>
            </div>
          </div>
          
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
              alt="Интерьер салона красоты Стенс на Большой Покровской"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Materials and Sterility Block */}
      <section className="py-32 bg-brand-dark text-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
            {/* Photos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=600"
                  alt="Материалы"
                  fill
                  sizes="30vw"
                  className="object-cover opacity-80"
                />
              </div>
              <div className="relative aspect-[3/4] mt-12 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=600"
                  alt="Стерилизация"
                  fill
                  sizes="30vw"
                  className="object-cover opacity-80"
                />
              </div>
            </div>

            {/* Text Info */}
            <div className="space-y-16">
              <div>
                <h3 className="font-serif-display text-4xl mb-6">
                  Безопасность
                </h3>
                <p className="text-lg text-brand-cream font-normal leading-relaxed">
                  Мы бережно относимся к вашему здоровью. В салоне «Стенс» все многоразовые инструменты ногтевого сервиса проходят трехэтапную очистку: дезинфекция, промывка и термическая стерилизация в сухожаровом шкафу при 180°C. Крафт-пакет вскрывается мастером исключительно в вашем присутствии.
                </p>
              </div>

              <div>
                <h3 className="font-serif-display text-4xl mb-6">
                  Косметика
                </h3>
                <p className="text-lg text-brand-cream font-normal leading-relaxed">
                  В окрашивании мы используем только качественные профессиональные материалы Wella Professionals и Lebel. Мы принципиально не экономим на материалах, ведь от них зависит здоровье волос, блеск и стойкость оттенка.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="font-serif-display text-4xl md:text-5xl text-brand-dark mb-6">
              Команда мастеров
            </h2>
            <p className="text-lg text-brand-dark max-w-2xl mx-auto font-normal">
              Профессионалы своего дела с опытом от 8 лет.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MASTERS.map((master) => (
              <MasterCard key={master.id} master={master} />
            ))}
          </div>
        </div>
      </section>

      {/* Interior Gallery */}
      <section className="py-32 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="font-serif-display text-4xl md:text-5xl text-brand-dark">
              Наш интерьер
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {INTERIOR_PHOTOS.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <Image
                  src={photo}
                  alt={`Интерьер салона красоты Стенс — Фото ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="font-serif-display text-4xl md:text-5xl text-brand-dark mb-6">
              Отзывы клиентов
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-32 border-t border-brand-dark/10">
        <div className="px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h3 className="font-serif-display text-3xl md:text-4xl text-brand-dark mb-8">Испытайте премиум сервис</h3>
          <p className="text-lg text-brand-dark font-normal mb-12">
            Запишитесь онлайн прямо сейчас и получите гарантированную скидку 10% на ваш первый визит.
          </p>
          <Button href="/kontakty#zapis" variant="primary">
            Записаться на процедуру
          </Button>
        </div>
      </section>
    </div>
  );
}
