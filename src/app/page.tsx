import WarmImage from "@/components/UI/WarmImage";
import Link from "next/link";
import { SALON_INFO, ADVANTAGES, TOP_SERVICES, MASTERS, REVIEWS, MAIN_FAQS } from "@/constants/data";
import Button from "@/components/UI/Button";
import MasterCard from "@/components/UI/MasterCard";
import ReviewCard from "@/components/UI/ReviewCard";
import Accordion from "@/components/UI/Accordion";

export default function Home() {
  const previewMasters = MASTERS.slice(0, 3);
  const previewReviews = REVIEWS.slice(0, 3);
  const previewWorks = ["/images/work-1.jpg", "/images/work-2.jpg", "/images/work-3.jpg"];

  return (
    <div className="w-full bg-brand-cream text-brand-dark selection:bg-brand-accent selection:text-white">
      
      {/* 1. HERO (TWO COLUMNS) */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-[52%_48%] min-h-[86vh]">
        {/* Левая колонка */}
        <div className="relative w-full h-[50vh] lg:h-auto min-h-full">
          <WarmImage 
            src="/images/hero.jpg"
            alt="Интерьер салона Стенс" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>

        {/* Правая колонка */}
        <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-24 py-16 lg:py-0 bg-[#EFE8DC]">
          <span className="text-[13px] tracking-[0.22em] text-[#6E2A2A] uppercase mb-8 font-medium">
            Салон красоты · Нижний Новгород
          </span>
          <h1 className="font-serif-display font-bold text-[#2A211B] text-7xl sm:text-8xl lg:text-[110px] leading-[0.9] mb-8 tracking-tight uppercase">
            Стенс
          </h1>
          <p className="text-[21px] text-[#2A211B] max-w-md leading-relaxed mb-12 font-medium">
            Премиальный сервис и <span className="font-serif italic text-[#6E2A2A] lowercase">эстетика</span> в каждой детали
          </p>
          <div className="mb-14">
            <p className="font-serif text-[27px] text-[#2A211B]">
              с 2018 — года работы / 6 — мастеров / 4.9 — рейтинг
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <Link 
              href="#uslugi" 
              className="inline-block bg-[#6E2A2A] hover:bg-[#5a2121] text-white px-[56px] py-[22px] text-lg font-medium uppercase tracking-[0.1em] transition-all duration-300 rounded-sm shadow-xl hover:-translate-y-1"
            >
              Записаться
            </Link>
            <a href={SALON_INFO.phoneLink} className="text-[#2A211B] font-medium text-lg hover:text-[#6E2A2A] transition-colors">
              {SALON_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 2. ADVANTAGES (MINIMALIST LIST) */}
      <section className="py-32 md:py-48 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-brand-dark/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-4 flex flex-col gap-8">
            <h2 className="font-serif-display text-4xl md:text-5xl sticky top-32">
              Почему выбирают Стенс
            </h2>
            <div className="relative w-full aspect-[3/4] hidden md:block rounded-sm overflow-hidden mt-8">
              <WarmImage 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600" 
                alt="Интерьер салона красоты Стенс" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-24">
            {ADVANTAGES.map((adv, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <h3 className="font-serif-display text-4xl md:text-5xl leading-tight">
                  {adv.title}
                </h3>
                <p className="text-xl text-brand-dark font-medium leading-relaxed opacity-80">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TOP SERVICES (EDITORIAL CAROUSEL / MASONRY) */}
      <section className="py-32 md:py-48 bg-brand-dark text-brand-cream noise-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24 md:mb-32">
            <h2 className="font-serif-display text-4xl md:text-5xl">
              Услуги и цены
            </h2>
            <Link href="/uslugi" className="text-[10px] uppercase tracking-[0.12em] hover:text-brand-accent transition-colors pb-2 border-b border-brand-cream/20">
              Посмотреть меню &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-16 md:gap-y-48">
            {TOP_SERVICES.map((service, idx) => (
              <div key={idx} className={`group flex flex-col ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}>
                <div className="relative aspect-[3/4] w-full mb-12 rounded-sm overflow-hidden">
                  <WarmImage
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex justify-between items-start gap-4 mb-6 border-b border-brand-cream/20 pb-6">
                  <h3 className="font-serif-display text-3xl md:text-4xl">
                    {service.title}
                  </h3>
                  <span className="text-xl md:text-2xl font-serif-display text-brand-caramel shrink-0 mt-3">
                    от {service.priceFrom}
                  </span>
                </div>
                
                <p className="text-lg text-brand-cream font-normal leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <Link href={`/uslugi/${service.slug}`} className="text-[10px] uppercase tracking-[0.12em] hover:text-brand-accent transition-colors flex items-center">
                  Подробнее
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GALLERY (FULL BLEED) */}
      <section className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
          <h2 className="font-serif-display text-4xl md:text-5xl mb-12">
            Наши работы
          </h2>
          <Link href="/raboty" className="inline-block border border-brand-dark/20 px-8 py-4 text-sm font-medium uppercase tracking-[0.1em] hover:bg-brand-dark hover:text-brand-cream transition-colors rounded-sm">
            Смотреть галерею
          </Link>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0">
          {previewWorks.map((src, idx) => (
            <div key={idx} className="relative aspect-square md:aspect-[3/4] w-full overflow-hidden group">
               <WarmImage src={src} alt="Работа салона Стенс" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      {/* 5. TEAM (MINIMAL) */}
      <section className="py-32 md:py-48 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24">
            <h2 className="font-serif-display text-4xl md:text-5xl">
              Команда мастеров
            </h2>
            <Link href="/o-salone" className="text-[10px] uppercase tracking-[0.12em] hover:text-brand-accent transition-colors pb-2 border-b border-brand-dark/20">
              Вся команда &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {previewMasters.map((master) => (
              <MasterCard key={master.id} master={master} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. REVIEWS */}
      <section className="py-32 border-t border-brand-dark/10 bg-[#F2ECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif-display text-4xl md:text-5xl mb-16 text-center">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-32 border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif-display text-4xl md:text-5xl mb-16 text-center">Частые вопросы</h2>
          <Accordion items={MAIN_FAQS} />
        </div>
      </section>

      {/* 8. CTA (GIANT TEXT) */}
      <section className="bg-brand-dark text-brand-cream min-h-[70vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-24 relative noise-bg overflow-hidden">
        <h2 className="font-serif-display text-5xl md:text-7xl lg:text-[90px] leading-[0.9] tracking-[-0.02em] mb-16 relative z-10 uppercase">
          Запишитесь на<br/>
          <span className="font-italic-accent text-brand-caramel lowercase text-[1.1em]">удобное время</span>
        </h2>
        
        <div className="flex flex-col gap-12 items-center relative z-10">
          <Link 
            href="/kontakty#zapis" 
            className="bg-brand-bordeaux hover:bg-brand-bordeaux/90 text-brand-cream px-12 py-5 text-lg md:text-xl font-medium transition-all duration-300 rounded-sm shadow-xl hover:-translate-y-1"
          >
            Онлайн-запись
          </Link>
          <div className="flex flex-col gap-2 text-brand-cream/80 text-lg md:text-xl font-medium">
            <a href={SALON_INFO.phoneLink} className="hover:text-brand-bordeaux transition-colors font-sans">
              {SALON_INFO.phone}
            </a>
            <span className="text-sm md:text-base opacity-60 font-sans">{SALON_INFO.address}</span>
          </div>
        </div>
      </section>

    </div>
  );
}
