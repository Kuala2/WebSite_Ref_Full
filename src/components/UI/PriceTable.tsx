import { PriceItem } from "@/constants/data";

interface PriceTableProps {
  items: PriceItem[];
}

export default function PriceTable({ items }: PriceTableProps) {
  return (
    <div className="price-table">
      {items.map((item) => (
        <div className="price-row" key={`${item.name}-${item.price}`}>
          <div>
            <h3>{item.name}</h3>
            {item.note && <p>{item.note}</p>}
          </div>
          <strong>{item.price}</strong>
        </div>
      ))}
      <p className="price-notice">
        Точная стоимость зависит от длины, густоты волос и расхода материалов.
        Мастер назовёт её до начала процедуры.
      </p>
    </div>
  );
}
