"use client";

import { CamperResponse } from "@/lib/api/campresApi";
import css from "./CarDetails.module.css";

import { getCarFeaturesArray } from "./getCarFeatures";

export default function CarDetailsList({ car }: { car: CamperResponse }) {
  const features = getCarFeaturesArray(car);

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
