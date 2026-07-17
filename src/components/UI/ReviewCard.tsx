import { Review } from "@/constants/data";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-8 p-8 bg-white rounded-sm shadow-sm hover:shadow-xl transform hover:-translate-y-[6px] transition-all duration-300">
      {/* Review Text */}
      <div className="relative">
        <span className="absolute -top-6 -left-4 text-8xl font-serif-display text-brand-bordeaux/10 select-none">
          &ldquo;
        </span>
        <p className="text-xl md:text-2xl text-brand-dark font-medium leading-relaxed relative z-10 font-italic-accent">
          {review.text}
        </p>
      </div>

      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-auto">
        <div className="flex flex-col gap-2 relative z-10">
          <h4 className="font-serif-display text-2xl text-brand-bordeaux">
            {review.name}
          </h4>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-bordeaux/80 mt-1">
            {review.procedure} <span className="mx-2 text-brand-dark/20">•</span> Мастер: {review.master}
          </p>
        </div>
      </div>
    </div>
  );
}
