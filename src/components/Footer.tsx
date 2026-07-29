import Link from "next/link";
import { SALON_INFO } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wordmark">Стенс</div>
      <div className="footer-grid">
        <p>
          Салон, где красота остаётся вашей.
          <br />
          Нижний Новгород · с {SALON_INFO.established} года
        </p>
        <div>
          <span>Связаться</span>
          <a href={SALON_INFO.phoneLink}>{SALON_INFO.phone}</a>
          <a href={SALON_INFO.vkUrl}>ВКонтакте</a>
        </div>
        <div>
          <span>Навигация</span>
          <Link href="/#services">Услуги</Link>
          <Link href="/#works">Работы</Link>
          <Link href="/#team">Мастера</Link>
        </div>
        <div>
          <span>Адрес</span>
          <p>{SALON_INFO.address}</p>
          <p>{SALON_INFO.locationNote}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Стенс</span>
        <Link href="/privacy">Политика конфиденциальности</Link>
        <span>Сделано с вниманием к деталям</span>
      </div>
    </footer>
  );
}
