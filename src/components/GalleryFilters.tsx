"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_WORKS } from "@/constants/data";

const FILTERS = [
  { key: "all", name: "Все" },
  { key: "okrashivanie", name: "Окрашивание" },
  { key: "strizhki", name: "Стрижки" },
  { key: "manikyur-pedikyur", name: "Маникюр" },
  { key: "permanent", name: "Брови" },
];

export default function GalleryFilters() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredWorks =
    activeFilter === "all"
      ? GALLERY_WORKS
      : GALLERY_WORKS.filter((work) => work.category === activeFilter);

  return (
    <div className="portfolio">
      <div className="portfolio-filters" aria-label="Фильтр работ">
        {FILTERS.map((filter) => (
          <button
            key={filter.key}
            type="button"
            aria-pressed={activeFilter === filter.key}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredWorks.map((work, index) => (
          <article className="portfolio-card" key={`${work.title}-${work.image}`}>
            <div className="portfolio-photo">
              <Image
                src={work.image}
                alt={work.title}
                fill
                priority={index < 3}
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                className="cover-image"
              />
            </div>
            <div className="portfolio-copy">
              <span>
                {FILTERS.find((filter) => filter.key === work.category)?.name}
              </span>
              <h2>{work.title}</h2>
              <p>{work.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
