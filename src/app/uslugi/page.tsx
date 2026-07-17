import Link from "next/link";
import WarmImage from "@/components/UI/WarmImage";
import { Metadata } from "next";
import { SERVICES_DATA } from "@/constants/data";

export const metadata: Metadata = {
  title: "Услуги и цены — Салон красоты Стенс в Нижнем Новгороде",
  description: "Цены на услуги салона красоты «Стенс». Профессиональное окрашивание волос Wella и Lebel, стрижки, маникюр, педикюр, оформление бровей и перманентный макияж в Нижнем Новгороде.",
};

export default function ServicesCatalogPage() {
  return (
    <div className="pb-32 bg-brand-cream">
      {/* Hero Header */}
      <section className="pt-32 pb-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-[10px] uppercase tracking-[0.12em] text-brand-dark/50 mb-8">
            <Link href="/" className="hover:text-brand-dark transition-colors">Главная</Link>
            <span className="mx-4">/</span>
            <span className="text-brand-dark">Услуги</span>
          </nav>
          <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight text-brand-dark mb-12">
            Услуги и цены
          </h1>
          <p className="text-lg md:text-xl text-brand-dark max-w-2xl mx-auto font-normal leading-relaxed">
            Безупречность в каждой детали. Индивидуальный подход и премиальные материалы.
          </p>
        </div>
      </section>

      {/* Services List Editorial */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="flex flex-col gap-32">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 aspect-[3/4] relative overflow-hidden group rounded-sm">
                <Link href={`/uslugi/${service.slug}`}>
                  <WarmImage
                    src={service.image}
                    alt={`Стенс: ${service.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </Link>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-sm md:text-base font-semibold tracking-[0.12em] uppercase text-brand-accent mb-6">
                  От {service.priceFrom}
                </span>
                <Link href={`/uslugi/${service.slug}`} className="group inline-block w-fit">
                  <h2 className="font-serif-display text-3xl md:text-4xl text-brand-dark mb-8 group-hover:text-brand-accent transition-colors">
                    {service.title}
                  </h2>
                </Link>
                <p className="text-lg text-brand-dark font-normal leading-relaxed mb-12 max-w-md">
                  {service.description}
                </p>
                <div className="flex items-center gap-8">
                  <Link
                    href={`/uslugi/${service.slug}`}
                    className="text-xs font-semibold uppercase tracking-[0.12em] border-b border-brand-dark pb-1 hover:text-brand-accent hover:border-brand-accent transition-all"
                  >
                    Прайс-лист
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info banner about safety */}
      <section className="border-y border-brand-dark/10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          <div className="space-y-6">
            <h4 className="font-serif-display text-2xl md:text-3xl text-brand-dark">Стерилизация</h4>
            <p className="text-sm md:text-base text-brand-dark leading-relaxed font-normal">
              Медицинские стандарты стерилизации. Крафт-пакеты вскрываются исключительно при вас.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="font-serif-display text-2xl md:text-3xl text-brand-dark">Материалы</h4>
            <p className="text-sm md:text-base text-brand-dark leading-relaxed font-normal">
              Мы используем только премиальные красители Wella Professionals и японские уходы Lebel.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="font-serif-display text-2xl md:text-3xl text-brand-dark">Экспертность</h4>
            <p className="text-sm md:text-base text-brand-dark leading-relaxed font-normal">
              Бесплатная очная консультация перед сложным окрашиванием для гарантии результата.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
