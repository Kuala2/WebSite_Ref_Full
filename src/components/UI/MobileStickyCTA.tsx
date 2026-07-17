"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (~500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 left-0 right-0 z-50 md:hidden px-4 w-full flex justify-center pointer-events-none transition-all duration-500 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <Link 
        href="/kontakty#zapis" 
        className="pointer-events-auto block w-full max-w-sm bg-[#6E2A2A] text-white text-center py-4 rounded-sm shadow-2xl shadow-[#2A211B]/40 font-bold uppercase tracking-[0.15em] text-sm hover:bg-[#5a2121] transition-colors"
      >
        Записаться
      </Link>
    </div>
  );
}
