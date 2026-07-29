import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MASTERS, REVIEWS } from "@/constants/data";
import Button from "@/components/UI/Button";
import MasterCard from "@/components/UI/MasterCard";
import ReviewCard from "@/components/UI/ReviewCard";

export const metadata: Metadata = {
  title: "О салоне и команде — «Стенс»",
  description:
    "История, команда и стандарты салона красоты «Стенс» в Нижнем Новгороде.",
};

export default function AboutPage() {
  return (
    <div className="inner-page">
      <section className="page-hero">
        <div className="section-shell page-hero-grid">
          <div>
            <nav className="breadcrumbs" aria-label="Хлебные крошки">
              <Link href="/">Главная</Link>
              <span>/</span>
              <span>О салоне</span>
            </nav>
            <p className="section-label">Стенс · с 2018 года</p>
            <h1>О салоне</h1>
          </div>
          <p className="page-hero-lead">
            Пространство в центре Нижнего Новгорода, где сильная экспертиза не
            отменяет человеческого отношения.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="section-shell about-story-grid">
          <div className="about-story-photo">
            <Image
              src="/images/interior-1.jpg"
              alt="Интерьер салона «Стенс»"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
              className="cover-image"
            />
          </div>
          <div className="about-story-copy">
            <p className="section-label">Наша история</p>
            <h2>Салон, в который хочется возвращаться</h2>
            <p>
              Мы открыли «Стенс» в 2018 году с простой идеей: премиальное
              качество должно сочетаться с нормальным, спокойным сервисом.
            </p>
            <p>
              За это время собрали сильную команду мастеров с опытом от 8 лет.
              Каждый продолжает учиться, но берёт в работу только проверенные
              техники.
            </p>
            <div className="about-facts">
              <div>
                <strong>8 лет</strong>
                <span>работаем в городе</span>
              </div>
              <div>
                <strong>6</strong>
                <span>мастеров в команде</span>
              </div>
              <div>
                <strong>4.9</strong>
                <span>рейтинг гостей</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-standards">
        <div className="section-shell">
          <div className="readable-heading">
            <div>
              <p className="section-label section-label--light">Наши стандарты</p>
              <h2>Забота видна в деталях</h2>
            </div>
            <p>
              Три вещи, на которых мы не экономим: безопасность, материалы и
              время мастера.
            </p>
          </div>
          <div className="about-standards-grid">
            <article>
              <span>01</span>
              <h3>Стерильность</h3>
              <p>
                Полный цикл обработки. Крафт-пакет открывается только при госте.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Материалы</h3>
              <p>
                Используем профессиональные продукты и не заменяем их дешёвыми
                аналогами.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Честная консультация</h3>
              <p>
                Предлагаем только то, что действительно подходит и безопасно.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-team" id="team">
        <div className="section-shell">
          <div className="readable-heading">
            <div>
              <p className="section-label">Команда</p>
              <h2>Мастера «Стенс»</h2>
            </div>
            <p>
              Выберите специалиста по его сильной стороне или доверьте подбор
              администратору.
            </p>
          </div>
          <div className="master-grid">
            {MASTERS.map((master) => (
              <MasterCard master={master} key={master.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="about-interior">
        <div className="section-shell">
          <div className="readable-heading">
            <div>
              <p className="section-label section-label--light">Пространство</p>
              <h2>Здесь можно выдохнуть</h2>
            </div>
            <p>
              Исторический центр, естественный свет и спокойная атмосфера без
              салонной суеты.
            </p>
          </div>
          <div className="interior-grid">
            {["/images/interior-2.jpg", "/images/interior_3.jpg"].map(
              (image, index) => (
                <figure key={`${image}-${index}`}>
                  <Image
                    src={image}
                    alt={`Интерьер салона, фото ${index + 1}`}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                    className="cover-image"
                  />
                </figure>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="about-reviews">
        <div className="section-shell">
          <div className="readable-heading">
            <div>
              <p className="section-label">Отзывы</p>
              <h2>Что говорят гости</h2>
            </div>
            <p>Не короткие оценки, а конкретные истории и результаты.</p>
          </div>
          <div className="review-grid">
            {REVIEWS.slice(0, 3).map((review) => (
              <ReviewCard review={review} key={review.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="simple-cta simple-cta--dark">
        <div className="section-shell simple-cta-grid">
          <div>
            <p className="section-label section-label--light">Первый визит</p>
            <h2>Познакомимся?</h2>
          </div>
          <div>
            <p>
              Расскажите задачу — мы подберём мастера и удобное время без
              длинных переписок.
            </p>
            <Button href="/kontakty#zapis">Записаться</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
