"use client";

import { useState } from "react";

interface AccordionProps {
  items: {
    question: string;
    answer: string;
  }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = active === index;
        return (
          <div className={`accordion-item ${isOpen ? "is-open" : ""}`} key={item.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setActive(isOpen ? null : index)}
            >
              <span className="accordion-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="accordion-question">{item.question}</span>
              <span className="accordion-icon" aria-hidden="true" />
            </button>
            <div className="accordion-answer" aria-hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
