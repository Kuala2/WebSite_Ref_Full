import { Metadata } from "next";
import Link from "next/link";
import { SALON_INFO } from "@/constants/data";
import Button from "@/components/UI/Button";
import Accordion from "@/components/UI/Accordion";

export const metadata: Metadata = {
  title: "Контакты и онлайн-запись — Салон красоты Стенс",
  description: "Контакты салона красоты «Стенс» в Нижнем Новгороде: адрес на Большой Покровской, телефон 8 (831) 000-00-00, режим работы и онлайн-запись со скидкой 10%.",
};

const CONTACT_FAQS = [
  {
    question: "Как перенести или отменить запись?",
    answer: "Если ваши планы изменились, пожалуйста, предупредите нас об отмене или переносе визита не менее чем за 24 часа. Вы можете сделать это по телефону 8 (831) 000-00-00, написав нам в ВКонтакте, или самостоятельно через ссылку в СМС-подтверждении вашей записи. Предоплата (если она была внесена) сохраняется.",
  },
  {
    question: "Что делать, если я опаздываю?",
    answer: "Мы очень ценим время каждого гостя и наших мастеров. При опоздании более чем на 15 минут процедура может быть выполнена в сокращенном объеме, либо перенесена на другое время. Пожалуйста, позвоните нам, если понимаете, что задерживаетесь.",
  },
  {
    question: "Нужна ли предварительная запись?",
    answer: "Мы работаем преимущественно по предварительной записи, чтобы гарантировать вам отсутствие очередей и свободное время мастера. Однако, если у нас есть свободные окна, мы с радостью примем вас без записи — вы можете позвонить по телефону перед выходом.",
  },
];

export default function ContactsPage() {
  return (
    <div className="pb-32 bg-brand-cream">
      {/* Hero Header */}
      <section className="pt-32 pb-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/50 mb-8">
            <Link href="/" className="hover:text-brand-dark transition-colors">Главная</Link>
            <span className="mx-4">/</span>
            <span className="text-brand-dark">Контакты</span>
          </nav>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-brand-dark mb-12">
            Контакты
          </h1>
          <p className="text-lg md:text-xl text-brand-dark/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Исторический центр Нижнего Новгорода.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          
          {/* Details */}
          <div className="space-y-16">
            <div className="space-y-12">
              <div>
                <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-4">Салон «Стенс»</h4>
                <p className="text-2xl md:text-3xl font-serif-display text-brand-dark leading-tight">{SALON_INFO.address}</p>
                <p className="text-sm font-normal text-brand-dark/70 mt-4 block">
                  м. Горьковская (5 минут пешком)
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-4">Режим работы</h4>
                <p className="text-xl text-brand-dark font-normal">{SALON_INFO.scheduleWeekdays}</p>
                <p className="text-xl text-brand-dark font-normal">{SALON_INFO.scheduleWeekends}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-4">Телефон</h4>
                <a
                  href={SALON_INFO.phoneLink}
                  className="font-serif-display text-3xl md:text-5xl text-brand-dark hover:text-brand-accent transition-colors block"
                >
                  {SALON_INFO.phone}
                </a>
              </div>
            </div>

            {/* Booking Box */}
            <div id="zapis" className="border-t border-brand-dark/20 pt-16 scroll-mt-32">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-4 block">Скидка 10% на первый визит</span>
              <h3 className="font-serif-display text-4xl text-brand-dark mb-8">Онлайн-запись 24/7</h3>
              
              <div className="flex flex-col gap-6 w-full max-w-sm">
                <Button href={SALON_INFO.bookingUrl} variant="primary">
                  Записаться в DIKIDI
                </Button>
                <Button href={SALON_INFO.vkUrl} variant="outline">
                  Написать ВКонтакте
                </Button>
              </div>
            </div>
          </div>

          {/* Map & Directions */}
          <div className="flex flex-col gap-8">
            <div className="relative h-[400px] md:h-[500px] w-full bg-brand-dark/5 rounded-2xl overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?text=%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9%20%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F%20%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%2C%2058&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Салон Стенс на карте Яндекс"
                className="absolute inset-0 w-full h-full opacity-90"
              ></iframe>
            </div>
            
            <div className="bg-brand-cream border border-brand-dark/10 p-8 rounded-2xl shadow-sm">
              <h4 className="font-serif-display text-2xl text-brand-dark mb-4">Как добраться</h4>
              <p className="text-sm md:text-base font-normal text-brand-dark/90 leading-relaxed mb-4">
                Салон расположен в историческом центре города, на пешеходной улице Большой Покровской.
              </p>
              <ul className="text-sm md:text-base font-normal text-brand-dark/90 leading-relaxed list-disc list-inside space-y-2">
                <li><strong>От станции метро «Горьковская»:</strong> 5 минут пешком по улице Большая Покровская в сторону площади Минина.</li>
                <li><strong>На автомобиле:</strong> парковка возможна на соседних улицах (ул. Малая Покровская, ул. Звездинка) по городскому тарифу.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Booking FAQ */}
      <section className="py-32 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <h2 className="font-serif-display text-4xl md:text-6xl text-brand-dark">Правила визита</h2>
            </div>
            <div className="md:col-span-2">
              <Accordion items={CONTACT_FAQS} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
