import Link from "next/link";
import WarmImage from "@/components/UI/WarmImage";
import { Metadata } from "next";
import { SERVICES_DATA } from "@/constants/data";
import PriceAccordion from "@/components/UI/PriceAccordion";
import Button from "@/components/UI/Button";

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
                <div className="w-full max-w-sm">
                  <PriceAccordion prices={service.prices} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info banner about safety */}
      <section className="py-32 md:py-48 bg-[#F4EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-[#EFE8DC] p-8 md:p-12 rounded-sm border border-[#2A211B]/10 flex flex-col gap-4 shadow-sm">
              <div className="text-3xl font-serif text-[#6E2A2A] mb-2 opacity-80">01</div>
              <h3 className="font-serif-display text-2xl md:text-3xl text-[#2A211B]">Стерилизация</h3>
              <p className="text-[#2A211B]/80 leading-relaxed font-medium">
                Медицинские стандарты стерилизации. <span className="font-bold">Крафт-пакеты вскрываются исключительно при вас.</span>
              </p>
            </div>
            <div className="bg-[#EFE8DC] p-8 md:p-12 rounded-sm border border-[#2A211B]/10 flex flex-col gap-4 shadow-sm">
              <div className="text-3xl font-serif text-[#6E2A2A] mb-2 opacity-80">02</div>
              <h3 className="font-serif-display text-2xl md:text-3xl text-[#2A211B]">Материалы</h3>
              <p className="text-[#2A211B]/80 leading-relaxed font-medium">
                Мы используем только премиальные красители <span className="font-bold">Lebel и Keune.</span>
              </p>
            </div>
            <div className="bg-[#EFE8DC] p-8 md:p-12 rounded-sm border border-[#2A211B]/10 flex flex-col gap-4 shadow-sm">
              <div className="text-3xl font-serif text-[#6E2A2A] mb-2 opacity-80">03</div>
              <h3 className="font-serif-display text-2xl md:text-3xl text-[#2A211B]">Экспертность</h3>
              <p className="text-[#2A211B]/80 leading-relaxed font-medium">
                <span className="font-bold">Бесплатная очная консультация</span> перед сложным окрашиванием для гарантии результата.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-32 border-t border-brand-dark/10">
        <div className="px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h3 className="font-serif-display text-3xl md:text-4xl text-brand-dark mb-8">Не нашли свою услугу?</h3>
          <p className="text-lg text-brand-dark font-normal mb-12">
            Позвоните — подберём мастера и удобное время
          </p>
          <Button href="/kontakty#zapis" variant="primary">
            Записаться онлайн
          </Button>
        </div>
      </section>
    </div>
  );
}
