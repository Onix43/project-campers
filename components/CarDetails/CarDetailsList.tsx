"use client";

import css from "./CarDetails.module.css";

import { getCarFeaturesArray } from "./getCarFeatures";
import { Car } from "@/types/car";

export default function CarDetailsList({ car }: { car: Car }) {
  const features = getCarFeaturesArray(car).slice(0, 6);

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {features.map((feature, index) => (
          <li key={index} className={css.item}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
