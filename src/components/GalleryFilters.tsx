"use client";

import { useState } from "react";
import WarmImage from "@/components/UI/WarmImage";
import { GALLERY_WORKS } from "@/constants/data";

const FILTERS = [
 { key: "all", name: "Все работы" },
 { key: "okrashivanie", name: "Окрашивание волос" },
 { key: "strizhki", name: "Стрижки и укладки" },
 { key: "manikyur-pedikyur", name: "Маникюр и педикюр" },
 { key: "permanent", name: "Брови и перманент" },
];

export default function GalleryFilters() {
 const [activeFilter, setActiveFilter] = useState("all");

 const filteredWorks = activeFilter === "all"
 ? GALLERY_WORKS
 : GALLERY_WORKS.filter((work) => work.category === activeFilter);

 return (
 <div className="space-y-16">
  {/* Filter Chips */}
  <div className="w-full max-w-4xl mx-auto px-4">
    <div className="flex overflow-x-auto no-scrollbar gap-3 pb-2 items-center lg:justify-center">
      {FILTERS.map((filter) => {
        const isActive = activeFilter === filter.key;
        return (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium tracking-[0.05em] transition-all duration-300 cursor-pointer ${
              isActive
                ? "bg-brand-bordeaux text-brand-cream shadow-md"
                : "bg-brand-dark/5 text-brand-dark hover:bg-brand-dark/10"
            }`}
          >
            {filter.name}
          </button>
        );
      })}
    </div>
  </div>

 {/* Grid of works */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gallery-image-filter">
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
 className="object-cover hover:-0 transition-all duration-700"
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
