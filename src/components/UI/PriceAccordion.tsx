"use client";

import { useState } from "react";
import { PriceItem } from "@/constants/data";

interface PriceAccordionProps {
  prices: PriceItem[];
}

export default function PriceAccordion({ prices }: PriceAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-xs font-semibold uppercase tracking-[0.12em] border-b border-brand-dark pb-1 hover:text-brand-accent hover:border-brand-accent transition-all group flex items-center gap-2 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>Прайс-лист</span>
        <span className="flex-shrink-0 transition-transform duration-300 transform group-hover:scale-110">
          {isOpen ? (
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M20 12H4" />
            </svg>
          ) : (
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          )}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          {prices.map((item, index) => (
            <div key={index} className="flex justify-between items-start gap-4 border-b border-brand-dark/10 pb-4 last:border-0">
              <div className="flex flex-col gap-1">
                <span className="text-sm md:text-base text-brand-dark font-medium">{item.name}</span>
                {item.note && (
                  <span className="text-xs text-brand-dark/60 font-serif italic">{item.note}</span>
                )}
              </div>
              <span className="text-sm md:text-base font-serif-display text-brand-accent whitespace-nowrap shrink-0">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
