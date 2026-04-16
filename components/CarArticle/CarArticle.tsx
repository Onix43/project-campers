import { Car } from "@/types/car";
import Image from "next/image";
import css from "./CarArticle.module.css";
import Button from "../Button/Button";
import { FaStar } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import { BsFuelPump, BsFillCarFrontFill, BsDiagram3 } from "react-icons/bs";
import { formatString } from "../CarDetails/getCarFeatures";

interface CarArticleProps {
  car: Car;
}

export default function CarArticle({ car }: CarArticleProps) {
  return (
    <article className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          src={car.coverImage}
          alt={car.name}
          fill
          sizes="100 vw"
          className={css.img}
        />
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <div className={css.titleRow}>
            <h3 className={css.name}>{car.name}</h3>
            <div className={css.priceWrapper}>
              <span className={css.price}>€{car.price}</span>
            </div>
          </div>

          <div className={css.infoRow}>
            <div className={css.rating}>
              <FaStar className={css.starIcon} />
              <span>
                {car.rating} ({car.totalReviews} Reviews)
              </span>
            </div>
            <div className={css.location}>
              <CiMap className={css.mapIcon} />
              <span>{car.location}</span>
            </div>
          </div>
        </div>

        <p className={css.description}>{car.description}</p>

        <ul className={css.tags}>
          <li className={css.tag}>
            <BsFuelPump className={css.tagIcon} />
            {car.engine}
          </li>
          <li className={css.tag}>
            <BsDiagram3 className={css.tagIcon} />
            {car.transmission}
          </li>
          <li className={css.tag}>
            <BsFillCarFrontFill className={css.tagIcon} />
            {formatString(car.form)}
          </li>
        </ul>

        <Button href={`/catalog/${car.id}`}>Show more</Button>
      </div>
    </article>
  );
}
