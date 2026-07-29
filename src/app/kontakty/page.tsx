import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SALON_INFO } from "@/constants/data";
import Accordion from "@/components/UI/Accordion";
import Button from "@/components/UI/Button";
import LazyMap from "@/components/UI/LazyMap";

export const metadata: Metadata = {
  title: "Контакты и онлайн-запись — «Стенс»",
  description:
    "Адрес, телефон, режим работы и онлайн-запись в салон красоты «Стенс» в Нижнем Новгороде.",
};

const CONTACT_FAQS = [
  {
    question: "Как перенести или отменить запись?",
    answer:
      "Предупредите нас не менее чем за 24 часа по телефону, во ВКонтакте или через ссылку из СМС-подтверждения. Внесённая предоплата сохранится при переносе.",
  },
  {
    question: "Что делать, если я опаздываю?",
    answer:
      "Позвоните администратору. При опоздании более чем на 15 минут процедуру, возможно, придётся сократить или перенести, чтобы не задерживать следующего гостя.",
  },
  {
    question: "Можно прийти без записи?",
    answer:
      "Если у мастера есть свободное окно — да. Лучше позвонить перед выходом, чтобы мы сразу подтвердили возможность визита.",
  },
];

export default function ContactsPage() {
  return (
    <div className="inner-page contact-page">
      <section className="page-hero">
        <div className="section-shell page-hero-grid">
          <div>
            <nav className="breadcrumbs" aria-label="Хлебные крошки">
              <Link href="/">Главная</Link>
              <span>/</span>
              <span>Контакты</span>
            </nav>
            <p className="section-label">Связаться и записаться</p>
            <h1>Контакты</h1>
          </div>
          <p className="page-hero-lead">
            Мы на Большой Покровской, в пяти минутах от метро «Горьковская».
            Онлайн-запись работает круглосуточно.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="section-shell contact-main-grid">
          <div className="contact-photo">
            <Image
              src="/images/interior-2.jpg"
              alt="Интерьер салона «Стенс»"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
              className="cover-image"
            />
          </div>

          <div className="contact-details">
            <div className="contact-detail">
              <span>Адрес</span>
              <strong>{SALON_INFO.address}</strong>
              <p>{SALON_INFO.locationNote}</p>
            </div>
            <div className="contact-detail">
              <span>Режим работы</span>
              <strong>{SALON_INFO.scheduleWeekdays}</strong>
              <strong>{SALON_INFO.scheduleWeekends}</strong>
            </div>
            <div className="contact-detail">
              <span>Телефон</span>
              <a href={SALON_INFO.phoneLink}>{SALON_INFO.phone}</a>
            </div>

            <div className="contact-booking" id="zapis">
              <p className="section-label">Онлайн-запись 24/7</p>
              <h2>Выберите мастера и время</h2>
              <p>
                Если сомневаетесь в услуге, администратор поможет подобрать
                подходящий формат консультации.
              </p>
              <div>
                <Button href={SALON_INFO.bookingUrl}>Записаться онлайн</Button>
                {SALON_INFO.vkUrl && (
                  <Button href={SALON_INFO.vkUrl} variant="outline">
                    Написать ВКонтакте
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="section-shell contact-map-grid">
          <div>
            <p className="section-label">Как добраться</p>
            <h2>Самый центр города</h2>
            <div className="route-list">
              <article>
                <strong>Пешком</strong>
                <p>
                  5 минут от метро «Горьковская» по Большой Покровской. Вход со
                  двора через арку.
                </p>
              </article>
              <article>
                <strong>На автомобиле</strong>
                <p>
                  Городская парковка доступна на Малой Покровской и улице
                  Звездинка.
                </p>
              </article>
            </div>
          </div>
          <LazyMap />
        </div>
      </section>

      <section className="contact-faq">
        <div className="section-shell split-section">
          <div>
            <p className="section-label">Правила визита</p>
            <h2>Перед записью</h2>
          </div>
          <Accordion items={CONTACT_FAQS} />
        </div>
      </section>
    </div>
  );
}
