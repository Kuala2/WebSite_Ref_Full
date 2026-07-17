"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SALON_INFO } from "@/constants/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Услуги", href: "#uslugi" },
    { name: "Работы", href: "#raboty" },
    { name: "О салоне", href: "#komanda" },
    { name: "Контакты", href: "#zapis" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F4EFE7] text-[#2A211B] transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-flex items-center justify-center p-2 text-[#2A211B] min-h-[44px] min-w-[44px]"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Меню</span>
              {isOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full h-[100svh] bg-[#F4EFE7] flex flex-col pt-12 px-6">
          <nav className="flex flex-col space-y-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`font-serif-display text-4xl transition-colors ${
                    isActive ? "text-[#6E2A2A]" : "text-[#2A211B]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="mt-24 flex flex-col gap-8">
            <a href={SALON_INFO.phoneLink} className="text-sm tracking-[0.12em] uppercase text-[#2A211B]">
              {SALON_INFO.phone}
            </a>
            <Link
              href="/kontakty#zapis"
              onClick={handleLinkClick}
              className="inline-flex items-center justify-center w-full px-6 py-4 bg-[#6E2A2A] text-white text-xs uppercase tracking-[0.12em] font-bold rounded-sm shadow-sm active:shadow-none transition-all duration-300"
            >
              Записаться онлайн
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

