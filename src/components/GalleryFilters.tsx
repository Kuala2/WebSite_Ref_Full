"use client";

import { useState } from "react";
import WarmImage from "@/components/UI/WarmImage";
import { GALLERY_WORKS } from "@/constants/data";

const FILTERS = [
  { key: "all", name: "Все" },
  { key: "okrashivanie", name: "Окрашивание" },
  { key: "strizhki", name: "Стрижки" },
  { key: "nogti", name: "Ногти" },
  { key: "brovi", name: "Брови и перманент" },
];

export default function GalleryFilters() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredWorks = activeFilter === "all"
    ? GALLERY_WORKS
    : GALLERY_WORKS.filter((work) => work.category === activeFilter);

  return (
    <div className="space-y-16">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-4">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.key;
          return (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-8 py-3 text-[10px] uppercase tracking-[0.12em] transition-all duration-300 cursor-pointer ${
                isActive
                  ? "border-b border-brand-dark text-brand-dark"
                  : "border-b border-transparent text-brand-dark/50 hover:text-brand-dark"
              }`}
            >
              {filter.name}
            </button>
          );
        })}
      </div>

      {/* Grid of works */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWorks.map((work, index) => (
          <div
            key={index}
            className="group flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full mb-6">
              <WarmImage
                src={work.image}
                alt={work.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority={index < 4}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.12em] text-brand-accent">
                {FILTERS.find((f) => f.key === work.category)?.name}
              </span>
              <h4 className="font-serif-display text-2xl text-brand-dark">
                {work.title}
              </h4>
              <p className="text-sm text-brand-dark/70 font-light mt-1">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
