import Image from "next/image";
import Link from "next/link";
import MobileStickyCTA from "@/components/UI/MobileStickyCTA";
import MasterCard from "@/components/UI/MasterCard";
import {
  MAIN_FAQS,
  MASTERS,
  REVIEWS,
  SALON_INFO,
  TOP_SERVICES,
} from "@/constants/data";
import Accordion from "@/components/UI/Accordion";

const previewWorks = [
  { src: "/images/work_airtouch.webp", title: "Мягкий AirTouch" },
  { src: "/images/work_french.webp", title: "Чистый френч" },
  { src: "/images/work_crop.webp", title: "Точная форма" },
  { src: "/images/work_powder.webp", title: "Пудровые брови" },
];

export default function Home() {
  return (
    <div className="home-page">
      <MobileStickyCTA />

      <section className="home-intro" aria-labelledby="home-title">
        <div className="home-intro-copy">
          <p className="section-label">Салон красоты · Нижний Новгород</p>
          <h1 id="home-title">
            Красота, которая остаётся <em>вашей.</em>
          </h1>
          <p className="home-intro-text">
            Точные стрижки, живой цвет и деликатные детали. Мы не меняем вас —
            только подчёркиваем то, что уже красиво.
          </p>
          <div className="home-intro-actions">
            <Link className="ui-button ui-button--primary" href="/kontakty#zapis">
              <span>Записаться</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <Link className="readable-link" href="/uslugi">
              Посмотреть услуги и цены
            </Link>
          </div>
          <div className="home-intro-facts" aria-label="О салоне">
            <div>
              <strong>{SALON_INFO.rating}</strong>
              <span>рейтинг</span>
            </div>
            <div>
              <strong>{SALON_INFO.reviewsCount}</strong>
              <span>отзывов</span>
            </div>
            <div>
              <strong>с 2018</strong>
              <span>в Нижнем</span>
            </div>
          </div>
        </div>

        <div className="home-intro-photo">
          <Image
            src="/images/hero.webp"
            alt="Мастер салона «Стенс» работает с клиенткой"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
            className="cover-image"
          />
          <div className="photo-caption">
            <span>Большая Покровская, 58</span>
            <span>5 минут от м. Горьковская</span>
          </div>
        </div>
      </section>

      <section className="home-services" aria-labelledby="services-title">
        <div className="section-shell">
          <div className="readable-heading">
            <div>
              <p className="section-label">Услуги</p>
              <h2 id="services-title">С чего начнём?</h2>
            </div>
            <div>
              <p>
                Выберите направление — на отдельной странице есть полный прайс,
                описание процедуры и подходящие мастера.
              </p>
              <Link className="readable-link" href="/uslugi">
                Все услуги и цены
              </Link>
            </div>
          </div>

          <div className="service-preview-grid">
            {TOP_SERVICES.map((service) => (
              <Link
                className="service-preview-card"
                href={`/uslugi/${service.slug}`}
                key={service.slug}
              >
                <div className="service-preview-photo">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                    className="cover-image"
                  />
                </div>
                <div className="service-preview-copy">
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-preview-price">
                    <strong>от {service.priceFrom}</strong>
                    <span aria-hidden="true">↗</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-approach">
        <div className="home-approach-photo">
          <Image
            src="/images/interior-1.jpg"
            alt="Интерьер салона «Стенс»"
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
            className="cover-image"
          />
        </div>
        <div className="home-approach-copy">
          <p className="section-label">Наш подход</p>
          <h2>
            Сначала слушаем.
            <br />
            Потом предлагаем.
          </h2>
          <p className="home-approach-lead">
            Учитываем привычки, темп жизни и то, как результат будет выглядеть
            не только в кресле, но и дома.
          </p>
          <ul className="home-values">
            <li>
              <strong>Безопасно</strong>
              <span>Четыре этапа стерилизации инструмента.</span>
            </li>
            <li>
              <strong>Профессионально</strong>
              <span>Опыт мастеров от 8 лет и постоянное обучение.</span>
            </li>
            <li>
              <strong>Без спешки</strong>
              <span>Время мастера полностью принадлежит вам.</span>
            </li>
          </ul>
          <Link className="readable-link readable-link--light" href="/o-salone">
            О салоне и команде
          </Link>
        </div>
      </section>

      <section className="home-works">
        <div className="section-shell">
          <div className="readable-heading">
            <div>
              <p className="section-label section-label--light">Портфолио</p>
              <h2>Работы наших мастеров</h2>
            </div>
            <div>
              <p>Результаты без фотостоков и чужих референсов.</p>
              <Link className="readable-link readable-link--light" href="/raboty">
                Открыть всю галерею
              </Link>
            </div>
          </div>
          <div className="work-preview-grid">
            {previewWorks.map((work) => (
              <figure key={work.src}>
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  sizes="(max-width: 700px) 82vw, 25vw"
                  className="cover-image"
                />
                <figcaption>{work.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="home-team">
        <div className="section-shell">
          <div className="readable-heading">
            <div>
              <p className="section-label">Команда</p>
              <h2>Мастера, которым доверяют</h2>
            </div>
            <div>
              <p>У каждого — своя сильная специализация и опыт от 8 лет.</p>
              <Link className="readable-link" href="/o-salone#team">
                Познакомиться со всей командой
              </Link>
            </div>
          </div>
          <div className="home-team-grid">
            {MASTERS.slice(0, 3).map((master) => (
              <MasterCard master={master} compact key={master.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-review">
        <div className="section-shell home-review-grid">
          <div className="home-review-score">
            <p>Яндекс Карты</p>
            <strong>{SALON_INFO.rating}</strong>
            <span aria-label="5 звёзд">★★★★★</span>
            <small>{SALON_INFO.reviewsCount} отзывов</small>
          </div>
          <blockquote>
            <p>“{REVIEWS[0].text}”</p>
            <footer>
              <strong>{REVIEWS[0].name}</strong>
              <span>{REVIEWS[0].procedure}</span>
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="home-faq">
        <div className="section-shell home-faq-grid">
          <div>
            <p className="section-label">Перед визитом</p>
            <h2>Коротко о важном</h2>
            <p>
              Остальные вопросы можно задать администратору по телефону или во
              ВКонтакте.
            </p>
          </div>
          <Accordion items={MAIN_FAQS.slice(0, 3)} />
        </div>
      </section>

      <section className="home-booking">
        <Image
          src="/images/interior-2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="cover-image"
        />
        <div className="home-booking-shade" />
        <div className="section-shell home-booking-copy">
          <p className="section-label section-label--light">Онлайн-запись 24/7</p>
          <h2>Выберите удобное время</h2>
          <p>
            Если не уверены в услуге — запишитесь на консультацию. Мастер
            уточнит задачу и назовёт стоимость до начала работы.
          </p>
          <div>
            <Link className="ui-button ui-button--accent" href="/kontakty#zapis">
              <span>Записаться онлайн</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <a className="ui-button ui-button--ghost" href={SALON_INFO.phoneLink}>
              <span>{SALON_INFO.phone}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
