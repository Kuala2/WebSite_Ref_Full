"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SALON_INFO } from "@/constants/data";

const navLinks = [
  { name: "Услуги", note: "цены и процедуры", href: "/uslugi" },
  { name: "Работы", note: "портфолио мастеров", href: "/raboty" },
  { name: "О салоне", note: "команда и подход", href: "/o-salone" },
  { name: "Контакты", note: "адрес и запись", href: "/kontakty" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  useEffect(() => setIsOpen(false), [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Стенс — главная">
          Стенс
        </Link>

        <div className="header-descriptor">
          салон красоты
          <br />
          Нижний Новгород
        </div>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "is-active" : ""}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link className="header-booking" href="/kontakty#zapis">
          Записаться
          <span aria-hidden="true">↗</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
        <nav aria-label="Мобильная навигация">
          <Link className={pathname === "/" ? "is-active" : ""} href="/">
            <span className="mobile-nav-name">Главная</span>
            <span className="mobile-nav-note">коротко о главном</span>
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "is-active" : ""}
            >
              <span className="mobile-nav-name">{link.name}</span>
              <span className="mobile-nav-note">{link.note}</span>
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <a href={SALON_INFO.phoneLink}>{SALON_INFO.phone}</a>
          <p>{SALON_INFO.address}</p>
          <Link className="button button-accent" href="/kontakty#zapis">
            Выбрать время <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
