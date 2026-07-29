import Image from "next/image";
import { Master } from "@/constants/data";

interface MasterCardProps {
  master: Master;
  compact?: boolean;
}

export default function MasterCard({ master, compact = false }: MasterCardProps) {
  return (
    <article className={`master-card ${compact ? "master-card--compact" : ""}`}>
      <div className="master-card-photo">
        <Image
          src={master.image}
          alt={`${master.name}, ${master.role}`}
          fill
          sizes="(max-width: 700px) 84vw, (max-width: 1100px) 50vw, 33vw"
          className="cover-image"
        />
      </div>
      <div className="master-card-head">
        <div>
          <h3>{master.name}</h3>
          <p>{master.role}</p>
        </div>
        <span>{master.experience}</span>
      </div>
      {!compact && <p className="master-card-bio">{master.bio}</p>}
    </article>
  );
}
