"use client";

import { useState } from "react";

export default function LazyMap() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="map-card">
      {!isLoaded ? (
        <div className="map-placeholder">
          <span>58</span>
          <div>
            <h3>Большая Покровская</h3>
            <p>Нижний Новгород · 5 минут от метро</p>
          </div>
          <button type="button" onClick={() => setIsLoaded(true)}>
            Открыть интерактивную карту
          </button>
        </div>
      ) : (
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=43.990392%2C56.312575&mode=whatshere&whatshere%5Bpoint%5D=43.990392%2C56.312575&whatshere%5Bzoom%5D=17&z=17"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Салон «Стенс» на карте"
        />
      )}
    </div>
  );
}
