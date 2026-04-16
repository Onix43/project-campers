import CarReviewForm from "./CarReviewForm";
import css from "./CarReviews.module.css";
import CarReviewItem from "./CarReviewItem";
import { ReviewResponse } from "@/lib/api/campresApi";

interface CarReviewsProps {
  reviews: ReviewResponse[];
  camperId: string;
}

export default function CarReviews({ reviews, camperId }: CarReviewsProps) {
  return (
    <section className={css.reviewBlock}>
      <h2 className={css.reviewHeader}>Reviews</h2>
      <div className={css.bottomSection}>
        <ul className={css.reviewList}>
          {reviews.map((review) => (
            <CarReviewItem review={review} key={review.id} />
          ))}
        </ul>
        <CarReviewForm camperId={camperId} />
      </div>
    </section>
  );
}
