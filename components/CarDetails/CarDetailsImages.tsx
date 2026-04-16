"use client";
import Image from "next/image";
import { useState } from "react";
import css from "./CarDetails.module.css";
import { CamperResponse } from "@/lib/api/campresApi";

interface CarDetailsImagesProps {
  car: CamperResponse;
}

export default function CarDetailsImages({ car }: CarDetailsImagesProps) {
  const [active, setActive] = useState(car.gallery[0].original);
  return (
    <>
      <div className={css.originalImageWrapper}>
        <Image
          src={active}
          alt={car.name}
          fill
          sizes="638px"
          className={css.image}
          priority
        />
      </div>
      <ul className={css.imageList}>
        {car.gallery.map((image) => (
          <li
            key={image.thumb}
            className={`${css.thumbImageWrapper} ${image.original === active ? css.isActive : ""}`}
            onClick={() => setActive(image.original)}
          >
            <Image
              src={image.thumb}
              alt={car.name}
              fill
              loading="eager"
              sizes="136px"
              className={css.image}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
