import Link from "next/link";
import { SALON_INFO } from "@/constants/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-cream pt-24 md:pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant Text */}
        <div className="mb-24 md:mb-32">
          <h2 className="font-serif-display text-[15vw] md:text-[12rem] leading-[0.8] tracking-tighter">
            Стенс
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24 border-t border-brand-cream/10 pt-16">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg md:text-2xl font-light leading-relaxed max-w-sm">
              Искусство преображения и заботы в Нижнем Новгороде с {SALON_INFO.established} года.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-6 pt-4">
              <a
                href={SALON_INFO.vkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] hover:text-brand-accent transition-colors"
                aria-label="ВКонтакте"
              >
                ВКонтакте
              </a>
              <a
                href={SALON_INFO.tgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] hover:text-brand-accent transition-colors"
                aria-label="Telegram"
              >
                Телеграм
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-brand-accent mb-8">Навигация</h3>
            <ul className="space-y-4">
              {['Услуги', 'Работы', 'О салоне', 'Контакты'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item === 'Работы' ? 'raboty' : item === 'Услуги' ? 'uslugi' : item === 'О салоне' ? 'o-salone' : 'kontakty'}`} 
                    className="text-sm tracking-wide uppercase hover:text-brand-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-brand-accent mb-4">Визит</h3>
              <p className="text-sm font-light leading-relaxed">
                {SALON_INFO.address}<br/>
                <span className="text-brand-cream/50 mt-1 block">м. Горьковская (5 мин)</span>
              </p>
            </div>
            
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-brand-accent mb-4">Связь</h3>
              <a href={SALON_INFO.phoneLink} className="text-sm font-light hover:text-brand-accent transition-colors">
                {SALON_INFO.phone}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase text-brand-cream/30 space-y-4 md:space-y-0">
          <p>&copy; {currentYear} Салон красоты Стенс. Все права защищены.</p>
          <Link href="/privacy" className="hover:text-brand-accent transition-colors">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}

