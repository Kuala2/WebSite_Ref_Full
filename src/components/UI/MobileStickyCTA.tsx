"use client";

import { useEffect, useState } from "react";
import { SALON_INFO } from "@/constants/data";

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`mobile-sticky ${isVisible ? "is-visible" : ""}`}>
      <a href={SALON_INFO.bookingUrl}>
        Записаться
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
