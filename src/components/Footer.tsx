import Link from "next/link";
import { SALON_INFO } from "@/constants/data";

const footerNav = [
  ["Услуги и цены", "/uslugi"],
  ["Наши работы", "/raboty"],
  ["О салоне и мастерах", "/o-salone"],
  ["Контакты и запись", "/kontakty"],
] as const;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link className="footer-logo" href="/">
            Стенс
          </Link>
          <p>Красота, которая остаётся вашей.</p>
        </div>
      </div>

      <div className="footer-grid">
        <div>
          <span>Навигация</span>
          {footerNav.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <span>Связь</span>
          <a href={SALON_INFO.phoneLink}>{SALON_INFO.phone}</a>
          {SALON_INFO.vkUrl && <a href={SALON_INFO.vkUrl}>ВКонтакте</a>}
        </div>
        <div>
          <span>Адрес</span>
          <p>{SALON_INFO.address}</p>
          <p>{SALON_INFO.locationNote}</p>
        </div>
        <div>
          <span>Режим работы</span>
          <p>{SALON_INFO.scheduleWeekdays}</p>
          <p>{SALON_INFO.scheduleWeekends}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Стенс</span>
        <Link href="/privacy">Политика конфиденциальности</Link>
      </div>
    </footer>
  );
}
