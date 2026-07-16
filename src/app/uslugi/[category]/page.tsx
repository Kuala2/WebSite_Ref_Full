import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SERVICES_DATA, MASTERS } from "@/constants/data";
import PriceTable from "@/components/UI/PriceTable";
import Accordion from "@/components/UI/Accordion";
import MasterCard from "@/components/UI/MasterCard";
import Button from "@/components/UI/Button";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return [
    { category: "okrashivanie" },
    { category: "strizhki" },
    { category: "manikyur-pedikyur" },
    { category: "permanent" },
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === category);
  
  if (!service) {
    return {
      title: "Услуга не найдена — Салон Стенс",
    };
  }

  return {
    title: `${service.title} в Нижнем Новгороде — Салон красоты Стенс`,
    description: service.description,
  };
}

export default async function ServiceCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === category);

  if (!service) {
    notFound();
  }

  // Get masters who specialize in this category
  const categoryMasters = MASTERS.filter((master) =>
    master.categories.includes(category)
  );

  return (
    <div className="pb-32 bg-brand-cream">
      {/* Hero */}
      <section className="pt-32 pb-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/50 mb-8">
            <Link href="/" className="hover:text-brand-dark transition-colors">Главная</Link>
            <span className="mx-4">/</span>
            <Link href="/uslugi" className="hover:text-brand-dark transition-colors">Услуги</Link>
            <span className="mx-4">/</span>
            <span className="text-brand-dark">{service.title}</span>
          </nav>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-brand-dark mb-12">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Main Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="w-full aspect-[21/9] relative overflow-hidden rounded-2xl">
          <Image
            src={service.image}
            alt={`Стенс: ${service.title}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Description */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <div>
            <h2 className="font-serif-display text-4xl md:text-6xl text-brand-dark mb-12">
              О процедуре
            </h2>
            <div className="pt-8">
              <Button href="/kontakty#zapis" variant="primary">
                Записаться онлайн
              </Button>
            </div>
          </div>
          
          <div className="space-y-8 text-lg text-brand-dark/90 font-normal leading-relaxed">
            <p className="text-2xl md:text-3xl text-brand-dark font-serif-display leading-tight mb-12">
              {service.longDescription}
            </p>
            
            {category === "okrashivanie" && (
              <>
                <p>
                  Наши стилисты — эксперты в исправлении некачественных домашних экспериментов, пятен и резких переходов. Мы знаем, как вывести вас из забитого темного пигмента в сияющий блонд без ущерба для структуры волос.
                </p>
                <p>
                  Каждое осветление проводится по щадящей технологии с обязательным применением плексов. Мы используем профессиональную немецкую косметику <strong>Wella Professionals</strong> и люксовые японские уходы <strong>Lebel</strong>, которые увлажняют волосы изнутри.
                </p>
              </>
            )}

            {category === "permanent" && (
              <>
                <p>
                  Мы убеждены, что перманентный макияж должен быть практически незаметен постороннему глазу. Никаких синих или фиолетовых бровей — только воздушное пудровое напыление и акварельная бесконтурная растушевка губ.
                </p>
                <p>
                  Аппликационная анестезия гарантирует 100% безболезненность. Кожа заживает за несколько дней без корок, оставляя естественный благородный оттенок на 1.5–2 года.
                </p>
              </>
            )}

            {category === "strizhki" && (
              <>
                <p>
                  Умные стрижки от «Стенс» создаются с учетом геометрии вашего лица и естественной текстуры волос. Мы делаем срезы так, чтобы волосы сами укладывались в красивую форму после обычного мытья и сушки феном.
                </p>
                <p>
                  Помимо повседневных образов, наши мастера подберут и выполнят вечерние или свадебные укладки, которые гарантированно выдержат любые погодные условия и продержатся до конца праздника.
                </p>
              </>
            )}

            {category === "manikyur-pedikyur" && (
              <>
                <p>
                  Ваше здоровье — наш абсолютный приоритет. Для каждого клиента мы готовим индивидуальный крафт-пакет с металлическими инструментами, прошедшими дезинфекцию и стерилизацию в сухожаровом шкафу ГП-10 по стандартам СанПиН.
                </p>
                <p>
                  Мы работаем на гипоаллергенных материалах премиум-класса (Luxio, Uno) и предлагаем инновационный SMART-педикюр, который возвращает стопам младенческую гладкость без использования грубых лезвий.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="font-serif-display text-4xl md:text-7xl text-brand-dark">Прайс-лист</h2>
          </div>
          <PriceTable items={service.prices} />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h2 className="font-serif-display text-4xl md:text-7xl text-brand-dark">Наши работы</h2>
            <Link href="/raboty" className="text-[10px] tracking-[0.2em] uppercase border-b border-brand-dark pb-1 hover:text-brand-accent hover:border-brand-accent transition-all hidden md:block">
              Смотреть все
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.gallery.map((imgUrl, idx) => (
              <div key={idx} className="relative aspect-[3/4] overflow-hidden group rounded-2xl">
                <Image
                  src={imgUrl}
                  alt={`${service.title} — пример работы`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="mt-16 text-center md:hidden">
            <Button href="/raboty" variant="outline">
              Вся галерея
            </Button>
          </div>
        </div>
      </section>

      {/* Masters */}
      <section className="py-32 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="font-serif-display text-4xl md:text-7xl text-brand-dark">Команда мастеров</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {categoryMasters.map((master) => (
              <MasterCard key={master.id} master={master} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <h2 className="font-serif-display text-4xl md:text-6xl text-brand-dark">Частые вопросы</h2>
            </div>
            <div className="md:col-span-2">
              <Accordion items={service.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-brand-dark text-brand-cream text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <h2 className="font-serif-display text-5xl md:text-8xl tracking-tighter">
            Записаться
          </h2>
          <p className="text-xl md:text-2xl font-normal opacity-90 max-w-2xl mx-auto">
            Онлайн запись работает круглосуточно.
          </p>
          <div className="pt-8">
            <Button href="/kontakty#zapis" variant="secondary">
              Записаться
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
