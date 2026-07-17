"use client";
import { useState } from "react";

export default function LazyMap() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-[400px] md:h-[500px] w-full bg-[#EFE8DC] border border-brand-dark/10 rounded-sm overflow-hidden flex items-center justify-center">
      {!isLoaded ? (
        <div className="flex flex-col items-center gap-6 text-center p-6">
          <div className="w-16 h-16 rounded-full bg-brand-dark/5 flex items-center justify-center text-brand-accent">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div className="space-y-2">
            <h4 className="font-serif-display text-2xl text-brand-dark">г. Нижний Новгород</h4>
            <p className="text-brand-dark/80 font-medium text-lg">ул. Большая Покровская, 58</p>
          </div>
          <button 
            onClick={() => setIsLoaded(true)}
            className="mt-2 bg-brand-dark hover:bg-brand-accent text-brand-cream px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] transition-colors rounded-sm shadow-md cursor-pointer"
          >
            Загрузить интерактивную карту
          </button>
        </div>
      ) : (
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=43.990392%2C56.312575&mode=whatshere&whatshere%5Bpoint%5D=43.990392%2C56.312575&whatshere%5Bzoom%5D=17&z=17"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Салон Стенс на карте Яндекс"
          className="absolute inset-0 w-full h-full opacity-100 transition-opacity duration-500"
        ></iframe>
      )}
    </div>
  );
}
