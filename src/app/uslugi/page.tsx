import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_DATA } from "@/constants/data";
import PriceAccordion from "@/components/UI/PriceAccordion";
import Button from "@/components/UI/Button";

export const metadata: Metadata = {
  title: "Услуги и цены — салон красоты «Стенс»",
  description:
    "Полный каталог услуг салона «Стенс»: окрашивание, стрижки, маникюр, педикюр, брови и перманентный макияж.",
};

export default function ServicesCatalogPage() {
  return (
    <div className="inner-page">
      <section className="page-hero">
        <div className="section-shell page-hero-grid">
          <div>
            <nav className="breadcrumbs" aria-label="Хлебные крошки">
              <Link href="/">Главная</Link>
              <span>/</span>
              <span>Услуги</span>
            </nav>
            <p className="section-label">Каталог и цены</p>
            <h1>Услуги салона</h1>
          </div>
          <p className="page-hero-lead">
            Выберите направление. Внутри — подробное описание, полный прайс,
            примеры работ и мастера, которые специализируются на услуге.
          </p>
        </div>
      </section>

      <section className="catalog-section">
        <div className="section-shell service-catalog">
          {SERVICES_DATA.map((service, index) => (
            <article className="catalog-card" key={service.id}>
              <Link
                className="catalog-photo"
                href={`/uslugi/${service.slug}`}
                aria-label={`Подробнее: ${service.title}`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 800px) 100vw, 44vw"
                  className="cover-image"
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </Link>
              <div className="catalog-copy">
                <div className="catalog-title">
                  <div>
                    <h2>{service.title}</h2>
                    <strong>от {service.priceFrom}</strong>
                  </div>
                  <Link href={`/uslugi/${service.slug}`} aria-label="Подробнее">
                    ↗
                  </Link>
                </div>
                <p>{service.description}</p>
                <PriceAccordion prices={service.prices} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="assurance-section">
        <div className="section-shell">
          <div className="readable-heading">
            <div>
              <p className="section-label section-label--light">Наш стандарт</p>
              <h2>За что вы платите</h2>
            </div>
            <p>
              В стоимость входит не только процедура, но и безопасные материалы,
              спокойное время мастера и понятная консультация до начала работы.
            </p>
          </div>
          <div className="assurance-grid">
            <article>
              <span>01</span>
              <h3>Безопасность</h3>
              <p>Инструменты проходят полный цикл стерилизации.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Материалы</h3>
              <p>Профессиональные составы Lebel, Keune, Luxio и Uno.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Честная цена</h3>
              <p>Точную стоимость согласуем до начала процедуры.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="simple-cta">
        <div className="section-shell simple-cta-grid">
          <div>
            <p className="section-label">Не знаете, что выбрать?</p>
            <h2>Начните с консультации</h2>
          </div>
          <div>
            <p>
              Администратор подберёт направление и мастера, а специалист уточнит
              задачу и рассчитает стоимость.
            </p>
            <Button href="/kontakty#zapis">Записаться онлайн</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
