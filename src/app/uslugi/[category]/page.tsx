import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MASTERS, SERVICES_DATA } from "@/constants/data";
import Accordion from "@/components/UI/Accordion";
import Button from "@/components/UI/Button";
import MasterCard from "@/components/UI/MasterCard";
import PriceTable from "@/components/UI/PriceTable";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ category: service.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const service = SERVICES_DATA.find((item) => item.slug === category);

  if (!service) {
    return { title: "Услуга не найдена — Стенс" };
  }

  return {
    title: `${service.title} в Нижнем Новгороде — Стенс`,
    description: service.description,
  };
}

export default async function ServiceCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const service = SERVICES_DATA.find((item) => item.slug === category);

  if (!service) notFound();

  const categoryMasters = MASTERS.filter((master) =>
    master.categories.includes(category),
  );

  return (
    <div className="inner-page service-detail">
      <section className="service-detail-hero">
        <div className="section-shell">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <Link href="/">Главная</Link>
            <span>/</span>
            <Link href="/uslugi">Услуги</Link>
            <span>/</span>
            <span>{service.title}</span>
          </nav>
          <div className="service-detail-heading">
            <div>
              <p className="section-label">Услуга</p>
              <h1>{service.title}</h1>
            </div>
            <div>
              <strong>от {service.priceFrom}</strong>
              <p>{service.description}</p>
              <Button href="/kontakty#zapis">Записаться</Button>
            </div>
          </div>
          <div className="service-detail-cover">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="100vw"
              className="cover-image"
            />
          </div>
        </div>
      </section>

      <section className="service-about">
        <div className="section-shell service-about-grid">
          <div>
            <p className="section-label">О процедуре</p>
            <h2>Понятный результат без сюрпризов</h2>
          </div>
          <div>
            <p className="service-about-lead">{service.longDescription}</p>
            <div className="service-steps">
              <article>
                <span>01</span>
                <h3>Обсуждаем задачу</h3>
                <p>Уточняем пожелания, привычки и желаемый результат.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Согласуем план</h3>
                <p>Мастер объясняет этапы, длительность и точную стоимость.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Даём рекомендации</h3>
                <p>Рассказываем, как сохранить результат дома.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="service-price-section">
        <div className="section-shell">
          <div className="readable-heading">
            <div>
              <p className="section-label">Стоимость</p>
              <h2>Прайс-лист</h2>
            </div>
            <p>
              Цены указаны «от». Окончательную стоимость мастер называет после
              консультации и до начала процедуры.
            </p>
          </div>
          <PriceTable items={service.prices} />
        </div>
      </section>

      {service.gallery.length > 0 && (
        <section className="service-gallery">
          <div className="section-shell">
            <div className="readable-heading">
              <div>
                <p className="section-label section-label--light">Примеры</p>
                <h2>Работы мастеров</h2>
              </div>
              <Link className="readable-link readable-link--light" href="/raboty">
                Вся галерея
              </Link>
            </div>
            <div className="service-gallery-grid">
              {service.gallery.slice(0, 3).map((image, index) => (
                <figure key={image}>
                  <Image
                    src={image}
                    alt={`${service.title}: пример ${index + 1}`}
                    fill
                    sizes="(max-width: 700px) 82vw, 33vw"
                    className="cover-image"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="service-masters">
        <div className="section-shell">
          <div className="readable-heading">
            <div>
              <p className="section-label">Специалисты</p>
              <h2>Мастера направления</h2>
            </div>
            <p>
              Выберите знакомого мастера или попросите администратора подобрать
              специалиста под вашу задачу.
            </p>
          </div>
          <div className="master-grid">
            {categoryMasters.map((master) => (
              <MasterCard master={master} key={master.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="service-faq">
        <div className="section-shell split-section">
          <div>
            <p className="section-label">Вопросы</p>
            <h2>Перед записью</h2>
          </div>
          <Accordion items={service.faqs} />
        </div>
      </section>

      <section className="simple-cta simple-cta--dark">
        <div className="section-shell simple-cta-grid">
          <div>
            <p className="section-label section-label--light">Готовы начать?</p>
            <h2>Выберите удобное время</h2>
          </div>
          <div>
            <p>
              Онлайн-запись работает круглосуточно. Если нужна консультация,
              администратор поможет по телефону.
            </p>
            <Button href="/kontakty#zapis">Записаться</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
