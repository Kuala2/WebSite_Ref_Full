import Image from "next/image";
import Link from "next/link";
import Accordion from "@/components/UI/Accordion";
import MobileStickyCTA from "@/components/UI/MobileStickyCTA";
import {
  MAIN_FAQS,
  MASTERS,
  REVIEWS,
  SALON_INFO,
  TOP_SERVICES,
} from "@/constants/data";

const works = [
  { src: "/images/work_airtouch.webp", label: "AirTouch" },
  { src: "/images/work_french.webp", label: "Маникюр" },
  { src: "/images/work_crop.webp", label: "Умная стрижка" },
  { src: "/images/work_powder.webp", label: "Брови" },
  { src: "/images/work_waves.jpg", label: "Укладка" },
];

export default function Home() {
  return (
    <div className="landing">
      <MobileStickyCTA />

      <section className="home-hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span>Салон красоты</span>
            <span>Нижний Новгород</span>
          </div>

          <h1 id="hero-title">
            Красота,
            <br />
            которая остаётся
            <br />
            <em>вашей.</em>
          </h1>

          <p className="hero-lead">
            Точные стрижки, живой цвет и деликатные детали — без масок,
            шаблонов и попыток сделать вас кем-то другим.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href={SALON_INFO.bookingUrl}>
              Выбрать время
              <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href={SALON_INFO.phoneLink}>
              {SALON_INFO.phone}
            </a>
          </div>

          <div className="hero-proof" aria-label="Коротко о салоне">
            <div>
              <strong>{SALON_INFO.rating}</strong>
              <span>рейтинг гостей</span>
            </div>
            <div>
              <strong>{SALON_INFO.reviewsCount}</strong>
              <span>живых отзывов</span>
            </div>
            <div>
              <strong>8 лет</strong>
              <span>работаем с вами</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <Image
            src="/images/hero.webp"
            alt="Мастер работает с клиенткой в салоне «Стенс»"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 46vw"
            className="cover-image"
          />
          <div className="hero-visual-shade" />
          <div className="hero-vertical-note">STENS · BEAUTY SALON · 2018</div>
          <div className="hero-place">
            <span>01</span>
            <p>
              Большая Покровская, 58
              <br />
              пять минут от м. Горьковская
            </p>
          </div>
        </div>
      </section>

      <section className="manifesto" aria-label="Наш подход">
        <div className="section-shell manifesto-grid">
          <p className="eyebrow eyebrow-light">Наш принцип</p>
          <div>
            <h2>
              Не «новая вы».
              <br />
              <em>Вы — только точнее.</em>
            </h2>
            <p className="manifesto-copy">
              Сначала слушаем, потом предлагаем. Учитываем привычки, темп жизни,
              форму лица и то, как волосы ведут себя дома — не только в кресле
              мастера.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Что мы делаем</p>
              <h2>
                Всё для образа.
                <br />
                <em>Ничего лишнего.</em>
              </h2>
            </div>
            <p>
              Честные цены «от» и бесплатная консультация перед сложными
              процедурами.
            </p>
          </div>

          <div className="services-layout">
            <figure className="services-photo">
              <div className="services-photo-media">
                <Image
                  src="/images/service-color.webp"
                  alt="Процесс окрашивания волос в салоне"
                  fill
                  sizes="(max-width: 900px) 100vw, 42vw"
                  className="cover-image"
                />
              </div>
              <figcaption>
                <span>Премиальные составы</span>
                <span>Lebel · Keune</span>
              </figcaption>
            </figure>

            <div className="services-list">
              {TOP_SERVICES.map((service, index) => (
                <article className="service-row" key={service.slug}>
                  <div className="service-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="service-main">
                    <div className="service-title-line">
                      <h3>{service.title}</h3>
                      <strong>от {service.priceFrom}</strong>
                    </div>
                    <p>{service.description}</p>
                    <a href={SALON_INFO.bookingUrl}>
                      Записаться
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="works-section" id="works">
        <div className="section-shell">
          <div className="works-heading">
            <div>
              <p className="eyebrow eyebrow-light">Недавние работы</p>
              <h2>
                Сделано руками.
                <br />
                <em>Подходит именно вам.</em>
              </h2>
            </div>
            <p>Без фотостоков и чужих референсов — только работа наших мастеров.</p>
          </div>

          <div className="works-grid">
            {works.map((work, index) => (
              <figure className={`work work-${index + 1}`} key={work.src}>
                <Image
                  src={work.src}
                  alt={work.label}
                  fill
                  sizes="(max-width: 700px) 100vw, 40vw"
                  className="cover-image"
                />
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {work.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="care-section">
        <div className="care-image">
          <Image
            src="/images/interior-1.jpg"
            alt="Светлый интерьер салона «Стенс»"
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
            className="cover-image"
          />
        </div>
        <div className="care-copy">
          <p className="eyebrow">Сервис — это тоже результат</p>
          <h2>
            Здесь можно
            <br />
            <em>выдохнуть.</em>
          </h2>
          <p className="care-intro">
            Мы собрали пространство, где забота не звучит как рекламное
            обещание — она просто происходит.
          </p>
          <ul>
            <li>
              <span>01</span>
              <div>
                <strong>Безопасность без компромиссов</strong>
                <p>Четыре этапа стерилизации и пакет, который вскрывают при вас.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Мастера, которые продолжают учиться</strong>
                <p>Новые техники — только после практики и строгой проверки.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Время, которое принадлежит вам</strong>
                <p>Без конвейера, спешки и параллельной работы с другим гостем.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="team-section" id="team">
        <div className="section-shell">
          <div className="team-heading">
            <p className="eyebrow eyebrow-light">Люди «Стенс»</p>
            <h2>
              Хороший результат
              <br />
              начинается с <em>доверия.</em>
            </h2>
          </div>

          <div className="team-grid">
            {MASTERS.slice(0, 3).map((master, index) => (
              <article className="team-card" key={master.id}>
                <div className="team-photo">
                  <Image
                    src={master.image}
                    alt={master.name}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                    className="cover-image"
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="team-meta">
                  <div>
                    <h3>{master.name}</h3>
                    <p>{master.role}</p>
                  </div>
                  <span>{master.experience}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="review-section" aria-label="Отзывы клиентов">
        <div className="section-shell review-layout">
          <div className="review-score">
            <span>Яндекс Карты</span>
            <strong>{SALON_INFO.rating}</strong>
            <div aria-label="5 звёзд">★★★★★</div>
            <p>{SALON_INFO.reviewsCount} отзывов</p>
          </div>

          <blockquote>
            <span className="quote-mark">“</span>
            <p>{REVIEWS[0].text}</p>
            <footer>
              <strong>{REVIEWS[0].name}</strong>
              <span>{REVIEWS[0].procedure}</span>
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-shell faq-layout">
          <div>
            <p className="eyebrow">Перед первым визитом</p>
            <h2>
              Вопросы,
              <br />
              <em>которые важны.</em>
            </h2>
            <p className="faq-note">
              Не нашли ответ? Позвоните — администратор всё расскажет без
              заученных скриптов.
            </p>
          </div>
          <Accordion items={MAIN_FAQS} />
        </div>
      </section>

      <section className="booking-section" id="contact">
        <Image
          src="/images/interior-2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="cover-image"
        />
        <div className="booking-overlay" />
        <div className="section-shell booking-inner">
          <p className="eyebrow eyebrow-light">Ваше время</p>
          <h2>
            Давайте начнём
            <br />
            <em>с разговора.</em>
          </h2>
          <p>
            Расскажите, что хочется изменить. Мы подберём мастера, уточним
            стоимость и найдём удобное окно.
          </p>
          <div className="booking-actions">
            <a className="button button-accent" href={SALON_INFO.bookingUrl}>
              Записаться онлайн
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-ghost" href={SALON_INFO.phoneLink}>
              {SALON_INFO.phone}
            </a>
          </div>
          <div className="booking-details">
            <div>
              <span>Адрес</span>
              <strong>{SALON_INFO.address}</strong>
            </div>
            <div>
              <span>График</span>
              <strong>
                {SALON_INFO.scheduleWeekdays}
                <br />
                {SALON_INFO.scheduleWeekends}
              </strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
