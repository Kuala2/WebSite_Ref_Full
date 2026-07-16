import WarmImage from "@/components/UI/WarmImage";
import Link from "next/link";
import { SALON_INFO, ADVANTAGES, TOP_SERVICES, MASTERS, REVIEWS, MAIN_FAQS } from "@/constants/data";
import Button from "@/components/UI/Button";
import MasterCard from "@/components/UI/MasterCard";
import ReviewCard from "@/components/UI/ReviewCard";
import Accordion from "@/components/UI/Accordion";

export default function HomePage() {
  const previewMasters = MASTERS.slice(0, 3);
  const previewReviews = REVIEWS.slice(0, 3);
  const previewWorks = [
    "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <div className="w-full bg-brand-cream text-brand-dark selection:bg-brand-accent selection:text-white">
      
      {/* 1. HERO SECTION (EDITORIAL) */}
      <section className="relative w-full min-h-[100svh] flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-3/4 md:w-1/2 h-full z-0">
          <WarmImage
            src="https://images.unsplash.com/photo-1521590832167-7bfc1738d0e7?auto=format&fit=crop&q=80&w=1600"
            alt="Стенс - Премиальный салон красоты"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-left-top opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/90 to-transparent md:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cream/80 via-brand-cream/50 to-transparent hidden md:block" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.12em] text-brand-accent font-semibold mb-4 block">
              Искусство преображения
            </span>
            <h1 className="font-serif-display text-[clamp(72px,9vw,140px)] leading-[0.9] tracking-tight mb-8 md:mb-12">
              Стенс
            </h1>
            
            <div className="md:ml-4 space-y-8 max-w-xl">
              <p className="text-lg md:text-xl font-medium text-brand-dark leading-relaxed">
                Сложное окрашивание, стрижки, маникюр и перманентный макияж в центре Нижнего Новгорода
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 pt-4 items-center sm:items-start">
                <Button href="/kontakty#zapis" variant="primary" className="px-10 py-5 text-lg">
                  Записаться
                </Button>
                <div className="flex flex-col justify-center text-sm font-semibold tracking-[0.12em] uppercase text-brand-dark gap-2">
                  <span>{SALON_INFO.address}</span>
                  <span className="text-brand-accent">★ {SALON_INFO.rating} / {SALON_INFO.reviewsCount} отзывов</span>
                </div>
              </div>
            </div>
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
            <div className="relative w-full aspect-[3/4] hidden md:block rounded-[4px] overflow-hidden mt-8">
              <WarmImage 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600" 
                alt="Интерьер салона красоты Стенс" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
            {ADVANTAGES.map((adv, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <span className="font-serif-display text-[56px] leading-none text-brand-caramel/35">
                  0{idx + 1}
                </span>
                <h3 className="font-serif-display text-3xl">
                  {adv.title}
                </h3>
                <p className="text-lg text-brand-dark font-medium leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TOP SERVICES (EDITORIAL CAROUSEL / MASONRY) */}
      <section className="py-32 md:py-48 bg-brand-brown text-brand-cream">
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
                <div className="relative aspect-[3/4] w-full mb-12 rounded-[4px] overflow-hidden">
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

      {/* 4. GALLERY (ASYMMETRICAL) */}
      <section className="py-32 md:py-48 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 text-center">
          <h2 className="font-serif-display text-4xl md:text-5xl mb-12">
            Наши работы
          </h2>
          <Button href="/raboty" variant="outline">
            Смотреть галерею
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewWorks.map((src, idx) => (
            <div key={idx} className="relative aspect-[3/4] w-full overflow-hidden group rounded-[4px] shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
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
      <section className="bg-brand-brown text-white min-h-[60vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-brand-cream to-transparent pointer-events-none" />
        
        <h2 className="font-serif-display text-5xl md:text-6xl lg:text-[64px] leading-[1.1] tracking-tight mb-12 relative z-10">
          Запишитесь на удобное время
        </h2>
        
        <div className="flex flex-col gap-8 items-center relative z-10">
          <Button href="/kontakty#zapis" variant="primary">
            Онлайн-запись
          </Button>
          <div className="flex flex-col gap-2 text-brand-cream/80 text-lg font-medium">
            <a href={SALON_INFO.phoneLink} className="hover:text-brand-caramel transition-colors">
              {SALON_INFO.phone}
            </a>
            <span className="text-sm opacity-80">{SALON_INFO.address}</span>
          </div>
        </div>
      </section>

    </div>
  );
}
