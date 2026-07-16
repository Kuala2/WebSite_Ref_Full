import Image from "next/image";
import { Master } from "@/constants/data";

interface MasterCardProps {
  master: Master;
}

export default function MasterCard({ master }: MasterCardProps) {
  return (
    <div className="flex flex-col group w-full">
      {/* Photo Container */}
      <div className="relative aspect-[4/5] w-full mb-8 overflow-hidden rounded-2xl">
        <Image
          src={master.image}
          alt={`Мастер салона красоты Стенс: ${master.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-all duration-700"
          priority={false}
        />
      </div>

      {/* Info Block */}
      <div className="flex flex-col gap-4 relative">
        <div className="flex justify-between items-end gap-4 border-b border-brand-dark/20 pb-4">
          <h3 className="font-serif-display text-4xl text-brand-dark leading-none">
            {master.name}
          </h3>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark/60 shrink-0">
            {master.experience}
          </span>
        </div>
        
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent mt-2">
          {master.role}
        </p>
        
        <p className="text-lg text-brand-dark/90 font-normal leading-relaxed mt-2">
          {master.bio}
        </p>
      </div>
    </div>
  );
}
