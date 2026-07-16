import { PriceItem } from "@/constants/data";

interface PriceTableProps {
  items: PriceItem[];
}

export default function PriceTable({ items }: PriceTableProps) {
  return (
    <div className="w-full text-brand-dark">
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-end md:justify-between py-10 border-b border-brand-dark/10 group hover:border-brand-dark transition-colors"
          >
            <div className="flex-grow pr-0 sm:pr-8 mb-4 md:mb-0">
              <h4 className="font-serif-display text-2xl md:text-4xl text-brand-dark transition-opacity group-hover:opacity-60">
                {item.name}
              </h4>
              {item.note && (
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mt-4">
                  {item.note}
                </p>
              )}
            </div>
            <div className="flex-shrink-0">
              <span className="font-serif-display text-3xl md:text-5xl text-brand-dark">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Notice */}
      <div className="mt-16 flex justify-end">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark/50 max-w-sm text-right leading-relaxed">
          Точная стоимость процедур определяется индивидуально в зависимости от длины, густоты волос и расхода материалов.
        </p>
      </div>
    </div>
  );
}
