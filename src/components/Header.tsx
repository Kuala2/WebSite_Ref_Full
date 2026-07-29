"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SALON_INFO } from "@/constants/data";

const navLinks = [
  { name: "Услуги", href: "/#services" },
  { name: "Работы", href: "/#works" },
  { name: "Мастера", href: "/#team" },
  { name: "Контакты", href: "/#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" onClick={() => setIsOpen(false)}>
          Стенс
        </Link>

        <div className="header-descriptor">
          салон красоты
          <br />
          Нижний Новгород
        </div>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>

        <a className="header-booking" href={SALON_INFO.bookingUrl}>
          Записаться
          <span aria-hidden="true">↗</span>
        </a>

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
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a href={SALON_INFO.phoneLink}>{SALON_INFO.phone}</a>
          <p>{SALON_INFO.address}</p>
          <a className="button button-accent" href={SALON_INFO.bookingUrl}>
            Выбрать время
          </a>
        </div>
      </div>
    </header>
  );
}
