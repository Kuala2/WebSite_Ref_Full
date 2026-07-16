import { Review } from "@/constants/data";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-8 py-12 border-b border-brand-dark/10 group hover:border-brand-dark transition-colors">
      {/* Review Text */}
      <div className="relative">
        <span className="absolute -top-8 -left-4 text-8xl font-serif-display text-brand-dark/5 select-none">
          &ldquo;
        </span>
        <p className="text-xl md:text-2xl text-brand-dark font-normal leading-relaxed relative z-10 transition-opacity group-hover:opacity-80">
          {review.text}
        </p>
      </div>

      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-auto">
        <div className="flex flex-col gap-2">
          <h4 className="font-serif-display text-2xl text-brand-dark">
            {review.name}
          </h4>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark/60 mt-1">
            {review.procedure} <span className="mx-2">•</span> Мастер: {review.master}
          </p>
        </div>
      </div>
    </div>
  );
}
