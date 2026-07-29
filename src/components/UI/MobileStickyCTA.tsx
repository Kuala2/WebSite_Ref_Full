"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
      <Link href="/kontakty#zapis">
        Записаться
        <span aria-hidden="true">↗</span>
      </Link>
    </div>
  );
}
