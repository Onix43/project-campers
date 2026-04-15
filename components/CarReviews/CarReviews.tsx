import { Car } from "@/types/car";
import CarReviewForm from "./CarReviewForm";
import css from "./CarReviews.module.css";
import CarReviewItem from "./CarReviewItem";

interface CarReviewsProps {
  car: Car;
}

export default function CarReviews({ car }: CarReviewsProps) {
  return (
    <div className={css.reviewBlock}>
      <h2 className={css.reviewHeader}>Reviews</h2>
      <div className={css.bottomSection}>
        <ul className={css.reviewList}>
          {car.reviews.map((review) => (
            <CarReviewItem review={review} key={review.reviewer_name} />
          ))}
        </ul>
        <CarReviewForm camperId={car.id} />
      </div>
    </div>
  );
}
