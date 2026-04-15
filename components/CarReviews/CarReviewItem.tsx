"use client";
import { CarReview } from "@/types/car";
import { BsStarFill } from "react-icons/bs";
import css from "./CarReviews.module.css";
import { getInitial } from "./reviewUtils";

interface CarReviewItemProps {
  review: CarReview;
}

export default function CarReviewItem({ review }: CarReviewItemProps) {
  const initial = getInitial(review.reviewer_name);
  const rating = review.reviewer_rating;

  return (
    <article className={css.reviewCard}>
      <div className={css.header}>
        <div className={css.avatar} aria-hidden="true">
          {initial}
        </div>

        <div className={css.info}>
          <h4 className={css.name}>{review.reviewer_name}</h4>
          <div
            className={css.rating}
            aria-label={`Rating: ${rating} out of 5 stars`}
          >
            {[...Array(5)].map((_, index) =>
              index < rating ? (
                <BsStarFill key={index} className={css.starFilled} />
              ) : (
                <BsStarFill key={index} className={css.starEmpty} />
              ),
            )}
          </div>
        </div>
      </div>

      <p className={css.comment}>{review.comment}</p>
    </article>
  );
}
