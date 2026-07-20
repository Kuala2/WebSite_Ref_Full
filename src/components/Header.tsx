"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SALON_INFO } from "@/constants/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Услуги", href: "/uslugi" },
    { name: "Работы", href: "/raboty" },
    { name: "О салоне", href: "/o-salone" },
    { name: "Контакты", href: "/kontakty" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F4EFE7] text-[#2A211B] transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/" 
              className="font-serif-display text-4xl font-bold text-[#2A211B] tracking-tight hover:text-[#6E2A2A] transition-colors"
              onClick={handleLinkClick}
            >
              Стенс
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs tracking-[0.12em] uppercase transition-colors duration-300 py-2 ${
                    isActive
                      ? "text-[#6E2A2A]"
                      : "text-[#2A211B]/80 hover:text-[#6E2A2A]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call & Book */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href={SALON_INFO.phoneLink}
              className="text-xs tracking-[0.12em] uppercase text-[#2A211B] hover:text-[#6E2A2A] transition-colors py-2"
            >
              {SALON_INFO.phone}
            </a>
            <Link
              href="/kontakty#zapis"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#6E2A2A] text-white hover:bg-[#5a2121] text-xs uppercase tracking-[0.12em] font-bold rounded-sm shadow-sm hover:shadow-md transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              Запись онлайн
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-1 text-[#2A211B] min-h-[44px] min-w-[44px] transition-all duration-300 ${
                isOpen ? "border border-[#2A211B] rounded-sm" : ""
              }`}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Меню</span>
              {isOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-[100] bg-[#F4EFE7] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Overlay Header (Logo + Close) */}
        <div className="flex justify-between items-center h-24 px-4 sm:px-6">
          <Link 
            href="/" 
            className="font-serif-display text-4xl font-bold text-[#2A211B] tracking-tight hover:text-[#6E2A2A] transition-colors"
            onClick={handleLinkClick}
          >
            Стенс
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="inline-flex items-center justify-center p-1 text-[#2A211B] min-h-[44px] min-w-[44px] transition-all duration-300 border border-[#2A211B] rounded-sm"
          >
            <span className="sr-only">Закрыть меню</span>
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col h-full pt-8 px-6 pb-12 overflow-y-auto">
          <nav className="flex flex-col items-center space-y-10 mt-4">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`font-serif-display text-5xl sm:text-6xl tracking-tight transition-all duration-500 transform ${
                    isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  } ${isActive ? "text-[#6E2A2A]" : "text-[#2A211B] hover:text-[#6E2A2A]"}`}
                  style={{ transitionDelay: `${isOpen ? 100 + idx * 100 : 0}ms` }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          <div 
            className={`mt-auto flex flex-col items-center gap-8 pt-12 border-t border-[#2A211B]/10 transition-all duration-700 transform ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${isOpen ? 500 : 0}ms` }}
          >
            <div className="flex gap-8">
              <a href={SALON_INFO.vkUrl} className="text-xs tracking-[0.15em] font-semibold uppercase text-[#2A211B] hover:text-[#6E2A2A] transition-colors">ВКонтакте</a>
              <a href={SALON_INFO.tgUrl} className="text-xs tracking-[0.15em] font-semibold uppercase text-[#2A211B] hover:text-[#6E2A2A] transition-colors">Telegram</a>
            </div>
            <a href={SALON_INFO.phoneLink} className="font-serif-display text-3xl text-[#2A211B] hover:text-[#6E2A2A] transition-colors">
              {SALON_INFO.phone}
            </a>
            <Link
              href="/kontakty#zapis"
              onClick={handleLinkClick}
              className="inline-flex items-center justify-center w-full max-w-[320px] px-8 py-5 bg-[#6E2A2A] text-white text-xs uppercase tracking-[0.15em] font-bold rounded-sm shadow-xl active:shadow-none transition-all duration-300 hover:-translate-y-1 hover:bg-[#5a2121]"
            >
              Записаться онлайн
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

