"use client";

import { useState } from "react";
import { PriceItem } from "@/constants/data";

interface PriceAccordionProps {
  prices: PriceItem[];
}

export default function PriceAccordion({ prices }: PriceAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`price-accordion ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
      >
        <span>{isOpen ? "Скрыть цены" : "Показать цены"}</span>
        <span className="price-accordion-icon" aria-hidden="true" />
      </button>
      <div className="price-accordion-panel" aria-hidden={!isOpen}>
        <div>
          {prices.map((item) => (
            <div className="price-accordion-row" key={`${item.name}-${item.price}`}>
              <span>{item.name}</span>
              <strong>{item.price}</strong>
              {item.note && <small>{item.note}</small>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
