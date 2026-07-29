import { Review } from "@/constants/data";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="review-card">
      <div className="review-stars" aria-label={`${review.rating} из 5`}>
        {"★".repeat(review.rating)}
      </div>
      <blockquote>{review.text}</blockquote>
      <div className="review-author">
        <strong>{review.name}</strong>
        <span>{review.procedure}</span>
        <span>Мастер: {review.master}</span>
      </div>
    </article>
  );
}
