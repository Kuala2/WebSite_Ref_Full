"use client";

import { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-dark py-6 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span className="font-serif-display text-2xl md:text-4xl text-brand-dark group-hover:opacity-60 transition-opacity">
          {question}
        </span>
        <span className="ml-6 flex-shrink-0 text-brand-dark transition-transform duration-500 transform group-hover:scale-110">
          {isOpen ? (
            <svg className="w-8 h-8 font-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M20 12H4" />
            </svg>
          ) : (
            <svg className="w-8 h-8 font-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M12 4v16m8-8H4" />
            </svg>
          )}
        </span>
      </button>
      
      {/* Content wrapper with collapse transition */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-base md:text-lg text-brand-dark leading-relaxed max-w-2xl font-normal">
          {answer}
        </p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: {
    question: string;
    answer: string;
  }[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-0 w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
